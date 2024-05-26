flag_rev=  "0n}4t1tulgr4c0nr!_ck3h4x4l_r3424_r3_u_4{y0GOP"

flag_rev = flag_rev[::-1]
output = ''
for i in range(0, len(flag_rev), 3):
    output += flag_rev[i+2]
    output += flag_rev[i+1]
    output += flag_rev[i]

print(output)