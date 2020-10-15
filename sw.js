/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/05/20/2015-05-20/index.html","d658906043c4e043c0a777ab63187f47"],["/2015/06/16/2015-06-16/index.html","4645bfc605cd7c479a5ee10a1802515b"],["/2015/12/12/2015-12-12/index.html","b535e5b8a7bc2b320184b882342b6dc0"],["/2016/06/08/2016-06-08/index.html","15cddb94d1d5cbfaeb9c7e4287d1192d"],["/2016/12/18/2016-12-18/index.html","61bd0e7a30b17544d8cef6bafa846489"],["/2017/02/17/2017-02-17/index.html","05d18e131fe2b3dd7b7bcafeae3211ee"],["/2017/03/17/2017-03-17/index.html","2efd16d57fd146acd7bbcf25c7492273"],["/2017/04/06/2017-04-06/index.html","d5b64b39cd9189b74c82aaeb0869cdaa"],["/2017/05/17/2017-05-17/index.html","b210171b772cef84834b41d417e6fb45"],["/2017/08/15/2017-08-15/index.html","e6c9e7557a95ef02e95c7ff5136366e2"],["/2017/09/16/2017-09-16-1/index.html","57d92dbe939d1a3690af37c293c2883e"],["/2017/09/16/2017-09-16/index.html","cf40bbb4e50386a4d90b72ce628dd45b"],["/2017/09/21/2017-09-21/index.html","20913ea937a861c2563768e1f88c1aa6"],["/2017/09/23/2017-09-23/index.html","9c9777c7844a49cfb442076955d7f451"],["/2017/09/26/2017-09-26/index.html","257b82d776aa051492551b7b26163573"],["/2017/09/27/2017-09-27/index.html","6e4181e583f65f5bcb5ce7b6fe3dc113"],["/2017/10/04/2017-10-04/index.html","b5174940cd2d143da62a028057cc9067"],["/2017/10/08/2017-10-08/index.html","2b2eac4478f3582a54af08296582bc3c"],["/2017/10/09/2017-10-09/index.html","a8be9ddaf98dc680bdcdb4b9f4918a5c"],["/2017/10/15/2017-10-15/index.html","c52b9c605289532bf9f58fc283db788a"],["/2017/10/19/2017-10-19/index.html","687691c2343371ffff962e7cce822449"],["/2017/10/23/2017-10-23-2/index.html","c008b6dbebf1e01c9538badcf8216571"],["/2017/10/23/2017-10-23/index.html","fb49b0ecb7fedfbf810032bec0feffa4"],["/2017/11/08/2017-11-08/index.html","97247c3d1043bc75ade7eacc876ef92f"],["/2017/11/12/2017-11-12/index.html","964b0385f55bd2aab3d572680ff2f280"],["/2017/11/15/2017-11-15/index.html","4719641eda446b7421b7fe524bbe9155"],["/2017/11/27/2017-11-27/index.html","cc7841d72c16e7e01e4fbadef2defb76"],["/2017/12/06/2017-12-06/index.html","21bdb5279a7ebb4ba2b0ea13bf21c523"],["/2018/02/12/2018-02-12/index.html","ebc49d931076ade6e9c7252bd090e5af"],["/2018/03/26/2018-03-26/index.html","04496744c48d1a6fdc58f39f0983c7dd"],["/2018/04/02/2018-04-02/index.html","83cc3547e8dfdabc2449d879ad13a364"],["/2018/04/24/2018-04-24/index.html","e790f547dd4b28a84ffc69812102f367"],["/2018/05/18/2018-05-18/index.html","de0380fe0af87aa5739f7a9dca454329"],["/2018/05/23/2018-05-23/index.html","a47fd8daf0521ea52546cb73ddd74a7a"],["/2018/06/08/2018-06-08/index.html","ffc4f580bfc6c0b005ddd515d2cfa665"],["/2018/07/01/2018-07-01/index.html","9a71b2b04884c4de5c18d0e0da746b47"],["/2018/08/30/2018-08-30/index.html","bdcb936bc737770eed11fbd495b66c78"],["/2020/07/20/2020-07-20/index.html","8e7b351e1a9be70f12a82abeb6742943"],["/2020/08/01/2020-08-01/index.html","26630bd9debe1f6146090f5a32973ccd"],["/2020/08/02/2020-08-02/index.html","f0406b72ff285a09d31ff310540d40a9"],["/2020/08/03/2020-08-03/index.html","3543316a3c9c14be1eee99d20b834817"],["/2020/08/04/2020-08-04-1/index.html","91f7b46006548d93ec3b37a36878ff4d"],["/2020/08/04/2020-08-04-2/index.html","b0a321ef451934bb4595ba20612b071d"],["/2020/08/05/2020-08-05/index.html","929851e85bd34e07238395f28e37dc3f"],["/2020/08/06/2020-08-06/index.html","45b5dcfa0cbd6390624016eeef862744"],["/2020/08/07/2020-08-07/index.html","8a6dfee5773001051fbfbe0fa121f826"],["/2020/08/08/2020-08-08/index.html","ab7cf55279859a7150683d42234f88ca"],["/2020/08/09/2020-08-09/index.html","bad50933f8ab35496a00f0d9f12a0f59"],["/2020/08/10/2020-08-10/index.html","ed5612873117c35fddb26e0f094e482d"],["/2020/08/11/2020-08-11/index.html","8cdac8373f94023264c5539d7c3443ff"],["/2020/08/12/2020-08-12/index.html","324baf7a06961fa116b373e66776c554"],["/2020/08/13/2020-08-13/index.html","38c6a3e9e3547029135ec3583da53c6b"],["/2020/08/14/2020-08-14-1/index.html","e6cd1599285a0dccea6b49f07c878132"],["/2020/08/14/2020-08-14-2/index.html","52f5a40bdc1312f3744ff2d0acfea790"],["/2020/08/15/2020-08-15/index.html","889f010101119ec451a46ce994ea8683"],["/2020/08/16/2020-08-16-1/index.html","8c88671b8eb2aa4b7d70d530e4e62050"],["/2020/08/16/2020-08-16-2/index.html","39a2898a3432a692fbb3d835c56575ce"],["/2020/08/17/2020-08-17/index.html","4ca66f67cff62227c2f0b23cdafca6f9"],["/2020/08/18/2020-08-18/index.html","400f8a566fcffa995a169fe5339f6c1a"],["/2020/08/19/2020-08-19-1/index.html","2691575d0e12d6b588ed2a0669c78315"],["/2020/08/19/2020-08-19-2/index.html","7e97eca166ea858bac20a669f047e774"],["/2020/08/20/2020-08-20/index.html","6e45f4323dec30122a9756596d607b8a"],["/2020/08/21/2020-08-21/index.html","502af025081335d2cd6411c8db0e291e"],["/2020/08/22/2020-08-22/index.html","cde1a4402f5b42be9842532902b67929"],["/2020/08/23/2020-08-23-1/index.html","322f2faab3adeeb12a7fb1f7a3ee6fb4"],["/2020/08/23/2020-08-23-2/index.html","7759bf67dc3ede1fb165b69ca833a643"],["/2020/08/24/2020-08-24-1/index.html","b66261426673d7b3322259466560de68"],["/2020/08/24/2020-08-24-2/index.html","8a405f51f5165bb54b317b0553b8d158"],["/2020/08/25/2020-08-25-1/index.html","5deb8b3e745af57f493360ad3295db36"],["/2020/08/25/2020-08-25-2/index.html","e809e035db858f16b99ac249a437a7a5"],["/2020/08/26/2020-08-26/index.html","87c922c1d8aaa38d9b7065f594f8826c"],["/2020/08/27/2020-08-27/index.html","248e5ac8078f9fefe94518d9c91494e0"],["/2020/08/28/2020-08-28/index.html","9740bf0346a5e667aacd3b48ccfdef7c"],["/2020/08/29/2020-08-29/index.html","db2a7a251e6af94615b43a8e347cba4a"],["/2020/08/30/2020-08-30/index.html","3dd14afce9a9128cd21d2b82f6039938"],["/2020/08/31/2020-08-31-1/index.html","2a8c637c7f99968540a0843266155ce8"],["/2020/08/31/2020-08-31-2/index.html","b728b03fa578998244612eecf07c1d29"],["/2020/09/01/2020-09-01-1/index.html","b7dececdf8da8a632abf4ceaaf7bc550"],["/2020/09/01/2020-09-01-2/index.html","35a0c0f77ff2bb85c5acff414d5b35ad"],["/2020/09/02/2020-09-02-1/index.html","cfd432ebe1385d7768751b875496ca39"],["/2020/09/02/2020-09-02-2/index.html","0aeb54d77fa99547cb6e962086b3e5e3"],["/2020/09/03/2020-09-03-1/index.html","55fefe7af91d9955c4d03045d27b52a0"],["/2020/09/03/2020-09-03-2/index.html","ce19ffbc7fef0b4a262d082f0f627722"],["/2020/09/04/2020-09-04-1/index.html","6041b794dc61ca2f9318f2ad934f81b7"],["/2020/09/05/2020-09-05-1/index.html","3d8726ad4aa5b71c558002c09a5a29c7"],["/2020/09/06/2020-09-06-1/index.html","68ad63b250256f888eac8f6139148567"],["/2020/09/07/2020-09-07/index.html","8c0956a8283f0482d266284a0f9b01df"],["/2020/09/08/2020-09-08-1/index.html","2cfa1667c55ad435077e26254489bad9"],["/2020/09/08/2020-09-08-2/index.html","7a0d481ca73125692802448bfd0da413"],["/2020/09/09/2020-09-09/index.html","1a818c89b1609221db1a2418ea3e6d32"],["/2020/09/10/2020-09-10/index.html","96a8a5980aee2d75788722b827c6a555"],["/2020/09/11/2020-09-11/index.html","3d3533ed7b83d22a59615de9fa546087"],["/2020/09/12/2020-09-12/index.html","53f0200353c9c9c5885049576354ea33"],["/2020/09/13/2020-09-13/index.html","1900992dccdf3dffd20491b9ed994c1c"],["/2020/09/14/2020-09-14/index.html","adc53546c502180b8256c1398e8b206d"],["/2020/09/15/2020-09-15/index.html","59a23b6cbd4e3db4065b606d6e27653e"],["/2020/09/16/2020-09-16/index.html","550fd30a27610c688a396fe687bb60c8"],["/2020/09/17/2020-09-17/index.html","29a87940799a5c9c9f5b6517055f8eac"],["/2020/09/19/2020-09-19/index.html","6de0f0a60298a08ab6997003c3a37b56"],["/2020/09/23/2020-09-23/index.html","a60a0c4c2f40b95f0c0b577345ccb578"],["/2020/09/24/2020-09-24/index.html","8c207001c63ca9ca688139d7fcf424d3"],["/2020/09/26/2020-09-26/index.html","64d4ae3271bffcb462d41a67f3a1b33e"],["/2020/09/27/2020-09-27/index.html","dec1208d5e119b12f4dd6a67aa5c93be"],["/2020/09/28/2020-09-28-2/index.html","975cfee72b26e67dc79877716cb06adb"],["/2020/09/28/2020-09-28/index.html","11d477be23e12cd36866892eadff960d"],["/2020/09/29/2020-09-29/index.html","b90cbcff0975609adbbcb1de8b5fc3c6"],["/2020/10/03/2020-10-03/index.html","88dfb1e5ddd6b122e278f77c34031dc8"],["/2020/10/04/2020-10-04/index.html","5dd61cf4ce6c00be96499966791d28f5"],["/2020/10/09/2020-10-09/index.html","fc162bd855241c23381ba19b87d737eb"],["/2020/10/10/2020-10-10/index.html","0eced7e80e090af8a62f5df064b32463"],["/2020/10/11/2020-10-11/index.html","a00ba313d859f900d406bef107a7f154"],["/2020/10/12/2020-10-12/index.html","246deb5cf4a63d7e1bea28035d75578d"],["/2020/10/13/2020-10-13/index.html","01f63520f107ce0ef923f9fdda536259"],["/2020/10/14/2020-10-14/index.html","e9c86e439fafc5e3f5080dbbdb153d3c"],["/airplayervisual/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/airplayervisual/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/airplayervisual/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/airplayervisual/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/airplayervisual/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/airplayervisual/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/airplayervisual/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/airplayervisual/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/airplayervisual/index.html","dfdea100e278c6349488a090f197f46f"],["/airplayervisual/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/airplayervisual/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/airplayervisual/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/airplayervisual/js/jamsetting.js","7927507e0080ddf55c6d8b5f526bd942"],["/airplayervisual/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/airplayervisual/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/airplayervisual/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/archives/2015/05/index.html","0d2726d6abeff4d7cacb95c16f0bf318"],["/archives/2015/06/index.html","26b2a74210716a4487a77f35b94dbb4b"],["/archives/2015/12/index.html","a91a9b14ab8fc37c56adc9d6bff717d0"],["/archives/2015/index.html","3eec1eca344edb0b4dfa05dd4af1514b"],["/archives/2016/06/index.html","05671803073ea673446b17a78bda110e"],["/archives/2016/12/index.html","ec6da4b73187359c7e50a632ea481a2d"],["/archives/2016/index.html","2d6cd9987e5df99d023d1606ed822955"],["/archives/2017/02/index.html","39ae7bc527dc22d0f0a55ce75089b8aa"],["/archives/2017/03/index.html","382afd13a2fbb9d1b983fd9a6696f9be"],["/archives/2017/04/index.html","300b2baa4a428264b23fbaf83c6dc817"],["/archives/2017/05/index.html","4d968425d2ec93a8efae2c5058804c09"],["/archives/2017/08/index.html","926abefa400b05515a9f145ef22d6291"],["/archives/2017/09/index.html","f7f054b47bfb1545cd813c33942f0b65"],["/archives/2017/10/index.html","1b9824a32026c30feaf40fc27a013abc"],["/archives/2017/11/index.html","01930289f41b22dd22b95a0f08874c4b"],["/archives/2017/12/index.html","374f63d693cbf0d1bc33169c0e101f42"],["/archives/2017/index.html","ee3114e683a83c4bb91c792298395ab8"],["/archives/2017/page/2/index.html","93be8216c877256771ad96a3c3cad664"],["/archives/2017/page/3/index.html","aaa434c87faaa9239fdf5aa00bfb46b8"],["/archives/2018/02/index.html","f69c62899ed3cb65a7d61cabb016e418"],["/archives/2018/03/index.html","5fb03a5f275f6cc6a543c911dc8879dc"],["/archives/2018/04/index.html","63f390895d10e4b18e29dfba1e74b11f"],["/archives/2018/05/index.html","056493015b6661349b88ab150ea1eb0e"],["/archives/2018/06/index.html","458e25582e06a64c677fcd99b22339a8"],["/archives/2018/07/index.html","a84b8b86986c17fa0b4235707bb5350e"],["/archives/2018/08/index.html","0c7cae25d895e0d014e5b586a3eb7b5a"],["/archives/2018/index.html","861a7d73a3f8db4c423b7444dc4cc40c"],["/archives/2020/07/index.html","00e61482fe5c579bec59555fbfec819d"],["/archives/2020/08/index.html","8a077de71f4524d5f60557f25a2732da"],["/archives/2020/08/page/2/index.html","fb7b3747efa8a2b66238003f1b5cca36"],["/archives/2020/08/page/3/index.html","2a40be8dbc7d158e209a9aa4c9910879"],["/archives/2020/08/page/4/index.html","6ecccc24dd52a4f138312bf2fbd8ceac"],["/archives/2020/09/index.html","f2bf4acbe14bcb7b5cca8f20dfbaf2dd"],["/archives/2020/09/page/2/index.html","249a29fad1f16b7dfb9f7e79639be141"],["/archives/2020/09/page/3/index.html","61a48023a6952465e62b69c624eb58bf"],["/archives/2020/10/index.html","23af5469162304bd74dd800b2a2846ac"],["/archives/2020/index.html","586db4c1ecf9a0668278138fe908b63c"],["/archives/2020/page/2/index.html","2fc307c0385726567af9e8a9b6508e73"],["/archives/2020/page/3/index.html","fc986a7f59cdd22fa04b24fc18b1bc57"],["/archives/2020/page/4/index.html","bb3824c51e94f28dfca424a29c796026"],["/archives/2020/page/5/index.html","ff19cdd4a80a423d1036e928704e0168"],["/archives/2020/page/6/index.html","f779bd1a0e6a8bec672b6e05c9a973ce"],["/archives/2020/page/7/index.html","3b46fd1b1d7e8e71eca5df45c464f2f7"],["/archives/2020/page/8/index.html","6fdb03577b5a0e91525a810c90ae2288"],["/archives/index.html","b4fffb854f9eee3b860eb0df5899da34"],["/archives/page/10/index.html","538fec78b8c389bf3c25c5be26704b46"],["/archives/page/11/index.html","b89066354cf42303349a367eb1412a0f"],["/archives/page/12/index.html","320f1cc0d139857416f9274ca76f9296"],["/archives/page/2/index.html","e1221fbcb0c51675408cdcfe60b7419f"],["/archives/page/3/index.html","d6bd84a6a5c3ac3cbda83dde6fdff81a"],["/archives/page/4/index.html","3687e4b0e4fd08284c44e917c8507aad"],["/archives/page/5/index.html","4c39fc758a5886e84d3b7680ab74962f"],["/archives/page/6/index.html","63333fe81a693b251daf3a2804333958"],["/archives/page/7/index.html","5d704018d3d3f43fd479967acacd604a"],["/archives/page/8/index.html","b445f432b3e7e481e1530dd61a53676b"],["/archives/page/9/index.html","351fa8f1a31bf39676eb3c035c144f33"],["/categories/NHK听力练习/index.html","9950763ae0cb7b3800bedfd5e77d24d5"],["/categories/NHK听力练习/page/2/index.html","895566d5bab94121e594a3867f274f94"],["/categories/NHK听力练习/page/3/index.html","270a2372c1c40a39c150d6d4d596b445"],["/categories/NHK听力练习/page/4/index.html","6a372fdc0068796d9cca665ebfe81599"],["/categories/NHK听力练习/page/5/index.html","e36b4fcd4f376f06cd14dcf73491e240"],["/categories/NHK听力练习/page/6/index.html","8a12bda83e48157533402f92a60cf846"],["/categories/作品集/index.html","165c429ac5cc6c5a1d05376c2c19a1f8"],["/categories/作品集/page/2/index.html","634f8c1941d5581b79bd55f130fae051"],["/categories/学习/index.html","d4089aca79026028689dc39332325398"],["/categories/学习/page/2/index.html","96e5f39dce70449e1dfac8d3d2617686"],["/categories/学习/page/3/index.html","65a6541bbfcfb2538c6ed294e77f1421"],["/categories/游戏评测/index.html","b4d992305e1d1def611bbceda4eb331b"],["/categories/生活趣闻/index.html","2b4093a78d6d3538b0826997f98a0eb2"],["/categories/随想/index.html","1782db9c966c1157c35634a9b1d447f1"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/addcss.css","59cae1ddbe6925c34f846ffe12d19921"],["/css/background.css","32d5acccbb94f987faf37cfdc3fd06df"],["/css/calendar.css","0090a32d2a61d42c5bfed254bfba078c"],["/css/clock - 副本.css","65602c2385c7eab42ee3804cd6ee0a5a"],["/css/clock.css","9db53e3bffb704c740aa83bddaf8b999"],["/css/cursor.css","c1a23e168c5b794ff367eb0ae77eb26b"],["/css/danmu.css","2a5b914a9592bcd353425c6d5fa7af8e"],["/css/index.css","e0ecbfc6d569c15e3c74302c0114ce1f"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/loadingline.css","bc1ee020a6a11fea17b915b97e6978bf"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/html/calendar.html","bddcec1edba7f4c49fe5cd75f8cdf5b2"],["/html/shiyan.html","da85d57969fbd1551b103cff5306119f"],["/html/shiyan2.html","a055cfa5bc99851a5f9c6d038b830180"],["/icon.png","8ec68de45d18642ba9baf2447e62f476"],["/images/AMJ1.png","d27a6725d1aaaf5324248da4312ab6c2"],["/images/AMJ2.png","00e22eba5901e5bd674e42228cd5bd26"],["/images/AMJ3.png","c8c9ea6348dfcad3a641899d5b587431"],["/images/FOTO1.jpg","4b6f100861908e2c7044cffbdb4a0c1a"],["/images/MVVM.png","ea5a002ee2f85c71a0db51d5adb5de19"],["/images/UT.jpg","367f4e432f9db55a92b2a290c4b0a476"],["/images/UX.png","a183974e958d41d1b6acec70bb7ea00a"],["/images/WindowsTerminal.png","8ac29cb56b8a1768cf7de071e9f1ae6f"],["/images/air-w.png","c1cc32f9d3e17551ca11a7d18a0b533a"],["/images/anzhuang.jpg","912b2489957f8344406edc5e5cebe5fa"],["/images/api-setting.png","2c0bb074390779721cba009e96c5417c"],["/images/apikey.png","1f31121b190eb1f990bcc3e27524bc03"],["/images/backpic1.jpg","86a6fa88167feb338fbf1a4e9057114b"],["/images/calendar.png","86319b08b93be7c8bc47cdba7a169563"],["/images/clock2.0.png","0a0f122c7a25262fc02ee99df0ef21eb"],["/images/example.png","aaac9983e5d59f919bf282dcff2edb3c"],["/images/foto17.png","28db4c6608ad1ee6b34238cafab25e5e"],["/images/foto2.jpg","be95b922512d004a61f83c97af3e2602"],["/images/foto2.png","0dc07d4e1b00526a273a89dc8b81548d"],["/images/foto3.jpg","551c0616c92c4ee7cc17dd458b3c46e9"],["/images/foto4.jpg","9d1d9fea759a41afc0061866e400339a"],["/images/foto5.jpg","984f618b15372f37d54f507e6f379f10"],["/images/foto9.jpg","b683fc0b998e80ff8f5a3e45e889807c"],["/images/girlpic.png","ff1e8427ed555af639e6d849f8f648f1"],["/images/girlpic1.png","698e5570e821c3cae643cc9777c2292e"],["/images/girlpic4.png","551882e4b9b6afb79000fd34c0dbf5e5"],["/images/headimage.png","332502f36a0297b30cb7969fe6de8451"],["/images/hexo.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/hexoWT.png","c027cc9f5665c7d7ba657e7a4bb40017"],["/images/his-json.png","7d8a71e38ab684107446e5c72c31854e"],["/images/history.gif","0459a3dcf2317253de0b34482880c63c"],["/images/homework1.png","e8d2f64d0785519ea7779016208a2900"],["/images/idea.jpg","5eb08bf6c965588f03c8860f201cac45"],["/images/key1.png","f2a370e02ad6c5a101db20b47a9a0008"],["/images/key2.png","21dc40bbe0377cd9fe85a9cb431c18f0"],["/images/life-cycle.png","02f39ea5c041d45938fda4b50f234cb7"],["/images/life.jpg","74d2d9c5f48ec59e3badeec690941812"],["/images/listen.jpg","9d4f73cd5634f43deaed4f9aca03f9a3"],["/images/loading.gif","ffa0804a5d99e2d5b39e05cda6d6b28b"],["/images/magnet.png","4899a924f3de0d19dbe0415128c07d65"],["/images/magnet1.png","8d010eb86ca943e036adaa7de57aee7d"],["/images/magnet2.png","293cb414a8ab93b43bde3bebf9cf0cfc"],["/images/magnet3.png","1923148630e2e094ff80bf35aa604c10"],["/images/magnet4.png","9bb4f963ac1c09f02d62525f513f492c"],["/images/meilu/1.jpg","cd67abcc3f543b5c66adc4f9d9c5c628"],["/images/meilu/10.jpg","ac9fb2711e477b5db1c3acb57e899045"],["/images/meilu/11.jpg","364caad6dfc356a3dc630fa067e48e88"],["/images/meilu/12.jpg","274767e5708f79934e5bdbf73eda8f0d"],["/images/meilu/13.jpg","dcab12b84454770b208913db63e825ac"],["/images/meilu/14.jpg","037cdd048284e621f27e17a2c59e8ea7"],["/images/meilu/2.jpg","f6cdb65ae3fad4523b32f5ee38696b60"],["/images/meilu/3.jpg","9e5df3612c2d93bf57313186c954aea5"],["/images/meilu/4.jpg","69ef2d6f4bcd79cf4b4e672b60c6751e"],["/images/meilu/5.jpg","ce81ca16def7613b7ebb368fb554f14f"],["/images/meilu/6.jpg","cafd5b62305f806754a75cc3af8c3b77"],["/images/meilu/7.jpg","b8ae865d386e1e713a6034da6b090c10"],["/images/meilu/8.jpg","afad7a7bf1066c817a8d2e7566bc780d"],["/images/meilu/9.jpg","72f9649f56b564eacf23ce3dacb88029"],["/images/metroui.jpg","5503bfffd450d9ab572b67ea00941571"],["/images/metroui/1.png","79a03b408c19c74eeaa8ff6e17a03f9d"],["/images/metroui/10.png","8309fed71a15c78f2dfa3af1ff75a5f3"],["/images/metroui/11.png","aaf1a007cbae12f93cc2688bace18d28"],["/images/metroui/12.png","0758ea282c3828c47e5c64520ff85783"],["/images/metroui/13.png","12ca7b511927cd4b26e97f3b20908a32"],["/images/metroui/14.png","f44ba7680f7b36df437e2ae2588d0565"],["/images/metroui/15.png","e8927c78b125b805af7aa86fee815ab6"],["/images/metroui/2.png","e604d3c662b996f06f22753ba9ab379f"],["/images/metroui/3.png","664e3b7490f2f95d5547b8ba79a65456"],["/images/metroui/4.png","c0f255344cafc303a1d9c7404da37149"],["/images/metroui/5.png","da2074cdb1298aca826abc1a5c441300"],["/images/metroui/6.png","efef2f087127614b4e03bcbe9a347018"],["/images/metroui/7.png","a4d34b1a2dbe3a58d3a92276880be039"],["/images/metroui/8.png","1d34a626bbaa898a60d4501936bcf962"],["/images/metroui/9.png","0663697c1667b377fe2623bd65e00b31"],["/images/metrouilogo.png","aea81b42d1c2c96440f74cf56ad82e2f"],["/images/nhkimage/2020.08.01.png","af4c55b2ae1d5ab2f56c75a87fcdfdb3"],["/images/nhkimage/2020.08.02.png","c355d41b90f5c65823f96c5f6868ce53"],["/images/nhkimage/2020.08.03.png","fddcedb40d7f28b2ccb90814351ad5c8"],["/images/nhkimage/2020.08.04.png","8b4518ec5a8513f442980ed7167136b1"],["/images/nhkimage/2020.08.05.png","590abfb19334b0c3cee5a005674f2253"],["/images/nhkimage/2020.08.06.png","d469e21100c42435e88f2bdf07f93da1"],["/images/nhkimage/2020.08.07.png","3ca9e2c8b8a09a38423d73cd36e8de9d"],["/images/nhkimage/2020.08.08.png","4420c2d899fe4eb90c48bae0da8418a2"],["/images/nhkimage/2020.08.09.png","df14be338f9c920818dd1daa6aa955ee"],["/images/nhkimage/2020.08.10.png","c4e2ed023cd3dbfd4986add35ca9357c"],["/images/nhkimage/2020.08.11.png","cf562339e57f673d394f3e6cdd1f60cb"],["/images/nhkimage/2020.08.12.png","81dfa179fea3052ddcf73912ea368f67"],["/images/nhkimage/2020.08.13.png","8cf26c2642e7a27cbd86fcbda8bae8d9"],["/images/nhkimage/2020.08.14.png","d88eeb678b3ed3651d597e61957e264a"],["/images/nhkimage/2020.08.15.png","b9879f193867edcffeefce62c9dc7153"],["/images/nhkimage/2020.08.16.png","46cb914aa1d556561897767ec9ff66a0"],["/images/nhkimage/2020.08.17.png","ea1af9645b5cc9cbaafe70a91dd15cca"],["/images/nhkimage/2020.08.18.png","e87e4de39a6f06cf4283a63af92dd8de"],["/images/nhkimage/2020.08.19.png","8001a951513b542a98ce1151be5bd87b"],["/images/nhkimage/2020.08.20.png","4bc8fafa3ecce30d340b1350715d78e3"],["/images/nhkimage/2020.08.21.png","07ad1337e127922abff27da6c672549b"],["/images/nhkimage/2020.08.22.png","b2b5d53ba46015f64048f9d803b12179"],["/images/nhkimage/2020.08.23.png","225af8c0cabe5218ec634d1b8815fd95"],["/images/nhkimage/2020.08.24.png","1d54a484a6e2395aabe9be005cd90361"],["/images/nhkimage/2020.08.25.png","8008ba169cfce0ef2041329cd29b6b77"],["/images/nhkimage/2020.08.26.png","72a2b8094003a54c97a34ea97cf21bc3"],["/images/nhkimage/2020.08.27.png","893407e604804d215c8fef8bcd5f2684"],["/images/nhkimage/2020.08.28.png","b542280b7341759890a99cbd44d822c5"],["/images/nhkimage/2020.08.29.png","620e2e7d4772e39615fd1a88cdf49717"],["/images/nhkimage/2020.08.30.png","f645d7ba2dcb506f9ec6fb9244425ad7"],["/images/nhkimage/2020.09.03.png","c5262f3aa87190e0273383ea1e445681"],["/images/nhkimage/2020.09.04.png","c07149c32aa41c03bc7dac82a713f6b2"],["/images/nhkimage/2020.09.05.png","4e43556e1cb3b7f4d75f0f6127616a54"],["/images/nhkimage/2020.09.06.png","1021d2ae04a7f109404f857a2a7629cf"],["/images/nhkimage/2020.09.07.png","db9827e9f0a4cf1401b559b4644a0204"],["/images/nhkimage/2020.09.08.png","efe1030b73dc1c01f169c3122a194426"],["/images/nhkimage/2020.09.09.png","f6ba3a1c6cdeff88404ebe2a646f2eb5"],["/images/nhkimage/2020.09.10.png","3471b05d02113517359a9e2167befcfa"],["/images/nhkimage/2020.09.11.png","921a541a8bffb1aa436df2eb6db7c99f"],["/images/nhkimage/2020.09.12.png","a51f8ebaddba69bb80f9259a30f17e65"],["/images/nhkimage/2020.09.13.png","0399889200493cd2154ffc407e2bc400"],["/images/nhkimage/2020.09.14.png","eaaf3da69a39ed316b7fc8c4d409bb0f"],["/images/nhkimage/2020.09.15.png","5774959ea4061c9298ea174f0862cc3a"],["/images/nhkimage/2020.09.16.png","0c5a00f74020740fda589c02e4b3f917"],["/images/nhkimage/2020.09.17.png","b5aef734e3a7db4862ca3fe4e6769dc2"],["/images/nhkimage/2020.09.24.png","5982a7b3843f4ae43b2b4bc4b0c577d6"],["/images/nhkimage/2020.09.26.jpg","c6415af781fbdd36fdb034f74646129b"],["/images/nhkimage/2020.09.27.png","27aa6f6a8d5534ccd99cff261dcd9eb6"],["/images/nhkimage/2020.09.28.png","0f4318d1ff17a33de364432a1c44b5ad"],["/images/nhkimage/2020.10.09.png","6408d9f7e66fdeba8b9207939a08cf8d"],["/images/notop.png","d25c272e5ce312a880e04ce8a0b27683"],["/images/pasted-0.png","552608d8f6e39369aa30c6e332a32826"],["/images/pasted-1.png","baafdacee93c99e99418aaedbf524fda"],["/images/pasted-10.jpg","395cff6f64ab5df19baa3572ac98e541"],["/images/pasted-11.jpg","56e5df07c96634638abf7995b25c81ab"],["/images/pasted-12.jpg","61b3f803b85ce3640d7a9ba7efb9da6b"],["/images/pasted-2.png","2f410e53c811f92a6135f48857776f5e"],["/images/pasted-3.jpg","bb5717e691e87355e7d63a5f3a87ae62"],["/images/pasted-4.jpg","10041d0e3567b24b81222ec5075d6492"],["/images/pasted-5.jpg","ac5047a4b48c6cdaee86fa1863e33904"],["/images/pasted-6.jpg","1556ae8d3ad5713d60237ee4d10e81f0"],["/images/pasted-7.jpg","913fde1686587646ddc663bd810cc81d"],["/images/pasted-8.jpg","fc83268081fb4b6b6ecb1ffa1ec5af7f"],["/images/pasted-9.jpg","25e0fa3496591501f5c29d0b802b77d2"],["/images/pet.png","2b8c121909497e57057478856fe48a94"],["/images/pet2.png","dfb1d6a17b527ccc0c600e6ad31f55e5"],["/images/ps1.png","0917ba91f21b6944dc08d35c41a326d2"],["/images/psb.jpg","6a27c58337875c776af0a7667598b401"],["/images/quse.png","7cd1ec12b804305430cb4cdc09c7a893"],["/images/rain.jpg","9c26acc44c692b6a63e134be07b07c18"],["/images/shezhi.png","281bf545f6a4024e2d0b7120bc398a21"],["/images/soul.jpg","d97b4099c0728ff6123d006fa62db86e"],["/images/study.jpg","a9b1cf95ee6bd9f3913e8ec6a6a6f44f"],["/images/tianqizhizi.jpg","dd48d78b4eeaaa52578352f9ef570b14"],["/images/vue.png","cf23526f451784ff137f161b8fe18d5a"],["/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/images/work.png","e521cf5b834292fde1c50e0a0f5802f9"],["/images/xiaoguoyanshi.png","994a3b710d36df0a4630cd9a768c7f7b"],["/images/xiaoguozhanshi-m.png","1fefca18214fc4889d1bb76b81887c9d"],["/images/zfe.one.png","b41f689341882058ffb28c4cee499bde"],["/images/幻想终结之日.png","0025c4d3973bdfedb80db3f78c59fa47"],["/images/时空战纪——游戏建议及意见①.jpg","1337457f14a8dffee66d94f8915b54ff"],["/images/简历.png","d70507ee4615c9e324578c0d777e6855"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favicon2.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","456bd9dbe1c755fb59f518dd75426ec5"],["/js/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/APlayer.min.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/airvisual.js","71cf86bfd452ca01d92438d8266416ee"],["/js/airvisualapi.js","6931bebe1696688d109963187fc2eace"],["/js/background.js","94c8410b174f58594cf81ec99054968b"],["/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/js/calendar.js","a58e02711cc6dec4dc04257e555b8923"],["/js/clock - 副本.js","405186e7a9d73221d2d50c0dea2852d0"],["/js/clock.js","f545c0f3eece5e3e45f3f0547a8a32ce"],["/js/color.js","3730bb4f7b185e6f5130ac28bace968b"],["/js/danmu.js","6b6ae6b7f1b42dd4857541f43b2bb733"],["/js/echarts.js","dc1227b1eba1ba47fd185a387d0a7d37"],["/js/gitcalendar.js","fadfa8a42272cd322118653dca512a7a"],["/js/history.js","20459f7db325e597e64903f4c0d19306"],["/js/historyroll.js","a3e9ac376106816c50a61f9f4306d671"],["/js/jam.js","462c07d3b2e0f20394d994bbcfae37cb"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","455fface5a0a3ff90766ca254affe502"],["/js/rain.js","f656dc28e4ab5c3f8414d35f683278c1"],["/js/rainremove.js","ceacf82842b101f7e54a2aaf5f4bb9cb"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/link/index.html","10e95aba5558560c03200073cf056f85"],["/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","768ba083061222cf6cea776495f842f7"],["/page/10/index.html","8c9d02318b18f8cd113015a9e4507e15"],["/page/11/index.html","69d92d7949ea00010fb6ab7af4d74b16"],["/page/12/index.html","798bd40e06b2a77aee14d59b52ee6490"],["/page/2/index.html","5d74d43a5caad20df1963e8b6ace8c3d"],["/page/3/index.html","7823800ea7def72bc91c1e753ce8267d"],["/page/4/index.html","01b9855b43aebf39fad1d09ee98d502c"],["/page/5/index.html","35baf34ca170ce57e44fad6112a3cab3"],["/page/6/index.html","8f6822b598c34e746fe2089eb1d6854f"],["/page/7/index.html","f6f37b4388b286c55520dcf0751f0526"],["/page/8/index.html","c55e11fd2442090d4356881003540f39"],["/page/9/index.html","c3935cda2c322ca25bbaefda94e03b25"],["/research/index.html","f69cb05d981170c9d395df5eba32cb4b"],["/sw-register.js","5315b73c909b84ba0c99f692fb43cc29"],["/tags/Butterfly主题/index.html","55e0b692bcc7dd92ec42dd158009218f"],["/tags/DIY/index.html","0c735f5da1aa7f6e28eda75f5e6861c8"],["/tags/DIY/page/2/index.html","e7937565ea1d42c7a06c5b60b8916fea"],["/tags/ICT/index.html","8ea0af9179eb25863c834af7c07f6c7e"],["/tags/NHK听力练习/index.html","1d6083e82d5af2468b76d4b4e0c781ad"],["/tags/NHK听力练习/page/2/index.html","c3707d26f9ba8ead153e230ff156eee2"],["/tags/NHK听力练习/page/3/index.html","c1e73cab296e0853b80a0efcd23d76df"],["/tags/NHK听力练习/page/4/index.html","15f0cc75c0c9324a0cbe53f19d84f0b1"],["/tags/NHK听力练习/page/5/index.html","93db5aae8322d398ccd7479a08284841"],["/tags/NHK听力练习/page/6/index.html","fb8412f32fa1bcd5308ca9dd5a1907e0"],["/tags/metro-ui/index.html","2a5f40984d54f91ee76ca1256efcb521"],["/tags/vuejs/index.html","86ad5009a7310c48c6328da926a2a601"],["/tags/お盆/index.html","670a0f8f1fc4a28e8c1fac8eed257982"],["/tags/世論調査/index.html","d693bd9161e4e88cdd8fb1987797c395"],["/tags/作品集/index.html","51fa698c10ef49d216c4d75418a8a867"],["/tags/作品集/page/2/index.html","ddcb2796ec28afea75a19d5bcd934542"],["/tags/农业/index.html","b2bd5c7e127d2518fe596075c16c7f07"],["/tags/历史/index.html","28250b3121f73ea36e4a9f63c203955b"],["/tags/営業時間/index.html","3e4f43576ba9bf7b305a4a21ece02f74"],["/tags/国外政事/index.html","13d0dc26fb73b2df1eb916533ac06b2d"],["/tags/地震/index.html","5be54468ff1e25ebcf44abe1a7acea40"],["/tags/外国政事/index.html","c85db36e1d7d9a976b3a13b318e0e6b2"],["/tags/天气/index.html","b02734fdcb23ea50aa8c51b3f0048083"],["/tags/天气/page/2/index.html","58942e69227f99332c2f187e2a9a8d55"],["/tags/奥运会/index.html","6f8938d64d44ec375616506a4b645705"],["/tags/学习/index.html","7ffc09f961401384a3af8e618c7134bd"],["/tags/学习/page/2/index.html","8076eabae9bf4184ce93d5d93998fef5"],["/tags/学习/page/3/index.html","9d880c09e8633db26581e3bc877a1eb7"],["/tags/就业/index.html","97aa4a31f23111e07fa1697bec625636"],["/tags/庐山/index.html","cfdd4ef1063336c465609a48ff78bd01"],["/tags/座礁/index.html","dd8bade4519f255332f3df2e1b3b8ce3"],["/tags/政府/index.html","de4446881d8e36dc3af8bd7313b1857d"],["/tags/政治/index.html","169ada17ff26f114ec6e065814fe36cc"],["/tags/教程/index.html","cb2a44f2cc70bbe069aa085791f3c27d"],["/tags/日本教育/index.html","16f3abd7a378ae847626ac04a26d8bb5"],["/tags/民生/index.html","887cbe70155ff378fb10f1fa85a1abea"],["/tags/民生/page/2/index.html","ac638387988b84b1f266874fa1adade6"],["/tags/游戏评测/index.html","a82a97f4c16a113151f15f05ba91fbcc"],["/tags/游记/index.html","b73af6eafc3723a3dbfabd89fd72d296"],["/tags/生活趣闻/index.html","1e6f114c4d4af412d5f3eab76adb7603"],["/tags/科技/index.html","e10f79ede46bc0cc22509d2a2661487c"],["/tags/经济/index.html","d4364ade43d6bb9d08086e6b8e2043b3"],["/tags/经济/page/2/index.html","caec6f08ed1b187ca0b0e204b7f60c8d"],["/tags/网络教学/index.html","537e6687078b31e02065c683d8830656"],["/tags/舆论/index.html","e73f93e113f6e8cbc595cef789563e25"],["/tags/虚拟现实/index.html","ff146d1121957516ee38c02c08ac3d43"],["/tags/随想/index.html","cbd216961682560211c79395104d5bc2"],["/tags/障害者/index.html","d57d6a55b8ff1c86bd5cd0319754acb1"]];
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
