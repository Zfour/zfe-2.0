/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/05/20/2015-05-20/index.html","d658906043c4e043c0a777ab63187f47"],["/2015/06/16/2015-06-16/index.html","4645bfc605cd7c479a5ee10a1802515b"],["/2015/12/12/2015-12-12/index.html","b535e5b8a7bc2b320184b882342b6dc0"],["/2016/06/08/2016-06-08/index.html","15cddb94d1d5cbfaeb9c7e4287d1192d"],["/2016/12/18/2016-12-18/index.html","61bd0e7a30b17544d8cef6bafa846489"],["/2017/02/17/2017-02-17/index.html","05d18e131fe2b3dd7b7bcafeae3211ee"],["/2017/03/17/2017-03-17/index.html","2efd16d57fd146acd7bbcf25c7492273"],["/2017/04/06/2017-04-06/index.html","d5b64b39cd9189b74c82aaeb0869cdaa"],["/2017/05/17/2017-05-17/index.html","b210171b772cef84834b41d417e6fb45"],["/2017/08/15/2017-08-15/index.html","e6c9e7557a95ef02e95c7ff5136366e2"],["/2017/09/16/2017-09-16-1/index.html","57d92dbe939d1a3690af37c293c2883e"],["/2017/09/16/2017-09-16/index.html","cf40bbb4e50386a4d90b72ce628dd45b"],["/2017/09/21/2017-09-21/index.html","20913ea937a861c2563768e1f88c1aa6"],["/2017/09/23/2017-09-23/index.html","9c9777c7844a49cfb442076955d7f451"],["/2017/09/26/2017-09-26/index.html","257b82d776aa051492551b7b26163573"],["/2017/09/27/2017-09-27/index.html","6e4181e583f65f5bcb5ce7b6fe3dc113"],["/2017/10/04/2017-10-04/index.html","b5174940cd2d143da62a028057cc9067"],["/2017/10/08/2017-10-08/index.html","2b2eac4478f3582a54af08296582bc3c"],["/2017/10/09/2017-10-09/index.html","a8be9ddaf98dc680bdcdb4b9f4918a5c"],["/2017/10/15/2017-10-15/index.html","c52b9c605289532bf9f58fc283db788a"],["/2017/10/19/2017-10-19/index.html","687691c2343371ffff962e7cce822449"],["/2017/10/23/2017-10-23-2/index.html","c008b6dbebf1e01c9538badcf8216571"],["/2017/10/23/2017-10-23/index.html","fb49b0ecb7fedfbf810032bec0feffa4"],["/2017/11/08/2017-11-08/index.html","97247c3d1043bc75ade7eacc876ef92f"],["/2017/11/12/2017-11-12/index.html","964b0385f55bd2aab3d572680ff2f280"],["/2017/11/15/2017-11-15/index.html","4719641eda446b7421b7fe524bbe9155"],["/2017/11/27/2017-11-27/index.html","cc7841d72c16e7e01e4fbadef2defb76"],["/2017/12/06/2017-12-06/index.html","21bdb5279a7ebb4ba2b0ea13bf21c523"],["/2018/02/12/2018-02-12/index.html","ebc49d931076ade6e9c7252bd090e5af"],["/2018/03/26/2018-03-26/index.html","04496744c48d1a6fdc58f39f0983c7dd"],["/2018/04/02/2018-04-02/index.html","83cc3547e8dfdabc2449d879ad13a364"],["/2018/04/24/2018-04-24/index.html","e790f547dd4b28a84ffc69812102f367"],["/2018/05/18/2018-05-18/index.html","de0380fe0af87aa5739f7a9dca454329"],["/2018/05/23/2018-05-23/index.html","a47fd8daf0521ea52546cb73ddd74a7a"],["/2018/06/08/2018-06-08/index.html","ffc4f580bfc6c0b005ddd515d2cfa665"],["/2018/07/01/2018-07-01/index.html","9a71b2b04884c4de5c18d0e0da746b47"],["/2018/08/30/2018-08-30/index.html","bdcb936bc737770eed11fbd495b66c78"],["/2020/07/20/2020-07-20/index.html","8e7b351e1a9be70f12a82abeb6742943"],["/2020/08/01/2020-08-01/index.html","26630bd9debe1f6146090f5a32973ccd"],["/2020/08/02/2020-08-02/index.html","f0406b72ff285a09d31ff310540d40a9"],["/2020/08/03/2020-08-03/index.html","3543316a3c9c14be1eee99d20b834817"],["/2020/08/04/2020-08-04-1/index.html","91f7b46006548d93ec3b37a36878ff4d"],["/2020/08/04/2020-08-04-2/index.html","b0a321ef451934bb4595ba20612b071d"],["/2020/08/05/2020-08-05/index.html","929851e85bd34e07238395f28e37dc3f"],["/2020/08/06/2020-08-06/index.html","45b5dcfa0cbd6390624016eeef862744"],["/2020/08/07/2020-08-07/index.html","8a6dfee5773001051fbfbe0fa121f826"],["/2020/08/08/2020-08-08/index.html","ab7cf55279859a7150683d42234f88ca"],["/2020/08/09/2020-08-09/index.html","bad50933f8ab35496a00f0d9f12a0f59"],["/2020/08/10/2020-08-10/index.html","ed5612873117c35fddb26e0f094e482d"],["/2020/08/11/2020-08-11/index.html","8cdac8373f94023264c5539d7c3443ff"],["/2020/08/12/2020-08-12/index.html","324baf7a06961fa116b373e66776c554"],["/2020/08/13/2020-08-13/index.html","38c6a3e9e3547029135ec3583da53c6b"],["/2020/08/14/2020-08-14-1/index.html","e6cd1599285a0dccea6b49f07c878132"],["/2020/08/14/2020-08-14-2/index.html","52f5a40bdc1312f3744ff2d0acfea790"],["/2020/08/15/2020-08-15/index.html","889f010101119ec451a46ce994ea8683"],["/2020/08/16/2020-08-16-1/index.html","8c88671b8eb2aa4b7d70d530e4e62050"],["/2020/08/16/2020-08-16-2/index.html","39a2898a3432a692fbb3d835c56575ce"],["/2020/08/17/2020-08-17/index.html","4ca66f67cff62227c2f0b23cdafca6f9"],["/2020/08/18/2020-08-18/index.html","400f8a566fcffa995a169fe5339f6c1a"],["/2020/08/19/2020-08-19-1/index.html","2691575d0e12d6b588ed2a0669c78315"],["/2020/08/19/2020-08-19-2/index.html","7e97eca166ea858bac20a669f047e774"],["/2020/08/20/2020-08-20/index.html","6e45f4323dec30122a9756596d607b8a"],["/2020/08/21/2020-08-21/index.html","502af025081335d2cd6411c8db0e291e"],["/2020/08/22/2020-08-22/index.html","cde1a4402f5b42be9842532902b67929"],["/2020/08/23/2020-08-23-1/index.html","322f2faab3adeeb12a7fb1f7a3ee6fb4"],["/2020/08/23/2020-08-23-2/index.html","7759bf67dc3ede1fb165b69ca833a643"],["/2020/08/24/2020-08-24-1/index.html","b66261426673d7b3322259466560de68"],["/2020/08/24/2020-08-24-2/index.html","8a405f51f5165bb54b317b0553b8d158"],["/2020/08/25/2020-08-25-1/index.html","5deb8b3e745af57f493360ad3295db36"],["/2020/08/25/2020-08-25-2/index.html","e809e035db858f16b99ac249a437a7a5"],["/2020/08/26/2020-08-26/index.html","87c922c1d8aaa38d9b7065f594f8826c"],["/2020/08/27/2020-08-27/index.html","248e5ac8078f9fefe94518d9c91494e0"],["/2020/08/28/2020-08-28/index.html","9740bf0346a5e667aacd3b48ccfdef7c"],["/2020/08/29/2020-08-29/index.html","db2a7a251e6af94615b43a8e347cba4a"],["/2020/08/30/2020-08-30/index.html","3dd14afce9a9128cd21d2b82f6039938"],["/2020/08/31/2020-08-31-1/index.html","2a8c637c7f99968540a0843266155ce8"],["/2020/08/31/2020-08-31-2/index.html","b728b03fa578998244612eecf07c1d29"],["/2020/09/01/2020-09-01-1/index.html","b7dececdf8da8a632abf4ceaaf7bc550"],["/2020/09/01/2020-09-01-2/index.html","35a0c0f77ff2bb85c5acff414d5b35ad"],["/2020/09/02/2020-09-02-1/index.html","cfd432ebe1385d7768751b875496ca39"],["/2020/09/02/2020-09-02-2/index.html","0aeb54d77fa99547cb6e962086b3e5e3"],["/2020/09/03/2020-09-03-1/index.html","55fefe7af91d9955c4d03045d27b52a0"],["/2020/09/03/2020-09-03-2/index.html","ce19ffbc7fef0b4a262d082f0f627722"],["/2020/09/04/2020-09-04-1/index.html","6041b794dc61ca2f9318f2ad934f81b7"],["/2020/09/05/2020-09-05-1/index.html","3d8726ad4aa5b71c558002c09a5a29c7"],["/2020/09/06/2020-09-06-1/index.html","68ad63b250256f888eac8f6139148567"],["/2020/09/07/2020-09-07/index.html","8c0956a8283f0482d266284a0f9b01df"],["/2020/09/08/2020-09-08-1/index.html","2cfa1667c55ad435077e26254489bad9"],["/2020/09/08/2020-09-08-2/index.html","7a0d481ca73125692802448bfd0da413"],["/2020/09/09/2020-09-09/index.html","1a818c89b1609221db1a2418ea3e6d32"],["/2020/09/10/2020-09-10/index.html","96a8a5980aee2d75788722b827c6a555"],["/2020/09/11/2020-09-11/index.html","3d3533ed7b83d22a59615de9fa546087"],["/2020/09/12/2020-09-12/index.html","53f0200353c9c9c5885049576354ea33"],["/2020/09/13/2020-09-13/index.html","1900992dccdf3dffd20491b9ed994c1c"],["/2020/09/14/2020-09-14/index.html","adc53546c502180b8256c1398e8b206d"],["/2020/09/15/2020-09-15/index.html","59a23b6cbd4e3db4065b606d6e27653e"],["/2020/09/16/2020-09-16/index.html","550fd30a27610c688a396fe687bb60c8"],["/2020/09/17/2020-09-17/index.html","29a87940799a5c9c9f5b6517055f8eac"],["/2020/09/19/2020-09-19/index.html","6de0f0a60298a08ab6997003c3a37b56"],["/2020/09/23/2020-09-23/index.html","a60a0c4c2f40b95f0c0b577345ccb578"],["/2020/09/24/2020-09-24/index.html","8c207001c63ca9ca688139d7fcf424d3"],["/2020/09/26/2020-09-26/index.html","64d4ae3271bffcb462d41a67f3a1b33e"],["/2020/09/27/2020-09-27/index.html","dec1208d5e119b12f4dd6a67aa5c93be"],["/2020/09/28/2020-09-28-2/index.html","975cfee72b26e67dc79877716cb06adb"],["/2020/09/28/2020-09-28/index.html","11d477be23e12cd36866892eadff960d"],["/2020/09/29/2020-09-29/index.html","b90cbcff0975609adbbcb1de8b5fc3c6"],["/2020/10/03/2020-10-03/index.html","88dfb1e5ddd6b122e278f77c34031dc8"],["/2020/10/04/2020-10-04/index.html","5dd61cf4ce6c00be96499966791d28f5"],["/2020/10/09/2020-10-09/index.html","fc162bd855241c23381ba19b87d737eb"],["/2020/10/10/2020-10-10/index.html","0eced7e80e090af8a62f5df064b32463"],["/2020/10/11/2020-10-11/index.html","a00ba313d859f900d406bef107a7f154"],["/2020/10/12/2020-10-12/index.html","246deb5cf4a63d7e1bea28035d75578d"],["/2020/10/13/2020-10-13/index.html","01f63520f107ce0ef923f9fdda536259"],["/2020/10/14/2020-10-14/index.html","e9c86e439fafc5e3f5080dbbdb153d3c"],["/airplayervisual/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/airplayervisual/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/airplayervisual/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/airplayervisual/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/airplayervisual/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/airplayervisual/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/airplayervisual/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/airplayervisual/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/airplayervisual/index.html","ce280b1df683d4179642a18c4b57d9f0"],["/airplayervisual/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/airplayervisual/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/airplayervisual/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/airplayervisual/js/jamsetting.js","7927507e0080ddf55c6d8b5f526bd942"],["/airplayervisual/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/airplayervisual/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/airplayervisual/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/archives/2015/05/index.html","f1414d37194c266c93a6a10f70b7881c"],["/archives/2015/06/index.html","4620d9054139e814c8a76f02717888d1"],["/archives/2015/12/index.html","cdf5b2ebf26996e6d39bcf3edac645b5"],["/archives/2015/index.html","a5a8ac3a91542ea2feab760ea6b5b0e3"],["/archives/2016/06/index.html","fd81015c7d28fe8852d0f4c2fe2be914"],["/archives/2016/12/index.html","df839dea9251a9fb9690f38dd5be1d97"],["/archives/2016/index.html","c723b79e7c9d6dc044276047e8288456"],["/archives/2017/02/index.html","0566fb974a3302e38d9a699769c26a64"],["/archives/2017/03/index.html","4702294394a588b49a585f1949deb10d"],["/archives/2017/04/index.html","e5b8974aae36aa8260ded6983123222d"],["/archives/2017/05/index.html","f6613984d76baab8f1c03e9a2ba66afd"],["/archives/2017/08/index.html","44cc1ba5c6b56767b4948a6e1a996f67"],["/archives/2017/09/index.html","4b0d91b9430c52cb3b454e7b71c265c7"],["/archives/2017/10/index.html","e62c31722ab84088b0eb8633761ebd37"],["/archives/2017/11/index.html","1f878f758ee19ce209969deb0b732939"],["/archives/2017/12/index.html","20f0d4d39d9afeb9238b043e1279c240"],["/archives/2017/index.html","b90f493704d7e515f17d3d790be15448"],["/archives/2017/page/2/index.html","8952d40f3c1254186994b35ea0832433"],["/archives/2017/page/3/index.html","b7d024546bd651bd88ff8d1c5f9ed9a6"],["/archives/2018/02/index.html","a5388d9f43f33c8a2690bb0ec51b6ffc"],["/archives/2018/03/index.html","70085dd4dedb87919628b10cbb80557e"],["/archives/2018/04/index.html","e8f7abefd67f15deb4de1b11dde95b05"],["/archives/2018/05/index.html","1690645b97ab06eb2a8248698e4d903b"],["/archives/2018/06/index.html","598a48e5d7f86ee7a5494b13ef51c71b"],["/archives/2018/07/index.html","56750342f14665965390a67d7e0b0a22"],["/archives/2018/08/index.html","c4ba7f0bf5c05178f66132c71eb7a823"],["/archives/2018/index.html","ef1edcb302673f0541f4964e72e81fac"],["/archives/2020/07/index.html","052ddc44e5ae61c0803d310bb68dd802"],["/archives/2020/08/index.html","1cfa9022e6bfaea61bbec3659e8b3740"],["/archives/2020/08/page/2/index.html","37a5cf3c80cd4660ba74114ad13fd403"],["/archives/2020/08/page/3/index.html","4b6194a0a652624efc04fa8a2b05237e"],["/archives/2020/08/page/4/index.html","c9ffb98944851f2ca147dcbb4a158066"],["/archives/2020/09/index.html","8af01e22c14f344f4e807a72936f54b9"],["/archives/2020/09/page/2/index.html","3e6f831d7dfe9958374f293a5a518f77"],["/archives/2020/09/page/3/index.html","a6f74c3b6a58e4526ddea383b7483c9b"],["/archives/2020/10/index.html","053dcdc25483b39f871307534b1b8883"],["/archives/2020/index.html","fdf2742de765da7b8f08d52dc9837029"],["/archives/2020/page/2/index.html","d1dbf261deb93f4fdf24634b47595abf"],["/archives/2020/page/3/index.html","71a687a928d301b2bf372fb14aa8404f"],["/archives/2020/page/4/index.html","43c1e95a428dfc4f42457c121aa28aa2"],["/archives/2020/page/5/index.html","a12d69fd386a9b3395af6eb7fd628a10"],["/archives/2020/page/6/index.html","cc488f62eb6a5fecba4b4b6a25867c7d"],["/archives/2020/page/7/index.html","9be15f2a0a3f55540a9f8e7d58586230"],["/archives/2020/page/8/index.html","ea0e2db4c0c043755190d96b0239f41b"],["/archives/index.html","df752aedfea61507e67226fdeea50476"],["/archives/page/10/index.html","92e23403343acc16957169806c0d6433"],["/archives/page/11/index.html","d514cb5c466b50735ecd50e28f32fb6a"],["/archives/page/12/index.html","bec26734d3ab6b9c714b4b4fb93c049d"],["/archives/page/2/index.html","c7816566dcda8327736b2112d28d3ee8"],["/archives/page/3/index.html","970e95909d92972b46c6611afdaa29fc"],["/archives/page/4/index.html","1209e634ff5a4e58c7ac47c6ce450773"],["/archives/page/5/index.html","fdcfda07289a1cb683c165148cbecd52"],["/archives/page/6/index.html","828717ff8b57d044fe3999b4ee723ae3"],["/archives/page/7/index.html","2163cf7b8029783ca80301172e21fff9"],["/archives/page/8/index.html","59035288a9c7be632c81b14a16018c49"],["/archives/page/9/index.html","a218a11ad5b9f5c005952f2d42d5ef0b"],["/categories/NHK听力练习/index.html","fdb8a25b0f1f55f4f2ee22bf98630cfc"],["/categories/NHK听力练习/page/2/index.html","30abaa846bb9681fb707d1474d3d33aa"],["/categories/NHK听力练习/page/3/index.html","6a3abcfba6d4ad2301b0cb532991d0ff"],["/categories/NHK听力练习/page/4/index.html","d9547d7609b9df203930a06ebae9e398"],["/categories/NHK听力练习/page/5/index.html","1d89306bc6bc323a65a36896089973f5"],["/categories/NHK听力练习/page/6/index.html","04297eb37e4edd6fddde2db2d6daaae2"],["/categories/作品集/index.html","2f4563330d8153cc394c0e607a46fb46"],["/categories/作品集/page/2/index.html","8e3fc377f4a7ff853a64463d75cb269d"],["/categories/学习/index.html","25b747e58f1ea03f91403c61a1c91060"],["/categories/学习/page/2/index.html","bf7f85ebf94ffb917a8bf3cb9f65a9fa"],["/categories/学习/page/3/index.html","6410772de37aa07f5cde3fe7e7986fce"],["/categories/游戏评测/index.html","55f62bf857307751ddb35c71265cd665"],["/categories/生活趣闻/index.html","18124e24e581e972a7f4d035afc8ac28"],["/categories/随想/index.html","09358905dda80f9bbdbc3d89ee86046e"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/addcss.css","59cae1ddbe6925c34f846ffe12d19921"],["/css/background.css","32d5acccbb94f987faf37cfdc3fd06df"],["/css/calendar.css","0090a32d2a61d42c5bfed254bfba078c"],["/css/clock - 副本.css","65602c2385c7eab42ee3804cd6ee0a5a"],["/css/clock.css","9db53e3bffb704c740aa83bddaf8b999"],["/css/cursor.css","c1a23e168c5b794ff367eb0ae77eb26b"],["/css/danmu.css","2a5b914a9592bcd353425c6d5fa7af8e"],["/css/index.css","e0ecbfc6d569c15e3c74302c0114ce1f"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/loadingline.css","bc1ee020a6a11fea17b915b97e6978bf"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/html/calendar.html","bddcec1edba7f4c49fe5cd75f8cdf5b2"],["/html/shiyan.html","e863a8f95e86183169dffd6baff371fa"],["/html/shiyan2.html","a4544520b175b3ec6aad9edc32f54df4"],["/icon.png","8ec68de45d18642ba9baf2447e62f476"],["/images/AMJ1.png","d27a6725d1aaaf5324248da4312ab6c2"],["/images/AMJ2.png","00e22eba5901e5bd674e42228cd5bd26"],["/images/AMJ3.png","c8c9ea6348dfcad3a641899d5b587431"],["/images/FOTO1.jpg","4b6f100861908e2c7044cffbdb4a0c1a"],["/images/MVVM.png","ea5a002ee2f85c71a0db51d5adb5de19"],["/images/UT.jpg","367f4e432f9db55a92b2a290c4b0a476"],["/images/UX.png","a183974e958d41d1b6acec70bb7ea00a"],["/images/WindowsTerminal.png","8ac29cb56b8a1768cf7de071e9f1ae6f"],["/images/air-w.png","c1cc32f9d3e17551ca11a7d18a0b533a"],["/images/anzhuang.jpg","912b2489957f8344406edc5e5cebe5fa"],["/images/api-setting.png","2c0bb074390779721cba009e96c5417c"],["/images/apikey.png","1f31121b190eb1f990bcc3e27524bc03"],["/images/backpic1.jpg","86a6fa88167feb338fbf1a4e9057114b"],["/images/calendar.png","86319b08b93be7c8bc47cdba7a169563"],["/images/clock2.0.png","0a0f122c7a25262fc02ee99df0ef21eb"],["/images/example.png","aaac9983e5d59f919bf282dcff2edb3c"],["/images/foto17.png","28db4c6608ad1ee6b34238cafab25e5e"],["/images/foto2.jpg","be95b922512d004a61f83c97af3e2602"],["/images/foto2.png","0dc07d4e1b00526a273a89dc8b81548d"],["/images/foto3.jpg","551c0616c92c4ee7cc17dd458b3c46e9"],["/images/foto4.jpg","9d1d9fea759a41afc0061866e400339a"],["/images/foto5.jpg","984f618b15372f37d54f507e6f379f10"],["/images/foto9.jpg","b683fc0b998e80ff8f5a3e45e889807c"],["/images/girlpic.png","ff1e8427ed555af639e6d849f8f648f1"],["/images/girlpic1.png","698e5570e821c3cae643cc9777c2292e"],["/images/girlpic4.png","551882e4b9b6afb79000fd34c0dbf5e5"],["/images/headimage.png","332502f36a0297b30cb7969fe6de8451"],["/images/hexo.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/hexoWT.png","c027cc9f5665c7d7ba657e7a4bb40017"],["/images/his-json.png","7d8a71e38ab684107446e5c72c31854e"],["/images/history.gif","0459a3dcf2317253de0b34482880c63c"],["/images/homework1.png","e8d2f64d0785519ea7779016208a2900"],["/images/idea.jpg","5eb08bf6c965588f03c8860f201cac45"],["/images/key1.png","f2a370e02ad6c5a101db20b47a9a0008"],["/images/key2.png","21dc40bbe0377cd9fe85a9cb431c18f0"],["/images/life-cycle.png","02f39ea5c041d45938fda4b50f234cb7"],["/images/life.jpg","74d2d9c5f48ec59e3badeec690941812"],["/images/listen.jpg","9d4f73cd5634f43deaed4f9aca03f9a3"],["/images/loading.gif","ffa0804a5d99e2d5b39e05cda6d6b28b"],["/images/magnet.png","4899a924f3de0d19dbe0415128c07d65"],["/images/magnet1.png","8d010eb86ca943e036adaa7de57aee7d"],["/images/magnet2.png","293cb414a8ab93b43bde3bebf9cf0cfc"],["/images/magnet3.png","1923148630e2e094ff80bf35aa604c10"],["/images/magnet4.png","9bb4f963ac1c09f02d62525f513f492c"],["/images/meilu/1.jpg","cd67abcc3f543b5c66adc4f9d9c5c628"],["/images/meilu/10.jpg","ac9fb2711e477b5db1c3acb57e899045"],["/images/meilu/11.jpg","364caad6dfc356a3dc630fa067e48e88"],["/images/meilu/12.jpg","274767e5708f79934e5bdbf73eda8f0d"],["/images/meilu/13.jpg","dcab12b84454770b208913db63e825ac"],["/images/meilu/14.jpg","037cdd048284e621f27e17a2c59e8ea7"],["/images/meilu/2.jpg","f6cdb65ae3fad4523b32f5ee38696b60"],["/images/meilu/3.jpg","9e5df3612c2d93bf57313186c954aea5"],["/images/meilu/4.jpg","69ef2d6f4bcd79cf4b4e672b60c6751e"],["/images/meilu/5.jpg","ce81ca16def7613b7ebb368fb554f14f"],["/images/meilu/6.jpg","cafd5b62305f806754a75cc3af8c3b77"],["/images/meilu/7.jpg","b8ae865d386e1e713a6034da6b090c10"],["/images/meilu/8.jpg","afad7a7bf1066c817a8d2e7566bc780d"],["/images/meilu/9.jpg","72f9649f56b564eacf23ce3dacb88029"],["/images/metroui.jpg","5503bfffd450d9ab572b67ea00941571"],["/images/metroui/1.png","79a03b408c19c74eeaa8ff6e17a03f9d"],["/images/metroui/10.png","8309fed71a15c78f2dfa3af1ff75a5f3"],["/images/metroui/11.png","aaf1a007cbae12f93cc2688bace18d28"],["/images/metroui/12.png","0758ea282c3828c47e5c64520ff85783"],["/images/metroui/13.png","12ca7b511927cd4b26e97f3b20908a32"],["/images/metroui/14.png","f44ba7680f7b36df437e2ae2588d0565"],["/images/metroui/15.png","e8927c78b125b805af7aa86fee815ab6"],["/images/metroui/2.png","e604d3c662b996f06f22753ba9ab379f"],["/images/metroui/3.png","664e3b7490f2f95d5547b8ba79a65456"],["/images/metroui/4.png","c0f255344cafc303a1d9c7404da37149"],["/images/metroui/5.png","da2074cdb1298aca826abc1a5c441300"],["/images/metroui/6.png","efef2f087127614b4e03bcbe9a347018"],["/images/metroui/7.png","a4d34b1a2dbe3a58d3a92276880be039"],["/images/metroui/8.png","1d34a626bbaa898a60d4501936bcf962"],["/images/metroui/9.png","0663697c1667b377fe2623bd65e00b31"],["/images/metrouilogo.png","aea81b42d1c2c96440f74cf56ad82e2f"],["/images/nhkimage/2020.08.01.png","af4c55b2ae1d5ab2f56c75a87fcdfdb3"],["/images/nhkimage/2020.08.02.png","c355d41b90f5c65823f96c5f6868ce53"],["/images/nhkimage/2020.08.03.png","fddcedb40d7f28b2ccb90814351ad5c8"],["/images/nhkimage/2020.08.04.png","8b4518ec5a8513f442980ed7167136b1"],["/images/nhkimage/2020.08.05.png","590abfb19334b0c3cee5a005674f2253"],["/images/nhkimage/2020.08.06.png","d469e21100c42435e88f2bdf07f93da1"],["/images/nhkimage/2020.08.07.png","3ca9e2c8b8a09a38423d73cd36e8de9d"],["/images/nhkimage/2020.08.08.png","4420c2d899fe4eb90c48bae0da8418a2"],["/images/nhkimage/2020.08.09.png","df14be338f9c920818dd1daa6aa955ee"],["/images/nhkimage/2020.08.10.png","c4e2ed023cd3dbfd4986add35ca9357c"],["/images/nhkimage/2020.08.11.png","cf562339e57f673d394f3e6cdd1f60cb"],["/images/nhkimage/2020.08.12.png","81dfa179fea3052ddcf73912ea368f67"],["/images/nhkimage/2020.08.13.png","8cf26c2642e7a27cbd86fcbda8bae8d9"],["/images/nhkimage/2020.08.14.png","d88eeb678b3ed3651d597e61957e264a"],["/images/nhkimage/2020.08.15.png","b9879f193867edcffeefce62c9dc7153"],["/images/nhkimage/2020.08.16.png","46cb914aa1d556561897767ec9ff66a0"],["/images/nhkimage/2020.08.17.png","ea1af9645b5cc9cbaafe70a91dd15cca"],["/images/nhkimage/2020.08.18.png","e87e4de39a6f06cf4283a63af92dd8de"],["/images/nhkimage/2020.08.19.png","8001a951513b542a98ce1151be5bd87b"],["/images/nhkimage/2020.08.20.png","4bc8fafa3ecce30d340b1350715d78e3"],["/images/nhkimage/2020.08.21.png","07ad1337e127922abff27da6c672549b"],["/images/nhkimage/2020.08.22.png","b2b5d53ba46015f64048f9d803b12179"],["/images/nhkimage/2020.08.23.png","225af8c0cabe5218ec634d1b8815fd95"],["/images/nhkimage/2020.08.24.png","1d54a484a6e2395aabe9be005cd90361"],["/images/nhkimage/2020.08.25.png","8008ba169cfce0ef2041329cd29b6b77"],["/images/nhkimage/2020.08.26.png","72a2b8094003a54c97a34ea97cf21bc3"],["/images/nhkimage/2020.08.27.png","893407e604804d215c8fef8bcd5f2684"],["/images/nhkimage/2020.08.28.png","b542280b7341759890a99cbd44d822c5"],["/images/nhkimage/2020.08.29.png","620e2e7d4772e39615fd1a88cdf49717"],["/images/nhkimage/2020.08.30.png","f645d7ba2dcb506f9ec6fb9244425ad7"],["/images/nhkimage/2020.09.03.png","c5262f3aa87190e0273383ea1e445681"],["/images/nhkimage/2020.09.04.png","c07149c32aa41c03bc7dac82a713f6b2"],["/images/nhkimage/2020.09.05.png","4e43556e1cb3b7f4d75f0f6127616a54"],["/images/nhkimage/2020.09.06.png","1021d2ae04a7f109404f857a2a7629cf"],["/images/nhkimage/2020.09.07.png","db9827e9f0a4cf1401b559b4644a0204"],["/images/nhkimage/2020.09.08.png","efe1030b73dc1c01f169c3122a194426"],["/images/nhkimage/2020.09.09.png","f6ba3a1c6cdeff88404ebe2a646f2eb5"],["/images/nhkimage/2020.09.10.png","3471b05d02113517359a9e2167befcfa"],["/images/nhkimage/2020.09.11.png","921a541a8bffb1aa436df2eb6db7c99f"],["/images/nhkimage/2020.09.12.png","a51f8ebaddba69bb80f9259a30f17e65"],["/images/nhkimage/2020.09.13.png","0399889200493cd2154ffc407e2bc400"],["/images/nhkimage/2020.09.14.png","eaaf3da69a39ed316b7fc8c4d409bb0f"],["/images/nhkimage/2020.09.15.png","5774959ea4061c9298ea174f0862cc3a"],["/images/nhkimage/2020.09.16.png","0c5a00f74020740fda589c02e4b3f917"],["/images/nhkimage/2020.09.17.png","b5aef734e3a7db4862ca3fe4e6769dc2"],["/images/nhkimage/2020.09.24.png","5982a7b3843f4ae43b2b4bc4b0c577d6"],["/images/nhkimage/2020.09.26.jpg","c6415af781fbdd36fdb034f74646129b"],["/images/nhkimage/2020.09.27.png","27aa6f6a8d5534ccd99cff261dcd9eb6"],["/images/nhkimage/2020.09.28.png","0f4318d1ff17a33de364432a1c44b5ad"],["/images/nhkimage/2020.10.09.png","6408d9f7e66fdeba8b9207939a08cf8d"],["/images/notop.png","d25c272e5ce312a880e04ce8a0b27683"],["/images/pasted-0.png","552608d8f6e39369aa30c6e332a32826"],["/images/pasted-1.png","baafdacee93c99e99418aaedbf524fda"],["/images/pasted-10.jpg","395cff6f64ab5df19baa3572ac98e541"],["/images/pasted-11.jpg","56e5df07c96634638abf7995b25c81ab"],["/images/pasted-12.jpg","61b3f803b85ce3640d7a9ba7efb9da6b"],["/images/pasted-2.png","2f410e53c811f92a6135f48857776f5e"],["/images/pasted-3.jpg","bb5717e691e87355e7d63a5f3a87ae62"],["/images/pasted-4.jpg","10041d0e3567b24b81222ec5075d6492"],["/images/pasted-5.jpg","ac5047a4b48c6cdaee86fa1863e33904"],["/images/pasted-6.jpg","1556ae8d3ad5713d60237ee4d10e81f0"],["/images/pasted-7.jpg","913fde1686587646ddc663bd810cc81d"],["/images/pasted-8.jpg","fc83268081fb4b6b6ecb1ffa1ec5af7f"],["/images/pasted-9.jpg","25e0fa3496591501f5c29d0b802b77d2"],["/images/pet.png","2b8c121909497e57057478856fe48a94"],["/images/pet2.png","dfb1d6a17b527ccc0c600e6ad31f55e5"],["/images/ps1.png","0917ba91f21b6944dc08d35c41a326d2"],["/images/psb.jpg","6a27c58337875c776af0a7667598b401"],["/images/quse.png","7cd1ec12b804305430cb4cdc09c7a893"],["/images/rain.jpg","9c26acc44c692b6a63e134be07b07c18"],["/images/shezhi.png","281bf545f6a4024e2d0b7120bc398a21"],["/images/soul.jpg","d97b4099c0728ff6123d006fa62db86e"],["/images/study.jpg","a9b1cf95ee6bd9f3913e8ec6a6a6f44f"],["/images/tianqizhizi.jpg","dd48d78b4eeaaa52578352f9ef570b14"],["/images/vue.png","cf23526f451784ff137f161b8fe18d5a"],["/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/images/work.png","e521cf5b834292fde1c50e0a0f5802f9"],["/images/xiaoguoyanshi.png","994a3b710d36df0a4630cd9a768c7f7b"],["/images/xiaoguozhanshi-m.png","1fefca18214fc4889d1bb76b81887c9d"],["/images/zfe.one.png","b41f689341882058ffb28c4cee499bde"],["/images/幻想终结之日.png","0025c4d3973bdfedb80db3f78c59fa47"],["/images/时空战纪——游戏建议及意见①.jpg","1337457f14a8dffee66d94f8915b54ff"],["/images/简历.png","d70507ee4615c9e324578c0d777e6855"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favicon2.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","8cf40d36f0a6e8cb7ebcb850335257e9"],["/js/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/APlayer.min.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/airvisual.js","71cf86bfd452ca01d92438d8266416ee"],["/js/airvisualapi.js","6931bebe1696688d109963187fc2eace"],["/js/background.js","94c8410b174f58594cf81ec99054968b"],["/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/js/calendar.js","a58e02711cc6dec4dc04257e555b8923"],["/js/clock - 副本.js","405186e7a9d73221d2d50c0dea2852d0"],["/js/clock.js","f545c0f3eece5e3e45f3f0547a8a32ce"],["/js/color.js","3730bb4f7b185e6f5130ac28bace968b"],["/js/danmu.js","6b6ae6b7f1b42dd4857541f43b2bb733"],["/js/echarts.js","dc1227b1eba1ba47fd185a387d0a7d37"],["/js/gitcalendar.js","fadfa8a42272cd322118653dca512a7a"],["/js/history.js","20459f7db325e597e64903f4c0d19306"],["/js/historyroll.js","a3e9ac376106816c50a61f9f4306d671"],["/js/jam.js","462c07d3b2e0f20394d994bbcfae37cb"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","455fface5a0a3ff90766ca254affe502"],["/js/rain.js","f656dc28e4ab5c3f8414d35f683278c1"],["/js/rainremove.js","ceacf82842b101f7e54a2aaf5f4bb9cb"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/link/index.html","3edcf33dcaa35e1c823419bf86d57d48"],["/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","9181b92149e40ea3c39192be845dab79"],["/page/10/index.html","5ba7a1f31b440c591797f10712afc3bb"],["/page/11/index.html","f25f72578baf2bc3323a5b7834a63371"],["/page/12/index.html","eab7f6a3ec02de3ad151a384ac4a15f3"],["/page/2/index.html","cc5e10117ba87e1376617608c04d05f6"],["/page/3/index.html","046771da0ab7bf633356ff0d86e1687a"],["/page/4/index.html","896773bd6cff24c4a62a65a6c92714c2"],["/page/5/index.html","3999326a218df6a3e1d63e2c963d87e2"],["/page/6/index.html","29e48eda836fe1b55331d06c16663669"],["/page/7/index.html","41c05e319bb634f3483e78c5dbe10926"],["/page/8/index.html","33ec0029e8741715ef598fe569b4a555"],["/page/9/index.html","a5dcff98ad13687e5de54b9bd440c9b9"],["/research/index.html","7cd7f8ff6a855038822a6168562c3077"],["/sw-register.js","d8def542a9f5907e228de0c53f6cfa32"],["/tags/Butterfly主题/index.html","f404becc3bd4df9513b6b104ff094cb0"],["/tags/DIY/index.html","699b6a48f586eeb6fd2d5275bcd8fae5"],["/tags/DIY/page/2/index.html","3330855b461816e55e6c5761b21936dd"],["/tags/ICT/index.html","a38094b00ac31bd91ba22f6e81d81213"],["/tags/NHK听力练习/index.html","258cb7eebfc7ce3ebf48df48f00d7417"],["/tags/NHK听力练习/page/2/index.html","f2d6b8ece71c18a11c6bc0186bfe47b2"],["/tags/NHK听力练习/page/3/index.html","c3a0d1ec247cd9d94885737daa3e393b"],["/tags/NHK听力练习/page/4/index.html","ca48c8948b5005882a767fc89c42c351"],["/tags/NHK听力练习/page/5/index.html","c4463a21e089e3051a1bac433c607a8f"],["/tags/NHK听力练习/page/6/index.html","078606620641d8f4fe27310b87d1a797"],["/tags/metro-ui/index.html","f4ab78fdd4540c46cc9da3d7cb2ccef6"],["/tags/vuejs/index.html","8c88fb4b82b6d36e8e5904196dfda3b6"],["/tags/お盆/index.html","fa1db86ba4395a5deed3b1f3807564c3"],["/tags/世論調査/index.html","d07cdab917b4498b0795abd3cd34f0a2"],["/tags/作品集/index.html","fd3ebe5ad47bd4fd03f47bfe80fe6dd4"],["/tags/作品集/page/2/index.html","f4f40bd739a53178981ea501f218888e"],["/tags/农业/index.html","e36281d403c7c4ad3cbe441cea0c79c4"],["/tags/历史/index.html","261de7ebc3a12fdeef3c2a09a213eb18"],["/tags/営業時間/index.html","fdfc0b3f150517db29741feefcea49e7"],["/tags/国外政事/index.html","b069a9ca7f45915bd3181d83074ff1fa"],["/tags/地震/index.html","2237d604aafd06cb27603c830cd1b7b5"],["/tags/外国政事/index.html","a0693a4f45aa0c9d26938fcc1124a833"],["/tags/天气/index.html","c7fed25780ca32f4013173c5f2a384f6"],["/tags/天气/page/2/index.html","9d352d9993259d55ad4e3d3f2c630705"],["/tags/奥运会/index.html","1a418882e3477dd5e9d6f015852067aa"],["/tags/学习/index.html","b3bf98bfdfceb55068c362e136f170a6"],["/tags/学习/page/2/index.html","fbeb5f65bfe1035d58f0a2b3ddac2ac7"],["/tags/学习/page/3/index.html","453d470bbbcae016558f68cce73d18a1"],["/tags/就业/index.html","258cde0b72a93bd414de4dd52ae6dbe2"],["/tags/庐山/index.html","35d21305cb4035c62a9cd3557bd506fa"],["/tags/座礁/index.html","b1c20af0112f5366e4e04523d5fa9ca3"],["/tags/政府/index.html","5d7e2de8f6a54b6ac64c8d6534f76efd"],["/tags/政治/index.html","a0ee7bcefc2004b1b6f6c339b36f647e"],["/tags/教程/index.html","5eae1195fdb376718685460516f0e183"],["/tags/日本教育/index.html","c9317eddadc625823d68a3b2022f2eb9"],["/tags/民生/index.html","a06bf34d699bb5fdcc7ffc4b1610fa86"],["/tags/民生/page/2/index.html","32a55debe352561b0a441e43288e97e1"],["/tags/游戏评测/index.html","ab4c4abb962163ff5a37dd8a83dff051"],["/tags/游记/index.html","d488aee5a5bf31063e4f6a657b64f760"],["/tags/生活趣闻/index.html","f24d943255ccd2e85787e777785902dd"],["/tags/科技/index.html","3b7e46e3d6ce0cb20c658a64a9532053"],["/tags/经济/index.html","c4e5cb3dabc17ccf1b6d00c500152b89"],["/tags/经济/page/2/index.html","b0cd033c06fd08f39225a91170587fbf"],["/tags/网络教学/index.html","1d694288f35575697869ef66fdece3e4"],["/tags/舆论/index.html","c1834a65981504f460e6ad18e8112960"],["/tags/虚拟现实/index.html","a804405fba644d36a3caa5ffbc5da49c"],["/tags/随想/index.html","826198847b76959d218c7517d2d8b5eb"],["/tags/障害者/index.html","86ffb83233744cd8a3d4ae164a0a8ef4"]];
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
