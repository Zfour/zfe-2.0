/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/05/20/2015-05-20/index.html","f7f772691484c69b499849e23a711a80"],["/2015/06/16/2015-06-16/index.html","da86b6f152d8c407ac811fbc2fa7bea4"],["/2015/12/12/2015-12-12/index.html","7a999e0f9e60095d63f565b3ab3eb473"],["/2016/06/08/2016-06-08/index.html","487c17e213351498f398adb986b3da4f"],["/2016/12/18/2016-12-18/index.html","299d7c1d421baebfed6194735d45b9f7"],["/2017/02/17/2017-02-17/index.html","8980f32e11a740c9a231c3a4d79d0bfa"],["/2017/03/17/2017-03-17/index.html","6c29258ddccfd5ebd70e0dee14d24993"],["/2017/04/06/2017-04-06/index.html","a18e469619a28dd9d233b909f46a9704"],["/2017/05/17/2017-05-17/index.html","85fd2b38cd1f4da29c0513bb9363c1ad"],["/2017/08/15/2017-08-15/index.html","34e46df464247d16ea6cf04dc3613539"],["/2017/09/16/2017-09-16-1/index.html","f3154184d8869f18d099b71cc036c7c4"],["/2017/09/16/2017-09-16/index.html","071d725769e7f79d120838583d061b87"],["/2017/09/21/2017-09-21/index.html","cb9d5f43becff7b5ff07a0f720a9db95"],["/2017/09/23/2017-09-23/index.html","1fd1a94cd13bc1d8feba84ebdae63ef1"],["/2017/09/26/2017-09-26/index.html","c73c76ea7df2cbfecd940c1300dfcb26"],["/2017/09/27/2017-09-27/index.html","cdabab34aa81a27f1fe0c5ec135e7ce2"],["/2017/10/04/2017-10-04/index.html","c382229a1224e18910c7cab2051be398"],["/2017/10/08/2017-10-08/index.html","95a707ecc7ead8fe2180a2474ac128dd"],["/2017/10/09/2017-10-09/index.html","7840d82931889c365e43bbe5bbe3fba8"],["/2017/10/15/2017-10-15/index.html","21219db2c5caf78aacdb1f2cd8e96e02"],["/2017/10/19/2017-10-19/index.html","c927bc7bfaffb67893fb6c6fb87128bd"],["/2017/10/23/2017-10-23-2/index.html","4ae5a05172ef03b68c5613de6edc93f7"],["/2017/10/23/2017-10-23/index.html","38c76a1cc1e1720dc94e839c49b3d503"],["/2017/11/08/2017-11-08/index.html","7494d0c318459046b9fb33b5d29be294"],["/2017/11/12/2017-11-12/index.html","1d2d4c8337d403a1c041ec724a6373e3"],["/2017/11/15/2017-11-15/index.html","80db72bff8b8f4573d2b1b14ece13c3c"],["/2017/11/27/2017-11-27/index.html","bd4ee7ea6c57609c775c652f28c7c240"],["/2017/12/06/2017-12-06/index.html","62c022daff30c26274f8b1ea5259f0dc"],["/2018/02/12/2018-02-12/index.html","7ac48208c2cb2a88f35760cfa2319215"],["/2018/03/26/2018-03-26/index.html","6f29bbd407359b95628c7a2d4abc7864"],["/2018/04/02/2018-04-02/index.html","63f1954788835d5b19c9876b7d2b6a92"],["/2018/04/24/2018-04-24/index.html","72d8b9173a20ab2257b651986ec8885f"],["/2018/05/18/2018-05-18/index.html","af2cb81a484f028d3e190aa7096e723c"],["/2018/05/23/2018-05-23/index.html","4a1a0a94bcbff7cb1646f95484f7e3d3"],["/2018/06/08/2018-06-08/index.html","8188e0f9be5c1184e4f88f66224d2faa"],["/2018/07/01/2018-07-01/index.html","93cd142e581438146c96204fe8cc3bd3"],["/2018/08/30/2018-08-30/index.html","a48491f49481eaf2ef70a5256d0b5591"],["/2020/07/20/2020-07-20/index.html","bf42482e71a113d8d6a39c81ba4f7e92"],["/2020/08/01/2020-08-01/index.html","a06a9d3b519d5908d56991b1cb11341e"],["/2020/08/02/2020-08-02/index.html","b6c6a188db57eefe782dd3992a0295f1"],["/2020/08/03/2020-08-03/index.html","c4da832c17abf2f1b8e5d6cc38c00560"],["/2020/08/04/2020-08-04-1/index.html","b2f3dd9704c2dd2aaac5bf522440096b"],["/2020/08/04/2020-08-04-2/index.html","c5caf44a75be44f263ba15f504fe9021"],["/2020/08/05/2020-08-05/index.html","efcdf030b59c7e510b2397e30e69d3ec"],["/2020/08/06/2020-08-06/index.html","dfdfa6a3abf2710da91e1d97080c0762"],["/2020/08/07/2020-08-07/index.html","b0323a513dd740f2d4f59512780f9124"],["/2020/08/08/2020-08-08/index.html","3bac6ca2105aa4061f4414d1b7990f76"],["/2020/08/09/2020-08-09/index.html","68a01c8554abaf7bf158d23cc0fc375c"],["/2020/08/10/2020-08-10/index.html","8e2b8109a8d472f3af58d7df1a93af90"],["/2020/08/11/2020-08-11/index.html","69d5292c6862a65a330f2af00edb50ce"],["/2020/08/12/2020-08-12/index.html","98a6a45252ff0439e06ab9582e56111c"],["/2020/08/13/2020-08-13/index.html","89d31abe86226ed37b73e1df794a9733"],["/2020/08/14/2020-08-14-1/index.html","a2816aaaaeed2bdd9fda2f1a84219be8"],["/2020/08/14/2020-08-14-2/index.html","b24afdbc5ee181d0420be6cc0f2bdcb5"],["/2020/08/15/2020-08-15/index.html","d6e2c30a16f09c30ba051e50a57682a4"],["/2020/08/16/2020-08-16-1/index.html","48154ea03007164b78147ec43bb8ea4b"],["/2020/08/16/2020-08-16-2/index.html","216d5d26ff2a000c5c8cca640bab5f62"],["/2020/08/17/2020-08-17/index.html","f9f89000cfa6359de13f769a70070beb"],["/2020/08/18/2020-08-18/index.html","2bf92f5049b957fbbd98a5865dad8935"],["/2020/08/19/2020-08-19-1/index.html","85e347930dbaebda0d52e84be29534b6"],["/2020/08/19/2020-08-19-2/index.html","754864436285e766e2d8e51aedb36344"],["/2020/08/20/2020-08-20/index.html","f5980e0dd809655e846ed65358557f0e"],["/2020/08/21/2020-08-21/index.html","612c17f9355c3e1ee884c7d5b64e9375"],["/2020/08/22/2020-08-22/index.html","3b7128f686e8df5fbe1d1117abe57cc0"],["/2020/08/23/2020-08-23-1/index.html","36e4a25d06a31e589cc2c801949acafc"],["/2020/08/23/2020-08-23-2/index.html","73b57c2167c0808b4bff763d8d4a565f"],["/2020/08/24/2020-08-24-1/index.html","41a2afbd6a4b17838269be90775eb9d3"],["/2020/08/24/2020-08-24-2/index.html","517b24a6c12ec2700db83db3290541fe"],["/2020/08/25/2020-08-25-1/index.html","facf7424fedc54d1ecd7fd661a540058"],["/2020/08/25/2020-08-25-2/index.html","c34e0b2091c03aa13903663e6baee576"],["/2020/08/26/2020-08-26/index.html","4e0f0f0bfd0ce7c47e2b8a8bd7bfb645"],["/2020/08/27/2020-08-27/index.html","c34ead1fcba126ab9a51da20197ddbe8"],["/2020/08/28/2020-08-28/index.html","e41bccf29539ed48475f4f0e689f4d19"],["/2020/08/29/2020-08-29/index.html","581431c3581fafd8d54e2b2ade727114"],["/2020/08/30/2020-08-30/index.html","89c7895d739b17dedf47c25c0b0f84d8"],["/2020/08/31/2020-08-31-1/index.html","a362e8b2658bb53bf5db64eb86001a18"],["/2020/08/31/2020-08-31-2/index.html","762b53f4786523bded642b81a6082187"],["/2020/09/01/2020-09-01-1/index.html","ae8b57acd919bb2625fde8b3bf509ff3"],["/2020/09/01/2020-09-01-2/index.html","81321d4278881ed9bc09757567d5da4c"],["/2020/09/02/2020-09-02-1/index.html","cf98327b4d8fcb3d4883f08d4ceb20ec"],["/2020/09/02/2020-09-02-2/index.html","cfeba402e6f4847f90c866064e6f31f6"],["/2020/09/03/2020-09-03-1/index.html","2722b9c24a66b4faf439c80b91ccb050"],["/2020/09/03/2020-09-03-2/index.html","3e7d4585e62094a38fbe2c01523224ba"],["/2020/09/04/2020-09-04-1/index.html","0b89d3652d78b81fc4003cd247852739"],["/2020/09/05/2020-09-05-1/index.html","fa83288f0a8b2dbfc1ae7b745ceea533"],["/2020/09/06/2020-09-06-1/index.html","01ae0af66f96d834ed3d9052d1240c09"],["/2020/09/07/2020-09-07/index.html","d8d2fa5f73fa2322c0fc2aaf400cc8fc"],["/2020/09/08/2020-09-08-1/index.html","908e9b50c5a0142321a736c4d773810a"],["/2020/09/08/2020-09-08-2/index.html","8b4259ab3fdff8b96b323c225b1751b1"],["/2020/09/09/2020-09-09/index.html","4b885c0178880754feb8ddaf6049e047"],["/2020/09/10/2020-09-10/index.html","b2206914907ea4d18d07274a5f845261"],["/2020/09/11/2020-09-11/index.html","bd149ee8c0b7ff1713fed42cdf82ba98"],["/2020/09/12/2020-09-12/index.html","eee65f96434180a7443d95b252020e31"],["/2020/09/13/2020-09-13/index.html","ffc55ce76e2905201379d64b574cadf7"],["/2020/09/14/2020-09-14/index.html","709e2fc767266065d9f8517d8d96ee4e"],["/2020/09/15/2020-09-15/index.html","17d84d0ddea84a7278c3cfc1a14bd59a"],["/2020/09/16/2020-09-16/index.html","c55067e33140fa421568406db59f093e"],["/2020/09/17/2020-09-17/index.html","e9801fd9cdf9323976f7d61f1cd69b9d"],["/2020/09/19/2020-09-19/index.html","bebbff8d0566ad300ddf1acbdff33ce1"],["/2020/09/23/2020-09-23/index.html","d624fdf119c14a678d07c49bad92756e"],["/2020/09/24/2020-09-24/index.html","5932d5ab50728df85d56e49bde4aec09"],["/2020/09/26/2020-09-26/index.html","fbb833164d56d6cbeba6c0af15a3e273"],["/2020/09/27/2020-09-27/index.html","ce8e0e9de6fc4199921fea057f647ad7"],["/2020/09/28/2020-09-28-2/index.html","325deaf5abdb5ef95dec1f8c13977ebe"],["/2020/09/28/2020-09-28/index.html","4ddf9845a2a1099f10c53c0a3d1842ca"],["/2020/09/29/2020-09-29/index.html","7d4653626f50fb0c07c3afae54fbb34d"],["/2020/10/03/2020-10-03/index.html","554a3566bba4d662d5c51d82804c4595"],["/2020/10/04/2020-10-04/index.html","04896d96e5a6185237afe5b7531fc40f"],["/2020/10/09/2020-10-09/index.html","ef577ee03d07677d58b7ccb5d9fac842"],["/2020/10/10/2020-10-10/index.html","8aa61dc7158b2778a75e82ecde90c190"],["/2020/10/11/2020-10-11/index.html","d24d9ae9c5fc4373fa2230bb256ee5cf"],["/2020/10/12/2020-10-12/index.html","4d8927cd7957045de07108d59429971d"],["/2020/10/13/2020-10-13/index.html","f00f4791751d5aeb67854dc7c812ba0c"],["/2020/10/14/2020-10-14/index.html","9e23a01cf01d8a11fbfa3f396613b30d"],["/2020/10/15/2020-10-16-2/index.html","a58a18803933dd681b5639a15c353a69"],["/2020/10/16/2020-10-16-1/index.html","e6b39eb4e6e68482c6ffe7247ac55daa"],["/2020/10/18/2020-10-18/index.html","9bf2fc0b6febbc579922f9e1bab7df3a"],["/2020/10/20/2020-10-20/index.html","324b97941b1766f33a24885930cb4701"],["/2020/10/20/2020-10-21/index.html","1a2e7e486e9a983772e4793cab81e88b"],["/airplayervisual/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/airplayervisual/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/airplayervisual/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/airplayervisual/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/airplayervisual/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/airplayervisual/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/airplayervisual/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/airplayervisual/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/airplayervisual/index.html","bd512eb1999f6bc38bd34c300f8962ce"],["/airplayervisual/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/airplayervisual/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/airplayervisual/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/airplayervisual/js/jamsetting.js","7927507e0080ddf55c6d8b5f526bd942"],["/airplayervisual/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/airplayervisual/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/airplayervisual/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/archives/2015/05/index.html","0e1dce0bb6c578c4ca74ff6dd918dcb3"],["/archives/2015/06/index.html","9fee948ac7d7f72bf0b5d82849f5d530"],["/archives/2015/12/index.html","3cae00c57cc4c12c1ebd8239dbfcac0b"],["/archives/2015/index.html","f9464c541137619ace75f3d31141c6b6"],["/archives/2016/06/index.html","679935a15d3001ce958fddaa5061bacd"],["/archives/2016/12/index.html","d6a19094bddbe7fa405f4f2d66ff3e2e"],["/archives/2016/index.html","253e0cbb1524433736c6bf968eef2b0b"],["/archives/2017/02/index.html","4eb852f3667db2f6ffa6b0d99d25aebb"],["/archives/2017/03/index.html","e8bc4c21bdc9a1175ce62ff6b45d0ad3"],["/archives/2017/04/index.html","bb9f8cba7498722640b572c24fe8feec"],["/archives/2017/05/index.html","de7bddf3d22e318286cf4adb67cc9c8d"],["/archives/2017/08/index.html","88eaec94294bb6f0fb858be6a6993fa5"],["/archives/2017/09/index.html","09dc33ed8f5897949cc7fdc04b3f2d0d"],["/archives/2017/10/index.html","60076031cdbd357445f26dbb224548af"],["/archives/2017/11/index.html","7e8f0be71e1e0d6bddb815e659f0a934"],["/archives/2017/12/index.html","6a22d370e2fe367047f43d9e69fe94f9"],["/archives/2017/index.html","a3f530e30ed250af6611a910cab022ac"],["/archives/2017/page/2/index.html","88c415f4a25e6e867989c99530e6501d"],["/archives/2018/02/index.html","d7ee5bdb7e1d4d460e149aaab22a6a83"],["/archives/2018/03/index.html","cf9c96b5400b87d2d44c884db9349b36"],["/archives/2018/04/index.html","9b7046e85c5e79667cc74e8d2560c815"],["/archives/2018/05/index.html","2f62674c98c01b5632a2bb3519216e6a"],["/archives/2018/06/index.html","59374cc6bc5e5e01f472f41e6ff3bcd4"],["/archives/2018/07/index.html","242b3c5dbef5eeafa2b58bb37965446b"],["/archives/2018/08/index.html","4eb045af6db90337a1b410d27b2a4edb"],["/archives/2018/index.html","ac372c72dcc83642770d276a82747a04"],["/archives/2020/07/index.html","0d71c6625ca603baaefb0fc31a796538"],["/archives/2020/08/index.html","76645bf2c4e9fe414bcd52836ca62b61"],["/archives/2020/08/page/2/index.html","20b9ec6a9505047764f7fceb3e4f1225"],["/archives/2020/09/index.html","00607a3fb3a92b81bbd3c65af78d3854"],["/archives/2020/09/page/2/index.html","89d2b56acc7292edfa42db3a4d382e81"],["/archives/2020/10/index.html","09f28a4c743d7a86de27c6c20bc248d2"],["/archives/2020/index.html","c476d7bb8f17269acf74019b9901335a"],["/archives/2020/page/2/index.html","19f862c4b0db54ca60bb9951759dbbff"],["/archives/2020/page/3/index.html","a6a741ac6c441921858b332e0fedebd6"],["/archives/2020/page/4/index.html","99fd14d602584541a66fd57c4fc81c03"],["/archives/2020/page/5/index.html","61a8cff8a0db10abc9fd548ab8f21fd1"],["/archives/index.html","5dade0e47b63e0ef195de9405b748a24"],["/archives/page/2/index.html","e4cef34777bb16fc6d9bcea921d2163d"],["/archives/page/3/index.html","f65ba32de7008169bb6078461db8ecbe"],["/archives/page/4/index.html","eb4bca20310426396863c7dbcdd00251"],["/archives/page/5/index.html","331a32e5827b629944ede6ff28117b0d"],["/archives/page/6/index.html","46f7791c56d4fd782d31af884dd7366d"],["/catalogtest/index.html","4aae1717d5c595a8de7254c74204b2ec"],["/categories/NHK听力练习/index.html","7cb84999e558ffb02813f65278da75c3"],["/categories/NHK听力练习/page/2/index.html","2042e46d2555fae40e9aed7351100b31"],["/categories/NHK听力练习/page/3/index.html","d9a2e4c5ca379e4b3c19deb6efbe9228"],["/categories/vue/index.html","1e4565d60fe7cff452de9129404177e8"],["/categories/作品集/index.html","ffb97b1796de4bc2661ae3175e177e4e"],["/categories/学习/index.html","a62ee197954aa473f802502b78b60b2e"],["/categories/教程/index.html","67345c5618ebae60b7c7921635eebd87"],["/categories/游戏评测/index.html","7fd9af129fd8443d95b447fe8727e434"],["/categories/生活趣闻/index.html","3f08806a4e1ded0fd193d70537a447d9"],["/categories/随想/index.html","6752c38d5bb99034a20d36ac6f2a1172"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/addcss.css","d20fc732e0cc7996bd82c5170b7aaa86"],["/css/background.css","d013642f5988333ece3b04912f099111"],["/css/calendar.css","0090a32d2a61d42c5bfed254bfba078c"],["/css/clock - 副本.css","65602c2385c7eab42ee3804cd6ee0a5a"],["/css/clock.css","9db53e3bffb704c740aa83bddaf8b999"],["/css/cursor.css","f514da9c81fb3fcb4f7e9038dfa30874"],["/css/danmu.css","2a5b914a9592bcd353425c6d5fa7af8e"],["/css/index.css","a830cf7dafed0e1e03142b35ae00f2a6"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/loadingline.css","bc1ee020a6a11fea17b915b97e6978bf"],["/css/shuo.css","8db924024099e925c53d5b3dd22f83c6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/html/calendar.html","bddcec1edba7f4c49fe5cd75f8cdf5b2"],["/html/shiyan.html","2c2ae96d3d1a0394658401e807565ec5"],["/html/shiyan2.html","81512e0dc81ebd5c86afeab8010d0967"],["/icon.png","8ec68de45d18642ba9baf2447e62f476"],["/images/AMJ1.png","d27a6725d1aaaf5324248da4312ab6c2"],["/images/AMJ2.png","00e22eba5901e5bd674e42228cd5bd26"],["/images/AMJ3.png","c8c9ea6348dfcad3a641899d5b587431"],["/images/FOTO1.jpg","4b6f100861908e2c7044cffbdb4a0c1a"],["/images/MVVM.png","ea5a002ee2f85c71a0db51d5adb5de19"],["/images/UT.jpg","367f4e432f9db55a92b2a290c4b0a476"],["/images/UX.png","a183974e958d41d1b6acec70bb7ea00a"],["/images/WindowsTerminal.png","8ac29cb56b8a1768cf7de071e9f1ae6f"],["/images/air-w.png","c1cc32f9d3e17551ca11a7d18a0b533a"],["/images/anzhuang.jpg","912b2489957f8344406edc5e5cebe5fa"],["/images/api-setting.png","2c0bb074390779721cba009e96c5417c"],["/images/apikey.png","1f31121b190eb1f990bcc3e27524bc03"],["/images/b0_img.png","43fcaa3f8b394ca5be957f4b860800db"],["/images/backpic1.jpg","86a6fa88167feb338fbf1a4e9057114b"],["/images/c0_img.png","34397085b4d3349034f9b167469ac626"],["/images/c10_img.png","7938c5b0dd789db4f262e5a618943a9b"],["/images/c1_img.png","95211a0ebf07befde1b11477c3a8185b"],["/images/c2_img.png","456ba51725d669fc4d005787753a6b08"],["/images/c3_img.png","a0aa7dcdd2ed5bccec52c16942036a3f"],["/images/c4_img.png","0869cebb60d00a78936b7498823a39de"],["/images/c5_img.png","533774e840ccb3ef13b46201a54be05d"],["/images/c6_img.png","db9eb681dea0b7911f0b2ba918d86c26"],["/images/c7_img.png","5b9c9e0331aca2a9d47a2730512f34f5"],["/images/c8_img.png","be9107995f185e3bbf7186c4dff69f42"],["/images/c9_img.png","642a2e762b74a28d2426af14f2b864c1"],["/images/calendar.png","86319b08b93be7c8bc47cdba7a169563"],["/images/cataimage/b1.jpg","e4795ce34b4d070d251c37a2ae5e37eb"],["/images/cataimage/b2.jpg","e1a7402c7d111b33d22c187a794e693d"],["/images/cataimage/b3.jpg","c091fe2a8024b2f010911e9af8091147"],["/images/cataimage/b4.jpg","1a2190b3e7ecb404767f029642adb637"],["/images/cataimage/b5.jpg","2683b29be7ea536b2d2c0b428ab87a80"],["/images/cataimage/b6.jpg","8eba752c28594ff5a253a01c0904a4a4"],["/images/cataimage/b7.jpg","9259255b1e1ec36bf92b4f34ad68db7f"],["/images/cataimage/b8.jpg","beaae9e5c735657f2e5bba9eb3deb754"],["/images/cataimage/b9.jpg","7ea8994ee380e84190422ac1b1d93ed8"],["/images/clock2.0.png","0a0f122c7a25262fc02ee99df0ef21eb"],["/images/clock3.0.png","8e04375c183c637b65fb50ed40f46466"],["/images/example.png","aaac9983e5d59f919bf282dcff2edb3c"],["/images/foto17.png","28db4c6608ad1ee6b34238cafab25e5e"],["/images/foto2.jpg","be95b922512d004a61f83c97af3e2602"],["/images/foto2.png","0dc07d4e1b00526a273a89dc8b81548d"],["/images/foto3.jpg","551c0616c92c4ee7cc17dd458b3c46e9"],["/images/foto4.jpg","9d1d9fea759a41afc0061866e400339a"],["/images/foto5.jpg","984f618b15372f37d54f507e6f379f10"],["/images/foto9.jpg","b683fc0b998e80ff8f5a3e45e889807c"],["/images/girlpic.png","ff1e8427ed555af639e6d849f8f648f1"],["/images/girlpic1.png","698e5570e821c3cae643cc9777c2292e"],["/images/girlpic4.png","551882e4b9b6afb79000fd34c0dbf5e5"],["/images/headimage.png","332502f36a0297b30cb7969fe6de8451"],["/images/hexo.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/hexoWT.png","c027cc9f5665c7d7ba657e7a4bb40017"],["/images/his-json.png","7d8a71e38ab684107446e5c72c31854e"],["/images/history.gif","0459a3dcf2317253de0b34482880c63c"],["/images/homework1.png","e8d2f64d0785519ea7779016208a2900"],["/images/idea.jpg","5eb08bf6c965588f03c8860f201cac45"],["/images/key1.png","f2a370e02ad6c5a101db20b47a9a0008"],["/images/key2.png","21dc40bbe0377cd9fe85a9cb431c18f0"],["/images/life-cycle.png","02f39ea5c041d45938fda4b50f234cb7"],["/images/life.jpg","74d2d9c5f48ec59e3badeec690941812"],["/images/listen.jpg","9d4f73cd5634f43deaed4f9aca03f9a3"],["/images/loading.gif","ffa0804a5d99e2d5b39e05cda6d6b28b"],["/images/magnet.png","4899a924f3de0d19dbe0415128c07d65"],["/images/magnet1.png","8d010eb86ca943e036adaa7de57aee7d"],["/images/magnet2.0.png","54fe576f174d2b6917fef89f40ac5975"],["/images/magnet2.png","293cb414a8ab93b43bde3bebf9cf0cfc"],["/images/magnet3.png","1923148630e2e094ff80bf35aa604c10"],["/images/magnet4.png","9bb4f963ac1c09f02d62525f513f492c"],["/images/meilu/1.jpg","cd67abcc3f543b5c66adc4f9d9c5c628"],["/images/meilu/10.jpg","ac9fb2711e477b5db1c3acb57e899045"],["/images/meilu/11.jpg","364caad6dfc356a3dc630fa067e48e88"],["/images/meilu/12.jpg","274767e5708f79934e5bdbf73eda8f0d"],["/images/meilu/13.jpg","dcab12b84454770b208913db63e825ac"],["/images/meilu/14.jpg","037cdd048284e621f27e17a2c59e8ea7"],["/images/meilu/2.jpg","f6cdb65ae3fad4523b32f5ee38696b60"],["/images/meilu/3.jpg","9e5df3612c2d93bf57313186c954aea5"],["/images/meilu/4.jpg","69ef2d6f4bcd79cf4b4e672b60c6751e"],["/images/meilu/5.jpg","ce81ca16def7613b7ebb368fb554f14f"],["/images/meilu/6.jpg","cafd5b62305f806754a75cc3af8c3b77"],["/images/meilu/7.jpg","b8ae865d386e1e713a6034da6b090c10"],["/images/meilu/8.jpg","afad7a7bf1066c817a8d2e7566bc780d"],["/images/meilu/9.jpg","72f9649f56b564eacf23ce3dacb88029"],["/images/metroui.jpg","5503bfffd450d9ab572b67ea00941571"],["/images/metroui/1.png","79a03b408c19c74eeaa8ff6e17a03f9d"],["/images/metroui/10.png","8309fed71a15c78f2dfa3af1ff75a5f3"],["/images/metroui/11.png","aaf1a007cbae12f93cc2688bace18d28"],["/images/metroui/12.png","0758ea282c3828c47e5c64520ff85783"],["/images/metroui/13.png","12ca7b511927cd4b26e97f3b20908a32"],["/images/metroui/14.png","f44ba7680f7b36df437e2ae2588d0565"],["/images/metroui/15.png","e8927c78b125b805af7aa86fee815ab6"],["/images/metroui/2.png","e604d3c662b996f06f22753ba9ab379f"],["/images/metroui/3.png","664e3b7490f2f95d5547b8ba79a65456"],["/images/metroui/4.png","c0f255344cafc303a1d9c7404da37149"],["/images/metroui/5.png","da2074cdb1298aca826abc1a5c441300"],["/images/metroui/6.png","efef2f087127614b4e03bcbe9a347018"],["/images/metroui/7.png","a4d34b1a2dbe3a58d3a92276880be039"],["/images/metroui/8.png","1d34a626bbaa898a60d4501936bcf962"],["/images/metroui/9.png","0663697c1667b377fe2623bd65e00b31"],["/images/metrouilogo.png","aea81b42d1c2c96440f74cf56ad82e2f"],["/images/nhkimage/2020.08.01.png","af4c55b2ae1d5ab2f56c75a87fcdfdb3"],["/images/nhkimage/2020.08.02.png","c355d41b90f5c65823f96c5f6868ce53"],["/images/nhkimage/2020.08.03.png","fddcedb40d7f28b2ccb90814351ad5c8"],["/images/nhkimage/2020.08.04.png","8b4518ec5a8513f442980ed7167136b1"],["/images/nhkimage/2020.08.05.png","590abfb19334b0c3cee5a005674f2253"],["/images/nhkimage/2020.08.06.png","d469e21100c42435e88f2bdf07f93da1"],["/images/nhkimage/2020.08.07.png","3ca9e2c8b8a09a38423d73cd36e8de9d"],["/images/nhkimage/2020.08.08.png","4420c2d899fe4eb90c48bae0da8418a2"],["/images/nhkimage/2020.08.09.png","df14be338f9c920818dd1daa6aa955ee"],["/images/nhkimage/2020.08.10.png","c4e2ed023cd3dbfd4986add35ca9357c"],["/images/nhkimage/2020.08.11.png","cf562339e57f673d394f3e6cdd1f60cb"],["/images/nhkimage/2020.08.12.png","81dfa179fea3052ddcf73912ea368f67"],["/images/nhkimage/2020.08.13.png","8cf26c2642e7a27cbd86fcbda8bae8d9"],["/images/nhkimage/2020.08.14.png","d88eeb678b3ed3651d597e61957e264a"],["/images/nhkimage/2020.08.15.png","b9879f193867edcffeefce62c9dc7153"],["/images/nhkimage/2020.08.16.png","46cb914aa1d556561897767ec9ff66a0"],["/images/nhkimage/2020.08.17.png","ea1af9645b5cc9cbaafe70a91dd15cca"],["/images/nhkimage/2020.08.18.png","e87e4de39a6f06cf4283a63af92dd8de"],["/images/nhkimage/2020.08.19.png","8001a951513b542a98ce1151be5bd87b"],["/images/nhkimage/2020.08.20.png","4bc8fafa3ecce30d340b1350715d78e3"],["/images/nhkimage/2020.08.21.png","07ad1337e127922abff27da6c672549b"],["/images/nhkimage/2020.08.22.png","b2b5d53ba46015f64048f9d803b12179"],["/images/nhkimage/2020.08.23.png","225af8c0cabe5218ec634d1b8815fd95"],["/images/nhkimage/2020.08.24.png","1d54a484a6e2395aabe9be005cd90361"],["/images/nhkimage/2020.08.25.png","8008ba169cfce0ef2041329cd29b6b77"],["/images/nhkimage/2020.08.26.png","72a2b8094003a54c97a34ea97cf21bc3"],["/images/nhkimage/2020.08.27.png","893407e604804d215c8fef8bcd5f2684"],["/images/nhkimage/2020.08.28.png","b542280b7341759890a99cbd44d822c5"],["/images/nhkimage/2020.08.29.png","620e2e7d4772e39615fd1a88cdf49717"],["/images/nhkimage/2020.08.30.png","f645d7ba2dcb506f9ec6fb9244425ad7"],["/images/nhkimage/2020.09.03.png","c5262f3aa87190e0273383ea1e445681"],["/images/nhkimage/2020.09.04.png","c07149c32aa41c03bc7dac82a713f6b2"],["/images/nhkimage/2020.09.05.png","4e43556e1cb3b7f4d75f0f6127616a54"],["/images/nhkimage/2020.09.06.png","1021d2ae04a7f109404f857a2a7629cf"],["/images/nhkimage/2020.09.07.png","db9827e9f0a4cf1401b559b4644a0204"],["/images/nhkimage/2020.09.08.png","efe1030b73dc1c01f169c3122a194426"],["/images/nhkimage/2020.09.09.png","f6ba3a1c6cdeff88404ebe2a646f2eb5"],["/images/nhkimage/2020.09.10.png","3471b05d02113517359a9e2167befcfa"],["/images/nhkimage/2020.09.11.png","921a541a8bffb1aa436df2eb6db7c99f"],["/images/nhkimage/2020.09.12.png","a51f8ebaddba69bb80f9259a30f17e65"],["/images/nhkimage/2020.09.13.png","0399889200493cd2154ffc407e2bc400"],["/images/nhkimage/2020.09.14.png","eaaf3da69a39ed316b7fc8c4d409bb0f"],["/images/nhkimage/2020.09.15.png","5774959ea4061c9298ea174f0862cc3a"],["/images/nhkimage/2020.09.16.png","0c5a00f74020740fda589c02e4b3f917"],["/images/nhkimage/2020.09.17.png","b5aef734e3a7db4862ca3fe4e6769dc2"],["/images/nhkimage/2020.09.24.png","5982a7b3843f4ae43b2b4bc4b0c577d6"],["/images/nhkimage/2020.09.26.jpg","c6415af781fbdd36fdb034f74646129b"],["/images/nhkimage/2020.09.27.png","27aa6f6a8d5534ccd99cff261dcd9eb6"],["/images/nhkimage/2020.09.28.png","0f4318d1ff17a33de364432a1c44b5ad"],["/images/nhkimage/2020.10.09.png","6408d9f7e66fdeba8b9207939a08cf8d"],["/images/notop.png","d25c272e5ce312a880e04ce8a0b27683"],["/images/pasted-0.png","552608d8f6e39369aa30c6e332a32826"],["/images/pasted-1.png","baafdacee93c99e99418aaedbf524fda"],["/images/pasted-10.jpg","395cff6f64ab5df19baa3572ac98e541"],["/images/pasted-11.jpg","56e5df07c96634638abf7995b25c81ab"],["/images/pasted-12.jpg","61b3f803b85ce3640d7a9ba7efb9da6b"],["/images/pasted-2.png","2f410e53c811f92a6135f48857776f5e"],["/images/pasted-3.jpg","bb5717e691e87355e7d63a5f3a87ae62"],["/images/pasted-4.jpg","10041d0e3567b24b81222ec5075d6492"],["/images/pasted-5.jpg","ac5047a4b48c6cdaee86fa1863e33904"],["/images/pasted-6.jpg","1556ae8d3ad5713d60237ee4d10e81f0"],["/images/pasted-7.jpg","913fde1686587646ddc663bd810cc81d"],["/images/pasted-8.jpg","fc83268081fb4b6b6ecb1ffa1ec5af7f"],["/images/pasted-9.jpg","25e0fa3496591501f5c29d0b802b77d2"],["/images/pet.png","2b8c121909497e57057478856fe48a94"],["/images/pet2.png","dfb1d6a17b527ccc0c600e6ad31f55e5"],["/images/ps1.png","0917ba91f21b6944dc08d35c41a326d2"],["/images/psb.jpg","6a27c58337875c776af0a7667598b401"],["/images/quse.png","7cd1ec12b804305430cb4cdc09c7a893"],["/images/rain.jpg","9c26acc44c692b6a63e134be07b07c18"],["/images/rainsmall.jpg","e8c91c40bef224fc5a3942bd0d007b84"],["/images/shezhi.png","281bf545f6a4024e2d0b7120bc398a21"],["/images/shuo.png","9cce9df6e32e00e49471b9a9f089f6aa"],["/images/soul.jpg","d97b4099c0728ff6123d006fa62db86e"],["/images/study.jpg","a9b1cf95ee6bd9f3913e8ec6a6a6f44f"],["/images/tianqizhizi.jpg","dd48d78b4eeaaa52578352f9ef570b14"],["/images/vue.png","cf23526f451784ff137f161b8fe18d5a"],["/images/vue1.jpg","8cbf18302c6fa72e2a40d0cca0832213"],["/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/03n.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/04n.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/images/weather/09n.png","512894b4a127a42e060e237674b8d145"],["/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/11n.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/13n.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/images/work.png","e521cf5b834292fde1c50e0a0f5802f9"],["/images/xiaoguoyanshi.png","994a3b710d36df0a4630cd9a768c7f7b"],["/images/xiaoguozhanshi-m.png","1fefca18214fc4889d1bb76b81887c9d"],["/images/yao1.jpg","9dfddaf8c121fc8db788a87d133d6376"],["/images/zfe.one.png","b41f689341882058ffb28c4cee499bde"],["/images/幻想终结之日.png","0025c4d3973bdfedb80db3f78c59fa47"],["/images/时空战纪——游戏建议及意见①.jpg","1337457f14a8dffee66d94f8915b54ff"],["/images/简历.png","d70507ee4615c9e324578c0d777e6855"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favicon2.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","5fee484a6dbb19f8c690f5699e19f588"],["/js/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/APlayer.min.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/airvisual.js","71cf86bfd452ca01d92438d8266416ee"],["/js/airvisualapi.js","6931bebe1696688d109963187fc2eace"],["/js/artitalkkey.js","ad2c74320c63125a36319659657d2886"],["/js/background.js","94c8410b174f58594cf81ec99054968b"],["/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/js/calendar.js","a58e02711cc6dec4dc04257e555b8923"],["/js/catalogMagnet.js","0387c6ad152e7a6076cceffc7420be77"],["/js/clock - 副本.js","405186e7a9d73221d2d50c0dea2852d0"],["/js/clock.js","2fdceb94cc57b551cd245b0001927b66"],["/js/color.js","3730bb4f7b185e6f5130ac28bace968b"],["/js/dan.js","6b6ae6b7f1b42dd4857541f43b2bb733"],["/js/echarts.js","dc1227b1eba1ba47fd185a387d0a7d37"],["/js/gitcalendar.js","fadfa8a42272cd322118653dca512a7a"],["/js/history.js","20459f7db325e597e64903f4c0d19306"],["/js/historyroll.js","a3e9ac376106816c50a61f9f4306d671"],["/js/jam.js","462c07d3b2e0f20394d994bbcfae37cb"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","455fface5a0a3ff90766ca254affe502"],["/js/rain.js","f656dc28e4ab5c3f8414d35f683278c1"],["/js/rainremove.js","ceacf82842b101f7e54a2aaf5f4bb9cb"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["/js/shuo.js","1076b1ef51358cc11b6ff3bab25e15d8"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/link/index.html","6f404189472f77bb16289e42b040122a"],["/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","ec4a4d44ac3929baeaa656e3506ff508"],["/page/10/index.html","a2ba88d7de25378c1d499666a8f83fc8"],["/page/11/index.html","2fc65a44e6504e0e97f6c8394ebba706"],["/page/12/index.html","8ab93ff4a42a51907cf996b10b0597ba"],["/page/2/index.html","4bf07da147a9819419d950208ba6bae3"],["/page/3/index.html","c129c1bdca695030f4a08885a3ccd491"],["/page/4/index.html","a8512fe89f24ca907b520ba5ecf6df76"],["/page/5/index.html","1297d76890fe6532db93066f5044e409"],["/page/6/index.html","8d78ece3006bbcdce15f67dd9be49a43"],["/page/7/index.html","d4393be3c4caf37f9545a6b1947351af"],["/page/8/index.html","e9aa11254c25e83670c51c3bbe3fb5d4"],["/page/9/index.html","827d76c5b3a85cad9ac662a6619f3015"],["/research/index.html","9bc0a3d29c14d6a709c1afa2e9c5dd38"],["/sw-register.js","4845525f32314c3f6ef999fc0302bd4e"],["/tags/Butterfly主题/index.html","78276adc83c66a0bc43efb006181e233"],["/tags/DIY/index.html","4b8cfb74bba2c12ecc8a9c9b947e946c"],["/tags/ICT/index.html","a703d0cf60f0fc79f2dfb0c0d5d5fea6"],["/tags/NHK听力练习/index.html","8ed99541cc19641b1326fae9b2274342"],["/tags/NHK听力练习/page/2/index.html","3b9c710c9f1a0a3e60f3cd27e8892cb2"],["/tags/NHK听力练习/page/3/index.html","27886a9489a8b893bbcff445e86c41fc"],["/tags/metro-ui/index.html","5aa8f414389fb1b0f11c2682a5c7f173"],["/tags/vuejs/index.html","dbb68a7a70aa05b28bef690cac1b0474"],["/tags/お盆/index.html","0d1cc94c1a5250a17cc268548991709a"],["/tags/世論調査/index.html","989cb978f8feeb12bf116335928b7c96"],["/tags/作品集/index.html","ca5dee6d14615ac4ccf940de70214847"],["/tags/农业/index.html","0fab3f5d5d772443ad17cf94979fbc48"],["/tags/历史/index.html","a10f0a3e811daec46fe93a0dd694786f"],["/tags/営業時間/index.html","e4ec7a69561a67488a94404ef420d5c5"],["/tags/国外政事/index.html","bc9e0b240360aa2974ef17e192119402"],["/tags/地震/index.html","ce80d6efdd70842a7ca185a5bb3c1f51"],["/tags/外国政事/index.html","1915121e8a8a70b88d8f55de36ee76f9"],["/tags/天气/index.html","0d9543adfd7cb37acd0c8a2dd4e43305"],["/tags/奥运会/index.html","3b8c0079464552c1ad68f698cac08451"],["/tags/学习/index.html","63140ce1ebfa8628c06f86d02e8946a5"],["/tags/学习/page/2/index.html","a12a929e1481865f369441804fac4ef2"],["/tags/就业/index.html","41d8fa9d7a94bf25067fdaf4a08e73e6"],["/tags/庐山/index.html","1b483c59076c34069eeb186b327359f3"],["/tags/座礁/index.html","f6ceac58309ffcb7480571fbcaaaac0c"],["/tags/政府/index.html","e6348e9261ec3c28094e9d08c4b97e72"],["/tags/政治/index.html","d1112b1ac19f68a4e2ae293850494fdd"],["/tags/教程/index.html","52e956f03b204d1b48818dccd0383c9d"],["/tags/日本教育/index.html","cf3b27cb9076aeb8abcc90f5e76cacf5"],["/tags/民生/index.html","22fb43958d85f8eea576a2b5771017c1"],["/tags/游戏评测/index.html","b1076748285e7049250665b690fa766c"],["/tags/游记/index.html","2b46c0831a9f787a909fd9df68a44394"],["/tags/生活趣闻/index.html","be83b1bbfcaf9fc970681d3845e2b0a0"],["/tags/科技/index.html","1a5bdbfa431ab97db9a5edb314e2a020"],["/tags/经济/index.html","8780e3eda09650992fa3cc8aa60f0d17"],["/tags/网络教学/index.html","724e1dcf5030c6bf0dc73f00ed8e654d"],["/tags/舆论/index.html","0c8d7cc7e6befa966878e7c5b0b31ddb"],["/tags/虚拟现实/index.html","4d3a0632dfde2f8d544453b0560b7daa"],["/tags/随想/index.html","d9feced46ef87470f9416787195bccbf"],["/tags/障害者/index.html","8580857de1b76445f8a72cba0292d726"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
