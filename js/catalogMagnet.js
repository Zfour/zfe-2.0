const catalogMagnet = new Vue({
	el:'#catalogMagnet',
	data:{
		message:'你好！',
		link: [],
		postnum:[],
		//这里是磁贴背景图片
		img:[
			"https://cdn.jsdelivr.net/gh/Zfour/zfe-2.0@1.12/images/cataimage/b1.JPG",
			"https://cdn.jsdelivr.net/gh/Zfour/zfe-2.0@1.12/images/cataimage/b2.JPG",
			"https://cdn.jsdelivr.net/gh/Zfour/zfe-2.0@1.12/images/cataimage/b3.JPG",
			"https://cdn.jsdelivr.net/gh/Zfour/zfe-2.0@1.12/images/cataimage/b4.JPG",
			"https://cdn.jsdelivr.net/gh/Zfour/zfe-2.0@1.12/images/cataimage/b5.JPG",
			"https://cdn.jsdelivr.net/gh/Zfour/zfe-2.0@1.12/images/cataimage/b6.JPG",
			"https://cdn.jsdelivr.net/gh/Zfour/zfe-2.0@1.12/images/cataimage/b7.JPG",
			"https://cdn.jsdelivr.net/gh/Zfour/zfe-2.0@1.12/images/cataimage/b8.JPG",
		],
		//这里是磁贴描述信息
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
		//这里是磁贴的文字颜色
		figLetColor: {color:'white'},
		//这里是磁贴的文字遮罩
		figLetimg: {backgroundImage: 'linear-gradient(to bottom,rgba(0, 0, 0, 0.4) 25%,rgba(16,16,16,0) 100%)'},
		//这里是当磁贴图片为透明背景png时默认展示的背景颜色
		figbackColor: {background:'#000000 URL()'},
		//这里是当磁贴图片为透明背景png时默认展示的凹凸效果
		figShadow: {boxShadow: 'inset 3px 3px 18px 0px rgba(50,50,50, 0.4)'},
	},

})

catalogMagnet.link = $(".categoryMagnetitem").children().children().children("a");
catalogMagnet.postnum = $(".categoryMagnetitem").children().children().children("span");
let linecolor = catalogMagnet.figLetColor.color
$("<style type='text/css' id='dynamic-after' />").appendTo("head");
$("#dynamic-after").text(".magnetname:after{background:" + linecolor + "!important}");