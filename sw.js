/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/05/20/2015-05-20/index.html","d658906043c4e043c0a777ab63187f47"],["/2015/06/16/2015-06-16/index.html","4645bfc605cd7c479a5ee10a1802515b"],["/2015/12/12/2015-12-12/index.html","b535e5b8a7bc2b320184b882342b6dc0"],["/2016/06/08/2016-06-08/index.html","15cddb94d1d5cbfaeb9c7e4287d1192d"],["/2016/12/18/2016-12-18/index.html","61bd0e7a30b17544d8cef6bafa846489"],["/2017/02/17/2017-02-17/index.html","05d18e131fe2b3dd7b7bcafeae3211ee"],["/2017/03/17/2017-03-17/index.html","2efd16d57fd146acd7bbcf25c7492273"],["/2017/04/06/2017-04-06/index.html","d5b64b39cd9189b74c82aaeb0869cdaa"],["/2017/05/17/2017-05-17/index.html","b210171b772cef84834b41d417e6fb45"],["/2017/08/15/2017-08-15/index.html","e6c9e7557a95ef02e95c7ff5136366e2"],["/2017/09/16/2017-09-16-1/index.html","57d92dbe939d1a3690af37c293c2883e"],["/2017/09/16/2017-09-16/index.html","cf40bbb4e50386a4d90b72ce628dd45b"],["/2017/09/21/2017-09-21/index.html","20913ea937a861c2563768e1f88c1aa6"],["/2017/09/23/2017-09-23/index.html","9c9777c7844a49cfb442076955d7f451"],["/2017/09/26/2017-09-26/index.html","257b82d776aa051492551b7b26163573"],["/2017/09/27/2017-09-27/index.html","6e4181e583f65f5bcb5ce7b6fe3dc113"],["/2017/10/04/2017-10-04/index.html","b5174940cd2d143da62a028057cc9067"],["/2017/10/08/2017-10-08/index.html","2b2eac4478f3582a54af08296582bc3c"],["/2017/10/09/2017-10-09/index.html","a8be9ddaf98dc680bdcdb4b9f4918a5c"],["/2017/10/15/2017-10-15/index.html","c52b9c605289532bf9f58fc283db788a"],["/2017/10/19/2017-10-19/index.html","687691c2343371ffff962e7cce822449"],["/2017/10/23/2017-10-23-2/index.html","c008b6dbebf1e01c9538badcf8216571"],["/2017/10/23/2017-10-23/index.html","fb49b0ecb7fedfbf810032bec0feffa4"],["/2017/11/08/2017-11-08/index.html","97247c3d1043bc75ade7eacc876ef92f"],["/2017/11/12/2017-11-12/index.html","964b0385f55bd2aab3d572680ff2f280"],["/2017/11/15/2017-11-15/index.html","4719641eda446b7421b7fe524bbe9155"],["/2017/11/27/2017-11-27/index.html","cc7841d72c16e7e01e4fbadef2defb76"],["/2017/12/06/2017-12-06/index.html","21bdb5279a7ebb4ba2b0ea13bf21c523"],["/2018/02/12/2018-02-12/index.html","ebc49d931076ade6e9c7252bd090e5af"],["/2018/03/26/2018-03-26/index.html","04496744c48d1a6fdc58f39f0983c7dd"],["/2018/04/02/2018-04-02/index.html","83cc3547e8dfdabc2449d879ad13a364"],["/2018/04/24/2018-04-24/index.html","e790f547dd4b28a84ffc69812102f367"],["/2018/05/18/2018-05-18/index.html","de0380fe0af87aa5739f7a9dca454329"],["/2018/05/23/2018-05-23/index.html","a47fd8daf0521ea52546cb73ddd74a7a"],["/2018/06/08/2018-06-08/index.html","ffc4f580bfc6c0b005ddd515d2cfa665"],["/2018/07/01/2018-07-01/index.html","9a71b2b04884c4de5c18d0e0da746b47"],["/2018/08/30/2018-08-30/index.html","bdcb936bc737770eed11fbd495b66c78"],["/2020/07/20/2020-07-20/index.html","8e7b351e1a9be70f12a82abeb6742943"],["/2020/08/01/2020-08-01/index.html","26630bd9debe1f6146090f5a32973ccd"],["/2020/08/02/2020-08-02/index.html","f0406b72ff285a09d31ff310540d40a9"],["/2020/08/03/2020-08-03/index.html","3543316a3c9c14be1eee99d20b834817"],["/2020/08/04/2020-08-04-1/index.html","91f7b46006548d93ec3b37a36878ff4d"],["/2020/08/04/2020-08-04-2/index.html","b0a321ef451934bb4595ba20612b071d"],["/2020/08/05/2020-08-05/index.html","929851e85bd34e07238395f28e37dc3f"],["/2020/08/06/2020-08-06/index.html","45b5dcfa0cbd6390624016eeef862744"],["/2020/08/07/2020-08-07/index.html","8a6dfee5773001051fbfbe0fa121f826"],["/2020/08/08/2020-08-08/index.html","ab7cf55279859a7150683d42234f88ca"],["/2020/08/09/2020-08-09/index.html","bad50933f8ab35496a00f0d9f12a0f59"],["/2020/08/10/2020-08-10/index.html","ed5612873117c35fddb26e0f094e482d"],["/2020/08/11/2020-08-11/index.html","8cdac8373f94023264c5539d7c3443ff"],["/2020/08/12/2020-08-12/index.html","324baf7a06961fa116b373e66776c554"],["/2020/08/13/2020-08-13/index.html","38c6a3e9e3547029135ec3583da53c6b"],["/2020/08/14/2020-08-14-1/index.html","e6cd1599285a0dccea6b49f07c878132"],["/2020/08/14/2020-08-14-2/index.html","52f5a40bdc1312f3744ff2d0acfea790"],["/2020/08/15/2020-08-15/index.html","889f010101119ec451a46ce994ea8683"],["/2020/08/16/2020-08-16-1/index.html","8c88671b8eb2aa4b7d70d530e4e62050"],["/2020/08/16/2020-08-16-2/index.html","39a2898a3432a692fbb3d835c56575ce"],["/2020/08/17/2020-08-17/index.html","4ca66f67cff62227c2f0b23cdafca6f9"],["/2020/08/18/2020-08-18/index.html","400f8a566fcffa995a169fe5339f6c1a"],["/2020/08/19/2020-08-19-1/index.html","2691575d0e12d6b588ed2a0669c78315"],["/2020/08/19/2020-08-19-2/index.html","7e97eca166ea858bac20a669f047e774"],["/2020/08/20/2020-08-20/index.html","6e45f4323dec30122a9756596d607b8a"],["/2020/08/21/2020-08-21/index.html","502af025081335d2cd6411c8db0e291e"],["/2020/08/22/2020-08-22/index.html","cde1a4402f5b42be9842532902b67929"],["/2020/08/23/2020-08-23-1/index.html","322f2faab3adeeb12a7fb1f7a3ee6fb4"],["/2020/08/23/2020-08-23-2/index.html","7759bf67dc3ede1fb165b69ca833a643"],["/2020/08/24/2020-08-24-1/index.html","b66261426673d7b3322259466560de68"],["/2020/08/24/2020-08-24-2/index.html","8a405f51f5165bb54b317b0553b8d158"],["/2020/08/25/2020-08-25-1/index.html","5deb8b3e745af57f493360ad3295db36"],["/2020/08/25/2020-08-25-2/index.html","e809e035db858f16b99ac249a437a7a5"],["/2020/08/26/2020-08-26/index.html","87c922c1d8aaa38d9b7065f594f8826c"],["/2020/08/27/2020-08-27/index.html","248e5ac8078f9fefe94518d9c91494e0"],["/2020/08/28/2020-08-28/index.html","9740bf0346a5e667aacd3b48ccfdef7c"],["/2020/08/29/2020-08-29/index.html","db2a7a251e6af94615b43a8e347cba4a"],["/2020/08/30/2020-08-30/index.html","3dd14afce9a9128cd21d2b82f6039938"],["/2020/08/31/2020-08-31-1/index.html","2a8c637c7f99968540a0843266155ce8"],["/2020/08/31/2020-08-31-2/index.html","b728b03fa578998244612eecf07c1d29"],["/2020/09/01/2020-09-01-1/index.html","b7dececdf8da8a632abf4ceaaf7bc550"],["/2020/09/01/2020-09-01-2/index.html","35a0c0f77ff2bb85c5acff414d5b35ad"],["/2020/09/02/2020-09-02-1/index.html","cfd432ebe1385d7768751b875496ca39"],["/2020/09/02/2020-09-02-2/index.html","0aeb54d77fa99547cb6e962086b3e5e3"],["/2020/09/03/2020-09-03-1/index.html","55fefe7af91d9955c4d03045d27b52a0"],["/2020/09/03/2020-09-03-2/index.html","ce19ffbc7fef0b4a262d082f0f627722"],["/2020/09/04/2020-09-04-1/index.html","6041b794dc61ca2f9318f2ad934f81b7"],["/2020/09/05/2020-09-05-1/index.html","3d8726ad4aa5b71c558002c09a5a29c7"],["/2020/09/06/2020-09-06-1/index.html","68ad63b250256f888eac8f6139148567"],["/2020/09/07/2020-09-07/index.html","8c0956a8283f0482d266284a0f9b01df"],["/2020/09/08/2020-09-08-1/index.html","2cfa1667c55ad435077e26254489bad9"],["/2020/09/08/2020-09-08-2/index.html","7a0d481ca73125692802448bfd0da413"],["/2020/09/09/2020-09-09/index.html","1a818c89b1609221db1a2418ea3e6d32"],["/2020/09/10/2020-09-10/index.html","96a8a5980aee2d75788722b827c6a555"],["/2020/09/11/2020-09-11/index.html","3d3533ed7b83d22a59615de9fa546087"],["/2020/09/12/2020-09-12/index.html","53f0200353c9c9c5885049576354ea33"],["/2020/09/13/2020-09-13/index.html","1900992dccdf3dffd20491b9ed994c1c"],["/2020/09/14/2020-09-14/index.html","adc53546c502180b8256c1398e8b206d"],["/2020/09/15/2020-09-15/index.html","59a23b6cbd4e3db4065b606d6e27653e"],["/2020/09/16/2020-09-16/index.html","550fd30a27610c688a396fe687bb60c8"],["/2020/09/17/2020-09-17/index.html","29a87940799a5c9c9f5b6517055f8eac"],["/2020/09/19/2020-09-19/index.html","6de0f0a60298a08ab6997003c3a37b56"],["/2020/09/23/2020-09-23/index.html","a60a0c4c2f40b95f0c0b577345ccb578"],["/2020/09/24/2020-09-24/index.html","8c207001c63ca9ca688139d7fcf424d3"],["/2020/09/26/2020-09-26/index.html","64d4ae3271bffcb462d41a67f3a1b33e"],["/2020/09/27/2020-09-27/index.html","dec1208d5e119b12f4dd6a67aa5c93be"],["/2020/09/28/2020-09-28-2/index.html","975cfee72b26e67dc79877716cb06adb"],["/2020/09/28/2020-09-28/index.html","11d477be23e12cd36866892eadff960d"],["/2020/09/29/2020-09-29/index.html","b90cbcff0975609adbbcb1de8b5fc3c6"],["/2020/10/03/2020-10-03/index.html","88dfb1e5ddd6b122e278f77c34031dc8"],["/2020/10/04/2020-10-04/index.html","5dd61cf4ce6c00be96499966791d28f5"],["/2020/10/09/2020-10-09/index.html","fc162bd855241c23381ba19b87d737eb"],["/2020/10/10/2020-10-10/index.html","0eced7e80e090af8a62f5df064b32463"],["/2020/10/11/2020-10-11/index.html","a00ba313d859f900d406bef107a7f154"],["/2020/10/12/2020-10-12/index.html","246deb5cf4a63d7e1bea28035d75578d"],["/2020/10/13/2020-10-13/index.html","01f63520f107ce0ef923f9fdda536259"],["/2020/10/14/2020-10-14/index.html","e9c86e439fafc5e3f5080dbbdb153d3c"],["/airplayervisual/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/airplayervisual/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/airplayervisual/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/airplayervisual/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/airplayervisual/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/airplayervisual/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/airplayervisual/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/airplayervisual/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/airplayervisual/index.html","04411355d79df80dc3180de3fb7e1382"],["/airplayervisual/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/airplayervisual/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/airplayervisual/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/airplayervisual/js/jamsetting.js","7927507e0080ddf55c6d8b5f526bd942"],["/airplayervisual/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/airplayervisual/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/airplayervisual/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/archives/2015/05/index.html","8bdeffe38f9fa0ee696bf1f2631af88c"],["/archives/2015/06/index.html","c6955ae1b73744bd9c8a91a8ff16bb64"],["/archives/2015/12/index.html","c47153fe9c1269713acffdf85e4429c3"],["/archives/2015/index.html","251e52fe992e0bc89a67477923f72b12"],["/archives/2016/06/index.html","aaa056aee8f3924ca19e099c45e24b47"],["/archives/2016/12/index.html","8fea1da3fd200f65ffd836bcf37f9480"],["/archives/2016/index.html","ef6e7be41827a1ef81981247fd99cde7"],["/archives/2017/02/index.html","708c4f507bb5105de5c8a9e94adaff03"],["/archives/2017/03/index.html","22420bec3d60a5ab2fef959897eaa826"],["/archives/2017/04/index.html","d7f893bd716a0cd3e113ef84cf764e93"],["/archives/2017/05/index.html","a77408f7006d3b8d2e9b27c391dabdba"],["/archives/2017/08/index.html","3f35de0516220217fb2e20f24f91ccd5"],["/archives/2017/09/index.html","61dcf89dd23f5edc30b02174b988b3da"],["/archives/2017/10/index.html","115b410c8f33139e3e38266e89762d11"],["/archives/2017/11/index.html","4077f8b110747baa9442e9cc1bd9a3c0"],["/archives/2017/12/index.html","76d4eda1a5e4f3086a322665ae47c4da"],["/archives/2017/index.html","5fc0fe0f4a5b1d3be37385c1d59e413c"],["/archives/2017/page/2/index.html","2869d4a6c4a0d5f09db701a8dee2999c"],["/archives/2017/page/3/index.html","be329801794f0913e5228d413abe1445"],["/archives/2018/02/index.html","4863e96139168676ff69c909a3cad2e0"],["/archives/2018/03/index.html","abf5ded05bee985220d43fb7fce29197"],["/archives/2018/04/index.html","a82d7dec2c2f46b1502cd8fdc4f89e1f"],["/archives/2018/05/index.html","6d74548132947bc803d61151d2d2b865"],["/archives/2018/06/index.html","055be5da5dc9907d776d6e046275786c"],["/archives/2018/07/index.html","47a5295b04f501cb3567e645f19603d1"],["/archives/2018/08/index.html","c9edc1d472130fe0a9396bddcb815a95"],["/archives/2018/index.html","3951426065509dfc4676f49f4a1a77fc"],["/archives/2020/07/index.html","0d318de576054f1d95c2ac0c7773a0e9"],["/archives/2020/08/index.html","28c2eefea9ba6e6a2b2d041b7dc8eb09"],["/archives/2020/08/page/2/index.html","854797482eb40a9881a777fa8b6da1fe"],["/archives/2020/08/page/3/index.html","311b1cf66c0d87cbc5c68dcfa5f08fc7"],["/archives/2020/08/page/4/index.html","8dc72eb5c7d6a5817cc4965ad08f2697"],["/archives/2020/09/index.html","fba1f7751396e20fa91c845dde5df5a0"],["/archives/2020/09/page/2/index.html","9895386147819f6b3b23fb0d1fc2997a"],["/archives/2020/09/page/3/index.html","56709c1985444873a90c088f7400db32"],["/archives/2020/10/index.html","362e1bafe7390317ea780b0558527774"],["/archives/2020/index.html","b13ca62776ce14b9e73ca6dc1ad6c73c"],["/archives/2020/page/2/index.html","b1935e9402cbdcb26a78c23104680e5d"],["/archives/2020/page/3/index.html","349506842999eb9fe27912fd2302a822"],["/archives/2020/page/4/index.html","a0d2872374428f2f956fc6884223ec9e"],["/archives/2020/page/5/index.html","6499a585ec65ba43609d4db7807a3a7a"],["/archives/2020/page/6/index.html","1c60f0bc83f90875d4b87d72346fed63"],["/archives/2020/page/7/index.html","ccda0441ea420cf20812c257cb99057d"],["/archives/2020/page/8/index.html","a312d584cf3d84803a728860e1e81767"],["/archives/index.html","1034ff372e4a38469c560b8a8986b597"],["/archives/page/10/index.html","7dbf1d537e302ede4860f48df663d86d"],["/archives/page/11/index.html","59e81fba1ea0f8846f1dad3ed0d5504a"],["/archives/page/12/index.html","d4935bf90e15929514ca303bc55ad347"],["/archives/page/2/index.html","7441ac186dcbed62c12f8537cd20e1b2"],["/archives/page/3/index.html","6436105dfd3709e1c32dfc8024602960"],["/archives/page/4/index.html","7b432275968bc9826f135fb3137166c0"],["/archives/page/5/index.html","f40173847ab560eea242102f1431cbbb"],["/archives/page/6/index.html","369cd72a9f6f79b0efadf2d7e32814bc"],["/archives/page/7/index.html","d3b939406ebe6854a42423283f0e6171"],["/archives/page/8/index.html","1cbce7d91659135bd36f866f3419c2bf"],["/archives/page/9/index.html","504fc66609023e53bfe27b9d8c1a4982"],["/categories/NHK听力练习/index.html","c1899e5ea63b228bb55f97f9d0680706"],["/categories/NHK听力练习/page/2/index.html","32f433b3e7250be2985c055fc4b0fac1"],["/categories/NHK听力练习/page/3/index.html","3faccd7c7cd3b9d5b980cb00dec4c106"],["/categories/NHK听力练习/page/4/index.html","dac06a5877923742f4d3b1bc0dfe9bbb"],["/categories/NHK听力练习/page/5/index.html","5b7c6a4182f264799c365709f0afe20e"],["/categories/NHK听力练习/page/6/index.html","35397aeffa918fba5b26656ccb09ba59"],["/categories/作品集/index.html","f0ac2ff7d51f091c595035d734a928b6"],["/categories/作品集/page/2/index.html","683d6a1013fe0130a8863bc1bba15eac"],["/categories/学习/index.html","69b1ad14165c5838a0571f2f575a5ff7"],["/categories/学习/page/2/index.html","d7ae63eefed991cf4deef6dc6b54f817"],["/categories/学习/page/3/index.html","df3d2607e6e1957c51b7eb2480824530"],["/categories/游戏评测/index.html","64cf9acafaac6d9134aac6dd8977b4ce"],["/categories/生活趣闻/index.html","31bfb170798382ca1e0fb25c4206322e"],["/categories/随想/index.html","5ca6a3d6ebf7220b3aacf2ef8868d479"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/addcss.css","59cae1ddbe6925c34f846ffe12d19921"],["/css/background.css","32d5acccbb94f987faf37cfdc3fd06df"],["/css/calendar.css","0090a32d2a61d42c5bfed254bfba078c"],["/css/clock - 副本.css","65602c2385c7eab42ee3804cd6ee0a5a"],["/css/clock.css","9db53e3bffb704c740aa83bddaf8b999"],["/css/cursor.css","c1a23e168c5b794ff367eb0ae77eb26b"],["/css/danmu.css","2a5b914a9592bcd353425c6d5fa7af8e"],["/css/index.css","e0ecbfc6d569c15e3c74302c0114ce1f"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/loadingline.css","bc1ee020a6a11fea17b915b97e6978bf"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/html/calendar.html","bddcec1edba7f4c49fe5cd75f8cdf5b2"],["/html/shiyan.html","1dcecef1ab1604ba895a859c1b505fef"],["/html/shiyan2.html","d10133cd421fd922599878acbff2edfc"],["/icon.png","8ec68de45d18642ba9baf2447e62f476"],["/images/AMJ1.png","d27a6725d1aaaf5324248da4312ab6c2"],["/images/AMJ2.png","00e22eba5901e5bd674e42228cd5bd26"],["/images/AMJ3.png","c8c9ea6348dfcad3a641899d5b587431"],["/images/FOTO1.jpg","4b6f100861908e2c7044cffbdb4a0c1a"],["/images/MVVM.png","ea5a002ee2f85c71a0db51d5adb5de19"],["/images/UT.jpg","367f4e432f9db55a92b2a290c4b0a476"],["/images/UX.png","a183974e958d41d1b6acec70bb7ea00a"],["/images/WindowsTerminal.png","8ac29cb56b8a1768cf7de071e9f1ae6f"],["/images/air-w.png","c1cc32f9d3e17551ca11a7d18a0b533a"],["/images/anzhuang.jpg","912b2489957f8344406edc5e5cebe5fa"],["/images/api-setting.png","2c0bb074390779721cba009e96c5417c"],["/images/apikey.png","1f31121b190eb1f990bcc3e27524bc03"],["/images/backpic1.jpg","86a6fa88167feb338fbf1a4e9057114b"],["/images/calendar.png","86319b08b93be7c8bc47cdba7a169563"],["/images/clock2.0.png","0a0f122c7a25262fc02ee99df0ef21eb"],["/images/example.png","aaac9983e5d59f919bf282dcff2edb3c"],["/images/foto17.png","28db4c6608ad1ee6b34238cafab25e5e"],["/images/foto2.jpg","be95b922512d004a61f83c97af3e2602"],["/images/foto2.png","0dc07d4e1b00526a273a89dc8b81548d"],["/images/foto3.jpg","551c0616c92c4ee7cc17dd458b3c46e9"],["/images/foto4.jpg","9d1d9fea759a41afc0061866e400339a"],["/images/foto5.jpg","984f618b15372f37d54f507e6f379f10"],["/images/foto9.jpg","b683fc0b998e80ff8f5a3e45e889807c"],["/images/girlpic.png","ff1e8427ed555af639e6d849f8f648f1"],["/images/girlpic1.png","698e5570e821c3cae643cc9777c2292e"],["/images/girlpic4.png","551882e4b9b6afb79000fd34c0dbf5e5"],["/images/headimage.png","332502f36a0297b30cb7969fe6de8451"],["/images/hexo.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/hexoWT.png","c027cc9f5665c7d7ba657e7a4bb40017"],["/images/his-json.png","7d8a71e38ab684107446e5c72c31854e"],["/images/history.gif","0459a3dcf2317253de0b34482880c63c"],["/images/homework1.png","e8d2f64d0785519ea7779016208a2900"],["/images/idea.jpg","5eb08bf6c965588f03c8860f201cac45"],["/images/key1.png","f2a370e02ad6c5a101db20b47a9a0008"],["/images/key2.png","21dc40bbe0377cd9fe85a9cb431c18f0"],["/images/life-cycle.png","02f39ea5c041d45938fda4b50f234cb7"],["/images/life.jpg","74d2d9c5f48ec59e3badeec690941812"],["/images/listen.jpg","9d4f73cd5634f43deaed4f9aca03f9a3"],["/images/loading.gif","ffa0804a5d99e2d5b39e05cda6d6b28b"],["/images/magnet.png","4899a924f3de0d19dbe0415128c07d65"],["/images/magnet1.png","8d010eb86ca943e036adaa7de57aee7d"],["/images/magnet2.png","293cb414a8ab93b43bde3bebf9cf0cfc"],["/images/magnet3.png","1923148630e2e094ff80bf35aa604c10"],["/images/magnet4.png","9bb4f963ac1c09f02d62525f513f492c"],["/images/meilu/1.jpg","cd67abcc3f543b5c66adc4f9d9c5c628"],["/images/meilu/10.jpg","ac9fb2711e477b5db1c3acb57e899045"],["/images/meilu/11.jpg","364caad6dfc356a3dc630fa067e48e88"],["/images/meilu/12.jpg","274767e5708f79934e5bdbf73eda8f0d"],["/images/meilu/13.jpg","dcab12b84454770b208913db63e825ac"],["/images/meilu/14.jpg","037cdd048284e621f27e17a2c59e8ea7"],["/images/meilu/2.jpg","f6cdb65ae3fad4523b32f5ee38696b60"],["/images/meilu/3.jpg","9e5df3612c2d93bf57313186c954aea5"],["/images/meilu/4.jpg","69ef2d6f4bcd79cf4b4e672b60c6751e"],["/images/meilu/5.jpg","ce81ca16def7613b7ebb368fb554f14f"],["/images/meilu/6.jpg","cafd5b62305f806754a75cc3af8c3b77"],["/images/meilu/7.jpg","b8ae865d386e1e713a6034da6b090c10"],["/images/meilu/8.jpg","afad7a7bf1066c817a8d2e7566bc780d"],["/images/meilu/9.jpg","72f9649f56b564eacf23ce3dacb88029"],["/images/metroui.jpg","5503bfffd450d9ab572b67ea00941571"],["/images/metroui/1.png","79a03b408c19c74eeaa8ff6e17a03f9d"],["/images/metroui/10.png","8309fed71a15c78f2dfa3af1ff75a5f3"],["/images/metroui/11.png","aaf1a007cbae12f93cc2688bace18d28"],["/images/metroui/12.png","0758ea282c3828c47e5c64520ff85783"],["/images/metroui/13.png","12ca7b511927cd4b26e97f3b20908a32"],["/images/metroui/14.png","f44ba7680f7b36df437e2ae2588d0565"],["/images/metroui/15.png","e8927c78b125b805af7aa86fee815ab6"],["/images/metroui/2.png","e604d3c662b996f06f22753ba9ab379f"],["/images/metroui/3.png","664e3b7490f2f95d5547b8ba79a65456"],["/images/metroui/4.png","c0f255344cafc303a1d9c7404da37149"],["/images/metroui/5.png","da2074cdb1298aca826abc1a5c441300"],["/images/metroui/6.png","efef2f087127614b4e03bcbe9a347018"],["/images/metroui/7.png","a4d34b1a2dbe3a58d3a92276880be039"],["/images/metroui/8.png","1d34a626bbaa898a60d4501936bcf962"],["/images/metroui/9.png","0663697c1667b377fe2623bd65e00b31"],["/images/metrouilogo.png","aea81b42d1c2c96440f74cf56ad82e2f"],["/images/nhkimage/2020.08.01.png","af4c55b2ae1d5ab2f56c75a87fcdfdb3"],["/images/nhkimage/2020.08.02.png","c355d41b90f5c65823f96c5f6868ce53"],["/images/nhkimage/2020.08.03.png","fddcedb40d7f28b2ccb90814351ad5c8"],["/images/nhkimage/2020.08.04.png","8b4518ec5a8513f442980ed7167136b1"],["/images/nhkimage/2020.08.05.png","590abfb19334b0c3cee5a005674f2253"],["/images/nhkimage/2020.08.06.png","d469e21100c42435e88f2bdf07f93da1"],["/images/nhkimage/2020.08.07.png","3ca9e2c8b8a09a38423d73cd36e8de9d"],["/images/nhkimage/2020.08.08.png","4420c2d899fe4eb90c48bae0da8418a2"],["/images/nhkimage/2020.08.09.png","df14be338f9c920818dd1daa6aa955ee"],["/images/nhkimage/2020.08.10.png","c4e2ed023cd3dbfd4986add35ca9357c"],["/images/nhkimage/2020.08.11.png","cf562339e57f673d394f3e6cdd1f60cb"],["/images/nhkimage/2020.08.12.png","81dfa179fea3052ddcf73912ea368f67"],["/images/nhkimage/2020.08.13.png","8cf26c2642e7a27cbd86fcbda8bae8d9"],["/images/nhkimage/2020.08.14.png","d88eeb678b3ed3651d597e61957e264a"],["/images/nhkimage/2020.08.15.png","b9879f193867edcffeefce62c9dc7153"],["/images/nhkimage/2020.08.16.png","46cb914aa1d556561897767ec9ff66a0"],["/images/nhkimage/2020.08.17.png","ea1af9645b5cc9cbaafe70a91dd15cca"],["/images/nhkimage/2020.08.18.png","e87e4de39a6f06cf4283a63af92dd8de"],["/images/nhkimage/2020.08.19.png","8001a951513b542a98ce1151be5bd87b"],["/images/nhkimage/2020.08.20.png","4bc8fafa3ecce30d340b1350715d78e3"],["/images/nhkimage/2020.08.21.png","07ad1337e127922abff27da6c672549b"],["/images/nhkimage/2020.08.22.png","b2b5d53ba46015f64048f9d803b12179"],["/images/nhkimage/2020.08.23.png","225af8c0cabe5218ec634d1b8815fd95"],["/images/nhkimage/2020.08.24.png","1d54a484a6e2395aabe9be005cd90361"],["/images/nhkimage/2020.08.25.png","8008ba169cfce0ef2041329cd29b6b77"],["/images/nhkimage/2020.08.26.png","72a2b8094003a54c97a34ea97cf21bc3"],["/images/nhkimage/2020.08.27.png","893407e604804d215c8fef8bcd5f2684"],["/images/nhkimage/2020.08.28.png","b542280b7341759890a99cbd44d822c5"],["/images/nhkimage/2020.08.29.png","620e2e7d4772e39615fd1a88cdf49717"],["/images/nhkimage/2020.08.30.png","f645d7ba2dcb506f9ec6fb9244425ad7"],["/images/nhkimage/2020.09.03.png","c5262f3aa87190e0273383ea1e445681"],["/images/nhkimage/2020.09.04.png","c07149c32aa41c03bc7dac82a713f6b2"],["/images/nhkimage/2020.09.05.png","4e43556e1cb3b7f4d75f0f6127616a54"],["/images/nhkimage/2020.09.06.png","1021d2ae04a7f109404f857a2a7629cf"],["/images/nhkimage/2020.09.07.png","db9827e9f0a4cf1401b559b4644a0204"],["/images/nhkimage/2020.09.08.png","efe1030b73dc1c01f169c3122a194426"],["/images/nhkimage/2020.09.09.png","f6ba3a1c6cdeff88404ebe2a646f2eb5"],["/images/nhkimage/2020.09.10.png","3471b05d02113517359a9e2167befcfa"],["/images/nhkimage/2020.09.11.png","921a541a8bffb1aa436df2eb6db7c99f"],["/images/nhkimage/2020.09.12.png","a51f8ebaddba69bb80f9259a30f17e65"],["/images/nhkimage/2020.09.13.png","0399889200493cd2154ffc407e2bc400"],["/images/nhkimage/2020.09.14.png","eaaf3da69a39ed316b7fc8c4d409bb0f"],["/images/nhkimage/2020.09.15.png","5774959ea4061c9298ea174f0862cc3a"],["/images/nhkimage/2020.09.16.png","0c5a00f74020740fda589c02e4b3f917"],["/images/nhkimage/2020.09.17.png","b5aef734e3a7db4862ca3fe4e6769dc2"],["/images/nhkimage/2020.09.24.png","5982a7b3843f4ae43b2b4bc4b0c577d6"],["/images/nhkimage/2020.09.26.jpg","c6415af781fbdd36fdb034f74646129b"],["/images/nhkimage/2020.09.27.png","27aa6f6a8d5534ccd99cff261dcd9eb6"],["/images/nhkimage/2020.09.28.png","0f4318d1ff17a33de364432a1c44b5ad"],["/images/nhkimage/2020.10.09.png","6408d9f7e66fdeba8b9207939a08cf8d"],["/images/notop.png","d25c272e5ce312a880e04ce8a0b27683"],["/images/pasted-0.png","552608d8f6e39369aa30c6e332a32826"],["/images/pasted-1.png","baafdacee93c99e99418aaedbf524fda"],["/images/pasted-10.jpg","395cff6f64ab5df19baa3572ac98e541"],["/images/pasted-11.jpg","56e5df07c96634638abf7995b25c81ab"],["/images/pasted-12.jpg","61b3f803b85ce3640d7a9ba7efb9da6b"],["/images/pasted-2.png","2f410e53c811f92a6135f48857776f5e"],["/images/pasted-3.jpg","bb5717e691e87355e7d63a5f3a87ae62"],["/images/pasted-4.jpg","10041d0e3567b24b81222ec5075d6492"],["/images/pasted-5.jpg","ac5047a4b48c6cdaee86fa1863e33904"],["/images/pasted-6.jpg","1556ae8d3ad5713d60237ee4d10e81f0"],["/images/pasted-7.jpg","913fde1686587646ddc663bd810cc81d"],["/images/pasted-8.jpg","fc83268081fb4b6b6ecb1ffa1ec5af7f"],["/images/pasted-9.jpg","25e0fa3496591501f5c29d0b802b77d2"],["/images/pet.png","2b8c121909497e57057478856fe48a94"],["/images/pet2.png","dfb1d6a17b527ccc0c600e6ad31f55e5"],["/images/ps1.png","0917ba91f21b6944dc08d35c41a326d2"],["/images/psb.jpg","6a27c58337875c776af0a7667598b401"],["/images/quse.png","7cd1ec12b804305430cb4cdc09c7a893"],["/images/rain.jpg","9c26acc44c692b6a63e134be07b07c18"],["/images/shezhi.png","281bf545f6a4024e2d0b7120bc398a21"],["/images/soul.jpg","d97b4099c0728ff6123d006fa62db86e"],["/images/study.jpg","a9b1cf95ee6bd9f3913e8ec6a6a6f44f"],["/images/tianqizhizi.jpg","dd48d78b4eeaaa52578352f9ef570b14"],["/images/vue.png","cf23526f451784ff137f161b8fe18d5a"],["/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/images/work.png","e521cf5b834292fde1c50e0a0f5802f9"],["/images/xiaoguoyanshi.png","994a3b710d36df0a4630cd9a768c7f7b"],["/images/xiaoguozhanshi-m.png","1fefca18214fc4889d1bb76b81887c9d"],["/images/zfe.one.png","b41f689341882058ffb28c4cee499bde"],["/images/幻想终结之日.png","0025c4d3973bdfedb80db3f78c59fa47"],["/images/时空战纪——游戏建议及意见①.jpg","1337457f14a8dffee66d94f8915b54ff"],["/images/简历.png","d70507ee4615c9e324578c0d777e6855"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favicon2.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","4b8417f4cf940aa0620c77bbd5dba718"],["/js/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/APlayer.min.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/airvisual.js","71cf86bfd452ca01d92438d8266416ee"],["/js/airvisualapi.js","6931bebe1696688d109963187fc2eace"],["/js/background.js","94c8410b174f58594cf81ec99054968b"],["/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/js/calendar.js","a58e02711cc6dec4dc04257e555b8923"],["/js/clock - 副本.js","405186e7a9d73221d2d50c0dea2852d0"],["/js/clock.js","34f269ac3b0fdadbf85c73c139e9b6be"],["/js/color.js","3730bb4f7b185e6f5130ac28bace968b"],["/js/danmu.js","6b6ae6b7f1b42dd4857541f43b2bb733"],["/js/echarts.js","dc1227b1eba1ba47fd185a387d0a7d37"],["/js/gitcalendar.js","fadfa8a42272cd322118653dca512a7a"],["/js/history.js","20459f7db325e597e64903f4c0d19306"],["/js/historyroll.js","a3e9ac376106816c50a61f9f4306d671"],["/js/jam.js","462c07d3b2e0f20394d994bbcfae37cb"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","455fface5a0a3ff90766ca254affe502"],["/js/rain.js","f656dc28e4ab5c3f8414d35f683278c1"],["/js/rainremove.js","ceacf82842b101f7e54a2aaf5f4bb9cb"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/link/index.html","667dc54b71861df27ad596a2dd3c8811"],["/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","8b5929da14a64d437193fbcfb32139bc"],["/page/10/index.html","f36d4d24c5305a61a1f404c24a0d6ea5"],["/page/11/index.html","c18d6318de79431d1ee2295dcec5ff96"],["/page/12/index.html","55f91d680690afa824026f96da9f76e7"],["/page/2/index.html","39078249fd284acb6cfd2c42fe282280"],["/page/3/index.html","b920e440b877c030c790c11ad691ca81"],["/page/4/index.html","0859be18df1e271d867f0fd9a9cbc087"],["/page/5/index.html","1ebb5bf2d6cc5dd2ac03e2d5ca593433"],["/page/6/index.html","5d6516dbd2ab9cda483f36ca3778ff1e"],["/page/7/index.html","6d700819ab7181a54afb3e9fe71a5a54"],["/page/8/index.html","408e70623400da3ebf68962a8321524a"],["/page/9/index.html","3e8e5c40cc4fd088dc908da0312854ec"],["/research/index.html","35a69cc1dc454d758a4a37e0b88f91ae"],["/sw-register.js","7114b80d620e4a4219935ceaa63c6c41"],["/tags/Butterfly主题/index.html","4157285abd8e50ca98ded9259d216052"],["/tags/DIY/index.html","aa73a82ee39ed9f64e62b6b9e21a62b9"],["/tags/DIY/page/2/index.html","43aa9be0b52a2965167dec26fbbc2f47"],["/tags/ICT/index.html","20552b9af1018e6644df1e527be0954f"],["/tags/NHK听力练习/index.html","9e42d31bd5df4d4fe7f12a8f333d1ef2"],["/tags/NHK听力练习/page/2/index.html","36e3bdce4e4c2620482b105fc1f60aad"],["/tags/NHK听力练习/page/3/index.html","9a65aaedd24267ae44a3bd548da5c8ad"],["/tags/NHK听力练习/page/4/index.html","890a61a8737ac8308fcb5d446868bd94"],["/tags/NHK听力练习/page/5/index.html","96ab3a83daeeef6db60c21ea51e47917"],["/tags/NHK听力练习/page/6/index.html","be159e4eabdaf05ad21ec74f5993043f"],["/tags/metro-ui/index.html","51806ff20155c08a0c1b520b319641d4"],["/tags/vuejs/index.html","ec0fb28324180bed1006f2ecbf0bc56c"],["/tags/お盆/index.html","fe62532b5ba020247797b86fa8b8a07a"],["/tags/世論調査/index.html","6ba7b821b55f49df01636766d6cf5ea2"],["/tags/作品集/index.html","b6f796783ac00cb596d169bd01bfe6d3"],["/tags/作品集/page/2/index.html","b320f78f4178a68309c9ff6f74788680"],["/tags/农业/index.html","af051be7dceb5ba5db528e0f3b93d746"],["/tags/历史/index.html","fe8b5e59e70e81f20d7ea3526b3de296"],["/tags/営業時間/index.html","9ab9da01cb06c4b0b009877b006ce72d"],["/tags/国外政事/index.html","3d192f899aa4bbc974e0a847586eae49"],["/tags/地震/index.html","d2bbd48e77520ad85e0f17cf3b871b9a"],["/tags/外国政事/index.html","68a8785fb2699aa7b82b27d48e27f9bc"],["/tags/天气/index.html","d9f6ba706dd0d09193f14843aed5dd82"],["/tags/天气/page/2/index.html","53b79adb99812759040384bb780d5443"],["/tags/奥运会/index.html","05d18b6ac06517f01d7ae7ec9fc44bfc"],["/tags/学习/index.html","75b54eea828d9be02bb2908bcb04f35c"],["/tags/学习/page/2/index.html","9e75426319c5a07e134ae28787eda935"],["/tags/学习/page/3/index.html","58aa2a5dcb4abc618bfbf5da1cce1b4d"],["/tags/就业/index.html","a06a1e97528103eee11d819e78cc787a"],["/tags/庐山/index.html","e138c7e363ac125f962b65085186d670"],["/tags/座礁/index.html","1a4b812494e32759c7eb1d86e3474c3e"],["/tags/政府/index.html","05a1f3b2e52c67396b5a707a3cb46b27"],["/tags/政治/index.html","2cf8c2e73341e5cd1093a4a283646c0f"],["/tags/教程/index.html","e3197c789501c8bd18d7530b86e20e33"],["/tags/日本教育/index.html","fad5492b62651ae51af372aa8ecb1ad1"],["/tags/民生/index.html","1ceef44c4fac8a4bb60eb894ce5b847a"],["/tags/民生/page/2/index.html","4254d70fdbb2251bc4a3b7fcbb71fd67"],["/tags/游戏评测/index.html","ff1eba59f81538ae761b3d3198ab377b"],["/tags/游记/index.html","8b9cb50f17c65c22603cd156d2525d0c"],["/tags/生活趣闻/index.html","561312dcb62a570f56dd7a42c08eb278"],["/tags/科技/index.html","08c78e8c1b4893deb15fa5ffa6bdaedb"],["/tags/经济/index.html","15b1d2a1fbce71d9d0e5279744195610"],["/tags/经济/page/2/index.html","f926413959916b987c9c926751b4b73b"],["/tags/网络教学/index.html","de017ec15b306b2fcef31d6ea8abf46e"],["/tags/舆论/index.html","5ef1419d9cda1e207c051f551fb23247"],["/tags/虚拟现实/index.html","85af986a2a3d4582f63c79a95affaf7b"],["/tags/随想/index.html","65f245bbb7e061065a99c11199d4afa0"],["/tags/障害者/index.html","b323a289f55e9be1a39acb23eb057d7d"]];
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
