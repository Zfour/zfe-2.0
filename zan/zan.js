AV.init({appId:"VqQJf6gxMeAMKUwwq1bWe5JY-MdYXbMMI",appKey:"r72Soi69hGmPdfKcGubbCWAn"});var flag=0,parse_url=/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/,url=window.location.href.replace(parse_url,"$3/$5");function goodplus(e,t){senddata(e,1)}function senddata(e,t){AV.Object.extend("Zan");var n=new AV.Query("Zan");n.contains("url",e),n.find().then((function(n){var a=n.length;if(0==t){if(0==a){console.log("新增");var i=new(o=AV.Object.extend("Zan"));i.set("url",e),i.set("views",0),i.save().then((function(e){document.getElementById("zan_text").innerHTML="0"}))}else if(1==a){console.log("显示");var s=n[0].attributes.views;document.getElementById("zan_text").innerHTML=s}}else if(1==t){console.log("更新+1");s=n[0].attributes.views;var o,r=n[0].id;(o=AV.Object.createWithoutData("Zan",r)).set("views",s+1),o.save(),document.getElementById("zan_text").innerHTML=s+1}}))}function remcls(){$(".heart").removeClass("heartAnimation")}function addcls(){$(".heart").addClass("heartAnimation")}$(document).ready((function(){$(".post-content").append("<div id='zan' class='clearfix'><div class='heart' onclick=\"goodplus('"+url+"')\"></div><br><div id='zan_text'></div></div>"),senddata(url,flag),$("body").on("click",".heart",(function(){$(".heart").css("background-position",""),"heart"===$(".heart").attr("class")?($(".heart").addClass("heartAnimation"),tui=setTimeout("remcls()",800)):(remcls(),tuiw=setTimeout("addcls()",100))}))}));