function openPopup(_1,_2,_3,_4,_5,_6,_7){
openPopUp(_1,_2,_3,_4,_5,_6,_7);
};
function openPopUp(_8,_9,_a,_b,_c,_d,_e){
if(!_a){
_a=screen.availWidth-10;
}
if(!_b){
_b=screen.availHeight-40;
}
if(!_c){
_c="auto";
}
if(!_d){
_d="no";
}
if(!_e){
_e="yes";
}
PopUp=window.open(_8,_9,"width="+_a+",height="+_b+",scrollbars="+_c+",toolbar=no,location=no,status="+_d+",menubar=no,resizable="+_e+",left=100,top=100");
};
function openPrintPopup(_f){
PopUp=window.open(_f,"Imprimir","width=500,height=300,toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,left=100,top=100");
};
function changeAction(_10,_11){
var _12=document.getElementById(_11);
_12.action=_10;
_12.submit();
};
function start(){
if(typeof window.event!="undefined"){
document.onkeydown=function(){
if(event.keyCode==8){
window.event.keyCode=127;
}
};
}
resizeBody();
parent.banner.enableMenu();
hideWait();
if(this.runOnLoad==null){
return false;
}
runOnLoad();
};
function end(){
parent.banner.disableMenu();
showWait();
if(this.runOnUnload==null){
return false;
}
runOnUnload();
};
function resizeBody(){
var _13=0;
if(!window.innerWidth){
if(!(document.documentElement.clientWidth==0)){
_13=document.documentElement.clientHeight;
}else{
_13=document.body.clientHeight;
}
}else{
_13=window.innerHeight;
}
document.getElementById("idBody").style.height=(_13-78)+"px";
};
function sendLetter(_14,_15){
var _16=document.getElementById("keyboardHiddenValue"+_14);
if(_15){
_16.value=_15;
}
};
function showWait(){
parent.banner.document.getElementById("idWait").style.display="block";
};
function hideWait(){
parent.banner.document.getElementById("idWait").style.display="none";
};
var searchParams=false;
function showSearch(){
var div=document.getElementById("idSearch");
var _18;
if(div.style.display==""){
div.style.display="none";
if(searchParams){
if(_18=document.getElementById("idSearchParams")){
_18.style.display="";
}
}
}else{
if(_18=document.getElementById("idSearchParams")){
if(_18.style.display==""){
_18.style.display="none";
searchParams=true;
}
}
div.style.display="";
}
};
function showGroup(id){
var _1a=document.getElementById("group_"+id);
if(_1a.className=="formGroup"){
_1a.className="formGroupCollapse";
}else{
_1a.className="formGroup";
}
};
function message(_1b,w,h,_1e,_1f,_20){
if(_1f==null){
_1f="";
}
if(w==null){
w=500;
}
if(h==null){
h=120;
}
if(_1e==null||_1e){
switch(_20){
case "SUCCESS":
color="090";
image="success.png";
break;
case "ERROR":
color="900";
image="error.png";
break;
case "WARNING":
default:
color="A85C00";
image="warning.png";
}
var _1b="<table border=\"0\">\t\t\t<tr>\t\t\t\t<td rowspan=\"2\">\t\t\t\t\t<img src=\"titan.php?target=loadFile&amp;file=interface/image/"+image+"\" border=\"0\" style=\"margin-right: 10px;\" />\t\t\t\t</td>\t\t\t\t<td style=\"color: #"+color+"; font-family: Helvetica, sans-serif, Arial; font-weight: bold; font-size: 12px; text-align: justify;\">"+_1b+"</td>\t\t\t</tr>\t\t</table>";
}
Modalbox.show(_1b,{title:_1f,width:w,height:h});
};
function rssLink(url){
var _22="";
if(tAjax.tableExists("_rss")){
_22="<input type=\"button\" class=\"button\" value=\"Monitorar\" style=\"color: #DA5E29; border-color: #DA5E29;\" onclick=\"JavaScript: addFeed ('"+url+"');\" />";
}
var _23="<table border=\"0\">\t\t<tr>\t\t\t<td rowspan=\"2\">\t\t\t\t<img src=\"titan.php?target=loadFile&amp;file=interface/image/rss.png\" border=\"0\" style=\"margin-right: 10px;\" />\t\t\t</td>\t\t\t<td>\t\t\t\t<div id=\"copy_clipboard\" style=\"color: #900; font-weight: bold; text-align: left; width: 300px; height: 35px; line-height: 20px; white-space: nowrap; overflow: scroll; margin: 0 auto; border: #CCC 1px solid; padding: 5px;\">"+url+"</div>\t\t\t</td>\t\t</tr>\t\t<tr>\t\t\t<td style=\"text-align: center;\">\t\t\t\t"+_22+"\t\t\t\t<input type=\"button\" class=\"button\" value=\"Copiar para o Clipboard\" onclick=\"JavaScript: clipboard ('copy_clipboard');\" />\t\t\t\t<input type=\"button\" class=\"button\" value=\"Fechar\" onclick=\"JavaScript: Modalbox.hide ();\" />\t\t\t</td>\t\t</tr>\t</table>";
Modalbox.show(_23,{title:"Feed RSS",width:460});
};
function addFeed(url){
Modalbox.hide();
showWait();
tAjax.addFeed(url);
tAjax.delay(function(){
hideWait();
});
};
function clipboard(div){
if(navigator.appName=="Microsoft Internet Explorer"&&navigator.appVersion>="4.0"){
for(i=0;i<document.all.length;i++){
document.all(i).unselectable="on";
}
document.getElementById(div_id).unselectable="off";
document.getElementById(div_id).focus();
document.execCommand("SelectAll");
document.execCommand("Copy");
for(i=0;i<document.all.length;i++){
document.all(i).unselectable="off";
}
}else{
alert("Desculpe-nos, este recurso só está dispon�vel para Internet Exploder.\nPara os demais browsers, selecione o link acima e pressione CTRL+C.");
}
};
var loadInPlaceIds=new Array();
var loadInPlaceEls=new Array();
function loadInPlace(id,_27,_28){
if(typeof (_27)=="undefined"){
return false;
}
var _29=$("_CONTENT_"+id);
var _2a=_27.id;
for(var i=0;i<loadInPlaceEls.length;i++){
if(loadInPlaceEls[i]==_2a){
_28.onclick=function(){
showInPlace(id,$(_2a));
};
hideWait();
showInPlace(id,$(_2a));
return false;
}
$(loadInPlaceEls[i]).style.display="none";
$("_ROW_"+loadInPlaceIds[i]).style.display="none";
$("_ITEM_"+loadInPlaceIds[i]).className="cTableItem";
}
loadInPlaceEls[i]=_2a;
loadInPlaceIds[i]=id;
_29.appendChild(_27);
_28.onclick=function(){
showInPlace(id,_27);
};
$("_ITEM_"+id).className="cTableItemActive";
$("_ROW_"+id).style.display="";
return false;
};
function showInPlace(id,_2d){
var row=$("_ROW_"+id);
var itm=$("_ITEM_"+id);
if(_2d.style.display==""){
_2d.style.display="none";
row.style.display="none";
itm.className="cTableItem";
}else{
for(var i=0;i<loadInPlaceEls.length;i++){
$(loadInPlaceEls[i]).style.display="none";
$("_ROW_"+loadInPlaceIds[i]).style.display="none";
$("_ITEM_"+loadInPlaceIds[i]).className="cTableItem";
}
row.style.display="";
_2d.style.display="";
itm.className="cTableItemActive";
}
return false;
};
function inPlaceAction(id,_32,_33,_34){
var _35="_IP_ACTION_"+id+"_"+_32+"_";
showWait();
var _36=document.createElement("iframe");
_36.id=_35;
_36.className="inPlaceAction";
_36.style.height="50px;";
_36.style.display="";
_36.src="titan.php?target=inPlace&toSection="+_33+"&toAction="+_32+"&itemId="+id+"&assign="+_35;
loadInPlace(id,_36,_34);
};
function inPlaceStatus(_37,id,_39,_3a,_3b,msg,_3d,_3e){
var _3f="_IP_STATUS_"+_37+"_"+id+"_"+_39+"_"+_3b+"_",row,col,b,aux;
var _44=document.createElement("table");
_44.id=_3f;
_44.className="inPlaceStatus";
_44.style.display="";
row=document.createElement("tr");
if(msg!=""){
col=document.createElement("td");
col.innerHTML=msg;
row.appendChild(col);
}
var _45=tAjax.inPlaceStatusValue(id,_39,_3a,_3b);
col=document.createElement("td");
col.style.textAlign="right";
for(var i=0;i<_3e.length;i++){
if(_3e[i].value==_45){
continue;
}
b=document.createElement("input");
b.type="button";
b.className="button";
b.value=_3e[i].label;
b.style.color=_3e[i].color!=""?_3e[i].color:"#575556";
b.style.borderColor=_3e[i].color!=""?_3e[i].color:"#575556";
eval("b.onclick = function () { inPlaceStatusChange ('"+id+"', '"+_39+"', '"+_3a+"', '"+_3b+"', '"+_3e[i].value+"', '"+_3f+"'); }");
col.appendChild(b);
}
row.appendChild(col);
_44.appendChild(row);
loadInPlace(id,_44,_3d);
};
function inPlaceStatusChange(id,_48,_49,_4a,_4b,_4c){
showWait();
$(_4c).style.display="none";
tAjax.inPlaceStatusChange(id,_48,_49,_4a,_4b,function(){
window.location.reload();
});
return false;
};
function crossEvent(e){
e=e?e:(window.event?window.event:null);
if(e){
this.originalEvent=e;
this.type=e.type;
this.screenX=e.clientX;
this.screenY=e.clientY;
this.target=e.target?e.target:e.srcElement;
if(e.modifiers){
this.altKey=e.modifiers&Event.ALT_MASK;
this.ctrlKey=e.modifiers&Event.CONTROL_MASK;
this.shiftKey=e.modifiers&Event.SHIFT_MASK;
this.metaKey=e.modifiers&Event.META_MASK;
}else{
this.altKey=e.altKey;
this.ctrlKey=e.ctrlKey;
this.shiftKey=e.shiftKey;
this.metaKey=e.metaKey;
}
this.charCode=!isNaN(e.charCode)?e.charCode:!isNaN(e.keyCode)?e.keyCode:e.which;
this.keyCode=!isNaN(e.keyCode)?e.keyCode:e.which;
this.button=!isNaN(e.button)?e.button:!isNaN(e.which)?e.which-1:null;
this.debug="c:"+e.charCode+" k:"+e.keyCode+" b:"+e.button+" w:"+e.which;
}
};
function sendBugReport(){
showWait();
var _4e=xoad.html.exportForm("bugReport");
tAjax.sendBugReport(_4e,function(){
tAjax.showMessages();
Modalbox.hide();
hideWait();
});
};
function changeLanguage(_4f){
showWait();
tAjax.changeLanguage(_4f,function(){
tAjax.showMessages();
parent.reloadFrames();
});
};
function readAlert(id){
tAjax.readAlert(id,function(){
$("_TITAN_ALERT_"+id).className="read";
$("_TITAN_ALERT_"+id).children[0].onmouseover=function(){
return false;
};
parent.banner.verifyAlerts();
});
return false;
};
function deleteAlert(id){
showWait();
tAjax.deleteAlert(id,function(){
var _52=$("_TITAN_ALERT_"+id).parentNode;
_52.removeChild($("_TITAN_ALERT_"+id));
if(!_52.children.length){
Modalbox.hide();
}
hideWait();
});
};
function copyItem(id,_54,_55,_56){
showWait();
var _57=tAjax.copyItem(id);
if(!_57){
tAjax.delay(function(){
tAjax.showMessages();
hideWait();
});
}else{
document.location="titan.php?target=body&toSection="+_55+"&toAction="+_54+"&itemId="+_57;
}
};
function formatMoney(_58){
var _59=(_58.toString()).split(".");
var _5a="",aux="";
while(true){
aux=(_59[0]%1000).toString();
_5a=aux+_5a;
_59[0]=parseInt(_59[0]/1000);
if(!_59[0]){
break;
}
switch(aux.length){
case 1:
_5a=".00"+_5a;
break;
case 2:
_5a=".0"+_5a;
break;
default:
_5a="."+_5a;
}
}
if(typeof (_59[1])=="undefined"){
_59[1]="00";
}else{
if(_59[1].length<2){
_59[1]+="0";
}
}
return _5a+","+_59[1];
};
function deleteItemFromShoppingCart(id){
showWait();
tAjax.deleteItemFromShoppingCart(id,function(){
var _5d=$("_TITAN_SHOP_"+id).parentNode;
_5d.removeChild($("_TITAN_SHOP_"+id));
if(_5d.children.length<=2){
Modalbox.hide();
}else{
updateShoppingCart();
}
hideWait();
});
};
function clone(obj){
if(null==obj||"object"!=typeof obj){
return obj;
}
if(obj instanceof Date){
var _5f=new Date();
_5f.setTime(obj.getTime());
return _5f;
}
if(obj instanceof Array){
var _5f=[];
for(var i=0,len=obj.length;i<len;i++){
_5f[i]=clone(obj[i]);
}
return _5f;
}
if(obj instanceof Object){
var _5f={};
for(var _62 in obj){
if(obj.hasOwnProperty(_62)){
_5f[_62]=clone(obj[_62]);
}
}
return _5f;
}
return null;
};
var changeMenuSpeed=10;
function backMenu(_63,_64){
var obj=document.getElementById("menuMain_"+_64);
var _66=document.getElementById("menuMain_"+_63);
var _67=obj.style.left.replace("px","")/1;
var _68=_66.style.left.replace("px","")/1;
_67+=changeMenuSpeed;
_68+=changeMenuSpeed;
if(_67>0){
_67=0;
_68=200;
}
_66.style.left=_68+"px";
obj.style.left=_67+"px";
if(_67<0){
setTimeout("backMenu ('"+_63+"','"+_64+"')",5);
}
};
function slideMenu(_69,_6a,_6b){
if(!_6b){
_6b=changeMenuSpeed;
}
var obj=document.getElementById("menuMain_"+_6a);
var _6d=document.getElementById("menuMain_"+_69);
obj.style.display="block";
var _6e=obj.style.left.replace("px","")/1;
var _6f=_6d.style.left.replace("px","")/1;
_6e-=_6b;
_6f-=_6b;
if(_6e<0){
_6e=0;
_6f=-200;
}
obj.style.left=_6e+"px";
_6d.style.left=_6f+"px";
if(_6e>0){
setTimeout("slideMenu ('"+_69+"','"+_6a+"','"+_6b+"')",5);
}
};
function showMenu(obj,_71){
var _72=document.getElementById("menuBox");
modalMsg.close();
if(window.Modalbox&&Modalbox.initialized){
Modalbox.hide();
}
if(_72.style.display=="block"){
_72.style.display="none";
}else{
if(_71==1){
var ns=(navigator.appName.indexOf("Netscape")!=-1);
var aux=ns?pageYOffset+innerHeight:document.body.scrollTop+document.body.clientHeight;
_72.style.left=(obj.offsetLeft-90)+"px";
_72.style.top=(aux-menuHeight-58)+"px";
}else{
_72.style.left=(obj.offsetLeft-90)+"px";
_72.style.top=(obj.offsetTop-4)+"px";
}
_72.style.display="block";
}
return true;
};
function bissext(_75){
global.Date.bissext(_75);
};
function dateValidate(id){
global.Date.validate(id);
};
function alterTime(id){
global.Time.alter(id);
};
function formatInteger(_78,e){
global.Integer.format(_78,e);
};
function formatAmount(_7a,e){
global.Amount.format(_7a,e);
};
function formatFloat(_7c,e){
global.Float.format(_7c,e);
};
function formatCpf(_7e,e){
global.Cpf.format(_7e,e);
};
function formatRga(_80,e){
global.Rga.format(_80,e);
};
function formatCnpj(_82,e){
global.Cnpj.format(_82,e);
};
function formatCep(_84,e){
global.Cep.format(_84,e);
};
function loadCity(_86,_87){
global.City.load(_86,_87);
};
function alterCheckbox(id){
global.Boolean.alter(id);
};
function passwordValidate(_89){
global.Password.validate(_89);
};
function showCalendar(id){
global.Date.showCalendar(id);
};
function loadFile(_8b,_8c){
global.File.load(_8b,_8c);
};
function enableUnsetFile(_8d){
global.File.enableUnset(_8d);
};
function disableUnsetFile(_8e){
global.File.disableUnset(_8e);
};
function unsetFile(_8f,_90){
global.File.unset(_8f,_90);
};
function uploadFile(_91){
global.File.upload(_91);
};
function getUploadFilter(_92){
global.File.getFilter(_92);
};
function addUploadFilter(_93,_94){
global.File.addFilter(_93);
};
function showCollectionCreate(_95,_96){
global.Collection.create(_95,_96);
};
function saveCollection(_97,_98,_99,_9a){
global.Collection.save(_97,_98,_99,_9a);
};
function addRowCollection(_9b,_9c,_9d){
global.Collection.addRow(_9b,_9c,_9d);
};
function deleteCollection(_9e,_9f,_a0){
global.Collection.delRow(_9e,_9f,_a0);
};
function selectSearch(_a1){
global.Select.showSearch(_a1);
};
function selectChoose(_a2,_a3,_a4){
global.Select.choose(_a2,_a3,_a4);
};
function clearSearch(_a5){
global.Select.clear(_a5);
};
if(typeof document.attachEvent!="undefined"){
window.attachEvent("onload",init);
document.attachEvent("onmousemove",moveMouse);
document.attachEvent("onclick",checkMove);
}else{
window.addEventListener("load",init,false);
document.addEventListener("mousemove",moveMouse,false);
document.addEventListener("click",checkMove,false);
}
var oDv=document.createElement("div");
var dvHdr=document.createElement("div");
var dvBdy=document.createElement("div");
var windowlock,boxMove,fixposx,fixposy,lockX,lockY,fixx,fixy,ox,oy,boxLeft,boxRight,boxTop,boxBottom,evt,mouseX,mouseY,boxOpen,totalScrollTop,totalScrollLeft;
boxOpen=false;
ox=10;
oy=10;
lockX=0;
lockY=0;
function init(){
oDv.appendChild(dvHdr);
oDv.appendChild(dvBdy);
oDv.style.position="absolute";
oDv.style.visibility="hidden";
document.body.appendChild(oDv);
};
function defHdrStyle(){
dvHdr.innerHTML="<img  style=\"vertical-align:middle\"  src=\"info.gif\">&nbsp;&nbsp;"+dvHdr.innerHTML;
dvHdr.style.fontWeight="bold";
dvHdr.style.width="150px";
dvHdr.style.fontFamily="arial";
dvHdr.style.border="1px solid #A5CFE9";
dvHdr.style.padding="3";
dvHdr.style.fontSize="11";
dvHdr.style.color="#4B7A98";
dvHdr.style.background="#D5EBF9";
dvHdr.style.filter="alpha(opacity=85)";
dvHdr.style.opacity="0.85";
};
function defBdyStyle(){
dvBdy.style.borderBottom="1px solid #A5CFE9";
dvBdy.style.borderLeft="1px solid #A5CFE9";
dvBdy.style.borderRight="1px solid #A5CFE9";
dvBdy.style.width="150px";
dvBdy.style.fontFamily="arial";
dvBdy.style.fontSize="11";
dvBdy.style.padding="3";
dvBdy.style.color="#1B4966";
dvBdy.style.background="#FFFFFF";
dvBdy.style.filter="alpha(opacity=85)";
dvBdy.style.opacity="0.85";
};
function checkElemBO(txt){
if(!txt||typeof (txt)!="string"){
return false;
}
if((txt.indexOf("header")>-1)&&(txt.indexOf("body")>-1)&&(txt.indexOf("[")>-1)&&(txt.indexOf("[")>-1)){
return true;
}else{
return false;
}
};
function scanBO(_a7){
if(checkElemBO(_a7.title)){
_a7.boHDR=getParam("header",_a7.title);
_a7.boBDY=getParam("body",_a7.title);
_a7.boCSSBDY=getParam("cssbody",_a7.title);
_a7.boCSSHDR=getParam("cssheader",_a7.title);
_a7.IEbugfix=(getParam("hideselects",_a7.title)=="on")?true:false;
_a7.fixX=parseInt(getParam("fixedrelx",_a7.title));
_a7.fixY=parseInt(getParam("fixedrely",_a7.title));
_a7.absX=parseInt(getParam("fixedabsx",_a7.title));
_a7.absY=parseInt(getParam("fixedabsy",_a7.title));
_a7.offY=(getParam("offsety",_a7.title)!="")?parseInt(getParam("offsety",_a7.title)):10;
_a7.offX=(getParam("offsetx",_a7.title)!="")?parseInt(getParam("offsetx",_a7.title)):10;
_a7.fade=(getParam("fade",_a7.title)=="on")?true:false;
_a7.fadespeed=(getParam("fadespeed",_a7.title)!="")?getParam("fadespeed",_a7.title):0.04;
_a7.delay=(getParam("delay",_a7.title)!="")?parseInt(getParam("delay",_a7.title)):0;
if(getParam("requireclick",_a7.title)=="on"){
_a7.requireclick=true;
document.all?_a7.attachEvent("onclick",showHideBox):_a7.addEventListener("click",showHideBox,false);
document.all?_a7.attachEvent("onmouseover",hideBox):_a7.addEventListener("mouseover",hideBox,false);
}else{
if(getParam("doubleclickstop",_a7.title)!="off"){
document.all?_a7.attachEvent("ondblclick",pauseBox):_a7.addEventListener("dblclick",pauseBox,false);
}
if(getParam("singleclickstop",_a7.title)=="on"){
document.all?_a7.attachEvent("onclick",pauseBox):_a7.addEventListener("click",pauseBox,false);
}
}
_a7.windowLock=getParam("windowlock",_a7.title).toLowerCase()=="off"?false:true;
_a7.title="";
_a7.hasbox=1;
}else{
_a7.hasbox=2;
}
};
function getParam(_a8,_a9){
var reg=new RegExp("([^a-zA-Z]"+_a8+"|^"+_a8+")\\s*=\\s*\\[\\s*(((\\[\\[)|(\\]\\])|([^\\]\\[]))*)\\s*\\]");
var res=reg.exec(_a9);
var _ac;
if(res){
return res[2].replace("[[","[").replace("]]","]");
}else{
return "";
}
};
function Left(_ad){
var x=0;
if(_ad.calcLeft){
return _ad.calcLeft;
}
var _af=_ad;
while(_ad){
if((_ad.currentStyle)&&(!isNaN(parseInt(_ad.currentStyle.borderLeftWidth)))&&(x!=0)){
x+=parseInt(_ad.currentStyle.borderLeftWidth);
}
x+=_ad.offsetLeft;
_ad=_ad.offsetParent;
}
_af.calcLeft=x;
return x;
};
function Top(_b0){
var x=0;
if(_b0.calcTop){
return _b0.calcTop;
}
var _b2=_b0;
while(_b0){
if((_b0.currentStyle)&&(!isNaN(parseInt(_b0.currentStyle.borderTopWidth)))&&(x!=0)){
x+=parseInt(_b0.currentStyle.borderTopWidth);
}
x+=_b0.offsetTop;
_b0=_b0.offsetParent;
}
_b2.calcTop=x;
return x;
};
var ah,ab;
function applyStyles(){
if(ab){
oDv.removeChild(dvBdy);
}
if(ah){
oDv.removeChild(dvHdr);
}
dvHdr=document.createElement("div");
dvBdy=document.createElement("div");
CBE.boCSSBDY?dvBdy.className=CBE.boCSSBDY:defBdyStyle();
CBE.boCSSHDR?dvHdr.className=CBE.boCSSHDR:defHdrStyle();
dvHdr.innerHTML=CBE.boHDR;
dvBdy.innerHTML=CBE.boBDY;
ah=false;
ab=false;
if(CBE.boHDR!=""){
oDv.appendChild(dvHdr);
ah=true;
}
if(CBE.boBDY!=""){
oDv.appendChild(dvBdy);
ab=true;
}
};
var CSE,iterElem,LSE,CBE,LBE,totalScrollLeft,totalScrollTop,width,height;
var ini=false;
function SHW(){
if(document.body&&(document.body.clientWidth!=0)){
width=document.body.clientWidth;
height=document.body.clientHeight;
}
if(document.documentElement&&(document.documentElement.clientWidth!=0)&&(document.body.clientWidth+20>=document.documentElement.clientWidth)){
width=document.documentElement.clientWidth;
height=document.documentElement.clientHeight;
}
return [width,height];
};
var ID=null;
function moveMouse(e){
e?evt=e:evt=event;
CSE=evt.target?evt.target:evt.srcElement;
if(!CSE.hasbox){
iElem=CSE;
while((iElem.parentNode)&&(!iElem.hasbox)){
scanBO(iElem);
iElem=iElem.parentNode;
}
}
if((CSE!=LSE)&&(!isChild(CSE,dvHdr))&&(!isChild(CSE,dvBdy))){
if(!CSE.boxItem){
iterElem=CSE;
while((iterElem.hasbox==2)&&(iterElem.parentNode)){
iterElem=iterElem.parentNode;
}
CSE.boxItem=iterElem;
}
iterElem=CSE.boxItem;
if(CSE.boxItem&&(CSE.boxItem.hasbox==1)){
LBE=CBE;
CBE=iterElem;
if(CBE!=LBE){
applyStyles();
if(!CBE.requireclick){
if(CBE.fade){
if(ID!=null){
clearTimeout(ID);
}
ID=setTimeout("fadeIn("+CBE.fadespeed+")",CBE.delay);
}else{
if(ID!=null){
clearTimeout(ID);
}
COL=1;
ID=setTimeout("oDv.style.visibility='visible';ID=null;",CBE.delay);
}
}
if(CBE.IEbugfix){
hideSelects();
}
fixposx=!isNaN(CBE.fixX)?Left(CBE)+CBE.fixX:CBE.absX;
fixposy=!isNaN(CBE.fixY)?Top(CBE)+CBE.fixY:CBE.absY;
lockX=0;
lockY=0;
boxMove=true;
ox=CBE.offX?CBE.offX:10;
oy=CBE.offY?CBE.offY:10;
}
}else{
if(!isChild(CSE,dvHdr)&&!isChild(CSE,dvBdy)&&(boxMove)){
if((!isChild(CBE,CSE))||(CSE.tagName!="TABLE")){
CBE=null;
fadeOut();
showSelects();
}
}
}
LSE=CSE;
}else{
if(((isChild(CSE,dvHdr)||isChild(CSE,dvBdy))&&(boxMove))){
totalScrollLeft=0;
totalScrollTop=0;
iterElem=CSE;
while(iterElem){
if(!isNaN(parseInt(iterElem.scrollTop))){
totalScrollTop+=parseInt(iterElem.scrollTop);
}
if(!isNaN(parseInt(iterElem.scrollLeft))){
totalScrollLeft+=parseInt(iterElem.scrollLeft);
}
iterElem=iterElem.parentNode;
}
if(CBE!=null){
boxLeft=Left(CBE)-totalScrollLeft;
boxRight=parseInt(Left(CBE)+CBE.offsetWidth)-totalScrollLeft;
boxTop=Top(CBE)-totalScrollTop;
boxBottom=parseInt(Top(CBE)+CBE.offsetHeight)-totalScrollTop;
doCheck();
}
}
}
if(boxMove&&CBE){
bodyScrollTop=document.documentElement&&document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop;
bodyScrollLet=document.documentElement&&document.documentElement.scrollLeft?document.documentElement.scrollLeft:document.body.scrollLeft;
mouseX=evt.pageX?evt.pageX-bodyScrollLet:evt.clientX-document.body.clientLeft;
mouseY=evt.pageY?evt.pageY-bodyScrollTop:evt.clientY-document.body.clientTop;
if((CBE)&&(CBE.windowLock)){
mouseY<-oy?lockY=-mouseY-oy:lockY=0;
mouseX<-ox?lockX=-mouseX-ox:lockX=0;
mouseY>(SHW()[1]-oDv.offsetHeight-oy)?lockY=-mouseY+SHW()[1]-oDv.offsetHeight-oy:lockY=lockY;
mouseX>(SHW()[0]-dvBdy.offsetWidth-ox)?lockX=-mouseX-ox+SHW()[0]-dvBdy.offsetWidth:lockX=lockX;
}
oDv.style.left=((fixposx)||(fixposx==0))?fixposx:bodyScrollLet+mouseX+ox+lockX+"px";
oDv.style.top=((fixposy)||(fixposy==0))?fixposy:bodyScrollTop+mouseY+oy+lockY+"px";
}
};
function doCheck(){
if((mouseX<boxLeft)||(mouseX>boxRight)||(mouseY<boxTop)||(mouseY>boxBottom)){
if(!CBE.requireclick){
fadeOut();
}
if(CBE.IEbugfix){
showSelects();
}
CBE=null;
}
};
function pauseBox(e){
e?evt=e:evt=event;
boxMove=false;
evt.cancelBubble=true;
};
function showHideBox(e){
oDv.style.visibility=(oDv.style.visibility!="visible")?"visible":"hidden";
};
function hideBox(e){
oDv.style.visibility="hidden";
};
var COL=0;
var stopfade=false;
function fadeIn(fs){
ID=null;
COL=0;
oDv.style.visibility="visible";
fadeIn2(fs);
};
function fadeIn2(fs){
COL=COL+fs;
COL=(COL>1)?1:COL;
oDv.style.filter="alpha(opacity="+parseInt(100*COL)+")";
oDv.style.opacity=COL;
if(COL<1){
setTimeout("fadeIn2("+fs+")",20);
}
};
function fadeOut(){
oDv.style.visibility="hidden";
};
function isChild(s,d){
while(s){
if(s==d){
return true;
}
s=s.parentNode;
}
return false;
};
var cSrc;
function checkMove(e){
e?evt=e:evt=event;
cSrc=evt.target?evt.target:evt.srcElement;
if((!boxMove)&&(!isChild(cSrc,oDv))){
fadeOut();
if(CBE&&CBE.IEbugfix){
showSelects();
}
boxMove=true;
CBE=null;
}
};
function showSelects(){
var _bc=document.getElementsByTagName("select");
for(i=0;i<_bc.length;i++){
_bc[i].style.visibility="visible";
}
};
function hideSelects(){
var _bd=document.getElementsByTagName("select");
for(i=0;i<_bd.length;i++){
_bd[i].style.visibility="hidden";
}
};
function addEvent(obj,_bf,_c0){
if(obj.attachEvent){
obj.attachEvent("on"+_bf,_c0);
}else{
if(obj.addEventListener){
obj.addEventListener(_bf,_c0,true);
}else{
obj["on"+_bf]=_c0;
}
}
};
function removeEvent(obj,_c2,_c3){
if(obj.detachEvent){
obj.detachEvent("on"+_c2,_c3);
}else{
if(obj.removeEventListener){
obj.removeEventListener(_c2,_c3,true);
}else{
obj["on"+_c2]=null;
}
}
};
function stopEvent(evt){
evt||window.event;
if(evt.stopPropagation){
evt.stopPropagation();
evt.preventDefault();
}else{
if(typeof evt.cancelBubble!="undefined"){
evt.cancelBubble=true;
evt.returnValue=false;
}
}
return false;
};
function getElement(evt){
if(window.event){
return window.event.srcElement;
}else{
return evt.currentTarget;
}
};
function getTargetElement(evt){
if(window.event){
return window.event.srcElement;
}else{
return evt.target;
}
};
function stopSelect(obj){
if(typeof obj.onselectstart!="undefined"){
addEvent(obj,"selectstart",function(){
return false;
});
}
};
function getCaretEnd(obj){
if(typeof obj.selectionEnd!="undefined"){
return obj.selectionEnd;
}else{
if(document.selection&&document.selection.createRange){
var M=document.selection.createRange();
try{
var Lp=M.duplicate();
Lp.moveToElementText(obj);
}
catch(e){
var Lp=obj.createTextRange();
}
Lp.setEndPoint("EndToEnd",M);
var rb=Lp.text.length;
if(rb>obj.value.length){
return -1;
}
return rb;
}
}
};
function getCaretStart(obj){
if(typeof obj.selectionStart!="undefined"){
return obj.selectionStart;
}else{
if(document.selection&&document.selection.createRange){
var M=document.selection.createRange();
try{
var Lp=M.duplicate();
Lp.moveToElementText(obj);
}
catch(e){
var Lp=obj.createTextRange();
}
Lp.setEndPoint("EndToStart",M);
var rb=Lp.text.length;
if(rb>obj.value.length){
return -1;
}
return rb;
}
}
};
function setCaret(obj,l){
obj.focus();
if(obj.setSelectionRange){
obj.setSelectionRange(l,l);
}else{
if(obj.createTextRange){
m=obj.createTextRange();
m.moveStart("character",l);
m.collapse();
m.select();
}
}
};
function setSelection(obj,s,e){
obj.focus();
if(obj.setSelectionRange){
obj.setSelectionRange(s,e);
}else{
if(obj.createTextRange){
m=obj.createTextRange();
m.moveStart("character",s);
m.moveEnd("character",e);
m.select();
}
}
};
String.prototype.addslashes=function(){
return this.replace(/(["\\\.\|\[\]\^\*\+\?\$\(\)])/g,"\\$1");
};
String.prototype.trim=function(){
return this.replace(/^\s*(\S*(\s+\S+)*)\s*$/,"$1");
};
function curTop(obj){
toreturn=0;
while(obj){
toreturn+=obj.offsetTop;
obj=obj.offsetParent;
}
return toreturn;
};
function curLeft(obj){
toreturn=0;
while(obj){
toreturn+=obj.offsetLeft;
obj=obj.offsetParent;
}
return toreturn;
};
function isNumber(a){
return typeof a=="number"&&isFinite(a);
};
function replaceHTML(obj,_d9){
while(el=obj.childNodes[0]){
obj.removeChild(el);
}
obj.appendChild(document.createTextNode(_d9));
};
function actb(_da,obj,_dc,_dd,_de,_df,_e0){
this.actb_timeOut=-1;
this.actb_lim=20;
this.actb_firstText=false;
this.actb_mouse=false;
this.actb_delimiter=new Array(";",",");
this.actb_startcheck=3;
this.actb_bgColor="#F4F4F4";
this.actb_textColor="#656565";
this.actb_hColor="#CCCCCC";
this.actb_fFamily="Verdana";
this.actb_fSize="10px";
this.actb_hStyle="text-decoration:underline;font-weight=\"bold\"";
var _e1=new Array();
var _e2=0;
var _e3=new Array();
var _e4=false;
var _e5=0;
var _e6=0;
var _e7=null;
var _e8=null;
var _e9=null;
var _ea="";
var _eb=0;
var _ec=0;
var _ed=0;
var _ee=new Array();
var _ef=0;
var _f0;
var _f1=false;
var _f2="";
var _f3=1;
var _f4=0;
var _f5=false;
this.actb_keywords=new Array();
this.actb_keywords=new Array();
this.actb_ids=new Array();
this.actb_self=this;
_e7=obj;
_e8=_dc;
_e9=_dd;
actb_upload=_de;
actb_field=_da;
_ea=_df;
_eb=_e0;
addEvent(_e7,"focus",actb_setup);
function actb_setup(){
addEvent(document,"keydown",actb_checkkey);
addEvent(_e7,"blur",actb_clear);
addEvent(document,"keypress",actb_keypress);
};
function actb_clear(evt){
if(!evt){
evt=event;
}
removeEvent(document,"keydown",actb_checkkey);
removeEvent(_e7,"blur",actb_clear);
removeEvent(document,"keypress",actb_keypress);
actb_removedisp();
};
function actb_parse(n){
if(actb_self.actb_delimiter.length>0){
var t=_e1[_e2].trim().addslashes();
var _f9=_e1[_e2].trim().length;
}else{
var t=_e7.value.addslashes();
var _f9=_e7.value.length;
}
var _fa="";
var i;
if(actb_self.actb_firstText){
var re=new RegExp("^"+t,"i");
}else{
var re=new RegExp(t,"i");
}
var p=n.search(re);
for(i=0;i<p;i++){
_fa+=n.substr(i,1);
}
_fa+="<font style='"+(actb_self.actb_hStyle)+"'>";
for(i=p;i<_f9+p;i++){
_fa+=n.substr(i,1);
}
_fa+="</font>";
for(i=_f9+p;i<n.length;i++){
_fa+=n.substr(i,1);
}
return _fa;
};
function actb_generate(){
if($("tat_table")){
_e4=false;
document.body.removeChild($("tat_table"));
}
if($("tat_div")){
document.body.removeChild($("tat_div"));
}
if(_f4==0){
_e4=false;
return;
}
_e9.style.display="none";
actb_upload.style.display="none";
global.File.unset(actb_field);
a=document.createElement("table");
a.cellSpacing="1px";
a.cellPadding="2px";
a.style.width="302px";
a.style.border="#000000 1px solid";
a.style.position="absolute";
a.style.top=eval(curTop(_e7)+_e7.offsetHeight)+"px";
a.style.left=curLeft(_e7)+"px";
a.style.backgroundColor=actb_self.actb_bgColor;
a.id="tat_table";
document.body.appendChild(a);
b=document.createElement("div");
b.style.width="300px";
b.style.height="106px";
b.style.border="#CCCCCC 1px solid";
b.style.position="absolute";
b.style.top=eval(curTop(_e7)+_e7.offsetHeight)+"px";
b.style.left=eval(curLeft(_e7)+304)+"px";
b.style.backgroundColor="#FFFFFF";
b.id="tat_div";
document.body.appendChild(b);
var i;
var _ff=true;
var j=1;
if(actb_self.actb_mouse){
a.onmouseout=actb_table_unfocus;
a.onmouseover=actb_table_focus;
}
var _101=0;
for(i=0;i<actb_self.actb_keywords.length;i++){
if(_ee[i]){
_101++;
r=a.insertRow(-1);
if(_ff&&!_f1){
r.style.backgroundColor=actb_self.actb_hColor;
_ff=false;
_e5=_101;
b.innerHTML=tAjax.getFileResume(actb_self.actb_ids[i]);
}else{
if(_ef==i){
r.style.backgroundColor=actb_self.actb_hColor;
_ff=false;
_e5=_101;
b.innerHTML=tAjax.getFileResume(actb_self.actb_ids[i]);
}else{
r.style.backgroundColor=actb_self.actb_bgColor;
}
}
r.id="tat_tr"+(j);
c=r.insertCell(-1);
c.style.color=actb_self.actb_textColor;
c.style.fontFamily=actb_self.actb_fFamily;
c.style.fontSize=actb_self.actb_fSize;
c.innerHTML=actb_parse(actb_self.actb_keywords[i]);
c.id="tat_td"+(j);
c.setAttribute("pos",j);
if(actb_self.actb_mouse){
c.style.cursor="pointer";
c.onclick=actb_mouseclick;
c.onmouseover=actb_table_highlight;
}
j++;
}
if(j-1==actb_self.actb_lim&&j<_e6){
r=a.insertRow(-1);
r.style.backgroundColor=actb_self.actb_bgColor;
c=r.insertCell(-1);
c.style.color=actb_self.actb_textColor;
c.style.fontFamily="arial narrow";
c.style.fontSize=actb_self.actb_fSize;
c.align="center";
replaceHTML(c,"\\/");
if(actb_self.actb_mouse){
c.style.cursor="pointer";
c.onclick=actb_mouse_down;
}
break;
}
}
_ec=1;
_ed=j-1;
_e4=true;
if(_e5<=0){
_e5=1;
}
};
function actb_remake(){
document.body.removeChild($("tat_table"));
a=document.createElement("table");
a.cellSpacing="1px";
a.cellPadding="2px";
a.style.position="absolute";
a.style.top=eval(curTop(_e7)+_e7.offsetHeight)+"px";
a.style.left=curLeft(_e7)+"px";
a.style.backgroundColor=actb_self.actb_bgColor;
a.id="tat_table";
if(actb_self.actb_mouse){
a.onmouseout=actb_table_unfocus;
a.onmouseover=actb_table_focus;
}
document.body.appendChild(a);
var i;
var _103=true;
var j=1;
if(_ec>1){
r=a.insertRow(-1);
r.style.backgroundColor=actb_self.actb_bgColor;
c=r.insertCell(-1);
c.style.color=actb_self.actb_textColor;
c.style.fontFamily="arial narrow";
c.style.fontSize=actb_self.actb_fSize;
c.align="center";
replaceHTML(c,"/\\");
if(actb_self.actb_mouse){
c.style.cursor="pointer";
c.onclick=actb_mouse_up;
}
}
for(i=0;i<actb_self.actb_keywords.length;i++){
if(_ee[i]){
if(j>=_ec&&j<=_ed){
r=a.insertRow(-1);
r.style.backgroundColor=actb_self.actb_bgColor;
r.id="tat_tr"+(j);
c=r.insertCell(-1);
c.style.color=actb_self.actb_textColor;
c.style.fontFamily=actb_self.actb_fFamily;
c.style.fontSize=actb_self.actb_fSize;
c.innerHTML=actb_parse(actb_self.actb_keywords[i]);
c.id="tat_td"+(j);
c.setAttribute("pos",j);
if(actb_self.actb_mouse){
c.style.cursor="pointer";
c.onclick=actb_mouseclick;
c.onmouseover=actb_table_highlight;
}
j++;
}else{
j++;
}
}
if(j>_ed){
break;
}
}
if(j-1<_e6){
r=a.insertRow(-1);
r.style.backgroundColor=actb_self.actb_bgColor;
c=r.insertCell(-1);
c.style.color=actb_self.actb_textColor;
c.style.fontFamily="arial narrow";
c.style.fontSize=actb_self.actb_fSize;
c.align="center";
replaceHTML(c,"\\/");
if(actb_self.actb_mouse){
c.style.cursor="pointer";
c.onclick=actb_mouse_down;
}
}
};
function actb_goup(){
if(!_e4){
return;
}
if(_e5==1){
return;
}
$("tat_tr"+_e5).style.backgroundColor=actb_self.actb_bgColor;
_e5--;
if(_e5<_ec){
actb_moveup();
}
$("tat_tr"+_e5).style.backgroundColor=actb_self.actb_hColor;
$("tat_div").innerHTML=tAjax.getFileResume(actb_self.actb_ids[_e5-1]);
if(_f0){
clearTimeout(_f0);
}
if(actb_self.actb_timeOut>0){
_f0=setTimeout(function(){
_f3=0;
actb_removedisp();
},actb_self.actb_timeOut);
}
};
function actb_godown(){
if(!_e4){
return;
}
if(_e5==_e6){
return;
}
$("tat_tr"+_e5).style.backgroundColor=actb_self.actb_bgColor;
_e5++;
if(_e5>_ed){
actb_movedown();
}
$("tat_tr"+_e5).style.backgroundColor=actb_self.actb_hColor;
$("tat_div").innerHTML=tAjax.getFileResume(actb_self.actb_ids[_e5-1]);
if(_f0){
clearTimeout(_f0);
}
if(actb_self.actb_timeOut>0){
_f0=setTimeout(function(){
_f3=0;
actb_removedisp();
},actb_self.actb_timeOut);
}
};
function actb_movedown(){
_ec++;
_ed++;
actb_remake();
};
function actb_moveup(){
_ec--;
_ed--;
actb_remake();
};
function actb_mouse_down(){
$("tat_tr"+_e5).style.backgroundColor=actb_self.actb_bgColor;
_e5++;
actb_movedown();
$("tat_tr"+_e5).style.backgroundColor=actb_self.actb_hColor;
_e7.focus();
_f3=0;
if(_f0){
clearTimeout(_f0);
}
if(actb_self.actb_timeOut>0){
_f0=setTimeout(function(){
_f3=0;
actb_removedisp();
},actb_self.actb_timeOut);
}
};
function actb_mouse_up(evt){
if(!evt){
evt=event;
}
if(evt.stopPropagation){
evt.stopPropagation();
}else{
evt.cancelBubble=true;
}
$("tat_tr"+_e5).style.backgroundColor=actb_self.actb_bgColor;
_e5--;
actb_moveup();
$("tat_tr"+_e5).style.backgroundColor=actb_self.actb_hColor;
_e7.focus();
_f3=0;
if(_f0){
clearTimeout(_f0);
}
if(actb_self.actb_timeOut>0){
_f0=setTimeout(function(){
_f3=0;
actb_removedisp();
},actb_self.actb_timeOut);
}
};
function actb_mouseclick(evt){
if(!evt){
evt=event;
}
if(!_e4){
return;
}
_f3=0;
_e5=this.getAttribute("pos");
actb_penter();
};
function actb_table_focus(){
_f3=1;
};
function actb_table_unfocus(){
_f3=0;
if(_f0){
clearTimeout(_f0);
}
if(actb_self.actb_timeOut>0){
_f0=setTimeout(function(){
_f3=0;
actb_removedisp();
},actb_self.actb_timeOut);
}
};
function actb_table_highlight(){
_f3=1;
$("tat_tr"+_e5).style.backgroundColor=actb_self.actb_bgColor;
_e5=this.getAttribute("pos");
while(_e5<_ec){
actb_moveup();
}
while(_e5>_ed){
actb_movedown();
}
$("tat_tr"+_e5).style.backgroundColor=actb_self.actb_hColor;
if(_f0){
clearTimeout(_f0);
}
if(actb_self.actb_timeOut>0){
_f0=setTimeout(function(){
_f3=0;
actb_removedisp();
},actb_self.actb_timeOut);
}
};
function actb_insertword(a){
if(actb_self.actb_delimiter.length>0){
str="";
l=0;
for(i=0;i<_e1.length;i++){
if(_e2==i){
prespace=postspace="";
gotbreak=false;
for(j=0;j<_e1[i].length;++j){
if(_e1[i].charAt(j)!=" "){
gotbreak=true;
break;
}
prespace+=" ";
}
for(j=_e1[i].length-1;j>=0;--j){
if(_e1[i].charAt(j)!=" "){
break;
}
postspace+=" ";
}
str+=prespace;
str+=a;
l=str.length;
if(gotbreak){
str+=postspace;
}
}else{
str+=_e1[i];
}
if(i!=_e1.length-1){
str+=_e3[i];
}
}
_e7.value=str;
setCaret(_e7,l);
}else{
_e7.value=a;
}
_f3=0;
actb_removedisp();
};
function actb_penter(){
if(!_e4){
return;
}
_e4=false;
var word="";
var c=0;
for(var i=0;i<=actb_self.actb_keywords.length;i++){
if(_ee[i]){
c++;
}
if(c==_e5){
word=actb_self.actb_keywords[i];
break;
}
}
_e8.value=actb_self.actb_ids[i];
actb_insertword(word);
l=getCaretStart(_e7);
_e9.innerHTML=tAjax.getFileResume(actb_self.actb_ids[i]);
_e9.style.display="";
global.File.enableUnset(actb_field);
};
function actb_removedisp(){
if(_f3==0){
_e4=0;
if($("tat_table")){
document.body.removeChild($("tat_table"));
}
if($("tat_div")){
document.body.removeChild($("tat_div"));
}
if(_f0){
clearTimeout(_f0);
}
}
};
function actb_keypress(e){
if(_f5){
stopEvent(e);
}
return !_f5;
};
function actb_checkkey(evt){
if(!evt){
evt=event;
}
a=evt.keyCode;
caret_pos_start=getCaretStart(_e7);
_f5=0;
switch(a){
case 38:
actb_goup();
_f5=1;
return false;
break;
case 40:
actb_godown();
_f5=1;
return false;
break;
case 13:
case 9:
if(_e4){
_f5=1;
actb_penter();
return false;
}else{
return true;
}
break;
default:
setTimeout(function(){
actb_tocomplete(a);
},50);
break;
}
};
function actb_tocomplete(kc){
if(kc==38||kc==40||kc==13){
return;
}
var i;
if(_e4){
var word=0;
var c=0;
for(var i=0;i<=actb_self.actb_keywords.length;i++){
if(_ee[i]){
c++;
}
if(c==_e5){
word=i;
break;
}
}
_ef=word;
}else{
_ef=-1;
}
if(_e7.value==""){
_f3=0;
actb_removedisp();
return;
}
if(actb_self.actb_delimiter.length>0){
caret_pos_start=getCaretStart(_e7);
caret_pos_end=getCaretEnd(_e7);
delim_split="";
for(i=0;i<actb_self.actb_delimiter.length;i++){
delim_split+=actb_self.actb_delimiter[i];
}
delim_split=delim_split.addslashes();
delim_split_rx=new RegExp("(["+delim_split+"])");
c=0;
_e1=new Array();
_e1[0]="";
for(i=0,j=_e7.value.length;i<_e7.value.length;i++,j--){
if(_e7.value.substr(i,j).search(delim_split_rx)==0){
ma=_e7.value.substr(i,j).match(delim_split_rx);
_e3[c]=ma[1];
c++;
_e1[c]="";
}else{
_e1[c]+=_e7.value.charAt(i);
}
}
var l=0;
_e2=-1;
for(i=0;i<_e1.length;i++){
if(caret_pos_end>=l&&caret_pos_end<=l+_e1[i].length){
_e2=i;
}
l+=_e1[i].length+1;
}
var ot=_e1[_e2].trim();
var t=_e1[_e2].addslashes().trim();
}else{
var ot=_e7.value;
var t=_e7.value.addslashes();
}
if(ot.length==0){
_f3=0;
actb_removedisp();
}
if(ot.length<actb_self.actb_startcheck){
return this;
}
if(ot.length==actb_self.actb_startcheck){
eval(tAjax.getSuggest(_e7.value,_ea,_eb));
}
if(actb_self.actb_firstText){
var re=new RegExp("^"+t,"i");
}else{
var re=new RegExp(t,"i");
}
_e6=0;
_f1=false;
_f4=0;
for(i=0;i<actb_self.actb_keywords.length;i++){
_ee[i]=false;
if(re.test(actb_self.actb_keywords[i])){
_e6++;
_ee[i]=true;
_f4++;
if(_ef==i){
_f1=true;
}
}
}
if(_f0){
clearTimeout(_f0);
}
if(actb_self.actb_timeOut>0){
_f0=setTimeout(function(){
_f3=0;
actb_removedisp();
},actb_self.actb_timeOut);
}
actb_generate();
};
return this;
};
function sack(file){
this.xmlhttp=null;
this.resetData=function(){
this.method="POST";
this.queryStringSeparator="?";
this.argumentSeparator="&";
this.URLString="";
this.encodeURIString=true;
this.execute=false;
this.element=null;
this.elementObj=null;
this.requestFile=file;
this.vars=new Object();
this.responseStatus=new Array(2);
};
this.resetFunctions=function(){
this.onLoading=function(){
};
this.onLoaded=function(){
};
this.onInteractive=function(){
};
this.onCompletion=function(){
};
this.onError=function(){
};
this.onFail=function(){
};
};
this.reset=function(){
this.resetFunctions();
this.resetData();
};
this.createAJAX=function(){
try{
this.xmlhttp=new ActiveXObject("Msxml2.XMLHTTP");
}
catch(e1){
try{
this.xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
catch(e2){
this.xmlhttp=null;
}
}
if(!this.xmlhttp){
if(typeof XMLHttpRequest!="undefined"){
this.xmlhttp=new XMLHttpRequest();
}else{
this.failed=true;
}
}
};
this.setVar=function(name,_117){
this.vars[name]=Array(_117,false);
};
this.encVar=function(name,_119,_11a){
if(true==_11a){
return Array(encodeURIComponent(name),encodeURIComponent(_119));
}else{
this.vars[encodeURIComponent(name)]=Array(encodeURIComponent(_119),true);
}
};
this.processURLString=function(_11b,_11c){
encoded=encodeURIComponent(this.argumentSeparator);
regexp=new RegExp(this.argumentSeparator+"|"+encoded);
varArray=_11b.split(regexp);
for(i=0;i<varArray.length;i++){
urlVars=varArray[i].split("=");
if(true==_11c){
this.encVar(urlVars[0],urlVars[1]);
}else{
this.setVar(urlVars[0],urlVars[1]);
}
}
};
this.createURLString=function(_11d){
if(this.encodeURIString&&this.URLString.length){
this.processURLString(this.URLString,true);
}
if(_11d){
if(this.URLString.length){
this.URLString+=this.argumentSeparator+_11d;
}else{
this.URLString=_11d;
}
}
this.setVar("rndval",new Date().getTime());
urlstringtemp=new Array();
for(key in this.vars){
if(false==this.vars[key][1]&&true==this.encodeURIString){
encoded=this.encVar(key,this.vars[key][0],true);
delete this.vars[key];
this.vars[encoded[0]]=Array(encoded[1],true);
key=encoded[0];
}
urlstringtemp[urlstringtemp.length]=key+"="+this.vars[key][0];
}
if(_11d){
this.URLString+=this.argumentSeparator+urlstringtemp.join(this.argumentSeparator);
}else{
this.URLString+=urlstringtemp.join(this.argumentSeparator);
}
};
this.runResponse=function(){
eval(this.response);
};
this.runAJAX=function(_11e){
if(this.failed){
this.onFail();
}else{
this.createURLString(_11e);
if(this.element){
this.elementObj=document.getElementById(this.element);
}
if(this.xmlhttp){
var self=this;
if(this.method=="GET"){
totalurlstring=this.requestFile+this.queryStringSeparator+this.URLString;
this.xmlhttp.open(this.method,totalurlstring,true);
}else{
this.xmlhttp.open(this.method,this.requestFile,true);
try{
this.xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
}
catch(e){
}
}
this.xmlhttp.onreadystatechange=function(){
switch(self.xmlhttp.readyState){
case 1:
self.onLoading();
break;
case 2:
self.onLoaded();
break;
case 3:
self.onInteractive();
break;
case 4:
self.response=self.xmlhttp.responseText;
self.responseXML=self.xmlhttp.responseXML;
self.responseStatus[0]=self.xmlhttp.status;
self.responseStatus[1]=self.xmlhttp.statusText;
if(self.execute){
self.runResponse();
}
if(self.elementObj){
elemNodeName=self.elementObj.nodeName;
elemNodeName.toLowerCase();
if(elemNodeName=="input"||elemNodeName=="select"||elemNodeName=="option"||elemNodeName=="textarea"){
self.elementObj.value=self.response;
}else{
self.elementObj.innerHTML=self.response;
}
}
if(self.responseStatus[0]=="200"){
self.onCompletion();
}else{
self.onError();
}
self.URLString="";
break;
}
};
this.xmlhttp.send(this.URLString);
}
}
};
this.reset();
this.createAJAX();
};
var enableCache=true;
var jsCache=new Array();
var dynamicContent_ajaxObjects=new Array();
function ajax_showContent(_120,_121,url){
var _123=document.getElementById(_120);
_123.innerHTML=dynamicContent_ajaxObjects[_121].response;
if(enableCache){
jsCache[url]=dynamicContent_ajaxObjects[_121].response;
}
dynamicContent_ajaxObjects[_121]=false;
ajax_parseJs(_123);
};
function ajax_loadContent(_124,url){
if(enableCache&&jsCache[url]){
document.getElementById(_124).innerHTML=jsCache[url];
return;
}
var _126=dynamicContent_ajaxObjects.length;
document.getElementById(_124).innerHTML="Loading content - please wait";
dynamicContent_ajaxObjects[_126]=new sack();
dynamicContent_ajaxObjects[_126].requestFile=url;
dynamicContent_ajaxObjects[_126].onCompletion=function(){
ajax_showContent(_124,_126,url);
};
dynamicContent_ajaxObjects[_126].runAJAX();
};
function ajax_parseJs(_127){
var _128=_127.getElementsByTagName("SCRIPT");
for(var no=0;no<_128.length;no++){
eval(_128[no].innerHTML);
}
};
DHTML_modalMessage=function(){
var url;
var _12b;
var _12c;
var _12d;
var _12e;
var _12f;
var _130;
var _131;
var _132;
var _133;
var _134;
var _135;
var _136;
var MSIE;
this.url="";
this.htmlOfModalMessage="";
this.layoutCss="modal-message.css";
this.height=200;
this.width=400;
this.cssClassOfMessageBox=false;
this.shadowDivVisible=true;
this.shadowOffset=5;
this.MSIE=false;
if(navigator.userAgent.indexOf("MSIE")>=0){
this.MSIE=true;
}
};
DHTML_modalMessage.prototype={setSource:function(_138){
this.url=_138;
},setHtmlContent:function(_139){
this.htmlOfModalMessage=_139;
},setSize:function(_13a,_13b){
if(_13a){
this.width=_13a;
}
if(_13b){
this.height=_13b;
}
},setCssClassMessageBox:function(_13c){
this.cssClassOfMessageBox=_13c;
if(this.divs_content){
if(this.cssClassOfMessageBox){
this.divs_content.className=this.cssClassOfMessageBox;
}else{
this.divs_content.className="modalDialog_contentDiv";
}
}
},setShadowOffset:function(_13d){
this.shadowOffset=_13d;
},display:function(){
if(!this.divs_transparentDiv){
this.__createDivs();
}
this.divs_transparentDiv.style.display="block";
this.divs_content.style.display="block";
this.divs_shadow.style.display="block";
if(this.MSIE){
this.iframe.style.display="block";
}
this.__resizeDivs();
window.refToThisModalBoxObj=this;
setTimeout("window.refToThisModalBoxObj.__resizeDivs()",150);
this.__insertContent();
},setShadowDivVisible:function(_13e){
this.shadowDivVisible=_13e;
},close:function(){
document.documentElement.style.overflow="";
if(this.divs_transparentDiv){
this.divs_transparentDiv.style.display="none";
}
if(this.divs_content){
this.divs_content.style.display="none";
}
if(this.divs_shadow){
this.divs_shadow.style.display="none";
}
if(this.MSIE&&this.iframe){
this.iframe.style.display="none";
}
},__createDivs:function(){
this.divs_transparentDiv=document.createElement("DIV");
this.divs_transparentDiv.className="modalDialog_transparentDivs";
this.divs_transparentDiv.style.left="0px";
this.divs_transparentDiv.style.top="0px";
document.body.appendChild(this.divs_transparentDiv);
this.divs_content=document.createElement("DIV");
this.divs_content.className="modalDialog_contentDiv";
this.divs_content.id="DHTMLSuite_modalBox_contentDiv";
this.divs_content.style.zIndex=100000;
if(this.MSIE){
this.iframe=document.createElement("<IFRAME src=\"about:blank\" frameborder=0>");
this.iframe.style.zIndex=90000;
this.iframe.style.position="absolute";
document.body.appendChild(this.iframe);
}
document.body.appendChild(this.divs_content);
this.divs_shadow=document.createElement("DIV");
this.divs_shadow.className="modalDialog_contentDiv_shadow";
this.divs_shadow.style.zIndex=95000;
document.body.appendChild(this.divs_shadow);
},__resizeDivs:function(){
var _13f=Math.max(document.body.scrollTop,document.documentElement.scrollTop);
if(this.cssClassOfMessageBox){
this.divs_content.className=this.cssClassOfMessageBox;
}else{
this.divs_content.className="modalDialog_contentDiv";
}
if(!this.divs_transparentDiv){
return;
}
var st=Math.max(document.body.scrollTop,document.documentElement.scrollTop);
var sl=Math.max(document.body.scrollLeft,document.documentElement.scrollLeft);
document.documentElement.style.overflow="hidden";
window.scrollTo(sl,st);
setTimeout("window.scrollTo("+sl+","+st+");",10);
var _142=document.documentElement.clientWidth;
var _143=document.documentElement.clientHeight;
var _142,_143;
if(self.innerHeight){
_142=self.innerWidth;
_143=self.innerHeight;
}else{
if(document.documentElement&&document.documentElement.clientHeight){
_142=document.documentElement.clientWidth;
_143=document.documentElement.clientHeight;
}else{
if(document.body){
_142=document.body.clientWidth;
_143=document.body.clientHeight;
}
}
}
this.divs_content.style.width=this.width+"px";
this.divs_content.style.height=this.height+"px";
var _144=this.divs_content.offsetWidth;
var _145=this.divs_content.offsetHeight;
this.divs_transparentDiv.style.width=Math.ceil((_142-_144)/2)+"px";
this.divs_transparentDiv.style.height=_143+"px";
this.divs_transparentDiv.style.height="4000px";
this.divs_transparentDiv.style.width="4000px";
this.divs_content.style.left=Math.ceil((_142-_144)/2)+"px";
this.divs_content.style.top=(Math.ceil((_143-_145)/2)+_13f)+"px";
if(this.MSIE){
this.iframe.style.left=this.divs_content.style.left;
this.iframe.style.top=this.divs_content.style.top;
this.iframe.style.width=this.divs_content.style.width;
this.iframe.style.height=this.divs_content.style.height;
}
this.divs_shadow.style.left=(this.divs_content.style.left.replace("px","")/1+this.shadowOffset)+"px";
this.divs_shadow.style.top=(this.divs_content.style.top.replace("px","")/1+this.shadowOffset)+"px";
this.divs_shadow.style.height=_145+"px";
this.divs_shadow.style.width=_144+"px";
if(!this.shadowDivVisible){
this.divs_shadow.style.display="none";
}
},__insertContent:function(){
if(this.url){
ajax_loadContent("DHTMLSuite_modalBox_contentDiv",this.url);
}else{
this.divs_content.innerHTML=this.htmlOfModalMessage;
}
}};
var modalMsg=new DHTML_modalMessage();
if(Object.isUndefined(Prototype.Browser.IE6)){
Prototype.Browser.IE6=(navigator.appName.indexOf("Microsoft Internet Explorer")!=-1&&navigator.appVersion.indexOf("MSIE 6.0")!=-1&&!window.XMLHttpRequest);
}
if(!window.Modalbox){
var Modalbox={};
}
Modalbox.Methods={overrideAlert:false,focusableElements:[],currFocused:0,initialized:false,active:true,options:{title:"ModalBox Window",overlayClose:true,width:500,height:90,overlayOpacity:0.65,overlayDuration:0.25,slideDownDuration:0.5,slideUpDuration:0.5,resizeDuration:0.25,inactiveFade:true,transitions:true,loadingString:"Please wait. Loading...",closeString:"Close window",closeValue:"&times;",params:{},method:"get",autoFocusing:false,aspnet:false,resizeCSSID:""},_options:{},setOptions:function(_146){
Object.extend(this.options,_146||{});
},_init:function(_147){
Object.extend(this._options,this.options);
this.setOptions(_147);
this.MBoverlay=new Element("div",{id:"MB_overlay",style:"opacity: 0"});
this.MBwindowwrapper=new Element("div",{id:"MB_windowwrapper"}).update(this.MBwindow=new Element("div",{id:"MB_window",style:"display: none"}).update(this.MBframe=new Element("div",{id:"MB_frame"}).update(this.MBheader=new Element("div",{id:"MB_header"}).update(this.MBcaption=new Element("div",{id:"MB_caption"})))));
this.MBclose=new Element("a",{id:"MB_close",title:this.options.closeString,href:"#"}).update("<span>"+this.options.closeValue+"</span>");
this.MBheader.insert({"bottom":this.MBclose});
this.MBcontent=new Element("div",{id:"MB_content"}).update(this.MBloading=new Element("div",{id:"MB_loading"}).update(this.options.loadingString));
this.MBframe.insert({"bottom":this.MBcontent});
var _148=this.options.aspnet?$(document.body).down("form"):$(document.body);
_148.insert({"top":this.MBwindowwrapper});
_148.insert({"top":this.MBoverlay});
var _149=document.viewport.getScrollOffsets();
if(_149[1]>0){
$("MB_window").setStyle({top:_149[1]+"px"});
}
if(_149[0]>0){
$("MB_window").setStyle({left:_149[0]+"px"});
}
Event.observe(window,"scroll",function(){
_149=document.viewport.getScrollOffsets();
$("MB_window").setStyle({top:_149[1]+"px"});
$("MB_window").setStyle({left:_149[0]+"px"});
});
this.initScrollX=window.pageXOffset||document.body.scrollLeft||document.documentElement.scrollLeft;
this.initScrollY=window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop;
this.hideObserver=this._hide.bindAsEventListener(this);
this.kbdObserver=this._kbdHandler.bindAsEventListener(this);
this.resizeObserver=this._setWidthAndPosition.bindAsEventListener(this);
this._initObservers();
this.initialized=true;
},show:function(_14a,_14b){
if(!this.initialized){
this._init(_14b);
}
this._cleanUpContentIDs();
this.content=_14a;
this.setOptions(_14b);
if(this.options.title){
this.MBcaption.update(this.options.title);
}else{
this.MBheader.hide();
this.MBcaption.hide();
}
if(this.MBwindow.style.display=="none"){
this._appear();
this.event("onShow");
}else{
this._update();
this.event("onUpdate");
}
},hide:function(_14c){
if(this.initialized){
if(_14c&&!Object.isFunction(_14c.element)){
Object.extend(this.options,_14c);
}
this.event("beforeHide");
if(this.options.transitions){
Effect.SlideUp(this.MBwindow,{duration:this.options.slideUpDuration,transition:Effect.Transitions.sinoidal,afterFinish:this._deinit.bind(this)});
}else{
this.MBwindow.hide();
this._deinit();
}
Event.stopObserving(window,"scroll");
}else{
throw ("Modalbox is not initialized.");
}
},_hide:function(_14d){
_14d.stop();
if(_14d.element().id=="MB_overlay"&&!this.options.overlayClose){
return false;
}
this.hide();
},alert:function(_14e){
var html="<div class=\"MB_alert\"><p>"+_14e+"</p><input type=\"button\" onclick=\"Modalbox.hide()\" value=\"OK\" /></div>";
Modalbox.show(html,{title:"Alert: "+document.title,width:300});
},_appear:function(){
if(Prototype.Browser.IE6){
window.scrollTo(0,0);
this._prepareIEHtml("100%","hidden");
this._prepareIESelects("hidden");
}
this._setWidth();
if(this.options.transitions){
this.MBoverlay.setOpacity(0);
new Effect.Fade(this.MBoverlay,{from:0,to:this.options.overlayOpacity,duration:this.options.overlayDuration,afterFinish:(function(){
new Effect.SlideDown(this.MBwindow,{duration:this.options.slideDownDuration,transition:Effect.Transitions.sinoidal,afterFinish:this.loadContent.bind(this)});
}).bind(this)});
}else{
this.MBoverlay.setOpacity(this.options.overlayOpacity);
this.MBwindow.show();
this.loadContent();
}
Event.observe(window,"resize",this.resizeObserver);
},resize:function(_150,_151,_152){
var _153=$(this.MBoverlay).getWidth();
var _154=$(this.MBwindow).getHeight();
var _155=$(this.MBwindow).getWidth();
var _156=$(this.MBheader).getHeight();
var _157=$(this.MBcontent).getHeight();
var _158=((_154-_156+_151)<_157)?(_157+_156):(_154+_151);
var el=$(this.MBwindow);
var _15a=$(this.MBcontent);
var _15b=10;
_158+=_15b;
var _15c=(parseInt(el.getStyle("margin-top"),0)+parseInt(el.getStyle("margin-bottom"),0)+parseInt(el.getStyle("border-top-width"),0)+parseInt(el.getStyle("border-bottom-width"),0))+_15b;
var _15d=(parseInt(_15a.getStyle("padding-top"))+parseInt(_15a.getStyle("padding-bottom")));
if((_158+_15c+_15d)>document.viewport.getHeight()){
_158=document.viewport.getHeight()-_15c-_15b;
newcHeight=_158-_156-parseInt($(this.MBframe).getStyle("padding-bottom"),0)-parseInt($(this.MBcontent).getStyle("padding-bottom"),0);
$(this.MBcontent).setStyle({height:newcHeight+"px"});
}else{
if($(this.MBcontent).getStyle("height")){
$(this.MBcontent).setStyle({height:""});
}
}
var _15e=_155+_150;
var _15f={width:_15e+"px",height:_158+"px"};
this.options.width=_15e;
if(_152){
this.setOptions(_152);
}
if(this.options.transitions&&!Modalbox.animating){
Modalbox.animating=true;
new Effect.Morph(this.MBwindow,{style:_15f,duration:this.options.resizeDuration,beforeStart:function(fx){
fx.element.setStyle({overflow:"hidden"});
},afterFinish:(function(fx){
fx.element.setStyle({overflow:"visible"});
this.event("_afterResize");
this.event("afterResize");
Modalbox.animating=false;
}).bind(this)});
}else{
this.MBwindow.setStyle(_15f);
(function(){
this.event("_afterResize");
this.event("afterResize");
}).bind(this).defer();
}
},resizeToContent:function(_162){
if(typeof _162=="undefined"){
_162={};
}
var _163=$("MB_content").select("img");
var _164=_163.length;
if(_163[0]){
if(typeof _162.imagesloaded=="undefined"){
var _165=$A();
var _166=0;
_163.each(function(o,idx){
_165[idx]=new Image();
_165[idx].src=o.src;
_165[idx].onload=function(){
_166++;
if(_166==_164){
var _169=false;
_163.each(function(i){
if(i.height==0){
_169=true;
}
});
if(_169||Modalbox.animating){
Modalbox.resizeToContent();
}else{
_162.imagesloaded=true;
Modalbox.resizeToContent(_162);
}
}
};
});
}
}
var _16b=0,_16c=this.options.height-this.MBwindow.getHeight();
if(_162.resizeCSSID&&$(_162.resizeCSSID)){
_16b=$(_162.resizeCSSID).getWidth()-$(this.MBwindow).getWidth()+(parseInt($(this.MBcontent).getStyle("padding-left"),0)+parseInt($(this.MBcontent).getStyle("padding-right"),0))+15;
}
if(_16c!=0){
this.resize(_16b,_16c,_162);
}
},resizeToInclude:function(_16d,_16e){
var el=$(_16d);
var _170=el.getHeight()+parseInt(el.getStyle("margin-top"),0)+parseInt(el.getStyle("margin-bottom"),0)+parseInt(el.getStyle("border-top-width"),0)+parseInt(el.getStyle("border-bottom-width"),0);
if(_170>0){
this.resize(0,_170,_16e);
}
},_update:function(){
this.MBcontent.update($(this.MBloading).update(this.options.loadingString));
this.loadContent();
},loadContent:function(){
if(this.event("beforeLoad")!=false){
if(typeof this.content=="string"){
var _171=new RegExp(/<\/?[^>]+>/gi);
if(_171.test(this.content)){
this._processContent(this.content);
}else{
new Ajax.Request(this.content,{method:this.options.method.toLowerCase(),parameters:this.options.params,onComplete:(function(_172){
this._processContent(_172.responseText);
}).bind(this),onException:function(_173,_174){
Modalbox.hide();
throw ("Modalbox Loading Error: "+_174);
}});
}
}else{
if(typeof this.content=="object"){
this._insertContent(this.content);
}else{
this.hide();
throw ("Modalbox Parameters Error: Please specify correct URL or HTML element (plain HTML or object)");
}
}
}
},_processContent:function(_175){
var html=_175.stripScripts(),_177=_175.extractScripts();
this._insertContent(html,function(){
_177.map(function(_178){
return eval(_178.replace("<!--","").replace("// -->",""));
},window);
});
},_insertContent:function(_179,_17a){
this.MBcontent.hide().update();
if(typeof _179=="string"){
this.MBcontent.insert(new Element("div",{style:"display: none"}).update(_179)).down().show();
}else{
if(typeof _179=="object"){
var _17b=_179.cloneNode(true);
if(_179.id){
_179.id="MB_"+_179.id;
}
$(_179).select("*[id]").each(function(el){
el.id="MB_"+el.id;
});
this.MBcontent.insert(_17b).down("div").show();
if(Prototype.Browser.IE6){
this._prepareIESelects("","#MB_content ");
}
}
}
if(this.options.height==this._options.height){
this.resize((this.options.width-$(this.MBwindow).getWidth()),this.MBcontent.getHeight()-$(this.MBwindow).getHeight()+this.MBheader.getHeight(),{afterResize:(function(){
this._putContent.bind(this,_17a).defer();
}).bind(this)});
}else{
this._setWidth();
this.MBcontent.setStyle({overflow:"auto",height:this.MBwindow.getHeight()-this.MBheader.getHeight()-13+"px"});
this._putContent.bind(this,_17a).defer();
}
},_putContent:function(_17d){
this.MBcontent.show();
this._findFocusableElements();
this._setFocus();
if(Object.isFunction(_17d)){
_17d();
}
this.event("afterLoad");
},activate:function(_17e){
this.setOptions(_17e);
this.active=true;
if(this.options.overlayClose){
this.MBoverlay.observe("click",this.hideObserver);
}
this.MBclose.observe("click",this.hideObserver).show();
if(this.options.transitions&&this.options.inactiveFade){
new Effect.Appear(this.MBwindow,{duration:this.options.slideUpDuration});
}
},deactivate:function(_17f){
this.setOptions(_17f);
this.active=false;
if(this.options.overlayClose){
this.MBoverlay.stopObserving("click",this.hideObserver);
}
this.MBclose.stopObserving("click",this.hideObserver).hide();
if(this.options.transitions&&this.options.inactiveFade){
new Effect.Fade(this.MBwindow,{duration:this.options.slideUpDuration,to:0.75});
}
},_initObservers:function(){
this.MBclose.observe("click",this.hideObserver);
if(this.options.overlayClose){
this.MBoverlay.observe("click",this.hideObserver);
}
var _180=(Prototype.Browser.Gecko||Prototype.Browser.Opera)?"keypress":"keydown";
Event.observe(document,_180,this.kbdObserver);
},_removeObservers:function(){
this.MBclose.stopObserving("click",this.hideObserver);
if(this.options.overlayClose){
this.MBoverlay.stopObserving("click",this.hideObserver);
}
var _181=(Prototype.Browser.Gecko||Prototype.Browser.Opera)?"keypress":"keydown";
Event.stopObserving(document,_181,this.kbdObserver);
},_setFocus:function(){
if(this.options.autoFocusing){
if(this.focusableElements.length){
var _182=this.focusableElements.find(function(el){
return el.tabIndex==1;
})||this.focusableElements.first();
this.currFocused=this.focusableElements.toArray().indexOf(_182);
_182.focus();
}else{
if(this.MBclose.visible()){
this.MBclose.focus();
}
}
}
},_findFocusableElements:function(){
this.focusableElements=this.MBcontent.select("input:not([type=hidden]):enabled, select, textarea, button, a[href]");
},_kbdHandler:function(_184){
var node=_184.element();
switch(_184.keyCode){
case Event.KEY_TAB:
_184.stop();
this._findFocusableElements();
if(!this.focusableElements.length){
return false;
}
if(node!=this.focusableElements[this.currFocused]){
this.currFocused=this.focusableElements.indexOf(node);
}
if(!_184.shiftKey){
if(this.currFocused>=this.focusableElements.length-1){
this.currFocused=0;
}else{
this.currFocused++;
}
}else{
if(this.currFocused<=0){
this.currFocused=this.focusableElements.length-1;
}else{
this.currFocused--;
}
}
this.focusableElements[this.currFocused].focus();
break;
case Event.KEY_ESC:
if(this.active){
this._hide(_184);
}
break;
case 32:
this._preventScroll(_184);
break;
case 0:
if(_184.which==32){
this._preventScroll(_184);
}
break;
case Event.KEY_UP:
case Event.KEY_DOWN:
case Event.KEY_PAGEDOWN:
case Event.KEY_PAGEUP:
case Event.KEY_HOME:
case Event.KEY_END:
var _186=node.tagName.toLowerCase();
if(Prototype.Browser.WebKit&&!["textarea","select"].include(_186)){
_184.stop();
}else{
if((_186=="input"&&["submit","button"].include(node.type))||(_186=="a")){
_184.stop();
}
}
break;
}
},_preventScroll:function(_187){
if(!["input","textarea","select","button"].include(_187.element().tagName.toLowerCase())){
_187.stop();
}
},_deinit:function(){
this._removeObservers();
Event.stopObserving(window,"resize",this.resizeObserver);
if(this.options.transitions){
Effect.toggle(this.MBoverlay,"appear",{duration:this.options.overlayDuration,afterFinish:this._removeElements.bind(this)});
}else{
this.MBoverlay.hide();
this._removeElements();
}
this.MBcontent.setStyle({overflow:"",height:""});
},_cleanUpContentIDs:function(){
if(typeof this.content=="object"){
if(this.content.id&&this.content.id.match(/MB_/)){
this.content.id=this.content.id.replace(/MB_/,"");
}
this.content.select("*[id]").each(function(el){
el.id=el.id.replace(/MB_/,"");
});
}
},_removeElements:function(){
if(Prototype.Browser.Opera){
window.scrollBy(0,0);
}
this.MBoverlay.remove();
$(this.MBwindowwrapper).remove();
if(Prototype.Browser.IE6){
this._prepareIEHtml("","");
this._prepareIESelects("");
window.scrollTo(this.initScrollX,this.initScrollY);
}
this._cleanUpContentIDs();
this.initialized=false;
this.event("afterHide");
this.setOptions(this._options);
},_setWidth:function(){
this.MBwindow.setStyle({width:this.options.width+"px",height:this.options.height+"px"});
},_setWidthAndPosition:function(){
this.MBwindow.setStyle({width:this.options.width+"px"});
},_prepareIEHtml:function(_189,_18a){
$$("html, body").invoke("setStyle",{width:_189,height:_189,overflow:_18a});
},_prepareIESelects:function(_18b,_18c){
$$((_18c||"")+"select").invoke("setStyle",{"visibility":_18b});
},event:function(_18d){
var r=true;
if(this.options[_18d]){
var _18f=this.options[_18d]();
this.options[_18d]=null;
if(!Object.isUndefined(_18f)){
r=_18f;
}
}
return r;
}};
Object.extend(Modalbox,Modalbox.Methods);
if(Modalbox.overrideAlert){
window.alert=Modalbox.alert;
}

