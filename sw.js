/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/05/20/2015-05-20/index.html","db6ac0e0105bcef48956c51638cc2198"],["/2015/06/16/2015-06-16/index.html","6e04d03f3998d7ae51ec6bf1272fabe6"],["/2015/12/12/2015-12-12/index.html","287384760cb23d5c946785d496c8be12"],["/2016/06/08/2016-06-08/index.html","8b1365a35011f3b3a94782266f150ce4"],["/2016/12/18/2016-12-18/index.html","8b25b9db9f32cf9ad23835493c5bc091"],["/2017/02/17/2017-02-17/index.html","b47b99f02e92d04c76c6b31e704bc9e5"],["/2017/03/17/2017-03-17/index.html","9d9f0753dc88be98b42cde4a1c498645"],["/2017/04/06/2017-04-06/index.html","48ef320cb6236e22bac8b93d378da804"],["/2017/05/17/2017-05-17/index.html","632fd9e6acc1a06c751a509a217b53db"],["/2017/08/15/2017-08-15/index.html","e0d581392d2c6a80bf96085886699385"],["/2017/09/16/2017-09-16-1/index.html","671bebbfb3b855bff166c3df804b9d91"],["/2017/09/16/2017-09-16/index.html","f6e30db82565f686da08124e6dc59abe"],["/2017/09/21/2017-09-21/index.html","ebf0c3cb50aa443e95118f46d7577d24"],["/2017/09/23/2017-09-23/index.html","7893b4bae3e5b25b1db47ad8f4087774"],["/2017/09/26/2017-09-26/index.html","c1a6b5181a0c344f0e7a057651aa8c0f"],["/2017/09/27/2017-09-27/index.html","d4360c9ad93ba735db48a61900ebc845"],["/2017/10/04/2017-10-04/index.html","49ba672c2b60cea650d799922b33fb1b"],["/2017/10/08/2017-10-08/index.html","f8a436cf1022b8461001c140f2f6f235"],["/2017/10/09/2017-10-09/index.html","ed96879cd4fe87f0ede143f98927f014"],["/2017/10/15/2017-10-15/index.html","43f4bb2d2c6e66cc110f187cec00efb0"],["/2017/10/19/2017-10-19/index.html","b9a01679cbf5fddac0cca723ed4c02b2"],["/2017/10/23/2017-10-23-2/index.html","9c76edfdc7003f84ec28f86a35eaa612"],["/2017/10/23/2017-10-23/index.html","7a81df45767f2ad043c8ac33ff8d2282"],["/2017/11/08/2017-11-08/index.html","765fa55215a73a415519fa910e1dd7ef"],["/2017/11/12/2017-11-12/index.html","7b22cb0af9fd7c2c5f306b2ba124618e"],["/2017/11/15/2017-11-15/index.html","cc4d2433a85b0899e1b6bd583821ae53"],["/2017/11/27/2017-11-27/index.html","df7f6090c558c9b2e04c82551241dd7b"],["/2017/12/06/2017-12-06/index.html","4e103301cbe81c741e7942fe1fc1a033"],["/2018/02/12/2018-02-12/index.html","97276e6e436da748c36b3f8f612f29b7"],["/2018/03/26/2018-03-26/index.html","49f9ef3a914ceee8697220dc690071ce"],["/2018/04/02/2018-04-02/index.html","78beb4058ec534f0fe4a135653e9c1fd"],["/2018/04/24/2018-04-24/index.html","bae0b935380ae034536d5928669c5973"],["/2018/05/18/2018-05-18/index.html","53fb24930abf91c4588411cb34dd4d99"],["/2018/05/23/2018-05-23/index.html","5033c3ea55fc891654831573bdb12ebb"],["/2018/06/08/2018-06-08/index.html","954c190ec1513e7fd56f635d1f9908c7"],["/2018/07/01/2018-07-01/index.html","f94bed3e6471878c4541a475edbb19a8"],["/2018/08/30/2018-08-30/index.html","61191abe2a0283f9d236a49a5a411d7f"],["/2020/07/20/2020-07-20/index.html","468fcef09ad52913731c5f68f2649729"],["/2020/08/01/2020-08-01/index.html","0856b767946c704fa835cb71bce2dae5"],["/2020/08/02/2020-08-02/index.html","19de42bc9a78e76b43b49618e28d1a38"],["/2020/08/03/2020-08-03/index.html","c517a8ef4a69a60f64ad4e5d27ebc17d"],["/2020/08/04/2020-08-04-1/index.html","b54bf12ee25a739cb5af68c1bf3687ad"],["/2020/08/04/2020-08-04-2/index.html","c00f2ca0ab89cbf4d93fabd37e00ccfa"],["/2020/08/05/2020-08-05/index.html","2a3ad3305bbad89b45cd031442bc790b"],["/2020/08/06/2020-08-06/index.html","b98e4aecd74bd386ea43637493d3b6f2"],["/2020/08/07/2020-08-07/index.html","fc288780c84060c82e722dedad40d380"],["/2020/08/08/2020-08-08/index.html","c405b918a178d35b44ac3a5cb784512e"],["/2020/08/09/2020-08-09/index.html","8dadce88dd932f8c4147ab164210e48e"],["/2020/08/10/2020-08-10/index.html","33a0e7b881cdb3c1b4cc23aea924d631"],["/2020/08/11/2020-08-11/index.html","dd1e5a7f98177a6cbde1f419c2d308e4"],["/2020/08/12/2020-08-12/index.html","1628611b26af2943b2a54f71571a7ba9"],["/2020/08/13/2020-08-13/index.html","998499053238b6244308e7ea75917461"],["/2020/08/14/2020-08-14-1/index.html","2e0d4daf58b4e28cdba8bced600b1efb"],["/2020/08/14/2020-08-14-2/index.html","f11e90810c666c7c79c18606fb48e530"],["/2020/08/15/2020-08-15/index.html","8bca07e9e3d26d7a356c7def93ea9860"],["/2020/08/16/2020-08-16-1/index.html","b919986962e6d09153d7b528a87b7ac8"],["/2020/08/16/2020-08-16-2/index.html","2029aa628cc53b8b4f9acffddb8d07db"],["/2020/08/17/2020-08-17/index.html","356402a972fcf73b3bb621e954f6cb0d"],["/2020/08/18/2020-08-18/index.html","43348e22d625a546087289ee3ea856e7"],["/2020/08/19/2020-08-19-1/index.html","8e0c9d3ccb6fdfa9b189406cf65abc69"],["/2020/08/19/2020-08-19-2/index.html","770ef4ddf476eda4eaaae56e9457d037"],["/2020/08/20/2020-08-20/index.html","9f608e28ed4f268331925bac2c6180fa"],["/2020/08/21/2020-08-21/index.html","330e5792607ab11efe534995740c6386"],["/2020/08/22/2020-08-22/index.html","de3e59b94b387c8c331b99591ba4b75b"],["/2020/08/23/2020-08-23-1/index.html","87a576095551fa1ba1b4293cf3e0579b"],["/2020/08/23/2020-08-23-2/index.html","3a0f84581e26fe525c622065de07d46e"],["/2020/08/24/2020-08-24-1/index.html","a36e3f97cf7373bf009972390ad62d43"],["/2020/08/24/2020-08-24-2/index.html","be3aab65dfe7fbfbbaf71f52922730bc"],["/2020/08/25/2020-08-25-1/index.html","9946be4b4a842f4a1c99f32fc8ba0246"],["/2020/08/25/2020-08-25-2/index.html","cab55a8c9fb7d727ac1d73312126d98e"],["/2020/08/26/2020-08-26/index.html","090dad5b3a6896dc94d0d4639312d631"],["/2020/08/27/2020-08-27/index.html","b598da4391c3872cb00409fb30b6822a"],["/2020/08/28/2020-08-28/index.html","1b57b6769555dfa1be57bffd92ead330"],["/2020/08/29/2020-08-29/index.html","0dd1adfe3d96c88bc5bcce43fbe79a8e"],["/2020/08/30/2020-08-30/index.html","c0c895c1e4084cf4312be93e50c22911"],["/2020/08/31/2020-08-31-1/index.html","5ef0ccd816c411932d7bc57e8fc2353b"],["/2020/08/31/2020-08-31-2/index.html","42b77ee4d6c535f779b1efa43a276e7c"],["/2020/09/01/2020-09-01-1/index.html","a6d72c29a011850d50d324d2990927a6"],["/2020/09/01/2020-09-01-2/index.html","a3b59707d7793b95e0f338df6589b503"],["/2020/09/02/2020-09-02-1/index.html","12149bf57bd533899880dce22d0ba4e4"],["/2020/09/02/2020-09-02-2/index.html","bb3f6bcd960b00aba869614a222beb0d"],["/2020/09/03/2020-09-03-1/index.html","bbbadd44f2bd7c76bf3a7e91438d9f55"],["/2020/09/03/2020-09-03-2/index.html","abbb74ee793dcb94699aad15e60948a0"],["/2020/09/04/2020-09-04-1/index.html","daffe40b6d0857a03b2d26c6f0bbc67c"],["/2020/09/05/2020-09-05-1/index.html","17c870a11debfd93c4ed41b785d0d5ce"],["/2020/09/06/2020-09-06-1/index.html","9f1241f56ec9556f09db93202c271797"],["/2020/09/07/2020-09-07/index.html","018537b84416e5257eb8d3b6d44469ec"],["/2020/09/08/2020-09-08-1/index.html","3b0449dc766a75432e408d6ebc93faee"],["/2020/09/08/2020-09-08-2/index.html","454fa84c8bf8556410d7b112dbbb3430"],["/2020/09/09/2020-09-09/index.html","8d2e88365eef561dc6fa6a91c2acaaac"],["/2020/09/10/2020-09-10/index.html","b697de475f795357d675e8fc4c9a3259"],["/2020/09/11/2020-09-11/index.html","661c1ae23da412db2b9d1263f7282771"],["/2020/09/12/2020-09-12/index.html","6de3488d450a30e8fef092dd27f79fe3"],["/2020/09/13/2020-09-13/index.html","4218fe38ab5e9d8b5d0144a1f0060877"],["/2020/09/14/2020-09-14/index.html","5fd7399fcdcc2b6edf19d6a076dd54d5"],["/2020/09/15/2020-09-15/index.html","71a9b3ba1f72a514072c518da92d2d86"],["/2020/09/16/2020-09-16/index.html","b282bd2da3aaf04b8ecf68739dfb48ca"],["/2020/09/17/2020-09-17/index.html","23a9ce81a96798e3186bbda73c763ff0"],["/2020/09/19/2020-09-19/index.html","3d5dd704c47120103748cbd2bc35ea45"],["/2020/09/23/2020-09-23/index.html","1c43a43a4dcd5dae2520fe1ceb8711b7"],["/2020/09/24/2020-09-24/index.html","a4475a708bf8235fa81ab398e1724ed6"],["/2020/09/26/2020-09-26/index.html","be70d0828666381fea849c77cc7ea28a"],["/2020/09/27/2020-09-27/index.html","4eb866d3254e0d64d7566729b0bb6073"],["/2020/09/28/2020-09-28-2/index.html","954a11a31d9c928c49755bf062846cc2"],["/2020/09/28/2020-09-28/index.html","d95025758b3bd6e62e30f647b467e992"],["/2020/09/29/2020-09-29/index.html","a85bf2322769e049ec59e8c6e5391bab"],["/2020/10/03/2020-10-03/index.html","a5742934d0dafd9bad91dc7b6b48cfed"],["/2020/10/04/2020-10-04/index.html","625ba14322260eb3c4ae12048495f8e6"],["/2020/10/09/2020-10-09/index.html","0f41e69aa0afd5e5a6c1d242972b7bc2"],["/2020/10/10/2020-10-10/index.html","00e73397ce0982ca06cc1860c2bdc78c"],["/2020/10/11/2020-10-11/index.html","67e591dfca907259c49f77d2eb5351a4"],["/2020/10/12/2020-10-12/index.html","242af3544f33dd744bc94dd99372c0e5"],["/2020/10/13/2020-10-13/index.html","b3302f471bc65870b1ead579da086959"],["/2020/10/14/2020-10-14/index.html","aff4add792511f6930be35d264326ccd"],["/2020/10/16/2020-10-16-1/index.html","c204f98565025309ab637519c6c645f6"],["/airplayervisual/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/airplayervisual/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/airplayervisual/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/airplayervisual/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/airplayervisual/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/airplayervisual/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/airplayervisual/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/airplayervisual/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/airplayervisual/index.html","831137818c2e83925488b54909bd38b1"],["/airplayervisual/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/airplayervisual/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/airplayervisual/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/airplayervisual/js/jamsetting.js","7927507e0080ddf55c6d8b5f526bd942"],["/airplayervisual/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/airplayervisual/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/airplayervisual/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/archives/2015/05/index.html","dcab94483ade02ac48cfc48029d57035"],["/archives/2015/06/index.html","2a6a888e638839c1a57ec3951c244ffb"],["/archives/2015/12/index.html","f084d11582592e9617954275d6cc6fa7"],["/archives/2015/index.html","de2b9ea17e8f5f21b1fbdd18193d6e53"],["/archives/2016/06/index.html","588b0eb8959ba30f8a450a6067c360f1"],["/archives/2016/12/index.html","eb4076fee6fcde8b19750a2011f28c97"],["/archives/2016/index.html","7e7e4076731fe406a982e148a9c8f390"],["/archives/2017/02/index.html","1a70cebe8719c478eedd6b99811d72ed"],["/archives/2017/03/index.html","ab8d2a06bdb6ccc6dd0532705860a789"],["/archives/2017/04/index.html","21f554ade6c099c3ec080e50c66a67d9"],["/archives/2017/05/index.html","f9fcbe220e463848ba87ba0e398af77a"],["/archives/2017/08/index.html","e6aca61c478046133ad16e1ce9244094"],["/archives/2017/09/index.html","0690b7d1deb66db632778782a03aa51f"],["/archives/2017/10/index.html","a19605271a0ae7a0ebbe4aaeba22de0f"],["/archives/2017/11/index.html","a2d5f8d1efa5c9fcab9ea12ed2c04aa4"],["/archives/2017/12/index.html","08af42ad64a6ad7664aa40b745dc8bb1"],["/archives/2017/index.html","3c0cf0603b93ba8a71572319ee04a02a"],["/archives/2017/page/2/index.html","4c154fbad438d38039a79c4c47ffecfa"],["/archives/2017/page/3/index.html","49a2d73086a07bb88de9e23900e61d1f"],["/archives/2018/02/index.html","f3a7f64c0d3023a419b7c8b349a9821a"],["/archives/2018/03/index.html","11c7d6bd10007751a827ad4478c6229f"],["/archives/2018/04/index.html","97a37c50ecbadf58b85e2f5d4eb55d97"],["/archives/2018/05/index.html","10048c8c0fe86fe74c7afb91b4d92531"],["/archives/2018/06/index.html","69824e86d48c03e1a4e10f11ab9b2d73"],["/archives/2018/07/index.html","7bb1619b15178fb42bc8b836214b9825"],["/archives/2018/08/index.html","63e39d6d403daa3699e0b034cf11b33e"],["/archives/2018/index.html","1b1de5ccfd490fc0cefb49786a0f6756"],["/archives/2020/07/index.html","b876091d4270daeaeee20b137ec268b4"],["/archives/2020/08/index.html","3a5e76597ba63193564307416e383302"],["/archives/2020/08/page/2/index.html","847ea2ef2dd75237c9da9c369472e814"],["/archives/2020/08/page/3/index.html","1216a47f20d140ccee4beab66fe79e16"],["/archives/2020/08/page/4/index.html","038cb2869f4dc498b8269f102b18a623"],["/archives/2020/09/index.html","6a4972285b3e38c10f2ed0f983173123"],["/archives/2020/09/page/2/index.html","02ef53432c3a7ef480c8e4a4d98c9013"],["/archives/2020/09/page/3/index.html","233b097d239cf700768b78eca770c91f"],["/archives/2020/10/index.html","39699e268c602619f506e09b0b3bfb42"],["/archives/2020/index.html","f9d8b972ca1146ceaf41fd1d82e0a612"],["/archives/2020/page/2/index.html","71a27a7274b16cc8991bba0ac3066dd6"],["/archives/2020/page/3/index.html","03181924b076e8fde91dba7f03e3f909"],["/archives/2020/page/4/index.html","03145c684b6e0b0498864a00a7ef2b5d"],["/archives/2020/page/5/index.html","c8b65f0746c9a9bf24b339bc65207d8f"],["/archives/2020/page/6/index.html","6d02fd2c93f8cc0cb8ef1241093c96e0"],["/archives/2020/page/7/index.html","e25c47f4d4e1eccfcaf9458353768ff6"],["/archives/2020/page/8/index.html","ae7be4cbed8b9a729f435ea427b1ce71"],["/archives/index.html","690a70613344f9a4f51047aae047ad13"],["/archives/page/10/index.html","797663df91b2f8c90ac37a3db3b6f10c"],["/archives/page/11/index.html","d5126333c42d8ab903d424564c7d6aa0"],["/archives/page/12/index.html","975fada86d7b53c8b06991828dbbe272"],["/archives/page/2/index.html","2d95b4cbfcf81690c7196de07f9725e4"],["/archives/page/3/index.html","f8ac14b309741149835c9dd488adcb86"],["/archives/page/4/index.html","a514b31001e6b39a02cfcfc0bbf493b6"],["/archives/page/5/index.html","3f761aa6397ecda62e91d662938b9ccc"],["/archives/page/6/index.html","a5f3596a7b9f6589940fd0c1bbefa79e"],["/archives/page/7/index.html","5974369e74f48fe69ae32a59d24fe5be"],["/archives/page/8/index.html","c56e296983b2f9ebad2e0017e5448a96"],["/archives/page/9/index.html","e6622acfd7c202d3f4b56240eb7fa5b8"],["/categories/NHK听力练习/index.html","7e3d73f1297f004520c9bb3464966c00"],["/categories/NHK听力练习/page/2/index.html","5851359b0926d2be49c4192ad2a9ce91"],["/categories/NHK听力练习/page/3/index.html","412537f54ff741010ad2787cc720d3bc"],["/categories/NHK听力练习/page/4/index.html","064f74fd65415e54497c68bdf0e1da71"],["/categories/NHK听力练习/page/5/index.html","fd30b91498421762c30cbe91f4cb3021"],["/categories/NHK听力练习/page/6/index.html","12fcbda70be71eb91729669e661ec6fd"],["/categories/作品集/index.html","33223ff9a8972c0f3bba86128aa1443a"],["/categories/作品集/page/2/index.html","0e535a3eed2dc8c753fef8756eef549a"],["/categories/学习/index.html","560f3d4260779d452ed8e8a25fe1a513"],["/categories/学习/page/2/index.html","fc0472847311e896a4443d94110213b6"],["/categories/学习/page/3/index.html","2fb330cbd66147a5805b0bb0fceaebc6"],["/categories/学习/page/4/index.html","5d9e06636d314268fd5a7ea0794d70fd"],["/categories/游戏评测/index.html","7dd3a4c2471c593efce6c7b15a4759cc"],["/categories/生活趣闻/index.html","1375d042c5e8dbc2a54321f58d7787c9"],["/categories/随想/index.html","90a5794d4ad92908e23bd9fd0fa659e7"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/addcss.css","59cae1ddbe6925c34f846ffe12d19921"],["/css/background.css","32d5acccbb94f987faf37cfdc3fd06df"],["/css/calendar.css","0090a32d2a61d42c5bfed254bfba078c"],["/css/clock - 副本.css","65602c2385c7eab42ee3804cd6ee0a5a"],["/css/clock.css","9db53e3bffb704c740aa83bddaf8b999"],["/css/cursor.css","c1a23e168c5b794ff367eb0ae77eb26b"],["/css/danmu.css","2a5b914a9592bcd353425c6d5fa7af8e"],["/css/index.css","e0ecbfc6d569c15e3c74302c0114ce1f"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/loadingline.css","bc1ee020a6a11fea17b915b97e6978bf"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/html/calendar.html","bddcec1edba7f4c49fe5cd75f8cdf5b2"],["/html/shiyan.html","baf042feffd6d0ff8f169429f746ec59"],["/html/shiyan2.html","924f0e9f8283840060b226cba2567bf7"],["/icon.png","8ec68de45d18642ba9baf2447e62f476"],["/images/AMJ1.png","d27a6725d1aaaf5324248da4312ab6c2"],["/images/AMJ2.png","00e22eba5901e5bd674e42228cd5bd26"],["/images/AMJ3.png","c8c9ea6348dfcad3a641899d5b587431"],["/images/FOTO1.jpg","4b6f100861908e2c7044cffbdb4a0c1a"],["/images/MVVM.png","ea5a002ee2f85c71a0db51d5adb5de19"],["/images/UT.jpg","367f4e432f9db55a92b2a290c4b0a476"],["/images/UX.png","a183974e958d41d1b6acec70bb7ea00a"],["/images/WindowsTerminal.png","8ac29cb56b8a1768cf7de071e9f1ae6f"],["/images/air-w.png","c1cc32f9d3e17551ca11a7d18a0b533a"],["/images/anzhuang.jpg","912b2489957f8344406edc5e5cebe5fa"],["/images/api-setting.png","2c0bb074390779721cba009e96c5417c"],["/images/apikey.png","1f31121b190eb1f990bcc3e27524bc03"],["/images/backpic1.jpg","86a6fa88167feb338fbf1a4e9057114b"],["/images/calendar.png","86319b08b93be7c8bc47cdba7a169563"],["/images/clock2.0.png","0a0f122c7a25262fc02ee99df0ef21eb"],["/images/clock3.0.png","8e04375c183c637b65fb50ed40f46466"],["/images/example.png","aaac9983e5d59f919bf282dcff2edb3c"],["/images/foto17.png","28db4c6608ad1ee6b34238cafab25e5e"],["/images/foto2.jpg","be95b922512d004a61f83c97af3e2602"],["/images/foto2.png","0dc07d4e1b00526a273a89dc8b81548d"],["/images/foto3.jpg","551c0616c92c4ee7cc17dd458b3c46e9"],["/images/foto4.jpg","9d1d9fea759a41afc0061866e400339a"],["/images/foto5.jpg","984f618b15372f37d54f507e6f379f10"],["/images/foto9.jpg","b683fc0b998e80ff8f5a3e45e889807c"],["/images/girlpic.png","ff1e8427ed555af639e6d849f8f648f1"],["/images/girlpic1.png","698e5570e821c3cae643cc9777c2292e"],["/images/girlpic4.png","551882e4b9b6afb79000fd34c0dbf5e5"],["/images/headimage.png","332502f36a0297b30cb7969fe6de8451"],["/images/hexo.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/hexoWT.png","c027cc9f5665c7d7ba657e7a4bb40017"],["/images/his-json.png","7d8a71e38ab684107446e5c72c31854e"],["/images/history.gif","0459a3dcf2317253de0b34482880c63c"],["/images/homework1.png","e8d2f64d0785519ea7779016208a2900"],["/images/idea.jpg","5eb08bf6c965588f03c8860f201cac45"],["/images/key1.png","f2a370e02ad6c5a101db20b47a9a0008"],["/images/key2.png","21dc40bbe0377cd9fe85a9cb431c18f0"],["/images/life-cycle.png","02f39ea5c041d45938fda4b50f234cb7"],["/images/life.jpg","74d2d9c5f48ec59e3badeec690941812"],["/images/listen.jpg","9d4f73cd5634f43deaed4f9aca03f9a3"],["/images/loading.gif","ffa0804a5d99e2d5b39e05cda6d6b28b"],["/images/magnet.png","4899a924f3de0d19dbe0415128c07d65"],["/images/magnet1.png","8d010eb86ca943e036adaa7de57aee7d"],["/images/magnet2.png","293cb414a8ab93b43bde3bebf9cf0cfc"],["/images/magnet3.png","1923148630e2e094ff80bf35aa604c10"],["/images/magnet4.png","9bb4f963ac1c09f02d62525f513f492c"],["/images/meilu/1.jpg","cd67abcc3f543b5c66adc4f9d9c5c628"],["/images/meilu/10.jpg","ac9fb2711e477b5db1c3acb57e899045"],["/images/meilu/11.jpg","364caad6dfc356a3dc630fa067e48e88"],["/images/meilu/12.jpg","274767e5708f79934e5bdbf73eda8f0d"],["/images/meilu/13.jpg","dcab12b84454770b208913db63e825ac"],["/images/meilu/14.jpg","037cdd048284e621f27e17a2c59e8ea7"],["/images/meilu/2.jpg","f6cdb65ae3fad4523b32f5ee38696b60"],["/images/meilu/3.jpg","9e5df3612c2d93bf57313186c954aea5"],["/images/meilu/4.jpg","69ef2d6f4bcd79cf4b4e672b60c6751e"],["/images/meilu/5.jpg","ce81ca16def7613b7ebb368fb554f14f"],["/images/meilu/6.jpg","cafd5b62305f806754a75cc3af8c3b77"],["/images/meilu/7.jpg","b8ae865d386e1e713a6034da6b090c10"],["/images/meilu/8.jpg","afad7a7bf1066c817a8d2e7566bc780d"],["/images/meilu/9.jpg","72f9649f56b564eacf23ce3dacb88029"],["/images/metroui.jpg","5503bfffd450d9ab572b67ea00941571"],["/images/metroui/1.png","79a03b408c19c74eeaa8ff6e17a03f9d"],["/images/metroui/10.png","8309fed71a15c78f2dfa3af1ff75a5f3"],["/images/metroui/11.png","aaf1a007cbae12f93cc2688bace18d28"],["/images/metroui/12.png","0758ea282c3828c47e5c64520ff85783"],["/images/metroui/13.png","12ca7b511927cd4b26e97f3b20908a32"],["/images/metroui/14.png","f44ba7680f7b36df437e2ae2588d0565"],["/images/metroui/15.png","e8927c78b125b805af7aa86fee815ab6"],["/images/metroui/2.png","e604d3c662b996f06f22753ba9ab379f"],["/images/metroui/3.png","664e3b7490f2f95d5547b8ba79a65456"],["/images/metroui/4.png","c0f255344cafc303a1d9c7404da37149"],["/images/metroui/5.png","da2074cdb1298aca826abc1a5c441300"],["/images/metroui/6.png","efef2f087127614b4e03bcbe9a347018"],["/images/metroui/7.png","a4d34b1a2dbe3a58d3a92276880be039"],["/images/metroui/8.png","1d34a626bbaa898a60d4501936bcf962"],["/images/metroui/9.png","0663697c1667b377fe2623bd65e00b31"],["/images/metrouilogo.png","aea81b42d1c2c96440f74cf56ad82e2f"],["/images/nhkimage/2020.08.01.png","af4c55b2ae1d5ab2f56c75a87fcdfdb3"],["/images/nhkimage/2020.08.02.png","c355d41b90f5c65823f96c5f6868ce53"],["/images/nhkimage/2020.08.03.png","fddcedb40d7f28b2ccb90814351ad5c8"],["/images/nhkimage/2020.08.04.png","8b4518ec5a8513f442980ed7167136b1"],["/images/nhkimage/2020.08.05.png","590abfb19334b0c3cee5a005674f2253"],["/images/nhkimage/2020.08.06.png","d469e21100c42435e88f2bdf07f93da1"],["/images/nhkimage/2020.08.07.png","3ca9e2c8b8a09a38423d73cd36e8de9d"],["/images/nhkimage/2020.08.08.png","4420c2d899fe4eb90c48bae0da8418a2"],["/images/nhkimage/2020.08.09.png","df14be338f9c920818dd1daa6aa955ee"],["/images/nhkimage/2020.08.10.png","c4e2ed023cd3dbfd4986add35ca9357c"],["/images/nhkimage/2020.08.11.png","cf562339e57f673d394f3e6cdd1f60cb"],["/images/nhkimage/2020.08.12.png","81dfa179fea3052ddcf73912ea368f67"],["/images/nhkimage/2020.08.13.png","8cf26c2642e7a27cbd86fcbda8bae8d9"],["/images/nhkimage/2020.08.14.png","d88eeb678b3ed3651d597e61957e264a"],["/images/nhkimage/2020.08.15.png","b9879f193867edcffeefce62c9dc7153"],["/images/nhkimage/2020.08.16.png","46cb914aa1d556561897767ec9ff66a0"],["/images/nhkimage/2020.08.17.png","ea1af9645b5cc9cbaafe70a91dd15cca"],["/images/nhkimage/2020.08.18.png","e87e4de39a6f06cf4283a63af92dd8de"],["/images/nhkimage/2020.08.19.png","8001a951513b542a98ce1151be5bd87b"],["/images/nhkimage/2020.08.20.png","4bc8fafa3ecce30d340b1350715d78e3"],["/images/nhkimage/2020.08.21.png","07ad1337e127922abff27da6c672549b"],["/images/nhkimage/2020.08.22.png","b2b5d53ba46015f64048f9d803b12179"],["/images/nhkimage/2020.08.23.png","225af8c0cabe5218ec634d1b8815fd95"],["/images/nhkimage/2020.08.24.png","1d54a484a6e2395aabe9be005cd90361"],["/images/nhkimage/2020.08.25.png","8008ba169cfce0ef2041329cd29b6b77"],["/images/nhkimage/2020.08.26.png","72a2b8094003a54c97a34ea97cf21bc3"],["/images/nhkimage/2020.08.27.png","893407e604804d215c8fef8bcd5f2684"],["/images/nhkimage/2020.08.28.png","b542280b7341759890a99cbd44d822c5"],["/images/nhkimage/2020.08.29.png","620e2e7d4772e39615fd1a88cdf49717"],["/images/nhkimage/2020.08.30.png","f645d7ba2dcb506f9ec6fb9244425ad7"],["/images/nhkimage/2020.09.03.png","c5262f3aa87190e0273383ea1e445681"],["/images/nhkimage/2020.09.04.png","c07149c32aa41c03bc7dac82a713f6b2"],["/images/nhkimage/2020.09.05.png","4e43556e1cb3b7f4d75f0f6127616a54"],["/images/nhkimage/2020.09.06.png","1021d2ae04a7f109404f857a2a7629cf"],["/images/nhkimage/2020.09.07.png","db9827e9f0a4cf1401b559b4644a0204"],["/images/nhkimage/2020.09.08.png","efe1030b73dc1c01f169c3122a194426"],["/images/nhkimage/2020.09.09.png","f6ba3a1c6cdeff88404ebe2a646f2eb5"],["/images/nhkimage/2020.09.10.png","3471b05d02113517359a9e2167befcfa"],["/images/nhkimage/2020.09.11.png","921a541a8bffb1aa436df2eb6db7c99f"],["/images/nhkimage/2020.09.12.png","a51f8ebaddba69bb80f9259a30f17e65"],["/images/nhkimage/2020.09.13.png","0399889200493cd2154ffc407e2bc400"],["/images/nhkimage/2020.09.14.png","eaaf3da69a39ed316b7fc8c4d409bb0f"],["/images/nhkimage/2020.09.15.png","5774959ea4061c9298ea174f0862cc3a"],["/images/nhkimage/2020.09.16.png","0c5a00f74020740fda589c02e4b3f917"],["/images/nhkimage/2020.09.17.png","b5aef734e3a7db4862ca3fe4e6769dc2"],["/images/nhkimage/2020.09.24.png","5982a7b3843f4ae43b2b4bc4b0c577d6"],["/images/nhkimage/2020.09.26.jpg","c6415af781fbdd36fdb034f74646129b"],["/images/nhkimage/2020.09.27.png","27aa6f6a8d5534ccd99cff261dcd9eb6"],["/images/nhkimage/2020.09.28.png","0f4318d1ff17a33de364432a1c44b5ad"],["/images/nhkimage/2020.10.09.png","6408d9f7e66fdeba8b9207939a08cf8d"],["/images/notop.png","d25c272e5ce312a880e04ce8a0b27683"],["/images/pasted-0.png","552608d8f6e39369aa30c6e332a32826"],["/images/pasted-1.png","baafdacee93c99e99418aaedbf524fda"],["/images/pasted-10.jpg","395cff6f64ab5df19baa3572ac98e541"],["/images/pasted-11.jpg","56e5df07c96634638abf7995b25c81ab"],["/images/pasted-12.jpg","61b3f803b85ce3640d7a9ba7efb9da6b"],["/images/pasted-2.png","2f410e53c811f92a6135f48857776f5e"],["/images/pasted-3.jpg","bb5717e691e87355e7d63a5f3a87ae62"],["/images/pasted-4.jpg","10041d0e3567b24b81222ec5075d6492"],["/images/pasted-5.jpg","ac5047a4b48c6cdaee86fa1863e33904"],["/images/pasted-6.jpg","1556ae8d3ad5713d60237ee4d10e81f0"],["/images/pasted-7.jpg","913fde1686587646ddc663bd810cc81d"],["/images/pasted-8.jpg","fc83268081fb4b6b6ecb1ffa1ec5af7f"],["/images/pasted-9.jpg","25e0fa3496591501f5c29d0b802b77d2"],["/images/pet.png","2b8c121909497e57057478856fe48a94"],["/images/pet2.png","dfb1d6a17b527ccc0c600e6ad31f55e5"],["/images/ps1.png","0917ba91f21b6944dc08d35c41a326d2"],["/images/psb.jpg","6a27c58337875c776af0a7667598b401"],["/images/quse.png","7cd1ec12b804305430cb4cdc09c7a893"],["/images/rain.jpg","9c26acc44c692b6a63e134be07b07c18"],["/images/shezhi.png","281bf545f6a4024e2d0b7120bc398a21"],["/images/soul.jpg","d97b4099c0728ff6123d006fa62db86e"],["/images/study.jpg","a9b1cf95ee6bd9f3913e8ec6a6a6f44f"],["/images/tianqizhizi.jpg","dd48d78b4eeaaa52578352f9ef570b14"],["/images/vue.png","cf23526f451784ff137f161b8fe18d5a"],["/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/images/work.png","e521cf5b834292fde1c50e0a0f5802f9"],["/images/xiaoguoyanshi.png","994a3b710d36df0a4630cd9a768c7f7b"],["/images/xiaoguozhanshi-m.png","1fefca18214fc4889d1bb76b81887c9d"],["/images/zfe.one.png","b41f689341882058ffb28c4cee499bde"],["/images/幻想终结之日.png","0025c4d3973bdfedb80db3f78c59fa47"],["/images/时空战纪——游戏建议及意见①.jpg","1337457f14a8dffee66d94f8915b54ff"],["/images/简历.png","d70507ee4615c9e324578c0d777e6855"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favicon2.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","47d4a44d7aac3a5847b425c7148eaf1d"],["/js/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/APlayer.min.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/airvisual.js","71cf86bfd452ca01d92438d8266416ee"],["/js/airvisualapi.js","6931bebe1696688d109963187fc2eace"],["/js/background.js","94c8410b174f58594cf81ec99054968b"],["/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/js/calendar.js","a58e02711cc6dec4dc04257e555b8923"],["/js/clock - 副本.js","405186e7a9d73221d2d50c0dea2852d0"],["/js/clock.js","2fdceb94cc57b551cd245b0001927b66"],["/js/color.js","3730bb4f7b185e6f5130ac28bace968b"],["/js/danmu.js","6b6ae6b7f1b42dd4857541f43b2bb733"],["/js/echarts.js","dc1227b1eba1ba47fd185a387d0a7d37"],["/js/gitcalendar.js","fadfa8a42272cd322118653dca512a7a"],["/js/history.js","20459f7db325e597e64903f4c0d19306"],["/js/historyroll.js","a3e9ac376106816c50a61f9f4306d671"],["/js/jam.js","462c07d3b2e0f20394d994bbcfae37cb"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","455fface5a0a3ff90766ca254affe502"],["/js/rain.js","f656dc28e4ab5c3f8414d35f683278c1"],["/js/rainremove.js","ceacf82842b101f7e54a2aaf5f4bb9cb"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/link/index.html","92809346db2e1999f7c708a94179f4b2"],["/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","afe7701e300b5d796e78bb3c52b97bc3"],["/page/10/index.html","e46bd987679fbce714ebfe6af3534f66"],["/page/11/index.html","ffaf22ffb6026927935768593873b589"],["/page/12/index.html","2589ca436f1103efddf2388b7e2615d5"],["/page/2/index.html","8d1d4bae6e468fb18971840f762def3e"],["/page/3/index.html","6886fb384004f88dc6ace8f44c4211a2"],["/page/4/index.html","1381928638d8b1f61d568e26a5e7647c"],["/page/5/index.html","56b1e00f2d789c3f40fdd3558428bf84"],["/page/6/index.html","53daf703fa5bda9d4d31175ff1cbe7b1"],["/page/7/index.html","a41a841eb032b264f3518d60577b3ade"],["/page/8/index.html","0dc815808fb16242b53fe5f9bbde79c9"],["/page/9/index.html","bfd486b25516dd00deb22f318c059958"],["/research/index.html","d946d2173c54d01c6f238f46a4b2628d"],["/sw-register.js","dd64386ac31c50c215bf66301179cc27"],["/tags/Butterfly主题/index.html","94f5e6b25247503f7a5098dda8226dc3"],["/tags/DIY/index.html","e32b7009d674323e551df5eb0e0c796c"],["/tags/DIY/page/2/index.html","9f9984b30f0cd7cc6e23747dbaf8d1da"],["/tags/ICT/index.html","002d8bea67fc6c849bc6fadb28194aef"],["/tags/NHK听力练习/index.html","372b9d619173e12e002283042c4ce248"],["/tags/NHK听力练习/page/2/index.html","b9f2cdb84dccef517f9b39fde1908797"],["/tags/NHK听力练习/page/3/index.html","0de525a8838875c7ce59f0b7fec1d398"],["/tags/NHK听力练习/page/4/index.html","00585e048dd058e8527ca175d7ca3675"],["/tags/NHK听力练习/page/5/index.html","332a46e1f88671f3c6c61c985a11db8d"],["/tags/NHK听力练习/page/6/index.html","0c6da7bbd8b3b733c93cc89ce4cd13a0"],["/tags/metro-ui/index.html","34f8d5d6abca4c9904099d3978b6dac0"],["/tags/vuejs/index.html","5e8e062430e3c66882cc11f0a8cceec0"],["/tags/お盆/index.html","b04b5356813118ecbea82748bb78b6a3"],["/tags/世論調査/index.html","d137e2d3f97c869b78404dda30e54110"],["/tags/作品集/index.html","9339bb1c494ddc0267caaa0db3d23859"],["/tags/作品集/page/2/index.html","fe1bd8ad3e25e4405544e0189d852fae"],["/tags/农业/index.html","616dd0cc4aaeaecc790e079736d4c6ee"],["/tags/历史/index.html","5125b54bfbdc8f70c988fd0d3c441d04"],["/tags/営業時間/index.html","87567335229c6c760169f7c41c265606"],["/tags/国外政事/index.html","3e402e79038bdb1c1a4580dd0b5cb789"],["/tags/地震/index.html","90fb1ffad3839278037827136ab7ed75"],["/tags/外国政事/index.html","d527c4fbac29ba770637df39c53c3c85"],["/tags/天气/index.html","fe3f841632adba75aa71f10b5fe7211c"],["/tags/天气/page/2/index.html","a19061dfb0a97b7576fe7b3a643820c2"],["/tags/奥运会/index.html","822c4dec0b6d806d9bf228917c1e63a4"],["/tags/学习/index.html","af07f6fbeafcb6c5146f0ca60b0a1fd0"],["/tags/学习/page/2/index.html","618056ab996695f197e33cc61ba37ba8"],["/tags/学习/page/3/index.html","0092bbe142ac40be55d8a4caeee89455"],["/tags/就业/index.html","b3ae61c338cac447e8a2ae06ae0a9a32"],["/tags/庐山/index.html","e4e9301c93249d3c0f0c7964cb4e82ff"],["/tags/座礁/index.html","65ef588837749a017bdcfbb9ba76f25c"],["/tags/政府/index.html","60edbcd50ac0aa12654e67cd7d7a3118"],["/tags/政治/index.html","88f460766da2b56a03274471c0f5348d"],["/tags/教程/index.html","41fa383ace061e4276e3b7a8901902e5"],["/tags/教程/page/2/index.html","969942a92744db4ced75740917c495a9"],["/tags/日本教育/index.html","5e2cd3dd8bd2373df51f0fe837516567"],["/tags/民生/index.html","c4d1a3e3b2ae167735657ef11afc34bf"],["/tags/民生/page/2/index.html","6497485ca161504d6e11e9de0d73799b"],["/tags/游戏评测/index.html","c1d0bb196c9a7b81b97bbc0ee20da546"],["/tags/游记/index.html","90502d08ccb5015e89b86751cdf3f745"],["/tags/生活趣闻/index.html","b83f8001a8acc705fb5d96f752dfdc8d"],["/tags/科技/index.html","5536c029393014d13b4e02df6dafd39f"],["/tags/经济/index.html","e83821e02dde840d47e1b5e143385b32"],["/tags/经济/page/2/index.html","61bd86b4c82572839cf0365c02050c45"],["/tags/网络教学/index.html","e44d0033e2e74558bf5ef13dc8e89b1a"],["/tags/舆论/index.html","6dae66087dd8400d0e5949a7d517ca99"],["/tags/虚拟现实/index.html","9d4f42507255641676335aab41daf039"],["/tags/随想/index.html","501aac23224411001446466872c75063"],["/tags/障害者/index.html","b1bdcdc4bf622061f942d3de25fb89c6"]];
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
