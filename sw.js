/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/05/20/2015-05-20/index.html","c5178820f19d07af069e4459b5be5def"],["/2015/06/16/2015-06-16/index.html","95e043428c8ce61146a37981037824cb"],["/2015/12/12/2015-12-12/index.html","d0dcffff6e715f0a301dbf896576a386"],["/2016/06/08/2016-06-08/index.html","82346a1c8aee9b90c822b0ce3032aa8e"],["/2016/12/18/2016-12-18/index.html","f9d9c567327de5cc2b2e3f2958b10df9"],["/2017/02/17/2017-02-17/index.html","296c0a6ccf7a2cf26921df57641a99e7"],["/2017/03/17/2017-03-17/index.html","282f6588886b4c45335b61f5ef102f40"],["/2017/04/06/2017-04-06/index.html","3c1a1f7e554c2bf62e105b33a3708cb5"],["/2017/05/17/2017-05-17/index.html","cd81ab7812cbaf4c865de829aaa3fee5"],["/2017/08/15/2017-08-15/index.html","5b3bceafcf76993e801ce98cc99aab45"],["/2017/09/16/2017-09-16-1/index.html","145e3d3695f9310f59a24d13a136d97b"],["/2017/09/16/2017-09-16/index.html","757455c305d072eea70e7ed92c5e11fe"],["/2017/09/21/2017-09-21/index.html","e810d8bbaca29418a61fcc9232348105"],["/2017/09/23/2017-09-23/index.html","1762d63f6a0d9daa36a5e9c9dc89899f"],["/2017/09/26/2017-09-26/index.html","6b1b9ba2313af5c462dc423459e91bd3"],["/2017/09/27/2017-09-27/index.html","768c329973739f0a62a1d326ac9565bd"],["/2017/10/04/2017-10-04/index.html","608126a78b69c11f5887e096ff3cdfe6"],["/2017/10/08/2017-10-08/index.html","55691f6204526dd519dc0d0cd9f1895b"],["/2017/10/09/2017-10-09/index.html","aecba4bb7cea0cd23e789fe68bd1a5b3"],["/2017/10/15/2017-10-15/index.html","4f258540e770fdd32c5da1e930974298"],["/2017/10/19/2017-10-19/index.html","5e8f4afe7bb737e5939066193e68f156"],["/2017/10/23/2017-10-23-2/index.html","1b2305e3a191b3c95c8692092e7c1459"],["/2017/10/23/2017-10-23/index.html","8dcc27950eebf3d717de66faa7771167"],["/2017/11/08/2017-11-08/index.html","40dd4becdd986c449b9fbdf445fad031"],["/2017/11/12/2017-11-12/index.html","6496c354ed9c786d6b74b39898571580"],["/2017/11/15/2017-11-15/index.html","d5bfd1b5a1ac0c10e409b1194b7ea46d"],["/2017/11/27/2017-11-27/index.html","7de6a0a8ed0531706143ad500cf8a487"],["/2017/12/06/2017-12-06/index.html","96999ddabc19d7e7dce350d156b4b116"],["/2018/02/12/2018-02-12/index.html","a15bbc866fe603414d05717017e6f407"],["/2018/03/26/2018-03-26/index.html","be9cab953ff6325090e1a9bca6623c3c"],["/2018/04/02/2018-04-02/index.html","959c756fcc5a945afde143684aa85be0"],["/2018/04/24/2018-04-24/index.html","e704160fb9396365e84d18eb25dd49d8"],["/2018/05/18/2018-05-18/index.html","9dc87877763b8ee198172c48db2928bd"],["/2018/05/23/2018-05-23/index.html","fa2e59356b7bf88a8958e8584ef28ea6"],["/2018/06/08/2018-06-08/index.html","fbe7da92af22c0fe5f52467d6d28b4be"],["/2018/07/01/2018-07-01/index.html","b29c94ea09ae476ac20fa4000ead474a"],["/2018/08/30/2018-08-30/index.html","e099e2d743eb97f6b52f295040360202"],["/2020/07/20/2020-07-20/index.html","936f98d32c055d92176ea155f5af94e2"],["/2020/08/01/2020-08-01/index.html","253557c0eadd1555dcbcaa2aa09a0533"],["/2020/08/02/2020-08-02/index.html","ac37d59a0b0372f37814a845cf5aa6b3"],["/2020/08/03/2020-08-03/index.html","d034d195d264b3f8f88710d4d06e9f28"],["/2020/08/04/2020-08-04-1/index.html","528e2ec4d3395b8a43df1ba2f46dd766"],["/2020/08/04/2020-08-04-2/index.html","6e043c219e71527ff9f865bee7587217"],["/2020/08/05/2020-08-05/index.html","88c849b21cce70d8175b1ca22c3beaea"],["/2020/08/06/2020-08-06/index.html","70d34306de244f6353913603526c15e5"],["/2020/08/07/2020-08-07/index.html","96e282247096a95eddb6972cc5241372"],["/2020/08/08/2020-08-08/index.html","d8b5be69aad87fe2fb1bd79ebccd961f"],["/2020/08/09/2020-08-09/index.html","bbcdd39be6efc3157bec1f12efda296c"],["/2020/08/10/2020-08-10/index.html","9741afacf9e917d884226513ac183fc7"],["/2020/08/11/2020-08-11/index.html","f80f7e083a465811d975e792d2c517ed"],["/2020/08/12/2020-08-12/index.html","4376326a5e29ee0e086f1a876a2282a0"],["/2020/08/13/2020-08-13/index.html","a8e7f8a6cdc9d6069855afa694de2482"],["/2020/08/14/2020-08-14-1/index.html","4728970cbbc91f575a9c939a47495248"],["/2020/08/14/2020-08-14-2/index.html","b68d1ded7ece7b71acdd25b7b41685a7"],["/2020/08/15/2020-08-15/index.html","1e67df930b20611637d3df62f8b28e93"],["/2020/08/16/2020-08-16-1/index.html","0e1f4bcce347d86d4fc89c0ca4800819"],["/2020/08/16/2020-08-16-2/index.html","b9c476f0917334d59b8f3525cbd35dcc"],["/2020/08/17/2020-08-17/index.html","d79155861ba37b658b42ae7f03000136"],["/2020/08/18/2020-08-18/index.html","c946710d682c62e0927a12b11db27e09"],["/2020/08/19/2020-08-19-1/index.html","944617dfdda9b68a5535ec30a8760951"],["/2020/08/19/2020-08-19-2/index.html","85e1dac31f47f5c8c9ad358198c2428c"],["/2020/08/20/2020-08-20/index.html","71dd4d630c27e3302e6e627fc9ff4413"],["/2020/08/21/2020-08-21/index.html","4bea6144a60200b464f9dbd297ee8618"],["/2020/08/22/2020-08-22/index.html","9779e7d1528baa419778c85cfb44b9a1"],["/2020/08/23/2020-08-23-1/index.html","273726741e31acafd790a9abcc88eaf6"],["/2020/08/23/2020-08-23-2/index.html","41924ef57f302637221f67f2fd77e2b3"],["/2020/08/24/2020-08-24-1/index.html","ce9f5bdc8ad2f920d4191bac2ff98b38"],["/2020/08/24/2020-08-24-2/index.html","ef210c068fbbbc45059537a7b8fc2dc2"],["/2020/08/25/2020-08-25-1/index.html","016f9b2635dadcb7d4fd7c47eca26749"],["/2020/08/25/2020-08-25-2/index.html","60c7d20010cf7e708d5702f06c2f5942"],["/2020/08/26/2020-08-26/index.html","06d7b8d50e67e50daa3e549507a9c48c"],["/2020/08/27/2020-08-27/index.html","44782addcd925081bb586e0ce26dce24"],["/2020/08/28/2020-08-28/index.html","d68301a26af7c6dcbe576da1ec343273"],["/2020/08/29/2020-08-29/index.html","1da58043075573c349e604eb58813e61"],["/2020/08/30/2020-08-30/index.html","335528c9915b235b2eec8f209f354c2d"],["/2020/08/31/2020-08-31-1/index.html","3c7da0ebd7417c2ce002698009868c69"],["/2020/08/31/2020-08-31-2/index.html","340cf59386fa21cb7de938c0f693c43c"],["/2020/09/01/2020-09-01-1/index.html","5fecc61ecdcfc1efe9d1c80b4360a374"],["/2020/09/01/2020-09-01-2/index.html","23e5cefa634d1ad4cda11c525777d051"],["/2020/09/02/2020-09-02-1/index.html","342c259a0f2c22885152b8bee4967273"],["/2020/09/02/2020-09-02-2/index.html","ebc1131e3d2112e53d54eda4375f459c"],["/2020/09/03/2020-09-03-1/index.html","4246e363bd1bafad4f4f4e0d1986f099"],["/2020/09/03/2020-09-03-2/index.html","4ac2ba386a83a2b50b78544b66b33e5d"],["/2020/09/04/2020-09-04-1/index.html","e8a5fc02bc45042328a7e3ba9d3a66ad"],["/2020/09/05/2020-09-05-1/index.html","8e0c3d620a4ef219157c643cf8bdd837"],["/2020/09/06/2020-09-06-1/index.html","81e6e0c4741765e54511397bf97ff8be"],["/2020/09/07/2020-09-07/index.html","26c82c840dea026edcea0ee6a6265143"],["/2020/09/08/2020-09-08-1/index.html","a104dc55b774ec80d21ab2a9ed3a2bc3"],["/2020/09/08/2020-09-08-2/index.html","9290218c871b9b12e2a30b31ee252c6a"],["/2020/09/09/2020-09-09/index.html","ac4d9a0abf82aaf3440e05053a9df88f"],["/2020/09/10/2020-09-10/index.html","4e3335b182090fdd053ac98328379731"],["/2020/09/11/2020-09-11/index.html","ff34fda0bee72d754a8558c739fe0d4f"],["/2020/09/12/2020-09-12/index.html","0d71151b0c917298127a598dea9c23c3"],["/2020/09/13/2020-09-13/index.html","7dbdbddf23bcc40a44cd6877c3540ff1"],["/2020/09/14/2020-09-14/index.html","90aab0afa5aee856b0659ec07bea2870"],["/2020/09/15/2020-09-15/index.html","78fbecd2bce252cfa243c2e77272a2ee"],["/2020/09/16/2020-09-16/index.html","b4cbc13da1b97a80d176343fcaec6f0e"],["/2020/09/17/2020-09-17/index.html","965313669b08fa84df6d5a67ecc067eb"],["/2020/09/19/2020-09-19/index.html","26f94bd65bf365ff735b48f235995ec3"],["/2020/09/23/2020-09-23/index.html","35a8fad2f18fcdc5c6bca48436587567"],["/2020/09/24/2020-09-24/index.html","38dd7fd755ae6a0655bf700145c59b45"],["/2020/09/26/2020-09-26/index.html","363a58062641d70b4e11624ce8f8ec83"],["/2020/09/27/2020-09-27/index.html","3a7a4bbcc624f1f45465d2d42388750b"],["/2020/09/28/2020-09-28-2/index.html","84ce56aa4a3d643cf912ca098fe41b00"],["/2020/09/28/2020-09-28/index.html","8e317452858f27ca1ef1db4ce48d2d0b"],["/2020/09/29/2020-09-29/index.html","a8146e92ab686fb84a2c2dbbc6b56424"],["/2020/10/03/2020-10-03/index.html","5f8a65568f8e77a2f79fa7b4f3073962"],["/2020/10/04/2020-10-04/index.html","4e9f94b6bf7e04d6929c78d241d364aa"],["/2020/10/09/2020-10-09/index.html","b32f15e2d1430f965b59061091fd1665"],["/2020/10/10/2020-10-10/index.html","92ae83b07be2c8a459d3ebdc2a21df6c"],["/2020/10/11/2020-10-11/index.html","a78d6c8b7549989bfc39906e0353ad41"],["/2020/10/12/2020-10-12/index.html","ee72146657a2bc90a2724aa27146b623"],["/2020/10/13/2020-10-13/index.html","b7c9976999ae528322c8aad1a94d66c4"],["/2020/10/14/2020-10-14/index.html","4c1cc5f194801058984811d41ee4fa8d"],["/2020/10/15/2020-10-16-2/index.html","7a32fce60812d0a095c001b6576bcdf4"],["/2020/10/16/2020-10-16-1/index.html","20732af7bb1285b0ff33383dbeab73f8"],["/2020/10/18/2020-10-18/index.html","006c91a4c7e39275368b0939febe8009"],["/2020/10/20/2020-10-20/index.html","0c23dd9bfe4593ffbaa1140b57878f07"],["/airplayervisual/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/airplayervisual/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/airplayervisual/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/airplayervisual/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/airplayervisual/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/airplayervisual/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/airplayervisual/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/airplayervisual/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/airplayervisual/index.html","41801f9f319ca8da7f254930940dd7a5"],["/airplayervisual/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/airplayervisual/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/airplayervisual/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/airplayervisual/js/jamsetting.js","7927507e0080ddf55c6d8b5f526bd942"],["/airplayervisual/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/airplayervisual/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/airplayervisual/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/archives/2015/05/index.html","d170ef0bfa3bdff1d31b7740f7e9ddac"],["/archives/2015/06/index.html","6c19f515b51e1d6390bf64fce82a42c2"],["/archives/2015/12/index.html","19a4e39f501677125c5e814edfb10a35"],["/archives/2015/index.html","58c547ac856bff5e8c29fba3f6835255"],["/archives/2016/06/index.html","924118007672d2061c3d88843973d64c"],["/archives/2016/12/index.html","7e91b8f74de4126f01c33e19cb373c1e"],["/archives/2016/index.html","688438fad217bda8b01fbd22fedf2418"],["/archives/2017/02/index.html","b55edc70450ecd6e0d0810db9a6ad23d"],["/archives/2017/03/index.html","de8930dfb14ceec4bd1b599ad24e2435"],["/archives/2017/04/index.html","b5a99de19daf10fb00864905a32c7569"],["/archives/2017/05/index.html","518a779c343e85c31d89f12e38eb6df7"],["/archives/2017/08/index.html","ff5052bbbe9669d02c61307435eaae0d"],["/archives/2017/09/index.html","b982806e211c8fd94c45cce4a62f7f58"],["/archives/2017/10/index.html","90363212a1d77435c932df253436c341"],["/archives/2017/11/index.html","9b23303388ad50b4026dff660e0d0447"],["/archives/2017/12/index.html","9ecc1d24b4f3c27c8d630c373a20915a"],["/archives/2017/index.html","bfb00b30f199a66bf81de074ccbb00f6"],["/archives/2017/page/2/index.html","08602f03ab86fde30c0a13744ddf9bd2"],["/archives/2018/02/index.html","c1222baebc547c0283e6e3bcdde21a0b"],["/archives/2018/03/index.html","9d3a318fa69da84211b255cc5633d33f"],["/archives/2018/04/index.html","546506507e7429b9b0bb1f179ca1cf9e"],["/archives/2018/05/index.html","4f12b4cd9d4244e65882512744a1fd24"],["/archives/2018/06/index.html","6847b6e7eeef1842e56b9d8d11ea504b"],["/archives/2018/07/index.html","4c14779fe2f36dfda4a84c53b37a3f85"],["/archives/2018/08/index.html","5a9dcb4ab69078fa707a4e4bfcbbffeb"],["/archives/2018/index.html","6329a3b5230a84d0968cd05fdeee77b2"],["/archives/2020/07/index.html","bc58fb7431eed7af2c5ac6e3736d0591"],["/archives/2020/08/index.html","d0952a8afa7a5351937425c14d2646d3"],["/archives/2020/08/page/2/index.html","5d6073d89fbf8c6b483a65d0a8866e12"],["/archives/2020/09/index.html","0bb922de9d4dfc68b80121f168231b4e"],["/archives/2020/09/page/2/index.html","3f431e9267a8567a12cef4e5df82c9d1"],["/archives/2020/10/index.html","7fd224d023cfba62afba00a7d5aec152"],["/archives/2020/index.html","51759adc3036c6ca0e676e4291bfe823"],["/archives/2020/page/2/index.html","65a253f47ad36b3acce06832a3452d88"],["/archives/2020/page/3/index.html","d7f995d336991e8cdbadb3b4c0bd1790"],["/archives/2020/page/4/index.html","f95196aff2dedb1f29ac2ec36be8b46d"],["/archives/2020/page/5/index.html","c86db89c2e725922e98483d7234188e7"],["/archives/index.html","2b3955f1a1024585f9f5ae53fc467b17"],["/archives/page/2/index.html","d6bc046ac46611f9e3805ba8ee602057"],["/archives/page/3/index.html","7b8c1bfc39e605cd8cd18853b058b246"],["/archives/page/4/index.html","bbde611f96394006c9fedf6e2938fba3"],["/archives/page/5/index.html","1be362b48fea1f7e8304cefe571ce38c"],["/archives/page/6/index.html","62e142e9e4f7035877a86fef9e85de67"],["/catalogtest/index.html","b5aeb11205c2f8e6ce3d9a3f7e3e0e69"],["/categories/NHK听力练习/index.html","c0d55570408784a66dbf8502fd32a87f"],["/categories/NHK听力练习/page/2/index.html","9c94c7e33e600873c298ca0742c3f83f"],["/categories/NHK听力练习/page/3/index.html","de5ce683d759031bc155de58f7d83625"],["/categories/vue/index.html","322b4c037bf63db44c4a299649ee39d0"],["/categories/作品集/index.html","4151343f16a9ca2b99587869efd3e808"],["/categories/学习/index.html","782f7db9c2e54e07b708e43ed20ae123"],["/categories/教程/index.html","7824baf00f551e1ec6c5b421e538fc1b"],["/categories/游戏评测/index.html","e0fef0ef9bb60d80ebc6f9fb293056cf"],["/categories/生活趣闻/index.html","654eaef919406b5780236d4b88015584"],["/categories/随想/index.html","29b9f9da1c7943816d472c14c40cdfc8"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/addcss.css","d20fc732e0cc7996bd82c5170b7aaa86"],["/css/background.css","d013642f5988333ece3b04912f099111"],["/css/calendar.css","0090a32d2a61d42c5bfed254bfba078c"],["/css/clock - 副本.css","65602c2385c7eab42ee3804cd6ee0a5a"],["/css/clock.css","9db53e3bffb704c740aa83bddaf8b999"],["/css/cursor.css","f514da9c81fb3fcb4f7e9038dfa30874"],["/css/danmu.css","2a5b914a9592bcd353425c6d5fa7af8e"],["/css/index.css","a830cf7dafed0e1e03142b35ae00f2a6"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/loadingline.css","bc1ee020a6a11fea17b915b97e6978bf"],["/css/shuo.css","8db924024099e925c53d5b3dd22f83c6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/html/calendar.html","bddcec1edba7f4c49fe5cd75f8cdf5b2"],["/html/shiyan.html","7ac170a0f8878b03bebf24a9c388ffd0"],["/html/shiyan2.html","6a29510f2259adb91c1aedd6f44c5948"],["/icon.png","8ec68de45d18642ba9baf2447e62f476"],["/images/AMJ1.png","d27a6725d1aaaf5324248da4312ab6c2"],["/images/AMJ2.png","00e22eba5901e5bd674e42228cd5bd26"],["/images/AMJ3.png","c8c9ea6348dfcad3a641899d5b587431"],["/images/FOTO1.jpg","4b6f100861908e2c7044cffbdb4a0c1a"],["/images/MVVM.png","ea5a002ee2f85c71a0db51d5adb5de19"],["/images/UT.jpg","367f4e432f9db55a92b2a290c4b0a476"],["/images/UX.png","a183974e958d41d1b6acec70bb7ea00a"],["/images/WindowsTerminal.png","8ac29cb56b8a1768cf7de071e9f1ae6f"],["/images/air-w.png","c1cc32f9d3e17551ca11a7d18a0b533a"],["/images/anzhuang.jpg","912b2489957f8344406edc5e5cebe5fa"],["/images/api-setting.png","2c0bb074390779721cba009e96c5417c"],["/images/apikey.png","1f31121b190eb1f990bcc3e27524bc03"],["/images/b0_img.png","43fcaa3f8b394ca5be957f4b860800db"],["/images/backpic1.jpg","86a6fa88167feb338fbf1a4e9057114b"],["/images/c0_img.png","34397085b4d3349034f9b167469ac626"],["/images/c10_img.png","7938c5b0dd789db4f262e5a618943a9b"],["/images/c1_img.png","95211a0ebf07befde1b11477c3a8185b"],["/images/c2_img.png","456ba51725d669fc4d005787753a6b08"],["/images/c3_img.png","a0aa7dcdd2ed5bccec52c16942036a3f"],["/images/c4_img.png","0869cebb60d00a78936b7498823a39de"],["/images/c5_img.png","533774e840ccb3ef13b46201a54be05d"],["/images/c6_img.png","db9eb681dea0b7911f0b2ba918d86c26"],["/images/c7_img.png","5b9c9e0331aca2a9d47a2730512f34f5"],["/images/c8_img.png","be9107995f185e3bbf7186c4dff69f42"],["/images/c9_img.png","642a2e762b74a28d2426af14f2b864c1"],["/images/calendar.png","86319b08b93be7c8bc47cdba7a169563"],["/images/cataimage/b1.jpg","e4795ce34b4d070d251c37a2ae5e37eb"],["/images/cataimage/b2.jpg","e1a7402c7d111b33d22c187a794e693d"],["/images/cataimage/b3.jpg","c091fe2a8024b2f010911e9af8091147"],["/images/cataimage/b4.jpg","1a2190b3e7ecb404767f029642adb637"],["/images/cataimage/b5.jpg","2683b29be7ea536b2d2c0b428ab87a80"],["/images/cataimage/b6.jpg","8eba752c28594ff5a253a01c0904a4a4"],["/images/cataimage/b7.jpg","9259255b1e1ec36bf92b4f34ad68db7f"],["/images/cataimage/b8.jpg","beaae9e5c735657f2e5bba9eb3deb754"],["/images/cataimage/b9.jpg","7ea8994ee380e84190422ac1b1d93ed8"],["/images/clock2.0.png","0a0f122c7a25262fc02ee99df0ef21eb"],["/images/clock3.0.png","8e04375c183c637b65fb50ed40f46466"],["/images/example.png","aaac9983e5d59f919bf282dcff2edb3c"],["/images/foto17.png","28db4c6608ad1ee6b34238cafab25e5e"],["/images/foto2.jpg","be95b922512d004a61f83c97af3e2602"],["/images/foto2.png","0dc07d4e1b00526a273a89dc8b81548d"],["/images/foto3.jpg","551c0616c92c4ee7cc17dd458b3c46e9"],["/images/foto4.jpg","9d1d9fea759a41afc0061866e400339a"],["/images/foto5.jpg","984f618b15372f37d54f507e6f379f10"],["/images/foto9.jpg","b683fc0b998e80ff8f5a3e45e889807c"],["/images/girlpic.png","ff1e8427ed555af639e6d849f8f648f1"],["/images/girlpic1.png","698e5570e821c3cae643cc9777c2292e"],["/images/girlpic4.png","551882e4b9b6afb79000fd34c0dbf5e5"],["/images/headimage.png","332502f36a0297b30cb7969fe6de8451"],["/images/hexo.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/hexoWT.png","c027cc9f5665c7d7ba657e7a4bb40017"],["/images/his-json.png","7d8a71e38ab684107446e5c72c31854e"],["/images/history.gif","0459a3dcf2317253de0b34482880c63c"],["/images/homework1.png","e8d2f64d0785519ea7779016208a2900"],["/images/idea.jpg","5eb08bf6c965588f03c8860f201cac45"],["/images/key1.png","f2a370e02ad6c5a101db20b47a9a0008"],["/images/key2.png","21dc40bbe0377cd9fe85a9cb431c18f0"],["/images/life-cycle.png","02f39ea5c041d45938fda4b50f234cb7"],["/images/life.jpg","74d2d9c5f48ec59e3badeec690941812"],["/images/listen.jpg","9d4f73cd5634f43deaed4f9aca03f9a3"],["/images/loading.gif","ffa0804a5d99e2d5b39e05cda6d6b28b"],["/images/magnet.png","4899a924f3de0d19dbe0415128c07d65"],["/images/magnet1.png","8d010eb86ca943e036adaa7de57aee7d"],["/images/magnet2.0.png","54fe576f174d2b6917fef89f40ac5975"],["/images/magnet2.png","293cb414a8ab93b43bde3bebf9cf0cfc"],["/images/magnet3.png","1923148630e2e094ff80bf35aa604c10"],["/images/magnet4.png","9bb4f963ac1c09f02d62525f513f492c"],["/images/meilu/1.jpg","cd67abcc3f543b5c66adc4f9d9c5c628"],["/images/meilu/10.jpg","ac9fb2711e477b5db1c3acb57e899045"],["/images/meilu/11.jpg","364caad6dfc356a3dc630fa067e48e88"],["/images/meilu/12.jpg","274767e5708f79934e5bdbf73eda8f0d"],["/images/meilu/13.jpg","dcab12b84454770b208913db63e825ac"],["/images/meilu/14.jpg","037cdd048284e621f27e17a2c59e8ea7"],["/images/meilu/2.jpg","f6cdb65ae3fad4523b32f5ee38696b60"],["/images/meilu/3.jpg","9e5df3612c2d93bf57313186c954aea5"],["/images/meilu/4.jpg","69ef2d6f4bcd79cf4b4e672b60c6751e"],["/images/meilu/5.jpg","ce81ca16def7613b7ebb368fb554f14f"],["/images/meilu/6.jpg","cafd5b62305f806754a75cc3af8c3b77"],["/images/meilu/7.jpg","b8ae865d386e1e713a6034da6b090c10"],["/images/meilu/8.jpg","afad7a7bf1066c817a8d2e7566bc780d"],["/images/meilu/9.jpg","72f9649f56b564eacf23ce3dacb88029"],["/images/metroui.jpg","5503bfffd450d9ab572b67ea00941571"],["/images/metroui/1.png","79a03b408c19c74eeaa8ff6e17a03f9d"],["/images/metroui/10.png","8309fed71a15c78f2dfa3af1ff75a5f3"],["/images/metroui/11.png","aaf1a007cbae12f93cc2688bace18d28"],["/images/metroui/12.png","0758ea282c3828c47e5c64520ff85783"],["/images/metroui/13.png","12ca7b511927cd4b26e97f3b20908a32"],["/images/metroui/14.png","f44ba7680f7b36df437e2ae2588d0565"],["/images/metroui/15.png","e8927c78b125b805af7aa86fee815ab6"],["/images/metroui/2.png","e604d3c662b996f06f22753ba9ab379f"],["/images/metroui/3.png","664e3b7490f2f95d5547b8ba79a65456"],["/images/metroui/4.png","c0f255344cafc303a1d9c7404da37149"],["/images/metroui/5.png","da2074cdb1298aca826abc1a5c441300"],["/images/metroui/6.png","efef2f087127614b4e03bcbe9a347018"],["/images/metroui/7.png","a4d34b1a2dbe3a58d3a92276880be039"],["/images/metroui/8.png","1d34a626bbaa898a60d4501936bcf962"],["/images/metroui/9.png","0663697c1667b377fe2623bd65e00b31"],["/images/metrouilogo.png","aea81b42d1c2c96440f74cf56ad82e2f"],["/images/nhkimage/2020.08.01.png","af4c55b2ae1d5ab2f56c75a87fcdfdb3"],["/images/nhkimage/2020.08.02.png","c355d41b90f5c65823f96c5f6868ce53"],["/images/nhkimage/2020.08.03.png","fddcedb40d7f28b2ccb90814351ad5c8"],["/images/nhkimage/2020.08.04.png","8b4518ec5a8513f442980ed7167136b1"],["/images/nhkimage/2020.08.05.png","590abfb19334b0c3cee5a005674f2253"],["/images/nhkimage/2020.08.06.png","d469e21100c42435e88f2bdf07f93da1"],["/images/nhkimage/2020.08.07.png","3ca9e2c8b8a09a38423d73cd36e8de9d"],["/images/nhkimage/2020.08.08.png","4420c2d899fe4eb90c48bae0da8418a2"],["/images/nhkimage/2020.08.09.png","df14be338f9c920818dd1daa6aa955ee"],["/images/nhkimage/2020.08.10.png","c4e2ed023cd3dbfd4986add35ca9357c"],["/images/nhkimage/2020.08.11.png","cf562339e57f673d394f3e6cdd1f60cb"],["/images/nhkimage/2020.08.12.png","81dfa179fea3052ddcf73912ea368f67"],["/images/nhkimage/2020.08.13.png","8cf26c2642e7a27cbd86fcbda8bae8d9"],["/images/nhkimage/2020.08.14.png","d88eeb678b3ed3651d597e61957e264a"],["/images/nhkimage/2020.08.15.png","b9879f193867edcffeefce62c9dc7153"],["/images/nhkimage/2020.08.16.png","46cb914aa1d556561897767ec9ff66a0"],["/images/nhkimage/2020.08.17.png","ea1af9645b5cc9cbaafe70a91dd15cca"],["/images/nhkimage/2020.08.18.png","e87e4de39a6f06cf4283a63af92dd8de"],["/images/nhkimage/2020.08.19.png","8001a951513b542a98ce1151be5bd87b"],["/images/nhkimage/2020.08.20.png","4bc8fafa3ecce30d340b1350715d78e3"],["/images/nhkimage/2020.08.21.png","07ad1337e127922abff27da6c672549b"],["/images/nhkimage/2020.08.22.png","b2b5d53ba46015f64048f9d803b12179"],["/images/nhkimage/2020.08.23.png","225af8c0cabe5218ec634d1b8815fd95"],["/images/nhkimage/2020.08.24.png","1d54a484a6e2395aabe9be005cd90361"],["/images/nhkimage/2020.08.25.png","8008ba169cfce0ef2041329cd29b6b77"],["/images/nhkimage/2020.08.26.png","72a2b8094003a54c97a34ea97cf21bc3"],["/images/nhkimage/2020.08.27.png","893407e604804d215c8fef8bcd5f2684"],["/images/nhkimage/2020.08.28.png","b542280b7341759890a99cbd44d822c5"],["/images/nhkimage/2020.08.29.png","620e2e7d4772e39615fd1a88cdf49717"],["/images/nhkimage/2020.08.30.png","f645d7ba2dcb506f9ec6fb9244425ad7"],["/images/nhkimage/2020.09.03.png","c5262f3aa87190e0273383ea1e445681"],["/images/nhkimage/2020.09.04.png","c07149c32aa41c03bc7dac82a713f6b2"],["/images/nhkimage/2020.09.05.png","4e43556e1cb3b7f4d75f0f6127616a54"],["/images/nhkimage/2020.09.06.png","1021d2ae04a7f109404f857a2a7629cf"],["/images/nhkimage/2020.09.07.png","db9827e9f0a4cf1401b559b4644a0204"],["/images/nhkimage/2020.09.08.png","efe1030b73dc1c01f169c3122a194426"],["/images/nhkimage/2020.09.09.png","f6ba3a1c6cdeff88404ebe2a646f2eb5"],["/images/nhkimage/2020.09.10.png","3471b05d02113517359a9e2167befcfa"],["/images/nhkimage/2020.09.11.png","921a541a8bffb1aa436df2eb6db7c99f"],["/images/nhkimage/2020.09.12.png","a51f8ebaddba69bb80f9259a30f17e65"],["/images/nhkimage/2020.09.13.png","0399889200493cd2154ffc407e2bc400"],["/images/nhkimage/2020.09.14.png","eaaf3da69a39ed316b7fc8c4d409bb0f"],["/images/nhkimage/2020.09.15.png","5774959ea4061c9298ea174f0862cc3a"],["/images/nhkimage/2020.09.16.png","0c5a00f74020740fda589c02e4b3f917"],["/images/nhkimage/2020.09.17.png","b5aef734e3a7db4862ca3fe4e6769dc2"],["/images/nhkimage/2020.09.24.png","5982a7b3843f4ae43b2b4bc4b0c577d6"],["/images/nhkimage/2020.09.26.jpg","c6415af781fbdd36fdb034f74646129b"],["/images/nhkimage/2020.09.27.png","27aa6f6a8d5534ccd99cff261dcd9eb6"],["/images/nhkimage/2020.09.28.png","0f4318d1ff17a33de364432a1c44b5ad"],["/images/nhkimage/2020.10.09.png","6408d9f7e66fdeba8b9207939a08cf8d"],["/images/notop.png","d25c272e5ce312a880e04ce8a0b27683"],["/images/pasted-0.png","552608d8f6e39369aa30c6e332a32826"],["/images/pasted-1.png","baafdacee93c99e99418aaedbf524fda"],["/images/pasted-10.jpg","395cff6f64ab5df19baa3572ac98e541"],["/images/pasted-11.jpg","56e5df07c96634638abf7995b25c81ab"],["/images/pasted-12.jpg","61b3f803b85ce3640d7a9ba7efb9da6b"],["/images/pasted-2.png","2f410e53c811f92a6135f48857776f5e"],["/images/pasted-3.jpg","bb5717e691e87355e7d63a5f3a87ae62"],["/images/pasted-4.jpg","10041d0e3567b24b81222ec5075d6492"],["/images/pasted-5.jpg","ac5047a4b48c6cdaee86fa1863e33904"],["/images/pasted-6.jpg","1556ae8d3ad5713d60237ee4d10e81f0"],["/images/pasted-7.jpg","913fde1686587646ddc663bd810cc81d"],["/images/pasted-8.jpg","fc83268081fb4b6b6ecb1ffa1ec5af7f"],["/images/pasted-9.jpg","25e0fa3496591501f5c29d0b802b77d2"],["/images/pet.png","2b8c121909497e57057478856fe48a94"],["/images/pet2.png","dfb1d6a17b527ccc0c600e6ad31f55e5"],["/images/ps1.png","0917ba91f21b6944dc08d35c41a326d2"],["/images/psb.jpg","6a27c58337875c776af0a7667598b401"],["/images/quse.png","7cd1ec12b804305430cb4cdc09c7a893"],["/images/rain.jpg","9c26acc44c692b6a63e134be07b07c18"],["/images/rainsmall.jpg","e8c91c40bef224fc5a3942bd0d007b84"],["/images/shezhi.png","281bf545f6a4024e2d0b7120bc398a21"],["/images/shuo.png","9cce9df6e32e00e49471b9a9f089f6aa"],["/images/soul.jpg","d97b4099c0728ff6123d006fa62db86e"],["/images/study.jpg","a9b1cf95ee6bd9f3913e8ec6a6a6f44f"],["/images/tianqizhizi.jpg","dd48d78b4eeaaa52578352f9ef570b14"],["/images/vue.png","cf23526f451784ff137f161b8fe18d5a"],["/images/vue1.jpg","8cbf18302c6fa72e2a40d0cca0832213"],["/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/03n.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/04n.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/images/weather/09n.png","512894b4a127a42e060e237674b8d145"],["/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/11n.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/13n.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/images/work.png","e521cf5b834292fde1c50e0a0f5802f9"],["/images/xiaoguoyanshi.png","994a3b710d36df0a4630cd9a768c7f7b"],["/images/xiaoguozhanshi-m.png","1fefca18214fc4889d1bb76b81887c9d"],["/images/yao1.jpg","9dfddaf8c121fc8db788a87d133d6376"],["/images/zfe.one.png","b41f689341882058ffb28c4cee499bde"],["/images/幻想终结之日.png","0025c4d3973bdfedb80db3f78c59fa47"],["/images/时空战纪——游戏建议及意见①.jpg","1337457f14a8dffee66d94f8915b54ff"],["/images/简历.png","d70507ee4615c9e324578c0d777e6855"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favicon2.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","9c8dda902b4b88272f7268ce336d9877"],["/js/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/APlayer.min.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/airvisual.js","71cf86bfd452ca01d92438d8266416ee"],["/js/airvisualapi.js","6931bebe1696688d109963187fc2eace"],["/js/artitalkkey.js","ad2c74320c63125a36319659657d2886"],["/js/background.js","94c8410b174f58594cf81ec99054968b"],["/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/js/calendar.js","a58e02711cc6dec4dc04257e555b8923"],["/js/catalogMagnet.js","0387c6ad152e7a6076cceffc7420be77"],["/js/clock - 副本.js","405186e7a9d73221d2d50c0dea2852d0"],["/js/clock.js","2fdceb94cc57b551cd245b0001927b66"],["/js/color.js","3730bb4f7b185e6f5130ac28bace968b"],["/js/dan.js","6b6ae6b7f1b42dd4857541f43b2bb733"],["/js/echarts.js","dc1227b1eba1ba47fd185a387d0a7d37"],["/js/gitcalendar.js","fadfa8a42272cd322118653dca512a7a"],["/js/history.js","20459f7db325e597e64903f4c0d19306"],["/js/historyroll.js","a3e9ac376106816c50a61f9f4306d671"],["/js/jam.js","462c07d3b2e0f20394d994bbcfae37cb"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","455fface5a0a3ff90766ca254affe502"],["/js/rain.js","f656dc28e4ab5c3f8414d35f683278c1"],["/js/rainremove.js","ceacf82842b101f7e54a2aaf5f4bb9cb"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["/js/shuo.js","1076b1ef51358cc11b6ff3bab25e15d8"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/link/index.html","36b6a442e4dc02fa203ad590af080922"],["/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","21e99f8efec1b46b84639c8567be76b3"],["/page/10/index.html","70b5a1353e99b10d1aa748e6eee50a46"],["/page/11/index.html","846706e8956d783b9b7a45a9fe9e3872"],["/page/12/index.html","ee71680b52e0d2750ad950d961bec126"],["/page/2/index.html","7bed4fc14527d1f73a64358eac2ad6b2"],["/page/3/index.html","837ae69214103ad60c4557a480fc4231"],["/page/4/index.html","079fcbbee237f0c771aa47b3c755406d"],["/page/5/index.html","764c0f2427f4cb71ddf22858c0bb53f0"],["/page/6/index.html","be4e9ff37fafca0c40e12c16edac5a81"],["/page/7/index.html","cb112f7a53be7197fcd383f2f986017a"],["/page/8/index.html","9b2dac16dcf1684df30062f0c3597fbe"],["/page/9/index.html","d438e2f9c43376dabc672e36f224dea0"],["/research/index.html","c05e6f5f3d648cf32216970db453a5a9"],["/sw-register.js","61177c72b6b040f13dcddba968cede5d"],["/tags/Butterfly主题/index.html","f9c79c4a83a2e72d3741677ac4b997ab"],["/tags/DIY/index.html","6e3f04d8b91251f5f8b503e35f61c88e"],["/tags/ICT/index.html","f1fee7e6b21dbbb00029b9e8e4e975af"],["/tags/NHK听力练习/index.html","e895c21bab5865d032ff784dad828f0d"],["/tags/NHK听力练习/page/2/index.html","490e9b93e4b9de37f623b4dc5dd18b3e"],["/tags/NHK听力练习/page/3/index.html","2256b9fa1502e4c7bf13b49fa6b1bc34"],["/tags/metro-ui/index.html","11728f7de9727d2a16d13c5ad9a06617"],["/tags/vuejs/index.html","ea4cb976bb7f2fac55ed0369a579007f"],["/tags/お盆/index.html","64f9b1f5d7293372d4cb32ca158fd421"],["/tags/世論調査/index.html","200ad347a821c20dd1f1e40310d9168d"],["/tags/作品集/index.html","6bccdafd29aa46d5c7739b7a6a78aba5"],["/tags/农业/index.html","408d651b3eb3aeb99f1911ddc53d7e93"],["/tags/历史/index.html","ff245307079e0063cb4d7edc731d2be4"],["/tags/営業時間/index.html","1db211156d4e612d93db2f4697744048"],["/tags/国外政事/index.html","e61342618fa9c6b253ba318149a45888"],["/tags/地震/index.html","e7c6ad77a1d26a7c132a97e72b6ed56a"],["/tags/外国政事/index.html","d9b197bc2424b90bf1cbe3b99f4f2cfa"],["/tags/天气/index.html","d4650c29608281f803d0b459100ab3fb"],["/tags/奥运会/index.html","b9647af366aa3e43743fac909e426cc2"],["/tags/学习/index.html","2aa24c0980136f7fdeb16645202002e6"],["/tags/学习/page/2/index.html","29c6b66c87a0596bbe3e7221d1744d2a"],["/tags/就业/index.html","18702a2e0861218d77359dcbb6e52a60"],["/tags/庐山/index.html","8800e87af4972649556642ccdd43929f"],["/tags/座礁/index.html","41727cdd1ca809d774a13baa39324bb8"],["/tags/政府/index.html","ef557004ae1899baa9db23203089e0ee"],["/tags/政治/index.html","b544e0e516b85afe5624153a835802c7"],["/tags/教程/index.html","61bda285c93d0180a2aff55c05cc6d64"],["/tags/日本教育/index.html","31b3937b7e8889397106fb5d85d38ef9"],["/tags/民生/index.html","a5fcfb9ce71e5a23eadb2386bd1947ad"],["/tags/游戏评测/index.html","4c0f825f856b617284df200dfc6968fc"],["/tags/游记/index.html","5abeeb12400648a3f1b1a60e63aae5b5"],["/tags/生活趣闻/index.html","d878943ec2539f6991be3d22103c3ec2"],["/tags/科技/index.html","dc63690c4aefc3ef949a0fb44746bd12"],["/tags/经济/index.html","f3dd9195475a01874dee303cfca7db48"],["/tags/网络教学/index.html","e4f7f931c1c971a07e7fcec0cd70d523"],["/tags/舆论/index.html","98063c605ea5e1d646c360aa95eff710"],["/tags/虚拟现实/index.html","44ffbc5b673fe024a67b2b5c8ac56a34"],["/tags/随想/index.html","7f352ad44e636baecb32c3f9efcc5933"],["/tags/障害者/index.html","8d29850f7e73e17f05d8302f05226723"]];
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
