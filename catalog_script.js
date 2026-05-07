//样式表
const styles = [
    "style.css",
    "style_p3.css",
    "style_yvkari.css",
]
const styles_cnt = styles.length;
//当前样式索引
let style_idx = 0;
//全局样式表
const style = document.getElementById("glo_theme");
//结果描述表
const descriptions = [
    //0.愚者
    {
        imgs:["res/arcanas/0.png", "res/arcanas/0-makoto.png", "res/arcanas/0-kotone.png"],
        ps:["愚者是第一张卡牌，象征着开始与无限的可能性。",
            "我想着大概可以理解为一个人十八岁的时候，这时候你风华正茂，有着宝贵的青春，有着太阳初升的活力，你有着无限的可能。",
            "可以做到任何你想做的时，只不过现在才刚刚开始。",
            "愚者有着无尽的探险精神，他身后闪耀的太阳代表着愚人的无穷智慧，那是一种在神学上来说的“疯狂的智慧”。而经常伴随着他的那只狗，我认为可以视为他的一种动物的原始欲望，大概可以称之为“现实世界”吧，你看他踮起的脚尖，他似乎并不关心他在哪儿，他的心中永远向着下一个目的地。所谓大智若愚就是这样的一种状态吧。"
        ]
    },
    //1.魔术师
    {
        imgs:["res/arcanas/1.png","res/arcanas/1-mona.png"],
        ps:[
            "魔术师象征着创造与积极性，同时也代表着不成熟。",
            "“魔术师（Magician）”的标准韦特塔罗牌面人物一手指天一手指地，头顶是无限的符号，腰间缠着象征智慧的蛇，而面前的桌子上则是象征着全部塔罗牌组的宝剑、圣杯、权杖和星币（构成世界的四要素），表示这张牌蕴含着强大的力量，而“魔术师”沟通天地的手势也指出他可能是“神的使者”。因此，被称为魔术师的人常常有着一个使命——引路人。",
            "这张阿尔卡那的序号是Ⅰ，代表“愚人之旅”的开始。“愚人之旅”贯穿所有塔罗牌，而它的开始就是“魔术师”，这个人物相当于“愚人”的导师，开发、引导他使用自己不了解的强大的力量。"
        ]
    },
    //2.女祭司
    {
        imgs:["res/arcanas/2.png", "res/arcanas/2-queen.png"],
        ps:[
            "女教皇象征精神上的成长，同时代表着传授必要知识的人。女教皇拥有很好的直觉与智慧。",
            "假如说魔术师散发着阳刚的话，那么女教皇则是阴柔的代表，于静寂中凸现沉稳，与寡言中凸现睿智。女教皇内心是矛盾的，就像其坐在两根黑白分明的廊柱之间那样，静默却又波涛汹涌，在黑与白、日与夜、正义与邪恶的徘徊中体味生存的意义、感悟人世沧桑。"
        ]
    },
    //3.女皇
    {
        imgs:["res/arcanas/3.png","res/arcanas/3-mitsuru.png"],
        ps:[
            "与女教皇不同，女皇象征着母性与生命力，代表母亲般的慈爱。",
            "“女皇（Empress）”(又称“女帝”)的阿尔卡那象征“母性的集合”。标准韦特塔罗牌面的女性身上的珠宝代表金星——罗马神话中的维纳斯，也就是希腊神话中的爱与美之女神阿芙罗狄忒；而前方的象征丰收的麦田以及身后象征生命力的森林河流则代表着希腊神话中的谷物女神德墨忒尔。这张牌代表了爱、美、生命和丰收。",
            "“女皇”代表了女性优雅、感性的一面，而“女教皇”则是理性的一面，所以“女皇”的行事方式也更加的热情和优雅。"
        ]
    },
    //4.皇帝
    {
        imgs:["res/arcanas/4.png", "res/arcanas/4-kanji.png"],
        ps:[
            "皇帝是与女皇对应的卡牌，代表父性，统率与决断力。",
            "你是一个对掌控力与秩序痴迷的人，你希望把事情纳入在自己的掌控之下，希望一切能够按你的规则来运行。你大概是一个比较有领导力的人。"
        ]
    },
    //5.教皇
    {
        imgs: ["res/arcanas/5.png", "res/arcanas/5-Ryoutarou.png"],
        ps:["教皇象征着宽容和充实的精神，暗示与宗教或是自己精神世界的接触。",
            "你有着自己的一套价值观与世界观，你坚信自己的一套认知体系并以此规范他人甚至引导集体。你的精神世界是充实的。",
            "教皇充满着智慧，教育、引导人们探索着内心的世界。所以很多时候正位的“教皇”表明学业顺利或者是有贵人相助。逆位的“教皇”则代表打破常规过于激进或者墨守成规过于保守",
        ]
    },
    //6.恋爱
    {
        imgs:["res/arcanas/6.png","res/arcanas/6-yvkari.png"],
        ps:["恋爱意味着选择只属于自己的东西。",
            "“恋爱”意味着正式踏入社会。而现实生活中，人们在离开象牙塔之后面临的就是未来道路的选择，如何解答这些选择的困惑，须要沟通。亚当和夏娃代表的不仅仅是男女的结合，还代表了合作、结盟的人际关系。",
            "你擅长与他人打好关系并合作，你大概在形成自己的价值观与世界观。"
        ]
    },
    //7.战车
    {
        imgs:["res/arcanas/7.png", "res/arcanas/7-chie.png"],
        ps:["战车象征着胜利，不过此时的胜利只是目所能及的，表面性的胜利。",
            "The Arcana is the means by which all is revealed... One of life's greatest blessings is the freedom to pursue one's goals.这张阿尔卡那显示，追逐目标梦想之自由是生命中的一大幸事。",
            "“战车”代表的是更具体的意志力以及行动力。“战车”的标准韦特塔罗牌面是一位战士驾着两只狮身人面兽拉着的战车，他本人手持象征意志与力量的矛型权杖，头戴象征胜利的桂冠，胸前的图案代表四元素的“土”，象征意志。除此之外，他背对城市，表明他实际上是一位守护者而不是一位在前线冲杀的屠夫。而他并没有用缰绳驾驭狮身人面兽，说明他本身具有强大的意志，仅凭意志就可以控制这两只猛兽。由此看来，作为守护者的“战车”侧重强大的意志与自控能力，而逆位的“战车”则代表鲁莽、年轻气盛。"
        ]
    },
    //8.力量
    {
        imgs:["res/arcanas/11.png"],
        ps:["力量象征着自己的意志和热情，一般被描绘为受理性控制下的力量。",
            "你拥有的不是蛮力，而是一种内在力量。你可以管理好自己的情绪，你是精神上的强者，懂得以柔克刚，能与他人平滑地相处。"
        ]
    },
    //9.隐者
    {
        imgs:["res/arcanas/9.png","res/arcanas/9-futaba.png"],
        ps:["隐者是探求者，意味着向自我的深处不断迈进。",
            "“隐者（Hermit）”本身就是一种充满智慧、但是因为享受孤独而不为人知的生活方式的文化符号。",
            "你注重自己的内心成长，你喜欢一个人去思考、学习。你同时也是一个拥有智慧的引导者。"
        ]
    },
    //10.命运
    {
        imgs:["res/arcanas/10.png","res/arcanas/10-naoto.png"],
        ps:["命运象征着人无法干涉的宿命，以及自己从中获得的对自己未来的决断。",
            "“命运”代表着人们日常活动的圆圈时时刻刻都在变化，这预示着命运的不可预测性，也就是俗称的“塞翁失马焉知祸福”。“命运”好坏的结果是可以相互转变的，即使是逆位也有否极泰来的意思。",
            "人生中有很多事情是无法改变的，“事与愿违才是人生的常态啊。”我们必须学会接受它。",
            "你是一个懂得接受命运与适应命运的人。"
        ]
    },
    //11.正义
    {
        imgs:["res/arcanas/8.png"],
        ps:["正义顾名思义，象征着正大光明。正义的出现代表人格有了自己的价值观，不会被流言蜚语所左右，根据自己的想法而行动。",
            "“正义（Justice）”的标准韦特塔罗牌面是一位端坐的人，右手的宝剑象征公正和决心，但是双刃意味着即可行善亦可作恶；他的身后有两根柱子，象征着正面和负面的力量。他的左手的天平意味着抉择。“正义”代表着心胸宽阔、坚持正义与道德。",
            "你有着自己的一套善恶标准，你重视是非对错。"
        ]
    },
    //12.倒悬者
    {
        imgs:["res/arcanas/12.png","res/arcanas/12-Munehisa.png"],
        ps:["力量象征热情和理性，但当这些都没有用时，人就陷入了无所适从的困境——成为了“倒悬者”",
            "人虽然被倒吊着，但是正好提供了他完全不同的视野去观察，并由此获得不同的理解。倒吊者知道无谓的挣扎是没有用处的，只会让自己精疲力尽而已，还不如花这些力气去趁机省思自己。这张牌显示的是，就是遇到再糟的状况，只要我们耐心等待，厄运终究会过去的好好利用这段时光去反思，放弃不必要的东西，才能去做该做的事。让生命中的事物自然而然地发生，或许将为你带来惊奇。",
            "你也许是一个付出大于收获的人，但也因此你懂得了许多。"
        ]
    },
    //13.死神
    {
        imgs:["res/arcanas/13.png", "res/arcanas/13-tae.png"],
        ps:["倒悬者的困境如果无法可解，那随之而来的就是精神上的死亡，俗称心死。但同时这张牌还意味着转折点，旧事物的终结，新事物的诞生。",
            "「死神」就是「死亡」的意思。但是，您不需害怕。死是生的一部分，表里一体。所有的存在终会一死……然后新生命再度诞生。老旧者销声匿迹，而新生者即将萌芽……就是这样的一张阿尔卡那呀。位于您心中的老旧者、新生者……那些也会不断死去而后重生。",
            "终结意味着新的开始。你是一个总能从失败中重生的人。准备迎接新的开始吧。"
        ]
    },
    //14.节制
    {
        imgs:["res/arcanas/14.png"],
        ps:["从死神开始，代表这个人顺利度过了外界和内心的初步考验，有了自己的三观。死神后的第一张牌是节制，意味着接触不同的价值观与成长。",
            "从水下第一个生命的萌芽开始.....总之，你已经历许多。你懂得调和自己的内心，懂得处理人情世故，能够倾听他人。你是一个稳重的人。"
        ]
    },
    //15.恶魔
    {
        imgs:["res/arcanas/15.png"],
        ps:["恶魔的象征是迷失在花言巧语与诱惑之中。",
            "“恶魔（Devil）”向来都是欲望和堕落的象征。“恶魔”牌面和“恋爱”的布局几乎一样，只是天使被换成了希腊神话中代表欲望的潘神，他右手掌心的符号是象征着限制于惰性的土星，而左手则拿着火炬煽动亚当的欲火，另一边的夏娃则长出了角和尾巴堕落成魅魔，露出了欲望和兽性。虽然二人都被铁链拴在潘神脚下，但是实际上他们脖子上的铁环非常松，也就是说他们可以随时逃走，这里的寓意是沉溺于欲望，乐不思蜀。",
            "你是一个欲望和执念比较强烈的人，当然，这并不一定是坏事。"
        ]
    },
    //16.塔
    {
        imgs:["res/arcanas/16.png", "res/arcanas/16-shinya.png"],
        ps:["塔的出现代表着初步建立的价值观面临第二次冲击，有崩塌的风险。",
            "尽管你可能已经经历过成长与觉悟，但你仍然没有到达“世界”。面对现状，你害怕突如其来的变故，因为你还不够稳定。你仍需磨砺自己，仍需成长。"
        ]
    },
    //17.星星
    {
        imgs:["res/arcanas/17.png", "res/arcanas/17-kuma.png"],
        ps:["在塔的冲击下，即将崩坏崩坏的现实还残存有一丝微弱的光芒：“星”。",
            "成为地上众生的希望，非常强大的牌。它代表短暂的光辉……然后终有一天会落至地面消逝……这也让人感到一抹凄凉呢。",
            "在“愚人之旅”中，出现在灾难之后的“星星”代表了内心的平静，要求“愚人”学会在任何情况下都保持内心的信心和希望。",
            "你是一个乐观，充满希望的人。对于明天，你相信总会好起来的。"
        ]
    },
    //18.月亮
    {
        imgs:["res/arcanas/18.png", "res/arcanas/18-ai.png"],
        ps:["即使找到了希望，人依然要怀揣着不安继续前行。",
            "“月（Moon）”牌面下方是一只代表深层次的恐惧的龙虾，而中间是一只狼和一只被驯化的狼——狗，它们代表了内心被驯化和没有驯化的野性，而头顶的月亮包含了新月和满月，只是新月在人脸的引导下向满月变化着。在西方的神话传说中，满月和狼一起出现则让人想起狼人，满月激发了狼人内心的野性，从而促使它们变身成狼，在人间散播恐惧。这正是“月”所预示的恐惧和不安。“月”的课题则是：潜意识深层的恐惧需要自己去面对。",
            "你的内心复杂而不安，你总是有许多心事。同时，这也意味着你是一个内心细腻，情绪敏感的人。"
        ]
    },
    //19.太阳
    {
        imgs:["res/arcanas/19.png"],
        ps:["心理上的成长，终点是温暖的未来，太阳。太阳牌代表人格真正意义上的完成。",
            "太阳对应的角色几乎总是处在糟糕的境地，这种境况掩盖了几乎所有潜在的乐观情绪。不过在与自己心灵的对话和探索中，他们常常对生活的意义有了更深刻的思考，找到了人生的答案，从而牌位翻转，成为充满希望和光芒的正位“太阳”。",
            "你找到了自己的人生答案了吗？你一定是一个富有生命力的人，你已经成为了一个太阳，一个发光的人，总能给周围带来活力与希望。"
        ]
    },
    //20.审判
    {
        imgs:["res/arcanas/20.png", "res/arcanas/20-sae.png"],
        ps:["在人生旅途接近终点的时候，等待着的是“审判”。这是回顾过往道路，等待判决的时刻。",
            "审判阿尔卡那对应的角色往往很清醒、很聪明，以发展的眼光看待问题。当他们将直觉与智慧相结合时，能展现出最强大最现实的思维能力。",
            "你是一个善于反思自己、善于发现错误的人。你的思维能力非同一般。"
        ]
    },
    //21.世界
    {
        imgs:["res/arcanas/21.png"],
        ps:["世界，代表着成功与完美，也是人生旅途的终点。","你追求着成功与圆满，你渴望完成自己的梦想，你会迎来你的胜利与新的开始。你的人生终会达到“世界”的境界。"]
    },
]
//结果表
const results = [
    {id:0, name:"愚者", description: descriptions[0]},
    {id:1, name:"魔术师", description: descriptions[1]},
    {id:2, name:"女教皇", description: descriptions[2]},
    {id:3, name:"女皇", description: descriptions[3]},
    {id:4, name:"皇帝", description: descriptions[4]},
    {id:5, name:"教皇", description: descriptions[5]},
    {id:6, name:"恋爱", description: descriptions[6]},
    {id:7, name:"战车", description: descriptions[7]},
    {id:8, name:"力量", description: descriptions[8]},
    {id:9, name:"隐者", description: descriptions[9]},
    {id:10, name:"命运", description: descriptions[10]},
    {id:11, name:"正义", description: descriptions[11]},
    {id:12, name:"倒悬者", description: descriptions[12]},
    {id:13, name:"死神", description: descriptions[13]},
    {id:14, name:"节制", description: descriptions[14]},
    {id:15, name:"恶魔", description: descriptions[15]},
    {id:16, name:"高塔", description: descriptions[16]},
    {id:17, name:"星星", description: descriptions[17]},
    {id:18, name:"月亮", description: descriptions[18]},
    {id:19, name:"太阳", description: descriptions[19]},
    {id:20, name:"审判", description: descriptions[20]},
    {id:21, name:"世界", description: descriptions[21]},
]

//组织答案描述
function result_desc_html(rank){
    let desc = document.createElement("div");
    desc.classList.add("result_desc");
    let desc_imgs = document.createElement("div");
    desc_imgs.classList.add("res_img");
    descriptions[rank].imgs.forEach(img => {
        let img_elm = document.createElement("img");
        img_elm.classList.add("character");
        img_elm.src = img.toString();
        desc_imgs.appendChild(img_elm);
    });
    desc.appendChild(desc_imgs);
    descriptions[rank].ps.forEach(p=>{
        let p_elm = document.createElement("p");
        p_elm.innerHTML = p.toString();
        desc.appendChild(p_elm);
    });
    return desc;
}
//组织其他答案html
function  results_html(rank){

    return `
                <h2>${rank+1}.</h2>
                <span>${results[rank].name}</span>
            `
}
//切换主题方法
function switch_style(){
    style_idx = (style_idx+1)%styles_cnt;
    style.href = styles[style_idx];
}
//初始化
function init(){
    const result_container = document.getElementById("result-container");
    for(let i=0;i<=descriptions.length-1;++i){
        const result_elm = document.createElement("div");
        result_elm.classList.add("results");
        result_elm.innerHTML = results_html(i);
        result_elm.appendChild(result_desc_html(i));
        result_container.appendChild(result_elm);
    }
    load_event();
}
//绑定事件
function load_event(){
    //首页
    const btn_home = document.getElementById("home");
    btn_home.addEventListener("click", ()=>{
        window.location.assign("index.html");
    });
    //切换主题
    const btn_theme = document.getElementById("theme");
    btn_theme.addEventListener("click", switch_style);
    //图鉴
    const btn_catalog = document.getElementById("catalog");
    btn_catalog.addEventListener("click", ()=>{
        window.location.assign("catalog.html");
    });
}
init();