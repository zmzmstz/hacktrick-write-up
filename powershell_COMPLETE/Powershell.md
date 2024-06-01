Since this is an event log file I opened it in my windows vm.
This log only contains powershell commands so I checked one of them.
<br>
![](solution00.png)
<br>
Here we have a base64 encoded powershell oneliner. 
We decode the powershell command and encode it with utf-16le so we can read it properly.
![](solution01.png)
<br>
Here we take the base64 blob and decode it once again then decompress using gunzip.
![](solution02.png)
<br>
Here we decode yet another base64 blob and xor it using decimal 35 xor key.
![](solution03.png)
<br>
Here we can see it's a cobalt strike stager.<br> <br>
![](solution04.png)
<br>
We get the c2 connection using scdbg.exe <br>
![](solution05.png)

And voila! We got our flag!
```
GOP{176.103.56.89:8080}
```
