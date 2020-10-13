/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/05/20/2015-05-20/index.html","4004bb12fd19230bfc1e8ed4915f858b"],["/2015/06/16/2015-06-16/index.html","c8477e8f6135b7b880a9d8c317fe953d"],["/2015/12/12/2015-12-12/index.html","15a65095c9eab7994c74009389e4a41f"],["/2016/06/08/2016-06-08/index.html","6de0ed721dc0bb81cb351c1a6f1246b6"],["/2016/12/18/2016-12-18/index.html","076561120c1cbccd26397779743fac95"],["/2017/02/17/2017-02-17/index.html","b51bb282288fb89e5e230023fc5bc22c"],["/2017/03/17/2017-03-17/index.html","d5a9bd67a2c57b69587d2cb7787de93c"],["/2017/04/06/2017-04-06/index.html","a2bdbaa797da819e87bb76f0313f78bd"],["/2017/05/17/2017-05-17/index.html","1ed58764ec5f5bf3eb56c892917995b7"],["/2017/08/15/2017-08-15/index.html","0d20cf8a0280177fd9f6fb9a58d782ee"],["/2017/09/16/2017-09-16-1/index.html","ed5d0424cadda22abf5f68473278d243"],["/2017/09/16/2017-09-16/index.html","d40d558d23566d39dc8afa87089ee725"],["/2017/09/21/2017-09-21/index.html","9ce1b79a284e27113b46ea09b8c0b308"],["/2017/09/23/2017-09-23/index.html","b31e6a34b3a13c48c1dff10ca6969a3d"],["/2017/09/26/2017-09-26/index.html","8ecf2f5c9b63232776a46072cb75e13f"],["/2017/09/27/2017-09-27/index.html","7efd0ba0f4ae083489267dbb0b8b1871"],["/2017/10/04/2017-10-04/index.html","e67740868d32c77baf0295ec16c2274b"],["/2017/10/08/2017-10-08/index.html","e3df95ac9ee3eb6ee92c8fa1c85dafb8"],["/2017/10/09/2017-10-09/index.html","0bf9449c3e307cba05b468ca063209df"],["/2017/10/15/2017-10-15/index.html","a46d728e82bba880c6ecf5b47fbaf67a"],["/2017/10/19/2017-10-19/index.html","f48fc2612e751f9b9c37386067f46142"],["/2017/10/23/2017-10-23-2/index.html","f6cd62a182cc43889b2ca2ac4bc4cb8f"],["/2017/10/23/2017-10-23/index.html","f17b6d58fa951a4bdbf9ca9e2f7eea4e"],["/2017/11/08/2017-11-08/index.html","c4462b5df2a1877bbe6f450aae99b89d"],["/2017/11/12/2017-11-12/index.html","55bf2ea0c5f59a7893f16cb0cd7f9494"],["/2017/11/15/2017-11-15/index.html","deedcbc672650714513d04020a2c415e"],["/2017/11/27/2017-11-27/index.html","84a2bd0c83ab1460a764171c60d766c1"],["/2017/12/06/2017-12-06/index.html","4881541b348eb0f825a960fc5b5b9779"],["/2018/02/12/2018-02-12/index.html","35f2590373826346524cbcaf663ec95d"],["/2018/03/26/2018-03-26/index.html","c598ac45f4f20864647114b27f89a210"],["/2018/04/02/2018-04-02/index.html","19f8fb808e38dfd745d10d5ae84dfa4f"],["/2018/04/24/2018-04-24/index.html","d8421c26c433f28bdc6ba4a9d6f4ae0e"],["/2018/05/18/2018-05-18/index.html","d79d681f6df538517dc7efe85933b4b5"],["/2018/05/23/2018-05-23/index.html","cda1d48e5e60995fa8b8c98fe74f4923"],["/2018/06/08/2018-06-08/index.html","8811dd1198ae5df49bfcb41bc2a158cc"],["/2018/07/01/2018-07-01/index.html","1bd16c2301d00bda47854d83be73da13"],["/2018/08/30/2018-08-30/index.html","dfed14fc0ddc0ab246406a99406a0e61"],["/2020/07/20/2020-07-20/index.html","e0b6ffee69144959f1881f3f9a57eafb"],["/2020/08/01/2020-08-01/index.html","cd8fd23ad6363e0339af49607dec1a0e"],["/2020/08/02/2020-08-02/index.html","68c00e998297ed918e8c445dad680f18"],["/2020/08/03/2020-08-03/index.html","9147adc1622b50693f3b207628f19b72"],["/2020/08/04/2020-08-04-1/index.html","402fd4da399bb3c388756a52902dea3b"],["/2020/08/04/2020-08-04-2/index.html","c040a3b2afcf3272ff93733b3dcaa6f9"],["/2020/08/05/2020-08-05/index.html","4587fb3de68585f696b2ea612fc68600"],["/2020/08/06/2020-08-06/index.html","4008d0a07ee39e9d4e985262bd70c16a"],["/2020/08/07/2020-08-07/index.html","91083334b1906c891cdca08e546db9dc"],["/2020/08/08/2020-08-08/index.html","bec4380420f6bce4be3d99152987f4c4"],["/2020/08/09/2020-08-09/index.html","088934768f0ce6031f0811be99d675bd"],["/2020/08/10/2020-08-10/index.html","5c1d83e71aae2333576a31c6e3feb1f6"],["/2020/08/11/2020-08-11/index.html","decf1d31b396caf98145cf504b148b13"],["/2020/08/12/2020-08-12/index.html","9cd9777cdeaaf0e03fad8e802afa080f"],["/2020/08/13/2020-08-13/index.html","e731467e59491d3915319bb30e813925"],["/2020/08/14/2020-08-14-1/index.html","55652e90fccd5353c2e4263b901cf0c8"],["/2020/08/14/2020-08-14-2/index.html","5d85fcdaaea9c377b358656e79cd91bb"],["/2020/08/15/2020-08-15/index.html","51c2ae1740e72d2d82115d8a14fe6757"],["/2020/08/16/2020-08-16-1/index.html","2f2e70549c7750ad7c306b813d146af1"],["/2020/08/16/2020-08-16-2/index.html","0a9eff1173755f52a4653e1ec65d8505"],["/2020/08/17/2020-08-17/index.html","1102b9a0b06821cae9504354eda16671"],["/2020/08/18/2020-08-18/index.html","0bdf5ca38e632709d54959ff9a175b8b"],["/2020/08/19/2020-08-19-1/index.html","78fc1a119a8c3621a7f1c9fcfe5c0a36"],["/2020/08/19/2020-08-19-2/index.html","9ad40347acf9d9c231ffd8385bccf347"],["/2020/08/20/2020-08-20/index.html","0933deafdc325c9940d6d983dd365732"],["/2020/08/21/2020-08-21/index.html","bf4cec1bcf0cf1d33b805fe67d018251"],["/2020/08/22/2020-08-22/index.html","e36d0e156d73e708f541a945a46f9ce3"],["/2020/08/23/2020-08-23-1/index.html","90e6d89fce16d60597bbe1a376393dc8"],["/2020/08/23/2020-08-23-2/index.html","8e1c5aabe68da3643d1e398b01a9662c"],["/2020/08/24/2020-08-24-1/index.html","d1b007527b5d93027feb84e1dfebd385"],["/2020/08/24/2020-08-24-2/index.html","42f09d8fa7e44bdc5674b8412305f491"],["/2020/08/25/2020-08-25-1/index.html","33c209ff7df78f7d4ae0ba07eef6fbe5"],["/2020/08/25/2020-08-25-2/index.html","493519fbf144debd0ddce90509ce07d3"],["/2020/08/26/2020-08-26/index.html","c833c56dc2ebf2a18d60ada5742fc01b"],["/2020/08/27/2020-08-27/index.html","5551970f7443b99aea8abf3f036b622d"],["/2020/08/28/2020-08-28/index.html","7a9318b711c20bf512b1d704880a1b4f"],["/2020/08/29/2020-08-29/index.html","beaaed70c7839b95ff76537d2186a23e"],["/2020/08/30/2020-08-30/index.html","c35316551a868c630ab49fee269c8c2a"],["/2020/08/31/2020-08-31-1/index.html","554eadd719cfd1a593b31e55e1a9f285"],["/2020/08/31/2020-08-31-2/index.html","e2386e31bdef51068ba46fdfa47434ce"],["/2020/09/01/2020-09-01-1/index.html","a8f167aaf0d97f8a30616261c740c5b2"],["/2020/09/01/2020-09-01-2/index.html","e2a26f9baa7d972ac2e0b98f4f82c65d"],["/2020/09/02/2020-09-02-1/index.html","7b11a23eee6e50f06385b4dfe5d8f86e"],["/2020/09/02/2020-09-02-2/index.html","40a38b0c93ba21df83ea3c6a6c4e7492"],["/2020/09/03/2020-09-03-1/index.html","e16fde51f744737b648ca98ad1752654"],["/2020/09/03/2020-09-03-2/index.html","1cd262156576ed26af8ca8f469f70806"],["/2020/09/04/2020-09-04-1/index.html","943dc56c63631cbb722d4478bfac8007"],["/2020/09/05/2020-09-05-1/index.html","f10cab7135b74a3033a83668ccd7eba2"],["/2020/09/06/2020-09-06-1/index.html","c50fbdf46ae2e40c53f5e7569a54a7f0"],["/2020/09/07/2020-09-07/index.html","c32e0b7106877467cfd72f960b44b87c"],["/2020/09/08/2020-09-08-1/index.html","95fbb8c32aadd4e517c89aa4c9400352"],["/2020/09/08/2020-09-08-2/index.html","55aa3c11d9d30c813308a6acac436715"],["/2020/09/09/2020-09-09/index.html","2fa16aea36e86e0db0f112d17324c644"],["/2020/09/10/2020-09-10/index.html","ca325dc9f9826c8bca90c36318bb54d9"],["/2020/09/11/2020-09-11/index.html","35f80b7079e3fc4d558bbd88d58e4f40"],["/2020/09/12/2020-09-12/index.html","a2338dede1b109d50214b0b558202253"],["/2020/09/13/2020-09-13/index.html","9a571ef703d5515e027276dbad684d63"],["/2020/09/14/2020-09-14/index.html","14d2619c7bc439db3251e0b346defcea"],["/2020/09/15/2020-09-15/index.html","49f2a55d7cb3d46cdb6309357387362c"],["/2020/09/16/2020-09-16/index.html","929eb0b18053cf174fb7922df3f7c450"],["/2020/09/17/2020-09-17/index.html","9ef8ec8579c4c265758cf6b0daa74338"],["/2020/09/19/2020-09-19/index.html","ca1bdbe81dd6add4b0a8a10e2c9f745f"],["/2020/09/23/2020-09-23/index.html","2b20111dc110318c80b5f1eeb3eb8486"],["/2020/09/24/2020-09-24/index.html","cfc798af86047ab71e90b7c41f756ee0"],["/2020/09/26/2020-09-26/index.html","ca8d5d8d3a9a609ab371ff17e16e0c16"],["/2020/09/27/2020-09-27/index.html","7f3370f0850a801a3fe93b999e1bff10"],["/2020/09/28/2020-09-28-2/index.html","76e502f4dbc413060c06c38979f34df2"],["/2020/09/28/2020-09-28/index.html","d352b8a1e54b03ed90bdc6d9a5207c44"],["/2020/09/29/2020-09-29/index.html","48cfeb44a23ba64c0ff49167aa9ef94a"],["/2020/10/03/2020-10-03/index.html","072d04b07e3c94da3d8856de879f1c7d"],["/2020/10/04/2020-10-04/index.html","5e231b8e7638dd4c6375d725e2716784"],["/2020/10/09/2020-10-09/index.html","3f48d794be0efdc5f79a08ae7e53b170"],["/2020/10/10/2020-10-10/index.html","85e80e7b0fef2a6f096466c396ae7da6"],["/2020/10/11/2020-10-11/index.html","bdc32b1b8720604322a1192b8c900b87"],["/2020/10/12/2020-10-12/index.html","440721228bc79efa963e9d59d65778ba"],["/2020/10/13/2020-10-13/index.html","8990b8787877bd5ea6247100157ea502"],["/airplayervisual/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/airplayervisual/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/airplayervisual/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/airplayervisual/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/airplayervisual/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/airplayervisual/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/airplayervisual/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/airplayervisual/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/airplayervisual/index.html","c4d7578b5a7172ea693b3952c837d780"],["/airplayervisual/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/airplayervisual/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/airplayervisual/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/airplayervisual/js/jamsetting.js","7927507e0080ddf55c6d8b5f526bd942"],["/airplayervisual/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/airplayervisual/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/airplayervisual/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/archives/2015/05/index.html","331a0d8f0477b76bbd250c16f0fcc66d"],["/archives/2015/06/index.html","2351e2ba1716f9cc71ed0b2f4cfd9c64"],["/archives/2015/12/index.html","7325c51dd1aa4d930e9f011ec94228c2"],["/archives/2015/index.html","008b1b70b93d36be50f6c0ff60e4b834"],["/archives/2016/06/index.html","f64518e7938623c6fe384f61be6cc6d1"],["/archives/2016/12/index.html","36ede51b538f2eb69edcded0cc21dfc3"],["/archives/2016/index.html","2b5273be3f45d8f5ea6a3a7bd80adc6c"],["/archives/2017/02/index.html","a38650627703021df77be664bc679daf"],["/archives/2017/03/index.html","63930a39eed78e1d5298a57c2a9a65cd"],["/archives/2017/04/index.html","1526032bc1c2f0cfd80c5236c4f82189"],["/archives/2017/05/index.html","80389424184a2feca13dab8fa789fb8e"],["/archives/2017/08/index.html","e0dd4fd8d2474ab23c4809d22e879f75"],["/archives/2017/09/index.html","c2fa931fd516c21647cbdafd79ca7226"],["/archives/2017/10/index.html","e8c162bff42442abd39a1ed683af4a9a"],["/archives/2017/11/index.html","0175c0c49f8202b5806d9332ce02a49a"],["/archives/2017/12/index.html","12417b40566d8e304d82e86c8098d67d"],["/archives/2017/index.html","7aa1287d0921203ca8f69df71c1f1560"],["/archives/2017/page/2/index.html","931677ebc99677df58fbcbb9b6b76172"],["/archives/2017/page/3/index.html","5a3af78e894fdd404c1b1cbdce2412ab"],["/archives/2018/02/index.html","34cce6eb9a61d20986661645cec6afbc"],["/archives/2018/03/index.html","d6025b6d06cd379b8be27fc12fe5a5b2"],["/archives/2018/04/index.html","b8547bf039a4676028d6fccb856fcb5e"],["/archives/2018/05/index.html","1d217f0cba29b144e1df285e3506344e"],["/archives/2018/06/index.html","9840d982d50e027180dc6333d44a843a"],["/archives/2018/07/index.html","d481c18207ac5cdfd296b47e44c5425d"],["/archives/2018/08/index.html","002d77360c3ef884f7fcc01295ecee69"],["/archives/2018/index.html","3469723782fc43bce449fece38375268"],["/archives/2020/07/index.html","4cf130ddf824cf701d8fad9ea8f97144"],["/archives/2020/08/index.html","0c955fcc3c7c81ea98d60dce6505d9d2"],["/archives/2020/08/page/2/index.html","4b1fe9f2b7bc130d807a4e6e4cea90d5"],["/archives/2020/08/page/3/index.html","1c210ae17390d501929219c003f63e72"],["/archives/2020/08/page/4/index.html","a7359788a77b9bf34c8e4af117d5ceae"],["/archives/2020/09/index.html","2aa885427468b7c6bcd7405ec9b311d0"],["/archives/2020/09/page/2/index.html","28798f723b3fdfff2e23405c270b24f7"],["/archives/2020/09/page/3/index.html","8f89ad395dace7518cdd203631fdb070"],["/archives/2020/10/index.html","08bcbf859698639cdf9493e28f3fef99"],["/archives/2020/index.html","ef4608cffcbc4900cfca7e3ba57cebf8"],["/archives/2020/page/2/index.html","8125e6551389fb0a54073cc06eb10a8f"],["/archives/2020/page/3/index.html","9625520a6eba21e512b772e4a9f491da"],["/archives/2020/page/4/index.html","16592ca0c09d2f2476f31b4548355117"],["/archives/2020/page/5/index.html","f164a7fe4f2cca2261b52e2d81f1f06d"],["/archives/2020/page/6/index.html","a02a99ab4eb34c19f623fd355317880a"],["/archives/2020/page/7/index.html","3c27355e0e723ae8f9b189a00094de91"],["/archives/2020/page/8/index.html","88a149109c533f335347cc3187c70a49"],["/archives/index.html","61378bc6fb8b7ee3b256521b4d484ecd"],["/archives/page/10/index.html","5b5e1f52c90383caa2dddeba2f1eb799"],["/archives/page/11/index.html","4349656f91c53bbb4334e3f2d70e3ad5"],["/archives/page/12/index.html","49aaf2efea42f2c7033d1e7818d98688"],["/archives/page/2/index.html","6bdbf8472efbea2648cfdf13fd7847da"],["/archives/page/3/index.html","8d6d8e3518e9f97c4d5739066bd0491e"],["/archives/page/4/index.html","9bf1fa3c7d360f5e0b6223e689845dd8"],["/archives/page/5/index.html","c32f1281d9395840176ca9396bec03da"],["/archives/page/6/index.html","abceccd0c6d2d784b285582deccbc474"],["/archives/page/7/index.html","86718de1b9b1b3762ace4228a6ee2124"],["/archives/page/8/index.html","a508e82a37a1e99f47944e2bc546bb9f"],["/archives/page/9/index.html","af57feb1ee2fc571983b707d9998bade"],["/categories/NHK听力练习/index.html","b2c1135cf2dd88c50dfe0a91b97e9132"],["/categories/NHK听力练习/page/2/index.html","b4a851aec7a306f8a1a2bbf86557413b"],["/categories/NHK听力练习/page/3/index.html","6d92615f4e8f1f10aaebdbb911bedd63"],["/categories/NHK听力练习/page/4/index.html","1be8bf785d0305623b0278a55602e44b"],["/categories/NHK听力练习/page/5/index.html","6ab88b17725e5f9c805e42b74403e4bb"],["/categories/NHK听力练习/page/6/index.html","9089fc2594387b00198162383103339d"],["/categories/作品集/index.html","0817453de7392928e52236a2b47cb81c"],["/categories/作品集/page/2/index.html","4fd4a891795b1c9ee8e40785f61fa729"],["/categories/学习/index.html","bcd55359a8f91c9d6eafad73053ad03c"],["/categories/学习/page/2/index.html","5586d29f3a549ac57072e1368c186143"],["/categories/学习/page/3/index.html","17055b1341d4d5200d9242509bd2c1b6"],["/categories/游戏评测/index.html","60e649ed038f561228a213c994200323"],["/categories/生活趣闻/index.html","0e43aac24c3bf8b1debec85e9de8f4cf"],["/categories/随想/index.html","6e11d1ddc52ffceab6e5c8c6968ca911"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/addcss.css","59cae1ddbe6925c34f846ffe12d19921"],["/css/background.css","32d5acccbb94f987faf37cfdc3fd06df"],["/css/calendar.css","0090a32d2a61d42c5bfed254bfba078c"],["/css/clock.css","65602c2385c7eab42ee3804cd6ee0a5a"],["/css/cursor.css","c1a23e168c5b794ff367eb0ae77eb26b"],["/css/danmu.css","2a5b914a9592bcd353425c6d5fa7af8e"],["/css/index.css","36eb36d0f5531dd7a8f4c8f925188615"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/loadingline.css","bc1ee020a6a11fea17b915b97e6978bf"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/html/calendar.html","bddcec1edba7f4c49fe5cd75f8cdf5b2"],["/html/shiyan.html","6a787be6395752e5665890f5a91ba997"],["/html/shiyan2.html","e8affa39bdbcf665cf137946ccaaa1b7"],["/icon.png","8ec68de45d18642ba9baf2447e62f476"],["/images/AMJ1.png","d27a6725d1aaaf5324248da4312ab6c2"],["/images/AMJ2.png","00e22eba5901e5bd674e42228cd5bd26"],["/images/AMJ3.png","c8c9ea6348dfcad3a641899d5b587431"],["/images/FOTO1.jpg","4b6f100861908e2c7044cffbdb4a0c1a"],["/images/MVVM.png","ea5a002ee2f85c71a0db51d5adb5de19"],["/images/UT.jpg","367f4e432f9db55a92b2a290c4b0a476"],["/images/UX.png","a183974e958d41d1b6acec70bb7ea00a"],["/images/WindowsTerminal.png","8ac29cb56b8a1768cf7de071e9f1ae6f"],["/images/air-w.png","c1cc32f9d3e17551ca11a7d18a0b533a"],["/images/anzhuang.jpg","912b2489957f8344406edc5e5cebe5fa"],["/images/api-setting.png","2c0bb074390779721cba009e96c5417c"],["/images/apikey.png","1f31121b190eb1f990bcc3e27524bc03"],["/images/backpic1.jpg","86a6fa88167feb338fbf1a4e9057114b"],["/images/calendar.png","86319b08b93be7c8bc47cdba7a169563"],["/images/clock2.0.png","0a0f122c7a25262fc02ee99df0ef21eb"],["/images/example.png","aaac9983e5d59f919bf282dcff2edb3c"],["/images/foto17.png","28db4c6608ad1ee6b34238cafab25e5e"],["/images/foto2.jpg","be95b922512d004a61f83c97af3e2602"],["/images/foto2.png","0dc07d4e1b00526a273a89dc8b81548d"],["/images/foto3.jpg","551c0616c92c4ee7cc17dd458b3c46e9"],["/images/foto4.jpg","9d1d9fea759a41afc0061866e400339a"],["/images/foto5.jpg","984f618b15372f37d54f507e6f379f10"],["/images/foto9.jpg","b683fc0b998e80ff8f5a3e45e889807c"],["/images/girlpic.png","ff1e8427ed555af639e6d849f8f648f1"],["/images/girlpic1.png","698e5570e821c3cae643cc9777c2292e"],["/images/girlpic4.png","551882e4b9b6afb79000fd34c0dbf5e5"],["/images/headimage.png","332502f36a0297b30cb7969fe6de8451"],["/images/hexo.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/hexoWT.png","c027cc9f5665c7d7ba657e7a4bb40017"],["/images/his-json.png","7d8a71e38ab684107446e5c72c31854e"],["/images/history.gif","0459a3dcf2317253de0b34482880c63c"],["/images/homework1.png","e8d2f64d0785519ea7779016208a2900"],["/images/idea.jpg","5eb08bf6c965588f03c8860f201cac45"],["/images/key1.png","f2a370e02ad6c5a101db20b47a9a0008"],["/images/key2.png","21dc40bbe0377cd9fe85a9cb431c18f0"],["/images/life-cycle.png","02f39ea5c041d45938fda4b50f234cb7"],["/images/life.jpg","74d2d9c5f48ec59e3badeec690941812"],["/images/listen.jpg","9d4f73cd5634f43deaed4f9aca03f9a3"],["/images/magnet.png","4899a924f3de0d19dbe0415128c07d65"],["/images/magnet1.png","8d010eb86ca943e036adaa7de57aee7d"],["/images/magnet2.png","293cb414a8ab93b43bde3bebf9cf0cfc"],["/images/magnet3.png","1923148630e2e094ff80bf35aa604c10"],["/images/magnet4.png","9bb4f963ac1c09f02d62525f513f492c"],["/images/meilu/1.jpg","cd67abcc3f543b5c66adc4f9d9c5c628"],["/images/meilu/10.jpg","ac9fb2711e477b5db1c3acb57e899045"],["/images/meilu/11.jpg","364caad6dfc356a3dc630fa067e48e88"],["/images/meilu/12.jpg","274767e5708f79934e5bdbf73eda8f0d"],["/images/meilu/13.jpg","dcab12b84454770b208913db63e825ac"],["/images/meilu/14.jpg","037cdd048284e621f27e17a2c59e8ea7"],["/images/meilu/2.jpg","f6cdb65ae3fad4523b32f5ee38696b60"],["/images/meilu/3.jpg","9e5df3612c2d93bf57313186c954aea5"],["/images/meilu/4.jpg","69ef2d6f4bcd79cf4b4e672b60c6751e"],["/images/meilu/5.jpg","ce81ca16def7613b7ebb368fb554f14f"],["/images/meilu/6.jpg","cafd5b62305f806754a75cc3af8c3b77"],["/images/meilu/7.jpg","b8ae865d386e1e713a6034da6b090c10"],["/images/meilu/8.jpg","afad7a7bf1066c817a8d2e7566bc780d"],["/images/meilu/9.jpg","72f9649f56b564eacf23ce3dacb88029"],["/images/metroui.jpg","5503bfffd450d9ab572b67ea00941571"],["/images/metroui/1.png","79a03b408c19c74eeaa8ff6e17a03f9d"],["/images/metroui/10.png","8309fed71a15c78f2dfa3af1ff75a5f3"],["/images/metroui/11.png","aaf1a007cbae12f93cc2688bace18d28"],["/images/metroui/12.png","0758ea282c3828c47e5c64520ff85783"],["/images/metroui/13.png","12ca7b511927cd4b26e97f3b20908a32"],["/images/metroui/14.png","f44ba7680f7b36df437e2ae2588d0565"],["/images/metroui/15.png","e8927c78b125b805af7aa86fee815ab6"],["/images/metroui/2.png","e604d3c662b996f06f22753ba9ab379f"],["/images/metroui/3.png","664e3b7490f2f95d5547b8ba79a65456"],["/images/metroui/4.png","c0f255344cafc303a1d9c7404da37149"],["/images/metroui/5.png","da2074cdb1298aca826abc1a5c441300"],["/images/metroui/6.png","efef2f087127614b4e03bcbe9a347018"],["/images/metroui/7.png","a4d34b1a2dbe3a58d3a92276880be039"],["/images/metroui/8.png","1d34a626bbaa898a60d4501936bcf962"],["/images/metroui/9.png","0663697c1667b377fe2623bd65e00b31"],["/images/metrouilogo.png","aea81b42d1c2c96440f74cf56ad82e2f"],["/images/nhkimage/2020.08.01.png","af4c55b2ae1d5ab2f56c75a87fcdfdb3"],["/images/nhkimage/2020.08.02.png","c355d41b90f5c65823f96c5f6868ce53"],["/images/nhkimage/2020.08.03.png","fddcedb40d7f28b2ccb90814351ad5c8"],["/images/nhkimage/2020.08.04.png","8b4518ec5a8513f442980ed7167136b1"],["/images/nhkimage/2020.08.05.png","590abfb19334b0c3cee5a005674f2253"],["/images/nhkimage/2020.08.06.png","d469e21100c42435e88f2bdf07f93da1"],["/images/nhkimage/2020.08.07.png","3ca9e2c8b8a09a38423d73cd36e8de9d"],["/images/nhkimage/2020.08.08.png","4420c2d899fe4eb90c48bae0da8418a2"],["/images/nhkimage/2020.08.09.png","df14be338f9c920818dd1daa6aa955ee"],["/images/nhkimage/2020.08.10.png","c4e2ed023cd3dbfd4986add35ca9357c"],["/images/nhkimage/2020.08.11.png","cf562339e57f673d394f3e6cdd1f60cb"],["/images/nhkimage/2020.08.12.png","81dfa179fea3052ddcf73912ea368f67"],["/images/nhkimage/2020.08.13.png","8cf26c2642e7a27cbd86fcbda8bae8d9"],["/images/nhkimage/2020.08.14.png","d88eeb678b3ed3651d597e61957e264a"],["/images/nhkimage/2020.08.15.png","b9879f193867edcffeefce62c9dc7153"],["/images/nhkimage/2020.08.16.png","46cb914aa1d556561897767ec9ff66a0"],["/images/nhkimage/2020.08.17.png","ea1af9645b5cc9cbaafe70a91dd15cca"],["/images/nhkimage/2020.08.18.png","e87e4de39a6f06cf4283a63af92dd8de"],["/images/nhkimage/2020.08.19.png","8001a951513b542a98ce1151be5bd87b"],["/images/nhkimage/2020.08.20.png","4bc8fafa3ecce30d340b1350715d78e3"],["/images/nhkimage/2020.08.21.png","07ad1337e127922abff27da6c672549b"],["/images/nhkimage/2020.08.22.png","b2b5d53ba46015f64048f9d803b12179"],["/images/nhkimage/2020.08.23.png","225af8c0cabe5218ec634d1b8815fd95"],["/images/nhkimage/2020.08.24.png","1d54a484a6e2395aabe9be005cd90361"],["/images/nhkimage/2020.08.25.png","8008ba169cfce0ef2041329cd29b6b77"],["/images/nhkimage/2020.08.26.png","72a2b8094003a54c97a34ea97cf21bc3"],["/images/nhkimage/2020.08.27.png","893407e604804d215c8fef8bcd5f2684"],["/images/nhkimage/2020.08.28.png","b542280b7341759890a99cbd44d822c5"],["/images/nhkimage/2020.08.29.png","620e2e7d4772e39615fd1a88cdf49717"],["/images/nhkimage/2020.08.30.png","f645d7ba2dcb506f9ec6fb9244425ad7"],["/images/nhkimage/2020.09.03.png","c5262f3aa87190e0273383ea1e445681"],["/images/nhkimage/2020.09.04.png","c07149c32aa41c03bc7dac82a713f6b2"],["/images/nhkimage/2020.09.05.png","4e43556e1cb3b7f4d75f0f6127616a54"],["/images/nhkimage/2020.09.06.png","1021d2ae04a7f109404f857a2a7629cf"],["/images/nhkimage/2020.09.07.png","db9827e9f0a4cf1401b559b4644a0204"],["/images/nhkimage/2020.09.08.png","efe1030b73dc1c01f169c3122a194426"],["/images/nhkimage/2020.09.09.png","f6ba3a1c6cdeff88404ebe2a646f2eb5"],["/images/nhkimage/2020.09.10.png","3471b05d02113517359a9e2167befcfa"],["/images/nhkimage/2020.09.11.png","921a541a8bffb1aa436df2eb6db7c99f"],["/images/nhkimage/2020.09.12.png","a51f8ebaddba69bb80f9259a30f17e65"],["/images/nhkimage/2020.09.13.png","0399889200493cd2154ffc407e2bc400"],["/images/nhkimage/2020.09.14.png","eaaf3da69a39ed316b7fc8c4d409bb0f"],["/images/nhkimage/2020.09.15.png","5774959ea4061c9298ea174f0862cc3a"],["/images/nhkimage/2020.09.16.png","0c5a00f74020740fda589c02e4b3f917"],["/images/nhkimage/2020.09.17.png","b5aef734e3a7db4862ca3fe4e6769dc2"],["/images/nhkimage/2020.09.24.png","5982a7b3843f4ae43b2b4bc4b0c577d6"],["/images/nhkimage/2020.09.26.jpg","c6415af781fbdd36fdb034f74646129b"],["/images/nhkimage/2020.09.27.png","27aa6f6a8d5534ccd99cff261dcd9eb6"],["/images/nhkimage/2020.09.28.png","0f4318d1ff17a33de364432a1c44b5ad"],["/images/nhkimage/2020.10.09.png","6408d9f7e66fdeba8b9207939a08cf8d"],["/images/notop.png","d25c272e5ce312a880e04ce8a0b27683"],["/images/pasted-0.png","552608d8f6e39369aa30c6e332a32826"],["/images/pasted-1.png","baafdacee93c99e99418aaedbf524fda"],["/images/pasted-10.jpg","395cff6f64ab5df19baa3572ac98e541"],["/images/pasted-11.jpg","56e5df07c96634638abf7995b25c81ab"],["/images/pasted-12.jpg","61b3f803b85ce3640d7a9ba7efb9da6b"],["/images/pasted-2.png","2f410e53c811f92a6135f48857776f5e"],["/images/pasted-3.jpg","bb5717e691e87355e7d63a5f3a87ae62"],["/images/pasted-4.jpg","10041d0e3567b24b81222ec5075d6492"],["/images/pasted-5.jpg","ac5047a4b48c6cdaee86fa1863e33904"],["/images/pasted-6.jpg","1556ae8d3ad5713d60237ee4d10e81f0"],["/images/pasted-7.jpg","913fde1686587646ddc663bd810cc81d"],["/images/pasted-8.jpg","fc83268081fb4b6b6ecb1ffa1ec5af7f"],["/images/pasted-9.jpg","25e0fa3496591501f5c29d0b802b77d2"],["/images/pet.png","2b8c121909497e57057478856fe48a94"],["/images/pet2.png","dfb1d6a17b527ccc0c600e6ad31f55e5"],["/images/ps1.png","0917ba91f21b6944dc08d35c41a326d2"],["/images/psb.jpg","6a27c58337875c776af0a7667598b401"],["/images/quse.png","7cd1ec12b804305430cb4cdc09c7a893"],["/images/rain.jpg","9c26acc44c692b6a63e134be07b07c18"],["/images/shezhi.png","281bf545f6a4024e2d0b7120bc398a21"],["/images/soul.jpg","d97b4099c0728ff6123d006fa62db86e"],["/images/study.jpg","a9b1cf95ee6bd9f3913e8ec6a6a6f44f"],["/images/tianqizhizi.jpg","dd48d78b4eeaaa52578352f9ef570b14"],["/images/vue.png","cf23526f451784ff137f161b8fe18d5a"],["/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/images/work.png","e521cf5b834292fde1c50e0a0f5802f9"],["/images/xiaoguoyanshi.png","994a3b710d36df0a4630cd9a768c7f7b"],["/images/xiaoguozhanshi-m.png","1fefca18214fc4889d1bb76b81887c9d"],["/images/zfe.one.png","b41f689341882058ffb28c4cee499bde"],["/images/幻想终结之日.png","0025c4d3973bdfedb80db3f78c59fa47"],["/images/时空战纪——游戏建议及意见①.jpg","1337457f14a8dffee66d94f8915b54ff"],["/images/简历.png","d70507ee4615c9e324578c0d777e6855"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","b2816f18531e7470afc88d9f63c2b52c"],["/img/favicon2.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","0d8463d444264b5c9e1036a3a741b78c"],["/js/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/APlayer.min.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/airvisual.js","71cf86bfd452ca01d92438d8266416ee"],["/js/airvisualapi.js","6931bebe1696688d109963187fc2eace"],["/js/background.js","94c8410b174f58594cf81ec99054968b"],["/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/js/calendar.js","a58e02711cc6dec4dc04257e555b8923"],["/js/clock.js","ead1a80f7219c166e1180674b7d8c70b"],["/js/color.js","3730bb4f7b185e6f5130ac28bace968b"],["/js/danmu.js","6b6ae6b7f1b42dd4857541f43b2bb733"],["/js/echarts.js","dc1227b1eba1ba47fd185a387d0a7d37"],["/js/gitcalendar.js","fadfa8a42272cd322118653dca512a7a"],["/js/history.js","20459f7db325e597e64903f4c0d19306"],["/js/historyroll.js","a3e9ac376106816c50a61f9f4306d671"],["/js/jam.js","462c07d3b2e0f20394d994bbcfae37cb"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","790cd2f28594f8affbd4a450037c48ff"],["/js/rain.js","f656dc28e4ab5c3f8414d35f683278c1"],["/js/rainremove.js","ceacf82842b101f7e54a2aaf5f4bb9cb"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/link/index.html","6fcb13c66d1dbf6884b937335e37842b"],["/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","c48f5c5494a526ef7ca20b0d72861124"],["/page/10/index.html","45602404ca7411ae0397c8ca47c70b5f"],["/page/11/index.html","dd61d10850f92af31f1f5b9b5fcfb049"],["/page/12/index.html","38910fd577be4d478970a58632784058"],["/page/2/index.html","86d4dbe88c58f61c02c696bb15081056"],["/page/3/index.html","bfe8f41e923b9712028232e764928481"],["/page/4/index.html","987eae63ceb2c3c9529aa3011822efd7"],["/page/5/index.html","fdb8e87e33eea79dc3a0a572d9292318"],["/page/6/index.html","0fcab923ba2a7b1dd4d0c31284eaf440"],["/page/7/index.html","ae7f0eccb1462632f413f7c0680c606b"],["/page/8/index.html","a771857d78773e8df2f3d882af7a1430"],["/page/9/index.html","b6947a088a0ba25ea30cf8a5fee83df8"],["/research/index.html","5039ada06fd394c3596d5ec47fd8bf1b"],["/sw-register.js","3ad643b4ac907b4447bb5c179a54a6b2"],["/tags/Butterfly主题/index.html","72aefbff0395597d624c087bd1fd9700"],["/tags/DIY/index.html","3f84087bb1a6c086a9a11b7cd09e22cc"],["/tags/DIY/page/2/index.html","d14f4adae1fc6ecb99d6fb64e7f87605"],["/tags/ICT/index.html","17380b4e9155ccaaa448b1f52b85fc7f"],["/tags/NHK听力练习/index.html","280f3dfd5f127ca1f071bc0d70630156"],["/tags/NHK听力练习/page/2/index.html","0cd5aaa7779524941a77f538d4c449d0"],["/tags/NHK听力练习/page/3/index.html","1fa833ff7ef9906769179134cfe97757"],["/tags/NHK听力练习/page/4/index.html","8e809fd722b72b707aa3b5c54cf3d26c"],["/tags/NHK听力练习/page/5/index.html","4f60e28a3a157081cae96172488c6b3f"],["/tags/NHK听力练习/page/6/index.html","098c6f813d5729f8cb5bbe801acf5855"],["/tags/metro-ui/index.html","af3ba6854320f432e35192ecbf3ab279"],["/tags/vuejs/index.html","001c138d57b6566b1118b41314ead874"],["/tags/お盆/index.html","a4197701c4eba1a9bd32e802dc80abb5"],["/tags/世論調査/index.html","8f4f2af4de45d45b3e3cdd430dc821c2"],["/tags/作品集/index.html","e691715a4e16ea36262446baad460b9e"],["/tags/作品集/page/2/index.html","cd409502d639b8bf9afbbe77a34e8c95"],["/tags/农业/index.html","1fee7ca16299586d3b2168e9b8a2bf4b"],["/tags/历史/index.html","823762b8e6f75bfb2c81868aa26ec7e7"],["/tags/営業時間/index.html","0b7f9a783942677542a5fa70207463ac"],["/tags/国外政事/index.html","8e3b80004c2558d15acf6d170f093a1c"],["/tags/地震/index.html","6310e4dca97262ad5a287a9f89922049"],["/tags/外国政事/index.html","668419be21e58268996768072d090855"],["/tags/天气/index.html","d4f8c871580061299b20d22fe89da646"],["/tags/天气/page/2/index.html","accd4a576ba23c36fff9757aa52af7c3"],["/tags/奥运会/index.html","68ea0301cbaf05fed102ee8951b379f0"],["/tags/学习/index.html","8aa14dbfac61bfa8130e4172f83ac3f7"],["/tags/学习/page/2/index.html","f5c47a6b43da3994224e114202778d67"],["/tags/学习/page/3/index.html","3b1f56e5c41f5cabd36ffc0be8d68427"],["/tags/就业/index.html","794da919b99c2e9fb2ff706b45ac7b87"],["/tags/庐山/index.html","896c32464bc4b9a6189f1f14423c8b5f"],["/tags/座礁/index.html","eaca7c8117b43c747372cb95f1fc8c1f"],["/tags/政府/index.html","148f81f83c853cb1dd752de5c8a9141e"],["/tags/政治/index.html","780e781f5b84ef8398e6d50199ab7e0f"],["/tags/教程/index.html","6949dc5fe45567b752b06e669fe0df06"],["/tags/日本教育/index.html","b8e2bead5a61459f3b81b329395532ef"],["/tags/民生/index.html","a9b5dd450e2a28e4aec176e3485d5348"],["/tags/民生/page/2/index.html","36061ec8404f78b3235b4bf3c8509e78"],["/tags/游戏评测/index.html","d8039dfe6efc0758afc30548f21ee00d"],["/tags/游记/index.html","d4531ee31412f63e132e0303156c1c6e"],["/tags/生活趣闻/index.html","9dac54019bcea85fed3ece35a11ae9dd"],["/tags/科技/index.html","b5cfdf2156d030b454f9e0456585f3c4"],["/tags/经济/index.html","37a40f906a2abe704896563a8968f166"],["/tags/经济/page/2/index.html","7301c14841d8223e47081c9fa4122896"],["/tags/网络教学/index.html","9d68870c0e07504e12f00a6197bc7cab"],["/tags/舆论/index.html","a61851341633ccef0da4ced681b42971"],["/tags/虚拟现实/index.html","27a5e2ec74a6eff100776a06ad266fa5"],["/tags/随想/index.html","09b28b97b3f31e646c4e5be7113fb649"],["/tags/障害者/index.html","00e180384f6af70854f64ccce8754fef"]];
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
