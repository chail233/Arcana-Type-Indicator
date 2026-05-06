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