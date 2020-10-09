/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/05/20/2015-05-20/index.html","8e23b5af6d74d39955f7ce6c90fab35b"],["/2015/06/16/2015-06-16/index.html","4e82367cbc72d325beea662af76c4302"],["/2015/12/12/2015-12-12/index.html","314ff8cdd366419b056ae4a866735a29"],["/2016/06/08/2016-06-08/index.html","19c2cc862cde632056476139afc3f569"],["/2016/12/18/2016-12-18/index.html","704b3f0ebc0af514f0fe2adb32c660dd"],["/2017/02/17/2017-02-17/index.html","558cb5b6722752296260f6d7c9645535"],["/2017/03/17/2017-03-17/index.html","36a7c5ad06ea5724afdedb11b83fae2c"],["/2017/04/06/2017-04-06/index.html","8fc4723e8c6bddd8c8e31a5ce1443316"],["/2017/05/17/2017-05-17/index.html","2ab34add1cd5ac6496807a1355f45e95"],["/2017/08/15/2017-08-15/index.html","fbf27e8d6c16095bb7144d431d1ebf13"],["/2017/09/16/2017-09-16-1/index.html","9ddf3790eae4c1a634c393a4dfd29612"],["/2017/09/16/2017-09-16/index.html","008ff6c167f152b2fba081b8c6199a3b"],["/2017/09/21/2017-09-21/index.html","1d6aef9668eb4064c393c39172e6aad3"],["/2017/09/23/2017-09-23/index.html","a0a91b2c2aa396761a212ae77505ec02"],["/2017/09/26/2017-09-26/index.html","d04c9e638686cbd5a4c1a9737023878f"],["/2017/09/27/2017-09-27/index.html","07c3ebaef7e95bcf8ef10a693b236469"],["/2017/10/04/2017-10-04/index.html","81f11d0e54e9ae94a305f2b82455cca0"],["/2017/10/08/2017-10-08/index.html","bdf20f33f17f6cf8efe9e6e4e27fb53d"],["/2017/10/09/2017-10-09/index.html","c1e254787ce74b7a8f538333a0bb0887"],["/2017/10/15/2017-10-15/index.html","97f064a430c0fdc72f098d5f630faa77"],["/2017/10/19/2017-10-19/index.html","db0002ec52b7d652527310b30e2e3c80"],["/2017/10/23/2017-10-23-2/index.html","dfe554d1082716afcf27ebc15d8db6a8"],["/2017/10/23/2017-10-23/index.html","6d5071fb5fc42a49937168f9fe1e4513"],["/2017/11/08/2017-11-08/index.html","1642cda8074a2796d7f1c3e59cfd919f"],["/2017/11/12/2017-11-12/index.html","25a198b52fbf4bb12510ab5d3434c6e4"],["/2017/11/15/2017-11-15/index.html","709756544b8505137142b45f6129bd0d"],["/2017/11/27/2017-11-27/index.html","df81ce77c6c30951dab3538edd83636f"],["/2017/12/06/2017-12-06/index.html","e346ec0b6dcb805b650ef1d1af43d6bf"],["/2018/02/12/2018-02-12/index.html","ceba06a575586e4bb778ef198ea386df"],["/2018/03/26/2018-03-26/index.html","c4c0f797db18757f7ceec8bdac84f1f8"],["/2018/04/02/2018-04-02/index.html","1b9f4e4b20eb12dfcf302f0aba20712b"],["/2018/04/24/2018-04-24/index.html","3a2b8ccd53a42148872ca88df7f2b929"],["/2018/05/18/2018-05-18/index.html","ed00f912bd10d8df69ca92818f88aa74"],["/2018/05/23/2018-05-23/index.html","d8bde2139da8480ec01e459a72f3566e"],["/2018/06/08/2018-06-08/index.html","7d7fe31f27848833de84c036b69467ef"],["/2018/07/01/2018-07-01/index.html","3e994e7575e19a7c36f9988ffbbd62d6"],["/2018/08/30/2018-08-30/index.html","b373f8d982e9e1034e2bb4108bcbdd21"],["/2020/07/20/2020-07-20/index.html","7c3a25866dc57367ab2dadfe0896abc7"],["/2020/08/01/2020-08-01/index.html","23d1a0b5fc7bd08a74d5725b5fdccaf3"],["/2020/08/02/2020-08-02/index.html","1c0b74ef558adb5972053de74b7e02a1"],["/2020/08/03/2020-08-03/index.html","8a23043ff610a7a0c39f89d5307a409e"],["/2020/08/04/2020-08-04-1/index.html","c444549c281126ef1c5348e7ad6baa05"],["/2020/08/04/2020-08-04-2/index.html","f062c8d673a92f6ae64cd3e89f5f85b2"],["/2020/08/05/2020-08-05/index.html","919cd89c86c6bfb469c786d58aa26b0f"],["/2020/08/06/2020-08-06/index.html","764848021cb5769f336dd054a33f9470"],["/2020/08/07/2020-08-07/index.html","8470340435d411e595834e4008602343"],["/2020/08/08/2020-08-08/index.html","f4f480440b0ffb0ef6d12124c4031185"],["/2020/08/09/2020-08-09/index.html","a1e9b6131d783a1c9b5b373b7d5fe386"],["/2020/08/10/2020-08-10/index.html","88ca4eae0f173a0e358b32c5a9c6661c"],["/2020/08/11/2020-08-11/index.html","0de575c68c472f397ea0b46c5291aef8"],["/2020/08/12/2020-08-12/index.html","e9cd73233f16a182f837934bd06c8877"],["/2020/08/13/2020-08-13/index.html","6c8daa5c181639a8e3db278104e488ff"],["/2020/08/14/2020-08-14-1/index.html","32e0be9f318b48827c0b41e8d48217bd"],["/2020/08/14/2020-08-14-2/index.html","aba18d5759def13196575296b03fe871"],["/2020/08/15/2020-08-15/index.html","404af7eebe13f7b25714836e5ca3f9f3"],["/2020/08/16/2020-08-16-1/index.html","77021e3a27050e8fdb85c99ebcd960c9"],["/2020/08/16/2020-08-16-2/index.html","602f4ce690310ee2e0da1bfcd591d0cc"],["/2020/08/17/2020-08-17/index.html","eb0a3af5c61f1d662739aa4200528c3c"],["/2020/08/18/2020-08-18/index.html","cebeb3a33cbdb544db6597fe23700413"],["/2020/08/19/2020-08-19-1/index.html","2a4094bffb27592ca21819f13065b85b"],["/2020/08/19/2020-08-19-2/index.html","130eda2aedfebb8e0e14ebd30e509a44"],["/2020/08/20/2020-08-20/index.html","9a878e17d55517978a66413f6c77cc10"],["/2020/08/21/2020-08-21/index.html","67bea711032ec9f0400041396a955137"],["/2020/08/22/2020-08-22/index.html","0b29ee0b8008708ffa1a4378f490c9e5"],["/2020/08/23/2020-08-23-1/index.html","bc26f33d6a9aff1dbff95bb9eae61163"],["/2020/08/23/2020-08-23-2/index.html","95ad8ca961e377ef60a6e5fb9fb66787"],["/2020/08/24/2020-08-24-1/index.html","6c2a63f3b36c708e15e854612df3c859"],["/2020/08/24/2020-08-24-2/index.html","764f7f1f4eb067c3c08596aabef194b0"],["/2020/08/25/2020-08-25-1/index.html","efbe6c5842c5dbec63f1b485580793bc"],["/2020/08/25/2020-08-25-2/index.html","e678d1bc0e9d67687f3944d32e63d3ae"],["/2020/08/26/2020-08-26/index.html","bd82c75a7b9b69491ed453b8bb2ca78b"],["/2020/08/27/2020-08-27/index.html","9f8aa8fff055c56166a4c8a8e1cf352f"],["/2020/08/28/2020-08-28/index.html","5fecff32e9c7deb7d65a1f15557bfed8"],["/2020/08/29/2020-08-29/index.html","a5d3a133754eb9c16ebfed0876aa7a68"],["/2020/08/30/2020-08-30/index.html","5a700eb4b74dcc220ed89d47b591b066"],["/2020/08/31/2020-08-31-1/index.html","bbe5f07fbfd7d77a51acf3c50209fa0a"],["/2020/08/31/2020-08-31-2/index.html","1e60a38192072c8afd3eedb549681773"],["/2020/09/01/2020-09-01-1/index.html","cca162f5e7f4cc8eb824f2217c6b5f4a"],["/2020/09/01/2020-09-01-2/index.html","8877b97a8a6119818828ea1454d2f48b"],["/2020/09/02/2020-09-02-1/index.html","2ebe982604d128a49ea9ae5762fe8109"],["/2020/09/02/2020-09-02-2/index.html","cc05565aaf8fa88337773fa33a1922d5"],["/2020/09/03/2020-09-03-1/index.html","95007f64041425337cdc3c7390d03ac9"],["/2020/09/03/2020-09-03-2/index.html","7020c72cc8f4b1d251bdb715dcc72ad1"],["/2020/09/04/2020-09-04-1/index.html","17f7af6bc68c7e28ef7cec323e015237"],["/2020/09/05/2020-09-05-1/index.html","45d00b26fc4c460c7f96851d4399a61b"],["/2020/09/06/2020-09-06-1/index.html","54403e51833fa35fe4f82a96e476d5ed"],["/2020/09/07/2020-09-07/index.html","6a31ade66518780f30507766d9aff3bd"],["/2020/09/08/2020-09-08-1/index.html","a6db726b1182e2d4853fe974181cabc4"],["/2020/09/08/2020-09-08-2/index.html","1aacca733f971f452f86f8b1f5bf4e4b"],["/2020/09/09/2020-09-09/index.html","3430879a6a29ec11e8a2bc3bbb77539c"],["/2020/09/10/2020-09-10/index.html","b877efb8276a87eef66f76900afad332"],["/2020/09/11/2020-09-11/index.html","2371c88dad3b3fac60c61aa96a239ff8"],["/2020/09/12/2020-09-12/index.html","83c9c95e9cf0c79dfb2055e117780bcb"],["/2020/09/13/2020-09-13/index.html","3264195e315bf72342ea63e298e6bf81"],["/2020/09/14/2020-09-14/index.html","6e291e47df27961031472fc158a4f862"],["/2020/09/15/2020-09-15/index.html","ef22c0c82f76f4aaca908d587d628746"],["/2020/09/16/2020-09-16/index.html","6f3d4aed3c7999eeec806f5832363276"],["/2020/09/17/2020-09-17/index.html","d418c427f78e08c27413d3250b5742d9"],["/2020/09/19/2020-09-19/index.html","10c11235bcd8ca25fcf236b42f9b8846"],["/2020/09/23/2020-09-23/index.html","b291bbf0468b3e3c200207ee33eed03f"],["/2020/09/24/2020-09-24/index.html","babc2165e7b42a30f756dd76f25aa119"],["/2020/09/26/2020-09-26/index.html","708c5b64cac4be39b624e7f31ac7c621"],["/2020/09/27/2020-09-27/index.html","e5e85991ca73fa8486c9c22bd17d7f9d"],["/2020/09/28/2020-09-28-2/index.html","75db3ee7d41cec468e240ecc768795ec"],["/2020/09/28/2020-09-28/index.html","716093f5da75acf24b65cad5df42fc7e"],["/2020/09/29/2020-09-29/index.html","6d73be8af2d85c27ea9a96f4622cc4c5"],["/2020/10/03/2020-10-03/index.html","9a9c32bbf3d1a65ed7ad1d0fc2e1e1e4"],["/2020/10/04/2020-10-04/index.html","db07b315bfd068db5f8c8c64b83706ea"],["/2020/10/09/2020-10-09/index.html","ca9316176be41f22ac73e45ffcf24439"],["/airplayervisual/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/airplayervisual/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/airplayervisual/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/airplayervisual/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/airplayervisual/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/airplayervisual/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/airplayervisual/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/airplayervisual/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/airplayervisual/index.html","947bf8219167876f8b7ed07297bfe881"],["/airplayervisual/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/airplayervisual/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/airplayervisual/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/airplayervisual/js/jamsetting.js","7927507e0080ddf55c6d8b5f526bd942"],["/airplayervisual/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/airplayervisual/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/airplayervisual/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/archives/2015/05/index.html","a9a2a45097cfdbbb3413f3d5059eb012"],["/archives/2015/06/index.html","a12d5dae38bb0d871c29d774a62fa365"],["/archives/2015/12/index.html","d0e586b968cf76bac50cc82fc27bbf13"],["/archives/2015/index.html","feb154f8e03db21336f11b5c6be1122e"],["/archives/2016/06/index.html","2bd14df9712722ab00aa239d0ac1eae5"],["/archives/2016/12/index.html","f3c1c6bc5a293bca9e565854ea9a11e8"],["/archives/2016/index.html","542ad5872e056509915e534903f9d1a3"],["/archives/2017/02/index.html","e7904477e25cc1eff5f53aadb7eb3eb7"],["/archives/2017/03/index.html","bd4d5c93af5272ebe4f48acd54832c27"],["/archives/2017/04/index.html","389809130a2090e424e829dd5825b93d"],["/archives/2017/05/index.html","e7ed446d36bcc54c09afbb03335db3ca"],["/archives/2017/08/index.html","b84f94fa0a123b2c606cddcd3b4542c5"],["/archives/2017/09/index.html","efe6c2d28560d840a1721096f1426c56"],["/archives/2017/10/index.html","9bc7c10842c36ddbe5c898aeb996e11d"],["/archives/2017/11/index.html","a541409ff9022c4579f55391e5280d9d"],["/archives/2017/12/index.html","42429e8b620feaf2d4c0fe48279e9551"],["/archives/2017/index.html","a65e71e647eb5fcce9321d04fb69ab8a"],["/archives/2017/page/2/index.html","b061eb17e3f3bfd37d70091ed972518e"],["/archives/2017/page/3/index.html","a36e8e061e3bdfd6f4e92f17b29b709e"],["/archives/2018/02/index.html","687008cec82159388e34337468b6be2b"],["/archives/2018/03/index.html","1c9466fd0a371c7722b596768420d074"],["/archives/2018/04/index.html","2fb82171e0e1fb3a9ff43195d8d74809"],["/archives/2018/05/index.html","f2ac7261944cc5334590426831bef6db"],["/archives/2018/06/index.html","e962202c40d6fe8005e92cc3f4002a83"],["/archives/2018/07/index.html","f3edc6e169203f83b4a37b79e98eabee"],["/archives/2018/08/index.html","7a3f0865c9241d948fa1f90e913b8695"],["/archives/2018/index.html","ea9880be58fcbd67155a6db8a81b21c8"],["/archives/2020/07/index.html","8c6142a88ec0cdcf4a2732ae6674e304"],["/archives/2020/08/index.html","95df7af37a28efb4e74250ee92ddf714"],["/archives/2020/08/page/2/index.html","8a7d0c0dbd09347043e58e686b79e04b"],["/archives/2020/08/page/3/index.html","54f024a0fe7e3fd43b883aed703f15d4"],["/archives/2020/08/page/4/index.html","02e502ac7a1426c5d8a68282b74677a7"],["/archives/2020/09/index.html","6481bbcb609f76b58605dc5be7dd38fd"],["/archives/2020/09/page/2/index.html","df32b84aac0bdef18a5a155b42b444c1"],["/archives/2020/09/page/3/index.html","7e599cdab491f036bd45dd174b30600a"],["/archives/2020/10/index.html","fb6d2edb1e9b2026b80adc4b7a4e302b"],["/archives/2020/index.html","0c339ca1fe7a25f7c804a6e13b757434"],["/archives/2020/page/2/index.html","458cd2a8a3c1725349afb45c1e453622"],["/archives/2020/page/3/index.html","708f886fba021e4f239b24fe6899ca98"],["/archives/2020/page/4/index.html","4e1141b42cdc107cc8b2110634a9d523"],["/archives/2020/page/5/index.html","dbebbda0e35314812a91e71b2344d529"],["/archives/2020/page/6/index.html","6412f2efc41208149cf47edc57224814"],["/archives/2020/page/7/index.html","40d8575721165b931b8a224365195131"],["/archives/2020/page/8/index.html","f8d5512dac8795a93bfb014fc6654511"],["/archives/index.html","f1c2b9f60ffc3e095e4a5710bd263b14"],["/archives/page/10/index.html","155055d36d94213ad03a6517a5927679"],["/archives/page/11/index.html","4c7b2fb93c7829f452f27e7de63abb4b"],["/archives/page/2/index.html","0777564e85c086cd047505e8144e3423"],["/archives/page/3/index.html","9a687328496a156280d09a9f4a14a5da"],["/archives/page/4/index.html","2669d31484be0bf20bd33e1f97350725"],["/archives/page/5/index.html","ffe0ec433e121aeafb82c29dbb2067d8"],["/archives/page/6/index.html","c196b9377e3d798fc888e6e5316f0067"],["/archives/page/7/index.html","35b77b3b6d76770757c3ec5f90cabf59"],["/archives/page/8/index.html","cbb7aa61d6540b05e31febf593f4e471"],["/archives/page/9/index.html","b819fcc8d2800fa8a0d3e4386afa02dc"],["/categories/NHK听力练习/index.html","af07c707acbfebd44f46df9d672ee379"],["/categories/NHK听力练习/page/2/index.html","11b87fbaae9064286eacec3eec27219f"],["/categories/NHK听力练习/page/3/index.html","316f84da709ed40f02357eb94c161327"],["/categories/NHK听力练习/page/4/index.html","628a3a5babd673079333ade067128db1"],["/categories/NHK听力练习/page/5/index.html","ab6820848fa07e56ee6244b53bc53d8b"],["/categories/NHK听力练习/page/6/index.html","73ae4e27baf01739c5ed4b160fa7a74b"],["/categories/作品集/index.html","b8a0b6a2f8de6624850b8a2c997c9b03"],["/categories/作品集/page/2/index.html","8b559cfbeaee9e71519d684fc8dea9b0"],["/categories/学习/index.html","9cb0bc9776fc24b01d088764d6e088a2"],["/categories/学习/page/2/index.html","f1dba7069f8627fc8127ccc3e7b12bf9"],["/categories/学习/page/3/index.html","16acbba7ecd54a46760cf160884ce4dc"],["/categories/游戏评测/index.html","1c366eb6dfdba6db3fcdb90eae3a1779"],["/categories/生活趣闻/index.html","e546597053c1710974ece776bd293e30"],["/categories/随想/index.html","98fe86324afcdf8cc259b6bcf45b06d5"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/addcss.css","59cae1ddbe6925c34f846ffe12d19921"],["/css/background.css","32d5acccbb94f987faf37cfdc3fd06df"],["/css/calendar.css","0090a32d2a61d42c5bfed254bfba078c"],["/css/clock.css","65602c2385c7eab42ee3804cd6ee0a5a"],["/css/danmu.css","2a5b914a9592bcd353425c6d5fa7af8e"],["/css/index.css","36eb36d0f5531dd7a8f4c8f925188615"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/loadingline.css","bc1ee020a6a11fea17b915b97e6978bf"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/html/calendar.html","bddcec1edba7f4c49fe5cd75f8cdf5b2"],["/html/shiyan.html","4196b09fbcc1d56fcc6ef4cb61216715"],["/html/shiyan2.html","009db162adceadd6373078fcabe3dd4f"],["/icon.png","8ec68de45d18642ba9baf2447e62f476"],["/images/AMJ1.png","d27a6725d1aaaf5324248da4312ab6c2"],["/images/AMJ2.png","00e22eba5901e5bd674e42228cd5bd26"],["/images/AMJ3.png","c8c9ea6348dfcad3a641899d5b587431"],["/images/FOTO1.jpg","4b6f100861908e2c7044cffbdb4a0c1a"],["/images/MVVM.png","ea5a002ee2f85c71a0db51d5adb5de19"],["/images/UT.jpg","367f4e432f9db55a92b2a290c4b0a476"],["/images/UX.png","a183974e958d41d1b6acec70bb7ea00a"],["/images/WindowsTerminal.png","8ac29cb56b8a1768cf7de071e9f1ae6f"],["/images/air-w.png","c1cc32f9d3e17551ca11a7d18a0b533a"],["/images/anzhuang.jpg","912b2489957f8344406edc5e5cebe5fa"],["/images/api-setting.png","2c0bb074390779721cba009e96c5417c"],["/images/apikey.png","1f31121b190eb1f990bcc3e27524bc03"],["/images/backpic1.jpg","86a6fa88167feb338fbf1a4e9057114b"],["/images/calendar.png","86319b08b93be7c8bc47cdba7a169563"],["/images/clock2.0.png","0a0f122c7a25262fc02ee99df0ef21eb"],["/images/example.png","aaac9983e5d59f919bf282dcff2edb3c"],["/images/foto17.png","28db4c6608ad1ee6b34238cafab25e5e"],["/images/foto2.jpg","be95b922512d004a61f83c97af3e2602"],["/images/foto2.png","0dc07d4e1b00526a273a89dc8b81548d"],["/images/foto3.jpg","551c0616c92c4ee7cc17dd458b3c46e9"],["/images/foto4.jpg","9d1d9fea759a41afc0061866e400339a"],["/images/foto5.jpg","984f618b15372f37d54f507e6f379f10"],["/images/foto9.jpg","b683fc0b998e80ff8f5a3e45e889807c"],["/images/girlpic.png","ff1e8427ed555af639e6d849f8f648f1"],["/images/girlpic1.png","698e5570e821c3cae643cc9777c2292e"],["/images/girlpic4.png","551882e4b9b6afb79000fd34c0dbf5e5"],["/images/headimage.png","332502f36a0297b30cb7969fe6de8451"],["/images/hexo.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/hexoWT.png","c027cc9f5665c7d7ba657e7a4bb40017"],["/images/his-json.png","7d8a71e38ab684107446e5c72c31854e"],["/images/history.gif","0459a3dcf2317253de0b34482880c63c"],["/images/idea.jpg","5eb08bf6c965588f03c8860f201cac45"],["/images/life-cycle.png","02f39ea5c041d45938fda4b50f234cb7"],["/images/life.jpg","74d2d9c5f48ec59e3badeec690941812"],["/images/listen.jpg","9d4f73cd5634f43deaed4f9aca03f9a3"],["/images/magnet.png","4899a924f3de0d19dbe0415128c07d65"],["/images/magnet1.png","8d010eb86ca943e036adaa7de57aee7d"],["/images/magnet2.png","293cb414a8ab93b43bde3bebf9cf0cfc"],["/images/magnet3.png","1923148630e2e094ff80bf35aa604c10"],["/images/magnet4.png","9bb4f963ac1c09f02d62525f513f492c"],["/images/meilu/1.jpg","cd67abcc3f543b5c66adc4f9d9c5c628"],["/images/meilu/10.jpg","ac9fb2711e477b5db1c3acb57e899045"],["/images/meilu/11.jpg","364caad6dfc356a3dc630fa067e48e88"],["/images/meilu/12.jpg","274767e5708f79934e5bdbf73eda8f0d"],["/images/meilu/13.jpg","dcab12b84454770b208913db63e825ac"],["/images/meilu/14.jpg","037cdd048284e621f27e17a2c59e8ea7"],["/images/meilu/2.jpg","f6cdb65ae3fad4523b32f5ee38696b60"],["/images/meilu/3.jpg","9e5df3612c2d93bf57313186c954aea5"],["/images/meilu/4.jpg","69ef2d6f4bcd79cf4b4e672b60c6751e"],["/images/meilu/5.jpg","ce81ca16def7613b7ebb368fb554f14f"],["/images/meilu/6.jpg","cafd5b62305f806754a75cc3af8c3b77"],["/images/meilu/7.jpg","b8ae865d386e1e713a6034da6b090c10"],["/images/meilu/8.jpg","afad7a7bf1066c817a8d2e7566bc780d"],["/images/meilu/9.jpg","72f9649f56b564eacf23ce3dacb88029"],["/images/metroui.jpg","5503bfffd450d9ab572b67ea00941571"],["/images/metroui/1.png","79a03b408c19c74eeaa8ff6e17a03f9d"],["/images/metroui/10.png","8309fed71a15c78f2dfa3af1ff75a5f3"],["/images/metroui/11.png","aaf1a007cbae12f93cc2688bace18d28"],["/images/metroui/12.png","0758ea282c3828c47e5c64520ff85783"],["/images/metroui/13.png","12ca7b511927cd4b26e97f3b20908a32"],["/images/metroui/14.png","f44ba7680f7b36df437e2ae2588d0565"],["/images/metroui/15.png","e8927c78b125b805af7aa86fee815ab6"],["/images/metroui/2.png","e604d3c662b996f06f22753ba9ab379f"],["/images/metroui/3.png","664e3b7490f2f95d5547b8ba79a65456"],["/images/metroui/4.png","c0f255344cafc303a1d9c7404da37149"],["/images/metroui/5.png","da2074cdb1298aca826abc1a5c441300"],["/images/metroui/6.png","efef2f087127614b4e03bcbe9a347018"],["/images/metroui/7.png","a4d34b1a2dbe3a58d3a92276880be039"],["/images/metroui/8.png","1d34a626bbaa898a60d4501936bcf962"],["/images/metroui/9.png","0663697c1667b377fe2623bd65e00b31"],["/images/metrouilogo.png","aea81b42d1c2c96440f74cf56ad82e2f"],["/images/nhkimage/2020.08.01.png","af4c55b2ae1d5ab2f56c75a87fcdfdb3"],["/images/nhkimage/2020.08.02.png","c355d41b90f5c65823f96c5f6868ce53"],["/images/nhkimage/2020.08.03.png","fddcedb40d7f28b2ccb90814351ad5c8"],["/images/nhkimage/2020.08.04.png","8b4518ec5a8513f442980ed7167136b1"],["/images/nhkimage/2020.08.05.png","590abfb19334b0c3cee5a005674f2253"],["/images/nhkimage/2020.08.06.png","d469e21100c42435e88f2bdf07f93da1"],["/images/nhkimage/2020.08.07.png","3ca9e2c8b8a09a38423d73cd36e8de9d"],["/images/nhkimage/2020.08.08.png","4420c2d899fe4eb90c48bae0da8418a2"],["/images/nhkimage/2020.08.09.png","df14be338f9c920818dd1daa6aa955ee"],["/images/nhkimage/2020.08.10.png","c4e2ed023cd3dbfd4986add35ca9357c"],["/images/nhkimage/2020.08.11.png","cf562339e57f673d394f3e6cdd1f60cb"],["/images/nhkimage/2020.08.12.png","81dfa179fea3052ddcf73912ea368f67"],["/images/nhkimage/2020.08.13.png","8cf26c2642e7a27cbd86fcbda8bae8d9"],["/images/nhkimage/2020.08.14.png","d88eeb678b3ed3651d597e61957e264a"],["/images/nhkimage/2020.08.15.png","b9879f193867edcffeefce62c9dc7153"],["/images/nhkimage/2020.08.16.png","46cb914aa1d556561897767ec9ff66a0"],["/images/nhkimage/2020.08.17.png","ea1af9645b5cc9cbaafe70a91dd15cca"],["/images/nhkimage/2020.08.18.png","e87e4de39a6f06cf4283a63af92dd8de"],["/images/nhkimage/2020.08.19.png","8001a951513b542a98ce1151be5bd87b"],["/images/nhkimage/2020.08.20.png","4bc8fafa3ecce30d340b1350715d78e3"],["/images/nhkimage/2020.08.21.png","07ad1337e127922abff27da6c672549b"],["/images/nhkimage/2020.08.22.png","b2b5d53ba46015f64048f9d803b12179"],["/images/nhkimage/2020.08.23.png","225af8c0cabe5218ec634d1b8815fd95"],["/images/nhkimage/2020.08.24.png","1d54a484a6e2395aabe9be005cd90361"],["/images/nhkimage/2020.08.25.png","8008ba169cfce0ef2041329cd29b6b77"],["/images/nhkimage/2020.08.26.png","72a2b8094003a54c97a34ea97cf21bc3"],["/images/nhkimage/2020.08.27.png","893407e604804d215c8fef8bcd5f2684"],["/images/nhkimage/2020.08.28.png","b542280b7341759890a99cbd44d822c5"],["/images/nhkimage/2020.08.29.png","620e2e7d4772e39615fd1a88cdf49717"],["/images/nhkimage/2020.08.30.png","f645d7ba2dcb506f9ec6fb9244425ad7"],["/images/nhkimage/2020.09.03.png","c5262f3aa87190e0273383ea1e445681"],["/images/nhkimage/2020.09.04.png","c07149c32aa41c03bc7dac82a713f6b2"],["/images/nhkimage/2020.09.05.png","4e43556e1cb3b7f4d75f0f6127616a54"],["/images/nhkimage/2020.09.06.png","1021d2ae04a7f109404f857a2a7629cf"],["/images/nhkimage/2020.09.07.png","db9827e9f0a4cf1401b559b4644a0204"],["/images/nhkimage/2020.09.08.png","efe1030b73dc1c01f169c3122a194426"],["/images/nhkimage/2020.09.09.png","f6ba3a1c6cdeff88404ebe2a646f2eb5"],["/images/nhkimage/2020.09.10.png","3471b05d02113517359a9e2167befcfa"],["/images/nhkimage/2020.09.11.png","921a541a8bffb1aa436df2eb6db7c99f"],["/images/nhkimage/2020.09.12.png","a51f8ebaddba69bb80f9259a30f17e65"],["/images/nhkimage/2020.09.13.png","0399889200493cd2154ffc407e2bc400"],["/images/nhkimage/2020.09.14.png","eaaf3da69a39ed316b7fc8c4d409bb0f"],["/images/nhkimage/2020.09.15.png","5774959ea4061c9298ea174f0862cc3a"],["/images/nhkimage/2020.09.16.png","0c5a00f74020740fda589c02e4b3f917"],["/images/nhkimage/2020.09.17.png","b5aef734e3a7db4862ca3fe4e6769dc2"],["/images/nhkimage/2020.09.24.png","5982a7b3843f4ae43b2b4bc4b0c577d6"],["/images/nhkimage/2020.09.26.jpg","c6415af781fbdd36fdb034f74646129b"],["/images/nhkimage/2020.09.27.png","27aa6f6a8d5534ccd99cff261dcd9eb6"],["/images/nhkimage/2020.09.28.png","0f4318d1ff17a33de364432a1c44b5ad"],["/images/nhkimage/2020.10.09.png","6408d9f7e66fdeba8b9207939a08cf8d"],["/images/notop.png","d25c272e5ce312a880e04ce8a0b27683"],["/images/pasted-0.png","552608d8f6e39369aa30c6e332a32826"],["/images/pasted-1.png","baafdacee93c99e99418aaedbf524fda"],["/images/pasted-10.jpg","395cff6f64ab5df19baa3572ac98e541"],["/images/pasted-11.jpg","56e5df07c96634638abf7995b25c81ab"],["/images/pasted-12.jpg","61b3f803b85ce3640d7a9ba7efb9da6b"],["/images/pasted-2.png","2f410e53c811f92a6135f48857776f5e"],["/images/pasted-3.jpg","bb5717e691e87355e7d63a5f3a87ae62"],["/images/pasted-4.jpg","10041d0e3567b24b81222ec5075d6492"],["/images/pasted-5.jpg","ac5047a4b48c6cdaee86fa1863e33904"],["/images/pasted-6.jpg","1556ae8d3ad5713d60237ee4d10e81f0"],["/images/pasted-7.jpg","913fde1686587646ddc663bd810cc81d"],["/images/pasted-8.jpg","fc83268081fb4b6b6ecb1ffa1ec5af7f"],["/images/pasted-9.jpg","25e0fa3496591501f5c29d0b802b77d2"],["/images/pet.png","2b8c121909497e57057478856fe48a94"],["/images/pet2.png","dfb1d6a17b527ccc0c600e6ad31f55e5"],["/images/ps1.png","0917ba91f21b6944dc08d35c41a326d2"],["/images/psb.jpg","6a27c58337875c776af0a7667598b401"],["/images/quse.png","7cd1ec12b804305430cb4cdc09c7a893"],["/images/rain.jpg","9c26acc44c692b6a63e134be07b07c18"],["/images/shezhi.png","281bf545f6a4024e2d0b7120bc398a21"],["/images/soul.jpg","d97b4099c0728ff6123d006fa62db86e"],["/images/study.jpg","a9b1cf95ee6bd9f3913e8ec6a6a6f44f"],["/images/tianqizhizi.jpg","dd48d78b4eeaaa52578352f9ef570b14"],["/images/vue.png","cf23526f451784ff137f161b8fe18d5a"],["/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/images/work.png","e521cf5b834292fde1c50e0a0f5802f9"],["/images/xiaoguoyanshi.png","994a3b710d36df0a4630cd9a768c7f7b"],["/images/xiaoguozhanshi-m.png","1fefca18214fc4889d1bb76b81887c9d"],["/images/zfe.one.png","b41f689341882058ffb28c4cee499bde"],["/images/幻想终结之日.png","0025c4d3973bdfedb80db3f78c59fa47"],["/images/时空战纪——游戏建议及意见①.jpg","1337457f14a8dffee66d94f8915b54ff"],["/images/简历.png","d70507ee4615c9e324578c0d777e6855"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","b2816f18531e7470afc88d9f63c2b52c"],["/img/favicon2.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","f38b698c7ff71829b46a0f8af61eee25"],["/js/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/APlayer.min.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/airvisual.js","71cf86bfd452ca01d92438d8266416ee"],["/js/airvisualapi.js","6931bebe1696688d109963187fc2eace"],["/js/background.js","94c8410b174f58594cf81ec99054968b"],["/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/js/calendar.js","a58e02711cc6dec4dc04257e555b8923"],["/js/clock.js","ead1a80f7219c166e1180674b7d8c70b"],["/js/color.js","3730bb4f7b185e6f5130ac28bace968b"],["/js/danmu.js","6b6ae6b7f1b42dd4857541f43b2bb733"],["/js/echarts.js","dc1227b1eba1ba47fd185a387d0a7d37"],["/js/gitcalendar.js","fadfa8a42272cd322118653dca512a7a"],["/js/history.js","20459f7db325e597e64903f4c0d19306"],["/js/historyroll.js","a3e9ac376106816c50a61f9f4306d671"],["/js/jam.js","462c07d3b2e0f20394d994bbcfae37cb"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","790cd2f28594f8affbd4a450037c48ff"],["/js/rain.js","f656dc28e4ab5c3f8414d35f683278c1"],["/js/rainremove.js","ceacf82842b101f7e54a2aaf5f4bb9cb"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/link/index.html","c3818da02e7ffaf310de11fc48eb377e"],["/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","f7722dea52cc659d3961280c718d7de4"],["/page/10/index.html","caed1e58bfdbfd5eaebe25509079bc91"],["/page/11/index.html","1b028907e0b9cf908140ce81b5649ba5"],["/page/2/index.html","5b299b34a317e363d3374ae391667ed9"],["/page/3/index.html","1c8ceeab25a609d0732cf3d8e50397d9"],["/page/4/index.html","8c27fff7c5630171ed73aaecfdecf4a4"],["/page/5/index.html","013e171c4b34a7c74fe5ad68ffe33498"],["/page/6/index.html","bbc6384b904576c166289c98d06a68d3"],["/page/7/index.html","99055294c9f8bef5d490de4c46dbffed"],["/page/8/index.html","b8e026180f535fc6e686f40204cdc122"],["/page/9/index.html","5bc4aad27773d3f425b78ba4ce366ee1"],["/research/index.html","f8c8f2155ae36e25f41f3ddde0d3dbce"],["/sw-register.js","b866febaf2f32eadd1cccfc18caf2efa"],["/tags/Butterfly主题/index.html","fd795c2b15201a762dbc98ed6828f952"],["/tags/DIY/index.html","2f86eeecf6dbfae8be25c896c9776cd1"],["/tags/DIY/page/2/index.html","d0bcddbf944847cbc39ca74c71b35cad"],["/tags/ICT/index.html","91c4b9458c6533562ac1dd52da1f3af9"],["/tags/NHK听力练习/index.html","13856af0789566a513023a72a3f58699"],["/tags/NHK听力练习/page/2/index.html","e0ebd5a2c5253e36bfd8cca267b89bbe"],["/tags/NHK听力练习/page/3/index.html","32cd2f02394b120154edecd6cb6724a0"],["/tags/NHK听力练习/page/4/index.html","cde04ad61b0c651c623a0be6e68d0566"],["/tags/NHK听力练习/page/5/index.html","bf231db6cf45ac2506c5430d3033046b"],["/tags/NHK听力练习/page/6/index.html","24e241609aac670e09c42851bbcaf33b"],["/tags/metro-ui/index.html","6438b60eb426b9ab19209c4ded836e59"],["/tags/vuejs/index.html","18a515c644ba7cf3176bc4c1e624ffc6"],["/tags/お盆/index.html","4fd34232117690392700e9f053bbdac4"],["/tags/世論調査/index.html","dea4929db85bc18d5397b5490691d604"],["/tags/作品集/index.html","10333d97cdc66ba1db788ba039c560cc"],["/tags/作品集/page/2/index.html","e72277307670df8cb9f8dba19ff22c04"],["/tags/农业/index.html","f267a6272a3baf06f90ed881eb094c3c"],["/tags/历史/index.html","ab73bf3c4e53a0d6bef2ed3218d6195b"],["/tags/営業時間/index.html","57b314ac23e86184d08d8f2532ee0f65"],["/tags/国外政事/index.html","d9b825963326c316ed2d37d1cfcd6ce4"],["/tags/地震/index.html","8ee3f577678faab689021dca1b4ca276"],["/tags/外国政事/index.html","ddd75864d0052cd3457939ef57056a6e"],["/tags/天气/index.html","860e611159c3aca27e253abe9536440f"],["/tags/天气/page/2/index.html","b016cfffa9b00491d6eba390a45dc207"],["/tags/奥运会/index.html","069ed49cbb68efa7886f0390c4013de2"],["/tags/学习/index.html","42a8e3a1cf75d992bbbab1ce7cb7be03"],["/tags/学习/page/2/index.html","0b42481aa2baf2bbebad349e5969d722"],["/tags/学习/page/3/index.html","5997fa38e9fe61a2a68196779139ef85"],["/tags/就业/index.html","c8f01281e3509b1f60652368bec8acff"],["/tags/庐山/index.html","d70c0cd5b4f0ebadff3771769d58ce23"],["/tags/座礁/index.html","8c551262711fb7562dd01facf5af1662"],["/tags/政府/index.html","d4533662f0a3b221352185276a166995"],["/tags/政治/index.html","46a2cc2502cc43b18084430067488ab6"],["/tags/教程/index.html","8208b63b4ce7859d0d3a914827713cf4"],["/tags/日本教育/index.html","b73a31eda75f211cd425ab0cb439cf7d"],["/tags/民生/index.html","100411ef01feb3ddd2498488f8d36982"],["/tags/民生/page/2/index.html","f50d3fcc208d6e2ffcdcfc6140c22873"],["/tags/游戏评测/index.html","2c730853ea5b48ff256cd855f31c0f3f"],["/tags/游记/index.html","2c375760c29c6b4bfe4f3bd25c19d5d6"],["/tags/生活趣闻/index.html","1ad189cbb9cee1f8a60113ac73a735ec"],["/tags/科技/index.html","b0d2593466999913401891cc926196ec"],["/tags/经济/index.html","09592874dded7c5052f878ffc6631951"],["/tags/经济/page/2/index.html","902e3b66212d921f79ce743c91bd9c29"],["/tags/网络教学/index.html","07cc5e4f1881548f6bc59627fa5b796c"],["/tags/舆论/index.html","e7fbe54f073ee3d37af2f128a9ed47e6"],["/tags/虚拟现实/index.html","dbbac58db22c86142cfc9094375b05a8"],["/tags/随想/index.html","35396c5d7be9553d34c365c2a7261206"],["/tags/障害者/index.html","6e73e821e73968ab17a67149d6acf1a6"]];
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
