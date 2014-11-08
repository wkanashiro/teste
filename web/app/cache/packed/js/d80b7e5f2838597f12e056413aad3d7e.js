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

function showLostPassword ()
{
	var div = document.getElementById ('idLostPassword');

	if (document.getElementById ('formLost').login.value == '')
		document.getElementById ('formLost').login.value = document.getElementById ('formLogin').login.value;

	if (div.style.display == '')
		div.style.display = 'none';
	else
		div.style.display = '';
}

function lostPassword ()
{
	showWaitLost ();

	clearMessage ();

	var login = document.getElementById ('formLost').login.value;

	tAjax.lostPassword (login);

	tAjax.delay (function () {
		tAjax.showMessages ();

		hideWaitLost ();
	});

	return false;
}

function showWait ()
{
	var form = document.getElementById('idLogon');

	var wait = document.getElementById('idWait');

	form.style.display = 'none';
	wait.style.display = '';
}

function hideWait ()
{
	var form = document.getElementById('idLogon');

	var wait = document.getElementById('idWait');

	wait.style.display = 'none';
	form.style.display = '';
}

function showWaitLost ()
{
	var form = document.getElementById('idLost');

	var wait = document.getElementById('idWaitLost');

	form.style.display = 'none';
	wait.style.display = '';
}

function hideWaitLost ()
{
	var form = document.getElementById('idLost');

	var wait = document.getElementById('idWaitLost');

	wait.style.display = 'none';
	form.style.display = '';
}

function clearMessage ()
{
	document.getElementById ('idOldMessage').style.display = 'none';
	document.getElementById ('labelMessage').innerHTML = '';
}

function capsCheck (ev)
{
	var e = ev || window.event;
	var char = e.keyCode ? e.keyCode : e.which;
	
	var isShift = e.shiftKey ? e.shiftKey : (char == 16 ? true : false);
	
	if(((char >= 65 && char <= 90) && !isShift) || ((char >= 97 && char <= 122) && isShift))
	{
		document.getElementById ('idOldMessage').style.display = 'block';
		document.getElementById ('idCaps').style.display = 'block';
	}
	else
		document.getElementById ('idCaps').style.display = 'none';
}

function showFormRegister (id)
{
	var sel = document.getElementById (id);
	
	var divs = (sel.parentNode).getElementsByTagName ('div');
	
	var hide = sel.className == 'cUserType selected' ? true : false;
	
	for (var i = 1; i < divs.length ; i++)
		if (divs [i].className == 'cUserType selected')
			divs [i].className = 'cUserType unselected';
	
	if (!hide)
		sel.className = 'cUserType selected';
}

function showValidate (id)
{
	var sel = document.getElementById (id);
	
	var divs = (sel.parentNode).getElementsByTagName ('div');
	
	var hide = sel.className == 'cValidateMethod selected' ? true : false;
	
	for (var i = 1; i < divs.length ; i++)
		if (divs [i].className == 'cValidateMethod selected')
			divs [i].className = 'cValidateMethod unselected';
	
	if (!hide)
		sel.className = 'cValidateMethod selected';
}

function getTimeZone ()
{
	tmSummer = new Date(Date.UTC(2005, 6, 30, 0, 0, 0, 0));
	so = -1 * tmSummer.getTimezoneOffset();
	tmWinter = new Date(Date.UTC(2005, 12, 30, 0, 0, 0, 0));
	wo = -1 * tmWinter.getTimezoneOffset();

	if (-660 == so && -660 == wo) return 'Pacific/Midway';
	if (-600 == so && -600 == wo) return 'Pacific/Tahiti';
	if (-570 == so && -570 == wo) return 'Pacific/Marquesas';
	if (-540 == so && -600 == wo) return 'America/Adak';
	if (-540 == so && -540 == wo) return 'Pacific/Gambier';
	if (-480 == so && -540 == wo) return 'US/Alaska';
	if (-480 == so && -480 == wo) return 'Pacific/Pitcairn';
	if (-420 == so && -480 == wo) return 'US/Pacific';
	if (-420 == so && -420 == wo) return 'US/Arizona';
	if (-360 == so && -420 == wo) return 'US/Mountain';
	if (-360 == so && -360 == wo) return 'America/Guatemala';
	if (-360 == so && -300 == wo) return 'Pacific/Easter';
	if (-300 == so && -360 == wo) return 'US/Central';
	if (-300 == so && -300 == wo) return 'America/Bogota';
	if (-240 == so && -300 == wo) return 'US/Eastern';
	if (-240 == so && -240 == wo) return 'America/Caracas';
	if (-240 == so && -180 == wo) return 'America/Santiago';
	if (-180 == so && -240 == wo) return 'Canada/Atlantic';
	if (-180 == so && -180 == wo) return 'America/Montevideo';
	if (-180 == so && -120 == wo) return 'America/Sao_Paulo';
	if (-150 == so && -210 == wo) return 'America/St_Johns';
	if (-120 == so && -180 == wo) return 'America/Godthab';
	if (-120 == so && -120 == wo) return 'America/Noronha';
	if (-60 == so && -60 == wo) return 'Atlantic/Cape_Verde';
	if (0 == so && -60 == wo) return 'Atlantic/Azores';
	if (0 == so && 0 == wo) return 'Africa/Casablanca';
	if (60 == so && 0 == wo) return 'Europe/London';
	if (60 == so && 60 == wo) return 'Africa/Algiers';
	if (60 == so && 120 == wo) return 'Africa/Windhoek';
	if (120 == so && 60 == wo) return 'Europe/Amsterdam';
	if (120 == so && 120 == wo) return 'Africa/Harare';
	if (180 == so && 120 == wo) return 'Europe/Athens';
	if (180 == so && 180 == wo) return 'Africa/Nairobi';
	if (240 == so && 180 == wo) return 'Europe/Moscow';
	if (240 == so && 240 == wo) return 'Asia/Dubai';
	if (270 == so && 210 == wo) return 'Asia/Tehran';
	if (270 == so && 270 == wo) return 'Asia/Kabul';
	if (300 == so && 240 == wo) return 'Asia/Baku';
	if (300 == so && 300 == wo) return 'Asia/Karachi';
	if (330 == so && 330 == wo) return 'Asia/Calcutta';
	if (345 == so && 345 == wo) return 'Asia/Katmandu';
	if (360 == so && 300 == wo) return 'Asia/Yekaterinburg';
	if (360 == so && 360 == wo) return 'Asia/Colombo';
	if (390 == so && 390 == wo) return 'Asia/Rangoon';
	if (420 == so && 360 == wo) return 'Asia/Almaty';
	if (420 == so && 420 == wo) return 'Asia/Bangkok';
	if (480 == so && 420 == wo) return 'Asia/Krasnoyarsk';
	if (480 == so && 480 == wo) return 'Australia/Perth';
	if (540 == so && 480 == wo) return 'Asia/Irkutsk';
	if (540 == so && 540 == wo) return 'Asia/Tokyo';
	if (570 == so && 570 == wo) return 'Australia/Darwin';
	if (570 == so && 630 == wo) return 'Australia/Adelaide';
	if (600 == so && 540 == wo) return 'Asia/Yakutsk';
	if (600 == so && 600 == wo) return 'Australia/Brisbane';
	if (600 == so && 660 == wo) return 'Australia/Sydney';
	if (630 == so && 660 == wo) return 'Australia/Lord_Howe';
	if (660 == so && 600 == wo) return 'Asia/Vladivostok';
	if (660 == so && 660 == wo) return 'Pacific/Guadalcanal';
	if (690 == so && 690 == wo) return 'Pacific/Norfolk';
	if (720 == so && 660 == wo) return 'Asia/Magadan';
	if (720 == so && 720 == wo) return 'Pacific/Fiji';
	if (720 == so && 780 == wo) return 'Pacific/Auckland';
	if (765 == so && 825 == wo) return 'Pacific/Chatham';
	if (780 == so && 780 == wo) return 'Pacific/Enderbury'
	if (840 == so && 840 == wo) return 'Pacific/Kiritimati';
	return 'US/Pacific';
}