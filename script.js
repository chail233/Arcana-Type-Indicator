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
    {id:2, name: "女祭司", score: 0},
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
    // {id:6, text:texts[6], from:"chail"},
    // {id:7, text:texts[7], from:"chail"},
    // {id:8, text:texts[8], from:"chail"},
    // {id:9, text:texts[9], from:"chail"},
    // {id:10, text:texts[10], from:"chail"},
    // {id:11, text:texts[11], from:"chail"},
    // {id:12, text:texts[12], from:"chail"},
    // {id:13, text:texts[13], from:"chail"},
    // {id:14, text:texts[14], from:"chail"},
    // {id:15, text:texts[15], from:"chail"},
    // {id:16, text:texts[16], from:"chail"},
    // {id:17, text:texts[17], from:"chail"},
    // {id:18, text:texts[18], from:"chail"},
    // {id:19, text:texts[19], from:"chail"},
    // {id:20, text:texts[20], from:"chail"},
    // {id:21, text:texts[21], from:"chail"},
    // {id:22, text:texts[22], from:"chail"},
    // {id:23, text:texts[23], from:"chail"},
    // {id:24, text:texts[24], from:"chail"},
    // {id:25, text:texts[25], from:"chail"},
    // {id:26, text:texts[26], from:"chail"},
    // {id:27, text:texts[27], from:"chail"},
    // {id:28, text:texts[28], from:"chail"},
    // {id:29, text:texts[29], from:"chail"},
    // {id:30, text:texts[30], from:"chail"},
    // {id:31, text:texts[31], from:"chail"},
    // {id:32, text:texts[32], from:"chail"},
    // {id:33, text:texts[33], from:"chail"},
    // {id:34, text:texts[34], from:"chail"},
    // {id:35, text:texts[35], from:"chail"},
    // {id:36, text:texts[36], from:"chail"},
    // {id:37, text:texts[37], from:"chail"},
    // {id:38, text:texts[38], from:"chail"},
    // {id:39, text:texts[39], from:"chail"},
    // {id:40, text:texts[40], from:"chail"},
    // {id:41, text:texts[41], from:"chail"},
]
//结果描述表
const descriptions = [

]
//题目映射表
const scores = [[1, 23, 30, 36], [2, 5, 24, 26], [3, 25, 35, 38], [4, 18, 26, 29], [5, 24, 27, 38], [6, 12, 28, 39], [3, 4, 7, 29], [8, 11, 30, 40], [1, 8, 9, 31], [10, 15, 21, 30], [11, 14, 32, 36], [12, 31, 33, 39], [13, 14, 19, 26], [14, 20, 23, 42], [3, 15, 17, 29], [16, 27, 34, 41], [10, 13, 17, 28], [7, 18, 20, 40], [19, 25, 34, 42], [18, 20, 36, 37], [9, 12, 19, 21], [22, 34, 37, 40]];
//结果表
const results = [
    {id:0, name:"愚者", description: descriptions[0]},
    {id:1, name:"魔术师", description: descriptions[1]},
    {id:2, name:"女祭司", description: descriptions[2]},
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
                <p class="result_desc">${result.description}</p>
            `
}
//组织其他答案html
function  results_html(result, rank){
    return `
                <h2>${rank+1}.</h2>
                <span>${result.name}</span>
                <h3>契合度：${Math.floor(arcanas_res[rank].score*100/20)}</h3>
                <p class="result_desc">${result.description}</p>
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
    result_container.appendChild(result_1_elm);
    //显示其他的
    for(let i=1;i<=4;++i){
        if(DEBUG) console.log(results[arcanas_res[i].id]);
        const result_elm = document.createElement("div");
        result_elm.classList.add("results");
        result_elm.innerHTML = results_html(results[arcanas_res[i].id], i);
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
