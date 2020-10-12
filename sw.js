/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/05/20/2015-05-20/index.html","fa1b110413ee1265d10b4b42257b2dde"],["/2015/06/16/2015-06-16/index.html","f98703fc2c7d709dfec41e6dbb1ec79b"],["/2015/12/12/2015-12-12/index.html","5ec6cb98b5d9ec56c9b1fd3605c0c189"],["/2016/06/08/2016-06-08/index.html","bfb17ff60e2f360ad294c72becc22d59"],["/2016/12/18/2016-12-18/index.html","3994984f875f579928373a1e78a0a1eb"],["/2017/02/17/2017-02-17/index.html","c47863f7009ab2433dcce49794f2fd00"],["/2017/03/17/2017-03-17/index.html","44bfec10ea333bdc8b71303fb7e8aa78"],["/2017/04/06/2017-04-06/index.html","c98ac87beb9f66630cacc5c11d13b8bd"],["/2017/05/17/2017-05-17/index.html","24cb13f8f6259768cd53cd5516ca9f66"],["/2017/08/15/2017-08-15/index.html","98d710f6a9baca3b90d7fe722832850b"],["/2017/09/16/2017-09-16-1/index.html","f36f61d3b28b097bab59454b59b64e60"],["/2017/09/16/2017-09-16/index.html","12e7c4820e4b90b35f60d5b52e41ee45"],["/2017/09/21/2017-09-21/index.html","b8fdab4a6f3d162718112f42877fb92d"],["/2017/09/23/2017-09-23/index.html","72ea34f8b4728306caea810c5a1a1911"],["/2017/09/26/2017-09-26/index.html","835ff866579ffe6f4c148be2f0f0f67a"],["/2017/09/27/2017-09-27/index.html","b3c7699f631bf3f6ed74483adec36a90"],["/2017/10/04/2017-10-04/index.html","670bc1ecf2a98fe36b7b53607e6b2226"],["/2017/10/08/2017-10-08/index.html","4eddfea961d7aa696ab5f4f18c4f31ba"],["/2017/10/09/2017-10-09/index.html","18825b7f4c44df6efcb977db83d60ff7"],["/2017/10/15/2017-10-15/index.html","b4866aaf1eaa75c21bef1a123c87c205"],["/2017/10/19/2017-10-19/index.html","179f036e2a798e36aa757c6fd2716d87"],["/2017/10/23/2017-10-23-2/index.html","7e3aa3fe4d8229f004173dd99084ad9d"],["/2017/10/23/2017-10-23/index.html","87804d79cdd473b60761bcd5619f1727"],["/2017/11/08/2017-11-08/index.html","a1aac5bf07c36855c48d2c68624d2f19"],["/2017/11/12/2017-11-12/index.html","6070a1957b66ecc1d8705e4f7f4c5328"],["/2017/11/15/2017-11-15/index.html","400698fbd87a20ffd24266ee17460706"],["/2017/11/27/2017-11-27/index.html","c743fc30d65baa4902e60a9369c98f87"],["/2017/12/06/2017-12-06/index.html","ed52d5aa263c52c832beef439772d086"],["/2018/02/12/2018-02-12/index.html","d6e7765a3cd5f5d4f2aad50aa43272ef"],["/2018/03/26/2018-03-26/index.html","332b70caf8b042dbfa2706bad861bb35"],["/2018/04/02/2018-04-02/index.html","c7420c7c88e5df642fb2e441fcb0ed35"],["/2018/04/24/2018-04-24/index.html","36af4f010e6ed9740ce8f8dee99dfd5c"],["/2018/05/18/2018-05-18/index.html","805b6a364ae76b1a6f35dd0ab6732a98"],["/2018/05/23/2018-05-23/index.html","752dbcc6c6717061f4668a52c62b8959"],["/2018/06/08/2018-06-08/index.html","f099d24586d0695a96273c1126ca8742"],["/2018/07/01/2018-07-01/index.html","52ebd3be70c2e2b80b8e254195d06ede"],["/2018/08/30/2018-08-30/index.html","070670d5324de87fa76deee4963d892e"],["/2020/07/20/2020-07-20/index.html","7560743cd4d9e9b3ae4ef818306386fa"],["/2020/08/01/2020-08-01/index.html","3559b25128d5f8c01edc5e661ae84a73"],["/2020/08/02/2020-08-02/index.html","5e1545583541b512ea1571b0abf6adb1"],["/2020/08/03/2020-08-03/index.html","a190272660bc9e70a271603ce0b67661"],["/2020/08/04/2020-08-04-1/index.html","ed8ec8f6bc862f80d7179912050cb90d"],["/2020/08/04/2020-08-04-2/index.html","2b784b7c6fdbabe3dadeaca61ed9ad83"],["/2020/08/05/2020-08-05/index.html","6d811c7ce3c9150aef3d33bbe763e5a2"],["/2020/08/06/2020-08-06/index.html","c51b9f585b40c827931f77acbb6aec52"],["/2020/08/07/2020-08-07/index.html","9ed2e21af842be9026469aa3db03201d"],["/2020/08/08/2020-08-08/index.html","00b1932fdd7a0b5f19370678bfa552a0"],["/2020/08/09/2020-08-09/index.html","e056f4270a71c078b22e0212341ae431"],["/2020/08/10/2020-08-10/index.html","4c6cfca4112c3c22f0b27bde6a0acb73"],["/2020/08/11/2020-08-11/index.html","6b9878284e04168cd6592d9553424926"],["/2020/08/12/2020-08-12/index.html","7156bb311d891ee835bd8996890ce2f3"],["/2020/08/13/2020-08-13/index.html","f5ed8a47bc8b33213bc4c9a0c327c406"],["/2020/08/14/2020-08-14-1/index.html","00cd954e049882d8b1e5278911777ba1"],["/2020/08/14/2020-08-14-2/index.html","e7b2e2c7a87b46b28d78c5387bb75cde"],["/2020/08/15/2020-08-15/index.html","9146144263feffd6e3dfb185423e1ade"],["/2020/08/16/2020-08-16-1/index.html","8b820474299338120de3f276fc9f9ac8"],["/2020/08/16/2020-08-16-2/index.html","5e71f6669c841c38af9d3c03fc933550"],["/2020/08/17/2020-08-17/index.html","97417d282809358f792474b0612894a9"],["/2020/08/18/2020-08-18/index.html","0c6abf317ad994d1e96e9b9f5d38131d"],["/2020/08/19/2020-08-19-1/index.html","ca16ed35a7ad063e8305a3276ad031d1"],["/2020/08/19/2020-08-19-2/index.html","344431dbf71ad36c00fdf8edec7423d6"],["/2020/08/20/2020-08-20/index.html","13c7107c494edf83df8e1c45a6047a5f"],["/2020/08/21/2020-08-21/index.html","d7f24585824d8ffd6e5527ef292aac9c"],["/2020/08/22/2020-08-22/index.html","7c275fb047caf54a165729ac3c45239f"],["/2020/08/23/2020-08-23-1/index.html","6ae634fdd70b12456116c4f552290c39"],["/2020/08/23/2020-08-23-2/index.html","ddb45dbf2e2cb6fe204089cafe065055"],["/2020/08/24/2020-08-24-1/index.html","250a4a902fefda75282d588e94b87003"],["/2020/08/24/2020-08-24-2/index.html","2ecff32c12db9700fc13b74c1a506deb"],["/2020/08/25/2020-08-25-1/index.html","fb467997e20b1966f541890e61ee7c3f"],["/2020/08/25/2020-08-25-2/index.html","8d162453af9fb229926e0edcdc48fe0a"],["/2020/08/26/2020-08-26/index.html","8307f4bdd66295f2d83b7730262528b5"],["/2020/08/27/2020-08-27/index.html","795aa98678335abb88bd244192110a86"],["/2020/08/28/2020-08-28/index.html","b4b4c083c5d13f5aad102a6a6e9fe2a4"],["/2020/08/29/2020-08-29/index.html","652e055fcae86e4121e6d3e306dead33"],["/2020/08/30/2020-08-30/index.html","5cb532080eaed40cb94568d233739a44"],["/2020/08/31/2020-08-31-1/index.html","95c6dc0b9267824c757a35cda926f050"],["/2020/08/31/2020-08-31-2/index.html","a688170ac8e938a2dda4ea88bd4592cc"],["/2020/09/01/2020-09-01-1/index.html","0f4b7811f02f38cca75f65751c837b34"],["/2020/09/01/2020-09-01-2/index.html","d7e6ed89009c3918ba3216add647e133"],["/2020/09/02/2020-09-02-1/index.html","c4245c05426f33f7c1818216fbb12591"],["/2020/09/02/2020-09-02-2/index.html","23b4735a5cec1320b650cd3d466795c6"],["/2020/09/03/2020-09-03-1/index.html","1158e7f03b83e70dd87222a9b5ace3d0"],["/2020/09/03/2020-09-03-2/index.html","92f6b6c84b0d5eecb0e7ea2ae6a852c4"],["/2020/09/04/2020-09-04-1/index.html","8b1a4de60a82b317cf518d565cd60160"],["/2020/09/05/2020-09-05-1/index.html","424133bea5e1b5430b635dcb10147d7a"],["/2020/09/06/2020-09-06-1/index.html","f15da34174e7c4bb39a7a16e9ff68756"],["/2020/09/07/2020-09-07/index.html","a020988dba2678d619793c17bf418e59"],["/2020/09/08/2020-09-08-1/index.html","bd152e400cebee0f38eb86823ae7778c"],["/2020/09/08/2020-09-08-2/index.html","8527730dacceabac8455e25a0d6fd91b"],["/2020/09/09/2020-09-09/index.html","13e5a6a62c517d00ed25e20a25016b0c"],["/2020/09/10/2020-09-10/index.html","85961a2852915b16496fc96f93c6502e"],["/2020/09/11/2020-09-11/index.html","429f45287cf332770d2af6f8e7feadde"],["/2020/09/12/2020-09-12/index.html","1238cf24e59d26a143f2d98eed98658c"],["/2020/09/13/2020-09-13/index.html","bbc941589fcd0b8b4aebc3c501e6029e"],["/2020/09/14/2020-09-14/index.html","88866b9fe1eaf83c4a6010a22545be10"],["/2020/09/15/2020-09-15/index.html","0cde8bff6663333fbbe44399ea2d8106"],["/2020/09/16/2020-09-16/index.html","270552d6a48ca164f36ff85f0aa2a6a9"],["/2020/09/17/2020-09-17/index.html","3c0c46a8f1aa79891f4085e1fff48d52"],["/2020/09/19/2020-09-19/index.html","23cbb881ed81840e34651661be926117"],["/2020/09/23/2020-09-23/index.html","124d9bdf4c1f874c28d92f072278680f"],["/2020/09/24/2020-09-24/index.html","31b23cb8a4d338fdb159c4dc37e04380"],["/2020/09/26/2020-09-26/index.html","2477ac8a42d1845d274a4f48c4f93462"],["/2020/09/27/2020-09-27/index.html","51ade89578c678901dc2c875d33add8c"],["/2020/09/28/2020-09-28-2/index.html","067d1e059e57700dc5734d21d2297bee"],["/2020/09/28/2020-09-28/index.html","0f0fb7c5690197bcd173900a7d743555"],["/2020/09/29/2020-09-29/index.html","ab44f4d8622e2395946412eb5d9a6ce7"],["/2020/10/03/2020-10-03/index.html","ece33067fb230c5d1352fe13dc1fa118"],["/2020/10/04/2020-10-04/index.html","1bc7637d322ba5df7d82d213812c7ca8"],["/2020/10/09/2020-10-09/index.html","46e01b74aee8295f39e3df4dc96b8e5e"],["/2020/10/10/2020-10-10/index.html","452d9f1423b727a3a4aa8a635ac8135a"],["/2020/10/11/2020-10-11/index.html","517c5c59ecd3bd1e606891457dcdc4de"],["/2020/10/12/2020-10-12/index.html","84f65c6977eeafc805c909fe0b2d4702"],["/airplayervisual/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/airplayervisual/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/airplayervisual/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/airplayervisual/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/airplayervisual/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/airplayervisual/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/airplayervisual/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/airplayervisual/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/airplayervisual/index.html","0022a9ca0104af3bb74ffac45a08f99b"],["/airplayervisual/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/airplayervisual/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/airplayervisual/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/airplayervisual/js/jamsetting.js","7927507e0080ddf55c6d8b5f526bd942"],["/airplayervisual/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/airplayervisual/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/airplayervisual/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/archives/2015/05/index.html","f7ed2f0b7d73e3508fab49eee4f84b0f"],["/archives/2015/06/index.html","4126bc58a1a08121e15c03cfc0b0ca81"],["/archives/2015/12/index.html","e8828ded05cc2914a813c8285f7c9e36"],["/archives/2015/index.html","137f385e83f7ad8ad6da6d5fa43f12d0"],["/archives/2016/06/index.html","4ebade000041791b6a516d7c93a13b62"],["/archives/2016/12/index.html","068abd6a13162c20e963456dd1ab795d"],["/archives/2016/index.html","c7f61fa4bde268b317966d88ab7592d0"],["/archives/2017/02/index.html","7c36a26cc4b09600c848b59ba8e52e3e"],["/archives/2017/03/index.html","384795c556ed651efe8d91e380f55590"],["/archives/2017/04/index.html","f2458efbda94f82af73ba04ac8ecbcbd"],["/archives/2017/05/index.html","b682b5910d42c60f7c69faf5133c8870"],["/archives/2017/08/index.html","68b7ce256ee4360fa4bee5c9a1c11ba3"],["/archives/2017/09/index.html","83cad22ba96486e164e791d64b3e4e49"],["/archives/2017/10/index.html","26d2c9c2f8bf713ffb7eee3156c05761"],["/archives/2017/11/index.html","b1b1167251cd08f5b5a3df7b3ed8e4fc"],["/archives/2017/12/index.html","ba856bea0fc8930032a3164f290c051c"],["/archives/2017/index.html","b1f6259dcb6e9cb6ea1de74cdcff3426"],["/archives/2017/page/2/index.html","efdb2039d3a8a46ba3758b1d80be9044"],["/archives/2017/page/3/index.html","8a288a277374ee90cdf0c0edc214a273"],["/archives/2018/02/index.html","e90bd444e6db3bbb04f86af9e5389fb1"],["/archives/2018/03/index.html","311f3eea9c73235fa3c52489093e327b"],["/archives/2018/04/index.html","9fce588919e1e39f7d4aa6b89c954514"],["/archives/2018/05/index.html","acd2ad57b218b3de449e85c1b9daa389"],["/archives/2018/06/index.html","16cbfefa9729bb20ece0cde66a20a3aa"],["/archives/2018/07/index.html","b270ab17f16d4b350201b2cb53d79d81"],["/archives/2018/08/index.html","ad2490e5f3fce88c530a7d2819feeb3b"],["/archives/2018/index.html","429a431eb4d703d35775cc4d116ba80b"],["/archives/2020/07/index.html","af86eaab7775434336de359e343b1387"],["/archives/2020/08/index.html","4d58897a01bd99990d22979bf0b11b10"],["/archives/2020/08/page/2/index.html","449034f741e336dcf3d19ff2ca07aae1"],["/archives/2020/08/page/3/index.html","838a20bba3dc3cead60a06afafc582b4"],["/archives/2020/08/page/4/index.html","311b46ad44c9de5e03a8678ee77ec57f"],["/archives/2020/09/index.html","5500b4e4b1d7321da65e3eabcdbe8657"],["/archives/2020/09/page/2/index.html","d7e11efa31959113157aa43406bc49ca"],["/archives/2020/09/page/3/index.html","05547d84b916df1ef6e0ba167888ec57"],["/archives/2020/10/index.html","3eb0febd872667f6a4557136bb2f4077"],["/archives/2020/index.html","e648ff6575b32a15d8990f7be1c06529"],["/archives/2020/page/2/index.html","dfd968ce59327a1f4cace4f6ad715e90"],["/archives/2020/page/3/index.html","21cf6386a211dbc04335807ddf65ce2e"],["/archives/2020/page/4/index.html","efafebb5e1837a5399d6b11d4e2a9b2f"],["/archives/2020/page/5/index.html","cae5beb147815de3891b72fb3c640dbe"],["/archives/2020/page/6/index.html","548b347ea7c9ca300bea7d61e2fc2c73"],["/archives/2020/page/7/index.html","3b0b16b48af3f749fadb8cf67bbf216f"],["/archives/2020/page/8/index.html","dfd375adbb6be4e90188ebbfe606efb7"],["/archives/index.html","5c82fd79a500e38df046861b00a6905e"],["/archives/page/10/index.html","368640c50cbf1c3855064a45a5007ba1"],["/archives/page/11/index.html","47cae4e011c2b8a5ac7ee07f933f5906"],["/archives/page/12/index.html","867417e947463be722f8ce43f22fe822"],["/archives/page/2/index.html","c0e47171322bf556bc9023d651a5ed4d"],["/archives/page/3/index.html","800d2d4454bc1e42fe4b7f83f1fc850c"],["/archives/page/4/index.html","7f49f18281df5eb7b42ec35ae27a4d06"],["/archives/page/5/index.html","f88a0752b3d442faac1e44ff549d5ad1"],["/archives/page/6/index.html","5d5c3d57bfb5190c69ea8c86424bc380"],["/archives/page/7/index.html","e8e392c65971a12ef3da75cd7d1a3ed5"],["/archives/page/8/index.html","3e85ed746cacb2cc52ece81612e571e4"],["/archives/page/9/index.html","79ecba83981c3c0beddf150153b4dd90"],["/categories/NHK听力练习/index.html","8b4e09a737b94b67fe3a515a6f912c7a"],["/categories/NHK听力练习/page/2/index.html","8581a8de99217f2b1c9543a4f46f2357"],["/categories/NHK听力练习/page/3/index.html","7f398d8a6b2bac9c4f6a40e7ae8690c7"],["/categories/NHK听力练习/page/4/index.html","5aa9d42125acbe1f2ce67c5b4430dcd1"],["/categories/NHK听力练习/page/5/index.html","28faecbec540d5185ade343e5a8e4926"],["/categories/NHK听力练习/page/6/index.html","fd5dcb7429cfa3298d4f0d144a6ac31e"],["/categories/作品集/index.html","3d08b7a3cbbc78396523f8e97381d190"],["/categories/作品集/page/2/index.html","2e9b55532a756a2d0916a687cc59d730"],["/categories/学习/index.html","43a09aac9b34a38796eefd63d163ee5f"],["/categories/学习/page/2/index.html","c8e7485ecf6ccfb3e6eb269f7588d7ce"],["/categories/学习/page/3/index.html","1d3cd37b240f76a33bc4264321416dc2"],["/categories/游戏评测/index.html","33e8e5b167fd3c1fa6fc1737471b9e3d"],["/categories/生活趣闻/index.html","25f5a12630ab055b1c29c04252560334"],["/categories/随想/index.html","41b8d0f83a487d8ac061290747acb9f4"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/addcss.css","59cae1ddbe6925c34f846ffe12d19921"],["/css/background.css","32d5acccbb94f987faf37cfdc3fd06df"],["/css/calendar.css","0090a32d2a61d42c5bfed254bfba078c"],["/css/clock.css","65602c2385c7eab42ee3804cd6ee0a5a"],["/css/cursor.css","c1a23e168c5b794ff367eb0ae77eb26b"],["/css/danmu.css","2a5b914a9592bcd353425c6d5fa7af8e"],["/css/index.css","36eb36d0f5531dd7a8f4c8f925188615"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/loadingline.css","bc1ee020a6a11fea17b915b97e6978bf"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/html/calendar.html","bddcec1edba7f4c49fe5cd75f8cdf5b2"],["/html/shiyan.html","5801a08176a89f435c5e5a150360ff60"],["/html/shiyan2.html","74cf96ba4dae4ce339fbd8d352255ec1"],["/icon.png","8ec68de45d18642ba9baf2447e62f476"],["/images/AMJ1.png","d27a6725d1aaaf5324248da4312ab6c2"],["/images/AMJ2.png","00e22eba5901e5bd674e42228cd5bd26"],["/images/AMJ3.png","c8c9ea6348dfcad3a641899d5b587431"],["/images/FOTO1.jpg","4b6f100861908e2c7044cffbdb4a0c1a"],["/images/MVVM.png","ea5a002ee2f85c71a0db51d5adb5de19"],["/images/UT.jpg","367f4e432f9db55a92b2a290c4b0a476"],["/images/UX.png","a183974e958d41d1b6acec70bb7ea00a"],["/images/WindowsTerminal.png","8ac29cb56b8a1768cf7de071e9f1ae6f"],["/images/air-w.png","c1cc32f9d3e17551ca11a7d18a0b533a"],["/images/anzhuang.jpg","912b2489957f8344406edc5e5cebe5fa"],["/images/api-setting.png","2c0bb074390779721cba009e96c5417c"],["/images/apikey.png","1f31121b190eb1f990bcc3e27524bc03"],["/images/backpic1.jpg","86a6fa88167feb338fbf1a4e9057114b"],["/images/calendar.png","86319b08b93be7c8bc47cdba7a169563"],["/images/clock2.0.png","0a0f122c7a25262fc02ee99df0ef21eb"],["/images/example.png","aaac9983e5d59f919bf282dcff2edb3c"],["/images/foto17.png","28db4c6608ad1ee6b34238cafab25e5e"],["/images/foto2.jpg","be95b922512d004a61f83c97af3e2602"],["/images/foto2.png","0dc07d4e1b00526a273a89dc8b81548d"],["/images/foto3.jpg","551c0616c92c4ee7cc17dd458b3c46e9"],["/images/foto4.jpg","9d1d9fea759a41afc0061866e400339a"],["/images/foto5.jpg","984f618b15372f37d54f507e6f379f10"],["/images/foto9.jpg","b683fc0b998e80ff8f5a3e45e889807c"],["/images/girlpic.png","ff1e8427ed555af639e6d849f8f648f1"],["/images/girlpic1.png","698e5570e821c3cae643cc9777c2292e"],["/images/girlpic4.png","551882e4b9b6afb79000fd34c0dbf5e5"],["/images/headimage.png","332502f36a0297b30cb7969fe6de8451"],["/images/hexo.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/hexoWT.png","c027cc9f5665c7d7ba657e7a4bb40017"],["/images/his-json.png","7d8a71e38ab684107446e5c72c31854e"],["/images/history.gif","0459a3dcf2317253de0b34482880c63c"],["/images/homework1.png","e8d2f64d0785519ea7779016208a2900"],["/images/idea.jpg","5eb08bf6c965588f03c8860f201cac45"],["/images/key1.png","f2a370e02ad6c5a101db20b47a9a0008"],["/images/key2.png","21dc40bbe0377cd9fe85a9cb431c18f0"],["/images/life-cycle.png","02f39ea5c041d45938fda4b50f234cb7"],["/images/life.jpg","74d2d9c5f48ec59e3badeec690941812"],["/images/listen.jpg","9d4f73cd5634f43deaed4f9aca03f9a3"],["/images/magnet.png","4899a924f3de0d19dbe0415128c07d65"],["/images/magnet1.png","8d010eb86ca943e036adaa7de57aee7d"],["/images/magnet2.png","293cb414a8ab93b43bde3bebf9cf0cfc"],["/images/magnet3.png","1923148630e2e094ff80bf35aa604c10"],["/images/magnet4.png","9bb4f963ac1c09f02d62525f513f492c"],["/images/meilu/1.jpg","cd67abcc3f543b5c66adc4f9d9c5c628"],["/images/meilu/10.jpg","ac9fb2711e477b5db1c3acb57e899045"],["/images/meilu/11.jpg","364caad6dfc356a3dc630fa067e48e88"],["/images/meilu/12.jpg","274767e5708f79934e5bdbf73eda8f0d"],["/images/meilu/13.jpg","dcab12b84454770b208913db63e825ac"],["/images/meilu/14.jpg","037cdd048284e621f27e17a2c59e8ea7"],["/images/meilu/2.jpg","f6cdb65ae3fad4523b32f5ee38696b60"],["/images/meilu/3.jpg","9e5df3612c2d93bf57313186c954aea5"],["/images/meilu/4.jpg","69ef2d6f4bcd79cf4b4e672b60c6751e"],["/images/meilu/5.jpg","ce81ca16def7613b7ebb368fb554f14f"],["/images/meilu/6.jpg","cafd5b62305f806754a75cc3af8c3b77"],["/images/meilu/7.jpg","b8ae865d386e1e713a6034da6b090c10"],["/images/meilu/8.jpg","afad7a7bf1066c817a8d2e7566bc780d"],["/images/meilu/9.jpg","72f9649f56b564eacf23ce3dacb88029"],["/images/metroui.jpg","5503bfffd450d9ab572b67ea00941571"],["/images/metroui/1.png","79a03b408c19c74eeaa8ff6e17a03f9d"],["/images/metroui/10.png","8309fed71a15c78f2dfa3af1ff75a5f3"],["/images/metroui/11.png","aaf1a007cbae12f93cc2688bace18d28"],["/images/metroui/12.png","0758ea282c3828c47e5c64520ff85783"],["/images/metroui/13.png","12ca7b511927cd4b26e97f3b20908a32"],["/images/metroui/14.png","f44ba7680f7b36df437e2ae2588d0565"],["/images/metroui/15.png","e8927c78b125b805af7aa86fee815ab6"],["/images/metroui/2.png","e604d3c662b996f06f22753ba9ab379f"],["/images/metroui/3.png","664e3b7490f2f95d5547b8ba79a65456"],["/images/metroui/4.png","c0f255344cafc303a1d9c7404da37149"],["/images/metroui/5.png","da2074cdb1298aca826abc1a5c441300"],["/images/metroui/6.png","efef2f087127614b4e03bcbe9a347018"],["/images/metroui/7.png","a4d34b1a2dbe3a58d3a92276880be039"],["/images/metroui/8.png","1d34a626bbaa898a60d4501936bcf962"],["/images/metroui/9.png","0663697c1667b377fe2623bd65e00b31"],["/images/metrouilogo.png","aea81b42d1c2c96440f74cf56ad82e2f"],["/images/nhkimage/2020.08.01.png","af4c55b2ae1d5ab2f56c75a87fcdfdb3"],["/images/nhkimage/2020.08.02.png","c355d41b90f5c65823f96c5f6868ce53"],["/images/nhkimage/2020.08.03.png","fddcedb40d7f28b2ccb90814351ad5c8"],["/images/nhkimage/2020.08.04.png","8b4518ec5a8513f442980ed7167136b1"],["/images/nhkimage/2020.08.05.png","590abfb19334b0c3cee5a005674f2253"],["/images/nhkimage/2020.08.06.png","d469e21100c42435e88f2bdf07f93da1"],["/images/nhkimage/2020.08.07.png","3ca9e2c8b8a09a38423d73cd36e8de9d"],["/images/nhkimage/2020.08.08.png","4420c2d899fe4eb90c48bae0da8418a2"],["/images/nhkimage/2020.08.09.png","df14be338f9c920818dd1daa6aa955ee"],["/images/nhkimage/2020.08.10.png","c4e2ed023cd3dbfd4986add35ca9357c"],["/images/nhkimage/2020.08.11.png","cf562339e57f673d394f3e6cdd1f60cb"],["/images/nhkimage/2020.08.12.png","81dfa179fea3052ddcf73912ea368f67"],["/images/nhkimage/2020.08.13.png","8cf26c2642e7a27cbd86fcbda8bae8d9"],["/images/nhkimage/2020.08.14.png","d88eeb678b3ed3651d597e61957e264a"],["/images/nhkimage/2020.08.15.png","b9879f193867edcffeefce62c9dc7153"],["/images/nhkimage/2020.08.16.png","46cb914aa1d556561897767ec9ff66a0"],["/images/nhkimage/2020.08.17.png","ea1af9645b5cc9cbaafe70a91dd15cca"],["/images/nhkimage/2020.08.18.png","e87e4de39a6f06cf4283a63af92dd8de"],["/images/nhkimage/2020.08.19.png","8001a951513b542a98ce1151be5bd87b"],["/images/nhkimage/2020.08.20.png","4bc8fafa3ecce30d340b1350715d78e3"],["/images/nhkimage/2020.08.21.png","07ad1337e127922abff27da6c672549b"],["/images/nhkimage/2020.08.22.png","b2b5d53ba46015f64048f9d803b12179"],["/images/nhkimage/2020.08.23.png","225af8c0cabe5218ec634d1b8815fd95"],["/images/nhkimage/2020.08.24.png","1d54a484a6e2395aabe9be005cd90361"],["/images/nhkimage/2020.08.25.png","8008ba169cfce0ef2041329cd29b6b77"],["/images/nhkimage/2020.08.26.png","72a2b8094003a54c97a34ea97cf21bc3"],["/images/nhkimage/2020.08.27.png","893407e604804d215c8fef8bcd5f2684"],["/images/nhkimage/2020.08.28.png","b542280b7341759890a99cbd44d822c5"],["/images/nhkimage/2020.08.29.png","620e2e7d4772e39615fd1a88cdf49717"],["/images/nhkimage/2020.08.30.png","f645d7ba2dcb506f9ec6fb9244425ad7"],["/images/nhkimage/2020.09.03.png","c5262f3aa87190e0273383ea1e445681"],["/images/nhkimage/2020.09.04.png","c07149c32aa41c03bc7dac82a713f6b2"],["/images/nhkimage/2020.09.05.png","4e43556e1cb3b7f4d75f0f6127616a54"],["/images/nhkimage/2020.09.06.png","1021d2ae04a7f109404f857a2a7629cf"],["/images/nhkimage/2020.09.07.png","db9827e9f0a4cf1401b559b4644a0204"],["/images/nhkimage/2020.09.08.png","efe1030b73dc1c01f169c3122a194426"],["/images/nhkimage/2020.09.09.png","f6ba3a1c6cdeff88404ebe2a646f2eb5"],["/images/nhkimage/2020.09.10.png","3471b05d02113517359a9e2167befcfa"],["/images/nhkimage/2020.09.11.png","921a541a8bffb1aa436df2eb6db7c99f"],["/images/nhkimage/2020.09.12.png","a51f8ebaddba69bb80f9259a30f17e65"],["/images/nhkimage/2020.09.13.png","0399889200493cd2154ffc407e2bc400"],["/images/nhkimage/2020.09.14.png","eaaf3da69a39ed316b7fc8c4d409bb0f"],["/images/nhkimage/2020.09.15.png","5774959ea4061c9298ea174f0862cc3a"],["/images/nhkimage/2020.09.16.png","0c5a00f74020740fda589c02e4b3f917"],["/images/nhkimage/2020.09.17.png","b5aef734e3a7db4862ca3fe4e6769dc2"],["/images/nhkimage/2020.09.24.png","5982a7b3843f4ae43b2b4bc4b0c577d6"],["/images/nhkimage/2020.09.26.jpg","c6415af781fbdd36fdb034f74646129b"],["/images/nhkimage/2020.09.27.png","27aa6f6a8d5534ccd99cff261dcd9eb6"],["/images/nhkimage/2020.09.28.png","0f4318d1ff17a33de364432a1c44b5ad"],["/images/nhkimage/2020.10.09.png","6408d9f7e66fdeba8b9207939a08cf8d"],["/images/notop.png","d25c272e5ce312a880e04ce8a0b27683"],["/images/pasted-0.png","552608d8f6e39369aa30c6e332a32826"],["/images/pasted-1.png","baafdacee93c99e99418aaedbf524fda"],["/images/pasted-10.jpg","395cff6f64ab5df19baa3572ac98e541"],["/images/pasted-11.jpg","56e5df07c96634638abf7995b25c81ab"],["/images/pasted-12.jpg","61b3f803b85ce3640d7a9ba7efb9da6b"],["/images/pasted-2.png","2f410e53c811f92a6135f48857776f5e"],["/images/pasted-3.jpg","bb5717e691e87355e7d63a5f3a87ae62"],["/images/pasted-4.jpg","10041d0e3567b24b81222ec5075d6492"],["/images/pasted-5.jpg","ac5047a4b48c6cdaee86fa1863e33904"],["/images/pasted-6.jpg","1556ae8d3ad5713d60237ee4d10e81f0"],["/images/pasted-7.jpg","913fde1686587646ddc663bd810cc81d"],["/images/pasted-8.jpg","fc83268081fb4b6b6ecb1ffa1ec5af7f"],["/images/pasted-9.jpg","25e0fa3496591501f5c29d0b802b77d2"],["/images/pet.png","2b8c121909497e57057478856fe48a94"],["/images/pet2.png","dfb1d6a17b527ccc0c600e6ad31f55e5"],["/images/ps1.png","0917ba91f21b6944dc08d35c41a326d2"],["/images/psb.jpg","6a27c58337875c776af0a7667598b401"],["/images/quse.png","7cd1ec12b804305430cb4cdc09c7a893"],["/images/rain.jpg","9c26acc44c692b6a63e134be07b07c18"],["/images/shezhi.png","281bf545f6a4024e2d0b7120bc398a21"],["/images/soul.jpg","d97b4099c0728ff6123d006fa62db86e"],["/images/study.jpg","a9b1cf95ee6bd9f3913e8ec6a6a6f44f"],["/images/tianqizhizi.jpg","dd48d78b4eeaaa52578352f9ef570b14"],["/images/vue.png","cf23526f451784ff137f161b8fe18d5a"],["/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/images/work.png","e521cf5b834292fde1c50e0a0f5802f9"],["/images/xiaoguoyanshi.png","994a3b710d36df0a4630cd9a768c7f7b"],["/images/xiaoguozhanshi-m.png","1fefca18214fc4889d1bb76b81887c9d"],["/images/zfe.one.png","b41f689341882058ffb28c4cee499bde"],["/images/幻想终结之日.png","0025c4d3973bdfedb80db3f78c59fa47"],["/images/时空战纪——游戏建议及意见①.jpg","1337457f14a8dffee66d94f8915b54ff"],["/images/简历.png","d70507ee4615c9e324578c0d777e6855"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","b2816f18531e7470afc88d9f63c2b52c"],["/img/favicon2.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","74b582472e8981225635e84e921053dd"],["/js/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/APlayer.min.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/airvisual.js","71cf86bfd452ca01d92438d8266416ee"],["/js/airvisualapi.js","6931bebe1696688d109963187fc2eace"],["/js/background.js","94c8410b174f58594cf81ec99054968b"],["/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/js/calendar.js","a58e02711cc6dec4dc04257e555b8923"],["/js/clock.js","ead1a80f7219c166e1180674b7d8c70b"],["/js/color.js","3730bb4f7b185e6f5130ac28bace968b"],["/js/danmu.js","6b6ae6b7f1b42dd4857541f43b2bb733"],["/js/echarts.js","dc1227b1eba1ba47fd185a387d0a7d37"],["/js/gitcalendar.js","fadfa8a42272cd322118653dca512a7a"],["/js/history.js","20459f7db325e597e64903f4c0d19306"],["/js/historyroll.js","a3e9ac376106816c50a61f9f4306d671"],["/js/jam.js","462c07d3b2e0f20394d994bbcfae37cb"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","790cd2f28594f8affbd4a450037c48ff"],["/js/rain.js","f656dc28e4ab5c3f8414d35f683278c1"],["/js/rainremove.js","ceacf82842b101f7e54a2aaf5f4bb9cb"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/link/index.html","fad843ccc93fa254a6c4f34e2c42825f"],["/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","15f0b94160f78f85095ce7a7fc765f00"],["/page/10/index.html","6a570e5cc7482cfc68feec25419f61e0"],["/page/11/index.html","38b52a04dccf753b4d2af9441912be09"],["/page/12/index.html","320b9c97b1e449b3175d07ad79187bd3"],["/page/2/index.html","d3bb66379eb093223676365bbac5f1b8"],["/page/3/index.html","50a4f95d6e6e47669ef88b3183fe9d1a"],["/page/4/index.html","de955b80ce1edc1bf4a0f41c1c142c32"],["/page/5/index.html","70c645fac2fa5f706bf920530361c8f0"],["/page/6/index.html","fce69dec8c9ac86475dee15593647435"],["/page/7/index.html","9c5d5f8060d2c98e9ecfb8b52d9845b1"],["/page/8/index.html","21a1c977b911f1a6b5933e5e66baadcb"],["/page/9/index.html","0f5b0db347a14227f1a9254a55b0c8a0"],["/research/index.html","b43d255d207b4051c6ca402d58da26ee"],["/sw-register.js","1bcec4ffb945337b3250ae2724cefa4b"],["/tags/Butterfly主题/index.html","ee63eb39f13c8b2ec4da231b61c7a7a2"],["/tags/DIY/index.html","ad68c3e7265e8f321796fdcdaa2a3ae2"],["/tags/DIY/page/2/index.html","f1ce02306c35966e1c34cfa04feb546b"],["/tags/ICT/index.html","cb9b512ac8e61265f163a4d4ac0ced3f"],["/tags/NHK听力练习/index.html","9d1e5cd6165f02f7c0d591c098ff313a"],["/tags/NHK听力练习/page/2/index.html","27c243d379f701008afd9d10c3d269e4"],["/tags/NHK听力练习/page/3/index.html","9dbe265173ef1804b27929317f2b763e"],["/tags/NHK听力练习/page/4/index.html","fa4b44ef1c67cff247c7e56e740cb26a"],["/tags/NHK听力练习/page/5/index.html","51a28c89351f0b22f8cef4f19578513a"],["/tags/NHK听力练习/page/6/index.html","5aacf7e16333d87b9a55ef998d2c2908"],["/tags/metro-ui/index.html","1e3aaaf25b53bcdec7c9495a1e82eac7"],["/tags/vuejs/index.html","44ff5f333036c33c77a332d335dbe924"],["/tags/お盆/index.html","645fdcfec933480f78808c8b231c8181"],["/tags/世論調査/index.html","6b5896d6fcc39b4dde9069126ecbe755"],["/tags/作品集/index.html","62f2e514cdb0c20071c6b838b2f94b48"],["/tags/作品集/page/2/index.html","26c7c8186be77a77524537fef55b8b4f"],["/tags/农业/index.html","340dae05a9ada84228b93d4009f8d78e"],["/tags/历史/index.html","512524fbdc9da7fb43da0ad3644af9ec"],["/tags/営業時間/index.html","2c224c78f02c29c3651606a0d39a029c"],["/tags/国外政事/index.html","55c35f70221e2916022dc8829bf69a41"],["/tags/地震/index.html","33ca61c80239348411dcdebc224dea1f"],["/tags/外国政事/index.html","5a9c8c8d349907d4a59481e219d64e7d"],["/tags/天气/index.html","ca30f5ecadd0fdb9693bcbd168226c66"],["/tags/天气/page/2/index.html","fcab98a21642020509d1ed9c5a855619"],["/tags/奥运会/index.html","6876987d07bf344a2ce96a00add99dd6"],["/tags/学习/index.html","7ecd50e760f4da3be07f9c03b042eaca"],["/tags/学习/page/2/index.html","ca58b54c6cd606a2e691ed8ba9251431"],["/tags/学习/page/3/index.html","74fdae9f0aced192e275c6496c110b63"],["/tags/就业/index.html","a583e6aea79d0d4a482ff726ec8c3d27"],["/tags/庐山/index.html","fc23de2c10540ba1f833fe4508933e07"],["/tags/座礁/index.html","f176376bec2030852f67332155c2ff35"],["/tags/政府/index.html","ad81fe0429f9f5141534cc48def45146"],["/tags/政治/index.html","985870052dd6a75fafe12aca77d748e2"],["/tags/教程/index.html","61563a2957155a6932392f72c2f60cae"],["/tags/日本教育/index.html","69d0061d363a8dbb72d7a41f90ea7e08"],["/tags/民生/index.html","5e8331c1b679af40f5f750a7f5790577"],["/tags/民生/page/2/index.html","606c8edb06bd9719e3d102ff2dabf7d2"],["/tags/游戏评测/index.html","c0679ac1d9918bfe3b059223dfc911ef"],["/tags/游记/index.html","2352ba9f8126e234f723092562e61c4c"],["/tags/生活趣闻/index.html","3d1866b4538c413f0250017650dfef87"],["/tags/科技/index.html","6990f7450dfccf041a0632feb71a2e7b"],["/tags/经济/index.html","193fd2c5e607a1ade79742ad9fafe45b"],["/tags/经济/page/2/index.html","8c1d93eb16aca4ba13a44762b2eb4441"],["/tags/网络教学/index.html","a0b15c6538382cfdea82721c26ad6b9d"],["/tags/舆论/index.html","64d2e59be60a46f9d23e2611b913b382"],["/tags/虚拟现实/index.html","23f58baecc7871ffa65b66e6b228b205"],["/tags/随想/index.html","4ae4ffd2221769a2778d2f20963eaf86"],["/tags/障害者/index.html","dc3604cf1df078fb84cdc847ef23addb"]];
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
