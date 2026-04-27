#这个脚本用于处理问题列表便于写成一个数组
import re

input_file = "ques_in.txt"
output_file = "ques_out.txt"

with open(input_file, "r", encoding="utf-8") as f:
    lines = [line.rstrip("\n") for line in f.readlines()]

n = int(lines[0])
content_lines = lines[1:1 + n]
result = []

for line in content_lines:
    # 1. 去掉开头序号  1.  2.  3. ...
    s = re.sub(r'^\d+\.\s*', '', line)

    # 2. 只删除最后一对中文括号
    s = re.sub(r'(.*)（[^）]*）', r'\1', s)

    # 3. 清理首尾空格
    s = s.strip()

    # 4. 按要求格式化
    result.append(f'"{s}",')

# 写入文件
with open(output_file, "w", encoding="utf-8") as f:
    f.write("\n".join(result))

print("处理完成")