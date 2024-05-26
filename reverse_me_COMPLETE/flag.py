
secret_flag = "........"

flag = secret_flag[::-1]
output = ''
for i in range(0, len(flag), 3):
    output += flag[i+2]
    output += flag[i+1]
    output += flag[i]


with open("flag.txt", "w") as f:
    f.write(output)
