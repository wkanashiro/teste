/* Simple AJAX Code-Kit (SACK) */
/* ©2005 Gregory Wild-Smith */
/* www.twilightuniverse.com */
/* Software licenced under a modified X11 licence, see documentation or authors website for more details */

function sack(file){
	this.AjaxFailedAlert = "Your browser does not support the enhanced functionality of this website, and therefore you will have an experience that differs from the intended one.\n";
	this.requestFile = file;
	this.method = "POST";
	this.URLString = "";
	this.encodeURIString = true;
	this.execute = false;

	this.onLoading = function() { };
	this.onLoaded = function() { };
	this.onInteractive = function() { };
	this.onCompletion = function() { };

	this.createAJAX = function() {
		try {
			this.xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				this.xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (err) {
				this.xmlhttp = null;
			}
		}
		if(!this.xmlhttp && typeof XMLHttpRequest != "undefined")
			this.xmlhttp = new XMLHttpRequest();
		if (!this.xmlhttp){
			this.failed = true; 
		}
	};
	
	this.setVar = function(name, value){
		if (this.URLString.length < 3){
			this.URLString = name + "=" + value;
		} else {
			this.URLString += "&" + name + "=" + value;
		}
	}
	
	this.encVar = function(name, value){
		var varString = encodeURIComponent(name) + "=" + encodeURIComponent(value);
	return varString;
	}
	
	this.encodeURLString = function(string){
		varArray = string.split('&');
		for (i = 0; i < varArray.length; i++){
			urlVars = varArray[i].split('=');
			if (urlVars[0].indexOf('amp;') != -1){
				urlVars[0] = urlVars[0].substring(4);
			}
			varArray[i] = this.encVar(urlVars[0],urlVars[1]);
		}
	return varArray.join('&');
	}
	
	this.runResponse = function(){
		eval(this.response);
	}
	
	this.runAJAX = function(urlstring){
		this.responseStatus = new Array(2);
		if(this.failed && this.AjaxFailedAlert){ 
			alert(this.AjaxFailedAlert); 
		} else {
			if (urlstring){ 
				if (this.URLString.length){
					this.URLString = this.URLString + "&" + urlstring; 
				} else {
					this.URLString = urlstring; 
				}
			}
			if (this.encodeURIString){
				var timeval = new Date().getTime(); 
				this.URLString = this.encodeURLString(this.URLString);
				this.setVar("rndval", timeval);
			}
			if (this.element) { this.elementObj = document.getElementById(this.element); }
			if (this.xmlhttp) {
				var self = this;
				if (this.method == "GET") {
					var totalurlstring = this.requestFile + "?" + this.URLString;
					this.xmlhttp.open(this.method, totalurlstring, true);
				} else {
					this.xmlhttp.open(this.method, this.requestFile, true);
				}
				if (this.method == "POST"){
  					try {
						this.xmlhttp.setRequestHeader('Content-Type','application/x-www-form-urlencoded')  
					} catch (e) {}
				}

				this.xmlhttp.send(this.URLString);
				this.xmlhttp.onreadystatechange = function() {
					switch (self.xmlhttp.readyState){
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
							self.response = self.xmlhttp.responseText;
							self.responseXML = self.xmlhttp.responseXML;
							self.responseStatus[0] = self.xmlhttp.status;
							self.responseStatus[1] = self.xmlhttp.statusText;
							self.onCompletion();
							if(self.execute){ self.runResponse(); }
							if (self.elementObj) {
								var elemNodeName = self.elementObj.nodeName;
								elemNodeName.toLowerCase();
								if (elemNodeName == "input" || elemNodeName == "select" || elemNodeName == "option" || elemNodeName == "textarea"){
									self.elementObj.value = self.response;
								} else {
									self.elementObj.innerHTML = self.response;
								}
							}
							self.URLString = "";
						break;
					}
				};
			}
		}
	};
this.createAJAX();
}
	/************************************************************************************************************
	(C) www.dhtmlgoodies.com, January 2006
	
	This is a script from www.dhtmlgoodies.com. You will find this and a lot of other scripts at our website.	
	
	Version:	1.0	: January 16th - 2006
				1.1 : January 31th - 2006 - Added cookie support - remember rss sources
				1.2 : July 13th - 2006 - Fixed a problem in the createRSSBoxesFromCookie function
				
	Terms of use:
	You are free to use this script as long as the copyright message is kept intact. However, you may not
	redistribute, sell or repost it without our permission.
	
	Thank you!
	
	www.dhtmlgoodies.com
	Alf Magne Kalleland
	
	************************************************************************************************************/		
	
	/* USER VARIABLES */
	
	var numberOfColumns = 3;	// Number of columns for dragable boxes
	var columnParentBoxId = 'floatingBoxParentContainer';	// Id of box that is parent of all your dragable boxes
	var src_rightImage = 'titan.php?target=loadFile&file=extra/dragable-boxes/images/arrow_right.gif';
	var src_downImage = 'titan.php?target=loadFile&file=extra/dragable-boxes/images/arrow_down.gif';
	var src_refreshSource = 'titan.php?target=loadFile&file=extra/dragable-boxes/images/refresh.gif';
	var src_smallRightArrow = 'titan.php?target=loadFile&file=extra/dragable-boxes/images/small_arrow.gif';
	
	var transparencyWhenDragging = true;
	var txt_editLink = 'Editar';
	var txt_editLink_stop = 'Fechar Edição';
	var autoScrollSpeed = 4;	// Autoscroll speed	- Higher = faster	
	var dragObjectBorderWidth = 1;	// Border size of your RSS boxes - used to determine width of dotted rectangle
	
	var useCookiesToRememberRSSSources = false;
	
	var nameOfCookie = 'dragable_rss_boxes';	// Name of cookie
	
	/* END USER VARIABLES */
	
	
	
	var columnParentBox;
	var dragableBoxesObj;
	
	var ajaxObjects = new Array();
	
	var boxIndex = 0;	
	var autoScrollActive = false;
	var dragableBoxesArray = new Array();
	
	var dragDropCounter = -1;
	var dragObject = false;
	var dragObjectNextSibling = false;
	var dragObjectParent = false;
	var destinationObj = false;
	
	var mouse_x;
	var mouse_y;
	
	var el_x;
	var el_y;	
	
	var rectangleDiv;
	var okToMove = true;

	var documentHeight = false;
	var documentScrollHeight = false;
	var dragableAreaWidth = false;
		
	var opera = navigator.userAgent.toLowerCase().indexOf('opera')>=0?true:false;
	var cookieCounter=0;
	var cookieRSSSources = new Array();
	
	var staticObjectArray = new Array();
	
	/*
	These cookie functions are downloaded from 
	http://www.mach5.com/support/analyzer/manual/html/General/CookiesJavaScript.htm
	*/	
	function Get_Cookie(name) { 
	   var start = document.cookie.indexOf(name+"="); 
	   var len = start+name.length+1; 
	   if ((!start) && (name != document.cookie.substring(0,name.length))) return null; 
	   if (start == -1) return null; 
	   var end = document.cookie.indexOf(";",len); 
	   if (end == -1) end = document.cookie.length; 
	   return unescape(document.cookie.substring(len,end)); 
	} 
	// This function has been slightly modified
	function Set_Cookie(name,value,expires,path,domain,secure) { 
		expires = expires * 60*60*24*1000;
		var today = new Date();
		var expires_date = new Date( today.getTime() + (expires) );
	    var cookieString = name + "=" +escape(value) + 
	       ( (expires) ? ";expires=" + expires_date.toGMTString() : "") + 
	       ( (path) ? ";path=" + path : "") + 
	       ( (domain) ? ";domain=" + domain : "") + 
	       ( (secure) ? ";secure" : ""); 
	    document.cookie = cookieString; 
	} 

	function autoScroll(direction,yPos)
	{
		if(document.documentElement.scrollHeight>documentScrollHeight && direction>0)return;
		if(opera)return;
		window.scrollBy(0,direction);
		if(!dragObject)return;
		
		if(direction<0){
			if(document.documentElement.scrollTop>0){
				dragObject.style.top = (el_y - mouse_y + yPos + document.documentElement.scrollTop) + 'px';		
			}else{
				autoScrollActive = false;
			}
		}else{
			if(yPos>(documentHeight-50)){	
				dragObject.style.top = (el_y - mouse_y + yPos + document.documentElement.scrollTop) + 'px';			
			}else{
				autoScrollActive = false;
			}
		}
		if(autoScrollActive)setTimeout('autoScroll('+direction+',' + yPos + ')',5);
	}
		
	function initDragDropBox(e)
	{
		
		
		dragDropCounter = 1;
		if(document.all)e = event;
		
		if (e.target) source = e.target;
			else if (e.srcElement) source = e.srcElement;
			if (source.nodeType == 3) // defeat Safari bug
				source = source.parentNode;
		
		if(source.tagName.toLowerCase()=='img' || source.tagName.toLowerCase()=='a' || source.tagName.toLowerCase()=='input' || source.tagName.toLowerCase()=='td' || source.tagName.toLowerCase()=='tr' || source.tagName.toLowerCase()=='table')return;
		
	
		mouse_x = e.clientX;
		mouse_y = e.clientY;	
		var numericId = this.id.replace(/[^0-9]/g,'');
		el_x = getLeftPos(this.parentNode.parentNode)/1;
		el_y = getTopPos(this.parentNode.parentNode)/1 - document.documentElement.scrollTop;
			
		dragObject = this.parentNode.parentNode;
		
		documentScrollHeight = document.documentElement.scrollHeight + 100 + dragObject.offsetHeight;
		
		
		if(dragObject.nextSibling){
			dragObjectNextSibling = dragObject.nextSibling;
			if(dragObjectNextSibling.tagName!='DIV')dragObjectNextSibling = dragObjectNextSibling.nextSibling;
		}
		dragObjectParent = dragableBoxesArray[numericId]['parentObj'];
			
		dragDropCounter = 0;
		initDragDropBoxTimer();	
		
		return false;
	}
	
	
	function initDragDropBoxTimer()
	{
		if(dragDropCounter>=0 && dragDropCounter<10){
			dragDropCounter++;
			setTimeout('initDragDropBoxTimer()',10);
			return;
		}
		if(dragDropCounter==10){
			mouseoutBoxHeader(false,dragObject);
		}
		
	}

	function moveDragableElement(e){
		if(document.all)e = event;
		if(dragDropCounter<10)return;
		
		if(document.all && e.button!=1 && !opera){
			stop_dragDropElement();
			return;
		}
		
		if(document.body!=dragObject.parentNode){
			dragObject.style.width = (dragObject.offsetWidth - (dragObjectBorderWidth*2)) + 'px';
			dragObject.style.position = 'absolute';	
			dragObject.style.textAlign = 'left';
			if(transparencyWhenDragging){	
				dragObject.style.filter = 'alpha(opacity=70)';
				dragObject.style.opacity = '0.7';
			}	
			dragObject.parentNode.insertBefore(rectangleDiv,dragObject);
			rectangleDiv.style.display='block';
			document.body.appendChild(dragObject);

			rectangleDiv.style.width = dragObject.style.width;
			rectangleDiv.style.height = (dragObject.offsetHeight - (dragObjectBorderWidth*2)) + 'px'; 
			
		}
		
		if(e.clientY<50 || e.clientY>(documentHeight-50)){
			if(e.clientY<50 && !autoScrollActive){
				autoScrollActive = true;
				autoScroll((autoScrollSpeed*-1),e.clientY);
			}
			
			if(e.clientY>(documentHeight-50) && document.documentElement.scrollHeight<=documentScrollHeight && !autoScrollActive){
				autoScrollActive = true;
				autoScroll(autoScrollSpeed,e.clientY);
			}
		}else{
			autoScrollActive = false;
		}		

		
		var leftPos = e.clientX;
		var topPos = e.clientY + document.documentElement.scrollTop;
		
		dragObject.style.left = (e.clientX - mouse_x + el_x) + 'px';
		dragObject.style.top = (el_y - mouse_y + e.clientY + document.documentElement.scrollTop) + 'px';
								

		
		if(!okToMove)return;
		okToMove = false;

		destinationObj = false;	
		rectangleDiv.style.display = 'none'; 
		
		var objFound = false;
		var tmpParentArray = new Array();
		
		if(!objFound){
			for(var no=1;no<dragableBoxesArray.length;no++){
				if(dragableBoxesArray[no]['obj']==dragObject)continue;
				tmpParentArray[dragableBoxesArray[no]['obj'].parentNode.id] = true;
				if(!objFound){
					var tmpX = getLeftPos(dragableBoxesArray[no]['obj']);
					var tmpY = getTopPos(dragableBoxesArray[no]['obj']);

					if(leftPos>tmpX && leftPos<(tmpX + dragableBoxesArray[no]['obj'].offsetWidth) && topPos>(tmpY-20) && topPos<(tmpY + (dragableBoxesArray[no]['obj'].offsetHeight/2))){
						destinationObj = dragableBoxesArray[no]['obj'];
						destinationObj.parentNode.insertBefore(rectangleDiv,dragableBoxesArray[no]['obj']);
						rectangleDiv.style.display = 'block';
						objFound = true;
						break;
						
					}
					
					if(leftPos>tmpX && leftPos<(tmpX + dragableBoxesArray[no]['obj'].offsetWidth) && topPos>=(tmpY + (dragableBoxesArray[no]['obj'].offsetHeight/2)) && topPos<(tmpY + dragableBoxesArray[no]['obj'].offsetHeight)){
						objFound = true;
						if(dragableBoxesArray[no]['obj'].nextSibling){
							
							destinationObj = dragableBoxesArray[no]['obj'].nextSibling;
							if(!destinationObj.tagName)destinationObj = destinationObj.nextSibling;
							if(destinationObj!=rectangleDiv)destinationObj.parentNode.insertBefore(rectangleDiv,destinationObj);
						}else{
							destinationObj = dragableBoxesArray[no]['obj'].parentNode;
							dragableBoxesArray[no]['obj'].parentNode.appendChild(rectangleDiv);
						}
						rectangleDiv.style.display = 'block';
						break;					
					}
					
					
					if(!dragableBoxesArray[no]['obj'].nextSibling && leftPos>tmpX && leftPos<(tmpX + dragableBoxesArray[no]['obj'].offsetWidth)
					&& topPos>topPos>(tmpY + (dragableBoxesArray[no]['obj'].offsetHeight))){
						destinationObj = dragableBoxesArray[no]['obj'].parentNode;
						dragableBoxesArray[no]['obj'].parentNode.appendChild(rectangleDiv);	
						rectangleDiv.style.display = 'block';	
						objFound = true;				
						
					}
				}
				
			}
		
		}
		
		if(!objFound){
			
			for(var no=1;no<=numberOfColumns;no++){
				if(!objFound){
					var obj = document.getElementById('dragableBoxesColumn' + no);			
					
						var left = getLeftPos(obj)/1;						
					
						var width = obj.offsetWidth;
						if(leftPos>left && leftPos<(left+width)){
							destinationObj = obj;
							obj.appendChild(rectangleDiv);
							rectangleDiv.style.display='block';
							objFound=true;		
							
						}				
					
				}
			}		
			
		}
	

		setTimeout('okToMove=true',5);
		
	}
	
	function stop_dragDropElement()
	{
		
		if(dragDropCounter<10){
			dragDropCounter = -1
			return;
		}
		dragDropCounter = -1;
		if(transparencyWhenDragging){
			dragObject.style.filter = null;
			dragObject.style.opacity = null;
		}		
		dragObject.style.position = 'static';
		dragObject.style.width = null;
		var numericId = dragObject.id.replace(/[^0-9]/g,'');
		if(destinationObj && destinationObj.id!=dragObject.id){
			
			if(destinationObj.id.indexOf('dragableBoxesColumn')>=0){
				destinationObj.appendChild(dragObject);
				dragableBoxesArray[numericId]['parentObj'] = destinationObj;
			}else{
				destinationObj.parentNode.insertBefore(dragObject,destinationObj);
				dragableBoxesArray[numericId]['parentObj'] = destinationObj.parentNode;
			}


							
		}else{
			if(dragObjectNextSibling){
				dragObjectParent.insertBefore(dragObject,dragObjectNextSibling);	
			}else{
				dragObjectParent.appendChild(dragObject);
			}				
			
			
		}
	

		
		autoScrollActive = false;
		rectangleDiv.style.display = 'none'; 
		dragObject = false;
		dragObjectNextSibling = false;
		destinationObj = false;
		
		if(useCookiesToRememberRSSSources)setTimeout('saveCookies()',100);

		documentHeight = document.documentElement.clientHeight;	
		
		//var rssUrl = document.getElementById('rssUrl[' + numericId + ']').value;
		//var maxRssItems = document.getElementById('maxRssItems[' + numericId + ']').value;
		//var heightOfBox = document.getElementById('heightOfBox[' + numericId + ']').value;
		//var minutesBeforeReload = document.getElementById('minutesBeforeReload[' + numericId + ']').value;
		//var columnParentBox = document.getElementById(columnParentBoxId);
		//alert (dragableBoxesArray[boxIndex]['boxState']);
		//alert ('#' + rssUrl + '#' + maxRssItems + '#' + heightOfBox + '#' + minutesBeforeReload + '#' + columnParentBox + '#');
		var column = 0;
		for(var no=1;no<=numberOfColumns;no++)
		{
			var parentObj = document.getElementById('dragableBoxesColumn' + no);
			
			var items = parentObj.getElementsByTagName('DIV');
			if(items.length==0)continue;
			
			var item = items[0];
			
			var tmpItemArray = new Array();
			while(item){
				var boxIndex = item.id.replace(/[^0-9]/g,'');
				if(item.id!='rectangleDiv'){
					tmpItemArray[tmpItemArray.length] = boxIndex;
				}	
				item = item.nextSibling;			
			}
			
			var columnIndex = no;
			
			for(var no2=tmpItemArray.length-1;no2>=0;no2--){
				if (tmpItemArray[no2] == numericId)
					column = columnIndex;
			}
		}
		
		ajax.setColumn (column, dragableBoxesArray[numericId]['uniqueIdentifier']);
	}

	function saveCookies()
	{
		cookieCounter = 0;
		var tmpUrlArray = new Array();
		for(var no=1;no<=numberOfColumns;no++)
		{
			var parentObj = document.getElementById('dragableBoxesColumn' + no);
			
			var items = parentObj.getElementsByTagName('DIV');
			if(items.length==0)continue;
			
			var item = items[0];
			
			var tmpItemArray = new Array();
			while(item){
				var boxIndex = item.id.replace(/[^0-9]/g,'');
				if(item.id!='rectangleDiv'){
					tmpItemArray[tmpItemArray.length] = boxIndex;
				}	
				item = item.nextSibling;			
			}
			
			var columnIndex = no;
			
			for(var no2=tmpItemArray.length-1;no2>=0;no2--){
				var boxIndex = tmpItemArray[no2];
				var url = dragableBoxesArray[boxIndex]['rssUrl'];
				var heightOfBox = dragableBoxesArray[boxIndex]['heightOfBox'];
				var maxRssItems = dragableBoxesArray[boxIndex]['maxRssItems'];
				var minutesBeforeReload = dragableBoxesArray[boxIndex]['minutesBeforeReload'];
				var uniqueIdentifier = dragableBoxesArray[boxIndex]['uniqueIdentifier'];
				var state = dragableBoxesArray[boxIndex]['boxState'];
				if(!tmpUrlArray[url]){
					tmpUrlArray[url] = true;
					
					Set_Cookie(nameOfCookie + cookieCounter,url + '#;#' + columnIndex + '#;#' + maxRssItems + '#;#' + heightOfBox + '#;#' + minutesBeforeReload + '#;#' + uniqueIdentifier + '#;#' + state ,60000);
					cookieRSSSources[url] = cookieCounter;
					cookieCounter++;	
				
				}else{
					
					Set_Cookie(nameOfCookie + cookieCounter,'' + '#;#' + columnIndex + '#;#' + '' + '#;#' + heightOfBox + '#;#' + '' + '#;#' + uniqueIdentifier ,60000);
					cookieCounter++;
				}		
				
			}
		}
	}
	
	
	function getTopPos(inputObj)
	{		
	  var returnValue = inputObj.offsetTop;
	  while((inputObj = inputObj.offsetParent) != null){
	  	if(inputObj.tagName!='HTML')returnValue += inputObj.offsetTop;
	  }
	  return returnValue;
	}
	
	function getLeftPos(inputObj)
	{
	  var returnValue = inputObj.offsetLeft;
	  while((inputObj = inputObj.offsetParent) != null){
	  	if(inputObj.tagName!='HTML')returnValue += inputObj.offsetLeft;
	  }
	  return returnValue;
	}
		
	
	function createColumns()
	{
		if(!columnParentBoxId){
			alert('No parent box defined for your columns');
			return;
		}
		columnParentBox = document.getElementById(columnParentBoxId);
		var columnWidth = Math.floor(100/numberOfColumns);
		var sumWidth = 0;
		for(var no=0;no<numberOfColumns;no++){
			var div = document.createElement('DIV');
			if(no==(numberOfColumns-1))columnWidth = 99 - sumWidth;
			sumWidth = sumWidth + columnWidth;
			div.style.cssText = 'float:left;width:'+columnWidth+'%;padding:0px;margin:0px;';
			div.style.height='100%';
			div.style.styleFloat='left';
			div.style.width = columnWidth + '%';
			div.style.padding = '0px';
			div.style.margin = '0px';

			div.id = 'dragableBoxesColumn' + (no+1);
			columnParentBox.appendChild(div);
			
			var clearObj = document.createElement('HR');	
			clearObj.style.clear = 'both';
			clearObj.style.visibility = 'hidden';
			div.appendChild(clearObj);
		}
		
		
		
		var clearingDiv = document.createElement('DIV');
		columnParentBox.appendChild(clearingDiv);
		clearingDiv.style.clear='both';
		
	}
	
	function mouseoverBoxHeader()
	{
		if(dragDropCounter==10)return;
		var id = this.id.replace(/[^0-9]/g,'');
		document.getElementById('dragableBoxExpand' + id).style.visibility = 'visible';		
		document.getElementById('dragableBoxRefreshSource' + id).style.visibility = 'visible';		
		document.getElementById('dragableBoxCloseLink' + id).style.visibility = 'visible';
		if(document.getElementById('dragableBoxEditLink' + id))document.getElementById('dragableBoxEditLink' + id).style.visibility = 'visible';
		
	}
	function mouseoutBoxHeader(e,obj)
	{
		if(!obj)obj=this;
		
		var id = obj.id.replace(/[^0-9]/g,'');
		document.getElementById('dragableBoxExpand' + id).style.visibility = 'hidden';		
		document.getElementById('dragableBoxRefreshSource' + id).style.visibility = 'hidden';		
		document.getElementById('dragableBoxCloseLink' + id).style.visibility = 'hidden';		
		if(document.getElementById('dragableBoxEditLink' + id))document.getElementById('dragableBoxEditLink' + id).style.visibility = 'hidden';		
		
	}
	
	function refreshRSS()
	{
		reloadRSSData(this.id.replace(/[^0-9]/g,''));
		setTimeout('dragDropCounter=-5',5);
	}
	
	function showHideBoxContent(e,inputObj)
	{
		if(document.all)e = event;
		if(!inputObj)inputObj=this;
		
		var numericId = inputObj.id.replace(/[^0-9]/g,'');
		var obj = document.getElementById('dragableBoxContent' + numericId);
		
		obj.style.display = inputObj.src.indexOf(src_rightImage)>=0?'none':'block';
		inputObj.src = inputObj.src.indexOf(src_rightImage)>=0?src_downImage:src_rightImage
		
		dragableBoxesArray[numericId]['boxState'] = obj.style.display=='block'?1:0;
		saveCookies();
		setTimeout('dragDropCounter=-5',5);
	}
	
	function mouseover_CloseButton()
	{
		this.className = 'closeButton_over';	
		setTimeout('dragDropCounter=-5',5);
	}
	
	function highlightCloseButton()
	{
		this.className = 'closeButton_over';	
	}
	
	function mouseout_CloseButton()
	{
		this.className = 'closeButton';	
	}
	
	function closeDragableBox(e,inputObj)
	{
		if(!inputObj)inputObj = this;
		var numericId = inputObj.id.replace(/[^0-9]/g,'');
		
		if (ajax.deleteFeed (dragableBoxesArray[numericId]['uniqueIdentifier']))
			document.getElementById('dragableBox' + numericId).style.display='none';	
		
		//Set_Cookie(nameOfCookie + cookieRSSSources[dragableBoxesArray[numericId]['rssUrl']],'none' ,60000);

		//setTimeout('dragDropCounter=-5',5);
		
	}
	
	function editRSSContent()
	{
		var numericId = this.id.replace(/[^0-9]/g,'');
		var obj = document.getElementById('dragableBoxEdit' + numericId);
		if(obj.style.display=='none'){
			obj.style.display='block';
			this.innerHTML = txt_editLink_stop;
			document.getElementById('dragableBoxHeader' + numericId).style.height = '135px';
		}else{
			obj.style.display='none';
			this.innerHTML = txt_editLink;
			document.getElementById('dragableBoxHeader' + numericId).style.height = '20px';
		}
		setTimeout('dragDropCounter=-5',5);
	}
	
	
	function showStatusBarMessage(numericId,message)
	{
		document.getElementById('dragableBoxStatusBar' + numericId).innerHTML = message;
		
	}
	
	function addBoxHeader(parentObj,externalUrl,notDrabable)
	{
		var div = document.createElement('DIV');
		div.className = 'dragableBoxHeader';
		
		div.id = 'dragableBoxHeader' + boxIndex;
		div.onmouseover = mouseoverBoxHeader;
		div.onmouseout = mouseoutBoxHeader;
		if(!notDrabable){
			div.onmousedown = initDragDropBox;
			div.style.cursor = 'move';
		}
		
		var image = document.createElement('IMG');
		image.id = 'dragableBoxExpand' + boxIndex;
		image.src = src_rightImage;
		image.style.visibility = 'hidden';	
		image.style.cursor = 'pointer';
		image.onmousedown = showHideBoxContent;	
		div.appendChild(image);
		
		var textSpan = document.createElement('SPAN');
		textSpan.id = 'dragableBoxHeader_txt' + boxIndex;
		div.appendChild(textSpan);
				
		parentObj.appendChild(div);	

		var closeLink = document.createElement('A');
		closeLink.style.cssText = 'float:right';
		closeLink.style.styleFloat = 'right';
		closeLink.id = 'dragableBoxCloseLink' + boxIndex;
		closeLink.innerHTML = 'x';
		closeLink.className = 'closeButton';
		closeLink.onmouseover = mouseover_CloseButton;
		closeLink.onmouseout = mouseout_CloseButton;
		closeLink.style.cursor = 'pointer';
		closeLink.style.visibility = 'hidden';
		closeLink.onmousedown = closeDragableBox;
		div.appendChild(closeLink);

			
		var image = document.createElement('IMG');
		image.src = src_refreshSource;
		image.id = 'dragableBoxRefreshSource' + boxIndex;
		image.style.cssText = 'float:right';
		image.style.styleFloat = 'right';
		image.style.visibility = 'hidden';
		image.onclick = refreshRSS;
		image.style.cursor = 'pointer';
		if(!externalUrl)image.style.display='none';
		div.appendChild(image);
	}
	
	function saveFeed(boxIndex)
	{
		var heightOfBox = dragableBoxesArray[boxIndex]['heightOfBox'] = document.getElementById('heightOfBox[' + boxIndex + ']').value;
		var intervalObj = dragableBoxesArray[boxIndex]['intervalObj'];
		if(intervalObj)clearInterval(intervalObj);
		
		if(heightOfBox && heightOfBox>40){
			var contentObj = document.getElementById('dragableBoxContent' + boxIndex);
			contentObj.style.height = heightOfBox + 'px';
			contentObj.setAttribute('heightOfBox',heightOfBox);
			contentObj.heightOfBox = heightOfBox;	
			if(document.all)contentObj.style.overflowY = 'auto';else contentObj.style.overflow='-moz-scrollbars-vertical;';
			if(opera)contentObj.style.overflow='auto';			
			
		}
		
		dragableBoxesArray[boxIndex]['rssUrl'] = document.getElementById('rssUrl[' + boxIndex + ']').value;
		dragableBoxesArray[boxIndex]['heightOfBox'] = heightOfBox;
		dragableBoxesArray[boxIndex]['maxRssItems'] = document.getElementById('maxRssItems[' + boxIndex + ']').value;
		dragableBoxesArray[boxIndex]['heightOfBox'] = document.getElementById('heightOfBox[' + boxIndex + ']').value;
		dragableBoxesArray[boxIndex]['minutesBeforeReload'] = document.getElementById('minutesBeforeReload[' + boxIndex + ']').value;
		
		if(dragableBoxesArray[boxIndex]['minutesBeforeReload'] && dragableBoxesArray[boxIndex]['minutesBeforeReload']>5){
			var tmpInterval = setInterval("reloadRSSData(" + boxIndex + ")",(dragableBoxesArray[boxIndex]['minutesBeforeReload']*1000*60));	
			dragableBoxesArray[boxIndex]['intervalObj'] = tmpInterval;
		}
		if (ajax.saveFeed (dragableBoxesArray[boxIndex]['rssUrl'], dragableBoxesArray[boxIndex]['heightOfBox'], dragableBoxesArray[boxIndex]['maxRssItems'], dragableBoxesArray[boxIndex]['minutesBeforeReload'], dragableBoxesArray[boxIndex]['uniqueIdentifier']))
			reloadRSSData(boxIndex);
		
		if(useCookiesToRememberRSSSources)setTimeout('saveCookies()',100);
		
	}
	
	function addRSSEditContent(parentObj)
	{

		var editLink = document.createElement('A');
		editLink.href = '#';
		editLink.onclick = cancelEvent;
		editLink.style.cssText = 'float:right';
		editLink.style.styleFloat = 'right';
		editLink.id = 'dragableBoxEditLink' + boxIndex;
		editLink.innerHTML = txt_editLink;
		editLink.className = 'dragableBoxEditLink';
		editLink.style.cursor = 'pointer';
		editLink.style.visibility = 'hidden';
		editLink.onmousedown = editRSSContent;
		parentObj.appendChild(editLink);	
				
		var editBox = document.createElement('DIV');
		editBox.style.clear='both';
		editBox.id = 'dragableBoxEdit' + boxIndex;
		editBox.style.display='none';
		
		var content = '<form><table cellpadding="1" cellspacing="1"><tr><td>Feed RSS:<\/td><td><input type="text" id="rssUrl[' + boxIndex + ']" value="' + dragableBoxesArray[boxIndex]['rssUrl'] + '" size="25" maxlength="255"><\/td><\/tr>'
		+ '<tr><td>Quantidade:<\/td><td width="30"><input type="text" id="maxRssItems[' + boxIndex + ']" onblur="this.value = this.value.replace(/[^0-9]/g,\'\');if(!this.value)this.value=' + dragableBoxesArray[boxIndex]['maxRssItems'] + '" value="' + dragableBoxesArray[boxIndex]['maxRssItems'] + '" size="2" maxlength="2"> itens<\/td><\/tr><tr><td>Altura (0 = auto):<\/td><td><input type="text" id="heightOfBox[' + boxIndex + ']" onblur="this.value = this.value.replace(/[^0-9]/g,\'\');if(!this.value)this.value=' + dragableBoxesArray[boxIndex]['heightOfBox'] + '" value="' + dragableBoxesArray[boxIndex]['heightOfBox'] + '" size="2" maxlength="3"> pixels<\/td><\/tr><tr>'
		+'<tr><td>Atualizar a cada:<\/td><td width="30"><input type="text" id="minutesBeforeReload[' + boxIndex + ']" onblur="this.value = this.value.replace(/[^0-9]/g,\'\');if(!this.value || this.value/1<5)this.value=' + dragableBoxesArray[boxIndex]['minutesBeforeReload'] + '" value="' + dragableBoxesArray[boxIndex]['minutesBeforeReload'] + '" size="2" maxlength="3">&nbsp;minutos<\/td><\/tr>'
		+'<tr><td><input type="button" onclick="saveFeed(' + boxIndex + ')" value="Save"><\/td><\/tr><\/table><\/form>';
		editBox.innerHTML = content;
		
		parentObj.appendChild(editBox);		
		
	}
	
	
	function addBoxContentContainer(parentObj,heightOfBox)
	{
		var div = document.createElement('DIV');
		div.className = 'dragableBoxContent';
		if(opera)div.style.clear='none';
		div.id = 'dragableBoxContent' + boxIndex;
		parentObj.appendChild(div);			
		if(heightOfBox && heightOfBox/1>40){
			div.style.height = heightOfBox + 'px';
			div.setAttribute('heightOfBox',heightOfBox);
			div.heightOfBox = heightOfBox;	
			if(document.all)div.style.overflowY = 'auto';else div.style.overflow='-moz-scrollbars-vertical;';
			if(opera)div.style.overflow='auto';
		}		
	}
	
	function addBoxStatusBar(parentObj)
	{
		var div = document.createElement('DIV');
		div.className = 'dragableBoxStatusBar';
		div.id = 'dragableBoxStatusBar' + boxIndex;
		parentObj.appendChild(div);	
		
		
	}
	
	function createABox(columnIndex,heightOfBox,externalUrl,uniqueIdentifier,notDragable)
	{
		boxIndex++;
		
		var maindiv = document.createElement('DIV');
		maindiv.className = 'dragableBox';
		maindiv.id = 'dragableBox' + boxIndex;
		
		var div = document.createElement('DIV');
		div.className='dragableBoxInner';
		maindiv.appendChild(div);
		
		
		addBoxHeader(div,externalUrl,notDragable);
		addBoxContentContainer(div,heightOfBox);
		addBoxStatusBar(div);
		
		var obj = document.getElementById('dragableBoxesColumn' + columnIndex);
		
		var subs = obj.getElementsByTagName('DIV');
		if(subs.length>0){
			obj.insertBefore(maindiv,subs[0]);
		}else{
			obj.appendChild(maindiv);
		}
		
		dragableBoxesArray[boxIndex] = new Array();
		dragableBoxesArray[boxIndex]['obj'] = maindiv;
		dragableBoxesArray[boxIndex]['parentObj'] = maindiv.parentNode;
		dragableBoxesArray[boxIndex]['uniqueIdentifier'] = uniqueIdentifier;
		dragableBoxesArray[boxIndex]['heightOfBox'] = heightOfBox;
		dragableBoxesArray[boxIndex]['boxState'] = 1;	// Expanded
		
		staticObjectArray[uniqueIdentifier] = boxIndex;
		
		return boxIndex;
		
	}
	
	function showRSSData(ajaxIndex,boxIndex)
	{
		var rssContent = ajaxObjects[ajaxIndex].response;
		tokens = rssContent.split(/\n\n/g);
		
		
		var headerTokens = tokens[0].split(/\n/g);
		if(headerTokens[0]=='0'){
			headerTokens[1] = '';
			headerTokens[0] = 'Invalid source';
			closeDragableBox(false,document.getElementById('dragableBoxHeader_txt' + boxIndex));
			return;			
		}
		document.getElementById('dragableBoxHeader_txt' + boxIndex).innerHTML = '<span>' + headerTokens[0] + '&nbsp;<\/span><span class="rssNumberOfItems">(' + headerTokens[1] + ')<\/span>';	// title
		
		var string = '<table cellpadding="1" cellspacing="0">';
		for(var no=1;no<tokens.length;no++){	// Looping through RSS items
			var itemTokens = tokens[no].split(/##/g);			
			string = string + '<tr><td><img src="' + src_smallRightArrow + '"><td><p class=\"boxItemHeader\"><a class=\"boxItemHeader\" href="' + itemTokens[3] + '" onclick="var w = window.open(this.href);return false">' + itemTokens[0] + '<\/a><\/p><\/td><\/tr>';		
		}
		string = string + '<\/table>';
		document.getElementById('dragableBoxContent' + boxIndex).innerHTML = string;
		showStatusBarMessage(boxIndex,'');
		ajaxObjects[ajaxIndex] = false;
	}
	
	function createHelpObjects()
	{
		/* Creating rectangle div */
		rectangleDiv = document.createElement('DIV');
		rectangleDiv.id='rectangleDiv';
		rectangleDiv.style.display='none';
		document.body.appendChild(rectangleDiv);
		
		 
	}
	
	function cancelSelectionEvent(e)
	{
		if(document.all)e = event;
		
		if (e.target) source = e.target;
			else if (e.srcElement) source = e.srcElement;
			if (source.nodeType == 3) // defeat Safari bug
				source = source.parentNode;
		if(source.tagName.toLowerCase()=='input')return true;
						
		if(dragDropCounter>=0)return false; else return true;	
		
	}
	
	function cancelEvent()
	{
		return false;
	}
	
	function initEvents()
	{
		document.body.onmousemove = moveDragableElement;
		document.body.onmouseup = stop_dragDropElement;
		document.body.onselectstart = cancelSelectionEvent;

		document.body.ondragstart = cancelEvent;	
		
		documentHeight = document.documentElement.clientHeight;	
		
	}
	
	
	function createFeed(formObj)
	{
		showWait ();
		
		var url = formObj.rssUrl.value;
		var items = formObj.items.value;
		var height = formObj.height.value;
		var reloadInterval = formObj.reloadInterval.value;
		
		uniqueIdentifier = ajax.saveFeed (url, height, items, reloadInterval);
		
		if (!uniqueIdentifier)
		{
			ajax.showMessages ();
			
			tAjax.delay (function () { hideWait (); });
			
			return false;
		}
		
		showSearch ();
			
		document.getElementById ('formAddFeed').reset ();
		
		if(isNaN(height) || height/1<40)height = false;	
		if(isNaN(reloadInterval) || reloadInterval/1<5)reloadInterval = false;
		createARSSBox(url,1,height,items,reloadInterval,uniqueIdentifier);
		
		tAjax.delay (function () { hideWait (); });
	}
	
function createRSSBoxesFromCookie() 
   { 
      var tmpArray = new Array(); 
      var cookieValue = Get_Cookie(nameOfCookie + '0'); 
      cookieCounter=0; 
      while(cookieValue && cookieValue!='') 
        { 
            var items = cookieValue.split('#;#'); 
         var index = items[0]; 
         if(!items[0])index = items[5]; 
         if(items.length>1 && !tmpArray[index]) 
            { 
                tmpArray[index] = true; 
            createARSSBox(items[0],items[1],items[3],items[2],items[4],items[5],items[6]); 
            cookieRSSSources[items[0]]=cookieCounter-1; 
         } 
            else 
            { 
            cookieCounter++; 
         } 
         var cookieValue = Get_Cookie(nameOfCookie + cookieCounter); 
      } 
   }

	
	/* Clear cookies */
	
	function clearCookiesForDragableBoxes()
	{
		var cookieValue = Get_Cookie(nameOfCookie);
		while(cookieValue && cookieValue!=''){
			Set_Cookie(nameOfCookie + cookieCounter,'',-500);
			cookieCounter++;
			var cookieValue = Get_Cookie(nameOfCookie + cookieCounter);
		}		
		
	}
	
	/* Delete all boxes */
	
	function deleteAllDragableBoxes()
	{
		var divs = document.getElementsByTagName('DIV');
		for(var no=0;no<divs.length;no++){
			if(divs[no].className=='dragableBox')closeDragableBox(false,divs[no]);	
		}
			
	}
	
	/* Reset back to default settings */
	
	function resetDragableBoxes()
	{
		cookieCounter = 0;
		clearCookiesForDragableBoxes();
		
		deleteAllDragableBoxes();
		cookieCounter = 0;
		cookieRSSSources = new Array();
		createDefaultBoxes();
	}
	
	function hideHeaderOptionsForStaticBoxes(boxIndex)
	{
		if(document.getElementById('dragableBoxRefreshSource' + boxIndex))document.getElementById('dragableBoxRefreshSource' + boxIndex).style.display='none';
		if(document.getElementById('dragableBoxCloseLink' + boxIndex))document.getElementById('dragableBoxCloseLink' + boxIndex).style.display='none';		
		if(document.getElementById('dragableBoxEditLink' + boxIndex))document.getElementById('dragableBoxEditLink' + boxIndex).style.display='none';		
	}
		
	/* Disable drag for a box */
	function disableBoxDrag(boxIndex)
	{
			document.getElementById('dragableBoxHeader' + boxIndex).onmousedown = '';
			document.getElementById('dragableBoxHeader' + boxIndex).style.cursor = 'default';		
		
	}
	
	
	function initDragableBoxesScript()
	{
		createColumns();	// Always the first line of this function
		createHelpObjects();	// Always the second line of this function
		initEvents();	// Always the third line of this function
		
		if(useCookiesToRememberRSSSources) createRSSBoxesFromCookie();	// Create RSS boxes from cookies
		
		createDefaultBoxes();	// Create default boxes.		
	}

	
	
	
	//window.onload = initDragableBoxesScript;
/*
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
 * in FIPS PUB 180-1
 * Version 2.1a Copyright Paul Johnston 2000 - 2002.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for details.
 */

/*
 * Configurable variables. You may need to tweak these to be compatible with
 * the server-side, but the defaults work in most cases.
 */
var hexcase = 0;  /* hex output format. 0 - lowercase; 1 - uppercase        */
var b64pad  = ""; /* base-64 pad character. "=" for strict RFC compliance   */
var chrsz   = 8;  /* bits per input character. 8 - ASCII; 16 - Unicode      */

/*
 * These are the functions you'll usually want to call
 * They take string arguments and return either hex or base-64 encoded strings
 */
function hex_sha1(s){return binb2hex(core_sha1(str2binb(s),s.length * chrsz));}
function b64_sha1(s){return binb2b64(core_sha1(str2binb(s),s.length * chrsz));}
function str_sha1(s){return binb2str(core_sha1(str2binb(s),s.length * chrsz));}
function hex_hmac_sha1(key, data){ return binb2hex(core_hmac_sha1(key, data));}
function b64_hmac_sha1(key, data){ return binb2b64(core_hmac_sha1(key, data));}
function str_hmac_sha1(key, data){ return binb2str(core_hmac_sha1(key, data));}

/*
 * Perform a simple self-test to see if the VM is working
 */
function sha1_vm_test()
{
  return hex_sha1("abc") == "a9993e364706816aba3e25717850c26c9cd0d89d";
}

/*
 * Calculate the SHA-1 of an array of big-endian words, and a bit length
 */
function core_sha1(x, len)
{
  /* append padding */
  x[len >> 5] |= 0x80 << (24 - len % 32);
  x[((len + 64 >> 9) << 4) + 15] = len;

  var w = Array(80);
  var a =  1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d =  271733878;
  var e = -1009589776;

  for(var i = 0; i < x.length; i += 16)
  {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;
    var olde = e;

    for(var j = 0; j < 80; j++)
    {
      if(j < 16) w[j] = x[i + j];
      else w[j] = rol(w[j-3] ^ w[j-8] ^ w[j-14] ^ w[j-16], 1);
      var t = safe_add(safe_add(rol(a, 5), sha1_ft(j, b, c, d)),
                       safe_add(safe_add(e, w[j]), sha1_kt(j)));
      e = d;
      d = c;
      c = rol(b, 30);
      b = a;
      a = t;
    }

    a = safe_add(a, olda);
    b = safe_add(b, oldb);
    c = safe_add(c, oldc);
    d = safe_add(d, oldd);
    e = safe_add(e, olde);
  }
  return Array(a, b, c, d, e);

}

/*
 * Perform the appropriate triplet combination function for the current
 * iteration
 */
function sha1_ft(t, b, c, d)
{
  if(t < 20) return (b & c) | ((~b) & d);
  if(t < 40) return b ^ c ^ d;
  if(t < 60) return (b & c) | (b & d) | (c & d);
  return b ^ c ^ d;
}

/*
 * Determine the appropriate additive constant for the current iteration
 */
function sha1_kt(t)
{
  return (t < 20) ?  1518500249 : (t < 40) ?  1859775393 :
         (t < 60) ? -1894007588 : -899497514;
}

/*
 * Calculate the HMAC-SHA1 of a key and some data
 */
function core_hmac_sha1(key, data)
{
  var bkey = str2binb(key);
  if(bkey.length > 16) bkey = core_sha1(bkey, key.length * chrsz);

  var ipad = Array(16), opad = Array(16);
  for(var i = 0; i < 16; i++)
  {
    ipad[i] = bkey[i] ^ 0x36363636;
    opad[i] = bkey[i] ^ 0x5C5C5C5C;
  }

  var hash = core_sha1(ipad.concat(str2binb(data)), 512 + data.length * chrsz);
  return core_sha1(opad.concat(hash), 512 + 160);
}

/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */
function safe_add(x, y)
{
  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return (msw << 16) | (lsw & 0xFFFF);
}

/*
 * Bitwise rotate a 32-bit number to the left.
 */
function rol(num, cnt)
{
  return (num << cnt) | (num >>> (32 - cnt));
}

/*
 * Convert an 8-bit or 16-bit string to an array of big-endian words
 * In 8-bit function, characters >255 have their hi-byte silently ignored.
 */
function str2binb(str)
{
  var bin = Array();
  var mask = (1 << chrsz) - 1;
  for(var i = 0; i < str.length * chrsz; i += chrsz)
    bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (32 - chrsz - i%32);
  return bin;
}

/*
 * Convert an array of big-endian words to a string
 */
function binb2str(bin)
{
  var str = "";
  var mask = (1 << chrsz) - 1;
  for(var i = 0; i < bin.length * 32; i += chrsz)
    str += String.fromCharCode((bin[i>>5] >>> (32 - chrsz - i%32)) & mask);
  return str;
}

/*
 * Convert an array of big-endian words to a hex string.
 */
function binb2hex(binarray)
{
  var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
  var str = "";
  for(var i = 0; i < binarray.length * 4; i++)
  {
    str += hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8+4)) & 0xF) +
           hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8  )) & 0xF);
  }
  return str;
}

/*
 * Convert an array of big-endian words to a base-64 string
 */
function binb2b64(binarray)
{
  var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var str = "";
  for(var i = 0; i < binarray.length * 4; i += 3)
  {
    var triplet = (((binarray[i   >> 2] >> 8 * (3 -  i   %4)) & 0xFF) << 16)
                | (((binarray[i+1 >> 2] >> 8 * (3 - (i+1)%4)) & 0xFF) << 8 )
                |  ((binarray[i+2 >> 2] >> 8 * (3 - (i+2)%4)) & 0xFF);
    for(var j = 0; j < 4; j++)
    {
      if(i * 8 + j * 6 > binarray.length * 32) str += b64pad;
      else str += tab.charAt((triplet >> 6*(3-j)) & 0x3F);
    }
  }
  return str;
}
