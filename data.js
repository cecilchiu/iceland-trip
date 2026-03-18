// 冰島 14 天露營車環島旅行數據
const tripData = {
    // 每日行程
    days: [
        // Day 1
        {
            date: "3/21 (六)",
            title: "抵達、補給與雷克雅維克",
            distance: "75 km",
            accommodation: "Reykjavík Eco Campsite",
            routeMap: "https://maps.app.goo.gl/3VVbeRyASwQgQppz6",
            attractions: [
                {
                    name: "凱夫拉維克國際機場 (KEF)",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=63.9948577,-22.623944",
                    duration: "起點",
                    note: "09:45 抵達"
                },
                {
                    name: "CampEasy Iceland 取車",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.0169296,-22.5669218",
                    duration: "1.5 小時",
                    note: "檢查暖氣與備品",
                    highlight: true
                },
                {
                    name: "Costco & Bónus",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.0735057,-21.9119723",
                    duration: "1.5 小時",
                    note: "油價最便宜 + 首日補給",
                    highlight: true
                },
                {
                    name: "Bónus Outlet 附近",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.1313196,-21.8694787",
                    duration: "15 分鐘",
                    note: "Outlet 區域的平價超市"
                },
                {
                    name: "Icewear Outlet",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.129806,-21.8650316",
                    duration: "30 分鐘",
                    note: "戶外裝備補充"
                },
                {
                    name: "66°North Outlet",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.1312872,-21.8668222",
                    duration: "30 分鐘",
                    note: "冰島頂級戶外品牌 Outlet"
                },
                {
                    name: "哈爾格林姆教堂",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.1420229,-21.9265494",
                    duration: "45 分鐘",
                    note: "市區地標"
                },
                {
                    name: "彩虹街",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.1460221,-21.9325495",
                    duration: "20 分鐘",
                    note: "拍照打卡點"
                },
                {
                    name: "哈帕音樂廳 (Harpa)",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.1502464,-21.9322805",
                    duration: "30 分鐘",
                    note: "絕美幾何建築"
                },
                {
                    name: "太陽航海者",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.1476306,-21.9222847",
                    duration: "15 分鐘",
                    note: "海邊雕塑"
                },
                {
                    name: "Landsbankinn 換匯",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.148937,-21.9352598",
                    duration: "20 分鐘",
                    note: "國家銀行換硬幣"
                },
                {
                    name: "Grotta Lighthouse 燈塔",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.1640,-22.0172",
                    duration: "30 分鐘",
                    note: "雷克雅維克西北角，看日落極光好地點（彈性）"
                },
                {
                    name: "Kolaportið 跳蚤市場",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.1490,-21.9435",
                    duration: "週六日 11:00-17:00",
                    note: "可挖寶二手冰島毛衣（彈性）"
                }
            ],
            food: [
                {
                    name: "Brauð & Co 肉桂捲",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.1440791,-21.9259781",
                    note: "必吃熱騰騰肉桂捲"
                },
                {
                    name: "Starbucks 教堂店",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.1439622,-21.9209225",
                    note: "市中心分店，教堂旁"
                },
                {
                    name: "Svarta Kaffið 麵包湯",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.1444624,-21.923465",
                    note: "招牌牛肉/蔬菜湯"
                },
                {
                    name: "Icelandic Street Food 羊肉湯",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.1464577,-21.9380098",
                    note: "傳統美味，可續湯"
                },
                {
                    name: "Seabaron 烤魚串",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.150833,-21.9441551",
                    note: "舊港名店龍蝦湯"
                },
                {
                    name: "Starbucks 港口店",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.1477744,-21.9391893",
                    note: "舊港區分店"
                },
                {
                    name: "Valdís 冰淇淋",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.1535474,-21.9489554",
                    note: "多樣化在地口味"
                },
                {
                    name: "Bæjarins Beztu Pylsur 熱狗",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.1481882,-21.9378861",
                    note: "全冰島最紅熱狗攤"
                }
            ]
        },
        // Day 2
        {
            date: "3/22 (日)",
            title: "黃金圈大滿貫",
            distance: "195 km",
            accommodation: "Selfoss Campsite",
            routeMap: "https://maps.app.goo.gl/CJjh1Tzg4WxhhQMYA",
            attractions: [
                {
                    name: "辛格維利爾國家公園",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.2821725,-21.0764491",
                    duration: "1 小時",
                    note: "板塊交界處",
                    highlight: true
                },
                {
                    name: "Öxarárfoss 瀑布",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.26592,-21.1172247",
                    duration: "30 分鐘",
                    note: "國家公園內瀑布"
                },
                {
                    name: "藍色秘境瀑布 (Brúarfoss)",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.2643026,-20.5157467",
                    duration: "1 小時",
                    note: "絕美冰藍色",
                    highlight: true
                },
                {
                    name: "蓋錫爾間歇泉",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.3103719,-20.3023605",
                    duration: "1 小時",
                    note: "每 5-10 分鐘噴發一次",
                    highlight: true
                },
                {
                    name: "黃金瀑布 (Gullfoss)",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.3270716,-20.1199478",
                    duration: "1 小時",
                    note: "壯闊雙層瀑布",
                    highlight: true
                },
                {
                    name: "Secret Lagoon 溫泉",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.1373976,-20.3096984",
                    duration: "1.5 小時",
                    note: "戶外天然溫泉"
                },
                {
                    name: "Laugarás Lagoon 溫泉",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=-20.5073701,64.1127997",
                    duration: "1 小時",
                    note: "黃金圈區域另一個溫泉備案"
                },
                {
                    name: "Kerid 火口湖",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.0412785,-20.8851466",
                    duration: "45 分鐘",
                    note: "藍綠色寶石般的火山口"
                }
            ],
            food: [
                {
                    name: "Efstidalur II 冰淇淋",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.2424477,-20.5516434",
                    note: "著名的牛屁股冰淇淋"
                },
                {
                    name: "Friðheimar 蕃茄農場",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.177503,-20.4448858",
                    note: "溫室內享用蕃茄湯與麵包"
                },
                {
                    name: "Pylsuvagninn 熱狗",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=63.9378241,-21.0043267",
                    note: "Selfoss 豬肉熱狗名店"
                },
                {
                    name: "Ísbúð Huppu 冰淇淋",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=63.9373417,-21.0051208",
                    note: "在地超人氣甜點"
                },
                {
                    name: "Krónan Selfoss",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=63.9378298,-21.0018048",
                    note: "營地旁的大型超市"
                }
            ]
        },
        // Day 3
        {
            date: "3/23 (一)",
            title: "南岸瀑布與相框洞穴",
            distance: "195 km",
            accommodation: "Skógar Campsite",
            routeMap: "https://maps.app.goo.gl/AYhkdcGmbEY3QQwB8",
            attractions: [
                {
                    name: "Urriðafoss",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=63.9246142,-20.6721926",
                    duration: "30 分鐘",
                    note: "水量驚人的大瀑布"
                },
                {
                    name: "塞里雅蘭瀑布",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=63.6156232,-19.9885688",
                    duration: "1 小時",
                    note: "可走到瀑布後方",
                    highlight: true
                },
                {
                    name: "Seljavallalaug 泳池",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=63.5659791,-19.6091423",
                    duration: "1 小時",
                    note: "山谷中的老泳池"
                },
                {
                    name: "斯科加爾瀑布",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=63.5320523,-19.5113706",
                    duration: "1 小時",
                    note: "經典彩虹瀑布",
                    highlight: true
                },
                {
                    name: "Skógar Museum",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=-19.4930982,63.5263302",
                    duration: "1 小時",
                    note: "斯科加爾民俗博物館"
                },
                {
                    name: "Kvernufoss",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=63.5289417,-19.480234",
                    duration: "1 小時",
                    note: "斯科加爾旁的隱藏版秘境"
                },
                {
                    name: "Dyrhólaey 燈塔",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=63.4022252,-19.1301886",
                    duration: "1 小時",
                    note: "海蝕洞與黑沙灘全景"
                },
                {
                    name: "Loftsalahellir Cave",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=63.4258,-19.1481",
                    duration: "30 分鐘",
                    note: "攝影師私藏的天然相框洞穴"
                }
            ],
            food: [
                {
                    name: "Krónan Vík",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=63.4174526,-18.9990158",
                    note: "重要補給！買今明兩日食材"
                },
                {
                    name: "The Soup Company",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=63.4185083,-19.0099388",
                    note: "溫暖的濃湯配麵包（在 Vík）"
                }
            ]
        },
        // Day 4
        {
            date: "3/24 (二)",
            title: "黑沙灘與震撼峽谷",
            distance: "210 km",
            accommodation: "Skaftafell Campground",
            routeMap: "https://maps.app.goo.gl/Pv9hvbXPPdQKJVnK8",
            attractions: [
                {
                    name: "Reynisfjara 黑沙灘",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=63.4030376,-19.0415791",
                    duration: "1.5 小時",
                    note: "玄武岩柱與海蝕洞 ⚠️注意殺人浪",
                    highlight: true
                },
                {
                    name: "Hálsanefshellir Cave (黑沙灘洞穴)",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=-19.0415791,63.4030376",
                    duration: "30 分鐘",
                    note: "黑沙灘旁的海蝕洞穴"
                },
                {
                    name: "Vík 教堂",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=63.4205017,-19.0028796",
                    duration: "30 分鐘",
                    note: "經典紅色屋頂教堂"
                },
                {
                    name: "Icewear / Vík Wool",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=63.417517,-18.999938",
                    duration: "1 小時",
                    note: "選購冰島毛衣"
                },
                {
                    name: "Laufskálavarða",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=63.7558,-18.3594",
                    duration: "20 分鐘",
                    note: "苔原上的石堆紀念碑，旅人傳統祈福地"
                },
                {
                    name: "羽毛河峽谷",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=63.771279,-18.1718159",
                    duration: "1.5 小時",
                    note: "震撼人心的巨大峽谷",
                    highlight: true
                },
                {
                    name: "Svartifoss 黑瀑布",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.0275282,-16.9753082",
                    duration: "1.5 小時",
                    note: "健行抵達玄武岩瀑布"
                }
            ],
            food: []
        },
        // Day 5
        {
            date: "3/25 (三)",
            title: "深度冰川、冰河湖與龍蝦",
            distance: "160 km",
            accommodation: "Höfn Camping",
            routeMap: "https://maps.app.goo.gl/VrfSy1kw7yTak1mW6",
            attractions: [
                {
                    name: "冰川健行/藍冰洞",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.0482535,-16.1784756",
                    duration: "6 小時",
                    note: "09:30 報到，終極體驗",
                    highlight: true
                },
                {
                    name: "Fjallsárlón 冰河湖",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.016418,-16.365923",
                    duration: "40 分鐘",
                    note: "巨大冰舌延伸至湖面"
                },
                {
                    name: "Jökulsárlón 冰河湖",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.0482535,-16.1784756",
                    duration: "1 小時",
                    note: "冰島代表性藍色冰川",
                    highlight: true
                },
                {
                    name: "鑽石冰沙灘",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.044334,-16.1776622",
                    duration: "1 小時",
                    note: "黑色沙灘上的剔透巨冰",
                    highlight: true
                },
                {
                    name: "Diamond Beach lookout",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=-16.182397,64.0436471",
                    duration: "30 分鐘",
                    note: "鑽石沙灘觀景點"
                },
                {
                    name: "Vestrahorn 蝙蝠山",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.2733333,-15.0086111",
                    duration: "1.5 小時",
                    note: "天空之鏡"
                },
                {
                    name: "維京村 (Viking Village)",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.2605173,-14.9851993",
                    duration: "30 分鐘",
                    note: "影視拍攝基地"
                }
            ],
            food: [
                {
                    name: "Pakkhús 龍蝦晚餐",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.2502212,-15.2040662",
                    note: "Höfn 必吃龍蝦（建議先訂位）"
                },
                {
                    name: "Nettó 超市",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.252561,-15.2127278",
                    note: "Höfn 地區物資補給"
                }
            ]
        },
        // Day 6
        {
            date: "3/26 (四)",
            title: "東部峽灣與白日夢場景",
            distance: "320 km",
            accommodation: "Egilsstaðir Camping",
            routeMap: "https://maps.app.goo.gl/t7dW51uzXAoi5x4P7",
            attractions: [
                {
                    name: "Djúpivogur 蛋雕",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.661782,-14.2947696",
                    duration: "30 分鐘",
                    note: "港口旁的 34 顆石蛋"
                },
                {
                    name: "Folaldafoss",
                    mapLink: "https://maps.app.goo.gl/wYTwUheomY1dh61e8",
                    duration: "30 分鐘",
                    note: "東部峽灣隱藏瀑布"
                },
                {
                    name: "Seyðisfjörður 小鎮",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=65.2606214,-14.0097088",
                    duration: "1 小時",
                    note: "白日夢冒險王滑板斜坡"
                },
                {
                    name: "Gufu waterfall",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=65.2398959,-14.0575765",
                    duration: "30 分鐘",
                    note: "峽灣路邊瀑布"
                },
                {
                    name: "彩虹小路與藍色教堂",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=65.2612362,-14.0104804",
                    duration: "30 分鐘",
                    note: "經典打卡點"
                }
            ],
            food: [
                {
                    name: "Hekla 冰淇淋",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=65.261282,-14.0001169",
                    note: "峽灣邊的悠閒甜點"
                },
                {
                    name: "Fjallagrös bakery",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=-13.9989994,65.2617812",
                    note: "在地手工烘焙"
                },
                {
                    name: "Askur Pizzeria",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=65.2589651,-14.390799",
                    note: "具備豐富口味的美味披薩"
                },
                {
                    name: "Bónus 超市",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=65.2634206,-14.4050198",
                    note: "東部最大補給站！"
                }
            ]
        },
        // Day 7
        {
            date: "3/27 (五)",
            title: "玄武岩峽谷與地熱震撼",
            distance: "285 km",
            accommodation: "Hlíð ferðaþjónusta (米湖)",
            routeMap: "https://maps.app.goo.gl/fhTyqLDkj4oN6uGm7",
            attractions: [
                {
                    name: "Vök Baths",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=65.3030639,-14.4469872",
                    duration: "2 小時",
                    note: "湖面漂浮溫泉"
                },
                {
                    name: "Stuðlagil Canyon",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=65.1635,-15.3072",
                    duration: "2 小時",
                    note: "絕美藍綠色河水與玄武岩峽谷",
                    highlight: true
                },
                {
                    name: "Viti 火口湖",
                    mapLink: "https://maps.app.goo.gl/FbL6Qg7S3QFx8y1eA",
                    duration: "30 分鐘",
                    note: "Krafla 火山區的藍綠色火口湖"
                },
                {
                    name: "黛提瀑布 (西側)",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=65.8146662,-16.384576",
                    duration: "1.5 小時",
                    note: "全歐洲水量最大",
                    highlight: true
                },
                {
                    name: "Námafjall Hverir",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=65.6413789,-16.8081595",
                    duration: "1 小時",
                    note: "火星地貌"
                },
                {
                    name: "洞穴溫泉 (Grjótagjá)",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=65.6263565,-16.8830077",
                    duration: "30 分鐘",
                    note: "權力遊戲拍片地"
                },
                {
                    name: "Viewpoint from Hverfjall volcano",
                    mapLink: "https://maps.app.goo.gl/vfp7rKMuUtUV73UXA",
                    duration: "30 分鐘",
                    note: "Hverfjall 火山口觀景點"
                },
                {
                    name: "Dimmuborgir 黑色城堡",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=65.5912203,-16.91228",
                    duration: "1.5 小時",
                    note: "奇形怪狀的熔岩迷宮"
                },
                {
                    name: "Skútustaðagígar",
                    mapLink: "https://maps.app.goo.gl/ApGHXKLJemWqQ1kZ7",
                    duration: "45 分鐘",
                    note: "壯觀的偽火山口群"
                }
            ],
            food: [
                {
                    name: "米湖溫泉 (Mývatn Nature Baths)",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=65.6308946,-16.8476117",
                    note: "放鬆補給的最佳去處"
                }
            ]
        },
        // Day 8
        {
            date: "3/28 (六)",
            title: "米湖深度遊與北部大城",
            distance: "250 km",
            accommodation: "Lambeyri 超高分營地",
            routeMap: "https://maps.app.goo.gl/BSfoFevPNv4sVrVG6",
            attractions: [
                {
                    name: "GeoSea 峭壁溫泉",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=66.0520,-17.3620",
                    duration: "1.5 小時",
                    note: "胡薩維克峭壁溫泉"
                },
                {
                    name: "眾神瀑布 (Goðafoss)",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=65.6827782,-17.5501919",
                    duration: "1 小時",
                    note: "冰島最優雅的瀑布",
                    highlight: true
                },
                {
                    name: "廖薩瓦湖 (Ljósavatn)",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=-17.6706944,65.6998614",
                    duration: "20 分鐘",
                    note: "寧靜的湖泊"
                },
                {
                    name: "阿克雷里大教堂",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=65.6799121,-18.090781",
                    duration: "30 分鐘",
                    note: "市區心臟地帶"
                },
                {
                    name: "Akureyri 游泳池",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=65.6793603,-18.0974189",
                    duration: "1.5 小時",
                    note: "極長滑水道"
                },
                {
                    name: "聖誕屋",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=65.5802038,-18.092157",
                    duration: "45 分鐘",
                    note: "精緻的聖誕飾品店"
                }
            ],
            food: [
                {
                    name: "Brynja 冰淇淋",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=65.6722518,-18.0869274",
                    note: "北部傳奇冰淇淋店"
                },
                {
                    name: "Bónus 阿克雷里",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=65.6919943,-18.1089312",
                    note: "離開大城前最後大補給"
                }
            ]
        },
        // Day 9
        {
            date: "3/29 (日)",
            title: "最長移動日、犀牛石與補給",
            distance: "320 km",
            accommodation: "Snorrastaðir Campsite",
            routeMap: "https://maps.app.goo.gl/W1oMVZobJ85y9mCZ8",
            attractions: [
                {
                    name: "Icelandic Horse Tours",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=65.7199707,-19.517929",
                    duration: "1.5 小時",
                    note: "體驗溫順的冰島馬"
                },
                {
                    name: "Glaumbær 草屋博物館",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=65.6103973,-19.5043888",
                    duration: "1 小時",
                    note: "傳統草皮建築"
                },
                {
                    name: "Hrútey Island in Blanda River",
                    mapLink: "https://maps.app.goo.gl/gj8f5Lqi5xMSarna7",
                    duration: "30 分鐘",
                    note: "布蘭達河中的小島"
                },
                {
                    name: "Vatnsdalshólar 蟻丘",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=65.4888594,-20.3582886",
                    duration: "15 分鐘",
                    note: "奇特的地質現象"
                },
                {
                    name: "Blönduós (超市補給)",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=65.6596,-20.2745",
                    duration: "30 分鐘",
                    note: "重要！在 Nettó 補齊未來路段物資"
                },
                {
                    name: "犀牛石 (Hvítserkur)",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=65.6063761,-20.6352441",
                    duration: "45 分鐘",
                    note: "海面上巨大的犀牛石",
                    highlight: true
                },
                {
                    name: "巨人峽谷 (Kolugljúfur)",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=65.3333817,-20.5712959",
                    duration: "45 分鐘",
                    note: "深邃壯麗的峽谷景觀"
                },
                {
                    name: "Grábrók",
                    mapLink: "https://maps.app.goo.gl/4DXRhaEGjdL586t6A",
                    duration: "45 分鐘",
                    note: "可攀爬的火山口，360度全景"
                }
            ],
            food: []
        },
        // Day 10
        {
            date: "3/30 (一)",
            title: "斯奈山半島地標",
            distance: "175 km",
            accommodation: "The Freezer Camping",
            routeMap: "https://maps.app.goo.gl/EAPXoPSoF2aHg6jC6",
            attractions: [
                {
                    name: "Gerðuberg Cliffs",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.8577579,-22.3673396",
                    duration: "30 分鐘",
                    note: "壯麗玄武岩石壁"
                },
                {
                    name: "教堂山 (Kirkjufell)",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.9416667,-23.3069444",
                    duration: "1.5 小時",
                    note: "攝影首選地標",
                    highlight: true
                },
                {
                    name: "Ólafsvík (超市)",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.8944,-23.7125",
                    duration: "30 分鐘",
                    note: "在 Bónus 補貨"
                },
                {
                    name: "Svörtuloft 橘色燈塔",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.863889,-24.038889",
                    duration: "40 分鐘",
                    note: "絕壁上的亮點燈塔"
                },
                {
                    name: "Saxhóll Crater 火山口",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.7694,-23.7067",
                    duration: "30 分鐘",
                    note: "可攀爬的火山口，360度全景"
                }
            ],
            food: []
        },
        // Day 11
        {
            date: "3/31 (二)",
            title: "洞穴探險、海豹與博物館",
            distance: "260 km",
            accommodation: "Bjarteyjarsandur",
            routeMap: "https://maps.app.goo.gl/ioFNLsNJcLXwefy48",
            attractions: [
                {
                    name: "瓦汀舍利爾洞穴 (Vatnshellir Cave)",
                    mapLink: "https://maps.app.goo.gl/EURutJ7Mb1NbZtcZ7",
                    duration: "45 分鐘",
                    note: "11:00 洞穴導覽行程",
                    highlight: true
                },
                {
                    name: "Lóndrangar 玄武岩柱",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.7394,-23.7778",
                    duration: "20 分鐘",
                    note: "海中巨大玄武岩石柱"
                },
                {
                    name: "Djúpalónssandur 黑沙灘",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.753333,-23.593056",
                    duration: "1 小時",
                    note: "沉船殘骸與力氣石"
                },
                {
                    name: "Arnarstapi 巨人石像",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.766667,-23.616667",
                    duration: "1 小時",
                    note: "海岸步道奇觀"
                },
                {
                    name: "Rauðfeldsgjá Gorge 紅色峽谷",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.7625,-23.7083",
                    duration: "30 分鐘",
                    note: "狹窄峽谷步道，可走入峽谷深處"
                },
                {
                    name: "Búðakirkja 黑教堂",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.821667,-23.385",
                    duration: "30 分鐘",
                    note: "荒野中的黑教堂"
                },
                {
                    name: "Ytri Tunga 海豹灘",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.8027417,-23.0803176",
                    duration: "1 小時",
                    note: "觀察野生海豹",
                    highlight: true
                },
                {
                    name: "Borgarfjörður Museum",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.5358,-21.9231",
                    duration: "1 小時",
                    note: "Borgarnes 歷史博物館"
                },
                {
                    name: "Hraunfossar 赫倫瀑布",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.701944,-20.978056",
                    duration: "1 小時",
                    note: "熔岩縫隙中的瀑布"
                },
                {
                    name: "Hvalfjarðareyri",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.3567,-21.7583",
                    duration: "30 分鐘",
                    note: "營地旁的黃金海灘"
                }
            ],
            food: [
                {
                    name: "Bónus / Krónan Borgarnes",
                    mapLink: "",
                    note: "重要！進市區前的最後平價大補給"
                }
            ]
        },
        // Day 12
        {
            date: "4/1 (三)",
            title: "燈塔溫泉與天空之鏡",
            distance: "100 km",
            accommodation: "Reykjavík Eco Campsite",
            routeMap: "https://maps.app.goo.gl/7hzxXkQG39G3htpN8",
            attractions: [
                {
                    name: "Akranes Lighthouses",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.3142,-22.0941",
                    duration: "1 小時",
                    note: "西部經典新舊雙燈塔"
                },
                {
                    name: "Guðlaug Baths",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.3168,-22.0731",
                    duration: "1 小時",
                    note: "海邊三層式溫泉池"
                },
                {
                    name: "行李寄存 (Lockers)",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.1459924,-21.8758858",
                    duration: "",
                    note: "位於營地內的寄物空間"
                },
                {
                    name: "Sky Lagoon 溫泉",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.120556,-21.944444",
                    duration: "2.5 小時",
                    note: "市區海景無邊際溫泉",
                    highlight: true
                },
                {
                    name: "Grotta Lighthouse 燈塔",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.1640,-22.0172",
                    duration: "30 分鐘",
                    note: "看日落或追極光的好地點"
                },
                {
                    name: "Perlan 珍珠樓",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.129444,-21.918889",
                    duration: "1.5 小時",
                    note: "360 度鳥瞰市區夜景"
                }
            ],
            food: []
        },
        // Day 13
        {
            date: "4/2 (四)",
            title: "市區深度遊與地熱末班車",
            distance: "115 km",
            accommodation: "CampEasy 辦公室停車場",
            routeMap: "https://maps.app.goo.gl/GpxpZfJEZ5Zny5xEA",
            attractions: [
                {
                    name: "Tjörnin 鴨子湖",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.144444,-21.940556",
                    duration: "1 小時",
                    note: "市中心悠閒散步地"
                },
                {
                    name: "Bridge Between Continents",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=63.8703,-22.6753",
                    duration: "15 分鐘",
                    note: "象徵性的歐美大陸板塊橋"
                },
                {
                    name: "Gunnuhver 地熱區",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=63.8188,-22.6853",
                    duration: "45 分鐘",
                    note: "巨大的強烈地熱噴發口",
                    highlight: true
                },
                {
                    name: "Krýsuvík 地熱區",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=63.9321,-22.0506",
                    duration: "30 分鐘",
                    note: "泥漿池與蒸氣口，荒涼地貌"
                },
                {
                    name: "Kleifarvatn 湖",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=63.9344,-22.0083",
                    duration: "15 分鐘",
                    note: "神秘的黑色火山湖"
                },
                {
                    name: "66°North / Icewear",
                    mapLink: "https://www.google.com/maps/search/?api=1&query=64.147222,-21.940833",
                    duration: "2 小時",
                    note: "採買最後的冰島紀念品"
                },
                {
                    name: "自助洗車 & 加滿油",
                    mapLink: "",
                    duration: "1.5 小時",
                    note: "還車前必備義務"
                },
                {
                    name: "整理行李與剩食",
                    mapLink: "",
                    duration: "2 小時",
                    note: "整理回程行李"
                }
            ],
            food: []
        },
        {
            date: "4/3 (五)",
            title: "歸途",
            distance: "0 km",
            accommodation: "返程",
            attractions: [
                { name: "CampEasy 自助還車", mapLink: "", duration: "05:00", note: "投入 Drop-box" },
                { name: "KEF 機場", mapLink: "https://www.google.com/maps/search/?api=1&query=63.9948577,-22.623944", duration: "08:35", note: "搭乘 AY0992 離開冰島" }
            ],
            food: []
        }
    ],

    // 行前準備清單
    checklist: [
        {
            category: "📄 必備證件與文件",
            items: [
                "護照正本（效期 6 個月以上）",
                "駕照正本：台灣駕照正本 + 國際駕照正本（兩者缺一不可）",
                "香港 PAR 入境登記（列印兩份備用）",
                "申根保險英文證明（建議列印備查）",
                "活動預約單（露營車、冰川健行、Sky Lagoon）"
            ]
        },
        {
            category: "🧥 衣物與裝備",
            items: [
                "冰爪 (Crampons) - 絕對必備，3月底步道結冰極滑",
                "全防水衣褲：雨衣雨褲需具備防水層，非防潑水",
                "高筒防水登山鞋：冰川健行之必要裝備",
                "保暖層：羊毛發熱衣、刷毛衣、羽絨外套",
                "配件：防水手套、毛帽、圍脖、厚羊毛襪",
                "個人用品：泳衣、速乾毛巾、太陽眼鏡、保濕乳液/護唇膏",
                "個人藥品：感冒藥、腸胃藥、止痛藥、暈車藥、OK繃",
                "其他小物：頭燈（營地夜間行走）、S型掛勾（露營車內掛物）、輕便吹風機"
            ]
        },
        {
            category: "💳 電子與金流",
            items: [
                "信用卡（含 4 碼 PIN Code）：加油站與超市刷卡必備",
                "現金 100 美金/歐元：預備金，或換硬幣洗衣服",
                "行動電源：至少 20000mAh，低溫環境手機耗電極快",
                "車充/點菸器轉接頭：露營車手機充電必備",
                "離線地圖：下載 Google Maps 離線區域"
            ]
        }
    ],

    // 注意事項
    tips: [
        {
            title: "⚠️ 天氣與安全",
            content: `
                <ul style="padding-left: 1.5rem; line-height: 2;">
                    <li><strong>每天查路況：</strong>使用 <a href="https://www.road.is/" target="_blank">road.is</a> 和 <a href="https://safetravel.is/" target="_blank">safetravel.is</a></li>
                    <li><strong>冰島的風超級可怕：</strong>開車門前先確認風向，車門被吹彎要賠 USD 1000+</li>
                    <li><strong>冰爪使用率極高：</strong>建議在台灣就買好（迪卡儂約 NT$500-800）</li>
                    <li><strong>黑沙灘的殺人浪：</strong>Reynisfjara 有 "Sneaker Wave"，絕對不要背對海浪拍照</li>
                    <li><strong>緊急電話：</strong>112（冰島緊急救援）</li>
                </ul>
            `
        },
        {
            title: "🚐 露營車操作",
            content: `
                <ul style="padding-left: 1.5rem; line-height: 2;">
                    <li><strong>取車檢查：</strong>確認暖氣、熱水器、灰水箱、備胎位置</li>
                    <li><strong>過夜技巧：</strong>晚上一定要開暖氣，廁所只能用專用溶解衛生紙</li>
                    <li><strong>駕駛注意：</strong>市區 50km/h、郊區 80km/h、碎石路 60km/h</li>
                    <li><strong>加油操作：</strong>選油槍號 → 輸入金額 → 插卡輸 PIN → 加油後自動退款</li>
                    <li><strong>最便宜加油：</strong>Costco / Orkan X / Olis，N1 最貴</li>
                </ul>
            `
        },
        {
            title: "💰 預算與花費",
            content: `
                <ul style="padding-left: 1.5rem; line-height: 2;">
                    <li><strong>門票費用：</strong>Kerid 火口湖 500 ISK、Vestrahorn 1000 ISK</li>
                    <li><strong>隧道費：</strong>Vaðlaheiðargöng 1500 ISK，24 小時內上網繳費</li>
                    <li><strong>超市排行：</strong>Costco > Bónus > Krónan > Nettó > 10-11</li>
                    <li><strong>餐廳預算：</strong>龍蝦餐 8000-12000 ISK、麵包湯 1200-1800 ISK</li>
                </ul>
            `
        },
        {
            title: "📱 手機與網路",
            content: `
                <ul style="padding-left: 1.5rem; line-height: 2;">
                    <li><strong>SIM 卡推薦：</strong>KEF 機場入境大廳購買，14天方案約 5000-7000 ISK</li>
                    <li><strong>離線地圖：</strong>下載 maps.me（比 Google Maps 更適合冰島）</li>
                    <li><strong>實用 App：</strong>Veðurstofa（天氣）、Aurora Forecast（極光）、Vegagerðin（路況）</li>
                </ul>
            `
        },
        {
            title: "♨️ 溫泉注意",
            content: `
                <ul style="padding-left: 1.5rem; line-height: 2;">
                    <li><strong>淋浴規定：</strong>進溫泉前必須全裸淋浴（冰島規定，會有人盯）</li>
                    <li><strong>毛巾準備：</strong>需自備或現場租（很貴）</li>
                    <li><strong>預約景點：</strong>藍湖、Sky Lagoon 需提前預約</li>
                    <li><strong>溫泉水不能喝：</strong>雖然水質乾淨但高溫礦物質對身體不好</li>
                </ul>
            `
        },
        {
            title: "🌌 極光追蹤",
            content: `
                <ul style="padding-left: 1.5rem; line-height: 2;">
                    <li><strong>觀賞時機：</strong>3 月底剛好趕上極光季尾聲，KP 值 ≥ 2 就有機會</li>
                    <li><strong>最佳地點：</strong>Day 7-8 米湖營地、Day 9 Snorrastaðir 營地</li>
                    <li><strong>拍攝設定：</strong>ISO 1600-3200 / 光圈 f/2.8 / 快門 10-15秒</li>
                    <li><strong>查詢網站：</strong><a href="https://en.vedur.is/weather/forecasts/aurora/" target="_blank">冰島氣象局極光預報</a></li>
                </ul>
            `
        },
        {
            title: "🧊 其他實用資訊",
            content: `
                <ul style="padding-left: 1.5rem; line-height: 2;">
                    <li><strong>飲用水：</strong>冰島自來水可直接生飲（世界最純淨），不用買瓶裝水</li>
                    <li><strong>小費文化：</strong>冰島不需要給小費，餐廳帳單已含服務費</li>
                    <li><strong>營地禮儀：</strong>晚上 10 點後保持安靜，垃圾分類</li>
                    <li><strong>購物建議：</strong>羊毛衣建議在 Vík Wool 或跳蚤市場買（比市區便宜）</li>
                    <li><strong>日照時間：</strong>日出約 06:30、日落約 20:00（白天約 13.5 小時）</li>
                </ul>
            `
        }
    ],

    // 必買伴手禮
    souvenirs: [
        {
            category: "🧶 冰島羊毛衣",
            items: [
                {
                    name: "Lopapeysa 傳統羊毛衣",
                    price: "15000-25000 ISK",
                    where: "Vík Wool、Handknitting Association、跳蚤市場 Kolaportið",
                    note: "100% 冰島羊毛，保暖且獨特圖案。跳蚤市場可買到二手便宜貨（週六日 11:00-17:00）"
                },
                {
                    name: "羊毛圍巾/手套",
                    price: "3000-8000 ISK",
                    where: "各大紀念品店、66°North",
                    note: "比毛衣便宜，送禮自用都適合"
                }
            ]
        },
        {
            category: "🐟 海產品（超推薦）",
            items: [
                {
                    name: "Omega-3 魚油膠囊",
                    price: "3000-6000 ISK",
                    where: "藥妝店 Lyfja、超市、機場",
                    note: "⭐ 冰島魚油品質世界頂級！Lysi 品牌最有名，純淨無腥味"
                },
                {
                    name: "魚子醬（Kaviar）",
                    price: "800-1500 ISK/條",
                    where: "各大超市（冷藏區）",
                    note: "⭐ 當地人早餐必備！塗在麵包上超好吃，推薦 Kalles 品牌"
                },
                {
                    name: "煙燻鮭魚/鱈魚",
                    price: "2000-4000 ISK",
                    where: "超市、機場免稅店",
                    note: "真空包裝，可以帶回台灣（注意海關規定）"
                },
                {
                    name: "魚乾/魚皮零食（Harðfiskur）",
                    price: "500-1000 ISK",
                    where: "超市、加油站",
                    note: "配奶油超好吃！高蛋白零食，冰島人最愛"
                }
            ]
        },
        {
            category: "🍫 巧克力與零食",
            items: [
                {
                    name: "Omnom Chocolate",
                    price: "800-1500 ISK/片",
                    where: "超市、機場免稅店",
                    note: "冰島精品巧克力，包裝精美，口味獨特（烤大麥、牛奶海鹽、咖啡）"
                },
                {
                    name: "Nóa Siríus 巧克力",
                    price: "400-800 ISK",
                    where: "各大超市",
                    note: "冰島國民巧克力，價格親民。推薦甘草巧克力（Súkkulaði）很特別！"
                },
                {
                    name: "甘草糖（Lakkrís）",
                    price: "300-600 ISK",
                    where: "超市、便利商店",
                    note: "冰島人超愛甘草！但台灣人可能不習慣，建議先試吃"
                },
                {
                    name: "Þristur 巧克力餅乾",
                    price: "400-600 ISK",
                    where: "超市",
                    note: "當地人從小吃到大的零食，CP 值高"
                }
            ]
        },
        {
            category: "🧂 調味料與食材",
            items: [
                {
                    name: "冰島鹽（Saltverk）",
                    price: "800-1500 ISK",
                    where: "超市、紀念品店",
                    note: "熔岩鹽、海鹽、煙燻鹽等多種選擇，送禮自用都好"
                },
                {
                    name: "北極百里香茶（Blóðberg）",
                    price: "1000-2000 ISK",
                    where: "超市、藥妝店",
                    note: "冰島野生香草茶，有助睡眠與放鬆"
                },
                {
                    name: "樺樹糖漿",
                    price: "2000-3000 ISK",
                    where: "超市、有機商店",
                    note: "比楓糖漿清爽，冰島特產"
                }
            ]
        },
        {
            category: "💆 護膚保養品",
            items: [
                {
                    name: "藍湖/Sky Lagoon 產品",
                    price: "3000-8000 ISK",
                    where: "藍湖、Sky Lagoon、機場免稅店",
                    note: "火山泥面膜、礦物保濕霜等，很好用但偏貴"
                },
                {
                    name: "Sóley Organics",
                    price: "2000-5000 ISK",
                    where: "雷克雅維克市區商店、機場",
                    note: "冰島天然有機護膚品牌，成分純淨"
                },
                {
                    name: "Bioeffect EGF 精華液",
                    price: "15000-30000 ISK",
                    where: "機場免稅店、藥妝店",
                    note: "冰島高端保養品，用大麥萃取 EGF，很貴但評價高"
                }
            ]
        },
        {
            category: "🍺 酒類（機場免稅店限定）",
            items: [
                {
                    name: "Brennivín（黑死酒）",
                    price: "約 2500 ISK",
                    where: "機場免稅店、Vínbúðin 國家酒專賣店",
                    note: "⭐ 冰島傳統烈酒，帶有茴香味，很特別！當地人聖誕節必喝"
                },
                {
                    name: "Reyka 伏特加",
                    price: "約 3000 ISK",
                    where: "機場免稅店",
                    note: "冰島火山泉水釀造，口感純淨"
                },
                {
                    name: "Einstök 精釀啤酒",
                    price: "約 400 ISK/罐",
                    where: "超市（無酒精版）、機場免稅店（含酒精）",
                    note: "推薦 White Ale，清爽好喝"
                },
                {
                    name: "Flóki 威士忌",
                    price: "約 8000-12000 ISK",
                    where: "機場免稅店、Vínbúðin",
                    note: "冰島唯一威士忌蒸餾廠，用羊糞泥炭燻製，風味獨特"
                }
            ]
        },
        {
            category: "🎨 特色紀念品",
            items: [
                {
                    name: "火山石製品",
                    price: "1000-5000 ISK",
                    where: "紀念品店",
                    note: "火山石項鍊、擺飾等，獨特且有意義"
                },
                {
                    name: "冰島地圖海報",
                    price: "1500-3000 ISK",
                    where: "書店、紀念品店",
                    note: "精美的冰島地圖或極光海報"
                },
                {
                    name: "Puffin 海鸚玩偶",
                    price: "2000-4000 ISK",
                    where: "各大紀念品店",
                    note: "冰島代表性動物，超可愛"
                },
                {
                    name: "極光/冰島明信片",
                    price: "200-400 ISK/張",
                    where: "書店、加油站、紀念品店",
                    note: "便宜又實用的小禮物"
                }
            ]
        }
    ],

    // 必吃美食
    mustEat: [
        {
            category: "🦞 海鮮類（必吃！）",
            items: [
                {
                    name: "龍蝦料理（Langoustine）",
                    restaurant: "Pakkhús (Höfn)、Humarhöfnin、Fjöruborðið",
                    price: "8000-12000 ISK",
                    note: "⭐ Höfn 是冰島龍蝦之都，必吃！肉質鮮甜，比台灣便宜又新鮮",
                    highlight: true
                },
                {
                    name: "烤魚串",
                    restaurant: "Seabaron (雷克雅維克舊港)",
                    price: "2500-3500 ISK",
                    note: "現烤魚串配龍蝦湯，舊港區名店"
                },
                {
                    name: "世界級龍蝦湯",
                    restaurant: "Fjöruborðið (Stokkseyri)",
                    price: "6000-8000 ISK",
                    note: "⭐ 世界級龍蝦湯，濃郁鮮美，可無限續湯配麵包"
                },
                {
                    name: "炸魚薯條（Fish & Chips）",
                    restaurant: "各大海港餐廳",
                    price: "2000-3000 ISK",
                    note: "用新鮮鱈魚現炸，比英國的好吃太多"
                }
            ]
        },
        {
            category: "🌭 速食與輕食",
            items: [
                {
                    name: "Bæjarins Beztu 熱狗",
                    restaurant: "Bæjarins Beztu Pylsur（雷克雅維克港口）",
                    price: "500-700 ISK",
                    note: "⭐ 冰島最有名的熱狗攤！點「一份全加」（eina með öllu）：洋蔥、脆洋蔥、番茄醬、黃芥末、雷穆拉醬",
                    highlight: true
                },
                {
                    name: "肉桂捲（Kanilsnúður）",
                    restaurant: "Brauð & Co（雷克雅維克）",
                    price: "600-800 ISK",
                    note: "⭐ 超級熱門！必吃熱騰騰的肉桂捲，外酥內軟，早上 7 點開門就大排長龍",
                    highlight: true
                },
                {
                    name: "麵包湯（Breadbowl Soup）",
                    restaurant: "Svarta Kaffið、Vík Wool Café",
                    price: "1200-1800 ISK",
                    note: "用麵包挖空盛湯，溫暖又飽足。牛肉湯、蔬菜湯都好喝"
                },
                {
                    name: "開放式三明治（Smørrebrød）",
                    restaurant: "北歐風咖啡店",
                    price: "1500-2500 ISK",
                    note: "燻鮭魚、魚子醬、酸奶油，很精緻"
                }
            ]
        },
        {
            category: "🍖 傳統冰島料理",
            items: [
                {
                    name: "羊肉湯（Kjötsúpa）",
                    restaurant: "Icelandic Street Food、各大餐廳",
                    price: "1800-2200 ISK",
                    note: "⭐ 冰島國民美食，可無限續湯！用根莖類蔬菜燉煮，超暖胃",
                    highlight: true
                },
                {
                    name: "烤羊排（Lamb Chops）",
                    restaurant: "自己在營地烤或餐廳",
                    price: "Costco 約 2000-3000 ISK/500g",
                    note: "⭐ 冰島羊肉超嫩無騷味！建議在 Costco 買回營地自己烤，配紅酒超享受"
                },
                {
                    name: "燉羊肉（Lamb Stew）",
                    restaurant: "傳統冰島餐廳",
                    price: "3000-4500 ISK",
                    note: "慢燉到軟爛，配馬鈴薯泥超讚"
                },
                {
                    name: "肉丸子（Kjötbollur）",
                    restaurant: "Icelandic Street Food",
                    price: "1800 ISK",
                    note: "超大顆肉丸子配褐色醬汁，很家常的味道"
                }
            ]
        },
        {
            category: "👹 地獄食材挑戰（勇者限定）",
            items: [
                {
                    name: "發酵鯊魚（Hákarl）",
                    restaurant: "Vík Wool、跳蚤市場 Kolaportið、傳統餐廳",
                    price: "免費試吃或約 1000-2000 ISK",
                    note: "⚠️ 世界臭名昭彰！用格陵蘭鯊魚發酵 4-6 個月，氨味超重像廁所。當地人會配 Brennivín 黑死酒壓味道"
                },
                {
                    name: "羊頭肉（Svið）",
                    restaurant: "傳統冰島餐廳、跳蚤市場",
                    price: "2000-3000 ISK",
                    note: "⚠️ 烤過或水煮的整顆羊頭切半，連眼睛、舌頭、腦都吃。當地老一輩很愛"
                },
                {
                    name: "羊睪丸（Súrsaðir hrútspungar）",
                    restaurant: "冬季傳統節慶 Þorrablót 才有",
                    price: "很少餐廳賣",
                    note: "⚠️ 酸漬羊睪丸，口感像海綿。一般餐廳吃不到，要參加 Þorrablót 節慶（1-2月）"
                },
                {
                    name: "羊血布丁（Blóðmör）",
                    restaurant: "超市（冷藏區）、傳統餐廳",
                    price: "500-1000 ISK",
                    note: "用羊血、羊油、麥片做成的香腸，炸過配糖超甜超鹹。當地人早餐吃"
                },
                {
                    name: "酸羊睪丸凍（Sviðasulta）",
                    restaurant: "跳蚤市場、特殊節慶",
                    price: "1500 ISK",
                    note: "⚠️ 用羊頭肉、羊蹄做成的肉凍，口感 Q 彈。不是每家餐廳都有"
                }
            ]
        },
        {
            category: "🇮🇸 當地人才吃的日常食物",
            items: [
                {
                    name: "魚子醬抹醬（Kaviar）",
                    restaurant: "超市買回營地或飯店吃",
                    price: "800-1500 ISK/條",
                    note: "⭐ 冰島人早餐必吃！擠在麵包或餅乾上，鹹鹹的很下飯。推薦 Kalles 品牌"
                },
                {
                    name: "Skyr（冰島優格）",
                    restaurant: "各大超市",
                    price: "150-300 ISK",
                    note: "⭐ 高蛋白低脂，質地像希臘優格。有各種口味（藍莓、焦糖、巧克力），當早餐或點心都好",
                    highlight: true
                },
                {
                    name: "Rugbrauð（黑麥麵包）",
                    restaurant: "超市、麵包店",
                    price: "400-800 ISK",
                    note: "⭐ 用地熱蒸氣烤 24 小時的甜黑麥麵包，配奶油或煙燻鮭魚超讚"
                },
                {
                    name: "Kleinur（冰島甜甜圈）",
                    restaurant: "超市、麵包店",
                    price: "200-400 ISK/個",
                    note: "扭結狀的炸甜甜圈，配咖啡超搭"
                },
                {
                    name: "Pylsa（熱狗）+ Skyr",
                    restaurant: "當地人的日常組合",
                    price: "約 1000 ISK",
                    note: "冰島人午餐常吃熱狗配 Skyr 優格，簡單又營養"
                },
                {
                    name: "Plokkfiskur（魚肉燉菜）",
                    restaurant: "家常菜，少數傳統餐廳有",
                    price: "2000-3000 ISK",
                    note: "用鱈魚、馬鈴薯、洋蔥燉煮的家常菜，很樸實的味道"
                },
                {
                    name: "Hangikjöt（煙燻羊肉）",
                    restaurant: "超市（切片包裝）、聖誕節期間餐廳",
                    price: "1500-2500 ISK",
                    note: "聖誕節必吃！煙燻羊肉配白醬和馬鈴薯，煙燻味很重"
                }
            ]
        },
        {
            category: "🍦 甜點與飲品",
            items: [
                {
                    name: "Valdís 冰淇淋",
                    restaurant: "Valdís（雷克雅維克）",
                    price: "600-900 ISK",
                    note: "⭐ 在地超人氣，口味多元（推薦甘草、海鹽焦糖、大黃）",
                    highlight: true
                },
                {
                    name: "Brynja 冰淇淋",
                    restaurant: "Brynja（阿克雷里）",
                    price: "500-800 ISK",
                    note: "⭐ 北部傳奇冰淇淋店，必吃！份量超大",
                    highlight: true
                },
                {
                    name: "Efstidalur II 冰淇淋",
                    restaurant: "Efstidalur II（黃金圈）",
                    price: "800-1200 ISK",
                    note: "⭐ 農場自製，可以看到牛屁股（牛在玻璃後面），超療癒"
                },
                {
                    name: "Skyr Cake（Skyrkaka）",
                    restaurant: "咖啡店、麵包店",
                    price: "800-1200 ISK",
                    note: "用 Skyr 做的起司蛋糕，清爽不膩"
                },
                {
                    name: "冰島咖啡（Kaffi）",
                    restaurant: "Reykjavík Roasters、Te & Kaffi",
                    price: "500-800 ISK",
                    note: "冰島人超愛喝咖啡，品質很高"
                }
            ]
        },
        {
            category: "🍅 特色餐廳",
            items: [
                {
                    name: "溫室蕃茄農場",
                    restaurant: "Friðheimar（黃金圈）",
                    price: "2500-3500 ISK",
                    note: "⭐ 在溫室裡吃蕃茄湯配麵包，超級新鮮！還有蕃茄血腥瑪麗調酒"
                },
                {
                    name: "披薩",
                    restaurant: "Askur Pizzeria（Egilsstaðir）",
                    price: "2000-3000 ISK",
                    note: "東部最好吃的披薩，口味豐富"
                }
            ]
        }
    ]
};
