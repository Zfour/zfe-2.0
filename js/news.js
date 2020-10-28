
let url = "https://www.mxnzp.com/api/news/list?typeId=515&page=1&app_id=pqzcrjmnjjidsgn8&app_secret=c1ZwakloSzZpNWJXOG5BeGhnS1FkZz09"
  $(function () {
    $.ajax({
      //请求方式
      type: "GET",
      //文件位置
      url: url,
      //返回数据格式为json,也可以是其他格式如
      dataType: "json",
      beforeSend: function (XMLHttpRequest) {
        //alert('远程调用开始...');


      },
      //请求成功后要执行的函数，拼接html
      success: function (data) {
        console.log("success");
        gamenews.newsvue = data.data;
		gamenews.newsvue = gamenews.newsvue.slice(0,5);
        console.log(gamenews.newsvue);
      }
    });
  });
  
 const gamenews = new Vue({
    el: '#gamenews',
    data: {
	  current:0,
      message: '你好！',
      newsvue: [],
	  listtype: ["游戏 ","军事 ","财经 ","科技 ","娱乐 "],
	  listcode: ["515","511","509","510","520"],
	  newpostvue:{
		  title:'',
		  ptime:'',
		  content:'',
	  }
    },
	methods:{
		changetype(index){
			let changeurl = "https://www.mxnzp.com/api/news/list?typeId=" + 
			this.listcode[index] + "&page=1&app_id=pqzcrjmnjjidsgn8&app_secret=c1ZwakloSzZpNWJXOG5BeGhnS1FkZz09";
			    $.ajax({
      //请求方式
      type: "GET",
      //文件位置
      url: changeurl,
      //返回数据格式为json,也可以是其他格式如
      dataType: "json",
      beforeSend: function (XMLHttpRequest) {
        //alert('远程调用开始...');


      },
      //请求成功后要执行的函数，拼接html
      success: function (data) {
        console.log("success");
        gamenews.newsvue = data.data;
		gamenews.newsvue = gamenews.newsvue.slice(0,5);
        console.log(gamenews.newsvue);
      }
    });
	
		},
		addClass:function(index){
        this.current=index;
		this.changetype(index);
      },
		replace(){
			for(let i=0;i<gamenews.newpostvue.images.length;i++){	
			let errorlink = '/img/404.jpg'
			gamenews.newpostvue.content = gamenews.newpostvue.content.replace(gamenews.newpostvue.images[i].position,'<div  style="margin:5%;object-fit:cover;height:500px;width:auto;background:url('+ gamenews.newpostvue.images[i].imgSrc + ')no-repeat center center;"></div>') 
			}
		},
		hidemodle(){
			$("#newsmodal").hide();
			 $(".blackscreen").hide();
		},
		 getnewsdata(index){
			 $("#newsmodal").show();
			 $(".blackscreen").show();
			console.log('hahaha' + index); 
			 let posturl = "https://www.mxnzp.com/api/news/details?newsId=" +
            this.newsvue[index].newsId +
        "&app_id=pqzcrjmnjjidsgn8&app_secret=c1ZwakloSzZpNWJXOG5BeGhnS1FkZz09";
		console.log(posturl); 
		$.ajax({
      //请求方式
      type: "GET",
      //文件位置
      url: posturl,
      //返回数据格式为json,也可以是其他格式如
      dataType: "json",
      beforeSend: function (XMLHttpRequest) {
        //alert('远程调用开始...');


      },
      //请求成功后要执行的函数，拼接html
      success: function (data) {
        console.log("success2");
        gamenews.newpostvue = data.data;
		gamenews.replace();
        console.log(gamenews.newpostvue.content);
      }
    });
		 },
		 
	}
  }) 