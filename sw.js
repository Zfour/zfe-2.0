/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/05/20/2015-05-20/index.html","cc48fb7a2ed0a25e900f5a4e13f2bc00"],["/2015/06/16/2015-06-16/index.html","6bb2508776edef40e02d2804a14c31ba"],["/2015/12/12/2015-12-12/index.html","c39471ef7ff45141121f28a83eea3b61"],["/2016/06/08/2016-06-08/index.html","70c1caa077d4950daff56019acc6e669"],["/2016/12/18/2016-12-18/index.html","396b9a7cd85d1bfedfd0f05e5b7b6978"],["/2017/02/17/2017-02-17/index.html","a3ee93ec75b45f1a743d12a51f698ba3"],["/2017/03/17/2017-03-17/index.html","c734bc0f4e52eb5feb9ba9547af3e812"],["/2017/04/06/2017-04-06/index.html","d7c1b474047cfb32771818d747d2d7c4"],["/2017/05/17/2017-05-17/index.html","f80acca10131d723b7fcca788e5c5412"],["/2017/08/15/2017-08-15/index.html","7dc1817ef8a6d06362ac9c8bfc250cb3"],["/2017/09/16/2017-09-16-1/index.html","613f8989e901311de850a74fc7464609"],["/2017/09/16/2017-09-16/index.html","4a592a6ea30fa79150bf045f2c68aaae"],["/2017/09/21/2017-09-21/index.html","1fab1c71f209fd942a67774afa8007ef"],["/2017/09/23/2017-09-23/index.html","0b350a367ea9a8ce4314c304ee445e20"],["/2017/09/26/2017-09-26/index.html","f8b283e8169eb15f979a8fa20fe8c715"],["/2017/09/27/2017-09-27/index.html","b27df18e160d375bb1544b0d3f34e67f"],["/2017/10/04/2017-10-04/index.html","5fb5663483ad883013065c91bb024b43"],["/2017/10/08/2017-10-08/index.html","3e46dc9677cde8885b4382c8a71ae468"],["/2017/10/09/2017-10-09/index.html","4c76ec148434309fcd23ff0549a7fdb7"],["/2017/10/15/2017-10-15/index.html","7740fe065ac4593e533f1a7a41444fbe"],["/2017/10/19/2017-10-19/index.html","a1c6278bbd1cead1fca3661f49ed40e6"],["/2017/10/23/2017-10-23-2/index.html","67418bc89c1a09783790721d96e15d23"],["/2017/10/23/2017-10-23/index.html","15af2acc034f04d4e55071ecb8eb54d7"],["/2017/11/08/2017-11-08/index.html","5747d9cda81677f515821599c361b093"],["/2017/11/12/2017-11-12/index.html","79f4287533bdcb7cdeba85fd50ed1c47"],["/2017/11/15/2017-11-15/index.html","fb2e2cfd307aa35349afeec5f5a710fd"],["/2017/11/27/2017-11-27/index.html","d45c61046c6569ab16a2103ab82a0ad6"],["/2017/12/06/2017-12-06/index.html","610741fbc3d38db9bcfee784508dfa50"],["/2018/02/12/2018-02-12/index.html","b058484f47dbed6ba8ff846ae0974550"],["/2018/03/26/2018-03-26/index.html","7f19106e36276c02d9f46679f0da3f51"],["/2018/04/02/2018-04-02/index.html","fd6b361371a5355216fb669e6dd99b27"],["/2018/04/24/2018-04-24/index.html","204fd95c313ead2b298b5ca9249bf6a6"],["/2018/05/18/2018-05-18/index.html","5936df05339710edf146d69760be7384"],["/2018/05/23/2018-05-23/index.html","c8d01b586d6c02b44cfe43fb19b68db5"],["/2018/06/08/2018-06-08/index.html","205be43dcacc602224625b872d95162e"],["/2018/07/01/2018-07-01/index.html","ef92a6eaaf4a8b14634b4ccbdea90050"],["/2018/08/30/2018-08-30/index.html","2c78a24647e0ad681a9f05c2096eab0a"],["/2020/07/20/2020-07-20/index.html","7577e7cb846dbfb046898fd1b5cc3193"],["/2020/08/01/2020-08-01/index.html","0bd73e487cd3b545ffbd8a7b4b12d794"],["/2020/08/02/2020-08-02/index.html","32bdd5d7848399bd37f4f32edeef7f15"],["/2020/08/03/2020-08-03/index.html","34ed74139e4de28fdd704ab4140955a2"],["/2020/08/04/2020-08-04-1/index.html","9140aa01756578d04b9979223bee4ac7"],["/2020/08/04/2020-08-04-2/index.html","732e3c7c98da14a471a44defc111fb73"],["/2020/08/05/2020-08-05/index.html","87e51f9234778b421bd67b5537d2e24f"],["/2020/08/06/2020-08-06/index.html","aed05b4c2dff29e6d33ff0dc4ddcd5bf"],["/2020/08/07/2020-08-07/index.html","4f72b6563fafb46ec42355ffaf909f20"],["/2020/08/08/2020-08-08/index.html","33f90470144b2927b984ef0c24d637db"],["/2020/08/09/2020-08-09/index.html","380c2cd8fbcfdc967216777836c835d2"],["/2020/08/10/2020-08-10/index.html","72ad59463a8d758bdb6f9409c0761650"],["/2020/08/11/2020-08-11/index.html","2fd09c0ac7a94ef3df01a834355035d0"],["/2020/08/12/2020-08-12/index.html","1619246c129ef038936430e7d70f2b15"],["/2020/08/13/2020-08-13/index.html","ff90a243a6b40e841806996163673b0b"],["/2020/08/14/2020-08-14-1/index.html","4ab25081759984f8848bd10ae685ada7"],["/2020/08/14/2020-08-14-2/index.html","5ff483eaa9a4707cb0cdf35e220d6f84"],["/2020/08/15/2020-08-15/index.html","0d807c37033522da7acce417f5646e41"],["/2020/08/16/2020-08-16-1/index.html","0f7380f1a0877563e934d8d25f97299d"],["/2020/08/16/2020-08-16-2/index.html","6196e727faefd4bbce0c96c700aaa3ec"],["/2020/08/17/2020-08-17/index.html","bb01635f8e83685541010cca2a239520"],["/2020/08/18/2020-08-18/index.html","1951de5e9fdf7b778424ab0016e2e6be"],["/2020/08/19/2020-08-19-1/index.html","6ec0be47377a60a5e6569b4bf4f64582"],["/2020/08/19/2020-08-19-2/index.html","47bd84ab95eae72629c4f572e0ed3312"],["/2020/08/20/2020-08-20/index.html","b2bd8f48b522f67e055508b84eca9272"],["/2020/08/21/2020-08-21/index.html","190210a5dec851de9f930d3e3e6c0480"],["/2020/08/22/2020-08-22/index.html","1eb5b8756ddfe6d034031cb26c1df2b2"],["/2020/08/23/2020-08-23-1/index.html","385a461786ae38525de906d25a4407c2"],["/2020/08/23/2020-08-23-2/index.html","976781521934470dc38270955f171be2"],["/2020/08/24/2020-08-24-1/index.html","81a8496242db55e719631b4fc5eba67f"],["/2020/08/24/2020-08-24-2/index.html","425fccf21569588db70169d8cd7b0791"],["/2020/08/25/2020-08-25-1/index.html","2f6529175d831f0b7a5674b09832ea3a"],["/2020/08/25/2020-08-25-2/index.html","df659a5c2ad9e833807d866c0fd68e0c"],["/2020/08/26/2020-08-26/index.html","f09a37abe2f4e62281223b559996c816"],["/2020/08/27/2020-08-27/index.html","567d60b56db4bf734afc88ecefa36297"],["/2020/08/28/2020-08-28/index.html","5da7ca0b17f7b631017ff1f020cb553b"],["/2020/08/29/2020-08-29/index.html","280278b0cd2b1b3a9159261df1293b3b"],["/2020/08/30/2020-08-30/index.html","76f1205ee3129c400d8d3a69e62b4e80"],["/2020/08/31/2020-08-31-1/index.html","fcba66286c95e2eba25860648386a7cb"],["/2020/08/31/2020-08-31-2/index.html","81fd45a4b566ead0bf64eb12ec143f42"],["/2020/09/01/2020-09-01-1/index.html","a2a9091cc5af627a58b829f127a7f4f6"],["/2020/09/01/2020-09-01-2/index.html","8bbfdb7ee8d1d931f52560c0598875d1"],["/2020/09/02/2020-09-02-1/index.html","23309e0f98cfed0ec8ed939e15113b90"],["/2020/09/02/2020-09-02-2/index.html","48986c38cf47e5c35a959e9c2a336430"],["/2020/09/03/2020-09-03-1/index.html","8738046d3412376e985b8de7ad2e5425"],["/2020/09/03/2020-09-03-2/index.html","4b42e3875da25251a902cdd90d37aaf6"],["/2020/09/04/2020-09-04-1/index.html","8657fd3ea3b87d8144d7cd58b1edad4d"],["/2020/09/05/2020-09-05-1/index.html","4e94a93b669e37d8f297b4694d97ce11"],["/2020/09/06/2020-09-06-1/index.html","c5c54ffa0c05b62844efd747cce5449e"],["/2020/09/07/2020-09-07/index.html","d76b1864c5f5809dc2d90abbdca367a9"],["/2020/09/08/2020-09-08-1/index.html","308fc44fa188430a5a8e8e5939fffe08"],["/2020/09/08/2020-09-08-2/index.html","ecd9b08f8b16a31ec9f68d0d3d5a0564"],["/2020/09/09/2020-09-09/index.html","7fcc494fe0f2cbaad24e52a0ef5acb64"],["/2020/09/10/2020-09-10/index.html","1d9f382429ef6a52248b6a82dc74c216"],["/2020/09/11/2020-09-11/index.html","315a9de59c1063af24a787efc6c22a2f"],["/2020/09/12/2020-09-12/index.html","f7d090766277dd79a6b0812086c62a0c"],["/2020/09/13/2020-09-13/index.html","6ac91c5d9a7c39cf9ddb45c6b59d33cf"],["/2020/09/14/2020-09-14/index.html","b29331de7398efb0d19979243cb9e456"],["/2020/09/15/2020-09-15/index.html","bc07bc0cf267e17d6a44ca268f47c032"],["/2020/09/16/2020-09-16/index.html","138b654f12b20637729b48035e8f8417"],["/2020/09/17/2020-09-17/index.html","47fa13e3ae71d7fe998202c66dd45e67"],["/2020/09/19/2020-09-19/index.html","824dc9ba9a63ae93e28a646b4151e7c7"],["/2020/09/23/2020-09-23/index.html","d3229245191f717819192666344ecf37"],["/2020/09/24/2020-09-24/index.html","733caae909e92d8d4c6e0ffdd39a42b6"],["/2020/09/26/2020-09-26/index.html","2798be7e416f5bc07d60edcc87458bb4"],["/2020/09/27/2020-09-27/index.html","692faf696c7dc06e31e62ab349de29fb"],["/2020/09/28/2020-09-28-2/index.html","0b50e7750c63bffb9388abd1492d48e7"],["/2020/09/28/2020-09-28/index.html","02800fd7760b6a0e98de7e237303eb7a"],["/2020/09/29/2020-09-29/index.html","117d296fc0a2576614de99b9c074f440"],["/2020/10/03/2020-10-03/index.html","f2b1dee40857175ae134196b95ce9401"],["/2020/10/04/2020-10-04/index.html","cf9f6ee6ff54ff71f74673b9a9de1859"],["/2020/10/09/2020-10-09/index.html","09af6de1f793f60afaa8f42c459210f9"],["/2020/10/10/2020-10-10/index.html","677f1c717dfa09cb502c4126f762ac17"],["/2020/10/11/2020-10-11/index.html","a7e3c30646e6e70086c1b04322f8abc9"],["/2020/10/12/2020-10-12/index.html","bc9911a8c76c390b4fda832c8a5af979"],["/2020/10/13/2020-10-13/index.html","de0fc9a007a759ee5d1089fab1d22183"],["/2020/10/14/2020-10-14/index.html","376153974626d2784541cd751d38b95f"],["/2020/10/15/2020-10-16-2/index.html","269f656cadf94d857e308aa1915ba80f"],["/2020/10/16/2020-10-16-1/index.html","76cea7876122586475f80b19689ddc05"],["/2020/10/18/2020-10-18/index.html","8addd3333cec250ca9f1412235b533e2"],["/2020/10/20/2020-10-20/index.html","5fd4a0cb91a62b6a71b068da2443b826"],["/2020/10/20/2020-10-21/index.html","9f5bd1a7daa56c03dd83027a2f460733"],["/2020/10/28/2020-10-31/index.html","f8cb9dd947e6dea9b3c24f61f86c4417"],["/2020/10/30/2020-10-26/index.html","8ec13107e45cf151a2d97843af14dc71"],["/airplayervisual/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/airplayervisual/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/airplayervisual/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/airplayervisual/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/airplayervisual/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/airplayervisual/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/airplayervisual/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/airplayervisual/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/airplayervisual/index.html","c788297fb66a6d40d6326f805f223450"],["/airplayervisual/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/airplayervisual/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/airplayervisual/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/airplayervisual/js/jamsetting.js","7927507e0080ddf55c6d8b5f526bd942"],["/airplayervisual/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/airplayervisual/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/airplayervisual/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/archives/2015/05/index.html","89b084f00cd1db3eac5d8a1d03957af1"],["/archives/2015/06/index.html","c78312f2bdb42548ab616e39ab27bf83"],["/archives/2015/12/index.html","2dad6c085aaec1da1ec4177f310abb96"],["/archives/2015/index.html","230313b3d767e19261d79960577f1063"],["/archives/2016/06/index.html","a3509196d90a059c01ab03a93588c192"],["/archives/2016/12/index.html","303e9ecbafbd3ace618f495e8d31c371"],["/archives/2016/index.html","e3a8c55c1716a4e81f52f42d914b05d8"],["/archives/2017/02/index.html","58d2f7a7e5f0f5353f5b022d280e9397"],["/archives/2017/03/index.html","5cbf4f97abfc83fd93d06de3d44b3259"],["/archives/2017/04/index.html","5ff6c7ddf7c32009134c016cba746e0d"],["/archives/2017/05/index.html","1d1a22b7b51ec9b1a5f3b809a3b52e7b"],["/archives/2017/08/index.html","a9ec416fa7e0f90b7bad7069927c8baf"],["/archives/2017/09/index.html","3b3c687e10d51bcd0f6dbab22e1d4a0e"],["/archives/2017/10/index.html","1e0d8d1585cf7b6a1650fd46d5000a5f"],["/archives/2017/11/index.html","bb65863c79dc58235aee0effc0e582a1"],["/archives/2017/12/index.html","6da6545a100e438c2dd9f445f8eb2bd1"],["/archives/2017/index.html","2c7104c7cbe4ea012a830ab9f43ce127"],["/archives/2017/page/2/index.html","4601470636db808035ceeaf9638547d2"],["/archives/2018/02/index.html","75b75b5c5031722e70ad4f5dda73877e"],["/archives/2018/03/index.html","4e8181cf2df0ef6acf1e3aa982d16fee"],["/archives/2018/04/index.html","a268c517ab6adda3679bdf0efc8eadf7"],["/archives/2018/05/index.html","f7b85a6dbcfba4fad31fdfcd5a8a027c"],["/archives/2018/06/index.html","cbccd22f0176665ce48e66fd38a7ac33"],["/archives/2018/07/index.html","28b42865e6d44979a4e3b9d49d59158c"],["/archives/2018/08/index.html","a285d0a5bf8cc115ecda93ed22f49b12"],["/archives/2018/index.html","d5b33ea10290f92fa2351a14d91f01f6"],["/archives/2020/07/index.html","1f14082ca3292a1358a6d50c0c8e329d"],["/archives/2020/08/index.html","e08b93e660fe7acd75d3a6542757baff"],["/archives/2020/08/page/2/index.html","7dc802b0938b793ddd177c8306fce2d4"],["/archives/2020/09/index.html","237bb1c1626acfbec159295f3a8d2852"],["/archives/2020/09/page/2/index.html","dc3f29c48504f883d4e01538d3674bfe"],["/archives/2020/10/index.html","16cbbac09f1bddc1a1b136105a61bf80"],["/archives/2020/index.html","86e040756013f6658f45f4f68dd2d6e8"],["/archives/2020/page/2/index.html","e135dc9c80e12e8ebdd931f02525703d"],["/archives/2020/page/3/index.html","5612dbdcbbdd6b78ae6be696ed392b52"],["/archives/2020/page/4/index.html","5036719163e128b6dd93f146224b34c5"],["/archives/2020/page/5/index.html","b653d2a5052db288a8bbf65971bd28be"],["/archives/index.html","cb299f55612182b1197a06a81ab60d03"],["/archives/page/2/index.html","8b432fff892bb6a8900f89671b0e399f"],["/archives/page/3/index.html","87210b6ea1ff0bbc792eff13e20840f8"],["/archives/page/4/index.html","c143a3f14443ba157a0b9b00cc66c566"],["/archives/page/5/index.html","2199ac21e9ea78ba484a6ec6dd390b67"],["/archives/page/6/index.html","62d93d96815c0008f6860fc820e31edb"],["/archives/page/7/index.html","c22d94fa45205f3dffefe0b4301b4470"],["/catalogtest/index.html","62b902b3cc592834d6a1ae0f24f77c84"],["/categories/NHK听力练习/index.html","3f627760a276a85bc9185b9c06fc784b"],["/categories/NHK听力练习/page/2/index.html","c016ec38df69152eaddc228bc9805911"],["/categories/NHK听力练习/page/3/index.html","2c4d7556771347e7d46b8e6b304ca78a"],["/categories/vue/index.html","2d6c69bc3ff346d0136b28744b5b219a"],["/categories/作品集/index.html","248ea3e4fe0503c3977da80d506e32e2"],["/categories/学习/index.html","dcf2325f0f348bf7e4b402dcb4168ee0"],["/categories/教程/index.html","0591bdbafda3a3540270adb4d410f772"],["/categories/游戏评测/index.html","e0a4571c9d51f229ded5b7afb55cab54"],["/categories/生活趣闻/index.html","5f8f79c8e2a33aabb4f07a88d7730a04"],["/categories/随想/index.html","5c3c0c7a9fc0132ea1a35eb7a7a8bbb0"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/addcss.css","d20fc732e0cc7996bd82c5170b7aaa86"],["/css/background.css","b4e0ca22f9f4e4fb063347fe34402145"],["/css/calendar.css","a1db9e78a03ba862d74ea1f3e675386f"],["/css/cardlistpost.css","d110d491f5a8f21c553e8c0992430b03"],["/css/clock - 副本.css","65602c2385c7eab42ee3804cd6ee0a5a"],["/css/clock.css","333804904271eecabbcc519b4ec76178"],["/css/cursor.css","f514da9c81fb3fcb4f7e9038dfa30874"],["/css/danmu.css","2a5b914a9592bcd353425c6d5fa7af8e"],["/css/flow.css","c771dbc6f0b865b39a9806713dc1e284"],["/css/flow.min.css","7ce838f3563e00e15ca8bd55b6e00630"],["/css/font.css","e91880a0e442f996fdcca1e1eb0f9aab"],["/css/index.css","54ac8e8b0bac3b10a2ab4e099603eca1"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/loadingline.css","bc1ee020a6a11fea17b915b97e6978bf"],["/css/news.css","bc54bafe1b3285eb19c63bb5f0226971"],["/css/shuo.css","8db924024099e925c53d5b3dd22f83c6"],["/css/sortable.min.css","a4c7bddbdc32317dbb63a31244a82556"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/gitcalendar/index.html","d7663334739ee576b9010be9f65d1a85"],["/icon.png","8ec68de45d18642ba9baf2447e62f476"],["/images/201808011428/css/htmleaf-demo.css","a8256346bbe444fe604987f1fffbd31f"],["/images/201808011428/css/main.css","9afb83b1ea44d47f859a57395fe64737"],["/images/201808011428/dist/sortable.css","6b6b3d6f85a3497ee9e71b16b7223f60"],["/images/201808011428/dist/sortable.js","d199f4ab84617e894975f4757dbb3c17"],["/images/201808011428/dist/sortable.min.css","a4c7bddbdc32317dbb63a31244a82556"],["/images/201808011428/dist/sortable.min.js","0351fbccf2faed49062495990e32a14f"],["/images/201808011428/fonts/icomoon.eot","3891455c55b76ce7f7c86bfc33cd6493"],["/images/201808011428/fonts/icomoon.svg","bb97ed129aa43f69280d3085cd269102"],["/images/201808011428/fonts/icomoon.ttf","e46c36b6f94cf81311ffb383f6d32bec"],["/images/201808011428/fonts/icomoon.woff","d1117ddce10d8c7ca18ac089764da08d"],["/images/201808011428/images/item-1.jpg","c4b8c20bee5947eba1541a6a8a60a5ce"],["/images/201808011428/images/item-2.jpg","dfb3e34508b4060140150784cac9658c"],["/images/201808011428/images/item-3.jpg","4f40a1d501cbd4ebcd1f617078fd6a76"],["/images/201808011428/images/item-4.jpg","04a5d629dd413b49e960437cde7dcedd"],["/images/201808011428/images/item-5.jpg","370daf7210529430a4313b29bdad6269"],["/images/201808011428/images/item-6.jpg","93ce2054bde3d9463270d9f481012652"],["/images/201808011428/images/item-7.jpg","6a0345cbc8c6ac5e909f86e6faeeb0fd"],["/images/201808011428/images/item-8.jpg","4dc81e428730ba2b021dd4993385db4b"],["/images/201808011428/images/item-9.jpg","2aa5f8fc43fe5eca9bd8394a36f1b4d7"],["/images/201808011428/index.html","cc82e901927716823339714c3e410f57"],["/images/201808011428/readme.html","50796ea05cab020084bd4ff2c599a45e"],["/images/201808011428/related/1.jpg","f4f33eb12a48c6bda46a1c371db24e5b"],["/images/201808011428/related/2.jpg","891bf31b875ab7588f138185019d5166"],["/images/233.jpg","13e6ddf019e5560a32f3ff82efd22344"],["/images/AMJ1.png","d27a6725d1aaaf5324248da4312ab6c2"],["/images/AMJ2.png","00e22eba5901e5bd674e42228cd5bd26"],["/images/AMJ3.png","c8c9ea6348dfcad3a641899d5b587431"],["/images/FOTO1.jpg","4b6f100861908e2c7044cffbdb4a0c1a"],["/images/Isolde-1.1.6/Isolde-1.1.6/LICENSE.html","6b11120c60ca118af7e17b418dc0cfa9"],["/images/Isolde-1.1.6/Isolde-1.1.6/README.html","f6bfbe6f4faa3cfe3d733f00beb14e2d"],["/images/Isolde-1.1.6/Isolde-1.1.6/dist/isolde.min.css","e859dcc0f568c92bdc4b7be3f3b7d7fe"],["/images/Isolde-1.1.6/Isolde-1.1.6/dist/isolde.min.js","c5f5cc1595efdfde4d0b1b1415c6ae25"],["/images/Isolde-1.1.6/Isolde-1.1.6/docs/OPTIONS.html","074f7c7d5989c66501d346ad9226ffaf"],["/images/Isolde-1.1.6/Isolde-1.1.6/gulpfile.js","8d329f641050ed4e2a93a4cc914bba1d"],["/images/Isolde-1.1.6/Isolde-1.1.6/index.js","9fa8aa3efbd2e9eef8acc5f85752ad3e"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/css/main.css","8697f186bbc389515aa6eab3a5c9316e"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/css/sortable.css","04fca21af7d48dc17591894d17aa8358"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-1.jpg","8e757354b2917abe5dde088cbc82dae6"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-2.jpg","8a5fcc4cebc52caf89eb954285edae6d"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-3.jpg","caeae3d2265de3dad6d4b16dfda1fd05"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-4.jpg","1622226c2f5ef489c55f028caf26bafd"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-5.jpg","677d53cc36ccc311e11cd455fe222621"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-6.jpg","bdedef62cfdcdf9d273fc51a0ace2563"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-7.jpg","2faba84c41dc5f0670efd3cc0b139eb4"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-8.jpg","635c6292e642ab737eed6411c3295da6"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-9.jpg","e1c4d431a72b8bbf084451939ca86595"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/isolde.js","1ddba0575c730fe2318c6450dfc4f403"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/index.html","8964807e02f1a72919fe0a7d8a3dc281"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/isolde.css","b8011c458b923321a755da760cbeb5f0"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/isolde.js","1ddba0575c730fe2318c6450dfc4f403"],["/images/MVVM.png","ea5a002ee2f85c71a0db51d5adb5de19"],["/images/UT.jpg","367f4e432f9db55a92b2a290c4b0a476"],["/images/UX.png","a183974e958d41d1b6acec70bb7ea00a"],["/images/WindowsTerminal.png","8ac29cb56b8a1768cf7de071e9f1ae6f"],["/images/air-w.png","c1cc32f9d3e17551ca11a7d18a0b533a"],["/images/anzhuang.jpg","912b2489957f8344406edc5e5cebe5fa"],["/images/api-setting.png","2c0bb074390779721cba009e96c5417c"],["/images/apikey.png","1f31121b190eb1f990bcc3e27524bc03"],["/images/b0_img.png","43fcaa3f8b394ca5be957f4b860800db"],["/images/backpic1.jpg","86a6fa88167feb338fbf1a4e9057114b"],["/images/c0_img.png","34397085b4d3349034f9b167469ac626"],["/images/c10_img.png","7938c5b0dd789db4f262e5a618943a9b"],["/images/c1_img.png","95211a0ebf07befde1b11477c3a8185b"],["/images/c2_img.png","456ba51725d669fc4d005787753a6b08"],["/images/c3_img.png","a0aa7dcdd2ed5bccec52c16942036a3f"],["/images/c4_img.png","0869cebb60d00a78936b7498823a39de"],["/images/c5_img.png","533774e840ccb3ef13b46201a54be05d"],["/images/c6_img.png","db9eb681dea0b7911f0b2ba918d86c26"],["/images/c7_img.png","5b9c9e0331aca2a9d47a2730512f34f5"],["/images/c8_img.png","be9107995f185e3bbf7186c4dff69f42"],["/images/c9_img.png","642a2e762b74a28d2426af14f2b864c1"],["/images/calendar.png","86319b08b93be7c8bc47cdba7a169563"],["/images/cataimage/b1.jpg","e4795ce34b4d070d251c37a2ae5e37eb"],["/images/cataimage/b2.jpg","e1a7402c7d111b33d22c187a794e693d"],["/images/cataimage/b3.jpg","c091fe2a8024b2f010911e9af8091147"],["/images/cataimage/b4.jpg","1a2190b3e7ecb404767f029642adb637"],["/images/cataimage/b5.jpg","2683b29be7ea536b2d2c0b428ab87a80"],["/images/cataimage/b6.jpg","8eba752c28594ff5a253a01c0904a4a4"],["/images/cataimage/b7.jpg","9259255b1e1ec36bf92b4f34ad68db7f"],["/images/cataimage/b8.jpg","beaae9e5c735657f2e5bba9eb3deb754"],["/images/cataimage/b9.jpg","7ea8994ee380e84190422ac1b1d93ed8"],["/images/citie.jpg","adea8c4a6fca73e27f5e2aae864dd21f"],["/images/clock2.0.png","0a0f122c7a25262fc02ee99df0ef21eb"],["/images/clock3.0.png","8e04375c183c637b65fb50ed40f46466"],["/images/example.png","aaac9983e5d59f919bf282dcff2edb3c"],["/images/flow.png","adb9dac479e664c3e1b103a2c7fb9517"],["/images/foto17.png","28db4c6608ad1ee6b34238cafab25e5e"],["/images/foto2.jpg","be95b922512d004a61f83c97af3e2602"],["/images/foto2.png","0dc07d4e1b00526a273a89dc8b81548d"],["/images/foto3.jpg","551c0616c92c4ee7cc17dd458b3c46e9"],["/images/foto4.jpg","9d1d9fea759a41afc0061866e400339a"],["/images/foto5.jpg","984f618b15372f37d54f507e6f379f10"],["/images/foto9.jpg","b683fc0b998e80ff8f5a3e45e889807c"],["/images/girlpic.png","ff1e8427ed555af639e6d849f8f648f1"],["/images/girlpic1.png","698e5570e821c3cae643cc9777c2292e"],["/images/girlpic4.png","551882e4b9b6afb79000fd34c0dbf5e5"],["/images/gitcalendar2.0.png","3211a589d3a1d28c8711d095edc760e9"],["/images/headimage.png","332502f36a0297b30cb7969fe6de8451"],["/images/hexo.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/hexoWT.png","c027cc9f5665c7d7ba657e7a4bb40017"],["/images/his-json.png","7d8a71e38ab684107446e5c72c31854e"],["/images/history.gif","0459a3dcf2317253de0b34482880c63c"],["/images/homework1.png","e8d2f64d0785519ea7779016208a2900"],["/images/idea.jpg","5eb08bf6c965588f03c8860f201cac45"],["/images/jiaocheng.jpg","ad0b07db72a1eae964ab067511b756f3"],["/images/key1.png","f2a370e02ad6c5a101db20b47a9a0008"],["/images/key2.png","21dc40bbe0377cd9fe85a9cb431c18f0"],["/images/letter/a.jpg","0d4de9f533da8b2de81ccc509657f853"],["/images/letter/a.png","213b394b0800f642d758368779d79942"],["/images/letter/b.jpg","66fee2626ad0a71d42dc6f0d4b2c04a1"],["/images/letter/b.png","581ea16ed4c1d7bbc1c0dca3929051a9"],["/images/letter/c.jpg","121a016fcce1ed141082dc6254f5abbc"],["/images/letter/c.png","3d8cf0fa352d68dde80b3310bd702ac4"],["/images/letter/d.jpg","6e1db729489ebbd94496f2134b18d4ce"],["/images/letter/d.png","c48ca73078c850ff606cad10f11c1c56"],["/images/letter/e.jpg","ff503c208a88b211e598b92e6969d0e7"],["/images/letter/e.png","37fc8cdc838e64efe77305fa30581060"],["/images/letter/f.jpg","429cc37ac2269be8797c969b66a81339"],["/images/letter/f.png","12adae8b53d9e6048dbbeeb3f91cebee"],["/images/letter/g.jpg","0b8098e60deaf670dc1d9fba77714341"],["/images/letter/g.png","575f1073e0f689ae0d84803b8c979f21"],["/images/letter/h.jpg","9002009c053237f1ef6724e8be5f2b37"],["/images/letter/h.png","2e7173749a66cc1d8630e69261e56464"],["/images/letter/i.jpg","431837c21dc08954ee4acb2b0bd1d9e9"],["/images/letter/i.png","37a8a26bace6560ddb9c85a8605da81c"],["/images/letter/j.jpg","a83cac86235866d82053ea127940ccc2"],["/images/letter/j.png","8aad49c7f55d6d365cbbf080e7ecbc30"],["/images/letter/k.jpg","a7bd4a5ab89ecb4ad1d391c73a2c3034"],["/images/letter/k.png","2488883f77a6b77fafaaf02cbca9c319"],["/images/letter/l.jpg","b87d0637d8edd85bbc5a144d8d49faaf"],["/images/letter/l.png","41d97d26f91501634e73da0dbd2d9ad2"],["/images/letter/m.jpg","7a29bfd3c2da75f6a219daa19b4bf01a"],["/images/letter/m.png","bbce5ca54ef802aa23e5a406fb419e9c"],["/images/letter/o.jpg","9f29dbd5dd07fb04e610cd0a8fc83074"],["/images/letter/o.png","8242f141981f606ca698ed32df2a17c7"],["/images/letter/p.jpg","325a87a9fa352c7ed5eaa01f24018b63"],["/images/letter/p.png","8d457fc405de63b537e01226a73d3287"],["/images/letter/q.jpg","57921474cb1e9f4352df281856a10f5e"],["/images/letter/q.png","93255d49876fc4cd9260383bbe30910c"],["/images/letter/r.jpg","0b634e85fe24fea66c9fb3d1eaaf1296"],["/images/letter/r.png","ac4be3c684d8aaf7f875993dd12c4fc0"],["/images/letter/s.jpg","e803c253e88e6577721a63d6929a53fa"],["/images/letter/s.png","7d8e6a7981edc0045d41647b6547e755"],["/images/letter/t.jpg","ef4b9b12431116d53994185248d0e504"],["/images/letter/t.png","da9331bb93c0285bb9ae9b98350d4db7"],["/images/letter/u.jpg","4b5fbe5c3b7414ef99e46dab2b9da71a"],["/images/letter/u.png","693fb63a9f05fee9abf4f8d65380fb2f"],["/images/letter/v.jpg","85f1071ab973e79017eeaf5eb726d0f2"],["/images/letter/v.png","fdcd25e6d19bfa3fe7cf09a9047235f2"],["/images/letter/w.jpg","d39f91c9e1be9ab39ca46218fcc7faaa"],["/images/letter/w.png","2d79b92721fd2dfe4e19d8a57ccf9473"],["/images/letter/x.jpg","e2ce4f0631d5002a79a5930ccbdb8449"],["/images/letter/x.png","c0acbad3e4ddaf59a95ecb6d6509bcbe"],["/images/letter/y.jpg","b2e7b48748a70f0dc8c4445bf9069196"],["/images/letter/y.png","fc61ea05666257f2c50f08918970a753"],["/images/life-cycle.png","02f39ea5c041d45938fda4b50f234cb7"],["/images/life.jpg","74d2d9c5f48ec59e3badeec690941812"],["/images/listen.jpg","9d4f73cd5634f43deaed4f9aca03f9a3"],["/images/loading.gif","ffa0804a5d99e2d5b39e05cda6d6b28b"],["/images/magnet.png","4899a924f3de0d19dbe0415128c07d65"],["/images/magnet1.png","8d010eb86ca943e036adaa7de57aee7d"],["/images/magnet2.0.png","54fe576f174d2b6917fef89f40ac5975"],["/images/magnet2.png","293cb414a8ab93b43bde3bebf9cf0cfc"],["/images/magnet3.png","1923148630e2e094ff80bf35aa604c10"],["/images/magnet4.png","9bb4f963ac1c09f02d62525f513f492c"],["/images/meilu/1.jpg","cd67abcc3f543b5c66adc4f9d9c5c628"],["/images/meilu/10.jpg","ac9fb2711e477b5db1c3acb57e899045"],["/images/meilu/11.jpg","364caad6dfc356a3dc630fa067e48e88"],["/images/meilu/12.jpg","274767e5708f79934e5bdbf73eda8f0d"],["/images/meilu/13.jpg","dcab12b84454770b208913db63e825ac"],["/images/meilu/14.jpg","037cdd048284e621f27e17a2c59e8ea7"],["/images/meilu/2.jpg","f6cdb65ae3fad4523b32f5ee38696b60"],["/images/meilu/3.jpg","9e5df3612c2d93bf57313186c954aea5"],["/images/meilu/4.jpg","69ef2d6f4bcd79cf4b4e672b60c6751e"],["/images/meilu/5.jpg","ce81ca16def7613b7ebb368fb554f14f"],["/images/meilu/6.jpg","cafd5b62305f806754a75cc3af8c3b77"],["/images/meilu/7.jpg","b8ae865d386e1e713a6034da6b090c10"],["/images/meilu/8.jpg","afad7a7bf1066c817a8d2e7566bc780d"],["/images/meilu/9.jpg","72f9649f56b564eacf23ce3dacb88029"],["/images/metroui.jpg","5503bfffd450d9ab572b67ea00941571"],["/images/metroui/1.png","79a03b408c19c74eeaa8ff6e17a03f9d"],["/images/metroui/10.png","8309fed71a15c78f2dfa3af1ff75a5f3"],["/images/metroui/11.png","aaf1a007cbae12f93cc2688bace18d28"],["/images/metroui/12.png","0758ea282c3828c47e5c64520ff85783"],["/images/metroui/13.png","12ca7b511927cd4b26e97f3b20908a32"],["/images/metroui/14.png","f44ba7680f7b36df437e2ae2588d0565"],["/images/metroui/15.png","e8927c78b125b805af7aa86fee815ab6"],["/images/metroui/2.png","e604d3c662b996f06f22753ba9ab379f"],["/images/metroui/3.png","664e3b7490f2f95d5547b8ba79a65456"],["/images/metroui/4.png","c0f255344cafc303a1d9c7404da37149"],["/images/metroui/5.png","da2074cdb1298aca826abc1a5c441300"],["/images/metroui/6.png","efef2f087127614b4e03bcbe9a347018"],["/images/metroui/7.png","a4d34b1a2dbe3a58d3a92276880be039"],["/images/metroui/8.png","1d34a626bbaa898a60d4501936bcf962"],["/images/metroui/9.png","0663697c1667b377fe2623bd65e00b31"],["/images/metrouilogo.png","aea81b42d1c2c96440f74cf56ad82e2f"],["/images/nhkimage/2020.08.01.png","af4c55b2ae1d5ab2f56c75a87fcdfdb3"],["/images/nhkimage/2020.08.02.png","c355d41b90f5c65823f96c5f6868ce53"],["/images/nhkimage/2020.08.03.png","fddcedb40d7f28b2ccb90814351ad5c8"],["/images/nhkimage/2020.08.04.png","8b4518ec5a8513f442980ed7167136b1"],["/images/nhkimage/2020.08.05.png","590abfb19334b0c3cee5a005674f2253"],["/images/nhkimage/2020.08.06.png","d469e21100c42435e88f2bdf07f93da1"],["/images/nhkimage/2020.08.07.png","3ca9e2c8b8a09a38423d73cd36e8de9d"],["/images/nhkimage/2020.08.08.png","4420c2d899fe4eb90c48bae0da8418a2"],["/images/nhkimage/2020.08.09.png","df14be338f9c920818dd1daa6aa955ee"],["/images/nhkimage/2020.08.10.png","c4e2ed023cd3dbfd4986add35ca9357c"],["/images/nhkimage/2020.08.11.png","cf562339e57f673d394f3e6cdd1f60cb"],["/images/nhkimage/2020.08.12.png","81dfa179fea3052ddcf73912ea368f67"],["/images/nhkimage/2020.08.13.png","8cf26c2642e7a27cbd86fcbda8bae8d9"],["/images/nhkimage/2020.08.14.png","d88eeb678b3ed3651d597e61957e264a"],["/images/nhkimage/2020.08.15.png","b9879f193867edcffeefce62c9dc7153"],["/images/nhkimage/2020.08.16.png","46cb914aa1d556561897767ec9ff66a0"],["/images/nhkimage/2020.08.17.png","ea1af9645b5cc9cbaafe70a91dd15cca"],["/images/nhkimage/2020.08.18.png","e87e4de39a6f06cf4283a63af92dd8de"],["/images/nhkimage/2020.08.19.png","8001a951513b542a98ce1151be5bd87b"],["/images/nhkimage/2020.08.20.png","4bc8fafa3ecce30d340b1350715d78e3"],["/images/nhkimage/2020.08.21.png","07ad1337e127922abff27da6c672549b"],["/images/nhkimage/2020.08.22.png","b2b5d53ba46015f64048f9d803b12179"],["/images/nhkimage/2020.08.23.png","225af8c0cabe5218ec634d1b8815fd95"],["/images/nhkimage/2020.08.24.png","1d54a484a6e2395aabe9be005cd90361"],["/images/nhkimage/2020.08.25.png","8008ba169cfce0ef2041329cd29b6b77"],["/images/nhkimage/2020.08.26.png","72a2b8094003a54c97a34ea97cf21bc3"],["/images/nhkimage/2020.08.27.png","893407e604804d215c8fef8bcd5f2684"],["/images/nhkimage/2020.08.28.png","b542280b7341759890a99cbd44d822c5"],["/images/nhkimage/2020.08.29.png","620e2e7d4772e39615fd1a88cdf49717"],["/images/nhkimage/2020.08.30.png","f645d7ba2dcb506f9ec6fb9244425ad7"],["/images/nhkimage/2020.09.03.png","c5262f3aa87190e0273383ea1e445681"],["/images/nhkimage/2020.09.04.png","c07149c32aa41c03bc7dac82a713f6b2"],["/images/nhkimage/2020.09.05.png","4e43556e1cb3b7f4d75f0f6127616a54"],["/images/nhkimage/2020.09.06.png","1021d2ae04a7f109404f857a2a7629cf"],["/images/nhkimage/2020.09.07.png","db9827e9f0a4cf1401b559b4644a0204"],["/images/nhkimage/2020.09.08.png","efe1030b73dc1c01f169c3122a194426"],["/images/nhkimage/2020.09.09.png","f6ba3a1c6cdeff88404ebe2a646f2eb5"],["/images/nhkimage/2020.09.10.png","3471b05d02113517359a9e2167befcfa"],["/images/nhkimage/2020.09.11.png","921a541a8bffb1aa436df2eb6db7c99f"],["/images/nhkimage/2020.09.12.png","a51f8ebaddba69bb80f9259a30f17e65"],["/images/nhkimage/2020.09.13.png","0399889200493cd2154ffc407e2bc400"],["/images/nhkimage/2020.09.14.png","eaaf3da69a39ed316b7fc8c4d409bb0f"],["/images/nhkimage/2020.09.15.png","5774959ea4061c9298ea174f0862cc3a"],["/images/nhkimage/2020.09.16.png","0c5a00f74020740fda589c02e4b3f917"],["/images/nhkimage/2020.09.17.png","b5aef734e3a7db4862ca3fe4e6769dc2"],["/images/nhkimage/2020.09.24.png","5982a7b3843f4ae43b2b4bc4b0c577d6"],["/images/nhkimage/2020.09.26.jpg","c6415af781fbdd36fdb034f74646129b"],["/images/nhkimage/2020.09.27.png","27aa6f6a8d5534ccd99cff261dcd9eb6"],["/images/nhkimage/2020.09.28.png","0f4318d1ff17a33de364432a1c44b5ad"],["/images/nhkimage/2020.10.09.png","6408d9f7e66fdeba8b9207939a08cf8d"],["/images/night.jpg","7c57432e644d24d5738a56459bea0e7e"],["/images/notop.png","d25c272e5ce312a880e04ce8a0b27683"],["/images/pasted-0.png","552608d8f6e39369aa30c6e332a32826"],["/images/pasted-1.png","baafdacee93c99e99418aaedbf524fda"],["/images/pasted-10.jpg","395cff6f64ab5df19baa3572ac98e541"],["/images/pasted-11.jpg","56e5df07c96634638abf7995b25c81ab"],["/images/pasted-12.jpg","61b3f803b85ce3640d7a9ba7efb9da6b"],["/images/pasted-2.png","2f410e53c811f92a6135f48857776f5e"],["/images/pasted-3.jpg","bb5717e691e87355e7d63a5f3a87ae62"],["/images/pasted-4.jpg","10041d0e3567b24b81222ec5075d6492"],["/images/pasted-5.jpg","ac5047a4b48c6cdaee86fa1863e33904"],["/images/pasted-6.jpg","1556ae8d3ad5713d60237ee4d10e81f0"],["/images/pasted-7.jpg","913fde1686587646ddc663bd810cc81d"],["/images/pasted-8.jpg","fc83268081fb4b6b6ecb1ffa1ec5af7f"],["/images/pasted-9.jpg","25e0fa3496591501f5c29d0b802b77d2"],["/images/pet.png","2b8c121909497e57057478856fe48a94"],["/images/pet2.png","dfb1d6a17b527ccc0c600e6ad31f55e5"],["/images/pokemon-js-master/pokemon-js-master/README.html","639fbb9a3726a304a5b3875da4e3b87d"],["/images/pokemon-js-master/pokemon-js-master/fonts/pokemon-italic.woff","78e86827d84b43c015a2f4c2c6a373dc"],["/images/pokemon-js-master/pokemon-js-master/fonts/pokemon-italic.woff2","6eed2c3b876039e9332617cf11051bde"],["/images/pokemon-js-master/pokemon-js-master/fonts/pokemon-normal.woff","09442a9708ccafa61a894d703b10a45b"],["/images/pokemon-js-master/pokemon-js-master/fonts/pokemon-normal.woff2","f82c92d44c94dcdacf907a1be4fac138"],["/images/pokemon-js-master/pokemon-js-master/img/ball_empty.svg","71b5bd4f59def835f94989825d23a737"],["/images/pokemon-js-master/pokemon-js-master/img/ball_full.svg","7e11059b84cef189cbae0694b31e3161"],["/images/pokemon-js-master/pokemon-js-master/img/blue_balls.svg","86a4983e08483856c2b69ba22b3b6605"],["/images/pokemon-js-master/pokemon-js-master/img/blue_front.svg","67d4551115bd9619421c8b279a02da21"],["/images/pokemon-js-master/pokemon-js-master/img/blue_line.svg","99e3256fe421cea565eb6c8e238b4e1b"],["/images/pokemon-js-master/pokemon-js-master/img/eevee_back.svg","be41cc88ba29dffed133934f3fd81092"],["/images/pokemon-js-master/pokemon-js-master/img/eevee_front.svg","67e75860167c118c80b43e9bc77f8dd1"],["/images/pokemon-js-master/pokemon-js-master/img/frame.svg","9ba744fd242d76220503200dc263d225"],["/images/pokemon-js-master/pokemon-js-master/img/hp.svg","1b9572b00909d59dade3c5d9c7484a94"],["/images/pokemon-js-master/pokemon-js-master/img/level.svg","ce8d20ff7ae3e66decac50b78ca3b86b"],["/images/pokemon-js-master/pokemon-js-master/img/marker.svg","3b8296fb02592d99e7a7aa29b1d41742"],["/images/pokemon-js-master/pokemon-js-master/img/pikachu_back.svg","41f62334dab4ff5ad455bf3792243611"],["/images/pokemon-js-master/pokemon-js-master/img/pikachu_front.svg","496206572029bcfaebfaed794ed1d015"],["/images/pokemon-js-master/pokemon-js-master/img/pokemon.svg","f015c9582ea62070300062fe2022dd37"],["/images/pokemon-js-master/pokemon-js-master/img/red_back.svg","1e4dc80c13eac754369017dbd19c9086"],["/images/pokemon-js-master/pokemon-js-master/img/red_balls.svg","35d2d97a11a79232ddeb90e052af95cc"],["/images/pokemon-js-master/pokemon-js-master/img/red_front.svg","b4fc7ab1d0a1254c453ee3ebc28db79f"],["/images/pokemon-js-master/pokemon-js-master/img/red_line.svg","fd9e3b97a6264fc5e5f398ce854d24b7"],["/images/pokemon-js-master/pokemon-js-master/index.html","b5aee09086bc1d8f6867ec0ac7f60b06"],["/images/pokemon-js-master/pokemon-js-master/jquery.js","ac5017a6c6a77a3db6f989b281084b6f"],["/images/pokemon-js-master/pokemon-js-master/main.css","3e4465c57f14ab0e02b5b2a805372c0c"],["/images/pokemon-js-master/pokemon-js-master/pokemon-min.js","26e1d8483c8d86ab39054a609106aad0"],["/images/pokemon-js-master/pokemon-js-master/src/pokemon.js","f43de536cebe95ac1b19b905cbc9d889"],["/images/pokemon-js-master/pokemon-js-master/src/promo.png","abf2d1d338c0a9080c1a9eab7b35e6e0"],["/images/pokemon-js-master/pokemon-js-master/src/screenshot_1998.png","046079a29e3df9b95bde3c3c58647d43"],["/images/pokemon-js-master/pokemon-js-master/src/screenshot_2014.png","828e18e5add8f29486ba1945de2bfb7f"],["/images/pokemon-js-master/pokemon-js-master/src/screenshot_2016.png","69dbbe3b5b622cdce0fa82aca162129a"],["/images/ps1.png","0917ba91f21b6944dc08d35c41a326d2"],["/images/psb.jpg","6a27c58337875c776af0a7667598b401"],["/images/pubu.jpg","c5f6319fe03fb1fa52bb67097b1f22f7"],["/images/quse.png","7cd1ec12b804305430cb4cdc09c7a893"],["/images/rain.jpg","9c26acc44c692b6a63e134be07b07c18"],["/images/rainsmall.jpg","e8c91c40bef224fc5a3942bd0d007b84"],["/images/shezhi.png","281bf545f6a4024e2d0b7120bc398a21"],["/images/shuo.png","9cce9df6e32e00e49471b9a9f089f6aa"],["/images/shuoshuo.jpg","c5752c104cddc0884d3f50b4dca01322"],["/images/soul.jpg","d97b4099c0728ff6123d006fa62db86e"],["/images/study.jpg","a9b1cf95ee6bd9f3913e8ec6a6a6f44f"],["/images/tianqizhizi.jpg","dd48d78b4eeaaa52578352f9ef570b14"],["/images/time.jpg","b8513da2d044befd353231d3e51db22e"],["/images/vue.png","0d2b5680bcb76df1333b85fad58634a7"],["/images/vue1.jpg","8cbf18302c6fa72e2a40d0cca0832213"],["/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/03n.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/04n.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/images/weather/09n.png","512894b4a127a42e060e237674b8d145"],["/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/11n.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/13n.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/images/work.png","e521cf5b834292fde1c50e0a0f5802f9"],["/images/xiaoguoyanshi.png","994a3b710d36df0a4630cd9a768c7f7b"],["/images/xiaoguozhanshi-m.png","1fefca18214fc4889d1bb76b81887c9d"],["/images/yao1.jpg","9dfddaf8c121fc8db788a87d133d6376"],["/images/zfe.one.png","b41f689341882058ffb28c4cee499bde"],["/images/下载.jpg","79c7247da282569a05bdd46aa43b93b0"],["/images/幻想终结之日.png","0025c4d3973bdfedb80db3f78c59fa47"],["/images/时空战纪——游戏建议及意见①.jpg","1337457f14a8dffee66d94f8915b54ff"],["/images/简历.png","d70507ee4615c9e324578c0d777e6855"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","9c5a60006a053f880b1e4a2532705080"],["/js/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/APlayer.min.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/airvisual.js","71cf86bfd452ca01d92438d8266416ee"],["/js/airvisualapi.js","6931bebe1696688d109963187fc2eace"],["/js/artitalkkey.js","ad2c74320c63125a36319659657d2886"],["/js/background.js","94c8410b174f58594cf81ec99054968b"],["/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/js/calendar.js","a58e02711cc6dec4dc04257e555b8923"],["/js/catalogMagnet.js","0387c6ad152e7a6076cceffc7420be77"],["/js/clock - 副本.js","405186e7a9d73221d2d50c0dea2852d0"],["/js/clock.js","2fdceb94cc57b551cd245b0001927b66"],["/js/color.js","3730bb4f7b185e6f5130ac28bace968b"],["/js/dan.js","6b6ae6b7f1b42dd4857541f43b2bb733"],["/js/echarts.js","dc1227b1eba1ba47fd185a387d0a7d37"],["/js/gitcalendar.js","fadfa8a42272cd322118653dca512a7a"],["/js/history.js","20459f7db325e597e64903f4c0d19306"],["/js/historyroll.js","a3e9ac376106816c50a61f9f4306d671"],["/js/jam.js","462c07d3b2e0f20394d994bbcfae37cb"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","f5b2bd10be1e09516c539afa2197a8d7"],["/js/news.js","efd3937b3e673d42d100e8acef0e828b"],["/js/rain.js","f656dc28e4ab5c3f8414d35f683278c1"],["/js/rainremove.js","ceacf82842b101f7e54a2aaf5f4bb9cb"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/shuo.js","1076b1ef51358cc11b6ff3bab25e15d8"],["/js/sortable.min.js","0351fbccf2faed49062495990e32a14f"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/js/vuegitcalendar.js","664c0f121af9131af267c1434225b5e4"],["/link/index.html","0f7243c5c6e6472d94d916e869deb963"],["/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","5b49bbe6c87d9e38961f6c146e621cf0"],["/page/2/index.html","9b1814e6e4990d3877a5bfc0db323cc2"],["/page/3/index.html","a746fc596777f8e105083e5bb56f51ce"],["/page/4/index.html","9f7e1aab5caf7bef5667f2c390468c3d"],["/page/5/index.html","64c7f8c289db551da5dff0766a4ac1c8"],["/page/6/index.html","e6bd96b045c70aa41efee417a7c35f95"],["/page/7/index.html","9ec3f4b43e19cb5047268c8adad5c793"],["/research/index.html","acbbebc7a98e3399db8a07cdf4de25b1"],["/sw-register.js","4dff6031cc8893cc6d910915cc319c68"],["/tags/Butterfly主题/index.html","c5d1858a0ee6617dadd7910e9891c589"],["/tags/DIY/index.html","864dbb688932daa7585e349115b0a25c"],["/tags/ICT/index.html","8adadbfd76d81731c9af96c8168542f8"],["/tags/NHK听力练习/index.html","b1618c478f17d712b97639c42b7d3a5f"],["/tags/NHK听力练习/page/2/index.html","93c009b15035a4c949ccfd1e887775f7"],["/tags/NHK听力练习/page/3/index.html","b4a24dfd1dcd9a7dcbce8178239ddd91"],["/tags/metro-ui/index.html","daa64f6cda6e53e146cca9159ce37f59"],["/tags/vuejs/index.html","bdb4ba4daef27016b7a1c37e4aa86618"],["/tags/お盆/index.html","be65ee8c065394f513be4266d3f6fd92"],["/tags/世論調査/index.html","83e948ddbc3af09abb0b8f8af18b3b05"],["/tags/作品集/index.html","f2fec51bcf4371332480a9c83c28b0a1"],["/tags/农业/index.html","982037715e14e76b6cf0602662f572eb"],["/tags/历史/index.html","4b54cda5b902b523afa93dc5ec479f17"],["/tags/営業時間/index.html","1b52b3af0121e325c6ac6d82aed3a589"],["/tags/国外政事/index.html","6764f4060224713525dc82889ee8e418"],["/tags/地震/index.html","0393cf4eb81d186246b42c0e82a002da"],["/tags/外国政事/index.html","cafe0eb719805b11ec6d9a6e1432bf00"],["/tags/天气/index.html","b6c3288d7dbb249d6d201a4ba7b107fc"],["/tags/奥运会/index.html","0373ef78bc75e99c3af6bbbcb288e175"],["/tags/学习/index.html","2fedb067a15d206d7af858b0bfad10bd"],["/tags/学习/page/2/index.html","b602acfb243d3f65b3557ed4f63ea97a"],["/tags/就业/index.html","caccc3b59222325ed615d53c1c984af5"],["/tags/庐山/index.html","49da40f71047b37d4e955c9b61aa0417"],["/tags/座礁/index.html","7b0153652eb43a1d334ead4e6a85699b"],["/tags/政府/index.html","5899bca8de2b8c2e58d6596d260da144"],["/tags/政治/index.html","2bce04585377b0284d0649dc14fc672e"],["/tags/教程/index.html","91e7af23702f5613717798b64b3c6315"],["/tags/日本教育/index.html","9b4aafb5425668cfc4e076cd85fb69bd"],["/tags/民生/index.html","a68999acfecdd517b12c357470dbf9b8"],["/tags/游戏评测/index.html","3f70d3dcf8c31bf6c08d2c588ca51480"],["/tags/游记/index.html","3f997d98d8136e7313e05948bed65efd"],["/tags/生活趣闻/index.html","31833dfa830dd037bfad3b38df3be73a"],["/tags/科技/index.html","c93ff81c53ea271e0cf25d36df08e127"],["/tags/经济/index.html","53779375d805681c76416f233b951724"],["/tags/网络教学/index.html","7d0110f8f9db479b155ca6958d648a0e"],["/tags/舆论/index.html","58db88c21e0682fe4fa1bfad16f161e3"],["/tags/虚拟现实/index.html","488ac39ce6c1ebd5a41aef52e9fd4d0a"],["/tags/随想/index.html","d433109e89e28e7fcd93d98977afa45e"],["/tags/障害者/index.html","f7df20ab2d126c72e14916077aba6bbc"]];
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
