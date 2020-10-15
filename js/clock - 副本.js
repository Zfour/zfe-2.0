

Vue.component("clockvisual",{
  template:`
<div>
<table>
<tr>
<td>1602772896886</td>
<td></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
</table>
</div>
     `
})
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
    }

});

const week = ['SUN', 'MON', 'TUE', 'WED','THU' ,'FRI', 'SAT'];
let timerID = setInterval(updateTime, 1000);
updateTime();
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
};

function zeroPadding(num, digit) {
    let zero = '';
    for(var i = 0; i < digit; i++) {
        zero += '0';
    }
    return (zero + num).slice(-digit);
}

