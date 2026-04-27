names = [
    "愚者",
    "魔术师",
    "女祭司",
    "女皇",
    "皇帝",
    "教皇",
    "恋爱",
    "战车",
    "力量",
    "隐者",
    "命运",
    "正义",
    "倒悬者",
    "死神",
    "节制",
    "恶魔",
    "高塔",
    "星星",
    "月亮",
    "太阳",
    "审判",
    "世界"
]
res=[]
for i in range(0,22):
    str = "{" + f"id:{i}, name:\"{names[i]}\", description: descriptions{[i]}" + "},"
    res.append(str)
with open("results_out.txt", "w", encoding="utf-8") as f:
    f.write("\n".join(res))