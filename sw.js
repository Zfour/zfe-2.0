/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/05/20/2015-05-20/index.html","6b99d712ac4eddaeaa986c058d455489"],["/2015/06/16/2015-06-16/index.html","beaec73459f183267a424b228750adff"],["/2015/12/12/2015-12-12/index.html","6568985a2f08f247b91bee3d2e367d58"],["/2016/06/08/2016-06-08/index.html","9a363bd0a114a0722cf1bbb8588acf71"],["/2016/12/18/2016-12-18/index.html","c79377ebdc71c8e98af8462324324b68"],["/2017/02/17/2017-02-17/index.html","8d654838c5d7309179bb34657a08aaf2"],["/2017/03/17/2017-03-17/index.html","59af54bdb00c152d97613332b27ac278"],["/2017/04/06/2017-04-06/index.html","48c72316706aa4e5a4f4252e8f1bfef6"],["/2017/05/17/2017-05-17/index.html","e20d14ad8a439a9ae5f54c90fda2675c"],["/2017/08/15/2017-08-15/index.html","4671f34e4dad1e2eb86881f4f422d8d0"],["/2017/09/16/2017-09-16-1/index.html","f42abe05dc39d2dcd9b5c4f7310b22db"],["/2017/09/16/2017-09-16/index.html","e0d07e86e9d5a45faa4f7baad33d7c4b"],["/2017/09/21/2017-09-21/index.html","d9c08a2ea14985bc926a1cc4d1230b0a"],["/2017/09/23/2017-09-23/index.html","aeee099f4077ccf4c64eb58a9af9ad80"],["/2017/09/26/2017-09-26/index.html","1f405efb6f5c05c27634890327b542cb"],["/2017/09/27/2017-09-27/index.html","bd1acecfa87d4a9d07f730eb0b4162c5"],["/2017/10/04/2017-10-04/index.html","aae793df8de93f4add1dad83d42c5b4d"],["/2017/10/08/2017-10-08/index.html","7315db5897bedecb87b35b7dd6ab5d34"],["/2017/10/09/2017-10-09/index.html","bc2ab228ae895314fec94cb42042e66b"],["/2017/10/15/2017-10-15/index.html","1006fa57c8ed6bd5acc05fa9c2970bd7"],["/2017/10/19/2017-10-19/index.html","00fae85d69d9590ce60131988ebe5d21"],["/2017/10/23/2017-10-23-2/index.html","5e51f41f356e431188b77790e9f6729f"],["/2017/10/23/2017-10-23/index.html","7012c8f37f8ab2ed0957b10957558ff6"],["/2017/11/08/2017-11-08/index.html","994587eb8b99055160700102b9777ad5"],["/2017/11/12/2017-11-12/index.html","bfb7c4785fd7c170519b91306ec4b6fa"],["/2017/11/15/2017-11-15/index.html","de174eb2d6161feb0a2829747468035d"],["/2017/11/27/2017-11-27/index.html","1d4c9b8122fab8c103b40f25086fc0f5"],["/2017/12/06/2017-12-06/index.html","ba61f7eeca26adca204a51f25c777362"],["/2018/02/12/2018-02-12/index.html","fa61df8691017a60713b5a2d361f2040"],["/2018/03/26/2018-03-26/index.html","cb8144406939173313746c8fcb3259c9"],["/2018/04/02/2018-04-02/index.html","7a05097ae3546eadf91ffab1383f002a"],["/2018/04/24/2018-04-24/index.html","feb33a1e65a93c2b6b9cc7b05aefc65a"],["/2018/05/18/2018-05-18/index.html","32c3293c15a5693a4e357d7746f73d61"],["/2018/05/23/2018-05-23/index.html","9179004b6d43396bacb1e4abbe9f4173"],["/2018/06/08/2018-06-08/index.html","b57f19781500644a3d79bfdab8258005"],["/2018/07/01/2018-07-01/index.html","54e5377540bbd6ecef55f54693b62aff"],["/2018/08/30/2018-08-30/index.html","e21196dcd80fa5af9275e17b93fd7da5"],["/2020/07/20/2020-07-20/index.html","b85ecf6fc623b7eff2810174d85ffc35"],["/2020/08/01/2020-08-01/index.html","67d30ae03e8442f75ea1131f920cbe99"],["/2020/08/02/2020-08-02/index.html","68f868b58ff7d87c2921e0fa01f856ba"],["/2020/08/03/2020-08-03/index.html","c9bd07b8b37dc5a2b77fdbc53a883d4b"],["/2020/08/04/2020-08-04-1/index.html","cdd0e3aa0dfb9c43353ed2d16af551a1"],["/2020/08/04/2020-08-04-2/index.html","7bcaf0bfbaa2e05ff6744772eb931b2f"],["/2020/08/05/2020-08-05/index.html","834be820e5d5ef21af7763f8356da529"],["/2020/08/06/2020-08-06/index.html","4729ba832cd8f2e9d7bac59130eeb0de"],["/2020/08/07/2020-08-07/index.html","8d716be50f5258be71418b488c20a75c"],["/2020/08/08/2020-08-08/index.html","29f5bf9d3b94fa7be68246ac4ad8bd03"],["/2020/08/09/2020-08-09/index.html","b8c42ffbfcafab547139ec3709bcdf86"],["/2020/08/10/2020-08-10/index.html","ecbe217b2491a73824ebd369d815719a"],["/2020/08/11/2020-08-11/index.html","b1382966f577a9b4450c4762e87e75eb"],["/2020/08/12/2020-08-12/index.html","ca14ad0ee87a143399fd0ddff0294243"],["/2020/08/13/2020-08-13/index.html","38f61c3e58d3ea65906477be3be454cf"],["/2020/08/14/2020-08-14-1/index.html","bb5a660ef3810af18a2017f2ce6eb349"],["/2020/08/14/2020-08-14-2/index.html","68621d2266ccc3708e9d9dbd436752d8"],["/2020/08/15/2020-08-15/index.html","7d9ac447def0f2c0ab763ffbecfc5682"],["/2020/08/16/2020-08-16-1/index.html","9b5e811322595601e646fc54c0c74297"],["/2020/08/16/2020-08-16-2/index.html","333b670de524db0b98ec160e2cf72981"],["/2020/08/17/2020-08-17/index.html","61584eaaad48b6441222704d11780273"],["/2020/08/18/2020-08-18/index.html","82971ff46c7435aff09777a37e6ad0c0"],["/2020/08/19/2020-08-19-1/index.html","f2eb1f56bcacf72738d83c4c0f2616ff"],["/2020/08/19/2020-08-19-2/index.html","6688d2aebb00ca4a6bbd46e89489bec2"],["/2020/08/20/2020-08-20/index.html","d74696c5a97944356f93a68173663a7d"],["/2020/08/21/2020-08-21/index.html","3a4874b1aec78903bb6d2cd04c72d917"],["/2020/08/22/2020-08-22/index.html","151b41337ba2890e581c6b3cfe598f1b"],["/2020/08/23/2020-08-23-1/index.html","089e488152c536f3764355d1072ea07d"],["/2020/08/23/2020-08-23-2/index.html","c3311761cc731c1019d09190e27a0aaf"],["/2020/08/24/2020-08-24-1/index.html","7e73f8d1c906edb74087129e38a79d06"],["/2020/08/24/2020-08-24-2/index.html","6c0d90cef09ddcc4afffb3e6d54765d4"],["/2020/08/25/2020-08-25-1/index.html","eaf7aa113129da1fa00ac16dafc7b85c"],["/2020/08/25/2020-08-25-2/index.html","72d343da8f71bdce62330d4ef151546b"],["/2020/08/26/2020-08-26/index.html","8a1adbefe3a5c657f1b3fa1e513590af"],["/2020/08/27/2020-08-27/index.html","c7801607bc37095b2e688deff71fa65b"],["/2020/08/28/2020-08-28/index.html","d5e7fe69b023e87a0382ee2c4449fdda"],["/2020/08/29/2020-08-29/index.html","4a7f80aa3d4f0604bb15bc7e1c52c922"],["/2020/08/30/2020-08-30/index.html","5a8c8af6a64901067c2da1c145e1169f"],["/2020/08/31/2020-08-31-1/index.html","7def995aae84c9a42c67bcb9dcfa523b"],["/2020/08/31/2020-08-31-2/index.html","b393045f5f8a61a8cb6d3f3d7cc676e8"],["/2020/09/01/2020-09-01-1/index.html","765b024747572b37fe9dcbe1f48fafaa"],["/2020/09/01/2020-09-01-2/index.html","67c250d81d99c97ebe9e2d9233220343"],["/2020/09/02/2020-09-02-1/index.html","28c4e9b489179311077513e6617d51e3"],["/2020/09/02/2020-09-02-2/index.html","bc3cd5d4033a0d8c76b6b9ca9cdb637e"],["/2020/09/03/2020-09-03-1/index.html","23f40d0025ca4c540b727e41cc71e13e"],["/2020/09/03/2020-09-03-2/index.html","133dd3cbf90804b28cacd973abb8ea50"],["/2020/09/04/2020-09-04-1/index.html","ab9a49ac0328381f4470ec1efe80193c"],["/2020/09/05/2020-09-05-1/index.html","6e53900f52d2a70a0a5aff75df4fa5d0"],["/2020/09/06/2020-09-06-1/index.html","4ef691fa841ed72ecb8e0424c222ab07"],["/2020/09/07/2020-09-07/index.html","d633b4f466d80299cf47f8396ef5abca"],["/2020/09/08/2020-09-08-1/index.html","c9df282d9a2cd95a02e2e03539bf832f"],["/2020/09/08/2020-09-08-2/index.html","2fbe67425f93a16dfdbbef86edefd2ca"],["/2020/09/09/2020-09-09/index.html","40c10985cb728bd521add469ab2adf68"],["/2020/09/10/2020-09-10/index.html","7e3c89a0c5e1e53563d7612dfa991e31"],["/2020/09/11/2020-09-11/index.html","e9249a8269ef9a6d42dfc60ae6af9799"],["/2020/09/12/2020-09-12/index.html","3001aa0e57cf106135d387e5b4aa92b3"],["/2020/09/13/2020-09-13/index.html","3e20a0b139530fe230bbc941c41571c3"],["/2020/09/14/2020-09-14/index.html","f3763818e0345b232c33239056c052b0"],["/2020/09/15/2020-09-15/index.html","3987a3fa481ce416d13c0dbaae3ed23c"],["/2020/09/16/2020-09-16/index.html","8d6bb94756be02d6030cd1cd7d79c22c"],["/2020/09/17/2020-09-17/index.html","773216a9976c48e4d942147020ab6f88"],["/2020/09/19/2020-09-19/index.html","5e1cc9a6cd846c1e72edbbf65bcb8661"],["/2020/09/23/2020-09-23/index.html","cf6235686a60d8613a13dabfe00433b5"],["/2020/09/24/2020-09-24/index.html","fd99d722ad133cb111f091b6be9db80d"],["/2020/09/26/2020-09-26/index.html","0249c1de3cba72cb5e6dfb1222aa0619"],["/2020/09/27/2020-09-27/index.html","604a755a740bb0cfedd194fb77782b1d"],["/2020/09/28/2020-09-28-2/index.html","95337d49aa2fc5d5dbe8e441533df930"],["/2020/09/28/2020-09-28/index.html","a987c2dca4f9ee2d0e28e9fd5d032c18"],["/2020/09/29/2020-09-29/index.html","40ef567280bead5b27583079f9aa6c56"],["/2020/10/03/2020-10-03/index.html","2d52e5c8098d72dfcddedaf0eed96329"],["/2020/10/04/2020-10-04/index.html","f6921799e9b47533e2762058d26bc12f"],["/2020/10/09/2020-10-09/index.html","50a0c05cc1f5f0afd5e55ca913bcd7e7"],["/2020/10/10/2020-10-10/index.html","46998735db3fd8860052308e14b6b476"],["/2020/10/11/2020-10-11/index.html","9dc37eafb232af06057fe2ba7610f8f3"],["/2020/10/12/2020-10-12/index.html","f61aeae84a272c33b53e3378636af5f8"],["/2020/10/13/2020-10-13/index.html","71863fe1f29d8f721288868bb0bbeb44"],["/2020/10/14/2020-10-14/index.html","e73505e1a8ea735685e8a35e1fdf95ba"],["/2020/10/15/2020-10-16-2/index.html","8ccfc95172d7ccb05a49e2382426dcc8"],["/2020/10/16/2020-10-16-1/index.html","c6f9d21437e7f6118b6862bb952afef2"],["/2020/10/18/2020-10-18/index.html","fc2c14b53a74cdc4c6ab97fef6a3e055"],["/2020/10/20/2020-10-20/index.html","269c40d3c4ae363995f2a1c73eb09c5e"],["/2020/10/20/2020-10-21/index.html","0ffaed1d4ac64355b0e772503a652715"],["/2020/10/28/2020-10-31/index.html","37a7ba8ba8fc1f36ededa83afe9b3675"],["/2020/10/30/2020-10-26/index.html","333b56ae82341324171d09997d4bb6aa"],["/airplayervisual/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/airplayervisual/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/airplayervisual/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/airplayervisual/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/airplayervisual/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/airplayervisual/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/airplayervisual/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/airplayervisual/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/airplayervisual/index.html","39a4644e9965a72570474c48ac1569d2"],["/airplayervisual/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/airplayervisual/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/airplayervisual/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/airplayervisual/js/jamsetting.js","7927507e0080ddf55c6d8b5f526bd942"],["/airplayervisual/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/airplayervisual/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/airplayervisual/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/archives/2015/05/index.html","94fd4609a95cb1663f3a0cd19dc2d48e"],["/archives/2015/06/index.html","537ecb35125ba6e19e8044f786c89b6e"],["/archives/2015/12/index.html","58b90f827a4af0a92c1a392754122112"],["/archives/2015/index.html","860048f0b7668b7647e3623ebcbc470b"],["/archives/2016/06/index.html","419e7996d8def9f94e4cd0175289c1d6"],["/archives/2016/12/index.html","1f6c9f6df9d55f0c626133c7a6575720"],["/archives/2016/index.html","97725439cbccb1975fdc0bc581db9793"],["/archives/2017/02/index.html","b8c8d383074ede787069e2036b64081a"],["/archives/2017/03/index.html","e0347ebb68b0daa74d85a45b38fdac72"],["/archives/2017/04/index.html","849930fe7a5a8bd7fbc551133173b60a"],["/archives/2017/05/index.html","29243fb5e089c4c57bf0bc255c86bd32"],["/archives/2017/08/index.html","4f6800b392748fe3f0334644d8ab5078"],["/archives/2017/09/index.html","fd66c2b0b163432a6c7c4b89ba4ff93b"],["/archives/2017/10/index.html","bf649d3660bbe9f1bf76213650d08c2f"],["/archives/2017/11/index.html","5e6bcd06868609e3bae2a34a21dca7ca"],["/archives/2017/12/index.html","53fec1570871f99f3f644b9c1e1c4903"],["/archives/2017/index.html","143da4f96e446b49af5939ba9bdb6a7d"],["/archives/2017/page/2/index.html","f262a2c3ee0e88b1cc75f7d6ee5367b6"],["/archives/2018/02/index.html","e1e3e77b48c5ef468a8e00e7ee28b4b3"],["/archives/2018/03/index.html","1eb6cc0f0f3f1f825b428caa53b27b8f"],["/archives/2018/04/index.html","1c5e4bab20c35aaada63c5ed1a84814d"],["/archives/2018/05/index.html","31d0414fdc0eb312b069a88ed7fd753f"],["/archives/2018/06/index.html","3fbe57c65f4492b270f51f41bfc11af4"],["/archives/2018/07/index.html","614b57287989344a6473ab41003f30ac"],["/archives/2018/08/index.html","b284c5edc2a57b5866de21bed6d69bf9"],["/archives/2018/index.html","57ea025fed03ee0032ef336c07b3b33f"],["/archives/2020/07/index.html","590d70d9cb390098d03447188a79cef1"],["/archives/2020/08/index.html","5a02fc9c8d65e2f3c2aec0d3e5bdb6b7"],["/archives/2020/08/page/2/index.html","9fe623f464d5a1e904a2191dfd3e656f"],["/archives/2020/09/index.html","02a4840b9256751cc4a938d36ee18f95"],["/archives/2020/09/page/2/index.html","014ce081d170af7ced00a63dd191fc0a"],["/archives/2020/10/index.html","678f455fd5f96ce7671e134ff96bc6c4"],["/archives/2020/index.html","aeb81969c9ab50b02853ffb0567cb504"],["/archives/2020/page/2/index.html","79b98648f5ee447d49467e69a3ea1f63"],["/archives/2020/page/3/index.html","8d58b2383bdfcbeb289bfe821ff011b4"],["/archives/2020/page/4/index.html","5e81b3ba346b063a35c9bcb26d0a3582"],["/archives/2020/page/5/index.html","48ed1427cc5a8de504523ec813b50f3b"],["/archives/index.html","5a7ed69cd9e00c9a16f116195bce432b"],["/archives/page/2/index.html","a0c845b4601d18f7b4ef105a57b69264"],["/archives/page/3/index.html","d83938b5225bee4610e6cfc3a63e9c46"],["/archives/page/4/index.html","d5a40a207388a76a20785e8763993780"],["/archives/page/5/index.html","9c658631ed32b0f8a9d8ee60ba42b939"],["/archives/page/6/index.html","bdcdba6507f5d381adbfa365ef6786ef"],["/archives/page/7/index.html","e2703d7964574f34ed21f71666176088"],["/catalogtest/index.html","d9b4daff740b0da2846e3475d6ace3b9"],["/categories/NHK听力练习/index.html","188b893978408ee81d9846e9aa48632a"],["/categories/NHK听力练习/page/2/index.html","167ac51c71ba8e0754938c2387d7f3d3"],["/categories/NHK听力练习/page/3/index.html","c824924455c12132de9641f8b3058ebc"],["/categories/vue/index.html","d4cde8a164fd57ce7eec68dbb96f834b"],["/categories/作品集/index.html","748b70b12bd9b91c3ac5c4064c850c3d"],["/categories/学习/index.html","be934c4516fdafd1fafaeb10a7dfa3cc"],["/categories/教程/index.html","8c8701461824632a4fac9eac264d2aef"],["/categories/游戏评测/index.html","352b2906b27da3ae9b142bcc4ec6658d"],["/categories/生活趣闻/index.html","30d67bc3d73383670fc99016301b67f8"],["/categories/随想/index.html","a711d770ee4f4da3bea1c280e5d1ca32"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/addcss.css","d20fc732e0cc7996bd82c5170b7aaa86"],["/css/background.css","b4e0ca22f9f4e4fb063347fe34402145"],["/css/calendar.css","f1c56c432caf63a6f104d9105edc4cff"],["/css/cardlistpost.css","d110d491f5a8f21c553e8c0992430b03"],["/css/clock - 副本.css","65602c2385c7eab42ee3804cd6ee0a5a"],["/css/clock.css","333804904271eecabbcc519b4ec76178"],["/css/cursor.css","f514da9c81fb3fcb4f7e9038dfa30874"],["/css/danmu.css","2a5b914a9592bcd353425c6d5fa7af8e"],["/css/flow.css","c771dbc6f0b865b39a9806713dc1e284"],["/css/flow.min.css","7ce838f3563e00e15ca8bd55b6e00630"],["/css/font.css","e91880a0e442f996fdcca1e1eb0f9aab"],["/css/index.css","b9e9c9b772bb97010daa5359ddb1a597"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/loadingline.css","bc1ee020a6a11fea17b915b97e6978bf"],["/css/news.css","bc54bafe1b3285eb19c63bb5f0226971"],["/css/shuo.css","8db924024099e925c53d5b3dd22f83c6"],["/css/sortable.min.css","a4c7bddbdc32317dbb63a31244a82556"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/gitcalendar/index.html","d7663334739ee576b9010be9f65d1a85"],["/icon.png","8ec68de45d18642ba9baf2447e62f476"],["/images/201808011428/css/htmleaf-demo.css","a8256346bbe444fe604987f1fffbd31f"],["/images/201808011428/css/main.css","9afb83b1ea44d47f859a57395fe64737"],["/images/201808011428/dist/sortable.css","6b6b3d6f85a3497ee9e71b16b7223f60"],["/images/201808011428/dist/sortable.js","d199f4ab84617e894975f4757dbb3c17"],["/images/201808011428/dist/sortable.min.css","a4c7bddbdc32317dbb63a31244a82556"],["/images/201808011428/dist/sortable.min.js","0351fbccf2faed49062495990e32a14f"],["/images/201808011428/fonts/icomoon.eot","3891455c55b76ce7f7c86bfc33cd6493"],["/images/201808011428/fonts/icomoon.svg","bb97ed129aa43f69280d3085cd269102"],["/images/201808011428/fonts/icomoon.ttf","e46c36b6f94cf81311ffb383f6d32bec"],["/images/201808011428/fonts/icomoon.woff","d1117ddce10d8c7ca18ac089764da08d"],["/images/201808011428/images/item-1.jpg","c4b8c20bee5947eba1541a6a8a60a5ce"],["/images/201808011428/images/item-2.jpg","dfb3e34508b4060140150784cac9658c"],["/images/201808011428/images/item-3.jpg","4f40a1d501cbd4ebcd1f617078fd6a76"],["/images/201808011428/images/item-4.jpg","04a5d629dd413b49e960437cde7dcedd"],["/images/201808011428/images/item-5.jpg","370daf7210529430a4313b29bdad6269"],["/images/201808011428/images/item-6.jpg","93ce2054bde3d9463270d9f481012652"],["/images/201808011428/images/item-7.jpg","6a0345cbc8c6ac5e909f86e6faeeb0fd"],["/images/201808011428/images/item-8.jpg","4dc81e428730ba2b021dd4993385db4b"],["/images/201808011428/images/item-9.jpg","2aa5f8fc43fe5eca9bd8394a36f1b4d7"],["/images/201808011428/index.html","1bc3df44ea4ffbe54788b3762e5f7299"],["/images/201808011428/readme.html","e541e113f96d8b01803111ca3d416ab6"],["/images/201808011428/related/1.jpg","f4f33eb12a48c6bda46a1c371db24e5b"],["/images/201808011428/related/2.jpg","891bf31b875ab7588f138185019d5166"],["/images/233.jpg","13e6ddf019e5560a32f3ff82efd22344"],["/images/AMJ1.png","d27a6725d1aaaf5324248da4312ab6c2"],["/images/AMJ2.png","00e22eba5901e5bd674e42228cd5bd26"],["/images/AMJ3.png","c8c9ea6348dfcad3a641899d5b587431"],["/images/FOTO1.jpg","4b6f100861908e2c7044cffbdb4a0c1a"],["/images/Isolde-1.1.6/Isolde-1.1.6/LICENSE.html","fa1254c67a6a5f0545d097a8d7fe0cd3"],["/images/Isolde-1.1.6/Isolde-1.1.6/README.html","01ec2612cc9e5e928c421004dd876704"],["/images/Isolde-1.1.6/Isolde-1.1.6/dist/isolde.min.css","e859dcc0f568c92bdc4b7be3f3b7d7fe"],["/images/Isolde-1.1.6/Isolde-1.1.6/dist/isolde.min.js","c5f5cc1595efdfde4d0b1b1415c6ae25"],["/images/Isolde-1.1.6/Isolde-1.1.6/docs/OPTIONS.html","84fc1b544c083e3b2112e8690059b1a3"],["/images/Isolde-1.1.6/Isolde-1.1.6/gulpfile.js","8d329f641050ed4e2a93a4cc914bba1d"],["/images/Isolde-1.1.6/Isolde-1.1.6/index.js","9fa8aa3efbd2e9eef8acc5f85752ad3e"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/css/main.css","8697f186bbc389515aa6eab3a5c9316e"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/css/sortable.css","04fca21af7d48dc17591894d17aa8358"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-1.jpg","8e757354b2917abe5dde088cbc82dae6"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-2.jpg","8a5fcc4cebc52caf89eb954285edae6d"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-3.jpg","caeae3d2265de3dad6d4b16dfda1fd05"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-4.jpg","1622226c2f5ef489c55f028caf26bafd"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-5.jpg","677d53cc36ccc311e11cd455fe222621"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-6.jpg","bdedef62cfdcdf9d273fc51a0ace2563"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-7.jpg","2faba84c41dc5f0670efd3cc0b139eb4"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-8.jpg","635c6292e642ab737eed6411c3295da6"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-9.jpg","e1c4d431a72b8bbf084451939ca86595"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/isolde.js","1ddba0575c730fe2318c6450dfc4f403"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/index.html","ee74fde3d5c459574040be69bfdc7a2b"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/isolde.css","b8011c458b923321a755da760cbeb5f0"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/isolde.js","1ddba0575c730fe2318c6450dfc4f403"],["/images/MVVM.png","ea5a002ee2f85c71a0db51d5adb5de19"],["/images/UT.jpg","367f4e432f9db55a92b2a290c4b0a476"],["/images/UX.png","a183974e958d41d1b6acec70bb7ea00a"],["/images/WindowsTerminal.png","8ac29cb56b8a1768cf7de071e9f1ae6f"],["/images/air-w.png","c1cc32f9d3e17551ca11a7d18a0b533a"],["/images/anzhuang.jpg","912b2489957f8344406edc5e5cebe5fa"],["/images/api-setting.png","2c0bb074390779721cba009e96c5417c"],["/images/apikey.png","1f31121b190eb1f990bcc3e27524bc03"],["/images/b0_img.png","43fcaa3f8b394ca5be957f4b860800db"],["/images/backpic1.jpg","86a6fa88167feb338fbf1a4e9057114b"],["/images/c0_img.png","34397085b4d3349034f9b167469ac626"],["/images/c10_img.png","7938c5b0dd789db4f262e5a618943a9b"],["/images/c1_img.png","95211a0ebf07befde1b11477c3a8185b"],["/images/c2_img.png","456ba51725d669fc4d005787753a6b08"],["/images/c3_img.png","a0aa7dcdd2ed5bccec52c16942036a3f"],["/images/c4_img.png","0869cebb60d00a78936b7498823a39de"],["/images/c5_img.png","533774e840ccb3ef13b46201a54be05d"],["/images/c6_img.png","db9eb681dea0b7911f0b2ba918d86c26"],["/images/c7_img.png","5b9c9e0331aca2a9d47a2730512f34f5"],["/images/c8_img.png","be9107995f185e3bbf7186c4dff69f42"],["/images/c9_img.png","642a2e762b74a28d2426af14f2b864c1"],["/images/calendar.png","86319b08b93be7c8bc47cdba7a169563"],["/images/cataimage/b1.jpg","e4795ce34b4d070d251c37a2ae5e37eb"],["/images/cataimage/b2.jpg","e1a7402c7d111b33d22c187a794e693d"],["/images/cataimage/b3.jpg","c091fe2a8024b2f010911e9af8091147"],["/images/cataimage/b4.jpg","1a2190b3e7ecb404767f029642adb637"],["/images/cataimage/b5.jpg","2683b29be7ea536b2d2c0b428ab87a80"],["/images/cataimage/b6.jpg","8eba752c28594ff5a253a01c0904a4a4"],["/images/cataimage/b7.jpg","9259255b1e1ec36bf92b4f34ad68db7f"],["/images/cataimage/b8.jpg","beaae9e5c735657f2e5bba9eb3deb754"],["/images/cataimage/b9.jpg","7ea8994ee380e84190422ac1b1d93ed8"],["/images/citie.jpg","adea8c4a6fca73e27f5e2aae864dd21f"],["/images/clock2.0.png","0a0f122c7a25262fc02ee99df0ef21eb"],["/images/clock3.0.png","8e04375c183c637b65fb50ed40f46466"],["/images/example.png","aaac9983e5d59f919bf282dcff2edb3c"],["/images/flow.png","adb9dac479e664c3e1b103a2c7fb9517"],["/images/foto17.png","28db4c6608ad1ee6b34238cafab25e5e"],["/images/foto2.jpg","be95b922512d004a61f83c97af3e2602"],["/images/foto2.png","0dc07d4e1b00526a273a89dc8b81548d"],["/images/foto3.jpg","551c0616c92c4ee7cc17dd458b3c46e9"],["/images/foto4.jpg","9d1d9fea759a41afc0061866e400339a"],["/images/foto5.jpg","984f618b15372f37d54f507e6f379f10"],["/images/foto9.jpg","b683fc0b998e80ff8f5a3e45e889807c"],["/images/girlpic.png","ff1e8427ed555af639e6d849f8f648f1"],["/images/girlpic1.png","698e5570e821c3cae643cc9777c2292e"],["/images/girlpic4.png","551882e4b9b6afb79000fd34c0dbf5e5"],["/images/gitcalendar2.0.png","3211a589d3a1d28c8711d095edc760e9"],["/images/headimage.png","332502f36a0297b30cb7969fe6de8451"],["/images/hexo.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/hexoWT.png","c027cc9f5665c7d7ba657e7a4bb40017"],["/images/his-json.png","7d8a71e38ab684107446e5c72c31854e"],["/images/history.gif","0459a3dcf2317253de0b34482880c63c"],["/images/homework1.png","e8d2f64d0785519ea7779016208a2900"],["/images/idea.jpg","5eb08bf6c965588f03c8860f201cac45"],["/images/jiaocheng.jpg","ad0b07db72a1eae964ab067511b756f3"],["/images/key1.png","f2a370e02ad6c5a101db20b47a9a0008"],["/images/key2.png","21dc40bbe0377cd9fe85a9cb431c18f0"],["/images/letter/a.jpg","0d4de9f533da8b2de81ccc509657f853"],["/images/letter/a.png","213b394b0800f642d758368779d79942"],["/images/letter/b.jpg","66fee2626ad0a71d42dc6f0d4b2c04a1"],["/images/letter/b.png","581ea16ed4c1d7bbc1c0dca3929051a9"],["/images/letter/c.jpg","121a016fcce1ed141082dc6254f5abbc"],["/images/letter/c.png","3d8cf0fa352d68dde80b3310bd702ac4"],["/images/letter/d.jpg","6e1db729489ebbd94496f2134b18d4ce"],["/images/letter/d.png","c48ca73078c850ff606cad10f11c1c56"],["/images/letter/e.jpg","ff503c208a88b211e598b92e6969d0e7"],["/images/letter/e.png","37fc8cdc838e64efe77305fa30581060"],["/images/letter/f.jpg","429cc37ac2269be8797c969b66a81339"],["/images/letter/f.png","12adae8b53d9e6048dbbeeb3f91cebee"],["/images/letter/g.jpg","0b8098e60deaf670dc1d9fba77714341"],["/images/letter/g.png","575f1073e0f689ae0d84803b8c979f21"],["/images/letter/h.jpg","9002009c053237f1ef6724e8be5f2b37"],["/images/letter/h.png","2e7173749a66cc1d8630e69261e56464"],["/images/letter/i.jpg","431837c21dc08954ee4acb2b0bd1d9e9"],["/images/letter/i.png","37a8a26bace6560ddb9c85a8605da81c"],["/images/letter/j.jpg","a83cac86235866d82053ea127940ccc2"],["/images/letter/j.png","8aad49c7f55d6d365cbbf080e7ecbc30"],["/images/letter/k.jpg","a7bd4a5ab89ecb4ad1d391c73a2c3034"],["/images/letter/k.png","2488883f77a6b77fafaaf02cbca9c319"],["/images/letter/l.jpg","b87d0637d8edd85bbc5a144d8d49faaf"],["/images/letter/l.png","41d97d26f91501634e73da0dbd2d9ad2"],["/images/letter/m.jpg","7a29bfd3c2da75f6a219daa19b4bf01a"],["/images/letter/m.png","bbce5ca54ef802aa23e5a406fb419e9c"],["/images/letter/o.jpg","9f29dbd5dd07fb04e610cd0a8fc83074"],["/images/letter/o.png","8242f141981f606ca698ed32df2a17c7"],["/images/letter/p.jpg","325a87a9fa352c7ed5eaa01f24018b63"],["/images/letter/p.png","8d457fc405de63b537e01226a73d3287"],["/images/letter/q.jpg","57921474cb1e9f4352df281856a10f5e"],["/images/letter/q.png","93255d49876fc4cd9260383bbe30910c"],["/images/letter/r.jpg","0b634e85fe24fea66c9fb3d1eaaf1296"],["/images/letter/r.png","ac4be3c684d8aaf7f875993dd12c4fc0"],["/images/letter/s.jpg","e803c253e88e6577721a63d6929a53fa"],["/images/letter/s.png","7d8e6a7981edc0045d41647b6547e755"],["/images/letter/t.jpg","ef4b9b12431116d53994185248d0e504"],["/images/letter/t.png","da9331bb93c0285bb9ae9b98350d4db7"],["/images/letter/u.jpg","4b5fbe5c3b7414ef99e46dab2b9da71a"],["/images/letter/u.png","693fb63a9f05fee9abf4f8d65380fb2f"],["/images/letter/v.jpg","85f1071ab973e79017eeaf5eb726d0f2"],["/images/letter/v.png","fdcd25e6d19bfa3fe7cf09a9047235f2"],["/images/letter/w.jpg","d39f91c9e1be9ab39ca46218fcc7faaa"],["/images/letter/w.png","2d79b92721fd2dfe4e19d8a57ccf9473"],["/images/letter/x.jpg","e2ce4f0631d5002a79a5930ccbdb8449"],["/images/letter/x.png","c0acbad3e4ddaf59a95ecb6d6509bcbe"],["/images/letter/y.jpg","b2e7b48748a70f0dc8c4445bf9069196"],["/images/letter/y.png","fc61ea05666257f2c50f08918970a753"],["/images/life-cycle.png","02f39ea5c041d45938fda4b50f234cb7"],["/images/life.jpg","74d2d9c5f48ec59e3badeec690941812"],["/images/listen.jpg","9d4f73cd5634f43deaed4f9aca03f9a3"],["/images/loading.gif","ffa0804a5d99e2d5b39e05cda6d6b28b"],["/images/magnet.png","4899a924f3de0d19dbe0415128c07d65"],["/images/magnet1.png","8d010eb86ca943e036adaa7de57aee7d"],["/images/magnet2.0.png","54fe576f174d2b6917fef89f40ac5975"],["/images/magnet2.png","293cb414a8ab93b43bde3bebf9cf0cfc"],["/images/magnet3.png","1923148630e2e094ff80bf35aa604c10"],["/images/magnet4.png","9bb4f963ac1c09f02d62525f513f492c"],["/images/meilu/1.jpg","cd67abcc3f543b5c66adc4f9d9c5c628"],["/images/meilu/10.jpg","ac9fb2711e477b5db1c3acb57e899045"],["/images/meilu/11.jpg","364caad6dfc356a3dc630fa067e48e88"],["/images/meilu/12.jpg","274767e5708f79934e5bdbf73eda8f0d"],["/images/meilu/13.jpg","dcab12b84454770b208913db63e825ac"],["/images/meilu/14.jpg","037cdd048284e621f27e17a2c59e8ea7"],["/images/meilu/2.jpg","f6cdb65ae3fad4523b32f5ee38696b60"],["/images/meilu/3.jpg","9e5df3612c2d93bf57313186c954aea5"],["/images/meilu/4.jpg","69ef2d6f4bcd79cf4b4e672b60c6751e"],["/images/meilu/5.jpg","ce81ca16def7613b7ebb368fb554f14f"],["/images/meilu/6.jpg","cafd5b62305f806754a75cc3af8c3b77"],["/images/meilu/7.jpg","b8ae865d386e1e713a6034da6b090c10"],["/images/meilu/8.jpg","afad7a7bf1066c817a8d2e7566bc780d"],["/images/meilu/9.jpg","72f9649f56b564eacf23ce3dacb88029"],["/images/metroui.jpg","5503bfffd450d9ab572b67ea00941571"],["/images/metroui/1.png","79a03b408c19c74eeaa8ff6e17a03f9d"],["/images/metroui/10.png","8309fed71a15c78f2dfa3af1ff75a5f3"],["/images/metroui/11.png","aaf1a007cbae12f93cc2688bace18d28"],["/images/metroui/12.png","0758ea282c3828c47e5c64520ff85783"],["/images/metroui/13.png","12ca7b511927cd4b26e97f3b20908a32"],["/images/metroui/14.png","f44ba7680f7b36df437e2ae2588d0565"],["/images/metroui/15.png","e8927c78b125b805af7aa86fee815ab6"],["/images/metroui/2.png","e604d3c662b996f06f22753ba9ab379f"],["/images/metroui/3.png","664e3b7490f2f95d5547b8ba79a65456"],["/images/metroui/4.png","c0f255344cafc303a1d9c7404da37149"],["/images/metroui/5.png","da2074cdb1298aca826abc1a5c441300"],["/images/metroui/6.png","efef2f087127614b4e03bcbe9a347018"],["/images/metroui/7.png","a4d34b1a2dbe3a58d3a92276880be039"],["/images/metroui/8.png","1d34a626bbaa898a60d4501936bcf962"],["/images/metroui/9.png","0663697c1667b377fe2623bd65e00b31"],["/images/metrouilogo.png","aea81b42d1c2c96440f74cf56ad82e2f"],["/images/nhkimage/2020.08.01.png","af4c55b2ae1d5ab2f56c75a87fcdfdb3"],["/images/nhkimage/2020.08.02.png","c355d41b90f5c65823f96c5f6868ce53"],["/images/nhkimage/2020.08.03.png","fddcedb40d7f28b2ccb90814351ad5c8"],["/images/nhkimage/2020.08.04.png","8b4518ec5a8513f442980ed7167136b1"],["/images/nhkimage/2020.08.05.png","590abfb19334b0c3cee5a005674f2253"],["/images/nhkimage/2020.08.06.png","d469e21100c42435e88f2bdf07f93da1"],["/images/nhkimage/2020.08.07.png","3ca9e2c8b8a09a38423d73cd36e8de9d"],["/images/nhkimage/2020.08.08.png","4420c2d899fe4eb90c48bae0da8418a2"],["/images/nhkimage/2020.08.09.png","df14be338f9c920818dd1daa6aa955ee"],["/images/nhkimage/2020.08.10.png","c4e2ed023cd3dbfd4986add35ca9357c"],["/images/nhkimage/2020.08.11.png","cf562339e57f673d394f3e6cdd1f60cb"],["/images/nhkimage/2020.08.12.png","81dfa179fea3052ddcf73912ea368f67"],["/images/nhkimage/2020.08.13.png","8cf26c2642e7a27cbd86fcbda8bae8d9"],["/images/nhkimage/2020.08.14.png","d88eeb678b3ed3651d597e61957e264a"],["/images/nhkimage/2020.08.15.png","b9879f193867edcffeefce62c9dc7153"],["/images/nhkimage/2020.08.16.png","46cb914aa1d556561897767ec9ff66a0"],["/images/nhkimage/2020.08.17.png","ea1af9645b5cc9cbaafe70a91dd15cca"],["/images/nhkimage/2020.08.18.png","e87e4de39a6f06cf4283a63af92dd8de"],["/images/nhkimage/2020.08.19.png","8001a951513b542a98ce1151be5bd87b"],["/images/nhkimage/2020.08.20.png","4bc8fafa3ecce30d340b1350715d78e3"],["/images/nhkimage/2020.08.21.png","07ad1337e127922abff27da6c672549b"],["/images/nhkimage/2020.08.22.png","b2b5d53ba46015f64048f9d803b12179"],["/images/nhkimage/2020.08.23.png","225af8c0cabe5218ec634d1b8815fd95"],["/images/nhkimage/2020.08.24.png","1d54a484a6e2395aabe9be005cd90361"],["/images/nhkimage/2020.08.25.png","8008ba169cfce0ef2041329cd29b6b77"],["/images/nhkimage/2020.08.26.png","72a2b8094003a54c97a34ea97cf21bc3"],["/images/nhkimage/2020.08.27.png","893407e604804d215c8fef8bcd5f2684"],["/images/nhkimage/2020.08.28.png","b542280b7341759890a99cbd44d822c5"],["/images/nhkimage/2020.08.29.png","620e2e7d4772e39615fd1a88cdf49717"],["/images/nhkimage/2020.08.30.png","f645d7ba2dcb506f9ec6fb9244425ad7"],["/images/nhkimage/2020.09.03.png","c5262f3aa87190e0273383ea1e445681"],["/images/nhkimage/2020.09.04.png","c07149c32aa41c03bc7dac82a713f6b2"],["/images/nhkimage/2020.09.05.png","4e43556e1cb3b7f4d75f0f6127616a54"],["/images/nhkimage/2020.09.06.png","1021d2ae04a7f109404f857a2a7629cf"],["/images/nhkimage/2020.09.07.png","db9827e9f0a4cf1401b559b4644a0204"],["/images/nhkimage/2020.09.08.png","efe1030b73dc1c01f169c3122a194426"],["/images/nhkimage/2020.09.09.png","f6ba3a1c6cdeff88404ebe2a646f2eb5"],["/images/nhkimage/2020.09.10.png","3471b05d02113517359a9e2167befcfa"],["/images/nhkimage/2020.09.11.png","921a541a8bffb1aa436df2eb6db7c99f"],["/images/nhkimage/2020.09.12.png","a51f8ebaddba69bb80f9259a30f17e65"],["/images/nhkimage/2020.09.13.png","0399889200493cd2154ffc407e2bc400"],["/images/nhkimage/2020.09.14.png","eaaf3da69a39ed316b7fc8c4d409bb0f"],["/images/nhkimage/2020.09.15.png","5774959ea4061c9298ea174f0862cc3a"],["/images/nhkimage/2020.09.16.png","0c5a00f74020740fda589c02e4b3f917"],["/images/nhkimage/2020.09.17.png","b5aef734e3a7db4862ca3fe4e6769dc2"],["/images/nhkimage/2020.09.24.png","5982a7b3843f4ae43b2b4bc4b0c577d6"],["/images/nhkimage/2020.09.26.jpg","c6415af781fbdd36fdb034f74646129b"],["/images/nhkimage/2020.09.27.png","27aa6f6a8d5534ccd99cff261dcd9eb6"],["/images/nhkimage/2020.09.28.png","0f4318d1ff17a33de364432a1c44b5ad"],["/images/nhkimage/2020.10.09.png","6408d9f7e66fdeba8b9207939a08cf8d"],["/images/night.jpg","7c57432e644d24d5738a56459bea0e7e"],["/images/notop.png","d25c272e5ce312a880e04ce8a0b27683"],["/images/pasted-0.png","552608d8f6e39369aa30c6e332a32826"],["/images/pasted-1.png","baafdacee93c99e99418aaedbf524fda"],["/images/pasted-10.jpg","395cff6f64ab5df19baa3572ac98e541"],["/images/pasted-11.jpg","56e5df07c96634638abf7995b25c81ab"],["/images/pasted-12.jpg","61b3f803b85ce3640d7a9ba7efb9da6b"],["/images/pasted-2.png","2f410e53c811f92a6135f48857776f5e"],["/images/pasted-3.jpg","bb5717e691e87355e7d63a5f3a87ae62"],["/images/pasted-4.jpg","10041d0e3567b24b81222ec5075d6492"],["/images/pasted-5.jpg","ac5047a4b48c6cdaee86fa1863e33904"],["/images/pasted-6.jpg","1556ae8d3ad5713d60237ee4d10e81f0"],["/images/pasted-7.jpg","913fde1686587646ddc663bd810cc81d"],["/images/pasted-8.jpg","fc83268081fb4b6b6ecb1ffa1ec5af7f"],["/images/pasted-9.jpg","25e0fa3496591501f5c29d0b802b77d2"],["/images/pet.png","2b8c121909497e57057478856fe48a94"],["/images/pet2.png","dfb1d6a17b527ccc0c600e6ad31f55e5"],["/images/pokemon-js-master/pokemon-js-master/README.html","8fae7ae9b273e8d1e99fe9bbad6d909f"],["/images/pokemon-js-master/pokemon-js-master/fonts/pokemon-italic.woff","78e86827d84b43c015a2f4c2c6a373dc"],["/images/pokemon-js-master/pokemon-js-master/fonts/pokemon-italic.woff2","6eed2c3b876039e9332617cf11051bde"],["/images/pokemon-js-master/pokemon-js-master/fonts/pokemon-normal.woff","09442a9708ccafa61a894d703b10a45b"],["/images/pokemon-js-master/pokemon-js-master/fonts/pokemon-normal.woff2","f82c92d44c94dcdacf907a1be4fac138"],["/images/pokemon-js-master/pokemon-js-master/img/ball_empty.svg","71b5bd4f59def835f94989825d23a737"],["/images/pokemon-js-master/pokemon-js-master/img/ball_full.svg","7e11059b84cef189cbae0694b31e3161"],["/images/pokemon-js-master/pokemon-js-master/img/blue_balls.svg","86a4983e08483856c2b69ba22b3b6605"],["/images/pokemon-js-master/pokemon-js-master/img/blue_front.svg","67d4551115bd9619421c8b279a02da21"],["/images/pokemon-js-master/pokemon-js-master/img/blue_line.svg","99e3256fe421cea565eb6c8e238b4e1b"],["/images/pokemon-js-master/pokemon-js-master/img/eevee_back.svg","be41cc88ba29dffed133934f3fd81092"],["/images/pokemon-js-master/pokemon-js-master/img/eevee_front.svg","67e75860167c118c80b43e9bc77f8dd1"],["/images/pokemon-js-master/pokemon-js-master/img/frame.svg","9ba744fd242d76220503200dc263d225"],["/images/pokemon-js-master/pokemon-js-master/img/hp.svg","1b9572b00909d59dade3c5d9c7484a94"],["/images/pokemon-js-master/pokemon-js-master/img/level.svg","ce8d20ff7ae3e66decac50b78ca3b86b"],["/images/pokemon-js-master/pokemon-js-master/img/marker.svg","3b8296fb02592d99e7a7aa29b1d41742"],["/images/pokemon-js-master/pokemon-js-master/img/pikachu_back.svg","41f62334dab4ff5ad455bf3792243611"],["/images/pokemon-js-master/pokemon-js-master/img/pikachu_front.svg","496206572029bcfaebfaed794ed1d015"],["/images/pokemon-js-master/pokemon-js-master/img/pokemon.svg","f015c9582ea62070300062fe2022dd37"],["/images/pokemon-js-master/pokemon-js-master/img/red_back.svg","1e4dc80c13eac754369017dbd19c9086"],["/images/pokemon-js-master/pokemon-js-master/img/red_balls.svg","35d2d97a11a79232ddeb90e052af95cc"],["/images/pokemon-js-master/pokemon-js-master/img/red_front.svg","b4fc7ab1d0a1254c453ee3ebc28db79f"],["/images/pokemon-js-master/pokemon-js-master/img/red_line.svg","fd9e3b97a6264fc5e5f398ce854d24b7"],["/images/pokemon-js-master/pokemon-js-master/index.html","41b6c3c7c5fb1ae1af11dc45c6f58610"],["/images/pokemon-js-master/pokemon-js-master/jquery.js","ac5017a6c6a77a3db6f989b281084b6f"],["/images/pokemon-js-master/pokemon-js-master/main.css","3e4465c57f14ab0e02b5b2a805372c0c"],["/images/pokemon-js-master/pokemon-js-master/pokemon-min.js","26e1d8483c8d86ab39054a609106aad0"],["/images/pokemon-js-master/pokemon-js-master/src/pokemon.js","f43de536cebe95ac1b19b905cbc9d889"],["/images/pokemon-js-master/pokemon-js-master/src/promo.png","abf2d1d338c0a9080c1a9eab7b35e6e0"],["/images/pokemon-js-master/pokemon-js-master/src/screenshot_1998.png","046079a29e3df9b95bde3c3c58647d43"],["/images/pokemon-js-master/pokemon-js-master/src/screenshot_2014.png","828e18e5add8f29486ba1945de2bfb7f"],["/images/pokemon-js-master/pokemon-js-master/src/screenshot_2016.png","69dbbe3b5b622cdce0fa82aca162129a"],["/images/ps1.png","0917ba91f21b6944dc08d35c41a326d2"],["/images/psb.jpg","6a27c58337875c776af0a7667598b401"],["/images/pubu.jpg","c5f6319fe03fb1fa52bb67097b1f22f7"],["/images/quse.png","7cd1ec12b804305430cb4cdc09c7a893"],["/images/rain.jpg","9c26acc44c692b6a63e134be07b07c18"],["/images/rainsmall.jpg","e8c91c40bef224fc5a3942bd0d007b84"],["/images/shezhi.png","281bf545f6a4024e2d0b7120bc398a21"],["/images/shuo.png","9cce9df6e32e00e49471b9a9f089f6aa"],["/images/shuoshuo.jpg","c5752c104cddc0884d3f50b4dca01322"],["/images/soul.jpg","d97b4099c0728ff6123d006fa62db86e"],["/images/study.jpg","a9b1cf95ee6bd9f3913e8ec6a6a6f44f"],["/images/tianqizhizi.jpg","dd48d78b4eeaaa52578352f9ef570b14"],["/images/time.jpg","b8513da2d044befd353231d3e51db22e"],["/images/vue.png","0d2b5680bcb76df1333b85fad58634a7"],["/images/vue1.jpg","8cbf18302c6fa72e2a40d0cca0832213"],["/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/03n.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/04n.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/images/weather/09n.png","512894b4a127a42e060e237674b8d145"],["/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/11n.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/13n.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/images/work.png","e521cf5b834292fde1c50e0a0f5802f9"],["/images/xiaoguoyanshi.png","994a3b710d36df0a4630cd9a768c7f7b"],["/images/xiaoguozhanshi-m.png","1fefca18214fc4889d1bb76b81887c9d"],["/images/yao1.jpg","9dfddaf8c121fc8db788a87d133d6376"],["/images/zfe.one.png","b41f689341882058ffb28c4cee499bde"],["/images/下载.jpg","79c7247da282569a05bdd46aa43b93b0"],["/images/幻想终结之日.png","0025c4d3973bdfedb80db3f78c59fa47"],["/images/时空战纪——游戏建议及意见①.jpg","1337457f14a8dffee66d94f8915b54ff"],["/images/简历.png","d70507ee4615c9e324578c0d777e6855"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","806edad3a0904a0fb3f7e2b07a7ed319"],["/js/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/APlayer.min.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/airvisual.js","71cf86bfd452ca01d92438d8266416ee"],["/js/airvisualapi.js","6931bebe1696688d109963187fc2eace"],["/js/artitalkkey.js","ad2c74320c63125a36319659657d2886"],["/js/background.js","94c8410b174f58594cf81ec99054968b"],["/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/js/calendar.js","a58e02711cc6dec4dc04257e555b8923"],["/js/catalogMagnet.js","0387c6ad152e7a6076cceffc7420be77"],["/js/clock - 副本.js","405186e7a9d73221d2d50c0dea2852d0"],["/js/clock.js","2fdceb94cc57b551cd245b0001927b66"],["/js/color.js","3730bb4f7b185e6f5130ac28bace968b"],["/js/dan.js","6b6ae6b7f1b42dd4857541f43b2bb733"],["/js/echarts.js","dc1227b1eba1ba47fd185a387d0a7d37"],["/js/gitcalendar.js","fadfa8a42272cd322118653dca512a7a"],["/js/history.js","20459f7db325e597e64903f4c0d19306"],["/js/historyroll.js","a3e9ac376106816c50a61f9f4306d671"],["/js/jam.js","462c07d3b2e0f20394d994bbcfae37cb"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","f5b2bd10be1e09516c539afa2197a8d7"],["/js/news.js","01855302733b13c8ee4e26f9a23e52db"],["/js/rain.js","f656dc28e4ab5c3f8414d35f683278c1"],["/js/rainremove.js","ceacf82842b101f7e54a2aaf5f4bb9cb"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/shuo.js","1076b1ef51358cc11b6ff3bab25e15d8"],["/js/sortable.min.js","0351fbccf2faed49062495990e32a14f"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/js/vuegitcalendar.js","664c0f121af9131af267c1434225b5e4"],["/link/index.html","f37dd833d3a0f32c583099d4b8b62eb0"],["/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","35bcc67e7a00defad3c3e4d053a151d7"],["/page/2/index.html","79744fe52a78fb263653c16bdc1534e6"],["/page/3/index.html","07b95e0625f54ea1f9e239ffcfc65318"],["/page/4/index.html","f06af415b7cb50be66d109ab4ffd7aa7"],["/page/5/index.html","0dbcbeade92e30cd7d3895ba7ed9a3c2"],["/page/6/index.html","3148379f09abc75f74061af01f3c60e0"],["/page/7/index.html","41b8df61af0b768ad37396940ace7307"],["/research/index.html","a19bc43acfd5774225aaca7f7a9a63b1"],["/sw-register.js","031a67d2f9fc084d8722d86a7a554574"],["/tags/Butterfly主题/index.html","3f744d54ca10ac0a3ac4bb88b196f920"],["/tags/DIY/index.html","ccf82c495070506ad13945ddf406940b"],["/tags/ICT/index.html","96af268dbca4f342d29899be571f1669"],["/tags/NHK听力练习/index.html","d1f0aac15023603ae43797beaf665e18"],["/tags/NHK听力练习/page/2/index.html","736bde84cc918d7dc8d7520094d8ef01"],["/tags/NHK听力练习/page/3/index.html","f132a60cc56b12255f6a0a9040a5bda5"],["/tags/metro-ui/index.html","a242cb76cbc37786e1e459f367aa5e97"],["/tags/vuejs/index.html","7356ca62f9876b75437440d8821fbd41"],["/tags/お盆/index.html","c7a78919be3b55b06f568982fe672613"],["/tags/世論調査/index.html","8c030ca387fa82f7a067bcd255f2ef77"],["/tags/作品集/index.html","e9f09363a9d68367e254db6b7fa806b4"],["/tags/农业/index.html","306a329d144d92a55ef829075cf182d3"],["/tags/历史/index.html","b7063c8deea3463ec862493b118a68dd"],["/tags/営業時間/index.html","a58bb56cecee8d11ed72f9d408da3aaa"],["/tags/国外政事/index.html","bf36299a906c3ca39ac1921537659f20"],["/tags/地震/index.html","22cdcca19bf452d2df1d15a274df5ff5"],["/tags/外国政事/index.html","32abeea133ded926ef4704da19ea27dc"],["/tags/天气/index.html","eb9e50405356ade4405bdc5563ad0de7"],["/tags/奥运会/index.html","ce8804a0458c48100fd2128c89cdac9a"],["/tags/学习/index.html","dd9469f0c04a56400911ea8d1a35232f"],["/tags/学习/page/2/index.html","e35929dd268a28a8c9874e76c78d47cb"],["/tags/就业/index.html","c68751766fc535031e705d67952a2f7b"],["/tags/庐山/index.html","aa6e263cf93157a61173642ca5ca497e"],["/tags/座礁/index.html","9c92a142e5896d44c08aa7e4998a3b40"],["/tags/政府/index.html","a9ca8fd30ada402b7ea95145619b1b10"],["/tags/政治/index.html","221191a944b32d1b83454f64f2c47fbd"],["/tags/教程/index.html","093c9133159759c607c0d813c7ae3ae4"],["/tags/日本教育/index.html","e4a54002e8055d0ef9dccaa8a9b2c830"],["/tags/民生/index.html","e7ccaa014b57efb98bc464a1bc1a57b7"],["/tags/游戏评测/index.html","0f8bf7c82190d3d28bd513bb584127c3"],["/tags/游记/index.html","e34d3b78b9b09c74da859301f9123ac6"],["/tags/生活趣闻/index.html","d600d8f9e0df58a56eb095fbea2dc4ae"],["/tags/科技/index.html","55eada48e430948b5837e7eb6dcb4798"],["/tags/经济/index.html","17b0d67f912628f1e960ba5a9e57f977"],["/tags/网络教学/index.html","6ad869af9de27edb8b7892f0a74647eb"],["/tags/舆论/index.html","ef98fca191fe43e42aa771dabdddf443"],["/tags/虚拟现实/index.html","fbdceda0d6b0dee81b655ea6d963995d"],["/tags/随想/index.html","1a0c86547cb0cb77e57422000314c0c2"],["/tags/障害者/index.html","1488c02df4ced1336e471750f9da470b"]];
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
