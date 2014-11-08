function sack(_1){
this.AjaxFailedAlert="Your browser does not support the enhanced functionality of this website, and therefore you will have an experience that differs from the intended one.\n";
this.requestFile=_1;
this.method="POST";
this.URLString="";
this.encodeURIString=true;
this.execute=false;
this.onLoading=function(){
};
this.onLoaded=function(){
};
this.onInteractive=function(){
};
this.onCompletion=function(){
};
this.createAJAX=function(){
try{
this.xmlhttp=new ActiveXObject("Msxml2.XMLHTTP");
}
catch(e){
try{
this.xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
catch(err){
this.xmlhttp=null;
}
}
if(!this.xmlhttp&&typeof XMLHttpRequest!="undefined"){
this.xmlhttp=new XMLHttpRequest();
}
if(!this.xmlhttp){
this.failed=true;
}
};
this.setVar=function(_2,_3){
if(this.URLString.length<3){
this.URLString=_2+"="+_3;
}else{
this.URLString+="&"+_2+"="+_3;
}
};
this.encVar=function(_4,_5){
var _6=encodeURIComponent(_4)+"="+encodeURIComponent(_5);
return _6;
};
this.encodeURLString=function(_7){
varArray=_7.split("&");
for(i=0;i<varArray.length;i++){
urlVars=varArray[i].split("=");
if(urlVars[0].indexOf("amp;")!=-1){
urlVars[0]=urlVars[0].substring(4);
}
varArray[i]=this.encVar(urlVars[0],urlVars[1]);
}
return varArray.join("&");
};
this.runResponse=function(){
eval(this.response);
};
this.runAJAX=function(_8){
this.responseStatus=new Array(2);
if(this.failed&&this.AjaxFailedAlert){
alert(this.AjaxFailedAlert);
}else{
if(_8){
if(this.URLString.length){
this.URLString=this.URLString+"&"+_8;
}else{
this.URLString=_8;
}
}
if(this.encodeURIString){
var _9=new Date().getTime();
this.URLString=this.encodeURLString(this.URLString);
this.setVar("rndval",_9);
}
if(this.element){
this.elementObj=document.getElementById(this.element);
}
if(this.xmlhttp){
var _a=this;
if(this.method=="GET"){
var _b=this.requestFile+"?"+this.URLString;
this.xmlhttp.open(this.method,_b,true);
}else{
this.xmlhttp.open(this.method,this.requestFile,true);
}
if(this.method=="POST"){
try{
this.xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
}
catch(e){
}
}
this.xmlhttp.send(this.URLString);
this.xmlhttp.onreadystatechange=function(){
switch(_a.xmlhttp.readyState){
case 1:
_a.onLoading();
break;
case 2:
_a.onLoaded();
break;
case 3:
_a.onInteractive();
break;
case 4:
_a.response=_a.xmlhttp.responseText;
_a.responseXML=_a.xmlhttp.responseXML;
_a.responseStatus[0]=_a.xmlhttp.status;
_a.responseStatus[1]=_a.xmlhttp.statusText;
_a.onCompletion();
if(_a.execute){
_a.runResponse();
}
if(_a.elementObj){
var _c=_a.elementObj.nodeName;
_c.toLowerCase();
if(_c=="input"||_c=="select"||_c=="option"||_c=="textarea"){
_a.elementObj.value=_a.response;
}else{
_a.elementObj.innerHTML=_a.response;
}
}
_a.URLString="";
break;
}
};
}
}
};
this.createAJAX();
};
var numberOfColumns=3;
var columnParentBoxId="floatingBoxParentContainer";
var src_rightImage="titan.php?target=loadFile&file=extra/dragable-boxes/images/arrow_right.gif";
var src_downImage="titan.php?target=loadFile&file=extra/dragable-boxes/images/arrow_down.gif";
var src_refreshSource="titan.php?target=loadFile&file=extra/dragable-boxes/images/refresh.gif";
var src_smallRightArrow="titan.php?target=loadFile&file=extra/dragable-boxes/images/small_arrow.gif";
var transparencyWhenDragging=true;
var txt_editLink="Editar";
var txt_editLink_stop="Fechar Edição";
var autoScrollSpeed=4;
var dragObjectBorderWidth=1;
var useCookiesToRememberRSSSources=false;
var nameOfCookie="dragable_rss_boxes";
var columnParentBox;
var dragableBoxesObj;
var ajaxObjects=new Array();
var boxIndex=0;
var autoScrollActive=false;
var dragableBoxesArray=new Array();
var dragDropCounter=-1;
var dragObject=false;
var dragObjectNextSibling=false;
var dragObjectParent=false;
var destinationObj=false;
var mouse_x;
var mouse_y;
var el_x;
var el_y;
var rectangleDiv;
var okToMove=true;
var documentHeight=false;
var documentScrollHeight=false;
var dragableAreaWidth=false;
var opera=navigator.userAgent.toLowerCase().indexOf("opera")>=0?true:false;
var cookieCounter=0;
var cookieRSSSources=new Array();
var staticObjectArray=new Array();
function Get_Cookie(_d){
var _e=document.cookie.indexOf(_d+"=");
var _f=_e+_d.length+1;
if((!_e)&&(_d!=document.cookie.substring(0,_d.length))){
return null;
}
if(_e==-1){
return null;
}
var end=document.cookie.indexOf(";",_f);
if(end==-1){
end=document.cookie.length;
}
return unescape(document.cookie.substring(_f,end));
};
function Set_Cookie(_11,_12,_13,_14,_15,_16){
_13=_13*60*60*24*1000;
var _17=new Date();
var _18=new Date(_17.getTime()+(_13));
var _19=_11+"="+escape(_12)+((_13)?";expires="+_18.toGMTString():"")+((_14)?";path="+_14:"")+((_15)?";domain="+_15:"")+((_16)?";secure":"");
document.cookie=_19;
};
function autoScroll(_1a,_1b){
if(document.documentElement.scrollHeight>documentScrollHeight&&_1a>0){
return;
}
if(opera){
return;
}
window.scrollBy(0,_1a);
if(!dragObject){
return;
}
if(_1a<0){
if(document.documentElement.scrollTop>0){
dragObject.style.top=(el_y-mouse_y+_1b+document.documentElement.scrollTop)+"px";
}else{
autoScrollActive=false;
}
}else{
if(_1b>(documentHeight-50)){
dragObject.style.top=(el_y-mouse_y+_1b+document.documentElement.scrollTop)+"px";
}else{
autoScrollActive=false;
}
}
if(autoScrollActive){
setTimeout("autoScroll("+_1a+","+_1b+")",5);
}
};
function initDragDropBox(e){
dragDropCounter=1;
if(document.all){
e=event;
}
if(e.target){
source=e.target;
}else{
if(e.srcElement){
source=e.srcElement;
}
}
if(source.nodeType==3){
source=source.parentNode;
}
if(source.tagName.toLowerCase()=="img"||source.tagName.toLowerCase()=="a"||source.tagName.toLowerCase()=="input"||source.tagName.toLowerCase()=="td"||source.tagName.toLowerCase()=="tr"||source.tagName.toLowerCase()=="table"){
return;
}
mouse_x=e.clientX;
mouse_y=e.clientY;
var _1d=this.id.replace(/[^0-9]/g,"");
el_x=getLeftPos(this.parentNode.parentNode)/1;
el_y=getTopPos(this.parentNode.parentNode)/1-document.documentElement.scrollTop;
dragObject=this.parentNode.parentNode;
documentScrollHeight=document.documentElement.scrollHeight+100+dragObject.offsetHeight;
if(dragObject.nextSibling){
dragObjectNextSibling=dragObject.nextSibling;
if(dragObjectNextSibling.tagName!="DIV"){
dragObjectNextSibling=dragObjectNextSibling.nextSibling;
}
}
dragObjectParent=dragableBoxesArray[_1d]["parentObj"];
dragDropCounter=0;
initDragDropBoxTimer();
return false;
};
function initDragDropBoxTimer(){
if(dragDropCounter>=0&&dragDropCounter<10){
dragDropCounter++;
setTimeout("initDragDropBoxTimer()",10);
return;
}
if(dragDropCounter==10){
mouseoutBoxHeader(false,dragObject);
}
};
function moveDragableElement(e){
if(document.all){
e=event;
}
if(dragDropCounter<10){
return;
}
if(document.all&&e.button!=1&&!opera){
stop_dragDropElement();
return;
}
if(document.body!=dragObject.parentNode){
dragObject.style.width=(dragObject.offsetWidth-(dragObjectBorderWidth*2))+"px";
dragObject.style.position="absolute";
dragObject.style.textAlign="left";
if(transparencyWhenDragging){
dragObject.style.filter="alpha(opacity=70)";
dragObject.style.opacity="0.7";
}
dragObject.parentNode.insertBefore(rectangleDiv,dragObject);
rectangleDiv.style.display="block";
document.body.appendChild(dragObject);
rectangleDiv.style.width=dragObject.style.width;
rectangleDiv.style.height=(dragObject.offsetHeight-(dragObjectBorderWidth*2))+"px";
}
if(e.clientY<50||e.clientY>(documentHeight-50)){
if(e.clientY<50&&!autoScrollActive){
autoScrollActive=true;
autoScroll((autoScrollSpeed*-1),e.clientY);
}
if(e.clientY>(documentHeight-50)&&document.documentElement.scrollHeight<=documentScrollHeight&&!autoScrollActive){
autoScrollActive=true;
autoScroll(autoScrollSpeed,e.clientY);
}
}else{
autoScrollActive=false;
}
var _1f=e.clientX;
var _20=e.clientY+document.documentElement.scrollTop;
dragObject.style.left=(e.clientX-mouse_x+el_x)+"px";
dragObject.style.top=(el_y-mouse_y+e.clientY+document.documentElement.scrollTop)+"px";
if(!okToMove){
return;
}
okToMove=false;
destinationObj=false;
rectangleDiv.style.display="none";
var _21=false;
var _22=new Array();
if(!_21){
for(var no=1;no<dragableBoxesArray.length;no++){
if(dragableBoxesArray[no]["obj"]==dragObject){
continue;
}
_22[dragableBoxesArray[no]["obj"].parentNode.id]=true;
if(!_21){
var _24=getLeftPos(dragableBoxesArray[no]["obj"]);
var _25=getTopPos(dragableBoxesArray[no]["obj"]);
if(_1f>_24&&_1f<(_24+dragableBoxesArray[no]["obj"].offsetWidth)&&_20>(_25-20)&&_20<(_25+(dragableBoxesArray[no]["obj"].offsetHeight/2))){
destinationObj=dragableBoxesArray[no]["obj"];
destinationObj.parentNode.insertBefore(rectangleDiv,dragableBoxesArray[no]["obj"]);
rectangleDiv.style.display="block";
_21=true;
break;
}
if(_1f>_24&&_1f<(_24+dragableBoxesArray[no]["obj"].offsetWidth)&&_20>=(_25+(dragableBoxesArray[no]["obj"].offsetHeight/2))&&_20<(_25+dragableBoxesArray[no]["obj"].offsetHeight)){
_21=true;
if(dragableBoxesArray[no]["obj"].nextSibling){
destinationObj=dragableBoxesArray[no]["obj"].nextSibling;
if(!destinationObj.tagName){
destinationObj=destinationObj.nextSibling;
}
if(destinationObj!=rectangleDiv){
destinationObj.parentNode.insertBefore(rectangleDiv,destinationObj);
}
}else{
destinationObj=dragableBoxesArray[no]["obj"].parentNode;
dragableBoxesArray[no]["obj"].parentNode.appendChild(rectangleDiv);
}
rectangleDiv.style.display="block";
break;
}
if(!dragableBoxesArray[no]["obj"].nextSibling&&_1f>_24&&_1f<(_24+dragableBoxesArray[no]["obj"].offsetWidth)&&_20>_20>(_25+(dragableBoxesArray[no]["obj"].offsetHeight))){
destinationObj=dragableBoxesArray[no]["obj"].parentNode;
dragableBoxesArray[no]["obj"].parentNode.appendChild(rectangleDiv);
rectangleDiv.style.display="block";
_21=true;
}
}
}
}
if(!_21){
for(var no=1;no<=numberOfColumns;no++){
if(!_21){
var obj=document.getElementById("dragableBoxesColumn"+no);
var _27=getLeftPos(obj)/1;
var _28=obj.offsetWidth;
if(_1f>_27&&_1f<(_27+_28)){
destinationObj=obj;
obj.appendChild(rectangleDiv);
rectangleDiv.style.display="block";
_21=true;
}
}
}
}
setTimeout("okToMove=true",5);
};
function stop_dragDropElement(){
if(dragDropCounter<10){
dragDropCounter=-1;
return;
}
dragDropCounter=-1;
if(transparencyWhenDragging){
dragObject.style.filter=null;
dragObject.style.opacity=null;
}
dragObject.style.position="static";
dragObject.style.width=null;
var _29=dragObject.id.replace(/[^0-9]/g,"");
if(destinationObj&&destinationObj.id!=dragObject.id){
if(destinationObj.id.indexOf("dragableBoxesColumn")>=0){
destinationObj.appendChild(dragObject);
dragableBoxesArray[_29]["parentObj"]=destinationObj;
}else{
destinationObj.parentNode.insertBefore(dragObject,destinationObj);
dragableBoxesArray[_29]["parentObj"]=destinationObj.parentNode;
}
}else{
if(dragObjectNextSibling){
dragObjectParent.insertBefore(dragObject,dragObjectNextSibling);
}else{
dragObjectParent.appendChild(dragObject);
}
}
autoScrollActive=false;
rectangleDiv.style.display="none";
dragObject=false;
dragObjectNextSibling=false;
destinationObj=false;
if(useCookiesToRememberRSSSources){
setTimeout("saveCookies()",100);
}
documentHeight=document.documentElement.clientHeight;
var _2a=0;
for(var no=1;no<=numberOfColumns;no++){
var _2c=document.getElementById("dragableBoxesColumn"+no);
var _2d=_2c.getElementsByTagName("DIV");
if(_2d.length==0){
continue;
}
var _2e=_2d[0];
var _2f=new Array();
while(_2e){
var _30=_2e.id.replace(/[^0-9]/g,"");
if(_2e.id!="rectangleDiv"){
_2f[_2f.length]=_30;
}
_2e=_2e.nextSibling;
}
var _31=no;
for(var no2=_2f.length-1;no2>=0;no2--){
if(_2f[no2]==_29){
_2a=_31;
}
}
}
ajax.setColumn(_2a,dragableBoxesArray[_29]["uniqueIdentifier"]);
};
function saveCookies(){
cookieCounter=0;
var _33=new Array();
for(var no=1;no<=numberOfColumns;no++){
var _35=document.getElementById("dragableBoxesColumn"+no);
var _36=_35.getElementsByTagName("DIV");
if(_36.length==0){
continue;
}
var _37=_36[0];
var _38=new Array();
while(_37){
var _39=_37.id.replace(/[^0-9]/g,"");
if(_37.id!="rectangleDiv"){
_38[_38.length]=_39;
}
_37=_37.nextSibling;
}
var _3a=no;
for(var no2=_38.length-1;no2>=0;no2--){
var _39=_38[no2];
var url=dragableBoxesArray[_39]["rssUrl"];
var _3d=dragableBoxesArray[_39]["heightOfBox"];
var _3e=dragableBoxesArray[_39]["maxRssItems"];
var _3f=dragableBoxesArray[_39]["minutesBeforeReload"];
var _40=dragableBoxesArray[_39]["uniqueIdentifier"];
var _41=dragableBoxesArray[_39]["boxState"];
if(!_33[url]){
_33[url]=true;
Set_Cookie(nameOfCookie+cookieCounter,url+"#;#"+_3a+"#;#"+_3e+"#;#"+_3d+"#;#"+_3f+"#;#"+_40+"#;#"+_41,60000);
cookieRSSSources[url]=cookieCounter;
cookieCounter++;
}else{
Set_Cookie(nameOfCookie+cookieCounter,""+"#;#"+_3a+"#;#"+""+"#;#"+_3d+"#;#"+""+"#;#"+_40,60000);
cookieCounter++;
}
}
}
};
function getTopPos(_42){
var _43=_42.offsetTop;
while((_42=_42.offsetParent)!=null){
if(_42.tagName!="HTML"){
_43+=_42.offsetTop;
}
}
return _43;
};
function getLeftPos(_44){
var _45=_44.offsetLeft;
while((_44=_44.offsetParent)!=null){
if(_44.tagName!="HTML"){
_45+=_44.offsetLeft;
}
}
return _45;
};
function createColumns(){
if(!columnParentBoxId){
alert("No parent box defined for your columns");
return;
}
columnParentBox=document.getElementById(columnParentBoxId);
var _46=Math.floor(100/numberOfColumns);
var _47=0;
for(var no=0;no<numberOfColumns;no++){
var div=document.createElement("DIV");
if(no==(numberOfColumns-1)){
_46=99-_47;
}
_47=_47+_46;
div.style.cssText="float:left;width:"+_46+"%;padding:0px;margin:0px;";
div.style.height="100%";
div.style.styleFloat="left";
div.style.width=_46+"%";
div.style.padding="0px";
div.style.margin="0px";
div.id="dragableBoxesColumn"+(no+1);
columnParentBox.appendChild(div);
var _4a=document.createElement("HR");
_4a.style.clear="both";
_4a.style.visibility="hidden";
div.appendChild(_4a);
}
var _4b=document.createElement("DIV");
columnParentBox.appendChild(_4b);
_4b.style.clear="both";
};
function mouseoverBoxHeader(){
if(dragDropCounter==10){
return;
}
var id=this.id.replace(/[^0-9]/g,"");
document.getElementById("dragableBoxExpand"+id).style.visibility="visible";
document.getElementById("dragableBoxRefreshSource"+id).style.visibility="visible";
document.getElementById("dragableBoxCloseLink"+id).style.visibility="visible";
if(document.getElementById("dragableBoxEditLink"+id)){
document.getElementById("dragableBoxEditLink"+id).style.visibility="visible";
}
};
function mouseoutBoxHeader(e,obj){
if(!obj){
obj=this;
}
var id=obj.id.replace(/[^0-9]/g,"");
document.getElementById("dragableBoxExpand"+id).style.visibility="hidden";
document.getElementById("dragableBoxRefreshSource"+id).style.visibility="hidden";
document.getElementById("dragableBoxCloseLink"+id).style.visibility="hidden";
if(document.getElementById("dragableBoxEditLink"+id)){
document.getElementById("dragableBoxEditLink"+id).style.visibility="hidden";
}
};
function refreshRSS(){
reloadRSSData(this.id.replace(/[^0-9]/g,""));
setTimeout("dragDropCounter=-5",5);
};
function showHideBoxContent(e,_51){
if(document.all){
e=event;
}
if(!_51){
_51=this;
}
var _52=_51.id.replace(/[^0-9]/g,"");
var obj=document.getElementById("dragableBoxContent"+_52);
obj.style.display=_51.src.indexOf(src_rightImage)>=0?"none":"block";
_51.src=_51.src.indexOf(src_rightImage)>=0?src_downImage:src_rightImage;
dragableBoxesArray[_52]["boxState"]=obj.style.display=="block"?1:0;
saveCookies();
setTimeout("dragDropCounter=-5",5);
};
function mouseover_CloseButton(){
this.className="closeButton_over";
setTimeout("dragDropCounter=-5",5);
};
function highlightCloseButton(){
this.className="closeButton_over";
};
function mouseout_CloseButton(){
this.className="closeButton";
};
function closeDragableBox(e,_55){
if(!_55){
_55=this;
}
var _56=_55.id.replace(/[^0-9]/g,"");
if(ajax.deleteFeed(dragableBoxesArray[_56]["uniqueIdentifier"])){
document.getElementById("dragableBox"+_56).style.display="none";
}
};
function editRSSContent(){
var _57=this.id.replace(/[^0-9]/g,"");
var obj=document.getElementById("dragableBoxEdit"+_57);
if(obj.style.display=="none"){
obj.style.display="block";
this.innerHTML=txt_editLink_stop;
document.getElementById("dragableBoxHeader"+_57).style.height="135px";
}else{
obj.style.display="none";
this.innerHTML=txt_editLink;
document.getElementById("dragableBoxHeader"+_57).style.height="20px";
}
setTimeout("dragDropCounter=-5",5);
};
function showStatusBarMessage(_59,_5a){
document.getElementById("dragableBoxStatusBar"+_59).innerHTML=_5a;
};
function addBoxHeader(_5b,_5c,_5d){
var div=document.createElement("DIV");
div.className="dragableBoxHeader";
div.id="dragableBoxHeader"+boxIndex;
div.onmouseover=mouseoverBoxHeader;
div.onmouseout=mouseoutBoxHeader;
if(!_5d){
div.onmousedown=initDragDropBox;
div.style.cursor="move";
}
var _5f=document.createElement("IMG");
_5f.id="dragableBoxExpand"+boxIndex;
_5f.src=src_rightImage;
_5f.style.visibility="hidden";
_5f.style.cursor="pointer";
_5f.onmousedown=showHideBoxContent;
div.appendChild(_5f);
var _60=document.createElement("SPAN");
_60.id="dragableBoxHeader_txt"+boxIndex;
div.appendChild(_60);
_5b.appendChild(div);
var _61=document.createElement("A");
_61.style.cssText="float:right";
_61.style.styleFloat="right";
_61.id="dragableBoxCloseLink"+boxIndex;
_61.innerHTML="x";
_61.className="closeButton";
_61.onmouseover=mouseover_CloseButton;
_61.onmouseout=mouseout_CloseButton;
_61.style.cursor="pointer";
_61.style.visibility="hidden";
_61.onmousedown=closeDragableBox;
div.appendChild(_61);
var _5f=document.createElement("IMG");
_5f.src=src_refreshSource;
_5f.id="dragableBoxRefreshSource"+boxIndex;
_5f.style.cssText="float:right";
_5f.style.styleFloat="right";
_5f.style.visibility="hidden";
_5f.onclick=refreshRSS;
_5f.style.cursor="pointer";
if(!_5c){
_5f.style.display="none";
}
div.appendChild(_5f);
};
function saveFeed(_62){
var _63=dragableBoxesArray[_62]["heightOfBox"]=document.getElementById("heightOfBox["+_62+"]").value;
var _64=dragableBoxesArray[_62]["intervalObj"];
if(_64){
clearInterval(_64);
}
if(_63&&_63>40){
var _65=document.getElementById("dragableBoxContent"+_62);
_65.style.height=_63+"px";
_65.setAttribute("heightOfBox",_63);
_65.heightOfBox=_63;
if(document.all){
_65.style.overflowY="auto";
}else{
_65.style.overflow="-moz-scrollbars-vertical;";
}
if(opera){
_65.style.overflow="auto";
}
}
dragableBoxesArray[_62]["rssUrl"]=document.getElementById("rssUrl["+_62+"]").value;
dragableBoxesArray[_62]["heightOfBox"]=_63;
dragableBoxesArray[_62]["maxRssItems"]=document.getElementById("maxRssItems["+_62+"]").value;
dragableBoxesArray[_62]["heightOfBox"]=document.getElementById("heightOfBox["+_62+"]").value;
dragableBoxesArray[_62]["minutesBeforeReload"]=document.getElementById("minutesBeforeReload["+_62+"]").value;
if(dragableBoxesArray[_62]["minutesBeforeReload"]&&dragableBoxesArray[_62]["minutesBeforeReload"]>5){
var _66=setInterval("reloadRSSData("+_62+")",(dragableBoxesArray[_62]["minutesBeforeReload"]*1000*60));
dragableBoxesArray[_62]["intervalObj"]=_66;
}
if(ajax.saveFeed(dragableBoxesArray[_62]["rssUrl"],dragableBoxesArray[_62]["heightOfBox"],dragableBoxesArray[_62]["maxRssItems"],dragableBoxesArray[_62]["minutesBeforeReload"],dragableBoxesArray[_62]["uniqueIdentifier"])){
reloadRSSData(_62);
}
if(useCookiesToRememberRSSSources){
setTimeout("saveCookies()",100);
}
};
function addRSSEditContent(_67){
var _68=document.createElement("A");
_68.href="#";
_68.onclick=cancelEvent;
_68.style.cssText="float:right";
_68.style.styleFloat="right";
_68.id="dragableBoxEditLink"+boxIndex;
_68.innerHTML=txt_editLink;
_68.className="dragableBoxEditLink";
_68.style.cursor="pointer";
_68.style.visibility="hidden";
_68.onmousedown=editRSSContent;
_67.appendChild(_68);
var _69=document.createElement("DIV");
_69.style.clear="both";
_69.id="dragableBoxEdit"+boxIndex;
_69.style.display="none";
var _6a="<form><table cellpadding=\"1\" cellspacing=\"1\"><tr><td>Feed RSS:</td><td><input type=\"text\" id=\"rssUrl["+boxIndex+"]\" value=\""+dragableBoxesArray[boxIndex]["rssUrl"]+"\" size=\"25\" maxlength=\"255\"></td></tr>"+"<tr><td>Quantidade:</td><td width=\"30\"><input type=\"text\" id=\"maxRssItems["+boxIndex+"]\" onblur=\"this.value = this.value.replace(/[^0-9]/g,'');if(!this.value)this.value="+dragableBoxesArray[boxIndex]["maxRssItems"]+"\" value=\""+dragableBoxesArray[boxIndex]["maxRssItems"]+"\" size=\"2\" maxlength=\"2\"> itens</td></tr><tr><td>Altura (0 = auto):</td><td><input type=\"text\" id=\"heightOfBox["+boxIndex+"]\" onblur=\"this.value = this.value.replace(/[^0-9]/g,'');if(!this.value)this.value="+dragableBoxesArray[boxIndex]["heightOfBox"]+"\" value=\""+dragableBoxesArray[boxIndex]["heightOfBox"]+"\" size=\"2\" maxlength=\"3\"> pixels</td></tr><tr>"+"<tr><td>Atualizar a cada:</td><td width=\"30\"><input type=\"text\" id=\"minutesBeforeReload["+boxIndex+"]\" onblur=\"this.value = this.value.replace(/[^0-9]/g,'');if(!this.value || this.value/1<5)this.value="+dragableBoxesArray[boxIndex]["minutesBeforeReload"]+"\" value=\""+dragableBoxesArray[boxIndex]["minutesBeforeReload"]+"\" size=\"2\" maxlength=\"3\">&nbsp;minutos</td></tr>"+"<tr><td><input type=\"button\" onclick=\"saveFeed("+boxIndex+")\" value=\"Save\"></td></tr></table></form>";
_69.innerHTML=_6a;
_67.appendChild(_69);
};
function addBoxContentContainer(_6b,_6c){
var div=document.createElement("DIV");
div.className="dragableBoxContent";
if(opera){
div.style.clear="none";
}
div.id="dragableBoxContent"+boxIndex;
_6b.appendChild(div);
if(_6c&&_6c/1>40){
div.style.height=_6c+"px";
div.setAttribute("heightOfBox",_6c);
div.heightOfBox=_6c;
if(document.all){
div.style.overflowY="auto";
}else{
div.style.overflow="-moz-scrollbars-vertical;";
}
if(opera){
div.style.overflow="auto";
}
}
};
function addBoxStatusBar(_6e){
var div=document.createElement("DIV");
div.className="dragableBoxStatusBar";
div.id="dragableBoxStatusBar"+boxIndex;
_6e.appendChild(div);
};
function createABox(_70,_71,_72,_73,_74){
boxIndex++;
var _75=document.createElement("DIV");
_75.className="dragableBox";
_75.id="dragableBox"+boxIndex;
var div=document.createElement("DIV");
div.className="dragableBoxInner";
_75.appendChild(div);
addBoxHeader(div,_72,_74);
addBoxContentContainer(div,_71);
addBoxStatusBar(div);
var obj=document.getElementById("dragableBoxesColumn"+_70);
var _78=obj.getElementsByTagName("DIV");
if(_78.length>0){
obj.insertBefore(_75,_78[0]);
}else{
obj.appendChild(_75);
}
dragableBoxesArray[boxIndex]=new Array();
dragableBoxesArray[boxIndex]["obj"]=_75;
dragableBoxesArray[boxIndex]["parentObj"]=_75.parentNode;
dragableBoxesArray[boxIndex]["uniqueIdentifier"]=_73;
dragableBoxesArray[boxIndex]["heightOfBox"]=_71;
dragableBoxesArray[boxIndex]["boxState"]=1;
staticObjectArray[_73]=boxIndex;
return boxIndex;
};
function showRSSData(_79,_7a){
var _7b=ajaxObjects[_79].response;
tokens=_7b.split(/\n\n/g);
var _7c=tokens[0].split(/\n/g);
if(_7c[0]=="0"){
_7c[1]="";
_7c[0]="Invalid source";
closeDragableBox(false,document.getElementById("dragableBoxHeader_txt"+_7a));
return;
}
document.getElementById("dragableBoxHeader_txt"+_7a).innerHTML="<span>"+_7c[0]+"&nbsp;</span><span class=\"rssNumberOfItems\">("+_7c[1]+")</span>";
var _7d="<table cellpadding=\"1\" cellspacing=\"0\">";
for(var no=1;no<tokens.length;no++){
var _7f=tokens[no].split(/##/g);
_7d=_7d+"<tr><td><img src=\""+src_smallRightArrow+"\"><td><p class=\"boxItemHeader\"><a class=\"boxItemHeader\" href=\""+_7f[3]+"\" onclick=\"var w = window.open(this.href);return false\">"+_7f[0]+"</a></p></td></tr>";
}
_7d=_7d+"</table>";
document.getElementById("dragableBoxContent"+_7a).innerHTML=_7d;
showStatusBarMessage(_7a,"");
ajaxObjects[_79]=false;
};
function createHelpObjects(){
rectangleDiv=document.createElement("DIV");
rectangleDiv.id="rectangleDiv";
rectangleDiv.style.display="none";
document.body.appendChild(rectangleDiv);
};
function cancelSelectionEvent(e){
if(document.all){
e=event;
}
if(e.target){
source=e.target;
}else{
if(e.srcElement){
source=e.srcElement;
}
}
if(source.nodeType==3){
source=source.parentNode;
}
if(source.tagName.toLowerCase()=="input"){
return true;
}
if(dragDropCounter>=0){
return false;
}else{
return true;
}
};
function cancelEvent(){
return false;
};
function initEvents(){
document.body.onmousemove=moveDragableElement;
document.body.onmouseup=stop_dragDropElement;
document.body.onselectstart=cancelSelectionEvent;
document.body.ondragstart=cancelEvent;
documentHeight=document.documentElement.clientHeight;
};
function createFeed(_81){
showWait();
var url=_81.rssUrl.value;
var _83=_81.items.value;
var _84=_81.height.value;
var _85=_81.reloadInterval.value;
uniqueIdentifier=ajax.saveFeed(url,_84,_83,_85);
if(!uniqueIdentifier){
ajax.showMessages();
tAjax.delay(function(){
hideWait();
});
return false;
}
showSearch();
document.getElementById("formAddFeed").reset();
if(isNaN(_84)||_84/1<40){
_84=false;
}
if(isNaN(_85)||_85/1<5){
_85=false;
}
createARSSBox(url,1,_84,_83,_85,uniqueIdentifier);
tAjax.delay(function(){
hideWait();
});
};
function createRSSBoxesFromCookie(){
var _86=new Array();
var _87=Get_Cookie(nameOfCookie+"0");
cookieCounter=0;
while(_87&&_87!=""){
var _88=_87.split("#;#");
var _89=_88[0];
if(!_88[0]){
_89=_88[5];
}
if(_88.length>1&&!_86[_89]){
_86[_89]=true;
createARSSBox(_88[0],_88[1],_88[3],_88[2],_88[4],_88[5],_88[6]);
cookieRSSSources[_88[0]]=cookieCounter-1;
}else{
cookieCounter++;
}
var _87=Get_Cookie(nameOfCookie+cookieCounter);
}
};
function clearCookiesForDragableBoxes(){
var _8a=Get_Cookie(nameOfCookie);
while(_8a&&_8a!=""){
Set_Cookie(nameOfCookie+cookieCounter,"",-500);
cookieCounter++;
var _8a=Get_Cookie(nameOfCookie+cookieCounter);
}
};
function deleteAllDragableBoxes(){
var _8b=document.getElementsByTagName("DIV");
for(var no=0;no<_8b.length;no++){
if(_8b[no].className=="dragableBox"){
closeDragableBox(false,_8b[no]);
}
}
};
function resetDragableBoxes(){
cookieCounter=0;
clearCookiesForDragableBoxes();
deleteAllDragableBoxes();
cookieCounter=0;
cookieRSSSources=new Array();
createDefaultBoxes();
};
function hideHeaderOptionsForStaticBoxes(_8d){
if(document.getElementById("dragableBoxRefreshSource"+_8d)){
document.getElementById("dragableBoxRefreshSource"+_8d).style.display="none";
}
if(document.getElementById("dragableBoxCloseLink"+_8d)){
document.getElementById("dragableBoxCloseLink"+_8d).style.display="none";
}
if(document.getElementById("dragableBoxEditLink"+_8d)){
document.getElementById("dragableBoxEditLink"+_8d).style.display="none";
}
};
function disableBoxDrag(_8e){
document.getElementById("dragableBoxHeader"+_8e).onmousedown="";
document.getElementById("dragableBoxHeader"+_8e).style.cursor="default";
};
function initDragableBoxesScript(){
createColumns();
createHelpObjects();
initEvents();
if(useCookiesToRememberRSSSources){
createRSSBoxesFromCookie();
}
createDefaultBoxes();
};
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
function hex_hmac_sha1(key,_93){
return binb2hex(core_hmac_sha1(key,_93));
};
function b64_hmac_sha1(key,_95){
return binb2b64(core_hmac_sha1(key,_95));
};
function str_hmac_sha1(key,_97){
return binb2str(core_hmac_sha1(key,_97));
};
function sha1_vm_test(){
return hex_sha1("abc")=="a9993e364706816aba3e25717850c26c9cd0d89d";
};
function core_sha1(x,len){
x[len>>5]|=128<<(24-len%32);
x[((len+64>>9)<<4)+15]=len;
var w=Array(80);
var a=1732584193;
var b=-271733879;
var c=-1732584194;
var d=271733878;
var e=-1009589776;
for(var i=0;i<x.length;i+=16){
var _a1=a;
var _a2=b;
var _a3=c;
var _a4=d;
var _a5=e;
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
a=safe_add(a,_a1);
b=safe_add(b,_a2);
c=safe_add(c,_a3);
d=safe_add(d,_a4);
e=safe_add(e,_a5);
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
function core_hmac_sha1(key,_ae){
var _af=str2binb(key);
if(_af.length>16){
_af=core_sha1(_af,key.length*chrsz);
}
var _b0=Array(16),_b1=Array(16);
for(var i=0;i<16;i++){
_b0[i]=_af[i]^909522486;
_b1[i]=_af[i]^1549556828;
}
var _b3=core_sha1(_b0.concat(str2binb(_ae)),512+_ae.length*chrsz);
return core_sha1(_b1.concat(_b3),512+160);
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
var _bc=(1<<chrsz)-1;
for(var i=0;i<str.length*chrsz;i+=chrsz){
bin[i>>5]|=(str.charCodeAt(i/chrsz)&_bc)<<(32-chrsz-i%32);
}
return bin;
};
function binb2str(bin){
var str="";
var _c0=(1<<chrsz)-1;
for(var i=0;i<bin.length*32;i+=chrsz){
str+=String.fromCharCode((bin[i>>5]>>>(32-chrsz-i%32))&_c0);
}
return str;
};
function binb2hex(_c2){
var _c3=hexcase?"0123456789ABCDEF":"0123456789abcdef";
var str="";
for(var i=0;i<_c2.length*4;i++){
str+=_c3.charAt((_c2[i>>2]>>((3-i%4)*8+4))&15)+_c3.charAt((_c2[i>>2]>>((3-i%4)*8))&15);
}
return str;
};
function binb2b64(_c6){
var tab="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var str="";
for(var i=0;i<_c6.length*4;i+=3){
var _ca=(((_c6[i>>2]>>8*(3-i%4))&255)<<16)|(((_c6[i+1>>2]>>8*(3-(i+1)%4))&255)<<8)|((_c6[i+2>>2]>>8*(3-(i+2)%4))&255);
for(var j=0;j<4;j++){
if(i*8+j*6>_c6.length*32){
str+=b64pad;
}else{
str+=tab.charAt((_ca>>6*(3-j))&63);
}
}
}
return str;
};

