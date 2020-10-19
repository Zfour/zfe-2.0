/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/05/20/2015-05-20/index.html","a05b1975a0846c1b5e10cd724d4c158a"],["/2015/06/16/2015-06-16/index.html","d3033305273f5402dc7c095617d6660a"],["/2015/12/12/2015-12-12/index.html","f7c3db7303e6c5a206d9f5d81e11eb7c"],["/2016/06/08/2016-06-08/index.html","afa532ae2c0ccf2c9959c79c1b53f054"],["/2016/12/18/2016-12-18/index.html","ec000989f6b23b5deff66c2faad28b38"],["/2017/02/17/2017-02-17/index.html","3fb578c201fe1aef866ef1d181f0f049"],["/2017/03/17/2017-03-17/index.html","7148176876cdcda04240784e2f0d35bf"],["/2017/04/06/2017-04-06/index.html","67f1031007809aa88075d6ffabaebcd6"],["/2017/05/17/2017-05-17/index.html","b640ed380b7b0e76155be1515147ba54"],["/2017/08/15/2017-08-15/index.html","77dfcead68bbae432978ebb56d9e9058"],["/2017/09/16/2017-09-16-1/index.html","50b0268d0d19d2ebda46efe29d446816"],["/2017/09/16/2017-09-16/index.html","f1236cbdc71396938862624b301b8d74"],["/2017/09/21/2017-09-21/index.html","014055fdd6baea8ec6bef1b77f689045"],["/2017/09/23/2017-09-23/index.html","48f6e7ba0fcc26b152a0f07afda45d3e"],["/2017/09/26/2017-09-26/index.html","f5fbb5afb2ac4b90b07cb0011f5ee448"],["/2017/09/27/2017-09-27/index.html","969f7180316c2410d1e3b5abd1742d31"],["/2017/10/04/2017-10-04/index.html","69d1a144740dd41963aad86322d840ce"],["/2017/10/08/2017-10-08/index.html","42cd711966f688ee0befc3719163dde6"],["/2017/10/09/2017-10-09/index.html","147f7bf4ec70a387efe2fab9165a6038"],["/2017/10/15/2017-10-15/index.html","222d12bcc6b8feba7ee827e8cd0d8a79"],["/2017/10/19/2017-10-19/index.html","27b6bc06771c11a617e19916448f6998"],["/2017/10/23/2017-10-23-2/index.html","ef228c4c79d3929236249fe6be434d28"],["/2017/10/23/2017-10-23/index.html","3d8c6f2aa811f1f5bc9fd0e0b83ba653"],["/2017/11/08/2017-11-08/index.html","e463de38d29e3c8a7ff94d400d059c6e"],["/2017/11/12/2017-11-12/index.html","d328a9868cbbac02bb660e338e6086f6"],["/2017/11/15/2017-11-15/index.html","722d63aa204058e943b5c7afdce15223"],["/2017/11/27/2017-11-27/index.html","993f2a704815e1901bc04063cdf707f4"],["/2017/12/06/2017-12-06/index.html","3bc8237e52c516ff2f81f84f4ee8e1e1"],["/2018/02/12/2018-02-12/index.html","0f1b9ffc43ba46599668358df81a7e4c"],["/2018/03/26/2018-03-26/index.html","f9e7d2c149722c36528a269a734b734e"],["/2018/04/02/2018-04-02/index.html","9e48683cbd01e1170ec4b69b6ee27bce"],["/2018/04/24/2018-04-24/index.html","278d86f8887002e13952d95356f7df53"],["/2018/05/18/2018-05-18/index.html","bb0de49514a0f1544836d6c6414e0a5c"],["/2018/05/23/2018-05-23/index.html","cdcb273344c92244131202472df54fc1"],["/2018/06/08/2018-06-08/index.html","ccbb296410d729e6f605ea9309ad0cfb"],["/2018/07/01/2018-07-01/index.html","8e5454ec6a263f0e8dfaefb88bd466cd"],["/2018/08/30/2018-08-30/index.html","a305a5ae481ef959d8f1f2046cf4b9f7"],["/2020/07/20/2020-07-20/index.html","ec6ff275917aabde6cb79fd41ffa7e2c"],["/2020/08/01/2020-08-01/index.html","75394d7451780e0a31faea4724916a4b"],["/2020/08/02/2020-08-02/index.html","008db58493dae25a6aa0c1a9c215afc9"],["/2020/08/03/2020-08-03/index.html","01e2ce3235487c9d117470c009461f4a"],["/2020/08/04/2020-08-04-1/index.html","33dd2c1a220ebd01808109d262e1aff0"],["/2020/08/04/2020-08-04-2/index.html","743a7235e5c188018ffb1cfc1dc63831"],["/2020/08/05/2020-08-05/index.html","acbec8a68b476098f6d46941e07f36c2"],["/2020/08/06/2020-08-06/index.html","9b882b7300bff92e8cf1806647fd0a02"],["/2020/08/07/2020-08-07/index.html","9875966c4947ef569f1fe3504a03a412"],["/2020/08/08/2020-08-08/index.html","41b2fbaca5054718eb1f729fad30ae1d"],["/2020/08/09/2020-08-09/index.html","0326f16db24e31620c311cb83d39885b"],["/2020/08/10/2020-08-10/index.html","6df3f2ab52646828ed4dfbc6591506f5"],["/2020/08/11/2020-08-11/index.html","18eff35527782337ae7f1f3786c30f2e"],["/2020/08/12/2020-08-12/index.html","67c0c911a2737457e3c89d3710e652ce"],["/2020/08/13/2020-08-13/index.html","059fe8a5f19425f8cc449d69d323e32e"],["/2020/08/14/2020-08-14-1/index.html","bde2fd617cc782001ed6905ef1869519"],["/2020/08/14/2020-08-14-2/index.html","0be4a44821a875deac18265208d2fc6c"],["/2020/08/15/2020-08-15/index.html","c647d482461d64ca38a74b953d89b9a1"],["/2020/08/16/2020-08-16-1/index.html","08d3abd4803f3f8fe703433a57b62974"],["/2020/08/16/2020-08-16-2/index.html","c02b1eb3d4c6097982e625e38ade29bc"],["/2020/08/17/2020-08-17/index.html","db42bbf92a0618de7592b00007c55a93"],["/2020/08/18/2020-08-18/index.html","3c71882321431928156bb3416de7c348"],["/2020/08/19/2020-08-19-1/index.html","f922558dd22863f1357ddb8746661630"],["/2020/08/19/2020-08-19-2/index.html","6bd98b25c3359830591b99460f594151"],["/2020/08/20/2020-08-20/index.html","e0273b20193cbd489732b20a53fc1f3f"],["/2020/08/21/2020-08-21/index.html","c01b3231c445d98b76f139e3c7c17d25"],["/2020/08/22/2020-08-22/index.html","aed1c2662d10317583adea4489cd6ec1"],["/2020/08/23/2020-08-23-1/index.html","28c0bcc26b6f36ceeb6ccb04a431de67"],["/2020/08/23/2020-08-23-2/index.html","b7d6bd5829235ccc907747a1e91d9281"],["/2020/08/24/2020-08-24-1/index.html","2c4b6425443d937f7ffd582577ff829a"],["/2020/08/24/2020-08-24-2/index.html","ca4406fe9c348c1093b4048033e33663"],["/2020/08/25/2020-08-25-1/index.html","76258a0c3e1a7e8116a0eaa0eec8008d"],["/2020/08/25/2020-08-25-2/index.html","cede4d5713261cf6f7a3d02aa2c746ce"],["/2020/08/26/2020-08-26/index.html","f9321a97176aa656b0f92297c8eb4a05"],["/2020/08/27/2020-08-27/index.html","db6cb72f9bb55b639dd41785ed58e626"],["/2020/08/28/2020-08-28/index.html","2f677aa1cf9dffd0d0ab92f242747273"],["/2020/08/29/2020-08-29/index.html","9a421ee8df072ceac31afce7356dbd9d"],["/2020/08/30/2020-08-30/index.html","43f3bfaa2ca1dddbb4faa6b1c9349c8a"],["/2020/08/31/2020-08-31-1/index.html","a43a73bf23c38acd28d5c4f1abbe3511"],["/2020/08/31/2020-08-31-2/index.html","6d55e3daade9dff2af1f2316c4413a62"],["/2020/09/01/2020-09-01-1/index.html","9ad2d172ae5d7436e83c1c0fbc1310f6"],["/2020/09/01/2020-09-01-2/index.html","1884178d3a2408535b27d97b16b1c385"],["/2020/09/02/2020-09-02-1/index.html","a647baf69b7fd9a8503774f4b9c0d8e4"],["/2020/09/02/2020-09-02-2/index.html","01951e6b000c1928de2b1b2025dc99ba"],["/2020/09/03/2020-09-03-1/index.html","0bd1071ee4bf0fb60c1ee009bc1bd1ab"],["/2020/09/03/2020-09-03-2/index.html","f8c9aa5fe636930fec90a34b34176c0e"],["/2020/09/04/2020-09-04-1/index.html","d7e4e437765bafd6fea7fe5cc29ded7e"],["/2020/09/05/2020-09-05-1/index.html","e5a5c3e9604f48f4ec4d35646eb30fee"],["/2020/09/06/2020-09-06-1/index.html","7510ee0624c9839af45163a7461966ce"],["/2020/09/07/2020-09-07/index.html","f857419b38d95701c7c1e7bcb63d0263"],["/2020/09/08/2020-09-08-1/index.html","e5e3c49b4672dcd64d59ce246b9979fe"],["/2020/09/08/2020-09-08-2/index.html","86e6bd17f42ac63468fd50a0c82e3c8f"],["/2020/09/09/2020-09-09/index.html","818f5f49f4b62af6696a36f509bef83d"],["/2020/09/10/2020-09-10/index.html","ab98b65cce4eed3434e9ba53229e4e9f"],["/2020/09/11/2020-09-11/index.html","69663021d7655ef3c15316ac57f48c8d"],["/2020/09/12/2020-09-12/index.html","a882426fc2e465e569137fc0303b2e29"],["/2020/09/13/2020-09-13/index.html","be57c1510e27d011761c40177e6fbfa2"],["/2020/09/14/2020-09-14/index.html","bde4717d10dc743a83860694f5ea3622"],["/2020/09/15/2020-09-15/index.html","01f6b0124b43ed9f9419f2cfe8b5f978"],["/2020/09/16/2020-09-16/index.html","c140c20e18a72126aa611be97904026b"],["/2020/09/17/2020-09-17/index.html","bed811642198f31ca13299f8fbc14c7e"],["/2020/09/19/2020-09-19/index.html","f47806d216a032b66fc86b3a58718b7e"],["/2020/09/23/2020-09-23/index.html","76fd820ebc702d122f9c43ccc998ac1e"],["/2020/09/24/2020-09-24/index.html","c573af6b28e668837afbef61de84a555"],["/2020/09/26/2020-09-26/index.html","faa4c5285c8747c4ad43ede5fc7e01c8"],["/2020/09/27/2020-09-27/index.html","1e2caba052a5c593d91e011851911fdc"],["/2020/09/28/2020-09-28-2/index.html","846de4fc867d3c20e0ce1a845fb585a6"],["/2020/09/28/2020-09-28/index.html","ba4a191eb6e23f4d3dc5a20c299acfdd"],["/2020/09/29/2020-09-29/index.html","56b36fcde3a56c5820a6e0522a7ec084"],["/2020/10/03/2020-10-03/index.html","fdad1b0f38a549051fe701246b113a30"],["/2020/10/04/2020-10-04/index.html","e24b21687af9b169d0ab96a04e4c4217"],["/2020/10/09/2020-10-09/index.html","8b66f90481e177491f87313d7bb4750c"],["/2020/10/10/2020-10-10/index.html","b32b718fe227043b043084c149edaa7e"],["/2020/10/11/2020-10-11/index.html","f38ebfe6a4c36933cfc47ce0565f9d39"],["/2020/10/12/2020-10-12/index.html","944f9ba3184dde4a482f9592f40931f0"],["/2020/10/13/2020-10-13/index.html","214ca43025e0ba917bd09ce883cd77ff"],["/2020/10/14/2020-10-14/index.html","a131d2bd22d3df00af6be31b4d1280cc"],["/2020/10/15/2020-10-16-2/index.html","d2f888913c516ece6d494063da9ede5e"],["/2020/10/16/2020-10-16-1/index.html","75eb0f1c2f4706faeb64b7fae3b08098"],["/2020/10/18/2020-10-18/index.html","cbd164a5b87caaa3ee1743eebe0ca7ff"],["/airplayervisual/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/airplayervisual/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/airplayervisual/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/airplayervisual/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/airplayervisual/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/airplayervisual/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/airplayervisual/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/airplayervisual/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/airplayervisual/index.html","2120d2dec35a054d2b9ce20dff31510d"],["/airplayervisual/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/airplayervisual/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/airplayervisual/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/airplayervisual/js/jamsetting.js","7927507e0080ddf55c6d8b5f526bd942"],["/airplayervisual/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/airplayervisual/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/airplayervisual/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/archives/2015/05/index.html","4719d3fa0c4c45f30ffc546997e7b959"],["/archives/2015/06/index.html","092f1de931a9e5067781019c359a088d"],["/archives/2015/12/index.html","496a29cac9bc2e1cc4619ddcc33e3f68"],["/archives/2015/index.html","e381018b2d98e537a21b193b602628e4"],["/archives/2016/06/index.html","2aadafc4057a0da1fe1da88088e555fe"],["/archives/2016/12/index.html","a5c0d80024a34f66ccf10fdd3c789147"],["/archives/2016/index.html","78d109aa20e46b03e54022645ab2caf2"],["/archives/2017/02/index.html","9a38de39b1656f43c1570244e1fa1b59"],["/archives/2017/03/index.html","f2734e9dcb8c1cd77af50e3ef3f8e425"],["/archives/2017/04/index.html","df38c6f7fb53d0f7fbfd5dc66159d591"],["/archives/2017/05/index.html","244632ff08c7f8cdddd3f11e32943fb0"],["/archives/2017/08/index.html","97f75780ac24dca100cb7152ff814140"],["/archives/2017/09/index.html","95de2f294af0cc8f5e8e131fd994b739"],["/archives/2017/10/index.html","748e57c8c16065e702f33406f0af64f2"],["/archives/2017/11/index.html","bdd078e4b9533cb52682244afbf8a568"],["/archives/2017/12/index.html","26f10054be7d3b81e61e23a32b36da8e"],["/archives/2017/index.html","66d64d2be77156cc862edec171f14c6b"],["/archives/2017/page/2/index.html","93e8b056694a610731182c9a1a0ea304"],["/archives/2017/page/3/index.html","9874850af4a7edc693eee722e6074500"],["/archives/2018/02/index.html","30c7a34683430e0ad7960f41d1fec83d"],["/archives/2018/03/index.html","0e492ded4fe1c99bddc5c83bee34c3a5"],["/archives/2018/04/index.html","cefb88f1492baa25567ecebe146bd625"],["/archives/2018/05/index.html","a36ea9b50c5f7848e47fbf147c462121"],["/archives/2018/06/index.html","14d2681611ec7d7c7ee72d52adb41442"],["/archives/2018/07/index.html","0327d53bd88cfeab863ad1d837217d45"],["/archives/2018/08/index.html","95a48144a7e6909d7575098c048e668e"],["/archives/2018/index.html","a2141bd552a9ab3a8893cc30e39639ae"],["/archives/2020/07/index.html","95b3d3c45c9ba108f0228bf6df7e8bac"],["/archives/2020/08/index.html","afdd4bb6a039f85975b23a9b8351675f"],["/archives/2020/08/page/2/index.html","5fa10a8e0a0dfa51cd153dbd1f1d57e3"],["/archives/2020/08/page/3/index.html","53ea3d94bfafcede9c825b78034837f5"],["/archives/2020/08/page/4/index.html","8ab07b96b52b2fd16d6035ddb423468f"],["/archives/2020/09/index.html","8b38b1b79119556d6742b19f72af265b"],["/archives/2020/09/page/2/index.html","00fa7ac6c39cfefeabbad0447a00759b"],["/archives/2020/09/page/3/index.html","3336a677ef8bce4e04849a59ff4a7aa5"],["/archives/2020/10/index.html","5a93a73d29e03643582a3b8c2abdf84f"],["/archives/2020/10/page/2/index.html","444313daac65db792f13e2710797f960"],["/archives/2020/index.html","35c9332dd93067e2a3d73699337ee4a0"],["/archives/2020/page/2/index.html","0bdb4962b09be0e60fd80e59e8abff5e"],["/archives/2020/page/3/index.html","2c1550c824656aa8792767ac9c3583a8"],["/archives/2020/page/4/index.html","565f3e94b3adbd6202acb8450024b06e"],["/archives/2020/page/5/index.html","da0d24563b052c45a68e9f63cd4e4d83"],["/archives/2020/page/6/index.html","09946cd9394921878cccdd2da71de4a8"],["/archives/2020/page/7/index.html","661a6c7ed0a4c160a83720fc2d512bf0"],["/archives/2020/page/8/index.html","e29af7f1151ec1894a674ab5aa201f2a"],["/archives/index.html","b4d8b463dd5b34287dc1e4a002a43e10"],["/archives/page/10/index.html","b3865e50409de53b5b99fc80bcec237a"],["/archives/page/11/index.html","8e1616f48c6506a918e1f2ed6c0edef3"],["/archives/page/12/index.html","38780e2054d7257d2fc4bea6df434c4e"],["/archives/page/2/index.html","85ed74cdd031197ca2c194e5351ed669"],["/archives/page/3/index.html","b6bcda210eef6dc05302e63cf73222e2"],["/archives/page/4/index.html","c316861ca38e6454005150cced6376ba"],["/archives/page/5/index.html","c53c38dc0e363baa823e81c7ce7c1440"],["/archives/page/6/index.html","c0a44bdfc0500692eb1cf62b25e039aa"],["/archives/page/7/index.html","25b7d51ba04f419ad1c4925bad24fa0f"],["/archives/page/8/index.html","b44fd90a52887d691d86c77c60b197fa"],["/archives/page/9/index.html","648446ed2fdbbb065eb4d6116e6b9135"],["/catalogtest/index.html","a42a4f66ddaa1fa58543163dc0ca8f61"],["/categories/NHK听力练习/index.html","cd939bada80a023d12a18b8a6033a2fb"],["/categories/NHK听力练习/page/2/index.html","26d71c30f3121e86e0238b6f1ab209f5"],["/categories/NHK听力练习/page/3/index.html","b94d13e9e0c1d472a5c9648a2d8f95c2"],["/categories/NHK听力练习/page/4/index.html","7c404aabfee6c4b8c9b6d254358162df"],["/categories/NHK听力练习/page/5/index.html","79fba2ef4ed03f8480f6fd7f07d9f4bb"],["/categories/NHK听力练习/page/6/index.html","bfa72657018b368b1de9706ca244f54e"],["/categories/vue/index.html","497dca99d6a2385882f72cb96e43efc2"],["/categories/作品集/index.html","aa017d8b22544e95c2275c254bc7bde8"],["/categories/作品集/page/2/index.html","b6c513b21b37c8d2922378aceeb915f2"],["/categories/学习/index.html","4ca1206e5c990f744fafe719864245d4"],["/categories/学习/page/2/index.html","426b80d2addaee044a70ba414d394451"],["/categories/教程/index.html","531c396a597e66dbc083a753ab015de1"],["/categories/教程/page/2/index.html","6fe66f5075c59bc64285c558f662d026"],["/categories/游戏评测/index.html","164fafaa908c4aa608f1aa151ec7d536"],["/categories/生活趣闻/index.html","ecc88a60d9d33fca9f8b88bf4b7da802"],["/categories/随想/index.html","14f1355e07a9036a4d18b1b677f74400"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/addcss.css","d20fc732e0cc7996bd82c5170b7aaa86"],["/css/background.css","d013642f5988333ece3b04912f099111"],["/css/calendar.css","0090a32d2a61d42c5bfed254bfba078c"],["/css/clock - 副本.css","65602c2385c7eab42ee3804cd6ee0a5a"],["/css/clock.css","9db53e3bffb704c740aa83bddaf8b999"],["/css/cursor.css","f514da9c81fb3fcb4f7e9038dfa30874"],["/css/danmu.css","2a5b914a9592bcd353425c6d5fa7af8e"],["/css/index.css","a830cf7dafed0e1e03142b35ae00f2a6"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/loadingline.css","bc1ee020a6a11fea17b915b97e6978bf"],["/css/shuo.css","8db924024099e925c53d5b3dd22f83c6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/html/calendar.html","bddcec1edba7f4c49fe5cd75f8cdf5b2"],["/html/shiyan.html","59416f6a2b26807ad98624b558b375a7"],["/html/shiyan2.html","ae47132ff0cde5e33ca11db7f5ad3c6e"],["/icon.png","8ec68de45d18642ba9baf2447e62f476"],["/images/AMJ1.png","d27a6725d1aaaf5324248da4312ab6c2"],["/images/AMJ2.png","00e22eba5901e5bd674e42228cd5bd26"],["/images/AMJ3.png","c8c9ea6348dfcad3a641899d5b587431"],["/images/FOTO1.jpg","4b6f100861908e2c7044cffbdb4a0c1a"],["/images/MVVM.png","ea5a002ee2f85c71a0db51d5adb5de19"],["/images/UT.jpg","367f4e432f9db55a92b2a290c4b0a476"],["/images/UX.png","a183974e958d41d1b6acec70bb7ea00a"],["/images/WindowsTerminal.png","8ac29cb56b8a1768cf7de071e9f1ae6f"],["/images/air-w.png","c1cc32f9d3e17551ca11a7d18a0b533a"],["/images/anzhuang.jpg","912b2489957f8344406edc5e5cebe5fa"],["/images/api-setting.png","2c0bb074390779721cba009e96c5417c"],["/images/apikey.png","1f31121b190eb1f990bcc3e27524bc03"],["/images/b0_img.png","43fcaa3f8b394ca5be957f4b860800db"],["/images/backpic1.jpg","86a6fa88167feb338fbf1a4e9057114b"],["/images/c0_img.png","34397085b4d3349034f9b167469ac626"],["/images/c10_img.png","7938c5b0dd789db4f262e5a618943a9b"],["/images/c1_img.png","95211a0ebf07befde1b11477c3a8185b"],["/images/c2_img.png","456ba51725d669fc4d005787753a6b08"],["/images/c3_img.png","a0aa7dcdd2ed5bccec52c16942036a3f"],["/images/c4_img.png","0869cebb60d00a78936b7498823a39de"],["/images/c5_img.png","533774e840ccb3ef13b46201a54be05d"],["/images/c6_img.png","db9eb681dea0b7911f0b2ba918d86c26"],["/images/c7_img.png","5b9c9e0331aca2a9d47a2730512f34f5"],["/images/c8_img.png","be9107995f185e3bbf7186c4dff69f42"],["/images/c9_img.png","642a2e762b74a28d2426af14f2b864c1"],["/images/calendar.png","86319b08b93be7c8bc47cdba7a169563"],["/images/cataimage/b1.jpg","e4795ce34b4d070d251c37a2ae5e37eb"],["/images/cataimage/b2.jpg","e1a7402c7d111b33d22c187a794e693d"],["/images/cataimage/b3.jpg","c091fe2a8024b2f010911e9af8091147"],["/images/cataimage/b4.jpg","1a2190b3e7ecb404767f029642adb637"],["/images/cataimage/b5.jpg","2683b29be7ea536b2d2c0b428ab87a80"],["/images/cataimage/b6.jpg","8eba752c28594ff5a253a01c0904a4a4"],["/images/cataimage/b7.jpg","9259255b1e1ec36bf92b4f34ad68db7f"],["/images/cataimage/b8.jpg","beaae9e5c735657f2e5bba9eb3deb754"],["/images/cataimage/b9.jpg","7ea8994ee380e84190422ac1b1d93ed8"],["/images/clock2.0.png","0a0f122c7a25262fc02ee99df0ef21eb"],["/images/clock3.0.png","8e04375c183c637b65fb50ed40f46466"],["/images/example.png","aaac9983e5d59f919bf282dcff2edb3c"],["/images/foto17.png","28db4c6608ad1ee6b34238cafab25e5e"],["/images/foto2.jpg","be95b922512d004a61f83c97af3e2602"],["/images/foto2.png","0dc07d4e1b00526a273a89dc8b81548d"],["/images/foto3.jpg","551c0616c92c4ee7cc17dd458b3c46e9"],["/images/foto4.jpg","9d1d9fea759a41afc0061866e400339a"],["/images/foto5.jpg","984f618b15372f37d54f507e6f379f10"],["/images/foto9.jpg","b683fc0b998e80ff8f5a3e45e889807c"],["/images/girlpic.png","ff1e8427ed555af639e6d849f8f648f1"],["/images/girlpic1.png","698e5570e821c3cae643cc9777c2292e"],["/images/girlpic4.png","551882e4b9b6afb79000fd34c0dbf5e5"],["/images/headimage.png","332502f36a0297b30cb7969fe6de8451"],["/images/hexo.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/hexoWT.png","c027cc9f5665c7d7ba657e7a4bb40017"],["/images/his-json.png","7d8a71e38ab684107446e5c72c31854e"],["/images/history.gif","0459a3dcf2317253de0b34482880c63c"],["/images/homework1.png","e8d2f64d0785519ea7779016208a2900"],["/images/idea.jpg","5eb08bf6c965588f03c8860f201cac45"],["/images/key1.png","f2a370e02ad6c5a101db20b47a9a0008"],["/images/key2.png","21dc40bbe0377cd9fe85a9cb431c18f0"],["/images/life-cycle.png","02f39ea5c041d45938fda4b50f234cb7"],["/images/life.jpg","74d2d9c5f48ec59e3badeec690941812"],["/images/listen.jpg","9d4f73cd5634f43deaed4f9aca03f9a3"],["/images/loading.gif","ffa0804a5d99e2d5b39e05cda6d6b28b"],["/images/magnet.png","4899a924f3de0d19dbe0415128c07d65"],["/images/magnet1.png","8d010eb86ca943e036adaa7de57aee7d"],["/images/magnet2.0.png","54fe576f174d2b6917fef89f40ac5975"],["/images/magnet2.png","293cb414a8ab93b43bde3bebf9cf0cfc"],["/images/magnet3.png","1923148630e2e094ff80bf35aa604c10"],["/images/magnet4.png","9bb4f963ac1c09f02d62525f513f492c"],["/images/meilu/1.jpg","cd67abcc3f543b5c66adc4f9d9c5c628"],["/images/meilu/10.jpg","ac9fb2711e477b5db1c3acb57e899045"],["/images/meilu/11.jpg","364caad6dfc356a3dc630fa067e48e88"],["/images/meilu/12.jpg","274767e5708f79934e5bdbf73eda8f0d"],["/images/meilu/13.jpg","dcab12b84454770b208913db63e825ac"],["/images/meilu/14.jpg","037cdd048284e621f27e17a2c59e8ea7"],["/images/meilu/2.jpg","f6cdb65ae3fad4523b32f5ee38696b60"],["/images/meilu/3.jpg","9e5df3612c2d93bf57313186c954aea5"],["/images/meilu/4.jpg","69ef2d6f4bcd79cf4b4e672b60c6751e"],["/images/meilu/5.jpg","ce81ca16def7613b7ebb368fb554f14f"],["/images/meilu/6.jpg","cafd5b62305f806754a75cc3af8c3b77"],["/images/meilu/7.jpg","b8ae865d386e1e713a6034da6b090c10"],["/images/meilu/8.jpg","afad7a7bf1066c817a8d2e7566bc780d"],["/images/meilu/9.jpg","72f9649f56b564eacf23ce3dacb88029"],["/images/metroui.jpg","5503bfffd450d9ab572b67ea00941571"],["/images/metroui/1.png","79a03b408c19c74eeaa8ff6e17a03f9d"],["/images/metroui/10.png","8309fed71a15c78f2dfa3af1ff75a5f3"],["/images/metroui/11.png","aaf1a007cbae12f93cc2688bace18d28"],["/images/metroui/12.png","0758ea282c3828c47e5c64520ff85783"],["/images/metroui/13.png","12ca7b511927cd4b26e97f3b20908a32"],["/images/metroui/14.png","f44ba7680f7b36df437e2ae2588d0565"],["/images/metroui/15.png","e8927c78b125b805af7aa86fee815ab6"],["/images/metroui/2.png","e604d3c662b996f06f22753ba9ab379f"],["/images/metroui/3.png","664e3b7490f2f95d5547b8ba79a65456"],["/images/metroui/4.png","c0f255344cafc303a1d9c7404da37149"],["/images/metroui/5.png","da2074cdb1298aca826abc1a5c441300"],["/images/metroui/6.png","efef2f087127614b4e03bcbe9a347018"],["/images/metroui/7.png","a4d34b1a2dbe3a58d3a92276880be039"],["/images/metroui/8.png","1d34a626bbaa898a60d4501936bcf962"],["/images/metroui/9.png","0663697c1667b377fe2623bd65e00b31"],["/images/metrouilogo.png","aea81b42d1c2c96440f74cf56ad82e2f"],["/images/nhkimage/2020.08.01.png","af4c55b2ae1d5ab2f56c75a87fcdfdb3"],["/images/nhkimage/2020.08.02.png","c355d41b90f5c65823f96c5f6868ce53"],["/images/nhkimage/2020.08.03.png","fddcedb40d7f28b2ccb90814351ad5c8"],["/images/nhkimage/2020.08.04.png","8b4518ec5a8513f442980ed7167136b1"],["/images/nhkimage/2020.08.05.png","590abfb19334b0c3cee5a005674f2253"],["/images/nhkimage/2020.08.06.png","d469e21100c42435e88f2bdf07f93da1"],["/images/nhkimage/2020.08.07.png","3ca9e2c8b8a09a38423d73cd36e8de9d"],["/images/nhkimage/2020.08.08.png","4420c2d899fe4eb90c48bae0da8418a2"],["/images/nhkimage/2020.08.09.png","df14be338f9c920818dd1daa6aa955ee"],["/images/nhkimage/2020.08.10.png","c4e2ed023cd3dbfd4986add35ca9357c"],["/images/nhkimage/2020.08.11.png","cf562339e57f673d394f3e6cdd1f60cb"],["/images/nhkimage/2020.08.12.png","81dfa179fea3052ddcf73912ea368f67"],["/images/nhkimage/2020.08.13.png","8cf26c2642e7a27cbd86fcbda8bae8d9"],["/images/nhkimage/2020.08.14.png","d88eeb678b3ed3651d597e61957e264a"],["/images/nhkimage/2020.08.15.png","b9879f193867edcffeefce62c9dc7153"],["/images/nhkimage/2020.08.16.png","46cb914aa1d556561897767ec9ff66a0"],["/images/nhkimage/2020.08.17.png","ea1af9645b5cc9cbaafe70a91dd15cca"],["/images/nhkimage/2020.08.18.png","e87e4de39a6f06cf4283a63af92dd8de"],["/images/nhkimage/2020.08.19.png","8001a951513b542a98ce1151be5bd87b"],["/images/nhkimage/2020.08.20.png","4bc8fafa3ecce30d340b1350715d78e3"],["/images/nhkimage/2020.08.21.png","07ad1337e127922abff27da6c672549b"],["/images/nhkimage/2020.08.22.png","b2b5d53ba46015f64048f9d803b12179"],["/images/nhkimage/2020.08.23.png","225af8c0cabe5218ec634d1b8815fd95"],["/images/nhkimage/2020.08.24.png","1d54a484a6e2395aabe9be005cd90361"],["/images/nhkimage/2020.08.25.png","8008ba169cfce0ef2041329cd29b6b77"],["/images/nhkimage/2020.08.26.png","72a2b8094003a54c97a34ea97cf21bc3"],["/images/nhkimage/2020.08.27.png","893407e604804d215c8fef8bcd5f2684"],["/images/nhkimage/2020.08.28.png","b542280b7341759890a99cbd44d822c5"],["/images/nhkimage/2020.08.29.png","620e2e7d4772e39615fd1a88cdf49717"],["/images/nhkimage/2020.08.30.png","f645d7ba2dcb506f9ec6fb9244425ad7"],["/images/nhkimage/2020.09.03.png","c5262f3aa87190e0273383ea1e445681"],["/images/nhkimage/2020.09.04.png","c07149c32aa41c03bc7dac82a713f6b2"],["/images/nhkimage/2020.09.05.png","4e43556e1cb3b7f4d75f0f6127616a54"],["/images/nhkimage/2020.09.06.png","1021d2ae04a7f109404f857a2a7629cf"],["/images/nhkimage/2020.09.07.png","db9827e9f0a4cf1401b559b4644a0204"],["/images/nhkimage/2020.09.08.png","efe1030b73dc1c01f169c3122a194426"],["/images/nhkimage/2020.09.09.png","f6ba3a1c6cdeff88404ebe2a646f2eb5"],["/images/nhkimage/2020.09.10.png","3471b05d02113517359a9e2167befcfa"],["/images/nhkimage/2020.09.11.png","921a541a8bffb1aa436df2eb6db7c99f"],["/images/nhkimage/2020.09.12.png","a51f8ebaddba69bb80f9259a30f17e65"],["/images/nhkimage/2020.09.13.png","0399889200493cd2154ffc407e2bc400"],["/images/nhkimage/2020.09.14.png","eaaf3da69a39ed316b7fc8c4d409bb0f"],["/images/nhkimage/2020.09.15.png","5774959ea4061c9298ea174f0862cc3a"],["/images/nhkimage/2020.09.16.png","0c5a00f74020740fda589c02e4b3f917"],["/images/nhkimage/2020.09.17.png","b5aef734e3a7db4862ca3fe4e6769dc2"],["/images/nhkimage/2020.09.24.png","5982a7b3843f4ae43b2b4bc4b0c577d6"],["/images/nhkimage/2020.09.26.jpg","c6415af781fbdd36fdb034f74646129b"],["/images/nhkimage/2020.09.27.png","27aa6f6a8d5534ccd99cff261dcd9eb6"],["/images/nhkimage/2020.09.28.png","0f4318d1ff17a33de364432a1c44b5ad"],["/images/nhkimage/2020.10.09.png","6408d9f7e66fdeba8b9207939a08cf8d"],["/images/notop.png","d25c272e5ce312a880e04ce8a0b27683"],["/images/pasted-0.png","552608d8f6e39369aa30c6e332a32826"],["/images/pasted-1.png","baafdacee93c99e99418aaedbf524fda"],["/images/pasted-10.jpg","395cff6f64ab5df19baa3572ac98e541"],["/images/pasted-11.jpg","56e5df07c96634638abf7995b25c81ab"],["/images/pasted-12.jpg","61b3f803b85ce3640d7a9ba7efb9da6b"],["/images/pasted-2.png","2f410e53c811f92a6135f48857776f5e"],["/images/pasted-3.jpg","bb5717e691e87355e7d63a5f3a87ae62"],["/images/pasted-4.jpg","10041d0e3567b24b81222ec5075d6492"],["/images/pasted-5.jpg","ac5047a4b48c6cdaee86fa1863e33904"],["/images/pasted-6.jpg","1556ae8d3ad5713d60237ee4d10e81f0"],["/images/pasted-7.jpg","913fde1686587646ddc663bd810cc81d"],["/images/pasted-8.jpg","fc83268081fb4b6b6ecb1ffa1ec5af7f"],["/images/pasted-9.jpg","25e0fa3496591501f5c29d0b802b77d2"],["/images/pet.png","2b8c121909497e57057478856fe48a94"],["/images/pet2.png","dfb1d6a17b527ccc0c600e6ad31f55e5"],["/images/ps1.png","0917ba91f21b6944dc08d35c41a326d2"],["/images/psb.jpg","6a27c58337875c776af0a7667598b401"],["/images/quse.png","7cd1ec12b804305430cb4cdc09c7a893"],["/images/rain.jpg","9c26acc44c692b6a63e134be07b07c18"],["/images/rainsmall.jpg","e8c91c40bef224fc5a3942bd0d007b84"],["/images/shezhi.png","281bf545f6a4024e2d0b7120bc398a21"],["/images/soul.jpg","d97b4099c0728ff6123d006fa62db86e"],["/images/study.jpg","a9b1cf95ee6bd9f3913e8ec6a6a6f44f"],["/images/tianqizhizi.jpg","dd48d78b4eeaaa52578352f9ef570b14"],["/images/vue.png","cf23526f451784ff137f161b8fe18d5a"],["/images/vue1.jpg","8cbf18302c6fa72e2a40d0cca0832213"],["/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/images/work.png","e521cf5b834292fde1c50e0a0f5802f9"],["/images/xiaoguoyanshi.png","994a3b710d36df0a4630cd9a768c7f7b"],["/images/xiaoguozhanshi-m.png","1fefca18214fc4889d1bb76b81887c9d"],["/images/yao1.jpg","9dfddaf8c121fc8db788a87d133d6376"],["/images/zfe.one.png","b41f689341882058ffb28c4cee499bde"],["/images/幻想终结之日.png","0025c4d3973bdfedb80db3f78c59fa47"],["/images/时空战纪——游戏建议及意见①.jpg","1337457f14a8dffee66d94f8915b54ff"],["/images/简历.png","d70507ee4615c9e324578c0d777e6855"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favicon2.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","c1f3cba12c0b513e2afc3eef0c601482"],["/js/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/APlayer.min.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/airvisual.js","71cf86bfd452ca01d92438d8266416ee"],["/js/airvisualapi.js","6931bebe1696688d109963187fc2eace"],["/js/artitalkkey.js","ad2c74320c63125a36319659657d2886"],["/js/background.js","94c8410b174f58594cf81ec99054968b"],["/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/js/calendar.js","a58e02711cc6dec4dc04257e555b8923"],["/js/catalogMagnet.js","693e8ba15bda3653f83c20b2fef099e0"],["/js/clock - 副本.js","405186e7a9d73221d2d50c0dea2852d0"],["/js/clock.js","2fdceb94cc57b551cd245b0001927b66"],["/js/color.js","3730bb4f7b185e6f5130ac28bace968b"],["/js/dan.js","6b6ae6b7f1b42dd4857541f43b2bb733"],["/js/echarts.js","dc1227b1eba1ba47fd185a387d0a7d37"],["/js/gitcalendar.js","fadfa8a42272cd322118653dca512a7a"],["/js/history.js","20459f7db325e597e64903f4c0d19306"],["/js/historyroll.js","a3e9ac376106816c50a61f9f4306d671"],["/js/jam.js","462c07d3b2e0f20394d994bbcfae37cb"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","455fface5a0a3ff90766ca254affe502"],["/js/rain.js","f656dc28e4ab5c3f8414d35f683278c1"],["/js/rainremove.js","ceacf82842b101f7e54a2aaf5f4bb9cb"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["/js/shuo.js","1076b1ef51358cc11b6ff3bab25e15d8"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/link/index.html","cb5a1c965a38e0f600aea669dc1e4dc9"],["/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","cef1a2115fcdbfe63753f0a778e62fa9"],["/page/10/index.html","4f7d0314ddab066398589413b92e4e56"],["/page/11/index.html","50002a4b16967ff5fe8ea0adf15cd0e2"],["/page/12/index.html","f5e3b915e653b6f9315bc9723cb7cf1e"],["/page/2/index.html","e4c34860a2efbd6ae4e3fe88dadaf5c3"],["/page/3/index.html","a9742b72142f8956269b27a6cb3a1941"],["/page/4/index.html","a383bde9ace72faf6fb99900e4fade20"],["/page/5/index.html","3861facb727d5dad149d82bc3095aa30"],["/page/6/index.html","42e11586a4921dcdc8a522d9d233fec0"],["/page/7/index.html","461f514f80e814661bfc243d81ea4fb2"],["/page/8/index.html","bb59a2eb48a5ab5e72e775ccb5dd3530"],["/page/9/index.html","a7d196fd41a04df70c7a7fc0e82485b3"],["/research/index.html","ec6a41007fd11c118f200e7bc4ea21c4"],["/sw-register.js","79b5b81b66235ac7ffc15fbcac73596a"],["/tags/Butterfly主题/index.html","6fc7747acf58bf225905c9b7e05057e1"],["/tags/DIY/index.html","8b88c4d4a0693a8eb95e7e64cf5182fa"],["/tags/DIY/page/2/index.html","fc4c7cd366244ea64da2c91e7674389f"],["/tags/ICT/index.html","e768b036190ca6a59475271cb8bfe016"],["/tags/NHK听力练习/index.html","3bbfd1f75fba63281ea94960c865012c"],["/tags/NHK听力练习/page/2/index.html","9c5b548ec535d2e2b3adc724d17b7e56"],["/tags/NHK听力练习/page/3/index.html","7950353b3133a7fafd4758f9055bf690"],["/tags/NHK听力练习/page/4/index.html","3b6aca945402e757f8e89371675c7ae8"],["/tags/NHK听力练习/page/5/index.html","fc3fc159fc9897f3ece0a3a7894899c5"],["/tags/NHK听力练习/page/6/index.html","5dc16b4ab54e9ebf412cfe1708eef032"],["/tags/metro-ui/index.html","0ce6b8b58ad936d549987d147fd3f47b"],["/tags/vuejs/index.html","289421348686d03356842535244cc5ff"],["/tags/お盆/index.html","d787e5e028320ced9d1687bdda91a7f2"],["/tags/世論調査/index.html","0322d0d0424683d446602b5e9617e218"],["/tags/作品集/index.html","898ddc7ec5be1fa96e7532e3e8bb08c0"],["/tags/作品集/page/2/index.html","2965304b435d43b59ebbd0276ea8fd5d"],["/tags/农业/index.html","123e12955b045e28b3494af7de86845e"],["/tags/历史/index.html","381edd44706a5c516527d0c73fab491d"],["/tags/営業時間/index.html","a2094b57fd1896fb3b90378d3becd16f"],["/tags/国外政事/index.html","cf0b0dfdfee7163f99486c621d331e14"],["/tags/地震/index.html","ffa953b78ab1f0e0cf7966571ef6421b"],["/tags/外国政事/index.html","8a3241d40aba7a15b4a38c9b1a4abf3c"],["/tags/天气/index.html","daa8b20f259a6d97e6d287b6bb63b079"],["/tags/天气/page/2/index.html","c537277f6cf99a8701d2eb48915657e1"],["/tags/奥运会/index.html","74aa887037f84ce5f1d4f0afe8ff841a"],["/tags/学习/index.html","55b8534852bd25c06424401ed39c6f03"],["/tags/学习/page/2/index.html","1e092b502473b4644cde6ae5290e23cc"],["/tags/学习/page/3/index.html","e7cb85e7721a50c7d1b67ee02b974882"],["/tags/就业/index.html","37480ac8a1fb160827cc05d896d758b4"],["/tags/庐山/index.html","b2acc5c060239eb6d734a9d62d962e9c"],["/tags/座礁/index.html","2c72700e5ca52c8f77b90bf99edd2b37"],["/tags/政府/index.html","34f9a29813e069dfab864d6729dee021"],["/tags/政治/index.html","4082dd4241b6b3b78087a4edb55b3d2d"],["/tags/教程/index.html","9d3942946ac54c7c614ecac34645c21d"],["/tags/教程/page/2/index.html","27e2fecbf937b28f441f6dec68c204f9"],["/tags/日本教育/index.html","9fa127c917684845e8b2aa0c8156b3f4"],["/tags/民生/index.html","c47b93fd08a50ab1465367cd137a6b86"],["/tags/民生/page/2/index.html","3c1162d0bd9b9ba206a84d85e192a048"],["/tags/游戏评测/index.html","f9034c9df35f85bfaeacc7370e84c96b"],["/tags/游记/index.html","d13f4aafa6555b2887cd8dc9c351a71e"],["/tags/生活趣闻/index.html","d454d5368b327962b54f5b904422f516"],["/tags/科技/index.html","b0c27d439c82259494599a363032f13c"],["/tags/经济/index.html","eeaf5dac2cd3f8f29e3d3f00f68e325c"],["/tags/经济/page/2/index.html","6c89f8e54683d9d6423916a76341a6b3"],["/tags/网络教学/index.html","a6d4bad279ffb9ea1c52416b408dd092"],["/tags/舆论/index.html","1d2bfa6c55140bd88fc37ef4b1bc8542"],["/tags/虚拟现实/index.html","e7c0e61685baf94e6ba9c3ddb27ba8bc"],["/tags/随想/index.html","0e9295809845a828143c3e4fb163efa8"],["/tags/障害者/index.html","6a1e51f8479dcf003831d37f7bb3d440"]];
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
