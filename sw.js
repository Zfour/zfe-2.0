/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/05/20/2015-05-20/index.html","cd6f387bf81f26c572ad115af564dfaa"],["/2015/06/16/2015-06-16/index.html","905b39da47682fcc5ba58093fcda7b73"],["/2015/12/12/2015-12-12/index.html","0bf4c24f78d9fcc1ccd19f16fa98aeee"],["/2016/06/08/2016-06-08/index.html","158ccb79f434cfefb99ecf67f4e65a98"],["/2016/12/18/2016-12-18/index.html","ba5e0c3b646229eb9e6a64558b58d74d"],["/2017/02/17/2017-02-17/index.html","ab3abced6700b8116cc7936e282575f4"],["/2017/03/17/2017-03-17/index.html","293016d1101a9d6b2e838fb06224829f"],["/2017/04/06/2017-04-06/index.html","973c42edd0fad7f46f65a7b0959bfec8"],["/2017/05/17/2017-05-17/index.html","b3850f251ae1cc1ee2251aa04fc83d35"],["/2017/08/15/2017-08-15/index.html","4ff8e43837f79a534e21d85be73c70e2"],["/2017/09/16/2017-09-16-1/index.html","7c18f898f40dd372a21a5348554a26e4"],["/2017/09/16/2017-09-16/index.html","38384d20c80900d938c4ce54ba96b4fc"],["/2017/09/21/2017-09-21/index.html","92069de5a63ccb33e0297820d521c5a7"],["/2017/09/23/2017-09-23/index.html","d47d87817e3feb6a55f7add475220a10"],["/2017/09/26/2017-09-26/index.html","a5895b9311afeedd4e97f1c7a7fcce43"],["/2017/09/27/2017-09-27/index.html","33197b640f449e6c43147c3c3182434a"],["/2017/10/04/2017-10-04/index.html","8608a06f66b7c6b262c57028ab726b5f"],["/2017/10/08/2017-10-08/index.html","271a357b5550df4df0db23ded058a0b0"],["/2017/10/09/2017-10-09/index.html","c0153233c9aecfb137071af21d629186"],["/2017/10/15/2017-10-15/index.html","0e1347244164815b867a7b814375c676"],["/2017/10/19/2017-10-19/index.html","6d29c934e942f72cc5f2653b038b9c53"],["/2017/10/23/2017-10-23-2/index.html","9ec47d0bdf4c1f03f04fc3ac37f31611"],["/2017/10/23/2017-10-23/index.html","efe6fa7c5534d1b57e9383c0973e829e"],["/2017/11/08/2017-11-08/index.html","366ada311b7bdb50fe8c69fa79c9d3cd"],["/2017/11/12/2017-11-12/index.html","92ecc874dec499cd30802afe33b50086"],["/2017/11/15/2017-11-15/index.html","a155b75077b8a4d90b1aad40402ebdb8"],["/2017/11/27/2017-11-27/index.html","0e85cbec6177588b59c2ec2e9156ebd0"],["/2017/12/06/2017-12-06/index.html","e19d770f916305e72f7eb4775c4a0b79"],["/2018/02/12/2018-02-12/index.html","fa5c2963cdbfb76a2fa53e7c07bc2077"],["/2018/03/26/2018-03-26/index.html","7881cd409124b85e4f62830af8b81adc"],["/2018/04/02/2018-04-02/index.html","a3c8d087bda04038c992a9c125071a44"],["/2018/04/24/2018-04-24/index.html","3e71c675e4d1e95678f3ff7d7f88caa0"],["/2018/05/18/2018-05-18/index.html","00c45c6a89ed9e847fa5adcbaa934ee3"],["/2018/05/23/2018-05-23/index.html","62deb94bfc25f2cdcecc7ebf7cc81473"],["/2018/06/08/2018-06-08/index.html","a2cfb4ecc2f25bccfa424ef2dd0d1e01"],["/2018/07/01/2018-07-01/index.html","d5eb7ad13d6427e9ee3f89db99c91fcc"],["/2018/08/30/2018-08-30/index.html","6b858762a68c120d41ac3803b918a917"],["/2020/07/20/2020-07-20/index.html","82d7cdae6fdf6ff492bd3d59e6265f63"],["/2020/08/01/2020-08-01/index.html","bb059d1cd11f23220666a6b78375d066"],["/2020/08/02/2020-08-02/index.html","8f8d95429b40a1642adff2463477c779"],["/2020/08/03/2020-08-03/index.html","ec66bb96bfc1ec53040442d74e75fee0"],["/2020/08/04/2020-08-04-1/index.html","91ec0f9ef1cc3e8419d64d89cda9ad0e"],["/2020/08/04/2020-08-04-2/index.html","f7b3dec5ea645dfc001b259a910a7b5b"],["/2020/08/05/2020-08-05/index.html","49771f21778c977115d0aa813827c79f"],["/2020/08/06/2020-08-06/index.html","7c51b766a78cb98b002947f3368710ad"],["/2020/08/07/2020-08-07/index.html","63b8599b53275e49706d9e4d8e28b88e"],["/2020/08/08/2020-08-08/index.html","5a12a802c6a92f1d6ee5d4fc40c09e93"],["/2020/08/09/2020-08-09/index.html","1c98f9c3b31cd35aebabd6c562efb900"],["/2020/08/10/2020-08-10/index.html","6ce066537aebc5c5e7edc29f080d14d5"],["/2020/08/11/2020-08-11/index.html","732390871eeeeeed5942990b31e27721"],["/2020/08/12/2020-08-12/index.html","4b2a06ff6a4e3b8db7f8b684d3fbefd7"],["/2020/08/13/2020-08-13/index.html","2e9f43bb97c2712e628645fd941962e9"],["/2020/08/14/2020-08-14-1/index.html","3c293847f044e183b8dd56594820a689"],["/2020/08/14/2020-08-14-2/index.html","ecf87abe9dbd167eac5bbc1d7e1fda10"],["/2020/08/15/2020-08-15/index.html","01b95f46cf656c58cfee684474e3ec96"],["/2020/08/16/2020-08-16-1/index.html","9da7950f2c7fe8f48c71623c68df4791"],["/2020/08/16/2020-08-16-2/index.html","0973703bd7d7e356d1f1e95ce6a65754"],["/2020/08/17/2020-08-17/index.html","37ffaf2c2e570b49491875e063d413c9"],["/2020/08/18/2020-08-18/index.html","5a9ae6fda749757b4a125dc61cde4dbd"],["/2020/08/19/2020-08-19-1/index.html","9c30ee771c266a008861be9e43c17ae0"],["/2020/08/19/2020-08-19-2/index.html","215e04610be9fde417778b8b3f1d38b8"],["/2020/08/20/2020-08-20/index.html","42c42c17c1822533b34ca1b6b66f533b"],["/2020/08/21/2020-08-21/index.html","2297bb40e651f09db661574732ef1db0"],["/2020/08/22/2020-08-22/index.html","cfd9e48c0244249b736ff1cf9ef656b4"],["/2020/08/23/2020-08-23-1/index.html","71ec74e8706bd3f6aff13481ca494395"],["/2020/08/23/2020-08-23-2/index.html","804e277342a871fd9b8e5e9b9fba7f21"],["/2020/08/24/2020-08-24-1/index.html","847c7af5ce74d45e29c363a80b8a2762"],["/2020/08/24/2020-08-24-2/index.html","39d59c9a7bb46fc33b8f296faaad0f3f"],["/2020/08/25/2020-08-25-1/index.html","c1a26a269cb2fa7bee85df1535acef74"],["/2020/08/25/2020-08-25-2/index.html","e8fdd059426cde2fc1a0400a021fb8ff"],["/2020/08/26/2020-08-26/index.html","c3553f22187c5e20c43f73b838bf758e"],["/2020/08/27/2020-08-27/index.html","fe45f9869e6523c0d0c8ecbafcb36426"],["/2020/08/28/2020-08-28/index.html","6986e6149bbb1fa5d5450af3764a3b59"],["/2020/08/29/2020-08-29/index.html","5404249d07034c2a5ec402b4caeaefcb"],["/2020/08/30/2020-08-30/index.html","957ff354b5d1aa6287aa57543429eb0b"],["/2020/08/31/2020-08-31-1/index.html","8b6e226f49cd7677b4089fbeed2359c4"],["/2020/08/31/2020-08-31-2/index.html","288d2d194b6b57376162e14db45caa29"],["/2020/09/01/2020-09-01-1/index.html","114250fa0f95b456943fcef6369fc5c7"],["/2020/09/01/2020-09-01-2/index.html","007696aebbd8520ccdf81ab941dfa847"],["/2020/09/02/2020-09-02-1/index.html","c0c470adb31c8f5f1e03c3e4f648ea54"],["/2020/09/02/2020-09-02-2/index.html","38a9db5a25f51b641c0d8424b851ae6d"],["/2020/09/03/2020-09-03-1/index.html","bdd4fec541ee30ceb49bb1c089cf4930"],["/2020/09/03/2020-09-03-2/index.html","6bce8f85b28792584e59b6d56c429958"],["/2020/09/04/2020-09-04-1/index.html","a1bd413803b540c3a629c9535ef37e09"],["/2020/09/05/2020-09-05-1/index.html","410377fb953be387cf7ab2b48ac8466d"],["/2020/09/06/2020-09-06-1/index.html","0e0a74df3ff234fa3152737e6ee4f62f"],["/2020/09/07/2020-09-07/index.html","348328a13f92e23ded6026a79d3bfc21"],["/2020/09/08/2020-09-08-1/index.html","24fd5eaeee7e10c34072c75757783ca2"],["/2020/09/08/2020-09-08-2/index.html","1d577bf452dd905b9622560efe4b3ca0"],["/2020/09/09/2020-09-09/index.html","7198162c2ddce17a6717b64f6879da8e"],["/2020/09/10/2020-09-10/index.html","fd9ffa84f378662f5f6fcfbf1210cc7b"],["/2020/09/11/2020-09-11/index.html","281bf8269beea70d5ef22b6dad1e7081"],["/2020/09/12/2020-09-12/index.html","729ec37e78f94c56819f31d79e9dd480"],["/2020/09/13/2020-09-13/index.html","79837fea49b43c4013a3c150aea861e4"],["/2020/09/14/2020-09-14/index.html","5f8e94b9a6996c400d38bfdbcd90688c"],["/2020/09/15/2020-09-15/index.html","6ffd648e01951249649c486c7a1490d3"],["/2020/09/16/2020-09-16/index.html","18b8f4a87b507e45648aa06ac2d70f6c"],["/2020/09/17/2020-09-17/index.html","0eb9001fc80ceb7409eb9d6ea59c26d8"],["/2020/09/19/2020-09-19/index.html","e19318f0b313667f4a1d8bab5e5cbf83"],["/2020/09/23/2020-09-23/index.html","f57804cb475778a7af23fe7483f8817b"],["/2020/09/24/2020-09-24/index.html","1f15b6a9d5d3b187e97610a60b4a1e16"],["/2020/09/26/2020-09-26/index.html","c2e73bef980238d4270fa7451d4dd123"],["/2020/09/27/2020-09-27/index.html","d325a92c07b0859acf22e698c64818cd"],["/2020/09/28/2020-09-28-2/index.html","0548798b13668e7248fa8b42922e9547"],["/2020/09/28/2020-09-28/index.html","f39ec98861ccd17e028e62bc80103914"],["/2020/09/29/2020-09-29/index.html","6b80d444848f697e95faaf44d158ec30"],["/2020/10/03/2020-10-03/index.html","104a8e576bc8e91d8cb8ee722d24ed76"],["/2020/10/04/2020-10-04/index.html","2ee53b7699c9f41ef3d2ed28d393b5fa"],["/2020/10/09/2020-10-09/index.html","deb8cd3e645f01cdf157388009051aed"],["/2020/10/10/2020-10-10/index.html","f23e7738ffb00b25dd4e7f33ca81a677"],["/2020/10/11/2020-10-11/index.html","e83be04016aef98e79556ad0cb7f2f7d"],["/2020/10/12/2020-10-12/index.html","b74004e90562e90ed9c66ac4d17a38bb"],["/2020/10/13/2020-10-13/index.html","475a92d8932e2cba6995881a99f81eec"],["/2020/10/14/2020-10-14/index.html","3bb69bf3474db789ea0215e21fa7fafe"],["/airplayervisual/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/airplayervisual/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/airplayervisual/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/airplayervisual/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/airplayervisual/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/airplayervisual/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/airplayervisual/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/airplayervisual/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/airplayervisual/index.html","23db5ba6f25a42deabb118200009f06a"],["/airplayervisual/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/airplayervisual/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/airplayervisual/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/airplayervisual/js/jamsetting.js","7927507e0080ddf55c6d8b5f526bd942"],["/airplayervisual/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/airplayervisual/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/airplayervisual/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/archives/2015/05/index.html","33bfc18ba4f8d939c47e5f25fe375d9f"],["/archives/2015/06/index.html","6616634bce2a0a1fd3e2dff9bfff9198"],["/archives/2015/12/index.html","81edfbbafa90185eae3b3ff062a3c1bb"],["/archives/2015/index.html","87756851c60675e8bbb4545b7a8266f5"],["/archives/2016/06/index.html","e7542d723b103721211ad34399270d96"],["/archives/2016/12/index.html","81be011999e18a0a12c53445e5a02a7e"],["/archives/2016/index.html","a732e0641d2cdabcdd6f2b52971bf3c5"],["/archives/2017/02/index.html","2d3859fa92b8a6b03e6ae601213a1097"],["/archives/2017/03/index.html","7656218ff6e8f95ccc2279a861e66fa6"],["/archives/2017/04/index.html","c9d08ff63cc59cab1af8e3260e4c9637"],["/archives/2017/05/index.html","365c42c55c6bb3b05ef4ff2b3d9cf932"],["/archives/2017/08/index.html","c92aa51b95485a70e3226850dff74a17"],["/archives/2017/09/index.html","553ad6ff4d417c359038e376604dc164"],["/archives/2017/10/index.html","03c503dcb2afcca276e5050b4fc82f55"],["/archives/2017/11/index.html","6cefc7b459cf1131b2ea60c526d3279a"],["/archives/2017/12/index.html","c5a44b9e387381c28943feeb4bf80ec2"],["/archives/2017/index.html","14127dedb8d583a5aed97866594590fc"],["/archives/2017/page/2/index.html","303abfbf0ac84a30ad0e8ac23d134493"],["/archives/2017/page/3/index.html","9eb37f40440043459415b000b301084e"],["/archives/2018/02/index.html","bcd7e0c81aad1c47b30dfc3d66d2e549"],["/archives/2018/03/index.html","4fcec5f14f158e059919398bca2b01c8"],["/archives/2018/04/index.html","f5780d23ca70e9a6be0c24db2ecb16a8"],["/archives/2018/05/index.html","91696dfa0d8f6bfe3af1c772cc65cdcb"],["/archives/2018/06/index.html","889b88ea74e7d40924d63fc6a38e9c53"],["/archives/2018/07/index.html","0870cef1654531a97688b23e74e73dc3"],["/archives/2018/08/index.html","041f584be216c379b752a56ec5d56cc0"],["/archives/2018/index.html","e3af823d3fb07bc885d50390e7eb9a2d"],["/archives/2020/07/index.html","9a4229910b111cd8a7e806eabd5b8fb6"],["/archives/2020/08/index.html","e862fbc438afe87300b1d2fe81450384"],["/archives/2020/08/page/2/index.html","951a9ec79a29d09d0d302ec9a567438c"],["/archives/2020/08/page/3/index.html","e134690f1fea44f31c12b4056053dd5e"],["/archives/2020/08/page/4/index.html","4ad88275f8d0cee6ff87e68fc3ae094f"],["/archives/2020/09/index.html","d3c1f5503945a2a50c4ac222e2bd9578"],["/archives/2020/09/page/2/index.html","3e85823e2994902196a4082ca3022be1"],["/archives/2020/09/page/3/index.html","1f1219232cb42a39400a2277804e982f"],["/archives/2020/10/index.html","d817c26400c2c0c2787e0a171cbc2ce1"],["/archives/2020/index.html","2aedc154d1cf7f90967434cb4547d829"],["/archives/2020/page/2/index.html","03608fd8e3801217ef8f0e876c956ab8"],["/archives/2020/page/3/index.html","4c8d89d4698368b270b87fa251e12456"],["/archives/2020/page/4/index.html","7891b194618543b830aa8821e1fc3ae0"],["/archives/2020/page/5/index.html","8dee22e4987d19d56c0faf94ccc8a0b2"],["/archives/2020/page/6/index.html","332bfff86bca608fd7676c097b342c17"],["/archives/2020/page/7/index.html","5aea3f6ce095e3727743bed6b0314bf1"],["/archives/2020/page/8/index.html","8fc97d4971b7c9ba39546105c81633ea"],["/archives/index.html","3f5d13ec0bbcd69ad01dab735a76020e"],["/archives/page/10/index.html","2cd01c854c2db3ac8759f3cfcd21ec97"],["/archives/page/11/index.html","21ba4e3b16af6fd737db4c3c859e55d4"],["/archives/page/12/index.html","56ab121e4bad36deef8a62cad5ace7ec"],["/archives/page/2/index.html","3a75711403a7addc1c84f31f1159f861"],["/archives/page/3/index.html","bfcab4ef109a543f95a79a0b99596a12"],["/archives/page/4/index.html","3bf0159b01865d6fced1d656adf15575"],["/archives/page/5/index.html","c0b04afa4f7e7c39540ee28f6f57d664"],["/archives/page/6/index.html","ffb1cb4ad61b625720b3c12cc4a5f0ba"],["/archives/page/7/index.html","047ef07da491aa393efd2d18e71170f6"],["/archives/page/8/index.html","fb9e0a07cb65bd07a58acaddb4ff6aa0"],["/archives/page/9/index.html","6ce3efc4b0488ded9d59f494184ea573"],["/categories/NHK听力练习/index.html","82893ef4cdd85c59a8e745623ffa7bec"],["/categories/NHK听力练习/page/2/index.html","110b681607fa9827e104f4dfff3d72f2"],["/categories/NHK听力练习/page/3/index.html","f962e2c6e4e9ce471bcb029bda57f452"],["/categories/NHK听力练习/page/4/index.html","05a1b7dd97c171bbafc5197935ec04b8"],["/categories/NHK听力练习/page/5/index.html","cbd6192b6520c56fdf2fca98e3b8b561"],["/categories/NHK听力练习/page/6/index.html","9b5b5f1b64071ffcff4f559499d12f48"],["/categories/作品集/index.html","a1aae549d306d5c878bf689a68c64243"],["/categories/作品集/page/2/index.html","284d92d4cb410c7e6e41e14d18fd9054"],["/categories/学习/index.html","7f9825c73a6e22337fbfe5740562b3fa"],["/categories/学习/page/2/index.html","d384afc57ed043e8f27a1f4749d70d44"],["/categories/学习/page/3/index.html","54580d2aabd107064766adf71dcf7953"],["/categories/游戏评测/index.html","72ce60207014ae59402d9bcf06b64dcd"],["/categories/生活趣闻/index.html","e469029144f1e4b7a9d00c3a26e03444"],["/categories/随想/index.html","1063fe30c8c1d3cc59aee92db78f907b"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/addcss.css","59cae1ddbe6925c34f846ffe12d19921"],["/css/background.css","32d5acccbb94f987faf37cfdc3fd06df"],["/css/calendar.css","0090a32d2a61d42c5bfed254bfba078c"],["/css/clock.css","65602c2385c7eab42ee3804cd6ee0a5a"],["/css/cursor.css","c1a23e168c5b794ff367eb0ae77eb26b"],["/css/danmu.css","2a5b914a9592bcd353425c6d5fa7af8e"],["/css/index.css","e0ecbfc6d569c15e3c74302c0114ce1f"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/loadingline.css","bc1ee020a6a11fea17b915b97e6978bf"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/html/calendar.html","bddcec1edba7f4c49fe5cd75f8cdf5b2"],["/html/shiyan.html","57da0fbd3b9868b928737774c996c134"],["/html/shiyan2.html","ced8bdc4b60c8819e56779f5cd5babed"],["/icon.png","8ec68de45d18642ba9baf2447e62f476"],["/images/AMJ1.png","d27a6725d1aaaf5324248da4312ab6c2"],["/images/AMJ2.png","00e22eba5901e5bd674e42228cd5bd26"],["/images/AMJ3.png","c8c9ea6348dfcad3a641899d5b587431"],["/images/FOTO1.jpg","4b6f100861908e2c7044cffbdb4a0c1a"],["/images/MVVM.png","ea5a002ee2f85c71a0db51d5adb5de19"],["/images/UT.jpg","367f4e432f9db55a92b2a290c4b0a476"],["/images/UX.png","a183974e958d41d1b6acec70bb7ea00a"],["/images/WindowsTerminal.png","8ac29cb56b8a1768cf7de071e9f1ae6f"],["/images/air-w.png","c1cc32f9d3e17551ca11a7d18a0b533a"],["/images/anzhuang.jpg","912b2489957f8344406edc5e5cebe5fa"],["/images/api-setting.png","2c0bb074390779721cba009e96c5417c"],["/images/apikey.png","1f31121b190eb1f990bcc3e27524bc03"],["/images/backpic1.jpg","86a6fa88167feb338fbf1a4e9057114b"],["/images/calendar.png","86319b08b93be7c8bc47cdba7a169563"],["/images/clock2.0.png","0a0f122c7a25262fc02ee99df0ef21eb"],["/images/example.png","aaac9983e5d59f919bf282dcff2edb3c"],["/images/foto17.png","28db4c6608ad1ee6b34238cafab25e5e"],["/images/foto2.jpg","be95b922512d004a61f83c97af3e2602"],["/images/foto2.png","0dc07d4e1b00526a273a89dc8b81548d"],["/images/foto3.jpg","551c0616c92c4ee7cc17dd458b3c46e9"],["/images/foto4.jpg","9d1d9fea759a41afc0061866e400339a"],["/images/foto5.jpg","984f618b15372f37d54f507e6f379f10"],["/images/foto9.jpg","b683fc0b998e80ff8f5a3e45e889807c"],["/images/girlpic.png","ff1e8427ed555af639e6d849f8f648f1"],["/images/girlpic1.png","698e5570e821c3cae643cc9777c2292e"],["/images/girlpic4.png","551882e4b9b6afb79000fd34c0dbf5e5"],["/images/headimage.png","332502f36a0297b30cb7969fe6de8451"],["/images/hexo.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/hexoWT.png","c027cc9f5665c7d7ba657e7a4bb40017"],["/images/his-json.png","7d8a71e38ab684107446e5c72c31854e"],["/images/history.gif","0459a3dcf2317253de0b34482880c63c"],["/images/homework1.png","e8d2f64d0785519ea7779016208a2900"],["/images/idea.jpg","5eb08bf6c965588f03c8860f201cac45"],["/images/key1.png","f2a370e02ad6c5a101db20b47a9a0008"],["/images/key2.png","21dc40bbe0377cd9fe85a9cb431c18f0"],["/images/life-cycle.png","02f39ea5c041d45938fda4b50f234cb7"],["/images/life.jpg","74d2d9c5f48ec59e3badeec690941812"],["/images/listen.jpg","9d4f73cd5634f43deaed4f9aca03f9a3"],["/images/magnet.png","4899a924f3de0d19dbe0415128c07d65"],["/images/magnet1.png","8d010eb86ca943e036adaa7de57aee7d"],["/images/magnet2.png","293cb414a8ab93b43bde3bebf9cf0cfc"],["/images/magnet3.png","1923148630e2e094ff80bf35aa604c10"],["/images/magnet4.png","9bb4f963ac1c09f02d62525f513f492c"],["/images/meilu/1.jpg","cd67abcc3f543b5c66adc4f9d9c5c628"],["/images/meilu/10.jpg","ac9fb2711e477b5db1c3acb57e899045"],["/images/meilu/11.jpg","364caad6dfc356a3dc630fa067e48e88"],["/images/meilu/12.jpg","274767e5708f79934e5bdbf73eda8f0d"],["/images/meilu/13.jpg","dcab12b84454770b208913db63e825ac"],["/images/meilu/14.jpg","037cdd048284e621f27e17a2c59e8ea7"],["/images/meilu/2.jpg","f6cdb65ae3fad4523b32f5ee38696b60"],["/images/meilu/3.jpg","9e5df3612c2d93bf57313186c954aea5"],["/images/meilu/4.jpg","69ef2d6f4bcd79cf4b4e672b60c6751e"],["/images/meilu/5.jpg","ce81ca16def7613b7ebb368fb554f14f"],["/images/meilu/6.jpg","cafd5b62305f806754a75cc3af8c3b77"],["/images/meilu/7.jpg","b8ae865d386e1e713a6034da6b090c10"],["/images/meilu/8.jpg","afad7a7bf1066c817a8d2e7566bc780d"],["/images/meilu/9.jpg","72f9649f56b564eacf23ce3dacb88029"],["/images/metroui.jpg","5503bfffd450d9ab572b67ea00941571"],["/images/metroui/1.png","79a03b408c19c74eeaa8ff6e17a03f9d"],["/images/metroui/10.png","8309fed71a15c78f2dfa3af1ff75a5f3"],["/images/metroui/11.png","aaf1a007cbae12f93cc2688bace18d28"],["/images/metroui/12.png","0758ea282c3828c47e5c64520ff85783"],["/images/metroui/13.png","12ca7b511927cd4b26e97f3b20908a32"],["/images/metroui/14.png","f44ba7680f7b36df437e2ae2588d0565"],["/images/metroui/15.png","e8927c78b125b805af7aa86fee815ab6"],["/images/metroui/2.png","e604d3c662b996f06f22753ba9ab379f"],["/images/metroui/3.png","664e3b7490f2f95d5547b8ba79a65456"],["/images/metroui/4.png","c0f255344cafc303a1d9c7404da37149"],["/images/metroui/5.png","da2074cdb1298aca826abc1a5c441300"],["/images/metroui/6.png","efef2f087127614b4e03bcbe9a347018"],["/images/metroui/7.png","a4d34b1a2dbe3a58d3a92276880be039"],["/images/metroui/8.png","1d34a626bbaa898a60d4501936bcf962"],["/images/metroui/9.png","0663697c1667b377fe2623bd65e00b31"],["/images/metrouilogo.png","aea81b42d1c2c96440f74cf56ad82e2f"],["/images/nhkimage/2020.08.01.png","af4c55b2ae1d5ab2f56c75a87fcdfdb3"],["/images/nhkimage/2020.08.02.png","c355d41b90f5c65823f96c5f6868ce53"],["/images/nhkimage/2020.08.03.png","fddcedb40d7f28b2ccb90814351ad5c8"],["/images/nhkimage/2020.08.04.png","8b4518ec5a8513f442980ed7167136b1"],["/images/nhkimage/2020.08.05.png","590abfb19334b0c3cee5a005674f2253"],["/images/nhkimage/2020.08.06.png","d469e21100c42435e88f2bdf07f93da1"],["/images/nhkimage/2020.08.07.png","3ca9e2c8b8a09a38423d73cd36e8de9d"],["/images/nhkimage/2020.08.08.png","4420c2d899fe4eb90c48bae0da8418a2"],["/images/nhkimage/2020.08.09.png","df14be338f9c920818dd1daa6aa955ee"],["/images/nhkimage/2020.08.10.png","c4e2ed023cd3dbfd4986add35ca9357c"],["/images/nhkimage/2020.08.11.png","cf562339e57f673d394f3e6cdd1f60cb"],["/images/nhkimage/2020.08.12.png","81dfa179fea3052ddcf73912ea368f67"],["/images/nhkimage/2020.08.13.png","8cf26c2642e7a27cbd86fcbda8bae8d9"],["/images/nhkimage/2020.08.14.png","d88eeb678b3ed3651d597e61957e264a"],["/images/nhkimage/2020.08.15.png","b9879f193867edcffeefce62c9dc7153"],["/images/nhkimage/2020.08.16.png","46cb914aa1d556561897767ec9ff66a0"],["/images/nhkimage/2020.08.17.png","ea1af9645b5cc9cbaafe70a91dd15cca"],["/images/nhkimage/2020.08.18.png","e87e4de39a6f06cf4283a63af92dd8de"],["/images/nhkimage/2020.08.19.png","8001a951513b542a98ce1151be5bd87b"],["/images/nhkimage/2020.08.20.png","4bc8fafa3ecce30d340b1350715d78e3"],["/images/nhkimage/2020.08.21.png","07ad1337e127922abff27da6c672549b"],["/images/nhkimage/2020.08.22.png","b2b5d53ba46015f64048f9d803b12179"],["/images/nhkimage/2020.08.23.png","225af8c0cabe5218ec634d1b8815fd95"],["/images/nhkimage/2020.08.24.png","1d54a484a6e2395aabe9be005cd90361"],["/images/nhkimage/2020.08.25.png","8008ba169cfce0ef2041329cd29b6b77"],["/images/nhkimage/2020.08.26.png","72a2b8094003a54c97a34ea97cf21bc3"],["/images/nhkimage/2020.08.27.png","893407e604804d215c8fef8bcd5f2684"],["/images/nhkimage/2020.08.28.png","b542280b7341759890a99cbd44d822c5"],["/images/nhkimage/2020.08.29.png","620e2e7d4772e39615fd1a88cdf49717"],["/images/nhkimage/2020.08.30.png","f645d7ba2dcb506f9ec6fb9244425ad7"],["/images/nhkimage/2020.09.03.png","c5262f3aa87190e0273383ea1e445681"],["/images/nhkimage/2020.09.04.png","c07149c32aa41c03bc7dac82a713f6b2"],["/images/nhkimage/2020.09.05.png","4e43556e1cb3b7f4d75f0f6127616a54"],["/images/nhkimage/2020.09.06.png","1021d2ae04a7f109404f857a2a7629cf"],["/images/nhkimage/2020.09.07.png","db9827e9f0a4cf1401b559b4644a0204"],["/images/nhkimage/2020.09.08.png","efe1030b73dc1c01f169c3122a194426"],["/images/nhkimage/2020.09.09.png","f6ba3a1c6cdeff88404ebe2a646f2eb5"],["/images/nhkimage/2020.09.10.png","3471b05d02113517359a9e2167befcfa"],["/images/nhkimage/2020.09.11.png","921a541a8bffb1aa436df2eb6db7c99f"],["/images/nhkimage/2020.09.12.png","a51f8ebaddba69bb80f9259a30f17e65"],["/images/nhkimage/2020.09.13.png","0399889200493cd2154ffc407e2bc400"],["/images/nhkimage/2020.09.14.png","eaaf3da69a39ed316b7fc8c4d409bb0f"],["/images/nhkimage/2020.09.15.png","5774959ea4061c9298ea174f0862cc3a"],["/images/nhkimage/2020.09.16.png","0c5a00f74020740fda589c02e4b3f917"],["/images/nhkimage/2020.09.17.png","b5aef734e3a7db4862ca3fe4e6769dc2"],["/images/nhkimage/2020.09.24.png","5982a7b3843f4ae43b2b4bc4b0c577d6"],["/images/nhkimage/2020.09.26.jpg","c6415af781fbdd36fdb034f74646129b"],["/images/nhkimage/2020.09.27.png","27aa6f6a8d5534ccd99cff261dcd9eb6"],["/images/nhkimage/2020.09.28.png","0f4318d1ff17a33de364432a1c44b5ad"],["/images/nhkimage/2020.10.09.png","6408d9f7e66fdeba8b9207939a08cf8d"],["/images/notop.png","d25c272e5ce312a880e04ce8a0b27683"],["/images/pasted-0.png","552608d8f6e39369aa30c6e332a32826"],["/images/pasted-1.png","baafdacee93c99e99418aaedbf524fda"],["/images/pasted-10.jpg","395cff6f64ab5df19baa3572ac98e541"],["/images/pasted-11.jpg","56e5df07c96634638abf7995b25c81ab"],["/images/pasted-12.jpg","61b3f803b85ce3640d7a9ba7efb9da6b"],["/images/pasted-2.png","2f410e53c811f92a6135f48857776f5e"],["/images/pasted-3.jpg","bb5717e691e87355e7d63a5f3a87ae62"],["/images/pasted-4.jpg","10041d0e3567b24b81222ec5075d6492"],["/images/pasted-5.jpg","ac5047a4b48c6cdaee86fa1863e33904"],["/images/pasted-6.jpg","1556ae8d3ad5713d60237ee4d10e81f0"],["/images/pasted-7.jpg","913fde1686587646ddc663bd810cc81d"],["/images/pasted-8.jpg","fc83268081fb4b6b6ecb1ffa1ec5af7f"],["/images/pasted-9.jpg","25e0fa3496591501f5c29d0b802b77d2"],["/images/pet.png","2b8c121909497e57057478856fe48a94"],["/images/pet2.png","dfb1d6a17b527ccc0c600e6ad31f55e5"],["/images/ps1.png","0917ba91f21b6944dc08d35c41a326d2"],["/images/psb.jpg","6a27c58337875c776af0a7667598b401"],["/images/quse.png","7cd1ec12b804305430cb4cdc09c7a893"],["/images/rain.jpg","9c26acc44c692b6a63e134be07b07c18"],["/images/shezhi.png","281bf545f6a4024e2d0b7120bc398a21"],["/images/soul.jpg","d97b4099c0728ff6123d006fa62db86e"],["/images/study.jpg","a9b1cf95ee6bd9f3913e8ec6a6a6f44f"],["/images/tianqizhizi.jpg","dd48d78b4eeaaa52578352f9ef570b14"],["/images/vue.png","cf23526f451784ff137f161b8fe18d5a"],["/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/images/work.png","e521cf5b834292fde1c50e0a0f5802f9"],["/images/xiaoguoyanshi.png","994a3b710d36df0a4630cd9a768c7f7b"],["/images/xiaoguozhanshi-m.png","1fefca18214fc4889d1bb76b81887c9d"],["/images/zfe.one.png","b41f689341882058ffb28c4cee499bde"],["/images/幻想终结之日.png","0025c4d3973bdfedb80db3f78c59fa47"],["/images/时空战纪——游戏建议及意见①.jpg","1337457f14a8dffee66d94f8915b54ff"],["/images/简历.png","d70507ee4615c9e324578c0d777e6855"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favicon2.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","7db2cfe95745f7b761a158269791b828"],["/js/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/APlayer.min.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/airvisual.js","71cf86bfd452ca01d92438d8266416ee"],["/js/airvisualapi.js","6931bebe1696688d109963187fc2eace"],["/js/background.js","94c8410b174f58594cf81ec99054968b"],["/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/js/calendar.js","a58e02711cc6dec4dc04257e555b8923"],["/js/clock.js","ead1a80f7219c166e1180674b7d8c70b"],["/js/color.js","3730bb4f7b185e6f5130ac28bace968b"],["/js/danmu.js","6b6ae6b7f1b42dd4857541f43b2bb733"],["/js/echarts.js","dc1227b1eba1ba47fd185a387d0a7d37"],["/js/gitcalendar.js","fadfa8a42272cd322118653dca512a7a"],["/js/history.js","20459f7db325e597e64903f4c0d19306"],["/js/historyroll.js","a3e9ac376106816c50a61f9f4306d671"],["/js/jam.js","462c07d3b2e0f20394d994bbcfae37cb"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","455fface5a0a3ff90766ca254affe502"],["/js/rain.js","f656dc28e4ab5c3f8414d35f683278c1"],["/js/rainremove.js","ceacf82842b101f7e54a2aaf5f4bb9cb"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/link/index.html","a75ff1c796f935adeb83a26c4f93da50"],["/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","2f83ce4098aca73f08d094dd882ec9a1"],["/page/10/index.html","10a884de24606a5b5ae967443096c406"],["/page/11/index.html","a368da76a760df3e9205999d1591c5d0"],["/page/12/index.html","4fb51de42cf7f438e3ad53dba5b108eb"],["/page/2/index.html","93100aa5f8289604f263c418efb01f50"],["/page/3/index.html","0281e6e709133f0835643e1fdf8388cd"],["/page/4/index.html","d4909c0792dede376da84938fe1d1822"],["/page/5/index.html","58724decb2c5ac6073dced8b4ac4a394"],["/page/6/index.html","ca31e8624a962e809d2706bdabf57f35"],["/page/7/index.html","ddbd29c356297d093407215aa0f35a04"],["/page/8/index.html","6999a73d3080bfd9a9a6c2cce4c48280"],["/page/9/index.html","c3026cae92fea756ff19a1c7c27818db"],["/research/index.html","205f607eef4916cb0836cf2cfefdd00c"],["/sw-register.js","10a9049e56b0c1818121d189b34b98c3"],["/tags/Butterfly主题/index.html","89fce6eb62a230b799b91a87b9605492"],["/tags/DIY/index.html","6440173831a160dc2a1334f577b3d3f4"],["/tags/DIY/page/2/index.html","2bbdedf26c050a0b9cd3794aac35e1c8"],["/tags/ICT/index.html","f1905f244b4a97f5ab37437629662230"],["/tags/NHK听力练习/index.html","98a6d8e77e2fc86538817f3fe1ca2aaf"],["/tags/NHK听力练习/page/2/index.html","771f3b7c50ba8aa3d61fda22e5ae4d0f"],["/tags/NHK听力练习/page/3/index.html","28d31ba0019b88ede814dd9e2d89bf48"],["/tags/NHK听力练习/page/4/index.html","90448e2560b87da0cef45c01d0ce1d28"],["/tags/NHK听力练习/page/5/index.html","cfa0035de0cf2012ed20f36395ed77b0"],["/tags/NHK听力练习/page/6/index.html","645eb4656b1b7973d97817af2d11aa61"],["/tags/metro-ui/index.html","36c1dc0a31a97e4d1e1b06501947b1a4"],["/tags/vuejs/index.html","40344e0b80e46da2392490a3818ba241"],["/tags/お盆/index.html","333aa938ce63642043517b87d696c292"],["/tags/世論調査/index.html","db0fafe45c0d1b303e388dc5c19ddedf"],["/tags/作品集/index.html","40d760a2ca7084286a028e2a0488f55b"],["/tags/作品集/page/2/index.html","d84120f7a4dad1c94c46b12b57891957"],["/tags/农业/index.html","020f363afe9fcfe9d026bfbe281a8cd4"],["/tags/历史/index.html","c1df267ac6c0c6d7e4841521996dd1ed"],["/tags/営業時間/index.html","c83238d1fa197a3296eda17c54a1c821"],["/tags/国外政事/index.html","666a996d8cf849f7c801db6a5ee3d096"],["/tags/地震/index.html","0288465ac73bea6030b7e9ff13aa0339"],["/tags/外国政事/index.html","116eb320bd1314af147506eefc59bf7b"],["/tags/天气/index.html","533ef009037cc2d9f507a702837b9f24"],["/tags/天气/page/2/index.html","f78b8d406404154ffa4eaaa4bc0e891a"],["/tags/奥运会/index.html","3e104148f7bdb7be1a5890f92e998258"],["/tags/学习/index.html","313f8234e3b16a89bb07271efb8f8105"],["/tags/学习/page/2/index.html","93b2293bd2708b16cb0b8016e6374367"],["/tags/学习/page/3/index.html","bfb8901f7edef91c7df394fbbcdc7f15"],["/tags/就业/index.html","e0f492c7b49d5643bcff6a260b773396"],["/tags/庐山/index.html","156755477d5c01924d39caa899153224"],["/tags/座礁/index.html","5e4db64f2145dcf051a1982b211844ed"],["/tags/政府/index.html","f5ccacdfd7463a9af991f281e450f23f"],["/tags/政治/index.html","0fc61c8f679264063b6ce66b442f1ab3"],["/tags/教程/index.html","73cff5a3c785d6376f5664ab8df3de9f"],["/tags/日本教育/index.html","df9db16ef315b1d6e2025321874ab17a"],["/tags/民生/index.html","e7375a168321439c76c4a449fcc6156a"],["/tags/民生/page/2/index.html","5add25af9350949dd71b2802c66d6fce"],["/tags/游戏评测/index.html","b9445e38f7397ce34d1337e63368583e"],["/tags/游记/index.html","c459710990f5270b9813c74333b275a9"],["/tags/生活趣闻/index.html","00108441127b7a792c23cfab70b97996"],["/tags/科技/index.html","1310018466ae5a61cd6a280854d36202"],["/tags/经济/index.html","63cdddb704c0676fdea3a302c0532d71"],["/tags/经济/page/2/index.html","a8e9c70f79bee536ff813875592b66ca"],["/tags/网络教学/index.html","caf8f2ceeab54a6409843ff63150c792"],["/tags/舆论/index.html","f8d9240f749c08c65f293e12b7092cea"],["/tags/虚拟现实/index.html","9b5e15fac3621af83bd79c98107802da"],["/tags/随想/index.html","403cd7baaec4cf9570373263b7f53a63"],["/tags/障害者/index.html","0e636ecd26e1917b29efd27b2bb15e83"]];
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
