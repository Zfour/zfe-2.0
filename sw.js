/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/05/20/2015-05-20/index.html","db6ac0e0105bcef48956c51638cc2198"],["/2015/06/16/2015-06-16/index.html","6e04d03f3998d7ae51ec6bf1272fabe6"],["/2015/12/12/2015-12-12/index.html","287384760cb23d5c946785d496c8be12"],["/2016/06/08/2016-06-08/index.html","8b1365a35011f3b3a94782266f150ce4"],["/2016/12/18/2016-12-18/index.html","8b25b9db9f32cf9ad23835493c5bc091"],["/2017/02/17/2017-02-17/index.html","b47b99f02e92d04c76c6b31e704bc9e5"],["/2017/03/17/2017-03-17/index.html","9d9f0753dc88be98b42cde4a1c498645"],["/2017/04/06/2017-04-06/index.html","48ef320cb6236e22bac8b93d378da804"],["/2017/05/17/2017-05-17/index.html","632fd9e6acc1a06c751a509a217b53db"],["/2017/08/15/2017-08-15/index.html","e0d581392d2c6a80bf96085886699385"],["/2017/09/16/2017-09-16-1/index.html","671bebbfb3b855bff166c3df804b9d91"],["/2017/09/16/2017-09-16/index.html","f6e30db82565f686da08124e6dc59abe"],["/2017/09/21/2017-09-21/index.html","941cf30b258eb14b0fe01cc8048489cb"],["/2017/09/23/2017-09-23/index.html","ef249e880aef40322b4c6c3757f4719d"],["/2017/09/26/2017-09-26/index.html","5eed670280253599fceb50df2f31f9c1"],["/2017/09/27/2017-09-27/index.html","c3ff433e45c58465c60ab24911190992"],["/2017/10/04/2017-10-04/index.html","49ba672c2b60cea650d799922b33fb1b"],["/2017/10/08/2017-10-08/index.html","fc48f0902379e2d8b00e4b7770564d59"],["/2017/10/09/2017-10-09/index.html","f71398e3f8825d8e94d9d4aed29123b6"],["/2017/10/15/2017-10-15/index.html","01e76d2ff3da46d806c6c10c8d727c5e"],["/2017/10/19/2017-10-19/index.html","bce08e4563e87e50e0dec50e7c2ea161"],["/2017/10/23/2017-10-23-2/index.html","ae4af7c22f8ad4e3f85e27629eebf3b8"],["/2017/10/23/2017-10-23/index.html","7a81df45767f2ad043c8ac33ff8d2282"],["/2017/11/08/2017-11-08/index.html","2ae1625d861ec9613ef2b02ac8a58db9"],["/2017/11/12/2017-11-12/index.html","7b22cb0af9fd7c2c5f306b2ba124618e"],["/2017/11/15/2017-11-15/index.html","cc4d2433a85b0899e1b6bd583821ae53"],["/2017/11/27/2017-11-27/index.html","df7f6090c558c9b2e04c82551241dd7b"],["/2017/12/06/2017-12-06/index.html","4e103301cbe81c741e7942fe1fc1a033"],["/2018/02/12/2018-02-12/index.html","97276e6e436da748c36b3f8f612f29b7"],["/2018/03/26/2018-03-26/index.html","49f9ef3a914ceee8697220dc690071ce"],["/2018/04/02/2018-04-02/index.html","78beb4058ec534f0fe4a135653e9c1fd"],["/2018/04/24/2018-04-24/index.html","bae0b935380ae034536d5928669c5973"],["/2018/05/18/2018-05-18/index.html","53fb24930abf91c4588411cb34dd4d99"],["/2018/05/23/2018-05-23/index.html","5033c3ea55fc891654831573bdb12ebb"],["/2018/06/08/2018-06-08/index.html","954c190ec1513e7fd56f635d1f9908c7"],["/2018/07/01/2018-07-01/index.html","f94bed3e6471878c4541a475edbb19a8"],["/2018/08/30/2018-08-30/index.html","61191abe2a0283f9d236a49a5a411d7f"],["/2020/07/20/2020-07-20/index.html","468fcef09ad52913731c5f68f2649729"],["/2020/08/01/2020-08-01/index.html","0856b767946c704fa835cb71bce2dae5"],["/2020/08/02/2020-08-02/index.html","19de42bc9a78e76b43b49618e28d1a38"],["/2020/08/03/2020-08-03/index.html","c517a8ef4a69a60f64ad4e5d27ebc17d"],["/2020/08/04/2020-08-04-1/index.html","b54bf12ee25a739cb5af68c1bf3687ad"],["/2020/08/04/2020-08-04-2/index.html","c00f2ca0ab89cbf4d93fabd37e00ccfa"],["/2020/08/05/2020-08-05/index.html","2a3ad3305bbad89b45cd031442bc790b"],["/2020/08/06/2020-08-06/index.html","b98e4aecd74bd386ea43637493d3b6f2"],["/2020/08/07/2020-08-07/index.html","fc288780c84060c82e722dedad40d380"],["/2020/08/08/2020-08-08/index.html","c405b918a178d35b44ac3a5cb784512e"],["/2020/08/09/2020-08-09/index.html","8dadce88dd932f8c4147ab164210e48e"],["/2020/08/10/2020-08-10/index.html","33a0e7b881cdb3c1b4cc23aea924d631"],["/2020/08/11/2020-08-11/index.html","dd1e5a7f98177a6cbde1f419c2d308e4"],["/2020/08/12/2020-08-12/index.html","1628611b26af2943b2a54f71571a7ba9"],["/2020/08/13/2020-08-13/index.html","998499053238b6244308e7ea75917461"],["/2020/08/14/2020-08-14-1/index.html","2e0d4daf58b4e28cdba8bced600b1efb"],["/2020/08/14/2020-08-14-2/index.html","f11e90810c666c7c79c18606fb48e530"],["/2020/08/15/2020-08-15/index.html","8bca07e9e3d26d7a356c7def93ea9860"],["/2020/08/16/2020-08-16-1/index.html","a0548b340cfceacfa887e97ed5e7f376"],["/2020/08/16/2020-08-16-2/index.html","2029aa628cc53b8b4f9acffddb8d07db"],["/2020/08/17/2020-08-17/index.html","356402a972fcf73b3bb621e954f6cb0d"],["/2020/08/18/2020-08-18/index.html","43348e22d625a546087289ee3ea856e7"],["/2020/08/19/2020-08-19-1/index.html","8e0c9d3ccb6fdfa9b189406cf65abc69"],["/2020/08/19/2020-08-19-2/index.html","770ef4ddf476eda4eaaae56e9457d037"],["/2020/08/20/2020-08-20/index.html","9f608e28ed4f268331925bac2c6180fa"],["/2020/08/21/2020-08-21/index.html","330e5792607ab11efe534995740c6386"],["/2020/08/22/2020-08-22/index.html","de3e59b94b387c8c331b99591ba4b75b"],["/2020/08/23/2020-08-23-1/index.html","87a576095551fa1ba1b4293cf3e0579b"],["/2020/08/23/2020-08-23-2/index.html","ad9ebe6c359277329bdb370aa6c1bf7b"],["/2020/08/24/2020-08-24-1/index.html","a36e3f97cf7373bf009972390ad62d43"],["/2020/08/24/2020-08-24-2/index.html","f2fc5f915d6dbd26a43c964cfb6c9f6b"],["/2020/08/25/2020-08-25-1/index.html","9b49f8a4226f20ff2c172151bc736bd7"],["/2020/08/25/2020-08-25-2/index.html","cab55a8c9fb7d727ac1d73312126d98e"],["/2020/08/26/2020-08-26/index.html","090dad5b3a6896dc94d0d4639312d631"],["/2020/08/27/2020-08-27/index.html","b598da4391c3872cb00409fb30b6822a"],["/2020/08/28/2020-08-28/index.html","1b57b6769555dfa1be57bffd92ead330"],["/2020/08/29/2020-08-29/index.html","0dd1adfe3d96c88bc5bcce43fbe79a8e"],["/2020/08/30/2020-08-30/index.html","c0c895c1e4084cf4312be93e50c22911"],["/2020/08/31/2020-08-31-1/index.html","d413d77de1bbf74ea27327e7d9874e93"],["/2020/08/31/2020-08-31-2/index.html","42b77ee4d6c535f779b1efa43a276e7c"],["/2020/09/01/2020-09-01-1/index.html","9ced671f0cb9015f7430688144f3fee5"],["/2020/09/01/2020-09-01-2/index.html","a3b59707d7793b95e0f338df6589b503"],["/2020/09/02/2020-09-02-1/index.html","f1abafa3cbe216a6de58b14542208589"],["/2020/09/02/2020-09-02-2/index.html","1cd977b7c59375d5dbfa5032620973d7"],["/2020/09/03/2020-09-03-1/index.html","fb207fb628f7e51ec39afad422d8b8de"],["/2020/09/03/2020-09-03-2/index.html","106037e55ddcb2b284fbb353bd8c4e9c"],["/2020/09/04/2020-09-04-1/index.html","daffe40b6d0857a03b2d26c6f0bbc67c"],["/2020/09/05/2020-09-05-1/index.html","17c870a11debfd93c4ed41b785d0d5ce"],["/2020/09/06/2020-09-06-1/index.html","9f1241f56ec9556f09db93202c271797"],["/2020/09/07/2020-09-07/index.html","018537b84416e5257eb8d3b6d44469ec"],["/2020/09/08/2020-09-08-1/index.html","08f93a84b92cf70dc1f9a0faa7f58ac3"],["/2020/09/08/2020-09-08-2/index.html","454fa84c8bf8556410d7b112dbbb3430"],["/2020/09/09/2020-09-09/index.html","8d2e88365eef561dc6fa6a91c2acaaac"],["/2020/09/10/2020-09-10/index.html","b697de475f795357d675e8fc4c9a3259"],["/2020/09/11/2020-09-11/index.html","661c1ae23da412db2b9d1263f7282771"],["/2020/09/12/2020-09-12/index.html","6de3488d450a30e8fef092dd27f79fe3"],["/2020/09/13/2020-09-13/index.html","4218fe38ab5e9d8b5d0144a1f0060877"],["/2020/09/14/2020-09-14/index.html","5fd7399fcdcc2b6edf19d6a076dd54d5"],["/2020/09/15/2020-09-15/index.html","71a9b3ba1f72a514072c518da92d2d86"],["/2020/09/16/2020-09-16/index.html","b282bd2da3aaf04b8ecf68739dfb48ca"],["/2020/09/17/2020-09-17/index.html","23a9ce81a96798e3186bbda73c763ff0"],["/2020/09/19/2020-09-19/index.html","ddd3ff7f85e5db43eaa90cf14ab6335b"],["/2020/09/23/2020-09-23/index.html","800f172b2cb69fdc4a68c7507d5b68ce"],["/2020/09/24/2020-09-24/index.html","a4475a708bf8235fa81ab398e1724ed6"],["/2020/09/26/2020-09-26/index.html","be70d0828666381fea849c77cc7ea28a"],["/2020/09/27/2020-09-27/index.html","4eb866d3254e0d64d7566729b0bb6073"],["/2020/09/28/2020-09-28-2/index.html","954a11a31d9c928c49755bf062846cc2"],["/2020/09/28/2020-09-28/index.html","d95025758b3bd6e62e30f647b467e992"],["/2020/09/29/2020-09-29/index.html","a85bf2322769e049ec59e8c6e5391bab"],["/2020/10/03/2020-10-03/index.html","a5742934d0dafd9bad91dc7b6b48cfed"],["/2020/10/04/2020-10-04/index.html","625ba14322260eb3c4ae12048495f8e6"],["/2020/10/09/2020-10-09/index.html","0f41e69aa0afd5e5a6c1d242972b7bc2"],["/2020/10/10/2020-10-10/index.html","00e73397ce0982ca06cc1860c2bdc78c"],["/2020/10/11/2020-10-11/index.html","67e591dfca907259c49f77d2eb5351a4"],["/2020/10/12/2020-10-12/index.html","242af3544f33dd744bc94dd99372c0e5"],["/2020/10/13/2020-10-13/index.html","08bb23e4354f56afdc0e4ad6055ff12a"],["/2020/10/14/2020-10-14/index.html","aff4add792511f6930be35d264326ccd"],["/2020/10/16/2020-10-16-1/index.html","4d6d15d827faee6559e144102146136c"],["/airplayervisual/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/airplayervisual/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/airplayervisual/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/airplayervisual/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/airplayervisual/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/airplayervisual/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/airplayervisual/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/airplayervisual/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/airplayervisual/index.html","9a02614728e00fe7d81f339da82a144a"],["/airplayervisual/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/airplayervisual/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/airplayervisual/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/airplayervisual/js/jamsetting.js","7927507e0080ddf55c6d8b5f526bd942"],["/airplayervisual/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/airplayervisual/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/airplayervisual/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/archives/2015/05/index.html","85f655c74454accf06f7a8640755727f"],["/archives/2015/06/index.html","58c26eac5afb44696713023456729ed5"],["/archives/2015/12/index.html","76ac8f10aef9d832a78c31c3eb4ba583"],["/archives/2015/index.html","3c9f9e3576f0da404ce437b71eebe819"],["/archives/2016/06/index.html","b52667cb0e17f48f4b67fe695eb58c0c"],["/archives/2016/12/index.html","c2dc737e52a636a21c687480a73ead43"],["/archives/2016/index.html","d65db8f83e9802305b39cd4a14540c48"],["/archives/2017/02/index.html","43b22b8e6fa8826b0f862627999a71e7"],["/archives/2017/03/index.html","62674081949f3505b43d094acb325c91"],["/archives/2017/04/index.html","08aca6ef8097d442cf884de3403f57ce"],["/archives/2017/05/index.html","23668c7bdbebc334f7a5e64706c68314"],["/archives/2017/08/index.html","57b9d150afbce1b043a7d734fd79e9a7"],["/archives/2017/09/index.html","89744caa244df51969a996da77e3b28c"],["/archives/2017/10/index.html","ef6bbf0e813c184e3facae02717ed3c1"],["/archives/2017/11/index.html","21575aaa6b7dc23a0962a02f7aac4853"],["/archives/2017/12/index.html","0cbc50ddfe3c13a78848c875712819a7"],["/archives/2017/index.html","5925ff5002975eec8b80c8edd2df6e66"],["/archives/2017/page/2/index.html","cc3fc99d317a02dc0fcc0f726c924172"],["/archives/2017/page/3/index.html","f1fe96d2375d852019b136da29d8b8f1"],["/archives/2018/02/index.html","202abc45ecf6c2b3c01be560af5d90e1"],["/archives/2018/03/index.html","76a66f50f8748e484b47c1a7d21edde7"],["/archives/2018/04/index.html","91b6c1a25d39e4c83dd09274d6dccb70"],["/archives/2018/05/index.html","ed96b68f44c0b43d3272c6c892259902"],["/archives/2018/06/index.html","629aa73fd8bedd40bc253f3d0fed2b48"],["/archives/2018/07/index.html","be9d48e23802b0d7857090b29723b954"],["/archives/2018/08/index.html","07c795ef0cc7965f09506bc2fd01a864"],["/archives/2018/index.html","fcff61a8d0af021a4b5b828d95e9c5bf"],["/archives/2020/07/index.html","2be4ad4f36df56d9e62ee55173371168"],["/archives/2020/08/index.html","73e0ebc5938cb671b08bdabe27483108"],["/archives/2020/08/page/2/index.html","ef7db63be72592642004efb28324cbfb"],["/archives/2020/08/page/3/index.html","bb8b4f5b4ea70cfd94319afaeba1a6ad"],["/archives/2020/08/page/4/index.html","fa70286c1c0a14e92c4c80d399e1eb58"],["/archives/2020/09/index.html","73fd8b853e9f8478eaf41d674d397250"],["/archives/2020/09/page/2/index.html","927091affe2f5badf3431f264e5467b6"],["/archives/2020/09/page/3/index.html","45365d0985078052cf837c0f3c2b8063"],["/archives/2020/10/index.html","9e2233f2fa855d5f806e5c0ac2403a06"],["/archives/2020/index.html","58eb1820355b719458c59cfc792624fd"],["/archives/2020/page/2/index.html","41fe81920fd4cb634de6a7d8aa1f460b"],["/archives/2020/page/3/index.html","791fb053fedce13c1fd37f5fb01dfa4a"],["/archives/2020/page/4/index.html","2fba20fec78b8dbff4303a9148247572"],["/archives/2020/page/5/index.html","b947b1335235eac4946add060477be27"],["/archives/2020/page/6/index.html","413af541c15f7e064b825c2d8a9094c2"],["/archives/2020/page/7/index.html","d9d701a59b67906a8f993113ba1bfdad"],["/archives/2020/page/8/index.html","27a787dbbafb0d7578e9d6aea3594b00"],["/archives/index.html","156c463efb87167c96276728ffaf5f5a"],["/archives/page/10/index.html","1fe6450def9a1cd8d07274c9b1f277ef"],["/archives/page/11/index.html","078bb8dd0c3f8b902d94ede6b051a4bd"],["/archives/page/12/index.html","11a15101b1b000199c64d163cfbab722"],["/archives/page/2/index.html","72329ae55c5bb3183d866a8bcfa38ef3"],["/archives/page/3/index.html","01c34f487580246869f4e9627e3d6131"],["/archives/page/4/index.html","4b1ad01caf2e449ea7c8927ce2bad123"],["/archives/page/5/index.html","5d29617d74f0df641fbf115e6d2e4439"],["/archives/page/6/index.html","56a2c91ca362be759a85bf0a58279c77"],["/archives/page/7/index.html","def31ad44f97b435f30b6677e7ed1ccd"],["/archives/page/8/index.html","ceea05e918adfc35cce80dcc0aec814d"],["/archives/page/9/index.html","adc50cc8d47c84986e7b29931dd62fb8"],["/categories/NHK听力练习/index.html","08b06bb35cd8d0adb435a5a374cb76d3"],["/categories/NHK听力练习/page/2/index.html","6d07477a5810beba4f09bad957f0746d"],["/categories/NHK听力练习/page/3/index.html","51cd8b1b7584307ffcf629c0fc9002fc"],["/categories/NHK听力练习/page/4/index.html","791c0dfbe479ae3b400597bc865e2877"],["/categories/NHK听力练习/page/5/index.html","f91f193e7bb02ed7d539e110e3322194"],["/categories/NHK听力练习/page/6/index.html","93e90d5586e7ecc9121b1a7171486fd1"],["/categories/作品集/index.html","9c1f489e1208fd089b430f4df637b2b7"],["/categories/作品集/page/2/index.html","e2e72352e3bea4d6597bad008f3f5a74"],["/categories/学习/index.html","0cc735f3a8cb22f78793455df84c3fa8"],["/categories/学习/page/2/index.html","1784a6e10537b0f43b6941b9afdae66e"],["/categories/学习/page/3/index.html","bd99671ea92a34773a9044444c58df80"],["/categories/学习/page/4/index.html","a0e1c3920593b4d62082f33449c545e8"],["/categories/游戏评测/index.html","7981d578a610e977f332de93cda7e151"],["/categories/生活趣闻/index.html","c0ed4806a11fa1f803b37a129a6b938a"],["/categories/随想/index.html","1e047a1539b88bfeb2d50b4a1e1a15e4"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/addcss.css","59cae1ddbe6925c34f846ffe12d19921"],["/css/background.css","32d5acccbb94f987faf37cfdc3fd06df"],["/css/calendar.css","0090a32d2a61d42c5bfed254bfba078c"],["/css/clock - 副本.css","65602c2385c7eab42ee3804cd6ee0a5a"],["/css/clock.css","9db53e3bffb704c740aa83bddaf8b999"],["/css/cursor.css","c1a23e168c5b794ff367eb0ae77eb26b"],["/css/danmu.css","2a5b914a9592bcd353425c6d5fa7af8e"],["/css/index.css","e0ecbfc6d569c15e3c74302c0114ce1f"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/loadingline.css","bc1ee020a6a11fea17b915b97e6978bf"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/html/calendar.html","bddcec1edba7f4c49fe5cd75f8cdf5b2"],["/html/shiyan.html","92afdadf3a2a2b379ec148e324ae596c"],["/html/shiyan2.html","cbe264e98ec8cd46860e1438f9bbecc7"],["/icon.png","8ec68de45d18642ba9baf2447e62f476"],["/images/AMJ1.png","d27a6725d1aaaf5324248da4312ab6c2"],["/images/AMJ2.png","00e22eba5901e5bd674e42228cd5bd26"],["/images/AMJ3.png","c8c9ea6348dfcad3a641899d5b587431"],["/images/FOTO1.jpg","4b6f100861908e2c7044cffbdb4a0c1a"],["/images/MVVM.png","ea5a002ee2f85c71a0db51d5adb5de19"],["/images/UT.jpg","367f4e432f9db55a92b2a290c4b0a476"],["/images/UX.png","a183974e958d41d1b6acec70bb7ea00a"],["/images/WindowsTerminal.png","8ac29cb56b8a1768cf7de071e9f1ae6f"],["/images/air-w.png","c1cc32f9d3e17551ca11a7d18a0b533a"],["/images/anzhuang.jpg","912b2489957f8344406edc5e5cebe5fa"],["/images/api-setting.png","2c0bb074390779721cba009e96c5417c"],["/images/apikey.png","1f31121b190eb1f990bcc3e27524bc03"],["/images/backpic1.jpg","86a6fa88167feb338fbf1a4e9057114b"],["/images/calendar.png","86319b08b93be7c8bc47cdba7a169563"],["/images/clock2.0.png","0a0f122c7a25262fc02ee99df0ef21eb"],["/images/clock3.0.png","8e04375c183c637b65fb50ed40f46466"],["/images/example.png","aaac9983e5d59f919bf282dcff2edb3c"],["/images/foto17.png","28db4c6608ad1ee6b34238cafab25e5e"],["/images/foto2.jpg","be95b922512d004a61f83c97af3e2602"],["/images/foto2.png","0dc07d4e1b00526a273a89dc8b81548d"],["/images/foto3.jpg","551c0616c92c4ee7cc17dd458b3c46e9"],["/images/foto4.jpg","9d1d9fea759a41afc0061866e400339a"],["/images/foto5.jpg","984f618b15372f37d54f507e6f379f10"],["/images/foto9.jpg","b683fc0b998e80ff8f5a3e45e889807c"],["/images/girlpic.png","ff1e8427ed555af639e6d849f8f648f1"],["/images/girlpic1.png","698e5570e821c3cae643cc9777c2292e"],["/images/girlpic4.png","551882e4b9b6afb79000fd34c0dbf5e5"],["/images/headimage.png","332502f36a0297b30cb7969fe6de8451"],["/images/hexo.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/hexoWT.png","c027cc9f5665c7d7ba657e7a4bb40017"],["/images/his-json.png","7d8a71e38ab684107446e5c72c31854e"],["/images/history.gif","0459a3dcf2317253de0b34482880c63c"],["/images/homework1.png","e8d2f64d0785519ea7779016208a2900"],["/images/idea.jpg","5eb08bf6c965588f03c8860f201cac45"],["/images/key1.png","f2a370e02ad6c5a101db20b47a9a0008"],["/images/key2.png","21dc40bbe0377cd9fe85a9cb431c18f0"],["/images/life-cycle.png","02f39ea5c041d45938fda4b50f234cb7"],["/images/life.jpg","74d2d9c5f48ec59e3badeec690941812"],["/images/listen.jpg","9d4f73cd5634f43deaed4f9aca03f9a3"],["/images/loading.gif","ffa0804a5d99e2d5b39e05cda6d6b28b"],["/images/magnet.png","4899a924f3de0d19dbe0415128c07d65"],["/images/magnet1.png","8d010eb86ca943e036adaa7de57aee7d"],["/images/magnet2.png","293cb414a8ab93b43bde3bebf9cf0cfc"],["/images/magnet3.png","1923148630e2e094ff80bf35aa604c10"],["/images/magnet4.png","9bb4f963ac1c09f02d62525f513f492c"],["/images/meilu/1.jpg","cd67abcc3f543b5c66adc4f9d9c5c628"],["/images/meilu/10.jpg","ac9fb2711e477b5db1c3acb57e899045"],["/images/meilu/11.jpg","364caad6dfc356a3dc630fa067e48e88"],["/images/meilu/12.jpg","274767e5708f79934e5bdbf73eda8f0d"],["/images/meilu/13.jpg","dcab12b84454770b208913db63e825ac"],["/images/meilu/14.jpg","037cdd048284e621f27e17a2c59e8ea7"],["/images/meilu/2.jpg","f6cdb65ae3fad4523b32f5ee38696b60"],["/images/meilu/3.jpg","9e5df3612c2d93bf57313186c954aea5"],["/images/meilu/4.jpg","69ef2d6f4bcd79cf4b4e672b60c6751e"],["/images/meilu/5.jpg","ce81ca16def7613b7ebb368fb554f14f"],["/images/meilu/6.jpg","cafd5b62305f806754a75cc3af8c3b77"],["/images/meilu/7.jpg","b8ae865d386e1e713a6034da6b090c10"],["/images/meilu/8.jpg","afad7a7bf1066c817a8d2e7566bc780d"],["/images/meilu/9.jpg","72f9649f56b564eacf23ce3dacb88029"],["/images/metroui.jpg","5503bfffd450d9ab572b67ea00941571"],["/images/metroui/1.png","79a03b408c19c74eeaa8ff6e17a03f9d"],["/images/metroui/10.png","8309fed71a15c78f2dfa3af1ff75a5f3"],["/images/metroui/11.png","aaf1a007cbae12f93cc2688bace18d28"],["/images/metroui/12.png","0758ea282c3828c47e5c64520ff85783"],["/images/metroui/13.png","12ca7b511927cd4b26e97f3b20908a32"],["/images/metroui/14.png","f44ba7680f7b36df437e2ae2588d0565"],["/images/metroui/15.png","e8927c78b125b805af7aa86fee815ab6"],["/images/metroui/2.png","e604d3c662b996f06f22753ba9ab379f"],["/images/metroui/3.png","664e3b7490f2f95d5547b8ba79a65456"],["/images/metroui/4.png","c0f255344cafc303a1d9c7404da37149"],["/images/metroui/5.png","da2074cdb1298aca826abc1a5c441300"],["/images/metroui/6.png","efef2f087127614b4e03bcbe9a347018"],["/images/metroui/7.png","a4d34b1a2dbe3a58d3a92276880be039"],["/images/metroui/8.png","1d34a626bbaa898a60d4501936bcf962"],["/images/metroui/9.png","0663697c1667b377fe2623bd65e00b31"],["/images/metrouilogo.png","aea81b42d1c2c96440f74cf56ad82e2f"],["/images/nhkimage/2020.08.01.png","af4c55b2ae1d5ab2f56c75a87fcdfdb3"],["/images/nhkimage/2020.08.02.png","c355d41b90f5c65823f96c5f6868ce53"],["/images/nhkimage/2020.08.03.png","fddcedb40d7f28b2ccb90814351ad5c8"],["/images/nhkimage/2020.08.04.png","8b4518ec5a8513f442980ed7167136b1"],["/images/nhkimage/2020.08.05.png","590abfb19334b0c3cee5a005674f2253"],["/images/nhkimage/2020.08.06.png","d469e21100c42435e88f2bdf07f93da1"],["/images/nhkimage/2020.08.07.png","3ca9e2c8b8a09a38423d73cd36e8de9d"],["/images/nhkimage/2020.08.08.png","4420c2d899fe4eb90c48bae0da8418a2"],["/images/nhkimage/2020.08.09.png","df14be338f9c920818dd1daa6aa955ee"],["/images/nhkimage/2020.08.10.png","c4e2ed023cd3dbfd4986add35ca9357c"],["/images/nhkimage/2020.08.11.png","cf562339e57f673d394f3e6cdd1f60cb"],["/images/nhkimage/2020.08.12.png","81dfa179fea3052ddcf73912ea368f67"],["/images/nhkimage/2020.08.13.png","8cf26c2642e7a27cbd86fcbda8bae8d9"],["/images/nhkimage/2020.08.14.png","d88eeb678b3ed3651d597e61957e264a"],["/images/nhkimage/2020.08.15.png","b9879f193867edcffeefce62c9dc7153"],["/images/nhkimage/2020.08.16.png","46cb914aa1d556561897767ec9ff66a0"],["/images/nhkimage/2020.08.17.png","ea1af9645b5cc9cbaafe70a91dd15cca"],["/images/nhkimage/2020.08.18.png","e87e4de39a6f06cf4283a63af92dd8de"],["/images/nhkimage/2020.08.19.png","8001a951513b542a98ce1151be5bd87b"],["/images/nhkimage/2020.08.20.png","4bc8fafa3ecce30d340b1350715d78e3"],["/images/nhkimage/2020.08.21.png","07ad1337e127922abff27da6c672549b"],["/images/nhkimage/2020.08.22.png","b2b5d53ba46015f64048f9d803b12179"],["/images/nhkimage/2020.08.23.png","225af8c0cabe5218ec634d1b8815fd95"],["/images/nhkimage/2020.08.24.png","1d54a484a6e2395aabe9be005cd90361"],["/images/nhkimage/2020.08.25.png","8008ba169cfce0ef2041329cd29b6b77"],["/images/nhkimage/2020.08.26.png","72a2b8094003a54c97a34ea97cf21bc3"],["/images/nhkimage/2020.08.27.png","893407e604804d215c8fef8bcd5f2684"],["/images/nhkimage/2020.08.28.png","b542280b7341759890a99cbd44d822c5"],["/images/nhkimage/2020.08.29.png","620e2e7d4772e39615fd1a88cdf49717"],["/images/nhkimage/2020.08.30.png","f645d7ba2dcb506f9ec6fb9244425ad7"],["/images/nhkimage/2020.09.03.png","c5262f3aa87190e0273383ea1e445681"],["/images/nhkimage/2020.09.04.png","c07149c32aa41c03bc7dac82a713f6b2"],["/images/nhkimage/2020.09.05.png","4e43556e1cb3b7f4d75f0f6127616a54"],["/images/nhkimage/2020.09.06.png","1021d2ae04a7f109404f857a2a7629cf"],["/images/nhkimage/2020.09.07.png","db9827e9f0a4cf1401b559b4644a0204"],["/images/nhkimage/2020.09.08.png","efe1030b73dc1c01f169c3122a194426"],["/images/nhkimage/2020.09.09.png","f6ba3a1c6cdeff88404ebe2a646f2eb5"],["/images/nhkimage/2020.09.10.png","3471b05d02113517359a9e2167befcfa"],["/images/nhkimage/2020.09.11.png","921a541a8bffb1aa436df2eb6db7c99f"],["/images/nhkimage/2020.09.12.png","a51f8ebaddba69bb80f9259a30f17e65"],["/images/nhkimage/2020.09.13.png","0399889200493cd2154ffc407e2bc400"],["/images/nhkimage/2020.09.14.png","eaaf3da69a39ed316b7fc8c4d409bb0f"],["/images/nhkimage/2020.09.15.png","5774959ea4061c9298ea174f0862cc3a"],["/images/nhkimage/2020.09.16.png","0c5a00f74020740fda589c02e4b3f917"],["/images/nhkimage/2020.09.17.png","b5aef734e3a7db4862ca3fe4e6769dc2"],["/images/nhkimage/2020.09.24.png","5982a7b3843f4ae43b2b4bc4b0c577d6"],["/images/nhkimage/2020.09.26.jpg","c6415af781fbdd36fdb034f74646129b"],["/images/nhkimage/2020.09.27.png","27aa6f6a8d5534ccd99cff261dcd9eb6"],["/images/nhkimage/2020.09.28.png","0f4318d1ff17a33de364432a1c44b5ad"],["/images/nhkimage/2020.10.09.png","6408d9f7e66fdeba8b9207939a08cf8d"],["/images/notop.png","d25c272e5ce312a880e04ce8a0b27683"],["/images/pasted-0.png","552608d8f6e39369aa30c6e332a32826"],["/images/pasted-1.png","baafdacee93c99e99418aaedbf524fda"],["/images/pasted-10.jpg","395cff6f64ab5df19baa3572ac98e541"],["/images/pasted-11.jpg","56e5df07c96634638abf7995b25c81ab"],["/images/pasted-12.jpg","61b3f803b85ce3640d7a9ba7efb9da6b"],["/images/pasted-2.png","2f410e53c811f92a6135f48857776f5e"],["/images/pasted-3.jpg","bb5717e691e87355e7d63a5f3a87ae62"],["/images/pasted-4.jpg","10041d0e3567b24b81222ec5075d6492"],["/images/pasted-5.jpg","ac5047a4b48c6cdaee86fa1863e33904"],["/images/pasted-6.jpg","1556ae8d3ad5713d60237ee4d10e81f0"],["/images/pasted-7.jpg","913fde1686587646ddc663bd810cc81d"],["/images/pasted-8.jpg","fc83268081fb4b6b6ecb1ffa1ec5af7f"],["/images/pasted-9.jpg","25e0fa3496591501f5c29d0b802b77d2"],["/images/pet.png","2b8c121909497e57057478856fe48a94"],["/images/pet2.png","dfb1d6a17b527ccc0c600e6ad31f55e5"],["/images/ps1.png","0917ba91f21b6944dc08d35c41a326d2"],["/images/psb.jpg","6a27c58337875c776af0a7667598b401"],["/images/quse.png","7cd1ec12b804305430cb4cdc09c7a893"],["/images/rain.jpg","9c26acc44c692b6a63e134be07b07c18"],["/images/shezhi.png","281bf545f6a4024e2d0b7120bc398a21"],["/images/soul.jpg","d97b4099c0728ff6123d006fa62db86e"],["/images/study.jpg","a9b1cf95ee6bd9f3913e8ec6a6a6f44f"],["/images/tianqizhizi.jpg","dd48d78b4eeaaa52578352f9ef570b14"],["/images/vue.png","cf23526f451784ff137f161b8fe18d5a"],["/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/images/work.png","e521cf5b834292fde1c50e0a0f5802f9"],["/images/xiaoguoyanshi.png","994a3b710d36df0a4630cd9a768c7f7b"],["/images/xiaoguozhanshi-m.png","1fefca18214fc4889d1bb76b81887c9d"],["/images/zfe.one.png","b41f689341882058ffb28c4cee499bde"],["/images/幻想终结之日.png","0025c4d3973bdfedb80db3f78c59fa47"],["/images/时空战纪——游戏建议及意见①.jpg","1337457f14a8dffee66d94f8915b54ff"],["/images/简历.png","d70507ee4615c9e324578c0d777e6855"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favicon2.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","b7d44d88ddb254068d152aad68e30d0b"],["/js/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/APlayer.min.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/airvisual.js","71cf86bfd452ca01d92438d8266416ee"],["/js/airvisualapi.js","6931bebe1696688d109963187fc2eace"],["/js/background.js","94c8410b174f58594cf81ec99054968b"],["/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/js/calendar.js","a58e02711cc6dec4dc04257e555b8923"],["/js/clock - 副本.js","405186e7a9d73221d2d50c0dea2852d0"],["/js/clock.js","2fdceb94cc57b551cd245b0001927b66"],["/js/color.js","3730bb4f7b185e6f5130ac28bace968b"],["/js/danmu.js","6b6ae6b7f1b42dd4857541f43b2bb733"],["/js/echarts.js","dc1227b1eba1ba47fd185a387d0a7d37"],["/js/gitcalendar.js","fadfa8a42272cd322118653dca512a7a"],["/js/history.js","20459f7db325e597e64903f4c0d19306"],["/js/historyroll.js","a3e9ac376106816c50a61f9f4306d671"],["/js/jam.js","462c07d3b2e0f20394d994bbcfae37cb"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","455fface5a0a3ff90766ca254affe502"],["/js/rain.js","f656dc28e4ab5c3f8414d35f683278c1"],["/js/rainremove.js","ceacf82842b101f7e54a2aaf5f4bb9cb"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/link/index.html","06bf62f33d741eaee8d763f9afcadef0"],["/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","6dd3cc785db135be77ef13daf0189b22"],["/page/10/index.html","2e3005f01f26c929a8dd84fa3f668e04"],["/page/11/index.html","4d9f266aaa922cd6170a17b36a08a77d"],["/page/12/index.html","38d0787bb0c963392b8d5ab7b5b7b982"],["/page/2/index.html","745da305556be26a25a5936af4441458"],["/page/3/index.html","a2f9d1e2ba52f5e6b90a85b0fda2e2c4"],["/page/4/index.html","aef5a624f841c855eff0339379b62951"],["/page/5/index.html","6230b6f2fe5c8bb9266e13dd3d125bec"],["/page/6/index.html","5acc14dce229e10a01485b1d17d0904e"],["/page/7/index.html","9bae09c7d32039b09b5bdd9288b85f68"],["/page/8/index.html","a265efb8847db0da21b50f86a75cdd4b"],["/page/9/index.html","3a1c2f28a30192aa11ecfe48cb727a44"],["/research/index.html","7fd02e26ca76dfe755eb25de36aac749"],["/sw-register.js","78f735f9b9d3af431c1de316ddc8218b"],["/tags/Butterfly主题/index.html","078ccc3ce0879860e55e97e7288957f4"],["/tags/DIY/index.html","312a67921d7e0288c64aa4aa1e84c9e8"],["/tags/DIY/page/2/index.html","1f2f83ecbdc33a0d896380ab1e26797e"],["/tags/ICT/index.html","32b2275476ad00103e9f9c7c7515a794"],["/tags/NHK听力练习/index.html","22d1c21936b06f6c4d91a5c00311af38"],["/tags/NHK听力练习/page/2/index.html","87956adfe35e658c6d3e79bf4353c03a"],["/tags/NHK听力练习/page/3/index.html","fa1683806ed607194b1c8cb993e17ecc"],["/tags/NHK听力练习/page/4/index.html","d0048076a0ce98b30101c38281ee5227"],["/tags/NHK听力练习/page/5/index.html","4214da4d07b25d447621c84c1087551d"],["/tags/NHK听力练习/page/6/index.html","de41ea2e060c118d5f10ec0b02ec70f4"],["/tags/metro-ui/index.html","6be4a759274934cf62ca493fddb95fd5"],["/tags/vuejs/index.html","47b0c34961d03a197d342d3cd905514b"],["/tags/お盆/index.html","e0b7af89a97bb726c7aee9beff69687b"],["/tags/世論調査/index.html","6b40f9cfe7f5c31678accc0ac91ab7fd"],["/tags/作品集/index.html","2159ad58050ef76506ca4432b86a73d8"],["/tags/作品集/page/2/index.html","78cbff99d1bfbf4db5e74918654bed52"],["/tags/农业/index.html","299b464ad01f7e5b9386497caef69893"],["/tags/历史/index.html","998feebebfafbb08dbb4c0d9a9c3763f"],["/tags/営業時間/index.html","9200912d2747a154b4584d75443771a9"],["/tags/国外政事/index.html","7756e57be51a179ad69d00d539957dd5"],["/tags/地震/index.html","f7e86117995e3a6c7fe4d74afda9fde1"],["/tags/外国政事/index.html","0bd9d6776e2aaede628509bf2abf26ee"],["/tags/天气/index.html","c7b8c76845d2a5dfabc8eab389a9f822"],["/tags/天气/page/2/index.html","f41739bf1651dada124151cee3b46b3a"],["/tags/奥运会/index.html","4ffea34af378a4169c2c9aa3fa2aad4d"],["/tags/学习/index.html","f99a614874e131ad3cd8b7140a64090f"],["/tags/学习/page/2/index.html","2e076062aa05e1bed058c89323f179f0"],["/tags/学习/page/3/index.html","4e7ea8592735d052acb01fcd29c5a1f1"],["/tags/就业/index.html","14eb0be1d4ac2fb514014fb6f68fa853"],["/tags/庐山/index.html","a37706c19f279d28267c7e9d55c71747"],["/tags/座礁/index.html","1b25c342cb2fadfedf6700f6f203e947"],["/tags/政府/index.html","3e24e5b40eb94a7c75d0336bc6961ffb"],["/tags/政治/index.html","74038239c379f6428004a779f7b19bb3"],["/tags/教程/index.html","fb9b71097fedec67e297b98ea95284fe"],["/tags/教程/page/2/index.html","f6d0ab7bb46bc643b7c9ae64688b7d84"],["/tags/日本教育/index.html","2e04ce9f7a048985bc8a139d989c466a"],["/tags/民生/index.html","95e1daeed963ab1c8750e29b8b88293c"],["/tags/民生/page/2/index.html","30ed187f0b006ee2afd43f5bba323b78"],["/tags/游戏评测/index.html","a777f307532d6f4d98673879b01ee383"],["/tags/游记/index.html","fbd1c47560505afaf6a2b33e502da894"],["/tags/生活趣闻/index.html","43d8d89acb3fc675dfadd5e762a50a8a"],["/tags/科技/index.html","e238fe214d7c565c574c538f2121aa95"],["/tags/经济/index.html","2a676810bf795429356a05f8add4368f"],["/tags/经济/page/2/index.html","ebf9928dd6179d3abb603a22296d929e"],["/tags/网络教学/index.html","f5d687b9259bf440396343c12599abe3"],["/tags/舆论/index.html","ada76e8499b00ed3f8191634a491cb79"],["/tags/虚拟现实/index.html","ca3923f5a0212a46f0fbe93cd61f690d"],["/tags/随想/index.html","9ce05b8e233f9e9d30c58d834fdbfffa"],["/tags/障害者/index.html","59ccfaec038721a1f78e7ec517317f4a"]];
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
