/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/05/20/2015-05-20/index.html","668576b521ae17e3f240ba08788ac3a4"],["/2015/06/16/2015-06-16/index.html","4daf538a337869aa27a2c50b40061d6b"],["/2015/12/12/2015-12-12/index.html","35d3139453feea64cb2386dc034e4568"],["/2016/06/08/2016-06-08/index.html","41a0734fc01fb06e62cefc556a3d14cc"],["/2016/12/18/2016-12-18/index.html","f892525cb08c9412ba7d0b91ecb4c181"],["/2017/02/17/2017-02-17/index.html","b79dcba367510287178b55a1618b6618"],["/2017/03/17/2017-03-17/index.html","58c0b571be4f09bf0258ef2be45912fb"],["/2017/04/06/2017-04-06/index.html","b49c75066d2e5f38163d2f2368d4ff28"],["/2017/05/17/2017-05-17/index.html","349dd6d692533c603db4c4ff5c55464a"],["/2017/08/15/2017-08-15/index.html","4fb307ff4008079565314e382571ec35"],["/2017/09/16/2017-09-16-1/index.html","08f218f07a36ddff66927c75880d64ac"],["/2017/09/16/2017-09-16/index.html","2006bee32034273aed327969b99e6abf"],["/2017/09/21/2017-09-21/index.html","e8126118e2cfb7853d472ed478c81137"],["/2017/09/23/2017-09-23/index.html","603b83423be2f5d6505f63855e645df3"],["/2017/09/26/2017-09-26/index.html","f39e09074334bd04a17fb41b0e3cd938"],["/2017/09/27/2017-09-27/index.html","166b7aa4ac1134202e0e4659ccd64e35"],["/2017/10/04/2017-10-04/index.html","401951f01ec23cb151a042125cfb2c95"],["/2017/10/08/2017-10-08/index.html","0e33a1b503b474b00337705ea110211e"],["/2017/10/09/2017-10-09/index.html","d6033c1239d197f1f59bef6fd55bdd43"],["/2017/10/15/2017-10-15/index.html","9214204260ad46ac3af079e1e6548f4f"],["/2017/10/19/2017-10-19/index.html","44f542e8f95802acea445db3157d562e"],["/2017/10/23/2017-10-23-2/index.html","0d8722ea82d542cfc2325504f826cae4"],["/2017/10/23/2017-10-23/index.html","56aad2532113b473cfe092b3cef9dacc"],["/2017/11/08/2017-11-08/index.html","dc4a0a6c7b823c61532a79d52f30bbf9"],["/2017/11/12/2017-11-12/index.html","9cad460604a4f8f8b25ca02deb565c84"],["/2017/11/15/2017-11-15/index.html","ce0f46b2e2f99951d1638fc64229653e"],["/2017/11/27/2017-11-27/index.html","5d16d8fba5d9c26b9789d0ee64ae1c9f"],["/2017/12/06/2017-12-06/index.html","d91a60cfa742ab2ab3e75efcbc9e4cfa"],["/2018/02/12/2018-02-12/index.html","b709c5f4c9af6441099a685db27fda8e"],["/2018/03/26/2018-03-26/index.html","e6e9b9450aa3adcc934d630885679db9"],["/2018/04/02/2018-04-02/index.html","d9078f1ab5d2938cdacf19db3c3a0d5a"],["/2018/04/24/2018-04-24/index.html","aa7fe56905be4945ab8b8b92f332ef76"],["/2018/05/18/2018-05-18/index.html","38470009806bef36275c61d7209a9232"],["/2018/05/23/2018-05-23/index.html","fa09ce2f4c77d0ce25974436289e31ee"],["/2018/06/08/2018-06-08/index.html","ae7812636950f51b1582bc263bba2067"],["/2018/07/01/2018-07-01/index.html","6bc607b60151f64a5f11d752bc4ee2de"],["/2018/08/30/2018-08-30/index.html","acd3fb1e98e998597a8dbbce64909fe3"],["/2020/07/20/2020-07-20/index.html","961a55d38d229f48773bb074e619346f"],["/2020/08/01/2020-08-01/index.html","ee108981ef311e618cf71b9ceccd134c"],["/2020/08/02/2020-08-02/index.html","ff874923b475dcd2e447086741bb63ee"],["/2020/08/03/2020-08-03/index.html","dc092eede7f8be5dcd633e75eb32507a"],["/2020/08/04/2020-08-04-1/index.html","7a1b8e3723ad3d20376733e26c9fd479"],["/2020/08/04/2020-08-04-2/index.html","bfde65deb30165c4a61cf93cf182814c"],["/2020/08/05/2020-08-05/index.html","3eb603fda4ccbb64ed8bf2797b40da6e"],["/2020/08/06/2020-08-06/index.html","1efabfa956e5ac3e015a582b2e1a4e8f"],["/2020/08/07/2020-08-07/index.html","2efdc9ac4bcd4064ec3dedcec4352954"],["/2020/08/08/2020-08-08/index.html","d3e03100babaf6ce8e078beac34037e1"],["/2020/08/09/2020-08-09/index.html","d0054b9d5d766ab970fcf68ed8be63ae"],["/2020/08/10/2020-08-10/index.html","7744894970315a7343bbe43fd7fca9e0"],["/2020/08/11/2020-08-11/index.html","5e941fc0215f50d0009732884beab0c1"],["/2020/08/12/2020-08-12/index.html","ef24fcc88f69186b8de3c8f4830a2266"],["/2020/08/13/2020-08-13/index.html","0c2db79f480e7f1951c402fa1625147f"],["/2020/08/14/2020-08-14-1/index.html","27c6fd723bb8f184ff76fca22e3056fb"],["/2020/08/14/2020-08-14-2/index.html","34ccc971b4d2c2cb7d7b395887e7c904"],["/2020/08/15/2020-08-15/index.html","824bc76e01a482eb10e2780416100e98"],["/2020/08/16/2020-08-16-1/index.html","e882786cc76fbfd13954adf7165fa3f6"],["/2020/08/16/2020-08-16-2/index.html","aa2fe3821b7a14a24c8bd12171ed920a"],["/2020/08/17/2020-08-17/index.html","9ca11d895ad425663112ed3abe7875a1"],["/2020/08/18/2020-08-18/index.html","767748fc7026c26e41e83024d16cb2c7"],["/2020/08/19/2020-08-19-1/index.html","b88039974928ed963c2aa769e5a771bf"],["/2020/08/19/2020-08-19-2/index.html","f3f0aca317cfc6276a6df882d2ff3f64"],["/2020/08/20/2020-08-20/index.html","e4a3b2a62ef67d8c82a0f534476a790b"],["/2020/08/21/2020-08-21/index.html","fa26a2b0e86e2457ba364d32a03e395b"],["/2020/08/22/2020-08-22/index.html","02377a65bf895ea7113785757afed7a5"],["/2020/08/23/2020-08-23-1/index.html","19617880f897c2b97d142323b89e1276"],["/2020/08/23/2020-08-23-2/index.html","66e0c2f3c36a182ef3d69085d78938ff"],["/2020/08/24/2020-08-24-1/index.html","c571f615252fe00362b0def78a7ec6ba"],["/2020/08/24/2020-08-24-2/index.html","30b03a4566afeaa7ec03204a70e21269"],["/2020/08/25/2020-08-25-1/index.html","709d9155971c39a4a0a41a96094c3a89"],["/2020/08/25/2020-08-25-2/index.html","f3afbb1e0a250ab4236fe82e04eb0571"],["/2020/08/26/2020-08-26/index.html","1b5486ffa7e76c7057e213ac5e0a105d"],["/2020/08/27/2020-08-27/index.html","7ffe583b8955a583fb259100cca3228f"],["/2020/08/28/2020-08-28/index.html","c1063917f97fca7e88dd9ccc57768f08"],["/2020/08/29/2020-08-29/index.html","a2322daed45645afa28f356bc081154e"],["/2020/08/30/2020-08-30/index.html","c9f67fae02c49a491b881a7bb4a54046"],["/2020/08/31/2020-08-31-1/index.html","10161820571facbffa9598338909f2dd"],["/2020/08/31/2020-08-31-2/index.html","ca62e94fb9fa6d624136d56356378e65"],["/2020/09/01/2020-09-01-1/index.html","b32d608c82aa094cf383cfa31f62f496"],["/2020/09/01/2020-09-01-2/index.html","815d7a81d9e83a38501da066e9cf71f3"],["/2020/09/02/2020-09-02-1/index.html","190dd36b3c2e2be31c21622ec4c1ca58"],["/2020/09/02/2020-09-02-2/index.html","da72b5c222c70586c1e2cfa8b410b0bd"],["/2020/09/03/2020-09-03-1/index.html","6c5a7e852cd7ac1ff77f73004bcb46dd"],["/2020/09/03/2020-09-03-2/index.html","593f3a9dad8cac01b2f2aed300ebf94b"],["/2020/09/04/2020-09-04-1/index.html","1405e3fa96485ca288dab32d7ecfda1a"],["/2020/09/05/2020-09-05-1/index.html","94ff85d3c0021fc0c1b1425bf6fa8aff"],["/2020/09/06/2020-09-06-1/index.html","cd368f1021504aba786b5898d032e8f3"],["/2020/09/07/2020-09-07/index.html","358c83600cc35333c1d3d556e195ffff"],["/2020/09/08/2020-09-08-1/index.html","4130586d5c88219ae5d9325eb81dd106"],["/2020/09/08/2020-09-08-2/index.html","fae79153ee882bf5b03e8a60ab3308ad"],["/2020/09/09/2020-09-09/index.html","e67b8392e2fa651dc43dba9e6183cf97"],["/2020/09/10/2020-09-10/index.html","4cc29280df95d52ec4a95c2740c77f5a"],["/2020/09/11/2020-09-11/index.html","6aabc0a905596fd764839952e51aa2c4"],["/2020/09/12/2020-09-12/index.html","c567f6175bdd3ee07dca85c01fbddc6b"],["/2020/09/13/2020-09-13/index.html","691d2a2956511cf60dbf318868d926db"],["/2020/09/14/2020-09-14/index.html","6ea0a300eb6865cc28266ad150b4d061"],["/2020/09/15/2020-09-15/index.html","285b7db019787b9e6d1325f1b7f841c7"],["/2020/09/16/2020-09-16/index.html","73731995d706938b15b6f3ea9f6ed278"],["/2020/09/17/2020-09-17/index.html","ceeeb9ccaa13f00c6ef3a618285340cb"],["/2020/09/19/2020-09-19/index.html","1fe31d74bac21321c9f7b4ecd93904c0"],["/2020/09/23/2020-09-23/index.html","38efb25fa47bafc6dfdf056ef96af671"],["/2020/09/24/2020-09-24/index.html","d0c76b9bcee8c8b45a1a4fc6bfba7ff3"],["/2020/09/26/2020-09-26/index.html","7931f9789553bb304ebe66b77f48c8ed"],["/2020/09/27/2020-09-27/index.html","48a47062f2bb00a82ccc20de058bb6e1"],["/2020/09/28/2020-09-28-2/index.html","ac20ee85f41a30e92941658ba727bde6"],["/2020/09/28/2020-09-28/index.html","ab4eb6f3153e9d8e741902625e136b16"],["/2020/09/29/2020-09-29/index.html","eaa96f89bfb1ba4ebd08ff0a81f5cc45"],["/2020/10/03/2020-10-03/index.html","79f37b4afd27a6824b85100eb006abd4"],["/2020/10/04/2020-10-04/index.html","d0848e6db0fb3ade84509fa8566fd4b9"],["/2020/10/09/2020-10-09/index.html","42b1344a1988b484af554d23e41cd815"],["/2020/10/10/2020-10-10/index.html","456781be354a88afaa8885b0f0f6656c"],["/2020/10/11/2020-10-11/index.html","195362c22202f9bf3f9dbf7bb5c88fd5"],["/2020/10/12/2020-10-12/index.html","5574339ec0bedbfd7dab437250b082c7"],["/2020/10/13/2020-10-13/index.html","2138b420d6b7e0b24664bdde7d24fed6"],["/2020/10/14/2020-10-14/index.html","a5b0700e0a8e39b9bdc22e6a8a4851b8"],["/2020/10/15/2020-10-16-2/index.html","1e5ce498c2d0a662633799c392c52a26"],["/2020/10/16/2020-10-16-1/index.html","04e73afbf0ccd4542e3b3303872a8e72"],["/airplayervisual/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/airplayervisual/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/airplayervisual/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/airplayervisual/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/airplayervisual/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/airplayervisual/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/airplayervisual/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/airplayervisual/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/airplayervisual/index.html","c7da93a0c630d25b8b12bec11c99fda0"],["/airplayervisual/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/airplayervisual/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/airplayervisual/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/airplayervisual/js/jamsetting.js","7927507e0080ddf55c6d8b5f526bd942"],["/airplayervisual/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/airplayervisual/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/airplayervisual/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/archives/2015/05/index.html","ccde6a7f2059f04720f891d6049c8a4b"],["/archives/2015/06/index.html","b55704e5d157e76557a8dafda276d29a"],["/archives/2015/12/index.html","60d40adc45779d83f7be5187c8bf4487"],["/archives/2015/index.html","5f5901ffd50f0585ac79732ec9a0a2f3"],["/archives/2016/06/index.html","7fa1a17fd083ed8a28e838e3837e9007"],["/archives/2016/12/index.html","a94b521c2eb7223e3b324f80f8b90b14"],["/archives/2016/index.html","01e552011d643bb106b53c5df0600170"],["/archives/2017/02/index.html","5ca7caa5fe43670b8d9c28d4f95112ac"],["/archives/2017/03/index.html","b3106319cedf6093694e84453d26a180"],["/archives/2017/04/index.html","ee5c88ef38c124240b83f0cda4af3889"],["/archives/2017/05/index.html","227bc605d1e8187b3e992eb10522c0da"],["/archives/2017/08/index.html","08980342e8fecc011c37b648f48ade6b"],["/archives/2017/09/index.html","e874a9cf3584fec0007dcabb97a6471e"],["/archives/2017/10/index.html","d212900b6cb6ee9f7d90e63700bf6acb"],["/archives/2017/11/index.html","72e02d6584201d5b69832309f6c0f5a0"],["/archives/2017/12/index.html","78a792c4300f9ce89e67d0e5fdeff3df"],["/archives/2017/index.html","b794e209a401e576b8db58275aa9d9c8"],["/archives/2017/page/2/index.html","dc586848ddbb0ac5ce18bbc69c43996d"],["/archives/2017/page/3/index.html","1043394361c9757668c1e9a2544de116"],["/archives/2018/02/index.html","ffd658858a7a1dfda31c8d5081c6596b"],["/archives/2018/03/index.html","9ba3d0413cae199bf4faa4c330d32581"],["/archives/2018/04/index.html","004aff92d6b16a1a7c2f167708d02ef9"],["/archives/2018/05/index.html","04e21e8fbd7b1643bcc91d63ec4170cc"],["/archives/2018/06/index.html","967b6d45f3023303dd763e238507895d"],["/archives/2018/07/index.html","39eb28f75e19e49b8fa4ff418c43ac85"],["/archives/2018/08/index.html","383e5d1c7faec7082efc40ab5f2856bc"],["/archives/2018/index.html","80573f2c6eb7a60fe04cf224fe0f92cb"],["/archives/2020/07/index.html","b8133bef2c4852554bf562a56ba745da"],["/archives/2020/08/index.html","9e5cabb75f031f818bd31be344303ccd"],["/archives/2020/08/page/2/index.html","bbad6e8ac89c2b3d718d1ec2886bb1fe"],["/archives/2020/08/page/3/index.html","bccf4d19b3f1047ebf1282f8159faa70"],["/archives/2020/08/page/4/index.html","8ad74f794aec356d699152d6ae6252de"],["/archives/2020/09/index.html","24d22a6d6e0f34bd89ae1e073893c60f"],["/archives/2020/09/page/2/index.html","323d0619bd5385017c43933234a5981e"],["/archives/2020/09/page/3/index.html","6e3ee9948995dc82329601b8976f50b1"],["/archives/2020/10/index.html","e6e328074cc4d40d80bacd16de074090"],["/archives/2020/index.html","a95f62e62c3bc204adf50a06af46ab09"],["/archives/2020/page/2/index.html","bf193d0c1823f798313ba9222e86e7fe"],["/archives/2020/page/3/index.html","5fcfc8a23147535adab5f363af7a7d71"],["/archives/2020/page/4/index.html","ffb4129e60694acd289feccde4357b29"],["/archives/2020/page/5/index.html","3a9b91b917fb2e048af551f8a4a2ecca"],["/archives/2020/page/6/index.html","2a9882b9be45b4571dc700db620a53e8"],["/archives/2020/page/7/index.html","6b3297c3cd65464924ac13099d66dcf1"],["/archives/2020/page/8/index.html","759788f19fca1d3adef267c9266cd471"],["/archives/index.html","2e6ca7489927ba58050ec1932aee0214"],["/archives/page/10/index.html","4a417d322d166ec225fbff72bf1967f7"],["/archives/page/11/index.html","3f0425db6f8435edd68b31b6d27f24a9"],["/archives/page/12/index.html","cac1e6c929a81c8eb003dc394198a1cb"],["/archives/page/2/index.html","8f190e6a5e43159ce52166c051de177f"],["/archives/page/3/index.html","0e82a3bfc73e7f477218bb9d6aef8b53"],["/archives/page/4/index.html","829f63754ce58b0958d1cc4fa81e002c"],["/archives/page/5/index.html","db557410a1a25ae96defe2808b803e22"],["/archives/page/6/index.html","c2912447595b80b8602cf873b75d5043"],["/archives/page/7/index.html","57b8a96fa818783422bb0c3e08fef6c6"],["/archives/page/8/index.html","e5de21dd5b79b9ff8337ff8919a20e79"],["/archives/page/9/index.html","48c8205a3e7ce0626b3b8914a8080f34"],["/catalogtest/index.html","5d4dc52c8e04fb105925ae51636def79"],["/categories/NHK听力练习/index.html","80060da6d495dfa4b2a467faba855ecd"],["/categories/NHK听力练习/page/2/index.html","7ab60f962703c9bca8d6638c06dc06d1"],["/categories/NHK听力练习/page/3/index.html","de7cc34086f789b605b6b20b08c29b68"],["/categories/NHK听力练习/page/4/index.html","141249d5326e9382e828c0cc3d80fd44"],["/categories/NHK听力练习/page/5/index.html","dba9a6aa492a582e6aa606d655f7ed7b"],["/categories/NHK听力练习/page/6/index.html","1d755ab69a409847aa0295a27d033aad"],["/categories/vue/index.html","3f1487818be67db1938045b1efcc1978"],["/categories/作品集/index.html","3bedeebf024440a879bc6ec8eeb5e67b"],["/categories/作品集/page/2/index.html","802c1f63b2bc1adf36ce11fc61e474f5"],["/categories/学习/index.html","8d110c979542ab698f79196e1595c7c0"],["/categories/学习/page/2/index.html","772d553ff2531a227fa234a2e2a3cb9c"],["/categories/教程/index.html","e8cf4fc37cf013a24f08a6c3875803a5"],["/categories/教程/page/2/index.html","3f4cb2ddf4fd20d5c05da8bab3e9f8da"],["/categories/游戏评测/index.html","504baab4d1d141ab32c09ad9354aad47"],["/categories/生活趣闻/index.html","766d9551ffb5d8288737d175b5691ef3"],["/categories/随想/index.html","7d5d3a13ed4b1578d8a1c4a728b052ad"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/addcss.css","d20fc732e0cc7996bd82c5170b7aaa86"],["/css/background.css","32d5acccbb94f987faf37cfdc3fd06df"],["/css/calendar.css","0090a32d2a61d42c5bfed254bfba078c"],["/css/clock - 副本.css","65602c2385c7eab42ee3804cd6ee0a5a"],["/css/clock.css","9db53e3bffb704c740aa83bddaf8b999"],["/css/cursor.css","c1a23e168c5b794ff367eb0ae77eb26b"],["/css/danmu.css","2a5b914a9592bcd353425c6d5fa7af8e"],["/css/index.css","a830cf7dafed0e1e03142b35ae00f2a6"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/loadingline.css","bc1ee020a6a11fea17b915b97e6978bf"],["/css/shuo.css","e34cec2d23b9764928df02c60388358f"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/html/calendar.html","bddcec1edba7f4c49fe5cd75f8cdf5b2"],["/html/shiyan.html","8168b289541649805ab7543ccad6911d"],["/html/shiyan2.html","c2b248f56caf6220c376f9dae87588c9"],["/icon.png","8ec68de45d18642ba9baf2447e62f476"],["/images/AMJ1.png","d27a6725d1aaaf5324248da4312ab6c2"],["/images/AMJ2.png","00e22eba5901e5bd674e42228cd5bd26"],["/images/AMJ3.png","c8c9ea6348dfcad3a641899d5b587431"],["/images/FOTO1.jpg","4b6f100861908e2c7044cffbdb4a0c1a"],["/images/MVVM.png","ea5a002ee2f85c71a0db51d5adb5de19"],["/images/UT.jpg","367f4e432f9db55a92b2a290c4b0a476"],["/images/UX.png","a183974e958d41d1b6acec70bb7ea00a"],["/images/WindowsTerminal.png","8ac29cb56b8a1768cf7de071e9f1ae6f"],["/images/air-w.png","c1cc32f9d3e17551ca11a7d18a0b533a"],["/images/anzhuang.jpg","912b2489957f8344406edc5e5cebe5fa"],["/images/api-setting.png","2c0bb074390779721cba009e96c5417c"],["/images/apikey.png","1f31121b190eb1f990bcc3e27524bc03"],["/images/backpic1.jpg","86a6fa88167feb338fbf1a4e9057114b"],["/images/calendar.png","86319b08b93be7c8bc47cdba7a169563"],["/images/clock2.0.png","0a0f122c7a25262fc02ee99df0ef21eb"],["/images/clock3.0.png","8e04375c183c637b65fb50ed40f46466"],["/images/example.png","aaac9983e5d59f919bf282dcff2edb3c"],["/images/foto17.png","28db4c6608ad1ee6b34238cafab25e5e"],["/images/foto2.jpg","be95b922512d004a61f83c97af3e2602"],["/images/foto2.png","0dc07d4e1b00526a273a89dc8b81548d"],["/images/foto3.jpg","551c0616c92c4ee7cc17dd458b3c46e9"],["/images/foto4.jpg","9d1d9fea759a41afc0061866e400339a"],["/images/foto5.jpg","984f618b15372f37d54f507e6f379f10"],["/images/foto9.jpg","b683fc0b998e80ff8f5a3e45e889807c"],["/images/girlpic.png","ff1e8427ed555af639e6d849f8f648f1"],["/images/girlpic1.png","698e5570e821c3cae643cc9777c2292e"],["/images/girlpic4.png","551882e4b9b6afb79000fd34c0dbf5e5"],["/images/headimage.png","332502f36a0297b30cb7969fe6de8451"],["/images/hexo.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/hexoWT.png","c027cc9f5665c7d7ba657e7a4bb40017"],["/images/his-json.png","7d8a71e38ab684107446e5c72c31854e"],["/images/history.gif","0459a3dcf2317253de0b34482880c63c"],["/images/homework1.png","e8d2f64d0785519ea7779016208a2900"],["/images/idea.jpg","5eb08bf6c965588f03c8860f201cac45"],["/images/key1.png","f2a370e02ad6c5a101db20b47a9a0008"],["/images/key2.png","21dc40bbe0377cd9fe85a9cb431c18f0"],["/images/life-cycle.png","02f39ea5c041d45938fda4b50f234cb7"],["/images/life.jpg","74d2d9c5f48ec59e3badeec690941812"],["/images/listen.jpg","9d4f73cd5634f43deaed4f9aca03f9a3"],["/images/loading.gif","ffa0804a5d99e2d5b39e05cda6d6b28b"],["/images/magnet.png","4899a924f3de0d19dbe0415128c07d65"],["/images/magnet1.png","8d010eb86ca943e036adaa7de57aee7d"],["/images/magnet2.png","293cb414a8ab93b43bde3bebf9cf0cfc"],["/images/magnet3.png","1923148630e2e094ff80bf35aa604c10"],["/images/magnet4.png","9bb4f963ac1c09f02d62525f513f492c"],["/images/meilu/1.jpg","cd67abcc3f543b5c66adc4f9d9c5c628"],["/images/meilu/10.jpg","ac9fb2711e477b5db1c3acb57e899045"],["/images/meilu/11.jpg","364caad6dfc356a3dc630fa067e48e88"],["/images/meilu/12.jpg","274767e5708f79934e5bdbf73eda8f0d"],["/images/meilu/13.jpg","dcab12b84454770b208913db63e825ac"],["/images/meilu/14.jpg","037cdd048284e621f27e17a2c59e8ea7"],["/images/meilu/2.jpg","f6cdb65ae3fad4523b32f5ee38696b60"],["/images/meilu/3.jpg","9e5df3612c2d93bf57313186c954aea5"],["/images/meilu/4.jpg","69ef2d6f4bcd79cf4b4e672b60c6751e"],["/images/meilu/5.jpg","ce81ca16def7613b7ebb368fb554f14f"],["/images/meilu/6.jpg","cafd5b62305f806754a75cc3af8c3b77"],["/images/meilu/7.jpg","b8ae865d386e1e713a6034da6b090c10"],["/images/meilu/8.jpg","afad7a7bf1066c817a8d2e7566bc780d"],["/images/meilu/9.jpg","72f9649f56b564eacf23ce3dacb88029"],["/images/metroui.jpg","5503bfffd450d9ab572b67ea00941571"],["/images/metroui/1.png","79a03b408c19c74eeaa8ff6e17a03f9d"],["/images/metroui/10.png","8309fed71a15c78f2dfa3af1ff75a5f3"],["/images/metroui/11.png","aaf1a007cbae12f93cc2688bace18d28"],["/images/metroui/12.png","0758ea282c3828c47e5c64520ff85783"],["/images/metroui/13.png","12ca7b511927cd4b26e97f3b20908a32"],["/images/metroui/14.png","f44ba7680f7b36df437e2ae2588d0565"],["/images/metroui/15.png","e8927c78b125b805af7aa86fee815ab6"],["/images/metroui/2.png","e604d3c662b996f06f22753ba9ab379f"],["/images/metroui/3.png","664e3b7490f2f95d5547b8ba79a65456"],["/images/metroui/4.png","c0f255344cafc303a1d9c7404da37149"],["/images/metroui/5.png","da2074cdb1298aca826abc1a5c441300"],["/images/metroui/6.png","efef2f087127614b4e03bcbe9a347018"],["/images/metroui/7.png","a4d34b1a2dbe3a58d3a92276880be039"],["/images/metroui/8.png","1d34a626bbaa898a60d4501936bcf962"],["/images/metroui/9.png","0663697c1667b377fe2623bd65e00b31"],["/images/metrouilogo.png","aea81b42d1c2c96440f74cf56ad82e2f"],["/images/nhkimage/2020.08.01.png","af4c55b2ae1d5ab2f56c75a87fcdfdb3"],["/images/nhkimage/2020.08.02.png","c355d41b90f5c65823f96c5f6868ce53"],["/images/nhkimage/2020.08.03.png","fddcedb40d7f28b2ccb90814351ad5c8"],["/images/nhkimage/2020.08.04.png","8b4518ec5a8513f442980ed7167136b1"],["/images/nhkimage/2020.08.05.png","590abfb19334b0c3cee5a005674f2253"],["/images/nhkimage/2020.08.06.png","d469e21100c42435e88f2bdf07f93da1"],["/images/nhkimage/2020.08.07.png","3ca9e2c8b8a09a38423d73cd36e8de9d"],["/images/nhkimage/2020.08.08.png","4420c2d899fe4eb90c48bae0da8418a2"],["/images/nhkimage/2020.08.09.png","df14be338f9c920818dd1daa6aa955ee"],["/images/nhkimage/2020.08.10.png","c4e2ed023cd3dbfd4986add35ca9357c"],["/images/nhkimage/2020.08.11.png","cf562339e57f673d394f3e6cdd1f60cb"],["/images/nhkimage/2020.08.12.png","81dfa179fea3052ddcf73912ea368f67"],["/images/nhkimage/2020.08.13.png","8cf26c2642e7a27cbd86fcbda8bae8d9"],["/images/nhkimage/2020.08.14.png","d88eeb678b3ed3651d597e61957e264a"],["/images/nhkimage/2020.08.15.png","b9879f193867edcffeefce62c9dc7153"],["/images/nhkimage/2020.08.16.png","46cb914aa1d556561897767ec9ff66a0"],["/images/nhkimage/2020.08.17.png","ea1af9645b5cc9cbaafe70a91dd15cca"],["/images/nhkimage/2020.08.18.png","e87e4de39a6f06cf4283a63af92dd8de"],["/images/nhkimage/2020.08.19.png","8001a951513b542a98ce1151be5bd87b"],["/images/nhkimage/2020.08.20.png","4bc8fafa3ecce30d340b1350715d78e3"],["/images/nhkimage/2020.08.21.png","07ad1337e127922abff27da6c672549b"],["/images/nhkimage/2020.08.22.png","b2b5d53ba46015f64048f9d803b12179"],["/images/nhkimage/2020.08.23.png","225af8c0cabe5218ec634d1b8815fd95"],["/images/nhkimage/2020.08.24.png","1d54a484a6e2395aabe9be005cd90361"],["/images/nhkimage/2020.08.25.png","8008ba169cfce0ef2041329cd29b6b77"],["/images/nhkimage/2020.08.26.png","72a2b8094003a54c97a34ea97cf21bc3"],["/images/nhkimage/2020.08.27.png","893407e604804d215c8fef8bcd5f2684"],["/images/nhkimage/2020.08.28.png","b542280b7341759890a99cbd44d822c5"],["/images/nhkimage/2020.08.29.png","620e2e7d4772e39615fd1a88cdf49717"],["/images/nhkimage/2020.08.30.png","f645d7ba2dcb506f9ec6fb9244425ad7"],["/images/nhkimage/2020.09.03.png","c5262f3aa87190e0273383ea1e445681"],["/images/nhkimage/2020.09.04.png","c07149c32aa41c03bc7dac82a713f6b2"],["/images/nhkimage/2020.09.05.png","4e43556e1cb3b7f4d75f0f6127616a54"],["/images/nhkimage/2020.09.06.png","1021d2ae04a7f109404f857a2a7629cf"],["/images/nhkimage/2020.09.07.png","db9827e9f0a4cf1401b559b4644a0204"],["/images/nhkimage/2020.09.08.png","efe1030b73dc1c01f169c3122a194426"],["/images/nhkimage/2020.09.09.png","f6ba3a1c6cdeff88404ebe2a646f2eb5"],["/images/nhkimage/2020.09.10.png","3471b05d02113517359a9e2167befcfa"],["/images/nhkimage/2020.09.11.png","921a541a8bffb1aa436df2eb6db7c99f"],["/images/nhkimage/2020.09.12.png","a51f8ebaddba69bb80f9259a30f17e65"],["/images/nhkimage/2020.09.13.png","0399889200493cd2154ffc407e2bc400"],["/images/nhkimage/2020.09.14.png","eaaf3da69a39ed316b7fc8c4d409bb0f"],["/images/nhkimage/2020.09.15.png","5774959ea4061c9298ea174f0862cc3a"],["/images/nhkimage/2020.09.16.png","0c5a00f74020740fda589c02e4b3f917"],["/images/nhkimage/2020.09.17.png","b5aef734e3a7db4862ca3fe4e6769dc2"],["/images/nhkimage/2020.09.24.png","5982a7b3843f4ae43b2b4bc4b0c577d6"],["/images/nhkimage/2020.09.26.jpg","c6415af781fbdd36fdb034f74646129b"],["/images/nhkimage/2020.09.27.png","27aa6f6a8d5534ccd99cff261dcd9eb6"],["/images/nhkimage/2020.09.28.png","0f4318d1ff17a33de364432a1c44b5ad"],["/images/nhkimage/2020.10.09.png","6408d9f7e66fdeba8b9207939a08cf8d"],["/images/notop.png","d25c272e5ce312a880e04ce8a0b27683"],["/images/pasted-0.png","552608d8f6e39369aa30c6e332a32826"],["/images/pasted-1.png","baafdacee93c99e99418aaedbf524fda"],["/images/pasted-10.jpg","395cff6f64ab5df19baa3572ac98e541"],["/images/pasted-11.jpg","56e5df07c96634638abf7995b25c81ab"],["/images/pasted-12.jpg","61b3f803b85ce3640d7a9ba7efb9da6b"],["/images/pasted-2.png","2f410e53c811f92a6135f48857776f5e"],["/images/pasted-3.jpg","bb5717e691e87355e7d63a5f3a87ae62"],["/images/pasted-4.jpg","10041d0e3567b24b81222ec5075d6492"],["/images/pasted-5.jpg","ac5047a4b48c6cdaee86fa1863e33904"],["/images/pasted-6.jpg","1556ae8d3ad5713d60237ee4d10e81f0"],["/images/pasted-7.jpg","913fde1686587646ddc663bd810cc81d"],["/images/pasted-8.jpg","fc83268081fb4b6b6ecb1ffa1ec5af7f"],["/images/pasted-9.jpg","25e0fa3496591501f5c29d0b802b77d2"],["/images/pet.png","2b8c121909497e57057478856fe48a94"],["/images/pet2.png","dfb1d6a17b527ccc0c600e6ad31f55e5"],["/images/ps1.png","0917ba91f21b6944dc08d35c41a326d2"],["/images/psb.jpg","6a27c58337875c776af0a7667598b401"],["/images/quse.png","7cd1ec12b804305430cb4cdc09c7a893"],["/images/rain.jpg","9c26acc44c692b6a63e134be07b07c18"],["/images/shezhi.png","281bf545f6a4024e2d0b7120bc398a21"],["/images/soul.jpg","d97b4099c0728ff6123d006fa62db86e"],["/images/study.jpg","a9b1cf95ee6bd9f3913e8ec6a6a6f44f"],["/images/tianqizhizi.jpg","dd48d78b4eeaaa52578352f9ef570b14"],["/images/vue.png","cf23526f451784ff137f161b8fe18d5a"],["/images/vue1.jpg","8cbf18302c6fa72e2a40d0cca0832213"],["/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/images/work.png","e521cf5b834292fde1c50e0a0f5802f9"],["/images/xiaoguoyanshi.png","994a3b710d36df0a4630cd9a768c7f7b"],["/images/xiaoguozhanshi-m.png","1fefca18214fc4889d1bb76b81887c9d"],["/images/yao1.jpg","9dfddaf8c121fc8db788a87d133d6376"],["/images/zfe.one.png","b41f689341882058ffb28c4cee499bde"],["/images/幻想终结之日.png","0025c4d3973bdfedb80db3f78c59fa47"],["/images/时空战纪——游戏建议及意见①.jpg","1337457f14a8dffee66d94f8915b54ff"],["/images/简历.png","d70507ee4615c9e324578c0d777e6855"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favicon2.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","859840bf9ed41f70d56c3b82900e5d20"],["/js/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/APlayer.min.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/airvisual.js","71cf86bfd452ca01d92438d8266416ee"],["/js/airvisualapi.js","6931bebe1696688d109963187fc2eace"],["/js/artitalkkey.js","e735b361754e1b51300ddca9fd56b4ca"],["/js/background.js","94c8410b174f58594cf81ec99054968b"],["/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/js/calendar.js","a58e02711cc6dec4dc04257e555b8923"],["/js/catalogMagnet.js","bcd30d73b0cfb97ca01b1ffe88293d33"],["/js/clock - 副本.js","405186e7a9d73221d2d50c0dea2852d0"],["/js/clock.js","2fdceb94cc57b551cd245b0001927b66"],["/js/color.js","3730bb4f7b185e6f5130ac28bace968b"],["/js/danmu.js","6b6ae6b7f1b42dd4857541f43b2bb733"],["/js/echarts.js","dc1227b1eba1ba47fd185a387d0a7d37"],["/js/gitcalendar.js","fadfa8a42272cd322118653dca512a7a"],["/js/history.js","20459f7db325e597e64903f4c0d19306"],["/js/historyroll.js","a3e9ac376106816c50a61f9f4306d671"],["/js/jam.js","462c07d3b2e0f20394d994bbcfae37cb"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","455fface5a0a3ff90766ca254affe502"],["/js/rain.js","f656dc28e4ab5c3f8414d35f683278c1"],["/js/rainremove.js","ceacf82842b101f7e54a2aaf5f4bb9cb"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/link/index.html","6b0f3623b6310673426be709f816cc37"],["/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","949ae2b7b59fadef01db26fb2f354c79"],["/page/10/index.html","8a4133ba57ab5652bdaa867be773233e"],["/page/11/index.html","330e71c9131865aeb97e13daddda2934"],["/page/12/index.html","aa3d3b6af1bf90ff4ab5f761e741371f"],["/page/2/index.html","b007a6c83cae20135bedc43d3d3620ed"],["/page/3/index.html","6906ac0991d9b503a0ebceb7bf0cdf5b"],["/page/4/index.html","329a4460b56e8eb34dce3f5f141fe080"],["/page/5/index.html","519de384696bcd774436babfc607ad65"],["/page/6/index.html","690ba563e3cb3b3dda9cb528386e922e"],["/page/7/index.html","2f31c7e3eb983ea549cef6b301e0b544"],["/page/8/index.html","a34c86a49b412980fc67dee4d3b046fd"],["/page/9/index.html","9b9f3292ef5dffe91c270ec84630a03a"],["/research/index.html","1219d5ac6620f53626a5ffe26da4a86f"],["/sw-register.js","2254601f558ccc081569f140d1de727f"],["/tags/Butterfly主题/index.html","b5b2e65fd026f1a8ebab098ac40ac958"],["/tags/DIY/index.html","c886c63f6ee9a7327a6f77a9d2bfb7f9"],["/tags/DIY/page/2/index.html","de0be370759b930c72899caaefefb34c"],["/tags/ICT/index.html","fabe7deb99a7ca99bccd80d1395bf2a8"],["/tags/NHK听力练习/index.html","a437e87d7a34be3004b87bbf474ddfc4"],["/tags/NHK听力练习/page/2/index.html","0b1859d15b01e7c4cc8729593e7772c2"],["/tags/NHK听力练习/page/3/index.html","86a7bd72d62dda73615e2fafec76e8da"],["/tags/NHK听力练习/page/4/index.html","eb57ef057e67ec9bc42b066e358989de"],["/tags/NHK听力练习/page/5/index.html","05300679d5608d844351d440eac5f50e"],["/tags/NHK听力练习/page/6/index.html","57cb7d834513f091fd8644acb623c70c"],["/tags/metro-ui/index.html","a4fccac6bbecf5553e744e868cbbf036"],["/tags/vuejs/index.html","8750c889f9ae9eea6ef81e1bc6c54595"],["/tags/お盆/index.html","cabee8077d73e2021aec0d3af02e0fe0"],["/tags/世論調査/index.html","dcc0c7aa908cb686fce7b974370133ea"],["/tags/作品集/index.html","cf600bbae6b08c8d0ede001424f90013"],["/tags/作品集/page/2/index.html","18f833f2199dee2b5d3a28178e756d6c"],["/tags/农业/index.html","6ea1fc39da83f6a82354ecd7e4bf32f4"],["/tags/历史/index.html","db4e7d232d9ebc5077f73227e779c5ea"],["/tags/営業時間/index.html","38c81897ad41796f49f23aab5107dbd4"],["/tags/国外政事/index.html","d0783779de8b60fb74e1cad9c45e3f27"],["/tags/地震/index.html","e4ec2dcb859eaa5c2571528f41e77ccd"],["/tags/外国政事/index.html","f8d2d4765d0b107a6f11d0b7ac4dccbc"],["/tags/天气/index.html","ea8666ae01116c74f5cac7c2be2adade"],["/tags/天气/page/2/index.html","5dc5dfcbc850b9e289f24117881cbf25"],["/tags/奥运会/index.html","47946415e50a58d27a7d7e2375098516"],["/tags/学习/index.html","23bfb83b7e157d82cc04e78bcb55f8a8"],["/tags/学习/page/2/index.html","536288e306dcc31e2138c7a0df938e99"],["/tags/学习/page/3/index.html","27a6fa2fd6d319b4a0505b8e0928c0fd"],["/tags/就业/index.html","ac2038322d25a44be54719f88987edb2"],["/tags/庐山/index.html","4a0000e1e86b1d1a24dcf82fe088c178"],["/tags/座礁/index.html","243d35376f53148c0c0ca64cf4fec794"],["/tags/政府/index.html","7f0f06c0879d27e91786b47a45909575"],["/tags/政治/index.html","e7362e99b3d2c2a43c98d1341f08ddbd"],["/tags/教程/index.html","56420edfa265c16befce70eec15f255c"],["/tags/教程/page/2/index.html","70ef6d6047f114015cfed5e38bd34166"],["/tags/日本教育/index.html","4aaa2d8d77be13a33f077341793890fc"],["/tags/民生/index.html","774f815e01c7b0bb56dcf64bc3a9f90f"],["/tags/民生/page/2/index.html","493a637ca289d77956fb7b787406b338"],["/tags/游戏评测/index.html","e8e0249e59c173503157d94369cda19a"],["/tags/游记/index.html","6f563be96ab1af2001f165d87ffe583c"],["/tags/生活趣闻/index.html","9eb31549129319b0a032097cb8b43fb6"],["/tags/科技/index.html","f9d04970c932429860772358b3a94941"],["/tags/经济/index.html","9eaa144fa9de6ca3a249554398714d2b"],["/tags/经济/page/2/index.html","0d0d90bab238016046e30f5d79df7e1a"],["/tags/网络教学/index.html","3ce03ed8ae3cdaba020b01f075b59938"],["/tags/舆论/index.html","a96f61fca1045d9815b62f0058b8b1e1"],["/tags/虚拟现实/index.html","aa829e1bd94568c24ce83c6d45c5e3c8"],["/tags/随想/index.html","4791217775813f9d3ad51bee02354477"],["/tags/障害者/index.html","ff32ec44c18802d3ff29596928ea5d8e"]];
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
