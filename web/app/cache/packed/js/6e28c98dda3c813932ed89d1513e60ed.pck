var flyingSpeed=25;
var shopping_cart_div=false;
var flyingDiv=false;
var currentProductDiv=false;
var shopping_cart_x=false;
var shopping_cart_y=false;
var slide_xFactor=false;
var slide_yFactor=false;
var diffX=false;
var diffY=false;
var currentXPos=false;
var currentYPos=false;
var ajaxObjects=new Array();
var countProducts=0;
function shoppingCart_getTopPos(_1){
var _2=_1.offsetTop;
while((_1=_1.offsetParent)!=null){
if(_1.tagName!="HTML"){
_2+=_1.offsetTop;
}
}
return _2;
};
function shoppingCart_getLeftPos(_3){
var _4=_3.offsetLeft;
while((_3=_3.offsetParent)!=null){
if(_3.tagName!="HTML"){
_4+=_3.offsetLeft;
}
}
return _4;
};
function addToBasket(_5,_6){
if(!shopping_cart_div){
shopping_cart_div=document.getElementById("tiedFiles");
}
if(!flyingDiv){
flyingDiv=document.createElement("DIV");
flyingDiv.style.position="absolute";
document.body.appendChild(flyingDiv);
}
if(!shopping_cart_x){
shopping_cart_x=shoppingCart_getLeftPos(shopping_cart_div);
}
if(!shopping_cart_y){
shopping_cart_y=shoppingCart_getTopPos(shopping_cart_div);
}
currentProductDiv=document.getElementById(_5+"_selected");
productId=document.getElementById(_5+"_real_id").value;
if(currentProductDiv.style.display!=""||productId==0||_6==0){
return false;
}
showWait();
currentXPos=shoppingCart_getLeftPos(currentProductDiv);
currentYPos=shoppingCart_getTopPos(currentProductDiv);
diffX=shopping_cart_x-currentXPos;
diffY=(shopping_cart_y+(126*countProducts))-currentYPos;
countProducts++;
var _7=currentProductDiv.cloneNode(true);
_7.id="";
flyingDiv.innerHTML="";
flyingDiv.style.left=currentXPos+"px";
flyingDiv.style.top=currentYPos+"px";
flyingDiv.appendChild(_7);
flyingDiv.style.display="";
flyingDiv.style.width=currentProductDiv.offsetWidth+"px";
document.getElementById(_5+"_real_id").value=0;
currentProductDiv.style.display="none";
document.getElementById(_5).value="";
flyToBasket(productId,_6);
};
function flyToBasket(_8,_9){
var _a=Math.max(Math.abs(diffX),Math.abs(diffY));
var _b=(diffX/_a)*flyingSpeed;
var _c=(diffY/_a)*flyingSpeed;
currentXPos=currentXPos+_b;
currentYPos=currentYPos+_c;
flyingDiv.style.left=Math.round(currentXPos)+"px";
flyingDiv.style.top=Math.round(currentYPos)+"px";
if(_b>0&&currentXPos>shopping_cart_x){
document.body.removeChild(flyingDiv);
flyingDiv=false;
}
if(_b<0&&currentXPos<shopping_cart_x){
document.body.removeChild(flyingDiv);
flyingDiv=false;
}
if(flyingDiv){
setTimeout("flyToBasket(\""+_8+"\", "+_9+")",10);
}else{
ajaxAddProduct(_8,_9);
}
};
function showAjaxBasketContent(_d,_e){
var _f=document.getElementById("tiedFiles");
var src="<div id=\"content_basket_"+_d+"\" style=\"display:; position: relative; width: 300px; height: 124px; border: #CCCCCC 1px solid; margin-top: 2px; background-color: #FFFFFF;\">"+tAjax.getFileResume(_d)+"<div style=\"position: absolute; top: 106px; width: 294px; height: 12px; background-color: #CCCCCC; text-align: right; padding: 3px;\"><a href=\"#\" onclick=\"JavaScript: ajaxRemoveProduct ("+_d+", "+_e+"); return false;\" style=\"color: #FFFFFF;\">Remover</a></div></div>";
_f.innerHTML=_f.innerHTML+src;
countProducts--;
ajax.delay(function(){
hideWait();
});
};
function ajaxRemoveProduct(_11,_12){
showWait();
if(!ajax.removeFile(_11,_12)){
ajax.delay(function(){
hideWait();
});
return false;
}
ajax.loadFiles(_12);
ajax.delay(function(){
hideWait();
});
};
function ajaxAddProduct(_13,_14){
if(!ajax.addFile(_13,_14)){
ajax.delay(function(){
hideWait();
});
return false;
}
showAjaxBasketContent(_13,_14);
};
var fileLoadingImage="titan.php?target=loadFile&file=extra/lightbox/loading.gif";
var fileBottomNavCloseImage="titan.php?target=loadFile&file=extra/lightbox/closelabel.gif";
var overlayOpacity=0.8;
var animate=true;
var resizeSpeed=7;
var borderSize=10;
var imageArray=new Array;
var activeImage;
if(animate==true){
overlayDuration=0.2;
if(resizeSpeed>10){
resizeSpeed=10;
}
if(resizeSpeed<1){
resizeSpeed=1;
}
resizeDuration=(11-resizeSpeed)*0.15;
}else{
overlayDuration=0;
resizeDuration=0;
}
Object.extend(Element,{getWidth:function(_15){
_15=$(_15);
return _15.offsetWidth;
},setWidth:function(_16,w){
_16=$(_16);
_16.style.width=w+"px";
},setHeight:function(_18,h){
_18=$(_18);
_18.style.height=h+"px";
},setTop:function(_1a,t){
_1a=$(_1a);
_1a.style.top=t+"px";
},setLeft:function(_1c,l){
_1c=$(_1c);
_1c.style.left=l+"px";
},setSrc:function(_1e,src){
_1e=$(_1e);
_1e.src=src;
},setHref:function(_20,_21){
_20=$(_20);
_20.href=_21;
},setInnerHTML:function(_22,_23){
_22=$(_22);
_22.innerHTML=_23;
}});
Array.prototype.removeDuplicates=function(){
for(i=0;i<this.length;i++){
for(j=this.length-1;j>i;j--){
if(this[i][0]==this[j][0]){
this.splice(j,1);
}
}
}
};
Array.prototype.empty=function(){
for(i=0;i<=this.length;i++){
this.shift();
}
};
var Lightbox=Class.create();
Lightbox.prototype={initialize:function(){
this.updateImageList();
var _24=document.getElementsByTagName("body").item(0);
var _25=document.createElement("div");
_25.setAttribute("id","overlay");
_25.style.display="none";
_25.onclick=function(){
myLightbox.end();
};
_24.appendChild(_25);
var _26=document.createElement("div");
_26.setAttribute("id","lightbox");
_26.style.display="none";
_26.onclick=function(e){
if(!e){
var e=window.event;
}
var _28=Event.element(e).id;
if(_28=="lightbox"){
myLightbox.end();
}
};
_24.appendChild(_26);
var _29=document.createElement("div");
_29.setAttribute("id","outerImageContainer");
_26.appendChild(_29);
if(animate){
Element.setWidth("outerImageContainer",250);
Element.setHeight("outerImageContainer",250);
}else{
Element.setWidth("outerImageContainer",1);
Element.setHeight("outerImageContainer",1);
}
var _2a=document.createElement("div");
_2a.setAttribute("id","imageContainer");
_29.appendChild(_2a);
var _2b=document.createElement("img");
_2b.setAttribute("id","lightboxImage");
_2a.appendChild(_2b);
var _2c=document.createElement("div");
_2c.setAttribute("id","hoverNav");
_2a.appendChild(_2c);
var _2d=document.createElement("a");
_2d.setAttribute("id","prevLink");
_2d.setAttribute("href","#");
_2c.appendChild(_2d);
var _2e=document.createElement("a");
_2e.setAttribute("id","nextLink");
_2e.setAttribute("href","#");
_2c.appendChild(_2e);
var _2f=document.createElement("div");
_2f.setAttribute("id","loading");
_2a.appendChild(_2f);
var _30=document.createElement("a");
_30.setAttribute("id","loadingLink");
_30.setAttribute("href","#");
_30.onclick=function(){
myLightbox.end();
return false;
};
_2f.appendChild(_30);
var _31=document.createElement("img");
_31.setAttribute("src",fileLoadingImage);
_30.appendChild(_31);
var _32=document.createElement("div");
_32.setAttribute("id","imageDataContainer");
_26.appendChild(_32);
var _33=document.createElement("div");
_33.setAttribute("id","imageData");
_32.appendChild(_33);
var _34=document.createElement("div");
_34.setAttribute("id","imageDetails");
_33.appendChild(_34);
var _35=document.createElement("span");
_35.setAttribute("id","caption");
_34.appendChild(_35);
var _36=document.createElement("span");
_36.setAttribute("id","numberDisplay");
_34.appendChild(_36);
var _37=document.createElement("div");
_37.setAttribute("id","bottomNav");
_33.appendChild(_37);
var _38=document.createElement("a");
_38.setAttribute("id","bottomNavClose");
_38.setAttribute("href","#");
_38.onclick=function(){
myLightbox.end();
return false;
};
_37.appendChild(_38);
var _39=document.createElement("img");
_39.setAttribute("src",fileBottomNavCloseImage);
_38.appendChild(_39);
},updateImageList:function(){
if(!document.getElementsByTagName){
return;
}
var _3a=document.getElementsByTagName("a");
var _3b=document.getElementsByTagName("area");
for(var i=0;i<_3a.length;i++){
var _3d=_3a[i];
var _3e=String(_3d.getAttribute("rel"));
if(_3d.getAttribute("href")&&(_3e.toLowerCase().match("lightbox"))){
_3d.onclick=function(){
myLightbox.start(this);
return false;
};
}
}
for(var i=0;i<_3b.length;i++){
var _3f=_3b[i];
var _3e=String(_3f.getAttribute("rel"));
if(_3f.getAttribute("href")&&(_3e.toLowerCase().match("lightbox"))){
_3f.onclick=function(){
myLightbox.start(this);
return false;
};
}
}
},start:function(_40){
hideSelectBoxes();
hideFlash();
var _41=getPageSize();
Element.setWidth("overlay",_41[0]);
Element.setHeight("overlay",_41[1]);
new Effect.Appear("overlay",{duration:overlayDuration,from:0,to:overlayOpacity});
imageArray=[];
imageNum=0;
if(!document.getElementsByTagName){
return;
}
var _42=document.getElementsByTagName(_40.tagName);
if((_40.getAttribute("rel")=="lightbox")){
imageArray.push(new Array(_40.getAttribute("href"),_40.getAttribute("title")));
}else{
for(var i=0;i<_42.length;i++){
var _44=_42[i];
if(_44.getAttribute("href")&&(_44.getAttribute("rel")==_40.getAttribute("rel"))){
imageArray.push(new Array(_44.getAttribute("href"),_44.getAttribute("title")));
}
}
imageArray.removeDuplicates();
while(imageArray[imageNum][0]!=_40.getAttribute("href")){
imageNum++;
}
}
var _45=getPageScroll();
var _46=_45[1]+(_41[3]/10);
var _47=_45[0];
Element.setTop("lightbox",_46);
Element.setLeft("lightbox",_47);
Element.show("lightbox");
this.changeImage(imageNum);
},changeImage:function(_48){
activeImage=_48;
if(animate){
Element.show("loading");
}
Element.hide("lightboxImage");
Element.hide("hoverNav");
Element.hide("prevLink");
Element.hide("nextLink");
Element.hide("imageDataContainer");
Element.hide("numberDisplay");
imgPreloader=new Image();
imgPreloader.onload=function(){
Element.setSrc("lightboxImage",imageArray[activeImage][0]);
myLightbox.resizeImageContainer(imgPreloader.width,imgPreloader.height);
imgPreloader.onload=function(){
};
};
imgPreloader.src=imageArray[activeImage][0];
},resizeImageContainer:function(_49,_4a){
this.widthCurrent=Element.getWidth("outerImageContainer");
this.heightCurrent=Element.getHeight("outerImageContainer");
var _4b=(_49+(borderSize*2));
var _4c=(_4a+(borderSize*2));
this.xScale=(_4b/this.widthCurrent)*100;
this.yScale=(_4c/this.heightCurrent)*100;
wDiff=this.widthCurrent-_4b;
hDiff=this.heightCurrent-_4c;
if(!(hDiff==0)){
new Effect.Scale("outerImageContainer",this.yScale,{scaleX:false,duration:resizeDuration,queue:"front"});
}
if(!(wDiff==0)){
new Effect.Scale("outerImageContainer",this.xScale,{scaleY:false,delay:resizeDuration,duration:resizeDuration});
}
if((hDiff==0)&&(wDiff==0)){
if(navigator.appVersion.indexOf("MSIE")!=-1){
pause(250);
}else{
pause(100);
}
}
Element.setHeight("prevLink",_4a);
Element.setHeight("nextLink",_4a);
Element.setWidth("imageDataContainer",_4b);
this.showImage();
},showImage:function(){
Element.hide("loading");
new Effect.Appear("lightboxImage",{duration:resizeDuration,queue:"end",afterFinish:function(){
myLightbox.updateDetails();
}});
this.preloadNeighborImages();
},updateDetails:function(){
if(imageArray[activeImage][1]){
Element.show("caption");
Element.setInnerHTML("caption",imageArray[activeImage][1]);
}
if(imageArray.length>1){
Element.show("numberDisplay");
Element.setInnerHTML("numberDisplay","Image "+eval(activeImage+1)+" of "+imageArray.length);
}
new Effect.Parallel([new Effect.SlideDown("imageDataContainer",{sync:true,duration:resizeDuration,from:0,to:1}),new Effect.Appear("imageDataContainer",{sync:true,duration:resizeDuration})],{duration:resizeDuration,afterFinish:function(){
var _4d=getPageSize();
Element.setHeight("overlay",_4d[1]);
myLightbox.updateNav();
}});
},updateNav:function(){
Element.show("hoverNav");
if(activeImage!=0){
Element.show("prevLink");
document.getElementById("prevLink").onclick=function(){
myLightbox.changeImage(activeImage-1);
return false;
};
}
if(activeImage!=(imageArray.length-1)){
Element.show("nextLink");
document.getElementById("nextLink").onclick=function(){
myLightbox.changeImage(activeImage+1);
return false;
};
}
this.enableKeyboardNav();
},enableKeyboardNav:function(){
document.onkeydown=this.keyboardAction;
},disableKeyboardNav:function(){
document.onkeydown="";
},keyboardAction:function(e){
if(e==null){
keycode=event.keyCode;
escapeKey=27;
}else{
keycode=e.keyCode;
escapeKey=e.DOM_VK_ESCAPE;
}
key=String.fromCharCode(keycode).toLowerCase();
if((key=="x")||(key=="o")||(key=="c")||(keycode==escapeKey)){
myLightbox.end();
}else{
if((key=="p")||(keycode==37)){
if(activeImage!=0){
myLightbox.disableKeyboardNav();
myLightbox.changeImage(activeImage-1);
}
}else{
if((key=="n")||(keycode==39)){
if(activeImage!=(imageArray.length-1)){
myLightbox.disableKeyboardNav();
myLightbox.changeImage(activeImage+1);
}
}
}
}
},preloadNeighborImages:function(){
if((imageArray.length-1)>activeImage){
preloadNextImage=new Image();
preloadNextImage.src=imageArray[activeImage+1][0];
}
if(activeImage>0){
preloadPrevImage=new Image();
preloadPrevImage.src=imageArray[activeImage-1][0];
}
},end:function(){
this.disableKeyboardNav();
Element.hide("lightbox");
new Effect.Fade("overlay",{duration:overlayDuration});
showSelectBoxes();
showFlash();
}};
function getPageScroll(){
var _4f,_50;
if(self.pageYOffset){
_50=self.pageYOffset;
_4f=self.pageXOffset;
}else{
if(document.documentElement&&document.documentElement.scrollTop){
_50=document.documentElement.scrollTop;
_4f=document.documentElement.scrollLeft;
}else{
if(document.body){
_50=document.body.scrollTop;
_4f=document.body.scrollLeft;
}
}
}
arrayPageScroll=new Array(_4f,_50);
return arrayPageScroll;
};
function getPageSize(){
var _51,_52;
if(window.innerHeight&&window.scrollMaxY){
_51=window.innerWidth+window.scrollMaxX;
_52=window.innerHeight+window.scrollMaxY;
}else{
if(document.body.scrollHeight>document.body.offsetHeight){
_51=document.body.scrollWidth;
_52=document.body.scrollHeight;
}else{
_51=document.body.offsetWidth;
_52=document.body.offsetHeight;
}
}
var _53,_54;
if(self.innerHeight){
if(document.documentElement.clientWidth){
_53=document.documentElement.clientWidth;
}else{
_53=self.innerWidth;
}
_54=self.innerHeight;
}else{
if(document.documentElement&&document.documentElement.clientHeight){
_53=document.documentElement.clientWidth;
_54=document.documentElement.clientHeight;
}else{
if(document.body){
_53=document.body.clientWidth;
_54=document.body.clientHeight;
}
}
}
if(_52<_54){
pageHeight=_54;
}else{
pageHeight=_52;
}
if(_51<_53){
pageWidth=_51;
}else{
pageWidth=_53;
}
arrayPageSize=new Array(pageWidth,pageHeight,_53,_54);
return arrayPageSize;
};
function getKey(e){
if(e==null){
keycode=event.keyCode;
}else{
keycode=e.which;
}
key=String.fromCharCode(keycode).toLowerCase();
if(key=="x"){
}
};
function listenKey(){
document.onkeypress=getKey;
};
function showSelectBoxes(){
var _56=document.getElementsByTagName("select");
for(i=0;i!=_56.length;i++){
_56[i].style.visibility="visible";
}
};
function hideSelectBoxes(){
var _57=document.getElementsByTagName("select");
for(i=0;i!=_57.length;i++){
_57[i].style.visibility="hidden";
}
};
function showFlash(){
var _58=document.getElementsByTagName("object");
for(i=0;i<_58.length;i++){
_58[i].style.visibility="visible";
}
var _59=document.getElementsByTagName("embed");
for(i=0;i<_59.length;i++){
_59[i].style.visibility="visible";
}
};
function hideFlash(){
var _5a=document.getElementsByTagName("object");
for(i=0;i<_5a.length;i++){
_5a[i].style.visibility="hidden";
}
var _5b=document.getElementsByTagName("embed");
for(i=0;i<_5b.length;i++){
_5b[i].style.visibility="hidden";
}
};
function pause(ms){
var _5d=new Date();
_5e=null;
do{
var _5e=new Date();
}while(_5e-_5d<ms);
};
function initLightbox(){
myLightbox=new Lightbox();
};
Event.observe(window,"load",initLightbox,false);

