function openPopup (url, name, width, height, scrolling, status, resizable)
{
	openPopUp (url, name, width, height, scrolling, status, resizable);
}

function openPopUp (url, name, width, height, scrolling, status, resizable)
{
	if (!width)
		width = screen.availWidth - 10;
	
	if (!height)
		height = screen.availHeight - 40;
	
	if (!scrolling)
		scrolling = 'auto';
		
	if (!status)
		status = 'no';
	
	if (!resizable)
		resizable = 'yes';
	
	PopUp = window.open (url, name, 'width=' + width + ',height=' + height + ',scrollbars=' + scrolling + ',toolbar=no,location=no,status=' + status + ',menubar=no,resizable=' + resizable + ',left=100,top=100');
}

function openPrintPopup (queryString) 
{
	PopUp = window.open(queryString, 'Imprimir', 'width=500,height=300,toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,left=100,top=100');
}

function changeAction (newAction, formName)
{
	var form = document.getElementById (formName);
	
	form.action = newAction;
	
	form.submit ();
}

function start ()
{
	if (typeof window.event != 'undefined')
		document.onkeydown = function ()
		{
			if(event.keyCode == 8)
				window.event.keyCode = 127;
		}
	
	resizeBody ();
	
	parent.banner.enableMenu ();
	
	hideWait ();
	
	if (this.runOnLoad == null)
		return false;
	
	runOnLoad ();
}

function end ()
{
	parent.banner.disableMenu ();
	
	showWait ();
	
	if (this.runOnUnload == null)
		return false;
	
	runOnUnload ();
}

function resizeBody ()
{
	var height = 0;
	
	if(!window.innerWidth)
		if(!(document.documentElement.clientWidth == 0))
			height = document.documentElement.clientHeight;
		else
			height = document.body.clientHeight;
	else
		height = window.innerHeight;
	
	document.getElementById ('idBody').style.height = (height - 78) + 'px';
}

function sendLetter (counter, character)
{
	var hidden = document.getElementById ('keyboardHiddenValue' + counter);
	
	if (character)
		hidden.value = character;
}

function showWait ()
{
	parent.banner.document.getElementById('idWait').style.display = 'block';
}

function hideWait ()
{
	parent.banner.document.getElementById('idWait').style.display = 'none';
}

var searchParams = false;

function showSearch ()
{
	var div = document.getElementById ('idSearch');
	var params;
	
	if (div.style.display == '')
	{
		div.style.display = 'none';
		
		if (searchParams)
			if (params = document.getElementById ('idSearchParams'))
				params.style.display = '';
	}
	else
	{
		if (params = document.getElementById ('idSearchParams'))
			if (params.style.display == '')
			{
				params.style.display = 'none';
				searchParams = true;
			}
		
		div.style.display = '';
	}
}

function showGroup (id)
{
	var fieldset = document.getElementById ('group_' + id);
	
	if (fieldset.className == 'formGroup')
		fieldset.className = 'formGroupCollapse';
	else
		fieldset.className = 'formGroup';
}

function message (content, w, h, inText, title, type)
{
	if (title == null) title = '';
	
	if (w == null) w = 500;
	
	if (h == null) h = 120;
	
	if (inText == null || inText)
	{
		switch (type)
		{
			case 'SUCCESS':
				color = '090';
				image = 'success.png';
				break;
			
			case 'ERROR':
				color = '900';
				image = 'error.png';
				break;
			
			case 'WARNING':
			default:
				color = 'A85C00';
				image = 'warning.png';
		}
		
		var content = '<table border="0">\
			<tr>\
				<td rowspan="2">\
					<img src="titan.php?target=loadFile&amp;file=interface/image/' + image + '" border="0" style="margin-right: 10px;" />\
				</td>\
				<td style="color: #' + color + '; font-family: Helvetica, sans-serif, Arial; font-weight: bold; font-size: 12px; text-align: justify;">' + content + '</td>\
			</tr>\
		</table>';
	}
	
	Modalbox.show (content, { title: title, width: w, height: h });
}

function rssLink (url)
{
	var monitor = '';
	
	if (tAjax.tableExists ('_rss'))
		monitor = '<input type="button" class="button" value="Monitorar" style="color: #DA5E29; border-color: #DA5E29;" onclick="JavaScript: addFeed (\'' + url + '\');" />';
	
	var source = '<table border="0">\
		<tr>\
			<td rowspan="2">\
				<img src="titan.php?target=loadFile&amp;file=interface/image/rss.png" border="0" style="margin-right: 10px;" />\
			</td>\
			<td>\
				<div id="copy_clipboard" style="color: #900; font-weight: bold; text-align: left; width: 300px; height: 35px; line-height: 20px; white-space: nowrap; overflow: scroll; margin: 0 auto; border: #CCC 1px solid; padding: 5px;">' + url + '</div>\
			</td>\
		</tr>\
		<tr>\
			<td style="text-align: center;">\
				' + monitor + '\
				<input type="button" class="button" value="Copiar para o Clipboard" onclick="JavaScript: clipboard (\'copy_clipboard\');" />\
				<input type="button" class="button" value="Fechar" onclick="JavaScript: Modalbox.hide ();" />\
			</td>\
		</tr>\
	</table>';
	
	Modalbox.show (source, { title: 'Feed RSS', width: 460 });
}

function addFeed (url)
{
	 Modalbox.hide ();
	 
	 showWait ();
	 
	 tAjax.addFeed (url);
	 
	 tAjax.delay (function () { hideWait (); });
}

function clipboard (div)
{
	if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion >= "4.0")
	{
		for (i = 0 ; i < document.all.length ; i++)
			document.all(i).unselectable = "on";
	
		document.getElementById(div_id).unselectable = "off";
		document.getElementById(div_id).focus();
		
		document.execCommand('SelectAll');
		document.execCommand('Copy');
		
		for (i=0; i<document.all.length; i++)
			document.all(i).unselectable = "off";
	}
	else
		alert("Desculpe-nos, este recurso só está disponível para Internet Exploder.\nPara os demais browsers, selecione o link acima e pressione CTRL+C.");
}

var loadInPlaceIds = new Array ();
var loadInPlaceEls = new Array ();

function loadInPlace (id, element, button)
{
	if (typeof (element) == 'undefined')
		return false;
	
	var content = $('_CONTENT_' + id);
	
	var assign = element.id;
	
	for (var i = 0 ; i < loadInPlaceEls.length ; i++)
	{
		if (loadInPlaceEls [i] == assign)
		{
			button.onclick = function () { showInPlace (id, $(assign)); };
			
			hideWait ();
			
			showInPlace (id, $(assign));
			
			return false;
		}
		
		$(loadInPlaceEls [i]).style.display = 'none';
		$('_ROW_' + loadInPlaceIds [i]).style.display = 'none';
		$('_ITEM_' + loadInPlaceIds [i]).className = 'cTableItem';
	}
	
	loadInPlaceEls [i] = assign;
	loadInPlaceIds [i] = id;
	
	content.appendChild (element);
	
	button.onclick = function () { showInPlace (id, element); };
	
	$('_ITEM_' + id).className = 'cTableItemActive';
	$('_ROW_' + id).style.display = '';
	
	return false;
}

function showInPlace (id, element)
{
	var row = $('_ROW_' + id);
	var itm = $('_ITEM_' + id);
	
	if (element.style.display == '')
	{
		element.style.display = 'none';
		row.style.display = 'none';
		itm.className = 'cTableItem';
	}
	else
	{
		for (var i = 0 ; i < loadInPlaceEls.length ; i++)
		{
			$(loadInPlaceEls [i]).style.display = 'none';
			$('_ROW_' + loadInPlaceIds [i]).style.display = 'none';
			$('_ITEM_' + loadInPlaceIds [i]).className = 'cTableItem';
		}
		
		row.style.display = '';
		element.style.display = '';
		itm.className = 'cTableItemActive';
	}
	
	return false;
}

/* TODO: Send this function to [repos]/icon/InPlace/_js.php */

function inPlaceAction (id, action, section, button)
{
	var assign = '_IP_ACTION_' + id + '_' + action + '_';
	
	showWait ();
	
	var iframe = document.createElement ('iframe');
	iframe.id = assign;
	iframe.className = 'inPlaceAction';
	iframe.style.height = '50px;';
	iframe.style.display = '';
	iframe.src = 'titan.php?target=inPlace&toSection=' + section + '&toAction=' + action + '&itemId=' + id + '&assign=' + assign;
	
	loadInPlace (id, iframe, button);
}

/* TODO: Send this function to [repos]/icon/Status/_js.php */

function inPlaceStatus (icon, id, table, primary, column, msg, button, opts)
{
	var assign = '_IP_STATUS_' + icon + '_' + id + '_' + table + '_' + column + '_', row, col, b, aux;
	
	var element = document.createElement ('table');
	element.id = assign;
	element.className = 'inPlaceStatus';
	element.style.display = '';
	
	row = document.createElement ('tr');
	
	if (msg != '')
	{
		col = document.createElement ('td');
		
		col.innerHTML = msg;
		
		row.appendChild (col);
	}
	
	var actual = tAjax.inPlaceStatusValue (id, table, primary, column);
	
	col = document.createElement ('td');
	col.style.textAlign = 'right';
	
	for (var i = 0; i < opts.length; i++)
	{
		if (opts [i].value == actual)
			continue;
		
		b = document.createElement ('input');
		b.type = 'button';
		b.className = 'button';
		b.value = opts [i].label;
		b.style.color = opts [i].color != '' ? opts [i].color : '#575556';
		b.style.borderColor = opts [i].color != '' ? opts [i].color : '#575556';
		
		eval ("b.onclick = function () { inPlaceStatusChange ('" + id + "', '" + table + "', '" + primary + "', '" + column + "', '" + opts [i].value + "', '" + assign + "'); }");
		
		col.appendChild (b);
	}
	
	row.appendChild (col);
	
	element.appendChild (row);
	
	loadInPlace (id, element, button);
}

function inPlaceStatusChange (id, table, primary, column, value, assign)
{
	showWait ();
	
	$(assign).style.display = 'none';
	
	tAjax.inPlaceStatusChange (id, table, primary, column, value, function () {
		window.location.reload ();
	});
	
	return false;
}

function crossEvent (e)
{
	e = e ? e : (window.event ? window.event : null);
	
	if (e)
	{
		this.originalEvent = e;
		this.type = e.type;
		this.screenX = e.clientX;
		this.screenY = e.clientY;
	
		// IE: srcElement
		this.target = e.target ? e.target : e.srcElement;
	
		// N4: modificadores
		if (e.modifiers)
		{
			this.altKey   = e.modifiers & Event.ALT_MASK;
			this.ctrlKey  = e.modifiers & Event.CONTROL_MASK;
			this.shiftKey = e.modifiers & Event.SHIFT_MASK;
			this.metaKey  = e.modifiers & Event.META_MASK;
		}
		else
		{
			this.altKey   = e.altKey;
			this.ctrlKey  = e.ctrlKey;
			this.shiftKey = e.shiftKey;
			this.metaKey  = e.metaKey;
		}
	
		// N4: which // N6+: charCode
		this.charCode = !isNaN(e.charCode) ? e.charCode : !isNaN(e.keyCode) ? e.keyCode : e.which;
		this.keyCode = !isNaN(e.keyCode) ? e.keyCode : e.which;
		this.button = !isNaN(e.button) ? e.button: !isNaN(e.which) ? e.which-1 : null;
		this.debug = "c:" + e.charCode + " k:" + e.keyCode + " b:" + e.button + " w:" + e.which;
	}
}

function sendBugReport ()
{
	showWait ();
	
	var formData = xoad.html.exportForm ('bugReport');
	
	tAjax.sendBugReport (formData, function () {
		tAjax.showMessages ();
		
		Modalbox.hide ();
		
		hideWait ();
	});
}

function changeLanguage (language)
{
	showWait ();
	
	tAjax.changeLanguage (language, function () {
		tAjax.showMessages ();
		
		parent.reloadFrames ();
	});
}

function readAlert (id)
{
	tAjax.readAlert (id, function () {
		$('_TITAN_ALERT_' + id).className = 'read';
		
		$('_TITAN_ALERT_' + id).children[0].onmouseover = function () { return false };
		
		parent.banner.verifyAlerts ();
	});
	
	return false;
}

function deleteAlert (id)
{
	showWait ();
	
	tAjax.deleteAlert (id, function () {
		var parent = $('_TITAN_ALERT_' + id).parentNode;
	
		parent.removeChild ($('_TITAN_ALERT_' + id));
		
		if (!parent.children.length)
			Modalbox.hide ();
		
		hideWait ();
	});
}

function copyItem (id, action, section, button)
{
	showWait ();
	
	var newId = tAjax.copyItem (id);
	
	if (!newId)
		tAjax.delay (function () {
			tAjax.showMessages ();
			
			hideWait ();
		});
	else
		document.location = 'titan.php?target=body&toSection=' + section + '&toAction=' + action + '&itemId=' + newId;
}

function formatMoney (value)
{
	var numbers = (value.toString ()).split ('.');
	
	var buffer = '', aux = '';
	
	while (true)
	{
		aux = (numbers [0] % 1000).toString ();
		
		buffer = aux + buffer;
		
		numbers [0] = parseInt (numbers [0] / 1000);
		
		if (!numbers [0])
			break;
		
		switch (aux.length)
		{
			case 1:
				buffer = '.00' + buffer;
				break;
			
			case 2:
				buffer = '.0' + buffer;
				break;
			
			default:
				buffer = '.' + buffer;
		}
	}
	
	if (typeof (numbers [1]) == 'undefined')
		numbers [1] = '00';
	else if (numbers [1].length < 2)
		numbers [1] += '0';
	
	return buffer + ',' + numbers [1];
}

function deleteItemFromShoppingCart (id)
{
	showWait ();
	
	tAjax.deleteItemFromShoppingCart (id, function () {
		var parent = $('_TITAN_SHOP_' + id).parentNode;
	
		parent.removeChild ($('_TITAN_SHOP_' + id));
		
		if (parent.children.length <= 2)
			Modalbox.hide ();
		else
			updateShoppingCart ();
		
		hideWait ();
	});
}

function clone (obj)
{
	if (null == obj || 'object' != typeof obj)
		return obj;
	
	if (obj instanceof Date)
	{
		var copy = new Date ();
		
		copy.setTime (obj.getTime ());
		
		return copy;
	}
	
	if (obj instanceof Array)
	{
		var copy = [];
		
		for (var i = 0, len = obj.length; i < len; i++)
			copy [i] = clone (obj [i]);
		
		return copy;
	}
	
	if (obj instanceof Object)
	{
		var copy = {};
		
		for (var attr in obj)
			if (obj.hasOwnProperty (attr)) copy [attr] = clone (obj [attr]);
		
		return copy;
	}
	
	return null;
}
var changeMenuSpeed = 10;

function backMenu(idCurrent, idNext) {

	var obj  = document.getElementById('menuMain_' + idNext);
	var objPrevious = document.getElementById('menuMain_' + idCurrent);
	
	var left = obj.style.left.replace('px','')/1;
	var leftPrevious = objPrevious.style.left.replace('px','')/1;
	
	left += changeMenuSpeed;
	leftPrevious += changeMenuSpeed;
	
	if(left > 0)
	{
		left = 0;
		leftPrevious = 200;
	}
	
	objPrevious.style.left = leftPrevious + 'px';
	obj.style.left = left + 'px';
	
	
	if(left < 0)
		setTimeout('backMenu (\'' + idCurrent + '\',\'' + idNext + '\')', 5);
}

function slideMenu (idCurrent, idNext, menuSpeed)
{
	if (!menuSpeed)
		menuSpeed = changeMenuSpeed;
	
	var obj  = document.getElementById('menuMain_' + idNext);
	var objPrevious = document.getElementById('menuMain_' + idCurrent);
	
	obj.style.display = 'block';
	
	var left = obj.style.left.replace('px','')/1;
	var leftPrevious = objPrevious.style.left.replace('px','')/1;
	
	left -= menuSpeed;
	leftPrevious -= menuSpeed;
	
	if(left < 0) 
	{
		left = 0;
		leftPrevious = -200;
	}
	
	obj.style.left = left + 'px';
	objPrevious.style.left = leftPrevious + 'px';
	
	if(left > 0)
		setTimeout('slideMenu (\'' + idCurrent + '\',\'' + idNext + '\',\'' + menuSpeed + '\')', 5);
}

function showMenu (obj, bottom)
{
	var menu = document.getElementById ('menuBox');
	
	modalMsg.close ();
	
	if (window.Modalbox && Modalbox.initialized)
		Modalbox.hide ();
	
	if (menu.style.display == 'block')
		menu.style.display = 'none';
	else
	{
		if (bottom == 1)
		{
			var ns = (navigator.appName.indexOf("Netscape") != -1);
			var aux = ns ? pageYOffset + innerHeight : document.body.scrollTop + document.body.clientHeight;
			
			menu.style.left = (obj.offsetLeft - 90) + 'px';
			
			menu.style.top = (aux - menuHeight - 58) + 'px';
		}
		else
		{
			menu.style.left = (obj.offsetLeft - 90) + 'px';
			menu.style.top = (obj.offsetTop - 4) + 'px';
		}
		
		menu.style.display = 'block';
	}
	
	return true;
}
function bissext (year)
{
    global.Date.bissext (year);
}

function dateValidate (id)
{
	global.Date.validate (id);
}

function alterTime (id)
{
	global.Time.alter (id);
}

function formatInteger (campo, e)
{
	global.Integer.format (campo, e);
}

function formatAmount (campo, e)
{
	global.Amount.format (campo, e);
}

function formatFloat (campo, e)
{
	global.Float.format (campo, e);
}

function formatCpf (campo, e)
{
	global.Cpf.format (campo, e);
}

function formatRga (campo, e)
{
	global.Rga.format (campo, e);
}

function formatCnpj (campo, e)
{	
	global.Cnpj.format (campo, e);
}

function formatCep (campo, e)
{
	global.Cep.format (campo, e);
}

function loadCity (cityId, stateId)
{
	global.City.load (cityId, stateId);
}

function alterCheckbox (id)
{
	global.Boolean.alter (id);
}

function passwordValidate (assign)
{
	global.Password.validate (assign);
}

function showCalendar (id)
{
	global.Date.showCalendar (id);
}

function loadFile (fileId, fieldId)
{
	global.File.load (fileId, fieldId);
}

function enableUnsetFile (fieldId)
{
	global.File.enableUnset (fieldId);
}

function disableUnsetFile (fieldId)
{
	global.File.disableUnset (fieldId);
}

function unsetFile (fieldId, hiddenLabel)
{
	global.File.unset (fieldId, hiddenLabel);
}

function uploadFile (fieldId)
{
	global.File.upload (fieldId);
}

function getUploadFilter (fieldId)
{
	global.File.getFilter (fieldId);
}

function addUploadFilter (fieldId, mimes)
{
	global.File.addFilter (fieldId);
}

function showCollectionCreate (fieldId, fatherId)
{
	global.Collection.create (fieldId, fatherId);
}

function saveCollection (fatherId, fatherColumn, fieldId, file)
{
	global.Collection.save (fatherId, fatherColumn, fieldId, file);
}

function addRowCollection (itemId, fieldId, file)
{
	global.Collection.addRow (itemId, fieldId, file);
}

function deleteCollection (fieldId, file, itemId)
{
	global.Collection.delRow (fieldId, file, itemId);
}

function selectSearch (fieldId)
{
	global.Select.showSearch (fieldId);
}

function selectChoose (fieldId, itemId, text)
{
	global.Select.choose (fieldId, itemId, text);
}

function clearSearch (fieldId)
{
	global.Select.clear (fieldId);
}
/* --- BoxOver ---
/* --- v 2.0 16th April 2006
By Oliver Bryant with help of Matthew Tagg
http://boxover.swazz.org */

if (typeof document.attachEvent!='undefined') {
   window.attachEvent('onload',init);
   document.attachEvent('onmousemove',moveMouse);
   document.attachEvent('onclick',checkMove); }
else {
   window.addEventListener('load',init,false);
   document.addEventListener('mousemove',moveMouse,false);
   document.addEventListener('click',checkMove,false);
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

function init() {
	oDv.appendChild(dvHdr);
	oDv.appendChild(dvBdy);
	oDv.style.position="absolute";
	oDv.style.visibility='hidden';
	document.body.appendChild(oDv);	
}

function defHdrStyle() {
	dvHdr.innerHTML='<img  style="vertical-align:middle"  src="info.gif">&nbsp;&nbsp;'+dvHdr.innerHTML;
	dvHdr.style.fontWeight='bold';
	dvHdr.style.width='150px';
	dvHdr.style.fontFamily='arial';
	dvHdr.style.border='1px solid #A5CFE9';
	dvHdr.style.padding='3';
	dvHdr.style.fontSize='11';
	dvHdr.style.color='#4B7A98';
	dvHdr.style.background='#D5EBF9';
	dvHdr.style.filter='alpha(opacity=85)'; // IE
	dvHdr.style.opacity='0.85'; // FF
}

function defBdyStyle() {
	dvBdy.style.borderBottom='1px solid #A5CFE9';
	dvBdy.style.borderLeft='1px solid #A5CFE9';
	dvBdy.style.borderRight='1px solid #A5CFE9';
	dvBdy.style.width='150px';
	dvBdy.style.fontFamily='arial';
	dvBdy.style.fontSize='11';
	dvBdy.style.padding='3';
	dvBdy.style.color='#1B4966';
	dvBdy.style.background='#FFFFFF';
	dvBdy.style.filter='alpha(opacity=85)'; // IE
	dvBdy.style.opacity='0.85'; // FF
}

function checkElemBO(txt) {
if (!txt || typeof(txt) != 'string') return false;
if ((txt.indexOf('header')>-1)&&(txt.indexOf('body')>-1)&&(txt.indexOf('[')>-1)&&(txt.indexOf('[')>-1)) 
   return true;
else
   return false;
}

function scanBO(curNode) {
	  if (checkElemBO(curNode.title)) {
         curNode.boHDR=getParam('header',curNode.title);
         curNode.boBDY=getParam('body',curNode.title);
			curNode.boCSSBDY=getParam('cssbody',curNode.title);			
			curNode.boCSSHDR=getParam('cssheader',curNode.title);
			curNode.IEbugfix=(getParam('hideselects',curNode.title)=='on')?true:false;
			curNode.fixX=parseInt(getParam('fixedrelx',curNode.title));
			curNode.fixY=parseInt(getParam('fixedrely',curNode.title));
			curNode.absX=parseInt(getParam('fixedabsx',curNode.title));
			curNode.absY=parseInt(getParam('fixedabsy',curNode.title));
			curNode.offY=(getParam('offsety',curNode.title)!='')?parseInt(getParam('offsety',curNode.title)):10;
			curNode.offX=(getParam('offsetx',curNode.title)!='')?parseInt(getParam('offsetx',curNode.title)):10;
			curNode.fade=(getParam('fade',curNode.title)=='on')?true:false;
			curNode.fadespeed=(getParam('fadespeed',curNode.title)!='')?getParam('fadespeed',curNode.title):0.04;
			curNode.delay=(getParam('delay',curNode.title)!='')?parseInt(getParam('delay',curNode.title)):0;
			if (getParam('requireclick',curNode.title)=='on') {
				curNode.requireclick=true;
				document.all?curNode.attachEvent('onclick',showHideBox):curNode.addEventListener('click',showHideBox,false);
				document.all?curNode.attachEvent('onmouseover',hideBox):curNode.addEventListener('mouseover',hideBox,false);
			}
			else {// Note : if requireclick is on the stop clicks are ignored   			
   			if (getParam('doubleclickstop',curNode.title)!='off') {
   				document.all?curNode.attachEvent('ondblclick',pauseBox):curNode.addEventListener('dblclick',pauseBox,false);
   			}	
   			if (getParam('singleclickstop',curNode.title)=='on') {
   				document.all?curNode.attachEvent('onclick',pauseBox):curNode.addEventListener('click',pauseBox,false);
   			}
   		}
			curNode.windowLock=getParam('windowlock',curNode.title).toLowerCase()=='off'?false:true;
			curNode.title='';
			curNode.hasbox=1;
	   }
	   else
	      curNode.hasbox=2;   
}


function getParam(param,list) {
	var reg = new RegExp('([^a-zA-Z]' + param + '|^' + param + ')\\s*=\\s*\\[\\s*(((\\[\\[)|(\\]\\])|([^\\]\\[]))*)\\s*\\]');
	var res = reg.exec(list);
	var returnvar;
	if(res)
		return res[2].replace('[[','[').replace(']]',']');
	else
		return '';
}

function Left(elem){	
	var x=0;
	if (elem.calcLeft)
		return elem.calcLeft;
	var oElem=elem;
	while(elem){
		 if ((elem.currentStyle)&& (!isNaN(parseInt(elem.currentStyle.borderLeftWidth)))&&(x!=0))
		 	x+=parseInt(elem.currentStyle.borderLeftWidth);
		 x+=elem.offsetLeft;
		 elem=elem.offsetParent;
	  } 
	oElem.calcLeft=x;
	return x;
	}

function Top(elem){
	 var x=0;
	 if (elem.calcTop)
	 	return elem.calcTop;
	 var oElem=elem;
	 while(elem){		
	 	 if ((elem.currentStyle)&& (!isNaN(parseInt(elem.currentStyle.borderTopWidth)))&&(x!=0))
		 	x+=parseInt(elem.currentStyle.borderTopWidth); 
		 x+=elem.offsetTop;
	         elem=elem.offsetParent;
 	 } 
 	 oElem.calcTop=x;
 	 return x;
 	 
}

var ah,ab;
function applyStyles() {
	if(ab)
		oDv.removeChild(dvBdy);
	if (ah)
		oDv.removeChild(dvHdr);
	dvHdr=document.createElement("div");
	dvBdy=document.createElement("div");
	CBE.boCSSBDY?dvBdy.className=CBE.boCSSBDY:defBdyStyle();
	CBE.boCSSHDR?dvHdr.className=CBE.boCSSHDR:defHdrStyle();
	dvHdr.innerHTML=CBE.boHDR;
	dvBdy.innerHTML=CBE.boBDY;
	ah=false;
	ab=false;
	if (CBE.boHDR!='') {		
		oDv.appendChild(dvHdr);
		ah=true;
	}	
	if (CBE.boBDY!=''){
		oDv.appendChild(dvBdy);
		ab=true;
	}	
}

var CSE,iterElem,LSE,CBE,LBE, totalScrollLeft, totalScrollTop, width, height ;
var ini=false;

// Customised function for inner window dimension
function SHW() {
   if (document.body && (document.body.clientWidth !=0)) {
      width=document.body.clientWidth;
      height=document.body.clientHeight;
   }
   if (document.documentElement && (document.documentElement.clientWidth!=0) && (document.body.clientWidth + 20 >= document.documentElement.clientWidth)) {
      width=document.documentElement.clientWidth;   
      height=document.documentElement.clientHeight;   
   }   
   return [width,height];
}


var ID=null;
function moveMouse(e) {
   //boxMove=true;
	e?evt=e:evt=event;
	
	CSE=evt.target?evt.target:evt.srcElement;
	
	if (!CSE.hasbox) {
	   // Note we need to scan up DOM here, some elements like TR don't get triggered as srcElement
	   iElem=CSE;
	   while ((iElem.parentNode) && (!iElem.hasbox)) {
	      scanBO(iElem);
	      iElem=iElem.parentNode;
	   }	   
	}
	
	if ((CSE!=LSE)&&(!isChild(CSE,dvHdr))&&(!isChild(CSE,dvBdy))){		
	   if (!CSE.boxItem) {
			iterElem=CSE;
			while ((iterElem.hasbox==2)&&(iterElem.parentNode))
					iterElem=iterElem.parentNode; 
			CSE.boxItem=iterElem;
			}
		iterElem=CSE.boxItem;
		if (CSE.boxItem&&(CSE.boxItem.hasbox==1))  {
			LBE=CBE;
			CBE=iterElem;
			if (CBE!=LBE) {
				applyStyles();
				if (!CBE.requireclick)
					if (CBE.fade) {
						if (ID!=null)
							clearTimeout(ID);
						ID=setTimeout("fadeIn("+CBE.fadespeed+")",CBE.delay);
					}
					else {
						if (ID!=null)
							clearTimeout(ID);
						COL=1;
						ID=setTimeout("oDv.style.visibility='visible';ID=null;",CBE.delay);						
					}
				if (CBE.IEbugfix) {hideSelects();} 
				fixposx=!isNaN(CBE.fixX)?Left(CBE)+CBE.fixX:CBE.absX;
				fixposy=!isNaN(CBE.fixY)?Top(CBE)+CBE.fixY:CBE.absY;			
				lockX=0;
				lockY=0;
				boxMove=true;
				ox=CBE.offX?CBE.offX:10;
				oy=CBE.offY?CBE.offY:10;
			}
		}
		else if (!isChild(CSE,dvHdr) && !isChild(CSE,dvBdy) && (boxMove))	{
			// The conditional here fixes flickering between tables cells.
			if ((!isChild(CBE,CSE)) || (CSE.tagName!='TABLE')) {   			
   			CBE=null;
   			fadeOut();
   			showSelects();
			}
		}
		LSE=CSE;
	}
	else if (((isChild(CSE,dvHdr) || isChild(CSE,dvBdy))&&(boxMove))) {
		totalScrollLeft=0;
		totalScrollTop=0;
		
		iterElem=CSE;
		while(iterElem) {
			if(!isNaN(parseInt(iterElem.scrollTop)))
				totalScrollTop+=parseInt(iterElem.scrollTop);
			if(!isNaN(parseInt(iterElem.scrollLeft)))
				totalScrollLeft+=parseInt(iterElem.scrollLeft);
			iterElem=iterElem.parentNode;			
		}
		if (CBE!=null) {
			boxLeft=Left(CBE)-totalScrollLeft;
			boxRight=parseInt(Left(CBE)+CBE.offsetWidth)-totalScrollLeft;
			boxTop=Top(CBE)-totalScrollTop;
			boxBottom=parseInt(Top(CBE)+CBE.offsetHeight)-totalScrollTop;
			doCheck();
		}
	}
	
	if (boxMove&&CBE) {
		// This added to alleviate bug in IE6 w.r.t DOCTYPE
		bodyScrollTop=document.documentElement&&document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop;
		bodyScrollLet=document.documentElement&&document.documentElement.scrollLeft?document.documentElement.scrollLeft:document.body.scrollLeft;
		mouseX=evt.pageX?evt.pageX-bodyScrollLet:evt.clientX-document.body.clientLeft;
		mouseY=evt.pageY?evt.pageY-bodyScrollTop:evt.clientY-document.body.clientTop;
		if ((CBE)&&(CBE.windowLock)) {
			mouseY < -oy?lockY=-mouseY-oy:lockY=0;
			mouseX < -ox?lockX=-mouseX-ox:lockX=0;
			mouseY > (SHW()[1]-oDv.offsetHeight-oy)?lockY=-mouseY+SHW()[1]-oDv.offsetHeight-oy:lockY=lockY;
			mouseX > (SHW()[0]-dvBdy.offsetWidth-ox)?lockX=-mouseX-ox+SHW()[0]-dvBdy.offsetWidth:lockX=lockX;			
		}
		oDv.style.left=((fixposx)||(fixposx==0))?fixposx:bodyScrollLet+mouseX+ox+lockX+"px";
		oDv.style.top=((fixposy)||(fixposy==0))?fixposy:bodyScrollTop+mouseY+oy+lockY+"px";		
		
	}
}

function doCheck() {	
	if (   (mouseX < boxLeft)    ||     (mouseX >boxRight)     || (mouseY < boxTop) || (mouseY > boxBottom)) {
		if (!CBE.requireclick)
			fadeOut();
		if (CBE.IEbugfix) {showSelects();}
		CBE=null;
	}
}

function pauseBox(e) {
   e?evt=e:evt=event;
	boxMove=false;
	evt.cancelBubble=true;
}

function showHideBox(e) {
	oDv.style.visibility=(oDv.style.visibility!='visible')?'visible':'hidden';
}

function hideBox(e) {
	oDv.style.visibility='hidden';
}

var COL=0;
var stopfade=false;
function fadeIn(fs) {
		ID=null;
		COL=0;
		oDv.style.visibility='visible';
		fadeIn2(fs);
}

function fadeIn2(fs) {
		COL=COL+fs;
		COL=(COL>1)?1:COL;
		oDv.style.filter='alpha(opacity='+parseInt(100*COL)+')';
		oDv.style.opacity=COL;
		if (COL<1)
		 setTimeout("fadeIn2("+fs+")",20);		
}


function fadeOut() {
	oDv.style.visibility='hidden';
	
}

function isChild(s,d) {
	while(s) {
		if (s==d) 
			return true;
		s=s.parentNode;
	}
	return false;
}

var cSrc;
function checkMove(e) {
	e?evt=e:evt=event;
	cSrc=evt.target?evt.target:evt.srcElement;
	if ((!boxMove)&&(!isChild(cSrc,oDv))) {
		fadeOut();
		if (CBE&&CBE.IEbugfix) {showSelects();}
		boxMove=true;
		CBE=null;
	}
}

function showSelects(){
   var elements = document.getElementsByTagName("select");
   for (i=0;i< elements.length;i++){
      elements[i].style.visibility='visible';
   }
}

function hideSelects(){
   var elements = document.getElementsByTagName("select");
   for (i=0;i< elements.length;i++){
   elements[i].style.visibility='hidden';
   }
}
/* Event Functions */

// Add an event to the obj given
// event_name refers to the event trigger, without the "on", like click or mouseover
// func_name refers to the function callback when event is triggered
function addEvent(obj,event_name,func_name){
	if (obj.attachEvent){
		obj.attachEvent("on"+event_name, func_name);
	}else if(obj.addEventListener){
		obj.addEventListener(event_name,func_name,true);
	}else{
		obj["on"+event_name] = func_name;
	}
}

// Removes an event from the object
function removeEvent(obj,event_name,func_name){
	if (obj.detachEvent){
		obj.detachEvent("on"+event_name,func_name);
	}else if(obj.removeEventListener){
		obj.removeEventListener(event_name,func_name,true);
	}else{
		obj["on"+event_name] = null;
	}
}

// Stop an event from bubbling up the event DOM
function stopEvent(evt){
	evt || window.event;
	if (evt.stopPropagation){
		evt.stopPropagation();
		evt.preventDefault();
	}else if(typeof evt.cancelBubble != "undefined"){
		evt.cancelBubble = true;
		evt.returnValue = false;
	}
	return false;
}

// Get the obj that starts the event
function getElement(evt){
	if (window.event){
		return window.event.srcElement;
	}else{
		return evt.currentTarget;
	}
}
// Get the obj that triggers off the event
function getTargetElement(evt){
	if (window.event){
		return window.event.srcElement;
	}else{
		return evt.target;
	}
}
// For IE only, stops the obj from being selected
function stopSelect(obj){
	if (typeof obj.onselectstart != 'undefined'){
		addEvent(obj,"selectstart",function(){ return false;});
	}
}

/*    Caret Functions     */

// Get the end position of the caret in the object. Note that the obj needs to be in focus first
function getCaretEnd(obj){
	if(typeof obj.selectionEnd != "undefined"){
		return obj.selectionEnd;
	}else if(document.selection&&document.selection.createRange){
		var M=document.selection.createRange();
		try{
			var Lp = M.duplicate();
			Lp.moveToElementText(obj);
		}catch(e){
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
// Get the start position of the caret in the object
function getCaretStart(obj){
	if(typeof obj.selectionStart != "undefined"){
		return obj.selectionStart;
	}else if(document.selection&&document.selection.createRange){
		var M=document.selection.createRange();
		try{
			var Lp = M.duplicate();
			Lp.moveToElementText(obj);
		}catch(e){
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
// sets the caret position to l in the object
function setCaret(obj,l){
	obj.focus();
	if (obj.setSelectionRange){
		obj.setSelectionRange(l,l);
	}else if(obj.createTextRange){
		m = obj.createTextRange();		
		m.moveStart('character',l);
		m.collapse();
		m.select();
	}
}
// sets the caret selection from s to e in the object
function setSelection(obj,s,e){
	obj.focus();
	if (obj.setSelectionRange){
		obj.setSelectionRange(s,e);
	}else if(obj.createTextRange){
		m = obj.createTextRange();		
		m.moveStart('character',s);
		m.moveEnd('character',e);
		m.select();
	}
}

/*    Escape function   */
String.prototype.addslashes = function(){
	return this.replace(/(["\\\.\|\[\]\^\*\+\?\$\(\)])/g, '\\$1');
}
String.prototype.trim = function () {
    return this.replace(/^\s*(\S*(\s+\S+)*)\s*$/, "$1");
};
/* --- Escape --- */

/* Offset position from top of the screen */
function curTop(obj){
	toreturn = 0;
	while(obj){
		toreturn += obj.offsetTop;
		obj = obj.offsetParent;
	}
	return toreturn;
}
function curLeft(obj){
	toreturn = 0;
	while(obj){
		toreturn += obj.offsetLeft;
		obj = obj.offsetParent;
	}
	return toreturn;
}
/* ------ End of Offset function ------- */

/* Types Function */

// is a given input a number?
function isNumber(a) {
    return typeof a == 'number' && isFinite(a);
}

/* Object Functions */

function replaceHTML(obj,text){
	while(el = obj.childNodes[0]){
		obj.removeChild(el);
	};
	obj.appendChild(document.createTextNode(text));
}
function actb(field_id, obj, obj_id, obj_sel, obj_up, filter, owner_only){
	/* ---- Public Variables ---- */
	this.actb_timeOut = -1; // Autocomplete Timeout in ms (-1: autocomplete never time out)
	this.actb_lim = 20;    // Number of elements autocomplete can show (-1: no limit)
	this.actb_firstText = false; // should the auto complete be limited to the beginning of keyword?
	this.actb_mouse = false; // Enable Mouse Support
	this.actb_delimiter = new Array(';',',');  // Delimiter for multiple autocomplete. Set it to empty array for single autocomplete
	this.actb_startcheck = 3; // Show widget only after this number of characters is typed in.
	/* ---- Public Variables ---- */

	/* --- Styles --- */
	this.actb_bgColor = '#F4F4F4';
	this.actb_textColor = '#656565';
	this.actb_hColor = '#CCCCCC';
	this.actb_fFamily = 'Verdana';
	this.actb_fSize = '10px';
	this.actb_hStyle = 'text-decoration:underline;font-weight="bold"';
	/* --- Styles --- */

	/* ---- Private Variables ---- */
	var actb_delimwords = new Array();
	var actb_cdelimword = 0;
	var actb_delimchar = new Array();
	var actb_display = false;
	var actb_pos = 0;
	var actb_total = 0;
	var actb_curr = null;
	var actb_curr_id = null;
	var actb_selected = null;
	var actb_filter = '';
	var actb_owner = 0;
	var actb_rangeu = 0;
	var actb_ranged = 0;
	var actb_bool = new Array();
	var actb_pre = 0;
	var actb_toid;
	var actb_tomake = false;
	var actb_getpre = "";
	var actb_mouse_on_list = 1;
	var actb_kwcount = 0;
	var actb_caretmove = false;
	this.actb_keywords = new Array();
	/* ---- Private Variables---- */
	
	//this.actb_keywords = new Array('apple','pear','mango','pineapple','orange','banana','durian', 'jackfruit','etc');
	this.actb_keywords = new Array();
	this.actb_ids = new Array();
	this.actb_self = this;

	actb_curr = obj;
	actb_curr_id = obj_id;
	actb_selected = obj_sel;
	actb_upload = obj_up;
	actb_field = field_id;
	actb_filter = filter;
	actb_owner = owner_only;
	
	addEvent(actb_curr,"focus",actb_setup);
	function actb_setup(){
		addEvent(document,"keydown",actb_checkkey);
		addEvent(actb_curr,"blur",actb_clear);
		addEvent(document,"keypress",actb_keypress);
	}

	function actb_clear(evt){
		if (!evt) evt = event;
		removeEvent(document,"keydown",actb_checkkey);
		removeEvent(actb_curr,"blur",actb_clear);
		removeEvent(document,"keypress",actb_keypress);
		actb_removedisp();
	}
	function actb_parse(n){
		if (actb_self.actb_delimiter.length > 0){
			var t = actb_delimwords[actb_cdelimword].trim().addslashes();
			var plen = actb_delimwords[actb_cdelimword].trim().length;
		}else{
			var t = actb_curr.value.addslashes();
			var plen = actb_curr.value.length;
		}
		var tobuild = '';
		var i;

		if (actb_self.actb_firstText){
			var re = new RegExp("^" + t, "i");
		}else{
			var re = new RegExp(t, "i");
		}
		var p = n.search(re);
				
		for (i=0;i<p;i++){
			tobuild += n.substr(i,1);
		}
		tobuild += "<font style='"+(actb_self.actb_hStyle)+"'>"
		for (i=p;i<plen+p;i++){
			tobuild += n.substr(i,1);
		}
		tobuild += "</font>";
			for (i=plen+p;i<n.length;i++){
			tobuild += n.substr(i,1);
		}
		return tobuild;
	}
	function actb_generate(){
		if ($('tat_table')){ actb_display = false;document.body.removeChild($('tat_table')); } 
		if ($('tat_div')){ document.body.removeChild($('tat_div')); } 
		if (actb_kwcount == 0){
			actb_display = false;
			return;
		}
		actb_selected.style.display = 'none';
		actb_upload.style.display = 'none';
		
		global.File.unset (actb_field);
		
		a = document.createElement('table');
		a.cellSpacing='1px';
		a.cellPadding='2px';
		a.style.width='302px';
		a.style.border='#000000 1px solid';
		a.style.position='absolute';
		a.style.top = eval(curTop(actb_curr) + actb_curr.offsetHeight) + "px";
		a.style.left = curLeft(actb_curr) + "px";
		a.style.backgroundColor=actb_self.actb_bgColor;
		a.id = 'tat_table';
		document.body.appendChild(a);
		
		b = document.createElement('div');
		b.style.width='300px';
		b.style.height='106px';
		b.style.border='#CCCCCC 1px solid';
		b.style.position='absolute';
		b.style.top = eval(curTop(actb_curr) + actb_curr.offsetHeight) + "px";
		b.style.left = eval(curLeft(actb_curr) + 304) + "px";
		b.style.backgroundColor='#FFFFFF';
		b.id = 'tat_div';
		document.body.appendChild(b);
		
		var i;
		var first = true;
		var j = 1;
		if (actb_self.actb_mouse){
			a.onmouseout = actb_table_unfocus;
			a.onmouseover = actb_table_focus;
		}
		var counter = 0;
		
		for (i=0;i<actb_self.actb_keywords.length;i++){
			if (actb_bool[i]){
				counter++;
				r = a.insertRow(-1);
				if (first && !actb_tomake){
					r.style.backgroundColor = actb_self.actb_hColor;
					first = false;
					actb_pos = counter;
					b.innerHTML = tAjax.getFileResume(actb_self.actb_ids[i]);
				}else if(actb_pre == i){
					r.style.backgroundColor = actb_self.actb_hColor;
					first = false;
					actb_pos = counter;
					b.innerHTML = tAjax.getFileResume(actb_self.actb_ids[i]);
				}else{
					r.style.backgroundColor = actb_self.actb_bgColor;
				}
				r.id = 'tat_tr'+(j);
				c = r.insertCell(-1);
				c.style.color = actb_self.actb_textColor;
				c.style.fontFamily = actb_self.actb_fFamily;
				c.style.fontSize = actb_self.actb_fSize;
				c.innerHTML = actb_parse(actb_self.actb_keywords[i]);
				c.id = 'tat_td'+(j);
				c.setAttribute('pos',j);
				if (actb_self.actb_mouse){
					c.style.cursor = 'pointer';
					c.onclick=actb_mouseclick;
					c.onmouseover = actb_table_highlight;
				}
				j++;
			}
			if (j - 1 == actb_self.actb_lim && j < actb_total){
				r = a.insertRow(-1);
				r.style.backgroundColor = actb_self.actb_bgColor;
				c = r.insertCell(-1);
				c.style.color = actb_self.actb_textColor;
				c.style.fontFamily = 'arial narrow';
				c.style.fontSize = actb_self.actb_fSize;
				c.align='center';
				replaceHTML(c,'\\/');
				if (actb_self.actb_mouse){
					c.style.cursor = 'pointer';
					c.onclick = actb_mouse_down;
				}
				break;
			}
		}
		actb_rangeu = 1;
		actb_ranged = j-1;
		actb_display = true;
		if (actb_pos <= 0) actb_pos = 1;
	}
	function actb_remake(){
		document.body.removeChild($('tat_table'));
		a = document.createElement('table');
		a.cellSpacing='1px';
		a.cellPadding='2px';
		a.style.position='absolute';
		a.style.top = eval(curTop(actb_curr) + actb_curr.offsetHeight) + "px";
		a.style.left = curLeft(actb_curr) + "px";
		a.style.backgroundColor=actb_self.actb_bgColor;
		a.id = 'tat_table';
		if (actb_self.actb_mouse){
			a.onmouseout= actb_table_unfocus;
			a.onmouseover=actb_table_focus;
		}
		document.body.appendChild(a);
		var i;
		var first = true;
		var j = 1;
		if (actb_rangeu > 1){
			r = a.insertRow(-1);
			r.style.backgroundColor = actb_self.actb_bgColor;
			c = r.insertCell(-1);
			c.style.color = actb_self.actb_textColor;
			c.style.fontFamily = 'arial narrow';
			c.style.fontSize = actb_self.actb_fSize;
			c.align='center';
			replaceHTML(c,'/\\');
			if (actb_self.actb_mouse){
				c.style.cursor = 'pointer';
				c.onclick = actb_mouse_up;
			}
		}
		for (i=0;i<actb_self.actb_keywords.length;i++){
			if (actb_bool[i]){
				if (j >= actb_rangeu && j <= actb_ranged){
					r = a.insertRow(-1);
					r.style.backgroundColor = actb_self.actb_bgColor;
					r.id = 'tat_tr'+(j);
					c = r.insertCell(-1);
					c.style.color = actb_self.actb_textColor;
					c.style.fontFamily = actb_self.actb_fFamily;
					c.style.fontSize = actb_self.actb_fSize;
					c.innerHTML = actb_parse(actb_self.actb_keywords[i]);
					c.id = 'tat_td'+(j);
					c.setAttribute('pos',j);
					if (actb_self.actb_mouse){
						c.style.cursor = 'pointer';
						c.onclick=actb_mouseclick;
						c.onmouseover = actb_table_highlight;
					}
					j++;
				}else{
					j++;
				}
			}
			if (j > actb_ranged) break;
		}
		if (j-1 < actb_total){
			r = a.insertRow(-1);
			r.style.backgroundColor = actb_self.actb_bgColor;
			c = r.insertCell(-1);
			c.style.color = actb_self.actb_textColor;
			c.style.fontFamily = 'arial narrow';
			c.style.fontSize = actb_self.actb_fSize;
			c.align='center';
			replaceHTML(c,'\\/');
			if (actb_self.actb_mouse){
				c.style.cursor = 'pointer';
				c.onclick = actb_mouse_down;
			}
		}
	}
	function actb_goup(){
		if (!actb_display) return;
		if (actb_pos == 1) return;
		$('tat_tr'+actb_pos).style.backgroundColor = actb_self.actb_bgColor;
		actb_pos--;
		if (actb_pos < actb_rangeu) actb_moveup();
		$('tat_tr'+actb_pos).style.backgroundColor = actb_self.actb_hColor;
		$('tat_div').innerHTML = tAjax.getFileResume(actb_self.actb_ids[actb_pos - 1]);
		if (actb_toid) clearTimeout(actb_toid);
		if (actb_self.actb_timeOut > 0) actb_toid = setTimeout(function(){actb_mouse_on_list=0;actb_removedisp();},actb_self.actb_timeOut);
	}
	function actb_godown(){
		if (!actb_display) return;
		if (actb_pos == actb_total) return;
		$('tat_tr'+actb_pos).style.backgroundColor = actb_self.actb_bgColor;
		actb_pos++;
		if (actb_pos > actb_ranged) actb_movedown();
		$('tat_tr'+actb_pos).style.backgroundColor = actb_self.actb_hColor;
		$('tat_div').innerHTML = tAjax.getFileResume(actb_self.actb_ids[actb_pos - 1]);
		if (actb_toid) clearTimeout(actb_toid);
		if (actb_self.actb_timeOut > 0) actb_toid = setTimeout(function(){actb_mouse_on_list=0;actb_removedisp();},actb_self.actb_timeOut);
	}
	function actb_movedown(){
		actb_rangeu++;
		actb_ranged++;
		actb_remake();
	}
	function actb_moveup(){
		actb_rangeu--;
		actb_ranged--;
		actb_remake();
	}

	/* Mouse */
	function actb_mouse_down(){
		$('tat_tr'+actb_pos).style.backgroundColor = actb_self.actb_bgColor;
		actb_pos++;
		actb_movedown();
		$('tat_tr'+actb_pos).style.backgroundColor = actb_self.actb_hColor;
		actb_curr.focus();
		actb_mouse_on_list = 0;
		if (actb_toid) clearTimeout(actb_toid);
		if (actb_self.actb_timeOut > 0) actb_toid = setTimeout(function(){actb_mouse_on_list=0;actb_removedisp();},actb_self.actb_timeOut);
	}
	function actb_mouse_up(evt){
		if (!evt) evt = event;
		if (evt.stopPropagation){
			evt.stopPropagation();
		}else{
			evt.cancelBubble = true;
		}
		$('tat_tr'+actb_pos).style.backgroundColor = actb_self.actb_bgColor;
		actb_pos--;
		actb_moveup();
		$('tat_tr'+actb_pos).style.backgroundColor = actb_self.actb_hColor;
		actb_curr.focus();
		actb_mouse_on_list = 0;
		if (actb_toid) clearTimeout(actb_toid);
		if (actb_self.actb_timeOut > 0) actb_toid = setTimeout(function(){actb_mouse_on_list=0;actb_removedisp();},actb_self.actb_timeOut);
	}
	function actb_mouseclick(evt){
		if (!evt) evt = event;
		if (!actb_display) return;
		actb_mouse_on_list = 0;
		actb_pos = this.getAttribute('pos');
		actb_penter();
	}
	function actb_table_focus(){
		actb_mouse_on_list = 1;
	}
	function actb_table_unfocus(){
		actb_mouse_on_list = 0;
		if (actb_toid) clearTimeout(actb_toid);
		if (actb_self.actb_timeOut > 0) actb_toid = setTimeout(function(){actb_mouse_on_list = 0;actb_removedisp();},actb_self.actb_timeOut);
	}
	function actb_table_highlight(){
		actb_mouse_on_list = 1;
		$('tat_tr'+actb_pos).style.backgroundColor = actb_self.actb_bgColor;
		actb_pos = this.getAttribute('pos');
		while (actb_pos < actb_rangeu) actb_moveup();
		while (actb_pos > actb_ranged) actb_movedown();
		$('tat_tr'+actb_pos).style.backgroundColor = actb_self.actb_hColor;
		if (actb_toid) clearTimeout(actb_toid);
		if (actb_self.actb_timeOut > 0) actb_toid = setTimeout(function(){actb_mouse_on_list = 0;actb_removedisp();},actb_self.actb_timeOut);
	}
	/* ---- */

	function actb_insertword(a){
		if (actb_self.actb_delimiter.length > 0){
			str = '';
			l=0;
			for (i=0;i<actb_delimwords.length;i++){
				if (actb_cdelimword == i){
					prespace = postspace = '';
					gotbreak = false;
					for (j=0;j<actb_delimwords[i].length;++j){
						if (actb_delimwords[i].charAt(j) != ' '){
							gotbreak = true;
							break;
						}
						prespace += ' ';
					}
					for (j=actb_delimwords[i].length-1;j>=0;--j){
						if (actb_delimwords[i].charAt(j) != ' ') break;
						postspace += ' ';
					}
					str += prespace;
					str += a;
					l = str.length;
					if (gotbreak) str += postspace;
				}else{
					str += actb_delimwords[i];
				}
				if (i != actb_delimwords.length - 1){
					str += actb_delimchar[i];
				}
			}
			actb_curr.value = str;
			setCaret(actb_curr,l);
		}else{
			actb_curr.value = a;
		}
		actb_mouse_on_list = 0;
		actb_removedisp();
	}
	function actb_penter(){
		if (!actb_display) return;
		actb_display = false;
		var word = '';
		var c = 0;
		for (var i=0;i<=actb_self.actb_keywords.length;i++){
			if (actb_bool[i]) c++;
			if (c == actb_pos){
				word = actb_self.actb_keywords[i];
				break;
			}
		}
		actb_curr_id.value = actb_self.actb_ids[i];
		actb_insertword(word);
		l = getCaretStart(actb_curr);
		
		actb_selected.innerHTML = tAjax.getFileResume(actb_self.actb_ids[i]);
		actb_selected.style.display = '';
		
		global.File.enableUnset (actb_field);
	}
	function actb_removedisp(){
		if (actb_mouse_on_list==0){
			actb_display = 0;
			if ($('tat_table')){ document.body.removeChild($('tat_table')); }
			if ($('tat_div')){ document.body.removeChild($('tat_div')); }
			if (actb_toid) clearTimeout(actb_toid);
		}
	}
	function actb_keypress(e){
		if (actb_caretmove) stopEvent(e);
		return !actb_caretmove;
	}
	function actb_checkkey(evt){
		if (!evt) evt = event;
		a = evt.keyCode;
		caret_pos_start = getCaretStart(actb_curr);
		actb_caretmove = 0;
		switch (a){
			case 38:
				actb_goup();
				actb_caretmove = 1;
				return false;
				break;
			case 40:
				actb_godown();
				actb_caretmove = 1;
				return false;
				break;
			case 13: case 9:
				if (actb_display){
					actb_caretmove = 1;
					actb_penter();
					return false;
				}else{
					return true;
				}
				break;
			default:
				setTimeout(function(){actb_tocomplete(a)},50);
				break;
		}
	}

	function actb_tocomplete(kc){
		if (kc == 38 || kc == 40 || kc == 13) return;
		var i;
		if (actb_display){ 
			var word = 0;
			var c = 0;
			for (var i=0;i<=actb_self.actb_keywords.length;i++){
				if (actb_bool[i]) c++;
				if (c == actb_pos){
					word = i;
					break;
				}
			}
			actb_pre = word;
		}else{ actb_pre = -1};
		
		if (actb_curr.value == ''){
			actb_mouse_on_list = 0;
			actb_removedisp();
			return;
		}
		if (actb_self.actb_delimiter.length > 0){
			caret_pos_start = getCaretStart(actb_curr);
			caret_pos_end = getCaretEnd(actb_curr);
			
			delim_split = '';
			for (i=0;i<actb_self.actb_delimiter.length;i++){
				delim_split += actb_self.actb_delimiter[i];
			}
			delim_split = delim_split.addslashes();
			delim_split_rx = new RegExp("(["+delim_split+"])");
			c = 0;
			actb_delimwords = new Array();
			actb_delimwords[0] = '';
			for (i=0,j=actb_curr.value.length;i<actb_curr.value.length;i++,j--){
				if (actb_curr.value.substr(i,j).search(delim_split_rx) == 0){
					ma = actb_curr.value.substr(i,j).match(delim_split_rx);
					actb_delimchar[c] = ma[1];
					c++;
					actb_delimwords[c] = '';
				}else{
					actb_delimwords[c] += actb_curr.value.charAt(i);
				}
			}

			var l = 0;
			actb_cdelimword = -1;
			for (i=0;i<actb_delimwords.length;i++){
				if (caret_pos_end >= l && caret_pos_end <= l + actb_delimwords[i].length){
					actb_cdelimword = i;
				}
				l+=actb_delimwords[i].length + 1;
			}
			var ot = actb_delimwords[actb_cdelimword].trim(); 
			var t = actb_delimwords[actb_cdelimword].addslashes().trim();
		}else{
			var ot = actb_curr.value;
			var t = actb_curr.value.addslashes();
		}
		if (ot.length == 0){
			actb_mouse_on_list = 0;
			actb_removedisp();
		}
		if (ot.length < actb_self.actb_startcheck) return this;
		
		if (ot.length == actb_self.actb_startcheck)
			eval (tAjax.getSuggest (actb_curr.value, actb_filter, actb_owner));
		
		if (actb_self.actb_firstText){
			var re = new RegExp("^" + t, "i");
		}else{
			var re = new RegExp(t, "i");
		}

		actb_total = 0;
		actb_tomake = false;
		actb_kwcount = 0;
		for (i=0;i<actb_self.actb_keywords.length;i++){
			actb_bool[i] = false;
			if (re.test(actb_self.actb_keywords[i])){
				actb_total++;
				actb_bool[i] = true;
				actb_kwcount++;
				if (actb_pre == i) actb_tomake = true;
			}
		}

		if (actb_toid) clearTimeout(actb_toid);
		if (actb_self.actb_timeOut > 0) actb_toid = setTimeout(function(){actb_mouse_on_list = 0;actb_removedisp();},actb_self.actb_timeOut);
		actb_generate();
	}
	return this;
}
/* Simple AJAX Code-Kit (SACK) v1.6.1 */
/* ©2005 Gregory Wild-Smith */
/* www.twilightuniverse.com */
/* Software licenced under a modified X11 licence,
   see documentation or authors website for more details */

function sack(file) {
	this.xmlhttp = null;

	this.resetData = function() {
		this.method = "POST";
  		this.queryStringSeparator = "?";
		this.argumentSeparator = "&";
		this.URLString = "";
		this.encodeURIString = true;
  		this.execute = false;
  		this.element = null;
		this.elementObj = null;
		this.requestFile = file;
		this.vars = new Object();
		this.responseStatus = new Array(2);
  	};

	this.resetFunctions = function() {
  		this.onLoading = function() { };
  		this.onLoaded = function() { };
  		this.onInteractive = function() { };
  		this.onCompletion = function() { };
  		this.onError = function() { };
		this.onFail = function() { };
	};

	this.reset = function() {
		this.resetFunctions();
		this.resetData();
	};

	this.createAJAX = function() {
		try {
			this.xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e1) {
			try {
				this.xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e2) {
				this.xmlhttp = null;
			}
		}

		if (! this.xmlhttp) {
			if (typeof XMLHttpRequest != "undefined") {
				this.xmlhttp = new XMLHttpRequest();
			} else {
				this.failed = true;
			}
		}
	};

	this.setVar = function(name, value){
		this.vars[name] = Array(value, false);
	};

	this.encVar = function(name, value, returnvars) {
		if (true == returnvars) {
			return Array(encodeURIComponent(name), encodeURIComponent(value));
		} else {
			this.vars[encodeURIComponent(name)] = Array(encodeURIComponent(value), true);
		}
	}

	this.processURLString = function(string, encode) {
		encoded = encodeURIComponent(this.argumentSeparator);
		regexp = new RegExp(this.argumentSeparator + "|" + encoded);
		varArray = string.split(regexp);
		for (i = 0; i < varArray.length; i++){
			urlVars = varArray[i].split("=");
			if (true == encode){
				this.encVar(urlVars[0], urlVars[1]);
			} else {
				this.setVar(urlVars[0], urlVars[1]);
			}
		}
	}

	this.createURLString = function(urlstring) {
		if (this.encodeURIString && this.URLString.length) {
			this.processURLString(this.URLString, true);
		}

		if (urlstring) {
			if (this.URLString.length) {
				this.URLString += this.argumentSeparator + urlstring;
			} else {
				this.URLString = urlstring;
			}
		}

		// prevents caching of URLString
		this.setVar("rndval", new Date().getTime());

		urlstringtemp = new Array();
		for (key in this.vars) {
			if (false == this.vars[key][1] && true == this.encodeURIString) {
				encoded = this.encVar(key, this.vars[key][0], true);
				delete this.vars[key];
				this.vars[encoded[0]] = Array(encoded[1], true);
				key = encoded[0];
			}

			urlstringtemp[urlstringtemp.length] = key + "=" + this.vars[key][0];
		}
		if (urlstring){
			this.URLString += this.argumentSeparator + urlstringtemp.join(this.argumentSeparator);
		} else {
			this.URLString += urlstringtemp.join(this.argumentSeparator);
		}
	}

	this.runResponse = function() {
		eval(this.response);
	}

	this.runAJAX = function(urlstring) {
		if (this.failed) {
			this.onFail();
		} else {
			this.createURLString(urlstring);
			if (this.element) {
				this.elementObj = document.getElementById(this.element);
			}
			if (this.xmlhttp) {
				var self = this;
				if (this.method == "GET") {
					totalurlstring = this.requestFile + this.queryStringSeparator + this.URLString;
					this.xmlhttp.open(this.method, totalurlstring, true);
				} else {
					this.xmlhttp.open(this.method, this.requestFile, true);
					try {
						this.xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
					} catch (e) { }
				}

				this.xmlhttp.onreadystatechange = function() {
					switch (self.xmlhttp.readyState) {
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

							if (self.execute) {
								self.runResponse();
							}

							if (self.elementObj) {
								elemNodeName = self.elementObj.nodeName;
								elemNodeName.toLowerCase();
								if (elemNodeName == "input"
								|| elemNodeName == "select"
								|| elemNodeName == "option"
								|| elemNodeName == "textarea") {
									self.elementObj.value = self.response;
								} else {
									self.elementObj.innerHTML = self.response;
								}
							}
							if (self.responseStatus[0] == "200") {
								self.onCompletion();
							} else {
								self.onError();
							}

							self.URLString = "";
							break;
					}
				};

				this.xmlhttp.send(this.URLString);
			}
		}
	};

	this.reset();
	this.createAJAX();
}

/************************************************************************************************************
(C) www.dhtmlgoodies.com, March 2006

This is a script from www.dhtmlgoodies.com. You will find this and a lot of other scripts at our website.	

Terms of use:
You are free to use this script as long as the copyright message is kept intact. However, you may not
redistribute, sell or repost it without our permission.

Thank you!

www.dhtmlgoodies.com
Alf Magne Kalleland

************************************************************************************************************/

var enableCache = true;
var jsCache = new Array();

var dynamicContent_ajaxObjects = new Array();

function ajax_showContent(divId,ajaxIndex,url)
{
	var targetObj = document.getElementById(divId);
	targetObj.innerHTML = dynamicContent_ajaxObjects[ajaxIndex].response;
	if(enableCache){
		jsCache[url] = 	dynamicContent_ajaxObjects[ajaxIndex].response;
	}
	dynamicContent_ajaxObjects[ajaxIndex] = false;
	
	ajax_parseJs(targetObj)
}

function ajax_loadContent(divId,url)
{
	if(enableCache && jsCache[url]){
		document.getElementById(divId).innerHTML = jsCache[url];
		return;
	}
	
	var ajaxIndex = dynamicContent_ajaxObjects.length;
	document.getElementById(divId).innerHTML = 'Loading content - please wait';
	dynamicContent_ajaxObjects[ajaxIndex] = new sack();
	dynamicContent_ajaxObjects[ajaxIndex].requestFile = url;	// Specifying which file to get
	dynamicContent_ajaxObjects[ajaxIndex].onCompletion = function(){ ajax_showContent(divId,ajaxIndex,url); };	// Specify function that will be executed after file has been found
	dynamicContent_ajaxObjects[ajaxIndex].runAJAX();		// Execute AJAX function	
	
	
}


function ajax_parseJs(inputObj)
{	
	var jsTags = inputObj.getElementsByTagName('SCRIPT');
	for(var no=0;no<jsTags.length;no++){
		eval(jsTags[no].innerHTML);
	}	
}
/************************************************************************************************************
*	DHTML modal dialog box
*
*	Created:						August, 26th, 2006
*	@class Purpose of class:		Display a modal dialog box on the screen.
*			
*	Css files used by this script:	modal-message.css
*
*	Demos of this class:			demo-modal-message-1.html
*
* 	Update log:
*
************************************************************************************************************/


/**
* @constructor
*/

DHTML_modalMessage = function()
{
	var url;								// url of modal message
	var htmlOfModalMessage;					// html of modal message
	
	var divs_transparentDiv;				// Transparent div covering page content
	var divs_content;						// Modal message div.
	var iframe;								// Iframe used in ie
	var layoutCss;							// Name of css file;
	var width;								// Width of message box
	var height;								// Height of message box
	
	var existingBodyOverFlowStyle;			// Existing body overflow css
	var dynContentObj;						// Reference to dynamic content object
	var cssClassOfMessageBox;				// Alternative css class of message box - in case you want a different appearance on one of them
	var shadowDivVisible;					// Shadow div visible ? 
	var shadowOffset; 						// X and Y offset of shadow(pixels from content box)
	var MSIE;
		
	this.url = '';							// Default url is blank
	this.htmlOfModalMessage = '';			// Default message is blank
	this.layoutCss = 'modal-message.css';	// Default CSS file
	this.height = 200;						// Default height of modal message
	this.width = 400;						// Default width of modal message
	this.cssClassOfMessageBox = false;		// Default alternative css class for the message box
	this.shadowDivVisible = true;			// Shadow div is visible by default
	this.shadowOffset = 5;					// Default shadow offset.
	this.MSIE = false;
	if(navigator.userAgent.indexOf('MSIE')>=0) this.MSIE = true;
	

}

DHTML_modalMessage.prototype = {
	// {{{ setSource(urlOfSource)
    /**
     *	Set source of the modal dialog box
     * 	
     *
     * @public	
     */		
	setSource : function(urlOfSource)
	{
		this.url = urlOfSource;
		
	}	
	// }}}	
	,
	// {{{ setHtmlContent(newHtmlContent)
    /**
     *	Setting static HTML content for the modal dialog box.
     * 	
     *	@param String newHtmlContent = Static HTML content of box
     *
     * @public	
     */		
	setHtmlContent : function(newHtmlContent)
	{
		this.htmlOfModalMessage = newHtmlContent;
		
	}
	// }}}		
	,
	// {{{ setSize(width,height)
    /**
     *	Set the size of the modal dialog box
     * 	
     *	@param int width = width of box
     *	@param int height = height of box
     *
     * @public	
     */		
	setSize : function(width,height)
	{
		if(width)this.width = width;
		if(height)this.height = height;		
	}
	// }}}		
	,		
	// {{{ setCssClassMessageBox(newCssClass)
    /**
     *	Assign the message box to a new css class.(in case you wants a different appearance on one of them)
     * 	
     *	@param String newCssClass = Name of new css class (Pass false if you want to change back to default)
     *
     * @public	
     */		
	setCssClassMessageBox : function(newCssClass)
	{
		this.cssClassOfMessageBox = newCssClass;
		if(this.divs_content){
			if(this.cssClassOfMessageBox)
				this.divs_content.className=this.cssClassOfMessageBox;
			else
				this.divs_content.className='modalDialog_contentDiv';	
		}
					
	}
	// }}}		
	,	
	// {{{ setShadowOffset(newShadowOffset)
    /**
     *	Specify the size of shadow
     * 	
     *	@param Int newShadowOffset = Offset of shadow div(in pixels from message box - x and y)
     *
     * @public	
     */		
	setShadowOffset : function(newShadowOffset)
	{
		this.shadowOffset = newShadowOffset
					
	}
	// }}}		
	,	
	// {{{ display()
    /**
     *	Display the modal dialog box
     * 	
     *
     * @public	
     */		
	display : function()
	{
		if(!this.divs_transparentDiv){
			this.__createDivs();
		}	
		
		// Redisplaying divs
		this.divs_transparentDiv.style.display='block';
		this.divs_content.style.display='block';
		this.divs_shadow.style.display='block';		
		if(this.MSIE)this.iframe.style.display='block';	
		this.__resizeDivs();
		
		/* Call the __resizeDivs method twice in case the css file has changed. The first execution of this method may not catch these changes */
		window.refToThisModalBoxObj = this;		
		setTimeout('window.refToThisModalBoxObj.__resizeDivs()',150);
		
		this.__insertContent();	// Calling method which inserts content into the message div.
	}
	// }}}		
	,
	// {{{ ()
    /**
     *	Display the modal dialog box
     * 	
     *
     * @public	
     */		
	setShadowDivVisible : function(visible)
	{
		this.shadowDivVisible = visible;
	}
	// }}}	
	,
	// {{{ close()
    /**
     *	Close the modal dialog box
     * 	
     *
     * @public	
     */		
	close : function()
	{
		document.documentElement.style.overflow = '';	// Setting the CSS overflow attribute of the <html> tag back to default.
		/* Hiding divs */
		if(this.divs_transparentDiv)
			this.divs_transparentDiv.style.display='none';
		
		if(this.divs_content)
			this.divs_content.style.display='none';
		
		if(this.divs_shadow)
			this.divs_shadow.style.display='none';
		
		if(this.MSIE && this.iframe)
			this.iframe.style.display='none';
	}
	// }}}	
	,
	// {{{ __createDivs()
    /**
     *	Create the divs for the modal dialog box
     * 	
     *
     * @private	
     */		
	__createDivs : function()
	{
		// Creating transparent div
		this.divs_transparentDiv = document.createElement('DIV');
		this.divs_transparentDiv.className='modalDialog_transparentDivs';
		this.divs_transparentDiv.style.left = '0px';
		this.divs_transparentDiv.style.top = '0px';
		
		document.body.appendChild(this.divs_transparentDiv);
		// Creating content div
		this.divs_content = document.createElement('DIV');
		this.divs_content.className = 'modalDialog_contentDiv';
		this.divs_content.id = 'DHTMLSuite_modalBox_contentDiv';
		this.divs_content.style.zIndex = 100000;
		
		if(this.MSIE){
			this.iframe = document.createElement('<IFRAME src="about:blank" frameborder=0>');
			this.iframe.style.zIndex = 90000;
			this.iframe.style.position = 'absolute';
			document.body.appendChild(this.iframe);	
		}
			
		document.body.appendChild(this.divs_content);
		// Creating shadow div
		this.divs_shadow = document.createElement('DIV');
		this.divs_shadow.className = 'modalDialog_contentDiv_shadow';
		this.divs_shadow.style.zIndex = 95000;
		document.body.appendChild(this.divs_shadow);

	}
	// }}}	
	,
	// {{{ __resizeDivs()
    /**
     *	Resize the message divs
     * 	
     *
     * @private	
     */	
    __resizeDivs : function()
    {
    	
    	var topOffset = Math.max(document.body.scrollTop,document.documentElement.scrollTop);

		if(this.cssClassOfMessageBox)
			this.divs_content.className=this.cssClassOfMessageBox;
		else
			this.divs_content.className='modalDialog_contentDiv';	
			    	
    	if(!this.divs_transparentDiv)return;
    	
    	// Preserve scroll position
    	var st = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
    	var sl = Math.max(document.body.scrollLeft,document.documentElement.scrollLeft);
    	document.documentElement.style.overflow = 'hidden';
    	window.scrollTo(sl,st);
    	setTimeout('window.scrollTo(' + sl + ',' + st + ');',10);
    	var bodyWidth = document.documentElement.clientWidth;
    	var bodyHeight = document.documentElement.clientHeight;
    	
		var bodyWidth, bodyHeight; 
		if (self.innerHeight){ // all except Explorer 
		 
		   bodyWidth = self.innerWidth; 
		   bodyHeight = self.innerHeight; 
		}  else if (document.documentElement && document.documentElement.clientHeight) {
		   // Explorer 6 Strict Mode 		 
		   bodyWidth = document.documentElement.clientWidth; 
		   bodyHeight = document.documentElement.clientHeight; 
		} else if (document.body) {// other Explorers 
		 
		   bodyWidth = document.body.clientWidth; 
		   bodyHeight = document.body.clientHeight; 
		} 

    	
    	// Setting width and height of content div
      	this.divs_content.style.width = this.width + 'px';
    	this.divs_content.style.height= this.height + 'px';  	
    	
    	// Creating temporary width variables since the actual width of the content div could be larger than this.width and this.height(i.e. padding and border)
    	var tmpWidth = this.divs_content.offsetWidth;	
    	var tmpHeight = this.divs_content.offsetHeight;
    	
    	
    	// Setting width and height of left transparent div
    	this.divs_transparentDiv.style.width = Math.ceil((bodyWidth - tmpWidth) / 2) + 'px';
    	this.divs_transparentDiv.style.height = bodyHeight + 'px';
    	
    	// Setting size extremely large for bottom, left and right side transparent divs.
    	this.divs_transparentDiv.style.height = '4000px';   
    	this.divs_transparentDiv.style.width = '4000px';   
    	
    	
		
    	this.divs_content.style.left = Math.ceil((bodyWidth - tmpWidth) / 2) + 'px';;
    	this.divs_content.style.top = (Math.ceil((bodyHeight - tmpHeight) / 2) +  topOffset) + 'px';
    	
 		if(this.MSIE){
 			this.iframe.style.left = this.divs_content.style.left;
 			this.iframe.style.top = this.divs_content.style.top;
 			this.iframe.style.width = this.divs_content.style.width;
 			this.iframe.style.height = this.divs_content.style.height;
 		}
 		
    	this.divs_shadow.style.left = (this.divs_content.style.left.replace('px','')/1 + this.shadowOffset) + 'px';
    	this.divs_shadow.style.top = (this.divs_content.style.top.replace('px','')/1 + this.shadowOffset) + 'px';
    	this.divs_shadow.style.height = tmpHeight + 'px';
    	this.divs_shadow.style.width = tmpWidth + 'px';
    	
    	
    	
    	if(!this.shadowDivVisible)this.divs_shadow.style.display='none';	// Hiding shadow if it has been disabled
    	
    	
    }	
	// }}}	
	,
	// {{{ __insertContent()
    /**
     *	Insert content into the content div
     * 	
     *
     * @private	
     */	
    __insertContent : function()
    {
		if(this.url){	// url specified - load content dynamically
			ajax_loadContent('DHTMLSuite_modalBox_contentDiv',this.url);
		}else{	// no url set, put static content inside the message box
			this.divs_content.innerHTML = this.htmlOfModalMessage;	
		}
    }		
}

var modalMsg = new DHTML_modalMessage ();
//
//  ModalBox - The pop-up window thingie with AJAX, based on Prototype JS framework.
//
//  Created by Andrew Okonetchnikov
//  Copyright 2006-2010 okonet.ru. All rights reserved.
//
//  Licensed under MIT license.
//

if (Object.isUndefined(Prototype.Browser.IE6)) {
	Prototype.Browser.IE6 = (navigator.appName.indexOf("Microsoft Internet Explorer") != -1 && navigator.appVersion.indexOf("MSIE 6.0") != -1 && !window.XMLHttpRequest);
}

if (!window.Modalbox)
	var Modalbox = {};

Modalbox.Methods = {
	overrideAlert: false, // Override standard browser alert message with ModalBox
	focusableElements: [],
	currFocused: 0,
	initialized: false, // Modalbox is visible
	active: true, // Modalbox is visible and active
	options: {
		title: "ModalBox Window", // Title of the ModalBox window
		overlayClose: true, // Close modal box by clicking on overlay
		width: 500, // Default width in px
		height: 90, // Default height in px
		overlayOpacity: 0.65, // Default overlay opacity
		overlayDuration: 0.25, // Default overlay fade in/out duration in seconds
		slideDownDuration: 0.5, // Default Modalbox appear slide down effect in seconds
		slideUpDuration: 0.5, // Default Modalbox hiding slide up effect in seconds
		resizeDuration: 0.25, // Default resize duration seconds
		inactiveFade: true, // Fades MB window on inactive state
		transitions: true, // Toggles transition effects. Transitions are enabled by default
		loadingString: "Please wait. Loading...", // Default loading string message
		closeString: "Close window", // Default title attribute for close window link
		closeValue: "&times;", // Default string for close link in the header
		params: {},
		method: 'get', // Default Ajax request method
		autoFocusing: false, // Toggles auto-focusing for form elements. Disable for long text pages. [Titan Framework customized (from 'true' to 'false') by Camilo Carromeu]
		aspnet: false, // Should be true when using with ASP.NET controls. When true Modalbox window will be injected into the first form element.
		resizeCSSID: ''
	},
	_options: {},

	setOptions: function(options) {
		Object.extend(this.options, options || {});
	},

	_init: function(options) {
		// Setting up original options with default options
		Object.extend(this._options, this.options);
		this.setOptions(options);

		// Creating the overlay
		this.MBoverlay = new Element("div", {id: "MB_overlay", style: "opacity: 0"});

		// Creating the modal window
		this.MBwindowwrapper = new Element("div", {id: "MB_windowwrapper"}).update(
			this.MBwindow = new Element("div", {id: "MB_window", style: "display: none"}).update(
				this.MBframe = new Element("div", {id: "MB_frame"}).update(
					this.MBheader = new Element("div", {id: "MB_header"}).update(
						this.MBcaption = new Element("div", {id: "MB_caption"})
					)
				)
			)
		);

		this.MBclose = new Element("a", {id: "MB_close", title: this.options.closeString, href: "#"}).update("<span>" + this.options.closeValue + "</span>");
		this.MBheader.insert({'bottom':this.MBclose});

		this.MBcontent = new Element("div", {id: "MB_content"}).update(
			this.MBloading = new Element("div", {id: "MB_loading"}).update(this.options.loadingString)
		);
		this.MBframe.insert({'bottom':this.MBcontent});

		// Inserting into DOM. If parameter set and form element have been found will inject into it. Otherwise will inject into body as topmost element.
		// Be sure to set padding and marging to null via CSS for both body and (in case of asp.net) form elements.
		var injectToEl = this.options.aspnet ? $(document.body).down('form') : $(document.body);
		injectToEl.insert({'top':this.MBwindowwrapper});
		injectToEl.insert({'top':this.MBoverlay});

		var scrollOffsets = document.viewport.getScrollOffsets();
		if (scrollOffsets[1] > 0) {
			$('MB_window').setStyle({top:scrollOffsets[1] + 'px'});
		}

        //apparently the X offset may also come in question		
		if (scrollOffsets[0] > 0) {
			$('MB_window').setStyle({left:scrollOffsets[0] + 'px'});
		}		

		Event.observe(window, 'scroll', function() {
			scrollOffsets = document.viewport.getScrollOffsets();
			$('MB_window').setStyle({top:scrollOffsets[1] + 'px'});
			$('MB_window').setStyle({left:scrollOffsets[0] + 'px'});
		});

		// Initial scrolling position of the window. To be used for remove scrolling effect during ModalBox appearing
		this.initScrollX = window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft;
		this.initScrollY = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;

		//Adding event observers
		this.hideObserver = this._hide.bindAsEventListener(this);
		this.kbdObserver = this._kbdHandler.bindAsEventListener(this);
		this.resizeObserver = this._setWidthAndPosition.bindAsEventListener(this);
		this._initObservers();

		this.initialized = true; // Mark as initialized
	},

	show: function(content, options) {
		if (!this.initialized) this._init(options); // Check if MB is already initialized

		this._cleanUpContentIDs();

		this.content = content;
		this.setOptions(options);

		if (this.options.title) { // Updating title of the MB
			this.MBcaption.update(this.options.title);
		} else { // If title isn't given, the header will not displayed
			this.MBheader.hide();
			this.MBcaption.hide();
		}

		if (this.MBwindow.style.display == "none") { // First modal box appearing
			this._appear();
			this.event("onShow"); // Passing onShow callback
		} else { // If MB already on the screen, update it
			this._update();
			this.event("onUpdate"); // Passing onUpdate callback
		}
	},

	hide: function(options) { // External hide method to use from external HTML and JS
		if (this.initialized) {
			// Reading for options/callbacks except if event given as a parameter
			if (options && !Object.isFunction(options.element))
				Object.extend(this.options, options);
			this.event("beforeHide"); // Passing beforeHide callback
			if (this.options.transitions) {
				Effect.SlideUp(this.MBwindow, { duration: this.options.slideUpDuration, transition: Effect.Transitions.sinoidal, afterFinish: this._deinit.bind(this) });
			} else {
				this.MBwindow.hide();
				this._deinit();
			}
			Event.stopObserving(window, 'scroll');
		} else {
			throw("Modalbox is not initialized.");
		}
	},

	_hide: function(event) { // Internal hide method to use with overlay and close link
		event.stop(); // Stop event propagation for link elements
		// When clicked on overlay we'll check the option and in case of overlayClose == false we'll break hiding execution [Fix for #139]
		if (event.element().id == 'MB_overlay' && !this.options.overlayClose) return false;
		this.hide();
	},

	alert: function(message){
		var html = '<div class="MB_alert"><p>' + message + '</p><input type="button" onclick="Modalbox.hide()" value="OK" /></div>';
		Modalbox.show(html, {title: 'Alert: ' + document.title, width: 300});
	},

	_appear: function() { // First appearing of MB
		if (Prototype.Browser.IE6) { // Preparing IE 6 for showing modalbox
			window.scrollTo(0,0);
			this._prepareIEHtml("100%", "hidden");
			this._prepareIESelects("hidden");
		}
		this._setWidth();
		if(this.options.transitions) {
			this.MBoverlay.setOpacity(0);
			new Effect.Fade(this.MBoverlay, {
				from: 0,
				to: this.options.overlayOpacity,
				duration: this.options.overlayDuration,
				afterFinish: (function() {
					new Effect.SlideDown(this.MBwindow, {
						duration: this.options.slideDownDuration,
						transition: Effect.Transitions.sinoidal,
						afterFinish: this.loadContent.bind(this)
					});
				}).bind(this)
			});
		} else {
			this.MBoverlay.setOpacity(this.options.overlayOpacity);
			this.MBwindow.show();
			this.loadContent();
		}
		Event.observe(window, "resize", this.resizeObserver);
	},

	resize: function(byWidth, byHeight, options) { // Change size of MB without content reloading
		var oWidth = $(this.MBoverlay).getWidth();
		var wHeight = $(this.MBwindow).getHeight();
		var wWidth = $(this.MBwindow).getWidth();
		var hHeight = $(this.MBheader).getHeight();
		var cHeight = $(this.MBcontent).getHeight();
		var newHeight = ((wHeight - hHeight + byHeight) < cHeight) ? (cHeight + hHeight) : (wHeight + byHeight);

		var el = $(this.MBwindow);
		var contentEl = $(this.MBcontent);
		var windowBottomMargin = 10;
		newHeight += windowBottomMargin;
		var windowOffset = (parseInt(el.getStyle('margin-top'), 0) + parseInt(el.getStyle('margin-bottom'), 0) + parseInt(el.getStyle('border-top-width'), 0) + parseInt(el.getStyle('border-bottom-width'), 0)) + windowBottomMargin;
		var contentPadding = (parseInt(contentEl.getStyle('padding-top')) + parseInt(contentEl.getStyle('padding-bottom')));

		if ((newHeight + windowOffset + contentPadding) > document.viewport.getHeight()) {
			// adjust window height to account for margins and border widths
			newHeight = document.viewport.getHeight() - windowOffset - windowBottomMargin;
			// calculate content height including header height and padding values
			newcHeight = newHeight - hHeight - parseInt($(this.MBframe).getStyle('padding-bottom'), 0) - parseInt($(this.MBcontent).getStyle('padding-bottom'), 0);
			$(this.MBcontent).setStyle({height:newcHeight + 'px'});
		} else if ($(this.MBcontent).getStyle('height')) {
			// release any MB_content height set prior to establish scrollbars in content area
			$(this.MBcontent).setStyle({height:''});
		}

		var newWidth = wWidth + byWidth;
		//var newStyle = {width: newWidth + "px", height: newHeight + "px", left: (o.width - newWidth)/2 + "px"};
		var newStyle = {width: newWidth + "px", height: newHeight + "px"};
		this.options.width = newWidth;
		if (options) this.setOptions(options); // Passing callbacks
		if (this.options.transitions && !Modalbox.animating) {
			Modalbox.animating = true;
			new Effect.Morph(this.MBwindow, {
				style: newStyle,
				duration: this.options.resizeDuration,
				beforeStart: function(fx){
					fx.element.setStyle({overflow: "hidden"}); // Fix for MSIE 6 to resize correctly
				},
				afterFinish: (function(fx) {
					fx.element.setStyle({overflow: "visible"});
					this.event("_afterResize"); // Passing internal callback
					this.event("afterResize"); // Passing callback
					Modalbox.animating = false;
				}).bind(this)
			});
		} else {
			this.MBwindow.setStyle(newStyle);
			(function() {
				this.event("_afterResize"); // Passing internal callback
				this.event("afterResize"); // Passing callback
			}).bind(this).defer();
		}
	},

	resizeToContent: function(options){
		// Resizes the modalbox window to the actual content height.
		// This might be useful to resize modalbox after some content modifications which were changed content height.

		if (typeof options == "undefined") {
			options = {};
		}

		// check to see if MB_content includes any images
		var mbimages = $('MB_content').select('img');
		var totalimages = mbimages.length;
		if (mbimages[0]) {
			if (typeof options.imagesloaded == "undefined") {

				var loadedImages = $A();
				var loadedImageTotal = 0;
				mbimages.each(function(o,idx) {
					loadedImages[idx] = new Image();
					loadedImages[idx].src = o.src;
					loadedImages[idx].onload = function() {
						loadedImageTotal++;
						if (loadedImageTotal == totalimages) {
							// make sure all images have been rendered by checking their height
							var imageincomplete = false;
							mbimages.each(function(i) {
								if (i.height == 0) {
									imageincomplete = true;
								}
							});
							if (imageincomplete || Modalbox.animating) {
								// some image hasn't been rendered yet, trigger resize loop until it is
								Modalbox.resizeToContent();
							} else {
								// trigger one final resize, but set imagesloaded option to skip inspection of images
								options.imagesloaded = true;
								Modalbox.resizeToContent(options);
							}
						}
					}
				})
			}
		}

		var byWidth = 0, byHeight = this.options.height - this.MBwindow.getHeight();
		if (options.resizeCSSID && $(options.resizeCSSID)) {
			// byWidth is the amount of pixels needed to increase/decrease window to meet width of options.resizeCSSID
			// plus a 10 pixel margin to accommodate scrollbars
			byWidth = $(options.resizeCSSID).getWidth() - $(this.MBwindow).getWidth() + (parseInt($(this.MBcontent).getStyle('padding-left'), 0) + parseInt($(this.MBcontent).getStyle('padding-right'), 0)) + 15;
		}
		if (byHeight != 0) {
			this.resize(byWidth, byHeight, options);
		}
	},

	resizeToInclude: function(element, options){
		// Resizes the modalbox window to the cumulative height of element. Calculations are using CSS properties for margins and border.
		// This method might be useful to resize modalbox before including or updating content.

		var el = $(element);
		var elHeight = el.getHeight() + parseInt(el.getStyle('margin-top'), 0) + parseInt(el.getStyle('margin-bottom'), 0) + parseInt(el.getStyle('border-top-width'), 0) + parseInt(el.getStyle('border-bottom-width'), 0);
		if (elHeight > 0) {
			this.resize(0, elHeight, options);
		}
	},

	_update: function() { // Updating MB in case of wizards
		this.MBcontent.update($(this.MBloading).update(this.options.loadingString));
		this.loadContent();
	},

	loadContent: function() {
		if (this.event("beforeLoad") != false) { // If callback passed false, skip loading of the content
			if (typeof this.content == 'string') {
				var htmlRegExp = new RegExp(/<\/?[^>]+>/gi);
				if (htmlRegExp.test(this.content)) { // Plain HTML given as a parameter
					this._processContent(this.content);
				} else { // URL given as a parameter. We'll request it via Ajax
					new Ajax.Request(this.content, {
						method: this.options.method.toLowerCase(),
						parameters: this.options.params,
						onComplete: (function(response) {
							this._processContent(response.responseText);
						}).bind(this),
						onException: function(instance, exception){
							Modalbox.hide();
							throw('Modalbox Loading Error: ' + exception);
						}
					});
				}
			} else if (typeof this.content == 'object') { // HTML Object is given
				this._insertContent(this.content);
			} else {
				this.hide();
				throw('Modalbox Parameters Error: Please specify correct URL or HTML element (plain HTML or object)');
			}
		}
	},

	_processContent: function(content) {
		var html = content.stripScripts(), scripts = content.extractScripts();
		this._insertContent(html, function() {
			scripts.map(function(script) {
				return eval(script.replace("<!--", "").replace("// -->", ""));
			}, window);
		});
	},

	_insertContent: function(content, callback) {
		this.MBcontent.hide().update();

		if (typeof content == 'string') { // Plain HTML is given
			this.MBcontent.insert(new Element("div", { style: "display: none" }).update(content)).down().show();
		} else if (typeof content == 'object') { // HTML Object is given
			var _htmlObj = content.cloneNode(true); // If node is already a part of DOM we'll clone it
			// If cloneable element has ID attribute defined, modify it to prevent duplicates
			if (content.id) content.id = "MB_" + content.id;
			// Add prefix for IDs on all elements inside the DOM node
			$(content).select('*[id]').each(function(el) { el.id = "MB_" + el.id; });
			this.MBcontent.insert(_htmlObj).down('div').show();
			if (Prototype.Browser.IE6) { // Toggling back visibility for hidden selects in IE
				this._prepareIESelects("", "#MB_content ");
			}
		}

		// Prepare and resize modal box for content
		if (this.options.height == this._options.height) {
			this.resize((this.options.width - $(this.MBwindow).getWidth()), this.MBcontent.getHeight() - $(this.MBwindow).getHeight() + this.MBheader.getHeight(), {
				afterResize: (function() {
					this._putContent.bind(this, callback).defer(); // MSIE fix
				}).bind(this)
			});
		} else { // Height is defined. Creating a scrollable window
			this._setWidth();
			this.MBcontent.setStyle({
				overflow: 'auto',
				height: this.MBwindow.getHeight() - this.MBheader.getHeight() - 13 + 'px'
			});
			this._putContent.bind(this, callback).defer(); // MSIE fix
		}
	},

	_putContent: function(callback) {
		this.MBcontent.show();
		this._findFocusableElements();
		this._setFocus(); // Setting focus on first 'focusable' element in content (input, select, textarea, link or button)
		if (Object.isFunction(callback))
			callback(); // Executing internal JS from loaded content
		this.event("afterLoad"); // Passing callback
	},

	activate: function(options) {
		this.setOptions(options);
		this.active = true;
		if (this.options.overlayClose)
			this.MBoverlay.observe("click", this.hideObserver);
		this.MBclose.observe("click", this.hideObserver).show();
		if (this.options.transitions && this.options.inactiveFade)
			new Effect.Appear(this.MBwindow, {duration: this.options.slideUpDuration});
	},

	deactivate: function(options) {
		this.setOptions(options);
		this.active = false;
		if (this.options.overlayClose)
			this.MBoverlay.stopObserving("click", this.hideObserver);
		this.MBclose.stopObserving("click", this.hideObserver).hide();
		if (this.options.transitions && this.options.inactiveFade)
			new Effect.Fade(this.MBwindow, {duration: this.options.slideUpDuration, to: 0.75});
	},

	_initObservers: function() {
		this.MBclose.observe("click", this.hideObserver);
		if (this.options.overlayClose)
			this.MBoverlay.observe("click", this.hideObserver);
		// Gecko and Opera are moving focus a way too fast, all other browsers are okay with keydown
		var kbdEvent = (Prototype.Browser.Gecko || Prototype.Browser.Opera) ? "keypress" : "keydown";
		Event.observe(document, kbdEvent, this.kbdObserver);
	},

	_removeObservers: function() {
		this.MBclose.stopObserving("click", this.hideObserver);
		if (this.options.overlayClose)
			this.MBoverlay.stopObserving("click", this.hideObserver);
		var kbdEvent = (Prototype.Browser.Gecko || Prototype.Browser.Opera) ? "keypress" : "keydown";
		Event.stopObserving(document, kbdEvent, this.kbdObserver);
	},

	_setFocus: function() {
		// Setting focus to the first 'focusable' element which is one with tabindex = 1 or the first in the form loaded.
		if (this.options.autoFocusing) { // autoFocusing should is enabled in options. Fixes #30
			if (this.focusableElements.length) {
				var firstEl = this.focusableElements.find(function (el){
					return el.tabIndex == 1;
				}) || this.focusableElements.first();
				this.currFocused = this.focusableElements.toArray().indexOf(firstEl);
				firstEl.focus(); // Focus on first focusable element except close button
			} else if (this.MBclose.visible()) {
				this.MBclose.focus(); // If no focusable elements exist focus on close button
			}
		}
	},

	_findFocusableElements: function() { // Collect form elements and links from MB content
		// TODO maybe add :enabled to select and textarea elements
		this.focusableElements = this.MBcontent.select('input:not([type=hidden]):enabled, select, textarea, button, a[href]');
	},

	_kbdHandler: function(event) {
		var node = event.element();
		switch(event.keyCode) {
			case Event.KEY_TAB:
				event.stop();
				this._findFocusableElements();
				if (!this.focusableElements.length) return false; // Do nothing if there is no elements to gain focus

				// Switching currFocused to the element which was focused by mouse instead of TAB-key. Fix for #134
				if (node != this.focusableElements[this.currFocused])
					this.currFocused = this.focusableElements.indexOf(node);

				if (!event.shiftKey) { // Focusing in direct order
					if (this.currFocused >= this.focusableElements.length - 1) {
						this.currFocused = 0;
					} else {
						this.currFocused++;
					}
				} else { // Shift key is pressed. Focusing in reverse order
					if (this.currFocused <= 0) {
						this.currFocused = this.focusableElements.length - 1;
					} else {
						this.currFocused--;
					}
				}
				this.focusableElements[this.currFocused].focus();
				break;
			case Event.KEY_ESC:
				if (this.active) this._hide(event);
				break;
			case 32:
				this._preventScroll(event);
				break;
			case 0: // For Gecko browsers compatibility
				if (event.which == 32) this._preventScroll(event);
				break;
			case Event.KEY_UP:
			case Event.KEY_DOWN:
			case Event.KEY_PAGEDOWN:
			case Event.KEY_PAGEUP:
			case Event.KEY_HOME:
			case Event.KEY_END:
				var tagName = node.tagName.toLowerCase();
				// Safari operates in slightly different way. This realization is still buggy in Safari.
				if (Prototype.Browser.WebKit && !["textarea", "select"].include(tagName)) {
					event.stop();
				} else if ((tagName == "input" && ["submit", "button"].include(node.type)) || (tagName == "a")) {
					event.stop();
				}
				break;
		}
	},

	_preventScroll: function(event) { // Disabling scrolling by "space" key
		if (!["input", "textarea", "select", "button"].include(event.element().tagName.toLowerCase()))
			event.stop();
	},

	_deinit: function() {
		this._removeObservers();
		Event.stopObserving(window, "resize", this.resizeObserver);
		if (this.options.transitions) {
			Effect.toggle(this.MBoverlay, 'appear', {duration: this.options.overlayDuration, afterFinish: this._removeElements.bind(this) });
		} else {
			this.MBoverlay.hide();
			this._removeElements();
		}
		this.MBcontent.setStyle({overflow: '', height: ''});
	},

	_cleanUpContentIDs: function() {
		// Replace prefixes 'MB_' in IDs for the original content
		if (typeof this.content == 'object') {
			if (this.content.id && this.content.id.match(/MB_/)) {
				this.content.id = this.content.id.replace(/MB_/, "");
			}

			this.content.select('*[id]').each(function(el) {
				el.id = el.id.replace(/MB_/, "");
			});
		}
	},

	_removeElements: function() {
		if (Prototype.Browser.Opera) { // Remove overlay after-effects in Opera
			window.scrollBy(0, 0);
		}
		this.MBoverlay.remove();
		$(this.MBwindowwrapper).remove();
		if (Prototype.Browser.IE6) {
			this._prepareIEHtml("", ""); // If set to auto MSIE will show horizontal scrolling
			this._prepareIESelects("");
			window.scrollTo(this.initScrollX, this.initScrollY);
		}

		this._cleanUpContentIDs();

		// Initialized will be set to false
		this.initialized = false;
		this.event("afterHide"); // Passing afterHide callback
		this.setOptions(this._options); // Settings options object into initial state
	},

	_setWidth: function() { // Set size
		this.MBwindow.setStyle({width: this.options.width + "px", height: this.options.height + "px"});
	},

	_setWidthAndPosition: function() {
		this.MBwindow.setStyle({
			width: this.options.width + "px"
		});
	},

	_prepareIEHtml: function(height, overflow) {
		// IE6 requires width and height set to 100% and overflow hidden
		$$('html, body').invoke('setStyle', {
			width: height,
			height: height,
			overflow: overflow
		});
	},

	_prepareIESelects: function(visibility, prefix) {
		// Toggle visibility for select elements
		$$((prefix || "") + "select").invoke('setStyle', {
			'visibility': visibility
		});
	},

	event: function(eventName) {
		var r = true;
		if (this.options[eventName]) {
			var returnValue = this.options[eventName](); // Executing callback
			this.options[eventName] = null; // Removing callback after execution
			if (!Object.isUndefined(returnValue))
				r = returnValue;
		}
		return r;
	}
};

Object.extend(Modalbox, Modalbox.Methods);

if (Modalbox.overrideAlert) window.alert = Modalbox.alert;
