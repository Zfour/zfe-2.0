/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/05/20/2015-05-20/index.html","3660d905d632bd5f2d685a7bdf024d98"],["/2015/06/16/2015-06-16/index.html","3ec59fb875b344d12df0f919580761c0"],["/2015/12/12/2015-12-12/index.html","2de14c43b3f74ec8607c8d88f96d77b2"],["/2016/06/08/2016-06-08/index.html","a57d50b04aa64781f8fd2a7218924e95"],["/2016/12/18/2016-12-18/index.html","903a5fd30e8ebb56c0d5c90de8cc5062"],["/2017/02/17/2017-02-17/index.html","93d5ce64bda42ce57c728e7b8b230bbf"],["/2017/03/17/2017-03-17/index.html","3159b11873bef52e5ead6d5559f1efa6"],["/2017/04/06/2017-04-06/index.html","d422eb57dce016ab1f8fb818d3b8ee21"],["/2017/05/17/2017-05-17/index.html","7a3407f49690241e51daf8afc71c2f77"],["/2017/08/15/2017-08-15/index.html","3c66c70b441c5434217b7f846b1be26d"],["/2017/09/16/2017-09-16-1/index.html","ffb60f71362898c26d88b59f71f68c36"],["/2017/09/16/2017-09-16/index.html","945e6305dee084ac10bb7b58aa1ec956"],["/2017/09/21/2017-09-21/index.html","d40416a6f257374d3e4f621ab6f0f525"],["/2017/09/23/2017-09-23/index.html","96dcff8706217d642938ea532fb486ba"],["/2017/09/26/2017-09-26/index.html","1bd267d44d59302c0d637658faaa2daf"],["/2017/09/27/2017-09-27/index.html","b4e285296a3145e7ee2479df2b1066a8"],["/2017/10/04/2017-10-04/index.html","731ac0aaea60fbc913e8e433fbd610f6"],["/2017/10/08/2017-10-08/index.html","aca266acf6c8139f8d1e49813b370b8c"],["/2017/10/09/2017-10-09/index.html","665c4940c2e59d02b46291aab5643d93"],["/2017/10/15/2017-10-15/index.html","9058de3132752bf0baa1eb6a1307f1a7"],["/2017/10/19/2017-10-19/index.html","406b23a75a875c97f4c032fda9901b3c"],["/2017/10/23/2017-10-23-2/index.html","a7916ab0540c9a557449abd6baab8a27"],["/2017/10/23/2017-10-23/index.html","9de36acfda7642f0d40d3b7310ef1499"],["/2017/11/08/2017-11-08/index.html","086af9b3968ab72fcb19f9099002594c"],["/2017/11/12/2017-11-12/index.html","a1a8f238fd31a1531f6afa9ca668d068"],["/2017/11/15/2017-11-15/index.html","ab623dee38bb1ba853763914363bb1f1"],["/2017/11/27/2017-11-27/index.html","1d7ec1e0967fb79d29a09db3c406bac5"],["/2017/12/06/2017-12-06/index.html","3e9afb7680959391210e5e9fb7a2b324"],["/2018/02/12/2018-02-12/index.html","73a379ba84f325551ad78fc3938defd9"],["/2018/03/26/2018-03-26/index.html","25fcc96a43eda4f17d2a3c39f5012768"],["/2018/04/02/2018-04-02/index.html","a5215601436c0e5b0973d16327e3c572"],["/2018/04/24/2018-04-24/index.html","1baa203986efae109509f27cfed2001e"],["/2018/05/18/2018-05-18/index.html","04b1522bcd88cff79d3d686f56981ee1"],["/2018/05/23/2018-05-23/index.html","e820f5dd4c98d6efdfca1c4cb4bb9e3b"],["/2018/06/08/2018-06-08/index.html","6e580c0bc87d3eb1159d8f79d26566bd"],["/2018/07/01/2018-07-01/index.html","451355e6916eac240280bbd22fc23375"],["/2018/08/30/2018-08-30/index.html","21b545fba5f316d4dee03a28e3a04ecc"],["/2020/07/20/2020-07-20/index.html","5dba4f56542b1b2d6d051e994e2b3667"],["/2020/08/01/2020-08-01/index.html","60446c0c3ce1d71483bf07acb6ced51f"],["/2020/08/02/2020-08-02/index.html","aa9007639b08cec34874d385afb0e15b"],["/2020/08/03/2020-08-03/index.html","76ba584c800657a6534e40861266964a"],["/2020/08/04/2020-08-04-1/index.html","039cc1b6326f16869bbb7a86e0fc5e79"],["/2020/08/04/2020-08-04-2/index.html","7cad3bb9ae917220024b7351aaeb444a"],["/2020/08/05/2020-08-05/index.html","9fbd5cc845dfbb982f65d40f6dc25eb6"],["/2020/08/06/2020-08-06/index.html","72f6fb28f41c8fb6bfc7deb3de426904"],["/2020/08/07/2020-08-07/index.html","fa399aaa05cc7fbb8c6b99bd3d548f0f"],["/2020/08/08/2020-08-08/index.html","5c665f7189a5e8853fce5b9d920f9159"],["/2020/08/09/2020-08-09/index.html","33fd79621da428244e2dd1a4f04c6b3d"],["/2020/08/10/2020-08-10/index.html","3ed4fa269edff0e5683a66cb3ec1dabf"],["/2020/08/11/2020-08-11/index.html","04e60ed4b5a0d70042e70f11f230df42"],["/2020/08/12/2020-08-12/index.html","2884efb4b4386b4a3e5f8d3bebe5ce70"],["/2020/08/13/2020-08-13/index.html","cf156c0d1cb660af4193a5afe4f4a7ef"],["/2020/08/14/2020-08-14-1/index.html","0bc7ce949cf822f7948b61a626259f2e"],["/2020/08/14/2020-08-14-2/index.html","51250c525b40487af98519ca08d70fa0"],["/2020/08/15/2020-08-15/index.html","583b77f2dfda2e78a436a7774bbafcd0"],["/2020/08/16/2020-08-16-1/index.html","ea2d16a4b7261606e03b8e620851a790"],["/2020/08/16/2020-08-16-2/index.html","dd91b67f539fea45badbb9f4bf7346a3"],["/2020/08/17/2020-08-17/index.html","61eaa5ed60f9567f8aa24886d1cd5c9f"],["/2020/08/18/2020-08-18/index.html","babbd40633874777c47e38e3a0d139e8"],["/2020/08/19/2020-08-19-1/index.html","bf5576d833f395a7d93fbbad00641049"],["/2020/08/19/2020-08-19-2/index.html","4b5bea6ef553a7bb7e4507209f0189a9"],["/2020/08/20/2020-08-20/index.html","a1a4e9ed16211e8aeec151abfe0025a8"],["/2020/08/21/2020-08-21/index.html","e89a6f8c29ab5d1b1cd2261c01c8ce45"],["/2020/08/22/2020-08-22/index.html","ffe607ae6d664c00de7b25095ad9f8da"],["/2020/08/23/2020-08-23-1/index.html","eea530ff593ad4b2c1d16844046dacb1"],["/2020/08/23/2020-08-23-2/index.html","b762f012089ded64a9150b5e6a8892a1"],["/2020/08/24/2020-08-24-1/index.html","6d90b576844b1fbea098a35a5be89a0f"],["/2020/08/24/2020-08-24-2/index.html","5ac84ef21b60c08db98abf4f7f87d82f"],["/2020/08/25/2020-08-25-1/index.html","8f7d038c7d86c472b2894414e1703681"],["/2020/08/25/2020-08-25-2/index.html","0758aba103f026e484b6cf7a144ba48d"],["/2020/08/26/2020-08-26/index.html","6cb1aaefcb0e31784d66b977ea05a5f9"],["/2020/08/27/2020-08-27/index.html","801f17d43704fb23b558dfe66beee86f"],["/2020/08/28/2020-08-28/index.html","4934790a6baea453be58f998640cb5d6"],["/2020/08/29/2020-08-29/index.html","bb730941537f12f5725b86dc646c52f6"],["/2020/08/30/2020-08-30/index.html","ea600ad78b884d1d31f96923e9f0c912"],["/2020/08/31/2020-08-31-1/index.html","d0d94ac3c38b04758062e7d23ad58205"],["/2020/08/31/2020-08-31-2/index.html","1a2024c1a531f6802268a882ef7b0fd3"],["/2020/09/01/2020-09-01-1/index.html","00da366ca394a4e4bc7d436d2bbdcc39"],["/2020/09/01/2020-09-01-2/index.html","5f5296e48bb76cbe9f3b18724aea491b"],["/2020/09/02/2020-09-02-1/index.html","b4c79d10a0e4f3d1ff4fee0cbcdab75a"],["/2020/09/02/2020-09-02-2/index.html","a4f8ef9440f1fa6b01ce40fbaedfceed"],["/2020/09/03/2020-09-03-1/index.html","025dcf827a093de34fddf40a8e5d3583"],["/2020/09/03/2020-09-03-2/index.html","236643a61d87bc97ed40a295de4aa2e1"],["/2020/09/04/2020-09-04-1/index.html","477632483126f29b011320f235c4c670"],["/2020/09/05/2020-09-05-1/index.html","3e98d810b08167dc7c5cc3ab6b6a8f4c"],["/2020/09/06/2020-09-06-1/index.html","f19b4f746bf4df8b9ca1c6d073afe7be"],["/2020/09/07/2020-09-07/index.html","ba809121acff1cedd8853c52d3da768c"],["/2020/09/08/2020-09-08-1/index.html","caf0db63b1e82ac5e7d0b84504517292"],["/2020/09/08/2020-09-08-2/index.html","a3a7df909dffbb547ea9c45656ce6f9e"],["/2020/09/09/2020-09-09/index.html","e73ed2456b283ce5251f7977bb17cdac"],["/2020/09/10/2020-09-10/index.html","244127643e5bbc05d408ffe447702d4f"],["/2020/09/11/2020-09-11/index.html","94236d31a773039d2b0744ac26431fd9"],["/2020/09/12/2020-09-12/index.html","091a9d979cdaccd5123a12a66358c2a7"],["/2020/09/13/2020-09-13/index.html","0b0c2eb13fef96ba568d18add8b7b568"],["/2020/09/14/2020-09-14/index.html","c2cd48ec588748907c309f007cf30117"],["/2020/09/15/2020-09-15/index.html","7ce91fb5d16f57d69e74c4e650f53051"],["/2020/09/16/2020-09-16/index.html","bbab1b5700a598099fd8a67f0fcd2c8e"],["/2020/09/17/2020-09-17/index.html","e8a2b6c4ee68fbc53fdd8f712d93614b"],["/2020/09/19/2020-09-19/index.html","051aee81fd2d0dfb797aeea28c87995b"],["/2020/09/23/2020-09-23/index.html","de02abbd043abb4cc2de5b8e1dd93bcf"],["/2020/09/24/2020-09-24/index.html","a3aff4e506acdd4b290ca7758f9b14c9"],["/2020/09/26/2020-09-26/index.html","bf7ea5eb64ae68367619e781979f9201"],["/2020/09/27/2020-09-27/index.html","64d15b914619b3bf8ce9a65650136c7a"],["/2020/09/28/2020-09-28-2/index.html","dae730e60ef880bfa6904542cd4e9513"],["/2020/09/28/2020-09-28/index.html","b1740ee362a489f404ad9a3ab5a16158"],["/2020/09/29/2020-09-29/index.html","b2d3e36e50ae96d8c9726b88fadca115"],["/2020/10/03/2020-10-03/index.html","a0a2ecf7b18ddcda43a808610de456a8"],["/2020/10/04/2020-10-04/index.html","5c153e18516d92565dc497573bb875a7"],["/airplayervisual/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/airplayervisual/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/airplayervisual/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/airplayervisual/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/airplayervisual/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/airplayervisual/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/airplayervisual/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/airplayervisual/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/airplayervisual/index.html","c60842777020d4b46a50717d9d4a3174"],["/airplayervisual/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/airplayervisual/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/airplayervisual/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/airplayervisual/js/jamsetting.js","7927507e0080ddf55c6d8b5f526bd942"],["/airplayervisual/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/airplayervisual/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/airplayervisual/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/archives/2015/05/index.html","a19848a1845748f8e74f9b369ca63bc8"],["/archives/2015/06/index.html","59adcb0aea27a2be15950f0f4d9239cc"],["/archives/2015/12/index.html","52c25a818b54825fad1941522de2e518"],["/archives/2015/index.html","8626b6ac0ee4b351c0c78a293e99f1ae"],["/archives/2016/06/index.html","6c62c4874ae35d35753c3f1bd0f6d274"],["/archives/2016/12/index.html","5d490fa8b7f325d76d1c601ab69bd92c"],["/archives/2016/index.html","53170bbe7411c0b2df1d6bfb506c27ca"],["/archives/2017/02/index.html","737b2a0f169898188664878ec403de84"],["/archives/2017/03/index.html","489ed8b0d44dd867e476b1b31af18273"],["/archives/2017/04/index.html","1cb02375eb68299e708a527fa0b70560"],["/archives/2017/05/index.html","4ba429766cae74c8650da32d82047869"],["/archives/2017/08/index.html","ff8c7963aca26baac801839d95cdc767"],["/archives/2017/09/index.html","c06762f706b361fd0d7397e7f4f627f8"],["/archives/2017/10/index.html","4623bc8831bdfb48f77df701cbeff00c"],["/archives/2017/11/index.html","e27d433ff0c8fc69590154c10c9d43af"],["/archives/2017/12/index.html","32129f3a71f59db2a05e06b2c3eba1ac"],["/archives/2017/index.html","88989ad34f3f64a0d5f7d186ac317f43"],["/archives/2017/page/2/index.html","5574c2b072a1acb068abcf6de341ff0c"],["/archives/2017/page/3/index.html","d20dc1be6fd286aaa5eb0649ec07201b"],["/archives/2018/02/index.html","3a9c4af7eee1c85d0efc2c461cef998c"],["/archives/2018/03/index.html","7f77d635e3f1506a3ce7e68db7064aae"],["/archives/2018/04/index.html","a03582b1db1f9ab4f7cfd5f00730d40a"],["/archives/2018/05/index.html","4682ddc92d036b62943b471df9784e19"],["/archives/2018/06/index.html","a2a06d9a3d47e9077d11bcd4fc153d60"],["/archives/2018/07/index.html","1e6fd6bf5f93eded0fdd93cfb990d7bf"],["/archives/2018/08/index.html","8147c412427dc5669c543dcc9fa5fbd0"],["/archives/2018/index.html","292ebae1728ef9a7aa7589f5ef80e63b"],["/archives/2020/07/index.html","9d09a8a93e2af6c79b792617ff4f855b"],["/archives/2020/08/index.html","9897b43785693f36840bcac748049915"],["/archives/2020/08/page/2/index.html","56b13a85c1fd38f517a8f7724066acbd"],["/archives/2020/08/page/3/index.html","24c88eb9965d61cd3a751b30259ee9d9"],["/archives/2020/08/page/4/index.html","769be1258be11f7e15eb1013ed618ba6"],["/archives/2020/09/index.html","ef61ad3635d5a8ea0cfb9c3ae22e224c"],["/archives/2020/09/page/2/index.html","1aea4502c0823a48fa5ad11c5662597a"],["/archives/2020/09/page/3/index.html","8cbdd60385b9909888c9d46bb3976615"],["/archives/2020/10/index.html","112a46933e810cb91053c916417805d0"],["/archives/2020/index.html","23d6f69bf9741b1d356ffae4624d1cd4"],["/archives/2020/page/2/index.html","102a7fdc80e1400b6b65bf02ee01be64"],["/archives/2020/page/3/index.html","2a0dd962bf3e91fefd3ba6d61addfb72"],["/archives/2020/page/4/index.html","e4f37279c5e63f7ac9a802d15bdcb522"],["/archives/2020/page/5/index.html","c9e141b7115568bbe4f73438d0bd863f"],["/archives/2020/page/6/index.html","02e445c8ab2fe1a820bbb925faf50c3d"],["/archives/2020/page/7/index.html","1d57aa207d91a0a33daeda54372c1b7f"],["/archives/2020/page/8/index.html","49556ec0bd47108f8d2b700ebbaaf051"],["/archives/index.html","09df014cbe224d7cfef75f67790e42af"],["/archives/page/10/index.html","ccd8c71ac9136450a83e6eae29db4049"],["/archives/page/11/index.html","4d084702f8e7f56565b45fc126e692a3"],["/archives/page/2/index.html","41e658328d5fd6195ec208fa9467d057"],["/archives/page/3/index.html","6feb7e38f38433a98fb717b78d1b74ee"],["/archives/page/4/index.html","52331280d159b5a3bbe79873e529de8d"],["/archives/page/5/index.html","87cb612a9bc0e0fea1bef8fa888735ec"],["/archives/page/6/index.html","d52837a79128452ccbd4dee0db758b91"],["/archives/page/7/index.html","670c08d3a01a905ed44c60ec1e54b34d"],["/archives/page/8/index.html","e4a6382a1d22b097da3a5612f6895653"],["/archives/page/9/index.html","b782cada011a499df197073b940860cc"],["/categories/NHK听力练习/index.html","e04dd0cfc8b5c679395f4f4c564b0240"],["/categories/NHK听力练习/page/2/index.html","01437f832fc1c4492728f13d381fb99b"],["/categories/NHK听力练习/page/3/index.html","82fc8f99dc32dd24a58f6654fb8d9a6d"],["/categories/NHK听力练习/page/4/index.html","3c37acaa8d63a7a4ed7c8528184ebe4b"],["/categories/NHK听力练习/page/5/index.html","60110d0c44b6b28a3d51ba4af8e9c292"],["/categories/NHK听力练习/page/6/index.html","b85aa0ac32cb45b0efb4ce1384a3bd40"],["/categories/作品集/index.html","72469f5cd5879a70ff78332d912de9dc"],["/categories/作品集/page/2/index.html","908107b2f784c163db940ca72fcd28c8"],["/categories/学习/index.html","565d94e00f78bef15c482bdacb8e3fa0"],["/categories/学习/page/2/index.html","80bea170fe9e0fc8d4777e3919c24015"],["/categories/学习/page/3/index.html","2c6b2f7bfd8d9ef6ac211cdeafdce0c5"],["/categories/游戏评测/index.html","4878a8347bc4cbd693751444bd92be4a"],["/categories/生活趣闻/index.html","89b5ad1457ce57e74240b23c19d135ab"],["/categories/随想/index.html","dfc9b8d68720cb91c7a3e34eba764cef"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/addcss.css","59cae1ddbe6925c34f846ffe12d19921"],["/css/background.css","32d5acccbb94f987faf37cfdc3fd06df"],["/css/calendar.css","0090a32d2a61d42c5bfed254bfba078c"],["/css/clock.css","65602c2385c7eab42ee3804cd6ee0a5a"],["/css/danmu.css","2a5b914a9592bcd353425c6d5fa7af8e"],["/css/index.css","36eb36d0f5531dd7a8f4c8f925188615"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/loadingline.css","bc1ee020a6a11fea17b915b97e6978bf"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/html/calendar.html","bddcec1edba7f4c49fe5cd75f8cdf5b2"],["/html/shiyan.html","509294d4b917a7824e18627b327d936e"],["/html/shiyan2.html","446c690c462933e01d20ca9a6aa24ab3"],["/icon.png","8ec68de45d18642ba9baf2447e62f476"],["/images/AMJ1.png","d27a6725d1aaaf5324248da4312ab6c2"],["/images/AMJ2.png","00e22eba5901e5bd674e42228cd5bd26"],["/images/AMJ3.png","c8c9ea6348dfcad3a641899d5b587431"],["/images/FOTO1.jpg","4b6f100861908e2c7044cffbdb4a0c1a"],["/images/MVVM.png","ea5a002ee2f85c71a0db51d5adb5de19"],["/images/UT.jpg","367f4e432f9db55a92b2a290c4b0a476"],["/images/UX.png","a183974e958d41d1b6acec70bb7ea00a"],["/images/WindowsTerminal.png","8ac29cb56b8a1768cf7de071e9f1ae6f"],["/images/air-w.png","c1cc32f9d3e17551ca11a7d18a0b533a"],["/images/anzhuang.jpg","912b2489957f8344406edc5e5cebe5fa"],["/images/api-setting.png","2c0bb074390779721cba009e96c5417c"],["/images/apikey.png","1f31121b190eb1f990bcc3e27524bc03"],["/images/backpic1.jpg","86a6fa88167feb338fbf1a4e9057114b"],["/images/calendar.png","86319b08b93be7c8bc47cdba7a169563"],["/images/clock2.0.png","0a0f122c7a25262fc02ee99df0ef21eb"],["/images/example.png","aaac9983e5d59f919bf282dcff2edb3c"],["/images/foto17.png","28db4c6608ad1ee6b34238cafab25e5e"],["/images/foto2.jpg","be95b922512d004a61f83c97af3e2602"],["/images/foto2.png","0dc07d4e1b00526a273a89dc8b81548d"],["/images/foto3.jpg","551c0616c92c4ee7cc17dd458b3c46e9"],["/images/foto4.jpg","9d1d9fea759a41afc0061866e400339a"],["/images/foto5.jpg","984f618b15372f37d54f507e6f379f10"],["/images/foto9.jpg","b683fc0b998e80ff8f5a3e45e889807c"],["/images/girlpic.png","ff1e8427ed555af639e6d849f8f648f1"],["/images/girlpic1.png","698e5570e821c3cae643cc9777c2292e"],["/images/girlpic4.png","551882e4b9b6afb79000fd34c0dbf5e5"],["/images/headimage.png","332502f36a0297b30cb7969fe6de8451"],["/images/hexo.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/hexoWT.png","c027cc9f5665c7d7ba657e7a4bb40017"],["/images/his-json.png","7d8a71e38ab684107446e5c72c31854e"],["/images/history.gif","0459a3dcf2317253de0b34482880c63c"],["/images/idea.jpg","5eb08bf6c965588f03c8860f201cac45"],["/images/life-cycle.png","02f39ea5c041d45938fda4b50f234cb7"],["/images/life.jpg","74d2d9c5f48ec59e3badeec690941812"],["/images/listen.jpg","9d4f73cd5634f43deaed4f9aca03f9a3"],["/images/magnet.png","4899a924f3de0d19dbe0415128c07d65"],["/images/magnet1.png","8d010eb86ca943e036adaa7de57aee7d"],["/images/magnet2.png","293cb414a8ab93b43bde3bebf9cf0cfc"],["/images/magnet3.png","1923148630e2e094ff80bf35aa604c10"],["/images/magnet4.png","9bb4f963ac1c09f02d62525f513f492c"],["/images/meilu/1.jpg","cd67abcc3f543b5c66adc4f9d9c5c628"],["/images/meilu/10.jpg","ac9fb2711e477b5db1c3acb57e899045"],["/images/meilu/11.jpg","364caad6dfc356a3dc630fa067e48e88"],["/images/meilu/12.jpg","274767e5708f79934e5bdbf73eda8f0d"],["/images/meilu/13.jpg","dcab12b84454770b208913db63e825ac"],["/images/meilu/14.jpg","037cdd048284e621f27e17a2c59e8ea7"],["/images/meilu/2.jpg","f6cdb65ae3fad4523b32f5ee38696b60"],["/images/meilu/3.jpg","9e5df3612c2d93bf57313186c954aea5"],["/images/meilu/4.jpg","69ef2d6f4bcd79cf4b4e672b60c6751e"],["/images/meilu/5.jpg","ce81ca16def7613b7ebb368fb554f14f"],["/images/meilu/6.jpg","cafd5b62305f806754a75cc3af8c3b77"],["/images/meilu/7.jpg","b8ae865d386e1e713a6034da6b090c10"],["/images/meilu/8.jpg","afad7a7bf1066c817a8d2e7566bc780d"],["/images/meilu/9.jpg","72f9649f56b564eacf23ce3dacb88029"],["/images/metroui.jpg","5503bfffd450d9ab572b67ea00941571"],["/images/metroui/1.png","79a03b408c19c74eeaa8ff6e17a03f9d"],["/images/metroui/10.png","8309fed71a15c78f2dfa3af1ff75a5f3"],["/images/metroui/11.png","aaf1a007cbae12f93cc2688bace18d28"],["/images/metroui/12.png","0758ea282c3828c47e5c64520ff85783"],["/images/metroui/13.png","12ca7b511927cd4b26e97f3b20908a32"],["/images/metroui/14.png","f44ba7680f7b36df437e2ae2588d0565"],["/images/metroui/15.png","e8927c78b125b805af7aa86fee815ab6"],["/images/metroui/2.png","e604d3c662b996f06f22753ba9ab379f"],["/images/metroui/3.png","664e3b7490f2f95d5547b8ba79a65456"],["/images/metroui/4.png","c0f255344cafc303a1d9c7404da37149"],["/images/metroui/5.png","da2074cdb1298aca826abc1a5c441300"],["/images/metroui/6.png","efef2f087127614b4e03bcbe9a347018"],["/images/metroui/7.png","a4d34b1a2dbe3a58d3a92276880be039"],["/images/metroui/8.png","1d34a626bbaa898a60d4501936bcf962"],["/images/metroui/9.png","0663697c1667b377fe2623bd65e00b31"],["/images/metrouilogo.png","aea81b42d1c2c96440f74cf56ad82e2f"],["/images/nhkimage/2020.08.01.png","af4c55b2ae1d5ab2f56c75a87fcdfdb3"],["/images/nhkimage/2020.08.02.png","c355d41b90f5c65823f96c5f6868ce53"],["/images/nhkimage/2020.08.03.png","fddcedb40d7f28b2ccb90814351ad5c8"],["/images/nhkimage/2020.08.04.png","8b4518ec5a8513f442980ed7167136b1"],["/images/nhkimage/2020.08.05.png","590abfb19334b0c3cee5a005674f2253"],["/images/nhkimage/2020.08.06.png","d469e21100c42435e88f2bdf07f93da1"],["/images/nhkimage/2020.08.07.png","3ca9e2c8b8a09a38423d73cd36e8de9d"],["/images/nhkimage/2020.08.08.png","4420c2d899fe4eb90c48bae0da8418a2"],["/images/nhkimage/2020.08.09.png","df14be338f9c920818dd1daa6aa955ee"],["/images/nhkimage/2020.08.10.png","c4e2ed023cd3dbfd4986add35ca9357c"],["/images/nhkimage/2020.08.11.png","cf562339e57f673d394f3e6cdd1f60cb"],["/images/nhkimage/2020.08.12.png","81dfa179fea3052ddcf73912ea368f67"],["/images/nhkimage/2020.08.13.png","8cf26c2642e7a27cbd86fcbda8bae8d9"],["/images/nhkimage/2020.08.14.png","d88eeb678b3ed3651d597e61957e264a"],["/images/nhkimage/2020.08.15.png","b9879f193867edcffeefce62c9dc7153"],["/images/nhkimage/2020.08.16.png","46cb914aa1d556561897767ec9ff66a0"],["/images/nhkimage/2020.08.17.png","ea1af9645b5cc9cbaafe70a91dd15cca"],["/images/nhkimage/2020.08.18.png","e87e4de39a6f06cf4283a63af92dd8de"],["/images/nhkimage/2020.08.19.png","8001a951513b542a98ce1151be5bd87b"],["/images/nhkimage/2020.08.20.png","4bc8fafa3ecce30d340b1350715d78e3"],["/images/nhkimage/2020.08.21.png","07ad1337e127922abff27da6c672549b"],["/images/nhkimage/2020.08.22.png","b2b5d53ba46015f64048f9d803b12179"],["/images/nhkimage/2020.08.23.png","225af8c0cabe5218ec634d1b8815fd95"],["/images/nhkimage/2020.08.24.png","1d54a484a6e2395aabe9be005cd90361"],["/images/nhkimage/2020.08.25.png","8008ba169cfce0ef2041329cd29b6b77"],["/images/nhkimage/2020.08.26.png","72a2b8094003a54c97a34ea97cf21bc3"],["/images/nhkimage/2020.08.27.png","893407e604804d215c8fef8bcd5f2684"],["/images/nhkimage/2020.08.28.png","b542280b7341759890a99cbd44d822c5"],["/images/nhkimage/2020.08.29.png","620e2e7d4772e39615fd1a88cdf49717"],["/images/nhkimage/2020.08.30.png","f645d7ba2dcb506f9ec6fb9244425ad7"],["/images/nhkimage/2020.09.03.png","c5262f3aa87190e0273383ea1e445681"],["/images/nhkimage/2020.09.04.png","c07149c32aa41c03bc7dac82a713f6b2"],["/images/nhkimage/2020.09.05.png","4e43556e1cb3b7f4d75f0f6127616a54"],["/images/nhkimage/2020.09.06.png","1021d2ae04a7f109404f857a2a7629cf"],["/images/nhkimage/2020.09.07.png","db9827e9f0a4cf1401b559b4644a0204"],["/images/nhkimage/2020.09.08.png","efe1030b73dc1c01f169c3122a194426"],["/images/nhkimage/2020.09.09.png","f6ba3a1c6cdeff88404ebe2a646f2eb5"],["/images/nhkimage/2020.09.10.png","3471b05d02113517359a9e2167befcfa"],["/images/nhkimage/2020.09.11.png","921a541a8bffb1aa436df2eb6db7c99f"],["/images/nhkimage/2020.09.12.png","a51f8ebaddba69bb80f9259a30f17e65"],["/images/nhkimage/2020.09.13.png","0399889200493cd2154ffc407e2bc400"],["/images/nhkimage/2020.09.14.png","eaaf3da69a39ed316b7fc8c4d409bb0f"],["/images/nhkimage/2020.09.15.png","5774959ea4061c9298ea174f0862cc3a"],["/images/nhkimage/2020.09.16.png","0c5a00f74020740fda589c02e4b3f917"],["/images/nhkimage/2020.09.17.png","b5aef734e3a7db4862ca3fe4e6769dc2"],["/images/nhkimage/2020.09.24.png","5982a7b3843f4ae43b2b4bc4b0c577d6"],["/images/nhkimage/2020.09.26.jpg","c6415af781fbdd36fdb034f74646129b"],["/images/nhkimage/2020.09.27.png","27aa6f6a8d5534ccd99cff261dcd9eb6"],["/images/nhkimage/2020.09.28.png","0f4318d1ff17a33de364432a1c44b5ad"],["/images/notop.png","d25c272e5ce312a880e04ce8a0b27683"],["/images/pasted-0.png","552608d8f6e39369aa30c6e332a32826"],["/images/pasted-1.png","baafdacee93c99e99418aaedbf524fda"],["/images/pasted-10.jpg","395cff6f64ab5df19baa3572ac98e541"],["/images/pasted-11.jpg","56e5df07c96634638abf7995b25c81ab"],["/images/pasted-12.jpg","61b3f803b85ce3640d7a9ba7efb9da6b"],["/images/pasted-2.png","2f410e53c811f92a6135f48857776f5e"],["/images/pasted-3.jpg","bb5717e691e87355e7d63a5f3a87ae62"],["/images/pasted-4.jpg","10041d0e3567b24b81222ec5075d6492"],["/images/pasted-5.jpg","ac5047a4b48c6cdaee86fa1863e33904"],["/images/pasted-6.jpg","1556ae8d3ad5713d60237ee4d10e81f0"],["/images/pasted-7.jpg","913fde1686587646ddc663bd810cc81d"],["/images/pasted-8.jpg","fc83268081fb4b6b6ecb1ffa1ec5af7f"],["/images/pasted-9.jpg","25e0fa3496591501f5c29d0b802b77d2"],["/images/pet.png","2b8c121909497e57057478856fe48a94"],["/images/pet2.png","dfb1d6a17b527ccc0c600e6ad31f55e5"],["/images/ps1.png","0917ba91f21b6944dc08d35c41a326d2"],["/images/psb.jpg","6a27c58337875c776af0a7667598b401"],["/images/quse.png","7cd1ec12b804305430cb4cdc09c7a893"],["/images/rain.jpg","9c26acc44c692b6a63e134be07b07c18"],["/images/shezhi.png","281bf545f6a4024e2d0b7120bc398a21"],["/images/soul.jpg","d97b4099c0728ff6123d006fa62db86e"],["/images/study.jpg","a9b1cf95ee6bd9f3913e8ec6a6a6f44f"],["/images/tianqizhizi.jpg","dd48d78b4eeaaa52578352f9ef570b14"],["/images/vue.png","cf23526f451784ff137f161b8fe18d5a"],["/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/images/work.png","e521cf5b834292fde1c50e0a0f5802f9"],["/images/xiaoguoyanshi.png","994a3b710d36df0a4630cd9a768c7f7b"],["/images/xiaoguozhanshi-m.png","1fefca18214fc4889d1bb76b81887c9d"],["/images/zfe.one.png","b41f689341882058ffb28c4cee499bde"],["/images/幻想终结之日.png","0025c4d3973bdfedb80db3f78c59fa47"],["/images/时空战纪——游戏建议及意见①.jpg","1337457f14a8dffee66d94f8915b54ff"],["/images/简历.png","d70507ee4615c9e324578c0d777e6855"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","b2816f18531e7470afc88d9f63c2b52c"],["/img/favicon2.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","0b36c9da789dd0fab35914a1e5dc9647"],["/js/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/APlayer.min.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/airvisual.js","71cf86bfd452ca01d92438d8266416ee"],["/js/airvisualapi.js","6931bebe1696688d109963187fc2eace"],["/js/background.js","94c8410b174f58594cf81ec99054968b"],["/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/js/calendar.js","a58e02711cc6dec4dc04257e555b8923"],["/js/clock.js","ead1a80f7219c166e1180674b7d8c70b"],["/js/color.js","3730bb4f7b185e6f5130ac28bace968b"],["/js/danmu.js","6b6ae6b7f1b42dd4857541f43b2bb733"],["/js/echarts.js","dc1227b1eba1ba47fd185a387d0a7d37"],["/js/gitcalendar.js","fadfa8a42272cd322118653dca512a7a"],["/js/history.js","20459f7db325e597e64903f4c0d19306"],["/js/historyroll.js","a3e9ac376106816c50a61f9f4306d671"],["/js/jam.js","462c07d3b2e0f20394d994bbcfae37cb"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","790cd2f28594f8affbd4a450037c48ff"],["/js/rain.js","f656dc28e4ab5c3f8414d35f683278c1"],["/js/rainremove.js","ceacf82842b101f7e54a2aaf5f4bb9cb"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/link/index.html","ae58bd841c8c84b2a7f18c4f03e2892d"],["/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","18e123aa88df345d4c2cb3339d616aa4"],["/page/10/index.html","3a4c042aac518c1a6eb3a3fedec7e378"],["/page/11/index.html","4bc862efff44ccc58d40262d13d20a01"],["/page/2/index.html","fe97d1e7c28cf08607b5372a33206d83"],["/page/3/index.html","f99cf2b90aab83ca562846b35e5834e9"],["/page/4/index.html","c76e945b08904a2d8342c0a783d9b75a"],["/page/5/index.html","d3417f55f18db560946284a3b3bbcfa1"],["/page/6/index.html","ec2b16d33bc7de42363afd7bbc656fe2"],["/page/7/index.html","879ccf3dadb62290fd4e336088547598"],["/page/8/index.html","81a1b5382a67f826d4ce18514d733d76"],["/page/9/index.html","e781552f14b28632685233b5743e215c"],["/research/index.html","11aef2d8c4ed9f6ef1b00e8a14512844"],["/sw-register.js","85c7c3ae63d22099a15a0c341dc3142d"],["/tags/Butterfly主题/index.html","aafe6075ce3a9890d8123152802bf81f"],["/tags/DIY/index.html","4c132d3c700c719e2e1c7b2a6a53a8d3"],["/tags/DIY/page/2/index.html","9b1bda8389b88231baaaf9714ac39b2c"],["/tags/ICT/index.html","6ae508fe2d6496c973100f8511b374e2"],["/tags/NHK听力练习/index.html","9d056e87790312eecede86306123ecc9"],["/tags/NHK听力练习/page/2/index.html","8512877b65ed840b8cc6f34d5ee3c91f"],["/tags/NHK听力练习/page/3/index.html","53195a24d340406465a6b7fe01a1e0ac"],["/tags/NHK听力练习/page/4/index.html","24ef414425cb135ff436bb3d087dcd42"],["/tags/NHK听力练习/page/5/index.html","7f080ffcb45996f1e6e5ea3a16af134d"],["/tags/NHK听力练习/page/6/index.html","147079b6bfeba839933bbd6776aeac87"],["/tags/metro-ui/index.html","48cf4d0c3ea5f38a098eaa9a7f556da7"],["/tags/vuejs/index.html","7a8741839bff72b9e0b33f11a6409f3f"],["/tags/お盆/index.html","bc4b237515a24da44bbc0a61ba8ea59c"],["/tags/世論調査/index.html","26ccc973410faf4f30611b890e9821ee"],["/tags/作品集/index.html","c79cee917e0980c06b5f8c2a3b48d2c0"],["/tags/作品集/page/2/index.html","c2eb1dac79887a3bbada6eb860c1b6e9"],["/tags/农业/index.html","7df5214552630df25e063c95995cdbda"],["/tags/历史/index.html","952b9ae9568d7133d4bed8b220285623"],["/tags/営業時間/index.html","fb8fe5dd59f0726de0a0fd22c857b26d"],["/tags/国外政事/index.html","2c3c988f20eacf0c8e9d2855e033f385"],["/tags/地震/index.html","ef0bb06aa162d949d12ca67662deccfa"],["/tags/外国政事/index.html","eadca9952ee04184e844533414d99cc2"],["/tags/天气/index.html","e74eaa4a236c96e43b87f344a96264e5"],["/tags/天气/page/2/index.html","09ce874f0acc0f78c40905b0131e4d6f"],["/tags/奥运会/index.html","f98e289ae7f8d8a0d2dd20140073a447"],["/tags/学习/index.html","1a55468da20816b3383c47d5232e4b17"],["/tags/学习/page/2/index.html","07118f453ae801daa77f2840fd20dfe4"],["/tags/学习/page/3/index.html","07cf13ede6f3492cc46897d0dc420436"],["/tags/就业/index.html","75cce1532fef33e5ee2db4add28871fd"],["/tags/庐山/index.html","566b92ce268bf8a0be84381987ad8072"],["/tags/座礁/index.html","5d5670627609c3e07dd73129db661469"],["/tags/政府/index.html","7a293d2637fdf308410a23a7a0696ce3"],["/tags/政治/index.html","e71e26c3d369c0654c6bbaef8a995a3b"],["/tags/教程/index.html","b1a78ac1fcfe55f685385f41302dbfc6"],["/tags/日本教育/index.html","c5b4698cb32bfa69233a1e9e44eb3cfb"],["/tags/民生/index.html","dbe0b6b1bd5189ae02d6f2c28fe1519e"],["/tags/民生/page/2/index.html","b68c48098edb35666ec136fc4dbb4c6a"],["/tags/游戏评测/index.html","0d148cce0246de66ab135508c09329ac"],["/tags/游记/index.html","bc8e8bde565ca44bf6979b31727e83d5"],["/tags/生活趣闻/index.html","f8eb2d5f3f73d1d5ed83bd5887088b34"],["/tags/科技/index.html","620ab05e8ffadf87df50e18b0ad9a038"],["/tags/经济/index.html","89d08aa4f06a963eb019f79e0cabad7f"],["/tags/经济/page/2/index.html","fd7bed171adbf849599d20ce5e1139cc"],["/tags/网络教学/index.html","b53165ef70e00efdb953b2ecdd8d8c18"],["/tags/舆论/index.html","0e3a13ef3b27230338505c7418b57197"],["/tags/虚拟现实/index.html","873f8d8b059b4930938816f5337ca70d"],["/tags/随想/index.html","ba8d4c50ff7d6336069b1b49fc5935ee"],["/tags/障害者/index.html","0a29331b5eee80dc960530fea5236660"]];
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
