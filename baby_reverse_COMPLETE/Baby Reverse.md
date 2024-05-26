We can see that the argv is the key argument here and there is a check for it's size which is 0x1e -> 30 characters.
![](solution00.png)

We open up gdb for the dynamic analysis and set it's arguments to pass key size check.
![](solution01.png)
We put a breakpoint right after encrypted string is pushed into stack and inspect the stack right after.
![](solution02.png)
After we got the encrypted flag we use xor function with key `0x15` hex.
![](solution03.png)

And voila! We got our flag!
```
GOP{b4by_reverse_cok_mu_kolay}
```