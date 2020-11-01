/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/05/20/2015-05-20/index.html","76cade37c6fcaf77efeccc5e8033c3e6"],["/2015/06/16/2015-06-16/index.html","0cc2e53d31e7d63c08d05bc991294b24"],["/2015/12/12/2015-12-12/index.html","12e3abb619007cc3c60a7783e8d56160"],["/2016/06/08/2016-06-08/index.html","774d1fd4c2b9e7866031349a55aecc84"],["/2016/12/18/2016-12-18/index.html","283611312cba32b71a54d001a2aac654"],["/2017/02/17/2017-02-17/index.html","20b6ca9b51b74106d27a1e7f9bfec7b3"],["/2017/03/17/2017-03-17/index.html","637017c360f6de7cd2a1aec013868600"],["/2017/04/06/2017-04-06/index.html","31e2675bb053cad2dc876f0835349824"],["/2017/05/17/2017-05-17/index.html","5955c8de76a8821497d0acef345bce09"],["/2017/08/15/2017-08-15/index.html","0618b100646c2621f2d4413f3e4438b0"],["/2017/09/16/2017-09-16-1/index.html","45e375be9b3d5ba1483d958430ff1bf5"],["/2017/09/16/2017-09-16/index.html","6f62122fa24e6be360264210b4ef3beb"],["/2017/09/21/2017-09-21/index.html","8038ef73e3fd8e123136505398e4a482"],["/2017/09/23/2017-09-23/index.html","d0ab846be18f39c3a25e2a08cede3af2"],["/2017/09/26/2017-09-26/index.html","df25b600256b59d348aaf20fbbacc9d5"],["/2017/09/27/2017-09-27/index.html","e94eb84ae5355205db2fdac9b89848fd"],["/2017/10/04/2017-10-04/index.html","275fdfaa4f285cd560abe3609d5979e7"],["/2017/10/08/2017-10-08/index.html","ca0c8ae3fa3ed0ed836b9a5fef210e81"],["/2017/10/09/2017-10-09/index.html","2ecf7978ac9f10223a3bef563c86b9dd"],["/2017/10/15/2017-10-15/index.html","6999ca2c8ffeda4658876f8675765487"],["/2017/10/19/2017-10-19/index.html","e5fe28bf4f7f5fb0dafaa6705fa23126"],["/2017/10/23/2017-10-23-2/index.html","e549d0d94a25c9722cf18ed6bf9ffc91"],["/2017/10/23/2017-10-23/index.html","ef1d6778726e03f0fb04a60ebba7187a"],["/2017/11/08/2017-11-08/index.html","3b22eee5432193fbef206b8d7aba5f72"],["/2017/11/12/2017-11-12/index.html","5767f9a7ee29c93c1dcbafc130c76987"],["/2017/11/15/2017-11-15/index.html","b25fbd778c757a43c1f01580206d5c84"],["/2017/11/27/2017-11-27/index.html","dfbfc10486a96289069702e2cc56c413"],["/2017/12/06/2017-12-06/index.html","0b7030b48d44c35d9292fcf0b702da16"],["/2018/02/12/2018-02-12/index.html","988a3ca4d4c8216d24658c80c132019f"],["/2018/03/26/2018-03-26/index.html","88a54112586b31fab7733840cb533538"],["/2018/04/02/2018-04-02/index.html","b1c363dc39690e539c0d176bfe7614aa"],["/2018/04/24/2018-04-24/index.html","50f6080177556d205d431f074309805b"],["/2018/05/18/2018-05-18/index.html","02e9da59c5cd981889ef69e7964d5beb"],["/2018/05/23/2018-05-23/index.html","5077a19a216836fc0af7432530d8ff5b"],["/2018/06/08/2018-06-08/index.html","0712b97fe5a6ad8297642cddcf6adccb"],["/2018/07/01/2018-07-01/index.html","7ec82f775d24c584cd8b6f951523eaaf"],["/2018/08/30/2018-08-30/index.html","73de4481b8f2cce705ad4969641f2102"],["/2020/07/20/2020-07-20/index.html","ca922ec3bd20818108fcdfdbd72d7c47"],["/2020/08/01/2020-08-01/index.html","87bccb4824076f890e23529ecf265ed3"],["/2020/08/02/2020-08-02/index.html","2749af2f4e3820cc1a9549408a3143b5"],["/2020/08/03/2020-08-03/index.html","18fedcd78856b149cc59955278403d51"],["/2020/08/04/2020-08-04-1/index.html","1a13688c0a87f0ed49dccc399a933e78"],["/2020/08/04/2020-08-04-2/index.html","9b362688d597a5444b33a0a46157086f"],["/2020/08/05/2020-08-05/index.html","63b280ecdadfb9072720364f0e2dd381"],["/2020/08/06/2020-08-06/index.html","df407e1c82f45bb30bc8570d051e21c3"],["/2020/08/07/2020-08-07/index.html","f71df6d348efba1cadec868e42c4c0fc"],["/2020/08/08/2020-08-08/index.html","e000e1de870bdcd050c0f9afc6caf7da"],["/2020/08/09/2020-08-09/index.html","0e4c0906970facce627a999b9e6e8c0d"],["/2020/08/10/2020-08-10/index.html","1af0a89e7e8463382aa987826d2930b7"],["/2020/08/11/2020-08-11/index.html","4095a30decc818c8d962683ce205a3a1"],["/2020/08/12/2020-08-12/index.html","e998d57665b23b5e614ec88912eaaec3"],["/2020/08/13/2020-08-13/index.html","21b3a2126db814cfaa75e31b44ad8783"],["/2020/08/14/2020-08-14-1/index.html","bfb4d3acb2d1675adf15a0f995695713"],["/2020/08/14/2020-08-14-2/index.html","0b36184bac4a1d843f329a2eaa0f1ba8"],["/2020/08/15/2020-08-15/index.html","5943501051d3f35eb601758ebcb01c5e"],["/2020/08/16/2020-08-16-1/index.html","12e16b4f9a9c1b384753350ac797bf27"],["/2020/08/16/2020-08-16-2/index.html","8f2b508344c9a58888bd70cd71d81b06"],["/2020/08/17/2020-08-17/index.html","2488058ad38cc5997948aaf6ca770c13"],["/2020/08/18/2020-08-18/index.html","3dbfd0437b3419396cf24bbdd476ff30"],["/2020/08/19/2020-08-19-1/index.html","3465a9faee597c7b488345395aeb5aca"],["/2020/08/19/2020-08-19-2/index.html","f4900425e323c3452bbf13e17743b5aa"],["/2020/08/20/2020-08-20/index.html","f16e0a483ce9f4040c170099cc551f90"],["/2020/08/21/2020-08-21/index.html","ccbffc0a99f43761a80e5118e0c5824a"],["/2020/08/22/2020-08-22/index.html","240ad7627eb007642e99614902ed3aac"],["/2020/08/23/2020-08-23-1/index.html","2ba842ed9ce9363c4a914a754864e20d"],["/2020/08/23/2020-08-23-2/index.html","590dba6b447c828d031b1611452384cc"],["/2020/08/24/2020-08-24-1/index.html","257a9ad2f239818570ae384962cb9773"],["/2020/08/24/2020-08-24-2/index.html","862cd489b8e3dfe4806fa7d2a2609760"],["/2020/08/25/2020-08-25-1/index.html","1f1722be2aef110da10268ae7de2cd26"],["/2020/08/25/2020-08-25-2/index.html","e4bf1c80982ba7aee657fe865dc1a15c"],["/2020/08/26/2020-08-26/index.html","a038181a24008996568d49de7ec261b7"],["/2020/08/27/2020-08-27/index.html","e3d2a7a71633560ff0b4ac4f333c3e5e"],["/2020/08/28/2020-08-28/index.html","b3de68251bc3fbb0e125197a7799f460"],["/2020/08/29/2020-08-29/index.html","28142d77b2c41c143d486d3578c5392c"],["/2020/08/30/2020-08-30/index.html","8e596f38e32878c16013c005e9d87805"],["/2020/08/31/2020-08-31-1/index.html","31fbfb9f754681d7522bc758733bd4f3"],["/2020/08/31/2020-08-31-2/index.html","185cb4eb7acd659714b1cbefa10b4659"],["/2020/09/01/2020-09-01-1/index.html","54da9287858f2b298e601cb25fb4fe46"],["/2020/09/01/2020-09-01-2/index.html","bb3d9ab8139705d8867a00adb82c3584"],["/2020/09/02/2020-09-02-1/index.html","0bbe8f0ffc5f7dff365d4147f1f90934"],["/2020/09/02/2020-09-02-2/index.html","989577fabd44d074496954ac89a33325"],["/2020/09/03/2020-09-03-1/index.html","416bfc22562ec94e2460e27d6a0a7360"],["/2020/09/03/2020-09-03-2/index.html","b5675384eb06f3d9beb866250712d1dd"],["/2020/09/04/2020-09-04-1/index.html","fcbed9972abc76f9253766c8e62e96d8"],["/2020/09/05/2020-09-05-1/index.html","22ad60f143a83d974d22cb1bd7d75093"],["/2020/09/06/2020-09-06-1/index.html","a7db31afe6658ff8ebf9c11ccd682652"],["/2020/09/07/2020-09-07/index.html","cb059c5fb2954d9782ced7856636fe52"],["/2020/09/08/2020-09-08-1/index.html","5609c93794487e16eabbd1d841c4a57a"],["/2020/09/08/2020-09-08-2/index.html","6a377d22e4d2e13f7507eb442a766ec4"],["/2020/09/09/2020-09-09/index.html","c59549a48c365e2aa0ca7af232e65fe7"],["/2020/09/10/2020-09-10/index.html","daa016c40611f9af8b3c08f08ad18811"],["/2020/09/11/2020-09-11/index.html","32a383f7c8352936fc5377790fa73a5f"],["/2020/09/12/2020-09-12/index.html","2ca55dfb29033fc791c832cf5462f84e"],["/2020/09/13/2020-09-13/index.html","baf747ea7f1faf2c34c6cbaa791f13a9"],["/2020/09/14/2020-09-14/index.html","765c98d98cb5d64be924d61ad1b3673d"],["/2020/09/15/2020-09-15/index.html","3a1dd95513b7ec927aacb4f53f6114ad"],["/2020/09/16/2020-09-16/index.html","0ee424294f0f48fcb163cb2189e3fafe"],["/2020/09/17/2020-09-17/index.html","f6a6dbd151b7bc11e4b4ea8750081e4c"],["/2020/09/19/2020-09-19/index.html","a854f0daef44e4da6677244d5f740cf5"],["/2020/09/23/2020-09-23/index.html","dd032726f705f83aa674ef35a7ea2c8d"],["/2020/09/24/2020-09-24/index.html","6e91b3cd6a900280fd4f58b546f0ad33"],["/2020/09/26/2020-09-26/index.html","95454296c8960a3fd684002a44ad9823"],["/2020/09/27/2020-09-27/index.html","53dd08aefa01550b0c1564bfd1a8d389"],["/2020/09/28/2020-09-28-2/index.html","c0746c8bd1cee4105c61768111463dba"],["/2020/09/28/2020-09-28/index.html","48e43f890d792779abd92ef13c6f341b"],["/2020/09/29/2020-09-29/index.html","2385ed6f1f12d153c3f94eef7ada3d17"],["/2020/10/03/2020-10-03/index.html","4dfbe2552c10b2a4d208efdc38a02473"],["/2020/10/04/2020-10-04/index.html","3a9a1e270ce4d9be41f2540df500896c"],["/2020/10/09/2020-10-09/index.html","82a2b2802a6350d1f83ffd7e9db66ea6"],["/2020/10/10/2020-10-10/index.html","bba9ab99faf23d06f6e55e39048ced2c"],["/2020/10/11/2020-10-11/index.html","e58c36eecd9aa1d9abf03f9dfd05ea37"],["/2020/10/12/2020-10-12/index.html","506b4d48c3ad8dfef75bf63281507541"],["/2020/10/13/2020-10-13/index.html","5b099a1c803e93f36dd2f21618c838d7"],["/2020/10/14/2020-10-14/index.html","5e5ea5d1f51cb4f1368c8dca40de46c0"],["/2020/10/15/2020-10-16-2/index.html","f7b00517c935d549ce0fc91bf296fd78"],["/2020/10/16/2020-10-16-1/index.html","708f20027ceadfcd29f59ec07682226c"],["/2020/10/18/2020-10-18/index.html","77fa0703a4550bb82dc17108eea23515"],["/2020/10/20/2020-10-20/index.html","cd5ae9100318d14bf5f985ed3b202e20"],["/2020/10/20/2020-10-21/index.html","77c03f8ef0b0613a1f0d53b38b22e850"],["/2020/10/28/2020-10-31/index.html","918f2394f91a657ae6a6c9e1a20c2ccc"],["/2020/10/30/2020-10-26/index.html","56537aa8409fa3610fee1a097c654e92"],["/airplayervisual/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/airplayervisual/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/airplayervisual/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/airplayervisual/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/airplayervisual/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/airplayervisual/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/airplayervisual/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/airplayervisual/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/airplayervisual/index.html","cd2dc587b50950d131d30d3a49da03a5"],["/airplayervisual/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/airplayervisual/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/airplayervisual/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/airplayervisual/js/jamsetting.js","7927507e0080ddf55c6d8b5f526bd942"],["/airplayervisual/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/airplayervisual/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/airplayervisual/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/archives/2015/05/index.html","9ee5261dec30ba9cba13c8a1bb45377a"],["/archives/2015/06/index.html","99bfc2411c6c92225b7438219ef8938c"],["/archives/2015/12/index.html","dc327f090f79122364ba28315a10a61c"],["/archives/2015/index.html","bac10ebc147e1bbbae6b0cb46bdb3933"],["/archives/2016/06/index.html","a2ea48705b3be6b98d23be0616acdf34"],["/archives/2016/12/index.html","1f595b6b2810c21cd9b730fc4ae75476"],["/archives/2016/index.html","ec29624ba6dd5769532beae7d34cd7f5"],["/archives/2017/02/index.html","fda2115078d2bf2dc0351f8f93c8f41a"],["/archives/2017/03/index.html","d86d79ddb8bc411b196eea1a80694ae4"],["/archives/2017/04/index.html","0773fe2b807b91e038e8f5259717fdfe"],["/archives/2017/05/index.html","3ba036debbe0cd022ba1d0cb45110219"],["/archives/2017/08/index.html","24bd0099fa55923ef97086156a0fa05d"],["/archives/2017/09/index.html","daf6a936b17089bcd9b090e9ffecebb4"],["/archives/2017/10/index.html","1ac1b35237fd3770892b17c139c9745e"],["/archives/2017/11/index.html","762daa315255f912622c354932146929"],["/archives/2017/12/index.html","4f5854afb3ad95c08b87a12f8f6720f5"],["/archives/2017/index.html","ffc0395aad94d25ca103788116094766"],["/archives/2017/page/2/index.html","d112ca42081dc35bb67967e63832ecd8"],["/archives/2018/02/index.html","df102baadb4520fdd0346f4bd80fc2d5"],["/archives/2018/03/index.html","06a1fd8d24294ac28ecd10cfb2ae416d"],["/archives/2018/04/index.html","a172632bf60e1b06bf20db0401344f1c"],["/archives/2018/05/index.html","e37588ab992ede66e542f8771e0878dd"],["/archives/2018/06/index.html","5a657f1079580ef458e41df717f5e3d2"],["/archives/2018/07/index.html","681461995c0c628713152848fc9413a7"],["/archives/2018/08/index.html","86ed435de263a689d8cd0b46fc1fee9a"],["/archives/2018/index.html","bd3a512644bae99a5cac9c4d9e2f7ede"],["/archives/2020/07/index.html","22a50555fb8f411eaa2af867cf9a1835"],["/archives/2020/08/index.html","d98e0bd536fc3465d617449222ba9908"],["/archives/2020/08/page/2/index.html","a954d1b1158890282e7442ec6c5c32c3"],["/archives/2020/09/index.html","31a819460a02879b065219dbc351b975"],["/archives/2020/09/page/2/index.html","cee0882112cb4dea253c65412adfd659"],["/archives/2020/10/index.html","263f106bf3fd667dc66ab6feabc71b61"],["/archives/2020/index.html","61637c6391c6927c289818b9db4de00c"],["/archives/2020/page/2/index.html","d290135822f82de74aa289919020eab4"],["/archives/2020/page/3/index.html","d4262841514e2f75337b35b92735abc9"],["/archives/2020/page/4/index.html","1d310b465771ef422c4b33d89cccb38e"],["/archives/2020/page/5/index.html","2f6ba68ae5064d7a28b7a7a2ea27194f"],["/archives/index.html","0bc2ac900ae396bac7f7827d90249c4f"],["/archives/page/2/index.html","02c2e1b0467eaa75d23bfcfe58a77ad2"],["/archives/page/3/index.html","980799407b8d22a01c51a284892df906"],["/archives/page/4/index.html","f40365a654480d9d9d216900a1b528a0"],["/archives/page/5/index.html","ce63c690bb77854b2693cda3f33ef183"],["/archives/page/6/index.html","bc796b9ed6a5082e8c749c3ac4ba4438"],["/archives/page/7/index.html","4c81937f4039fee9a938fd32b5ff1d64"],["/catalogtest/index.html","e3b7e9ed466361ef56059a8bf8723096"],["/categories/NHK听力练习/index.html","28c67c69bfcafa0315e3dd093d0b55ad"],["/categories/NHK听力练习/page/2/index.html","396785277d12851e59e76d4f7fa60903"],["/categories/NHK听力练习/page/3/index.html","aae05f65fb0cdab116ed163bc13a79cd"],["/categories/vue/index.html","a5be766004c12facb0e991d8b9877fe0"],["/categories/作品集/index.html","844f518af82b3267737232ca6b5a5d31"],["/categories/学习/index.html","15df5acd540a353970fc86fd7a6d41d7"],["/categories/教程/index.html","74cfc186ccbea579dca5d2f7356d7db4"],["/categories/游戏评测/index.html","410d41ab7a4bac69dbc0637022a89112"],["/categories/生活趣闻/index.html","5f02a5f468f27fbe09789283c3bc3e08"],["/categories/随想/index.html","eb0202f0348613e97f38e6315b6437cb"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/addcss.css","d20fc732e0cc7996bd82c5170b7aaa86"],["/css/background.css","b4e0ca22f9f4e4fb063347fe34402145"],["/css/calendar.css","a1db9e78a03ba862d74ea1f3e675386f"],["/css/cardlistpost.css","d110d491f5a8f21c553e8c0992430b03"],["/css/clock - 副本.css","65602c2385c7eab42ee3804cd6ee0a5a"],["/css/clock.css","333804904271eecabbcc519b4ec76178"],["/css/cursor.css","f514da9c81fb3fcb4f7e9038dfa30874"],["/css/danmu.css","2a5b914a9592bcd353425c6d5fa7af8e"],["/css/flow.css","c771dbc6f0b865b39a9806713dc1e284"],["/css/flow.min.css","7ce838f3563e00e15ca8bd55b6e00630"],["/css/font.css","e91880a0e442f996fdcca1e1eb0f9aab"],["/css/index.css","54ac8e8b0bac3b10a2ab4e099603eca1"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/loadingline.css","bc1ee020a6a11fea17b915b97e6978bf"],["/css/news.css","bc54bafe1b3285eb19c63bb5f0226971"],["/css/shuo.css","8db924024099e925c53d5b3dd22f83c6"],["/css/sortable.min.css","a4c7bddbdc32317dbb63a31244a82556"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/gitcalendar/index.html","d7663334739ee576b9010be9f65d1a85"],["/icon.png","8ec68de45d18642ba9baf2447e62f476"],["/images/201808011428/css/htmleaf-demo.css","a8256346bbe444fe604987f1fffbd31f"],["/images/201808011428/css/main.css","9afb83b1ea44d47f859a57395fe64737"],["/images/201808011428/dist/sortable.css","6b6b3d6f85a3497ee9e71b16b7223f60"],["/images/201808011428/dist/sortable.js","d199f4ab84617e894975f4757dbb3c17"],["/images/201808011428/dist/sortable.min.css","a4c7bddbdc32317dbb63a31244a82556"],["/images/201808011428/dist/sortable.min.js","0351fbccf2faed49062495990e32a14f"],["/images/201808011428/fonts/icomoon.eot","3891455c55b76ce7f7c86bfc33cd6493"],["/images/201808011428/fonts/icomoon.svg","bb97ed129aa43f69280d3085cd269102"],["/images/201808011428/fonts/icomoon.ttf","e46c36b6f94cf81311ffb383f6d32bec"],["/images/201808011428/fonts/icomoon.woff","d1117ddce10d8c7ca18ac089764da08d"],["/images/201808011428/images/item-1.jpg","c4b8c20bee5947eba1541a6a8a60a5ce"],["/images/201808011428/images/item-2.jpg","dfb3e34508b4060140150784cac9658c"],["/images/201808011428/images/item-3.jpg","4f40a1d501cbd4ebcd1f617078fd6a76"],["/images/201808011428/images/item-4.jpg","04a5d629dd413b49e960437cde7dcedd"],["/images/201808011428/images/item-5.jpg","370daf7210529430a4313b29bdad6269"],["/images/201808011428/images/item-6.jpg","93ce2054bde3d9463270d9f481012652"],["/images/201808011428/images/item-7.jpg","6a0345cbc8c6ac5e909f86e6faeeb0fd"],["/images/201808011428/images/item-8.jpg","4dc81e428730ba2b021dd4993385db4b"],["/images/201808011428/images/item-9.jpg","2aa5f8fc43fe5eca9bd8394a36f1b4d7"],["/images/201808011428/index.html","ce7049753d251dcb1793464e4af1b8c0"],["/images/201808011428/readme.html","509403a137ed906fe3e298032b50bd77"],["/images/201808011428/related/1.jpg","f4f33eb12a48c6bda46a1c371db24e5b"],["/images/201808011428/related/2.jpg","891bf31b875ab7588f138185019d5166"],["/images/233.jpg","13e6ddf019e5560a32f3ff82efd22344"],["/images/AMJ1.png","d27a6725d1aaaf5324248da4312ab6c2"],["/images/AMJ2.png","00e22eba5901e5bd674e42228cd5bd26"],["/images/AMJ3.png","c8c9ea6348dfcad3a641899d5b587431"],["/images/FOTO1.jpg","4b6f100861908e2c7044cffbdb4a0c1a"],["/images/Isolde-1.1.6/Isolde-1.1.6/LICENSE.html","d9880f35bf560a6514059db4504d490e"],["/images/Isolde-1.1.6/Isolde-1.1.6/README.html","2557b04021c709cc8cbe0ecd5e996216"],["/images/Isolde-1.1.6/Isolde-1.1.6/dist/isolde.min.css","e859dcc0f568c92bdc4b7be3f3b7d7fe"],["/images/Isolde-1.1.6/Isolde-1.1.6/dist/isolde.min.js","c5f5cc1595efdfde4d0b1b1415c6ae25"],["/images/Isolde-1.1.6/Isolde-1.1.6/docs/OPTIONS.html","3caeedbbf5301672fe3c309634d7e76b"],["/images/Isolde-1.1.6/Isolde-1.1.6/gulpfile.js","8d329f641050ed4e2a93a4cc914bba1d"],["/images/Isolde-1.1.6/Isolde-1.1.6/index.js","9fa8aa3efbd2e9eef8acc5f85752ad3e"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/css/main.css","8697f186bbc389515aa6eab3a5c9316e"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/css/sortable.css","04fca21af7d48dc17591894d17aa8358"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-1.jpg","8e757354b2917abe5dde088cbc82dae6"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-2.jpg","8a5fcc4cebc52caf89eb954285edae6d"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-3.jpg","caeae3d2265de3dad6d4b16dfda1fd05"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-4.jpg","1622226c2f5ef489c55f028caf26bafd"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-5.jpg","677d53cc36ccc311e11cd455fe222621"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-6.jpg","bdedef62cfdcdf9d273fc51a0ace2563"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-7.jpg","2faba84c41dc5f0670efd3cc0b139eb4"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-8.jpg","635c6292e642ab737eed6411c3295da6"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-9.jpg","e1c4d431a72b8bbf084451939ca86595"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/isolde.js","1ddba0575c730fe2318c6450dfc4f403"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/index.html","957fd5b0860d08c07008f0b228b396bf"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/isolde.css","b8011c458b923321a755da760cbeb5f0"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/isolde.js","1ddba0575c730fe2318c6450dfc4f403"],["/images/MVVM.png","ea5a002ee2f85c71a0db51d5adb5de19"],["/images/UT.jpg","367f4e432f9db55a92b2a290c4b0a476"],["/images/UX.png","a183974e958d41d1b6acec70bb7ea00a"],["/images/WindowsTerminal.png","8ac29cb56b8a1768cf7de071e9f1ae6f"],["/images/air-w.png","c1cc32f9d3e17551ca11a7d18a0b533a"],["/images/anzhuang.jpg","912b2489957f8344406edc5e5cebe5fa"],["/images/api-setting.png","2c0bb074390779721cba009e96c5417c"],["/images/apikey.png","1f31121b190eb1f990bcc3e27524bc03"],["/images/b0_img.png","43fcaa3f8b394ca5be957f4b860800db"],["/images/backpic1.jpg","86a6fa88167feb338fbf1a4e9057114b"],["/images/c0_img.png","34397085b4d3349034f9b167469ac626"],["/images/c10_img.png","7938c5b0dd789db4f262e5a618943a9b"],["/images/c1_img.png","95211a0ebf07befde1b11477c3a8185b"],["/images/c2_img.png","456ba51725d669fc4d005787753a6b08"],["/images/c3_img.png","a0aa7dcdd2ed5bccec52c16942036a3f"],["/images/c4_img.png","0869cebb60d00a78936b7498823a39de"],["/images/c5_img.png","533774e840ccb3ef13b46201a54be05d"],["/images/c6_img.png","db9eb681dea0b7911f0b2ba918d86c26"],["/images/c7_img.png","5b9c9e0331aca2a9d47a2730512f34f5"],["/images/c8_img.png","be9107995f185e3bbf7186c4dff69f42"],["/images/c9_img.png","642a2e762b74a28d2426af14f2b864c1"],["/images/calendar.png","86319b08b93be7c8bc47cdba7a169563"],["/images/cataimage/b1.jpg","e4795ce34b4d070d251c37a2ae5e37eb"],["/images/cataimage/b2.jpg","e1a7402c7d111b33d22c187a794e693d"],["/images/cataimage/b3.jpg","c091fe2a8024b2f010911e9af8091147"],["/images/cataimage/b4.jpg","1a2190b3e7ecb404767f029642adb637"],["/images/cataimage/b5.jpg","2683b29be7ea536b2d2c0b428ab87a80"],["/images/cataimage/b6.jpg","8eba752c28594ff5a253a01c0904a4a4"],["/images/cataimage/b7.jpg","9259255b1e1ec36bf92b4f34ad68db7f"],["/images/cataimage/b8.jpg","beaae9e5c735657f2e5bba9eb3deb754"],["/images/cataimage/b9.jpg","7ea8994ee380e84190422ac1b1d93ed8"],["/images/citie.jpg","adea8c4a6fca73e27f5e2aae864dd21f"],["/images/clock2.0.png","0a0f122c7a25262fc02ee99df0ef21eb"],["/images/clock3.0.png","8e04375c183c637b65fb50ed40f46466"],["/images/example.png","aaac9983e5d59f919bf282dcff2edb3c"],["/images/flow.png","adb9dac479e664c3e1b103a2c7fb9517"],["/images/foto17.png","28db4c6608ad1ee6b34238cafab25e5e"],["/images/foto2.jpg","be95b922512d004a61f83c97af3e2602"],["/images/foto2.png","0dc07d4e1b00526a273a89dc8b81548d"],["/images/foto3.jpg","551c0616c92c4ee7cc17dd458b3c46e9"],["/images/foto4.jpg","9d1d9fea759a41afc0061866e400339a"],["/images/foto5.jpg","984f618b15372f37d54f507e6f379f10"],["/images/foto9.jpg","b683fc0b998e80ff8f5a3e45e889807c"],["/images/girlpic.png","ff1e8427ed555af639e6d849f8f648f1"],["/images/girlpic1.png","698e5570e821c3cae643cc9777c2292e"],["/images/girlpic4.png","551882e4b9b6afb79000fd34c0dbf5e5"],["/images/gitcalendar2.0.png","3211a589d3a1d28c8711d095edc760e9"],["/images/headimage.png","332502f36a0297b30cb7969fe6de8451"],["/images/hexo.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/hexoWT.png","c027cc9f5665c7d7ba657e7a4bb40017"],["/images/his-json.png","7d8a71e38ab684107446e5c72c31854e"],["/images/history.gif","0459a3dcf2317253de0b34482880c63c"],["/images/homework1.png","e8d2f64d0785519ea7779016208a2900"],["/images/idea.jpg","5eb08bf6c965588f03c8860f201cac45"],["/images/jiaocheng.jpg","ad0b07db72a1eae964ab067511b756f3"],["/images/key1.png","f2a370e02ad6c5a101db20b47a9a0008"],["/images/key2.png","21dc40bbe0377cd9fe85a9cb431c18f0"],["/images/letter/a.jpg","0d4de9f533da8b2de81ccc509657f853"],["/images/letter/a.png","213b394b0800f642d758368779d79942"],["/images/letter/b.jpg","66fee2626ad0a71d42dc6f0d4b2c04a1"],["/images/letter/b.png","581ea16ed4c1d7bbc1c0dca3929051a9"],["/images/letter/c.jpg","121a016fcce1ed141082dc6254f5abbc"],["/images/letter/c.png","3d8cf0fa352d68dde80b3310bd702ac4"],["/images/letter/d.jpg","6e1db729489ebbd94496f2134b18d4ce"],["/images/letter/d.png","c48ca73078c850ff606cad10f11c1c56"],["/images/letter/e.jpg","ff503c208a88b211e598b92e6969d0e7"],["/images/letter/e.png","37fc8cdc838e64efe77305fa30581060"],["/images/letter/f.jpg","429cc37ac2269be8797c969b66a81339"],["/images/letter/f.png","12adae8b53d9e6048dbbeeb3f91cebee"],["/images/letter/g.jpg","0b8098e60deaf670dc1d9fba77714341"],["/images/letter/g.png","575f1073e0f689ae0d84803b8c979f21"],["/images/letter/h.jpg","9002009c053237f1ef6724e8be5f2b37"],["/images/letter/h.png","2e7173749a66cc1d8630e69261e56464"],["/images/letter/i.jpg","431837c21dc08954ee4acb2b0bd1d9e9"],["/images/letter/i.png","37a8a26bace6560ddb9c85a8605da81c"],["/images/letter/j.jpg","a83cac86235866d82053ea127940ccc2"],["/images/letter/j.png","8aad49c7f55d6d365cbbf080e7ecbc30"],["/images/letter/k.jpg","a7bd4a5ab89ecb4ad1d391c73a2c3034"],["/images/letter/k.png","2488883f77a6b77fafaaf02cbca9c319"],["/images/letter/l.jpg","b87d0637d8edd85bbc5a144d8d49faaf"],["/images/letter/l.png","41d97d26f91501634e73da0dbd2d9ad2"],["/images/letter/m.jpg","7a29bfd3c2da75f6a219daa19b4bf01a"],["/images/letter/m.png","bbce5ca54ef802aa23e5a406fb419e9c"],["/images/letter/o.jpg","9f29dbd5dd07fb04e610cd0a8fc83074"],["/images/letter/o.png","8242f141981f606ca698ed32df2a17c7"],["/images/letter/p.jpg","325a87a9fa352c7ed5eaa01f24018b63"],["/images/letter/p.png","8d457fc405de63b537e01226a73d3287"],["/images/letter/q.jpg","57921474cb1e9f4352df281856a10f5e"],["/images/letter/q.png","93255d49876fc4cd9260383bbe30910c"],["/images/letter/r.jpg","0b634e85fe24fea66c9fb3d1eaaf1296"],["/images/letter/r.png","ac4be3c684d8aaf7f875993dd12c4fc0"],["/images/letter/s.jpg","e803c253e88e6577721a63d6929a53fa"],["/images/letter/s.png","7d8e6a7981edc0045d41647b6547e755"],["/images/letter/t.jpg","ef4b9b12431116d53994185248d0e504"],["/images/letter/t.png","da9331bb93c0285bb9ae9b98350d4db7"],["/images/letter/u.jpg","4b5fbe5c3b7414ef99e46dab2b9da71a"],["/images/letter/u.png","693fb63a9f05fee9abf4f8d65380fb2f"],["/images/letter/v.jpg","85f1071ab973e79017eeaf5eb726d0f2"],["/images/letter/v.png","fdcd25e6d19bfa3fe7cf09a9047235f2"],["/images/letter/w.jpg","d39f91c9e1be9ab39ca46218fcc7faaa"],["/images/letter/w.png","2d79b92721fd2dfe4e19d8a57ccf9473"],["/images/letter/x.jpg","e2ce4f0631d5002a79a5930ccbdb8449"],["/images/letter/x.png","c0acbad3e4ddaf59a95ecb6d6509bcbe"],["/images/letter/y.jpg","b2e7b48748a70f0dc8c4445bf9069196"],["/images/letter/y.png","fc61ea05666257f2c50f08918970a753"],["/images/life-cycle.png","02f39ea5c041d45938fda4b50f234cb7"],["/images/life.jpg","74d2d9c5f48ec59e3badeec690941812"],["/images/listen.jpg","9d4f73cd5634f43deaed4f9aca03f9a3"],["/images/loading.gif","ffa0804a5d99e2d5b39e05cda6d6b28b"],["/images/magnet.png","4899a924f3de0d19dbe0415128c07d65"],["/images/magnet1.png","8d010eb86ca943e036adaa7de57aee7d"],["/images/magnet2.0.png","54fe576f174d2b6917fef89f40ac5975"],["/images/magnet2.png","293cb414a8ab93b43bde3bebf9cf0cfc"],["/images/magnet3.png","1923148630e2e094ff80bf35aa604c10"],["/images/magnet4.png","9bb4f963ac1c09f02d62525f513f492c"],["/images/meilu/1.jpg","cd67abcc3f543b5c66adc4f9d9c5c628"],["/images/meilu/10.jpg","ac9fb2711e477b5db1c3acb57e899045"],["/images/meilu/11.jpg","364caad6dfc356a3dc630fa067e48e88"],["/images/meilu/12.jpg","274767e5708f79934e5bdbf73eda8f0d"],["/images/meilu/13.jpg","dcab12b84454770b208913db63e825ac"],["/images/meilu/14.jpg","037cdd048284e621f27e17a2c59e8ea7"],["/images/meilu/2.jpg","f6cdb65ae3fad4523b32f5ee38696b60"],["/images/meilu/3.jpg","9e5df3612c2d93bf57313186c954aea5"],["/images/meilu/4.jpg","69ef2d6f4bcd79cf4b4e672b60c6751e"],["/images/meilu/5.jpg","ce81ca16def7613b7ebb368fb554f14f"],["/images/meilu/6.jpg","cafd5b62305f806754a75cc3af8c3b77"],["/images/meilu/7.jpg","b8ae865d386e1e713a6034da6b090c10"],["/images/meilu/8.jpg","afad7a7bf1066c817a8d2e7566bc780d"],["/images/meilu/9.jpg","72f9649f56b564eacf23ce3dacb88029"],["/images/metroui.jpg","5503bfffd450d9ab572b67ea00941571"],["/images/metroui/1.png","79a03b408c19c74eeaa8ff6e17a03f9d"],["/images/metroui/10.png","8309fed71a15c78f2dfa3af1ff75a5f3"],["/images/metroui/11.png","aaf1a007cbae12f93cc2688bace18d28"],["/images/metroui/12.png","0758ea282c3828c47e5c64520ff85783"],["/images/metroui/13.png","12ca7b511927cd4b26e97f3b20908a32"],["/images/metroui/14.png","f44ba7680f7b36df437e2ae2588d0565"],["/images/metroui/15.png","e8927c78b125b805af7aa86fee815ab6"],["/images/metroui/2.png","e604d3c662b996f06f22753ba9ab379f"],["/images/metroui/3.png","664e3b7490f2f95d5547b8ba79a65456"],["/images/metroui/4.png","c0f255344cafc303a1d9c7404da37149"],["/images/metroui/5.png","da2074cdb1298aca826abc1a5c441300"],["/images/metroui/6.png","efef2f087127614b4e03bcbe9a347018"],["/images/metroui/7.png","a4d34b1a2dbe3a58d3a92276880be039"],["/images/metroui/8.png","1d34a626bbaa898a60d4501936bcf962"],["/images/metroui/9.png","0663697c1667b377fe2623bd65e00b31"],["/images/metrouilogo.png","aea81b42d1c2c96440f74cf56ad82e2f"],["/images/nhkimage/2020.08.01.png","af4c55b2ae1d5ab2f56c75a87fcdfdb3"],["/images/nhkimage/2020.08.02.png","c355d41b90f5c65823f96c5f6868ce53"],["/images/nhkimage/2020.08.03.png","fddcedb40d7f28b2ccb90814351ad5c8"],["/images/nhkimage/2020.08.04.png","8b4518ec5a8513f442980ed7167136b1"],["/images/nhkimage/2020.08.05.png","590abfb19334b0c3cee5a005674f2253"],["/images/nhkimage/2020.08.06.png","d469e21100c42435e88f2bdf07f93da1"],["/images/nhkimage/2020.08.07.png","3ca9e2c8b8a09a38423d73cd36e8de9d"],["/images/nhkimage/2020.08.08.png","4420c2d899fe4eb90c48bae0da8418a2"],["/images/nhkimage/2020.08.09.png","df14be338f9c920818dd1daa6aa955ee"],["/images/nhkimage/2020.08.10.png","c4e2ed023cd3dbfd4986add35ca9357c"],["/images/nhkimage/2020.08.11.png","cf562339e57f673d394f3e6cdd1f60cb"],["/images/nhkimage/2020.08.12.png","81dfa179fea3052ddcf73912ea368f67"],["/images/nhkimage/2020.08.13.png","8cf26c2642e7a27cbd86fcbda8bae8d9"],["/images/nhkimage/2020.08.14.png","d88eeb678b3ed3651d597e61957e264a"],["/images/nhkimage/2020.08.15.png","b9879f193867edcffeefce62c9dc7153"],["/images/nhkimage/2020.08.16.png","46cb914aa1d556561897767ec9ff66a0"],["/images/nhkimage/2020.08.17.png","ea1af9645b5cc9cbaafe70a91dd15cca"],["/images/nhkimage/2020.08.18.png","e87e4de39a6f06cf4283a63af92dd8de"],["/images/nhkimage/2020.08.19.png","8001a951513b542a98ce1151be5bd87b"],["/images/nhkimage/2020.08.20.png","4bc8fafa3ecce30d340b1350715d78e3"],["/images/nhkimage/2020.08.21.png","07ad1337e127922abff27da6c672549b"],["/images/nhkimage/2020.08.22.png","b2b5d53ba46015f64048f9d803b12179"],["/images/nhkimage/2020.08.23.png","225af8c0cabe5218ec634d1b8815fd95"],["/images/nhkimage/2020.08.24.png","1d54a484a6e2395aabe9be005cd90361"],["/images/nhkimage/2020.08.25.png","8008ba169cfce0ef2041329cd29b6b77"],["/images/nhkimage/2020.08.26.png","72a2b8094003a54c97a34ea97cf21bc3"],["/images/nhkimage/2020.08.27.png","893407e604804d215c8fef8bcd5f2684"],["/images/nhkimage/2020.08.28.png","b542280b7341759890a99cbd44d822c5"],["/images/nhkimage/2020.08.29.png","620e2e7d4772e39615fd1a88cdf49717"],["/images/nhkimage/2020.08.30.png","f645d7ba2dcb506f9ec6fb9244425ad7"],["/images/nhkimage/2020.09.03.png","c5262f3aa87190e0273383ea1e445681"],["/images/nhkimage/2020.09.04.png","c07149c32aa41c03bc7dac82a713f6b2"],["/images/nhkimage/2020.09.05.png","4e43556e1cb3b7f4d75f0f6127616a54"],["/images/nhkimage/2020.09.06.png","1021d2ae04a7f109404f857a2a7629cf"],["/images/nhkimage/2020.09.07.png","db9827e9f0a4cf1401b559b4644a0204"],["/images/nhkimage/2020.09.08.png","efe1030b73dc1c01f169c3122a194426"],["/images/nhkimage/2020.09.09.png","f6ba3a1c6cdeff88404ebe2a646f2eb5"],["/images/nhkimage/2020.09.10.png","3471b05d02113517359a9e2167befcfa"],["/images/nhkimage/2020.09.11.png","921a541a8bffb1aa436df2eb6db7c99f"],["/images/nhkimage/2020.09.12.png","a51f8ebaddba69bb80f9259a30f17e65"],["/images/nhkimage/2020.09.13.png","0399889200493cd2154ffc407e2bc400"],["/images/nhkimage/2020.09.14.png","eaaf3da69a39ed316b7fc8c4d409bb0f"],["/images/nhkimage/2020.09.15.png","5774959ea4061c9298ea174f0862cc3a"],["/images/nhkimage/2020.09.16.png","0c5a00f74020740fda589c02e4b3f917"],["/images/nhkimage/2020.09.17.png","b5aef734e3a7db4862ca3fe4e6769dc2"],["/images/nhkimage/2020.09.24.png","5982a7b3843f4ae43b2b4bc4b0c577d6"],["/images/nhkimage/2020.09.26.jpg","c6415af781fbdd36fdb034f74646129b"],["/images/nhkimage/2020.09.27.png","27aa6f6a8d5534ccd99cff261dcd9eb6"],["/images/nhkimage/2020.09.28.png","0f4318d1ff17a33de364432a1c44b5ad"],["/images/nhkimage/2020.10.09.png","6408d9f7e66fdeba8b9207939a08cf8d"],["/images/night.jpg","7c57432e644d24d5738a56459bea0e7e"],["/images/notop.png","d25c272e5ce312a880e04ce8a0b27683"],["/images/pasted-0.png","552608d8f6e39369aa30c6e332a32826"],["/images/pasted-1.png","baafdacee93c99e99418aaedbf524fda"],["/images/pasted-10.jpg","395cff6f64ab5df19baa3572ac98e541"],["/images/pasted-11.jpg","56e5df07c96634638abf7995b25c81ab"],["/images/pasted-12.jpg","61b3f803b85ce3640d7a9ba7efb9da6b"],["/images/pasted-2.png","2f410e53c811f92a6135f48857776f5e"],["/images/pasted-3.jpg","bb5717e691e87355e7d63a5f3a87ae62"],["/images/pasted-4.jpg","10041d0e3567b24b81222ec5075d6492"],["/images/pasted-5.jpg","ac5047a4b48c6cdaee86fa1863e33904"],["/images/pasted-6.jpg","1556ae8d3ad5713d60237ee4d10e81f0"],["/images/pasted-7.jpg","913fde1686587646ddc663bd810cc81d"],["/images/pasted-8.jpg","fc83268081fb4b6b6ecb1ffa1ec5af7f"],["/images/pasted-9.jpg","25e0fa3496591501f5c29d0b802b77d2"],["/images/pet.png","2b8c121909497e57057478856fe48a94"],["/images/pet2.png","dfb1d6a17b527ccc0c600e6ad31f55e5"],["/images/pokemon-js-master/pokemon-js-master/README.html","fcba0b34b47904fb7bee25051b26bd78"],["/images/pokemon-js-master/pokemon-js-master/fonts/pokemon-italic.woff","78e86827d84b43c015a2f4c2c6a373dc"],["/images/pokemon-js-master/pokemon-js-master/fonts/pokemon-italic.woff2","6eed2c3b876039e9332617cf11051bde"],["/images/pokemon-js-master/pokemon-js-master/fonts/pokemon-normal.woff","09442a9708ccafa61a894d703b10a45b"],["/images/pokemon-js-master/pokemon-js-master/fonts/pokemon-normal.woff2","f82c92d44c94dcdacf907a1be4fac138"],["/images/pokemon-js-master/pokemon-js-master/img/ball_empty.svg","71b5bd4f59def835f94989825d23a737"],["/images/pokemon-js-master/pokemon-js-master/img/ball_full.svg","7e11059b84cef189cbae0694b31e3161"],["/images/pokemon-js-master/pokemon-js-master/img/blue_balls.svg","86a4983e08483856c2b69ba22b3b6605"],["/images/pokemon-js-master/pokemon-js-master/img/blue_front.svg","67d4551115bd9619421c8b279a02da21"],["/images/pokemon-js-master/pokemon-js-master/img/blue_line.svg","99e3256fe421cea565eb6c8e238b4e1b"],["/images/pokemon-js-master/pokemon-js-master/img/eevee_back.svg","be41cc88ba29dffed133934f3fd81092"],["/images/pokemon-js-master/pokemon-js-master/img/eevee_front.svg","67e75860167c118c80b43e9bc77f8dd1"],["/images/pokemon-js-master/pokemon-js-master/img/frame.svg","9ba744fd242d76220503200dc263d225"],["/images/pokemon-js-master/pokemon-js-master/img/hp.svg","1b9572b00909d59dade3c5d9c7484a94"],["/images/pokemon-js-master/pokemon-js-master/img/level.svg","ce8d20ff7ae3e66decac50b78ca3b86b"],["/images/pokemon-js-master/pokemon-js-master/img/marker.svg","3b8296fb02592d99e7a7aa29b1d41742"],["/images/pokemon-js-master/pokemon-js-master/img/pikachu_back.svg","41f62334dab4ff5ad455bf3792243611"],["/images/pokemon-js-master/pokemon-js-master/img/pikachu_front.svg","496206572029bcfaebfaed794ed1d015"],["/images/pokemon-js-master/pokemon-js-master/img/pokemon.svg","f015c9582ea62070300062fe2022dd37"],["/images/pokemon-js-master/pokemon-js-master/img/red_back.svg","1e4dc80c13eac754369017dbd19c9086"],["/images/pokemon-js-master/pokemon-js-master/img/red_balls.svg","35d2d97a11a79232ddeb90e052af95cc"],["/images/pokemon-js-master/pokemon-js-master/img/red_front.svg","b4fc7ab1d0a1254c453ee3ebc28db79f"],["/images/pokemon-js-master/pokemon-js-master/img/red_line.svg","fd9e3b97a6264fc5e5f398ce854d24b7"],["/images/pokemon-js-master/pokemon-js-master/index.html","4c4329fcf6c8f0d611ca81b7c6d407a2"],["/images/pokemon-js-master/pokemon-js-master/jquery.js","ac5017a6c6a77a3db6f989b281084b6f"],["/images/pokemon-js-master/pokemon-js-master/main.css","3e4465c57f14ab0e02b5b2a805372c0c"],["/images/pokemon-js-master/pokemon-js-master/pokemon-min.js","26e1d8483c8d86ab39054a609106aad0"],["/images/pokemon-js-master/pokemon-js-master/src/pokemon.js","f43de536cebe95ac1b19b905cbc9d889"],["/images/pokemon-js-master/pokemon-js-master/src/promo.png","abf2d1d338c0a9080c1a9eab7b35e6e0"],["/images/pokemon-js-master/pokemon-js-master/src/screenshot_1998.png","046079a29e3df9b95bde3c3c58647d43"],["/images/pokemon-js-master/pokemon-js-master/src/screenshot_2014.png","828e18e5add8f29486ba1945de2bfb7f"],["/images/pokemon-js-master/pokemon-js-master/src/screenshot_2016.png","69dbbe3b5b622cdce0fa82aca162129a"],["/images/ps1.png","0917ba91f21b6944dc08d35c41a326d2"],["/images/psb.jpg","6a27c58337875c776af0a7667598b401"],["/images/pubu.jpg","c5f6319fe03fb1fa52bb67097b1f22f7"],["/images/quse.png","7cd1ec12b804305430cb4cdc09c7a893"],["/images/rain.jpg","9c26acc44c692b6a63e134be07b07c18"],["/images/rainsmall.jpg","e8c91c40bef224fc5a3942bd0d007b84"],["/images/shezhi.png","281bf545f6a4024e2d0b7120bc398a21"],["/images/shuo.png","9cce9df6e32e00e49471b9a9f089f6aa"],["/images/shuoshuo.jpg","c5752c104cddc0884d3f50b4dca01322"],["/images/soul.jpg","d97b4099c0728ff6123d006fa62db86e"],["/images/study.jpg","a9b1cf95ee6bd9f3913e8ec6a6a6f44f"],["/images/tianqizhizi.jpg","dd48d78b4eeaaa52578352f9ef570b14"],["/images/time.jpg","b8513da2d044befd353231d3e51db22e"],["/images/vue.png","0d2b5680bcb76df1333b85fad58634a7"],["/images/vue1.jpg","8cbf18302c6fa72e2a40d0cca0832213"],["/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/03n.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/04n.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/images/weather/09n.png","512894b4a127a42e060e237674b8d145"],["/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/11n.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/13n.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/images/work.png","e521cf5b834292fde1c50e0a0f5802f9"],["/images/xiaoguoyanshi.png","994a3b710d36df0a4630cd9a768c7f7b"],["/images/xiaoguozhanshi-m.png","1fefca18214fc4889d1bb76b81887c9d"],["/images/yao1.jpg","9dfddaf8c121fc8db788a87d133d6376"],["/images/zfe.one.png","b41f689341882058ffb28c4cee499bde"],["/images/下载.jpg","79c7247da282569a05bdd46aa43b93b0"],["/images/幻想终结之日.png","0025c4d3973bdfedb80db3f78c59fa47"],["/images/时空战纪——游戏建议及意见①.jpg","1337457f14a8dffee66d94f8915b54ff"],["/images/简历.png","d70507ee4615c9e324578c0d777e6855"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","c8b0342a982106fb9b06b4f6b03df42a"],["/js/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/APlayer.min.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/airvisual.js","71cf86bfd452ca01d92438d8266416ee"],["/js/airvisualapi.js","6931bebe1696688d109963187fc2eace"],["/js/artitalkkey.js","ad2c74320c63125a36319659657d2886"],["/js/background.js","94c8410b174f58594cf81ec99054968b"],["/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/js/calendar.js","a58e02711cc6dec4dc04257e555b8923"],["/js/catalogMagnet.js","0387c6ad152e7a6076cceffc7420be77"],["/js/clock - 副本.js","405186e7a9d73221d2d50c0dea2852d0"],["/js/clock.js","2fdceb94cc57b551cd245b0001927b66"],["/js/color.js","3730bb4f7b185e6f5130ac28bace968b"],["/js/dan.js","6b6ae6b7f1b42dd4857541f43b2bb733"],["/js/echarts.js","dc1227b1eba1ba47fd185a387d0a7d37"],["/js/gitcalendar.js","fadfa8a42272cd322118653dca512a7a"],["/js/history.js","20459f7db325e597e64903f4c0d19306"],["/js/historyroll.js","a3e9ac376106816c50a61f9f4306d671"],["/js/jam.js","462c07d3b2e0f20394d994bbcfae37cb"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","f5b2bd10be1e09516c539afa2197a8d7"],["/js/news.js","efd3937b3e673d42d100e8acef0e828b"],["/js/rain.js","f656dc28e4ab5c3f8414d35f683278c1"],["/js/rainremove.js","ceacf82842b101f7e54a2aaf5f4bb9cb"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/shuo.js","1076b1ef51358cc11b6ff3bab25e15d8"],["/js/sortable.min.js","0351fbccf2faed49062495990e32a14f"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/js/vuegitcalendar.js","664c0f121af9131af267c1434225b5e4"],["/link/index.html","8c37e1c419f9bfd2f2f5ab878a75ef0d"],["/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","5d0973c618e6fb27dcaece3e376b6012"],["/page/2/index.html","e77a8515f6762b6ecd91403c968264c2"],["/page/3/index.html","9f182211aea68f15cce441eca70d4ba4"],["/page/4/index.html","e29d2e6d3bcb6ba7d2e9b4bcb32de892"],["/page/5/index.html","0e76f2a190285efd9c01102472b0534e"],["/page/6/index.html","bb533fb26f10e4dec05996cd3f0bf968"],["/page/7/index.html","396ecc634b055d84c719b40d13eaa5ab"],["/research/index.html","ac30d78e2ac6a4d4dc8365b6734b5d9d"],["/sw-register.js","e7b587b4dd1f863cdb543465fa581443"],["/tags/Butterfly主题/index.html","feef08f0f7a838ac81633d80eb2fd6a7"],["/tags/DIY/index.html","e9ab2430bcb726f7f5a43b639f9b3956"],["/tags/ICT/index.html","7287f6ac5c6385c3db457d9d3d5ce15b"],["/tags/NHK听力练习/index.html","e9fc7c6f2787b447e1feb2d34d1f0d55"],["/tags/NHK听力练习/page/2/index.html","ab8c7e9ff9e0461ce80157f84256d5c9"],["/tags/NHK听力练习/page/3/index.html","b958b1743a2443420998b5e32c41f62f"],["/tags/metro-ui/index.html","594c8fcd537b41495d18816b81ca0480"],["/tags/vuejs/index.html","55c8b39def3d59a32677202ae29f7ed5"],["/tags/お盆/index.html","370f97ae0e714c616a7cc7cfab6aa724"],["/tags/世論調査/index.html","69423722d6fa8adb82c76c6f34e894d6"],["/tags/作品集/index.html","e462acaa62bc4e0c94181dd17be91546"],["/tags/农业/index.html","08e5089cdc506d20268a7bde001edbca"],["/tags/历史/index.html","e7ea7ad66a8e35a52357e4fa2ce62155"],["/tags/営業時間/index.html","0410020c0d57b3fbe625a1690080b4b0"],["/tags/国外政事/index.html","e8a1cc7df89bcedad5d41d3e0216ac55"],["/tags/地震/index.html","29117560e178e9320e669a8c304ebaef"],["/tags/外国政事/index.html","883230462ecd8a4a5b31cd485d4b91e0"],["/tags/天气/index.html","67d44b257648eeea058fecb4dc283d7f"],["/tags/奥运会/index.html","47e978f3653655e1ccf31d3785fa29ba"],["/tags/学习/index.html","dc8be6215487d3798cd3b50bf7299edb"],["/tags/学习/page/2/index.html","29855a0e1e0eeea66d8d121555234b06"],["/tags/就业/index.html","dc8f88ad622389dad7335915cda72faf"],["/tags/庐山/index.html","ea9d0bdf07bbbf54c84b466017babc53"],["/tags/座礁/index.html","930929e2094b2bdc519c0b9906f1b8c3"],["/tags/政府/index.html","a0781069ad73fe5bfe5f26a25bc609e2"],["/tags/政治/index.html","c92ec615527e89a6fe3492b4fde5347b"],["/tags/教程/index.html","410ae4b2627ba6e1afc727225a914890"],["/tags/日本教育/index.html","be6d1a3dc8a278b49ee7673a84d057b7"],["/tags/民生/index.html","f7daa75f1ff05c57c8a0cd6ffa4b9fbc"],["/tags/游戏评测/index.html","6a28b61fee390d1b5ca435c458e7ff4b"],["/tags/游记/index.html","252ef1f119b28e6b8d8c988aad51f4d3"],["/tags/生活趣闻/index.html","d331856574a5b2463ddf9502a9520ae4"],["/tags/科技/index.html","1c3e0dd55b96a0b724d0d531dcc0cd33"],["/tags/经济/index.html","0b32dd97fe1786567f8b581712313329"],["/tags/网络教学/index.html","8995092e95c6d686e596af778bb11ec1"],["/tags/舆论/index.html","1bfe13f9445769abdef358f376732dd2"],["/tags/虚拟现实/index.html","6526ef3b1b4e60721926a7b6cd74d818"],["/tags/随想/index.html","0d31706b85cb1011dba5cb34c468242c"],["/tags/障害者/index.html","bf9242a5ab57b63fa7efab527dbbb53f"]];
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
