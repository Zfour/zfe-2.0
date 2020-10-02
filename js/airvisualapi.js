
var clockurl = "https://api.airvisual.com/v2/nearest_city?key=123312fc-84e9-49c4-8592-66f018e912ad"
    $(function(){
        $.ajax({
            //请求方式
            type:"GET",
            //文件位置
            url:clockurl,
            //返回数据格式为json,也可以是其他格式如
            dataType: "json",
			beforeSend:function(XMLHttpRequest){
              //alert('远程调用开始...');
			 
             
            },
            //请求成功后要执行的函数，拼接html
            success: function(data){
			    str1=data.data.current.weather.ic;
				imagelink= 'images/weather/' +  str1 + '.png'
				str2=data.data.current.weather.tp;
				str3=data.data.current.weather.hu;
				str4=data.data.current.pollution.aqius;
                var str='<span class="weather">';
				str+='<img id="weatherimg" >'  +  '</span>' + '<span class="temperature">' + str2 + '*C'+ '</span>';
				str+='<span class="humidity">' +  '<img id="humidityimg" >'  + ' '  + str3 + '%' + '</span>';
				var str5='<span class="usaqi">';
				str5+= str4  +' ' + 'US'+' ' +'AQI' + '</span>';
				str5+= '<span class="city">' + data.data.city + '</span>';
                $(str).insertAfter($(".date").eq(0));
				$(str5).insertBefore($(".daylight").eq(0));
				document.getElementById("weatherimg").src = imagelink
				document.getElementById("humidityimg").src = 'images/weather/hu.png'
				console.log(data)
				
				document.getElementById("clock").style.opacity= 1
            }
        });
    });
	