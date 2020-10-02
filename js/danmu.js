new Valine({
    el: '#vcomments-danmu' ,
    appId: 'Fa42H8oHI20p3VeSdujuvTt9-gzGzoHsz',
    appKey: 'FedAXRB4rDmtkPh6o1SCafeQ',
	placeholder: '发条弹幕吧！'
	
});

$(function () {
init_screen();
});


//考虑数据的交互，多久请求一下数据库
$(document).ready(function () {
  setInterval("startRequest()",5000);
   });
  
function startRequest()
{

number = parseInt($(".vnum").text()) - 1;
html="";

for (var i = number; i >= 0; i--) {
	
 html+= '<div  class="d_showp" style="color:'+ getReandomColor() + ';font-size:20px;">' + $(".vcontent").eq(i).text() + '</div>';
 
 }
var maxlength = $('.d_show').children().length;

if (maxlength > 100 ) { 
for (var i = 0; i < 80; i++) {
	$(".d_showp").eq(i).remove()
	}
	};

//$(".d_showp").remove();
$(".d_show").append(html);
init_screen();

}

function init_screen() {
var _top = 0;
$(".d_show").find("div").show().each(function () {
	var _left = $('.aside_content').offset().left -  $('.d_show').offset().left;
	var _height =  150 ;

	_top = _top + 15;
	if (_top >= _height ) { 
		_top =50;
	}
	$(this).css({left: _left, top: _top});
	var time = 6000;
	if ($(this).index() % 2 == 0) {
		time = 7000;
	}
	 if ($(this).index() % 3 == 0) {
		time = 10000;
	}
	if ($(this).index() % 4 == 0) {
		time = 12000;
	}
	if ($(this).index() % 5 == 0) {
		time = 13000;
	}
	if ($(this).index() % 7 == 0) {
		time = 14000;
	}
	if ($(this).index() % 8 == 0) {
		time = 15000;
	}
	$(this).animate({left: "-" + _left + "px"}, time, function () {

	});
});
}




//随机获取颜色值
function getReandomColor() {
return '#' + (function (h) {
	return new Array(7 - h.length).join("0") + h
})((Math.random() * 0x1000000 << 0).toString(16))
}

$("#vcomments-danmu div").addClass("test");