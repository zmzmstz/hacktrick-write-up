
First we inspect the source and copy the obfuscated javascript blob:
![](solution00.png)
Then we paste it on de4js and enable execute expression
![](solution01.png)
Then we inspect the source and find flag in plaintext.
![](solution02.png)
We can easily concat these strings using python interpreter.
![](solution03.png)

And voila! We got our flag!

```
GOPCTF{r4nd0m_c0mm4nd_1nj3ct10n}
```
