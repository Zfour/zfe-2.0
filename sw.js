/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/05/20/2015-05-20/index.html","a05b1975a0846c1b5e10cd724d4c158a"],["/2015/06/16/2015-06-16/index.html","d3033305273f5402dc7c095617d6660a"],["/2015/12/12/2015-12-12/index.html","f7c3db7303e6c5a206d9f5d81e11eb7c"],["/2016/06/08/2016-06-08/index.html","afa532ae2c0ccf2c9959c79c1b53f054"],["/2016/12/18/2016-12-18/index.html","ec000989f6b23b5deff66c2faad28b38"],["/2017/02/17/2017-02-17/index.html","3fb578c201fe1aef866ef1d181f0f049"],["/2017/03/17/2017-03-17/index.html","7148176876cdcda04240784e2f0d35bf"],["/2017/04/06/2017-04-06/index.html","67f1031007809aa88075d6ffabaebcd6"],["/2017/05/17/2017-05-17/index.html","b640ed380b7b0e76155be1515147ba54"],["/2017/08/15/2017-08-15/index.html","77dfcead68bbae432978ebb56d9e9058"],["/2017/09/16/2017-09-16-1/index.html","50b0268d0d19d2ebda46efe29d446816"],["/2017/09/16/2017-09-16/index.html","f1236cbdc71396938862624b301b8d74"],["/2017/09/21/2017-09-21/index.html","014055fdd6baea8ec6bef1b77f689045"],["/2017/09/23/2017-09-23/index.html","48f6e7ba0fcc26b152a0f07afda45d3e"],["/2017/09/26/2017-09-26/index.html","f5fbb5afb2ac4b90b07cb0011f5ee448"],["/2017/09/27/2017-09-27/index.html","969f7180316c2410d1e3b5abd1742d31"],["/2017/10/04/2017-10-04/index.html","69d1a144740dd41963aad86322d840ce"],["/2017/10/08/2017-10-08/index.html","42cd711966f688ee0befc3719163dde6"],["/2017/10/09/2017-10-09/index.html","147f7bf4ec70a387efe2fab9165a6038"],["/2017/10/15/2017-10-15/index.html","222d12bcc6b8feba7ee827e8cd0d8a79"],["/2017/10/19/2017-10-19/index.html","27b6bc06771c11a617e19916448f6998"],["/2017/10/23/2017-10-23-2/index.html","ef228c4c79d3929236249fe6be434d28"],["/2017/10/23/2017-10-23/index.html","3d8c6f2aa811f1f5bc9fd0e0b83ba653"],["/2017/11/08/2017-11-08/index.html","e463de38d29e3c8a7ff94d400d059c6e"],["/2017/11/12/2017-11-12/index.html","d328a9868cbbac02bb660e338e6086f6"],["/2017/11/15/2017-11-15/index.html","722d63aa204058e943b5c7afdce15223"],["/2017/11/27/2017-11-27/index.html","993f2a704815e1901bc04063cdf707f4"],["/2017/12/06/2017-12-06/index.html","3bc8237e52c516ff2f81f84f4ee8e1e1"],["/2018/02/12/2018-02-12/index.html","0f1b9ffc43ba46599668358df81a7e4c"],["/2018/03/26/2018-03-26/index.html","f9e7d2c149722c36528a269a734b734e"],["/2018/04/02/2018-04-02/index.html","9e48683cbd01e1170ec4b69b6ee27bce"],["/2018/04/24/2018-04-24/index.html","278d86f8887002e13952d95356f7df53"],["/2018/05/18/2018-05-18/index.html","bb0de49514a0f1544836d6c6414e0a5c"],["/2018/05/23/2018-05-23/index.html","cdcb273344c92244131202472df54fc1"],["/2018/06/08/2018-06-08/index.html","ccbb296410d729e6f605ea9309ad0cfb"],["/2018/07/01/2018-07-01/index.html","8e5454ec6a263f0e8dfaefb88bd466cd"],["/2018/08/30/2018-08-30/index.html","a305a5ae481ef959d8f1f2046cf4b9f7"],["/2020/07/20/2020-07-20/index.html","ec6ff275917aabde6cb79fd41ffa7e2c"],["/2020/08/01/2020-08-01/index.html","75394d7451780e0a31faea4724916a4b"],["/2020/08/02/2020-08-02/index.html","008db58493dae25a6aa0c1a9c215afc9"],["/2020/08/03/2020-08-03/index.html","01e2ce3235487c9d117470c009461f4a"],["/2020/08/04/2020-08-04-1/index.html","33dd2c1a220ebd01808109d262e1aff0"],["/2020/08/04/2020-08-04-2/index.html","743a7235e5c188018ffb1cfc1dc63831"],["/2020/08/05/2020-08-05/index.html","acbec8a68b476098f6d46941e07f36c2"],["/2020/08/06/2020-08-06/index.html","9b882b7300bff92e8cf1806647fd0a02"],["/2020/08/07/2020-08-07/index.html","9875966c4947ef569f1fe3504a03a412"],["/2020/08/08/2020-08-08/index.html","41b2fbaca5054718eb1f729fad30ae1d"],["/2020/08/09/2020-08-09/index.html","0326f16db24e31620c311cb83d39885b"],["/2020/08/10/2020-08-10/index.html","6df3f2ab52646828ed4dfbc6591506f5"],["/2020/08/11/2020-08-11/index.html","18eff35527782337ae7f1f3786c30f2e"],["/2020/08/12/2020-08-12/index.html","67c0c911a2737457e3c89d3710e652ce"],["/2020/08/13/2020-08-13/index.html","059fe8a5f19425f8cc449d69d323e32e"],["/2020/08/14/2020-08-14-1/index.html","bde2fd617cc782001ed6905ef1869519"],["/2020/08/14/2020-08-14-2/index.html","0be4a44821a875deac18265208d2fc6c"],["/2020/08/15/2020-08-15/index.html","c647d482461d64ca38a74b953d89b9a1"],["/2020/08/16/2020-08-16-1/index.html","08d3abd4803f3f8fe703433a57b62974"],["/2020/08/16/2020-08-16-2/index.html","c02b1eb3d4c6097982e625e38ade29bc"],["/2020/08/17/2020-08-17/index.html","db42bbf92a0618de7592b00007c55a93"],["/2020/08/18/2020-08-18/index.html","3c71882321431928156bb3416de7c348"],["/2020/08/19/2020-08-19-1/index.html","f922558dd22863f1357ddb8746661630"],["/2020/08/19/2020-08-19-2/index.html","6bd98b25c3359830591b99460f594151"],["/2020/08/20/2020-08-20/index.html","e0273b20193cbd489732b20a53fc1f3f"],["/2020/08/21/2020-08-21/index.html","c01b3231c445d98b76f139e3c7c17d25"],["/2020/08/22/2020-08-22/index.html","aed1c2662d10317583adea4489cd6ec1"],["/2020/08/23/2020-08-23-1/index.html","28c0bcc26b6f36ceeb6ccb04a431de67"],["/2020/08/23/2020-08-23-2/index.html","b7d6bd5829235ccc907747a1e91d9281"],["/2020/08/24/2020-08-24-1/index.html","2c4b6425443d937f7ffd582577ff829a"],["/2020/08/24/2020-08-24-2/index.html","ca4406fe9c348c1093b4048033e33663"],["/2020/08/25/2020-08-25-1/index.html","76258a0c3e1a7e8116a0eaa0eec8008d"],["/2020/08/25/2020-08-25-2/index.html","cede4d5713261cf6f7a3d02aa2c746ce"],["/2020/08/26/2020-08-26/index.html","f9321a97176aa656b0f92297c8eb4a05"],["/2020/08/27/2020-08-27/index.html","db6cb72f9bb55b639dd41785ed58e626"],["/2020/08/28/2020-08-28/index.html","2f677aa1cf9dffd0d0ab92f242747273"],["/2020/08/29/2020-08-29/index.html","9a421ee8df072ceac31afce7356dbd9d"],["/2020/08/30/2020-08-30/index.html","43f3bfaa2ca1dddbb4faa6b1c9349c8a"],["/2020/08/31/2020-08-31-1/index.html","a43a73bf23c38acd28d5c4f1abbe3511"],["/2020/08/31/2020-08-31-2/index.html","6d55e3daade9dff2af1f2316c4413a62"],["/2020/09/01/2020-09-01-1/index.html","9ad2d172ae5d7436e83c1c0fbc1310f6"],["/2020/09/01/2020-09-01-2/index.html","1884178d3a2408535b27d97b16b1c385"],["/2020/09/02/2020-09-02-1/index.html","a647baf69b7fd9a8503774f4b9c0d8e4"],["/2020/09/02/2020-09-02-2/index.html","01951e6b000c1928de2b1b2025dc99ba"],["/2020/09/03/2020-09-03-1/index.html","0bd1071ee4bf0fb60c1ee009bc1bd1ab"],["/2020/09/03/2020-09-03-2/index.html","f8c9aa5fe636930fec90a34b34176c0e"],["/2020/09/04/2020-09-04-1/index.html","d7e4e437765bafd6fea7fe5cc29ded7e"],["/2020/09/05/2020-09-05-1/index.html","e5a5c3e9604f48f4ec4d35646eb30fee"],["/2020/09/06/2020-09-06-1/index.html","7510ee0624c9839af45163a7461966ce"],["/2020/09/07/2020-09-07/index.html","f857419b38d95701c7c1e7bcb63d0263"],["/2020/09/08/2020-09-08-1/index.html","e5e3c49b4672dcd64d59ce246b9979fe"],["/2020/09/08/2020-09-08-2/index.html","86e6bd17f42ac63468fd50a0c82e3c8f"],["/2020/09/09/2020-09-09/index.html","818f5f49f4b62af6696a36f509bef83d"],["/2020/09/10/2020-09-10/index.html","ab98b65cce4eed3434e9ba53229e4e9f"],["/2020/09/11/2020-09-11/index.html","69663021d7655ef3c15316ac57f48c8d"],["/2020/09/12/2020-09-12/index.html","a882426fc2e465e569137fc0303b2e29"],["/2020/09/13/2020-09-13/index.html","be57c1510e27d011761c40177e6fbfa2"],["/2020/09/14/2020-09-14/index.html","bde4717d10dc743a83860694f5ea3622"],["/2020/09/15/2020-09-15/index.html","01f6b0124b43ed9f9419f2cfe8b5f978"],["/2020/09/16/2020-09-16/index.html","c140c20e18a72126aa611be97904026b"],["/2020/09/17/2020-09-17/index.html","bed811642198f31ca13299f8fbc14c7e"],["/2020/09/19/2020-09-19/index.html","f47806d216a032b66fc86b3a58718b7e"],["/2020/09/23/2020-09-23/index.html","76fd820ebc702d122f9c43ccc998ac1e"],["/2020/09/24/2020-09-24/index.html","c573af6b28e668837afbef61de84a555"],["/2020/09/26/2020-09-26/index.html","faa4c5285c8747c4ad43ede5fc7e01c8"],["/2020/09/27/2020-09-27/index.html","1e2caba052a5c593d91e011851911fdc"],["/2020/09/28/2020-09-28-2/index.html","846de4fc867d3c20e0ce1a845fb585a6"],["/2020/09/28/2020-09-28/index.html","ba4a191eb6e23f4d3dc5a20c299acfdd"],["/2020/09/29/2020-09-29/index.html","56b36fcde3a56c5820a6e0522a7ec084"],["/2020/10/03/2020-10-03/index.html","fdad1b0f38a549051fe701246b113a30"],["/2020/10/04/2020-10-04/index.html","e24b21687af9b169d0ab96a04e4c4217"],["/2020/10/09/2020-10-09/index.html","8b66f90481e177491f87313d7bb4750c"],["/2020/10/10/2020-10-10/index.html","b32b718fe227043b043084c149edaa7e"],["/2020/10/11/2020-10-11/index.html","f38ebfe6a4c36933cfc47ce0565f9d39"],["/2020/10/12/2020-10-12/index.html","944f9ba3184dde4a482f9592f40931f0"],["/2020/10/13/2020-10-13/index.html","214ca43025e0ba917bd09ce883cd77ff"],["/2020/10/14/2020-10-14/index.html","a131d2bd22d3df00af6be31b4d1280cc"],["/2020/10/15/2020-10-16-2/index.html","d2f888913c516ece6d494063da9ede5e"],["/2020/10/16/2020-10-16-1/index.html","75eb0f1c2f4706faeb64b7fae3b08098"],["/2020/10/18/2020-10-18/index.html","cbd164a5b87caaa3ee1743eebe0ca7ff"],["/airplayervisual/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/airplayervisual/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/airplayervisual/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/airplayervisual/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/airplayervisual/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/airplayervisual/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/airplayervisual/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/airplayervisual/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/airplayervisual/index.html","aa08901af13dbcbc7e4003d261fd1f8e"],["/airplayervisual/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/airplayervisual/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/airplayervisual/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/airplayervisual/js/jamsetting.js","7927507e0080ddf55c6d8b5f526bd942"],["/airplayervisual/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/airplayervisual/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/airplayervisual/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/archives/2015/05/index.html","5cce9b1ea2b23c61e6049856d837b4e4"],["/archives/2015/06/index.html","60ef4a3a577455ba3e07c010a6249822"],["/archives/2015/12/index.html","e8699b05f8e7ff6c1075986781255217"],["/archives/2015/index.html","54c5473ed39adcf6e69dd9c6e002878a"],["/archives/2016/06/index.html","ac856fdc3d62499ee5c6178e3b166c4f"],["/archives/2016/12/index.html","6d03afdc2d49d8ff73d02094b3b0d43c"],["/archives/2016/index.html","173ce0b22f0b223bec2cd95bd8856643"],["/archives/2017/02/index.html","51a6def7189f18ad255e7d24dfbcbdbd"],["/archives/2017/03/index.html","76bc93991629990c7a2b5e13c74e743e"],["/archives/2017/04/index.html","9be887536cb4ea4c1c57ec4f98e47e95"],["/archives/2017/05/index.html","942eeb0ca7b9f235938b125f449b6542"],["/archives/2017/08/index.html","567ed587c596ac3163aaece04fa792b3"],["/archives/2017/09/index.html","ac513f38bb711f8f5f8cb9fe2a57f736"],["/archives/2017/10/index.html","4c45db03443c6f8327fdfc59d41856cd"],["/archives/2017/11/index.html","535193c851180182454870bc1fc0f36b"],["/archives/2017/12/index.html","1dfffa08789a5e5480150af3e8a74f62"],["/archives/2017/index.html","ded08a5d395be13304a4960c2925ae60"],["/archives/2017/page/2/index.html","3efec26bad6030d3e8af99e52cb42b25"],["/archives/2017/page/3/index.html","18b10e20b44faa093665d4581454561d"],["/archives/2018/02/index.html","ecc544623073d637f1745252d8d57009"],["/archives/2018/03/index.html","471373f36389a9528faebd965868c653"],["/archives/2018/04/index.html","86c39d1edc80a17a166eee605c370441"],["/archives/2018/05/index.html","8dc85f35f56442194e58874cd1f69033"],["/archives/2018/06/index.html","0e40e83bda1c71db960ea18ea111572d"],["/archives/2018/07/index.html","d99403d39988df63de5968ccc46f20e1"],["/archives/2018/08/index.html","c76df86e4f3ccf01922bebb0e19899d8"],["/archives/2018/index.html","482af2f48b8986ee8bab59f11e18ea51"],["/archives/2020/07/index.html","97964542a24b1a98d4ed40685ffecab8"],["/archives/2020/08/index.html","fcf257efb2c8efa7c7e18e299cd10934"],["/archives/2020/08/page/2/index.html","b33ecab78f6c212e3f8f88312373a92e"],["/archives/2020/08/page/3/index.html","f33d69624a3212b450b172cabf2db834"],["/archives/2020/08/page/4/index.html","004b7924dc370b2e8e542e0595d786c2"],["/archives/2020/09/index.html","c7b3ad775342eecae233f5f2fa5201c7"],["/archives/2020/09/page/2/index.html","a8aff5b712ae87c98da9d75a1f3f3b60"],["/archives/2020/09/page/3/index.html","0485ffd4727078340345e24c513262ad"],["/archives/2020/10/index.html","ee7477f09230a4ee4bf74d956b2a5028"],["/archives/2020/10/page/2/index.html","a2d42be890253826e8f9f40ddd852b8d"],["/archives/2020/index.html","48507684db55e3de9efefe54d1a3ebab"],["/archives/2020/page/2/index.html","62d531366c420e6f4f2c8e9caed40277"],["/archives/2020/page/3/index.html","d8ecad3cae61ee0127385f39e9f7d0e5"],["/archives/2020/page/4/index.html","78de6692da35806c0371e67b47df66ca"],["/archives/2020/page/5/index.html","530309339f8d87ea196dda2e3c8bd6da"],["/archives/2020/page/6/index.html","76b82108291df366ddb778f2f3680fb8"],["/archives/2020/page/7/index.html","3257bfbe76ff63352b64538cc4482dcd"],["/archives/2020/page/8/index.html","6bbcb5a8d1569aa18e3a58b5cd2a9c9c"],["/archives/index.html","52942c4ea992f542e4fe39efd106c322"],["/archives/page/10/index.html","ba02ef9a3b52d51a0618e97702740d52"],["/archives/page/11/index.html","40a46a9bc23cd2bcab440e427460b513"],["/archives/page/12/index.html","1353c0d19d6276a5dbf042d3f34e53ca"],["/archives/page/2/index.html","20eb770c83379563e35c0befa0671636"],["/archives/page/3/index.html","7087cf38c02420b136a3c085576c01ca"],["/archives/page/4/index.html","eeedda5e4362db0acf5e2dfbe437dde1"],["/archives/page/5/index.html","353ac4b254b8a1923096a0b12c62ebc2"],["/archives/page/6/index.html","4c4474e5af28c76115d548eb3d8708b4"],["/archives/page/7/index.html","66b5aa73b96bfced41782206aeaa3ae6"],["/archives/page/8/index.html","862c58ca54f5c7c9cbd4c120712c3eff"],["/archives/page/9/index.html","3c5adba491a33f056aedabb79ccab6d7"],["/catalogtest/index.html","b45d8bdf5cf9bc3f147ed01eb83d9866"],["/categories/NHK听力练习/index.html","c0a8a4446ec57620fd5350f9445275af"],["/categories/NHK听力练习/page/2/index.html","fb415013bf873137e7876244c92fe891"],["/categories/NHK听力练习/page/3/index.html","3a9d3d12a03423db768d116416e0f6e2"],["/categories/NHK听力练习/page/4/index.html","fe1c34a4209beef05745341f12824dfc"],["/categories/NHK听力练习/page/5/index.html","b1391b7987829a068e18699672d42c8f"],["/categories/NHK听力练习/page/6/index.html","932aae3993171dd95d418a4f16c98358"],["/categories/vue/index.html","c7d16a2042fe31455d3693e4c5d8ae08"],["/categories/作品集/index.html","ffbc9a0479c5fa9150c015868d0bfed6"],["/categories/作品集/page/2/index.html","04fd91c740a92d43fedb8dc9d14ccc6a"],["/categories/学习/index.html","58b038a9c6b77a2bfe2b7a865ec8cadf"],["/categories/学习/page/2/index.html","1ec9dc14c4d5f9584474aabb54d83535"],["/categories/教程/index.html","52d5288ab6e600dcac17848d26e218b4"],["/categories/教程/page/2/index.html","f1423ed13fd571797e6838b46e1afc02"],["/categories/游戏评测/index.html","ac73626b68d2142063f30ad63ce087a5"],["/categories/生活趣闻/index.html","f4491c64900a147a053d8b2c43ce3d9c"],["/categories/随想/index.html","bc440fbf35bd83bbc2be4e54f9873fa8"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/addcss.css","d20fc732e0cc7996bd82c5170b7aaa86"],["/css/background.css","9ae3e08462ad0a5c0ed33136b0dbbfc6"],["/css/calendar.css","0090a32d2a61d42c5bfed254bfba078c"],["/css/clock - 副本.css","65602c2385c7eab42ee3804cd6ee0a5a"],["/css/clock.css","9db53e3bffb704c740aa83bddaf8b999"],["/css/cursor.css","f514da9c81fb3fcb4f7e9038dfa30874"],["/css/danmu.css","2a5b914a9592bcd353425c6d5fa7af8e"],["/css/index.css","a830cf7dafed0e1e03142b35ae00f2a6"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/loadingline.css","bc1ee020a6a11fea17b915b97e6978bf"],["/css/shuo.css","8db924024099e925c53d5b3dd22f83c6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/html/calendar.html","bddcec1edba7f4c49fe5cd75f8cdf5b2"],["/html/shiyan.html","23e69a4e956b74d6f0e9d090e529b067"],["/html/shiyan2.html","1350567d13dc80ed44002fb636d02cdf"],["/icon.png","8ec68de45d18642ba9baf2447e62f476"],["/images/AMJ1.png","d27a6725d1aaaf5324248da4312ab6c2"],["/images/AMJ2.png","00e22eba5901e5bd674e42228cd5bd26"],["/images/AMJ3.png","c8c9ea6348dfcad3a641899d5b587431"],["/images/FOTO1.jpg","4b6f100861908e2c7044cffbdb4a0c1a"],["/images/MVVM.png","ea5a002ee2f85c71a0db51d5adb5de19"],["/images/UT.jpg","367f4e432f9db55a92b2a290c4b0a476"],["/images/UX.png","a183974e958d41d1b6acec70bb7ea00a"],["/images/WindowsTerminal.png","8ac29cb56b8a1768cf7de071e9f1ae6f"],["/images/air-w.png","c1cc32f9d3e17551ca11a7d18a0b533a"],["/images/anzhuang.jpg","912b2489957f8344406edc5e5cebe5fa"],["/images/api-setting.png","2c0bb074390779721cba009e96c5417c"],["/images/apikey.png","1f31121b190eb1f990bcc3e27524bc03"],["/images/b0_img.png","43fcaa3f8b394ca5be957f4b860800db"],["/images/backpic1.jpg","86a6fa88167feb338fbf1a4e9057114b"],["/images/c0_img.png","34397085b4d3349034f9b167469ac626"],["/images/c10_img.png","7938c5b0dd789db4f262e5a618943a9b"],["/images/c1_img.png","95211a0ebf07befde1b11477c3a8185b"],["/images/c2_img.png","456ba51725d669fc4d005787753a6b08"],["/images/c3_img.png","a0aa7dcdd2ed5bccec52c16942036a3f"],["/images/c4_img.png","0869cebb60d00a78936b7498823a39de"],["/images/c5_img.png","533774e840ccb3ef13b46201a54be05d"],["/images/c6_img.png","db9eb681dea0b7911f0b2ba918d86c26"],["/images/c7_img.png","5b9c9e0331aca2a9d47a2730512f34f5"],["/images/c8_img.png","be9107995f185e3bbf7186c4dff69f42"],["/images/c9_img.png","642a2e762b74a28d2426af14f2b864c1"],["/images/calendar.png","86319b08b93be7c8bc47cdba7a169563"],["/images/clock2.0.png","0a0f122c7a25262fc02ee99df0ef21eb"],["/images/clock3.0.png","8e04375c183c637b65fb50ed40f46466"],["/images/example.png","aaac9983e5d59f919bf282dcff2edb3c"],["/images/foto17.png","28db4c6608ad1ee6b34238cafab25e5e"],["/images/foto2.jpg","be95b922512d004a61f83c97af3e2602"],["/images/foto2.png","0dc07d4e1b00526a273a89dc8b81548d"],["/images/foto3.jpg","551c0616c92c4ee7cc17dd458b3c46e9"],["/images/foto4.jpg","9d1d9fea759a41afc0061866e400339a"],["/images/foto5.jpg","984f618b15372f37d54f507e6f379f10"],["/images/foto9.jpg","b683fc0b998e80ff8f5a3e45e889807c"],["/images/girlpic.png","ff1e8427ed555af639e6d849f8f648f1"],["/images/girlpic1.png","698e5570e821c3cae643cc9777c2292e"],["/images/girlpic4.png","551882e4b9b6afb79000fd34c0dbf5e5"],["/images/headimage.png","332502f36a0297b30cb7969fe6de8451"],["/images/hexo.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/hexoWT.png","c027cc9f5665c7d7ba657e7a4bb40017"],["/images/his-json.png","7d8a71e38ab684107446e5c72c31854e"],["/images/history.gif","0459a3dcf2317253de0b34482880c63c"],["/images/homework1.png","e8d2f64d0785519ea7779016208a2900"],["/images/idea.jpg","5eb08bf6c965588f03c8860f201cac45"],["/images/key1.png","f2a370e02ad6c5a101db20b47a9a0008"],["/images/key2.png","21dc40bbe0377cd9fe85a9cb431c18f0"],["/images/life-cycle.png","02f39ea5c041d45938fda4b50f234cb7"],["/images/life.jpg","74d2d9c5f48ec59e3badeec690941812"],["/images/listen.jpg","9d4f73cd5634f43deaed4f9aca03f9a3"],["/images/loading.gif","ffa0804a5d99e2d5b39e05cda6d6b28b"],["/images/magnet.png","4899a924f3de0d19dbe0415128c07d65"],["/images/magnet1.png","8d010eb86ca943e036adaa7de57aee7d"],["/images/magnet2.0.png","54fe576f174d2b6917fef89f40ac5975"],["/images/magnet2.png","293cb414a8ab93b43bde3bebf9cf0cfc"],["/images/magnet3.png","1923148630e2e094ff80bf35aa604c10"],["/images/magnet4.png","9bb4f963ac1c09f02d62525f513f492c"],["/images/meilu/1.jpg","cd67abcc3f543b5c66adc4f9d9c5c628"],["/images/meilu/10.jpg","ac9fb2711e477b5db1c3acb57e899045"],["/images/meilu/11.jpg","364caad6dfc356a3dc630fa067e48e88"],["/images/meilu/12.jpg","274767e5708f79934e5bdbf73eda8f0d"],["/images/meilu/13.jpg","dcab12b84454770b208913db63e825ac"],["/images/meilu/14.jpg","037cdd048284e621f27e17a2c59e8ea7"],["/images/meilu/2.jpg","f6cdb65ae3fad4523b32f5ee38696b60"],["/images/meilu/3.jpg","9e5df3612c2d93bf57313186c954aea5"],["/images/meilu/4.jpg","69ef2d6f4bcd79cf4b4e672b60c6751e"],["/images/meilu/5.jpg","ce81ca16def7613b7ebb368fb554f14f"],["/images/meilu/6.jpg","cafd5b62305f806754a75cc3af8c3b77"],["/images/meilu/7.jpg","b8ae865d386e1e713a6034da6b090c10"],["/images/meilu/8.jpg","afad7a7bf1066c817a8d2e7566bc780d"],["/images/meilu/9.jpg","72f9649f56b564eacf23ce3dacb88029"],["/images/metroui.jpg","5503bfffd450d9ab572b67ea00941571"],["/images/metroui/1.png","79a03b408c19c74eeaa8ff6e17a03f9d"],["/images/metroui/10.png","8309fed71a15c78f2dfa3af1ff75a5f3"],["/images/metroui/11.png","aaf1a007cbae12f93cc2688bace18d28"],["/images/metroui/12.png","0758ea282c3828c47e5c64520ff85783"],["/images/metroui/13.png","12ca7b511927cd4b26e97f3b20908a32"],["/images/metroui/14.png","f44ba7680f7b36df437e2ae2588d0565"],["/images/metroui/15.png","e8927c78b125b805af7aa86fee815ab6"],["/images/metroui/2.png","e604d3c662b996f06f22753ba9ab379f"],["/images/metroui/3.png","664e3b7490f2f95d5547b8ba79a65456"],["/images/metroui/4.png","c0f255344cafc303a1d9c7404da37149"],["/images/metroui/5.png","da2074cdb1298aca826abc1a5c441300"],["/images/metroui/6.png","efef2f087127614b4e03bcbe9a347018"],["/images/metroui/7.png","a4d34b1a2dbe3a58d3a92276880be039"],["/images/metroui/8.png","1d34a626bbaa898a60d4501936bcf962"],["/images/metroui/9.png","0663697c1667b377fe2623bd65e00b31"],["/images/metrouilogo.png","aea81b42d1c2c96440f74cf56ad82e2f"],["/images/nhkimage/2020.08.01.png","af4c55b2ae1d5ab2f56c75a87fcdfdb3"],["/images/nhkimage/2020.08.02.png","c355d41b90f5c65823f96c5f6868ce53"],["/images/nhkimage/2020.08.03.png","fddcedb40d7f28b2ccb90814351ad5c8"],["/images/nhkimage/2020.08.04.png","8b4518ec5a8513f442980ed7167136b1"],["/images/nhkimage/2020.08.05.png","590abfb19334b0c3cee5a005674f2253"],["/images/nhkimage/2020.08.06.png","d469e21100c42435e88f2bdf07f93da1"],["/images/nhkimage/2020.08.07.png","3ca9e2c8b8a09a38423d73cd36e8de9d"],["/images/nhkimage/2020.08.08.png","4420c2d899fe4eb90c48bae0da8418a2"],["/images/nhkimage/2020.08.09.png","df14be338f9c920818dd1daa6aa955ee"],["/images/nhkimage/2020.08.10.png","c4e2ed023cd3dbfd4986add35ca9357c"],["/images/nhkimage/2020.08.11.png","cf562339e57f673d394f3e6cdd1f60cb"],["/images/nhkimage/2020.08.12.png","81dfa179fea3052ddcf73912ea368f67"],["/images/nhkimage/2020.08.13.png","8cf26c2642e7a27cbd86fcbda8bae8d9"],["/images/nhkimage/2020.08.14.png","d88eeb678b3ed3651d597e61957e264a"],["/images/nhkimage/2020.08.15.png","b9879f193867edcffeefce62c9dc7153"],["/images/nhkimage/2020.08.16.png","46cb914aa1d556561897767ec9ff66a0"],["/images/nhkimage/2020.08.17.png","ea1af9645b5cc9cbaafe70a91dd15cca"],["/images/nhkimage/2020.08.18.png","e87e4de39a6f06cf4283a63af92dd8de"],["/images/nhkimage/2020.08.19.png","8001a951513b542a98ce1151be5bd87b"],["/images/nhkimage/2020.08.20.png","4bc8fafa3ecce30d340b1350715d78e3"],["/images/nhkimage/2020.08.21.png","07ad1337e127922abff27da6c672549b"],["/images/nhkimage/2020.08.22.png","b2b5d53ba46015f64048f9d803b12179"],["/images/nhkimage/2020.08.23.png","225af8c0cabe5218ec634d1b8815fd95"],["/images/nhkimage/2020.08.24.png","1d54a484a6e2395aabe9be005cd90361"],["/images/nhkimage/2020.08.25.png","8008ba169cfce0ef2041329cd29b6b77"],["/images/nhkimage/2020.08.26.png","72a2b8094003a54c97a34ea97cf21bc3"],["/images/nhkimage/2020.08.27.png","893407e604804d215c8fef8bcd5f2684"],["/images/nhkimage/2020.08.28.png","b542280b7341759890a99cbd44d822c5"],["/images/nhkimage/2020.08.29.png","620e2e7d4772e39615fd1a88cdf49717"],["/images/nhkimage/2020.08.30.png","f645d7ba2dcb506f9ec6fb9244425ad7"],["/images/nhkimage/2020.09.03.png","c5262f3aa87190e0273383ea1e445681"],["/images/nhkimage/2020.09.04.png","c07149c32aa41c03bc7dac82a713f6b2"],["/images/nhkimage/2020.09.05.png","4e43556e1cb3b7f4d75f0f6127616a54"],["/images/nhkimage/2020.09.06.png","1021d2ae04a7f109404f857a2a7629cf"],["/images/nhkimage/2020.09.07.png","db9827e9f0a4cf1401b559b4644a0204"],["/images/nhkimage/2020.09.08.png","efe1030b73dc1c01f169c3122a194426"],["/images/nhkimage/2020.09.09.png","f6ba3a1c6cdeff88404ebe2a646f2eb5"],["/images/nhkimage/2020.09.10.png","3471b05d02113517359a9e2167befcfa"],["/images/nhkimage/2020.09.11.png","921a541a8bffb1aa436df2eb6db7c99f"],["/images/nhkimage/2020.09.12.png","a51f8ebaddba69bb80f9259a30f17e65"],["/images/nhkimage/2020.09.13.png","0399889200493cd2154ffc407e2bc400"],["/images/nhkimage/2020.09.14.png","eaaf3da69a39ed316b7fc8c4d409bb0f"],["/images/nhkimage/2020.09.15.png","5774959ea4061c9298ea174f0862cc3a"],["/images/nhkimage/2020.09.16.png","0c5a00f74020740fda589c02e4b3f917"],["/images/nhkimage/2020.09.17.png","b5aef734e3a7db4862ca3fe4e6769dc2"],["/images/nhkimage/2020.09.24.png","5982a7b3843f4ae43b2b4bc4b0c577d6"],["/images/nhkimage/2020.09.26.jpg","c6415af781fbdd36fdb034f74646129b"],["/images/nhkimage/2020.09.27.png","27aa6f6a8d5534ccd99cff261dcd9eb6"],["/images/nhkimage/2020.09.28.png","0f4318d1ff17a33de364432a1c44b5ad"],["/images/nhkimage/2020.10.09.png","6408d9f7e66fdeba8b9207939a08cf8d"],["/images/notop.png","d25c272e5ce312a880e04ce8a0b27683"],["/images/pasted-0.png","552608d8f6e39369aa30c6e332a32826"],["/images/pasted-1.png","baafdacee93c99e99418aaedbf524fda"],["/images/pasted-10.jpg","395cff6f64ab5df19baa3572ac98e541"],["/images/pasted-11.jpg","56e5df07c96634638abf7995b25c81ab"],["/images/pasted-12.jpg","61b3f803b85ce3640d7a9ba7efb9da6b"],["/images/pasted-2.png","2f410e53c811f92a6135f48857776f5e"],["/images/pasted-3.jpg","bb5717e691e87355e7d63a5f3a87ae62"],["/images/pasted-4.jpg","10041d0e3567b24b81222ec5075d6492"],["/images/pasted-5.jpg","ac5047a4b48c6cdaee86fa1863e33904"],["/images/pasted-6.jpg","1556ae8d3ad5713d60237ee4d10e81f0"],["/images/pasted-7.jpg","913fde1686587646ddc663bd810cc81d"],["/images/pasted-8.jpg","fc83268081fb4b6b6ecb1ffa1ec5af7f"],["/images/pasted-9.jpg","25e0fa3496591501f5c29d0b802b77d2"],["/images/pet.png","2b8c121909497e57057478856fe48a94"],["/images/pet2.png","dfb1d6a17b527ccc0c600e6ad31f55e5"],["/images/ps1.png","0917ba91f21b6944dc08d35c41a326d2"],["/images/psb.jpg","6a27c58337875c776af0a7667598b401"],["/images/quse.png","7cd1ec12b804305430cb4cdc09c7a893"],["/images/rain.jpg","9c26acc44c692b6a63e134be07b07c18"],["/images/shezhi.png","281bf545f6a4024e2d0b7120bc398a21"],["/images/soul.jpg","d97b4099c0728ff6123d006fa62db86e"],["/images/study.jpg","a9b1cf95ee6bd9f3913e8ec6a6a6f44f"],["/images/tianqizhizi.jpg","dd48d78b4eeaaa52578352f9ef570b14"],["/images/vue.png","cf23526f451784ff137f161b8fe18d5a"],["/images/vue1.jpg","8cbf18302c6fa72e2a40d0cca0832213"],["/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/images/work.png","e521cf5b834292fde1c50e0a0f5802f9"],["/images/xiaoguoyanshi.png","994a3b710d36df0a4630cd9a768c7f7b"],["/images/xiaoguozhanshi-m.png","1fefca18214fc4889d1bb76b81887c9d"],["/images/yao1.jpg","9dfddaf8c121fc8db788a87d133d6376"],["/images/zfe.one.png","b41f689341882058ffb28c4cee499bde"],["/images/幻想终结之日.png","0025c4d3973bdfedb80db3f78c59fa47"],["/images/时空战纪——游戏建议及意见①.jpg","1337457f14a8dffee66d94f8915b54ff"],["/images/简历.png","d70507ee4615c9e324578c0d777e6855"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favicon2.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","59f02b3378c3a5755c374f0b61c4d091"],["/js/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/APlayer.min.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/airvisual.js","71cf86bfd452ca01d92438d8266416ee"],["/js/airvisualapi.js","6931bebe1696688d109963187fc2eace"],["/js/artitalkkey.js","ad2c74320c63125a36319659657d2886"],["/js/background.js","94c8410b174f58594cf81ec99054968b"],["/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/js/calendar.js","a58e02711cc6dec4dc04257e555b8923"],["/js/catalogMagnet.js","ca2c32f653e3a68326c981764a71e295"],["/js/clock - 副本.js","405186e7a9d73221d2d50c0dea2852d0"],["/js/clock.js","2fdceb94cc57b551cd245b0001927b66"],["/js/color.js","3730bb4f7b185e6f5130ac28bace968b"],["/js/dan.js","6b6ae6b7f1b42dd4857541f43b2bb733"],["/js/echarts.js","dc1227b1eba1ba47fd185a387d0a7d37"],["/js/gitcalendar.js","fadfa8a42272cd322118653dca512a7a"],["/js/history.js","20459f7db325e597e64903f4c0d19306"],["/js/historyroll.js","a3e9ac376106816c50a61f9f4306d671"],["/js/jam.js","462c07d3b2e0f20394d994bbcfae37cb"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","455fface5a0a3ff90766ca254affe502"],["/js/rain.js","f656dc28e4ab5c3f8414d35f683278c1"],["/js/rainremove.js","ceacf82842b101f7e54a2aaf5f4bb9cb"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["/js/shuo.js","1076b1ef51358cc11b6ff3bab25e15d8"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/link/index.html","9414831b3309b851bf39b1e2a45d25a5"],["/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","4ada89d534e63ce33875266342117ff8"],["/page/10/index.html","0df6c54e6621f26260885dbf942d612b"],["/page/11/index.html","e31fa258277232f096a34a0e1f916535"],["/page/12/index.html","91b5c5f503b5ce17eca977a1103794df"],["/page/2/index.html","ac9b88bb1ffc5b1931f2c2d2e24ed0c3"],["/page/3/index.html","95ffe4c712cbe7ae602334634d9fd5cb"],["/page/4/index.html","e16ce525ff52a11152575e547e1b4dc7"],["/page/5/index.html","6c895f76a83dbd8ea95450a83b5a5ec0"],["/page/6/index.html","d18158eff0220d120b678c747316cc0d"],["/page/7/index.html","dbd74e9842c90d693ddd2dcfed0631ea"],["/page/8/index.html","233a628fdb54ed4bd51b202d73437309"],["/page/9/index.html","a52f22ca96c96c4b20de1892d1dbf702"],["/research/index.html","acfdf6703edb1fd4176c0a3a5bfc3145"],["/sw-register.js","9ec89bdf111e6d3f01e2068bc693ba1c"],["/tags/Butterfly主题/index.html","ee18f6165d7848f4b4302ca7b1fff53e"],["/tags/DIY/index.html","9e2f3d3a313659d9bd9b89f220cdee34"],["/tags/DIY/page/2/index.html","c7201040f7a60fa2a91a555b24fdbee9"],["/tags/ICT/index.html","9a8b2033ea8369bd31acba574ebb1815"],["/tags/NHK听力练习/index.html","970330464dcff207c55d093aa5574e9e"],["/tags/NHK听力练习/page/2/index.html","99eaf93d5e8f8068974e74c8fe27b867"],["/tags/NHK听力练习/page/3/index.html","91764d5e8eaf9f50578e8a74c74b97cc"],["/tags/NHK听力练习/page/4/index.html","03c14033e23621783d853899baff0aa6"],["/tags/NHK听力练习/page/5/index.html","33a850fa0bc4150ad9633716fd4d5370"],["/tags/NHK听力练习/page/6/index.html","574febad057cc280079d0a217a17f8fa"],["/tags/metro-ui/index.html","6a1f692721ea398078549b29f5faf33a"],["/tags/vuejs/index.html","200e22483e5a086c684707d54818aa85"],["/tags/お盆/index.html","b086198f7224407d343765aee2688118"],["/tags/世論調査/index.html","504a88bcfd1e2b93e5c96f0f5e188cfc"],["/tags/作品集/index.html","684f7259c7dbb81abf93ca21e3f9d645"],["/tags/作品集/page/2/index.html","51f3bae5d0e24669f61b140833dfbf62"],["/tags/农业/index.html","1cd5666caeadb4cdf7234b75c95dc365"],["/tags/历史/index.html","9f61bff8995b70d1c728ad71b350fc8a"],["/tags/営業時間/index.html","eb2c5a5fce9faf40dda5f46ce9705f9d"],["/tags/国外政事/index.html","1153ef4cc4937d236b740ba2c6da3359"],["/tags/地震/index.html","6dabd303e86fa68ebdc8cf99379f7e62"],["/tags/外国政事/index.html","08a9196eeb5b4814194a83a5affb26ea"],["/tags/天气/index.html","30d1a2626dc39b5432a23f2a4159bf3e"],["/tags/天气/page/2/index.html","4306ca8017bb3975a19822adf63da900"],["/tags/奥运会/index.html","99f643d9a572968dfffbb7875c462575"],["/tags/学习/index.html","451b63a11977db68e83c6b2b33606bf6"],["/tags/学习/page/2/index.html","713953b2b287db21dcb2cff2ec598169"],["/tags/学习/page/3/index.html","f2bfa66256bf58f6949c3ebd1685cc18"],["/tags/就业/index.html","c526f56db407ea5dd6e1af2397a9518e"],["/tags/庐山/index.html","0e771732b1885e9a734b98d80b67bea9"],["/tags/座礁/index.html","e656167210fecaf9202e31435a0dc734"],["/tags/政府/index.html","f4daa4f7c70aec566873bdf4cff9e73a"],["/tags/政治/index.html","060cd64659800a18af61d981d5ac3823"],["/tags/教程/index.html","36ba5acaecf66c7e751f6c5b5be5453f"],["/tags/教程/page/2/index.html","0267f0b727ff5c8d36a256c2de81b82f"],["/tags/日本教育/index.html","a84c098f1a1d6966fd8468083870c0fa"],["/tags/民生/index.html","384ce3d3e9292132ee6077591c56c4b9"],["/tags/民生/page/2/index.html","a3029bc341d35d91a77782e488cd2ca0"],["/tags/游戏评测/index.html","7994126e4ddc0fd2084feededdd27ec1"],["/tags/游记/index.html","558d7e653d37c1d6e67b11c2a4c23111"],["/tags/生活趣闻/index.html","8df6987a57116efc6f2aece6807c4633"],["/tags/科技/index.html","65a5165dcfc1304980d48a7fb8bbe4bf"],["/tags/经济/index.html","084cfdf7017a7422b97077b4e0a33177"],["/tags/经济/page/2/index.html","d52ea29405e496f1d91b32192de36565"],["/tags/网络教学/index.html","f30c3278bc4e6c1cca290997352623f1"],["/tags/舆论/index.html","9348f1cd4d923186d1cd059f62579e66"],["/tags/虚拟现实/index.html","6540eb3065036d2ab102c48dea6b64d7"],["/tags/随想/index.html","fe522cccb55869e30ca55551d32e98fd"],["/tags/障害者/index.html","d814343dc05fcd9bb5d7f6dc82183c02"]];
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
