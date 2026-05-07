const DEBUG = true;
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
//文本存储
const texts = [
    "一个拥有大地图与宏伟世界观，充满探索要素的RPG游戏总是吸引人的。谁不想急头白脸地去陌生的地方冒险呢？我很乐意去探索不熟悉的地方，甚至去山里面探索野路。",
    "社团活动有时格外令人费心（虽然有些社团根本没有什么活动）...而我简直就是社团里的那个大牛，譬如社团办活动，有我在这个活动才能办得顺利。",
    "关于吵架这件事...一群人吵翻天时，我还是先沉默观察，理清脉络后再表态，不能冲动的啊！",
    "关心与照顾别人的情绪也是很重要的，倘若我的好兄弟/闺蜜遇到了麻烦与困难，我得先安抚一下TA的情绪，然后再看看怎么解决。",
    "有时候我们不得不进行一些小组合作...到底是谁发明的小组合作？？这群家伙如果协调不好的话，还是得我这样有领导才干的人来安排啊。",
    "当我第一次尝试去做某件事时，如果我做不好或者不知道该怎么做的话，我还是决定去请教一下老资历（前辈）们。",
    "喜欢一个人是一种很平常的经历，大概每个人都会有。对于一个喜欢的异性，我很乐意主动去接近TA，这没什么不好的。",
    "体测？！我补药体测啊！（前面的不代表观点QAQ）不过在体测中，我会竭尽全力地取得最好的成绩，即使那样会累成狗。",
    "当别人误解了我的观点并因此责备我时，我不会跟他急，而是好好跟他讲清楚。",
    "我们这一代人（00后）总是与考试打交道...考试失利是一件令人有点难过的事，容易令人产生自我怀疑，容易令人失落...当我考试失利的时候，我会好好地总结这次考试，思考自己为什么做得不好并尝试修正。",
    "人生恐怕总会遇到各种各样的意外，也许命运就是一种喜欢开玩笑的东西。“一切都是命运石之门的选择！”。当命运向我开玩笑时，我相信这就是世界的选择，接受它便可以拥有新的开始。",
    "有些事情不是仅仅关系利益的，而是关乎公道与正义的！我可以不纠结一些利益，但我不能对不公与腐朽坐视不理！",
    "舍己为人是一个值得讨论的话题，生活中总是存在一些舍己为人的英雄。而我也崇尚这样的精神，当他人或社会需要我时，我可以在一定程度上奉献自己。",
    "有时候我们不得不失去一些东西，这是无法避免的。我们曾经最好的朋友，此刻也许已经成为了我们的陌生人。我们的至亲，也终有一天会离开我们。对于一段关系的结束，尽管它很令人难过，我也可以很快接受，走出阴霾，这是没办法的。",
    "任何事情走向极端一定不会是正确的，我能在极端中找到平衡。",
    "有一件喜欢的东西是不容易的，有足够的Money更是不容易的！但是，对于我喜欢的东西，即使很贵我还是按耐不住购买的冲动。",
    "稳定是一件好事，谁不想要一个稳定的生活。毕竟对于一些意料之外的情况，我比较容易慌张。",
    "遇到挫折是很平常的事。无论如何，我相信我可以变得越来越好，我的生活可以变得越来越好，我的未来是光明的。",
    "独处和与别人在一起是两种不同的状态，每个人都需要独处的时间。独处的时候，我可以思考很多很多事情，当然，有时我也会因此想得太多。",
    "乐观是可贵的，乐观的人的眼里，这个世界也许是更轻松明亮的吧。我就是一个乐观的人，无论如何，明天的太阳会照常升起，这就是好事。",
    "“见贤思齐焉，见不贤而内自省也”。我会常常审视自己，改进自己的不足。",
    "《钢铁是怎样炼成的》中有一段有名的话：“人的一生应当这样度过：不因虚度年华而悔恨，也不因碌碌无为而羞愧，把生命和全部精力献给最宝贵的事业——为人类的解放而奋斗”。人的生命只有一次，人生应当是充实的，有意义的，自我满足的。对于我自己的人生，尽管一开始可能是一无所有的，但我不想让它是不完整的。我要成为一个有成就的，成功的人，我要成为一个有深度，有修养的人。我要拥有一个尽可能完美的人生。",
    "空代表着拥有有的能力，令人想到存在主义哲学有一句有名的话“存在先于本质”。我生于虚无，灵魂像一个空的容器，但这也恰恰意味着我有着无限的可能，我可以充实我的灵魂。",
    "假如我是一位领导人，面对国家决策，我能迅速地统筹全局，落实政策。",
    "面对人云亦云的事情，我往往会细致观察然后思考，并且不会表现自己的不同意见，更信任自己的直觉。",
    "关心身边人是很重要的，我希望我身边的人都能过得很好，我也很乐于向他们伸出援手。",
    "混乱无序是低效的，这样的状态必须被改变。面对混沌，失衡，我无法忍受，我必须要改变这种状态，让它变得有条理。",
    "游玩一款新游戏时，我更喜欢按照攻略走，而不是自己探索。游戏玩法上会偏向主流玩法，而不是自己探索新玩法。",
    "我们常常说中国人以和为贵。和谐是我们社会的共同追求，毕竟不和谐会给所有人带来灾难。我希望能与身边的人和谐相处，即使是会有一些矛盾，我还是倾向于和平解决。",
    "众所周知魂游中的一些BOSS很难，常常需要玩家死了很多次才能打过，甚至三百六十五里路...玩游戏时面对一个十分困难的BOSS，不论失败多少次我都会继续挑战，观察BOSS的动作，磨练自己的技术，从而打败BOSS，而不是查攻略逃课。",
    "心理老师说过：找男/女朋友要找一个情绪稳定的人，至少这样能保证你是安全的。情绪稳定是很重要的，情绪可以解构为人类达成目的手段之一。我是一个情绪稳定的人，不轻易因为情绪做决定。",
    "现在的一些游戏都很喜欢做抽奖这一套。众所周知，概率这种东西，就像人的命运一样难以捉摸。而当我抽自己喜欢的角色/物品/皮肤时，即使抽到了另一个我不喜欢的，我也能很好地接受它。",
    "人行道上总是停满各种车辆几乎是随处可见的事，甚至盲道也总会被一些车辆占据。当我在路上遇到共享单车占据了盲道时，如果可能，我会把它给移开。",
    "现在是--幻想时间！我喜欢幻想一些根本不可能发生的事，尽管我知道它们发生的概率为零，但是我还是忍不住幻想。我想，也许，那些看似不可能的事，真的会实现呢？",
    "做数学题是痛苦的，做数学难题更是痛苦的！（对大牛们大概不是）对于一些难题，尽管我无法给出严谨的证明，但是我往往可以凭借直觉得到一些规律与结论。",
    "生活是需要诗意的。现代生活是快节奏且相对单调的。一想到每天两点一线的生活大概我们都会快要失去活下去的欲望了。不过我是一个善于发现生活中的美好的人，我想美好是存在的，只是它需要被人们发现。",
    "我们从小就被告知要有梦想，尽管似乎没有多少人能坚定地拥有一个梦想...我是一个有梦想的人，并且我要倾尽我的一生去实现我的梦想，这是相当有意义的事。",
    "历史上很多朝代都是因为统治者的无能而覆灭的，如果我来做皇帝，我想我可以做好。",
    "我是谁，我在哪，我要做什么，是经典的哲学三问。哲学问题对于普通人不是必要的，但是是每个人都应思考的。我认为我是一个比较有精神深度的人，能从事物中思考出许多哲理，甚至以此引导他人。",
    "对于计算机的学习，有一段名言，大意是：计算机的内容都是人发明出来的，给我足够的时间，我总有一天可以把别人懂的我也搞懂。这其中的学习精神实在值得称赞，我认为对于任何方面的学习都应该有这样的态度，我们只是暂时还不会，在努力下，我们总能变得越来越强，甚至超越那些从前优于我们的人。",
    "欲望到底是一种什么样的存在呢。我们每个人都无法摆脱欲望的支配，这是否算是一种“不自由”呢。而欲望也是我们获得满足感的根本原因...作为动物而存在的我们，总是无法摆脱欲望，可以说人这个字一定是包含欲望的。尽管我不想承认，但我认为我的确是一个很难克服自己欲望的人。",
    "死亡是每个人都需要面对的，也是每个人或许都思考过的。我们总有一天不得不向这个世界告别，离开所有，从宇宙中消失。即使是宇宙，也可能会有消失的那一天吧。我对死亡有过比较深入的思考，有比较深的认知。",
]
//阿尔卡那映射表
const arcanas = [
    {id:0, name: "愚者", score: 0},
    {id:1, name: "魔术师", score: 0},
    {id:2, name: "女教皇", score: 0},
    {id:3, name: "女皇", score: 0},
    {id:4, name: "皇帝", score: 0},
    {id:5, name: "教皇", score: 0},
    {id:6, name: "恋人", score: 0},
    {id:7, name: "战车", score: 0},
    {id:8, name: "力量", score: 0},
    {id:9, name: "隐者", score: 0},
    {id:10, name: "命运", score: 0},
    {id:11, name: "正义", score: 0},
    {id:12, name: "倒悬者", score: 0},
    {id:13, name: "死神", score: 0},
    {id:14, name: "节制", score: 0},
    {id:15, name: "恶魔", score: 0},
    {id:16, name: "高塔", score: 0},
    {id:17, name: "星星", score: 0},
    {id:18, name: "月亮", score: 0},
    {id:19, name: "太阳", score: 0},
    {id:20, name: "审判", score: 0},
    {id:21, name: "世界", score: 0},
]
//排序用的映射表
let arcanas_res;
//问题对象表
const questions =[
    {id:0, text:texts[0], from:"chail"},
    {id:1, text:texts[1], from:"chail"},
    {id:2, text:texts[2], from:"chail"},
    {id:3, text:texts[3], from:"chail"},
    {id:4, text:texts[4], from:"chail"},
    {id:5, text:texts[5], from:"chail"},
    {id:6, text:texts[6], from:"chail"},
    {id:7, text:texts[7], from:"chail"},
    {id:8, text:texts[8], from:"chail"},
    {id:9, text:texts[9], from:"chail"},
    {id:10, text:texts[10], from:"chail"},
    {id:11, text:texts[11], from:"chail"},
    {id:12, text:texts[12], from:"chail"},
    {id:13, text:texts[13], from:"chail"},
    {id:14, text:texts[14], from:"chail"},
    {id:15, text:texts[15], from:"chail"},
    {id:16, text:texts[16], from:"chail"},
    {id:17, text:texts[17], from:"chail"},
    {id:18, text:texts[18], from:"chail"},
    {id:19, text:texts[19], from:"chail"},
    {id:20, text:texts[20], from:"chail"},
    {id:21, text:texts[21], from:"chail"},
    {id:22, text:texts[22], from:"chail"},
    {id:23, text:texts[23], from:"chail"},
    {id:24, text:texts[24], from:"chail"},
    {id:25, text:texts[25], from:"chail"},
    {id:26, text:texts[26], from:"chail"},
    {id:27, text:texts[27], from:"chail"},
    {id:28, text:texts[28], from:"chail"},
    {id:29, text:texts[29], from:"chail"},
    {id:30, text:texts[30], from:"chail"},
    {id:31, text:texts[31], from:"chail"},
    {id:32, text:texts[32], from:"chail"},
    {id:33, text:texts[33], from:"chail"},
    {id:34, text:texts[34], from:"chail"},
    {id:35, text:texts[35], from:"chail"},
    {id:36, text:texts[36], from:"chail"},
    {id:37, text:texts[37], from:"chail"},
    {id:38, text:texts[38], from:"chail"},
    {id:39, text:texts[39], from:"chail"},
    {id:40, text:texts[40], from:"chail"},
    {id:41, text:texts[41], from:"chail"},
]
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
//题目映射表
const scores = [[1, 23, 30, 36], [2, 5, 24, 26], [3, 25, 35, 38], [4, 18, 26, 29], [5, 24, 27, 38], [6, 12, 28, 39], [3, 4, 7, 29], [8, 11, 30, 40], [1, 8, 9, 31], [10, 15, 21, 30], [11, 14, 32, 36], [12, 31, 33, 39], [13, 14, 19, 26], [14, 20, 23, 42], [3, 15, 17, 29], [16, 27, 34, 41], [10, 13, 17, 28], [7, 18, 20, 40], [19, 25, 34, 42], [18, 20, 36, 37], [9, 12, 19, 21], [22, 34, 37, 40]];
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
//答案统计表
let ans;
//问题数量
const cnt = questions.length;
//组织问题html
function question_html(question) {
    return`
                <div class="question-content">${question.id+1}.${question.text}</div>
                    <div class="options">
                        <button class="option" style="width: 55px;height: 55px" data-value="1"></button>
                        <button class="option" style="width: 45px;height: 45px" data-value="2"></button>
                        <button class="option" style="width: 35px;height: 35px" data-value="3"></button>
                        <button class="option" style="width: 45px;height: 45px" data-value="4"></button>
                        <button class="option" style="width: 55px;height: 55px" data-value="5"></button>
                    </div>
        `;
}
//组织第一答案html
function  result_1_html(result){
    return `
                <h2>你的第一阿尔卡那是：</h2>
                <span>${result.name}</span>
                <h3>契合度：${Math.floor(arcanas_res[0].score*100/20)}</h3>
            `
}
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
function  results_html(result, rank){

    return `
                <h2>${rank+1}.</h2>
                <span>${result.name}</span>
                <h3>契合度：${Math.floor(arcanas_res[rank].score*100/20)}</h3>
            `
}
//切换主题方法
function switch_style(){
    style_idx = (style_idx+1)%styles_cnt;
    style.href = styles[style_idx];
}
//初始化
function init(){
    //初始化答案分数表
    ans = new Array(42).fill(0);
    //重置分数
    arcanas.forEach((arcana) => {arcana.score=0});
    const brief = document.getElementById("brief");
    const title_container = document.getElementById("title-container");
    const questions_elm = document.getElementById("questions");
    const btn_submit = document.getElementById("submit");
    const result_container = document.getElementById("result-container");
    const btn_again = document.getElementById("again");
    const btn_start = document.getElementById("start");
    style.href=styles[style_idx];
    if (DEBUG) console.log(`loaded ${styles[style_idx]}`);
    title_container.classList.remove("hidden");
    brief.classList.remove("hidden");
    questions_elm.classList.add("hidden");
    btn_submit.classList.add("hidden");
    result_container.classList.add("hidden");
    btn_again.classList.add("hidden");
    btn_start.classList.remove("hidden");
    load_event();
}
//again方法
function again(){
    //初始化答案分数表
    ans = new Array(42).fill(0);
    //重置分数
    arcanas.forEach((arcana) => {arcana.score=0});
    //获取各容器并初始化
    const title_container = document.getElementById("title-container");
    const questions_elm = document.getElementById("questions");
    const btn_submit = document.getElementById("submit");
    const result_container = document.getElementById("result-container");
    const btn_again = document.getElementById("again");
    title_container.classList.remove("hidden");
    questions_elm.classList.add("hidden");
    btn_submit.classList.add("hidden");
    result_container.classList.add("hidden");
    btn_again.classList.add("hidden");

    questions_elm.innerHTML = "";
    result_container.innerHTML = "";
    show_question();
}
//绑定事件
function load_event(){
    //提交事件
    const btn_submit = document.getElementById("submit");
    const questions_elm = document.getElementById("questions");
    btn_submit.addEventListener("click", ()=>{
        if(questions_elm.querySelectorAll(".selected").length === cnt){
            cal_result();
            show_result();
        }
        else{
            if(DEBUG)console.log("存在未选择的问题");
            alert("当前存在问题未选择，请作答所有问题。");
        }
    });
    //开始事件
    const btn_start = document.getElementById("start");
    btn_start.addEventListener("click", show_question);
    //再来一次
    const btn_again = document.getElementById("again");
    btn_again.addEventListener("click", again);
    //首页
    const btn_home = document.getElementById("home");
    btn_home.addEventListener("click", init);
    //切换主题
    const btn_theme = document.getElementById("theme");
    btn_theme.addEventListener("click", switch_style);
    //图鉴
    const btn_catalog = document.getElementById("catalog");
    btn_catalog.addEventListener("click", ()=>{
        window.location.assign("catalog.html");
    })
}
//渲染问题
function show_question(){
    //隐藏简介
    const brief = document.getElementById("brief");
    brief.classList.add("hidden");
    //先获取到问题容器
    const questions_elm = document.getElementById("questions");
    const btn_start = document.getElementById("start");
    questions_elm.classList.remove("hidden");
    btn_start.classList.add("hidden");
    //遍历问题表
    questions.forEach((question)=>{
        //创建元素来承载问题
        const question_elm  = document.createElement("div");
        question_elm.classList.add("question");
        //设置当前问题的id
        question_elm.dataset.qid = question.id;
        //添加html
        question_elm.innerHTML = question_html(question);
        //加入容器
        questions_elm.appendChild(question_elm);
        question_elm.classList.add("fadein");
        //获取所有选项对象
        questions_elm.querySelectorAll(".option").forEach((elem)=>{
            //为每个按钮添加点击事件
            elem.addEventListener("click", ()=>{
                const par = elem.parentElement;
                par.querySelectorAll(".selected").forEach(selected=>
                    //取消被选择状态
                {selected.classList.remove("selected");});
                elem.classList.add("selected");
            });
        });
    });
    //显示结果按钮
    const btn_submit = document.getElementById("submit");
    btn_submit.classList.remove("hidden");
}
function show_result(){
    //获取各元素
    const title_container = document.getElementById("title-container");
    const questions_elm = document.getElementById("questions");
    const btn_submit = document.getElementById("submit");
    const result_container = document.getElementById("result-container");
    const btn_again = document.getElementById("again");
    //重置显示状态
    questions_elm.classList.add("hidden");
    btn_submit.classList.add("hidden");
    result_container.classList.remove("hidden");
    title_container.classList.add("hidden");
    //显示第一阿尔卡那
    const result_1_elm = document.createElement("div");
    result_1_elm.classList.add("result_1");
    result_1_elm.innerHTML = result_1_html(results[arcanas_res[0].id]);
    result_1_elm.appendChild(result_desc_html(arcanas_res[0].id));
    result_container.appendChild(result_1_elm);
    //显示其他的
    for(let i=1;i<=4;++i){
        if(DEBUG) console.log(`结果：${results[arcanas_res[i].id]}`);
        const result_elm = document.createElement("div");
        result_elm.classList.add("results");
        result_elm.innerHTML = results_html(results[arcanas_res[i].id], i);
        result_elm.appendChild(result_desc_html(arcanas_res[i].id));
        result_container.appendChild(result_elm);
    }
    //处理再来一次
    btn_again.classList.remove("hidden");
}

function cal_result(){
    //计算结果
    document.querySelectorAll(".question").forEach((elem)=>{
        //获取当前问题id
        const qid = Number(elem.dataset.qid);
        if(DEBUG)console.log(`now qid= ${qid}`);
        //获取分数
        const pans = Number(elem.querySelector(".selected").dataset.value);
        ans[qid] += pans;
        if(DEBUG)console.log(`pans=${pans}`);
    });
    arcanas.forEach((arcana) => {
        //获取题目映射
        const score_list = scores[arcana.id];
        //对于列表中每个题目，将其分数加到当前阿尔卡那的分数
        //注意这里的i需要减一
        score_list.forEach((i)=>{arcana.score+=ans[i-1]});
        if(DEBUG) console.log(`${arcana.name}: ${arcana.score}`);
    });
    //拷贝一个结果表并按分数降序排序
    arcanas_res = Array.from(arcanas);//用from方法进行拷贝，直接赋值的是引用
    arcanas_res.sort((a, b) => {return b.score-a.score});
}
init();
