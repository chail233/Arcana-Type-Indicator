#这个脚本用于创建问题对象列表
out_file = "questions_list.txt"
res = []
for i in range(0,42):
    str = '{'+f"id:{i}, text:texts[{i}], from:\"chail\""+'},'
    res.append(str)
with open(out_file, 'w') as f:
    f.write("\n".join(res))
print("处理完成")