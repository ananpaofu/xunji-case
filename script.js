/* ============================================================
   XUNJI — bilingual copy + light motion
   ============================================================ */
const I18N = {
  en: {
    nav_app: 'The App', nav_features: 'Why XUNJI', nav_process: 'Process', nav_compare: 'Compare', nav_testing: 'Testing',
    hero_eyebrow: 'PRODUCT DESIGN CASE STUDY · 2026',
    hero_l1: 'A quiet place', hero_l2: 'for everything', hero_l3: 'you own.',
    hero_sub: 'XUNJI is a local-first app that remembers what you have, where it lives, and when it runs out. No account. No cloud. Just you and your things.',
    hero_m1: '12', hero_m1l: 'INTERVIEWS', hero_m2: '04', hero_m2l: 'CORE FEATURES', hero_m3: '20+', hero_m3l: 'ITERATIONS',
    hero_cta: 'Explore the app', scroll: 'SCROLL',
    stage_local: 'LOCAL FIRST', stage_private: 'PRIVATE BY DEFAULT',
    stage_cap: 'Designed for the things you forget you have.',
    ph_home: 'Home', ph_search: 'Search your things…', ph_expiring: 'Expiring soon',
    ph_egg: 'Eggs', ph_eggmeta: 'Fridge · Food', ph_3days: '3d left',
    ph_milk: 'Whole milk', ph_milkmeta: 'Fridge · Food', ph_12days: '12d',
    ph_recent: 'Recently added', ph_vit: 'Vitamin C', ph_vitmeta: 'Med cabinet · Medicine',
    ph_sunscreen: 'Sunscreen', ph_sunmeta: 'Drawer · Opened',
    ph_tab1: 'Home', ph_tab2: 'Sort', ph_tab3: 'Alerts', ph_tab4: 'Me',
    ph_sort: 'Categories',
    cat_all: 'All', cat_best: 'Best', cat_soon: 'Soon', cat_expired: 'Expired', cat_opened: 'Opened',
    cat_stock: 'Stock', cat_food: 'Food', cat_med: 'Medicine', cat_beauty: 'Beauty', cat_clothes: 'Clothes',
    cat_docs: 'Docs', cat_tech: 'Tech', cat_other: 'Other',
    statement_eyebrow: 'THE IDEA',
    statement_h: 'The problem was never<br>having too much.<br><span class="dim">It was losing track.</span>',
    statement_note: 'Most storage apps ask you to organise more. XUNJI asks you to remember less — and quietly keeps an eye on expiry dates, opened packs, and where everything went.',
    app_eyebrow: '01 / THE APP', app_h: 'Three screens. One habit.',
    app_sub: 'Everything happens on the device. The interface stays out of the way until you need it.',
    screen1_tag: 'CAPTURE', ph_add: 'New item', mp_photo: 'Add a photo', mp_name: 'Name', mp_eggs: 'Eggs',
    mp_cat: 'Category', mp_food: 'Food', mp_loc: 'Location', mp_fridge: 'Fridge', mp_date: 'Best before',
    mp_save: 'Save item', screen1_h: 'Log it in seconds',
    screen1_p: 'Snap a photo, pick a category, set an expiry date. The form remembers your usual choices so next time takes even less.',
    screen2_tag: 'FIND', mp_searchhint: 'Or just search by name', screen2_h: 'Find it without digging',
    screen2_p: 'Twelve categories, a plain-language search, and voice input. Your things stay where you left them — you just know where that is.',
    screen3_tag: 'REMEMBER', mp_soongroup: 'EXPIRING SOON · 2', mp_3d: '3 days', mp_milk: 'Whole milk', mp_12d: '12 days', mp_expgroup: 'EXPIRED · 1',
    mp_mask: 'Face mask', mp_2d: '2d ago', mp_notetime: 'Reminders at 09:00 · adjustable',
    screen3_h: 'A nudge, not a nag',
    screen3_p: 'XUNJI tells you when something is about to expire. It never demands a routine, never scores you, and can be turned off completely.',
    screen4_tag: 'ADAPT', mp_nickname: 'My storage', mp_theme: 'Theme', mp_themeval: 'Mono / Warm / Green',
    mp_font: 'Text size', mp_fontval: 'Standard → XL', mp_elder: 'Elder mode', mp_off: 'Off', mp_lang: 'Language',
    screen4_h: 'Made for real hands',
    screen4_p: 'Three themes, adjustable type, an elder mode, and full English support. The app meets you where you are, not the other way around.',
    why_eyebrow: '02 / THE DECISIONS', why_h: 'Small choices, on purpose.',
    why1_h: 'Local is a feature',
    why1_p: 'Everything lives in the browser’s local storage. No sign-up, no sync, no data leaving the device. Privacy isn’t a settings page — it’s the architecture.',
    why2_h: 'Expiry, not aesthetics',
    why2_p: 'The thing people actually lose track of isn’t the object — it’s the date. So the app tracks best-before, opened state, and quantity, not just a pretty inventory.',
    why3_h: 'One green accent',
    why3_p: 'A monochrome interface with a single green signal for actions and alerts. The colour means the same thing everywhere, so nothing competes for attention.',
    why4_h: 'Installable, not installed',
    why4_p: 'A PWA that can sit on the home screen like a native app, but updates itself silently and works offline. No app store, no friction.',
    proc_eyebrow: '03 / THE PROCESS', proc_h: 'We listened before we drew.',
    proc_sub: 'Twelve interviews with students who share rooms. The findings were less about tidiness and more about the quiet anxiety of not knowing what you have.',
    persona_kicker: 'USER PERSONA / 01', persona_h: 'The anxious organiser', persona_meta: 'Alias · Junior · Lives on campus',
    persona_quote: '“Things get lost, and the mess comes back a week later.”', persona_src: 'Representative quote · Interview P4',
    pa1k: 'GOAL', pa1: 'Wants a clear room without spending every weekend sorting it.',
    pa2k: 'PAIN', pa2: 'Can’t remember where things went; buys duplicates; finds expired food too late.',
    pa3k: 'BEHAVIOUR', pa3: 'Occasional big clean-ups, then everything slowly drifts back.',
    pa4k: 'NEED', pa4: 'A low-effort way to record, find, and check what’s still good.',
    aff_h: 'Five patterns kept showing up', aff_sub: 'Affinity mapping · 12 interview transcripts',
    cl1h: 'Small things vanish', cl1p: '“Where did I put the charger?” “Bought the same thing twice.”',
    cl2h: 'Dates get forgotten', cl2p: '“It looked fine.” “Found the medicine after it expired.”',
    cl3h: 'Storage doesn’t fit', cl3p: '“Boxes are the wrong size.” “Dividers never line up.”',
    cl4h: 'Order doesn’t last', cl4p: '“Two weeks and it’s back to normal.” “Putting things away is the hard part.”',
    cl5h: 'Too much effort', cl5p: '“Sorting is exhausting.” “I don’t even know where to start.”',
    jour_h: 'One clean-up, pulled apart', jour_sub: 'Journey map · the emotional curve tells the real story',
    j_s1: 'DECIDING', j_s2: 'DOING', j_s3: 'AFTERWARDS',
    j_goal: 'GOAL', j1g: 'Find a reason to start', j2g: 'Sort everything quickly', j3g: 'Keep it in place',
    j_act: 'ACTION', j1a: 'Stare at the desk, avoid it', j2a: 'Empty drawers, sort into piles', j3a: 'Put things down, drift back',
    j_issue: 'FRICTION', j1i: 'Too much, don’t know where to begin', j2i: 'No clear categories, wrong boxes', j3i: 'Can’t find things, start over',
    j_emotion: 'EMOTION', j_confused: 'Confused', j_helpless: 'Helpless', j_overwhelmed: 'Overwhelmed',
    j_relieved: 'Relieved', j_disappointed: 'Disappointed',
    j_opp: 'OPPORTUNITY', j1o: 'Simple “where to start” list', j2o: 'Snap & log, no manual sorting', j3o: 'Light reminders, easy put-back',
    curve_h: 'The relief never lasts', curve_sub: 'Emotion extracted from interview language',
    curve_note: 'XUNJI exists to lift that last point. Not by organising harder — by making check-out automatic, and putting-back almost effortless.',
    map_h: 'From what we heard to what we built', map_sub: 'Every feature traces back to a sentence someone said',
    map1q: '“I buy the same thing twice.”', map1h: 'Categories + search', map1p: 'Know what you already have',
    map2q: '“It looked fine, then it wasn’t.”', map2h: 'Expiry alerts', map2p: 'Dates you don’t have to remember',
    map3q: '“Sorting is exhausting.”', map3h: 'Snap & log', map3p: 'One photo, one tap, done',
    map4q: '“I don’t want my stuff in the cloud.”', map4h: 'Local-first storage', map4p: 'Private by architecture',
    outro_eyebrow: 'FINALLY', outro_h: 'For the things you forgot you had.',
    outro_p: 'XUNJI doesn’t promise a tidier life. It just means the next time you reach for something, you’ll know exactly where it is — and whether it’s still good.',
    outro_cta: 'Open the app',
    cmp_eyebrow: '04 / BEFORE &amp; AFTER', cmp_h: 'See the difference, screen by screen.',
    cmp_sub: 'Pick a page, then drag the handle. Left is 2.0, right is 3.0. The tests told us exactly what to remove.',
    test_eyebrow: '05 / USABILITY TEST', test_h: 'We watched six people use it.',
    test_sub: '6 participants, 25 minutes each, four tasks. Version 2.0 and 3.0, side by side. What they struggled with changed what we built.',
    ts1: 'PARTICIPANTS', ts2: 'PER SESSION', ts3: 'TASKS', ts4: 'VERSIONS',
    base_h: 'Everyone had lost something. Everyone relied on memory.',
    base_p: 'From last week’s keys to a bottle of perfume that took one to two hours to find — the problem was real, frequent, and solved by remembering harder.',
    base_q1: '“翻遍了柜子和箱子，找了 10 多分钟”', base_q2: '“找香水翻遍了家里，一两个小时”', base_q3: '“没有专门方式，全靠记忆”',
    fric_h: 'Where people got stuck', fric_sub: 'Share of participants who mentioned each issue · n=6',
    br1: 'Add entry hard to spot / two entries', br2: 'Location &amp; tracking not trustworthy',
    br3: 'Form needs scrolling after photo', br4: 'Too many photo entries, shaky AI',
    br5: 'Search result feedback unclear', br6: 'Social features seen as unnecessary',
    fric_note: 'Search itself worked: 6/6 completed the find task. The friction was almost entirely at the entrance — seeing where to add, and understanding the form.',
    ver_h: 'What changed from 2.0 to 3.0', ver_sub: 'Five screens, rebuilt around what the tests showed',
    v1k: 'HOME', v1a: 'Three overview cards, multiple filter tabs', v1b: 'Direct item list: icon, name, category, quantity, expiry',
    v2k: 'ADD ITEM', v2a: 'Three photo sections, long form, scroll to finish', v2b: 'One photo slot, grouped fields, quick location tags',
    v3k: 'SOCIAL', v3a: 'Chat, friends and community feed in a hub', v3b: 'Removed entirely — nobody asked for it',
    v4k: 'LINK', v4a: 'Location card with four inline actions', v4b: 'Same card, plus a clear capability explainer',
    v5k: 'PROFILE', v5a: 'Signature and achievement levels', v5b: 'Settings grouped by interface and function',
    credit1: 'Tested 2026-11-22', credit2: 'YI Qianhui · ZHANG Wanqing · DING Ziyan'
  },
  zh: {
    nav_app: 'App 展示', nav_features: '设计亮点', nav_process: '设计过程', nav_compare: '版本对比', nav_testing: '可用性测试',
    hero_eyebrow: '产品设计案例 · 2026',
    hero_l1: '给每样东西', hero_l2: '一个安静的', hero_l3: '位置。',
    hero_sub: '寻迹是一款本地优先的收纳 App，帮你记住有什么、放在哪、什么时候到期。不登录、不上云，只有你和你的东西。',
    hero_m1: '12', hero_m1l: '位访谈对象', hero_m2: '04', hero_m2l: '个核心功能', hero_m3: '20+', hero_m3l: '轮迭代',
    hero_cta: '看看这个 App', scroll: '向下滚动',
    stage_local: '本地优先', stage_private: '默认隐私', stage_cap: '为那些你忘了自己拥有的东西而设计。',
    ph_home: '首页', ph_search: '搜索你的物品…', ph_expiring: '即将到期',
    ph_egg: '鸡蛋', ph_eggmeta: '冰箱 · 食品', ph_3days: '剩 3 天',
    ph_milk: '全脂牛奶', ph_milkmeta: '冰箱 · 食品', ph_12days: '剩 12 天',
    ph_recent: '最近添加', ph_vit: '维生素C', ph_vitmeta: '药箱 · 药品',
    ph_sunscreen: '防晒霜', ph_sunmeta: '抽屉 · 已开封',
    ph_tab1: '首页', ph_tab2: '分类', ph_tab3: '提醒', ph_tab4: '我的', ph_sort: '分类',
    cat_all: '全部', cat_best: '最佳', cat_soon: '临期', cat_expired: '过期', cat_opened: '已开封',
    cat_stock: '库存', cat_food: '食品', cat_med: '药品', cat_beauty: '化妆品', cat_clothes: '衣物',
    cat_docs: '证件', cat_tech: '电子', cat_other: '其他',
    statement_eyebrow: '设计初衷',
    statement_h: '问题从来不是<br>东西太多，<br><span class="dim">而是找不到、记不住。</span>',
    statement_note: '大多数收纳 App 让你整理更多，寻迹让你记住更少——它会悄悄盯着保质期、开封状态和每样东西去了哪里。',
    app_eyebrow: '01 / App 展示', app_h: '三个界面，一个习惯。',
    app_sub: '一切都发生在设备本地。界面只在你需要时出现，其余时间不打扰。',
    screen1_tag: '记录', ph_add: '新增物品', mp_photo: '添加照片', mp_name: '名称', mp_eggs: '鸡蛋',
    mp_cat: '分类', mp_food: '食品', mp_loc: '位置', mp_fridge: '冰箱', mp_date: '保质期至',
    mp_save: '保存物品', screen1_h: '几秒钟就记好',
    screen1_p: '拍张照、选分类、定到期日。表单会记住你常填的选项，下次更快。',
    screen2_tag: '查找', mp_searchhint: '也可以直接搜名字', screen2_h: '不用翻箱倒柜',
    screen2_p: '12 个分类、直白的语言搜索，还有语音输入。东西还在你放的地方，你只是知道它在哪了。',
    screen3_tag: '提醒', mp_soongroup: '即将到期 · 2', mp_3d: '3 天', mp_milk: '全脂牛奶', mp_12d: '12 天', mp_expgroup: '已过期 · 1',
    mp_mask: '面膜', mp_2d: '过期 2 天', mp_notetime: '提醒时间 09:00 · 可调整',
    screen3_h: '提醒一下，不啰嗦',
    screen3_p: '东西快到期时告诉你一声。不要求你打卡，不给你打分，也完全可以关掉。',
    screen4_tag: '适配', mp_nickname: '我的收纳', mp_theme: '主题', mp_themeval: '黑白 / 暖白 / 浅绿',
    mp_font: '字号', mp_fontval: '标准 → 超大', mp_elder: '老年模式', mp_off: '关闭', mp_lang: '语言',
    screen4_h: '为真实的手设计',
    screen4_p: '三套主题、可调字号、老年模式和完整的英文支持。App 来适应你，而不是反过来。',
    why_eyebrow: '02 / 设计取舍', why_h: '每一个小决定，都有原因。',
    why1_h: '本地本身就是功能',
    why1_p: '所有数据都留在浏览器本地。不注册、不同步、数据不离开设备。隐私不是一个设置页，而是整个架构。',
    why2_h: '记录日期，而不是摆拍',
    why2_p: '人们真正跟丢的不是东西，而是日期。所以 App 记录保质期、开封状态和数量，而不只是一份好看的清单。',
    why3_h: '只用一种绿',
    why3_p: '黑白界面里，唯一的绿色用来表示操作和提醒。这个颜色到处都是同一个意思，没有什么在抢注意力。',
    why4_h: '可安装，但不用安装',
    why4_p: 'PWA 可以像原生 App 一样放在桌面，却能悄悄自我更新、离线可用。没有应用商店，也没有门槛。',
    proc_eyebrow: '03 / 设计过程', proc_h: '先听，再画。',
    proc_sub: '我们访谈了 12 位合住宿舍的同学。结论很少关于「整洁」，更多是一种「不知道自己有什么」的隐隐焦虑。',
    persona_kicker: '用户画像 / 01', persona_h: '收纳焦虑的人', persona_meta: '化名 · 大三 · 住校',
    persona_quote: '「东西总是找不到，收拾完没过多久又乱了。」', persona_src: '代表性原话 · 访谈 P4',
    pa1k: '目标', pa1: '希望房间清清爽爽，又不想每个周末都在整理。',
    pa2k: '痛点', pa2: '记不住东西放哪、重复购买、发现过期食品时已经太晚。',
    pa3k: '行为', pa3: '偶尔一次大扫除，然后一切又慢慢回到原样。',
    pa4k: '需求', pa4: '一个不费力的方式，记录、找到、确认东西还能不能用。',
    aff_h: '有五类问题反复出现', aff_sub: '亲和图 · 12 份访谈记录归类',
    cl1h: '小东西总是消失', cl1p: '「充电器放哪了？」「又买了同样的东西。」',
    cl2h: '日期总是被忘记', cl2p: '「看着还好啊。」「药是过期后才翻出来的。」',
    cl3h: '收纳结构不合用', cl3p: '「盒子尺寸不对。」「分隔总觉得别扭。」',
    cl4h: '整齐维持不了', cl4p: '「两周就打回原形。」「最难的是放回去。」',
    cl5h: '做起来太累', cl5p: '「分类太麻烦了。」「我都不知道从哪下手。」',
    jour_h: '把一次整理拆开看', jour_sub: '用户旅程图 · 情绪曲线才是真正的问题',
    j_s1: '决定整理', j_s2: '动手整理', j_s3: '整理之后',
    j_goal: '目标', j1g: '找一个必须收拾的理由', j2g: '快点把东西分好类', j3g: '让东西留在原位',
    j_act: '行为', j1a: '盯着桌面发呆，不想动', j2a: '清空抽屉，分成一堆堆', j3a: '随手放下，慢慢又乱了',
    j_issue: '卡点', j1i: '东西太多，不知从哪开始', j2i: '分类标准不清，盒子不合适', j3i: '找不到东西，又重来一遍',
    j_emotion: '情绪', j_confused: '困惑', j_helpless: '无助', j_overwhelmed: '压倒性',
    j_relieved: '释然', j_disappointed: '失望',
    j_opp: '机会', j1o: '一键生成「从哪开始」清单', j2o: '拍照即记录，不用手动分类', j3o: '轻提醒，顺手放回去',
    curve_h: '那种释然，维持不了多久', curve_sub: '从访谈原话里提取的情绪节点',
    curve_note: '寻迹想做的，就是把最后一个点抬起来。不是让人更努力地整理，而是让「确认」自动发生，让「放回去」几乎不费力。',
    map_h: '从听到的，到做出来的', map_sub: '每个功能都能追溯到某人说过的一句话',
    map1q: '「我又买了同样的东西。」', map1h: '分类 + 搜索', map1p: '先知道自己有什么',
    map2q: '「看着还好，结果过期了。」', map2h: '到期提醒', map2p: '日期不用你来记',
    map3q: '「分类太麻烦了。」', map3h: '拍照记录', map3p: '一张照片，点一下，完成',
    map4q: '「我不想把东西放到云上。」', map4h: '本地优先存储', map4p: '从架构上保证隐私',
    outro_eyebrow: '最后', outro_h: '为那些你忘了自己拥有的东西。',
    outro_p: '寻迹不承诺让你变得更整洁。它只保证，下次你伸手找东西的时候，会清楚知道它在哪、还能不能用。',
    outro_cta: '打开 App',
    cmp_eyebrow: '04 / 版本对比', cmp_h: '一屏一屏，看变化。',
    cmp_sub: '选一个页面，拖动滑块。左边是 2.0，右边是 3.0。测试告诉我们哪些东西该拿掉。',
    test_eyebrow: '05 / 可用性测试', test_h: '我们看着六个人用它。',
    test_sub: '6 名受访用户，每人 25 分钟，四个任务。2.0 与 3.0 界面对比。他们卡住的地方，改变了我们做出来的东西。',
    ts1: '受访用户', ts2: '每人时长', ts3: '个任务', ts4: '个版本',
    base_h: '六个人都找不到过东西，六个人都靠脑子记。',
    base_p: '从上周找钥匙，到找一瓶香水翻遍家里花了一两个小时——问题是真实、高频的，而当时的解法只有「更努力地记」。',
    base_q1: '「翻遍了柜子和箱子，找了 10 多分钟」', base_q2: '「找香水翻遍了家里，一两个小时」', base_q3: '「没有专门方式，全靠记忆」',
    fric_h: '用户卡在哪里', fric_sub: '提到该问题的用户比例 · n=6',
    br1: '添加入口不明显 / 有两个入口', br2: '定位与寻物缺乏把握',
    br3: '拍照后还要往下滑才能填完表单', br4: '拍照入口多、AI 识别不准',
    br5: '搜索结果反馈不明显', br6: '认为社区和加好友没有必要',
    fric_note: '搜索本身是通的：6/6 都完成了查找任务。障碍几乎都集中在入口——看不到在哪添加、看不懂表单。',
    ver_h: '从 2.0 到 3.0，改了什么', ver_sub: '五个界面，按测试看到的结论重做',
    v1k: '首页', v1a: '三个概览卡片，多组筛选标签挤在一屏', v1b: '物品列表直出：图标、名称、分类、数量、过期日期',
    v2k: '录入', v2a: '三段拍照、长表单，要下滑才能填完', v2b: '一处拍照上传，字段分组，位置快捷标签',
    v3k: '社交', v3a: '功能中心含消息聊天、好友与社区动态', v3b: '完全移除——没有人需要它',
    v4k: '联动', v4a: '定位卡片内直排四个操作', v4b: '保留原卡片，补充「联动能力」说明区',
    v5k: '我的', v5a: '个性签名与成就等级入口', v5b: '设置按界面与功能分组',
    credit1: '测试于 2026-11-22', credit2: '易千惠 · 张婉清 · 丁紫妍'
  }
};

/* ---------- theme ---------- */
function setTheme(theme){
  document.documentElement.setAttribute('data-theme', theme);
  document.querySelectorAll('.theme-btn').forEach((btn)=>{
    btn.classList.toggle('active', btn.dataset.theme === theme);
  });
  try { localStorage.setItem('xunji-theme', theme); } catch (e) {}
}
document.querySelectorAll('.theme-btn').forEach((btn)=>{
  btn.addEventListener('click', ()=> setTheme(btn.dataset.theme));
});
let savedTheme = null;
try { savedTheme = localStorage.getItem('xunji-theme'); } catch (e) {}
setTheme(['dark','light','warm'].includes(savedTheme) ? savedTheme : 'dark');

let currentLang = 'en';

function setLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = I18N[lang][el.dataset.i18n];
    if (value !== undefined) el.innerHTML = value;
  });
  document.querySelectorAll('[data-en][data-zh]').forEach((el) => {
    el.textContent = lang === 'zh' ? el.dataset.zh : el.dataset.en;
  });
  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  try { localStorage.setItem('xunji-lang', lang); } catch (e) {}
}

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

let saved = null;
try { saved = localStorage.getItem('xunji-lang'); } catch (e) {}
setLang(saved === 'zh' ? 'zh' : 'en'); // default: English

/* ---------- mobile menu ---------- */
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.querySelector('.nav');
if (menuToggle && mobileNav){
  menuToggle.addEventListener('click', ()=>{
    const open = mobileNav.classList.toggle('open');
    menuToggle.classList.toggle('open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  mobileNav.querySelectorAll('a').forEach((link)=> link.addEventListener('click', ()=>{
    mobileNav.classList.remove('open');
    menuToggle.classList.remove('open');
    menuToggle.setAttribute('aria-expanded','false');
  }));
}

/* ---------- before / after compare ---------- */
const cmpTabs = document.querySelectorAll('.cmp-tab');
const cmpPanels = document.querySelectorAll('.cmp-panel');
cmpTabs.forEach((tab)=>{
  tab.addEventListener('click', ()=>{
    cmpTabs.forEach((t)=> t.classList.toggle('active', t === tab));
    cmpPanels.forEach((p)=> p.classList.toggle('active', p.dataset.panel === tab.dataset.page));
  });
});

document.querySelectorAll('.cmp-frame').forEach((frame)=>{
  const divider = frame.querySelector('.cmp-divider');
  function update(clientX){
    const rect = frame.getBoundingClientRect();
    let pos = ((clientX - rect.left) / rect.width) * 100;
    pos = Math.max(6, Math.min(94, pos));
    frame.style.setProperty('--pos', pos + '%');
    divider.style.left = pos + '%';
  }
  frame.addEventListener('pointerdown', (e)=>{
    frame.setPointerCapture(e.pointerId);
    update(e.clientX);
  });
  frame.addEventListener('pointermove', (e)=>{
    if (frame.hasPointerCapture(e.pointerId)) update(e.clientX);
  });
  frame.addEventListener('pointerup', (e)=> frame.releasePointerCapture(e.pointerId));
});

/* ---------- scroll reveal ---------- */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

/* ---------- nav highlight ---------- */
const navLinks = document.querySelectorAll('.nav a');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
    });
  });
}, { threshold: 0.3 });
document.querySelectorAll('main section[id]').forEach((s) => sectionObserver.observe(s));

/* ---------- screenshot lightbox ---------- */
const lightbox = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
const lbCap = document.getElementById('lbCap');
document.querySelectorAll('.screen-shot img').forEach((img)=>{
  img.parentElement.addEventListener('click', ()=>{
    lbImg.src = img.src;
    lbCap.textContent = img.alt;
    lightbox.classList.add('open');
  });
});
function closeLightbox(){ lightbox.classList.remove('open'); lbImg.src=''; }
document.getElementById('lbClose').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e)=>{ if(e.target===lightbox) closeLightbox(); });

/* ---------- hero 3d showcase ---------- */
const showcase3d = document.getElementById('showcase3d');
let s3dReady = false, s3dTimer = null;
function open3D(){
  showcase3d.classList.add('open');
  s3dReady = false;
  clearTimeout(s3dTimer);
  s3dTimer = setTimeout(()=>{ s3dReady = true; }, 1000);
}
function close3D(){
  if (!s3dReady) return;
  showcase3d.classList.remove('open');
}
document.querySelectorAll('.hero-shot').forEach((el)=> el.addEventListener('click', open3D));
showcase3d.addEventListener('click', close3D);
document.addEventListener('keydown', (e)=>{ if(e.key==='Escape'){ close3D(); closeLightbox(); } });

/* ---------- compare keyboard navigation ---------- */
document.addEventListener('keydown', (e)=>{
  if (lightbox.classList.contains('open') || showcase3d.classList.contains('open')) return;
  if (!['ArrowLeft','ArrowRight'].includes(e.key)) return;
  const activeFrame = document.querySelector('.cmp-panel.active .cmp-frame');
  if (!activeFrame) return;
  const rect = activeFrame.getBoundingClientRect();
  if (rect.top > innerHeight || rect.bottom < 0) return;
  const cur = parseFloat(activeFrame.style.getPropertyValue('--pos')) || 50;
  const next = Math.max(6, Math.min(94, cur + (e.key==='ArrowRight'?8:-8)));
  activeFrame.style.setProperty('--pos', next+'%');
  activeFrame.querySelector('.cmp-divider').style.left = next+'%';
});
cmpTabs.forEach((tab, i)=>{
  tab.addEventListener('keydown', (e)=>{
    if (e.key!=='ArrowRight' && e.key!=='ArrowLeft') return;
    e.preventDefault();
    const next = cmpTabs[(i + (e.key==='ArrowRight'?1:-1) + cmpTabs.length) % cmpTabs.length];
    next.focus(); next.click();
  });
});

/* ---------- animated bars ---------- */
const barObserver = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if (!entry.isIntersecting) return;
    entry.target.querySelectorAll('.br-track i').forEach((bar)=>{
      const w = bar.style.width;
      bar.style.width = '0';
      requestAnimationFrame(()=> requestAnimationFrame(()=> bar.style.width = w));
    });
    barObserver.unobserve(entry.target);
  });
}, {threshold:.3});
const friction = document.querySelector('.friction');
if (friction) barObserver.observe(friction);

/* ---------- cursor blob ---------- */
const cursorBlob = document.getElementById('cursorBlob');
if (cursorBlob && matchMedia('(pointer:fine)').matches && !matchMedia('(prefers-reduced-motion:reduce)').matches){
  let tx=0, ty=0, cx=-500, cy=-500;
  window.addEventListener('pointermove', (e)=>{
    tx=e.clientX; ty=e.clientY;
    cursorBlob.classList.add('visible');
  });
  document.addEventListener('pointerleave', ()=> cursorBlob.classList.remove('visible'));
  (function loop(){
    cx += (tx-cx)*.12; cy += (ty-cy)*.12;
    cursorBlob.style.transform = `translate(${cx-210}px,${cy-210}px)`;
    requestAnimationFrame(loop);
  })();
}

/* ---------- hero pointer parallax ---------- */
const heroShots = document.querySelector('.hero-shots');
if (heroShots && matchMedia('(pointer:fine)').matches && !matchMedia('(prefers-reduced-motion:reduce)').matches){
  heroShots.addEventListener('pointermove', (e)=>{
    const r = heroShots.getBoundingClientRect();
    const x = (e.clientX - r.left)/r.width - .5;
    const y = (e.clientY - r.top)/r.height - .5;
    heroShots.querySelector('.shot-mid').style.translate = `${x*-14}px ${y*-10}px`;
    heroShots.querySelector('.shot-back').style.translate = `${x*14}px ${y*-8}px`;
  });
  heroShots.addEventListener('pointerleave', ()=>{
    heroShots.querySelector('.shot-mid').style.translate = '';
    heroShots.querySelector('.shot-back').style.translate = '';
  });
}
