/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/05/20/2015-05-20/index.html","cde07a47fb60c6a4fc176bc70be6535e"],["/2015/06/16/2015-06-16/index.html","2dd8591c1d3e4516f5f88478dd96c909"],["/2015/12/12/2015-12-12/index.html","4df92a6b0e5101cf4ac5affe31f46511"],["/2016/06/08/2016-06-08/index.html","4ecaf87fe600cf02bff20ec7e0c2e85d"],["/2016/12/18/2016-12-18/index.html","feabb790d14f29bc1277e87e5f7a5a8f"],["/2017/02/17/2017-02-17/index.html","ab61e8c64d6ee7b2a2e31790f738d16a"],["/2017/03/17/2017-03-17/index.html","8ef40862f777e320525c44f9ab990a16"],["/2017/04/06/2017-04-06/index.html","459acd24972c93cf755ad38b7dea40a5"],["/2017/05/17/2017-05-17/index.html","aefe970849f8a0e68fd1301ef972bd23"],["/2017/08/15/2017-08-15/index.html","6a7d93ad8f9cd7ba1713fa2e3a1bb133"],["/2017/09/16/2017-09-16-1/index.html","8b4453d5deaff8a54eb31962eff266df"],["/2017/09/16/2017-09-16/index.html","28171ab7b44d736bbf9cfd6fd438f6e5"],["/2017/09/21/2017-09-21/index.html","6c513811e800a6a9a414172afa56bf28"],["/2017/09/23/2017-09-23/index.html","3e5c70544911b1765908241c4f51dbe1"],["/2017/09/26/2017-09-26/index.html","c33b8f00928d47eb7622e0083a48deca"],["/2017/09/27/2017-09-27/index.html","e0a692ddc9eaed9611121ac23b0960e2"],["/2017/10/04/2017-10-04/index.html","a1f95b555926c0a6cb6de6ed111499f0"],["/2017/10/08/2017-10-08/index.html","afd65f1edf71078280893cfb763482e1"],["/2017/10/09/2017-10-09/index.html","0a120546d3dbc5bbae823504acc3837a"],["/2017/10/15/2017-10-15/index.html","8f9d14cbed27296524609deeea4d6224"],["/2017/10/19/2017-10-19/index.html","a13bf0d8aa371177c4c8cee41636fb57"],["/2017/10/23/2017-10-23-2/index.html","3d8596403243b9baaab90700f5a40766"],["/2017/10/23/2017-10-23/index.html","dc25a90d0baa7fe799cbb677c69f3ffc"],["/2017/11/08/2017-11-08/index.html","af483de8a0e40f9f2d79ce3c42c1dfc7"],["/2017/11/12/2017-11-12/index.html","d83816f6c4a777cd7315954058e47368"],["/2017/11/15/2017-11-15/index.html","d42ff6efce558e682ccdecbe9637d979"],["/2017/11/27/2017-11-27/index.html","776a987309425009d70af3b97cddeb37"],["/2017/12/06/2017-12-06/index.html","343e30dba61222b2023700ceb98ae9cc"],["/2018/02/12/2018-02-12/index.html","1645f65cd88fa928519589cafb454c97"],["/2018/03/26/2018-03-26/index.html","aac7ba2e1220ad866aa0d37b2364eab9"],["/2018/04/02/2018-04-02/index.html","50aae407a8894d29f1b5261f3b5fd37f"],["/2018/04/24/2018-04-24/index.html","1cad5ae5f8bd1f240743cdc5bf29fdb9"],["/2018/05/18/2018-05-18/index.html","e8961a0256d6000eae2a9d70236671af"],["/2018/05/23/2018-05-23/index.html","5ea0f449bfe274319a23e1546ee6dcfd"],["/2018/06/08/2018-06-08/index.html","0714c1f77bb25b63a98c9485dad2174d"],["/2018/07/01/2018-07-01/index.html","d7d7e38811cae2533711c736ffbd7f68"],["/2018/08/30/2018-08-30/index.html","de6687f2c0e61b79a1304add811f22b5"],["/2020/07/20/2020-07-20/index.html","c6c4788203f3ae067c097962fffac575"],["/2020/08/01/2020-08-01/index.html","df8c353b7b9288ceb57bc5e4019dad79"],["/2020/08/02/2020-08-02/index.html","577fb316a099da97df515a0a81adc861"],["/2020/08/03/2020-08-03/index.html","e807b1138f4b795e729bd096696667ab"],["/2020/08/04/2020-08-04-1/index.html","41963fce6f04ba295ca7bf400fa7eb76"],["/2020/08/04/2020-08-04-2/index.html","3a25e0ebd633e189b80a19e98fd28498"],["/2020/08/05/2020-08-05/index.html","29f92702662b0c1b130ea918d2004efc"],["/2020/08/06/2020-08-06/index.html","6fb0f2f0a9f9e3c90224ba537c230029"],["/2020/08/07/2020-08-07/index.html","837b3ac7682deca4b60a4d3c1bb5a274"],["/2020/08/08/2020-08-08/index.html","3f5ba8336490f1a33019374f78ef4e8b"],["/2020/08/09/2020-08-09/index.html","a88aacc1627e5cd6fb709984d9314767"],["/2020/08/10/2020-08-10/index.html","6f814abcdfaab7cc7fea7575248aa6d2"],["/2020/08/11/2020-08-11/index.html","617b682177a399b6fa3873967478b0d4"],["/2020/08/12/2020-08-12/index.html","1e58a0af499b1bf823260fb7db161e44"],["/2020/08/13/2020-08-13/index.html","5221a762dd6f6df1b6a31b2344b5e307"],["/2020/08/14/2020-08-14-1/index.html","42b01a0264437b6d7a33e625e89c4fa7"],["/2020/08/14/2020-08-14-2/index.html","9ad410f09c10ec3b06dc6831323d1a6e"],["/2020/08/15/2020-08-15/index.html","c31e882c8369d2cf205d072630416165"],["/2020/08/16/2020-08-16-1/index.html","41b2040f99145551fcd6b91c76a65a5d"],["/2020/08/16/2020-08-16-2/index.html","d7ec5fb24799bd02a2b66d4f28b62636"],["/2020/08/17/2020-08-17/index.html","a168233ded55aed9879522dd21af2316"],["/2020/08/18/2020-08-18/index.html","f8026a206310973c32eab9887b7762f1"],["/2020/08/19/2020-08-19-1/index.html","17d24d116f356b8e86d77c5c7ac4f37e"],["/2020/08/19/2020-08-19-2/index.html","3f6a96257f38106a7142a953690259a9"],["/2020/08/20/2020-08-20/index.html","76941100a79e42adaeef559bd574a029"],["/2020/08/21/2020-08-21/index.html","09fb6010bbbe57c450015a07beecd649"],["/2020/08/22/2020-08-22/index.html","e4b0ba3771039512aef4786bc44f1cf4"],["/2020/08/23/2020-08-23-1/index.html","b621e2cf5569b8b2f95cc1b5c02fa6e5"],["/2020/08/23/2020-08-23-2/index.html","f77de79fa24ac40a53f054c2c87582bf"],["/2020/08/24/2020-08-24-1/index.html","293cd4d2c3e95a72b744881a48cef193"],["/2020/08/24/2020-08-24-2/index.html","4d444bce9726bfbc629a66f721247f88"],["/2020/08/25/2020-08-25-1/index.html","1f9e36e2cdb4bb4c8b552cb138daf8a4"],["/2020/08/25/2020-08-25-2/index.html","674761acb04db52ea43dd69ef0699fb6"],["/2020/08/26/2020-08-26/index.html","d1bc7e88def356451497b6eec45ed56e"],["/2020/08/27/2020-08-27/index.html","b2ed79ba0de83d3a30026c2b9a43acb0"],["/2020/08/28/2020-08-28/index.html","f802fd29bd6a2c37c575d45608c34701"],["/2020/08/29/2020-08-29/index.html","ebe56525768dded2c98da3d8f049af0c"],["/2020/08/30/2020-08-30/index.html","46c4f30da7b6f659dfeaa4cae8064b4d"],["/2020/08/31/2020-08-31-1/index.html","33479a51e849eeadaf2d0e6f760425bf"],["/2020/08/31/2020-08-31-2/index.html","60e4e1f95f09a96d2bbc8b4e44a8fccd"],["/2020/09/01/2020-09-01-1/index.html","d19ed130145ed2bdbb73f224f0edc0cf"],["/2020/09/01/2020-09-01-2/index.html","f0b12289889792e839ac8969f1b5c90d"],["/2020/09/02/2020-09-02-1/index.html","47aac25506bce1c3048481dc0b508265"],["/2020/09/02/2020-09-02-2/index.html","68a28f9bf92ae656c7927a290884e333"],["/2020/09/03/2020-09-03-1/index.html","1f7ba2b6f94888ea747d0837ef0b265c"],["/2020/09/03/2020-09-03-2/index.html","43058deffaabb517ae9c901452fff368"],["/2020/09/04/2020-09-04-1/index.html","f8298aab4336c1cd4e2d18a6df11dbcf"],["/2020/09/05/2020-09-05-1/index.html","5161ac60f2b1f486bd4893696fa2c630"],["/2020/09/06/2020-09-06-1/index.html","c62f4b3872b388a02e882a0934edf823"],["/2020/09/07/2020-09-07/index.html","52776d6d7c14710f81607d5e483568f6"],["/2020/09/08/2020-09-08-1/index.html","8230989862a41be98fb995c4b048ee99"],["/2020/09/08/2020-09-08-2/index.html","843a06eded7b4b6afe53f5d3e19dc0c0"],["/2020/09/09/2020-09-09/index.html","a61f4c2cdab6e5e0bdcbf685446fb827"],["/2020/09/10/2020-09-10/index.html","9e605b625b094d81430bee6225cf3102"],["/2020/09/11/2020-09-11/index.html","d7d2e0e32e4b9beca2fb1076ba77b532"],["/2020/09/12/2020-09-12/index.html","1d4ccd9d5db9b117d9c408fc5bc8b4c6"],["/2020/09/13/2020-09-13/index.html","86e8314c651575c33a8cf49db0dcf4b6"],["/2020/09/14/2020-09-14/index.html","417dfcd413fb56f9ad5c7f9d45e7615a"],["/2020/09/15/2020-09-15/index.html","84a018e324457e1f6a2df4dfefa82bc6"],["/2020/09/16/2020-09-16/index.html","1ff6b870c861f5094e5aa6c92dc23c9a"],["/2020/09/17/2020-09-17/index.html","508d1cbf72eca87ff7c087d09d1d47eb"],["/2020/09/19/2020-09-19/index.html","7b2469321b461b901dd9390907a31451"],["/2020/09/23/2020-09-23/index.html","b387084b7e1e55250eba5701ffc6c37c"],["/2020/09/24/2020-09-24/index.html","459390888e6b46b45682ca42f98cc034"],["/2020/09/26/2020-09-26/index.html","a95589d5b8e83c38d65487c3faa02b44"],["/2020/09/27/2020-09-27/index.html","db6372223b44bd1b60d565ce96fe6c8d"],["/2020/09/28/2020-09-28-2/index.html","4eddfb9d137671994adb4b75f1058543"],["/2020/09/28/2020-09-28/index.html","6ed965dcf2f661351e5f3731991bc73e"],["/2020/09/29/2020-09-29/index.html","f12d9551f4f53a29f614d11dea8c10fc"],["/2020/10/03/2020-10-03/index.html","760b9b3ada9015339c62fd6eab3fa92a"],["/2020/10/04/2020-10-04/index.html","2e62a67824c377aa9321ce41c931c555"],["/2020/10/09/2020-10-09/index.html","085c12d9dae782ac9b4f9d84e680b95c"],["/2020/10/10/2020-10-10/index.html","246e8f5710a6821b1c89e37514c013cf"],["/2020/10/11/2020-10-11/index.html","a6f5d185e3ad37e2c99bb2e0bf2c2828"],["/2020/10/12/2020-10-12/index.html","2f41e8445542b748e9914114de51f60c"],["/2020/10/13/2020-10-13/index.html","e4149e0ddc31c45c7df9132621998177"],["/2020/10/14/2020-10-14/index.html","2cb22d35eff082135b78317aa0a28c7d"],["/2020/10/15/2020-10-16-2/index.html","26b2e55c1c6120bf6c1d7d1659f1c439"],["/2020/10/16/2020-10-16-1/index.html","6d92026e06b724872cde96286b5b78bd"],["/airplayervisual/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/airplayervisual/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/airplayervisual/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/airplayervisual/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/airplayervisual/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/airplayervisual/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/airplayervisual/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/airplayervisual/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/airplayervisual/index.html","ebab7c9ad8c0ac0927dc3dd4deef911c"],["/airplayervisual/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/airplayervisual/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/airplayervisual/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/airplayervisual/js/jamsetting.js","7927507e0080ddf55c6d8b5f526bd942"],["/airplayervisual/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/airplayervisual/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/airplayervisual/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/archives/2015/05/index.html","5ee7cc087047b48acc6e69ba497f292c"],["/archives/2015/06/index.html","0d87192e1681bbee41388d8cc15ab407"],["/archives/2015/12/index.html","7869403306b93cfd07d02551af2c8745"],["/archives/2015/index.html","6f36762aee30b8450f19e6e3f5552d7a"],["/archives/2016/06/index.html","72f7cfabe4e8bb77dafa9f5bc7f5c2ad"],["/archives/2016/12/index.html","002a840c9a9cb37d28cb76258c3f4059"],["/archives/2016/index.html","ca241d52e99f082f90bc8ee4018b7f4c"],["/archives/2017/02/index.html","0e62e392c53b30b16861d146c048ecce"],["/archives/2017/03/index.html","47c7c582bab9c97857d260a270ed8961"],["/archives/2017/04/index.html","339182effcb64435b0e77fb9f943c1c5"],["/archives/2017/05/index.html","88aa81569e2eb53931c357a2605144b1"],["/archives/2017/08/index.html","6ebcc24bb1d29172a7b7da58d5934b1d"],["/archives/2017/09/index.html","606e1769c885207838942adc48bd54d1"],["/archives/2017/10/index.html","d80a599643504d693ae71ec140bfc3b8"],["/archives/2017/11/index.html","61af75de3cfd0e1d64d88bcf145e73dc"],["/archives/2017/12/index.html","60ad229bb93c87ece235e31175c835d8"],["/archives/2017/index.html","fc31d300be16c7feb15a9148a73ba717"],["/archives/2017/page/2/index.html","c283d721a836417d2d8a0798710a9ccc"],["/archives/2017/page/3/index.html","491ff2c533a065d33b7b4b7bd407e048"],["/archives/2018/02/index.html","c6aa43e9a4cad842d3acc55aa0df73c8"],["/archives/2018/03/index.html","2596716e352b2c064673dedcfb002c4b"],["/archives/2018/04/index.html","325870976e094253738de03a513ad422"],["/archives/2018/05/index.html","d325a44d8c60e649cc60ebc23ed88a73"],["/archives/2018/06/index.html","7ca4c1097b35ef987cc87db1757d0af4"],["/archives/2018/07/index.html","4559527c9c986c87a566fd94aa214790"],["/archives/2018/08/index.html","7e468ff0a914eebf70463cd9f37135d9"],["/archives/2018/index.html","d2129ea2e69e84c3552c5d6062869257"],["/archives/2020/07/index.html","be5a239b517f0daf2a6549cf8b8eccc2"],["/archives/2020/08/index.html","8340d63fcc3ce9a76b98dd74965187a9"],["/archives/2020/08/page/2/index.html","36bcce20ed460ea1c3e6a72ffe264d2e"],["/archives/2020/08/page/3/index.html","0e43374b040dcf879d8dcbcf1051ed93"],["/archives/2020/08/page/4/index.html","dc9a011b619710ecddca0f011897a1cd"],["/archives/2020/09/index.html","fea27a0eec5b8dc91a564c0cc2cc66c6"],["/archives/2020/09/page/2/index.html","94902b2b2f1b8c0d186e1f8a0c994ca9"],["/archives/2020/09/page/3/index.html","583c0f8ffc8a203ebdb9ec2e184d0222"],["/archives/2020/10/index.html","86d49c8d241a8a2fc2c80ab5b9d3f258"],["/archives/2020/index.html","6c0961b656ee009ba8b998ddc231c0b4"],["/archives/2020/page/2/index.html","f1e83f08e73488bc4af642716eab03a8"],["/archives/2020/page/3/index.html","85a5fba9f06252e06bde3820000a8ce1"],["/archives/2020/page/4/index.html","56dbc4a72da13612a5b8d76f22ebcb31"],["/archives/2020/page/5/index.html","acc4dadb640e8e2baa24355940b07a1b"],["/archives/2020/page/6/index.html","faca7ff3c4864dada1541d70057bf50b"],["/archives/2020/page/7/index.html","0ec755297fc71b0475a4b01ed5b61eb9"],["/archives/2020/page/8/index.html","494df883dbf4c281791ae096f45d331b"],["/archives/index.html","7e8c5feeec6012f602976031ec65b7ee"],["/archives/page/10/index.html","0569d171e923e2a62efea1b9649c1671"],["/archives/page/11/index.html","161e3b94621f9c48747ae229f21bbe7a"],["/archives/page/12/index.html","80514c95c2cfec8108caa9f60375c24f"],["/archives/page/2/index.html","3ff774f2ce47ffdd63ad3f67a492dea7"],["/archives/page/3/index.html","df78c7705a51ac04d015ad753c32037a"],["/archives/page/4/index.html","9820029fcb03b17d49064b5fceeb8beb"],["/archives/page/5/index.html","0a205bea236c0f42ef49c89925a93153"],["/archives/page/6/index.html","de3d432b021241f30a99d6cad27e938d"],["/archives/page/7/index.html","f50593a6ebcef86183d31c6ba41e041f"],["/archives/page/8/index.html","8a29dffc9163b5b491f61ee426687970"],["/archives/page/9/index.html","6eaeb14080c8cf85a0e1cdb280f06ce9"],["/categories/NHK听力练习/index.html","48d23633b497234c5f8ae0d00f68d102"],["/categories/NHK听力练习/page/2/index.html","3e11ada122a22f511754263abcac7531"],["/categories/NHK听力练习/page/3/index.html","7d09c9ef1e565ca4d57a111ca70f2cd5"],["/categories/NHK听力练习/page/4/index.html","e4f4a268f1886e78e880cdad69092d05"],["/categories/NHK听力练习/page/5/index.html","43bd7c025b07a2ccce48f673834ef965"],["/categories/NHK听力练习/page/6/index.html","bd67fc459897fe3d4c30695db144ae1c"],["/categories/作品集/index.html","99a2620567f4300368ed242cf0fd11d7"],["/categories/作品集/page/2/index.html","880ae0094dfb8ecc528580a367037d97"],["/categories/学习/index.html","162854dcc8b328379a9166cd10500c2e"],["/categories/学习/page/2/index.html","7124d79baea6d7d792dc621dda0049c1"],["/categories/学习/page/3/index.html","1021dddf660996e147954a8966621818"],["/categories/学习/page/4/index.html","98afc9db3fd7564764964f2f9e98baf2"],["/categories/游戏评测/index.html","ea7635d016b5d26ceb8365b543e53164"],["/categories/生活趣闻/index.html","e9573fbb1202ad4c46b27dfd353befc6"],["/categories/随想/index.html","984dd3bfad3b0ec1414a2feb4ef84db0"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/addcss.css","59cae1ddbe6925c34f846ffe12d19921"],["/css/background.css","32d5acccbb94f987faf37cfdc3fd06df"],["/css/calendar.css","0090a32d2a61d42c5bfed254bfba078c"],["/css/clock - 副本.css","65602c2385c7eab42ee3804cd6ee0a5a"],["/css/clock.css","9db53e3bffb704c740aa83bddaf8b999"],["/css/cursor.css","c1a23e168c5b794ff367eb0ae77eb26b"],["/css/danmu.css","2a5b914a9592bcd353425c6d5fa7af8e"],["/css/index.css","e0ecbfc6d569c15e3c74302c0114ce1f"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/loadingline.css","bc1ee020a6a11fea17b915b97e6978bf"],["/css/shuo.css","e34cec2d23b9764928df02c60388358f"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/html/calendar.html","bddcec1edba7f4c49fe5cd75f8cdf5b2"],["/html/shiyan.html","135257d8a95ff7614adbd4de1549cee8"],["/html/shiyan2.html","4373ad391097306a394c3d7e370d2cf7"],["/icon.png","8ec68de45d18642ba9baf2447e62f476"],["/images/AMJ1.png","d27a6725d1aaaf5324248da4312ab6c2"],["/images/AMJ2.png","00e22eba5901e5bd674e42228cd5bd26"],["/images/AMJ3.png","c8c9ea6348dfcad3a641899d5b587431"],["/images/FOTO1.jpg","4b6f100861908e2c7044cffbdb4a0c1a"],["/images/MVVM.png","ea5a002ee2f85c71a0db51d5adb5de19"],["/images/UT.jpg","367f4e432f9db55a92b2a290c4b0a476"],["/images/UX.png","a183974e958d41d1b6acec70bb7ea00a"],["/images/WindowsTerminal.png","8ac29cb56b8a1768cf7de071e9f1ae6f"],["/images/air-w.png","c1cc32f9d3e17551ca11a7d18a0b533a"],["/images/anzhuang.jpg","912b2489957f8344406edc5e5cebe5fa"],["/images/api-setting.png","2c0bb074390779721cba009e96c5417c"],["/images/apikey.png","1f31121b190eb1f990bcc3e27524bc03"],["/images/backpic1.jpg","86a6fa88167feb338fbf1a4e9057114b"],["/images/calendar.png","86319b08b93be7c8bc47cdba7a169563"],["/images/clock2.0.png","0a0f122c7a25262fc02ee99df0ef21eb"],["/images/clock3.0.png","8e04375c183c637b65fb50ed40f46466"],["/images/example.png","aaac9983e5d59f919bf282dcff2edb3c"],["/images/foto17.png","28db4c6608ad1ee6b34238cafab25e5e"],["/images/foto2.jpg","be95b922512d004a61f83c97af3e2602"],["/images/foto2.png","0dc07d4e1b00526a273a89dc8b81548d"],["/images/foto3.jpg","551c0616c92c4ee7cc17dd458b3c46e9"],["/images/foto4.jpg","9d1d9fea759a41afc0061866e400339a"],["/images/foto5.jpg","984f618b15372f37d54f507e6f379f10"],["/images/foto9.jpg","b683fc0b998e80ff8f5a3e45e889807c"],["/images/girlpic.png","ff1e8427ed555af639e6d849f8f648f1"],["/images/girlpic1.png","698e5570e821c3cae643cc9777c2292e"],["/images/girlpic4.png","551882e4b9b6afb79000fd34c0dbf5e5"],["/images/headimage.png","332502f36a0297b30cb7969fe6de8451"],["/images/hexo.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/hexoWT.png","c027cc9f5665c7d7ba657e7a4bb40017"],["/images/his-json.png","7d8a71e38ab684107446e5c72c31854e"],["/images/history.gif","0459a3dcf2317253de0b34482880c63c"],["/images/homework1.png","e8d2f64d0785519ea7779016208a2900"],["/images/idea.jpg","5eb08bf6c965588f03c8860f201cac45"],["/images/key1.png","f2a370e02ad6c5a101db20b47a9a0008"],["/images/key2.png","21dc40bbe0377cd9fe85a9cb431c18f0"],["/images/life-cycle.png","02f39ea5c041d45938fda4b50f234cb7"],["/images/life.jpg","74d2d9c5f48ec59e3badeec690941812"],["/images/listen.jpg","9d4f73cd5634f43deaed4f9aca03f9a3"],["/images/loading.gif","ffa0804a5d99e2d5b39e05cda6d6b28b"],["/images/magnet.png","4899a924f3de0d19dbe0415128c07d65"],["/images/magnet1.png","8d010eb86ca943e036adaa7de57aee7d"],["/images/magnet2.png","293cb414a8ab93b43bde3bebf9cf0cfc"],["/images/magnet3.png","1923148630e2e094ff80bf35aa604c10"],["/images/magnet4.png","9bb4f963ac1c09f02d62525f513f492c"],["/images/meilu/1.jpg","cd67abcc3f543b5c66adc4f9d9c5c628"],["/images/meilu/10.jpg","ac9fb2711e477b5db1c3acb57e899045"],["/images/meilu/11.jpg","364caad6dfc356a3dc630fa067e48e88"],["/images/meilu/12.jpg","274767e5708f79934e5bdbf73eda8f0d"],["/images/meilu/13.jpg","dcab12b84454770b208913db63e825ac"],["/images/meilu/14.jpg","037cdd048284e621f27e17a2c59e8ea7"],["/images/meilu/2.jpg","f6cdb65ae3fad4523b32f5ee38696b60"],["/images/meilu/3.jpg","9e5df3612c2d93bf57313186c954aea5"],["/images/meilu/4.jpg","69ef2d6f4bcd79cf4b4e672b60c6751e"],["/images/meilu/5.jpg","ce81ca16def7613b7ebb368fb554f14f"],["/images/meilu/6.jpg","cafd5b62305f806754a75cc3af8c3b77"],["/images/meilu/7.jpg","b8ae865d386e1e713a6034da6b090c10"],["/images/meilu/8.jpg","afad7a7bf1066c817a8d2e7566bc780d"],["/images/meilu/9.jpg","72f9649f56b564eacf23ce3dacb88029"],["/images/metroui.jpg","5503bfffd450d9ab572b67ea00941571"],["/images/metroui/1.png","79a03b408c19c74eeaa8ff6e17a03f9d"],["/images/metroui/10.png","8309fed71a15c78f2dfa3af1ff75a5f3"],["/images/metroui/11.png","aaf1a007cbae12f93cc2688bace18d28"],["/images/metroui/12.png","0758ea282c3828c47e5c64520ff85783"],["/images/metroui/13.png","12ca7b511927cd4b26e97f3b20908a32"],["/images/metroui/14.png","f44ba7680f7b36df437e2ae2588d0565"],["/images/metroui/15.png","e8927c78b125b805af7aa86fee815ab6"],["/images/metroui/2.png","e604d3c662b996f06f22753ba9ab379f"],["/images/metroui/3.png","664e3b7490f2f95d5547b8ba79a65456"],["/images/metroui/4.png","c0f255344cafc303a1d9c7404da37149"],["/images/metroui/5.png","da2074cdb1298aca826abc1a5c441300"],["/images/metroui/6.png","efef2f087127614b4e03bcbe9a347018"],["/images/metroui/7.png","a4d34b1a2dbe3a58d3a92276880be039"],["/images/metroui/8.png","1d34a626bbaa898a60d4501936bcf962"],["/images/metroui/9.png","0663697c1667b377fe2623bd65e00b31"],["/images/metrouilogo.png","aea81b42d1c2c96440f74cf56ad82e2f"],["/images/nhkimage/2020.08.01.png","af4c55b2ae1d5ab2f56c75a87fcdfdb3"],["/images/nhkimage/2020.08.02.png","c355d41b90f5c65823f96c5f6868ce53"],["/images/nhkimage/2020.08.03.png","fddcedb40d7f28b2ccb90814351ad5c8"],["/images/nhkimage/2020.08.04.png","8b4518ec5a8513f442980ed7167136b1"],["/images/nhkimage/2020.08.05.png","590abfb19334b0c3cee5a005674f2253"],["/images/nhkimage/2020.08.06.png","d469e21100c42435e88f2bdf07f93da1"],["/images/nhkimage/2020.08.07.png","3ca9e2c8b8a09a38423d73cd36e8de9d"],["/images/nhkimage/2020.08.08.png","4420c2d899fe4eb90c48bae0da8418a2"],["/images/nhkimage/2020.08.09.png","df14be338f9c920818dd1daa6aa955ee"],["/images/nhkimage/2020.08.10.png","c4e2ed023cd3dbfd4986add35ca9357c"],["/images/nhkimage/2020.08.11.png","cf562339e57f673d394f3e6cdd1f60cb"],["/images/nhkimage/2020.08.12.png","81dfa179fea3052ddcf73912ea368f67"],["/images/nhkimage/2020.08.13.png","8cf26c2642e7a27cbd86fcbda8bae8d9"],["/images/nhkimage/2020.08.14.png","d88eeb678b3ed3651d597e61957e264a"],["/images/nhkimage/2020.08.15.png","b9879f193867edcffeefce62c9dc7153"],["/images/nhkimage/2020.08.16.png","46cb914aa1d556561897767ec9ff66a0"],["/images/nhkimage/2020.08.17.png","ea1af9645b5cc9cbaafe70a91dd15cca"],["/images/nhkimage/2020.08.18.png","e87e4de39a6f06cf4283a63af92dd8de"],["/images/nhkimage/2020.08.19.png","8001a951513b542a98ce1151be5bd87b"],["/images/nhkimage/2020.08.20.png","4bc8fafa3ecce30d340b1350715d78e3"],["/images/nhkimage/2020.08.21.png","07ad1337e127922abff27da6c672549b"],["/images/nhkimage/2020.08.22.png","b2b5d53ba46015f64048f9d803b12179"],["/images/nhkimage/2020.08.23.png","225af8c0cabe5218ec634d1b8815fd95"],["/images/nhkimage/2020.08.24.png","1d54a484a6e2395aabe9be005cd90361"],["/images/nhkimage/2020.08.25.png","8008ba169cfce0ef2041329cd29b6b77"],["/images/nhkimage/2020.08.26.png","72a2b8094003a54c97a34ea97cf21bc3"],["/images/nhkimage/2020.08.27.png","893407e604804d215c8fef8bcd5f2684"],["/images/nhkimage/2020.08.28.png","b542280b7341759890a99cbd44d822c5"],["/images/nhkimage/2020.08.29.png","620e2e7d4772e39615fd1a88cdf49717"],["/images/nhkimage/2020.08.30.png","f645d7ba2dcb506f9ec6fb9244425ad7"],["/images/nhkimage/2020.09.03.png","c5262f3aa87190e0273383ea1e445681"],["/images/nhkimage/2020.09.04.png","c07149c32aa41c03bc7dac82a713f6b2"],["/images/nhkimage/2020.09.05.png","4e43556e1cb3b7f4d75f0f6127616a54"],["/images/nhkimage/2020.09.06.png","1021d2ae04a7f109404f857a2a7629cf"],["/images/nhkimage/2020.09.07.png","db9827e9f0a4cf1401b559b4644a0204"],["/images/nhkimage/2020.09.08.png","efe1030b73dc1c01f169c3122a194426"],["/images/nhkimage/2020.09.09.png","f6ba3a1c6cdeff88404ebe2a646f2eb5"],["/images/nhkimage/2020.09.10.png","3471b05d02113517359a9e2167befcfa"],["/images/nhkimage/2020.09.11.png","921a541a8bffb1aa436df2eb6db7c99f"],["/images/nhkimage/2020.09.12.png","a51f8ebaddba69bb80f9259a30f17e65"],["/images/nhkimage/2020.09.13.png","0399889200493cd2154ffc407e2bc400"],["/images/nhkimage/2020.09.14.png","eaaf3da69a39ed316b7fc8c4d409bb0f"],["/images/nhkimage/2020.09.15.png","5774959ea4061c9298ea174f0862cc3a"],["/images/nhkimage/2020.09.16.png","0c5a00f74020740fda589c02e4b3f917"],["/images/nhkimage/2020.09.17.png","b5aef734e3a7db4862ca3fe4e6769dc2"],["/images/nhkimage/2020.09.24.png","5982a7b3843f4ae43b2b4bc4b0c577d6"],["/images/nhkimage/2020.09.26.jpg","c6415af781fbdd36fdb034f74646129b"],["/images/nhkimage/2020.09.27.png","27aa6f6a8d5534ccd99cff261dcd9eb6"],["/images/nhkimage/2020.09.28.png","0f4318d1ff17a33de364432a1c44b5ad"],["/images/nhkimage/2020.10.09.png","6408d9f7e66fdeba8b9207939a08cf8d"],["/images/notop.png","d25c272e5ce312a880e04ce8a0b27683"],["/images/pasted-0.png","552608d8f6e39369aa30c6e332a32826"],["/images/pasted-1.png","baafdacee93c99e99418aaedbf524fda"],["/images/pasted-10.jpg","395cff6f64ab5df19baa3572ac98e541"],["/images/pasted-11.jpg","56e5df07c96634638abf7995b25c81ab"],["/images/pasted-12.jpg","61b3f803b85ce3640d7a9ba7efb9da6b"],["/images/pasted-2.png","2f410e53c811f92a6135f48857776f5e"],["/images/pasted-3.jpg","bb5717e691e87355e7d63a5f3a87ae62"],["/images/pasted-4.jpg","10041d0e3567b24b81222ec5075d6492"],["/images/pasted-5.jpg","ac5047a4b48c6cdaee86fa1863e33904"],["/images/pasted-6.jpg","1556ae8d3ad5713d60237ee4d10e81f0"],["/images/pasted-7.jpg","913fde1686587646ddc663bd810cc81d"],["/images/pasted-8.jpg","fc83268081fb4b6b6ecb1ffa1ec5af7f"],["/images/pasted-9.jpg","25e0fa3496591501f5c29d0b802b77d2"],["/images/pet.png","2b8c121909497e57057478856fe48a94"],["/images/pet2.png","dfb1d6a17b527ccc0c600e6ad31f55e5"],["/images/ps1.png","0917ba91f21b6944dc08d35c41a326d2"],["/images/psb.jpg","6a27c58337875c776af0a7667598b401"],["/images/quse.png","7cd1ec12b804305430cb4cdc09c7a893"],["/images/rain.jpg","9c26acc44c692b6a63e134be07b07c18"],["/images/shezhi.png","281bf545f6a4024e2d0b7120bc398a21"],["/images/soul.jpg","d97b4099c0728ff6123d006fa62db86e"],["/images/study.jpg","a9b1cf95ee6bd9f3913e8ec6a6a6f44f"],["/images/tianqizhizi.jpg","dd48d78b4eeaaa52578352f9ef570b14"],["/images/vue.png","cf23526f451784ff137f161b8fe18d5a"],["/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/images/work.png","e521cf5b834292fde1c50e0a0f5802f9"],["/images/xiaoguoyanshi.png","994a3b710d36df0a4630cd9a768c7f7b"],["/images/xiaoguozhanshi-m.png","1fefca18214fc4889d1bb76b81887c9d"],["/images/zfe.one.png","b41f689341882058ffb28c4cee499bde"],["/images/幻想终结之日.png","0025c4d3973bdfedb80db3f78c59fa47"],["/images/时空战纪——游戏建议及意见①.jpg","1337457f14a8dffee66d94f8915b54ff"],["/images/简历.png","d70507ee4615c9e324578c0d777e6855"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favicon2.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","b543fffd64d07462a1e6e10bc24555dd"],["/js/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/APlayer.min.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/airvisual.js","71cf86bfd452ca01d92438d8266416ee"],["/js/airvisualapi.js","6931bebe1696688d109963187fc2eace"],["/js/artitalkkey.js","e735b361754e1b51300ddca9fd56b4ca"],["/js/background.js","94c8410b174f58594cf81ec99054968b"],["/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/js/calendar.js","a58e02711cc6dec4dc04257e555b8923"],["/js/clock - 副本.js","405186e7a9d73221d2d50c0dea2852d0"],["/js/clock.js","2fdceb94cc57b551cd245b0001927b66"],["/js/color.js","3730bb4f7b185e6f5130ac28bace968b"],["/js/danmu.js","6b6ae6b7f1b42dd4857541f43b2bb733"],["/js/echarts.js","dc1227b1eba1ba47fd185a387d0a7d37"],["/js/gitcalendar.js","fadfa8a42272cd322118653dca512a7a"],["/js/history.js","20459f7db325e597e64903f4c0d19306"],["/js/historyroll.js","a3e9ac376106816c50a61f9f4306d671"],["/js/jam.js","462c07d3b2e0f20394d994bbcfae37cb"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","455fface5a0a3ff90766ca254affe502"],["/js/rain.js","f656dc28e4ab5c3f8414d35f683278c1"],["/js/rainremove.js","ceacf82842b101f7e54a2aaf5f4bb9cb"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/link/index.html","d18c7797a0b7d525da393a34b7b00003"],["/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","ab25f6ca108630e4d4d1ab389c76685f"],["/page/10/index.html","375042919a6ef423da88048800444506"],["/page/11/index.html","5d21ed8fa9356cec7660be8b10e38528"],["/page/12/index.html","39ca4595c3147cb0207c8a2510dbca19"],["/page/2/index.html","1aa1f1c4c69d98881ccb25ec9012f3bc"],["/page/3/index.html","0c7142bbf3d211853167360726ed257c"],["/page/4/index.html","8cf10eefecc46069f3ee6a3b73e5ac3d"],["/page/5/index.html","bb3f30f25a8d6e737b105bbc20783534"],["/page/6/index.html","e016454ea8f6b800a9aea3d149c8f81a"],["/page/7/index.html","315e7ab1e1e1805b233a88b021108525"],["/page/8/index.html","eb21eca9664186756c935a52e8ea3f59"],["/page/9/index.html","d41a0c1280f36366fe79019932301a72"],["/research/index.html","f76cd6ab17f348726decc0448335100b"],["/sw-register.js","650bdb97a9abac310ea183b99a6c083f"],["/tags/Butterfly主题/index.html","c172953ae79223bf0ec708b4d3830e52"],["/tags/DIY/index.html","3b0dd16ea4b42fcf8c9acbd77ecf1b27"],["/tags/DIY/page/2/index.html","2dd34aba662a3ee02b571fbe08f26c94"],["/tags/ICT/index.html","1785c826501ad6371c09e5200425ae14"],["/tags/NHK听力练习/index.html","1327740f6c3c00de0d5db26986a8866b"],["/tags/NHK听力练习/page/2/index.html","881e9bfe6bbdedb0e5c16d868743c189"],["/tags/NHK听力练习/page/3/index.html","1c2c08ec081dc8a854d9ed403ab1c56d"],["/tags/NHK听力练习/page/4/index.html","1452936d5c2884bb6f5ab7c6fac8a0f1"],["/tags/NHK听力练习/page/5/index.html","413978245af73d4f9f4887a1a12b6bd3"],["/tags/NHK听力练习/page/6/index.html","d836d80c16cf4003f1a40db0b3838f0b"],["/tags/metro-ui/index.html","5ba97c54956e51bf533140e006da862f"],["/tags/vuejs/index.html","23793e7bca7ea3cf0b91d3e2e46c1ffe"],["/tags/お盆/index.html","e4322b980f63ead055556cb99c1da7f9"],["/tags/世論調査/index.html","ff00df1ea8bb88454662b8eed6f90ae2"],["/tags/作品集/index.html","5e9e6f3d9132fb8fdb803965c597c2ad"],["/tags/作品集/page/2/index.html","567fe37e673da786c8ce7c93bd8e54a6"],["/tags/农业/index.html","fce62385f83f63f7a7a451c10afca6d4"],["/tags/历史/index.html","b0304debcb54aab94245a48537e843d5"],["/tags/営業時間/index.html","8a2aa7b2122137bf90f07b9386826ba3"],["/tags/国外政事/index.html","980be1d5ed866eb55bd54ea94543eca7"],["/tags/地震/index.html","d2fe2e906b0e2493b347f8aee71649e7"],["/tags/外国政事/index.html","fce2fc67ae49f6e585fcacf798375e3c"],["/tags/天气/index.html","26bb621c2d3f1b01ce441c3ce6ebac51"],["/tags/天气/page/2/index.html","3a44bd4b25280cfde060258319a826fc"],["/tags/奥运会/index.html","5aa2f779501c9844f628dd4320f85070"],["/tags/学习/index.html","12f381bb67ff3120bfd30e0325e054e0"],["/tags/学习/page/2/index.html","ddc9993890458156a4b85b717c23ac07"],["/tags/学习/page/3/index.html","e7199825246aef52eea85e82bed94f05"],["/tags/就业/index.html","6180e65e42e170b2e777db0164e1a1b4"],["/tags/庐山/index.html","ce6c8e99a22ba86b042dfee1e0993cd4"],["/tags/座礁/index.html","b12991f3444a2d36ebbd86f4d3ffc9d9"],["/tags/政府/index.html","2a32872c9ceba919d4242d95d6d9fcf1"],["/tags/政治/index.html","a1ae5bd93328c55b6808d58e87d85b31"],["/tags/教程/index.html","089ecb275c0b2d1fb82e88fce477c68a"],["/tags/教程/page/2/index.html","73bacf0b8c573152209b314abd326701"],["/tags/日本教育/index.html","201d49352563c0ff7bb4cd9e5072b548"],["/tags/民生/index.html","09225ff93bb6a915ed75ebaf9c2b944a"],["/tags/民生/page/2/index.html","9453e93cd1239084adbee2c039e27f2d"],["/tags/游戏评测/index.html","a97cf3c975c66fef13ce4d0a4dc0a88c"],["/tags/游记/index.html","565df73b5fca08a5b80627c2eed766e8"],["/tags/生活趣闻/index.html","1f560b6af61559a834229607b0b1614c"],["/tags/科技/index.html","ae35e95ba0b73b470f6d6f67f207f4a2"],["/tags/经济/index.html","ee8a1ec6e50059c796fbb6db592768bc"],["/tags/经济/page/2/index.html","7e516925620293cb488fe34eb54e3f14"],["/tags/网络教学/index.html","e135ada9fdf340b14491e61f4a691cc4"],["/tags/舆论/index.html","743b67fe4ab2e0d49bd9ca980e515c6b"],["/tags/虚拟现实/index.html","556375d6aef30ebd8ebfb9627b6faae0"],["/tags/随想/index.html","567b1c15b69300648fe3758c89eb047e"],["/tags/障害者/index.html","6139e8002f2ac9132148cf56b49306f9"]];
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
