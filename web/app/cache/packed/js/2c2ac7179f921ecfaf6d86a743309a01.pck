var hexcase=0;
var b64pad="";
var chrsz=8;
function hex_sha1(s){
return binb2hex(core_sha1(str2binb(s),s.length*chrsz));
};
function b64_sha1(s){
return binb2b64(core_sha1(str2binb(s),s.length*chrsz));
};
function str_sha1(s){
return binb2str(core_sha1(str2binb(s),s.length*chrsz));
};
function hex_hmac_sha1(_4,_5){
return binb2hex(core_hmac_sha1(_4,_5));
};
function b64_hmac_sha1(_6,_7){
return binb2b64(core_hmac_sha1(_6,_7));
};
function str_hmac_sha1(_8,_9){
return binb2str(core_hmac_sha1(_8,_9));
};
function sha1_vm_test(){
return hex_sha1("abc")=="a9993e364706816aba3e25717850c26c9cd0d89d";
};
function core_sha1(x,_b){
x[_b>>5]|=128<<(24-_b%32);
x[((_b+64>>9)<<4)+15]=_b;
var w=Array(80);
var a=1732584193;
var b=-271733879;
var c=-1732584194;
var d=271733878;
var e=-1009589776;
for(var i=0;i<x.length;i+=16){
var _13=a;
var _14=b;
var _15=c;
var _16=d;
var _17=e;
for(var j=0;j<80;j++){
if(j<16){
w[j]=x[i+j];
}else{
w[j]=rol(w[j-3]^w[j-8]^w[j-14]^w[j-16],1);
}
var t=safe_add(safe_add(rol(a,5),sha1_ft(j,b,c,d)),safe_add(safe_add(e,w[j]),sha1_kt(j)));
e=d;
d=c;
c=rol(b,30);
b=a;
a=t;
}
a=safe_add(a,_13);
b=safe_add(b,_14);
c=safe_add(c,_15);
d=safe_add(d,_16);
e=safe_add(e,_17);
}
return Array(a,b,c,d,e);
};
function sha1_ft(t,b,c,d){
if(t<20){
return (b&c)|((~b)&d);
}
if(t<40){
return b^c^d;
}
if(t<60){
return (b&c)|(b&d)|(c&d);
}
return b^c^d;
};
function sha1_kt(t){
return (t<20)?1518500249:(t<40)?1859775393:(t<60)?-1894007588:-899497514;
};
function core_hmac_sha1(key,_20){
var _21=str2binb(key);
if(_21.length>16){
_21=core_sha1(_21,key.length*chrsz);
}
var _22=Array(16),_23=Array(16);
for(var i=0;i<16;i++){
_22[i]=_21[i]^909522486;
_23[i]=_21[i]^1549556828;
}
var _25=core_sha1(_22.concat(str2binb(_20)),512+_20.length*chrsz);
return core_sha1(_23.concat(_25),512+160);
};
function safe_add(x,y){
var lsw=(x&65535)+(y&65535);
var msw=(x>>16)+(y>>16)+(lsw>>16);
return (msw<<16)|(lsw&65535);
};
function rol(num,cnt){
return (num<<cnt)|(num>>>(32-cnt));
};
function str2binb(str){
var bin=Array();
var _2e=(1<<chrsz)-1;
for(var i=0;i<str.length*chrsz;i+=chrsz){
bin[i>>5]|=(str.charCodeAt(i/chrsz)&_2e)<<(32-chrsz-i%32);
}
return bin;
};
function binb2str(bin){
var str="";
var _32=(1<<chrsz)-1;
for(var i=0;i<bin.length*32;i+=chrsz){
str+=String.fromCharCode((bin[i>>5]>>>(32-chrsz-i%32))&_32);
}
return str;
};
function binb2hex(_34){
var _35=hexcase?"0123456789ABCDEF":"0123456789abcdef";
var str="";
for(var i=0;i<_34.length*4;i++){
str+=_35.charAt((_34[i>>2]>>((3-i%4)*8+4))&15)+_35.charAt((_34[i>>2]>>((3-i%4)*8))&15);
}
return str;
};
function binb2b64(_38){
var tab="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var str="";
for(var i=0;i<_38.length*4;i+=3){
var _3c=(((_38[i>>2]>>8*(3-i%4))&255)<<16)|(((_38[i+1>>2]>>8*(3-(i+1)%4))&255)<<8)|((_38[i+2>>2]>>8*(3-(i+2)%4))&255);
for(var j=0;j<4;j++){
if(i*8+j*6>_38.length*32){
str+=b64pad;
}else{
str+=tab.charAt((_3c>>6*(3-j))&63);
}
}
}
return str;
};

