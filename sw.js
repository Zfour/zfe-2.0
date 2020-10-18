/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/05/20/2015-05-20/index.html","5f85791a7340e9465fbe7c7e2fc6a940"],["/2015/06/16/2015-06-16/index.html","0e2e98ed675b65ecb098001d924f7a0e"],["/2015/12/12/2015-12-12/index.html","8afde6f6e2fdbdae2fbf562f3345d9c8"],["/2016/06/08/2016-06-08/index.html","0b70196ea1020bd1a79e22f9d6d38abf"],["/2016/12/18/2016-12-18/index.html","71122b7927d5eada39170200abae9428"],["/2017/02/17/2017-02-17/index.html","1cb5d83dcc27f568a5aeaa2a6c5a4175"],["/2017/03/17/2017-03-17/index.html","f27c45676d68e921af029f1552e6575e"],["/2017/04/06/2017-04-06/index.html","c74ed1e2e0839a167fd58e8ef794f70b"],["/2017/05/17/2017-05-17/index.html","7416717581551098bbe4eea73d169ad0"],["/2017/08/15/2017-08-15/index.html","1fc1bbec3b7fec55518f3a9446c2f19a"],["/2017/09/16/2017-09-16-1/index.html","b5be58752220ab5d05df814eecdbc417"],["/2017/09/16/2017-09-16/index.html","8c3fda8325551e1bb9054d54934f418b"],["/2017/09/21/2017-09-21/index.html","6cce1d9479821c6914e187d5319cc23d"],["/2017/09/23/2017-09-23/index.html","daa6a477266fd03f99b6962c5d69fc9f"],["/2017/09/26/2017-09-26/index.html","834623de07dea59be7da427561d616ad"],["/2017/09/27/2017-09-27/index.html","889bbcc111d9213c0a486ffcbb8ba63e"],["/2017/10/04/2017-10-04/index.html","5e0d000805e95206d20030d85b7de4f5"],["/2017/10/08/2017-10-08/index.html","0c50d4f7a7cfebf210d46d4ef5f11b87"],["/2017/10/09/2017-10-09/index.html","966ef9136a1b11e1107f928283e57fa6"],["/2017/10/15/2017-10-15/index.html","50562ad985d068a7dddcae82531fe115"],["/2017/10/19/2017-10-19/index.html","760498b8e574a1e162efa077526b59ba"],["/2017/10/23/2017-10-23-2/index.html","375a07ea542fef0ba4462f85805ff62b"],["/2017/10/23/2017-10-23/index.html","70a77f9933db0c94557addae1069a7f1"],["/2017/11/08/2017-11-08/index.html","73432bcad0fa4e9b4c8d9b302ae3d58f"],["/2017/11/12/2017-11-12/index.html","120883affdac753bdf5ab263c69ee2db"],["/2017/11/15/2017-11-15/index.html","ca4489c702a8eff92abf5e34421ce786"],["/2017/11/27/2017-11-27/index.html","941d3ee62852f3ea9d2c72fa32a39d10"],["/2017/12/06/2017-12-06/index.html","5780d56d979865caf6d16847705796e6"],["/2018/02/12/2018-02-12/index.html","eebeb883ff688c2bc0081e49b3364455"],["/2018/03/26/2018-03-26/index.html","e61422ad2129002796db68554cb4acc6"],["/2018/04/02/2018-04-02/index.html","5d54f657d93670dfb37170af5f41e01a"],["/2018/04/24/2018-04-24/index.html","0ec630fae698fb61f8b806d4a5dce494"],["/2018/05/18/2018-05-18/index.html","dd64c2d21bf83527993979201615b900"],["/2018/05/23/2018-05-23/index.html","9a02dc9d885527eea521d2468bc6db77"],["/2018/06/08/2018-06-08/index.html","108c5951aa09c322218a7d91e4fa9225"],["/2018/07/01/2018-07-01/index.html","5474cc723afe0b54e21e9c8d1aeef647"],["/2018/08/30/2018-08-30/index.html","950efec95c7408982a66857398cf4d15"],["/2020/07/20/2020-07-20/index.html","e71e31db86a2fe97a8454b2b6a0156f6"],["/2020/08/01/2020-08-01/index.html","8f2547623191b7b479efde0dccfa7d0a"],["/2020/08/02/2020-08-02/index.html","79120fe23d156a245d30ba9408a0e77d"],["/2020/08/03/2020-08-03/index.html","18c1c9cb058c45a0945952e7769b03c6"],["/2020/08/04/2020-08-04-1/index.html","6b2c5edc249e44f2821687f66682be38"],["/2020/08/04/2020-08-04-2/index.html","997dc1e887c8352250b968691d449b6a"],["/2020/08/05/2020-08-05/index.html","bdaae5f63addc4d57f573930069a0442"],["/2020/08/06/2020-08-06/index.html","0942e1090d6b5f249d35e9c6a42a394b"],["/2020/08/07/2020-08-07/index.html","5d3dc37a8b8c9c373a597a4dac8b0408"],["/2020/08/08/2020-08-08/index.html","c1e916ce3cf1a20b22a4f79725fa69aa"],["/2020/08/09/2020-08-09/index.html","4a6dc3f541afe7f1adaf0a5c86778112"],["/2020/08/10/2020-08-10/index.html","52bd16b3dd83668f6e0653457834cdee"],["/2020/08/11/2020-08-11/index.html","1ff78eacd4ee5f302ca8ad3c782a9c19"],["/2020/08/12/2020-08-12/index.html","e32c50c2bc0bf82b4e936416dec20493"],["/2020/08/13/2020-08-13/index.html","a6e90bcaa2f291ef4ca97635cb50c52a"],["/2020/08/14/2020-08-14-1/index.html","2c043efcf4b2cda28e4683dc24ab34b4"],["/2020/08/14/2020-08-14-2/index.html","e920088e96a53da3e41b3d9d00fef9c8"],["/2020/08/15/2020-08-15/index.html","a74d57648d6f8d318e4fda615326f869"],["/2020/08/16/2020-08-16-1/index.html","5117b498975267adc960de50e8edc65c"],["/2020/08/16/2020-08-16-2/index.html","20ed43951be349876cd0a38ff6310a9d"],["/2020/08/17/2020-08-17/index.html","e1d9d849107e839aab2f26cd4e00bf85"],["/2020/08/18/2020-08-18/index.html","e42e063a634287f4ed592e4b409e313b"],["/2020/08/19/2020-08-19-1/index.html","d30b23943ca4720cb597f1bcfb914495"],["/2020/08/19/2020-08-19-2/index.html","5396a8d916075df31477355f00cdd070"],["/2020/08/20/2020-08-20/index.html","c900e9bcfef9f317d072eb35ebe6c026"],["/2020/08/21/2020-08-21/index.html","ea0089ccf70d265c39ab68ad651b3b71"],["/2020/08/22/2020-08-22/index.html","db6076a6df638e4658e47403eda2f2ed"],["/2020/08/23/2020-08-23-1/index.html","e57583109f9fcc9dbcd1677d8457425d"],["/2020/08/23/2020-08-23-2/index.html","867173b65e19bee43f664513f760f866"],["/2020/08/24/2020-08-24-1/index.html","6262092ffb961f1b9ca519ca7158bb65"],["/2020/08/24/2020-08-24-2/index.html","3c24577d9d1ae754a42511d294eb1cc3"],["/2020/08/25/2020-08-25-1/index.html","f535779d4e0e622629e952f648190206"],["/2020/08/25/2020-08-25-2/index.html","daa4c013e31a6fd29691bfa2cca32ff1"],["/2020/08/26/2020-08-26/index.html","623c9edf6647ae7e879249096f7c4f9a"],["/2020/08/27/2020-08-27/index.html","bb94b352eba36367d15762362a527eb0"],["/2020/08/28/2020-08-28/index.html","ee3292e659c5abf9e760a2878edd3cc5"],["/2020/08/29/2020-08-29/index.html","3b39d579888615a66f7e056281f5f39f"],["/2020/08/30/2020-08-30/index.html","75f15d9b7b8534a4151748bae3d04557"],["/2020/08/31/2020-08-31-1/index.html","95b277e998e00961abd014e5c239e412"],["/2020/08/31/2020-08-31-2/index.html","8e55beea7a72679e0dd03b82a583488f"],["/2020/09/01/2020-09-01-1/index.html","341a5cd1126de06992fec3e451c109a0"],["/2020/09/01/2020-09-01-2/index.html","77c9ec2fe125aaec0dc2e5cf6a8bb783"],["/2020/09/02/2020-09-02-1/index.html","ddd1291e021b9ad40f92f11ce47e61fa"],["/2020/09/02/2020-09-02-2/index.html","20ce04be1d21323afd1b5d4fea29708e"],["/2020/09/03/2020-09-03-1/index.html","e4374575336effa4eaff19c14869a790"],["/2020/09/03/2020-09-03-2/index.html","dc8595fa9d64b09e2d7f184f3f0514d1"],["/2020/09/04/2020-09-04-1/index.html","47f61ebd1600a0d4638643fcd9ae472a"],["/2020/09/05/2020-09-05-1/index.html","698f3214f2bf3f254bbafb250a7bae31"],["/2020/09/06/2020-09-06-1/index.html","f5ebe138d8d7be1e5af363d5812e045e"],["/2020/09/07/2020-09-07/index.html","6102e3f2937aa8e0b6882c4d3b09011e"],["/2020/09/08/2020-09-08-1/index.html","399365068ddc2e5e8aed044bd0eeaa9d"],["/2020/09/08/2020-09-08-2/index.html","3beb7269963c8fc606a13db546e3948e"],["/2020/09/09/2020-09-09/index.html","942dd7116c7d47cade8829b3a9d994f1"],["/2020/09/10/2020-09-10/index.html","2ac29b3881c6cbd396003b5c8caa735a"],["/2020/09/11/2020-09-11/index.html","c73c97b9db827e688956534923ee5470"],["/2020/09/12/2020-09-12/index.html","164c4d5f2a1ed370b541dd107942ca94"],["/2020/09/13/2020-09-13/index.html","7c5dce090f37844ffffc71b0b1291f00"],["/2020/09/14/2020-09-14/index.html","6c321c4cc4ecc8a8676e090f5231ee41"],["/2020/09/15/2020-09-15/index.html","82f1a035c6cbae3d2b6157707d18810c"],["/2020/09/16/2020-09-16/index.html","e281cd68b6d76ea1d7c60bf6bd2fbe31"],["/2020/09/17/2020-09-17/index.html","4abc8c68fd39918bb089a797b91dc853"],["/2020/09/19/2020-09-19/index.html","974ea3fe9501634fc9ec16a01be5c0d5"],["/2020/09/23/2020-09-23/index.html","ef43ef694111ec21a3b914a67351b159"],["/2020/09/24/2020-09-24/index.html","feff4a05fc91d07f3d114096a7886a6e"],["/2020/09/26/2020-09-26/index.html","68a4b0958979c090cfa4fe2a726fb70b"],["/2020/09/27/2020-09-27/index.html","0a7255643982a2bf4c6f3a2e6b31e51d"],["/2020/09/28/2020-09-28-2/index.html","68e6f5082b2376d3db323b790e5b98c2"],["/2020/09/28/2020-09-28/index.html","d958127efac2398842f05a5548d59f37"],["/2020/09/29/2020-09-29/index.html","c86911fec1ea006ad009d801fb5538bd"],["/2020/10/03/2020-10-03/index.html","2a5bec64363a5a7f9ce0aad4a4388d12"],["/2020/10/04/2020-10-04/index.html","1548e73fb6ac7e2be8f8e9c1c6a9df10"],["/2020/10/09/2020-10-09/index.html","b8360898935f21d1b772288928633cf2"],["/2020/10/10/2020-10-10/index.html","564b82534967c6eac2dd37e5df821e69"],["/2020/10/11/2020-10-11/index.html","58856bb949f95845b40304f20672cfe6"],["/2020/10/12/2020-10-12/index.html","8f7ac89f207f8a52d2101db9ce8b22ed"],["/2020/10/13/2020-10-13/index.html","5bc0905e43f967766c4a1ac326f5815b"],["/2020/10/14/2020-10-14/index.html","a50ed0cdc88dcf91cc5f0ba0d035c8ee"],["/2020/10/15/2020-10-16-2/index.html","0335223668c5f0ed86e7f63b90cc47d5"],["/2020/10/16/2020-10-16-1/index.html","dc6a47d296145e643221abf506f96f27"],["/2020/10/18/2020-10-18/index.html","41844a3a16ae13620edd4aab1d7af0c3"],["/airplayervisual/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/airplayervisual/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/airplayervisual/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/airplayervisual/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/airplayervisual/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/airplayervisual/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/airplayervisual/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/airplayervisual/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/airplayervisual/index.html","55d13d5ad61e9406f480169af48ee828"],["/airplayervisual/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/airplayervisual/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/airplayervisual/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/airplayervisual/js/jamsetting.js","7927507e0080ddf55c6d8b5f526bd942"],["/airplayervisual/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/airplayervisual/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/airplayervisual/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/archives/2015/05/index.html","a2c73a91fc5ea7928b7ed5cc5e011093"],["/archives/2015/06/index.html","9df6bf8e41d09c55acf139819cbcd5b7"],["/archives/2015/12/index.html","8e8521aad9e431a4971a62986e0b43eb"],["/archives/2015/index.html","5e66f235830f8959e614e03a53f87b09"],["/archives/2016/06/index.html","09d1e32b9771b79861e6f8745eab6560"],["/archives/2016/12/index.html","6ebc4c62b61a5e29a9ab39e91449d360"],["/archives/2016/index.html","7a8b2d26379b85b813e6a6a5e253f500"],["/archives/2017/02/index.html","04a94a271c2a3f7a6e04f000245e93b2"],["/archives/2017/03/index.html","833486fe4ea4404388cc25c37e685f80"],["/archives/2017/04/index.html","d04897b95836d12bf4bee51acb925791"],["/archives/2017/05/index.html","fa03393a78d4864f8ca855ab2f4a5734"],["/archives/2017/08/index.html","7e1b0ed1430f1105c9a4a31edb252dff"],["/archives/2017/09/index.html","01c79ed5969afaf6e70a1b591e03c58c"],["/archives/2017/10/index.html","98b3db49b503c0404c846098dd60f870"],["/archives/2017/11/index.html","b469853b4c3ff45a96ac30e1d18dee04"],["/archives/2017/12/index.html","d2a156f0f68f84a38d2e087aafe05b50"],["/archives/2017/index.html","640fde9386c8422aa0557f4854e90f4a"],["/archives/2017/page/2/index.html","ff345f6cb2397825f1d3c9b4ed6b547a"],["/archives/2017/page/3/index.html","77d331fb2051e4a26610af1125efa361"],["/archives/2018/02/index.html","5209e1c2f22a6b492c738363ab96c7bd"],["/archives/2018/03/index.html","9d57543cbc2189ebc23e1c6f895580f8"],["/archives/2018/04/index.html","280b43f0e9434300cbd38382fd957e4b"],["/archives/2018/05/index.html","7735c7f455801e41ef73bb3d05262f30"],["/archives/2018/06/index.html","650f5cfe179efb597d618e00889e312f"],["/archives/2018/07/index.html","32538a0f8e058a418f4b9ca8390f5fc0"],["/archives/2018/08/index.html","af662b4db881f8b0634775ebeaa5aa2a"],["/archives/2018/index.html","c898586f5e713121297d74c32a31d2de"],["/archives/2020/07/index.html","e6e80fc1005ca79afbdf48db9e387fd0"],["/archives/2020/08/index.html","6488d6ee68d8604e038c3a9f22b569d5"],["/archives/2020/08/page/2/index.html","b400a18e9fc096a942f9c4eb27cb2d68"],["/archives/2020/08/page/3/index.html","17301fb4f0c3612645829973f76ea609"],["/archives/2020/08/page/4/index.html","9cdf686b9b77a49e6b7a7adda09270a7"],["/archives/2020/09/index.html","4ae818d2966e5404da45f82f13f8d1b7"],["/archives/2020/09/page/2/index.html","3acfae3c93481a3b1c77372ad03e291f"],["/archives/2020/09/page/3/index.html","226858cec369d7fcad96d42343be1459"],["/archives/2020/10/index.html","9e3e02cd8b68da02d37cb51ac5f11304"],["/archives/2020/10/page/2/index.html","5deac9dbf03dfc6e55fd9db762af57db"],["/archives/2020/index.html","127a811c727a72b3b7b958b279efc415"],["/archives/2020/page/2/index.html","e56e45df0c197400860983ea2daac69f"],["/archives/2020/page/3/index.html","ea362da42e0a850329c5a016396072b5"],["/archives/2020/page/4/index.html","e67a4eaf7590bccc94a4d972d15dd340"],["/archives/2020/page/5/index.html","cad3c1c16192a374e522c32c34756a18"],["/archives/2020/page/6/index.html","4d875685fd39128faa91e0fc2b85e0d1"],["/archives/2020/page/7/index.html","952c88cbf0dd1de3e5f473af10e81a8a"],["/archives/2020/page/8/index.html","e984e01612b67e39bba2835e025fea63"],["/archives/index.html","c1d75f0f886555845a8bd0e6c0217cce"],["/archives/page/10/index.html","7f31389b77ae55faba0032db7fb450f0"],["/archives/page/11/index.html","41d45489dd2da3802d3019f632d11ed2"],["/archives/page/12/index.html","d3e62e660c7770441304d8b3f9595744"],["/archives/page/2/index.html","ade595678f02baddc49dbd80cc9cab05"],["/archives/page/3/index.html","3cbe96bd61f6855b5d56c1192b5dd895"],["/archives/page/4/index.html","3213a60751d9b4b47cbc80669bd9c2a6"],["/archives/page/5/index.html","7305f82d336d87732a1ce8c761da6b98"],["/archives/page/6/index.html","4279bcb5ee9c3afa1acc5fe9eea60ec7"],["/archives/page/7/index.html","ee78e23b970b7ba2bb6f0318169ad388"],["/archives/page/8/index.html","2b5edd19136607dce7caeebd2f5a4054"],["/archives/page/9/index.html","77fd8ad819b7d14b9cbfcc97f6d824d3"],["/catalogtest/index.html","53b8b77139934769144f9e90230958c6"],["/categories/NHK听力练习/index.html","e6c23add14c2ffe5cc7ae572755090e3"],["/categories/NHK听力练习/page/2/index.html","d1ec388dc4a0906f89957448bd73e160"],["/categories/NHK听力练习/page/3/index.html","e483479d363ebc360aff7b916d902388"],["/categories/NHK听力练习/page/4/index.html","f356282d2b1970436a59fb75ebf1c63a"],["/categories/NHK听力练习/page/5/index.html","8c6cf1071fd6fbd468f86458623f9c4e"],["/categories/NHK听力练习/page/6/index.html","0388a08313dffb68795db18fa91770e1"],["/categories/vue/index.html","797199dd2a3feefad14b626cd07cc206"],["/categories/作品集/index.html","f5fbd4531d6e9a9d44dba070581c22a9"],["/categories/作品集/page/2/index.html","24ac972238fccd9ab1d9174022418fd8"],["/categories/学习/index.html","f87179e6913498fb8c6e43048b2830fe"],["/categories/学习/page/2/index.html","46351eee6855b9ca542237db789cb474"],["/categories/教程/index.html","a629fb41a65b06dd9f000333a3da782f"],["/categories/教程/page/2/index.html","e835c0c8951cc03e857ad8e9efb70b6f"],["/categories/游戏评测/index.html","e32d7f205ee6b89400ebd253897222b8"],["/categories/生活趣闻/index.html","c79ffc01055092d162e49cc3e8e855a1"],["/categories/随想/index.html","af2204666898d692e79bbadd3be6280d"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/addcss.css","d20fc732e0cc7996bd82c5170b7aaa86"],["/css/background.css","32d5acccbb94f987faf37cfdc3fd06df"],["/css/calendar.css","0090a32d2a61d42c5bfed254bfba078c"],["/css/clock - 副本.css","65602c2385c7eab42ee3804cd6ee0a5a"],["/css/clock.css","9db53e3bffb704c740aa83bddaf8b999"],["/css/cursor.css","c1a23e168c5b794ff367eb0ae77eb26b"],["/css/danmu.css","2a5b914a9592bcd353425c6d5fa7af8e"],["/css/index.css","a830cf7dafed0e1e03142b35ae00f2a6"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/loadingline.css","bc1ee020a6a11fea17b915b97e6978bf"],["/css/shuo.css","e34cec2d23b9764928df02c60388358f"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/html/calendar.html","bddcec1edba7f4c49fe5cd75f8cdf5b2"],["/html/shiyan.html","53ff3fde16dd4b34bb506e19cb634274"],["/html/shiyan2.html","9eecbbb825679924cb8e252902228377"],["/icon.png","8ec68de45d18642ba9baf2447e62f476"],["/images/AMJ1.png","d27a6725d1aaaf5324248da4312ab6c2"],["/images/AMJ2.png","00e22eba5901e5bd674e42228cd5bd26"],["/images/AMJ3.png","c8c9ea6348dfcad3a641899d5b587431"],["/images/FOTO1.jpg","4b6f100861908e2c7044cffbdb4a0c1a"],["/images/MVVM.png","ea5a002ee2f85c71a0db51d5adb5de19"],["/images/UT.jpg","367f4e432f9db55a92b2a290c4b0a476"],["/images/UX.png","a183974e958d41d1b6acec70bb7ea00a"],["/images/WindowsTerminal.png","8ac29cb56b8a1768cf7de071e9f1ae6f"],["/images/air-w.png","c1cc32f9d3e17551ca11a7d18a0b533a"],["/images/anzhuang.jpg","912b2489957f8344406edc5e5cebe5fa"],["/images/api-setting.png","2c0bb074390779721cba009e96c5417c"],["/images/apikey.png","1f31121b190eb1f990bcc3e27524bc03"],["/images/b0_img.png","43fcaa3f8b394ca5be957f4b860800db"],["/images/backpic1.jpg","86a6fa88167feb338fbf1a4e9057114b"],["/images/c0_img.png","34397085b4d3349034f9b167469ac626"],["/images/c10_img.png","7938c5b0dd789db4f262e5a618943a9b"],["/images/c1_img.png","95211a0ebf07befde1b11477c3a8185b"],["/images/c2_img.png","456ba51725d669fc4d005787753a6b08"],["/images/c3_img.png","a0aa7dcdd2ed5bccec52c16942036a3f"],["/images/c4_img.png","0869cebb60d00a78936b7498823a39de"],["/images/c5_img.png","533774e840ccb3ef13b46201a54be05d"],["/images/c6_img.png","db9eb681dea0b7911f0b2ba918d86c26"],["/images/c7_img.png","5b9c9e0331aca2a9d47a2730512f34f5"],["/images/c8_img.png","be9107995f185e3bbf7186c4dff69f42"],["/images/c9_img.png","642a2e762b74a28d2426af14f2b864c1"],["/images/calendar.png","86319b08b93be7c8bc47cdba7a169563"],["/images/clock2.0.png","0a0f122c7a25262fc02ee99df0ef21eb"],["/images/clock3.0.png","8e04375c183c637b65fb50ed40f46466"],["/images/example.png","aaac9983e5d59f919bf282dcff2edb3c"],["/images/foto17.png","28db4c6608ad1ee6b34238cafab25e5e"],["/images/foto2.jpg","be95b922512d004a61f83c97af3e2602"],["/images/foto2.png","0dc07d4e1b00526a273a89dc8b81548d"],["/images/foto3.jpg","551c0616c92c4ee7cc17dd458b3c46e9"],["/images/foto4.jpg","9d1d9fea759a41afc0061866e400339a"],["/images/foto5.jpg","984f618b15372f37d54f507e6f379f10"],["/images/foto9.jpg","b683fc0b998e80ff8f5a3e45e889807c"],["/images/girlpic.png","ff1e8427ed555af639e6d849f8f648f1"],["/images/girlpic1.png","698e5570e821c3cae643cc9777c2292e"],["/images/girlpic4.png","551882e4b9b6afb79000fd34c0dbf5e5"],["/images/headimage.png","332502f36a0297b30cb7969fe6de8451"],["/images/hexo.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/hexoWT.png","c027cc9f5665c7d7ba657e7a4bb40017"],["/images/his-json.png","7d8a71e38ab684107446e5c72c31854e"],["/images/history.gif","0459a3dcf2317253de0b34482880c63c"],["/images/homework1.png","e8d2f64d0785519ea7779016208a2900"],["/images/idea.jpg","5eb08bf6c965588f03c8860f201cac45"],["/images/key1.png","f2a370e02ad6c5a101db20b47a9a0008"],["/images/key2.png","21dc40bbe0377cd9fe85a9cb431c18f0"],["/images/life-cycle.png","02f39ea5c041d45938fda4b50f234cb7"],["/images/life.jpg","74d2d9c5f48ec59e3badeec690941812"],["/images/listen.jpg","9d4f73cd5634f43deaed4f9aca03f9a3"],["/images/loading.gif","ffa0804a5d99e2d5b39e05cda6d6b28b"],["/images/magnet.png","4899a924f3de0d19dbe0415128c07d65"],["/images/magnet1.png","8d010eb86ca943e036adaa7de57aee7d"],["/images/magnet2.0.png","54fe576f174d2b6917fef89f40ac5975"],["/images/magnet2.png","293cb414a8ab93b43bde3bebf9cf0cfc"],["/images/magnet3.png","1923148630e2e094ff80bf35aa604c10"],["/images/magnet4.png","9bb4f963ac1c09f02d62525f513f492c"],["/images/meilu/1.jpg","cd67abcc3f543b5c66adc4f9d9c5c628"],["/images/meilu/10.jpg","ac9fb2711e477b5db1c3acb57e899045"],["/images/meilu/11.jpg","364caad6dfc356a3dc630fa067e48e88"],["/images/meilu/12.jpg","274767e5708f79934e5bdbf73eda8f0d"],["/images/meilu/13.jpg","dcab12b84454770b208913db63e825ac"],["/images/meilu/14.jpg","037cdd048284e621f27e17a2c59e8ea7"],["/images/meilu/2.jpg","f6cdb65ae3fad4523b32f5ee38696b60"],["/images/meilu/3.jpg","9e5df3612c2d93bf57313186c954aea5"],["/images/meilu/4.jpg","69ef2d6f4bcd79cf4b4e672b60c6751e"],["/images/meilu/5.jpg","ce81ca16def7613b7ebb368fb554f14f"],["/images/meilu/6.jpg","cafd5b62305f806754a75cc3af8c3b77"],["/images/meilu/7.jpg","b8ae865d386e1e713a6034da6b090c10"],["/images/meilu/8.jpg","afad7a7bf1066c817a8d2e7566bc780d"],["/images/meilu/9.jpg","72f9649f56b564eacf23ce3dacb88029"],["/images/metroui.jpg","5503bfffd450d9ab572b67ea00941571"],["/images/metroui/1.png","79a03b408c19c74eeaa8ff6e17a03f9d"],["/images/metroui/10.png","8309fed71a15c78f2dfa3af1ff75a5f3"],["/images/metroui/11.png","aaf1a007cbae12f93cc2688bace18d28"],["/images/metroui/12.png","0758ea282c3828c47e5c64520ff85783"],["/images/metroui/13.png","12ca7b511927cd4b26e97f3b20908a32"],["/images/metroui/14.png","f44ba7680f7b36df437e2ae2588d0565"],["/images/metroui/15.png","e8927c78b125b805af7aa86fee815ab6"],["/images/metroui/2.png","e604d3c662b996f06f22753ba9ab379f"],["/images/metroui/3.png","664e3b7490f2f95d5547b8ba79a65456"],["/images/metroui/4.png","c0f255344cafc303a1d9c7404da37149"],["/images/metroui/5.png","da2074cdb1298aca826abc1a5c441300"],["/images/metroui/6.png","efef2f087127614b4e03bcbe9a347018"],["/images/metroui/7.png","a4d34b1a2dbe3a58d3a92276880be039"],["/images/metroui/8.png","1d34a626bbaa898a60d4501936bcf962"],["/images/metroui/9.png","0663697c1667b377fe2623bd65e00b31"],["/images/metrouilogo.png","aea81b42d1c2c96440f74cf56ad82e2f"],["/images/nhkimage/2020.08.01.png","af4c55b2ae1d5ab2f56c75a87fcdfdb3"],["/images/nhkimage/2020.08.02.png","c355d41b90f5c65823f96c5f6868ce53"],["/images/nhkimage/2020.08.03.png","fddcedb40d7f28b2ccb90814351ad5c8"],["/images/nhkimage/2020.08.04.png","8b4518ec5a8513f442980ed7167136b1"],["/images/nhkimage/2020.08.05.png","590abfb19334b0c3cee5a005674f2253"],["/images/nhkimage/2020.08.06.png","d469e21100c42435e88f2bdf07f93da1"],["/images/nhkimage/2020.08.07.png","3ca9e2c8b8a09a38423d73cd36e8de9d"],["/images/nhkimage/2020.08.08.png","4420c2d899fe4eb90c48bae0da8418a2"],["/images/nhkimage/2020.08.09.png","df14be338f9c920818dd1daa6aa955ee"],["/images/nhkimage/2020.08.10.png","c4e2ed023cd3dbfd4986add35ca9357c"],["/images/nhkimage/2020.08.11.png","cf562339e57f673d394f3e6cdd1f60cb"],["/images/nhkimage/2020.08.12.png","81dfa179fea3052ddcf73912ea368f67"],["/images/nhkimage/2020.08.13.png","8cf26c2642e7a27cbd86fcbda8bae8d9"],["/images/nhkimage/2020.08.14.png","d88eeb678b3ed3651d597e61957e264a"],["/images/nhkimage/2020.08.15.png","b9879f193867edcffeefce62c9dc7153"],["/images/nhkimage/2020.08.16.png","46cb914aa1d556561897767ec9ff66a0"],["/images/nhkimage/2020.08.17.png","ea1af9645b5cc9cbaafe70a91dd15cca"],["/images/nhkimage/2020.08.18.png","e87e4de39a6f06cf4283a63af92dd8de"],["/images/nhkimage/2020.08.19.png","8001a951513b542a98ce1151be5bd87b"],["/images/nhkimage/2020.08.20.png","4bc8fafa3ecce30d340b1350715d78e3"],["/images/nhkimage/2020.08.21.png","07ad1337e127922abff27da6c672549b"],["/images/nhkimage/2020.08.22.png","b2b5d53ba46015f64048f9d803b12179"],["/images/nhkimage/2020.08.23.png","225af8c0cabe5218ec634d1b8815fd95"],["/images/nhkimage/2020.08.24.png","1d54a484a6e2395aabe9be005cd90361"],["/images/nhkimage/2020.08.25.png","8008ba169cfce0ef2041329cd29b6b77"],["/images/nhkimage/2020.08.26.png","72a2b8094003a54c97a34ea97cf21bc3"],["/images/nhkimage/2020.08.27.png","893407e604804d215c8fef8bcd5f2684"],["/images/nhkimage/2020.08.28.png","b542280b7341759890a99cbd44d822c5"],["/images/nhkimage/2020.08.29.png","620e2e7d4772e39615fd1a88cdf49717"],["/images/nhkimage/2020.08.30.png","f645d7ba2dcb506f9ec6fb9244425ad7"],["/images/nhkimage/2020.09.03.png","c5262f3aa87190e0273383ea1e445681"],["/images/nhkimage/2020.09.04.png","c07149c32aa41c03bc7dac82a713f6b2"],["/images/nhkimage/2020.09.05.png","4e43556e1cb3b7f4d75f0f6127616a54"],["/images/nhkimage/2020.09.06.png","1021d2ae04a7f109404f857a2a7629cf"],["/images/nhkimage/2020.09.07.png","db9827e9f0a4cf1401b559b4644a0204"],["/images/nhkimage/2020.09.08.png","efe1030b73dc1c01f169c3122a194426"],["/images/nhkimage/2020.09.09.png","f6ba3a1c6cdeff88404ebe2a646f2eb5"],["/images/nhkimage/2020.09.10.png","3471b05d02113517359a9e2167befcfa"],["/images/nhkimage/2020.09.11.png","921a541a8bffb1aa436df2eb6db7c99f"],["/images/nhkimage/2020.09.12.png","a51f8ebaddba69bb80f9259a30f17e65"],["/images/nhkimage/2020.09.13.png","0399889200493cd2154ffc407e2bc400"],["/images/nhkimage/2020.09.14.png","eaaf3da69a39ed316b7fc8c4d409bb0f"],["/images/nhkimage/2020.09.15.png","5774959ea4061c9298ea174f0862cc3a"],["/images/nhkimage/2020.09.16.png","0c5a00f74020740fda589c02e4b3f917"],["/images/nhkimage/2020.09.17.png","b5aef734e3a7db4862ca3fe4e6769dc2"],["/images/nhkimage/2020.09.24.png","5982a7b3843f4ae43b2b4bc4b0c577d6"],["/images/nhkimage/2020.09.26.jpg","c6415af781fbdd36fdb034f74646129b"],["/images/nhkimage/2020.09.27.png","27aa6f6a8d5534ccd99cff261dcd9eb6"],["/images/nhkimage/2020.09.28.png","0f4318d1ff17a33de364432a1c44b5ad"],["/images/nhkimage/2020.10.09.png","6408d9f7e66fdeba8b9207939a08cf8d"],["/images/notop.png","d25c272e5ce312a880e04ce8a0b27683"],["/images/pasted-0.png","552608d8f6e39369aa30c6e332a32826"],["/images/pasted-1.png","baafdacee93c99e99418aaedbf524fda"],["/images/pasted-10.jpg","395cff6f64ab5df19baa3572ac98e541"],["/images/pasted-11.jpg","56e5df07c96634638abf7995b25c81ab"],["/images/pasted-12.jpg","61b3f803b85ce3640d7a9ba7efb9da6b"],["/images/pasted-2.png","2f410e53c811f92a6135f48857776f5e"],["/images/pasted-3.jpg","bb5717e691e87355e7d63a5f3a87ae62"],["/images/pasted-4.jpg","10041d0e3567b24b81222ec5075d6492"],["/images/pasted-5.jpg","ac5047a4b48c6cdaee86fa1863e33904"],["/images/pasted-6.jpg","1556ae8d3ad5713d60237ee4d10e81f0"],["/images/pasted-7.jpg","913fde1686587646ddc663bd810cc81d"],["/images/pasted-8.jpg","fc83268081fb4b6b6ecb1ffa1ec5af7f"],["/images/pasted-9.jpg","25e0fa3496591501f5c29d0b802b77d2"],["/images/pet.png","2b8c121909497e57057478856fe48a94"],["/images/pet2.png","dfb1d6a17b527ccc0c600e6ad31f55e5"],["/images/ps1.png","0917ba91f21b6944dc08d35c41a326d2"],["/images/psb.jpg","6a27c58337875c776af0a7667598b401"],["/images/quse.png","7cd1ec12b804305430cb4cdc09c7a893"],["/images/rain.jpg","9c26acc44c692b6a63e134be07b07c18"],["/images/shezhi.png","281bf545f6a4024e2d0b7120bc398a21"],["/images/soul.jpg","d97b4099c0728ff6123d006fa62db86e"],["/images/study.jpg","a9b1cf95ee6bd9f3913e8ec6a6a6f44f"],["/images/tianqizhizi.jpg","dd48d78b4eeaaa52578352f9ef570b14"],["/images/vue.png","cf23526f451784ff137f161b8fe18d5a"],["/images/vue1.jpg","8cbf18302c6fa72e2a40d0cca0832213"],["/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/images/work.png","e521cf5b834292fde1c50e0a0f5802f9"],["/images/xiaoguoyanshi.png","994a3b710d36df0a4630cd9a768c7f7b"],["/images/xiaoguozhanshi-m.png","1fefca18214fc4889d1bb76b81887c9d"],["/images/yao1.jpg","9dfddaf8c121fc8db788a87d133d6376"],["/images/zfe.one.png","b41f689341882058ffb28c4cee499bde"],["/images/幻想终结之日.png","0025c4d3973bdfedb80db3f78c59fa47"],["/images/时空战纪——游戏建议及意见①.jpg","1337457f14a8dffee66d94f8915b54ff"],["/images/简历.png","d70507ee4615c9e324578c0d777e6855"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favicon2.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","3b968217b49bcf09d18334ea2b89c503"],["/js/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/APlayer.min.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/airvisual.js","71cf86bfd452ca01d92438d8266416ee"],["/js/airvisualapi.js","6931bebe1696688d109963187fc2eace"],["/js/artitalkkey.js","e735b361754e1b51300ddca9fd56b4ca"],["/js/background.js","94c8410b174f58594cf81ec99054968b"],["/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/js/calendar.js","a58e02711cc6dec4dc04257e555b8923"],["/js/catalogMagnet.js","2a4c65f71f95e19bd7e0deb9daa69a8c"],["/js/clock - 副本.js","405186e7a9d73221d2d50c0dea2852d0"],["/js/clock.js","2fdceb94cc57b551cd245b0001927b66"],["/js/color.js","3730bb4f7b185e6f5130ac28bace968b"],["/js/dan.js","6b6ae6b7f1b42dd4857541f43b2bb733"],["/js/echarts.js","dc1227b1eba1ba47fd185a387d0a7d37"],["/js/gitcalendar.js","fadfa8a42272cd322118653dca512a7a"],["/js/history.js","20459f7db325e597e64903f4c0d19306"],["/js/historyroll.js","a3e9ac376106816c50a61f9f4306d671"],["/js/jam.js","462c07d3b2e0f20394d994bbcfae37cb"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","455fface5a0a3ff90766ca254affe502"],["/js/rain.js","f656dc28e4ab5c3f8414d35f683278c1"],["/js/rainremove.js","ceacf82842b101f7e54a2aaf5f4bb9cb"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["/js/shuo.js","4af57c9530c88b87612d9de51510be6d"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/link/index.html","6e07d883c63743b4e9ece6e2ae70f841"],["/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","a83c24ed6a445338f3c4bc5c43a636f3"],["/page/10/index.html","5506b64d629f6ba650febf40e17312aa"],["/page/11/index.html","ba6ad925e3fa8b95acff61dfb8c3aa68"],["/page/12/index.html","39e742d9caba3db8db037a0b1bcdac99"],["/page/2/index.html","b82767da945ef12b6db73f21099d3cb8"],["/page/3/index.html","35fd5e2b6996f6d9199a6e2a402a0605"],["/page/4/index.html","27a9709d1c5a7937a6c885f151d1cae4"],["/page/5/index.html","7bd2f9bb67758b65e6b27c4059717358"],["/page/6/index.html","60cba87d47534d881a47d82dbb099475"],["/page/7/index.html","e0b3445a73aec7c06614262e55c45d12"],["/page/8/index.html","cd58af4cab237055cb9b8b788f3658d3"],["/page/9/index.html","a0912954def2cf6b3bb718a91d9adc01"],["/research/index.html","6e9a793081997a2881e3397af79d6fb2"],["/sw-register.js","1365a88cc34ec265f88b79947de5acce"],["/tags/Butterfly主题/index.html","520e302398bbc6448451630aeea81f63"],["/tags/DIY/index.html","8abd092d6bdc9e496e81ddf015c10901"],["/tags/DIY/page/2/index.html","f286c3917f3323023675c5a8a8e6d164"],["/tags/ICT/index.html","0f2327f112571fda8e3095ffeb93002b"],["/tags/NHK听力练习/index.html","8e9789ad2c2f06ebf7dcd36e88428b32"],["/tags/NHK听力练习/page/2/index.html","ead2e8914a7203334d4a1d3f380e0a8f"],["/tags/NHK听力练习/page/3/index.html","57ba7a698923184eff3e879e375f1ec4"],["/tags/NHK听力练习/page/4/index.html","1027488c6d436aaf41c7a3b775db9c0b"],["/tags/NHK听力练习/page/5/index.html","8634ee5ece974234f177149da58b7753"],["/tags/NHK听力练习/page/6/index.html","52812a8cf8f6198825aa69bc58325759"],["/tags/metro-ui/index.html","e9fe02877b35b67ccb5e74e65f93dc13"],["/tags/vuejs/index.html","e5c31e83334703f0d626e6ff9aaeaaf3"],["/tags/お盆/index.html","1f8b01a77724f21163708861c3b33013"],["/tags/世論調査/index.html","6edb47f102390e93961287ef123af300"],["/tags/作品集/index.html","d546517c771c7dcfccbf393beee256c6"],["/tags/作品集/page/2/index.html","a50ca702ce40805e4f237bfa867773ee"],["/tags/农业/index.html","54fe1e9b177ff4f6fb11a37415794d4e"],["/tags/历史/index.html","584196e93bd8ca534ab41c538ca973a5"],["/tags/営業時間/index.html","d632e26ca84a0f2ce93c1a88ac0c5093"],["/tags/国外政事/index.html","6b2677157e8af7e98c92985361ef4efe"],["/tags/地震/index.html","1dd847577ccd1f39936004001b6171fe"],["/tags/外国政事/index.html","8f956e98601b65a881021c38ad2f7f22"],["/tags/天气/index.html","60e9d6e80a94c45b2433170d0a908030"],["/tags/天气/page/2/index.html","c6f9638dfcbe0cbaa25499409264aee9"],["/tags/奥运会/index.html","36f0b1591acacda4f44aca7cd0f8febf"],["/tags/学习/index.html","461573441647c1e7c791915e17e66041"],["/tags/学习/page/2/index.html","eedfb236fecc11e478cdec4c08ba6e5c"],["/tags/学习/page/3/index.html","ee0d2ba1ad78f8a75f7d653e95943f54"],["/tags/就业/index.html","096622deb6a6e7f9a6a7ae11b583b4f9"],["/tags/庐山/index.html","e6e8b905090c706fa0211e1f4804b70e"],["/tags/座礁/index.html","9f69260dde94d00950e5f07d02b610e7"],["/tags/政府/index.html","4373b41c1be10d6bb6d002c0b20ebbeb"],["/tags/政治/index.html","ecf497e371d9685b1d02ec1085e1e4da"],["/tags/教程/index.html","880df51f5f558b51d02308c33b8eddda"],["/tags/教程/page/2/index.html","e91325ec0e2438a6814d4d6e56892870"],["/tags/日本教育/index.html","0ab30cbf4413b81745d82bca8a25dfb2"],["/tags/民生/index.html","c75423006ee418573267df15e04558b5"],["/tags/民生/page/2/index.html","13823124c7bbc2ff897379dda61ff284"],["/tags/游戏评测/index.html","8d9db201ed9eff5d5b7951084d8b64a3"],["/tags/游记/index.html","8217fe0e4ce1c7550d8a83bf22da3dcb"],["/tags/生活趣闻/index.html","aced405bfdb095345306aeee51952648"],["/tags/科技/index.html","686d7125996bbf7a9aae49d9d8c99f96"],["/tags/经济/index.html","61e980db8ca63baa4d258a818e8f16b9"],["/tags/经济/page/2/index.html","b892e65e1134687b05c50b86e4ed7f71"],["/tags/网络教学/index.html","e3929ce776c0ffde348789b87ad72961"],["/tags/舆论/index.html","9f17cd509e45abdfc26f82b3e8810d91"],["/tags/虚拟现实/index.html","06e0f37bf0a13b3ba0f1a109f92de19c"],["/tags/随想/index.html","1a3274b498eaaea3e85cfcf58adc3f4a"],["/tags/障害者/index.html","68df103f148246847c8397aebb1ce897"]];
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
