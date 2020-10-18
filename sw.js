/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/05/20/2015-05-20/index.html","d5f705f34f2fec40b61ff1c7505329f3"],["/2015/06/16/2015-06-16/index.html","57f9045477afe93e1c69925f31bbcde2"],["/2015/12/12/2015-12-12/index.html","2e6d4c8a47a05a44c1798a69894ddd9e"],["/2016/06/08/2016-06-08/index.html","16b5df347e14f80907cdc51b254fb293"],["/2016/12/18/2016-12-18/index.html","4ca717c73e216287e73c045c19d4a613"],["/2017/02/17/2017-02-17/index.html","38785764f433d3a807121b3a3e61e584"],["/2017/03/17/2017-03-17/index.html","59bc5cd0cb8b21acae0d146a79d03135"],["/2017/04/06/2017-04-06/index.html","ca5f956bc72d8fd0bb6519dd8caab203"],["/2017/05/17/2017-05-17/index.html","defcff43bdf7d75e3398071717d160e4"],["/2017/08/15/2017-08-15/index.html","f3d5cb0f3b33686e5b5e573f1fa6456b"],["/2017/09/16/2017-09-16-1/index.html","02cfa7571e34ffbde2c8e150a368fb95"],["/2017/09/16/2017-09-16/index.html","034a70d2ea128b39e781fa2e05f6cce5"],["/2017/09/21/2017-09-21/index.html","b8c362c18cd0d6e7bb09c0e7463be8db"],["/2017/09/23/2017-09-23/index.html","572669f1bb5798526b7ad97e0c430954"],["/2017/09/26/2017-09-26/index.html","aedd2daf415732d19e0cbb5c3aa43dcf"],["/2017/09/27/2017-09-27/index.html","6a4a3b8e8080a37266169ae2d9540db2"],["/2017/10/04/2017-10-04/index.html","e4f8ccbd83deba2009e702fd837164df"],["/2017/10/08/2017-10-08/index.html","bc2c99940d0fa4ab98661878ab4760d5"],["/2017/10/09/2017-10-09/index.html","bfe0bdbbec6e6e9979641af2451b0ed8"],["/2017/10/15/2017-10-15/index.html","cf3ba1e783cce6d860c22486243abdc3"],["/2017/10/19/2017-10-19/index.html","bdf3dfb2aafa736923b61005d3531a9f"],["/2017/10/23/2017-10-23-2/index.html","86760388a694ac51d5b5fd679ace7a09"],["/2017/10/23/2017-10-23/index.html","87c79a7e100a7ed3b9af222f3e7e8e3e"],["/2017/11/08/2017-11-08/index.html","f29e9331b36c8706376263922232cbef"],["/2017/11/12/2017-11-12/index.html","2b0b717c85e6d2522db6d4e665bacb6c"],["/2017/11/15/2017-11-15/index.html","47b9cc8494c2af80c425bfc8c0296927"],["/2017/11/27/2017-11-27/index.html","6b04818d74a7cccd1daa71ee18d8d9ef"],["/2017/12/06/2017-12-06/index.html","7193ef0ec3c20fc4279ff3512376c1e3"],["/2018/02/12/2018-02-12/index.html","890350f3de3661f8318b20e8d4e5a135"],["/2018/03/26/2018-03-26/index.html","06ce456a7471dba99b124174665bef12"],["/2018/04/02/2018-04-02/index.html","0228197d30db63a21a66085259367b42"],["/2018/04/24/2018-04-24/index.html","23a17ab4564ce46fdd9ae358525ce66c"],["/2018/05/18/2018-05-18/index.html","8e161d8ef9f410d0f40c834f2bc13898"],["/2018/05/23/2018-05-23/index.html","0108e06ff3c4b14e70f08de9670d42b1"],["/2018/06/08/2018-06-08/index.html","fa8ffce723aed95046cad292a82e711f"],["/2018/07/01/2018-07-01/index.html","3d8e5047a05a712afc37a3a70842e7b1"],["/2018/08/30/2018-08-30/index.html","d356e9380ad75e9f99dc95642e6f19fc"],["/2020/07/20/2020-07-20/index.html","30243e5206a50424550505bf1113d351"],["/2020/08/01/2020-08-01/index.html","176a2e58b6ed6556dc1bbe7954e0d004"],["/2020/08/02/2020-08-02/index.html","9b31cf4b896aba557607e4695db7fb47"],["/2020/08/03/2020-08-03/index.html","e6aef4596ffdd7f59f1ebd2aee432f5d"],["/2020/08/04/2020-08-04-1/index.html","b1c5c62ec2ac02fd3d3ae9417ffb84f8"],["/2020/08/04/2020-08-04-2/index.html","943a5991a63fdab6ff23fc67b2f77d18"],["/2020/08/05/2020-08-05/index.html","e427cb9aa1aababe90e3e7e151a2d6bb"],["/2020/08/06/2020-08-06/index.html","d54ca117efae75e0bf26b4c98f48218a"],["/2020/08/07/2020-08-07/index.html","f82bd1f1eec9b3afbc5a8f858e538052"],["/2020/08/08/2020-08-08/index.html","d130a75c5e6278796a9b62564f61399e"],["/2020/08/09/2020-08-09/index.html","794648c569293bf20aa9685ef59c3808"],["/2020/08/10/2020-08-10/index.html","740f8473f9cff3815956b286cdd8082e"],["/2020/08/11/2020-08-11/index.html","9f61ec984785cf587e95dac65e92d646"],["/2020/08/12/2020-08-12/index.html","718e350586f72195506fa106008e73b9"],["/2020/08/13/2020-08-13/index.html","1a3e4ef72b1517e2a2d44b2b3618473e"],["/2020/08/14/2020-08-14-1/index.html","27a45cae05d115777fa319226cb520a3"],["/2020/08/14/2020-08-14-2/index.html","478e56c3502a424db94d3f93988c14f8"],["/2020/08/15/2020-08-15/index.html","b5ecd8f71bc56e95a096448d31391e4d"],["/2020/08/16/2020-08-16-1/index.html","7ac1ff63c03f73290222ecd941e5d637"],["/2020/08/16/2020-08-16-2/index.html","8b323fff25a26670b72fcaa0c7d65ed6"],["/2020/08/17/2020-08-17/index.html","9e7db1e637bd310b0adf21e12a59286b"],["/2020/08/18/2020-08-18/index.html","0ef4e724001fa9426c4a963cfd82f049"],["/2020/08/19/2020-08-19-1/index.html","ce2ff8c10a587ae639839c16f24ee93f"],["/2020/08/19/2020-08-19-2/index.html","db04aeba06eca4d9a9525b26a546c0ef"],["/2020/08/20/2020-08-20/index.html","ef9ca015a714a7df9b42aa7620958e98"],["/2020/08/21/2020-08-21/index.html","12747b154fb008e748b4c84e77c83f40"],["/2020/08/22/2020-08-22/index.html","67226aa835070386fbd6cf052e4a2110"],["/2020/08/23/2020-08-23-1/index.html","4b2fe517d52b670c1680edc1d8773ea9"],["/2020/08/23/2020-08-23-2/index.html","fc5780e1edbd05608b9c4d72742eb749"],["/2020/08/24/2020-08-24-1/index.html","82826d0231235639730592a2148cfb51"],["/2020/08/24/2020-08-24-2/index.html","87eea4a5db7ddc038f63dd7da796091e"],["/2020/08/25/2020-08-25-1/index.html","98017d0e0ace10af448d935a6f2352c7"],["/2020/08/25/2020-08-25-2/index.html","d1012a3afb1faccc4342cb5d03eb8a36"],["/2020/08/26/2020-08-26/index.html","c485d6cffe337abb9feaa60c3b66f546"],["/2020/08/27/2020-08-27/index.html","5a0a8cfc717f993f26b9b2feb335a26e"],["/2020/08/28/2020-08-28/index.html","dad4c716c41f40c28908bb82f8aaf79e"],["/2020/08/29/2020-08-29/index.html","7be344a5e9c146c37b8c95e8b5eeb0f7"],["/2020/08/30/2020-08-30/index.html","ccfb6c921bc6d43b610dcfb0cc6bebba"],["/2020/08/31/2020-08-31-1/index.html","f880c1a371d9af085b05b3e9d9cb255d"],["/2020/08/31/2020-08-31-2/index.html","1af01129cd5b7be973a61a41f7215bb6"],["/2020/09/01/2020-09-01-1/index.html","af26078eb4d0b50d9ae78eec474cb22c"],["/2020/09/01/2020-09-01-2/index.html","1fbf0b96589316f7df91cfc3df65ceb1"],["/2020/09/02/2020-09-02-1/index.html","fbb0e482d9979bc53c3e9ef2ed799d0c"],["/2020/09/02/2020-09-02-2/index.html","40ca499eb04102d8f4ce59c61d7002f3"],["/2020/09/03/2020-09-03-1/index.html","8a257e3e9c7662eab7f25ab18fcbbd13"],["/2020/09/03/2020-09-03-2/index.html","5862d7c6d5c2b40d965df3091cf7f500"],["/2020/09/04/2020-09-04-1/index.html","9c3947a0cd16af2942c8c19d7cbb466d"],["/2020/09/05/2020-09-05-1/index.html","0e8e1949c5d6929df4f50fe1258afb27"],["/2020/09/06/2020-09-06-1/index.html","576abf7fe78d276cf608163986f1bc2d"],["/2020/09/07/2020-09-07/index.html","750d3593c2ffd12a141c3d2dd27a857e"],["/2020/09/08/2020-09-08-1/index.html","9f4ff7015658647d0981f5f0f98c35b8"],["/2020/09/08/2020-09-08-2/index.html","27f23ebd4dc4bd15e1aa4802b9afea13"],["/2020/09/09/2020-09-09/index.html","102a8c2c77a917a88f480abc57938d0a"],["/2020/09/10/2020-09-10/index.html","e57f08ddd8b3691b1e17bdddc66cea9c"],["/2020/09/11/2020-09-11/index.html","87582976dc986fd73a3ee4ddce464077"],["/2020/09/12/2020-09-12/index.html","491b6c33af6c91e7afc65f1683f9ee70"],["/2020/09/13/2020-09-13/index.html","e8ba2220e3c4b5b809f739f05de5ba89"],["/2020/09/14/2020-09-14/index.html","e3669a7f85ddf5c5d60664d96fb01b8f"],["/2020/09/15/2020-09-15/index.html","30e9ae784dd6d207d8fd62a783dc6170"],["/2020/09/16/2020-09-16/index.html","e5a90abdf874e5a92a206ff8f5e99f36"],["/2020/09/17/2020-09-17/index.html","b777ed1bd65385f747891d747c3c2da4"],["/2020/09/19/2020-09-19/index.html","b893e22dcdd23a5de9addbfbd12edcea"],["/2020/09/23/2020-09-23/index.html","b0f57e46614d40107c031a30d7cace5b"],["/2020/09/24/2020-09-24/index.html","fe1fe9ad3c30b1ac1ef18d85e5b17bf4"],["/2020/09/26/2020-09-26/index.html","7eea222086fa337b39717f359e9dd1b9"],["/2020/09/27/2020-09-27/index.html","0d9ca3f125f82a30c67a036949e7424f"],["/2020/09/28/2020-09-28-2/index.html","5a7c696179d56b91c1726154f28af527"],["/2020/09/28/2020-09-28/index.html","eef126ae730c6c5352700cfefc98cb5e"],["/2020/09/29/2020-09-29/index.html","e5c81c9a566a56baf9afbfc49686dce1"],["/2020/10/03/2020-10-03/index.html","a90230638106c132b84ce3052c900187"],["/2020/10/04/2020-10-04/index.html","938a8874ae51d6c8247c1d5abbb4dccb"],["/2020/10/09/2020-10-09/index.html","fa9150ee268a7a11d741abc5ed2bf08e"],["/2020/10/10/2020-10-10/index.html","b4444ab0a7b7992a41467474af5415f7"],["/2020/10/11/2020-10-11/index.html","0d23d51e72b46d7079ae209a13f01e43"],["/2020/10/12/2020-10-12/index.html","422ad646570367b6f76f2a79d5899223"],["/2020/10/13/2020-10-13/index.html","23aa81f92353709c8028e6e6107c52ad"],["/2020/10/14/2020-10-14/index.html","6691c142c9bdf3be803655d19dfd0bc0"],["/2020/10/15/2020-10-16-2/index.html","e215483679b2031c960e8b8a672ed8b2"],["/2020/10/16/2020-10-16-1/index.html","3c5cd581a340e02b70d458091b990c5f"],["/2020/10/18/2020-10-18/index.html","28ce0aa8baf3c0c7ec3d8c17de0e65f6"],["/airplayervisual/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/airplayervisual/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/airplayervisual/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/airplayervisual/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/airplayervisual/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/airplayervisual/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/airplayervisual/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/airplayervisual/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/airplayervisual/index.html","aab4dd00e55274fce05739b23bfe194f"],["/airplayervisual/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/airplayervisual/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/airplayervisual/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/airplayervisual/js/jamsetting.js","7927507e0080ddf55c6d8b5f526bd942"],["/airplayervisual/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/airplayervisual/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/airplayervisual/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/archives/2015/05/index.html","7dddaf038a4c9df0635fb18a8500ebf2"],["/archives/2015/06/index.html","20f76013f188f2507f0c53a8218e5caf"],["/archives/2015/12/index.html","fee4f35ddad0ae0bf267d850611893dc"],["/archives/2015/index.html","36e5e90bf013db258bc28f451fb2e94c"],["/archives/2016/06/index.html","694d0c5eb51d1a390a183dfcf35f540b"],["/archives/2016/12/index.html","83e575df3adabd61eb884f5f570d6774"],["/archives/2016/index.html","e2eafca91d84c568ba57cbe2609b89c7"],["/archives/2017/02/index.html","02a6c29f5d22936ef25be3cd2db7d68a"],["/archives/2017/03/index.html","271bd33930b53ada5ad0b492f3da4353"],["/archives/2017/04/index.html","6f4091019893b855a80249cdd30c8876"],["/archives/2017/05/index.html","46ed6bfc80d2a54535b5c4104fedca31"],["/archives/2017/08/index.html","25ad9ee1d4d369164efb965e11d62d6a"],["/archives/2017/09/index.html","5a294e806df98b3244b3cbd4290fe5a2"],["/archives/2017/10/index.html","9de664a1a381c28a9251b90a2a6bb01e"],["/archives/2017/11/index.html","dd6cc2d2980bb13ff8f9e9249b371f44"],["/archives/2017/12/index.html","c8880d0bb645584eb7812b4d9ba75fbc"],["/archives/2017/index.html","56c61f5c224833861788bfa0c860391c"],["/archives/2017/page/2/index.html","1ceab2579665c97be30431da3ac7bf59"],["/archives/2017/page/3/index.html","7e905ce855e90ffb9b44492b9f94e3a9"],["/archives/2018/02/index.html","2382bd2401036190d9e8c107cefaf3f6"],["/archives/2018/03/index.html","8a5f14b6adb8ed8e521bd3d052c668ab"],["/archives/2018/04/index.html","c641998e394ff905de5f27379c3cfc27"],["/archives/2018/05/index.html","cdfe62f1f3880c2694f5bfe3256ac7ab"],["/archives/2018/06/index.html","4ff06bdeeb77af6cd9e6bd80b08ed32e"],["/archives/2018/07/index.html","e496f9183be1b28b4aa5f3c8408e687b"],["/archives/2018/08/index.html","37321978d385b4e8fe1f2aac8db39d39"],["/archives/2018/index.html","8d79c9e49acaff8b96ffaf47bde449d1"],["/archives/2020/07/index.html","dbee835700f4f97b0a7bef8c9d0fc0ce"],["/archives/2020/08/index.html","2f1886b40fc37284c81af22d25baf7ef"],["/archives/2020/08/page/2/index.html","898855de86374466a24afdd1eddbb148"],["/archives/2020/08/page/3/index.html","f35878afaa26e3dbf771ed0c79f816e0"],["/archives/2020/08/page/4/index.html","4a4aaf33058718a7956f8b34b6e95e6f"],["/archives/2020/09/index.html","292eea81e29ecd55140ac96c2b366fc1"],["/archives/2020/09/page/2/index.html","b7c620a0107bbb4330c00a08472922ba"],["/archives/2020/09/page/3/index.html","fbcd586b548082a0391ae9cca61876ce"],["/archives/2020/10/index.html","c85e48dcac4b1a1ae542d1137604c41c"],["/archives/2020/10/page/2/index.html","b5cda8f58c2a9356f2326be47c700772"],["/archives/2020/index.html","283db077ce562a3b27cdbf78f645b1d3"],["/archives/2020/page/2/index.html","3c9a223f6f6ee9559e01213dc1b82a8e"],["/archives/2020/page/3/index.html","eccebed8ba95c8ead3bc2a81d4bd0592"],["/archives/2020/page/4/index.html","61554cfaa0381fa44a0958ce4a299794"],["/archives/2020/page/5/index.html","c1581ffffe65ee23319c5486685e1c2c"],["/archives/2020/page/6/index.html","22ec7393106c80a4852c12a5ec0df9f4"],["/archives/2020/page/7/index.html","1ed6f340a30855e28e8c74b10790a4fd"],["/archives/2020/page/8/index.html","b1351d6c028d729feb2f95be62f694b9"],["/archives/index.html","8984d07b01973eea2ca022d0bf469699"],["/archives/page/10/index.html","78b88e762ecfa31056c52d6c4b758304"],["/archives/page/11/index.html","fde2b4ab7bb9517cd85326370ec3a52b"],["/archives/page/12/index.html","1baf571f42aeb82157f14d2e69d7b74f"],["/archives/page/2/index.html","67315433a182af1fa52c0c00e3d78219"],["/archives/page/3/index.html","a2f7c619f8d4c7ab029b3131601ac5ee"],["/archives/page/4/index.html","5ba9628d1faedba2928632fadeff1a06"],["/archives/page/5/index.html","040f107fcd03fb17b99329f3bd22b7f8"],["/archives/page/6/index.html","61a6ff3d7c70ac389db67014e473b75c"],["/archives/page/7/index.html","78f0e996e715fe4c18cc88286a90f07e"],["/archives/page/8/index.html","92fe78e71f1b2cad3a415ed1d78042d9"],["/archives/page/9/index.html","5828983ce83ce4628ff5f6bf52105455"],["/catalogtest/index.html","717f55de65f3af19a41068dbd3d09280"],["/categories/NHK听力练习/index.html","c9c9c225a613f2ea32cf897e765da0a6"],["/categories/NHK听力练习/page/2/index.html","609edba40469d5db9117512a812f66d5"],["/categories/NHK听力练习/page/3/index.html","645ee2eedcc1baa3b4fe2975122a603c"],["/categories/NHK听力练习/page/4/index.html","11455529f302b0173711eb7d05896bb1"],["/categories/NHK听力练习/page/5/index.html","2f77b3b10fcfa5f9c0a29bf8121696bc"],["/categories/NHK听力练习/page/6/index.html","c6e5f0c41134182d3bbca6f514cb06fa"],["/categories/vue/index.html","9017dd472a21f5ce04e6f91911203ea4"],["/categories/作品集/index.html","1882beb61bafd98658ef69c80c991f98"],["/categories/作品集/page/2/index.html","fa901c78824e14ec75765b9587f45355"],["/categories/学习/index.html","1d3f0edfc23ecb4c4fdd929d9e70ae95"],["/categories/学习/page/2/index.html","7896d345a42c224727be52624dd1fabb"],["/categories/教程/index.html","52200dc2ef1d074b9ab070e9d25ef5e8"],["/categories/教程/page/2/index.html","9b08e83d73fcf5323717719dc968da67"],["/categories/游戏评测/index.html","0beda96f00f448cc797029107ab7a980"],["/categories/生活趣闻/index.html","d15ccc9fb734dda7933729663cc40bf7"],["/categories/随想/index.html","70a78f342d385873b674da1b8614cc17"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/addcss.css","d20fc732e0cc7996bd82c5170b7aaa86"],["/css/background.css","32d5acccbb94f987faf37cfdc3fd06df"],["/css/calendar.css","0090a32d2a61d42c5bfed254bfba078c"],["/css/clock - 副本.css","65602c2385c7eab42ee3804cd6ee0a5a"],["/css/clock.css","9db53e3bffb704c740aa83bddaf8b999"],["/css/cursor.css","c1a23e168c5b794ff367eb0ae77eb26b"],["/css/danmu.css","2a5b914a9592bcd353425c6d5fa7af8e"],["/css/index.css","a830cf7dafed0e1e03142b35ae00f2a6"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/loadingline.css","bc1ee020a6a11fea17b915b97e6978bf"],["/css/shuo.css","e34cec2d23b9764928df02c60388358f"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/html/calendar.html","bddcec1edba7f4c49fe5cd75f8cdf5b2"],["/html/shiyan.html","2d531e0d3ab03c7fa620a9025fc2a368"],["/html/shiyan2.html","0cf6fc11b0a3be97109f6041cd80399b"],["/icon.png","8ec68de45d18642ba9baf2447e62f476"],["/images/AMJ1.png","d27a6725d1aaaf5324248da4312ab6c2"],["/images/AMJ2.png","00e22eba5901e5bd674e42228cd5bd26"],["/images/AMJ3.png","c8c9ea6348dfcad3a641899d5b587431"],["/images/FOTO1.jpg","4b6f100861908e2c7044cffbdb4a0c1a"],["/images/MVVM.png","ea5a002ee2f85c71a0db51d5adb5de19"],["/images/UT.jpg","367f4e432f9db55a92b2a290c4b0a476"],["/images/UX.png","a183974e958d41d1b6acec70bb7ea00a"],["/images/WindowsTerminal.png","8ac29cb56b8a1768cf7de071e9f1ae6f"],["/images/air-w.png","c1cc32f9d3e17551ca11a7d18a0b533a"],["/images/anzhuang.jpg","912b2489957f8344406edc5e5cebe5fa"],["/images/api-setting.png","2c0bb074390779721cba009e96c5417c"],["/images/apikey.png","1f31121b190eb1f990bcc3e27524bc03"],["/images/b0_img.png","43fcaa3f8b394ca5be957f4b860800db"],["/images/backpic1.jpg","86a6fa88167feb338fbf1a4e9057114b"],["/images/c0_img.png","34397085b4d3349034f9b167469ac626"],["/images/c10_img.png","7938c5b0dd789db4f262e5a618943a9b"],["/images/c1_img.png","95211a0ebf07befde1b11477c3a8185b"],["/images/c2_img.png","456ba51725d669fc4d005787753a6b08"],["/images/c3_img.png","a0aa7dcdd2ed5bccec52c16942036a3f"],["/images/c4_img.png","0869cebb60d00a78936b7498823a39de"],["/images/c5_img.png","533774e840ccb3ef13b46201a54be05d"],["/images/c6_img.png","db9eb681dea0b7911f0b2ba918d86c26"],["/images/c7_img.png","5b9c9e0331aca2a9d47a2730512f34f5"],["/images/c8_img.png","be9107995f185e3bbf7186c4dff69f42"],["/images/c9_img.png","642a2e762b74a28d2426af14f2b864c1"],["/images/calendar.png","86319b08b93be7c8bc47cdba7a169563"],["/images/clock2.0.png","0a0f122c7a25262fc02ee99df0ef21eb"],["/images/clock3.0.png","8e04375c183c637b65fb50ed40f46466"],["/images/example.png","aaac9983e5d59f919bf282dcff2edb3c"],["/images/foto17.png","28db4c6608ad1ee6b34238cafab25e5e"],["/images/foto2.jpg","be95b922512d004a61f83c97af3e2602"],["/images/foto2.png","0dc07d4e1b00526a273a89dc8b81548d"],["/images/foto3.jpg","551c0616c92c4ee7cc17dd458b3c46e9"],["/images/foto4.jpg","9d1d9fea759a41afc0061866e400339a"],["/images/foto5.jpg","984f618b15372f37d54f507e6f379f10"],["/images/foto9.jpg","b683fc0b998e80ff8f5a3e45e889807c"],["/images/girlpic.png","ff1e8427ed555af639e6d849f8f648f1"],["/images/girlpic1.png","698e5570e821c3cae643cc9777c2292e"],["/images/girlpic4.png","551882e4b9b6afb79000fd34c0dbf5e5"],["/images/headimage.png","332502f36a0297b30cb7969fe6de8451"],["/images/hexo.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/hexoWT.png","c027cc9f5665c7d7ba657e7a4bb40017"],["/images/his-json.png","7d8a71e38ab684107446e5c72c31854e"],["/images/history.gif","0459a3dcf2317253de0b34482880c63c"],["/images/homework1.png","e8d2f64d0785519ea7779016208a2900"],["/images/idea.jpg","5eb08bf6c965588f03c8860f201cac45"],["/images/key1.png","f2a370e02ad6c5a101db20b47a9a0008"],["/images/key2.png","21dc40bbe0377cd9fe85a9cb431c18f0"],["/images/life-cycle.png","02f39ea5c041d45938fda4b50f234cb7"],["/images/life.jpg","74d2d9c5f48ec59e3badeec690941812"],["/images/listen.jpg","9d4f73cd5634f43deaed4f9aca03f9a3"],["/images/loading.gif","ffa0804a5d99e2d5b39e05cda6d6b28b"],["/images/magnet.png","4899a924f3de0d19dbe0415128c07d65"],["/images/magnet1.png","8d010eb86ca943e036adaa7de57aee7d"],["/images/magnet2.0.png","54fe576f174d2b6917fef89f40ac5975"],["/images/magnet2.png","293cb414a8ab93b43bde3bebf9cf0cfc"],["/images/magnet3.png","1923148630e2e094ff80bf35aa604c10"],["/images/magnet4.png","9bb4f963ac1c09f02d62525f513f492c"],["/images/meilu/1.jpg","cd67abcc3f543b5c66adc4f9d9c5c628"],["/images/meilu/10.jpg","ac9fb2711e477b5db1c3acb57e899045"],["/images/meilu/11.jpg","364caad6dfc356a3dc630fa067e48e88"],["/images/meilu/12.jpg","274767e5708f79934e5bdbf73eda8f0d"],["/images/meilu/13.jpg","dcab12b84454770b208913db63e825ac"],["/images/meilu/14.jpg","037cdd048284e621f27e17a2c59e8ea7"],["/images/meilu/2.jpg","f6cdb65ae3fad4523b32f5ee38696b60"],["/images/meilu/3.jpg","9e5df3612c2d93bf57313186c954aea5"],["/images/meilu/4.jpg","69ef2d6f4bcd79cf4b4e672b60c6751e"],["/images/meilu/5.jpg","ce81ca16def7613b7ebb368fb554f14f"],["/images/meilu/6.jpg","cafd5b62305f806754a75cc3af8c3b77"],["/images/meilu/7.jpg","b8ae865d386e1e713a6034da6b090c10"],["/images/meilu/8.jpg","afad7a7bf1066c817a8d2e7566bc780d"],["/images/meilu/9.jpg","72f9649f56b564eacf23ce3dacb88029"],["/images/metroui.jpg","5503bfffd450d9ab572b67ea00941571"],["/images/metroui/1.png","79a03b408c19c74eeaa8ff6e17a03f9d"],["/images/metroui/10.png","8309fed71a15c78f2dfa3af1ff75a5f3"],["/images/metroui/11.png","aaf1a007cbae12f93cc2688bace18d28"],["/images/metroui/12.png","0758ea282c3828c47e5c64520ff85783"],["/images/metroui/13.png","12ca7b511927cd4b26e97f3b20908a32"],["/images/metroui/14.png","f44ba7680f7b36df437e2ae2588d0565"],["/images/metroui/15.png","e8927c78b125b805af7aa86fee815ab6"],["/images/metroui/2.png","e604d3c662b996f06f22753ba9ab379f"],["/images/metroui/3.png","664e3b7490f2f95d5547b8ba79a65456"],["/images/metroui/4.png","c0f255344cafc303a1d9c7404da37149"],["/images/metroui/5.png","da2074cdb1298aca826abc1a5c441300"],["/images/metroui/6.png","efef2f087127614b4e03bcbe9a347018"],["/images/metroui/7.png","a4d34b1a2dbe3a58d3a92276880be039"],["/images/metroui/8.png","1d34a626bbaa898a60d4501936bcf962"],["/images/metroui/9.png","0663697c1667b377fe2623bd65e00b31"],["/images/metrouilogo.png","aea81b42d1c2c96440f74cf56ad82e2f"],["/images/nhkimage/2020.08.01.png","af4c55b2ae1d5ab2f56c75a87fcdfdb3"],["/images/nhkimage/2020.08.02.png","c355d41b90f5c65823f96c5f6868ce53"],["/images/nhkimage/2020.08.03.png","fddcedb40d7f28b2ccb90814351ad5c8"],["/images/nhkimage/2020.08.04.png","8b4518ec5a8513f442980ed7167136b1"],["/images/nhkimage/2020.08.05.png","590abfb19334b0c3cee5a005674f2253"],["/images/nhkimage/2020.08.06.png","d469e21100c42435e88f2bdf07f93da1"],["/images/nhkimage/2020.08.07.png","3ca9e2c8b8a09a38423d73cd36e8de9d"],["/images/nhkimage/2020.08.08.png","4420c2d899fe4eb90c48bae0da8418a2"],["/images/nhkimage/2020.08.09.png","df14be338f9c920818dd1daa6aa955ee"],["/images/nhkimage/2020.08.10.png","c4e2ed023cd3dbfd4986add35ca9357c"],["/images/nhkimage/2020.08.11.png","cf562339e57f673d394f3e6cdd1f60cb"],["/images/nhkimage/2020.08.12.png","81dfa179fea3052ddcf73912ea368f67"],["/images/nhkimage/2020.08.13.png","8cf26c2642e7a27cbd86fcbda8bae8d9"],["/images/nhkimage/2020.08.14.png","d88eeb678b3ed3651d597e61957e264a"],["/images/nhkimage/2020.08.15.png","b9879f193867edcffeefce62c9dc7153"],["/images/nhkimage/2020.08.16.png","46cb914aa1d556561897767ec9ff66a0"],["/images/nhkimage/2020.08.17.png","ea1af9645b5cc9cbaafe70a91dd15cca"],["/images/nhkimage/2020.08.18.png","e87e4de39a6f06cf4283a63af92dd8de"],["/images/nhkimage/2020.08.19.png","8001a951513b542a98ce1151be5bd87b"],["/images/nhkimage/2020.08.20.png","4bc8fafa3ecce30d340b1350715d78e3"],["/images/nhkimage/2020.08.21.png","07ad1337e127922abff27da6c672549b"],["/images/nhkimage/2020.08.22.png","b2b5d53ba46015f64048f9d803b12179"],["/images/nhkimage/2020.08.23.png","225af8c0cabe5218ec634d1b8815fd95"],["/images/nhkimage/2020.08.24.png","1d54a484a6e2395aabe9be005cd90361"],["/images/nhkimage/2020.08.25.png","8008ba169cfce0ef2041329cd29b6b77"],["/images/nhkimage/2020.08.26.png","72a2b8094003a54c97a34ea97cf21bc3"],["/images/nhkimage/2020.08.27.png","893407e604804d215c8fef8bcd5f2684"],["/images/nhkimage/2020.08.28.png","b542280b7341759890a99cbd44d822c5"],["/images/nhkimage/2020.08.29.png","620e2e7d4772e39615fd1a88cdf49717"],["/images/nhkimage/2020.08.30.png","f645d7ba2dcb506f9ec6fb9244425ad7"],["/images/nhkimage/2020.09.03.png","c5262f3aa87190e0273383ea1e445681"],["/images/nhkimage/2020.09.04.png","c07149c32aa41c03bc7dac82a713f6b2"],["/images/nhkimage/2020.09.05.png","4e43556e1cb3b7f4d75f0f6127616a54"],["/images/nhkimage/2020.09.06.png","1021d2ae04a7f109404f857a2a7629cf"],["/images/nhkimage/2020.09.07.png","db9827e9f0a4cf1401b559b4644a0204"],["/images/nhkimage/2020.09.08.png","efe1030b73dc1c01f169c3122a194426"],["/images/nhkimage/2020.09.09.png","f6ba3a1c6cdeff88404ebe2a646f2eb5"],["/images/nhkimage/2020.09.10.png","3471b05d02113517359a9e2167befcfa"],["/images/nhkimage/2020.09.11.png","921a541a8bffb1aa436df2eb6db7c99f"],["/images/nhkimage/2020.09.12.png","a51f8ebaddba69bb80f9259a30f17e65"],["/images/nhkimage/2020.09.13.png","0399889200493cd2154ffc407e2bc400"],["/images/nhkimage/2020.09.14.png","eaaf3da69a39ed316b7fc8c4d409bb0f"],["/images/nhkimage/2020.09.15.png","5774959ea4061c9298ea174f0862cc3a"],["/images/nhkimage/2020.09.16.png","0c5a00f74020740fda589c02e4b3f917"],["/images/nhkimage/2020.09.17.png","b5aef734e3a7db4862ca3fe4e6769dc2"],["/images/nhkimage/2020.09.24.png","5982a7b3843f4ae43b2b4bc4b0c577d6"],["/images/nhkimage/2020.09.26.jpg","c6415af781fbdd36fdb034f74646129b"],["/images/nhkimage/2020.09.27.png","27aa6f6a8d5534ccd99cff261dcd9eb6"],["/images/nhkimage/2020.09.28.png","0f4318d1ff17a33de364432a1c44b5ad"],["/images/nhkimage/2020.10.09.png","6408d9f7e66fdeba8b9207939a08cf8d"],["/images/notop.png","d25c272e5ce312a880e04ce8a0b27683"],["/images/pasted-0.png","552608d8f6e39369aa30c6e332a32826"],["/images/pasted-1.png","baafdacee93c99e99418aaedbf524fda"],["/images/pasted-10.jpg","395cff6f64ab5df19baa3572ac98e541"],["/images/pasted-11.jpg","56e5df07c96634638abf7995b25c81ab"],["/images/pasted-12.jpg","61b3f803b85ce3640d7a9ba7efb9da6b"],["/images/pasted-2.png","2f410e53c811f92a6135f48857776f5e"],["/images/pasted-3.jpg","bb5717e691e87355e7d63a5f3a87ae62"],["/images/pasted-4.jpg","10041d0e3567b24b81222ec5075d6492"],["/images/pasted-5.jpg","ac5047a4b48c6cdaee86fa1863e33904"],["/images/pasted-6.jpg","1556ae8d3ad5713d60237ee4d10e81f0"],["/images/pasted-7.jpg","913fde1686587646ddc663bd810cc81d"],["/images/pasted-8.jpg","fc83268081fb4b6b6ecb1ffa1ec5af7f"],["/images/pasted-9.jpg","25e0fa3496591501f5c29d0b802b77d2"],["/images/pet.png","2b8c121909497e57057478856fe48a94"],["/images/pet2.png","dfb1d6a17b527ccc0c600e6ad31f55e5"],["/images/ps1.png","0917ba91f21b6944dc08d35c41a326d2"],["/images/psb.jpg","6a27c58337875c776af0a7667598b401"],["/images/quse.png","7cd1ec12b804305430cb4cdc09c7a893"],["/images/rain.jpg","9c26acc44c692b6a63e134be07b07c18"],["/images/shezhi.png","281bf545f6a4024e2d0b7120bc398a21"],["/images/soul.jpg","d97b4099c0728ff6123d006fa62db86e"],["/images/study.jpg","a9b1cf95ee6bd9f3913e8ec6a6a6f44f"],["/images/tianqizhizi.jpg","dd48d78b4eeaaa52578352f9ef570b14"],["/images/vue.png","cf23526f451784ff137f161b8fe18d5a"],["/images/vue1.jpg","8cbf18302c6fa72e2a40d0cca0832213"],["/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/images/work.png","e521cf5b834292fde1c50e0a0f5802f9"],["/images/xiaoguoyanshi.png","994a3b710d36df0a4630cd9a768c7f7b"],["/images/xiaoguozhanshi-m.png","1fefca18214fc4889d1bb76b81887c9d"],["/images/yao1.jpg","9dfddaf8c121fc8db788a87d133d6376"],["/images/zfe.one.png","b41f689341882058ffb28c4cee499bde"],["/images/幻想终结之日.png","0025c4d3973bdfedb80db3f78c59fa47"],["/images/时空战纪——游戏建议及意见①.jpg","1337457f14a8dffee66d94f8915b54ff"],["/images/简历.png","d70507ee4615c9e324578c0d777e6855"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favicon2.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","9b5b0ea85020b438a69c6b0bb99dec49"],["/js/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/APlayer.min.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/airvisual.js","71cf86bfd452ca01d92438d8266416ee"],["/js/airvisualapi.js","6931bebe1696688d109963187fc2eace"],["/js/artitalkkey.js","e735b361754e1b51300ddca9fd56b4ca"],["/js/background.js","94c8410b174f58594cf81ec99054968b"],["/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/js/calendar.js","a58e02711cc6dec4dc04257e555b8923"],["/js/catalogMagnet.js","2a4c65f71f95e19bd7e0deb9daa69a8c"],["/js/clock - 副本.js","405186e7a9d73221d2d50c0dea2852d0"],["/js/clock.js","2fdceb94cc57b551cd245b0001927b66"],["/js/color.js","3730bb4f7b185e6f5130ac28bace968b"],["/js/danmu.js","6b6ae6b7f1b42dd4857541f43b2bb733"],["/js/echarts.js","dc1227b1eba1ba47fd185a387d0a7d37"],["/js/gitcalendar.js","fadfa8a42272cd322118653dca512a7a"],["/js/history.js","20459f7db325e597e64903f4c0d19306"],["/js/historyroll.js","a3e9ac376106816c50a61f9f4306d671"],["/js/jam.js","462c07d3b2e0f20394d994bbcfae37cb"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","455fface5a0a3ff90766ca254affe502"],["/js/rain.js","f656dc28e4ab5c3f8414d35f683278c1"],["/js/rainremove.js","ceacf82842b101f7e54a2aaf5f4bb9cb"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/link/index.html","c848325683aeac0569197a9b3943c3a5"],["/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","148f35bde5ec0f2501035bdd1266f4cc"],["/page/10/index.html","a41ccbbd5de8a2aaf884cef372a592d2"],["/page/11/index.html","ccb84e88b7933396a7a21e6606f13231"],["/page/12/index.html","e7a6a194d6529658b3478c404a3ef656"],["/page/2/index.html","e5602fc35fdf4222b4619eb866e07f69"],["/page/3/index.html","84e1f1db7d03adf656e279fa398aa3ff"],["/page/4/index.html","478d81bd04337c2d55682c680c101e29"],["/page/5/index.html","b7168db9501c6627c52a747253c25cb5"],["/page/6/index.html","ed9b702da7c8fd3191fbde9e9cd385f0"],["/page/7/index.html","465209c1b8f8a4cf4344f60dabc622b4"],["/page/8/index.html","b28317cbb4ca4f0c56a80eb7920a4e3f"],["/page/9/index.html","8ce169a01f39712c37c4775498ca9ac0"],["/research/index.html","d9bf33e77d45b435b011de4204d2ddb3"],["/sw-register.js","c643721727648a2f4dbec167c0181543"],["/tags/Butterfly主题/index.html","1d3d3638bbeffe8394d9851dbe1b1bea"],["/tags/DIY/index.html","d691f1f6756a4ae45bfd29e05b4a3b31"],["/tags/DIY/page/2/index.html","7477bae5176c6c207682b00207b70963"],["/tags/ICT/index.html","5ecff944f902cb0285ccabc662140ee7"],["/tags/NHK听力练习/index.html","611038734c3da6ffa01c527405454e09"],["/tags/NHK听力练习/page/2/index.html","e364d431e072c4832ba11c2607ef7bd3"],["/tags/NHK听力练习/page/3/index.html","7b00b187cf9e7e052576e5613ef8517b"],["/tags/NHK听力练习/page/4/index.html","a8f2a9643493f6fab5644d9be20e4b9e"],["/tags/NHK听力练习/page/5/index.html","9ae7cedb42430f408dcf1e2f1c7a6c05"],["/tags/NHK听力练习/page/6/index.html","01e08c23c3e3fe82528cb1a841432f3d"],["/tags/metro-ui/index.html","042fce7fbd2ba9e2acc70e082949f319"],["/tags/vuejs/index.html","4fc6ccfc9e138f3a15dc546d9b33ddad"],["/tags/お盆/index.html","db74bff15b0def4eb93a67abf2d9629e"],["/tags/世論調査/index.html","2b9ba418bdaaa1508c87ae4855249e2d"],["/tags/作品集/index.html","1154c662692227821ada5aa592666096"],["/tags/作品集/page/2/index.html","54752e46430a96725bcce6082b2a7202"],["/tags/农业/index.html","525f3f726a5f0c5a292f508c847196fa"],["/tags/历史/index.html","99c2ca90dcf8d64c618d23f7fd77b66a"],["/tags/営業時間/index.html","2ab79f631fb264c84d0d2220ccca24af"],["/tags/国外政事/index.html","1b721c65b050c356d5c7a05812898fa5"],["/tags/地震/index.html","4f6634caf058708a2bf2ae246212d611"],["/tags/外国政事/index.html","c303068620f457e47fca769a6273dfe8"],["/tags/天气/index.html","5547d1cb726357861f42c03ac02a3656"],["/tags/天气/page/2/index.html","90d4066a29fe4e829dca12619a794773"],["/tags/奥运会/index.html","b887e19c24cfbe87c3e69d61690d2125"],["/tags/学习/index.html","ddc56a65a6cd19c654a9f77f93e3efd0"],["/tags/学习/page/2/index.html","733a86486a69da4ccb5eaf7139843d1c"],["/tags/学习/page/3/index.html","6682b4c527e800afe7e0a29b64b1396d"],["/tags/就业/index.html","99f69c59606dfe68b2646320d11a519d"],["/tags/庐山/index.html","ea7eb9d45e55246b5d39b56adace0c85"],["/tags/座礁/index.html","bc9f653cacab8d632fa6e91733993383"],["/tags/政府/index.html","bc220a9d4deb9e5eb9eb1eb55d66b2e8"],["/tags/政治/index.html","a8bf4f91c7bada7fdaf16dff73f08e88"],["/tags/教程/index.html","09eab2d3dc22aa7cf0e16a22a28ba7b4"],["/tags/教程/page/2/index.html","9bac4fbbb9a3ca1284264919544275a1"],["/tags/日本教育/index.html","207dee14c2c9b2833ec6fb8f8d264b9d"],["/tags/民生/index.html","74c02201230683f5046197055f388e7d"],["/tags/民生/page/2/index.html","d241597192d441322a7f667190544db1"],["/tags/游戏评测/index.html","7e96b3b25e92a35a277435fdc65ec009"],["/tags/游记/index.html","234d3da9a4b08ad22702cb6829ff3b77"],["/tags/生活趣闻/index.html","a48b73ffa1c580d62933c2eddac21516"],["/tags/科技/index.html","d680da74d5ba8495d5c2382cfd1857d6"],["/tags/经济/index.html","f8bad363ba7262794f0448461f6af1ce"],["/tags/经济/page/2/index.html","417d05bfcc4b5081f67fe942c99f3be9"],["/tags/网络教学/index.html","1fc936b9f59a4eec0b432ff433d15bb2"],["/tags/舆论/index.html","bf3a8cf207e93835ab823360b098c7f2"],["/tags/虚拟现实/index.html","85ef4a79c601619312fd63c56ef21cb0"],["/tags/随想/index.html","a3ece37c8e7cc3353c153672f5abb5d1"],["/tags/障害者/index.html","cd812e99e690876d27dffe4726160ce6"]];
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
