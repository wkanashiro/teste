var chatIsConnected=false;
function showChat(){
var _1=document.getElementById("idChat");
if(_1.style.display==""){
parent.document.body.rows="86px,*";
pfc.swap_minimize_maximize();
_1.style.display="none";
}else{
parent.document.body.rows="373px,*";
_1.style.display="";
pfc.swap_minimize_maximize();
if(!chatIsConnected){
pfc.connect_disconnect();
chatIsConnected=true;
}
}
};
function showMenu(_2){
var _3=document.getElementById("idChat");
if(_3.style.display==""){
parent.document.body.rows="86px,*";
pfc.swap_minimize_maximize();
_3.style.display="none";
}
parent.body.showMenu(_2);
};
function enableMenu(){
var _4=document.getElementById("idMenu");
_4.className="cMenu";
_4.onclick=function(){
showMenu(_4);
};
};
function disableMenu(){
var _5=document.getElementById("idMenu");
_5.className="cMenuLoading";
_5.onclick=function(){
};
};
function urlencode(_6){
var _7={},_8=[];
var _9=(_6+"").toString();
var _a=function(_b,_c,_d){
var _e=[];
_e=_d.split(_b);
return _e.join(_c);
};
_7["'"]="%27";
_7["("]="%28";
_7[")"]="%29";
_7["*"]="%2A";
_7["~"]="%7E";
_7["!"]="%21";
_7["%20"]="+";
_7["€"]="%80";
_7["?"]="%81";
_7["‚"]="%82";
_7["ƒ"]="%83";
_7["„"]="%84";
_7["…"]="%85";
_7["†"]="%86";
_7["‡"]="%87";
_7["ˆ"]="%88";
_7["‰"]="%89";
_7["Š"]="%8A";
_7["‹"]="%8B";
_7["Œ"]="%8C";
_7["?"]="%8D";
_7["Ž"]="%8E";
_7["?"]="%8F";
_7["?"]="%90";
_7["‘"]="%91";
_7["’"]="%92";
_7["“"]="%93";
_7["”"]="%94";
_7["•"]="%95";
_7["–"]="%96";
_7["—"]="%97";
_7["˜"]="%98";
_7["™"]="%99";
_7["š"]="%9A";
_7["›"]="%9B";
_7["œ"]="%9C";
_7["?"]="%9D";
_7["ž"]="%9E";
_7["Ÿ"]="%9F";
_9=encodeURIComponent(_9);
for(search in _7){
replace=_7[search];
_9=_a(search,replace,_9);
}
return _9.replace(/(\%([a-z0-9]{2}))/g,function(_f,m1,m2){
return "%"+m2.toUpperCase();
});
return _9;
};
function searchDefault(_12,str){
if(_12.value==str){
_12.value="";
}else{
if(_12.value.length==0){
_12.value=str;
}
}
};
function searchSend(_14,e){
e=e?e:(window.event?window.event:null);
if(e){
var _16=!isNaN(e.charCode)&&e.charCode?e.charCode:!isNaN(e.keyCode)&&e.keyCode?e.keyCode:e.which;
if(_16==13){
parent.body.location="titan.php?target=lucene&query="+urlencode(_14.value);
}
}
};
function getTimeZone(){
tmSummer=new Date(Date.UTC(2005,6,30,0,0,0,0));
so=-1*tmSummer.getTimezoneOffset();
tmWinter=new Date(Date.UTC(2005,12,30,0,0,0,0));
wo=-1*tmWinter.getTimezoneOffset();
if(-660==so&&-660==wo){
return "Pacific/Midway";
}
if(-600==so&&-600==wo){
return "Pacific/Tahiti";
}
if(-570==so&&-570==wo){
return "Pacific/Marquesas";
}
if(-540==so&&-600==wo){
return "America/Adak";
}
if(-540==so&&-540==wo){
return "Pacific/Gambier";
}
if(-480==so&&-540==wo){
return "US/Alaska";
}
if(-480==so&&-480==wo){
return "Pacific/Pitcairn";
}
if(-420==so&&-480==wo){
return "US/Pacific";
}
if(-420==so&&-420==wo){
return "US/Arizona";
}
if(-360==so&&-420==wo){
return "US/Mountain";
}
if(-360==so&&-360==wo){
return "America/Guatemala";
}
if(-360==so&&-300==wo){
return "Pacific/Easter";
}
if(-300==so&&-360==wo){
return "US/Central";
}
if(-300==so&&-300==wo){
return "America/Bogota";
}
if(-240==so&&-300==wo){
return "US/Eastern";
}
if(-240==so&&-240==wo){
return "America/Caracas";
}
if(-240==so&&-180==wo){
return "America/Santiago";
}
if(-180==so&&-240==wo){
return "Canada/Atlantic";
}
if(-180==so&&-180==wo){
return "America/Montevideo";
}
if(-180==so&&-120==wo){
return "America/Sao_Paulo";
}
if(-150==so&&-210==wo){
return "America/St_Johns";
}
if(-120==so&&-180==wo){
return "America/Godthab";
}
if(-120==so&&-120==wo){
return "America/Noronha";
}
if(-60==so&&-60==wo){
return "Atlantic/Cape_Verde";
}
if(0==so&&-60==wo){
return "Atlantic/Azores";
}
if(0==so&&0==wo){
return "Africa/Casablanca";
}
if(60==so&&0==wo){
return "Europe/London";
}
if(60==so&&60==wo){
return "Africa/Algiers";
}
if(60==so&&120==wo){
return "Africa/Windhoek";
}
if(120==so&&60==wo){
return "Europe/Amsterdam";
}
if(120==so&&120==wo){
return "Africa/Harare";
}
if(180==so&&120==wo){
return "Europe/Athens";
}
if(180==so&&180==wo){
return "Africa/Nairobi";
}
if(240==so&&180==wo){
return "Europe/Moscow";
}
if(240==so&&240==wo){
return "Asia/Dubai";
}
if(270==so&&210==wo){
return "Asia/Tehran";
}
if(270==so&&270==wo){
return "Asia/Kabul";
}
if(300==so&&240==wo){
return "Asia/Baku";
}
if(300==so&&300==wo){
return "Asia/Karachi";
}
if(330==so&&330==wo){
return "Asia/Calcutta";
}
if(345==so&&345==wo){
return "Asia/Katmandu";
}
if(360==so&&300==wo){
return "Asia/Yekaterinburg";
}
if(360==so&&360==wo){
return "Asia/Colombo";
}
if(390==so&&390==wo){
return "Asia/Rangoon";
}
if(420==so&&360==wo){
return "Asia/Almaty";
}
if(420==so&&420==wo){
return "Asia/Bangkok";
}
if(480==so&&420==wo){
return "Asia/Krasnoyarsk";
}
if(480==so&&480==wo){
return "Australia/Perth";
}
if(540==so&&480==wo){
return "Asia/Irkutsk";
}
if(540==so&&540==wo){
return "Asia/Tokyo";
}
if(570==so&&570==wo){
return "Australia/Darwin";
}
if(570==so&&630==wo){
return "Australia/Adelaide";
}
if(600==so&&540==wo){
return "Asia/Yakutsk";
}
if(600==so&&600==wo){
return "Australia/Brisbane";
}
if(600==so&&660==wo){
return "Australia/Sydney";
}
if(630==so&&660==wo){
return "Australia/Lord_Howe";
}
if(660==so&&600==wo){
return "Asia/Vladivostok";
}
if(660==so&&660==wo){
return "Pacific/Guadalcanal";
}
if(690==so&&690==wo){
return "Pacific/Norfolk";
}
if(720==so&&660==wo){
return "Asia/Magadan";
}
if(720==so&&720==wo){
return "Pacific/Fiji";
}
if(720==so&&780==wo){
return "Pacific/Auckland";
}
if(765==so&&825==wo){
return "Pacific/Chatham";
}
if(780==so&&780==wo){
return "Pacific/Enderbury";
}
if(840==so&&840==wo){
return "Pacific/Kiritimati";
}
return "US/Pacific";
};

