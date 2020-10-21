/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/05/20/2015-05-20/index.html","da3396c9a21703efa40f7081cae5df6a"],["/2015/06/16/2015-06-16/index.html","e9bb7c751364afcf86f5c0f77eea3626"],["/2015/12/12/2015-12-12/index.html","b4984298d2b807869a9676ddb98037b3"],["/2016/06/08/2016-06-08/index.html","ed905ed56ab5ba0b1ee0b0ae16ac7e7e"],["/2016/12/18/2016-12-18/index.html","5bf109a3a7ca2586930ff8a6251088ea"],["/2017/02/17/2017-02-17/index.html","54c23a560e2befbf799dc3be9172e51c"],["/2017/03/17/2017-03-17/index.html","2293afe339d819b463e7439d943b20a2"],["/2017/04/06/2017-04-06/index.html","c7ca1ae570afd9816d1361c3cf558e72"],["/2017/05/17/2017-05-17/index.html","8aaa435cad5ed9d43ad24a991cf2834c"],["/2017/08/15/2017-08-15/index.html","89b50bc0bb07b7549dbd6ca396fe6e2b"],["/2017/09/16/2017-09-16-1/index.html","027deb508caf69cd9ccd96bdbedac297"],["/2017/09/16/2017-09-16/index.html","64c32f8b3c8f8fc6f80945ddee4a13b1"],["/2017/09/21/2017-09-21/index.html","99d8aae689aea933cbbb527d4e040c70"],["/2017/09/23/2017-09-23/index.html","6435df716d642ac9d6714f50313a6cae"],["/2017/09/26/2017-09-26/index.html","9d924b8402f85d88150bcd21c497bbf4"],["/2017/09/27/2017-09-27/index.html","82c73ac6056e7b9071feb138231a3d26"],["/2017/10/04/2017-10-04/index.html","937a1dfb657eed1517a29df303e7c6bd"],["/2017/10/08/2017-10-08/index.html","40c5f4989437b7c161d23b567ef0aa6b"],["/2017/10/09/2017-10-09/index.html","96ae5126028e60cc8a1146ddb136ffed"],["/2017/10/15/2017-10-15/index.html","316fdff13076e0c38013f8cf926a9b80"],["/2017/10/19/2017-10-19/index.html","d78ed8a618eaf97811816b43b58de3b2"],["/2017/10/23/2017-10-23-2/index.html","dc4997050b6e2280ab504d7d89a3c8ea"],["/2017/10/23/2017-10-23/index.html","0c06809036f9c01abca4873879f20854"],["/2017/11/08/2017-11-08/index.html","7d9692574dd0715c60a81b62e96a852b"],["/2017/11/12/2017-11-12/index.html","48ff420bd248d77a1ab3a7a5b7d57d48"],["/2017/11/15/2017-11-15/index.html","580f755afad361f9b487a99ac10d473f"],["/2017/11/27/2017-11-27/index.html","2163bc0e9f8a152d1e1aee0b0a06a85a"],["/2017/12/06/2017-12-06/index.html","08d1629ab2b0e62b67da8776b6f15626"],["/2018/02/12/2018-02-12/index.html","d4e56bf427453841160d2efa968ba112"],["/2018/03/26/2018-03-26/index.html","fa79fc0f49f7e0cf7fb60f52cd645f0f"],["/2018/04/02/2018-04-02/index.html","74f6585644488303dc0747591f4afedb"],["/2018/04/24/2018-04-24/index.html","30d3bb31597ce630937753583e8e358e"],["/2018/05/18/2018-05-18/index.html","2132a8e956c161da1c7f9dbeee36617b"],["/2018/05/23/2018-05-23/index.html","abaed68cf54c2367060c97b859c3a012"],["/2018/06/08/2018-06-08/index.html","acb94c4e9bcc74c64a60a2fa2b0788da"],["/2018/07/01/2018-07-01/index.html","d25ca5929b10682a6602e7eab9c72ed8"],["/2018/08/30/2018-08-30/index.html","ba44a44b8735da55e3a109f8d5a87d58"],["/2020/07/20/2020-07-20/index.html","2035fef3e2fd4b8633b9d0035167c04e"],["/2020/08/01/2020-08-01/index.html","092f461d74e69c4923f99773fb3a4439"],["/2020/08/02/2020-08-02/index.html","cc614133c16300f97772a52d3a50a81b"],["/2020/08/03/2020-08-03/index.html","cfa5a36f9247e7899b9ad4e6cd13d1e9"],["/2020/08/04/2020-08-04-1/index.html","fce859d9fe5c4d57b06461b6cc4136ef"],["/2020/08/04/2020-08-04-2/index.html","9540920649f0ef0dea36c05d17ea82a8"],["/2020/08/05/2020-08-05/index.html","f06eb2a0d2b3e81b902d40291de96774"],["/2020/08/06/2020-08-06/index.html","f56c79943ee1db942f6c32efdae0c690"],["/2020/08/07/2020-08-07/index.html","c631c6d9a762562f3432b0de8e4f706f"],["/2020/08/08/2020-08-08/index.html","1f5250d108572fabbc5ff96224c7067b"],["/2020/08/09/2020-08-09/index.html","e0f1003281c0813dcc72cb70cd80e189"],["/2020/08/10/2020-08-10/index.html","109964b012c9293b6103ec878f12403b"],["/2020/08/11/2020-08-11/index.html","e2df428a6472681f1c52cf97b0688dc8"],["/2020/08/12/2020-08-12/index.html","26960ef6fe47173fd7079db83b21f87d"],["/2020/08/13/2020-08-13/index.html","4bfd19cd41b421bcf877d34895c2666f"],["/2020/08/14/2020-08-14-1/index.html","633baf0f3d816fb5be85d31024b9bad3"],["/2020/08/14/2020-08-14-2/index.html","daf3172b6e6f4d3993d6ad8f99cf0b71"],["/2020/08/15/2020-08-15/index.html","8f3a4ec9c7d0c222c21058d8ecdf2153"],["/2020/08/16/2020-08-16-1/index.html","75620ace7dcdde6a28f461ef342462b7"],["/2020/08/16/2020-08-16-2/index.html","d7ebcb5861343b4b3cde4af77245eda4"],["/2020/08/17/2020-08-17/index.html","3d8be313306fdac588ede27badd05e74"],["/2020/08/18/2020-08-18/index.html","c434b01ac867b04352b1b856337dbb1b"],["/2020/08/19/2020-08-19-1/index.html","dbf8737a754bd76b4156745a34513bfe"],["/2020/08/19/2020-08-19-2/index.html","f9224412d8db6663ca69d701544ee8e6"],["/2020/08/20/2020-08-20/index.html","8e9d6f76f4cb3557a233eac5020a6b84"],["/2020/08/21/2020-08-21/index.html","27aa8404b47633907114442ba35dd7b2"],["/2020/08/22/2020-08-22/index.html","b0e0f8f562403d193db89b369cb7bf24"],["/2020/08/23/2020-08-23-1/index.html","f65a1f936f26d44bb123710c03c0dd74"],["/2020/08/23/2020-08-23-2/index.html","b6b7f16216bb1c2378e28a70b4de7771"],["/2020/08/24/2020-08-24-1/index.html","7cbf740b91dd830034aad5ce917e09de"],["/2020/08/24/2020-08-24-2/index.html","96724d893a59d6d2dccf354f146d92f5"],["/2020/08/25/2020-08-25-1/index.html","7b80b4e7c69eeb0cef44a479ff531987"],["/2020/08/25/2020-08-25-2/index.html","5465c2d17bd7fd8f62a64e91f3e9b3f9"],["/2020/08/26/2020-08-26/index.html","897d9771a522eb63cf4b72bdcd35c958"],["/2020/08/27/2020-08-27/index.html","5f2428902bbc9820775e9fa32f6635e1"],["/2020/08/28/2020-08-28/index.html","bb21e0cc107da02623ef7ed66d2478c2"],["/2020/08/29/2020-08-29/index.html","1dc15bcc4bd26c1312e85e41894b85e8"],["/2020/08/30/2020-08-30/index.html","79dc53b72d55c9a9aa4a4dd15b67a7fc"],["/2020/08/31/2020-08-31-1/index.html","30c0d411d1d2a4fac3a4bbf9d3ace0dd"],["/2020/08/31/2020-08-31-2/index.html","dfee9f4c5cb19fd774edefdff5c50bb1"],["/2020/09/01/2020-09-01-1/index.html","7b324bc7d0de85016dd3cb2cf9da3de4"],["/2020/09/01/2020-09-01-2/index.html","a59f3117bf610fc47a05f2895f701a71"],["/2020/09/02/2020-09-02-1/index.html","bc6601b869b7d182764049da2d3ba99e"],["/2020/09/02/2020-09-02-2/index.html","14ca3655bfef2ca779aa565069fbb383"],["/2020/09/03/2020-09-03-1/index.html","23793594fc195890c46200b57163e2fd"],["/2020/09/03/2020-09-03-2/index.html","6097e8d2ccbb00093a3fec226402a70f"],["/2020/09/04/2020-09-04-1/index.html","c49e8dd93c81457dcf168eade69d4ab5"],["/2020/09/05/2020-09-05-1/index.html","b99f22d465b6c931e62da565b49195e3"],["/2020/09/06/2020-09-06-1/index.html","1821c1645bdba71f5d2b3d4a942c312c"],["/2020/09/07/2020-09-07/index.html","f4c9eefc4bde8c18b04a75ea26ae678c"],["/2020/09/08/2020-09-08-1/index.html","5ee8dc6624284faed77cba43577ccdb6"],["/2020/09/08/2020-09-08-2/index.html","d707bf951b48c69df3e14bfb4d3972fa"],["/2020/09/09/2020-09-09/index.html","43b60d47b96f0d6b66c4a8549622a4a8"],["/2020/09/10/2020-09-10/index.html","0492339e39e7f3e32425787f60669a5f"],["/2020/09/11/2020-09-11/index.html","38df5f16efc378be36b5bbb57a95c76b"],["/2020/09/12/2020-09-12/index.html","dec82dd32f39c8e9939603cbe472a3bf"],["/2020/09/13/2020-09-13/index.html","5ba3abfe2e785c1c54039c74491c19ec"],["/2020/09/14/2020-09-14/index.html","48eb8e6d72aa370f7216d3f7dfa54932"],["/2020/09/15/2020-09-15/index.html","0038efc3427a29970e14e1864adbd088"],["/2020/09/16/2020-09-16/index.html","74cdcb9c738e8feed410bf7c15c7a005"],["/2020/09/17/2020-09-17/index.html","efaa3e47db27f839c6e70eee2ecb88ce"],["/2020/09/19/2020-09-19/index.html","10b2965c36fa6a81bbcf40b9e8ee5f93"],["/2020/09/23/2020-09-23/index.html","af66a5fdaacc86894f2c3c6ebd77df65"],["/2020/09/24/2020-09-24/index.html","87d5d5798ceb249c76802a684632bfbe"],["/2020/09/26/2020-09-26/index.html","4694015eab330b07fe6bb6adfb6da20f"],["/2020/09/27/2020-09-27/index.html","5a4125e630511e18f7d4a0b1e6c9e6cf"],["/2020/09/28/2020-09-28-2/index.html","ce4eee23a13ca77430eba306f2087749"],["/2020/09/28/2020-09-28/index.html","8136b271b8c8abbeffe180d56700d204"],["/2020/09/29/2020-09-29/index.html","6ba4b295553c8c1a2bb1994616e87130"],["/2020/10/03/2020-10-03/index.html","39b1e89801016f5728a05b01531e0266"],["/2020/10/04/2020-10-04/index.html","20616e9c6c5ff00df7026919f00d4c25"],["/2020/10/09/2020-10-09/index.html","6853117711cf46d6ddd819ecff6e945f"],["/2020/10/10/2020-10-10/index.html","718f0e5ad63f75e20f28e558419ed5e1"],["/2020/10/11/2020-10-11/index.html","913f90c2772b5faf1be68cd2edc7cd6d"],["/2020/10/12/2020-10-12/index.html","fe001490ce823f033408d76501ef1358"],["/2020/10/13/2020-10-13/index.html","79a30869560c32ad4248700be536c523"],["/2020/10/14/2020-10-14/index.html","4744abe2598fd4510a2ddfb5f3ceb151"],["/2020/10/15/2020-10-16-2/index.html","b0dfbe7fb8d528847ceca21dd2f91a22"],["/2020/10/16/2020-10-16-1/index.html","a066e1def524b4aa6ff8fb4dfdb8b945"],["/2020/10/18/2020-10-18/index.html","5ba082db6c5798544a1c0413e0956665"],["/2020/10/20/2020-10-20/index.html","6a1afcf4595e18544fdcc53543ee9903"],["/airplayervisual/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/airplayervisual/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/airplayervisual/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/airplayervisual/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/airplayervisual/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/airplayervisual/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/airplayervisual/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/airplayervisual/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/airplayervisual/index.html","a2f5c00eb2a287c8de4d0dd81d457adb"],["/airplayervisual/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/airplayervisual/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/airplayervisual/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/airplayervisual/js/jamsetting.js","7927507e0080ddf55c6d8b5f526bd942"],["/airplayervisual/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/airplayervisual/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/airplayervisual/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/archives/2015/05/index.html","88072eab3be79c7fce19658e44c6b77f"],["/archives/2015/06/index.html","f606f8912cc194bd5c307af320b1a3c1"],["/archives/2015/12/index.html","70df93859ab8767418b3c452b3ba92f2"],["/archives/2015/index.html","41567fcfd441263877a389ef3734f09a"],["/archives/2016/06/index.html","1dfcd3ec7756cf1b40a843d2b42d7216"],["/archives/2016/12/index.html","2f2e7e769b993a5b4b76eb08ffaa6bdc"],["/archives/2016/index.html","b9c56c2499b1eb767a2d36cad0862d0b"],["/archives/2017/02/index.html","17f3745c8c4062eb7361fb48264321ae"],["/archives/2017/03/index.html","9d67c605d82d0ef7c5913298d743d88b"],["/archives/2017/04/index.html","ff40b10297848952905135eaab5505fd"],["/archives/2017/05/index.html","ab91423f5cbd4f80aa48d82eaf95ec01"],["/archives/2017/08/index.html","5cef098d80e138299c26066082769930"],["/archives/2017/09/index.html","1feb6fe7c2baa725a1484b54bb44a0b9"],["/archives/2017/10/index.html","6cf13ab844dd80b6e3c342148f8cdf0f"],["/archives/2017/11/index.html","671668f07f3ab9799e38a16dd4aa6611"],["/archives/2017/12/index.html","ce628e65e5f336cc04ea38cd005846f4"],["/archives/2017/index.html","0afe937390f4470f227c4142a863597c"],["/archives/2017/page/2/index.html","bd3b099ebbc768c2059772a5b87bea73"],["/archives/2018/02/index.html","e98dd6ef895f02c4a678433a25b2ba93"],["/archives/2018/03/index.html","e72241fa1f5ae949b689590e135f338f"],["/archives/2018/04/index.html","eadd93ea9759cf5f93ba28cfd704952c"],["/archives/2018/05/index.html","e17d6a1e1275f6f890f014777e4df320"],["/archives/2018/06/index.html","4cef33a4efdfe8147f91714b597e6429"],["/archives/2018/07/index.html","b8ff2c12a5d44599749181e3823483b0"],["/archives/2018/08/index.html","27c166d3edd7116fb518b5b5e31cbf93"],["/archives/2018/index.html","5200d6482e1b8eac17e28218a0092577"],["/archives/2020/07/index.html","9496adb64ae3c980272575f743a2bc7b"],["/archives/2020/08/index.html","667caa599696d5c7aa35f5f98984b94d"],["/archives/2020/08/page/2/index.html","65642e524f32eb77a48363ef00d55743"],["/archives/2020/09/index.html","fad945dfe1d392e17261a419fdc44eea"],["/archives/2020/09/page/2/index.html","bb9d3c724ccb616c97dc02e2377ca392"],["/archives/2020/10/index.html","9c6bd1ed17783547bec5d55378ef8b1f"],["/archives/2020/index.html","115ede9d804b4779c5b35861ef7e6e25"],["/archives/2020/page/2/index.html","7ad1498df42b01f217231c25b7d8393d"],["/archives/2020/page/3/index.html","a30a4505a28722a4a4d731a27fe2dfae"],["/archives/2020/page/4/index.html","f3f88861268791d3dca4c0fc7c5cfabe"],["/archives/2020/page/5/index.html","d2052481c626a9dd5ef18a99e3449a76"],["/archives/index.html","c6234511597b728779348ef3234c4bcf"],["/archives/page/2/index.html","7974062e547e3094f80e87a8198e983c"],["/archives/page/3/index.html","1548e60450f69ae85f190f0b04e622ab"],["/archives/page/4/index.html","4f935a54608a1fef9201a23171a6feed"],["/archives/page/5/index.html","72116d02b27bbf4fa7d9cb50ddea3fba"],["/archives/page/6/index.html","c8da43c9e93fd8a801de620650003b4d"],["/catalogtest/index.html","fd04c20e2add787cf0a819f727367ffc"],["/categories/NHK听力练习/index.html","7251e1722011c71ca2622857aeca8927"],["/categories/NHK听力练习/page/2/index.html","fbcdca13ac3c7d792937386ad7bc12fb"],["/categories/NHK听力练习/page/3/index.html","1678c7cd4eecd6950b951ba0c09cbc88"],["/categories/vue/index.html","aa03717f26ad1bbc8d619e1d5c789e83"],["/categories/作品集/index.html","175e75e2cd6cdf075bc5522de2a47cf8"],["/categories/学习/index.html","18662f080914cf133e51aefe758f7003"],["/categories/教程/index.html","be9db35dea5214d8ccb0899be4d3bbae"],["/categories/游戏评测/index.html","9124dfe0a7f8a3eea82f0d1e4192ad58"],["/categories/生活趣闻/index.html","3b41707d70fe3deb0a7b5cd523827973"],["/categories/随想/index.html","5ac9a6a0ec9bab94c0ffb7cae91084d4"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/addcss.css","d20fc732e0cc7996bd82c5170b7aaa86"],["/css/background.css","d013642f5988333ece3b04912f099111"],["/css/calendar.css","0090a32d2a61d42c5bfed254bfba078c"],["/css/clock - 副本.css","65602c2385c7eab42ee3804cd6ee0a5a"],["/css/clock.css","9db53e3bffb704c740aa83bddaf8b999"],["/css/cursor.css","f514da9c81fb3fcb4f7e9038dfa30874"],["/css/danmu.css","2a5b914a9592bcd353425c6d5fa7af8e"],["/css/index.css","a830cf7dafed0e1e03142b35ae00f2a6"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/loadingline.css","bc1ee020a6a11fea17b915b97e6978bf"],["/css/shuo.css","8db924024099e925c53d5b3dd22f83c6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/html/calendar.html","bddcec1edba7f4c49fe5cd75f8cdf5b2"],["/html/shiyan.html","2a031db599f5d8372ffb41850aeeb746"],["/html/shiyan2.html","e45a0701c5f7b2e0fd56351015f2fe2c"],["/icon.png","8ec68de45d18642ba9baf2447e62f476"],["/images/AMJ1.png","d27a6725d1aaaf5324248da4312ab6c2"],["/images/AMJ2.png","00e22eba5901e5bd674e42228cd5bd26"],["/images/AMJ3.png","c8c9ea6348dfcad3a641899d5b587431"],["/images/FOTO1.jpg","4b6f100861908e2c7044cffbdb4a0c1a"],["/images/MVVM.png","ea5a002ee2f85c71a0db51d5adb5de19"],["/images/UT.jpg","367f4e432f9db55a92b2a290c4b0a476"],["/images/UX.png","a183974e958d41d1b6acec70bb7ea00a"],["/images/WindowsTerminal.png","8ac29cb56b8a1768cf7de071e9f1ae6f"],["/images/air-w.png","c1cc32f9d3e17551ca11a7d18a0b533a"],["/images/anzhuang.jpg","912b2489957f8344406edc5e5cebe5fa"],["/images/api-setting.png","2c0bb074390779721cba009e96c5417c"],["/images/apikey.png","1f31121b190eb1f990bcc3e27524bc03"],["/images/b0_img.png","43fcaa3f8b394ca5be957f4b860800db"],["/images/backpic1.jpg","86a6fa88167feb338fbf1a4e9057114b"],["/images/c0_img.png","34397085b4d3349034f9b167469ac626"],["/images/c10_img.png","7938c5b0dd789db4f262e5a618943a9b"],["/images/c1_img.png","95211a0ebf07befde1b11477c3a8185b"],["/images/c2_img.png","456ba51725d669fc4d005787753a6b08"],["/images/c3_img.png","a0aa7dcdd2ed5bccec52c16942036a3f"],["/images/c4_img.png","0869cebb60d00a78936b7498823a39de"],["/images/c5_img.png","533774e840ccb3ef13b46201a54be05d"],["/images/c6_img.png","db9eb681dea0b7911f0b2ba918d86c26"],["/images/c7_img.png","5b9c9e0331aca2a9d47a2730512f34f5"],["/images/c8_img.png","be9107995f185e3bbf7186c4dff69f42"],["/images/c9_img.png","642a2e762b74a28d2426af14f2b864c1"],["/images/calendar.png","86319b08b93be7c8bc47cdba7a169563"],["/images/cataimage/b1.jpg","e4795ce34b4d070d251c37a2ae5e37eb"],["/images/cataimage/b2.jpg","e1a7402c7d111b33d22c187a794e693d"],["/images/cataimage/b3.jpg","c091fe2a8024b2f010911e9af8091147"],["/images/cataimage/b4.jpg","1a2190b3e7ecb404767f029642adb637"],["/images/cataimage/b5.jpg","2683b29be7ea536b2d2c0b428ab87a80"],["/images/cataimage/b6.jpg","8eba752c28594ff5a253a01c0904a4a4"],["/images/cataimage/b7.jpg","9259255b1e1ec36bf92b4f34ad68db7f"],["/images/cataimage/b8.jpg","beaae9e5c735657f2e5bba9eb3deb754"],["/images/cataimage/b9.jpg","7ea8994ee380e84190422ac1b1d93ed8"],["/images/clock2.0.png","0a0f122c7a25262fc02ee99df0ef21eb"],["/images/clock3.0.png","8e04375c183c637b65fb50ed40f46466"],["/images/example.png","aaac9983e5d59f919bf282dcff2edb3c"],["/images/foto17.png","28db4c6608ad1ee6b34238cafab25e5e"],["/images/foto2.jpg","be95b922512d004a61f83c97af3e2602"],["/images/foto2.png","0dc07d4e1b00526a273a89dc8b81548d"],["/images/foto3.jpg","551c0616c92c4ee7cc17dd458b3c46e9"],["/images/foto4.jpg","9d1d9fea759a41afc0061866e400339a"],["/images/foto5.jpg","984f618b15372f37d54f507e6f379f10"],["/images/foto9.jpg","b683fc0b998e80ff8f5a3e45e889807c"],["/images/girlpic.png","ff1e8427ed555af639e6d849f8f648f1"],["/images/girlpic1.png","698e5570e821c3cae643cc9777c2292e"],["/images/girlpic4.png","551882e4b9b6afb79000fd34c0dbf5e5"],["/images/headimage.png","332502f36a0297b30cb7969fe6de8451"],["/images/hexo.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/hexoWT.png","c027cc9f5665c7d7ba657e7a4bb40017"],["/images/his-json.png","7d8a71e38ab684107446e5c72c31854e"],["/images/history.gif","0459a3dcf2317253de0b34482880c63c"],["/images/homework1.png","e8d2f64d0785519ea7779016208a2900"],["/images/idea.jpg","5eb08bf6c965588f03c8860f201cac45"],["/images/key1.png","f2a370e02ad6c5a101db20b47a9a0008"],["/images/key2.png","21dc40bbe0377cd9fe85a9cb431c18f0"],["/images/life-cycle.png","02f39ea5c041d45938fda4b50f234cb7"],["/images/life.jpg","74d2d9c5f48ec59e3badeec690941812"],["/images/listen.jpg","9d4f73cd5634f43deaed4f9aca03f9a3"],["/images/loading.gif","ffa0804a5d99e2d5b39e05cda6d6b28b"],["/images/magnet.png","4899a924f3de0d19dbe0415128c07d65"],["/images/magnet1.png","8d010eb86ca943e036adaa7de57aee7d"],["/images/magnet2.0.png","54fe576f174d2b6917fef89f40ac5975"],["/images/magnet2.png","293cb414a8ab93b43bde3bebf9cf0cfc"],["/images/magnet3.png","1923148630e2e094ff80bf35aa604c10"],["/images/magnet4.png","9bb4f963ac1c09f02d62525f513f492c"],["/images/meilu/1.jpg","cd67abcc3f543b5c66adc4f9d9c5c628"],["/images/meilu/10.jpg","ac9fb2711e477b5db1c3acb57e899045"],["/images/meilu/11.jpg","364caad6dfc356a3dc630fa067e48e88"],["/images/meilu/12.jpg","274767e5708f79934e5bdbf73eda8f0d"],["/images/meilu/13.jpg","dcab12b84454770b208913db63e825ac"],["/images/meilu/14.jpg","037cdd048284e621f27e17a2c59e8ea7"],["/images/meilu/2.jpg","f6cdb65ae3fad4523b32f5ee38696b60"],["/images/meilu/3.jpg","9e5df3612c2d93bf57313186c954aea5"],["/images/meilu/4.jpg","69ef2d6f4bcd79cf4b4e672b60c6751e"],["/images/meilu/5.jpg","ce81ca16def7613b7ebb368fb554f14f"],["/images/meilu/6.jpg","cafd5b62305f806754a75cc3af8c3b77"],["/images/meilu/7.jpg","b8ae865d386e1e713a6034da6b090c10"],["/images/meilu/8.jpg","afad7a7bf1066c817a8d2e7566bc780d"],["/images/meilu/9.jpg","72f9649f56b564eacf23ce3dacb88029"],["/images/metroui.jpg","5503bfffd450d9ab572b67ea00941571"],["/images/metroui/1.png","79a03b408c19c74eeaa8ff6e17a03f9d"],["/images/metroui/10.png","8309fed71a15c78f2dfa3af1ff75a5f3"],["/images/metroui/11.png","aaf1a007cbae12f93cc2688bace18d28"],["/images/metroui/12.png","0758ea282c3828c47e5c64520ff85783"],["/images/metroui/13.png","12ca7b511927cd4b26e97f3b20908a32"],["/images/metroui/14.png","f44ba7680f7b36df437e2ae2588d0565"],["/images/metroui/15.png","e8927c78b125b805af7aa86fee815ab6"],["/images/metroui/2.png","e604d3c662b996f06f22753ba9ab379f"],["/images/metroui/3.png","664e3b7490f2f95d5547b8ba79a65456"],["/images/metroui/4.png","c0f255344cafc303a1d9c7404da37149"],["/images/metroui/5.png","da2074cdb1298aca826abc1a5c441300"],["/images/metroui/6.png","efef2f087127614b4e03bcbe9a347018"],["/images/metroui/7.png","a4d34b1a2dbe3a58d3a92276880be039"],["/images/metroui/8.png","1d34a626bbaa898a60d4501936bcf962"],["/images/metroui/9.png","0663697c1667b377fe2623bd65e00b31"],["/images/metrouilogo.png","aea81b42d1c2c96440f74cf56ad82e2f"],["/images/nhkimage/2020.08.01.png","af4c55b2ae1d5ab2f56c75a87fcdfdb3"],["/images/nhkimage/2020.08.02.png","c355d41b90f5c65823f96c5f6868ce53"],["/images/nhkimage/2020.08.03.png","fddcedb40d7f28b2ccb90814351ad5c8"],["/images/nhkimage/2020.08.04.png","8b4518ec5a8513f442980ed7167136b1"],["/images/nhkimage/2020.08.05.png","590abfb19334b0c3cee5a005674f2253"],["/images/nhkimage/2020.08.06.png","d469e21100c42435e88f2bdf07f93da1"],["/images/nhkimage/2020.08.07.png","3ca9e2c8b8a09a38423d73cd36e8de9d"],["/images/nhkimage/2020.08.08.png","4420c2d899fe4eb90c48bae0da8418a2"],["/images/nhkimage/2020.08.09.png","df14be338f9c920818dd1daa6aa955ee"],["/images/nhkimage/2020.08.10.png","c4e2ed023cd3dbfd4986add35ca9357c"],["/images/nhkimage/2020.08.11.png","cf562339e57f673d394f3e6cdd1f60cb"],["/images/nhkimage/2020.08.12.png","81dfa179fea3052ddcf73912ea368f67"],["/images/nhkimage/2020.08.13.png","8cf26c2642e7a27cbd86fcbda8bae8d9"],["/images/nhkimage/2020.08.14.png","d88eeb678b3ed3651d597e61957e264a"],["/images/nhkimage/2020.08.15.png","b9879f193867edcffeefce62c9dc7153"],["/images/nhkimage/2020.08.16.png","46cb914aa1d556561897767ec9ff66a0"],["/images/nhkimage/2020.08.17.png","ea1af9645b5cc9cbaafe70a91dd15cca"],["/images/nhkimage/2020.08.18.png","e87e4de39a6f06cf4283a63af92dd8de"],["/images/nhkimage/2020.08.19.png","8001a951513b542a98ce1151be5bd87b"],["/images/nhkimage/2020.08.20.png","4bc8fafa3ecce30d340b1350715d78e3"],["/images/nhkimage/2020.08.21.png","07ad1337e127922abff27da6c672549b"],["/images/nhkimage/2020.08.22.png","b2b5d53ba46015f64048f9d803b12179"],["/images/nhkimage/2020.08.23.png","225af8c0cabe5218ec634d1b8815fd95"],["/images/nhkimage/2020.08.24.png","1d54a484a6e2395aabe9be005cd90361"],["/images/nhkimage/2020.08.25.png","8008ba169cfce0ef2041329cd29b6b77"],["/images/nhkimage/2020.08.26.png","72a2b8094003a54c97a34ea97cf21bc3"],["/images/nhkimage/2020.08.27.png","893407e604804d215c8fef8bcd5f2684"],["/images/nhkimage/2020.08.28.png","b542280b7341759890a99cbd44d822c5"],["/images/nhkimage/2020.08.29.png","620e2e7d4772e39615fd1a88cdf49717"],["/images/nhkimage/2020.08.30.png","f645d7ba2dcb506f9ec6fb9244425ad7"],["/images/nhkimage/2020.09.03.png","c5262f3aa87190e0273383ea1e445681"],["/images/nhkimage/2020.09.04.png","c07149c32aa41c03bc7dac82a713f6b2"],["/images/nhkimage/2020.09.05.png","4e43556e1cb3b7f4d75f0f6127616a54"],["/images/nhkimage/2020.09.06.png","1021d2ae04a7f109404f857a2a7629cf"],["/images/nhkimage/2020.09.07.png","db9827e9f0a4cf1401b559b4644a0204"],["/images/nhkimage/2020.09.08.png","efe1030b73dc1c01f169c3122a194426"],["/images/nhkimage/2020.09.09.png","f6ba3a1c6cdeff88404ebe2a646f2eb5"],["/images/nhkimage/2020.09.10.png","3471b05d02113517359a9e2167befcfa"],["/images/nhkimage/2020.09.11.png","921a541a8bffb1aa436df2eb6db7c99f"],["/images/nhkimage/2020.09.12.png","a51f8ebaddba69bb80f9259a30f17e65"],["/images/nhkimage/2020.09.13.png","0399889200493cd2154ffc407e2bc400"],["/images/nhkimage/2020.09.14.png","eaaf3da69a39ed316b7fc8c4d409bb0f"],["/images/nhkimage/2020.09.15.png","5774959ea4061c9298ea174f0862cc3a"],["/images/nhkimage/2020.09.16.png","0c5a00f74020740fda589c02e4b3f917"],["/images/nhkimage/2020.09.17.png","b5aef734e3a7db4862ca3fe4e6769dc2"],["/images/nhkimage/2020.09.24.png","5982a7b3843f4ae43b2b4bc4b0c577d6"],["/images/nhkimage/2020.09.26.jpg","c6415af781fbdd36fdb034f74646129b"],["/images/nhkimage/2020.09.27.png","27aa6f6a8d5534ccd99cff261dcd9eb6"],["/images/nhkimage/2020.09.28.png","0f4318d1ff17a33de364432a1c44b5ad"],["/images/nhkimage/2020.10.09.png","6408d9f7e66fdeba8b9207939a08cf8d"],["/images/notop.png","d25c272e5ce312a880e04ce8a0b27683"],["/images/pasted-0.png","552608d8f6e39369aa30c6e332a32826"],["/images/pasted-1.png","baafdacee93c99e99418aaedbf524fda"],["/images/pasted-10.jpg","395cff6f64ab5df19baa3572ac98e541"],["/images/pasted-11.jpg","56e5df07c96634638abf7995b25c81ab"],["/images/pasted-12.jpg","61b3f803b85ce3640d7a9ba7efb9da6b"],["/images/pasted-2.png","2f410e53c811f92a6135f48857776f5e"],["/images/pasted-3.jpg","bb5717e691e87355e7d63a5f3a87ae62"],["/images/pasted-4.jpg","10041d0e3567b24b81222ec5075d6492"],["/images/pasted-5.jpg","ac5047a4b48c6cdaee86fa1863e33904"],["/images/pasted-6.jpg","1556ae8d3ad5713d60237ee4d10e81f0"],["/images/pasted-7.jpg","913fde1686587646ddc663bd810cc81d"],["/images/pasted-8.jpg","fc83268081fb4b6b6ecb1ffa1ec5af7f"],["/images/pasted-9.jpg","25e0fa3496591501f5c29d0b802b77d2"],["/images/pet.png","2b8c121909497e57057478856fe48a94"],["/images/pet2.png","dfb1d6a17b527ccc0c600e6ad31f55e5"],["/images/ps1.png","0917ba91f21b6944dc08d35c41a326d2"],["/images/psb.jpg","6a27c58337875c776af0a7667598b401"],["/images/quse.png","7cd1ec12b804305430cb4cdc09c7a893"],["/images/rain.jpg","9c26acc44c692b6a63e134be07b07c18"],["/images/rainsmall.jpg","e8c91c40bef224fc5a3942bd0d007b84"],["/images/shezhi.png","281bf545f6a4024e2d0b7120bc398a21"],["/images/shuo.png","9cce9df6e32e00e49471b9a9f089f6aa"],["/images/soul.jpg","d97b4099c0728ff6123d006fa62db86e"],["/images/study.jpg","a9b1cf95ee6bd9f3913e8ec6a6a6f44f"],["/images/tianqizhizi.jpg","dd48d78b4eeaaa52578352f9ef570b14"],["/images/vue.png","cf23526f451784ff137f161b8fe18d5a"],["/images/vue1.jpg","8cbf18302c6fa72e2a40d0cca0832213"],["/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/images/work.png","e521cf5b834292fde1c50e0a0f5802f9"],["/images/xiaoguoyanshi.png","994a3b710d36df0a4630cd9a768c7f7b"],["/images/xiaoguozhanshi-m.png","1fefca18214fc4889d1bb76b81887c9d"],["/images/yao1.jpg","9dfddaf8c121fc8db788a87d133d6376"],["/images/zfe.one.png","b41f689341882058ffb28c4cee499bde"],["/images/幻想终结之日.png","0025c4d3973bdfedb80db3f78c59fa47"],["/images/时空战纪——游戏建议及意见①.jpg","1337457f14a8dffee66d94f8915b54ff"],["/images/简历.png","d70507ee4615c9e324578c0d777e6855"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favicon2.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","334af9657c42487965edc5f3679c09b5"],["/js/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/APlayer.min.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/airvisual.js","71cf86bfd452ca01d92438d8266416ee"],["/js/airvisualapi.js","6931bebe1696688d109963187fc2eace"],["/js/artitalkkey.js","ad2c74320c63125a36319659657d2886"],["/js/background.js","94c8410b174f58594cf81ec99054968b"],["/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/js/calendar.js","a58e02711cc6dec4dc04257e555b8923"],["/js/catalogMagnet.js","0387c6ad152e7a6076cceffc7420be77"],["/js/clock - 副本.js","405186e7a9d73221d2d50c0dea2852d0"],["/js/clock.js","2fdceb94cc57b551cd245b0001927b66"],["/js/color.js","3730bb4f7b185e6f5130ac28bace968b"],["/js/dan.js","6b6ae6b7f1b42dd4857541f43b2bb733"],["/js/echarts.js","dc1227b1eba1ba47fd185a387d0a7d37"],["/js/gitcalendar.js","fadfa8a42272cd322118653dca512a7a"],["/js/history.js","20459f7db325e597e64903f4c0d19306"],["/js/historyroll.js","a3e9ac376106816c50a61f9f4306d671"],["/js/jam.js","462c07d3b2e0f20394d994bbcfae37cb"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","455fface5a0a3ff90766ca254affe502"],["/js/rain.js","f656dc28e4ab5c3f8414d35f683278c1"],["/js/rainremove.js","ceacf82842b101f7e54a2aaf5f4bb9cb"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["/js/shuo.js","1076b1ef51358cc11b6ff3bab25e15d8"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/link/index.html","9953d5baf71f83cb4ed0d5dbfa6e6955"],["/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","b7d07a6e9431050dc91950e39bb39544"],["/page/10/index.html","b4a02a4ed7f21766bd2d529d1432560a"],["/page/11/index.html","5e2660a9ef0abfc88922e2708dfc160c"],["/page/12/index.html","5bb2e2a30d5a23e78025b0563e583319"],["/page/2/index.html","3b83962ad8d628598a5e309ca02337cd"],["/page/3/index.html","260f423bff7194bd3b6e6ce3172066e2"],["/page/4/index.html","934e402948986c76b0493755036cc9e6"],["/page/5/index.html","f421544cf20e2b279d448e66c066ac37"],["/page/6/index.html","c1603646a883c31ad37aa5ee97a2e52d"],["/page/7/index.html","a33dc551f995e372087452bd75b5d7b7"],["/page/8/index.html","87dad54d139a64500878ff0c81245b7c"],["/page/9/index.html","3f8ad5bdbe56ef4199f274fae1824b91"],["/research/index.html","8a35cb2e1388806661b06bcca4a85369"],["/sw-register.js","93d926c0ad7ee127db5ad54a3807fc93"],["/tags/Butterfly主题/index.html","96fcc9dfc8ac7ec4c55d36aaf020cdb0"],["/tags/DIY/index.html","ad7bc6b9b1cbe1c7f3bd255d5f9e7cd1"],["/tags/ICT/index.html","742ed7c1110fbe18fabb1678c9778f7d"],["/tags/NHK听力练习/index.html","c0e1907529f57ae206ff7ec0c2a39d5f"],["/tags/NHK听力练习/page/2/index.html","52f9657c76a93255f6ac9e6da66f108f"],["/tags/NHK听力练习/page/3/index.html","e5450fc6fb6fbfdfa4d1058b994866cc"],["/tags/metro-ui/index.html","e951124caea8d1c94c2ed37ec82813e1"],["/tags/vuejs/index.html","84f0115aaeb68193569e8dbc99b12645"],["/tags/お盆/index.html","2faa3848c1af9e4a12ffb11af33556a2"],["/tags/世論調査/index.html","4a1e30d0c90153c746f4d65a5c059c94"],["/tags/作品集/index.html","40389fbb813e706143890d883038986c"],["/tags/农业/index.html","6d175623a2210d8eee675d457ebcbf77"],["/tags/历史/index.html","90e0a66c5bdda50c6f349b8440fd0a5d"],["/tags/営業時間/index.html","d918c9c59a3fd67f1a9099059298861d"],["/tags/国外政事/index.html","ae9af228560b46e07862ca0efc091de4"],["/tags/地震/index.html","2e79585c0e37ff93dd3a64f550a3af87"],["/tags/外国政事/index.html","4bc719e6baff60c7ec984e6a13c52ef2"],["/tags/天气/index.html","4a7eec33a9671815555f6ab0ea0c9762"],["/tags/奥运会/index.html","d749d93bb1b23b40bdb68c2296ccf5b3"],["/tags/学习/index.html","786644d72e448e451c4700ba55d6e184"],["/tags/学习/page/2/index.html","ac5866b82ee316110ee09f1ac9b0dcb0"],["/tags/就业/index.html","3f89ff8e0207d830e4c2a3e97d00e78f"],["/tags/庐山/index.html","da9ec636e5edcd3cda0177356de61621"],["/tags/座礁/index.html","413e857b1e7054325b34c42a976d6d62"],["/tags/政府/index.html","22256b4c21cba128de066b9778c7af17"],["/tags/政治/index.html","5ef5573d5fae45d1295b350d684bd505"],["/tags/教程/index.html","0221249fa715801d3943cb5c6b126700"],["/tags/日本教育/index.html","fa29329e7d26beecb90f04fa81dee06b"],["/tags/民生/index.html","1357ddf23451505b7ff6af5d135304d9"],["/tags/游戏评测/index.html","d9e34e815377f5927d5f2a8b9d01b39a"],["/tags/游记/index.html","5c2b2c61e8d56b00d59ec9e8a31c14ea"],["/tags/生活趣闻/index.html","7c36f96d86ba4cdfbf15d93950c6f584"],["/tags/科技/index.html","7cc749d88974d91af64ccba108dcb7c7"],["/tags/经济/index.html","863b66cd2ae98c4be2a4151f7ef1f473"],["/tags/网络教学/index.html","be0892cda4589280affcf25882d452b1"],["/tags/舆论/index.html","7f52a002ca61648310120fecd7a6a339"],["/tags/虚拟现实/index.html","97fa9463181fb810874c5204c0afd063"],["/tags/随想/index.html","c03dc1839f1ce4db525d1c5d200226a2"],["/tags/障害者/index.html","997265fbd721e083a86fa86e3b745acb"]];
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
