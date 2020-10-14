/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/05/20/2015-05-20/index.html","487b8be776236f4c26c5fcf64eeac206"],["/2015/06/16/2015-06-16/index.html","71642d7b9ed4ebdad1f9405468d7abfb"],["/2015/12/12/2015-12-12/index.html","b2e7360b78cc7ca3c856c61af6bd1582"],["/2016/06/08/2016-06-08/index.html","a5b220e4c4b5117c90fb1c7af50f6a0d"],["/2016/12/18/2016-12-18/index.html","27b8dc23f92990e31031a2c40e5bdbb6"],["/2017/02/17/2017-02-17/index.html","fc8c258a406f021ef20adf223ab85d08"],["/2017/03/17/2017-03-17/index.html","c1214159872110f2b844d8e6bac54f66"],["/2017/04/06/2017-04-06/index.html","6b2ec2986562b79d053c02875e1f8bc5"],["/2017/05/17/2017-05-17/index.html","c1306895a94bf70472f6149f47653835"],["/2017/08/15/2017-08-15/index.html","ad1131c32c123572c539cbc4dfe5fef8"],["/2017/09/16/2017-09-16-1/index.html","728e0f40c08dc07b50f46b5d7f89c3ba"],["/2017/09/16/2017-09-16/index.html","d913b10c265bf993c5862b5d621669d4"],["/2017/09/21/2017-09-21/index.html","ac652855daf9a38773ef39560e6a5091"],["/2017/09/23/2017-09-23/index.html","1c9c700c985f66db1da1eea53b2896b5"],["/2017/09/26/2017-09-26/index.html","1f7724f263f8eca7e07c04c188599b77"],["/2017/09/27/2017-09-27/index.html","baa84f4417fde405e63b7434543414e0"],["/2017/10/04/2017-10-04/index.html","ccbf8d0195e00be0844cbcc27ac025f3"],["/2017/10/08/2017-10-08/index.html","c464b7b7bbbd800740c050359a74ba18"],["/2017/10/09/2017-10-09/index.html","c9ed61c1fc7a6c763513c1052e4452cb"],["/2017/10/15/2017-10-15/index.html","0ad277c7a740551e073d6970b71a426e"],["/2017/10/19/2017-10-19/index.html","8e6ce028cc94cf35ed6504393ed630b8"],["/2017/10/23/2017-10-23-2/index.html","edc15d0982dc016ca0226df549ea6d80"],["/2017/10/23/2017-10-23/index.html","9ce5ad965524be15226535868a123280"],["/2017/11/08/2017-11-08/index.html","f254f61c4fba1a74725a6818a1ebd263"],["/2017/11/12/2017-11-12/index.html","3f3ca29c659d86e7d7f90ae37850ad08"],["/2017/11/15/2017-11-15/index.html","835904366972916a43687482dfbb744e"],["/2017/11/27/2017-11-27/index.html","2a4c6cc56e83cbcd7369852444696ac5"],["/2017/12/06/2017-12-06/index.html","8b11fd7c0da6cea49207e08447e29dcd"],["/2018/02/12/2018-02-12/index.html","ab51505a46f4d34dd84b5abe4afd753e"],["/2018/03/26/2018-03-26/index.html","4f7fc67f3813478ac4b4dc806503154c"],["/2018/04/02/2018-04-02/index.html","984ebe8c370791b1903687ba4e3e7c8b"],["/2018/04/24/2018-04-24/index.html","8ad884f2c44b4bc29ad724a88a1ffecb"],["/2018/05/18/2018-05-18/index.html","a5c15b9f4693cd052a2b9e0bf4c90459"],["/2018/05/23/2018-05-23/index.html","23766c436219e99a94f8cfe64b389864"],["/2018/06/08/2018-06-08/index.html","00e2c21349755e93f067eaca97118536"],["/2018/07/01/2018-07-01/index.html","762f4b15e44c01eada0ea25cfd49361b"],["/2018/08/30/2018-08-30/index.html","bfe3de6fbd4efe5950bce785dd681d4d"],["/2020/07/20/2020-07-20/index.html","94ef3e350c126c5cc545e00d8d99c52a"],["/2020/08/01/2020-08-01/index.html","d60f2cf3afc067b7bee1b9a4ef951f01"],["/2020/08/02/2020-08-02/index.html","5ecd87101a9daa42343d8f281f4e9fb6"],["/2020/08/03/2020-08-03/index.html","f4cb8c7e8ee09915bfa3057907b224f0"],["/2020/08/04/2020-08-04-1/index.html","cd8db80526142cd11c06ac8712c6320b"],["/2020/08/04/2020-08-04-2/index.html","885e9200ea7236fb947df842776b9e71"],["/2020/08/05/2020-08-05/index.html","b3517423bd49b63fab29cd64f3a93fae"],["/2020/08/06/2020-08-06/index.html","26b8dab6574d3e2c2089027a635b7e6d"],["/2020/08/07/2020-08-07/index.html","fce064435588bb4d2e08993d39f2d481"],["/2020/08/08/2020-08-08/index.html","fcf023bd41e44e5616c79f4fcd969826"],["/2020/08/09/2020-08-09/index.html","d0bba119c86577a050636220996603c6"],["/2020/08/10/2020-08-10/index.html","46f57d4411dcae699d1463eca2c5805e"],["/2020/08/11/2020-08-11/index.html","a3958c911002c6dbd7d40bb3f6af33a2"],["/2020/08/12/2020-08-12/index.html","6dd2e42cd9ba8cb722dbe2a301afa62e"],["/2020/08/13/2020-08-13/index.html","6ff1b46164372cfb573c2f759a6a6505"],["/2020/08/14/2020-08-14-1/index.html","a54adb73c6c0f9b209e35200de5b74f1"],["/2020/08/14/2020-08-14-2/index.html","2821a8627c1a4e7b999944ca064a5b51"],["/2020/08/15/2020-08-15/index.html","fd6f964317f6e1921e763c62baf02f4f"],["/2020/08/16/2020-08-16-1/index.html","a75585df02b3e284917dd32291a0eb1c"],["/2020/08/16/2020-08-16-2/index.html","932f9072db543ef7716ce295a2e4181b"],["/2020/08/17/2020-08-17/index.html","a6156177e4054d51fd94978b621a9e58"],["/2020/08/18/2020-08-18/index.html","8e8fa301f2044dff4497c628564fc1d7"],["/2020/08/19/2020-08-19-1/index.html","529666fceed48db4ecce29f23d528fe2"],["/2020/08/19/2020-08-19-2/index.html","67173348321e732891f720f440bb455a"],["/2020/08/20/2020-08-20/index.html","cdce30f7fa9efcfdbc8ff19e40d0fd71"],["/2020/08/21/2020-08-21/index.html","54a878c12466ff9bd03cc63102f8f698"],["/2020/08/22/2020-08-22/index.html","c2f06536735ba4bbdff5d2811a2ad432"],["/2020/08/23/2020-08-23-1/index.html","dc54320eafaf44494a68f51a82f6386e"],["/2020/08/23/2020-08-23-2/index.html","3a22be3adba16c1340350f1f9c48f03b"],["/2020/08/24/2020-08-24-1/index.html","e2cae2b01438410edb058172749025c0"],["/2020/08/24/2020-08-24-2/index.html","dc2147b5136c43d3defb3aee3808d6ce"],["/2020/08/25/2020-08-25-1/index.html","cc8bd6f42eeb1a063d99d4a53d13d0bf"],["/2020/08/25/2020-08-25-2/index.html","b8099ae61ac273303ee77e5705049852"],["/2020/08/26/2020-08-26/index.html","b3f8a401466c4fcf80ddc54532ec880b"],["/2020/08/27/2020-08-27/index.html","63bdaa659e9e7b392ca4d1be19d9b835"],["/2020/08/28/2020-08-28/index.html","7d5e6648a7939c9126ddf6a5b1572ee0"],["/2020/08/29/2020-08-29/index.html","be0d358ec1dc8d14a16c9df46e4b3f47"],["/2020/08/30/2020-08-30/index.html","6633bbc7e40083183b3dbafb5fc06522"],["/2020/08/31/2020-08-31-1/index.html","b94f8d1ab6e5633d8182ee53d73e274e"],["/2020/08/31/2020-08-31-2/index.html","03daec944260ba7af81d05cd082eb754"],["/2020/09/01/2020-09-01-1/index.html","76eadd595234032ab64959f5c5377770"],["/2020/09/01/2020-09-01-2/index.html","7293f1331e5584e2e179030fb859bfa9"],["/2020/09/02/2020-09-02-1/index.html","0ee1fefe9fa4a961c5c7ea182838dec3"],["/2020/09/02/2020-09-02-2/index.html","6bc127e4c3ba219546cab71ed9eb9527"],["/2020/09/03/2020-09-03-1/index.html","56a0740c13752ed614c3f2bbc560d16e"],["/2020/09/03/2020-09-03-2/index.html","197873e0032f0c224d6fba9c2d932cd8"],["/2020/09/04/2020-09-04-1/index.html","bb484b7a3612ec8bff24aec839245542"],["/2020/09/05/2020-09-05-1/index.html","e99183895210dbe4485bb940707d7dab"],["/2020/09/06/2020-09-06-1/index.html","9f40485a53bd922de80cacb34477fe73"],["/2020/09/07/2020-09-07/index.html","ac4e90706a2971210746f93596c0f3da"],["/2020/09/08/2020-09-08-1/index.html","2db19f62f250130fdf2df40d65f6b0ea"],["/2020/09/08/2020-09-08-2/index.html","377223d9d745c8d0b96d1eb199ad8dd3"],["/2020/09/09/2020-09-09/index.html","da8fb1fa3e44fb7ab997fdbc7e795528"],["/2020/09/10/2020-09-10/index.html","5b7de3b75f4f7327ca1021d0ac502cb7"],["/2020/09/11/2020-09-11/index.html","e0ead9d537bedd88f219523078d62a6a"],["/2020/09/12/2020-09-12/index.html","c006218675e383420b0a4d619953f398"],["/2020/09/13/2020-09-13/index.html","f11660f0989b5bcb7119c3454359992c"],["/2020/09/14/2020-09-14/index.html","30329e339e8c376771494f01e7a0d9d6"],["/2020/09/15/2020-09-15/index.html","4e6cf430194afe8e6e9d3775202c7132"],["/2020/09/16/2020-09-16/index.html","05bd670fc4822018b8cc6cfa69926e00"],["/2020/09/17/2020-09-17/index.html","d9cc4ff6ccf04aed6e4643572529dbe3"],["/2020/09/19/2020-09-19/index.html","0faeabf0b6f05e6e6d620cab5bfb5a13"],["/2020/09/23/2020-09-23/index.html","f32d7a9e06d6f2b285ca0f894e772018"],["/2020/09/24/2020-09-24/index.html","7de9547dd48b1cb52155d3ffafcfa929"],["/2020/09/26/2020-09-26/index.html","e7ba0b2ca476ba94c41861c101307ac9"],["/2020/09/27/2020-09-27/index.html","cf19716a6447751bedc87f904368cc50"],["/2020/09/28/2020-09-28-2/index.html","760e0b5ffcfdfcff8fbf52db3bc43673"],["/2020/09/28/2020-09-28/index.html","d577f559450f421f6d559a617c48549d"],["/2020/09/29/2020-09-29/index.html","e856e0f808c61fd51ca5cb1ca317c7da"],["/2020/10/03/2020-10-03/index.html","1f389d401c0bdb67622ae7f689a34d6b"],["/2020/10/04/2020-10-04/index.html","c14337256322ba21dd79339512a62b94"],["/2020/10/09/2020-10-09/index.html","289c23266a8a676665ae0d6882708765"],["/2020/10/10/2020-10-10/index.html","b3319d00043e9c530b06eea148d2de05"],["/2020/10/11/2020-10-11/index.html","62428498ce65b548e9e79a5b99353692"],["/2020/10/12/2020-10-12/index.html","a01dbc60e40712de0f78e75b47669c38"],["/2020/10/13/2020-10-13/index.html","32f505ad8e1268676fa6e4dd2a2601eb"],["/2020/10/14/2020-10-14/index.html","2d38e82f47bc2a1413a503c83f9125e2"],["/airplayervisual/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/airplayervisual/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/airplayervisual/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/airplayervisual/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/airplayervisual/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/airplayervisual/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/airplayervisual/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/airplayervisual/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/airplayervisual/index.html","79c1517faaba7d6b358aeb022ef9accb"],["/airplayervisual/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/airplayervisual/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/airplayervisual/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/airplayervisual/js/jamsetting.js","7927507e0080ddf55c6d8b5f526bd942"],["/airplayervisual/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/airplayervisual/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/airplayervisual/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/archives/2015/05/index.html","62d04941d460ecde8c1b5a2c6343c52b"],["/archives/2015/06/index.html","1c3d71eeb9da09a116d158f796eb78a2"],["/archives/2015/12/index.html","5e00e79679f0713bb0e8b793d300eaaf"],["/archives/2015/index.html","916239554aa3dc17801ab2a257bae9a9"],["/archives/2016/06/index.html","a3c685deb59d23fcbb0579249ddf5c11"],["/archives/2016/12/index.html","d45249862cce85be88cb47eb6b47d987"],["/archives/2016/index.html","649a775474897ce6ee30e8d84baf67f4"],["/archives/2017/02/index.html","72b22d0fc77915082e9768199d851fe3"],["/archives/2017/03/index.html","375ea10ed6bafad9446fc3183e9be263"],["/archives/2017/04/index.html","d2f77940cfd932fcf16787c9c0827f7a"],["/archives/2017/05/index.html","adc31487c8f7b7a308ca5189a92ed434"],["/archives/2017/08/index.html","dfe7473d5a98b50dbb6b97b04d458f16"],["/archives/2017/09/index.html","a330ba7770aba11ee5cdefacf79a4b9a"],["/archives/2017/10/index.html","790692d223396447bd33d58862ea51c7"],["/archives/2017/11/index.html","3da1a70610a7ef3b0fee0863f5daecc7"],["/archives/2017/12/index.html","50b48c75a4f93661285a1d879094331d"],["/archives/2017/index.html","45e9d2924184dbe5688b741d74edf10c"],["/archives/2017/page/2/index.html","1b437e9fa4a4795a282bcbce19cb8c4d"],["/archives/2017/page/3/index.html","c16c0b99a436227f0fe5b1dcb2ffbf29"],["/archives/2018/02/index.html","bee2c30ee1721f40dd305bbbf5b68472"],["/archives/2018/03/index.html","4caa43c80e82ab329d7b531f99977117"],["/archives/2018/04/index.html","b6b6d42f55a00e2e47422e30d68cb05f"],["/archives/2018/05/index.html","597c6f7d09d54481266542cb4382e36f"],["/archives/2018/06/index.html","f6e522e4302bbadf8b6f320ddd22bf06"],["/archives/2018/07/index.html","826b96a713d70224189379f42fec9a13"],["/archives/2018/08/index.html","64df3451a4e1b8ed9d68df5423b5fcb0"],["/archives/2018/index.html","e4e90224dd5865da10e88125b0a456a6"],["/archives/2020/07/index.html","7ee1da813c3fcf4f1775975130362cd8"],["/archives/2020/08/index.html","5d4de3b29e2e5782da6291c9e21197a8"],["/archives/2020/08/page/2/index.html","ccb6aa277616f4fad4b3f9dadec95fc4"],["/archives/2020/08/page/3/index.html","7b0889e43410da2a1d0a7e26af2feae4"],["/archives/2020/08/page/4/index.html","0404adaab3c96a87063fbe016cd5f8f7"],["/archives/2020/09/index.html","29c57acf21a9c266a1441d8938251682"],["/archives/2020/09/page/2/index.html","f2f5c13fcf0345e4c209dd4925c173e6"],["/archives/2020/09/page/3/index.html","0dcc54b0b532d959db97e0c4b4e493e7"],["/archives/2020/10/index.html","03b481fb8a4a0d4586e83711683fb79d"],["/archives/2020/index.html","43718577a393bd284e194aa1f1a88f41"],["/archives/2020/page/2/index.html","1c8f6001639fb6ad2701b4c6cb52b0c5"],["/archives/2020/page/3/index.html","564372c85630dc8e7f579f6b985dd19f"],["/archives/2020/page/4/index.html","b3eea26d6db8cc82ae7ec8482976ee2a"],["/archives/2020/page/5/index.html","a5eabd3c15f49f4a5beb230ba83f922e"],["/archives/2020/page/6/index.html","0b1aaf43cc5441bee4d8a93423fd1751"],["/archives/2020/page/7/index.html","e62c9b255ef9c5c2ef715068f05d2914"],["/archives/2020/page/8/index.html","a8d1a48313a3174af1d34b4dd52da365"],["/archives/index.html","74eaabe11e35536a88c98fe674c81a43"],["/archives/page/10/index.html","a983b43333430acbbb4e8c9b1031a12f"],["/archives/page/11/index.html","ceba365add2e89905bdbd4e62475649c"],["/archives/page/12/index.html","bbe78d3b3edee74589a6a5ae699f1776"],["/archives/page/2/index.html","0bac9f736c30ee3ac59d8f145e869017"],["/archives/page/3/index.html","ca064cb1c9b185259974d1ee70a40481"],["/archives/page/4/index.html","352c1ce6809f739f27bb64df1b56121e"],["/archives/page/5/index.html","ad1316d0907040f50b3a536049ec9aa2"],["/archives/page/6/index.html","12f191a6edf625cbb307d7f18dc9e4fe"],["/archives/page/7/index.html","4c8d6c7aa93ea7297a7086427ce31889"],["/archives/page/8/index.html","75a654d1bffff06b40accdb5f6cfd8bc"],["/archives/page/9/index.html","0e3938352071afc3dd405aae7a1f63ff"],["/categories/NHK听力练习/index.html","8f0774fb7470a12b827c11c0a2283f2a"],["/categories/NHK听力练习/page/2/index.html","e4ecec677b9f0e64155a5032b516c032"],["/categories/NHK听力练习/page/3/index.html","b2a6c972fbca8edf4cb6e2d60576f164"],["/categories/NHK听力练习/page/4/index.html","9530acf03ddd5b15168a1906b04d1b90"],["/categories/NHK听力练习/page/5/index.html","da27df0c8a5bc381d04f4ff16627d468"],["/categories/NHK听力练习/page/6/index.html","29072f1c54d2bccd9c506fa23f304495"],["/categories/作品集/index.html","8388ba7f903d1e7bcfcd91440e8f9728"],["/categories/作品集/page/2/index.html","9e7751b9c7ab76534464b26ef9651785"],["/categories/学习/index.html","8c9dcc99bd99b261adfa4692b7806332"],["/categories/学习/page/2/index.html","dc3cd5eded271028a060d117bd7e1787"],["/categories/学习/page/3/index.html","57ba19b058b844956ee4bf6a9c8e2191"],["/categories/游戏评测/index.html","3e52b64caecde27b340a245d69eddca6"],["/categories/生活趣闻/index.html","aab230dda49320bd7abd898cd08a726a"],["/categories/随想/index.html","ec368c576dadd842f8cdb6ba529b7477"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/addcss.css","59cae1ddbe6925c34f846ffe12d19921"],["/css/background.css","32d5acccbb94f987faf37cfdc3fd06df"],["/css/calendar.css","0090a32d2a61d42c5bfed254bfba078c"],["/css/clock.css","65602c2385c7eab42ee3804cd6ee0a5a"],["/css/cursor.css","c1a23e168c5b794ff367eb0ae77eb26b"],["/css/danmu.css","2a5b914a9592bcd353425c6d5fa7af8e"],["/css/index.css","36eb36d0f5531dd7a8f4c8f925188615"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/loadingline.css","bc1ee020a6a11fea17b915b97e6978bf"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/html/calendar.html","bddcec1edba7f4c49fe5cd75f8cdf5b2"],["/html/shiyan.html","91655c70dd2c67a579c6b5beb0c61a76"],["/html/shiyan2.html","643486009fcf064172c92eb445217b0d"],["/icon.png","8ec68de45d18642ba9baf2447e62f476"],["/images/AMJ1.png","d27a6725d1aaaf5324248da4312ab6c2"],["/images/AMJ2.png","00e22eba5901e5bd674e42228cd5bd26"],["/images/AMJ3.png","c8c9ea6348dfcad3a641899d5b587431"],["/images/FOTO1.jpg","4b6f100861908e2c7044cffbdb4a0c1a"],["/images/MVVM.png","ea5a002ee2f85c71a0db51d5adb5de19"],["/images/UT.jpg","367f4e432f9db55a92b2a290c4b0a476"],["/images/UX.png","a183974e958d41d1b6acec70bb7ea00a"],["/images/WindowsTerminal.png","8ac29cb56b8a1768cf7de071e9f1ae6f"],["/images/air-w.png","c1cc32f9d3e17551ca11a7d18a0b533a"],["/images/anzhuang.jpg","912b2489957f8344406edc5e5cebe5fa"],["/images/api-setting.png","2c0bb074390779721cba009e96c5417c"],["/images/apikey.png","1f31121b190eb1f990bcc3e27524bc03"],["/images/backpic1.jpg","86a6fa88167feb338fbf1a4e9057114b"],["/images/calendar.png","86319b08b93be7c8bc47cdba7a169563"],["/images/clock2.0.png","0a0f122c7a25262fc02ee99df0ef21eb"],["/images/example.png","aaac9983e5d59f919bf282dcff2edb3c"],["/images/foto17.png","28db4c6608ad1ee6b34238cafab25e5e"],["/images/foto2.jpg","be95b922512d004a61f83c97af3e2602"],["/images/foto2.png","0dc07d4e1b00526a273a89dc8b81548d"],["/images/foto3.jpg","551c0616c92c4ee7cc17dd458b3c46e9"],["/images/foto4.jpg","9d1d9fea759a41afc0061866e400339a"],["/images/foto5.jpg","984f618b15372f37d54f507e6f379f10"],["/images/foto9.jpg","b683fc0b998e80ff8f5a3e45e889807c"],["/images/girlpic.png","ff1e8427ed555af639e6d849f8f648f1"],["/images/girlpic1.png","698e5570e821c3cae643cc9777c2292e"],["/images/girlpic4.png","551882e4b9b6afb79000fd34c0dbf5e5"],["/images/headimage.png","332502f36a0297b30cb7969fe6de8451"],["/images/hexo.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/hexoWT.png","c027cc9f5665c7d7ba657e7a4bb40017"],["/images/his-json.png","7d8a71e38ab684107446e5c72c31854e"],["/images/history.gif","0459a3dcf2317253de0b34482880c63c"],["/images/homework1.png","e8d2f64d0785519ea7779016208a2900"],["/images/idea.jpg","5eb08bf6c965588f03c8860f201cac45"],["/images/key1.png","f2a370e02ad6c5a101db20b47a9a0008"],["/images/key2.png","21dc40bbe0377cd9fe85a9cb431c18f0"],["/images/life-cycle.png","02f39ea5c041d45938fda4b50f234cb7"],["/images/life.jpg","74d2d9c5f48ec59e3badeec690941812"],["/images/listen.jpg","9d4f73cd5634f43deaed4f9aca03f9a3"],["/images/magnet.png","4899a924f3de0d19dbe0415128c07d65"],["/images/magnet1.png","8d010eb86ca943e036adaa7de57aee7d"],["/images/magnet2.png","293cb414a8ab93b43bde3bebf9cf0cfc"],["/images/magnet3.png","1923148630e2e094ff80bf35aa604c10"],["/images/magnet4.png","9bb4f963ac1c09f02d62525f513f492c"],["/images/meilu/1.jpg","cd67abcc3f543b5c66adc4f9d9c5c628"],["/images/meilu/10.jpg","ac9fb2711e477b5db1c3acb57e899045"],["/images/meilu/11.jpg","364caad6dfc356a3dc630fa067e48e88"],["/images/meilu/12.jpg","274767e5708f79934e5bdbf73eda8f0d"],["/images/meilu/13.jpg","dcab12b84454770b208913db63e825ac"],["/images/meilu/14.jpg","037cdd048284e621f27e17a2c59e8ea7"],["/images/meilu/2.jpg","f6cdb65ae3fad4523b32f5ee38696b60"],["/images/meilu/3.jpg","9e5df3612c2d93bf57313186c954aea5"],["/images/meilu/4.jpg","69ef2d6f4bcd79cf4b4e672b60c6751e"],["/images/meilu/5.jpg","ce81ca16def7613b7ebb368fb554f14f"],["/images/meilu/6.jpg","cafd5b62305f806754a75cc3af8c3b77"],["/images/meilu/7.jpg","b8ae865d386e1e713a6034da6b090c10"],["/images/meilu/8.jpg","afad7a7bf1066c817a8d2e7566bc780d"],["/images/meilu/9.jpg","72f9649f56b564eacf23ce3dacb88029"],["/images/metroui.jpg","5503bfffd450d9ab572b67ea00941571"],["/images/metroui/1.png","79a03b408c19c74eeaa8ff6e17a03f9d"],["/images/metroui/10.png","8309fed71a15c78f2dfa3af1ff75a5f3"],["/images/metroui/11.png","aaf1a007cbae12f93cc2688bace18d28"],["/images/metroui/12.png","0758ea282c3828c47e5c64520ff85783"],["/images/metroui/13.png","12ca7b511927cd4b26e97f3b20908a32"],["/images/metroui/14.png","f44ba7680f7b36df437e2ae2588d0565"],["/images/metroui/15.png","e8927c78b125b805af7aa86fee815ab6"],["/images/metroui/2.png","e604d3c662b996f06f22753ba9ab379f"],["/images/metroui/3.png","664e3b7490f2f95d5547b8ba79a65456"],["/images/metroui/4.png","c0f255344cafc303a1d9c7404da37149"],["/images/metroui/5.png","da2074cdb1298aca826abc1a5c441300"],["/images/metroui/6.png","efef2f087127614b4e03bcbe9a347018"],["/images/metroui/7.png","a4d34b1a2dbe3a58d3a92276880be039"],["/images/metroui/8.png","1d34a626bbaa898a60d4501936bcf962"],["/images/metroui/9.png","0663697c1667b377fe2623bd65e00b31"],["/images/metrouilogo.png","aea81b42d1c2c96440f74cf56ad82e2f"],["/images/nhkimage/2020.08.01.png","af4c55b2ae1d5ab2f56c75a87fcdfdb3"],["/images/nhkimage/2020.08.02.png","c355d41b90f5c65823f96c5f6868ce53"],["/images/nhkimage/2020.08.03.png","fddcedb40d7f28b2ccb90814351ad5c8"],["/images/nhkimage/2020.08.04.png","8b4518ec5a8513f442980ed7167136b1"],["/images/nhkimage/2020.08.05.png","590abfb19334b0c3cee5a005674f2253"],["/images/nhkimage/2020.08.06.png","d469e21100c42435e88f2bdf07f93da1"],["/images/nhkimage/2020.08.07.png","3ca9e2c8b8a09a38423d73cd36e8de9d"],["/images/nhkimage/2020.08.08.png","4420c2d899fe4eb90c48bae0da8418a2"],["/images/nhkimage/2020.08.09.png","df14be338f9c920818dd1daa6aa955ee"],["/images/nhkimage/2020.08.10.png","c4e2ed023cd3dbfd4986add35ca9357c"],["/images/nhkimage/2020.08.11.png","cf562339e57f673d394f3e6cdd1f60cb"],["/images/nhkimage/2020.08.12.png","81dfa179fea3052ddcf73912ea368f67"],["/images/nhkimage/2020.08.13.png","8cf26c2642e7a27cbd86fcbda8bae8d9"],["/images/nhkimage/2020.08.14.png","d88eeb678b3ed3651d597e61957e264a"],["/images/nhkimage/2020.08.15.png","b9879f193867edcffeefce62c9dc7153"],["/images/nhkimage/2020.08.16.png","46cb914aa1d556561897767ec9ff66a0"],["/images/nhkimage/2020.08.17.png","ea1af9645b5cc9cbaafe70a91dd15cca"],["/images/nhkimage/2020.08.18.png","e87e4de39a6f06cf4283a63af92dd8de"],["/images/nhkimage/2020.08.19.png","8001a951513b542a98ce1151be5bd87b"],["/images/nhkimage/2020.08.20.png","4bc8fafa3ecce30d340b1350715d78e3"],["/images/nhkimage/2020.08.21.png","07ad1337e127922abff27da6c672549b"],["/images/nhkimage/2020.08.22.png","b2b5d53ba46015f64048f9d803b12179"],["/images/nhkimage/2020.08.23.png","225af8c0cabe5218ec634d1b8815fd95"],["/images/nhkimage/2020.08.24.png","1d54a484a6e2395aabe9be005cd90361"],["/images/nhkimage/2020.08.25.png","8008ba169cfce0ef2041329cd29b6b77"],["/images/nhkimage/2020.08.26.png","72a2b8094003a54c97a34ea97cf21bc3"],["/images/nhkimage/2020.08.27.png","893407e604804d215c8fef8bcd5f2684"],["/images/nhkimage/2020.08.28.png","b542280b7341759890a99cbd44d822c5"],["/images/nhkimage/2020.08.29.png","620e2e7d4772e39615fd1a88cdf49717"],["/images/nhkimage/2020.08.30.png","f645d7ba2dcb506f9ec6fb9244425ad7"],["/images/nhkimage/2020.09.03.png","c5262f3aa87190e0273383ea1e445681"],["/images/nhkimage/2020.09.04.png","c07149c32aa41c03bc7dac82a713f6b2"],["/images/nhkimage/2020.09.05.png","4e43556e1cb3b7f4d75f0f6127616a54"],["/images/nhkimage/2020.09.06.png","1021d2ae04a7f109404f857a2a7629cf"],["/images/nhkimage/2020.09.07.png","db9827e9f0a4cf1401b559b4644a0204"],["/images/nhkimage/2020.09.08.png","efe1030b73dc1c01f169c3122a194426"],["/images/nhkimage/2020.09.09.png","f6ba3a1c6cdeff88404ebe2a646f2eb5"],["/images/nhkimage/2020.09.10.png","3471b05d02113517359a9e2167befcfa"],["/images/nhkimage/2020.09.11.png","921a541a8bffb1aa436df2eb6db7c99f"],["/images/nhkimage/2020.09.12.png","a51f8ebaddba69bb80f9259a30f17e65"],["/images/nhkimage/2020.09.13.png","0399889200493cd2154ffc407e2bc400"],["/images/nhkimage/2020.09.14.png","eaaf3da69a39ed316b7fc8c4d409bb0f"],["/images/nhkimage/2020.09.15.png","5774959ea4061c9298ea174f0862cc3a"],["/images/nhkimage/2020.09.16.png","0c5a00f74020740fda589c02e4b3f917"],["/images/nhkimage/2020.09.17.png","b5aef734e3a7db4862ca3fe4e6769dc2"],["/images/nhkimage/2020.09.24.png","5982a7b3843f4ae43b2b4bc4b0c577d6"],["/images/nhkimage/2020.09.26.jpg","c6415af781fbdd36fdb034f74646129b"],["/images/nhkimage/2020.09.27.png","27aa6f6a8d5534ccd99cff261dcd9eb6"],["/images/nhkimage/2020.09.28.png","0f4318d1ff17a33de364432a1c44b5ad"],["/images/nhkimage/2020.10.09.png","6408d9f7e66fdeba8b9207939a08cf8d"],["/images/notop.png","d25c272e5ce312a880e04ce8a0b27683"],["/images/pasted-0.png","552608d8f6e39369aa30c6e332a32826"],["/images/pasted-1.png","baafdacee93c99e99418aaedbf524fda"],["/images/pasted-10.jpg","395cff6f64ab5df19baa3572ac98e541"],["/images/pasted-11.jpg","56e5df07c96634638abf7995b25c81ab"],["/images/pasted-12.jpg","61b3f803b85ce3640d7a9ba7efb9da6b"],["/images/pasted-2.png","2f410e53c811f92a6135f48857776f5e"],["/images/pasted-3.jpg","bb5717e691e87355e7d63a5f3a87ae62"],["/images/pasted-4.jpg","10041d0e3567b24b81222ec5075d6492"],["/images/pasted-5.jpg","ac5047a4b48c6cdaee86fa1863e33904"],["/images/pasted-6.jpg","1556ae8d3ad5713d60237ee4d10e81f0"],["/images/pasted-7.jpg","913fde1686587646ddc663bd810cc81d"],["/images/pasted-8.jpg","fc83268081fb4b6b6ecb1ffa1ec5af7f"],["/images/pasted-9.jpg","25e0fa3496591501f5c29d0b802b77d2"],["/images/pet.png","2b8c121909497e57057478856fe48a94"],["/images/pet2.png","dfb1d6a17b527ccc0c600e6ad31f55e5"],["/images/ps1.png","0917ba91f21b6944dc08d35c41a326d2"],["/images/psb.jpg","6a27c58337875c776af0a7667598b401"],["/images/quse.png","7cd1ec12b804305430cb4cdc09c7a893"],["/images/rain.jpg","9c26acc44c692b6a63e134be07b07c18"],["/images/shezhi.png","281bf545f6a4024e2d0b7120bc398a21"],["/images/soul.jpg","d97b4099c0728ff6123d006fa62db86e"],["/images/study.jpg","a9b1cf95ee6bd9f3913e8ec6a6a6f44f"],["/images/tianqizhizi.jpg","dd48d78b4eeaaa52578352f9ef570b14"],["/images/vue.png","cf23526f451784ff137f161b8fe18d5a"],["/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/images/work.png","e521cf5b834292fde1c50e0a0f5802f9"],["/images/xiaoguoyanshi.png","994a3b710d36df0a4630cd9a768c7f7b"],["/images/xiaoguozhanshi-m.png","1fefca18214fc4889d1bb76b81887c9d"],["/images/zfe.one.png","b41f689341882058ffb28c4cee499bde"],["/images/幻想终结之日.png","0025c4d3973bdfedb80db3f78c59fa47"],["/images/时空战纪——游戏建议及意见①.jpg","1337457f14a8dffee66d94f8915b54ff"],["/images/简历.png","d70507ee4615c9e324578c0d777e6855"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","b2816f18531e7470afc88d9f63c2b52c"],["/img/favicon2.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","df049a634a318f9fc502986ca583449d"],["/js/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/APlayer.min.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/airvisual.js","71cf86bfd452ca01d92438d8266416ee"],["/js/airvisualapi.js","6931bebe1696688d109963187fc2eace"],["/js/background.js","94c8410b174f58594cf81ec99054968b"],["/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/js/calendar.js","a58e02711cc6dec4dc04257e555b8923"],["/js/clock.js","ead1a80f7219c166e1180674b7d8c70b"],["/js/color.js","3730bb4f7b185e6f5130ac28bace968b"],["/js/danmu.js","6b6ae6b7f1b42dd4857541f43b2bb733"],["/js/echarts.js","dc1227b1eba1ba47fd185a387d0a7d37"],["/js/gitcalendar.js","fadfa8a42272cd322118653dca512a7a"],["/js/history.js","20459f7db325e597e64903f4c0d19306"],["/js/historyroll.js","a3e9ac376106816c50a61f9f4306d671"],["/js/jam.js","462c07d3b2e0f20394d994bbcfae37cb"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","790cd2f28594f8affbd4a450037c48ff"],["/js/rain.js","f656dc28e4ab5c3f8414d35f683278c1"],["/js/rainremove.js","ceacf82842b101f7e54a2aaf5f4bb9cb"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/link/index.html","325e399a0c24b023d23d058c15eb11fe"],["/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","2fdff3b61d7b42f3bcee227be67d659a"],["/page/10/index.html","2c15ecd62a5e621b1000a0f96a4b4d13"],["/page/11/index.html","5dedb9278f400ddafecc07e2752aa58f"],["/page/12/index.html","3754d5d66fb38a665f825ad07d01ffba"],["/page/2/index.html","0747b76a313b4b6971e4f284ed5ff0fb"],["/page/3/index.html","7607a391858047de3d7a2f46a12f964b"],["/page/4/index.html","93a26d22fa20c17f8356cac7f7bd08bd"],["/page/5/index.html","d7cbc426f6ad969cc81842da41f0052a"],["/page/6/index.html","7ffcf6502f25647c8312395532548075"],["/page/7/index.html","c36ea5215a1ee69297a3e8413b85b02c"],["/page/8/index.html","3033461d9bce1702ab2eea5cd9dd5ee8"],["/page/9/index.html","eaf7d93a35d43cc1bd1c803bf3850bb3"],["/research/index.html","5488bbd7bc5ad2f01189e9ebff5fa00d"],["/sw-register.js","af8f303a20f5bd601098d01e736afcc4"],["/tags/Butterfly主题/index.html","5d6cbff28be12b4d069c8d0d66297fd1"],["/tags/DIY/index.html","128d36e83816ed0beff9b8583e903bf0"],["/tags/DIY/page/2/index.html","fd4e4bcc86ea6a07cefe35d2ab6d2b17"],["/tags/ICT/index.html","bf182f7ca254cff4bd58aa81d00a7fcb"],["/tags/NHK听力练习/index.html","65d7f25834d64147e7a260e224dd6385"],["/tags/NHK听力练习/page/2/index.html","b2bfc3dccafd2df4faec7a785c3fa45f"],["/tags/NHK听力练习/page/3/index.html","ef9730eebf726a38c75060d0a656c101"],["/tags/NHK听力练习/page/4/index.html","9b840acbd5b9c70afbf17b78c4399df7"],["/tags/NHK听力练习/page/5/index.html","a0f92b380f0c2a52f10eddadac3a12be"],["/tags/NHK听力练习/page/6/index.html","61e3a7a31326a2244ddcb3c754c1468b"],["/tags/metro-ui/index.html","601f11c51f0f110cd757aed7ac7a6446"],["/tags/vuejs/index.html","cbaeab626adf2744136e8b373ea84d58"],["/tags/お盆/index.html","afd26917f4f6ca6ed5318b1569d1c4d0"],["/tags/世論調査/index.html","48d19cfdb7e0b78ccd2f678d4b616d88"],["/tags/作品集/index.html","eb74a2c94b039c3e40a5574a60aaf925"],["/tags/作品集/page/2/index.html","79b0347e260715025b71e7faa50d7d1a"],["/tags/农业/index.html","327d6cba2c20375b9e70eb074f2075cf"],["/tags/历史/index.html","70300f01e13fdb99bea398024d63974b"],["/tags/営業時間/index.html","9fbfda0892bb68ba27f51a3c610baf20"],["/tags/国外政事/index.html","5799a3747253a32fbf40d92a32b41c32"],["/tags/地震/index.html","4ec6893fbeb045baa508106a7f8b463a"],["/tags/外国政事/index.html","dfcb239fbe91a165279bdaaf16386541"],["/tags/天气/index.html","9615c610b32c5dface6a9759b85e80f3"],["/tags/天气/page/2/index.html","d323eb6b8cfdc4df7a52f968e0e581b6"],["/tags/奥运会/index.html","059ad59eeb1b808ad16e2a406746964b"],["/tags/学习/index.html","df3f75b9a611c5a2c9d2bbd8734e041b"],["/tags/学习/page/2/index.html","20f4bb837d3d777f7885130313d0065e"],["/tags/学习/page/3/index.html","a245fff9559ae2a56c450f7d7df3e8c9"],["/tags/就业/index.html","12ec52c6edbc6efc0a823ab2051da401"],["/tags/庐山/index.html","b74a3af96f29ced0179a32ff2a0fd04d"],["/tags/座礁/index.html","05388bcd762ae0ca80837319ddccd41a"],["/tags/政府/index.html","e66dee312d463c5ab5da7dcd3d3761ca"],["/tags/政治/index.html","fab17b7f61a7e7e58a2f29c6bbc7a92d"],["/tags/教程/index.html","6f8b562788123194cd2c0cd68cfae059"],["/tags/日本教育/index.html","93b0a67796d489fa9dc97bc4d2e7ac74"],["/tags/民生/index.html","9c7a8d28145a0e3b7f8b9f5322737ae0"],["/tags/民生/page/2/index.html","25b78575f109f3581b99b39c600efa88"],["/tags/游戏评测/index.html","3d88bb6ee1cabadb7b6ed6ff0d18deb5"],["/tags/游记/index.html","db9c2eed5128a950a99d434c8ab6a4ef"],["/tags/生活趣闻/index.html","55a5457004dbdd85c3673a96ecd0433d"],["/tags/科技/index.html","ad1e4a44e4f62d842b473134f0f2be37"],["/tags/经济/index.html","7022aba126b244ee4813d935504be41c"],["/tags/经济/page/2/index.html","a4170b4d8291cf84306e3547712879e1"],["/tags/网络教学/index.html","9a4e1d317f6f13865cc6cdd05d5649d6"],["/tags/舆论/index.html","10d20e835897f5a3d377fc5c4a0af22b"],["/tags/虚拟现实/index.html","7f1c892aae964ac206e2e3a13f9ce39f"],["/tags/随想/index.html","02dd1d9bdcba72fd4ef7f2a4e18197d6"],["/tags/障害者/index.html","21b04ca2221f6822fa01825a21aaf029"]];
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
