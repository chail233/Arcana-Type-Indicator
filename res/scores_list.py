#这个脚本用于生成scores_list，即每个阿尔卡那对应的问题编号（不是下标）
import re

# 读取文件
with open("scores_list_in.txt", "r", encoding="utf-8") as f:
    lines = [line.strip() for line in f.readlines()]

n = int(lines[0])  # 第一行是数量
result = []

# 处理每一行
for line in lines[1:1+n]:
    # 匹配【最后一对 []】里的所有内容（数字+逗号）
    match = re.search(r'.*\[([0-9,]+)\]', line)
    if match:
        # 取出内容，按逗号分割成数字列表
        num_list = [int(num) for num in match.group(1).split(',')]
        result.append(num_list)

# 输出结果
print("提取完成：")
print(len(result))

# 写入文件
with open("scores_list_out.txt", "w", encoding="utf-8") as f:
    f.write(str(result))