/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/05/20/2015-05-20/index.html","2a9b0ec0202a1c77cc0112db43ebf487"],["/2015/06/16/2015-06-16/index.html","002edb70a7f762b34519bbca7c285de6"],["/2015/12/12/2015-12-12/index.html","d1c7dcaa5123f864ba5921670cd17d3d"],["/2016/06/08/2016-06-08/index.html","1ba528840ffb6f62a2b9f1bb1136adf2"],["/2016/12/18/2016-12-18/index.html","6439f7a3dd9cd3360c5405f676586a70"],["/2017/02/17/2017-02-17/index.html","b9f2449ac4cbb3ce69fadfea2c2e092a"],["/2017/03/17/2017-03-17/index.html","3fe7b30e1b842f335473ae4e37212a6f"],["/2017/04/06/2017-04-06/index.html","02b3191d0b440381fe8a5cd666dc556c"],["/2017/05/17/2017-05-17/index.html","62bdc9df9f433fcff7fae6ef2d623b09"],["/2017/08/15/2017-08-15/index.html","276bd60dab6872291e0ef3bdbc8e5431"],["/2017/09/16/2017-09-16-1/index.html","ba97e8033fb201329b97cd3bff0cd3e2"],["/2017/09/16/2017-09-16/index.html","73a387607b614568201f04434bbe4eb1"],["/2017/09/21/2017-09-21/index.html","3657c431a7d9f17652f07b563b84c464"],["/2017/09/23/2017-09-23/index.html","256546379b90c8dad01b13ad5d55507a"],["/2017/09/26/2017-09-26/index.html","c20cd3a0bbb2680abbb007f82062aec5"],["/2017/09/27/2017-09-27/index.html","06f367a5e49d61570edb521cd98ff1a5"],["/2017/10/04/2017-10-04/index.html","3777c2889a00d44e54edadb2247d9a94"],["/2017/10/08/2017-10-08/index.html","93f1049e442f23bb0d88cc3c20c45ae4"],["/2017/10/09/2017-10-09/index.html","d696452dbd7f4f52818d5abbbd88cc28"],["/2017/10/15/2017-10-15/index.html","5a9123cbef984cd70daec0447e55690d"],["/2017/10/19/2017-10-19/index.html","fed3546138fbe8441db07300cbf1c55c"],["/2017/10/23/2017-10-23-2/index.html","58a214edbdf98d1119a72dc0762981bc"],["/2017/10/23/2017-10-23/index.html","a82c77b56d1aa568954a0bd4528cf81a"],["/2017/11/08/2017-11-08/index.html","dca3b546e1a8ca33229ed09c901a4371"],["/2017/11/12/2017-11-12/index.html","561c20ee7874c1b688109157db3dab45"],["/2017/11/15/2017-11-15/index.html","894107d703dcb9e39c45b6a2c08db759"],["/2017/11/27/2017-11-27/index.html","e0fb000b13eeb1c9a97da9360f091a76"],["/2017/12/06/2017-12-06/index.html","c72e6fa2201bed551c026ab5693cc5bf"],["/2018/02/12/2018-02-12/index.html","db3895520a7d261347958734cb0d796c"],["/2018/03/26/2018-03-26/index.html","2349a52cfa88d8ee89cb6ebdfc50915c"],["/2018/04/02/2018-04-02/index.html","2227d3cebf620ca1dbdcd5f042c99565"],["/2018/04/24/2018-04-24/index.html","dc6b5560a38ba685ed0efe8e5484d9e9"],["/2018/05/18/2018-05-18/index.html","c41d587bf6c240b1a7da5d3f7aa15782"],["/2018/05/23/2018-05-23/index.html","3aa1c2e634825af2f0f1898701c63e0b"],["/2018/06/08/2018-06-08/index.html","af7b37df00d924d7cb468cca04cc6f2e"],["/2018/07/01/2018-07-01/index.html","a104d0193b80fd59cf19cf63a52e1efa"],["/2018/08/30/2018-08-30/index.html","7007b53bd6ca830932c7bac18cc01cdc"],["/2020/07/20/2020-07-20/index.html","a1fb06475abfef40e31c879fe14aa476"],["/2020/08/01/2020-08-01/index.html","43da5c508823029be8c51f94e38b7323"],["/2020/08/02/2020-08-02/index.html","96ca7dcd7024cbc28f264a3f99f35836"],["/2020/08/03/2020-08-03/index.html","496750456c60b1b5dbdf00e8aa23b2df"],["/2020/08/04/2020-08-04-1/index.html","52acf78e62e0c428a5ff07fd0dbecbe9"],["/2020/08/04/2020-08-04-2/index.html","9b4bbb80873aa7646fada112a2be029a"],["/2020/08/05/2020-08-05/index.html","0e0b802062d825a400d38cb7fd90df94"],["/2020/08/06/2020-08-06/index.html","a13298c39f81c628f6fec371e5ee03c9"],["/2020/08/07/2020-08-07/index.html","3a0523f50bc1c26d3178ac1ba3ef38f8"],["/2020/08/08/2020-08-08/index.html","7f2f85509cae5dfbdc90f667cae6c2c0"],["/2020/08/09/2020-08-09/index.html","97985118c73da813222d2dfe35631910"],["/2020/08/10/2020-08-10/index.html","6d96ee1ab774672ca046345ab23519c0"],["/2020/08/11/2020-08-11/index.html","d28eb54e483d1ac6c1ed85b4f0b9ebc3"],["/2020/08/12/2020-08-12/index.html","167933fa520707dc1037b4dfc4d69ae6"],["/2020/08/13/2020-08-13/index.html","d99a7bd516a8b8f3261f79daca885a98"],["/2020/08/14/2020-08-14-1/index.html","38ac8b9dab2ae298d9907c3dcd94bcff"],["/2020/08/14/2020-08-14-2/index.html","95337289dd4dccadb501318ad7c57bc3"],["/2020/08/15/2020-08-15/index.html","38a3bf8857ab2df37be3c7c5e13edd2e"],["/2020/08/16/2020-08-16-1/index.html","405d5de9fcb258ecbe6d2afcb2dbacac"],["/2020/08/16/2020-08-16-2/index.html","3ca8266b95b99e9a6eba2f969a1bedc7"],["/2020/08/17/2020-08-17/index.html","6e9d7af97d99b4ecaa2f89138660fc95"],["/2020/08/18/2020-08-18/index.html","c801f03d400e5c3acb1d4e10d8816a56"],["/2020/08/19/2020-08-19-1/index.html","97a799912b59f3a98a76a507e8b4ff9a"],["/2020/08/19/2020-08-19-2/index.html","58e22acd84f408fdb4944469ad55d585"],["/2020/08/20/2020-08-20/index.html","0136491bc423d884e1925ef39965bdfd"],["/2020/08/21/2020-08-21/index.html","f78ca44c16339618696b82bb58da54d0"],["/2020/08/22/2020-08-22/index.html","c6dc3e078a6c211f39e008eea7687a54"],["/2020/08/23/2020-08-23-1/index.html","9d6920773c6fbc678b2a32bb209b874d"],["/2020/08/23/2020-08-23-2/index.html","89690f673f494a6f915865232b5f609e"],["/2020/08/24/2020-08-24-1/index.html","56362c8f5f3446d44ec188ba691160bc"],["/2020/08/24/2020-08-24-2/index.html","a6bf7cc682b96ce764cd1f30d0f76eb0"],["/2020/08/25/2020-08-25-1/index.html","7ada0a4f3ff8f12d64953013d18e24e0"],["/2020/08/25/2020-08-25-2/index.html","8f6e6c6bb9130baa14fe35c2b5e63fc8"],["/2020/08/26/2020-08-26/index.html","eba3fb089732ecd6baae5695d9eb000e"],["/2020/08/27/2020-08-27/index.html","05f24308b682083334c512abb7cf42b8"],["/2020/08/28/2020-08-28/index.html","282e01a07b4096239efcbe8cbb89a385"],["/2020/08/29/2020-08-29/index.html","99e47aa5d6cc613905a8823ec9291f0b"],["/2020/08/30/2020-08-30/index.html","0b9e93243932a34413faa3b560c73220"],["/2020/08/31/2020-08-31-1/index.html","7a8e70529059762dfd5033f586d9865f"],["/2020/08/31/2020-08-31-2/index.html","79db280b7bb626aac6f5cd0dc50d5e96"],["/2020/09/01/2020-09-01-1/index.html","79845fa94bc8f6e45f855b383313cafd"],["/2020/09/01/2020-09-01-2/index.html","3ead51f4bdee8d5e522ef08ff56b9ea9"],["/2020/09/02/2020-09-02-1/index.html","3216aa7d2b99f4cdef9c3be7c9111f57"],["/2020/09/02/2020-09-02-2/index.html","7ea711930a60a68a56aebfa6fc76ff7d"],["/2020/09/03/2020-09-03-1/index.html","78b75848efd6c3d6452d4e8cfcd9e342"],["/2020/09/03/2020-09-03-2/index.html","0badf4efb55957a99b10c2bdb3161c2c"],["/2020/09/04/2020-09-04-1/index.html","11b38d1d71267f9538ee710e882b7a4b"],["/2020/09/05/2020-09-05-1/index.html","dca6b4d533d3bc46381c29cfa3dd1adb"],["/2020/09/06/2020-09-06-1/index.html","d73a6b5edaaf65f5dab50c7fb48485c8"],["/2020/09/07/2020-09-07/index.html","46d3c89a9cc846c7b5a4be041999319f"],["/2020/09/08/2020-09-08-1/index.html","69417e55ee6ff4c8a7a0391f5a549a4f"],["/2020/09/08/2020-09-08-2/index.html","591c6291ca2e780796816cb85d2c13ab"],["/2020/09/09/2020-09-09/index.html","6209733bf4ccb8d4c3ec7e0dfde01b99"],["/2020/09/10/2020-09-10/index.html","9c2c6e9ec7eae4f422e820fcbe26b19c"],["/2020/09/11/2020-09-11/index.html","c746cd05fe6436304c431f373b97571a"],["/2020/09/12/2020-09-12/index.html","7ca6a4dc1e63519265a027d802f5881c"],["/2020/09/13/2020-09-13/index.html","b6bfec6da7cd44524bf082fed0d10d19"],["/2020/09/14/2020-09-14/index.html","fb102a7b211c69a5a8f313c97049b87f"],["/2020/09/15/2020-09-15/index.html","6e356ddb3f53f7ad8c07a89cd7377f6e"],["/2020/09/16/2020-09-16/index.html","e3ebddaba8ba0e9aaf45a13f1b46ec95"],["/2020/09/17/2020-09-17/index.html","f75564939e04aef525a6ad118b1ef1b4"],["/2020/09/19/2020-09-19/index.html","b219b0acbd3858543577fe6f8b81612d"],["/2020/09/23/2020-09-23/index.html","bdcfee600ae67601bd996f3e80febc7c"],["/2020/09/24/2020-09-24/index.html","51e87b93e55747d08239534919d0becd"],["/2020/09/26/2020-09-26/index.html","0ac1a4620a8147ebe2aaf8c7e8570eb8"],["/2020/09/27/2020-09-27/index.html","eacf4d69c794e505b4a1376ee276bc4d"],["/2020/09/28/2020-09-28-2/index.html","a3c7c126d36f55b771779134e90e49b2"],["/2020/09/28/2020-09-28/index.html","abe3ee983bb9004638be5fc454b4b956"],["/2020/09/29/2020-09-29/index.html","d51f6a14d21570a5faf80a5c90c90796"],["/2020/10/03/2020-10-03/index.html","b754a264ddf9d80b11a58bb797f46bab"],["/2020/10/04/2020-10-04/index.html","41fedd580694300445ec1170effc7b80"],["/2020/10/09/2020-10-09/index.html","3e753852b75e0d60934defb61d2394ba"],["/2020/10/10/2020-10-10/index.html","d063ac137fe1df3bd891bfb696cb3bb3"],["/2020/10/11/2020-10-11/index.html","5bd51b711770d98e2e515b853acec72d"],["/2020/10/12/2020-10-12/index.html","3dabfb3c4ca770a30ff35d1d22347666"],["/2020/10/13/2020-10-13/index.html","e071590cf6e99578c6beaf7a3cf376b8"],["/2020/10/14/2020-10-14/index.html","c1cd80ac8feba1514b332360c3485803"],["/2020/10/15/2020-10-16-2/index.html","54801aea41eb6c8a7d4bcc3c8e5b23f3"],["/2020/10/16/2020-10-16-1/index.html","8bd511ab9a9889f48cdccf77a644a32b"],["/2020/10/18/2020-10-18/index.html","8d0cc8d1db450b558f96501bd912b545"],["/2020/10/20/2020-10-20/index.html","aea50b4a478a95401fa23988da8cb8da"],["/2020/10/20/2020-10-21/index.html","0e7c35550d25f08393c0e77c9a1eec6c"],["/2020/10/28/2020-10-31/index.html","e6a30692faa905a0b5a36eca6b8d8098"],["/2020/10/30/2020-10-26/index.html","87465063a1493571ee552a142bd7c741"],["/2020/11/05/2020-11-05/index.html","e42903c40b344f0d030a8da8b5e57f3c"],["/airplayervisual/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/airplayervisual/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/airplayervisual/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/airplayervisual/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/airplayervisual/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/airplayervisual/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/airplayervisual/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/airplayervisual/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/airplayervisual/index.html","b8d2906a997071b45521bb1de59cbcc2"],["/airplayervisual/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/airplayervisual/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/airplayervisual/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/airplayervisual/js/jamsetting.js","7927507e0080ddf55c6d8b5f526bd942"],["/airplayervisual/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/airplayervisual/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/airplayervisual/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/archives/2015/05/index.html","80614cf103c348cf915f8c34557f018d"],["/archives/2015/06/index.html","4051ddb791b0a67a6b3a8d85621d271c"],["/archives/2015/12/index.html","f681975004691f5d9a321751025e3e71"],["/archives/2015/index.html","81e7916af2069f3820765d1819b967e0"],["/archives/2016/06/index.html","a46c71a980fae0b397b0d9440bd7514c"],["/archives/2016/12/index.html","91e7d3582aeb9742e2eabc726354e09d"],["/archives/2016/index.html","3befe2ab1936275934c4f4b67210d4f7"],["/archives/2017/02/index.html","2b0afe37f90d61989ef64100c8baaa77"],["/archives/2017/03/index.html","d5e7ff4f1a323f55a23ecff3248a9ab1"],["/archives/2017/04/index.html","cb9349148fe9c3eb8b994bd38a6aa172"],["/archives/2017/05/index.html","4342aae7d18fd2c38e21d395833acbf1"],["/archives/2017/08/index.html","2c3cd6bd78b837f89053ebc67df7e97c"],["/archives/2017/09/index.html","bc8af7b07ba74b4c39730be01d1df4d6"],["/archives/2017/10/index.html","f1cfd3f9bf7eb9773bee2b5c68fd0fab"],["/archives/2017/11/index.html","52a32ca53109cdbd6f243e3dd4cf3e11"],["/archives/2017/12/index.html","7fbac9ef5bd8f962e2af6d24c721a31b"],["/archives/2017/index.html","90ec6e5f22cfeec3917b68c58bd0cbea"],["/archives/2017/page/2/index.html","d0ae45ce921e1a7bfd498c79b9be18f2"],["/archives/2018/02/index.html","888a8611ee09981a542c48b7200bfb2c"],["/archives/2018/03/index.html","65e434a8754910c8b491fac39302eadb"],["/archives/2018/04/index.html","0a8fd155f160e9c04ae4e0fd8a06f4c1"],["/archives/2018/05/index.html","9a46e8924d0601be3746162f97c78cf7"],["/archives/2018/06/index.html","baf61bfe039aaa6880ee660275146817"],["/archives/2018/07/index.html","9e7d50f131e668b682772d8a69000600"],["/archives/2018/08/index.html","591dc8809b592feb8d8a147ad6da5f2f"],["/archives/2018/index.html","2cc30382aba3d9f503082c0e47d6b64c"],["/archives/2020/07/index.html","6cc1fb6568e16149e5ef35b173691808"],["/archives/2020/08/index.html","09385f20ee453fdd108beb524616c820"],["/archives/2020/08/page/2/index.html","878954794fb2f35e744de4f73bc6d89f"],["/archives/2020/09/index.html","99d3d25eb365b1289604943b37615a6b"],["/archives/2020/09/page/2/index.html","fdf756a0d9a30ab0342ccc1830b2c640"],["/archives/2020/10/index.html","90a06938fd3c451a9a3f7c1fc7c2fbe7"],["/archives/2020/11/index.html","0025e9e690c2b90c5f77a30b6fb86980"],["/archives/2020/index.html","b1312f3cca3be84ad1059803e88c2552"],["/archives/2020/page/2/index.html","8ee5385fdaeb94881794b47e2f4fd020"],["/archives/2020/page/3/index.html","0400936732933faa589ed9b686527851"],["/archives/2020/page/4/index.html","54437867a11b2e9090b9f127a27eeaff"],["/archives/2020/page/5/index.html","584ec29f9f9f3a1042ba8a684a2466d4"],["/archives/index.html","dc9d3ad4ad0583e57d50d44e02baad0c"],["/archives/page/2/index.html","2e88bb6abf7aeb2920494c8c827e4d48"],["/archives/page/3/index.html","9fa7681bca07ae93af055d6cc177c5bd"],["/archives/page/4/index.html","9e395cdd1d7aff4e9599c5ac11c076a4"],["/archives/page/5/index.html","4d19baf7a37d8587a093a8fcd5cebe6c"],["/archives/page/6/index.html","a9b33fb44adf1b0b2f8eccc348d895ba"],["/archives/page/7/index.html","c671e55e01aec349bde4c0d84214701c"],["/catalogtest/index.html","4bded6e6b798f17c54abff230ca6dee5"],["/categories/NHK听力练习/index.html","7b2de3d451cab2ad2a31829d0f40740c"],["/categories/NHK听力练习/page/2/index.html","56883f0444f7bd11b2ba7885527b3106"],["/categories/NHK听力练习/page/3/index.html","5de98c9f105fde65c3140e4e145e4bd8"],["/categories/vue/index.html","ef427a7b88e49b3f41a529a2c9c81ca2"],["/categories/作品集/index.html","a9f2a051c2db588ee6f532cad8078a3a"],["/categories/学习/index.html","8a774c62e2ee1317ca8d12f972d5712f"],["/categories/教程/index.html","1545959182272a74bb76d3c85862158d"],["/categories/游戏评测/index.html","a147efda6c6aa5807463c9b7f36d33b3"],["/categories/生活趣闻/index.html","056835f81cd10ffe5644710347fad032"],["/categories/随想/index.html","46faf9d7e7c929a1aa9eabfa30665437"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/ButterflyOrchid.css","801460ce68bc0d448d08bedef5bf369b"],["/css/addcss.css","d20fc732e0cc7996bd82c5170b7aaa86"],["/css/background.css","b4e0ca22f9f4e4fb063347fe34402145"],["/css/calendar.css","a1db9e78a03ba862d74ea1f3e675386f"],["/css/cardlistpost.css","d110d491f5a8f21c553e8c0992430b03"],["/css/clock - 副本.css","65602c2385c7eab42ee3804cd6ee0a5a"],["/css/clock.css","22a8f8319e0d5147c2b358bbd1e3000c"],["/css/cursor.css","f514da9c81fb3fcb4f7e9038dfa30874"],["/css/danmu.css","2a5b914a9592bcd353425c6d5fa7af8e"],["/css/flow.css","c771dbc6f0b865b39a9806713dc1e284"],["/css/flow.min.css","7ce838f3563e00e15ca8bd55b6e00630"],["/css/font.css","ddff1519820acf887b0c19cd91624981"],["/css/index.css","54ac8e8b0bac3b10a2ab4e099603eca1"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/loadingline.css","bc1ee020a6a11fea17b915b97e6978bf"],["/css/news.css","9a25f0f9ca04c57147d6966e4170b8a6"],["/css/shuo.css","8db924024099e925c53d5b3dd22f83c6"],["/css/sortable.min.css","a4c7bddbdc32317dbb63a31244a82556"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/gitcalendar/index.html","d7663334739ee576b9010be9f65d1a85"],["/icon.png","8ec68de45d18642ba9baf2447e62f476"],["/images/201808011428/css/htmleaf-demo.css","a8256346bbe444fe604987f1fffbd31f"],["/images/201808011428/css/main.css","9afb83b1ea44d47f859a57395fe64737"],["/images/201808011428/dist/sortable.css","6b6b3d6f85a3497ee9e71b16b7223f60"],["/images/201808011428/dist/sortable.js","d199f4ab84617e894975f4757dbb3c17"],["/images/201808011428/dist/sortable.min.css","a4c7bddbdc32317dbb63a31244a82556"],["/images/201808011428/dist/sortable.min.js","0351fbccf2faed49062495990e32a14f"],["/images/201808011428/fonts/icomoon.eot","3891455c55b76ce7f7c86bfc33cd6493"],["/images/201808011428/fonts/icomoon.svg","bb97ed129aa43f69280d3085cd269102"],["/images/201808011428/fonts/icomoon.ttf","e46c36b6f94cf81311ffb383f6d32bec"],["/images/201808011428/fonts/icomoon.woff","d1117ddce10d8c7ca18ac089764da08d"],["/images/201808011428/images/item-1.jpg","c4b8c20bee5947eba1541a6a8a60a5ce"],["/images/201808011428/images/item-2.jpg","dfb3e34508b4060140150784cac9658c"],["/images/201808011428/images/item-3.jpg","4f40a1d501cbd4ebcd1f617078fd6a76"],["/images/201808011428/images/item-4.jpg","04a5d629dd413b49e960437cde7dcedd"],["/images/201808011428/images/item-5.jpg","370daf7210529430a4313b29bdad6269"],["/images/201808011428/images/item-6.jpg","93ce2054bde3d9463270d9f481012652"],["/images/201808011428/images/item-7.jpg","6a0345cbc8c6ac5e909f86e6faeeb0fd"],["/images/201808011428/images/item-8.jpg","4dc81e428730ba2b021dd4993385db4b"],["/images/201808011428/images/item-9.jpg","2aa5f8fc43fe5eca9bd8394a36f1b4d7"],["/images/201808011428/index.html","3493a40ea6eb33c63a23672c361af31d"],["/images/201808011428/readme.html","9ebdbaf848fb6544019a72c59b815318"],["/images/201808011428/related/1.jpg","f4f33eb12a48c6bda46a1c371db24e5b"],["/images/201808011428/related/2.jpg","891bf31b875ab7588f138185019d5166"],["/images/233.jpg","13e6ddf019e5560a32f3ff82efd22344"],["/images/AMJ1.png","d27a6725d1aaaf5324248da4312ab6c2"],["/images/AMJ2.png","00e22eba5901e5bd674e42228cd5bd26"],["/images/AMJ3.png","c8c9ea6348dfcad3a641899d5b587431"],["/images/FOTO1.jpg","4b6f100861908e2c7044cffbdb4a0c1a"],["/images/Isolde-1.1.6/Isolde-1.1.6/LICENSE.html","4161839a7685cce2cf5fa19082feb4a1"],["/images/Isolde-1.1.6/Isolde-1.1.6/README.html","0a32c44bb8da9e5e16c1ea9e3bab8e24"],["/images/Isolde-1.1.6/Isolde-1.1.6/dist/isolde.min.css","e859dcc0f568c92bdc4b7be3f3b7d7fe"],["/images/Isolde-1.1.6/Isolde-1.1.6/dist/isolde.min.js","c5f5cc1595efdfde4d0b1b1415c6ae25"],["/images/Isolde-1.1.6/Isolde-1.1.6/docs/OPTIONS.html","215f4a0906d8de756931fa51f825b1c9"],["/images/Isolde-1.1.6/Isolde-1.1.6/gulpfile.js","8d329f641050ed4e2a93a4cc914bba1d"],["/images/Isolde-1.1.6/Isolde-1.1.6/index.js","9fa8aa3efbd2e9eef8acc5f85752ad3e"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/css/main.css","8697f186bbc389515aa6eab3a5c9316e"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/css/sortable.css","04fca21af7d48dc17591894d17aa8358"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-1.jpg","8e757354b2917abe5dde088cbc82dae6"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-2.jpg","8a5fcc4cebc52caf89eb954285edae6d"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-3.jpg","caeae3d2265de3dad6d4b16dfda1fd05"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-4.jpg","1622226c2f5ef489c55f028caf26bafd"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-5.jpg","677d53cc36ccc311e11cd455fe222621"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-6.jpg","bdedef62cfdcdf9d273fc51a0ace2563"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-7.jpg","2faba84c41dc5f0670efd3cc0b139eb4"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-8.jpg","635c6292e642ab737eed6411c3295da6"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-9.jpg","e1c4d431a72b8bbf084451939ca86595"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/isolde.js","1ddba0575c730fe2318c6450dfc4f403"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/index.html","a36175436219f1f81d2ae2e5f7686cfc"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/isolde.css","b8011c458b923321a755da760cbeb5f0"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/isolde.js","1ddba0575c730fe2318c6450dfc4f403"],["/images/MVVM.png","ea5a002ee2f85c71a0db51d5adb5de19"],["/images/UT.jpg","367f4e432f9db55a92b2a290c4b0a476"],["/images/UX.png","a183974e958d41d1b6acec70bb7ea00a"],["/images/WindowsTerminal.png","8ac29cb56b8a1768cf7de071e9f1ae6f"],["/images/air-w.png","c1cc32f9d3e17551ca11a7d18a0b533a"],["/images/anzhuang.jpg","912b2489957f8344406edc5e5cebe5fa"],["/images/api-setting.png","2c0bb074390779721cba009e96c5417c"],["/images/apikey.png","1f31121b190eb1f990bcc3e27524bc03"],["/images/b0_img.png","43fcaa3f8b394ca5be957f4b860800db"],["/images/backpic1.jpg","86a6fa88167feb338fbf1a4e9057114b"],["/images/c0_img.png","34397085b4d3349034f9b167469ac626"],["/images/c10_img.png","7938c5b0dd789db4f262e5a618943a9b"],["/images/c1_img.png","95211a0ebf07befde1b11477c3a8185b"],["/images/c2_img.png","456ba51725d669fc4d005787753a6b08"],["/images/c3_img.png","a0aa7dcdd2ed5bccec52c16942036a3f"],["/images/c4_img.png","0869cebb60d00a78936b7498823a39de"],["/images/c5_img.png","533774e840ccb3ef13b46201a54be05d"],["/images/c6_img.png","db9eb681dea0b7911f0b2ba918d86c26"],["/images/c7_img.png","5b9c9e0331aca2a9d47a2730512f34f5"],["/images/c8_img.png","be9107995f185e3bbf7186c4dff69f42"],["/images/c9_img.png","642a2e762b74a28d2426af14f2b864c1"],["/images/calendar.png","86319b08b93be7c8bc47cdba7a169563"],["/images/cataimage/b1.jpg","e4795ce34b4d070d251c37a2ae5e37eb"],["/images/cataimage/b2.jpg","e1a7402c7d111b33d22c187a794e693d"],["/images/cataimage/b3.jpg","c091fe2a8024b2f010911e9af8091147"],["/images/cataimage/b4.jpg","1a2190b3e7ecb404767f029642adb637"],["/images/cataimage/b5.jpg","2683b29be7ea536b2d2c0b428ab87a80"],["/images/cataimage/b6.jpg","8eba752c28594ff5a253a01c0904a4a4"],["/images/cataimage/b7.jpg","9259255b1e1ec36bf92b4f34ad68db7f"],["/images/cataimage/b8.jpg","beaae9e5c735657f2e5bba9eb3deb754"],["/images/cataimage/b9.jpg","7ea8994ee380e84190422ac1b1d93ed8"],["/images/citie.jpg","adea8c4a6fca73e27f5e2aae864dd21f"],["/images/clock2.0.png","0a0f122c7a25262fc02ee99df0ef21eb"],["/images/clock3.0.png","8e04375c183c637b65fb50ed40f46466"],["/images/example.png","aaac9983e5d59f919bf282dcff2edb3c"],["/images/flow.png","adb9dac479e664c3e1b103a2c7fb9517"],["/images/foto17.png","28db4c6608ad1ee6b34238cafab25e5e"],["/images/foto2.jpg","be95b922512d004a61f83c97af3e2602"],["/images/foto2.png","0dc07d4e1b00526a273a89dc8b81548d"],["/images/foto3.jpg","551c0616c92c4ee7cc17dd458b3c46e9"],["/images/foto4.jpg","9d1d9fea759a41afc0061866e400339a"],["/images/foto5.jpg","984f618b15372f37d54f507e6f379f10"],["/images/foto9.jpg","b683fc0b998e80ff8f5a3e45e889807c"],["/images/girlpic.png","ff1e8427ed555af639e6d849f8f648f1"],["/images/girlpic1.png","698e5570e821c3cae643cc9777c2292e"],["/images/girlpic4.png","551882e4b9b6afb79000fd34c0dbf5e5"],["/images/gitcalendar2.0.png","3211a589d3a1d28c8711d095edc760e9"],["/images/headimage.png","332502f36a0297b30cb7969fe6de8451"],["/images/hexo.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/hexoWT.png","c027cc9f5665c7d7ba657e7a4bb40017"],["/images/his-json.png","7d8a71e38ab684107446e5c72c31854e"],["/images/history.gif","0459a3dcf2317253de0b34482880c63c"],["/images/homework1.png","e8d2f64d0785519ea7779016208a2900"],["/images/idea.jpg","5eb08bf6c965588f03c8860f201cac45"],["/images/jiaocheng.jpg","ad0b07db72a1eae964ab067511b756f3"],["/images/juanzhu.png","1296293f4a9d92b65575c2f6a846d79e"],["/images/key1.png","f2a370e02ad6c5a101db20b47a9a0008"],["/images/key2.png","21dc40bbe0377cd9fe85a9cb431c18f0"],["/images/letter/a.jpg","0d4de9f533da8b2de81ccc509657f853"],["/images/letter/a.png","213b394b0800f642d758368779d79942"],["/images/letter/b.jpg","66fee2626ad0a71d42dc6f0d4b2c04a1"],["/images/letter/b.png","581ea16ed4c1d7bbc1c0dca3929051a9"],["/images/letter/c.jpg","121a016fcce1ed141082dc6254f5abbc"],["/images/letter/c.png","3d8cf0fa352d68dde80b3310bd702ac4"],["/images/letter/d.jpg","6e1db729489ebbd94496f2134b18d4ce"],["/images/letter/d.png","c48ca73078c850ff606cad10f11c1c56"],["/images/letter/e.jpg","ff503c208a88b211e598b92e6969d0e7"],["/images/letter/e.png","37fc8cdc838e64efe77305fa30581060"],["/images/letter/f.jpg","429cc37ac2269be8797c969b66a81339"],["/images/letter/f.png","12adae8b53d9e6048dbbeeb3f91cebee"],["/images/letter/g.jpg","0b8098e60deaf670dc1d9fba77714341"],["/images/letter/g.png","575f1073e0f689ae0d84803b8c979f21"],["/images/letter/h.jpg","9002009c053237f1ef6724e8be5f2b37"],["/images/letter/h.png","2e7173749a66cc1d8630e69261e56464"],["/images/letter/i.jpg","431837c21dc08954ee4acb2b0bd1d9e9"],["/images/letter/i.png","37a8a26bace6560ddb9c85a8605da81c"],["/images/letter/j.jpg","a83cac86235866d82053ea127940ccc2"],["/images/letter/j.png","8aad49c7f55d6d365cbbf080e7ecbc30"],["/images/letter/k.jpg","a7bd4a5ab89ecb4ad1d391c73a2c3034"],["/images/letter/k.png","2488883f77a6b77fafaaf02cbca9c319"],["/images/letter/l.jpg","b87d0637d8edd85bbc5a144d8d49faaf"],["/images/letter/l.png","41d97d26f91501634e73da0dbd2d9ad2"],["/images/letter/m.jpg","7a29bfd3c2da75f6a219daa19b4bf01a"],["/images/letter/m.png","bbce5ca54ef802aa23e5a406fb419e9c"],["/images/letter/o.jpg","9f29dbd5dd07fb04e610cd0a8fc83074"],["/images/letter/o.png","8242f141981f606ca698ed32df2a17c7"],["/images/letter/p.jpg","325a87a9fa352c7ed5eaa01f24018b63"],["/images/letter/p.png","8d457fc405de63b537e01226a73d3287"],["/images/letter/q.jpg","57921474cb1e9f4352df281856a10f5e"],["/images/letter/q.png","93255d49876fc4cd9260383bbe30910c"],["/images/letter/r.jpg","0b634e85fe24fea66c9fb3d1eaaf1296"],["/images/letter/r.png","ac4be3c684d8aaf7f875993dd12c4fc0"],["/images/letter/s.jpg","e803c253e88e6577721a63d6929a53fa"],["/images/letter/s.png","7d8e6a7981edc0045d41647b6547e755"],["/images/letter/t.jpg","ef4b9b12431116d53994185248d0e504"],["/images/letter/t.png","da9331bb93c0285bb9ae9b98350d4db7"],["/images/letter/u.jpg","4b5fbe5c3b7414ef99e46dab2b9da71a"],["/images/letter/u.png","693fb63a9f05fee9abf4f8d65380fb2f"],["/images/letter/v.jpg","85f1071ab973e79017eeaf5eb726d0f2"],["/images/letter/v.png","fdcd25e6d19bfa3fe7cf09a9047235f2"],["/images/letter/w.jpg","d39f91c9e1be9ab39ca46218fcc7faaa"],["/images/letter/w.png","2d79b92721fd2dfe4e19d8a57ccf9473"],["/images/letter/x.jpg","e2ce4f0631d5002a79a5930ccbdb8449"],["/images/letter/x.png","c0acbad3e4ddaf59a95ecb6d6509bcbe"],["/images/letter/y.jpg","b2e7b48748a70f0dc8c4445bf9069196"],["/images/letter/y.png","fc61ea05666257f2c50f08918970a753"],["/images/life-cycle.png","02f39ea5c041d45938fda4b50f234cb7"],["/images/life.jpg","74d2d9c5f48ec59e3badeec690941812"],["/images/listen.jpg","9d4f73cd5634f43deaed4f9aca03f9a3"],["/images/loading.gif","ffa0804a5d99e2d5b39e05cda6d6b28b"],["/images/lock.png","301e4d262728417b6f2e008948208e1e"],["/images/magnet.png","4899a924f3de0d19dbe0415128c07d65"],["/images/magnet1.png","8d010eb86ca943e036adaa7de57aee7d"],["/images/magnet2.0.png","54fe576f174d2b6917fef89f40ac5975"],["/images/magnet2.png","293cb414a8ab93b43bde3bebf9cf0cfc"],["/images/magnet3.png","1923148630e2e094ff80bf35aa604c10"],["/images/magnet4.png","9bb4f963ac1c09f02d62525f513f492c"],["/images/meilu/1.jpg","cd67abcc3f543b5c66adc4f9d9c5c628"],["/images/meilu/10.jpg","ac9fb2711e477b5db1c3acb57e899045"],["/images/meilu/11.jpg","364caad6dfc356a3dc630fa067e48e88"],["/images/meilu/12.jpg","274767e5708f79934e5bdbf73eda8f0d"],["/images/meilu/13.jpg","dcab12b84454770b208913db63e825ac"],["/images/meilu/14.jpg","037cdd048284e621f27e17a2c59e8ea7"],["/images/meilu/2.jpg","f6cdb65ae3fad4523b32f5ee38696b60"],["/images/meilu/3.jpg","9e5df3612c2d93bf57313186c954aea5"],["/images/meilu/4.jpg","69ef2d6f4bcd79cf4b4e672b60c6751e"],["/images/meilu/5.jpg","ce81ca16def7613b7ebb368fb554f14f"],["/images/meilu/6.jpg","cafd5b62305f806754a75cc3af8c3b77"],["/images/meilu/7.jpg","b8ae865d386e1e713a6034da6b090c10"],["/images/meilu/8.jpg","afad7a7bf1066c817a8d2e7566bc780d"],["/images/meilu/9.jpg","72f9649f56b564eacf23ce3dacb88029"],["/images/metroui.jpg","5503bfffd450d9ab572b67ea00941571"],["/images/metroui/1.png","79a03b408c19c74eeaa8ff6e17a03f9d"],["/images/metroui/10.png","8309fed71a15c78f2dfa3af1ff75a5f3"],["/images/metroui/11.png","aaf1a007cbae12f93cc2688bace18d28"],["/images/metroui/12.png","0758ea282c3828c47e5c64520ff85783"],["/images/metroui/13.png","12ca7b511927cd4b26e97f3b20908a32"],["/images/metroui/14.png","f44ba7680f7b36df437e2ae2588d0565"],["/images/metroui/15.png","e8927c78b125b805af7aa86fee815ab6"],["/images/metroui/2.png","e604d3c662b996f06f22753ba9ab379f"],["/images/metroui/3.png","664e3b7490f2f95d5547b8ba79a65456"],["/images/metroui/4.png","c0f255344cafc303a1d9c7404da37149"],["/images/metroui/5.png","da2074cdb1298aca826abc1a5c441300"],["/images/metroui/6.png","efef2f087127614b4e03bcbe9a347018"],["/images/metroui/7.png","a4d34b1a2dbe3a58d3a92276880be039"],["/images/metroui/8.png","1d34a626bbaa898a60d4501936bcf962"],["/images/metroui/9.png","0663697c1667b377fe2623bd65e00b31"],["/images/metrouilogo.png","aea81b42d1c2c96440f74cf56ad82e2f"],["/images/news.png","0c14e4a9f87e15a146ba05ae50ce8ee3"],["/images/news2.png","dfdd0e6186d67511bfbd377bcde2013c"],["/images/newsqr.jpg","6431da8c702b7e7c2f3e6d82125d408f"],["/images/nhkimage/2020.08.01.png","af4c55b2ae1d5ab2f56c75a87fcdfdb3"],["/images/nhkimage/2020.08.02.png","c355d41b90f5c65823f96c5f6868ce53"],["/images/nhkimage/2020.08.03.png","fddcedb40d7f28b2ccb90814351ad5c8"],["/images/nhkimage/2020.08.04.png","8b4518ec5a8513f442980ed7167136b1"],["/images/nhkimage/2020.08.05.png","590abfb19334b0c3cee5a005674f2253"],["/images/nhkimage/2020.08.06.png","d469e21100c42435e88f2bdf07f93da1"],["/images/nhkimage/2020.08.07.png","3ca9e2c8b8a09a38423d73cd36e8de9d"],["/images/nhkimage/2020.08.08.png","4420c2d899fe4eb90c48bae0da8418a2"],["/images/nhkimage/2020.08.09.png","df14be338f9c920818dd1daa6aa955ee"],["/images/nhkimage/2020.08.10.png","c4e2ed023cd3dbfd4986add35ca9357c"],["/images/nhkimage/2020.08.11.png","cf562339e57f673d394f3e6cdd1f60cb"],["/images/nhkimage/2020.08.12.png","81dfa179fea3052ddcf73912ea368f67"],["/images/nhkimage/2020.08.13.png","8cf26c2642e7a27cbd86fcbda8bae8d9"],["/images/nhkimage/2020.08.14.png","d88eeb678b3ed3651d597e61957e264a"],["/images/nhkimage/2020.08.15.png","b9879f193867edcffeefce62c9dc7153"],["/images/nhkimage/2020.08.16.png","46cb914aa1d556561897767ec9ff66a0"],["/images/nhkimage/2020.08.17.png","ea1af9645b5cc9cbaafe70a91dd15cca"],["/images/nhkimage/2020.08.18.png","e87e4de39a6f06cf4283a63af92dd8de"],["/images/nhkimage/2020.08.19.png","8001a951513b542a98ce1151be5bd87b"],["/images/nhkimage/2020.08.20.png","4bc8fafa3ecce30d340b1350715d78e3"],["/images/nhkimage/2020.08.21.png","07ad1337e127922abff27da6c672549b"],["/images/nhkimage/2020.08.22.png","b2b5d53ba46015f64048f9d803b12179"],["/images/nhkimage/2020.08.23.png","225af8c0cabe5218ec634d1b8815fd95"],["/images/nhkimage/2020.08.24.png","1d54a484a6e2395aabe9be005cd90361"],["/images/nhkimage/2020.08.25.png","8008ba169cfce0ef2041329cd29b6b77"],["/images/nhkimage/2020.08.26.png","72a2b8094003a54c97a34ea97cf21bc3"],["/images/nhkimage/2020.08.27.png","893407e604804d215c8fef8bcd5f2684"],["/images/nhkimage/2020.08.28.png","b542280b7341759890a99cbd44d822c5"],["/images/nhkimage/2020.08.29.png","620e2e7d4772e39615fd1a88cdf49717"],["/images/nhkimage/2020.08.30.png","f645d7ba2dcb506f9ec6fb9244425ad7"],["/images/nhkimage/2020.09.03.png","c5262f3aa87190e0273383ea1e445681"],["/images/nhkimage/2020.09.04.png","c07149c32aa41c03bc7dac82a713f6b2"],["/images/nhkimage/2020.09.05.png","4e43556e1cb3b7f4d75f0f6127616a54"],["/images/nhkimage/2020.09.06.png","1021d2ae04a7f109404f857a2a7629cf"],["/images/nhkimage/2020.09.07.png","db9827e9f0a4cf1401b559b4644a0204"],["/images/nhkimage/2020.09.08.png","efe1030b73dc1c01f169c3122a194426"],["/images/nhkimage/2020.09.09.png","f6ba3a1c6cdeff88404ebe2a646f2eb5"],["/images/nhkimage/2020.09.10.png","3471b05d02113517359a9e2167befcfa"],["/images/nhkimage/2020.09.11.png","921a541a8bffb1aa436df2eb6db7c99f"],["/images/nhkimage/2020.09.12.png","a51f8ebaddba69bb80f9259a30f17e65"],["/images/nhkimage/2020.09.13.png","0399889200493cd2154ffc407e2bc400"],["/images/nhkimage/2020.09.14.png","eaaf3da69a39ed316b7fc8c4d409bb0f"],["/images/nhkimage/2020.09.15.png","5774959ea4061c9298ea174f0862cc3a"],["/images/nhkimage/2020.09.16.png","0c5a00f74020740fda589c02e4b3f917"],["/images/nhkimage/2020.09.17.png","b5aef734e3a7db4862ca3fe4e6769dc2"],["/images/nhkimage/2020.09.24.png","5982a7b3843f4ae43b2b4bc4b0c577d6"],["/images/nhkimage/2020.09.26.jpg","c6415af781fbdd36fdb034f74646129b"],["/images/nhkimage/2020.09.27.png","27aa6f6a8d5534ccd99cff261dcd9eb6"],["/images/nhkimage/2020.09.28.png","0f4318d1ff17a33de364432a1c44b5ad"],["/images/nhkimage/2020.10.09.png","6408d9f7e66fdeba8b9207939a08cf8d"],["/images/night.jpg","7c57432e644d24d5738a56459bea0e7e"],["/images/notop.png","d25c272e5ce312a880e04ce8a0b27683"],["/images/pasted-0.png","552608d8f6e39369aa30c6e332a32826"],["/images/pasted-1.png","baafdacee93c99e99418aaedbf524fda"],["/images/pasted-10.jpg","395cff6f64ab5df19baa3572ac98e541"],["/images/pasted-11.jpg","56e5df07c96634638abf7995b25c81ab"],["/images/pasted-12.jpg","61b3f803b85ce3640d7a9ba7efb9da6b"],["/images/pasted-2.png","2f410e53c811f92a6135f48857776f5e"],["/images/pasted-3.jpg","bb5717e691e87355e7d63a5f3a87ae62"],["/images/pasted-4.jpg","10041d0e3567b24b81222ec5075d6492"],["/images/pasted-5.jpg","ac5047a4b48c6cdaee86fa1863e33904"],["/images/pasted-6.jpg","1556ae8d3ad5713d60237ee4d10e81f0"],["/images/pasted-7.jpg","913fde1686587646ddc663bd810cc81d"],["/images/pasted-8.jpg","fc83268081fb4b6b6ecb1ffa1ec5af7f"],["/images/pasted-9.jpg","25e0fa3496591501f5c29d0b802b77d2"],["/images/pet.png","2b8c121909497e57057478856fe48a94"],["/images/pet2.png","dfb1d6a17b527ccc0c600e6ad31f55e5"],["/images/pokemon-js-master/pokemon-js-master/README.html","0856566ec046846f167614d419b1f803"],["/images/pokemon-js-master/pokemon-js-master/fonts/pokemon-italic.woff","78e86827d84b43c015a2f4c2c6a373dc"],["/images/pokemon-js-master/pokemon-js-master/fonts/pokemon-italic.woff2","6eed2c3b876039e9332617cf11051bde"],["/images/pokemon-js-master/pokemon-js-master/fonts/pokemon-normal.woff","09442a9708ccafa61a894d703b10a45b"],["/images/pokemon-js-master/pokemon-js-master/fonts/pokemon-normal.woff2","f82c92d44c94dcdacf907a1be4fac138"],["/images/pokemon-js-master/pokemon-js-master/img/ball_empty.svg","71b5bd4f59def835f94989825d23a737"],["/images/pokemon-js-master/pokemon-js-master/img/ball_full.svg","7e11059b84cef189cbae0694b31e3161"],["/images/pokemon-js-master/pokemon-js-master/img/blue_balls.svg","86a4983e08483856c2b69ba22b3b6605"],["/images/pokemon-js-master/pokemon-js-master/img/blue_front.svg","67d4551115bd9619421c8b279a02da21"],["/images/pokemon-js-master/pokemon-js-master/img/blue_line.svg","99e3256fe421cea565eb6c8e238b4e1b"],["/images/pokemon-js-master/pokemon-js-master/img/eevee_back.svg","be41cc88ba29dffed133934f3fd81092"],["/images/pokemon-js-master/pokemon-js-master/img/eevee_front.svg","67e75860167c118c80b43e9bc77f8dd1"],["/images/pokemon-js-master/pokemon-js-master/img/frame.svg","9ba744fd242d76220503200dc263d225"],["/images/pokemon-js-master/pokemon-js-master/img/hp.svg","1b9572b00909d59dade3c5d9c7484a94"],["/images/pokemon-js-master/pokemon-js-master/img/level.svg","ce8d20ff7ae3e66decac50b78ca3b86b"],["/images/pokemon-js-master/pokemon-js-master/img/marker.svg","3b8296fb02592d99e7a7aa29b1d41742"],["/images/pokemon-js-master/pokemon-js-master/img/pikachu_back.svg","41f62334dab4ff5ad455bf3792243611"],["/images/pokemon-js-master/pokemon-js-master/img/pikachu_front.svg","496206572029bcfaebfaed794ed1d015"],["/images/pokemon-js-master/pokemon-js-master/img/pokemon.svg","f015c9582ea62070300062fe2022dd37"],["/images/pokemon-js-master/pokemon-js-master/img/red_back.svg","1e4dc80c13eac754369017dbd19c9086"],["/images/pokemon-js-master/pokemon-js-master/img/red_balls.svg","35d2d97a11a79232ddeb90e052af95cc"],["/images/pokemon-js-master/pokemon-js-master/img/red_front.svg","b4fc7ab1d0a1254c453ee3ebc28db79f"],["/images/pokemon-js-master/pokemon-js-master/img/red_line.svg","fd9e3b97a6264fc5e5f398ce854d24b7"],["/images/pokemon-js-master/pokemon-js-master/index.html","b3c5493d193f63158819f963750357c2"],["/images/pokemon-js-master/pokemon-js-master/jquery.js","ac5017a6c6a77a3db6f989b281084b6f"],["/images/pokemon-js-master/pokemon-js-master/main.css","3e4465c57f14ab0e02b5b2a805372c0c"],["/images/pokemon-js-master/pokemon-js-master/pokemon-min.js","26e1d8483c8d86ab39054a609106aad0"],["/images/pokemon-js-master/pokemon-js-master/src/pokemon.js","f43de536cebe95ac1b19b905cbc9d889"],["/images/pokemon-js-master/pokemon-js-master/src/promo.png","abf2d1d338c0a9080c1a9eab7b35e6e0"],["/images/pokemon-js-master/pokemon-js-master/src/screenshot_1998.png","046079a29e3df9b95bde3c3c58647d43"],["/images/pokemon-js-master/pokemon-js-master/src/screenshot_2014.png","828e18e5add8f29486ba1945de2bfb7f"],["/images/pokemon-js-master/pokemon-js-master/src/screenshot_2016.png","69dbbe3b5b622cdce0fa82aca162129a"],["/images/ps1.png","0917ba91f21b6944dc08d35c41a326d2"],["/images/psb.jpg","6a27c58337875c776af0a7667598b401"],["/images/pubu.jpg","c5f6319fe03fb1fa52bb67097b1f22f7"],["/images/quse.png","7cd1ec12b804305430cb4cdc09c7a893"],["/images/rain.jpg","9c26acc44c692b6a63e134be07b07c18"],["/images/rainsmall.jpg","e8c91c40bef224fc5a3942bd0d007b84"],["/images/shezhi.png","281bf545f6a4024e2d0b7120bc398a21"],["/images/shuanglan.png","22daaf2fe9ea7d8673a3dd69d23f0294"],["/images/shuo.png","9cce9df6e32e00e49471b9a9f089f6aa"],["/images/shuoshuo.jpg","c5752c104cddc0884d3f50b4dca01322"],["/images/soul.jpg","d97b4099c0728ff6123d006fa62db86e"],["/images/study.jpg","a9b1cf95ee6bd9f3913e8ec6a6a6f44f"],["/images/tianqizhizi.jpg","dd48d78b4eeaaa52578352f9ef570b14"],["/images/time.jpg","b8513da2d044befd353231d3e51db22e"],["/images/vue.png","0d2b5680bcb76df1333b85fad58634a7"],["/images/vue1.jpg","8cbf18302c6fa72e2a40d0cca0832213"],["/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/03n.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/04n.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/images/weather/09n.png","512894b4a127a42e060e237674b8d145"],["/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/11n.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/13n.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/images/work.png","e521cf5b834292fde1c50e0a0f5802f9"],["/images/xiaoguoyanshi.png","994a3b710d36df0a4630cd9a768c7f7b"],["/images/xiaoguozhanshi-m.png","1fefca18214fc4889d1bb76b81887c9d"],["/images/yao1.jpg","9dfddaf8c121fc8db788a87d133d6376"],["/images/zfe.one.png","b41f689341882058ffb28c4cee499bde"],["/images/下载.jpg","79c7247da282569a05bdd46aa43b93b0"],["/images/幻想终结之日.png","0025c4d3973bdfedb80db3f78c59fa47"],["/images/时空战纪——游戏建议及意见①.jpg","1337457f14a8dffee66d94f8915b54ff"],["/images/简历.png","d70507ee4615c9e324578c0d777e6855"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","9dec724a708bc994e8c2739cb83bc947"],["/js/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/APlayer.min.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/ButterflyOrchid.js","165e2d42c89940528bdad65cf6a40c87"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/airvisual.js","71cf86bfd452ca01d92438d8266416ee"],["/js/airvisualapi.js","6931bebe1696688d109963187fc2eace"],["/js/artitalkkey.js","ad2c74320c63125a36319659657d2886"],["/js/background.js","94c8410b174f58594cf81ec99054968b"],["/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/js/calendar.js","a58e02711cc6dec4dc04257e555b8923"],["/js/catalogMagnet.js","0387c6ad152e7a6076cceffc7420be77"],["/js/clock - 副本.js","405186e7a9d73221d2d50c0dea2852d0"],["/js/clock.js","2d97ea3ca1d25f0b082d73ae28eb474e"],["/js/color.js","3730bb4f7b185e6f5130ac28bace968b"],["/js/dan.js","6b6ae6b7f1b42dd4857541f43b2bb733"],["/js/echarts.js","dc1227b1eba1ba47fd185a387d0a7d37"],["/js/gitcalendar.js","640f4547d3207ea6d83fa913426d3b46"],["/js/gitcalendar1.js","fadfa8a42272cd322118653dca512a7a"],["/js/history.js","20459f7db325e597e64903f4c0d19306"],["/js/historyroll.js","a3e9ac376106816c50a61f9f4306d671"],["/js/jam.js","462c07d3b2e0f20394d994bbcfae37cb"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/keys.js","2d95b9600f1c3747bb5b0f3579feda96"],["/js/main.js","f5b2bd10be1e09516c539afa2197a8d7"],["/js/mywork.js","6b3a7aa9476894280703396b161b3b52"],["/js/news.js","b040bd95378e036bea949044963499c0"],["/js/rain.js","f656dc28e4ab5c3f8414d35f683278c1"],["/js/rainremove.js","ceacf82842b101f7e54a2aaf5f4bb9cb"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/shuo.js","1076b1ef51358cc11b6ff3bab25e15d8"],["/js/sortable.min.js","0351fbccf2faed49062495990e32a14f"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/js/vuegitcalendar.js","664c0f121af9131af267c1434225b5e4"],["/link/index.html","5214a0d89734b0a30e98f216805895c4"],["/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","7cfa297f027ae4f39bd2c36ccfab9a36"],["/page/2/index.html","e6f129dfa63c73047bc30eae6c664f87"],["/page/3/index.html","46219c971cadaf635f0cb4294111be13"],["/page/4/index.html","e0fdd78e8500d5b528d3dfe18770c867"],["/page/5/index.html","006e2b69de8a07ec762106f3713bd99c"],["/page/6/index.html","17e7fae0b4e80d02b6d1b6f4ab4b62cd"],["/page/7/index.html","4bdf86a33206e0ee247e3c6f31d84283"],["/research/index.html","dd9c5526b9acea3084ea8b1e4cd91de0"],["/sw-register.js","107ce1ca25512643fd28fabf5421bf46"],["/tags/Butterfly主题/index.html","13f8f96a919e31565e0ecea5dfd950a3"],["/tags/DIY/index.html","af3595b52f02cb7813730f4ed48a2747"],["/tags/ICT/index.html","b865ca98310e3166a9970f1aa896b9d2"],["/tags/NHK听力练习/index.html","d66096379b11abd3a153325c9287261e"],["/tags/NHK听力练习/page/2/index.html","351cd97214376f27a1ca2b2309e4c114"],["/tags/NHK听力练习/page/3/index.html","22cbc8fe060eb30946114b45620ee6e5"],["/tags/metro-ui/index.html","28567547f917d2c43e7a94ace7e6cc24"],["/tags/vuejs/index.html","ae85f2f0e637ef662a95d4bacbc32fbb"],["/tags/お盆/index.html","72bbff05b80bc6ea6aa1838b32532067"],["/tags/世論調査/index.html","b20c1298eeaed792c63334a2f4c8da0e"],["/tags/作品集/index.html","6e711f56f5f107d93de8646e68b474cf"],["/tags/农业/index.html","de4c2cd2dad78269006007a5b04eba76"],["/tags/历史/index.html","88a363e089f32a9adb9e8804ddcfed63"],["/tags/営業時間/index.html","01caebf12f5da0d1978c633bab378c9d"],["/tags/国外政事/index.html","4fb360329286a49183b7ee54fd7a24d7"],["/tags/地震/index.html","497e7044c4cd3102009c7320c127d9a8"],["/tags/外国政事/index.html","51e100f79a9295dd6c13964311e4723d"],["/tags/天气/index.html","28c241a2d54e61faf02913f417d85cc5"],["/tags/奥运会/index.html","dc89440aded0f48b3d947aaa30fdf81d"],["/tags/学习/index.html","f0c8d82c50e1d593640eb796f9b8263b"],["/tags/学习/page/2/index.html","3e0c98790dad70f036c7216020059e86"],["/tags/就业/index.html","4f0db8f6ad305fb1a8f67b0fe8559b33"],["/tags/庐山/index.html","6162b877cfbf4135b74f65b399e17b55"],["/tags/座礁/index.html","29f61a9e93ec913d755639c9b2611ace"],["/tags/政府/index.html","9b5b11ffc7d681b6cec3fa1428b8ac71"],["/tags/政治/index.html","1b46c103c4887647526ddebb61b2729a"],["/tags/教程/index.html","066830b3233eede9ddd640b89cd3da0d"],["/tags/日本教育/index.html","469878051e3155657d25088b6b745325"],["/tags/民生/index.html","e669a629f8adfd11c6b796e5958d9d36"],["/tags/游戏评测/index.html","87666d31e63b971d17350b0d031dc192"],["/tags/游记/index.html","bf2e3abc9d454426cdc3e41372f61e48"],["/tags/生活趣闻/index.html","b5184c80cf2e547b06675a86b353a324"],["/tags/科技/index.html","e434fc95d56040864a4beebf4c103b6a"],["/tags/经济/index.html","d108cc9092d97a50f81c4610079721d1"],["/tags/网络教学/index.html","599bc21b7c7c74efb060245b371328a2"],["/tags/舆论/index.html","cca03c697f5016ba2d6399ae1a332856"],["/tags/虚拟现实/index.html","edf9a57e978e184912fdf9f2c6cb6302"],["/tags/随想/index.html","fb62c772e6ac78e03e18cf15aedd7430"],["/tags/障害者/index.html","ee067c58e8007c8ac9f48f41ba7c9782"]];
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
