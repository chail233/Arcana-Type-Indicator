//文本存储
const texts = [
    "一个拥有大地图与宏伟世界观，充满探索要素的RPG游戏总是吸引人的。谁不想急头白脸地去陌生的地方冒险呢？我很乐意去探索不熟悉的地方，甚至去山里面探索野路。",
    "社团活动有时格外令人费心（虽然有些社团根本没有什么活动）...而我简直就是社团里的那个大牛，譬如社团办活动，有我在这个活动才能办得顺利。",

]
//阿尔卡那映射表
const arcanas = [
    {id:0, name: "愚者", score: 0},
    {id:1, name: "魔术师", score: 0},

]
//问题对象表
const questions =[
    {id:0, text:texts[0], scores:[0]},
    {id:1, text:texts[1], scores:[1]},
]
//结果表
const results = [
    {id:0, name: "愚者", description: "none"},

]
//渲染问题
function show_question(){
    //先获取到问题容器
    const questions_elm = document.getElementById("questions");
    //遍历问题表
    questions.forEach((question)=>{
        //创建元素来承载问题
        const question_elm  = document.createElement("div");
        question_elm.classList.add("question");
        question_elm.innerHTML = `
                <div class="question-content">${question.id+1}.${question.text}</div>
                    <div class="desc">
                        <p>完全不符合</p>
                        <p>比较不符合</p>
                        <p>中立</p>
                        <p>比较符合</p>
                        <p>完全符合</p>
                    </div>
                    <div class="options">
                        <button class="option" style="width: 35px;height: 35px" data-value="1"></button>
                        <button class="option" style="width: 45px;height: 45px" data-value="2"></button>
                        <button class="option" style="width: 55px;height: 55px" data-value="3"></button>
                        <button class="option" style="width: 45px;height: 45px" data-value="2"></button>
                        <button class="option" style="width: 35px;height: 35px" data-value="1"></button>
                    </div>
        `;
        questions_elm.appendChild(question_elm);
    });
}
show_question();