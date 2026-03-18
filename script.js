// ==================== 全域變數 ====================
let currentTab = 'day1';
let checklistData = {};
let searchResults = [];

// ==================== 初始化 ====================
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // 載入儲存的打勾狀態
    loadChecklistData();

    // 生成導航列
    generateDayNavigation();

    // 設置事件監聽
    setupEventListeners();

    // 載入第一天內容
    switchTab('day1');

    // 更新進度
    updateProgress();
}

// ==================== 生成導航 ====================
function generateDayNavigation() {
    const dayNav = document.getElementById('day-nav');

    tripData.days.forEach((day, index) => {
        const button = document.createElement('button');
        button.className = 'nav-item';
        button.dataset.tab = `day${index + 1}`;

        const icon = document.createElement('i');
        icon.className = 'fas fa-calendar-day';

        const span = document.createElement('span');
        span.textContent = `Day ${index + 1} - ${day.date}`;

        button.appendChild(icon);
        button.appendChild(span);
        dayNav.appendChild(button);
    });
}

// ==================== 事件監聽 ====================
function setupEventListeners() {
    // 漢堡選單
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const closeMenu = document.getElementById('close-menu');

    function closeMenuFunc() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    }

    menuToggle.addEventListener('click', () => {
        sidebar.classList.add('active');
        overlay.classList.add('active');
    });

    closeMenu.addEventListener('click', closeMenuFunc);
    overlay.addEventListener('click', closeMenuFunc);

    // 導航按鈕
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function() {
            const tab = this.dataset.tab;
            switchTab(tab);
            // 在手機版點選後自動關閉選單
            if (window.innerWidth < 768) {
                closeMenuFunc();
            }
        });
    });

    // 搜尋功能
    const searchInput = document.getElementById('search-input');
    const clearButton = document.getElementById('clear-search');

    searchInput.addEventListener('input', function() {
        const query = this.value.trim();
        if (query) {
            clearButton.style.display = 'block';
            performSearch(query);
        } else {
            clearButton.style.display = 'none';
            switchTab(currentTab);
        }
    });

    clearButton.addEventListener('click', function() {
        searchInput.value = '';
        this.style.display = 'none';
        switchTab(currentTab);
    });
}

// ==================== 切換標籤 ====================
function switchTab(tabName) {
    currentTab = tabName;

    // 更新導航高亮
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.tab === tabName) {
            item.classList.add('active');
        }
    });

    // 載入內容
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = '<div class="loading"><i class="fas fa-spinner fa-spin"></i> 載入中...</div>';

    setTimeout(() => {
        if (tabName.startsWith('day')) {
            const dayIndex = parseInt(tabName.replace('day', '')) - 1;
            renderDayContent(dayIndex);
        } else if (tabName === 'flight') {
            renderFlightInfo();
        } else if (tabName === 'checklist') {
            renderChecklist();
        } else if (tabName === 'tips') {
            renderTips();
        } else if (tabName === 'souvenirs') {
            renderSouvenirs();
        } else if (tabName === 'must-eat') {
            renderMustEat();
        }

        contentArea.classList.add('fade-in');
    }, 200);
}

// ==================== 渲染每日行程 ====================
function renderDayContent(dayIndex) {
    const day = tripData.days[dayIndex];
    const contentArea = document.getElementById('content-area');

    let html = `
        <div class="day-header">
            <div class="day-title">Day ${dayIndex + 1}: ${day.date} - ${day.title}</div>
            <div class="day-info">
                <div class="day-info-item">
                    <i class="fas fa-car"></i>
                    <span>行駛距離：${day.distance || '待定'}</span>
                </div>
                <div class="day-info-item">
                    <i class="fas fa-campground"></i>
                    <span>住宿：${day.accommodationLink ? `<a href="${day.accommodationLink}" target="_blank" style="color: var(--earth-brown); text-decoration: underline;">${day.accommodation || '待定'}</a>` : (day.accommodation || '待定')}</span>
                </div>
            </div>
        </div>
    `;

    // 路線圖連結
    if (day.routeMap) {
        html += `
            <div style="margin: 1rem 0;">
                <a href="${day.routeMap}" target="_blank" class="map-link" style="display: inline-flex; font-size: 0.95rem; padding: 0.6rem 1rem;">
                    <i class="fas fa-route"></i> 查看今日路線圖
                </a>
            </div>
        `;
    }

    // 景點活動
    if (day.attractions && day.attractions.length > 0) {
        html += `<div class="section-title"><i class="fas fa-map-marked-alt"></i> 景點活動</div>`;
        html += '<div class="place-list">';
        day.attractions.forEach((place, idx) => {
            const placeId = `day${dayIndex + 1}-attraction-${idx}`;
            const isChecked = checklistData[placeId] || false;

            html += `
                <div class="place-item ${isChecked ? 'checked' : ''}" data-place-id="${placeId}">
                    <div class="place-header">
                        <div class="place-name">
                            ${place.highlight ? '<span class="place-badge">必去</span>' : ''}
                            ${place.name}
                        </div>
                        <div class="place-actions">
                            <input type="checkbox" class="checkbox" data-place-id="${placeId}" ${isChecked ? 'checked' : ''}>
                            ${place.mapLink ? `<a href="${place.mapLink}" target="_blank" class="map-link"><i class="fas fa-map-marker-alt"></i> 地圖</a>` : ''}
                        </div>
                    </div>
                    <div class="place-details">
                        ${place.duration ? `<div><i class="fas fa-clock"></i> ${place.duration}</div>` : ''}
                        ${place.note ? `<div><i class="fas fa-info-circle"></i> ${place.note}</div>` : ''}
                    </div>
                </div>
            `;
        });
        html += '</div>';
    }

    // 美食補給
    if (day.food && day.food.length > 0) {
        html += `<div class="section-title"><i class="fas fa-utensils"></i> 美食補給</div>`;
        html += '<div class="place-list">';
        day.food.forEach((place, idx) => {
            const placeId = `day${dayIndex + 1}-food-${idx}`;
            const isChecked = checklistData[placeId] || false;

            html += `
                <div class="place-item ${isChecked ? 'checked' : ''}" data-place-id="${placeId}">
                    <div class="place-header">
                        <div class="place-name">${place.name}</div>
                        <div class="place-actions">
                            <input type="checkbox" class="checkbox" data-place-id="${placeId}" ${isChecked ? 'checked' : ''}>
                            ${place.mapLink ? `<a href="${place.mapLink}" target="_blank" class="map-link"><i class="fas fa-map-marker-alt"></i> 地圖</a>` : ''}
                        </div>
                    </div>
                    ${place.note ? `<div class="place-details"><div><i class="fas fa-info-circle"></i> ${place.note}</div></div>` : ''}
                </div>
            `;
        });
        html += '</div>';
    }

    contentArea.innerHTML = html;

    // 添加打勾事件
    document.querySelectorAll('.checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const placeId = this.dataset.placeId;
            handleCheckboxChange(placeId, this.checked);
        });
    });
}

// ==================== 渲染航班資訊 ====================
function renderFlightInfo() {
    const contentArea = document.getElementById('content-area');

    let html = `
        <div class="day-header">
            <div class="day-title"><i class="fas fa-plane"></i> 航班資訊</div>
        </div>

        <div class="section-title">訂位代號</div>
        <p>PNR: <strong>9B8GFM</strong> (芬航段)</p>
        <p>乘客: <strong>Chiu Chungchi Mr</strong></p>

        <div class="section-title">去程航班</div>
        <table class="info-table">
            <thead>
                <tr>
                    <th>日期</th>
                    <th>航班</th>
                    <th>航線</th>
                    <th>時間</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>3/20 (五)</td>
                    <td>CI0909</td>
                    <td>台北 → 香港</td>
                    <td>10:45 - 13:00</td>
                </tr>
                <tr>
                    <td>3/20 (五)</td>
                    <td>AY0100</td>
                    <td>香港 → 赫爾辛基</td>
                    <td>21:45 - 05:45 (+1)</td>
                </tr>
                <tr>
                    <td>3/21 (六)</td>
                    <td>AY0991</td>
                    <td>赫爾辛基 → 雷克雅維克</td>
                    <td>07:20 - 09:45</td>
                </tr>
            </tbody>
        </table>

        <div class="warning-box">
            <h3><i class="fas fa-exclamation-triangle"></i> 轉機提醒</h3>
            <p>去程 HEL 轉機時間僅 1.5 小時，極度緊湊！請直奔 Passport Control。</p>
        </div>

        <div class="section-title">回程航班</div>
        <table class="info-table">
            <thead>
                <tr>
                    <th>日期</th>
                    <th>航班</th>
                    <th>航線</th>
                    <th>時間</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>4/03 (五)</td>
                    <td>AY0992</td>
                    <td>雷克雅維克 → 赫爾辛基</td>
                    <td>08:35 - 15:00</td>
                </tr>
                <tr>
                    <td>4/04 (六)</td>
                    <td>AY0099</td>
                    <td>赫爾辛基 → 香港</td>
                    <td>00:35 - 17:40</td>
                </tr>
                <tr>
                    <td>4/06 (一)</td>
                    <td>CI0916</td>
                    <td>香港 → 台北</td>
                    <td>17:35 - 19:25</td>
                </tr>
            </tbody>
        </table>

        <div class="tip-box">
            <h3><i class="fas fa-lightbulb"></i> 行程亮點</h3>
            <p>回程香港中停 2 天，可以休息補貨、購物！</p>
        </div>
    `;

    contentArea.innerHTML = html;
}

// ==================== 渲染行前準備 ====================
function renderChecklist() {
    const contentArea = document.getElementById('content-area');

    let html = `
        <div class="day-header">
            <div class="day-title"><i class="fas fa-check-square"></i> 行前準備清單</div>
        </div>
    `;

    tripData.checklist.forEach(section => {
        html += `<div class="section-title">${section.category}</div>`;
        html += '<div class="checklist-section">';

        section.items.forEach((item, idx) => {
            const itemId = `checklist-${section.category}-${idx}`;
            const isChecked = checklistData[itemId] || false;

            html += `
                <div class="checklist-item ${isChecked ? 'checked' : ''}">
                    <input type="checkbox" data-item-id="${itemId}" ${isChecked ? 'checked' : ''}>
                    <span>${item}</span>
                </div>
            `;
        });

        html += '</div>';
    });

    contentArea.innerHTML = html;

    // 添加打勾事件
    document.querySelectorAll('.checklist-item input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const itemId = this.dataset.itemId;
            handleCheckboxChange(itemId, this.checked);
            this.parentElement.classList.toggle('checked', this.checked);
        });
    });
}

// ==================== 渲染注意事項 ====================
function renderTips() {
    const contentArea = document.getElementById('content-area');

    let html = `
        <div class="day-header">
            <div class="day-title"><i class="fas fa-lightbulb"></i> 注意事項與實用資訊</div>
        </div>

        <div class="warning-box">
            <h3>🎯 最重要的 5 件事</h3>
            <ol style="padding-left: 1.5rem; margin-top: 1rem; line-height: 2;">
                <li><strong>每天查路況</strong> - road.is 和 safetravel.is</li>
                <li><strong>開車門要小心風</strong> - 車門被吹彎要賠 USD 1000+</li>
                <li><strong>Day 1 Costco 大採購</strong> - 後面超市越來越少</li>
                <li><strong>信用卡 PIN Code</strong> - 加油站自助付款必備</li>
                <li><strong>黑沙灘不要靠近海浪</strong> - 每年都有人被捲走</li>
            </ol>
        </div>
    `;

    tripData.tips.forEach(section => {
        html += `<div class="section-title">${section.title}</div>`;
        html += `<div class="tip-box">${section.content}</div>`;
    });

    contentArea.innerHTML = html;
}

// ==================== 搜尋功能 ====================
function performSearch(query) {
    const results = [];
    const lowerQuery = query.toLowerCase();

    tripData.days.forEach((day, dayIndex) => {
        // 搜尋景點
        if (day.attractions) {
            day.attractions.forEach((place, placeIndex) => {
                if (place.name.toLowerCase().includes(lowerQuery) ||
                    (place.note && place.note.toLowerCase().includes(lowerQuery))) {
                    results.push({
                        day: dayIndex + 1,
                        type: 'attraction',
                        place: place
                    });
                }
            });
        }

        // 搜尋美食
        if (day.food) {
            day.food.forEach((place, placeIndex) => {
                if (place.name.toLowerCase().includes(lowerQuery) ||
                    (place.note && place.note.toLowerCase().includes(lowerQuery))) {
                    results.push({
                        day: dayIndex + 1,
                        type: 'food',
                        place: place
                    });
                }
            });
        }
    });

    displaySearchResults(results, query);
}

function displaySearchResults(results, query) {
    const contentArea = document.getElementById('content-area');

    let html = `
        <div class="day-header">
            <div class="day-title"><i class="fas fa-search"></i> 搜尋結果</div>
            <div class="day-info">找到 ${results.length} 個結果</div>
        </div>
    `;

    if (results.length === 0) {
        html += '<p style="text-align: center; margin-top: 2rem; color: var(--text-gray);">沒有找到符合的結果</p>';
    } else {
        html += '<div class="place-list">';
        results.forEach(result => {
            const highlightedName = highlightText(result.place.name, query);
            html += `
                <div class="place-item">
                    <div class="place-header">
                        <div class="place-name">
                            <span class="place-badge">Day ${result.day}</span>
                            ${highlightedName}
                        </div>
                        ${result.place.mapLink ? `<a href="${result.place.mapLink}" target="_blank" class="map-link"><i class="fas fa-map-marker-alt"></i> 地圖</a>` : ''}
                    </div>
                    ${result.place.note ? `<div class="place-details"><div>${result.place.note}</div></div>` : ''}
                    <button class="map-link" style="margin-top: 0.5rem;" onclick="switchTab('day${result.day}')">
                        <i class="fas fa-arrow-right"></i> 查看完整行程
                    </button>
                </div>
            `;
        });
        html += '</div>';
    }

    contentArea.innerHTML = html;
}

function highlightText(text, query) {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}

// ==================== 打勾功能 ====================
function handleCheckboxChange(id, checked) {
    checklistData[id] = checked;
    saveChecklistData();
    updateProgress();

    // 更新對應的 place-item
    const placeItem = document.querySelector(`[data-place-id="${id}"]`);
    if (placeItem) {
        placeItem.classList.toggle('checked', checked);
    }

    // 更新導航完成狀態
    updateDayCompletionStatus();
}

function loadChecklistData() {
    const saved = localStorage.getItem('icelandTripChecklist');
    if (saved) {
        checklistData = JSON.parse(saved);
    }
}

function saveChecklistData() {
    localStorage.setItem('icelandTripChecklist', JSON.stringify(checklistData));
}

// ==================== 進度追蹤 ====================
function updateProgress() {
    // 計算已完成的天數
    let completedDays = 0;
    let totalPlaces = 0;
    let checkedPlaces = 0;

    tripData.days.forEach((day, dayIndex) => {
        let dayTotal = 0;
        let dayChecked = 0;

        // 計算景點
        if (day.attractions) {
            day.attractions.forEach((place, idx) => {
                const placeId = `day${dayIndex + 1}-attraction-${idx}`;
                dayTotal++;
                totalPlaces++;
                if (checklistData[placeId]) {
                    dayChecked++;
                    checkedPlaces++;
                }
            });
        }

        // 計算美食
        if (day.food) {
            day.food.forEach((place, idx) => {
                const placeId = `day${dayIndex + 1}-food-${idx}`;
                dayTotal++;
                totalPlaces++;
                if (checklistData[placeId]) {
                    dayChecked++;
                    checkedPlaces++;
                }
            });
        }

        // 如果該天完成度超過 80%，視為已完成
        if (dayTotal > 0 && (dayChecked / dayTotal) >= 0.8) {
            completedDays++;
        }
    });

    // 更新顯示
    const progressText = document.getElementById('progress-text');
    const progressPercent = document.getElementById('progress-percent');
    const progressFill = document.getElementById('progress-fill');

    const percentage = totalPlaces > 0 ? Math.round((checkedPlaces / totalPlaces) * 100) : 0;

    progressText.textContent = `${completedDays}/14 天`;
    progressPercent.textContent = `${percentage}%`;
    progressFill.style.width = `${percentage}%`;
}

function updateDayCompletionStatus() {
    tripData.days.forEach((day, dayIndex) => {
        let dayTotal = 0;
        let dayChecked = 0;

        // 計算景點和美食的完成數
        if (day.attractions) {
            day.attractions.forEach((place, idx) => {
                const placeId = `day${dayIndex + 1}-attraction-${idx}`;
                dayTotal++;
                if (checklistData[placeId]) dayChecked++;
            });
        }

        if (day.food) {
            day.food.forEach((place, idx) => {
                const placeId = `day${dayIndex + 1}-food-${idx}`;
                dayTotal++;
                if (checklistData[placeId]) dayChecked++;
            });
        }

        // 更新導航按鈕狀態
        const navButton = document.querySelector(`[data-tab="day${dayIndex + 1}"]`);
        if (navButton && dayTotal > 0 && (dayChecked / dayTotal) >= 0.8) {
            navButton.classList.add('completed');
        } else if (navButton) {
            navButton.classList.remove('completed');
        }
    });
}

// ==================== 渲染必買伴手禮 ====================
function renderSouvenirs() {
    const contentArea = document.getElementById('content-area');

    let html = `
        <div class="day-header">
            <div class="day-title"><i class="fas fa-gift"></i> 必買伴手禮推薦</div>
        </div>
    `;

    tripData.souvenirs.forEach(section => {
        html += `<div class="section-title">${section.category}</div>`;

        section.items.forEach(item => {
            html += `
                <div class="tip-box" style="margin-bottom: 1rem;">
                    <h3 style="color: var(--dark-brown); margin-bottom: 0.5rem; font-size: 1.05rem;">${item.name}</h3>
                    <div style="display: flex; flex-direction: column; gap: 0.3rem; font-size: 0.9rem;">
                        <div><strong>💰 價格：</strong>${item.price}</div>
                        <div><strong>🏪 哪裡買：</strong>${item.where}</div>
                        <div><strong>📝 備註：</strong>${item.note}</div>
                    </div>
                </div>
            `;
        });
    });

    html += `
        <div class="warning-box">
            <h3><i class="fas fa-exclamation-triangle"></i> 購物提醒</h3>
            <ul style="padding-left: 1.5rem; line-height: 2;">
                <li><strong>機場免稅店</strong>可買酒類、巧克力、保養品，出境前最後機會</li>
                <li><strong>羊毛衣</strong>建議在 Vík 或跳蚤市場買，比雷克雅維克市區便宜 30-50%</li>
                <li><strong>魚油、魚子醬</strong>超市就有賣，品質好又便宜（Bónus 最便宜）</li>
                <li><strong>超市採購</strong>推薦 Bónus 買巧克力、Skyr、魚乾、魚子醬</li>
                <li>退稅門檻 <strong>6000 ISK</strong>，機場辦理退稅（約 15% 退稅率）</li>
                <li><strong>跳蚤市場 Kolaportið</strong>（週六日 11:00-17:00）可挖寶二手羊毛衣、試吃發酵鯊魚</li>
            </ul>
        </div>
    `;

    contentArea.innerHTML = html;
}

// ==================== 渲染必吃美食 ====================
function renderMustEat() {
    const contentArea = document.getElementById('content-area');

    let html = `
        <div class="day-header">
            <div class="day-title"><i class="fas fa-utensils"></i> 必吃美食推薦</div>
        </div>
    `;

    tripData.mustEat.forEach(section => {
        html += `<div class="section-title">${section.category}</div>`;

        section.items.forEach(item => {
            const borderColor = item.highlight ? 'var(--olive-green)' : 'var(--sand-beige)';
            const bgColor = item.highlight ? '#F0F5EB' : 'var(--warm-beige)';

            html += `
                <div style="background: ${bgColor}; border-left: 4px solid ${borderColor}; border-radius: 8px; padding: 1rem; margin-bottom: 1rem;">
                    <h3 style="color: var(--dark-brown); margin-bottom: 0.5rem; font-size: 1.05rem;">
                        ${item.name} ${item.highlight ? '<span style="background: var(--terracotta); color: white; padding: 0.2rem 0.5rem; border-radius: 10px; font-size: 0.7rem; margin-left: 0.5rem;">必吃</span>' : ''}
                    </h3>
                    <div style="display: flex; flex-direction: column; gap: 0.3rem; font-size: 0.9rem; color: var(--text-light);">
                        <div><strong>🏪 餐廳：</strong>${item.restaurant}</div>
                        <div><strong>💰 價格：</strong>${item.price}</div>
                        <div><strong>📝 推薦：</strong>${item.note}</div>
                    </div>
                </div>
            `;
        });
    });

    html += `
        <div class="warning-box">
            <h3><i class="fas fa-exclamation-triangle"></i> 用餐提醒</h3>
            <ul style="padding-left: 1.5rem; line-height: 2;">
                <li><strong>Höfn 龍蝦</strong>建議事先訂位（Pakkhús、Humarhöfnin 很熱門）</li>
                <li><strong>熱門餐廳</strong>午餐比晚餐便宜 20-30%</li>
                <li><strong>超市自煮</strong>是省錢王道，Costco 買肉回營地烤最划算</li>
                <li>冰島<strong>不需給小費</strong>，帳單已含服務費</li>
                <li><strong>自來水免費且可生飲</strong>，不用買瓶裝水（世界最純淨）</li>
                <li><strong>魚子醬抹醬、Skyr 優格</strong>超市買超便宜，當地人每天吃</li>
                <li><strong>發酵鯊魚</strong>可在跳蚤市場免費試吃（記得配 Brennivín 黑死酒壓味道）</li>
            </ul>
        </div>

        <div class="tip-box">
            <h3><i class="fas fa-lightbulb"></i> 省錢攻略</h3>
            <ul style="padding-left: 1.5rem; line-height: 2;">
                <li><strong>Day 1 Costco</strong> 大採購：羊排、牛排、雞腿超便宜，回營地自己烤</li>
                <li><strong>超市熟食</strong>：Bónus 有便宜的炸雞、披薩（約 1000 ISK）</li>
                <li><strong>加油站熱食</strong>：N1 的熱狗、漢堡比餐廳便宜（500-800 ISK）</li>
                <li><strong>自備泡麵</strong>：台灣帶幾包泡麵去，營地煮超方便</li>
                <li><strong>午餐特惠</strong>：很多餐廳中午有 Today's Special（比晚餐便宜一半）</li>
            </ul>
        </div>
    `;

    contentArea.innerHTML = html;
}
