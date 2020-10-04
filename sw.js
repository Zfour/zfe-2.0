/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/05/20/2015-05-20/index.html","3660d905d632bd5f2d685a7bdf024d98"],["/2015/06/16/2015-06-16/index.html","3ec59fb875b344d12df0f919580761c0"],["/2015/12/12/2015-12-12/index.html","2de14c43b3f74ec8607c8d88f96d77b2"],["/2016/06/08/2016-06-08/index.html","a57d50b04aa64781f8fd2a7218924e95"],["/2016/12/18/2016-12-18/index.html","903a5fd30e8ebb56c0d5c90de8cc5062"],["/2017/02/17/2017-02-17/index.html","93d5ce64bda42ce57c728e7b8b230bbf"],["/2017/03/17/2017-03-17/index.html","3159b11873bef52e5ead6d5559f1efa6"],["/2017/04/06/2017-04-06/index.html","d422eb57dce016ab1f8fb818d3b8ee21"],["/2017/05/17/2017-05-17/index.html","7a3407f49690241e51daf8afc71c2f77"],["/2017/08/15/2017-08-15/index.html","3c66c70b441c5434217b7f846b1be26d"],["/2017/09/16/2017-09-16-1/index.html","ffb60f71362898c26d88b59f71f68c36"],["/2017/09/16/2017-09-16/index.html","945e6305dee084ac10bb7b58aa1ec956"],["/2017/09/21/2017-09-21/index.html","d40416a6f257374d3e4f621ab6f0f525"],["/2017/09/23/2017-09-23/index.html","96dcff8706217d642938ea532fb486ba"],["/2017/09/26/2017-09-26/index.html","1bd267d44d59302c0d637658faaa2daf"],["/2017/09/27/2017-09-27/index.html","b4e285296a3145e7ee2479df2b1066a8"],["/2017/10/04/2017-10-04/index.html","731ac0aaea60fbc913e8e433fbd610f6"],["/2017/10/08/2017-10-08/index.html","aca266acf6c8139f8d1e49813b370b8c"],["/2017/10/09/2017-10-09/index.html","665c4940c2e59d02b46291aab5643d93"],["/2017/10/15/2017-10-15/index.html","9058de3132752bf0baa1eb6a1307f1a7"],["/2017/10/19/2017-10-19/index.html","406b23a75a875c97f4c032fda9901b3c"],["/2017/10/23/2017-10-23-2/index.html","a7916ab0540c9a557449abd6baab8a27"],["/2017/10/23/2017-10-23/index.html","9de36acfda7642f0d40d3b7310ef1499"],["/2017/11/08/2017-11-08/index.html","086af9b3968ab72fcb19f9099002594c"],["/2017/11/12/2017-11-12/index.html","a1a8f238fd31a1531f6afa9ca668d068"],["/2017/11/15/2017-11-15/index.html","ab623dee38bb1ba853763914363bb1f1"],["/2017/11/27/2017-11-27/index.html","1d7ec1e0967fb79d29a09db3c406bac5"],["/2017/12/06/2017-12-06/index.html","3e9afb7680959391210e5e9fb7a2b324"],["/2018/02/12/2018-02-12/index.html","73a379ba84f325551ad78fc3938defd9"],["/2018/03/26/2018-03-26/index.html","25fcc96a43eda4f17d2a3c39f5012768"],["/2018/04/02/2018-04-02/index.html","a5215601436c0e5b0973d16327e3c572"],["/2018/04/24/2018-04-24/index.html","1baa203986efae109509f27cfed2001e"],["/2018/05/18/2018-05-18/index.html","04b1522bcd88cff79d3d686f56981ee1"],["/2018/05/23/2018-05-23/index.html","e820f5dd4c98d6efdfca1c4cb4bb9e3b"],["/2018/06/08/2018-06-08/index.html","6e580c0bc87d3eb1159d8f79d26566bd"],["/2018/07/01/2018-07-01/index.html","451355e6916eac240280bbd22fc23375"],["/2018/08/30/2018-08-30/index.html","21b545fba5f316d4dee03a28e3a04ecc"],["/2020/07/20/2020-07-20/index.html","5dba4f56542b1b2d6d051e994e2b3667"],["/2020/08/01/2020-08-01/index.html","60446c0c3ce1d71483bf07acb6ced51f"],["/2020/08/02/2020-08-02/index.html","aa9007639b08cec34874d385afb0e15b"],["/2020/08/03/2020-08-03/index.html","76ba584c800657a6534e40861266964a"],["/2020/08/04/2020-08-04-1/index.html","039cc1b6326f16869bbb7a86e0fc5e79"],["/2020/08/04/2020-08-04-2/index.html","7cad3bb9ae917220024b7351aaeb444a"],["/2020/08/05/2020-08-05/index.html","9fbd5cc845dfbb982f65d40f6dc25eb6"],["/2020/08/06/2020-08-06/index.html","72f6fb28f41c8fb6bfc7deb3de426904"],["/2020/08/07/2020-08-07/index.html","fa399aaa05cc7fbb8c6b99bd3d548f0f"],["/2020/08/08/2020-08-08/index.html","5c665f7189a5e8853fce5b9d920f9159"],["/2020/08/09/2020-08-09/index.html","33fd79621da428244e2dd1a4f04c6b3d"],["/2020/08/10/2020-08-10/index.html","3ed4fa269edff0e5683a66cb3ec1dabf"],["/2020/08/11/2020-08-11/index.html","04e60ed4b5a0d70042e70f11f230df42"],["/2020/08/12/2020-08-12/index.html","2884efb4b4386b4a3e5f8d3bebe5ce70"],["/2020/08/13/2020-08-13/index.html","cf156c0d1cb660af4193a5afe4f4a7ef"],["/2020/08/14/2020-08-14-1/index.html","0bc7ce949cf822f7948b61a626259f2e"],["/2020/08/14/2020-08-14-2/index.html","51250c525b40487af98519ca08d70fa0"],["/2020/08/15/2020-08-15/index.html","583b77f2dfda2e78a436a7774bbafcd0"],["/2020/08/16/2020-08-16-1/index.html","ea2d16a4b7261606e03b8e620851a790"],["/2020/08/16/2020-08-16-2/index.html","dd91b67f539fea45badbb9f4bf7346a3"],["/2020/08/17/2020-08-17/index.html","61eaa5ed60f9567f8aa24886d1cd5c9f"],["/2020/08/18/2020-08-18/index.html","babbd40633874777c47e38e3a0d139e8"],["/2020/08/19/2020-08-19-1/index.html","bf5576d833f395a7d93fbbad00641049"],["/2020/08/19/2020-08-19-2/index.html","4b5bea6ef553a7bb7e4507209f0189a9"],["/2020/08/20/2020-08-20/index.html","a1a4e9ed16211e8aeec151abfe0025a8"],["/2020/08/21/2020-08-21/index.html","e89a6f8c29ab5d1b1cd2261c01c8ce45"],["/2020/08/22/2020-08-22/index.html","ffe607ae6d664c00de7b25095ad9f8da"],["/2020/08/23/2020-08-23-1/index.html","eea530ff593ad4b2c1d16844046dacb1"],["/2020/08/23/2020-08-23-2/index.html","b762f012089ded64a9150b5e6a8892a1"],["/2020/08/24/2020-08-24-1/index.html","6d90b576844b1fbea098a35a5be89a0f"],["/2020/08/24/2020-08-24-2/index.html","5ac84ef21b60c08db98abf4f7f87d82f"],["/2020/08/25/2020-08-25-1/index.html","8f7d038c7d86c472b2894414e1703681"],["/2020/08/25/2020-08-25-2/index.html","0758aba103f026e484b6cf7a144ba48d"],["/2020/08/26/2020-08-26/index.html","6cb1aaefcb0e31784d66b977ea05a5f9"],["/2020/08/27/2020-08-27/index.html","801f17d43704fb23b558dfe66beee86f"],["/2020/08/28/2020-08-28/index.html","4934790a6baea453be58f998640cb5d6"],["/2020/08/29/2020-08-29/index.html","bb730941537f12f5725b86dc646c52f6"],["/2020/08/30/2020-08-30/index.html","ea600ad78b884d1d31f96923e9f0c912"],["/2020/08/31/2020-08-31-1/index.html","d0d94ac3c38b04758062e7d23ad58205"],["/2020/08/31/2020-08-31-2/index.html","1a2024c1a531f6802268a882ef7b0fd3"],["/2020/09/01/2020-09-01-1/index.html","00da366ca394a4e4bc7d436d2bbdcc39"],["/2020/09/01/2020-09-01-2/index.html","5f5296e48bb76cbe9f3b18724aea491b"],["/2020/09/02/2020-09-02-1/index.html","b4c79d10a0e4f3d1ff4fee0cbcdab75a"],["/2020/09/02/2020-09-02-2/index.html","a4f8ef9440f1fa6b01ce40fbaedfceed"],["/2020/09/03/2020-09-03-1/index.html","025dcf827a093de34fddf40a8e5d3583"],["/2020/09/03/2020-09-03-2/index.html","236643a61d87bc97ed40a295de4aa2e1"],["/2020/09/04/2020-09-04-1/index.html","477632483126f29b011320f235c4c670"],["/2020/09/05/2020-09-05-1/index.html","3e98d810b08167dc7c5cc3ab6b6a8f4c"],["/2020/09/06/2020-09-06-1/index.html","f19b4f746bf4df8b9ca1c6d073afe7be"],["/2020/09/07/2020-09-07/index.html","ba809121acff1cedd8853c52d3da768c"],["/2020/09/08/2020-09-08-1/index.html","caf0db63b1e82ac5e7d0b84504517292"],["/2020/09/08/2020-09-08-2/index.html","a3a7df909dffbb547ea9c45656ce6f9e"],["/2020/09/09/2020-09-09/index.html","e73ed2456b283ce5251f7977bb17cdac"],["/2020/09/10/2020-09-10/index.html","244127643e5bbc05d408ffe447702d4f"],["/2020/09/11/2020-09-11/index.html","94236d31a773039d2b0744ac26431fd9"],["/2020/09/12/2020-09-12/index.html","091a9d979cdaccd5123a12a66358c2a7"],["/2020/09/13/2020-09-13/index.html","0b0c2eb13fef96ba568d18add8b7b568"],["/2020/09/14/2020-09-14/index.html","c2cd48ec588748907c309f007cf30117"],["/2020/09/15/2020-09-15/index.html","7ce91fb5d16f57d69e74c4e650f53051"],["/2020/09/16/2020-09-16/index.html","bbab1b5700a598099fd8a67f0fcd2c8e"],["/2020/09/17/2020-09-17/index.html","e8a2b6c4ee68fbc53fdd8f712d93614b"],["/2020/09/19/2020-09-19/index.html","051aee81fd2d0dfb797aeea28c87995b"],["/2020/09/23/2020-09-23/index.html","de02abbd043abb4cc2de5b8e1dd93bcf"],["/2020/09/24/2020-09-24/index.html","a3aff4e506acdd4b290ca7758f9b14c9"],["/2020/09/26/2020-09-26/index.html","bf7ea5eb64ae68367619e781979f9201"],["/2020/09/27/2020-09-27/index.html","64d15b914619b3bf8ce9a65650136c7a"],["/2020/09/28/2020-09-28-2/index.html","dae730e60ef880bfa6904542cd4e9513"],["/2020/09/28/2020-09-28/index.html","27db25ead9ed61422a0ac9d80560ee03"],["/2020/09/29/2020-09-29/index.html","746b07c3ff840b643ad379bb43bd931d"],["/2020/10/03/2020-10-03/index.html","68c4af0982c129a4fd671639684dbeb0"],["/2020/10/04/2020-10-04/index.html","2f4424c816c39242eaccfe03586eda7e"],["/airplayervisual/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/airplayervisual/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/airplayervisual/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/airplayervisual/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/airplayervisual/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/airplayervisual/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/airplayervisual/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/airplayervisual/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/airplayervisual/index.html","2f44d35fbb77c5c0fa0921ebe6ec9bda"],["/airplayervisual/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/airplayervisual/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/airplayervisual/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/airplayervisual/js/jamsetting.js","7927507e0080ddf55c6d8b5f526bd942"],["/airplayervisual/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/airplayervisual/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/airplayervisual/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/archives/2015/05/index.html","e26899d1fd7efd8eeab23e5d4472f792"],["/archives/2015/06/index.html","e685eecea17fae2c3e3f26d74761b681"],["/archives/2015/12/index.html","3371cd68ef1412769731bfa41be09dea"],["/archives/2015/index.html","b0141c688e10ee579eaffb79e88a09f5"],["/archives/2016/06/index.html","90ef61a36afb165785ab195f75562ce9"],["/archives/2016/12/index.html","66736463d4fda5c6831d1ed5db642823"],["/archives/2016/index.html","39eaa8b08b2af2246217d735bc9acaf4"],["/archives/2017/02/index.html","46faf806ef5edc93565207199fe0c4a4"],["/archives/2017/03/index.html","11bc91ef5dd394bcf52bb73cb3f16cf6"],["/archives/2017/04/index.html","6e406cbc04f2f5f9eecc21968c389e5d"],["/archives/2017/05/index.html","fe10b2293620edf69dabe2525f447d80"],["/archives/2017/08/index.html","46e5c049689c3bd41adec8f0ffbfa96f"],["/archives/2017/09/index.html","fb2b3d24f6e2458eb9c39f7028c607ee"],["/archives/2017/10/index.html","dcf924fde7a07b8c330fb17e7daaf864"],["/archives/2017/11/index.html","4dafda9f1867bc5ec185eaf5cf708171"],["/archives/2017/12/index.html","1a11bb3729cda50616531ea7eaf09bfd"],["/archives/2017/index.html","55312ff53e5c29806210cec2e1e95bc3"],["/archives/2017/page/2/index.html","03d64aa9874c8fdb681ad3931f970aaa"],["/archives/2017/page/3/index.html","f90bd8abe0d77ee3b53b607d1445feec"],["/archives/2018/02/index.html","7fa0d511a03a564f3b5a2b033d30484e"],["/archives/2018/03/index.html","7f5028dba3771927cefb7df907676649"],["/archives/2018/04/index.html","46523f2e9ae5efe53c62048ec837bffd"],["/archives/2018/05/index.html","976104aada0d99a354efc10420a0d25c"],["/archives/2018/06/index.html","80b221f149bbdce8ef71908bff6b4b65"],["/archives/2018/07/index.html","6ade2d70a8d89916f5cd2ff9d0f3760a"],["/archives/2018/08/index.html","8cba0b09cab0a455cb08fbc7eca132b1"],["/archives/2018/index.html","2d6b5631bfdffa64c7ccbc236dd652d4"],["/archives/2020/07/index.html","4fd214a206a295c829411b0634ac3087"],["/archives/2020/08/index.html","b01e7e162e07c4ce0ffb14f62bc075c7"],["/archives/2020/08/page/2/index.html","4c3dccff31f348ac070e98eb71bcbb54"],["/archives/2020/08/page/3/index.html","1063e63bda63424f86a0eaa760d4416e"],["/archives/2020/08/page/4/index.html","21eeddca864299767618b1bc0a2757c8"],["/archives/2020/09/index.html","ffe846307b94b1d9d0851daa1a3fb1b9"],["/archives/2020/09/page/2/index.html","715319f7b2eb58a9e2f7eaf597129ad4"],["/archives/2020/09/page/3/index.html","f67c55f207c22ccac288e53923c5a7e9"],["/archives/2020/10/index.html","00f87d00e2c4184f6147aa2dbbaf028d"],["/archives/2020/index.html","e593611e7028549f3cef5f408ff9fef1"],["/archives/2020/page/2/index.html","13fca4bf8e19075850712561e3694534"],["/archives/2020/page/3/index.html","151d4ced6dffc7f793d6af85d29406b0"],["/archives/2020/page/4/index.html","d00bccb970c4ad9e8a1ddceb98a6b61f"],["/archives/2020/page/5/index.html","0d1203b1ef3be1643d60089729e1f819"],["/archives/2020/page/6/index.html","f14e5db39b4c47aaae40714155e36d2b"],["/archives/2020/page/7/index.html","a183d600f7eafe1e9f8722dedc42a7dc"],["/archives/2020/page/8/index.html","e43fe3ea3e76ce5dd90c933c865b848e"],["/archives/index.html","4bd51cb372f44d1b36429f25aef94024"],["/archives/page/10/index.html","c06d1943dc120193ff5e1e458e3f0636"],["/archives/page/11/index.html","b1e337484cedbe87723fd20b67307c82"],["/archives/page/2/index.html","472b6fed67fa332c04b69fb79a8296c2"],["/archives/page/3/index.html","579c31c1e4c244bbabec7def57035415"],["/archives/page/4/index.html","d0f12dfe3010b3da09e1a2aeb6f5b00f"],["/archives/page/5/index.html","f0f5b9a214ac04e1f09f7bfd74d477d7"],["/archives/page/6/index.html","6296bc63da7e2f50335b31fdbe2856bf"],["/archives/page/7/index.html","2566482d17552433b6c4e0e2ab9f9e07"],["/archives/page/8/index.html","83ce41fa877d9a5b9e7ea059debb737d"],["/archives/page/9/index.html","490fee97e7e075d8c8a7a56e559f8e0e"],["/categories/NHK听力练习/index.html","ee54c7abdf8dc27225327beed9e76c42"],["/categories/NHK听力练习/page/2/index.html","43f50961dd84451e9aa4716972ca6d08"],["/categories/NHK听力练习/page/3/index.html","6e2f30d98d38812eb0457769ef70cb8e"],["/categories/NHK听力练习/page/4/index.html","7774dc3ae9fd2a1c443a309c986cb77e"],["/categories/NHK听力练习/page/5/index.html","24d1d3bf2e961a249f202aa44dfa3b09"],["/categories/NHK听力练习/page/6/index.html","b10acea8ba491c4e73a59b6a5cb052c5"],["/categories/作品集/index.html","5c27c883597452aab425f68eaa83df4a"],["/categories/作品集/page/2/index.html","77952b1adf853e538ed5c1dc6f747c9d"],["/categories/学习/index.html","dc5af7d7adb1fdefe97799dd90483df6"],["/categories/学习/page/2/index.html","e1082115db5145a0ac05558037749723"],["/categories/学习/page/3/index.html","786eefe697e30cfc06e69c226d272adf"],["/categories/游戏评测/index.html","ebea5d5511ce6bf2da1069bc0505c930"],["/categories/生活趣闻/index.html","f54d98880a957adbf243b71827027950"],["/categories/随想/index.html","9164a878b504c3911c89cf5cb26d45c7"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/addcss.css","59cae1ddbe6925c34f846ffe12d19921"],["/css/background.css","32d5acccbb94f987faf37cfdc3fd06df"],["/css/calendar.css","0090a32d2a61d42c5bfed254bfba078c"],["/css/clock.css","65602c2385c7eab42ee3804cd6ee0a5a"],["/css/danmu.css","2a5b914a9592bcd353425c6d5fa7af8e"],["/css/index.css","36eb36d0f5531dd7a8f4c8f925188615"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/loadingline.css","bc1ee020a6a11fea17b915b97e6978bf"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/html/calendar.html","bddcec1edba7f4c49fe5cd75f8cdf5b2"],["/html/shiyan.html","0b0963ebafe19b004fbbf85951cf2568"],["/html/shiyan2.html","0d415cded82a10702989b7ebcd9927e6"],["/icon.png","8ec68de45d18642ba9baf2447e62f476"],["/images/AMJ1.png","d27a6725d1aaaf5324248da4312ab6c2"],["/images/AMJ2.png","00e22eba5901e5bd674e42228cd5bd26"],["/images/AMJ3.png","c8c9ea6348dfcad3a641899d5b587431"],["/images/FOTO1.jpg","4b6f100861908e2c7044cffbdb4a0c1a"],["/images/MVVM.png","ea5a002ee2f85c71a0db51d5adb5de19"],["/images/UT.jpg","367f4e432f9db55a92b2a290c4b0a476"],["/images/UX.png","a183974e958d41d1b6acec70bb7ea00a"],["/images/WindowsTerminal.png","8ac29cb56b8a1768cf7de071e9f1ae6f"],["/images/air-w.png","c1cc32f9d3e17551ca11a7d18a0b533a"],["/images/anzhuang.jpg","912b2489957f8344406edc5e5cebe5fa"],["/images/api-setting.png","2c0bb074390779721cba009e96c5417c"],["/images/apikey.png","1f31121b190eb1f990bcc3e27524bc03"],["/images/backpic1.jpg","86a6fa88167feb338fbf1a4e9057114b"],["/images/calendar.png","86319b08b93be7c8bc47cdba7a169563"],["/images/clock2.0.png","0a0f122c7a25262fc02ee99df0ef21eb"],["/images/example.png","aaac9983e5d59f919bf282dcff2edb3c"],["/images/foto17.png","28db4c6608ad1ee6b34238cafab25e5e"],["/images/foto2.jpg","be95b922512d004a61f83c97af3e2602"],["/images/foto2.png","0dc07d4e1b00526a273a89dc8b81548d"],["/images/foto3.jpg","551c0616c92c4ee7cc17dd458b3c46e9"],["/images/foto4.jpg","9d1d9fea759a41afc0061866e400339a"],["/images/foto5.jpg","984f618b15372f37d54f507e6f379f10"],["/images/foto9.jpg","b683fc0b998e80ff8f5a3e45e889807c"],["/images/girlpic.png","ff1e8427ed555af639e6d849f8f648f1"],["/images/girlpic1.png","698e5570e821c3cae643cc9777c2292e"],["/images/girlpic4.png","551882e4b9b6afb79000fd34c0dbf5e5"],["/images/headimage.png","332502f36a0297b30cb7969fe6de8451"],["/images/hexo.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/hexoWT.png","c027cc9f5665c7d7ba657e7a4bb40017"],["/images/his-json.png","7d8a71e38ab684107446e5c72c31854e"],["/images/history.gif","0459a3dcf2317253de0b34482880c63c"],["/images/idea.jpg","5eb08bf6c965588f03c8860f201cac45"],["/images/life-cycle.png","02f39ea5c041d45938fda4b50f234cb7"],["/images/life.jpg","74d2d9c5f48ec59e3badeec690941812"],["/images/listen.jpg","9d4f73cd5634f43deaed4f9aca03f9a3"],["/images/magnet.png","4899a924f3de0d19dbe0415128c07d65"],["/images/magnet1.png","8d010eb86ca943e036adaa7de57aee7d"],["/images/magnet2.png","293cb414a8ab93b43bde3bebf9cf0cfc"],["/images/magnet3.png","1923148630e2e094ff80bf35aa604c10"],["/images/magnet4.png","9bb4f963ac1c09f02d62525f513f492c"],["/images/meilu/1.jpg","cd67abcc3f543b5c66adc4f9d9c5c628"],["/images/meilu/10.jpg","ac9fb2711e477b5db1c3acb57e899045"],["/images/meilu/11.jpg","364caad6dfc356a3dc630fa067e48e88"],["/images/meilu/12.jpg","274767e5708f79934e5bdbf73eda8f0d"],["/images/meilu/13.jpg","dcab12b84454770b208913db63e825ac"],["/images/meilu/14.jpg","037cdd048284e621f27e17a2c59e8ea7"],["/images/meilu/2.jpg","f6cdb65ae3fad4523b32f5ee38696b60"],["/images/meilu/3.jpg","9e5df3612c2d93bf57313186c954aea5"],["/images/meilu/4.jpg","69ef2d6f4bcd79cf4b4e672b60c6751e"],["/images/meilu/5.jpg","ce81ca16def7613b7ebb368fb554f14f"],["/images/meilu/6.jpg","cafd5b62305f806754a75cc3af8c3b77"],["/images/meilu/7.jpg","b8ae865d386e1e713a6034da6b090c10"],["/images/meilu/8.jpg","afad7a7bf1066c817a8d2e7566bc780d"],["/images/meilu/9.jpg","72f9649f56b564eacf23ce3dacb88029"],["/images/metroui.jpg","5503bfffd450d9ab572b67ea00941571"],["/images/metroui/1.png","79a03b408c19c74eeaa8ff6e17a03f9d"],["/images/metroui/10.png","8309fed71a15c78f2dfa3af1ff75a5f3"],["/images/metroui/11.png","aaf1a007cbae12f93cc2688bace18d28"],["/images/metroui/12.png","0758ea282c3828c47e5c64520ff85783"],["/images/metroui/13.png","12ca7b511927cd4b26e97f3b20908a32"],["/images/metroui/14.png","f44ba7680f7b36df437e2ae2588d0565"],["/images/metroui/15.png","e8927c78b125b805af7aa86fee815ab6"],["/images/metroui/2.png","e604d3c662b996f06f22753ba9ab379f"],["/images/metroui/3.png","664e3b7490f2f95d5547b8ba79a65456"],["/images/metroui/4.png","c0f255344cafc303a1d9c7404da37149"],["/images/metroui/5.png","da2074cdb1298aca826abc1a5c441300"],["/images/metroui/6.png","efef2f087127614b4e03bcbe9a347018"],["/images/metroui/7.png","a4d34b1a2dbe3a58d3a92276880be039"],["/images/metroui/8.png","1d34a626bbaa898a60d4501936bcf962"],["/images/metroui/9.png","0663697c1667b377fe2623bd65e00b31"],["/images/metrouilogo.png","aea81b42d1c2c96440f74cf56ad82e2f"],["/images/nhkimage/2020.08.01.png","af4c55b2ae1d5ab2f56c75a87fcdfdb3"],["/images/nhkimage/2020.08.02.png","c355d41b90f5c65823f96c5f6868ce53"],["/images/nhkimage/2020.08.03.png","fddcedb40d7f28b2ccb90814351ad5c8"],["/images/nhkimage/2020.08.04.png","8b4518ec5a8513f442980ed7167136b1"],["/images/nhkimage/2020.08.05.png","590abfb19334b0c3cee5a005674f2253"],["/images/nhkimage/2020.08.06.png","d469e21100c42435e88f2bdf07f93da1"],["/images/nhkimage/2020.08.07.png","3ca9e2c8b8a09a38423d73cd36e8de9d"],["/images/nhkimage/2020.08.08.png","4420c2d899fe4eb90c48bae0da8418a2"],["/images/nhkimage/2020.08.09.png","df14be338f9c920818dd1daa6aa955ee"],["/images/nhkimage/2020.08.10.png","c4e2ed023cd3dbfd4986add35ca9357c"],["/images/nhkimage/2020.08.11.png","cf562339e57f673d394f3e6cdd1f60cb"],["/images/nhkimage/2020.08.12.png","81dfa179fea3052ddcf73912ea368f67"],["/images/nhkimage/2020.08.13.png","8cf26c2642e7a27cbd86fcbda8bae8d9"],["/images/nhkimage/2020.08.14.png","d88eeb678b3ed3651d597e61957e264a"],["/images/nhkimage/2020.08.15.png","b9879f193867edcffeefce62c9dc7153"],["/images/nhkimage/2020.08.16.png","46cb914aa1d556561897767ec9ff66a0"],["/images/nhkimage/2020.08.17.png","ea1af9645b5cc9cbaafe70a91dd15cca"],["/images/nhkimage/2020.08.18.png","e87e4de39a6f06cf4283a63af92dd8de"],["/images/nhkimage/2020.08.19.png","8001a951513b542a98ce1151be5bd87b"],["/images/nhkimage/2020.08.20.png","4bc8fafa3ecce30d340b1350715d78e3"],["/images/nhkimage/2020.08.21.png","07ad1337e127922abff27da6c672549b"],["/images/nhkimage/2020.08.22.png","b2b5d53ba46015f64048f9d803b12179"],["/images/nhkimage/2020.08.23.png","225af8c0cabe5218ec634d1b8815fd95"],["/images/nhkimage/2020.08.24.png","1d54a484a6e2395aabe9be005cd90361"],["/images/nhkimage/2020.08.25.png","8008ba169cfce0ef2041329cd29b6b77"],["/images/nhkimage/2020.08.26.png","72a2b8094003a54c97a34ea97cf21bc3"],["/images/nhkimage/2020.08.27.png","893407e604804d215c8fef8bcd5f2684"],["/images/nhkimage/2020.08.28.png","b542280b7341759890a99cbd44d822c5"],["/images/nhkimage/2020.08.29.png","620e2e7d4772e39615fd1a88cdf49717"],["/images/nhkimage/2020.08.30.png","f645d7ba2dcb506f9ec6fb9244425ad7"],["/images/nhkimage/2020.09.03.png","c5262f3aa87190e0273383ea1e445681"],["/images/nhkimage/2020.09.04.png","c07149c32aa41c03bc7dac82a713f6b2"],["/images/nhkimage/2020.09.05.png","4e43556e1cb3b7f4d75f0f6127616a54"],["/images/nhkimage/2020.09.06.png","1021d2ae04a7f109404f857a2a7629cf"],["/images/nhkimage/2020.09.07.png","db9827e9f0a4cf1401b559b4644a0204"],["/images/nhkimage/2020.09.08.png","efe1030b73dc1c01f169c3122a194426"],["/images/nhkimage/2020.09.09.png","f6ba3a1c6cdeff88404ebe2a646f2eb5"],["/images/nhkimage/2020.09.10.png","3471b05d02113517359a9e2167befcfa"],["/images/nhkimage/2020.09.11.png","921a541a8bffb1aa436df2eb6db7c99f"],["/images/nhkimage/2020.09.12.png","a51f8ebaddba69bb80f9259a30f17e65"],["/images/nhkimage/2020.09.13.png","0399889200493cd2154ffc407e2bc400"],["/images/nhkimage/2020.09.14.png","eaaf3da69a39ed316b7fc8c4d409bb0f"],["/images/nhkimage/2020.09.15.png","5774959ea4061c9298ea174f0862cc3a"],["/images/nhkimage/2020.09.16.png","0c5a00f74020740fda589c02e4b3f917"],["/images/nhkimage/2020.09.17.png","b5aef734e3a7db4862ca3fe4e6769dc2"],["/images/nhkimage/2020.09.24.png","5982a7b3843f4ae43b2b4bc4b0c577d6"],["/images/nhkimage/2020.09.26.jpg","c6415af781fbdd36fdb034f74646129b"],["/images/nhkimage/2020.09.27.png","27aa6f6a8d5534ccd99cff261dcd9eb6"],["/images/nhkimage/2020.09.28.png","0f4318d1ff17a33de364432a1c44b5ad"],["/images/notop.png","d25c272e5ce312a880e04ce8a0b27683"],["/images/pasted-0.png","552608d8f6e39369aa30c6e332a32826"],["/images/pasted-1.png","baafdacee93c99e99418aaedbf524fda"],["/images/pasted-10.jpg","395cff6f64ab5df19baa3572ac98e541"],["/images/pasted-11.jpg","56e5df07c96634638abf7995b25c81ab"],["/images/pasted-12.jpg","61b3f803b85ce3640d7a9ba7efb9da6b"],["/images/pasted-2.png","2f410e53c811f92a6135f48857776f5e"],["/images/pasted-3.jpg","bb5717e691e87355e7d63a5f3a87ae62"],["/images/pasted-4.jpg","10041d0e3567b24b81222ec5075d6492"],["/images/pasted-5.jpg","ac5047a4b48c6cdaee86fa1863e33904"],["/images/pasted-6.jpg","1556ae8d3ad5713d60237ee4d10e81f0"],["/images/pasted-7.jpg","913fde1686587646ddc663bd810cc81d"],["/images/pasted-8.jpg","fc83268081fb4b6b6ecb1ffa1ec5af7f"],["/images/pasted-9.jpg","25e0fa3496591501f5c29d0b802b77d2"],["/images/pet.png","2b8c121909497e57057478856fe48a94"],["/images/pet2.png","dfb1d6a17b527ccc0c600e6ad31f55e5"],["/images/ps1.png","0917ba91f21b6944dc08d35c41a326d2"],["/images/psb.jpg","6a27c58337875c776af0a7667598b401"],["/images/quse.png","7cd1ec12b804305430cb4cdc09c7a893"],["/images/rain.jpg","9c26acc44c692b6a63e134be07b07c18"],["/images/shezhi.png","281bf545f6a4024e2d0b7120bc398a21"],["/images/soul.jpg","d97b4099c0728ff6123d006fa62db86e"],["/images/study.jpg","a9b1cf95ee6bd9f3913e8ec6a6a6f44f"],["/images/tianqizhizi.jpg","dd48d78b4eeaaa52578352f9ef570b14"],["/images/vue.png","cf23526f451784ff137f161b8fe18d5a"],["/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/images/work.png","e521cf5b834292fde1c50e0a0f5802f9"],["/images/xiaoguoyanshi.png","994a3b710d36df0a4630cd9a768c7f7b"],["/images/xiaoguozhanshi-m.png","1fefca18214fc4889d1bb76b81887c9d"],["/images/zfe.one.png","b41f689341882058ffb28c4cee499bde"],["/images/幻想终结之日.png","0025c4d3973bdfedb80db3f78c59fa47"],["/images/时空战纪——游戏建议及意见①.jpg","1337457f14a8dffee66d94f8915b54ff"],["/images/简历.png","d70507ee4615c9e324578c0d777e6855"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","b2816f18531e7470afc88d9f63c2b52c"],["/img/favicon2.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","c0fac440403c015887f737b8d8682cba"],["/js/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/APlayer.min.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/airvisual.js","71cf86bfd452ca01d92438d8266416ee"],["/js/airvisualapi.js","6931bebe1696688d109963187fc2eace"],["/js/background.js","94c8410b174f58594cf81ec99054968b"],["/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/js/calendar.js","a58e02711cc6dec4dc04257e555b8923"],["/js/clock.js","ead1a80f7219c166e1180674b7d8c70b"],["/js/color.js","3730bb4f7b185e6f5130ac28bace968b"],["/js/danmu.js","6b6ae6b7f1b42dd4857541f43b2bb733"],["/js/echarts.js","dc1227b1eba1ba47fd185a387d0a7d37"],["/js/gitcalendar.js","fadfa8a42272cd322118653dca512a7a"],["/js/history.js","20459f7db325e597e64903f4c0d19306"],["/js/historyroll.js","a3e9ac376106816c50a61f9f4306d671"],["/js/jam.js","462c07d3b2e0f20394d994bbcfae37cb"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","790cd2f28594f8affbd4a450037c48ff"],["/js/rain.js","f656dc28e4ab5c3f8414d35f683278c1"],["/js/rainremove.js","ceacf82842b101f7e54a2aaf5f4bb9cb"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/link/index.html","60db7d0e5c4e691d9d33508b024d1aa1"],["/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","0cbb0651562b3da15a1e1e4aa1daf704"],["/page/10/index.html","c843956a687f25dbf77fff97d4c2daf8"],["/page/11/index.html","0119025f76d98bf48d37ea63b90a9e26"],["/page/2/index.html","b33d579fd2239ac36d78051cfb1ca714"],["/page/3/index.html","c9d7fb602559455befeca348cdf7cf83"],["/page/4/index.html","fcc9acd433d394865cce53a7e7d0e23c"],["/page/5/index.html","6b8103ecc7dccc5504098c8f2ab356f2"],["/page/6/index.html","e7885f5a479b49d0b9094ae9e06f3062"],["/page/7/index.html","7d59fe38d218ade3aea17ec1c9168ee6"],["/page/8/index.html","94dc569e31b0fda1c046810a7907b29c"],["/page/9/index.html","77dfc69567284c5879fb10bee29bfe7b"],["/research/index.html","b65f71ce9ff59996c2fa064723f62ffb"],["/sw-register.js","81497b8e5c5f5256c2469505380190f4"],["/tags/Butterfly主题/index.html","b347ddb3b9121d4a721630e96892d417"],["/tags/DIY/index.html","be757ad2c9c20b2722a80ce4cd9ce601"],["/tags/DIY/page/2/index.html","a115571415731e542c39c94b0aa0af37"],["/tags/ICT/index.html","3793d1b28a8257036ee8f2c7953ee347"],["/tags/NHK听力练习/index.html","40e330b0c337cb2d89d2ee3c9277e9de"],["/tags/NHK听力练习/page/2/index.html","f037e17e15303143dd0d81d2c748ac51"],["/tags/NHK听力练习/page/3/index.html","ba4eb6b996a9e71ac881178f40613cc3"],["/tags/NHK听力练习/page/4/index.html","607788365d9beeae8f2c8cd17dab916a"],["/tags/NHK听力练习/page/5/index.html","93cedcbe542912183f71076b3fef8e25"],["/tags/NHK听力练习/page/6/index.html","a0da45791e0ada3cdf4da1f8a04fa388"],["/tags/metro-ui/index.html","6a22cd0d2c6eda90f49508b7e5f5332a"],["/tags/vuejs/index.html","8fbaa2e27dd18bcb25b166db77eae8ae"],["/tags/お盆/index.html","90246a47aa24e0ff9c6bb7e1c4d148a5"],["/tags/世論調査/index.html","b69e57d0d178c32734b2160766b94bf0"],["/tags/作品集/index.html","479dc65cc2228bf31227779b395cc03f"],["/tags/作品集/page/2/index.html","250ed86b7f2e22ee272023885e3ac5a2"],["/tags/农业/index.html","eed15850e372d62e7cb229b0de79671e"],["/tags/历史/index.html","197a68a8f3079b68dc57608b03a64b98"],["/tags/営業時間/index.html","41e244d04ede3fea2c1a4ee1431b485e"],["/tags/国外政事/index.html","0c779aaa1ad040535b34a4f3baf89097"],["/tags/地震/index.html","8fd826fc1088b02156772dc866d756d9"],["/tags/外国政事/index.html","b7ad742b4dc4f3446c511ebc121790ae"],["/tags/天气/index.html","bd7fc99a61f16fa644b01ed7d65d394d"],["/tags/天气/page/2/index.html","ac3c55db84be8c5ba27ce9436ee67bfe"],["/tags/奥运会/index.html","6c8a94c67edeca02842aeb6304d00057"],["/tags/学习/index.html","693a859ac1cc46d9291faa9fa27dd300"],["/tags/学习/page/2/index.html","8db9a104c171f0476ef3f49ceda077fe"],["/tags/学习/page/3/index.html","226ee3f78fde93e058f1dc8ed1643a6f"],["/tags/就业/index.html","c51cc5ff69b5dd5bfa909d251d4efc32"],["/tags/庐山/index.html","fac9fb11b3180b0b7c508c97db986a42"],["/tags/座礁/index.html","4f3dfb05c5356540f744c8ffa441653a"],["/tags/政府/index.html","731d05004fec2fbd1f8b9991167c0847"],["/tags/政治/index.html","2c30832ff6d70de18887d63fedb7a36d"],["/tags/教程/index.html","6712f46e79d6c0b9f5d9d10f3bcaac4a"],["/tags/日本教育/index.html","e237e203ff0502c24b34289e95718fd0"],["/tags/民生/index.html","6f73b46da4f83a08a94c4f4e7451cd40"],["/tags/民生/page/2/index.html","5f193e5b5736650d9d7e1f044261abcd"],["/tags/游戏评测/index.html","5abd90850cf3d249dac63c51f01ca889"],["/tags/游记/index.html","7c2de65c075c50323f31d19ca8aedcfc"],["/tags/生活趣闻/index.html","59a1e3c49e5fff280d4d3c5155ff936b"],["/tags/科技/index.html","b1922e5355ad1d9040f5bf1d43dbcfbd"],["/tags/经济/index.html","eafae732dfcee9770347e1a60c9d4b3d"],["/tags/经济/page/2/index.html","506d9d49acccc432280bf7d3f6d72393"],["/tags/网络教学/index.html","c99d8a923e68d3db0780bb122c915788"],["/tags/舆论/index.html","210f2300f790249cdf66b7bc3cb22a54"],["/tags/虚拟现实/index.html","1e5fd0299b926096efc8fa7644df1c8b"],["/tags/随想/index.html","c474928697819a9701706faf8f3cfa45"],["/tags/障害者/index.html","85eda49d37216964c05def389a48ac7d"]];
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
