function strlen$(str) { return str.length; }
function substr$(str, start, length=-1) { if (length == -1) { length = str.length - start;	} return str.substr(start, length); }

function strtrim$(str, char) {
	    res = ''
	    for (var i = 0; i < str.length; i++) {
		        if (str[i] != char) { res += str[i]; 		}
		    	}
	    return res;
}


function strtriml$(str, char) {
	    res = ''
	    if (str[0] != char) { return str; 	}
	    for (var i = 0; i < str.length; i++) {
		        if (str[i] != char) { res = str.substr(i); break; 		}
		    	}
	    return res;
}


function strtrimr$(str, char) {
	    res = ''
	    if (str[str.length-1] != char) { return str; 	}
	    for (var i = str.length-1; i >= 0; i--) {
		        if (str[i] != char) { res = str.substr(0, i+1); break; 		}
		    	}
	    return res;
}

function stridx$(cmpstr, string) { return cmpstr.indexOf(string); }
function strridx$(cmpstr, string) { return cmpstr.lastIndexOf(string); }
function strrep$(src, pattern, replacement) {
	var regExp = new RegExp(pattern, "g");
	return src.replace(regExp, replacement); }
$(function() {
	;
	var data = '';
	data = 'This is the file. The file is multi line.';
	var idx = 0;
	while (true) {
		var a = '';
		var a$_web = '';
		var a$accesskey = '';
		var a$class = '';
		var a$contextmenu = '';
		var a$dir = '';
		var a$dropzone = '';
		var a$id = '';
		var a$itemid = '';
		var a$itemprop = '';
		var a$itemref = '';
		var a$itemscope = '';
		var a$itemtype = '';
		var a$lang = '';
		var a$style = '';
		var a$title = '';
		var a$translate = '';
		var a$contenteditable = false;
		var a$draggable = false;
		var a$hidden = false;
		var a$spellcheck = false;
		var a$tabindex = 0;
		var a$text = '';
		var a$color = '';
		var a$backcolor = '';
		{
			a$_web = 'Letter';
		}
		$('body').append("<span id='a'></span>");
		a$text = substr$(data,idx,1);
		$('#a').html(a$text);
		a$id = ('input' + String((idx)));
		$('#a').attr('id', a$id);
		idx = (idx + 1);
		if ((idx == strlen$(data))) {
			break;
		}
	}
	return;
});
