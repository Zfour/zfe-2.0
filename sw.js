/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/05/20/2015-05-20/index.html","aef0b050baa99b3225bc6c60e1c98dff"],["/2015/06/16/2015-06-16/index.html","56a89a60108d2cd93ba3dcdd18bd128a"],["/2015/12/12/2015-12-12/index.html","56ee1ce05db49b84ca6b113dae42caa4"],["/2016/06/08/2016-06-08/index.html","93182e93ede63ea1a572a2d488bfb7b2"],["/2016/12/18/2016-12-18/index.html","4445f627e393a43e1b20d5a6836d18f3"],["/2017/02/17/2017-02-17/index.html","38a3ef54bf0be63f6222d5dd865a4b66"],["/2017/03/17/2017-03-17/index.html","0d9506d17169ac774d8c4dcb3ae41859"],["/2017/04/06/2017-04-06/index.html","84aec36d5ad5262180971fec4c8e7542"],["/2017/05/17/2017-05-17/index.html","504064b5f650f2fff96f8215f8958696"],["/2017/08/15/2017-08-15/index.html","6d0c0c13fab72494f7983910ea3d95c0"],["/2017/09/16/2017-09-16-1/index.html","ac10ba7805f2aaeb19393fb8a9b68c37"],["/2017/09/16/2017-09-16/index.html","598e473cfd6e3ff152799e8f01d1cde3"],["/2017/09/21/2017-09-21/index.html","5e89ec7d0d73737ec4f5ba03756aceec"],["/2017/09/23/2017-09-23/index.html","9b6583408111eb6ff8c2ef0bcfa686d1"],["/2017/09/26/2017-09-26/index.html","644e341be840f2c6982cd030d5e66b30"],["/2017/09/27/2017-09-27/index.html","01078756a5880faada7edad4f1ea4d8b"],["/2017/10/04/2017-10-04/index.html","de79da883b443c302c1a122b7a5742da"],["/2017/10/08/2017-10-08/index.html","bc5b7ce59b3a1e0e96e26f1f132a6807"],["/2017/10/09/2017-10-09/index.html","f3c440ec02997766e52a3609d528919b"],["/2017/10/15/2017-10-15/index.html","d39512b548a219548ddd8e50b2da8cd6"],["/2017/10/19/2017-10-19/index.html","6cbf9376c73d4a5627ce5980e7c7c637"],["/2017/10/23/2017-10-23-2/index.html","6d6788b47f20dae61fb5301fd5f5ebe5"],["/2017/10/23/2017-10-23/index.html","9b47ec3c8574c52772a51213a08f23e8"],["/2017/11/08/2017-11-08/index.html","dd456822b90d895f01e5be45eddce133"],["/2017/11/12/2017-11-12/index.html","25797f685655d34afda304de70ef14eb"],["/2017/11/15/2017-11-15/index.html","c1943762ab992fb7ce705c844cf1a93f"],["/2017/11/27/2017-11-27/index.html","cd1487557a41afea1bff2b47f655d52e"],["/2017/12/06/2017-12-06/index.html","8f166e93c567ece48772540501d4d99f"],["/2018/02/12/2018-02-12/index.html","6b764dbe976be56992305bda0547ff10"],["/2018/03/26/2018-03-26/index.html","4f22e5890d6d3141f1e72f53e1d25d69"],["/2018/04/02/2018-04-02/index.html","5fba43a70533092d84115f331faf7d22"],["/2018/04/24/2018-04-24/index.html","a2b6bcf4d119ab917701a3a23131a213"],["/2018/05/18/2018-05-18/index.html","077b6142ab76c1950c982c61584ec9e3"],["/2018/05/23/2018-05-23/index.html","f77207aa970bf28bd253580ad8b60040"],["/2018/06/08/2018-06-08/index.html","5033573cedea72f43a7b078aa33cd6e0"],["/2018/07/01/2018-07-01/index.html","253bc2b5267e691b27c738dde9af7338"],["/2018/08/30/2018-08-30/index.html","c6a9bb4d1616c40e39df661e63db2896"],["/2020/07/20/2020-07-20/index.html","9ca35543d54f36aca04c82381fe5fac4"],["/2020/08/01/2020-08-01/index.html","dceb6d2a527172a4a1f4fe0bf424d1e5"],["/2020/08/02/2020-08-02/index.html","8def596c481aa714e8c0ddc9c899282e"],["/2020/08/03/2020-08-03/index.html","336649f8694794b8498f9c58d9ccce83"],["/2020/08/04/2020-08-04-1/index.html","63ec8b44314c47d7bc049e34ff2322cc"],["/2020/08/04/2020-08-04-2/index.html","e927c335ce36231bec2fef0636f01a38"],["/2020/08/05/2020-08-05/index.html","60a85f2031ff6014eb0ced9765f2dfd6"],["/2020/08/06/2020-08-06/index.html","394198d42562e1b4428b58ea533fae1b"],["/2020/08/07/2020-08-07/index.html","6aeaa49069c5471f0bc401750153c0bb"],["/2020/08/08/2020-08-08/index.html","1bc1d31e369d07b6da412a69bd135972"],["/2020/08/09/2020-08-09/index.html","851793e0293ecc385e1d733d5940f731"],["/2020/08/10/2020-08-10/index.html","0ba755d026dc407ad017a09197d8f3f0"],["/2020/08/11/2020-08-11/index.html","4f6b625ad642854ccfdb8a344f5977ef"],["/2020/08/12/2020-08-12/index.html","0df756bf8a5706413d4747d4b59bac41"],["/2020/08/13/2020-08-13/index.html","0a3f0f8aa7fb25f795960223947ab07f"],["/2020/08/14/2020-08-14-1/index.html","f6f7c5737a26fb33a74dc9f5f20aebbb"],["/2020/08/14/2020-08-14-2/index.html","7d55cc37c277ee3b03233f5942155e93"],["/2020/08/15/2020-08-15/index.html","da247bdf1fbef1a610fc81e026002ba3"],["/2020/08/16/2020-08-16-1/index.html","23a91443e1207e330ef124945a255f72"],["/2020/08/16/2020-08-16-2/index.html","2361fc428946b003c6d13e5d80f0a9c4"],["/2020/08/17/2020-08-17/index.html","043cbd609b537b350a35e990113f5449"],["/2020/08/18/2020-08-18/index.html","23f8c68395845e8b37df0de8ead703df"],["/2020/08/19/2020-08-19-1/index.html","1ff04437edcc792291d36c45af268b9c"],["/2020/08/19/2020-08-19-2/index.html","15f93f42afac9e5831a6075965215b8b"],["/2020/08/20/2020-08-20/index.html","90fc6f902ac27f6f57d40496cd3362d8"],["/2020/08/21/2020-08-21/index.html","4f300367e9df24caf985bea8eb2b1668"],["/2020/08/22/2020-08-22/index.html","33c0ab054e931a553ff05490cd08b120"],["/2020/08/23/2020-08-23-1/index.html","bbb75c5880904a6ee82b1354780160c2"],["/2020/08/23/2020-08-23-2/index.html","4bbd6892a2719fd9e6867bd72eb7724f"],["/2020/08/24/2020-08-24-1/index.html","449e62a20aa71744f46c267d2bbcfc27"],["/2020/08/24/2020-08-24-2/index.html","412d9b0aea85e6fc24a38fe190675f96"],["/2020/08/25/2020-08-25-1/index.html","7e011faf3eeedfe3a0ef20d1e59ad498"],["/2020/08/25/2020-08-25-2/index.html","a74ce6c330be96cb1da47a23dcb49078"],["/2020/08/26/2020-08-26/index.html","968d6986ef900194b0f57253fba96de9"],["/2020/08/27/2020-08-27/index.html","8db5def2eb3a866b1e06f1511e194c76"],["/2020/08/28/2020-08-28/index.html","3aaef5621d3cc5ec269e781785c1bae4"],["/2020/08/29/2020-08-29/index.html","c03e93ceb043d20e532954e401e8fed8"],["/2020/08/30/2020-08-30/index.html","a2240540e26700d060403413f19d97b5"],["/2020/08/31/2020-08-31-1/index.html","7c1a59718e68da683877af2ef76d01d4"],["/2020/08/31/2020-08-31-2/index.html","aa8d1fa7aa8370a322649dbdb7208dcc"],["/2020/09/01/2020-09-01-1/index.html","6939becfed79c615a07395cb10792ca9"],["/2020/09/01/2020-09-01-2/index.html","3aaa8210e2b0dc136b2e9747a9593688"],["/2020/09/02/2020-09-02-1/index.html","04705fe2296029eba4e29eeb67956536"],["/2020/09/02/2020-09-02-2/index.html","0b4996108fcc0ca89b1255871eeb22af"],["/2020/09/03/2020-09-03-1/index.html","b35969a535a34ef6627743e0eef6f514"],["/2020/09/03/2020-09-03-2/index.html","d628fc1c2645a54fdba96384a667dcf6"],["/2020/09/04/2020-09-04-1/index.html","6913440453c816d7916cd003a71d7d8a"],["/2020/09/05/2020-09-05-1/index.html","880e5b4000f21fabc79a137df15eb8d3"],["/2020/09/06/2020-09-06-1/index.html","ee632a800e73e5dd82913b0b78730664"],["/2020/09/07/2020-09-07/index.html","897a09af267997871c5050f5f8431e19"],["/2020/09/08/2020-09-08-1/index.html","1a91b420b90de68677b40f3e57841489"],["/2020/09/08/2020-09-08-2/index.html","98681f0ac19792527e8f3ed6925290bc"],["/2020/09/09/2020-09-09/index.html","ea43e1a7e147006a17cd664243ea1d7f"],["/2020/09/10/2020-09-10/index.html","086181ca1592046d02082985f596aad9"],["/2020/09/11/2020-09-11/index.html","1d8a49d849f224563ce7b66b21b47ea5"],["/2020/09/12/2020-09-12/index.html","c746dc371dfef7e085d60a02c7a38154"],["/2020/09/13/2020-09-13/index.html","310556b4359e9436a6b0bbd1a8ef906e"],["/2020/09/14/2020-09-14/index.html","14bbb4b9b4c7c06c41a5816757b0ab24"],["/2020/09/15/2020-09-15/index.html","54762f57e367c0fee4eb0c436e2a03e2"],["/2020/09/16/2020-09-16/index.html","77f2d5a348a06d79f9c7d843ccfe2f9f"],["/2020/09/17/2020-09-17/index.html","62d77bfc6a23dcb5b97a6a5c7917504e"],["/2020/09/19/2020-09-19/index.html","158cc704264b874574bd6ccbfb4c78d2"],["/2020/09/23/2020-09-23/index.html","3101bfcd901edb1b90e731ca4f10f4d6"],["/2020/09/24/2020-09-24/index.html","d6f21840852a43406b81323682119cc2"],["/2020/09/26/2020-09-26/index.html","5a4a3a25d25638c16981645a1f8ceb3c"],["/2020/09/27/2020-09-27/index.html","893283ce8e0c4e2b6ee7ef8433eb574a"],["/2020/09/28/2020-09-28-2/index.html","440d7c3128c23a6b0e38dc76f2a8ebe5"],["/2020/09/28/2020-09-28/index.html","9651019e4fc91d5c00153b453b5ac21f"],["/2020/09/29/2020-09-29/index.html","96e80f9ef06cca800627384393afb19d"],["/2020/10/03/2020-10-03/index.html","7a68095f5989f8cffd0bbba8a37aa5cd"],["/2020/10/04/2020-10-04/index.html","772dcdc7334582d5a2042ccd2ca28897"],["/2020/10/09/2020-10-09/index.html","70dc1ac77993f54ca87be2d0ac807918"],["/2020/10/10/2020-10-10/index.html","5c4464c21f8a3993c3a64639ae0ad627"],["/2020/10/11/2020-10-11/index.html","e50a30e0d1f5e107dfac6a807a0e357c"],["/airplayervisual/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/airplayervisual/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/airplayervisual/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/airplayervisual/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/airplayervisual/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/airplayervisual/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/airplayervisual/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/airplayervisual/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/airplayervisual/index.html","db885734e840c4e51ce8fa99477c265a"],["/airplayervisual/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/airplayervisual/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/airplayervisual/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/airplayervisual/js/jamsetting.js","7927507e0080ddf55c6d8b5f526bd942"],["/airplayervisual/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/airplayervisual/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/airplayervisual/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/archives/2015/05/index.html","3a409a4d378530a1677823d4e14cb706"],["/archives/2015/06/index.html","e93400e6fe702e77306d4631eab6f992"],["/archives/2015/12/index.html","1c3219cc5059cd43e1e53d70b51fda15"],["/archives/2015/index.html","27afb933bb01eecb57cfd2f0d275c909"],["/archives/2016/06/index.html","8bf612a8f11690a7feb7aa27d03175e4"],["/archives/2016/12/index.html","57290abd92f902c60b33c6d4ae59778f"],["/archives/2016/index.html","a1bad95c83fa1c60b1d1118fffb8e983"],["/archives/2017/02/index.html","e946b5cb2ae4fa215d303f13d2339a01"],["/archives/2017/03/index.html","f302e640fa9620fed93ab843b4784ad2"],["/archives/2017/04/index.html","9e48c431ff13de03fba0619bb7ea6ea9"],["/archives/2017/05/index.html","40ae84a46cb885eed85888b6bab0cd37"],["/archives/2017/08/index.html","c748b63eceec1412527fce8809baa198"],["/archives/2017/09/index.html","0e11820880b71e4fe8188c45a94b8254"],["/archives/2017/10/index.html","444279e1b41e359a92b1b211d71756f4"],["/archives/2017/11/index.html","a00bfb4db944ec13457b8461d6dea330"],["/archives/2017/12/index.html","a76b0f843a56b60811a676e30ed5c6dc"],["/archives/2017/index.html","66b36bef455047afa24ebd2726c41030"],["/archives/2017/page/2/index.html","7992b8c3116b9d0c0a8f04e15ee3cddf"],["/archives/2017/page/3/index.html","6d6c6eee22b91915007a97489c26cab9"],["/archives/2018/02/index.html","ae3b589573589919052519516e0d6cf8"],["/archives/2018/03/index.html","425e464e16e25061589dfdf05beb5071"],["/archives/2018/04/index.html","bb516b289f1a8b935fb42f114232d13a"],["/archives/2018/05/index.html","a15dfe398854dee686e2e2aa4c483010"],["/archives/2018/06/index.html","a2551fcf331a124eb7772c5e63532e12"],["/archives/2018/07/index.html","85ca2abf7a1d8abd6d376a018ecf50c8"],["/archives/2018/08/index.html","23cc4d600331165660c46741ccf01f8b"],["/archives/2018/index.html","88116b3d70c9ed12b7096229e33defdd"],["/archives/2020/07/index.html","3de5003adb134d47d2d0d4f9133c0a28"],["/archives/2020/08/index.html","069b6f23f75baf72078702b18a9b81c6"],["/archives/2020/08/page/2/index.html","83fe1ea2fc2298bd18ea80183234eae2"],["/archives/2020/08/page/3/index.html","3f584751b8a8116514e2567cc0298ff5"],["/archives/2020/08/page/4/index.html","d6241af8180a42a9494aa2d295572d2f"],["/archives/2020/09/index.html","5516e29979045f5634c696a137bd571e"],["/archives/2020/09/page/2/index.html","585a3fa715f522e736d18b93b0d56545"],["/archives/2020/09/page/3/index.html","6d42c6b940d4e74b57f6ea8658431877"],["/archives/2020/10/index.html","20f58b281b89b60a0382b6b88d622814"],["/archives/2020/index.html","7cbed8048014b6319db756aa5cc90369"],["/archives/2020/page/2/index.html","721f99eb2daecd54b6b37253d1d9e98c"],["/archives/2020/page/3/index.html","a7d2638f3ccc308cf9e9aa315b61f279"],["/archives/2020/page/4/index.html","07e464b791783c7fab226a13d16bf5db"],["/archives/2020/page/5/index.html","8b1f9c1eb9fa35c57b859cd90a531cfb"],["/archives/2020/page/6/index.html","11bf8eaa3b50cf4f707314b1bed84501"],["/archives/2020/page/7/index.html","137de5054b4f4e1a59e70a1acaa0fa11"],["/archives/2020/page/8/index.html","ec23d6a12f59d1f214829dabe4101dde"],["/archives/index.html","d476bcd716168e61f56f0393f1a5c500"],["/archives/page/10/index.html","2667e6e39f4cbc313b0743dfad2d68bb"],["/archives/page/11/index.html","7612bd7351e980e1b13708b249053ec7"],["/archives/page/12/index.html","0f57c1c8d13f4e75a3917b2f77450f78"],["/archives/page/2/index.html","2e5a70f5ba5b1dec66086d339b58d296"],["/archives/page/3/index.html","fae5e685fc32ab6a24ab2f77a3de0870"],["/archives/page/4/index.html","ed2fcc8999ce4baf552151295dce2590"],["/archives/page/5/index.html","4cfc684acf6319a6dd1aa8d9351dba60"],["/archives/page/6/index.html","c9de8a09714490950589009b896928db"],["/archives/page/7/index.html","a49fc3087c2f4b153ec743ae93c6c358"],["/archives/page/8/index.html","82e3c1efeb1e1f16d892e7c7105bf595"],["/archives/page/9/index.html","1c7aaf2963107d59191cb1aa8f2b5628"],["/categories/NHK听力练习/index.html","6a503e5507a95f33e13f2b111f414131"],["/categories/NHK听力练习/page/2/index.html","65f86e67697f6bf78a3e35dae23aefb3"],["/categories/NHK听力练习/page/3/index.html","5eb73f2aaa4cd046042a13913d89d66c"],["/categories/NHK听力练习/page/4/index.html","87f060086ddaf17461414e814919cd8b"],["/categories/NHK听力练习/page/5/index.html","93b6db17b3a3f1ea455038ad590b0df8"],["/categories/NHK听力练习/page/6/index.html","5ca0dc3190fe04277bb4e97f456f0b59"],["/categories/作品集/index.html","fef8734c8618a1e20f57cf556b0e4d9f"],["/categories/作品集/page/2/index.html","3a221f0cb77e5aaf7eaa0b8cd0b53cc1"],["/categories/学习/index.html","344c1a059289ec8a36d3d05c92fe623b"],["/categories/学习/page/2/index.html","4420df3c6f8a9616173997cecd915be2"],["/categories/学习/page/3/index.html","c56e86babe70ef85f489fb8ebbf091c1"],["/categories/游戏评测/index.html","ffc18ce4b06b69788a4834631647e28d"],["/categories/生活趣闻/index.html","d0bdf76bb91e9668514cb3f790597540"],["/categories/随想/index.html","4be5ae3475b6e392742ca38d7e72a6e5"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/addcss.css","59cae1ddbe6925c34f846ffe12d19921"],["/css/background.css","32d5acccbb94f987faf37cfdc3fd06df"],["/css/calendar.css","0090a32d2a61d42c5bfed254bfba078c"],["/css/clock.css","65602c2385c7eab42ee3804cd6ee0a5a"],["/css/cursor.css","c1a23e168c5b794ff367eb0ae77eb26b"],["/css/danmu.css","2a5b914a9592bcd353425c6d5fa7af8e"],["/css/index.css","36eb36d0f5531dd7a8f4c8f925188615"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/loadingline.css","bc1ee020a6a11fea17b915b97e6978bf"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/html/calendar.html","bddcec1edba7f4c49fe5cd75f8cdf5b2"],["/html/shiyan.html","97a631e856a16409e62c2dc126297439"],["/html/shiyan2.html","eb2edd9afc40848cb093b49f8f362eef"],["/icon.png","8ec68de45d18642ba9baf2447e62f476"],["/images/AMJ1.png","d27a6725d1aaaf5324248da4312ab6c2"],["/images/AMJ2.png","00e22eba5901e5bd674e42228cd5bd26"],["/images/AMJ3.png","c8c9ea6348dfcad3a641899d5b587431"],["/images/FOTO1.jpg","4b6f100861908e2c7044cffbdb4a0c1a"],["/images/MVVM.png","ea5a002ee2f85c71a0db51d5adb5de19"],["/images/UT.jpg","367f4e432f9db55a92b2a290c4b0a476"],["/images/UX.png","a183974e958d41d1b6acec70bb7ea00a"],["/images/WindowsTerminal.png","8ac29cb56b8a1768cf7de071e9f1ae6f"],["/images/air-w.png","c1cc32f9d3e17551ca11a7d18a0b533a"],["/images/anzhuang.jpg","912b2489957f8344406edc5e5cebe5fa"],["/images/api-setting.png","2c0bb074390779721cba009e96c5417c"],["/images/apikey.png","1f31121b190eb1f990bcc3e27524bc03"],["/images/backpic1.jpg","86a6fa88167feb338fbf1a4e9057114b"],["/images/calendar.png","86319b08b93be7c8bc47cdba7a169563"],["/images/clock2.0.png","0a0f122c7a25262fc02ee99df0ef21eb"],["/images/example.png","aaac9983e5d59f919bf282dcff2edb3c"],["/images/foto17.png","28db4c6608ad1ee6b34238cafab25e5e"],["/images/foto2.jpg","be95b922512d004a61f83c97af3e2602"],["/images/foto2.png","0dc07d4e1b00526a273a89dc8b81548d"],["/images/foto3.jpg","551c0616c92c4ee7cc17dd458b3c46e9"],["/images/foto4.jpg","9d1d9fea759a41afc0061866e400339a"],["/images/foto5.jpg","984f618b15372f37d54f507e6f379f10"],["/images/foto9.jpg","b683fc0b998e80ff8f5a3e45e889807c"],["/images/girlpic.png","ff1e8427ed555af639e6d849f8f648f1"],["/images/girlpic1.png","698e5570e821c3cae643cc9777c2292e"],["/images/girlpic4.png","551882e4b9b6afb79000fd34c0dbf5e5"],["/images/headimage.png","332502f36a0297b30cb7969fe6de8451"],["/images/hexo.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/hexoWT.png","c027cc9f5665c7d7ba657e7a4bb40017"],["/images/his-json.png","7d8a71e38ab684107446e5c72c31854e"],["/images/history.gif","0459a3dcf2317253de0b34482880c63c"],["/images/idea.jpg","5eb08bf6c965588f03c8860f201cac45"],["/images/life-cycle.png","02f39ea5c041d45938fda4b50f234cb7"],["/images/life.jpg","74d2d9c5f48ec59e3badeec690941812"],["/images/listen.jpg","9d4f73cd5634f43deaed4f9aca03f9a3"],["/images/magnet.png","4899a924f3de0d19dbe0415128c07d65"],["/images/magnet1.png","8d010eb86ca943e036adaa7de57aee7d"],["/images/magnet2.png","293cb414a8ab93b43bde3bebf9cf0cfc"],["/images/magnet3.png","1923148630e2e094ff80bf35aa604c10"],["/images/magnet4.png","9bb4f963ac1c09f02d62525f513f492c"],["/images/meilu/1.jpg","cd67abcc3f543b5c66adc4f9d9c5c628"],["/images/meilu/10.jpg","ac9fb2711e477b5db1c3acb57e899045"],["/images/meilu/11.jpg","364caad6dfc356a3dc630fa067e48e88"],["/images/meilu/12.jpg","274767e5708f79934e5bdbf73eda8f0d"],["/images/meilu/13.jpg","dcab12b84454770b208913db63e825ac"],["/images/meilu/14.jpg","037cdd048284e621f27e17a2c59e8ea7"],["/images/meilu/2.jpg","f6cdb65ae3fad4523b32f5ee38696b60"],["/images/meilu/3.jpg","9e5df3612c2d93bf57313186c954aea5"],["/images/meilu/4.jpg","69ef2d6f4bcd79cf4b4e672b60c6751e"],["/images/meilu/5.jpg","ce81ca16def7613b7ebb368fb554f14f"],["/images/meilu/6.jpg","cafd5b62305f806754a75cc3af8c3b77"],["/images/meilu/7.jpg","b8ae865d386e1e713a6034da6b090c10"],["/images/meilu/8.jpg","afad7a7bf1066c817a8d2e7566bc780d"],["/images/meilu/9.jpg","72f9649f56b564eacf23ce3dacb88029"],["/images/metroui.jpg","5503bfffd450d9ab572b67ea00941571"],["/images/metroui/1.png","79a03b408c19c74eeaa8ff6e17a03f9d"],["/images/metroui/10.png","8309fed71a15c78f2dfa3af1ff75a5f3"],["/images/metroui/11.png","aaf1a007cbae12f93cc2688bace18d28"],["/images/metroui/12.png","0758ea282c3828c47e5c64520ff85783"],["/images/metroui/13.png","12ca7b511927cd4b26e97f3b20908a32"],["/images/metroui/14.png","f44ba7680f7b36df437e2ae2588d0565"],["/images/metroui/15.png","e8927c78b125b805af7aa86fee815ab6"],["/images/metroui/2.png","e604d3c662b996f06f22753ba9ab379f"],["/images/metroui/3.png","664e3b7490f2f95d5547b8ba79a65456"],["/images/metroui/4.png","c0f255344cafc303a1d9c7404da37149"],["/images/metroui/5.png","da2074cdb1298aca826abc1a5c441300"],["/images/metroui/6.png","efef2f087127614b4e03bcbe9a347018"],["/images/metroui/7.png","a4d34b1a2dbe3a58d3a92276880be039"],["/images/metroui/8.png","1d34a626bbaa898a60d4501936bcf962"],["/images/metroui/9.png","0663697c1667b377fe2623bd65e00b31"],["/images/metrouilogo.png","aea81b42d1c2c96440f74cf56ad82e2f"],["/images/nhkimage/2020.08.01.png","af4c55b2ae1d5ab2f56c75a87fcdfdb3"],["/images/nhkimage/2020.08.02.png","c355d41b90f5c65823f96c5f6868ce53"],["/images/nhkimage/2020.08.03.png","fddcedb40d7f28b2ccb90814351ad5c8"],["/images/nhkimage/2020.08.04.png","8b4518ec5a8513f442980ed7167136b1"],["/images/nhkimage/2020.08.05.png","590abfb19334b0c3cee5a005674f2253"],["/images/nhkimage/2020.08.06.png","d469e21100c42435e88f2bdf07f93da1"],["/images/nhkimage/2020.08.07.png","3ca9e2c8b8a09a38423d73cd36e8de9d"],["/images/nhkimage/2020.08.08.png","4420c2d899fe4eb90c48bae0da8418a2"],["/images/nhkimage/2020.08.09.png","df14be338f9c920818dd1daa6aa955ee"],["/images/nhkimage/2020.08.10.png","c4e2ed023cd3dbfd4986add35ca9357c"],["/images/nhkimage/2020.08.11.png","cf562339e57f673d394f3e6cdd1f60cb"],["/images/nhkimage/2020.08.12.png","81dfa179fea3052ddcf73912ea368f67"],["/images/nhkimage/2020.08.13.png","8cf26c2642e7a27cbd86fcbda8bae8d9"],["/images/nhkimage/2020.08.14.png","d88eeb678b3ed3651d597e61957e264a"],["/images/nhkimage/2020.08.15.png","b9879f193867edcffeefce62c9dc7153"],["/images/nhkimage/2020.08.16.png","46cb914aa1d556561897767ec9ff66a0"],["/images/nhkimage/2020.08.17.png","ea1af9645b5cc9cbaafe70a91dd15cca"],["/images/nhkimage/2020.08.18.png","e87e4de39a6f06cf4283a63af92dd8de"],["/images/nhkimage/2020.08.19.png","8001a951513b542a98ce1151be5bd87b"],["/images/nhkimage/2020.08.20.png","4bc8fafa3ecce30d340b1350715d78e3"],["/images/nhkimage/2020.08.21.png","07ad1337e127922abff27da6c672549b"],["/images/nhkimage/2020.08.22.png","b2b5d53ba46015f64048f9d803b12179"],["/images/nhkimage/2020.08.23.png","225af8c0cabe5218ec634d1b8815fd95"],["/images/nhkimage/2020.08.24.png","1d54a484a6e2395aabe9be005cd90361"],["/images/nhkimage/2020.08.25.png","8008ba169cfce0ef2041329cd29b6b77"],["/images/nhkimage/2020.08.26.png","72a2b8094003a54c97a34ea97cf21bc3"],["/images/nhkimage/2020.08.27.png","893407e604804d215c8fef8bcd5f2684"],["/images/nhkimage/2020.08.28.png","b542280b7341759890a99cbd44d822c5"],["/images/nhkimage/2020.08.29.png","620e2e7d4772e39615fd1a88cdf49717"],["/images/nhkimage/2020.08.30.png","f645d7ba2dcb506f9ec6fb9244425ad7"],["/images/nhkimage/2020.09.03.png","c5262f3aa87190e0273383ea1e445681"],["/images/nhkimage/2020.09.04.png","c07149c32aa41c03bc7dac82a713f6b2"],["/images/nhkimage/2020.09.05.png","4e43556e1cb3b7f4d75f0f6127616a54"],["/images/nhkimage/2020.09.06.png","1021d2ae04a7f109404f857a2a7629cf"],["/images/nhkimage/2020.09.07.png","db9827e9f0a4cf1401b559b4644a0204"],["/images/nhkimage/2020.09.08.png","efe1030b73dc1c01f169c3122a194426"],["/images/nhkimage/2020.09.09.png","f6ba3a1c6cdeff88404ebe2a646f2eb5"],["/images/nhkimage/2020.09.10.png","3471b05d02113517359a9e2167befcfa"],["/images/nhkimage/2020.09.11.png","921a541a8bffb1aa436df2eb6db7c99f"],["/images/nhkimage/2020.09.12.png","a51f8ebaddba69bb80f9259a30f17e65"],["/images/nhkimage/2020.09.13.png","0399889200493cd2154ffc407e2bc400"],["/images/nhkimage/2020.09.14.png","eaaf3da69a39ed316b7fc8c4d409bb0f"],["/images/nhkimage/2020.09.15.png","5774959ea4061c9298ea174f0862cc3a"],["/images/nhkimage/2020.09.16.png","0c5a00f74020740fda589c02e4b3f917"],["/images/nhkimage/2020.09.17.png","b5aef734e3a7db4862ca3fe4e6769dc2"],["/images/nhkimage/2020.09.24.png","5982a7b3843f4ae43b2b4bc4b0c577d6"],["/images/nhkimage/2020.09.26.jpg","c6415af781fbdd36fdb034f74646129b"],["/images/nhkimage/2020.09.27.png","27aa6f6a8d5534ccd99cff261dcd9eb6"],["/images/nhkimage/2020.09.28.png","0f4318d1ff17a33de364432a1c44b5ad"],["/images/nhkimage/2020.10.09.png","6408d9f7e66fdeba8b9207939a08cf8d"],["/images/notop.png","d25c272e5ce312a880e04ce8a0b27683"],["/images/pasted-0.png","552608d8f6e39369aa30c6e332a32826"],["/images/pasted-1.png","baafdacee93c99e99418aaedbf524fda"],["/images/pasted-10.jpg","395cff6f64ab5df19baa3572ac98e541"],["/images/pasted-11.jpg","56e5df07c96634638abf7995b25c81ab"],["/images/pasted-12.jpg","61b3f803b85ce3640d7a9ba7efb9da6b"],["/images/pasted-2.png","2f410e53c811f92a6135f48857776f5e"],["/images/pasted-3.jpg","bb5717e691e87355e7d63a5f3a87ae62"],["/images/pasted-4.jpg","10041d0e3567b24b81222ec5075d6492"],["/images/pasted-5.jpg","ac5047a4b48c6cdaee86fa1863e33904"],["/images/pasted-6.jpg","1556ae8d3ad5713d60237ee4d10e81f0"],["/images/pasted-7.jpg","913fde1686587646ddc663bd810cc81d"],["/images/pasted-8.jpg","fc83268081fb4b6b6ecb1ffa1ec5af7f"],["/images/pasted-9.jpg","25e0fa3496591501f5c29d0b802b77d2"],["/images/pet.png","2b8c121909497e57057478856fe48a94"],["/images/pet2.png","dfb1d6a17b527ccc0c600e6ad31f55e5"],["/images/ps1.png","0917ba91f21b6944dc08d35c41a326d2"],["/images/psb.jpg","6a27c58337875c776af0a7667598b401"],["/images/quse.png","7cd1ec12b804305430cb4cdc09c7a893"],["/images/rain.jpg","9c26acc44c692b6a63e134be07b07c18"],["/images/shezhi.png","281bf545f6a4024e2d0b7120bc398a21"],["/images/soul.jpg","d97b4099c0728ff6123d006fa62db86e"],["/images/study.jpg","a9b1cf95ee6bd9f3913e8ec6a6a6f44f"],["/images/tianqizhizi.jpg","dd48d78b4eeaaa52578352f9ef570b14"],["/images/vue.png","cf23526f451784ff137f161b8fe18d5a"],["/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/images/work.png","e521cf5b834292fde1c50e0a0f5802f9"],["/images/xiaoguoyanshi.png","994a3b710d36df0a4630cd9a768c7f7b"],["/images/xiaoguozhanshi-m.png","1fefca18214fc4889d1bb76b81887c9d"],["/images/zfe.one.png","b41f689341882058ffb28c4cee499bde"],["/images/幻想终结之日.png","0025c4d3973bdfedb80db3f78c59fa47"],["/images/时空战纪——游戏建议及意见①.jpg","1337457f14a8dffee66d94f8915b54ff"],["/images/简历.png","d70507ee4615c9e324578c0d777e6855"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","b2816f18531e7470afc88d9f63c2b52c"],["/img/favicon2.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","363e6db76e5a82869d90d4d0cb0e8462"],["/js/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/APlayer.min.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/airvisual.js","71cf86bfd452ca01d92438d8266416ee"],["/js/airvisualapi.js","6931bebe1696688d109963187fc2eace"],["/js/background.js","94c8410b174f58594cf81ec99054968b"],["/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/js/calendar.js","a58e02711cc6dec4dc04257e555b8923"],["/js/clock.js","ead1a80f7219c166e1180674b7d8c70b"],["/js/color.js","3730bb4f7b185e6f5130ac28bace968b"],["/js/danmu.js","6b6ae6b7f1b42dd4857541f43b2bb733"],["/js/echarts.js","dc1227b1eba1ba47fd185a387d0a7d37"],["/js/gitcalendar.js","fadfa8a42272cd322118653dca512a7a"],["/js/history.js","20459f7db325e597e64903f4c0d19306"],["/js/historyroll.js","a3e9ac376106816c50a61f9f4306d671"],["/js/jam.js","462c07d3b2e0f20394d994bbcfae37cb"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","790cd2f28594f8affbd4a450037c48ff"],["/js/rain.js","f656dc28e4ab5c3f8414d35f683278c1"],["/js/rainremove.js","ceacf82842b101f7e54a2aaf5f4bb9cb"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/link/index.html","d5b42f2fdf435f9d02ea8b34cc842aa4"],["/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","05f0fb38ff8616d61f0d4bf0f7227926"],["/page/10/index.html","5571ed8fc44e492e7615f803aa5442bd"],["/page/11/index.html","9e0e0f19d1e599a61ec5594499ea9f8e"],["/page/12/index.html","60a6cbde55c3b0f8ee645d62c7ee1f0a"],["/page/2/index.html","9ea841cc658f9a16a802308b09f789ca"],["/page/3/index.html","84fc96b651caecbe480f13ab1b09355e"],["/page/4/index.html","708cbcfa4b989d11ba934ced02d6d19d"],["/page/5/index.html","4a29cf16af671f997b449088a230400e"],["/page/6/index.html","7ac5554c6f1c9ef4a9018ee982f8d06b"],["/page/7/index.html","f27997cf8e2c7a3bea1eb4830a48d4d3"],["/page/8/index.html","2578fc9e33272f8a033d35d11ad48322"],["/page/9/index.html","ee137bb16421b5bcd038f364ab2a0360"],["/research/index.html","f023d78a753a27f26e8cd0635167df91"],["/sw-register.js","d159fbbb3ded508af2a70893e6d557d3"],["/tags/Butterfly主题/index.html","9e66c9233a9c1e58e3fb06a500f4621a"],["/tags/DIY/index.html","b7f4332462443637bddf55aec6867efd"],["/tags/DIY/page/2/index.html","ff4cd805e8506597a1e87192b62238e5"],["/tags/ICT/index.html","49ff5f98b83335c7b9c86993d56dd123"],["/tags/NHK听力练习/index.html","d9d1a49d361de9ede2a806443c451813"],["/tags/NHK听力练习/page/2/index.html","cc526733e405c1224e200d26584f9ab2"],["/tags/NHK听力练习/page/3/index.html","3301cef3ffbda820b4df2aba502d0fb2"],["/tags/NHK听力练习/page/4/index.html","7c820aeba492115a6dc0f33bc7326148"],["/tags/NHK听力练习/page/5/index.html","5c8390a3036c291a773e0ddb720e866b"],["/tags/NHK听力练习/page/6/index.html","e48f5c71291dde7957c2bb51347f0707"],["/tags/metro-ui/index.html","6003286e9cbd9356e1926d0697ceeb99"],["/tags/vuejs/index.html","ae10b1919692fb2613028b8f05ed26cf"],["/tags/お盆/index.html","27f80d215d1ac5d1e776ed188e2b77a9"],["/tags/世論調査/index.html","369a37ac0675a75d2fcfc4803bcfd8b9"],["/tags/作品集/index.html","5b91fd287590338f67e3d399d39f5375"],["/tags/作品集/page/2/index.html","fd333d9264026832b46b44daf5e41073"],["/tags/农业/index.html","6d5ab7d0aa47d435995daafba7d26761"],["/tags/历史/index.html","2dceab7a60941c70b60014b5846d22be"],["/tags/営業時間/index.html","f28ce1a87a5aebc7614e7ebce585aa1b"],["/tags/国外政事/index.html","b1c18ee32a0fe8ac823dda49b74b4023"],["/tags/地震/index.html","633b5e4eda92c6e2558944d6d6835845"],["/tags/外国政事/index.html","7d477e409b4527acfad14ad9a179be7c"],["/tags/天气/index.html","15c517e627c8a6488775138b80ecf4c8"],["/tags/天气/page/2/index.html","de1f4e871ae1a2e761ead916af9733f4"],["/tags/奥运会/index.html","e0a893fe7fd0ba408d2a2b4aba9accf1"],["/tags/学习/index.html","9251c47dac634a589ad8a97fa7be2687"],["/tags/学习/page/2/index.html","89c8211c2b93df4fa2055607ecc3d653"],["/tags/学习/page/3/index.html","30b8b24bdcaa26aad7c6a4d31ae22a31"],["/tags/就业/index.html","a86adc09967e9da1b468aaa97f68cbc0"],["/tags/庐山/index.html","ae827e1a58c52e207fcb596fc373c887"],["/tags/座礁/index.html","952c9dcf9a9aa0edc570736c01e1f17d"],["/tags/政府/index.html","2c20f6f272210761ebe2c2492aaebb9a"],["/tags/政治/index.html","420eed986fc33c5160fb399e7c5c35bf"],["/tags/教程/index.html","517259d13b51cb7e2cd6b5d2c1b62d0c"],["/tags/日本教育/index.html","e0aa47b9fc3c51c94440e814b45ec2c3"],["/tags/民生/index.html","37a5b5f217985ec8bb6b7215394365bd"],["/tags/民生/page/2/index.html","192fe866a1efbc0d1bbd40b6594600a2"],["/tags/游戏评测/index.html","a64acc858d8e6727a661a9db6ae6ae28"],["/tags/游记/index.html","8aca292fd6c6605e085fad099881bee0"],["/tags/生活趣闻/index.html","80b350355f235a61c55560e97ee35d6a"],["/tags/科技/index.html","6ca886c463ea3ca33c7f7fa7120a0953"],["/tags/经济/index.html","a8ae846ad2c0d9d7121bdc648b6d8abf"],["/tags/经济/page/2/index.html","3c4996cbcd937460c1d85856f9b753b2"],["/tags/网络教学/index.html","09cc12a40e969c5df0760e825499ffdd"],["/tags/舆论/index.html","3f1681b1d9de4dbe42407157608bbf82"],["/tags/虚拟现实/index.html","90767e5daba9687452617250fbea972b"],["/tags/随想/index.html","248809f0a44597fb7de860f048c1142e"],["/tags/障害者/index.html","00dec65fcfada59cac4e8cc579c389fa"]];
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
