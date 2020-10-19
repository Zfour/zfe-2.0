/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/05/20/2015-05-20/index.html","f96af1c579dd771d4c67d0c19d920548"],["/2015/06/16/2015-06-16/index.html","5098064775ffe919401b3d1f6909bd47"],["/2015/12/12/2015-12-12/index.html","500df0eba6edbb4374d9462b7c78b37b"],["/2016/06/08/2016-06-08/index.html","31190ab6e20706244badbaf4fe441007"],["/2016/12/18/2016-12-18/index.html","eb9bfe3cdd084252c56d4044a489dad5"],["/2017/02/17/2017-02-17/index.html","a0dc6e2f265dad5a15da4f129c14bba6"],["/2017/03/17/2017-03-17/index.html","8f40edac8680263f3a36c0e771be131d"],["/2017/04/06/2017-04-06/index.html","31b9bed108b0bbf8af7007c89f11ea52"],["/2017/05/17/2017-05-17/index.html","5c115f55e79f1c8a86ce9dafa83e0a23"],["/2017/08/15/2017-08-15/index.html","fab6e07d811faeca654d44a8a13fb7ee"],["/2017/09/16/2017-09-16-1/index.html","56de816ce1f00f92c1632b2ee0ae16e5"],["/2017/09/16/2017-09-16/index.html","970ef30ea9c0852ced75142b0d266845"],["/2017/09/21/2017-09-21/index.html","11db907d2f074b38789bc2ae643a5b1c"],["/2017/09/23/2017-09-23/index.html","3a06efc277e704a0869ca1b3acf19c8b"],["/2017/09/26/2017-09-26/index.html","10b4d6477d7f5a2a2cb0a33c0f497e94"],["/2017/09/27/2017-09-27/index.html","ffce2fe27c814ae9df9c907db4020189"],["/2017/10/04/2017-10-04/index.html","a94d5222b35eaed18f96343a96e116ab"],["/2017/10/08/2017-10-08/index.html","3d63160d7d0aac38b3a66d6487d24644"],["/2017/10/09/2017-10-09/index.html","b38e408b3244abb23a53721d7bb13083"],["/2017/10/15/2017-10-15/index.html","20b33725b3bffdeaa502b133d7963c16"],["/2017/10/19/2017-10-19/index.html","3d6ccf28610a79dfca096b620385e0b9"],["/2017/10/23/2017-10-23-2/index.html","e9b8107abd844e1237c73d69af5e2143"],["/2017/10/23/2017-10-23/index.html","dc1d372fcf2329d7a3f1d236640b936a"],["/2017/11/08/2017-11-08/index.html","41b6eedd08ba23e592e0d2ed43514abc"],["/2017/11/12/2017-11-12/index.html","783beb1200105444570e9eb73d921fb7"],["/2017/11/15/2017-11-15/index.html","499165306610b9ad58c5de5adb907f95"],["/2017/11/27/2017-11-27/index.html","f6c9f90a93a34f94324da13699ce2201"],["/2017/12/06/2017-12-06/index.html","cd519e044f753072c7964f810ec8d436"],["/2018/02/12/2018-02-12/index.html","73e5a27e90a13c2530204532d0017832"],["/2018/03/26/2018-03-26/index.html","24fa117eaf13cf25e0d28884c5a36b1a"],["/2018/04/02/2018-04-02/index.html","4472922f7bf7596225a89fed21a60a98"],["/2018/04/24/2018-04-24/index.html","c664e2ccdf541189c5b81b03fabded47"],["/2018/05/18/2018-05-18/index.html","f4b9dae061f15c0cc48085b88f5cb1e7"],["/2018/05/23/2018-05-23/index.html","6e36974f7572e4e2603d17f50dd13e60"],["/2018/06/08/2018-06-08/index.html","3823a7792dc43f901cbe8a82c8122464"],["/2018/07/01/2018-07-01/index.html","e248ad8265458cd70808e257267779ae"],["/2018/08/30/2018-08-30/index.html","3fd84fbf950e38e8f28d1b1a31350f1c"],["/2020/07/20/2020-07-20/index.html","0357dff25c68b360903369f958095236"],["/2020/08/01/2020-08-01/index.html","02642aaca26576e8f93d5a29ed1e4755"],["/2020/08/02/2020-08-02/index.html","4c74222022baac5fa7e8209fb36afbbc"],["/2020/08/03/2020-08-03/index.html","91b3a8f4288a8bfc3898a197ea1db52d"],["/2020/08/04/2020-08-04-1/index.html","718df5e6385780a5e786332302eaaa7b"],["/2020/08/04/2020-08-04-2/index.html","4de2d4ecf7b9076a8be98a52e1df675d"],["/2020/08/05/2020-08-05/index.html","16d63e70aaad1fa4b8a3303e1e7186c6"],["/2020/08/06/2020-08-06/index.html","d497633fc16d2c3eaade3fc07af30be8"],["/2020/08/07/2020-08-07/index.html","60c2007750d847d18bdd5eef7790f10d"],["/2020/08/08/2020-08-08/index.html","97ce1fea1f3cbfd3910374adfa6d1611"],["/2020/08/09/2020-08-09/index.html","b4412d9e6aead3c41a57e96f8ad9d7cc"],["/2020/08/10/2020-08-10/index.html","f631501dfece0e14bb822633fce4186a"],["/2020/08/11/2020-08-11/index.html","5687d02a97c4031cd386c44db1631146"],["/2020/08/12/2020-08-12/index.html","1537a911aac60ef058a7264f5409e9ff"],["/2020/08/13/2020-08-13/index.html","e52251bc50ecff5ccf5acee9e1815229"],["/2020/08/14/2020-08-14-1/index.html","aec644bde47fa79b252b551e9c318e62"],["/2020/08/14/2020-08-14-2/index.html","f89aeb042535b223de0768db494d6e5c"],["/2020/08/15/2020-08-15/index.html","8a3e87b94fdfa6fe34c94a04bdd59df9"],["/2020/08/16/2020-08-16-1/index.html","133ca7e8f0503a0281c8c0db49bb68b2"],["/2020/08/16/2020-08-16-2/index.html","3f1f0c62593caedae2800f9a4ec4a05e"],["/2020/08/17/2020-08-17/index.html","135e2808ba6d857f82555d86480a2080"],["/2020/08/18/2020-08-18/index.html","3a7706f192e1a1099d4ad3ec14a824a7"],["/2020/08/19/2020-08-19-1/index.html","f08fd4e62567bd452d0e8ac75d5d1902"],["/2020/08/19/2020-08-19-2/index.html","f0866a704f518b417c5e2f20acf8f253"],["/2020/08/20/2020-08-20/index.html","d294ebfbb63aacfd661bcb5b3d8d4b32"],["/2020/08/21/2020-08-21/index.html","86914088856d5d4def7adaf6f307ff40"],["/2020/08/22/2020-08-22/index.html","d8766e3c93b8a9ea129572d55981b3fb"],["/2020/08/23/2020-08-23-1/index.html","59f775bf5374356be45d2bdc969eb9aa"],["/2020/08/23/2020-08-23-2/index.html","3a373269f285596bdc5791b5024b7ef8"],["/2020/08/24/2020-08-24-1/index.html","669e5f2b716e46a5fae27a1720442769"],["/2020/08/24/2020-08-24-2/index.html","2aeb4d758fcf925cbd48c293f7f54ead"],["/2020/08/25/2020-08-25-1/index.html","49caefd69aeb2501d83c6c3b2ec86ce4"],["/2020/08/25/2020-08-25-2/index.html","51c90bc155bdd5991e8f88807fac0758"],["/2020/08/26/2020-08-26/index.html","c37eedfb5a57874d1106a1710d795ea7"],["/2020/08/27/2020-08-27/index.html","23e458689f48fd71fefd4aba75cc4ea3"],["/2020/08/28/2020-08-28/index.html","6b49fdf33dfa49ef36260a45de8fbbc8"],["/2020/08/29/2020-08-29/index.html","66b73fc7ca99c3e6a4ccf5ccd51ed740"],["/2020/08/30/2020-08-30/index.html","79b38c4cb1e629be806dea5125a2876c"],["/2020/08/31/2020-08-31-1/index.html","b4b8a5954cfe7aa9d09d28a46d7e1ac9"],["/2020/08/31/2020-08-31-2/index.html","23ba374a1ced18019d1b6f426b38c20a"],["/2020/09/01/2020-09-01-1/index.html","0005e21374d5b7adf6414b3954ae6a29"],["/2020/09/01/2020-09-01-2/index.html","f8c77bb866ccead10ec1fb2e87947791"],["/2020/09/02/2020-09-02-1/index.html","f1b4a1e4c496053e6630a8c60fb31e48"],["/2020/09/02/2020-09-02-2/index.html","f7cf0b7d439f25355afa6e83dec19e73"],["/2020/09/03/2020-09-03-1/index.html","5f4da7defa8bcbec504c8257c31e30e6"],["/2020/09/03/2020-09-03-2/index.html","900dc468eb7efe811ce6eb349390f76e"],["/2020/09/04/2020-09-04-1/index.html","e79c924eff8fa682e7bec96e98c54d5a"],["/2020/09/05/2020-09-05-1/index.html","de216080c837a590b3cf328354972776"],["/2020/09/06/2020-09-06-1/index.html","21473d690f68af5600a794efff1497b7"],["/2020/09/07/2020-09-07/index.html","49e44ce0f1eafdd85cdd7e9399d5c2b3"],["/2020/09/08/2020-09-08-1/index.html","52c9ba398636faccc294b8e65b2d866f"],["/2020/09/08/2020-09-08-2/index.html","a3250e41aeaa3d2c45e17286278c3a8d"],["/2020/09/09/2020-09-09/index.html","670d05388bda01438bd92d8c06365f14"],["/2020/09/10/2020-09-10/index.html","23027a29cbfea385d168293826494da4"],["/2020/09/11/2020-09-11/index.html","1e0043485e604a5cff0f25b3a5ef66c3"],["/2020/09/12/2020-09-12/index.html","d3aa5f3f014ca93bea81c166f486d63a"],["/2020/09/13/2020-09-13/index.html","8a9042b1dbe2f3a52936402cc3d820c0"],["/2020/09/14/2020-09-14/index.html","7a46fcdc538008754407f8812aabb858"],["/2020/09/15/2020-09-15/index.html","2226081453900932582b9f73ff4dee68"],["/2020/09/16/2020-09-16/index.html","adadea8a71e7513e83a51f0cbc37246f"],["/2020/09/17/2020-09-17/index.html","b5d76db13ca0ce6bcbba78effff921f0"],["/2020/09/19/2020-09-19/index.html","66f0b596f1872b6f2cb8c0b37b65d127"],["/2020/09/23/2020-09-23/index.html","b626e571fad2c5d6a5aa189e88940456"],["/2020/09/24/2020-09-24/index.html","d0249dff51d140b5d8978971a585c7e8"],["/2020/09/26/2020-09-26/index.html","57dcf67038352d2504276e9270fee67d"],["/2020/09/27/2020-09-27/index.html","b4862825bf12ae737e4a51c5fdf1c826"],["/2020/09/28/2020-09-28-2/index.html","d24cccb2f7ba75fe08a96bf3c4198e52"],["/2020/09/28/2020-09-28/index.html","a1c34e94801e64ab85ace933c57f050e"],["/2020/09/29/2020-09-29/index.html","fad9c3aacb08ab9bcd1f0b6fbe1a22b4"],["/2020/10/03/2020-10-03/index.html","0c5e2dc07539880fc8d0892eeb66c509"],["/2020/10/04/2020-10-04/index.html","a8057e987b91dc9dec362c88a91bd028"],["/2020/10/09/2020-10-09/index.html","4bcdaefad1f22b13d027e7d1b4e77b97"],["/2020/10/10/2020-10-10/index.html","73be1b2e2a2819dd67744463d526e83b"],["/2020/10/11/2020-10-11/index.html","7cba9a803d3ee08ca82e8308d80f06be"],["/2020/10/12/2020-10-12/index.html","a460d0a9b5f984576992c82bfe20bf32"],["/2020/10/13/2020-10-13/index.html","be07af10875d88bd34801daa5af9263e"],["/2020/10/14/2020-10-14/index.html","c2c8d0c7b5d2d8555526b85164f929bc"],["/2020/10/15/2020-10-16-2/index.html","0c922fa55679a06ae33128892636a263"],["/2020/10/16/2020-10-16-1/index.html","c0751630e32ff5d5083d76c320d2a706"],["/2020/10/18/2020-10-18/index.html","8008eb035272dce72482f01a64e11ff4"],["/airplayervisual/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/airplayervisual/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/airplayervisual/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/airplayervisual/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/airplayervisual/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/airplayervisual/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/airplayervisual/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/airplayervisual/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/airplayervisual/index.html","6c4862fdfd8337bd346141f729f28662"],["/airplayervisual/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/airplayervisual/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/airplayervisual/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/airplayervisual/js/jamsetting.js","7927507e0080ddf55c6d8b5f526bd942"],["/airplayervisual/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/airplayervisual/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/airplayervisual/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/archives/2015/05/index.html","fdca158fa7a2d63736bd29939af0b3af"],["/archives/2015/06/index.html","981a64421812d89f77e760cba8911f9a"],["/archives/2015/12/index.html","6b6d9b006429da896669d85e5d78850b"],["/archives/2015/index.html","f2f20865bfe78d87fb5fbf5d186d140e"],["/archives/2016/06/index.html","4c0114a156a5f91239bc04b075ad6f50"],["/archives/2016/12/index.html","361b4162c5b1736ab7c1ce578c92e3f5"],["/archives/2016/index.html","4aad31070cf0bb9bcc08c5e7e4f062de"],["/archives/2017/02/index.html","878ad95854f98355057a2347df2928af"],["/archives/2017/03/index.html","e5aa2cd59287ad1c2d482d407975608c"],["/archives/2017/04/index.html","4356de54ba95170fff03947e5fa90dcb"],["/archives/2017/05/index.html","a0e8b7b0ea6e3f486f642f5a60a3426d"],["/archives/2017/08/index.html","b697ca3ae2c92bb5ca3ad6740e54572b"],["/archives/2017/09/index.html","eb9733832f7ba7548b0261cec8af518c"],["/archives/2017/10/index.html","cb8884724811e923a615c45c2c5a4391"],["/archives/2017/11/index.html","751592904c87776ac2d95acdf79f76c4"],["/archives/2017/12/index.html","fd6a23c62f54e327887d754d16a504ac"],["/archives/2017/index.html","73fff47110a6ca1745954445a90a53fa"],["/archives/2017/page/2/index.html","3ccc1043d795a7be46ba9d5d41f9bdbf"],["/archives/2017/page/3/index.html","bc26e9b11b8684aa0bdfd24f1ddcb4dc"],["/archives/2018/02/index.html","8fa5813d96afe84be163adedf504f4cd"],["/archives/2018/03/index.html","83e3411c881f2040c991043ca44d34e0"],["/archives/2018/04/index.html","f8a6e9beffcc211809c682a36875a235"],["/archives/2018/05/index.html","2745c222cf6d02d748134e1675081a8b"],["/archives/2018/06/index.html","74e4f8579b5af2a40670f37b0c0ca8b3"],["/archives/2018/07/index.html","91590112ac8df6bb478fb97c72f71729"],["/archives/2018/08/index.html","8b64fb172073d600d8e3679664c3160e"],["/archives/2018/index.html","427c9d2b1613cf8448fd27c71e65261f"],["/archives/2020/07/index.html","1d8230de34609034fd0964c56c6d140e"],["/archives/2020/08/index.html","128d981c1b168b9868925cb9798be610"],["/archives/2020/08/page/2/index.html","efefab315de3176e44b622093720e966"],["/archives/2020/08/page/3/index.html","4f0e1885636ce73fa1d5180844ab0a6f"],["/archives/2020/08/page/4/index.html","d4fe36c2339cc26d483951a04cef5a29"],["/archives/2020/09/index.html","e57a878e2a7283f02149082efaf0bc39"],["/archives/2020/09/page/2/index.html","b0c620732224b59130a03336e00c6256"],["/archives/2020/09/page/3/index.html","cec7ba8645a3f87397ac0d726ca66fec"],["/archives/2020/10/index.html","2d032e5b746f9741dbb993fdbab432db"],["/archives/2020/10/page/2/index.html","580c0a99ce2deff1622f2de91f801f35"],["/archives/2020/index.html","28d6a846d39dd1696022bcd702423cd8"],["/archives/2020/page/2/index.html","5f246882c77d8e27804dc127bf596142"],["/archives/2020/page/3/index.html","170bd1e1433548975630e6492e8f5f3a"],["/archives/2020/page/4/index.html","ef2f9cbcc7b6b97a8c38db465d5baa77"],["/archives/2020/page/5/index.html","4d484a55efa422675a4360061ee264e9"],["/archives/2020/page/6/index.html","cc4397d698458a1cb1f0e5b1d7425d1b"],["/archives/2020/page/7/index.html","b37448c5cb7ab8b2401de072fd70819b"],["/archives/2020/page/8/index.html","1ab43d3ebcf4027e2b18b1c5fbf01ae8"],["/archives/index.html","ebb7375741f76f885c24aa5dc35c1278"],["/archives/page/10/index.html","8fab5367542ea20eb3c66c48204b9d7f"],["/archives/page/11/index.html","86c618f00bd46055e183926c4c03bd40"],["/archives/page/12/index.html","99ba96b811b30d339ff64c25333c5be3"],["/archives/page/2/index.html","07cf88a3c5cb59a9d1ad3c42c459a530"],["/archives/page/3/index.html","9945bdaec924e048d6601cec3b33a32b"],["/archives/page/4/index.html","933291f70b7c2a1a244bfe6553ca30bd"],["/archives/page/5/index.html","126e265ecf4c28c6e6e5e818173d15e3"],["/archives/page/6/index.html","13fb36bc866709eeee4338c2e03d27b4"],["/archives/page/7/index.html","715c4f83c3a3c4eb3cc25a8fc34d8b66"],["/archives/page/8/index.html","6a41558eabee0f43a025296b3c1cfd5c"],["/archives/page/9/index.html","1312da9758e290a3b0abc86030c23075"],["/catalogtest/index.html","15072bd401e16c04e1a455f1be4977a7"],["/categories/NHK听力练习/index.html","2735b8628a602277089e14bf0a83bab6"],["/categories/NHK听力练习/page/2/index.html","317089dddf7a2179101bdc2b0062bd3a"],["/categories/NHK听力练习/page/3/index.html","8a409533ef8ac673554eaa7de921a92b"],["/categories/NHK听力练习/page/4/index.html","d33bca599dd21a9cec3e6bd68479922e"],["/categories/NHK听力练习/page/5/index.html","013ddb1264b2e82df457f6895629d224"],["/categories/NHK听力练习/page/6/index.html","e6e093211f2cbac56c62dd3373e64198"],["/categories/vue/index.html","01c967f997c4cfa403917fd3b6fbc485"],["/categories/作品集/index.html","da5829889b4a689a3f18133ca2701214"],["/categories/作品集/page/2/index.html","72d9758ef740986f4f59cdd0884c63c3"],["/categories/学习/index.html","fa9a40f28729361f9ac533186ecd3742"],["/categories/学习/page/2/index.html","7731ad9f8c6747c4f5e1c70e9f2002ea"],["/categories/教程/index.html","102ec7126b20d929c7e37aba64e7e796"],["/categories/教程/page/2/index.html","eb77b0c4a3d2373bf54f526ca14b9a3d"],["/categories/游戏评测/index.html","c0dbb99e060fd65dbc98a8598737e5cf"],["/categories/生活趣闻/index.html","790b328b916d037fb2bf84ad552bd7e0"],["/categories/随想/index.html","f6b6c337fe533eb5cb035132388c87bd"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/addcss.css","d20fc732e0cc7996bd82c5170b7aaa86"],["/css/background.css","9ae3e08462ad0a5c0ed33136b0dbbfc6"],["/css/calendar.css","0090a32d2a61d42c5bfed254bfba078c"],["/css/clock - 副本.css","65602c2385c7eab42ee3804cd6ee0a5a"],["/css/clock.css","9db53e3bffb704c740aa83bddaf8b999"],["/css/cursor.css","f514da9c81fb3fcb4f7e9038dfa30874"],["/css/danmu.css","2a5b914a9592bcd353425c6d5fa7af8e"],["/css/index.css","a830cf7dafed0e1e03142b35ae00f2a6"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/loadingline.css","bc1ee020a6a11fea17b915b97e6978bf"],["/css/shuo.css","8db924024099e925c53d5b3dd22f83c6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/html/calendar.html","bddcec1edba7f4c49fe5cd75f8cdf5b2"],["/html/shiyan.html","8acb8eef60864dc3851b6857026a4ff3"],["/html/shiyan2.html","19f024a9b6f497fcc6dcb37bbbf8d09d"],["/icon.png","8ec68de45d18642ba9baf2447e62f476"],["/images/AMJ1.png","d27a6725d1aaaf5324248da4312ab6c2"],["/images/AMJ2.png","00e22eba5901e5bd674e42228cd5bd26"],["/images/AMJ3.png","c8c9ea6348dfcad3a641899d5b587431"],["/images/FOTO1.jpg","4b6f100861908e2c7044cffbdb4a0c1a"],["/images/MVVM.png","ea5a002ee2f85c71a0db51d5adb5de19"],["/images/UT.jpg","367f4e432f9db55a92b2a290c4b0a476"],["/images/UX.png","a183974e958d41d1b6acec70bb7ea00a"],["/images/WindowsTerminal.png","8ac29cb56b8a1768cf7de071e9f1ae6f"],["/images/air-w.png","c1cc32f9d3e17551ca11a7d18a0b533a"],["/images/anzhuang.jpg","912b2489957f8344406edc5e5cebe5fa"],["/images/api-setting.png","2c0bb074390779721cba009e96c5417c"],["/images/apikey.png","1f31121b190eb1f990bcc3e27524bc03"],["/images/b0_img.png","43fcaa3f8b394ca5be957f4b860800db"],["/images/backpic1.jpg","86a6fa88167feb338fbf1a4e9057114b"],["/images/c0_img.png","34397085b4d3349034f9b167469ac626"],["/images/c10_img.png","7938c5b0dd789db4f262e5a618943a9b"],["/images/c1_img.png","95211a0ebf07befde1b11477c3a8185b"],["/images/c2_img.png","456ba51725d669fc4d005787753a6b08"],["/images/c3_img.png","a0aa7dcdd2ed5bccec52c16942036a3f"],["/images/c4_img.png","0869cebb60d00a78936b7498823a39de"],["/images/c5_img.png","533774e840ccb3ef13b46201a54be05d"],["/images/c6_img.png","db9eb681dea0b7911f0b2ba918d86c26"],["/images/c7_img.png","5b9c9e0331aca2a9d47a2730512f34f5"],["/images/c8_img.png","be9107995f185e3bbf7186c4dff69f42"],["/images/c9_img.png","642a2e762b74a28d2426af14f2b864c1"],["/images/calendar.png","86319b08b93be7c8bc47cdba7a169563"],["/images/clock2.0.png","0a0f122c7a25262fc02ee99df0ef21eb"],["/images/clock3.0.png","8e04375c183c637b65fb50ed40f46466"],["/images/example.png","aaac9983e5d59f919bf282dcff2edb3c"],["/images/foto17.png","28db4c6608ad1ee6b34238cafab25e5e"],["/images/foto2.jpg","be95b922512d004a61f83c97af3e2602"],["/images/foto2.png","0dc07d4e1b00526a273a89dc8b81548d"],["/images/foto3.jpg","551c0616c92c4ee7cc17dd458b3c46e9"],["/images/foto4.jpg","9d1d9fea759a41afc0061866e400339a"],["/images/foto5.jpg","984f618b15372f37d54f507e6f379f10"],["/images/foto9.jpg","b683fc0b998e80ff8f5a3e45e889807c"],["/images/girlpic.png","ff1e8427ed555af639e6d849f8f648f1"],["/images/girlpic1.png","698e5570e821c3cae643cc9777c2292e"],["/images/girlpic4.png","551882e4b9b6afb79000fd34c0dbf5e5"],["/images/headimage.png","332502f36a0297b30cb7969fe6de8451"],["/images/hexo.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/hexoWT.png","c027cc9f5665c7d7ba657e7a4bb40017"],["/images/his-json.png","7d8a71e38ab684107446e5c72c31854e"],["/images/history.gif","0459a3dcf2317253de0b34482880c63c"],["/images/homework1.png","e8d2f64d0785519ea7779016208a2900"],["/images/idea.jpg","5eb08bf6c965588f03c8860f201cac45"],["/images/key1.png","f2a370e02ad6c5a101db20b47a9a0008"],["/images/key2.png","21dc40bbe0377cd9fe85a9cb431c18f0"],["/images/life-cycle.png","02f39ea5c041d45938fda4b50f234cb7"],["/images/life.jpg","74d2d9c5f48ec59e3badeec690941812"],["/images/listen.jpg","9d4f73cd5634f43deaed4f9aca03f9a3"],["/images/loading.gif","ffa0804a5d99e2d5b39e05cda6d6b28b"],["/images/magnet.png","4899a924f3de0d19dbe0415128c07d65"],["/images/magnet1.png","8d010eb86ca943e036adaa7de57aee7d"],["/images/magnet2.0.png","54fe576f174d2b6917fef89f40ac5975"],["/images/magnet2.png","293cb414a8ab93b43bde3bebf9cf0cfc"],["/images/magnet3.png","1923148630e2e094ff80bf35aa604c10"],["/images/magnet4.png","9bb4f963ac1c09f02d62525f513f492c"],["/images/meilu/1.jpg","cd67abcc3f543b5c66adc4f9d9c5c628"],["/images/meilu/10.jpg","ac9fb2711e477b5db1c3acb57e899045"],["/images/meilu/11.jpg","364caad6dfc356a3dc630fa067e48e88"],["/images/meilu/12.jpg","274767e5708f79934e5bdbf73eda8f0d"],["/images/meilu/13.jpg","dcab12b84454770b208913db63e825ac"],["/images/meilu/14.jpg","037cdd048284e621f27e17a2c59e8ea7"],["/images/meilu/2.jpg","f6cdb65ae3fad4523b32f5ee38696b60"],["/images/meilu/3.jpg","9e5df3612c2d93bf57313186c954aea5"],["/images/meilu/4.jpg","69ef2d6f4bcd79cf4b4e672b60c6751e"],["/images/meilu/5.jpg","ce81ca16def7613b7ebb368fb554f14f"],["/images/meilu/6.jpg","cafd5b62305f806754a75cc3af8c3b77"],["/images/meilu/7.jpg","b8ae865d386e1e713a6034da6b090c10"],["/images/meilu/8.jpg","afad7a7bf1066c817a8d2e7566bc780d"],["/images/meilu/9.jpg","72f9649f56b564eacf23ce3dacb88029"],["/images/metroui.jpg","5503bfffd450d9ab572b67ea00941571"],["/images/metroui/1.png","79a03b408c19c74eeaa8ff6e17a03f9d"],["/images/metroui/10.png","8309fed71a15c78f2dfa3af1ff75a5f3"],["/images/metroui/11.png","aaf1a007cbae12f93cc2688bace18d28"],["/images/metroui/12.png","0758ea282c3828c47e5c64520ff85783"],["/images/metroui/13.png","12ca7b511927cd4b26e97f3b20908a32"],["/images/metroui/14.png","f44ba7680f7b36df437e2ae2588d0565"],["/images/metroui/15.png","e8927c78b125b805af7aa86fee815ab6"],["/images/metroui/2.png","e604d3c662b996f06f22753ba9ab379f"],["/images/metroui/3.png","664e3b7490f2f95d5547b8ba79a65456"],["/images/metroui/4.png","c0f255344cafc303a1d9c7404da37149"],["/images/metroui/5.png","da2074cdb1298aca826abc1a5c441300"],["/images/metroui/6.png","efef2f087127614b4e03bcbe9a347018"],["/images/metroui/7.png","a4d34b1a2dbe3a58d3a92276880be039"],["/images/metroui/8.png","1d34a626bbaa898a60d4501936bcf962"],["/images/metroui/9.png","0663697c1667b377fe2623bd65e00b31"],["/images/metrouilogo.png","aea81b42d1c2c96440f74cf56ad82e2f"],["/images/nhkimage/2020.08.01.png","af4c55b2ae1d5ab2f56c75a87fcdfdb3"],["/images/nhkimage/2020.08.02.png","c355d41b90f5c65823f96c5f6868ce53"],["/images/nhkimage/2020.08.03.png","fddcedb40d7f28b2ccb90814351ad5c8"],["/images/nhkimage/2020.08.04.png","8b4518ec5a8513f442980ed7167136b1"],["/images/nhkimage/2020.08.05.png","590abfb19334b0c3cee5a005674f2253"],["/images/nhkimage/2020.08.06.png","d469e21100c42435e88f2bdf07f93da1"],["/images/nhkimage/2020.08.07.png","3ca9e2c8b8a09a38423d73cd36e8de9d"],["/images/nhkimage/2020.08.08.png","4420c2d899fe4eb90c48bae0da8418a2"],["/images/nhkimage/2020.08.09.png","df14be338f9c920818dd1daa6aa955ee"],["/images/nhkimage/2020.08.10.png","c4e2ed023cd3dbfd4986add35ca9357c"],["/images/nhkimage/2020.08.11.png","cf562339e57f673d394f3e6cdd1f60cb"],["/images/nhkimage/2020.08.12.png","81dfa179fea3052ddcf73912ea368f67"],["/images/nhkimage/2020.08.13.png","8cf26c2642e7a27cbd86fcbda8bae8d9"],["/images/nhkimage/2020.08.14.png","d88eeb678b3ed3651d597e61957e264a"],["/images/nhkimage/2020.08.15.png","b9879f193867edcffeefce62c9dc7153"],["/images/nhkimage/2020.08.16.png","46cb914aa1d556561897767ec9ff66a0"],["/images/nhkimage/2020.08.17.png","ea1af9645b5cc9cbaafe70a91dd15cca"],["/images/nhkimage/2020.08.18.png","e87e4de39a6f06cf4283a63af92dd8de"],["/images/nhkimage/2020.08.19.png","8001a951513b542a98ce1151be5bd87b"],["/images/nhkimage/2020.08.20.png","4bc8fafa3ecce30d340b1350715d78e3"],["/images/nhkimage/2020.08.21.png","07ad1337e127922abff27da6c672549b"],["/images/nhkimage/2020.08.22.png","b2b5d53ba46015f64048f9d803b12179"],["/images/nhkimage/2020.08.23.png","225af8c0cabe5218ec634d1b8815fd95"],["/images/nhkimage/2020.08.24.png","1d54a484a6e2395aabe9be005cd90361"],["/images/nhkimage/2020.08.25.png","8008ba169cfce0ef2041329cd29b6b77"],["/images/nhkimage/2020.08.26.png","72a2b8094003a54c97a34ea97cf21bc3"],["/images/nhkimage/2020.08.27.png","893407e604804d215c8fef8bcd5f2684"],["/images/nhkimage/2020.08.28.png","b542280b7341759890a99cbd44d822c5"],["/images/nhkimage/2020.08.29.png","620e2e7d4772e39615fd1a88cdf49717"],["/images/nhkimage/2020.08.30.png","f645d7ba2dcb506f9ec6fb9244425ad7"],["/images/nhkimage/2020.09.03.png","c5262f3aa87190e0273383ea1e445681"],["/images/nhkimage/2020.09.04.png","c07149c32aa41c03bc7dac82a713f6b2"],["/images/nhkimage/2020.09.05.png","4e43556e1cb3b7f4d75f0f6127616a54"],["/images/nhkimage/2020.09.06.png","1021d2ae04a7f109404f857a2a7629cf"],["/images/nhkimage/2020.09.07.png","db9827e9f0a4cf1401b559b4644a0204"],["/images/nhkimage/2020.09.08.png","efe1030b73dc1c01f169c3122a194426"],["/images/nhkimage/2020.09.09.png","f6ba3a1c6cdeff88404ebe2a646f2eb5"],["/images/nhkimage/2020.09.10.png","3471b05d02113517359a9e2167befcfa"],["/images/nhkimage/2020.09.11.png","921a541a8bffb1aa436df2eb6db7c99f"],["/images/nhkimage/2020.09.12.png","a51f8ebaddba69bb80f9259a30f17e65"],["/images/nhkimage/2020.09.13.png","0399889200493cd2154ffc407e2bc400"],["/images/nhkimage/2020.09.14.png","eaaf3da69a39ed316b7fc8c4d409bb0f"],["/images/nhkimage/2020.09.15.png","5774959ea4061c9298ea174f0862cc3a"],["/images/nhkimage/2020.09.16.png","0c5a00f74020740fda589c02e4b3f917"],["/images/nhkimage/2020.09.17.png","b5aef734e3a7db4862ca3fe4e6769dc2"],["/images/nhkimage/2020.09.24.png","5982a7b3843f4ae43b2b4bc4b0c577d6"],["/images/nhkimage/2020.09.26.jpg","c6415af781fbdd36fdb034f74646129b"],["/images/nhkimage/2020.09.27.png","27aa6f6a8d5534ccd99cff261dcd9eb6"],["/images/nhkimage/2020.09.28.png","0f4318d1ff17a33de364432a1c44b5ad"],["/images/nhkimage/2020.10.09.png","6408d9f7e66fdeba8b9207939a08cf8d"],["/images/notop.png","d25c272e5ce312a880e04ce8a0b27683"],["/images/pasted-0.png","552608d8f6e39369aa30c6e332a32826"],["/images/pasted-1.png","baafdacee93c99e99418aaedbf524fda"],["/images/pasted-10.jpg","395cff6f64ab5df19baa3572ac98e541"],["/images/pasted-11.jpg","56e5df07c96634638abf7995b25c81ab"],["/images/pasted-12.jpg","61b3f803b85ce3640d7a9ba7efb9da6b"],["/images/pasted-2.png","2f410e53c811f92a6135f48857776f5e"],["/images/pasted-3.jpg","bb5717e691e87355e7d63a5f3a87ae62"],["/images/pasted-4.jpg","10041d0e3567b24b81222ec5075d6492"],["/images/pasted-5.jpg","ac5047a4b48c6cdaee86fa1863e33904"],["/images/pasted-6.jpg","1556ae8d3ad5713d60237ee4d10e81f0"],["/images/pasted-7.jpg","913fde1686587646ddc663bd810cc81d"],["/images/pasted-8.jpg","fc83268081fb4b6b6ecb1ffa1ec5af7f"],["/images/pasted-9.jpg","25e0fa3496591501f5c29d0b802b77d2"],["/images/pet.png","2b8c121909497e57057478856fe48a94"],["/images/pet2.png","dfb1d6a17b527ccc0c600e6ad31f55e5"],["/images/ps1.png","0917ba91f21b6944dc08d35c41a326d2"],["/images/psb.jpg","6a27c58337875c776af0a7667598b401"],["/images/quse.png","7cd1ec12b804305430cb4cdc09c7a893"],["/images/rain.jpg","9c26acc44c692b6a63e134be07b07c18"],["/images/shezhi.png","281bf545f6a4024e2d0b7120bc398a21"],["/images/soul.jpg","d97b4099c0728ff6123d006fa62db86e"],["/images/study.jpg","a9b1cf95ee6bd9f3913e8ec6a6a6f44f"],["/images/tianqizhizi.jpg","dd48d78b4eeaaa52578352f9ef570b14"],["/images/vue.png","cf23526f451784ff137f161b8fe18d5a"],["/images/vue1.jpg","8cbf18302c6fa72e2a40d0cca0832213"],["/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/images/work.png","e521cf5b834292fde1c50e0a0f5802f9"],["/images/xiaoguoyanshi.png","994a3b710d36df0a4630cd9a768c7f7b"],["/images/xiaoguozhanshi-m.png","1fefca18214fc4889d1bb76b81887c9d"],["/images/yao1.jpg","9dfddaf8c121fc8db788a87d133d6376"],["/images/zfe.one.png","b41f689341882058ffb28c4cee499bde"],["/images/幻想终结之日.png","0025c4d3973bdfedb80db3f78c59fa47"],["/images/时空战纪——游戏建议及意见①.jpg","1337457f14a8dffee66d94f8915b54ff"],["/images/简历.png","d70507ee4615c9e324578c0d777e6855"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favicon2.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","cb42940618b2ddf70d4b2b41ae36da14"],["/js/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/APlayer.min.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/airvisual.js","71cf86bfd452ca01d92438d8266416ee"],["/js/airvisualapi.js","6931bebe1696688d109963187fc2eace"],["/js/artitalkkey.js","e735b361754e1b51300ddca9fd56b4ca"],["/js/background.js","94c8410b174f58594cf81ec99054968b"],["/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/js/calendar.js","a58e02711cc6dec4dc04257e555b8923"],["/js/catalogMagnet.js","ca2c32f653e3a68326c981764a71e295"],["/js/clock - 副本.js","405186e7a9d73221d2d50c0dea2852d0"],["/js/clock.js","2fdceb94cc57b551cd245b0001927b66"],["/js/color.js","3730bb4f7b185e6f5130ac28bace968b"],["/js/dan.js","6b6ae6b7f1b42dd4857541f43b2bb733"],["/js/echarts.js","dc1227b1eba1ba47fd185a387d0a7d37"],["/js/gitcalendar.js","fadfa8a42272cd322118653dca512a7a"],["/js/history.js","20459f7db325e597e64903f4c0d19306"],["/js/historyroll.js","a3e9ac376106816c50a61f9f4306d671"],["/js/jam.js","462c07d3b2e0f20394d994bbcfae37cb"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","455fface5a0a3ff90766ca254affe502"],["/js/rain.js","f656dc28e4ab5c3f8414d35f683278c1"],["/js/rainremove.js","ceacf82842b101f7e54a2aaf5f4bb9cb"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["/js/shuo.js","1076b1ef51358cc11b6ff3bab25e15d8"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/link/index.html","6e0ed50257dc2ea0aefcd5c8136b7eef"],["/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","f70db7280b2d0a8e125b888a33d3f287"],["/page/10/index.html","a821a26550bebf24de1fabc13cf6d1c3"],["/page/11/index.html","773dbb5d42d19e36f1d2bbcd9be59aa9"],["/page/12/index.html","318ab5c6bbb78b5bfad1f6b81b959a84"],["/page/2/index.html","72d338cf95058e35bdb1e9cee0f423b5"],["/page/3/index.html","a877da747cf49b6cd7d65bf028426d14"],["/page/4/index.html","e5c32f50af8c8023a2d2da06f3ba49ec"],["/page/5/index.html","22dec723c13f8fd49e2cb44d3765bcd6"],["/page/6/index.html","1d16232fb312640cfc22670d8e916828"],["/page/7/index.html","c4a089953ec9ac8831f9964ff919d8ad"],["/page/8/index.html","9183f2170fc0a5229d23f98adc1e3d39"],["/page/9/index.html","bc0563e6480ec58895130e320cef05dd"],["/research/index.html","cf2ad3ad0550b5f267db2b8b01c23acd"],["/sw-register.js","d1f6ac894769a0a6f15de1e9e6bd625d"],["/tags/Butterfly主题/index.html","9f8ab8cd956adb530c0431dc9e468641"],["/tags/DIY/index.html","0b0c821970ac34695e19282af113b0c7"],["/tags/DIY/page/2/index.html","0658a40008a0be34af358a442e298f3f"],["/tags/ICT/index.html","35089150c8300a401474dc1738f6dce4"],["/tags/NHK听力练习/index.html","236db058251665b88fcd1cd155286d67"],["/tags/NHK听力练习/page/2/index.html","176c871277290c2620e7748d1a35ac67"],["/tags/NHK听力练习/page/3/index.html","3c713a6073fd931031576de42cc312a4"],["/tags/NHK听力练习/page/4/index.html","46639734a01bac768777365a885bd882"],["/tags/NHK听力练习/page/5/index.html","0b6b61709507e0078a262f2dcdeb06dd"],["/tags/NHK听力练习/page/6/index.html","8353e43b35a224b75719f5fce389ea99"],["/tags/metro-ui/index.html","9e959dcdd568ca77fc306c20136cc6c2"],["/tags/vuejs/index.html","d0fc6f5649418b81eb1a4322e043138a"],["/tags/お盆/index.html","7e20045aafd0428b051f5ddadfd5b793"],["/tags/世論調査/index.html","d9b148ac673fb44a7058e06bcf77f07f"],["/tags/作品集/index.html","8762bed7fb36f46874c4bd4de6ef5a2f"],["/tags/作品集/page/2/index.html","c2d61adb5363400589d5ac317f5e9c23"],["/tags/农业/index.html","758161e990ae7949e33629f5b846acbe"],["/tags/历史/index.html","ffe160d455077f3a1bb152b6872e9c28"],["/tags/営業時間/index.html","f7c581da3467b317dc18170e7a92538d"],["/tags/国外政事/index.html","6ae2f40698374288fdbdd041d13700e1"],["/tags/地震/index.html","7b171830fb540bfcb04457625f3f7524"],["/tags/外国政事/index.html","0577acc35125c4fe96adbe3db9e50fac"],["/tags/天气/index.html","714275ff99ab8092db08bb68f7358802"],["/tags/天气/page/2/index.html","02b0c8be0f36583914f2f6fe1d8fbc65"],["/tags/奥运会/index.html","c10e3545ae48a31a93e4a72b519749b6"],["/tags/学习/index.html","2dfdea7288ffda8ae5d13247264fd491"],["/tags/学习/page/2/index.html","2c08c33b93bdbeb0ab407054e2973c0d"],["/tags/学习/page/3/index.html","6560b7dfc16727a69344edd89337a95a"],["/tags/就业/index.html","8aa8a823939f6b90f2ba101317339632"],["/tags/庐山/index.html","a3e84ae7dac077170756977e10d4f7ae"],["/tags/座礁/index.html","25b9f48f42e80ec7fa219f46bcd928ca"],["/tags/政府/index.html","07254ac19fbad62aee37e7c0525350b4"],["/tags/政治/index.html","808c29031a03babf5aeb368c604734c3"],["/tags/教程/index.html","55c693249b6dc3c6c0e355e2eafe7b46"],["/tags/教程/page/2/index.html","b2f5723f57e4b803f123ff1eee0a8459"],["/tags/日本教育/index.html","0dbd282eae1d09d303a2526191f69077"],["/tags/民生/index.html","ebab2e3cbef69a5ffa2b79dce8dacdf2"],["/tags/民生/page/2/index.html","a12f80e0e5ea5a55e2166a32318f06bb"],["/tags/游戏评测/index.html","becb541ebc42dc52d1e085c76f80e529"],["/tags/游记/index.html","e92cbe48e4267b81e6fa9c709fda6677"],["/tags/生活趣闻/index.html","2c3d205936c8e5daf836846084e9befb"],["/tags/科技/index.html","a1e44402e5b23f6afc2fb7b68eb273a7"],["/tags/经济/index.html","b79481ed2668d5909b12b5fb33806e0e"],["/tags/经济/page/2/index.html","784ca0bf56048330c7e779c16639adc5"],["/tags/网络教学/index.html","d7abedb2a9e24cc40453e9e6a1f9ca39"],["/tags/舆论/index.html","47a6244cac3bf53e98a4f2162900dc6b"],["/tags/虚拟现实/index.html","ed45afed63768c842461874e52dc6c11"],["/tags/随想/index.html","108132db43940690d77ade56e6ed07c5"],["/tags/障害者/index.html","c2d5209f7efa9fd20db091a268920a8a"]];
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
