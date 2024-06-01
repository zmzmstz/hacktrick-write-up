function hookNativeFunction() {
    var LibInfoBaseAddr = Module.getBaseAddress("libinfo.so");
    send("Got library base address: " + LibInfoBaseAddr);
    var isPackageInstalledAddr = LibInfoBaseAddr.add(0x21270);
    send("Got isPackageInstalled address: " + isPackageInstalledAddr);
    var ret;
    Interceptor.attach(isPackageInstalledAddr, {onEnter: function(args){
        send("[*] Function is called! with args " + args[1].readUtf8String());
        if (args[1].readUtf8String() == "com.topjohnwu.magisk"){
            ret = 0;
        }
        else {
            ret = 1;
        }
    }, onLeave: function(retval){ retval.replace(ret); }});
}

Java.perform(function() {
    var PackageManager = Java.use("android.app.ApplicationPackageManager");

    PackageManager.getPackageInfo.overload('java.lang.String', 'int').implementation = function(pname, flags) {
        if (pname == "com.topjohnwu.magisk") {
            send("Bypass check for package: " + pname);
            pname = "nononono";
        }
        else if (pname == "com.wallet.crypto.trustapp") {
            send("Bypass check for package: " + pname);
            pname = "com.noof.info";
        }
        else if (pname == "exodusmovement.exodus") {
            send("Bypass check for package: " + pname);
            pname = "com.noof.info";
        }
        else {
            pname = pname;
        }
        send("Package Name sent to call: " + pname);
        return this.getPackageInfo.call(this, pname, flags);
    };

    const System = Java.use('java.lang.System');
    const Runtime = Java.use('java.lang.Runtime');
    const SystemLoad_2 = System.loadLibrary.overload('java.lang.String');
    const VMStack = Java.use('dalvik.system.VMStack');

    SystemLoad_2.implementation = function(libname) {
        send("Loading dynamic library => " + libname);
        const loaded = Runtime.getRuntime().loadLibrary0(VMStack.getCallingClassLoader(), libname);
        send("Loaded dynamic library => " + libname);
        hookNativeFunction();
        return;
    }
})