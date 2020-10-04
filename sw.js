/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/05/20/2015-05-20/index.html","ac75b1b9642502bd5cc8ccfe33b072dd"],["/2015/06/16/2015-06-16/index.html","532627feea713b8826ceed9eaef91dee"],["/2015/12/12/2015-12-12/index.html","da2c7122af0af133b15b80444a889ca9"],["/2016/06/08/2016-06-08/index.html","cddf930dd9cec9644012a99cce718901"],["/2016/12/18/2016-12-18/index.html","59db67b3bbc4910af5fd84d2b83502cd"],["/2017/02/17/2017-02-17/index.html","306f9ca9a745d33e77fb1f356d1b4f03"],["/2017/03/17/2017-03-17/index.html","85c5770a1eaef92d2fe263695bc7cb29"],["/2017/04/06/2017-04-06/index.html","58964fa900ef71fb3800d52910e854d0"],["/2017/05/17/2017-05-17/index.html","1a5368464ce8bf70492a6c939e78a03c"],["/2017/08/15/2017-08-15/index.html","8ec697caa9eefc05acad9f56b759a232"],["/2017/09/16/2017-09-16-1/index.html","63dedc8307473fddc51fde0fdd11ddf2"],["/2017/09/16/2017-09-16/index.html","ab731dd323df756f7287e9e23030928e"],["/2017/09/21/2017-09-21/index.html","89c18a8aa506b4398ba3f13b3c3d21d2"],["/2017/09/23/2017-09-23/index.html","4ee93c1c9531d6819a48286981050725"],["/2017/09/26/2017-09-26/index.html","75593d66de4cde948c6f77b78a840fb3"],["/2017/09/27/2017-09-27/index.html","3c6204b61ae0ae53115a0c178de4a05c"],["/2017/10/04/2017-10-04/index.html","cf09c66f52bb9103c5b4f9a5abae228d"],["/2017/10/08/2017-10-08/index.html","e8d13a11d2ab06f2d2610a320a3ac218"],["/2017/10/09/2017-10-09/index.html","73c9109505601bba3df926582cf3b7d3"],["/2017/10/15/2017-10-15/index.html","89af9b60e64eec95d776a1b7f303279c"],["/2017/10/19/2017-10-19/index.html","a3bcfd87ae65e186289f1ec2d9186224"],["/2017/10/23/2017-10-23-2/index.html","f40493e2749b31dd3038eba06c40db6a"],["/2017/10/23/2017-10-23/index.html","898618d552678883b2a0b7037e681efb"],["/2017/11/08/2017-11-08/index.html","bbb51210e6450c744d6667ac5b42d5e9"],["/2017/11/12/2017-11-12/index.html","72e12abe2cc7cb8ce6b9ee8f0330c321"],["/2017/11/15/2017-11-15/index.html","b3b5a192f10193fcdc2b874866e78b06"],["/2017/11/27/2017-11-27/index.html","9126723dddccf14ee425fdb5c69e299f"],["/2017/12/06/2017-12-06/index.html","0fa160fa252c9af7a71f32118cb62aaf"],["/2018/02/12/2018-02-12/index.html","2a180bc8cd5bb01148e3426e5ba388b4"],["/2018/03/26/2018-03-26/index.html","b973e51f56e3be4d2176d38c5bacb6eb"],["/2018/04/02/2018-04-02/index.html","470f7d43989fe9544d24c014a9afb45f"],["/2018/04/24/2018-04-24/index.html","801eb60946fc2c38bc183d712d9d03a6"],["/2018/05/18/2018-05-18/index.html","5fb007e9f9d1e2ada881a1463d0cb7c1"],["/2018/05/23/2018-05-23/index.html","f86deffab17de153f64813e6ef1caf04"],["/2018/06/08/2018-06-08/index.html","a43caee2449daff54f85a5e012f84826"],["/2018/07/01/2018-07-01/index.html","df7e7abd37d2b765d4b2ad2499afa4af"],["/2018/08/30/2018-08-30/index.html","b45c120cccd15363d6373b3633d00cfa"],["/2020/07/20/2020-07-20/index.html","e5377fe29ffce2a323b0b2d3c3d1605d"],["/2020/08/01/2020-08-01/index.html","0ea292ae5f9fdc393febc3cd0ffd5f01"],["/2020/08/02/2020-08-02/index.html","c0f679e821faccf51f0b86487525b9cd"],["/2020/08/03/2020-08-03/index.html","9e2b03e1ab4137eb5e2ce2187ed3c044"],["/2020/08/04/2020-08-04-1/index.html","891dfa041b2255514d961e339f9bde7f"],["/2020/08/04/2020-08-04-2/index.html","61b6ff07fcf2f87d57e97f495f758b91"],["/2020/08/05/2020-08-05/index.html","0412b5ee5dc77748c6ee52d45d790643"],["/2020/08/06/2020-08-06/index.html","3407d538c5d6b868251e6bf44dbc56e4"],["/2020/08/07/2020-08-07/index.html","bf5e2a101cce32a05512e3e99371b144"],["/2020/08/08/2020-08-08/index.html","ef0f6e0b8a622c4e4bc8be43aecd64dd"],["/2020/08/09/2020-08-09/index.html","c4173f317f8fc3e1a5d2389a849174bf"],["/2020/08/10/2020-08-10/index.html","24386849b6602cff4f805337d957c30e"],["/2020/08/11/2020-08-11/index.html","1a76811fbed205570c92635d16079805"],["/2020/08/12/2020-08-12/index.html","c5b5ba6b91b82a0aee846a35457c9743"],["/2020/08/13/2020-08-13/index.html","f819a397777c5f74d7ee8f48d5daabd2"],["/2020/08/14/2020-08-14-1/index.html","863be0fdba1da10786cb9bc55f78181d"],["/2020/08/14/2020-08-14-2/index.html","c748355dd063a7ac04376fd952564c7a"],["/2020/08/15/2020-08-15/index.html","a3d78f478ff16f04f2d586069629d82d"],["/2020/08/16/2020-08-16-1/index.html","e35f7b6ed41e37af6d4cde34f3ef85c3"],["/2020/08/16/2020-08-16-2/index.html","26eaa43901ae7308ecdeee4c7789dced"],["/2020/08/17/2020-08-17/index.html","50d1d43fce67238ce12c2d045d6d60e5"],["/2020/08/18/2020-08-18/index.html","61f4d7741138361a537a1d62b22ba677"],["/2020/08/19/2020-08-19-1/index.html","a7268c5e0186267fe338ea7061e002ca"],["/2020/08/19/2020-08-19-2/index.html","85fdf9849855e5c22d88c9f6c8661155"],["/2020/08/20/2020-08-20/index.html","d922af6fcbf8270c7e1602822e3b9041"],["/2020/08/21/2020-08-21/index.html","829771a7a3bb97b4a71c2edf82eda15e"],["/2020/08/22/2020-08-22/index.html","5750901bdb11744600b5027c3b13219c"],["/2020/08/23/2020-08-23-1/index.html","fa0c516310d00720ad1d9cf14b2702ac"],["/2020/08/23/2020-08-23-2/index.html","2427a3024e2f3ac8211944ab903aa231"],["/2020/08/24/2020-08-24-1/index.html","20d2916ea67dec5a3c6720b950f48e3b"],["/2020/08/24/2020-08-24-2/index.html","a41f0fd4a2f38dc3df8163450e62bfe8"],["/2020/08/25/2020-08-25-1/index.html","7158b68f4fc491b561129ebab2f72eff"],["/2020/08/25/2020-08-25-2/index.html","675656611acc841e6682fbb80904f74e"],["/2020/08/26/2020-08-26/index.html","8daa28f44c64f7ad5f205d1c487f9c51"],["/2020/08/27/2020-08-27/index.html","3dbd5154ed365a38fd7b0f156ef1274d"],["/2020/08/28/2020-08-28/index.html","ecc95fec029984c0e2302115372a4db4"],["/2020/08/29/2020-08-29/index.html","0f3ed4b7c1398248edc3e8bd4f757592"],["/2020/08/30/2020-08-30/index.html","b2fc42bbba0073338b4d3d46aa7573fc"],["/2020/08/31/2020-08-31-1/index.html","b602aa8b19c25cda413ee80d743b6a21"],["/2020/08/31/2020-08-31-2/index.html","99b379e1290c43ce8cfcaac07fec3a85"],["/2020/09/01/2020-09-01-1/index.html","8d24b9cd9903691d18b304959b9d0bd0"],["/2020/09/01/2020-09-01-2/index.html","8504ba7713388daa6e8d9dfdd040dd98"],["/2020/09/02/2020-09-02-1/index.html","32a4c83746eac72dd03ebc5ab8a64674"],["/2020/09/02/2020-09-02-2/index.html","0f91b0f7341dc6a269126fa26c271101"],["/2020/09/03/2020-09-03-1/index.html","86f22cbfd2d6ae18a8bac076f84890dd"],["/2020/09/03/2020-09-03-2/index.html","32aa003e245f8b5ad7dee2d1816bd39f"],["/2020/09/04/2020-09-04-1/index.html","aa03801a3c18afd4d0654ff410facab5"],["/2020/09/05/2020-09-05-1/index.html","121cb0462c38b9eaa739e56edfaa69de"],["/2020/09/06/2020-09-06-1/index.html","d28430af5de14e1c696a29592d375daf"],["/2020/09/07/2020-09-07/index.html","5269489a399bb17cfbeef30db045a69d"],["/2020/09/08/2020-09-08-1/index.html","e6ab0d05e9bfe2d6500a2c445f199f46"],["/2020/09/08/2020-09-08-2/index.html","b5bac7f50dd7d489eb61caabccf877ff"],["/2020/09/09/2020-09-09/index.html","ffcdc65c6ac9fc6cee1e6476db577544"],["/2020/09/10/2020-09-10/index.html","43eb4b6a39885b841e4ebdf2963b400b"],["/2020/09/11/2020-09-11/index.html","c5672fb8b85b5b178dfa7dbc990aca89"],["/2020/09/12/2020-09-12/index.html","fa3a5c679af3645ac0a3b614c3e9bdcd"],["/2020/09/13/2020-09-13/index.html","277a8b31dfc8c902040c8ae60f559207"],["/2020/09/14/2020-09-14/index.html","6b1b205986694776d4c00e1f0bcd1f60"],["/2020/09/15/2020-09-15/index.html","e80fa98d8f22d3118032a48e107890a6"],["/2020/09/16/2020-09-16/index.html","f89a7236925f33c63c1c6ef09b8518ef"],["/2020/09/17/2020-09-17/index.html","18afa20d1240740ad4989bd057baa74c"],["/2020/09/19/2020-09-19/index.html","fd4ea41e40bf64623a2aa8c0b5b83a14"],["/2020/09/23/2020-09-23/index.html","48045dcaea12e5c8ee211e438b9b50d6"],["/2020/09/24/2020-09-24/index.html","df2f8990583cac21c149796f914eab8c"],["/2020/09/26/2020-09-26/index.html","7572d2085e5d6b9d85fbfcb2e6243575"],["/2020/09/27/2020-09-27/index.html","89d5756f70f801772ad1a48d63cc1ebf"],["/2020/09/28/2020-09-28-2/index.html","8ca63946e7c617eb8ee18abd2c0a578b"],["/2020/09/28/2020-09-28/index.html","d6724743fab533afc4cc18f62afa24d2"],["/2020/09/29/2020-09-29/index.html","127c681a9c87a9051c492c41f80f99a6"],["/2020/10/03/2020-10-03/index.html","9afa4964771d6d0ca5ed7d772ecef78b"],["/2020/10/04/2020-10-04/index.html","ff1c0a35352b242bf5f23e268883438c"],["/airplayervisual/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/airplayervisual/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/airplayervisual/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/airplayervisual/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/airplayervisual/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/airplayervisual/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/airplayervisual/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/airplayervisual/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/airplayervisual/index.html","6c4aa7be8ea049e810af0133a3bc0aa9"],["/airplayervisual/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/airplayervisual/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/airplayervisual/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/airplayervisual/js/jamsetting.js","7927507e0080ddf55c6d8b5f526bd942"],["/airplayervisual/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/airplayervisual/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/airplayervisual/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/archives/2015/05/index.html","2810fdc9f14974d7ab34c3169fa2406b"],["/archives/2015/06/index.html","22a050ede6c65776ca8e201707a46ad6"],["/archives/2015/12/index.html","726ce1d2919839c0a62b2aa3ad82fb2c"],["/archives/2015/index.html","ec1e32d8c07c4c706b2ef587351065b8"],["/archives/2016/06/index.html","1b101bb20e43d3069b304f903153d230"],["/archives/2016/12/index.html","018c27f413c0f0dca28336f94d027bb7"],["/archives/2016/index.html","7aeea8fe38feb4d7b56944be328fc6c7"],["/archives/2017/02/index.html","f9fffcbe536d9b7af6beef16469b0cb7"],["/archives/2017/03/index.html","b79f7726f3369592c3f1a500df7fcb7e"],["/archives/2017/04/index.html","2f17046bb625f0876a2a3e6e5ffe6e08"],["/archives/2017/05/index.html","bc044f50baa01ac901c2e0d8fef2963e"],["/archives/2017/08/index.html","7a9e69d23d647e34f528975631c937a4"],["/archives/2017/09/index.html","78eb5ccf130b14f1080dca4dcff25031"],["/archives/2017/10/index.html","960bf909e26bfc7795b93024dd336621"],["/archives/2017/11/index.html","98921088c470638cee3e9cd386b31e29"],["/archives/2017/12/index.html","e55f1cf44bfc263f5b77935805118c7d"],["/archives/2017/index.html","853c3f17cc7ce9853738cbdcd4b3bc20"],["/archives/2017/page/2/index.html","83945788ce4c36590684ef6a76636d8c"],["/archives/2017/page/3/index.html","d4ebdffc953aa8160a5048c609c6ebd7"],["/archives/2018/02/index.html","affb3010b61fdebfee8955ae0e3fb730"],["/archives/2018/03/index.html","a1643f44b847a626973388536bd751e1"],["/archives/2018/04/index.html","0e5864ceebb6028507e9f980cfb38441"],["/archives/2018/05/index.html","bd6c43596decb247a28dba99e24df234"],["/archives/2018/06/index.html","5dbed6ae0f18c6f1aa60085797b2a8e0"],["/archives/2018/07/index.html","8c336c0aadefbbf3325c2bc4d974ebfb"],["/archives/2018/08/index.html","1687250718e7e9e8a9e88121ea5a7d22"],["/archives/2018/index.html","fe9421983fa98030c84f7488280b56d7"],["/archives/2020/07/index.html","3f92582a61728565a72702aba1365aba"],["/archives/2020/08/index.html","76c8dd3e086b2b6b284b55ed5c389361"],["/archives/2020/08/page/2/index.html","21109bfd47a082bc97a0c2eaaf4065f5"],["/archives/2020/08/page/3/index.html","baa2842218f5c96c39e5d140e8e4d952"],["/archives/2020/08/page/4/index.html","5a03b9c13c97b093ef0094bf4077e5f0"],["/archives/2020/09/index.html","6751642f1b9e8435aa91a1fcae3b349f"],["/archives/2020/09/page/2/index.html","1283b4fbc86463cd671d9b960acfb8b6"],["/archives/2020/09/page/3/index.html","23d36b34a64368a2d09166e253b45158"],["/archives/2020/10/index.html","5a4680ade7b75edd70644a32ac90b35e"],["/archives/2020/index.html","ed564dc9e612a0a9a4cc453caa693073"],["/archives/2020/page/2/index.html","13d386688c713fce4f025b8fd9cab937"],["/archives/2020/page/3/index.html","b2c7ba25b1c4e1834a7df39fed1a8929"],["/archives/2020/page/4/index.html","6cf0dab4d3f15d79ed9da2e667b64bed"],["/archives/2020/page/5/index.html","58947855ce7378a98e498b7cb5fbfb98"],["/archives/2020/page/6/index.html","2bed1086498d596d683ddc004e6ec777"],["/archives/2020/page/7/index.html","98628914966be1d7875024ea4afe92aa"],["/archives/2020/page/8/index.html","8d8f506af3ebd26feae91b0e925caa49"],["/archives/index.html","5af8121a8bf21d63937ed4a631db8918"],["/archives/page/10/index.html","90a60d5387949a5026387f71fbf3ec28"],["/archives/page/11/index.html","8ed9db18769430a2256f2a4573f58627"],["/archives/page/2/index.html","b094da37dbb9312e63e4c29741079f44"],["/archives/page/3/index.html","4f4ae80dba4169e2a5ee88ac187c27e7"],["/archives/page/4/index.html","6a14ad7916e914b109cffaec0a15f66f"],["/archives/page/5/index.html","5e503c0784140a7701bac031ddb4ab88"],["/archives/page/6/index.html","3f29f109693c3695a4296c25dfe9299c"],["/archives/page/7/index.html","1ce300850f347f5c0fdffeae41f4f817"],["/archives/page/8/index.html","38653a535eb741de6471369051c864cf"],["/archives/page/9/index.html","6034362c41534d443bd4f849cbb300f5"],["/categories/NHK听力练习/index.html","6f1cea96e458c8c1034d6584373a9fe4"],["/categories/NHK听力练习/page/2/index.html","d178c5dc9283595fd8625d3eb54dd042"],["/categories/NHK听力练习/page/3/index.html","349ed838a252bdced995d147807dc96f"],["/categories/NHK听力练习/page/4/index.html","b32e970431a668f6bb919d8d7cbf96bb"],["/categories/NHK听力练习/page/5/index.html","66df014c3cd5e39da5de7058237c63f0"],["/categories/NHK听力练习/page/6/index.html","bf4b59fde240c6f8c986a6cbcebdc386"],["/categories/作品集/index.html","8f4a679c674828f79aad2f5adcef7b24"],["/categories/作品集/page/2/index.html","1c7a94b4a237d8b6647803125fcff397"],["/categories/学习/index.html","ba8fc711f0c12014dd0d95726b12c512"],["/categories/学习/page/2/index.html","30baca0f6745ab6c1f4879037fd0bbdd"],["/categories/学习/page/3/index.html","1c4199a214b85e3bee114714c055ea3b"],["/categories/游戏评测/index.html","c75c2a8b7c3c025c3de5db7e28a920a3"],["/categories/生活趣闻/index.html","5326b036bf648f9cd64728978f9936c1"],["/categories/随想/index.html","3b444298b9d4850a92239fdfe3bb13a5"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/addcss.css","59cae1ddbe6925c34f846ffe12d19921"],["/css/background.css","32d5acccbb94f987faf37cfdc3fd06df"],["/css/calendar.css","0090a32d2a61d42c5bfed254bfba078c"],["/css/clock.css","65602c2385c7eab42ee3804cd6ee0a5a"],["/css/danmu.css","2a5b914a9592bcd353425c6d5fa7af8e"],["/css/index.css","36eb36d0f5531dd7a8f4c8f925188615"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/loadingline.css","bc1ee020a6a11fea17b915b97e6978bf"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/html/calendar.html","bddcec1edba7f4c49fe5cd75f8cdf5b2"],["/html/shiyan.html","714c5baed9b0460062dfcabe07451d95"],["/html/shiyan2.html","00e1f7832edc3cdca6a108252ad5fd4a"],["/icon.png","8ec68de45d18642ba9baf2447e62f476"],["/images/AMJ1.png","d27a6725d1aaaf5324248da4312ab6c2"],["/images/AMJ2.png","00e22eba5901e5bd674e42228cd5bd26"],["/images/AMJ3.png","c8c9ea6348dfcad3a641899d5b587431"],["/images/FOTO1.jpg","4b6f100861908e2c7044cffbdb4a0c1a"],["/images/MVVM.png","ea5a002ee2f85c71a0db51d5adb5de19"],["/images/UT.jpg","367f4e432f9db55a92b2a290c4b0a476"],["/images/UX.png","a183974e958d41d1b6acec70bb7ea00a"],["/images/WindowsTerminal.png","8ac29cb56b8a1768cf7de071e9f1ae6f"],["/images/air-w.png","c1cc32f9d3e17551ca11a7d18a0b533a"],["/images/anzhuang.jpg","912b2489957f8344406edc5e5cebe5fa"],["/images/api-setting.png","2c0bb074390779721cba009e96c5417c"],["/images/apikey.png","1f31121b190eb1f990bcc3e27524bc03"],["/images/backpic1.jpg","86a6fa88167feb338fbf1a4e9057114b"],["/images/calendar.png","86319b08b93be7c8bc47cdba7a169563"],["/images/clock2.0.png","0a0f122c7a25262fc02ee99df0ef21eb"],["/images/example.png","aaac9983e5d59f919bf282dcff2edb3c"],["/images/foto17.png","28db4c6608ad1ee6b34238cafab25e5e"],["/images/foto2.jpg","be95b922512d004a61f83c97af3e2602"],["/images/foto2.png","0dc07d4e1b00526a273a89dc8b81548d"],["/images/foto3.jpg","551c0616c92c4ee7cc17dd458b3c46e9"],["/images/foto4.jpg","9d1d9fea759a41afc0061866e400339a"],["/images/foto5.jpg","984f618b15372f37d54f507e6f379f10"],["/images/foto9.jpg","b683fc0b998e80ff8f5a3e45e889807c"],["/images/girlpic.png","ff1e8427ed555af639e6d849f8f648f1"],["/images/girlpic1.png","698e5570e821c3cae643cc9777c2292e"],["/images/girlpic4.png","551882e4b9b6afb79000fd34c0dbf5e5"],["/images/headimage.png","332502f36a0297b30cb7969fe6de8451"],["/images/hexo.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/hexoWT.png","c027cc9f5665c7d7ba657e7a4bb40017"],["/images/his-json.png","7d8a71e38ab684107446e5c72c31854e"],["/images/history.gif","0459a3dcf2317253de0b34482880c63c"],["/images/idea.jpg","5eb08bf6c965588f03c8860f201cac45"],["/images/life-cycle.png","02f39ea5c041d45938fda4b50f234cb7"],["/images/life.jpg","74d2d9c5f48ec59e3badeec690941812"],["/images/listen.jpg","9d4f73cd5634f43deaed4f9aca03f9a3"],["/images/magnet.png","4899a924f3de0d19dbe0415128c07d65"],["/images/magnet1.png","8d010eb86ca943e036adaa7de57aee7d"],["/images/magnet2.png","293cb414a8ab93b43bde3bebf9cf0cfc"],["/images/magnet3.png","1923148630e2e094ff80bf35aa604c10"],["/images/magnet4.png","9bb4f963ac1c09f02d62525f513f492c"],["/images/meilu/1.jpg","cd67abcc3f543b5c66adc4f9d9c5c628"],["/images/meilu/10.jpg","ac9fb2711e477b5db1c3acb57e899045"],["/images/meilu/11.jpg","364caad6dfc356a3dc630fa067e48e88"],["/images/meilu/12.jpg","274767e5708f79934e5bdbf73eda8f0d"],["/images/meilu/13.jpg","dcab12b84454770b208913db63e825ac"],["/images/meilu/14.jpg","037cdd048284e621f27e17a2c59e8ea7"],["/images/meilu/2.jpg","f6cdb65ae3fad4523b32f5ee38696b60"],["/images/meilu/3.jpg","9e5df3612c2d93bf57313186c954aea5"],["/images/meilu/4.jpg","69ef2d6f4bcd79cf4b4e672b60c6751e"],["/images/meilu/5.jpg","ce81ca16def7613b7ebb368fb554f14f"],["/images/meilu/6.jpg","cafd5b62305f806754a75cc3af8c3b77"],["/images/meilu/7.jpg","b8ae865d386e1e713a6034da6b090c10"],["/images/meilu/8.jpg","afad7a7bf1066c817a8d2e7566bc780d"],["/images/meilu/9.jpg","72f9649f56b564eacf23ce3dacb88029"],["/images/metroui.jpg","5503bfffd450d9ab572b67ea00941571"],["/images/metroui/1.png","79a03b408c19c74eeaa8ff6e17a03f9d"],["/images/metroui/10.png","8309fed71a15c78f2dfa3af1ff75a5f3"],["/images/metroui/11.png","aaf1a007cbae12f93cc2688bace18d28"],["/images/metroui/12.png","0758ea282c3828c47e5c64520ff85783"],["/images/metroui/13.png","12ca7b511927cd4b26e97f3b20908a32"],["/images/metroui/14.png","f44ba7680f7b36df437e2ae2588d0565"],["/images/metroui/15.png","e8927c78b125b805af7aa86fee815ab6"],["/images/metroui/2.png","e604d3c662b996f06f22753ba9ab379f"],["/images/metroui/3.png","664e3b7490f2f95d5547b8ba79a65456"],["/images/metroui/4.png","c0f255344cafc303a1d9c7404da37149"],["/images/metroui/5.png","da2074cdb1298aca826abc1a5c441300"],["/images/metroui/6.png","efef2f087127614b4e03bcbe9a347018"],["/images/metroui/7.png","a4d34b1a2dbe3a58d3a92276880be039"],["/images/metroui/8.png","1d34a626bbaa898a60d4501936bcf962"],["/images/metroui/9.png","0663697c1667b377fe2623bd65e00b31"],["/images/metrouilogo.png","aea81b42d1c2c96440f74cf56ad82e2f"],["/images/nhkimage/2020.08.01.png","af4c55b2ae1d5ab2f56c75a87fcdfdb3"],["/images/nhkimage/2020.08.02.png","c355d41b90f5c65823f96c5f6868ce53"],["/images/nhkimage/2020.08.03.png","fddcedb40d7f28b2ccb90814351ad5c8"],["/images/nhkimage/2020.08.04.png","8b4518ec5a8513f442980ed7167136b1"],["/images/nhkimage/2020.08.05.png","590abfb19334b0c3cee5a005674f2253"],["/images/nhkimage/2020.08.06.png","d469e21100c42435e88f2bdf07f93da1"],["/images/nhkimage/2020.08.07.png","3ca9e2c8b8a09a38423d73cd36e8de9d"],["/images/nhkimage/2020.08.08.png","4420c2d899fe4eb90c48bae0da8418a2"],["/images/nhkimage/2020.08.09.png","df14be338f9c920818dd1daa6aa955ee"],["/images/nhkimage/2020.08.10.png","c4e2ed023cd3dbfd4986add35ca9357c"],["/images/nhkimage/2020.08.11.png","cf562339e57f673d394f3e6cdd1f60cb"],["/images/nhkimage/2020.08.12.png","81dfa179fea3052ddcf73912ea368f67"],["/images/nhkimage/2020.08.13.png","8cf26c2642e7a27cbd86fcbda8bae8d9"],["/images/nhkimage/2020.08.14.png","d88eeb678b3ed3651d597e61957e264a"],["/images/nhkimage/2020.08.15.png","b9879f193867edcffeefce62c9dc7153"],["/images/nhkimage/2020.08.16.png","46cb914aa1d556561897767ec9ff66a0"],["/images/nhkimage/2020.08.17.png","ea1af9645b5cc9cbaafe70a91dd15cca"],["/images/nhkimage/2020.08.18.png","e87e4de39a6f06cf4283a63af92dd8de"],["/images/nhkimage/2020.08.19.png","8001a951513b542a98ce1151be5bd87b"],["/images/nhkimage/2020.08.20.png","4bc8fafa3ecce30d340b1350715d78e3"],["/images/nhkimage/2020.08.21.png","07ad1337e127922abff27da6c672549b"],["/images/nhkimage/2020.08.22.png","b2b5d53ba46015f64048f9d803b12179"],["/images/nhkimage/2020.08.23.png","225af8c0cabe5218ec634d1b8815fd95"],["/images/nhkimage/2020.08.24.png","1d54a484a6e2395aabe9be005cd90361"],["/images/nhkimage/2020.08.25.png","8008ba169cfce0ef2041329cd29b6b77"],["/images/nhkimage/2020.08.26.png","72a2b8094003a54c97a34ea97cf21bc3"],["/images/nhkimage/2020.08.27.png","893407e604804d215c8fef8bcd5f2684"],["/images/nhkimage/2020.08.28.png","b542280b7341759890a99cbd44d822c5"],["/images/nhkimage/2020.08.29.png","620e2e7d4772e39615fd1a88cdf49717"],["/images/nhkimage/2020.08.30.png","f645d7ba2dcb506f9ec6fb9244425ad7"],["/images/nhkimage/2020.09.03.png","c5262f3aa87190e0273383ea1e445681"],["/images/nhkimage/2020.09.04.png","c07149c32aa41c03bc7dac82a713f6b2"],["/images/nhkimage/2020.09.05.png","4e43556e1cb3b7f4d75f0f6127616a54"],["/images/nhkimage/2020.09.06.png","1021d2ae04a7f109404f857a2a7629cf"],["/images/nhkimage/2020.09.07.png","db9827e9f0a4cf1401b559b4644a0204"],["/images/nhkimage/2020.09.08.png","efe1030b73dc1c01f169c3122a194426"],["/images/nhkimage/2020.09.09.png","f6ba3a1c6cdeff88404ebe2a646f2eb5"],["/images/nhkimage/2020.09.10.png","3471b05d02113517359a9e2167befcfa"],["/images/nhkimage/2020.09.11.png","921a541a8bffb1aa436df2eb6db7c99f"],["/images/nhkimage/2020.09.12.png","a51f8ebaddba69bb80f9259a30f17e65"],["/images/nhkimage/2020.09.13.png","0399889200493cd2154ffc407e2bc400"],["/images/nhkimage/2020.09.14.png","eaaf3da69a39ed316b7fc8c4d409bb0f"],["/images/nhkimage/2020.09.15.png","5774959ea4061c9298ea174f0862cc3a"],["/images/nhkimage/2020.09.16.png","0c5a00f74020740fda589c02e4b3f917"],["/images/nhkimage/2020.09.17.png","b5aef734e3a7db4862ca3fe4e6769dc2"],["/images/nhkimage/2020.09.24.png","5982a7b3843f4ae43b2b4bc4b0c577d6"],["/images/nhkimage/2020.09.26.jpg","c6415af781fbdd36fdb034f74646129b"],["/images/nhkimage/2020.09.27.png","27aa6f6a8d5534ccd99cff261dcd9eb6"],["/images/nhkimage/2020.09.28.png","0f4318d1ff17a33de364432a1c44b5ad"],["/images/notop.png","d25c272e5ce312a880e04ce8a0b27683"],["/images/pasted-0.png","552608d8f6e39369aa30c6e332a32826"],["/images/pasted-1.png","baafdacee93c99e99418aaedbf524fda"],["/images/pasted-10.jpg","395cff6f64ab5df19baa3572ac98e541"],["/images/pasted-11.jpg","56e5df07c96634638abf7995b25c81ab"],["/images/pasted-12.jpg","61b3f803b85ce3640d7a9ba7efb9da6b"],["/images/pasted-2.png","2f410e53c811f92a6135f48857776f5e"],["/images/pasted-3.jpg","bb5717e691e87355e7d63a5f3a87ae62"],["/images/pasted-4.jpg","10041d0e3567b24b81222ec5075d6492"],["/images/pasted-5.jpg","ac5047a4b48c6cdaee86fa1863e33904"],["/images/pasted-6.jpg","1556ae8d3ad5713d60237ee4d10e81f0"],["/images/pasted-7.jpg","913fde1686587646ddc663bd810cc81d"],["/images/pasted-8.jpg","fc83268081fb4b6b6ecb1ffa1ec5af7f"],["/images/pasted-9.jpg","25e0fa3496591501f5c29d0b802b77d2"],["/images/pet.png","2b8c121909497e57057478856fe48a94"],["/images/pet2.png","dfb1d6a17b527ccc0c600e6ad31f55e5"],["/images/ps1.png","0917ba91f21b6944dc08d35c41a326d2"],["/images/psb.jpg","6a27c58337875c776af0a7667598b401"],["/images/quse.png","7cd1ec12b804305430cb4cdc09c7a893"],["/images/rain.jpg","9c26acc44c692b6a63e134be07b07c18"],["/images/shezhi.png","281bf545f6a4024e2d0b7120bc398a21"],["/images/soul.jpg","d97b4099c0728ff6123d006fa62db86e"],["/images/study.jpg","a9b1cf95ee6bd9f3913e8ec6a6a6f44f"],["/images/tianqizhizi.jpg","dd48d78b4eeaaa52578352f9ef570b14"],["/images/vue.png","cf23526f451784ff137f161b8fe18d5a"],["/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/images/work.png","e521cf5b834292fde1c50e0a0f5802f9"],["/images/xiaoguoyanshi.png","994a3b710d36df0a4630cd9a768c7f7b"],["/images/xiaoguozhanshi-m.png","1fefca18214fc4889d1bb76b81887c9d"],["/images/zfe.one.png","b41f689341882058ffb28c4cee499bde"],["/images/幻想终结之日.png","0025c4d3973bdfedb80db3f78c59fa47"],["/images/时空战纪——游戏建议及意见①.jpg","1337457f14a8dffee66d94f8915b54ff"],["/images/简历.png","d70507ee4615c9e324578c0d777e6855"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","b2816f18531e7470afc88d9f63c2b52c"],["/img/favicon2.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","08c1d4d964659191958b5db03af19fca"],["/js/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/APlayer.min.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/airvisual.js","71cf86bfd452ca01d92438d8266416ee"],["/js/airvisualapi.js","6931bebe1696688d109963187fc2eace"],["/js/background.js","94c8410b174f58594cf81ec99054968b"],["/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/js/calendar.js","a58e02711cc6dec4dc04257e555b8923"],["/js/clock.js","ead1a80f7219c166e1180674b7d8c70b"],["/js/color.js","3730bb4f7b185e6f5130ac28bace968b"],["/js/danmu.js","6b6ae6b7f1b42dd4857541f43b2bb733"],["/js/echarts.js","dc1227b1eba1ba47fd185a387d0a7d37"],["/js/gitcalendar.js","fadfa8a42272cd322118653dca512a7a"],["/js/history.js","20459f7db325e597e64903f4c0d19306"],["/js/historyroll.js","a3e9ac376106816c50a61f9f4306d671"],["/js/jam.js","462c07d3b2e0f20394d994bbcfae37cb"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","790cd2f28594f8affbd4a450037c48ff"],["/js/rain.js","f656dc28e4ab5c3f8414d35f683278c1"],["/js/rainremove.js","ceacf82842b101f7e54a2aaf5f4bb9cb"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/link/index.html","ee88131f18ce0fdb0b8e762d4173aa16"],["/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","968c9ed0644d28de126b874669b2a090"],["/page/10/index.html","f916b5acd0e84490e39bc97e5d0155f3"],["/page/11/index.html","3eb8100c0350ad308edbaf4cf8923408"],["/page/2/index.html","8582c9f11658fb0767549f0639793809"],["/page/3/index.html","b29619f125fc930c25e07597bd4e77a1"],["/page/4/index.html","24cbbe606aa86a1348ca34e1918625e8"],["/page/5/index.html","b55a30b1ecc7831a870f607dfe8785db"],["/page/6/index.html","0330e356af37fe28b927901cccecb899"],["/page/7/index.html","259dbd61e7b6109d6b2d48fa3fd5381a"],["/page/8/index.html","b35ae7fd36ddbe4c8ece5e9729a58cfb"],["/page/9/index.html","6c8281a50209a4218000fe8e290506de"],["/research/index.html","0699ba2428b1ad24e0926f25f9f7a5ff"],["/sw-register.js","d226e68b5f3991818c01c95b7cb32724"],["/tags/Butterfly主题/index.html","5b16377d58946138cc2b8b2b9671efac"],["/tags/DIY/index.html","de141f4be11ab3fd9205a393be062583"],["/tags/DIY/page/2/index.html","668672fc4e2fe2775fe620e864c720df"],["/tags/ICT/index.html","9ea2e0948ad4167b805ac5a6cae73255"],["/tags/NHK听力练习/index.html","2dda136c08139791340758565530cb7c"],["/tags/NHK听力练习/page/2/index.html","8393c62b85cd3b506a45845704577302"],["/tags/NHK听力练习/page/3/index.html","205a94e6f951f9e2e12e2df81e9c4284"],["/tags/NHK听力练习/page/4/index.html","ac730138f433188b1cd89669142f7395"],["/tags/NHK听力练习/page/5/index.html","80e5015020327790da1ebd90c72c0cb1"],["/tags/NHK听力练习/page/6/index.html","bcef60a16bb3c5505cac89edf3a58077"],["/tags/metro-ui/index.html","397a2e175129caaa96c750b762867e72"],["/tags/vuejs/index.html","7b46618976a155e74fe9348c0ce2f713"],["/tags/お盆/index.html","d143044719f849f149ae36ac6bc4f603"],["/tags/世論調査/index.html","cdb8c0a490b046e548f7c5b549e3aae6"],["/tags/作品集/index.html","e61f71848a20035b880704523ca2ca6e"],["/tags/作品集/page/2/index.html","dbbdd432facac8a658e060752d2dbaec"],["/tags/农业/index.html","a45514ddf7ea5ac5d82306c5bd28a00f"],["/tags/历史/index.html","44296d84c764aead82fb8ea000fbb655"],["/tags/営業時間/index.html","967d5448e125214096b4382374aa9755"],["/tags/国外政事/index.html","2737082a93e36bed3f4c28737e9965aa"],["/tags/地震/index.html","0d99e1c3187c9e2174176f19954f27ea"],["/tags/外国政事/index.html","cdb6077d430005801f99fa90c08ca8ac"],["/tags/天气/index.html","d63bf908f5a9b230e720ff7233189ab1"],["/tags/天气/page/2/index.html","943bfae3135e52b2aa2429ffa894fa90"],["/tags/奥运会/index.html","86d568472c4203c0baec029cbf63ddf9"],["/tags/学习/index.html","afc3e0bd73bf238d84fdf1213ecb6933"],["/tags/学习/page/2/index.html","335d16a7548600336d8def79a48af516"],["/tags/学习/page/3/index.html","c5ba57c738a963e3413f4db35afa64ea"],["/tags/就业/index.html","d12855c73f9b1de4e6a34ade500d0313"],["/tags/庐山/index.html","d2d1ce0b97d56f51571b389061c8512f"],["/tags/座礁/index.html","0404750dafc52accc94b687794b01f4a"],["/tags/政府/index.html","6d76284393aae8938c33eee552d9bf1c"],["/tags/政治/index.html","c11ec102e2ee3bfd90ec2866358b1b0b"],["/tags/教程/index.html","81e0a0de8de633c29189ff7c03667314"],["/tags/日本教育/index.html","539373fd5ba5e2aea592fd40b2808c99"],["/tags/民生/index.html","332c9976d316203cea408a8e010e3810"],["/tags/民生/page/2/index.html","3687584decfee92068be6c2248f548f4"],["/tags/游戏评测/index.html","df7a77aeb54144c6b968060575d36eda"],["/tags/游记/index.html","a1cd00bf7782f3de85574dba6484f077"],["/tags/生活趣闻/index.html","eb0d1cc17d36933e3a66f35fcfb5af36"],["/tags/科技/index.html","0b57bbfb19cda0e2eebc22fbac3b20b0"],["/tags/经济/index.html","3007539023ad61fb316fcee679d24096"],["/tags/经济/page/2/index.html","0aefa99c6a9de4fce30ba939b98877ad"],["/tags/网络教学/index.html","692c5aab720dd330dc209a5758c42395"],["/tags/舆论/index.html","385b51e4a3856293d1d4269a223a1493"],["/tags/虚拟现实/index.html","459144ee96d65277dd9d400e067848fe"],["/tags/随想/index.html","6841cb6d03b0ef1b7534c09a3e709dfb"],["/tags/障害者/index.html","318658084209ece0499a679b4c8c2947"]];
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
