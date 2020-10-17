const catalogMagnet = new Vue({
    el:'#catalogMagnet',
    data:{
      message:'你好！',
	  catalog:["1","2","3","4","5","6","7","8"],
	  link: [],
	  postnum:[],
	  img:[
	  "/images/b1.JPG",
	  "/images/b2.JPG",
	  "/images/b3.JPG",
	  "/images/b4.JPG",
	  "/images/b5.JPG",
	  "/images/b6.JPG",
	  "/images/b7.JPG",
	  "/images/b8.JPG",
	  ],
	  describe:[
	  "日本早安新闻",
	  "vue学习记录",
	  "我的各种作品",
	  "我的学习整理",
	  "我的各种教程",
	  "我的游戏评测",
	  "生活点点滴滴",
	  "一切胡思乱想",
	  ],
	  
    },
	
  })
  
catalogMagnet.link = $(".categoryMagnetitem").children().children().children("a");
catalogMagnet.postnum = $(".categoryMagnetitem").children().children().children("span");

