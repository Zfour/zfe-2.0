  let clockurl = "https://api.airvisual.com/v2/nearest_city?key=123312fc-84e9-49c4-8592-66f018e912ad"
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
        clock.weatherimg = 'https://zfe.space/images/weather/' +  data.data.current.weather.ic + '.png';
        clock.temperature = data.data.current.weather.tp;
        clock.humidity = data.data.current.weather.hu;
        clock.usaqi = data.data.current.pollution.aqius;
        clock.humidityimg = 'https://zfe.space/images/weather/hu.png';
        clock.city = data.data.city;
		clock.clockshow  = 'true';
		updateTime();
      }
    });
  });
  const clock = new Vue({
    el: '#clock',
    data: {
      time: '',
      weatherimg: '',
      temperature: '',
      humidityimg: '',
      humidity: '',
      usaqi: '',
      city: '',
      date: '',
      daylight: '',
	  clockshow:'false'
    },
	
  });

  const week = ['SUN', 'MON', 'TUE', 'WED','THU' ,'FRI', 'SAT'];
  let timerID = setInterval(updateTime, 1000);
  
  function updateTime() {
    let cd = new Date();
    clock.time = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
    clock.date = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth()+1, 2) + '-' + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];
    let hamorpm = cd.getHours();
    let str;
    if(hamorpm >12) {
      hamorpm -= 12;
      str = " PM";
    }else{
      str = " AM";
    }
    clock.daylight = str
  }

  function zeroPadding(num, digit) {
    let zero = '';
    for(let i = 0; i < digit; i++) {
      zero += '0';
    }
    return (zero + num).slice(-digit);
  }
