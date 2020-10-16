/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/05/20/2015-05-20/index.html","368f05d42929ee3d71cc993e51db4cc4"],["/2015/06/16/2015-06-16/index.html","b6469245152af12eea5187a6aa8785a6"],["/2015/12/12/2015-12-12/index.html","c0a2001fd061aff6db4f9fc7a07a2756"],["/2016/06/08/2016-06-08/index.html","ae92102f0981b69536650fd23e35cd7b"],["/2016/12/18/2016-12-18/index.html","16377dee0b323c601357f7105bc73200"],["/2017/02/17/2017-02-17/index.html","110180d5ee814f6da4fbd52aef9110c7"],["/2017/03/17/2017-03-17/index.html","a8063fd274ffd00774a2ccf9e5c5bd9c"],["/2017/04/06/2017-04-06/index.html","3ac2bd5799d2f7436ce00313345e3669"],["/2017/05/17/2017-05-17/index.html","5a764f44465a06b23f0c6980be659e1f"],["/2017/08/15/2017-08-15/index.html","c044b7677b3a63a06df56d78576e1b6e"],["/2017/09/16/2017-09-16-1/index.html","fefc6a5fb7793123471a4906ee06c490"],["/2017/09/16/2017-09-16/index.html","018c6fc4df478fb70fcd22e907720d12"],["/2017/09/21/2017-09-21/index.html","14787185f14ada1988c242a4e7c3345f"],["/2017/09/23/2017-09-23/index.html","dd629d9dc370d37c6b84a4d6c9b7ed5c"],["/2017/09/26/2017-09-26/index.html","a5fef47310ce8f72e564401517e5a8b9"],["/2017/09/27/2017-09-27/index.html","0bf04374b2b3eefbafbde1832fd6eb41"],["/2017/10/04/2017-10-04/index.html","a6801fe6058d827d7af9b5ffc38e9962"],["/2017/10/08/2017-10-08/index.html","482fe0b7c954bec345121086761201ec"],["/2017/10/09/2017-10-09/index.html","7679e6a2507a56c6fb83750d3074a090"],["/2017/10/15/2017-10-15/index.html","c234bd491f0d33a73fc36e865ea24e89"],["/2017/10/19/2017-10-19/index.html","e4928139ad1333969bad58361d3b89c5"],["/2017/10/23/2017-10-23-2/index.html","0da082091e45c202101c70175658b10a"],["/2017/10/23/2017-10-23/index.html","e63e7852c09c92fd87d92aa42b09fe8b"],["/2017/11/08/2017-11-08/index.html","ac486112188a8da062e29cb7df1a1c14"],["/2017/11/12/2017-11-12/index.html","65485bd25617d640bb65071b341ffe86"],["/2017/11/15/2017-11-15/index.html","48b1a45920ebe6513c5493a45e4eef8e"],["/2017/11/27/2017-11-27/index.html","3deb36a678d8504b486ef5859db3ec00"],["/2017/12/06/2017-12-06/index.html","fa5d3429d233d2a1cc5156653b67d53e"],["/2018/02/12/2018-02-12/index.html","9ffdcb1b062a2ccdcfd005c06ce8e8bd"],["/2018/03/26/2018-03-26/index.html","1c07ef83dc54662c208521f135b82c91"],["/2018/04/02/2018-04-02/index.html","ed3d3fe748c53e6a7acab6a39c0599dc"],["/2018/04/24/2018-04-24/index.html","5e8290d2e1c4ad4092e15c352ebba7cf"],["/2018/05/18/2018-05-18/index.html","3861f056bfb3fc3bf48e2b5380147131"],["/2018/05/23/2018-05-23/index.html","83747954a519747d1c1cc9b8b453c2e9"],["/2018/06/08/2018-06-08/index.html","d4cc902aa5a4ab3c513ec3baecf77056"],["/2018/07/01/2018-07-01/index.html","1e48afab22989cfe6289a0daebc03fd8"],["/2018/08/30/2018-08-30/index.html","0c39fa82712d2e64c35e90345385c118"],["/2020/07/20/2020-07-20/index.html","2f747aa62515df44bfdc9383c71167c9"],["/2020/08/01/2020-08-01/index.html","0d4336f2dc2c7f5ea61b757cc5afa202"],["/2020/08/02/2020-08-02/index.html","65e18a08c4a2ffd053e4944cf1a8733e"],["/2020/08/03/2020-08-03/index.html","7ed77022ceb61002478da5bfc6ca634b"],["/2020/08/04/2020-08-04-1/index.html","81a851de9873ac753db5df0500871249"],["/2020/08/04/2020-08-04-2/index.html","842ea6b9921a0f5d2bddd6fc9ba7ff26"],["/2020/08/05/2020-08-05/index.html","3522a271b5799aa96149f5f2afd7cf05"],["/2020/08/06/2020-08-06/index.html","cc038874acab6f0a50b9db38daffe39e"],["/2020/08/07/2020-08-07/index.html","5d3f12955b6077bc695f4f3befd1b106"],["/2020/08/08/2020-08-08/index.html","247598bba5ccfd65d044836306a99252"],["/2020/08/09/2020-08-09/index.html","587b418fb6ca54edc3078e8d0a11d0ab"],["/2020/08/10/2020-08-10/index.html","98e4d0be68ddfdd360fec6330b6c85ed"],["/2020/08/11/2020-08-11/index.html","d326ff6e64ba1715f496cd9fa9bcafb8"],["/2020/08/12/2020-08-12/index.html","6c3b7ecc1428ad7c3d59333d7e05ba69"],["/2020/08/13/2020-08-13/index.html","da69f1cc6d2992fb7d85f6f27ba0a514"],["/2020/08/14/2020-08-14-1/index.html","a21e0f6370878297dc7e441fd39005c4"],["/2020/08/14/2020-08-14-2/index.html","de95def5f145ef16d55606ea28bfa0cd"],["/2020/08/15/2020-08-15/index.html","5547655d4470f4534ed5f4db6ba78c9c"],["/2020/08/16/2020-08-16-1/index.html","667a48193ea0acb085dbdf120b1d74f6"],["/2020/08/16/2020-08-16-2/index.html","7ebb1d70a78c24e5025d32feedd8ff41"],["/2020/08/17/2020-08-17/index.html","7afa4d0109cbd99b7bc078ecfb4dcccd"],["/2020/08/18/2020-08-18/index.html","0c13af227c2339b468f819591553af7a"],["/2020/08/19/2020-08-19-1/index.html","54327351842091cfc4084bb046166dd9"],["/2020/08/19/2020-08-19-2/index.html","c76f307ceb366506fd16515bc8e91376"],["/2020/08/20/2020-08-20/index.html","db2f3a3083da5541ce43a2cbbbe1eb3d"],["/2020/08/21/2020-08-21/index.html","83a72b5a211ba48eb7e7a847aa0cdb11"],["/2020/08/22/2020-08-22/index.html","723fbc0087fbca4e00a3c6558842851d"],["/2020/08/23/2020-08-23-1/index.html","071c1694e32b04f652c7186845cf97cf"],["/2020/08/23/2020-08-23-2/index.html","35b978b87f4e5a9dc6750634ab15bcf7"],["/2020/08/24/2020-08-24-1/index.html","ff09c78735b2c19893fed3e34f50c138"],["/2020/08/24/2020-08-24-2/index.html","37dda64e897030d355cea8d392d64477"],["/2020/08/25/2020-08-25-1/index.html","def6943945ac8e25d167a2a653f87f03"],["/2020/08/25/2020-08-25-2/index.html","c16f395e5ed56a11a8b99a16998f0bb3"],["/2020/08/26/2020-08-26/index.html","76018e18ade708e1f0608a41a9b64b60"],["/2020/08/27/2020-08-27/index.html","c2ccdcc3aed35f836d9fab0b109763ac"],["/2020/08/28/2020-08-28/index.html","b49e4b37c40c7ec84e774195bd5a9597"],["/2020/08/29/2020-08-29/index.html","080fd8b2984c193d966857e7dc573ce1"],["/2020/08/30/2020-08-30/index.html","56815effe1242ee04aee64476c3955cc"],["/2020/08/31/2020-08-31-1/index.html","813e561afe381fd25df3226a6929690f"],["/2020/08/31/2020-08-31-2/index.html","83e4b88ce3b4f7545ea9afad8fe65859"],["/2020/09/01/2020-09-01-1/index.html","507a1d60e411bd534b3bc53e2548eb0c"],["/2020/09/01/2020-09-01-2/index.html","ee332f1b8b135b4545e4b500295d37f5"],["/2020/09/02/2020-09-02-1/index.html","9f8b5c27de6d4a0ad3920e2a29fdecb4"],["/2020/09/02/2020-09-02-2/index.html","9c5199139ba320267957138eeb1d3c75"],["/2020/09/03/2020-09-03-1/index.html","dfc144d33cb6c84d04a2480686c55265"],["/2020/09/03/2020-09-03-2/index.html","e31b8255909a02fdcd1bc9e13733b900"],["/2020/09/04/2020-09-04-1/index.html","7a70d416cb819c1bfa100b0b60defa6f"],["/2020/09/05/2020-09-05-1/index.html","eaa525b63def814ad95aba7c8cbbdd54"],["/2020/09/06/2020-09-06-1/index.html","cbe8e1f9e0372b65cab5473d02a00fe2"],["/2020/09/07/2020-09-07/index.html","4a9fdfe3bc3279e6b612b8cf87c94f37"],["/2020/09/08/2020-09-08-1/index.html","ed7ad02ad60f8dfa050a4132b3d5f105"],["/2020/09/08/2020-09-08-2/index.html","a6c2daf2350db0dfde628fa1e4c3bd96"],["/2020/09/09/2020-09-09/index.html","58a444858cda50be574f88fa6cd1c373"],["/2020/09/10/2020-09-10/index.html","12fa385ffb6f4c4aabbf40ef026c695b"],["/2020/09/11/2020-09-11/index.html","ed2f1c961ebaeedcaa2e42333df0a207"],["/2020/09/12/2020-09-12/index.html","098b75417d1c0507d687e4c1f0023275"],["/2020/09/13/2020-09-13/index.html","820e19c6688774b594f397966008d415"],["/2020/09/14/2020-09-14/index.html","b170ae31e703c5fa3fcf16211899523f"],["/2020/09/15/2020-09-15/index.html","466003689ad7377083088727f425b6dd"],["/2020/09/16/2020-09-16/index.html","d2505511a8b06748ebfbacfedbb9c7a0"],["/2020/09/17/2020-09-17/index.html","8aa3b69dd4c7dca836872a3b6aee2a91"],["/2020/09/19/2020-09-19/index.html","ac79a3716a8df86455360a45f1849882"],["/2020/09/23/2020-09-23/index.html","9124e067d8e7b8002143b733b5ea26b8"],["/2020/09/24/2020-09-24/index.html","ff6feaaabd42944b7959a216d0747d3a"],["/2020/09/26/2020-09-26/index.html","649c207e43d3e8db2d2be8c2c8649eb2"],["/2020/09/27/2020-09-27/index.html","e7701d65c336ca67928e6d8721ab6a24"],["/2020/09/28/2020-09-28-2/index.html","34f31520d146dc3074474aec6d2df3fe"],["/2020/09/28/2020-09-28/index.html","de9315318801a71f598c958bd7e22932"],["/2020/09/29/2020-09-29/index.html","87f1f9a5f34eac7578c90b7a28c2e301"],["/2020/10/03/2020-10-03/index.html","1bf41d18159d7f3964193078bcd07ff7"],["/2020/10/04/2020-10-04/index.html","a0692c73b9b0aad19ca5458d3624b053"],["/2020/10/09/2020-10-09/index.html","f98affb607e89404e9c79c39faf15269"],["/2020/10/10/2020-10-10/index.html","6c12d4aa597c53322a9139debb70665b"],["/2020/10/11/2020-10-11/index.html","67ef5d13166bbb44d544c68ab6df276e"],["/2020/10/12/2020-10-12/index.html","0431c714576eb1ae5e4b1322ebaa26db"],["/2020/10/13/2020-10-13/index.html","d55906868ffd6a1f8198487af8713435"],["/2020/10/14/2020-10-14/index.html","ef9bec6498f9545d689a7db63925b481"],["/2020/10/15/2020-10-16-2/index.html","6ebed172cfb18b7588efb5831cd23359"],["/2020/10/16/2020-10-16-1/index.html","9ed8fec00d5b3717af07e2efaacb9595"],["/airplayervisual/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/airplayervisual/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/airplayervisual/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/airplayervisual/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/airplayervisual/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/airplayervisual/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/airplayervisual/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/airplayervisual/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/airplayervisual/index.html","727406d11437c05d6f3208ca34a2c597"],["/airplayervisual/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/airplayervisual/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/airplayervisual/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/airplayervisual/js/jamsetting.js","7927507e0080ddf55c6d8b5f526bd942"],["/airplayervisual/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/airplayervisual/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/airplayervisual/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/archives/2015/05/index.html","d4673b5872ba8aa72a632dd4629f844b"],["/archives/2015/06/index.html","e1cf3e245ee91414ea09f70a56a27df9"],["/archives/2015/12/index.html","979aa658c4df537ef30179daff87dd67"],["/archives/2015/index.html","1e28b12166f7825d20739e4df7dfd119"],["/archives/2016/06/index.html","0195badd1c1b41100ac8c7b837068976"],["/archives/2016/12/index.html","b2ad3dced659988b37d761d8a8fb23e6"],["/archives/2016/index.html","70498298bda19ee08504f5b0ccd52e3e"],["/archives/2017/02/index.html","b38ac132e14719d03ddd225786d969c6"],["/archives/2017/03/index.html","82aaccf60759d5a9d574a87baa773112"],["/archives/2017/04/index.html","9805590f03620e17048d78684c77e394"],["/archives/2017/05/index.html","9e7c6e74449d81b3dd9da804a34eea95"],["/archives/2017/08/index.html","d5f1ed04efd671f8e6a5c51a593034c9"],["/archives/2017/09/index.html","5e77248f2d9cf8a6b0a6743e2a80d18e"],["/archives/2017/10/index.html","31abda73c2213d21343651da95d97775"],["/archives/2017/11/index.html","0f31a2625bf6d84e70bddb927907e47c"],["/archives/2017/12/index.html","97123a356315eefe400b1f70070b4e9d"],["/archives/2017/index.html","80d437c3d545a5eae9bf4ac18718a067"],["/archives/2017/page/2/index.html","3026c1f88aafad85e1a8060f0f7ec560"],["/archives/2017/page/3/index.html","7448f22f515968ae370f96828f850fd1"],["/archives/2018/02/index.html","50929ec1932737d428ddca3f8e069f09"],["/archives/2018/03/index.html","9aa7f5b8e7b9f648dd1433beee4e10bc"],["/archives/2018/04/index.html","65f39e5853a426120962a7d4f7447a98"],["/archives/2018/05/index.html","e639348affb31314d964012ccddf6ace"],["/archives/2018/06/index.html","e72fefa7b82250b2716c39e548399087"],["/archives/2018/07/index.html","acd8650f0bddd83e439804de85d5f105"],["/archives/2018/08/index.html","7561186d2b958ed0a7486823fe0cf7b3"],["/archives/2018/index.html","1868f366ae9cef011b262aa15ae92212"],["/archives/2020/07/index.html","c794e38941541440f74e7863898aa883"],["/archives/2020/08/index.html","2e990499af5b3c191b8a19e51f489a56"],["/archives/2020/08/page/2/index.html","57a5fbd0f992175e1051eb7a7a62a17a"],["/archives/2020/08/page/3/index.html","096da92eecfd9ce42cd3bc00b248c392"],["/archives/2020/08/page/4/index.html","7ca194f68bbbdf223ef6e14b9eb1a472"],["/archives/2020/09/index.html","2eeec25fa3e60b0ee35b8b954ddc939b"],["/archives/2020/09/page/2/index.html","5e7872fa9fa7af3d6f7b4fa3cc0ffc33"],["/archives/2020/09/page/3/index.html","53baeb3e2e81b21a7b4dc324a7de21d2"],["/archives/2020/10/index.html","61837a611482942317424b8e98f4f6a5"],["/archives/2020/index.html","339eb5d188467557ce3260f8d2b0b70c"],["/archives/2020/page/2/index.html","46b1c1650d01697fd01e9cf220c29756"],["/archives/2020/page/3/index.html","a5fcfc38d53569f5051e6ded8bb57efa"],["/archives/2020/page/4/index.html","ccfe6454b688fc4b248859d5f930b853"],["/archives/2020/page/5/index.html","86af642baae2f09951b4cd9cf33b099f"],["/archives/2020/page/6/index.html","4bea3ca61f614858b573eb4beeeb2bbf"],["/archives/2020/page/7/index.html","59a8a6794bdc2db1c6a4be6615a7769c"],["/archives/2020/page/8/index.html","224d1a27a999b30f02d4eb8cc464c51a"],["/archives/index.html","b516f3ad24952513246b9ff56632c161"],["/archives/page/10/index.html","78a7c510b4f3480709e696d0e20728c3"],["/archives/page/11/index.html","df3ca7ca3daca8ca44f8caaeab530cd0"],["/archives/page/12/index.html","a6cdb6b9c9a707a8752040db63648ff2"],["/archives/page/2/index.html","52cef7b05001e3149d93f84fa2796887"],["/archives/page/3/index.html","fdff3fc42d32c425d1b24cd0cca2ed7e"],["/archives/page/4/index.html","95d2aac1eb380ae73fffae4b0b43c9ab"],["/archives/page/5/index.html","cae3f0f81b8c62a7cbaad19bf051300a"],["/archives/page/6/index.html","b2035c71443d9321e49d76ae04e0da0e"],["/archives/page/7/index.html","a69351ac37be250a2a3c2e432896395c"],["/archives/page/8/index.html","e3c2395d1ce025a301e9f6e32cc9f083"],["/archives/page/9/index.html","d94a2137ca2ad21f00e2b3eeca04303a"],["/categories/NHK听力练习/index.html","8f6d8f8d9d136bc228fb0fc7819683e6"],["/categories/NHK听力练习/page/2/index.html","0caa98dcbd08b0f951439f5e0024cff0"],["/categories/NHK听力练习/page/3/index.html","ec5073a80d793d8b7d99bdbf07e44230"],["/categories/NHK听力练习/page/4/index.html","1be8d20fed7d6c3f9d85eb5612a7b17a"],["/categories/NHK听力练习/page/5/index.html","be5c4dd706e5bcc4d47eb1fc5257e045"],["/categories/NHK听力练习/page/6/index.html","70c6787289a23d1e4338836ea4bbad1b"],["/categories/作品集/index.html","c0c2213dadd29c74268d7e3115666023"],["/categories/作品集/page/2/index.html","18ef8e8f923f7707af92dab7846b578c"],["/categories/学习/index.html","bdba98c5b2a015553e1696ab1c1b604f"],["/categories/学习/page/2/index.html","a0f138c67da5503e0e0639299abbebde"],["/categories/学习/page/3/index.html","240c93cc2f2f90feaedc069442afd520"],["/categories/学习/page/4/index.html","0ad1a750aeae0d2285870131bce57255"],["/categories/游戏评测/index.html","f3ddcc7837933c476135ff5a3ce9fe90"],["/categories/生活趣闻/index.html","f75977c1f489595c88460956305022c1"],["/categories/随想/index.html","a5224f5551aab6ecc10f72e67f4e9bc1"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/addcss.css","59cae1ddbe6925c34f846ffe12d19921"],["/css/background.css","32d5acccbb94f987faf37cfdc3fd06df"],["/css/calendar.css","0090a32d2a61d42c5bfed254bfba078c"],["/css/clock - 副本.css","65602c2385c7eab42ee3804cd6ee0a5a"],["/css/clock.css","9db53e3bffb704c740aa83bddaf8b999"],["/css/cursor.css","c1a23e168c5b794ff367eb0ae77eb26b"],["/css/danmu.css","2a5b914a9592bcd353425c6d5fa7af8e"],["/css/index.css","e0ecbfc6d569c15e3c74302c0114ce1f"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/loadingline.css","bc1ee020a6a11fea17b915b97e6978bf"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/html/calendar.html","bddcec1edba7f4c49fe5cd75f8cdf5b2"],["/html/shiyan.html","13e9f465504bfc81dd3931c1e982e611"],["/html/shiyan2.html","8faa2c06bba34ef43ab0ca569befdcbd"],["/icon.png","8ec68de45d18642ba9baf2447e62f476"],["/images/AMJ1.png","d27a6725d1aaaf5324248da4312ab6c2"],["/images/AMJ2.png","00e22eba5901e5bd674e42228cd5bd26"],["/images/AMJ3.png","c8c9ea6348dfcad3a641899d5b587431"],["/images/FOTO1.jpg","4b6f100861908e2c7044cffbdb4a0c1a"],["/images/MVVM.png","ea5a002ee2f85c71a0db51d5adb5de19"],["/images/UT.jpg","367f4e432f9db55a92b2a290c4b0a476"],["/images/UX.png","a183974e958d41d1b6acec70bb7ea00a"],["/images/WindowsTerminal.png","8ac29cb56b8a1768cf7de071e9f1ae6f"],["/images/air-w.png","c1cc32f9d3e17551ca11a7d18a0b533a"],["/images/anzhuang.jpg","912b2489957f8344406edc5e5cebe5fa"],["/images/api-setting.png","2c0bb074390779721cba009e96c5417c"],["/images/apikey.png","1f31121b190eb1f990bcc3e27524bc03"],["/images/backpic1.jpg","86a6fa88167feb338fbf1a4e9057114b"],["/images/calendar.png","86319b08b93be7c8bc47cdba7a169563"],["/images/clock2.0.png","0a0f122c7a25262fc02ee99df0ef21eb"],["/images/clock3.0.png","8e04375c183c637b65fb50ed40f46466"],["/images/example.png","aaac9983e5d59f919bf282dcff2edb3c"],["/images/foto17.png","28db4c6608ad1ee6b34238cafab25e5e"],["/images/foto2.jpg","be95b922512d004a61f83c97af3e2602"],["/images/foto2.png","0dc07d4e1b00526a273a89dc8b81548d"],["/images/foto3.jpg","551c0616c92c4ee7cc17dd458b3c46e9"],["/images/foto4.jpg","9d1d9fea759a41afc0061866e400339a"],["/images/foto5.jpg","984f618b15372f37d54f507e6f379f10"],["/images/foto9.jpg","b683fc0b998e80ff8f5a3e45e889807c"],["/images/girlpic.png","ff1e8427ed555af639e6d849f8f648f1"],["/images/girlpic1.png","698e5570e821c3cae643cc9777c2292e"],["/images/girlpic4.png","551882e4b9b6afb79000fd34c0dbf5e5"],["/images/headimage.png","332502f36a0297b30cb7969fe6de8451"],["/images/hexo.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/hexoWT.png","c027cc9f5665c7d7ba657e7a4bb40017"],["/images/his-json.png","7d8a71e38ab684107446e5c72c31854e"],["/images/history.gif","0459a3dcf2317253de0b34482880c63c"],["/images/homework1.png","e8d2f64d0785519ea7779016208a2900"],["/images/idea.jpg","5eb08bf6c965588f03c8860f201cac45"],["/images/key1.png","f2a370e02ad6c5a101db20b47a9a0008"],["/images/key2.png","21dc40bbe0377cd9fe85a9cb431c18f0"],["/images/life-cycle.png","02f39ea5c041d45938fda4b50f234cb7"],["/images/life.jpg","74d2d9c5f48ec59e3badeec690941812"],["/images/listen.jpg","9d4f73cd5634f43deaed4f9aca03f9a3"],["/images/loading.gif","ffa0804a5d99e2d5b39e05cda6d6b28b"],["/images/magnet.png","4899a924f3de0d19dbe0415128c07d65"],["/images/magnet1.png","8d010eb86ca943e036adaa7de57aee7d"],["/images/magnet2.png","293cb414a8ab93b43bde3bebf9cf0cfc"],["/images/magnet3.png","1923148630e2e094ff80bf35aa604c10"],["/images/magnet4.png","9bb4f963ac1c09f02d62525f513f492c"],["/images/meilu/1.jpg","cd67abcc3f543b5c66adc4f9d9c5c628"],["/images/meilu/10.jpg","ac9fb2711e477b5db1c3acb57e899045"],["/images/meilu/11.jpg","364caad6dfc356a3dc630fa067e48e88"],["/images/meilu/12.jpg","274767e5708f79934e5bdbf73eda8f0d"],["/images/meilu/13.jpg","dcab12b84454770b208913db63e825ac"],["/images/meilu/14.jpg","037cdd048284e621f27e17a2c59e8ea7"],["/images/meilu/2.jpg","f6cdb65ae3fad4523b32f5ee38696b60"],["/images/meilu/3.jpg","9e5df3612c2d93bf57313186c954aea5"],["/images/meilu/4.jpg","69ef2d6f4bcd79cf4b4e672b60c6751e"],["/images/meilu/5.jpg","ce81ca16def7613b7ebb368fb554f14f"],["/images/meilu/6.jpg","cafd5b62305f806754a75cc3af8c3b77"],["/images/meilu/7.jpg","b8ae865d386e1e713a6034da6b090c10"],["/images/meilu/8.jpg","afad7a7bf1066c817a8d2e7566bc780d"],["/images/meilu/9.jpg","72f9649f56b564eacf23ce3dacb88029"],["/images/metroui.jpg","5503bfffd450d9ab572b67ea00941571"],["/images/metroui/1.png","79a03b408c19c74eeaa8ff6e17a03f9d"],["/images/metroui/10.png","8309fed71a15c78f2dfa3af1ff75a5f3"],["/images/metroui/11.png","aaf1a007cbae12f93cc2688bace18d28"],["/images/metroui/12.png","0758ea282c3828c47e5c64520ff85783"],["/images/metroui/13.png","12ca7b511927cd4b26e97f3b20908a32"],["/images/metroui/14.png","f44ba7680f7b36df437e2ae2588d0565"],["/images/metroui/15.png","e8927c78b125b805af7aa86fee815ab6"],["/images/metroui/2.png","e604d3c662b996f06f22753ba9ab379f"],["/images/metroui/3.png","664e3b7490f2f95d5547b8ba79a65456"],["/images/metroui/4.png","c0f255344cafc303a1d9c7404da37149"],["/images/metroui/5.png","da2074cdb1298aca826abc1a5c441300"],["/images/metroui/6.png","efef2f087127614b4e03bcbe9a347018"],["/images/metroui/7.png","a4d34b1a2dbe3a58d3a92276880be039"],["/images/metroui/8.png","1d34a626bbaa898a60d4501936bcf962"],["/images/metroui/9.png","0663697c1667b377fe2623bd65e00b31"],["/images/metrouilogo.png","aea81b42d1c2c96440f74cf56ad82e2f"],["/images/nhkimage/2020.08.01.png","af4c55b2ae1d5ab2f56c75a87fcdfdb3"],["/images/nhkimage/2020.08.02.png","c355d41b90f5c65823f96c5f6868ce53"],["/images/nhkimage/2020.08.03.png","fddcedb40d7f28b2ccb90814351ad5c8"],["/images/nhkimage/2020.08.04.png","8b4518ec5a8513f442980ed7167136b1"],["/images/nhkimage/2020.08.05.png","590abfb19334b0c3cee5a005674f2253"],["/images/nhkimage/2020.08.06.png","d469e21100c42435e88f2bdf07f93da1"],["/images/nhkimage/2020.08.07.png","3ca9e2c8b8a09a38423d73cd36e8de9d"],["/images/nhkimage/2020.08.08.png","4420c2d899fe4eb90c48bae0da8418a2"],["/images/nhkimage/2020.08.09.png","df14be338f9c920818dd1daa6aa955ee"],["/images/nhkimage/2020.08.10.png","c4e2ed023cd3dbfd4986add35ca9357c"],["/images/nhkimage/2020.08.11.png","cf562339e57f673d394f3e6cdd1f60cb"],["/images/nhkimage/2020.08.12.png","81dfa179fea3052ddcf73912ea368f67"],["/images/nhkimage/2020.08.13.png","8cf26c2642e7a27cbd86fcbda8bae8d9"],["/images/nhkimage/2020.08.14.png","d88eeb678b3ed3651d597e61957e264a"],["/images/nhkimage/2020.08.15.png","b9879f193867edcffeefce62c9dc7153"],["/images/nhkimage/2020.08.16.png","46cb914aa1d556561897767ec9ff66a0"],["/images/nhkimage/2020.08.17.png","ea1af9645b5cc9cbaafe70a91dd15cca"],["/images/nhkimage/2020.08.18.png","e87e4de39a6f06cf4283a63af92dd8de"],["/images/nhkimage/2020.08.19.png","8001a951513b542a98ce1151be5bd87b"],["/images/nhkimage/2020.08.20.png","4bc8fafa3ecce30d340b1350715d78e3"],["/images/nhkimage/2020.08.21.png","07ad1337e127922abff27da6c672549b"],["/images/nhkimage/2020.08.22.png","b2b5d53ba46015f64048f9d803b12179"],["/images/nhkimage/2020.08.23.png","225af8c0cabe5218ec634d1b8815fd95"],["/images/nhkimage/2020.08.24.png","1d54a484a6e2395aabe9be005cd90361"],["/images/nhkimage/2020.08.25.png","8008ba169cfce0ef2041329cd29b6b77"],["/images/nhkimage/2020.08.26.png","72a2b8094003a54c97a34ea97cf21bc3"],["/images/nhkimage/2020.08.27.png","893407e604804d215c8fef8bcd5f2684"],["/images/nhkimage/2020.08.28.png","b542280b7341759890a99cbd44d822c5"],["/images/nhkimage/2020.08.29.png","620e2e7d4772e39615fd1a88cdf49717"],["/images/nhkimage/2020.08.30.png","f645d7ba2dcb506f9ec6fb9244425ad7"],["/images/nhkimage/2020.09.03.png","c5262f3aa87190e0273383ea1e445681"],["/images/nhkimage/2020.09.04.png","c07149c32aa41c03bc7dac82a713f6b2"],["/images/nhkimage/2020.09.05.png","4e43556e1cb3b7f4d75f0f6127616a54"],["/images/nhkimage/2020.09.06.png","1021d2ae04a7f109404f857a2a7629cf"],["/images/nhkimage/2020.09.07.png","db9827e9f0a4cf1401b559b4644a0204"],["/images/nhkimage/2020.09.08.png","efe1030b73dc1c01f169c3122a194426"],["/images/nhkimage/2020.09.09.png","f6ba3a1c6cdeff88404ebe2a646f2eb5"],["/images/nhkimage/2020.09.10.png","3471b05d02113517359a9e2167befcfa"],["/images/nhkimage/2020.09.11.png","921a541a8bffb1aa436df2eb6db7c99f"],["/images/nhkimage/2020.09.12.png","a51f8ebaddba69bb80f9259a30f17e65"],["/images/nhkimage/2020.09.13.png","0399889200493cd2154ffc407e2bc400"],["/images/nhkimage/2020.09.14.png","eaaf3da69a39ed316b7fc8c4d409bb0f"],["/images/nhkimage/2020.09.15.png","5774959ea4061c9298ea174f0862cc3a"],["/images/nhkimage/2020.09.16.png","0c5a00f74020740fda589c02e4b3f917"],["/images/nhkimage/2020.09.17.png","b5aef734e3a7db4862ca3fe4e6769dc2"],["/images/nhkimage/2020.09.24.png","5982a7b3843f4ae43b2b4bc4b0c577d6"],["/images/nhkimage/2020.09.26.jpg","c6415af781fbdd36fdb034f74646129b"],["/images/nhkimage/2020.09.27.png","27aa6f6a8d5534ccd99cff261dcd9eb6"],["/images/nhkimage/2020.09.28.png","0f4318d1ff17a33de364432a1c44b5ad"],["/images/nhkimage/2020.10.09.png","6408d9f7e66fdeba8b9207939a08cf8d"],["/images/notop.png","d25c272e5ce312a880e04ce8a0b27683"],["/images/pasted-0.png","552608d8f6e39369aa30c6e332a32826"],["/images/pasted-1.png","baafdacee93c99e99418aaedbf524fda"],["/images/pasted-10.jpg","395cff6f64ab5df19baa3572ac98e541"],["/images/pasted-11.jpg","56e5df07c96634638abf7995b25c81ab"],["/images/pasted-12.jpg","61b3f803b85ce3640d7a9ba7efb9da6b"],["/images/pasted-2.png","2f410e53c811f92a6135f48857776f5e"],["/images/pasted-3.jpg","bb5717e691e87355e7d63a5f3a87ae62"],["/images/pasted-4.jpg","10041d0e3567b24b81222ec5075d6492"],["/images/pasted-5.jpg","ac5047a4b48c6cdaee86fa1863e33904"],["/images/pasted-6.jpg","1556ae8d3ad5713d60237ee4d10e81f0"],["/images/pasted-7.jpg","913fde1686587646ddc663bd810cc81d"],["/images/pasted-8.jpg","fc83268081fb4b6b6ecb1ffa1ec5af7f"],["/images/pasted-9.jpg","25e0fa3496591501f5c29d0b802b77d2"],["/images/pet.png","2b8c121909497e57057478856fe48a94"],["/images/pet2.png","dfb1d6a17b527ccc0c600e6ad31f55e5"],["/images/ps1.png","0917ba91f21b6944dc08d35c41a326d2"],["/images/psb.jpg","6a27c58337875c776af0a7667598b401"],["/images/quse.png","7cd1ec12b804305430cb4cdc09c7a893"],["/images/rain.jpg","9c26acc44c692b6a63e134be07b07c18"],["/images/shezhi.png","281bf545f6a4024e2d0b7120bc398a21"],["/images/soul.jpg","d97b4099c0728ff6123d006fa62db86e"],["/images/study.jpg","a9b1cf95ee6bd9f3913e8ec6a6a6f44f"],["/images/tianqizhizi.jpg","dd48d78b4eeaaa52578352f9ef570b14"],["/images/vue.png","cf23526f451784ff137f161b8fe18d5a"],["/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/images/work.png","e521cf5b834292fde1c50e0a0f5802f9"],["/images/xiaoguoyanshi.png","994a3b710d36df0a4630cd9a768c7f7b"],["/images/xiaoguozhanshi-m.png","1fefca18214fc4889d1bb76b81887c9d"],["/images/zfe.one.png","b41f689341882058ffb28c4cee499bde"],["/images/幻想终结之日.png","0025c4d3973bdfedb80db3f78c59fa47"],["/images/时空战纪——游戏建议及意见①.jpg","1337457f14a8dffee66d94f8915b54ff"],["/images/简历.png","d70507ee4615c9e324578c0d777e6855"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favicon2.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","a626310613855103ebd0ff5650be5532"],["/js/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/APlayer.min.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/airvisual.js","71cf86bfd452ca01d92438d8266416ee"],["/js/airvisualapi.js","6931bebe1696688d109963187fc2eace"],["/js/background.js","94c8410b174f58594cf81ec99054968b"],["/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/js/calendar.js","a58e02711cc6dec4dc04257e555b8923"],["/js/clock - 副本.js","405186e7a9d73221d2d50c0dea2852d0"],["/js/clock.js","2fdceb94cc57b551cd245b0001927b66"],["/js/color.js","3730bb4f7b185e6f5130ac28bace968b"],["/js/danmu.js","6b6ae6b7f1b42dd4857541f43b2bb733"],["/js/echarts.js","dc1227b1eba1ba47fd185a387d0a7d37"],["/js/gitcalendar.js","fadfa8a42272cd322118653dca512a7a"],["/js/history.js","20459f7db325e597e64903f4c0d19306"],["/js/historyroll.js","a3e9ac376106816c50a61f9f4306d671"],["/js/jam.js","462c07d3b2e0f20394d994bbcfae37cb"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","455fface5a0a3ff90766ca254affe502"],["/js/rain.js","f656dc28e4ab5c3f8414d35f683278c1"],["/js/rainremove.js","ceacf82842b101f7e54a2aaf5f4bb9cb"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/link/index.html","b4611143f87c2a1e721c9b48158f1165"],["/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","632810ff53887f96b292d4511bf9ec2e"],["/page/10/index.html","7de83a81fc19d2a64f0568e03dbda173"],["/page/11/index.html","d1dbb8599f72656e2f344d60f66fd3fd"],["/page/12/index.html","7ce66ca6c783023e1b0262f466093a98"],["/page/2/index.html","29bdcb83e1cb0c7442cc20eac86553b1"],["/page/3/index.html","f78f19b60c0a838520213f6fcd2858c1"],["/page/4/index.html","d66d5b80801d7ee24996115aa283ea35"],["/page/5/index.html","41ab890d4215c9d5c04f5140946b92e0"],["/page/6/index.html","b14cc0991fbd2de2cc9bba6ef6cd4fd5"],["/page/7/index.html","65eaa279ea692364bb9494447791ee26"],["/page/8/index.html","200077a853b0319ef0ae88b629155ed0"],["/page/9/index.html","8f79fed8b9a5f9feba3e8df744946087"],["/research/index.html","7a3cc413bb286bcb1cb00970dfdcb600"],["/sw-register.js","c67367117ebd69a49f6acd9ae3971d90"],["/tags/Butterfly主题/index.html","9e0eb445bf3ddcddd19e2a824489af5e"],["/tags/DIY/index.html","e1136f9e28afe091bc3fb9a6fc15f345"],["/tags/DIY/page/2/index.html","806f6d3d2fbcf57a082065c48b17a2a4"],["/tags/ICT/index.html","a5c69e9e793c4e68bca8ed45aaa8552f"],["/tags/NHK听力练习/index.html","772330d5d8f8d4dab54c170f9dc4b186"],["/tags/NHK听力练习/page/2/index.html","e82c6ed77a7d9f0f5272c4c21ff29326"],["/tags/NHK听力练习/page/3/index.html","f416ead9f5e6abad0ef072ab4381bb26"],["/tags/NHK听力练习/page/4/index.html","c373b2b1242cfbf76514ad3b2d0d603b"],["/tags/NHK听力练习/page/5/index.html","19f1f713ce0e60bb55d2e85a523aeca9"],["/tags/NHK听力练习/page/6/index.html","3d99edeff7aefd7176c9ad3d36b218cd"],["/tags/metro-ui/index.html","c1445d4b10f95f0233c411811ae31f90"],["/tags/vuejs/index.html","72fb062ded9bbe87b87c9bc1f5736066"],["/tags/お盆/index.html","569b80bd0a3cfce284994678038d85c2"],["/tags/世論調査/index.html","8a9c120910daa6c7d379a8c4335f0a0c"],["/tags/作品集/index.html","267dfbeb2729e4fc73d52638bf7ac00c"],["/tags/作品集/page/2/index.html","06396834ee5ddcb3a357c2deec57032f"],["/tags/农业/index.html","0881bfe6011c4b382b1013ce4c195580"],["/tags/历史/index.html","d9de434b22d3a6f2e11dbb22abf61c3f"],["/tags/営業時間/index.html","52425da8ad3afb2f2b5206c4adee185a"],["/tags/国外政事/index.html","82019f838f3f7c7ab74bf4f61ddb8cdc"],["/tags/地震/index.html","88974ddff21baa5af9226d95314c449e"],["/tags/外国政事/index.html","bd798d51221b302e57007b12c78f11a5"],["/tags/天气/index.html","e783989118ddb8377061aa9aa75fbcbc"],["/tags/天气/page/2/index.html","45257f8b75a4f9efeb3c06bf8c3acf05"],["/tags/奥运会/index.html","4f638f76197964ba3889e605976f91bc"],["/tags/学习/index.html","32ec094fdc7eb8e2a2ad2121b5f35467"],["/tags/学习/page/2/index.html","6adf30da00d6a80d5a47b4b02ed777b4"],["/tags/学习/page/3/index.html","80b8e28b70dd0e2c118fcf6cb3fdc480"],["/tags/就业/index.html","1933dddd0b61293b299c9c11d2ab3505"],["/tags/庐山/index.html","7a389e4314dc3565811af13a5c848396"],["/tags/座礁/index.html","5f8c481f8688d4f76d468da9fdb7b018"],["/tags/政府/index.html","f3e1c742f9342f9997fc4bf6413bda16"],["/tags/政治/index.html","490faf275228a059671bd305923294e7"],["/tags/教程/index.html","27126ecd539d98c23ad6e55140514f1e"],["/tags/教程/page/2/index.html","fefd1f1573e46faf4d3ea2c1f52cef39"],["/tags/日本教育/index.html","21eb488d202e5f295a3cd73a40a7887a"],["/tags/民生/index.html","4f0e5342c7927f234fe055101a6b2646"],["/tags/民生/page/2/index.html","d01680cb78844bda39b46bc508869bee"],["/tags/游戏评测/index.html","a7a09c6ad1846c007d6ea4003fc52216"],["/tags/游记/index.html","089960f7aa12ba978e4da7afb45b1093"],["/tags/生活趣闻/index.html","33e7ff298fad0d38a1e092ed6fe48031"],["/tags/科技/index.html","ad1d7d7dbd4557de54a4fabb502eca24"],["/tags/经济/index.html","ed1ea698b0487a6c6c0c720cf28c4c00"],["/tags/经济/page/2/index.html","1feb5a51e37beff0101cb1cd0b106649"],["/tags/网络教学/index.html","191513208163e51e43ec519721b8fa88"],["/tags/舆论/index.html","e560b54f5fc3ffb6ffd043f7b0fc8cd8"],["/tags/虚拟现实/index.html","cd2bbc3ff5a4e5a5de21bc0a6c7a6660"],["/tags/随想/index.html","30a25d3ba98dca9bc0b6bcb3e64da6ab"],["/tags/障害者/index.html","dd780a5e51a3ba3764e5ae3ba0bc9ec1"]];
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
