/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/05/20/2015-05-20/index.html","2693312df4eab9aadee41d8a0f53a193"],["/2015/06/16/2015-06-16/index.html","6a3d94a55bfd241199f1dc292b24331f"],["/2015/12/12/2015-12-12/index.html","77fa0304905669b1a473e3aebabec7ce"],["/2016/06/08/2016-06-08/index.html","3a4465fc28bba8614e072396d360d98b"],["/2016/12/18/2016-12-18/index.html","70c497ae33bed98b0d1a6225532c97ae"],["/2017/02/17/2017-02-17/index.html","1c487de0e196ce2aa18ac4f70b42936e"],["/2017/03/17/2017-03-17/index.html","f92588f605ab11e7fc830432eacea879"],["/2017/04/06/2017-04-06/index.html","ea256eac93a7156894140f0e8cb554b1"],["/2017/05/17/2017-05-17/index.html","b8caf1fef322a540aff29504004978fb"],["/2017/08/15/2017-08-15/index.html","7cfa371b065a52afcf52e4c8e64c7e03"],["/2017/09/16/2017-09-16-1/index.html","d7e88ad9be502096357578db8c513d86"],["/2017/09/16/2017-09-16/index.html","56c7d54c581018230ca01429d45a7395"],["/2017/09/21/2017-09-21/index.html","394fea295c659679b3d95f30000b426a"],["/2017/09/23/2017-09-23/index.html","dd97e8b3a081da1db530ec8285983297"],["/2017/09/26/2017-09-26/index.html","40b3b1f50bbe4db3609435501dbc186a"],["/2017/09/27/2017-09-27/index.html","20f065dfc372ebe95ae4d26b6ee218e8"],["/2017/10/04/2017-10-04/index.html","4f4df26e7cf34041539da3759f9b8730"],["/2017/10/08/2017-10-08/index.html","b84debffcffa8120e620eab0e2fe6b21"],["/2017/10/09/2017-10-09/index.html","c9fba2ef0d12669eb8037e6dbbd7adb7"],["/2017/10/15/2017-10-15/index.html","480c36d701be433a2231dc89c55ad8ff"],["/2017/10/19/2017-10-19/index.html","55102935a23d0d804937432f45b23397"],["/2017/10/23/2017-10-23-2/index.html","97a1c823f60d63033050b53e5a26d06b"],["/2017/10/23/2017-10-23/index.html","3fa64d24d5ffaddf107a15997fb196ba"],["/2017/11/08/2017-11-08/index.html","e7485d28aef493a5bd32ffe7cfc09106"],["/2017/11/12/2017-11-12/index.html","ba2c63ddc99127bf8557a76daffee1bc"],["/2017/11/15/2017-11-15/index.html","d9c95613ad550993cd91cfe224f7655d"],["/2017/11/27/2017-11-27/index.html","ae885fc89f7bdc08c5017122d2a3dbd8"],["/2017/12/06/2017-12-06/index.html","02243788d8fdbfb1c55c0e54f8f2101d"],["/2018/02/12/2018-02-12/index.html","76980d2d27119687bfd8cd879cd9b292"],["/2018/03/26/2018-03-26/index.html","5263e1af74e68a0b80e8dbd09f950c8f"],["/2018/04/02/2018-04-02/index.html","2ffcb3076cc3a34ba3dae2996f94f031"],["/2018/04/24/2018-04-24/index.html","8802e7597da379aecb1dfd346abf5c75"],["/2018/05/18/2018-05-18/index.html","75211aeaa7e0620f6b7e191a32563905"],["/2018/05/23/2018-05-23/index.html","5234840b321f01b3e4db7f646306ae45"],["/2018/06/08/2018-06-08/index.html","54eeb9a65df3cc6886bee1f05374170b"],["/2018/07/01/2018-07-01/index.html","53ed4225792fe19490b61a607d83c9f1"],["/2018/08/30/2018-08-30/index.html","a57511e40f077313c3ef287b9fb008d6"],["/2020/07/20/2020-07-20/index.html","d29d5ceb999aacf522e05962a792db44"],["/2020/08/01/2020-08-01/index.html","c4d2684f874b79d0630d2d275fd82ab0"],["/2020/08/02/2020-08-02/index.html","72cbffc073ac0be147b6bc222f132a7c"],["/2020/08/03/2020-08-03/index.html","c680fc82fca334899ce1b40871a4afb0"],["/2020/08/04/2020-08-04-1/index.html","f1ed42597465baa82173a7ad3ee08a29"],["/2020/08/04/2020-08-04-2/index.html","ff60a669b0e596efccc6459f258fc549"],["/2020/08/05/2020-08-05/index.html","cece4fe40bc900a62d68b67f1252dde3"],["/2020/08/06/2020-08-06/index.html","66b0010fad36102d504d464544a92b0b"],["/2020/08/07/2020-08-07/index.html","e8805bdc54e77c04bb2ffebf0a50562c"],["/2020/08/08/2020-08-08/index.html","bb7647f2eabc4b3ddfc9061f0d065679"],["/2020/08/09/2020-08-09/index.html","eea184afe49ecc5bf59071e3eaae3b3c"],["/2020/08/10/2020-08-10/index.html","d8e7009aa145bddef5293a905271f8c1"],["/2020/08/11/2020-08-11/index.html","b70f09865025cefbe38c2ba94c46dfe7"],["/2020/08/12/2020-08-12/index.html","07c7e49ca5ccaba05d36e66f017e0dc7"],["/2020/08/13/2020-08-13/index.html","348dcafa4caf0ee43f3bdd2764898cc0"],["/2020/08/14/2020-08-14-1/index.html","dabda75e2b722142f2543c565169a38a"],["/2020/08/14/2020-08-14-2/index.html","d823124ec1e73d22dc107cc77b035809"],["/2020/08/15/2020-08-15/index.html","3f2c588e1f33f4e8327f6f6c6100932b"],["/2020/08/16/2020-08-16-1/index.html","009cd89f400dff06395707c20e3072d0"],["/2020/08/16/2020-08-16-2/index.html","5bda54a877265e4429197ec1b0e188ea"],["/2020/08/17/2020-08-17/index.html","15dc3633a6653bfdf92c875351c8b66d"],["/2020/08/18/2020-08-18/index.html","ee7fdba6067496e27576741366316f78"],["/2020/08/19/2020-08-19-1/index.html","4f5120b64e14a5798d9fe130d00dfea8"],["/2020/08/19/2020-08-19-2/index.html","fb12d6127b7310e794504600876a24d9"],["/2020/08/20/2020-08-20/index.html","3826aaa78adc8d1f5a3b3da125795e77"],["/2020/08/21/2020-08-21/index.html","05764d9c53146ef7781a98bf9b4d166d"],["/2020/08/22/2020-08-22/index.html","ce9dbcefa566e06f57237cae28111955"],["/2020/08/23/2020-08-23-1/index.html","fb3e057cfe3bb6100455445b5ad4e42f"],["/2020/08/23/2020-08-23-2/index.html","ca00a8a4c8acd2bc2a8c1c67db164362"],["/2020/08/24/2020-08-24-1/index.html","dfeb505327d0eeb4ff54e01c7ab21ade"],["/2020/08/24/2020-08-24-2/index.html","407725b03ca3c98c19a6e7438bb6b051"],["/2020/08/25/2020-08-25-1/index.html","a25c8a1986239319599640122295535b"],["/2020/08/25/2020-08-25-2/index.html","cda2e1367b90034550f714fee8956fdc"],["/2020/08/26/2020-08-26/index.html","434704d8686b5e281aeb108635be099a"],["/2020/08/27/2020-08-27/index.html","d49efadce058387e032b4fdbdbf38543"],["/2020/08/28/2020-08-28/index.html","55845b49edd27449634a10d852f03582"],["/2020/08/29/2020-08-29/index.html","a72f32dff9982df066beac092fe20bf4"],["/2020/08/30/2020-08-30/index.html","d7002913ab0c1873956496d19b6240aa"],["/2020/08/31/2020-08-31-1/index.html","0d67fd10f64fd1b2b3b0df3493c0ad21"],["/2020/08/31/2020-08-31-2/index.html","ba017329149cdac51d5c61e2b8a3edf4"],["/2020/09/01/2020-09-01-1/index.html","28517946b464d637a0d3bf6ececc160a"],["/2020/09/01/2020-09-01-2/index.html","436c3f7447dc7b3d2a263b2f263716cc"],["/2020/09/02/2020-09-02-1/index.html","6831fb7c634b34c08b8304b5a0e126d8"],["/2020/09/02/2020-09-02-2/index.html","4edd2966ab74542d7323f85a310069f9"],["/2020/09/03/2020-09-03-1/index.html","2877735c71e0fa1bd9edae74cd405866"],["/2020/09/03/2020-09-03-2/index.html","4a0a43b85c878bbfd9dc837d76a05a3a"],["/2020/09/04/2020-09-04-1/index.html","789fa81a41c2ff2dfbc98a64e6cf80c0"],["/2020/09/05/2020-09-05-1/index.html","83d178b5594ff900e82614d87c035732"],["/2020/09/06/2020-09-06-1/index.html","7efd803185e024881ff0905a5543a19c"],["/2020/09/07/2020-09-07/index.html","1667e78eb8ac68b74c68d90ba021eb88"],["/2020/09/08/2020-09-08-1/index.html","dc6cc6acc4a85e3975879519dfb38f5a"],["/2020/09/08/2020-09-08-2/index.html","60b685985b602281d9f56b21b6d4b2ad"],["/2020/09/09/2020-09-09/index.html","fe0b51430b70480e5fb8935b09dadaf0"],["/2020/09/10/2020-09-10/index.html","6a5cb81d3507a3862344314479448fd3"],["/2020/09/11/2020-09-11/index.html","f5567b4fccf655fb5bedefb1fb76f9f1"],["/2020/09/12/2020-09-12/index.html","e1f886ce94fc4b2b63fb881308f307dd"],["/2020/09/13/2020-09-13/index.html","6cbf66294f7a93832f7c0bba053c83d2"],["/2020/09/14/2020-09-14/index.html","b4c0220d5b47a354413dbb4605adf01a"],["/2020/09/15/2020-09-15/index.html","3e0a53d52b43aec06dcde776f3ce6ba2"],["/2020/09/16/2020-09-16/index.html","976f5a460a6c4c1bf00b4f4230297907"],["/2020/09/17/2020-09-17/index.html","591647e54cdc2c6635e21ddecd54fbf6"],["/2020/09/19/2020-09-19/index.html","f6fbcea2b499455575717400f25152f6"],["/2020/09/23/2020-09-23/index.html","e31f6fc47d59f792f1ad469440e0ebcf"],["/2020/09/24/2020-09-24/index.html","f60cf96e3a06ae9aae393e0e6fe57ce5"],["/2020/09/26/2020-09-26/index.html","78480ed9b40c7afe5c891efd8a5214d9"],["/2020/09/27/2020-09-27/index.html","cfb31b31f64b96b6f13db2185855c17c"],["/2020/09/28/2020-09-28-2/index.html","c749837852d6483ec06faf9522950286"],["/2020/09/28/2020-09-28/index.html","4ed34cdd78b363328aa1ca1ea818ea82"],["/2020/09/29/2020-09-29/index.html","66355d674cbfee35ba409d2f4f714d76"],["/2020/10/03/2020-10-03/index.html","20d4d34b306cace300c24f88c73583c9"],["/2020/10/04/2020-10-04/index.html","97df96d761e12785087abca6b3b32792"],["/2020/10/09/2020-10-09/index.html","f0d30a1252699aea1448781b598248e1"],["/2020/10/10/2020-10-10/index.html","6f0c1598c8a8edbcadafd3b68e9b3a53"],["/2020/10/11/2020-10-11/index.html","2dc923093cb3eb714cc7cdb6457756d4"],["/2020/10/12/2020-10-12/index.html","a825e8b299b36191db0a6bd1a1efad5d"],["/2020/10/13/2020-10-13/index.html","cdc2354198e5a79ba9341ac29830e4f7"],["/2020/10/14/2020-10-14/index.html","d303e0c7a1bd6d1ec89c949d0642dcff"],["/2020/10/15/2020-10-16-2/index.html","ab6b5ba5658d638aa2b85be5c70154ae"],["/2020/10/16/2020-10-16-1/index.html","64c497d575d9605ee48adcd0622dda8d"],["/airplayervisual/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/airplayervisual/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/airplayervisual/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/airplayervisual/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/airplayervisual/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/airplayervisual/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/airplayervisual/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/airplayervisual/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/airplayervisual/index.html","aaa3e2471175ba078e4e61e22b12ea13"],["/airplayervisual/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/airplayervisual/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/airplayervisual/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/airplayervisual/js/jamsetting.js","7927507e0080ddf55c6d8b5f526bd942"],["/airplayervisual/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/airplayervisual/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/airplayervisual/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/archives/2015/05/index.html","ece78db5c640987a42b9e3d6238c0c7b"],["/archives/2015/06/index.html","e0ffb961854ca430cc2942ce96a08b47"],["/archives/2015/12/index.html","b5905a5af663e2d45a3f53161dbb836f"],["/archives/2015/index.html","2a0cab2f41172dc163ba3a273bbb8eed"],["/archives/2016/06/index.html","e13382d022d71bba2260eeee50cc6cb3"],["/archives/2016/12/index.html","538cd70f7ec93286db011ecd9d9d5f5e"],["/archives/2016/index.html","a234f646de80a02f459cce2c89abcd23"],["/archives/2017/02/index.html","1ff750ed957cb42b5e57d3be5ab5a30a"],["/archives/2017/03/index.html","8903b8acc95b489e7933e902390aa23e"],["/archives/2017/04/index.html","49051cb26ce06bc3b49c399dae866418"],["/archives/2017/05/index.html","39811b3d0d7641cd1d08955cd703e0d4"],["/archives/2017/08/index.html","56bfbe74d9fd85ad01063bf42d3266d3"],["/archives/2017/09/index.html","8ad6b77407f8575419b6f8babad97209"],["/archives/2017/10/index.html","0cfdff5493586956f3457fc5ea97a0e0"],["/archives/2017/11/index.html","2eaaf90854542d63f3488a190953074a"],["/archives/2017/12/index.html","95ee6911eb96da37f69fa6c89a4f4fbd"],["/archives/2017/index.html","9397f8f1958a46af21c5930b6b099d8e"],["/archives/2017/page/2/index.html","a245f806f776ce2a9c405c93916db8a8"],["/archives/2017/page/3/index.html","c6e7ce18c81c8bd158b11a373b024350"],["/archives/2018/02/index.html","7c77cc562574059d07b6b3fcb1beeb19"],["/archives/2018/03/index.html","a88b1c639f2387ee5747b71805ad4281"],["/archives/2018/04/index.html","bec7c1809da346496fd7e7c5fb0de028"],["/archives/2018/05/index.html","0fcff6ef96725ac6a1511ab4e2dbd485"],["/archives/2018/06/index.html","ebd933c132cb0046e86513780ef3dfbe"],["/archives/2018/07/index.html","87a07a4a46dd64fa60310a99cf0c7365"],["/archives/2018/08/index.html","f28d6eaa9e1d40a77a14abe85cfa42a1"],["/archives/2018/index.html","958fdfd64a6d5e5c2431ee9fdabe009e"],["/archives/2020/07/index.html","2b0763593bd4010552d6b2de6ee992ee"],["/archives/2020/08/index.html","0480a1388609767a930a4cbcd0baa607"],["/archives/2020/08/page/2/index.html","de4436781b1e80871898a0920cad0e0c"],["/archives/2020/08/page/3/index.html","61a9e11acb6227090a8385be8a08e746"],["/archives/2020/08/page/4/index.html","a520fdaf3cf472d4a0f2bd75ff2059f6"],["/archives/2020/09/index.html","7906fff13296b7ba3a89b907bf884562"],["/archives/2020/09/page/2/index.html","25dda40c193efb33907abb10148273b7"],["/archives/2020/09/page/3/index.html","ed3d333afe3d0e686559ebc00ccebb90"],["/archives/2020/10/index.html","3280eaef70c68d90c2903dc9fbacefb4"],["/archives/2020/index.html","9e389174aa1b89391653f62c6093718c"],["/archives/2020/page/2/index.html","78e6c353538c53bcc4dd0881e2307a59"],["/archives/2020/page/3/index.html","8d76958eac3dc4fe3d22dca60e3277cf"],["/archives/2020/page/4/index.html","7edd8b2694210ac4ebff3d656df21b3f"],["/archives/2020/page/5/index.html","d1359d4e4dabe9f3e1fa81b284cd8c47"],["/archives/2020/page/6/index.html","147dcfc43a4182e316a06240187a1790"],["/archives/2020/page/7/index.html","9de2e9d9dea54af1b12babb2f616f84b"],["/archives/2020/page/8/index.html","113352599aaffc95ebad3d1cd3478e84"],["/archives/index.html","afae0508ef8b139313eb66a4dd63bb92"],["/archives/page/10/index.html","44e9ba90beba933df0b309a157df96f5"],["/archives/page/11/index.html","b21c978802d9e3a052871a0a9e0f5b40"],["/archives/page/12/index.html","da970a4f14f9edf11009d9c66ce241e6"],["/archives/page/2/index.html","60667b738286a1909363a20da103a3a4"],["/archives/page/3/index.html","4aa791e658461af0113e0f3cb56609b8"],["/archives/page/4/index.html","6a6d647bddf8f1ed53714fd94f030803"],["/archives/page/5/index.html","5c73eede6b3ad9f1e49285b1fcd60c99"],["/archives/page/6/index.html","7f75312006ac77ff5017828070e45ffd"],["/archives/page/7/index.html","16df5bb7263d49ff0ce8aa2785b8cca1"],["/archives/page/8/index.html","7d220088ddc0115119bf22402ae4668a"],["/archives/page/9/index.html","5e8290494baf871476942811b78d25c3"],["/categories/NHK听力练习/index.html","dbd99030bc591b172a2223e6238163e4"],["/categories/NHK听力练习/page/2/index.html","1154423c0c16f58f16c06be4f1bee114"],["/categories/NHK听力练习/page/3/index.html","040aebdc5b5c86d12bb227c4247e6f23"],["/categories/NHK听力练习/page/4/index.html","08509abe80e8f0c162b0ea088b01c697"],["/categories/NHK听力练习/page/5/index.html","e0fe2a76273bce8d37ac660e532a9992"],["/categories/NHK听力练习/page/6/index.html","24abb1a9d7753319914d9b4d4a854e3d"],["/categories/作品集/index.html","63f2ce4c84c092876acc5d9e8d342b67"],["/categories/作品集/page/2/index.html","02abab23102d3eceaab9355c153bcf1c"],["/categories/学习/index.html","7ef008e17dec05770cd5409a7d704c1f"],["/categories/学习/page/2/index.html","201badb0469963d3d04b1a428ae0b553"],["/categories/学习/page/3/index.html","c893d81dd95e82a8bcaabe286dc0380d"],["/categories/学习/page/4/index.html","22b9822f4006f05f43b248ebecd85a1c"],["/categories/游戏评测/index.html","525084808b1a7e893e910df9636e20ae"],["/categories/生活趣闻/index.html","25eb8c6f6d24a85ad9bd5cdd2f53533f"],["/categories/随想/index.html","948fe8f3528e750ec668a61a87a06a48"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/addcss.css","59cae1ddbe6925c34f846ffe12d19921"],["/css/background.css","32d5acccbb94f987faf37cfdc3fd06df"],["/css/calendar.css","0090a32d2a61d42c5bfed254bfba078c"],["/css/clock - 副本.css","65602c2385c7eab42ee3804cd6ee0a5a"],["/css/clock.css","9db53e3bffb704c740aa83bddaf8b999"],["/css/cursor.css","c1a23e168c5b794ff367eb0ae77eb26b"],["/css/danmu.css","2a5b914a9592bcd353425c6d5fa7af8e"],["/css/index.css","e0ecbfc6d569c15e3c74302c0114ce1f"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/loadingline.css","bc1ee020a6a11fea17b915b97e6978bf"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/html/calendar.html","bddcec1edba7f4c49fe5cd75f8cdf5b2"],["/html/shiyan.html","d4aca8ea8e02ade608361da0ffde5763"],["/html/shiyan2.html","31b7b89bf2000f5231c89de6a7df1654"],["/icon.png","8ec68de45d18642ba9baf2447e62f476"],["/images/AMJ1.png","d27a6725d1aaaf5324248da4312ab6c2"],["/images/AMJ2.png","00e22eba5901e5bd674e42228cd5bd26"],["/images/AMJ3.png","c8c9ea6348dfcad3a641899d5b587431"],["/images/FOTO1.jpg","4b6f100861908e2c7044cffbdb4a0c1a"],["/images/MVVM.png","ea5a002ee2f85c71a0db51d5adb5de19"],["/images/UT.jpg","367f4e432f9db55a92b2a290c4b0a476"],["/images/UX.png","a183974e958d41d1b6acec70bb7ea00a"],["/images/WindowsTerminal.png","8ac29cb56b8a1768cf7de071e9f1ae6f"],["/images/air-w.png","c1cc32f9d3e17551ca11a7d18a0b533a"],["/images/anzhuang.jpg","912b2489957f8344406edc5e5cebe5fa"],["/images/api-setting.png","2c0bb074390779721cba009e96c5417c"],["/images/apikey.png","1f31121b190eb1f990bcc3e27524bc03"],["/images/backpic1.jpg","86a6fa88167feb338fbf1a4e9057114b"],["/images/calendar.png","86319b08b93be7c8bc47cdba7a169563"],["/images/clock2.0.png","0a0f122c7a25262fc02ee99df0ef21eb"],["/images/clock3.0.png","8e04375c183c637b65fb50ed40f46466"],["/images/example.png","aaac9983e5d59f919bf282dcff2edb3c"],["/images/foto17.png","28db4c6608ad1ee6b34238cafab25e5e"],["/images/foto2.jpg","be95b922512d004a61f83c97af3e2602"],["/images/foto2.png","0dc07d4e1b00526a273a89dc8b81548d"],["/images/foto3.jpg","551c0616c92c4ee7cc17dd458b3c46e9"],["/images/foto4.jpg","9d1d9fea759a41afc0061866e400339a"],["/images/foto5.jpg","984f618b15372f37d54f507e6f379f10"],["/images/foto9.jpg","b683fc0b998e80ff8f5a3e45e889807c"],["/images/girlpic.png","ff1e8427ed555af639e6d849f8f648f1"],["/images/girlpic1.png","698e5570e821c3cae643cc9777c2292e"],["/images/girlpic4.png","551882e4b9b6afb79000fd34c0dbf5e5"],["/images/headimage.png","332502f36a0297b30cb7969fe6de8451"],["/images/hexo.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/hexoWT.png","c027cc9f5665c7d7ba657e7a4bb40017"],["/images/his-json.png","7d8a71e38ab684107446e5c72c31854e"],["/images/history.gif","0459a3dcf2317253de0b34482880c63c"],["/images/homework1.png","e8d2f64d0785519ea7779016208a2900"],["/images/idea.jpg","5eb08bf6c965588f03c8860f201cac45"],["/images/key1.png","f2a370e02ad6c5a101db20b47a9a0008"],["/images/key2.png","21dc40bbe0377cd9fe85a9cb431c18f0"],["/images/life-cycle.png","02f39ea5c041d45938fda4b50f234cb7"],["/images/life.jpg","74d2d9c5f48ec59e3badeec690941812"],["/images/listen.jpg","9d4f73cd5634f43deaed4f9aca03f9a3"],["/images/loading.gif","ffa0804a5d99e2d5b39e05cda6d6b28b"],["/images/magnet.png","4899a924f3de0d19dbe0415128c07d65"],["/images/magnet1.png","8d010eb86ca943e036adaa7de57aee7d"],["/images/magnet2.png","293cb414a8ab93b43bde3bebf9cf0cfc"],["/images/magnet3.png","1923148630e2e094ff80bf35aa604c10"],["/images/magnet4.png","9bb4f963ac1c09f02d62525f513f492c"],["/images/meilu/1.jpg","cd67abcc3f543b5c66adc4f9d9c5c628"],["/images/meilu/10.jpg","ac9fb2711e477b5db1c3acb57e899045"],["/images/meilu/11.jpg","364caad6dfc356a3dc630fa067e48e88"],["/images/meilu/12.jpg","274767e5708f79934e5bdbf73eda8f0d"],["/images/meilu/13.jpg","dcab12b84454770b208913db63e825ac"],["/images/meilu/14.jpg","037cdd048284e621f27e17a2c59e8ea7"],["/images/meilu/2.jpg","f6cdb65ae3fad4523b32f5ee38696b60"],["/images/meilu/3.jpg","9e5df3612c2d93bf57313186c954aea5"],["/images/meilu/4.jpg","69ef2d6f4bcd79cf4b4e672b60c6751e"],["/images/meilu/5.jpg","ce81ca16def7613b7ebb368fb554f14f"],["/images/meilu/6.jpg","cafd5b62305f806754a75cc3af8c3b77"],["/images/meilu/7.jpg","b8ae865d386e1e713a6034da6b090c10"],["/images/meilu/8.jpg","afad7a7bf1066c817a8d2e7566bc780d"],["/images/meilu/9.jpg","72f9649f56b564eacf23ce3dacb88029"],["/images/metroui.jpg","5503bfffd450d9ab572b67ea00941571"],["/images/metroui/1.png","79a03b408c19c74eeaa8ff6e17a03f9d"],["/images/metroui/10.png","8309fed71a15c78f2dfa3af1ff75a5f3"],["/images/metroui/11.png","aaf1a007cbae12f93cc2688bace18d28"],["/images/metroui/12.png","0758ea282c3828c47e5c64520ff85783"],["/images/metroui/13.png","12ca7b511927cd4b26e97f3b20908a32"],["/images/metroui/14.png","f44ba7680f7b36df437e2ae2588d0565"],["/images/metroui/15.png","e8927c78b125b805af7aa86fee815ab6"],["/images/metroui/2.png","e604d3c662b996f06f22753ba9ab379f"],["/images/metroui/3.png","664e3b7490f2f95d5547b8ba79a65456"],["/images/metroui/4.png","c0f255344cafc303a1d9c7404da37149"],["/images/metroui/5.png","da2074cdb1298aca826abc1a5c441300"],["/images/metroui/6.png","efef2f087127614b4e03bcbe9a347018"],["/images/metroui/7.png","a4d34b1a2dbe3a58d3a92276880be039"],["/images/metroui/8.png","1d34a626bbaa898a60d4501936bcf962"],["/images/metroui/9.png","0663697c1667b377fe2623bd65e00b31"],["/images/metrouilogo.png","aea81b42d1c2c96440f74cf56ad82e2f"],["/images/nhkimage/2020.08.01.png","af4c55b2ae1d5ab2f56c75a87fcdfdb3"],["/images/nhkimage/2020.08.02.png","c355d41b90f5c65823f96c5f6868ce53"],["/images/nhkimage/2020.08.03.png","fddcedb40d7f28b2ccb90814351ad5c8"],["/images/nhkimage/2020.08.04.png","8b4518ec5a8513f442980ed7167136b1"],["/images/nhkimage/2020.08.05.png","590abfb19334b0c3cee5a005674f2253"],["/images/nhkimage/2020.08.06.png","d469e21100c42435e88f2bdf07f93da1"],["/images/nhkimage/2020.08.07.png","3ca9e2c8b8a09a38423d73cd36e8de9d"],["/images/nhkimage/2020.08.08.png","4420c2d899fe4eb90c48bae0da8418a2"],["/images/nhkimage/2020.08.09.png","df14be338f9c920818dd1daa6aa955ee"],["/images/nhkimage/2020.08.10.png","c4e2ed023cd3dbfd4986add35ca9357c"],["/images/nhkimage/2020.08.11.png","cf562339e57f673d394f3e6cdd1f60cb"],["/images/nhkimage/2020.08.12.png","81dfa179fea3052ddcf73912ea368f67"],["/images/nhkimage/2020.08.13.png","8cf26c2642e7a27cbd86fcbda8bae8d9"],["/images/nhkimage/2020.08.14.png","d88eeb678b3ed3651d597e61957e264a"],["/images/nhkimage/2020.08.15.png","b9879f193867edcffeefce62c9dc7153"],["/images/nhkimage/2020.08.16.png","46cb914aa1d556561897767ec9ff66a0"],["/images/nhkimage/2020.08.17.png","ea1af9645b5cc9cbaafe70a91dd15cca"],["/images/nhkimage/2020.08.18.png","e87e4de39a6f06cf4283a63af92dd8de"],["/images/nhkimage/2020.08.19.png","8001a951513b542a98ce1151be5bd87b"],["/images/nhkimage/2020.08.20.png","4bc8fafa3ecce30d340b1350715d78e3"],["/images/nhkimage/2020.08.21.png","07ad1337e127922abff27da6c672549b"],["/images/nhkimage/2020.08.22.png","b2b5d53ba46015f64048f9d803b12179"],["/images/nhkimage/2020.08.23.png","225af8c0cabe5218ec634d1b8815fd95"],["/images/nhkimage/2020.08.24.png","1d54a484a6e2395aabe9be005cd90361"],["/images/nhkimage/2020.08.25.png","8008ba169cfce0ef2041329cd29b6b77"],["/images/nhkimage/2020.08.26.png","72a2b8094003a54c97a34ea97cf21bc3"],["/images/nhkimage/2020.08.27.png","893407e604804d215c8fef8bcd5f2684"],["/images/nhkimage/2020.08.28.png","b542280b7341759890a99cbd44d822c5"],["/images/nhkimage/2020.08.29.png","620e2e7d4772e39615fd1a88cdf49717"],["/images/nhkimage/2020.08.30.png","f645d7ba2dcb506f9ec6fb9244425ad7"],["/images/nhkimage/2020.09.03.png","c5262f3aa87190e0273383ea1e445681"],["/images/nhkimage/2020.09.04.png","c07149c32aa41c03bc7dac82a713f6b2"],["/images/nhkimage/2020.09.05.png","4e43556e1cb3b7f4d75f0f6127616a54"],["/images/nhkimage/2020.09.06.png","1021d2ae04a7f109404f857a2a7629cf"],["/images/nhkimage/2020.09.07.png","db9827e9f0a4cf1401b559b4644a0204"],["/images/nhkimage/2020.09.08.png","efe1030b73dc1c01f169c3122a194426"],["/images/nhkimage/2020.09.09.png","f6ba3a1c6cdeff88404ebe2a646f2eb5"],["/images/nhkimage/2020.09.10.png","3471b05d02113517359a9e2167befcfa"],["/images/nhkimage/2020.09.11.png","921a541a8bffb1aa436df2eb6db7c99f"],["/images/nhkimage/2020.09.12.png","a51f8ebaddba69bb80f9259a30f17e65"],["/images/nhkimage/2020.09.13.png","0399889200493cd2154ffc407e2bc400"],["/images/nhkimage/2020.09.14.png","eaaf3da69a39ed316b7fc8c4d409bb0f"],["/images/nhkimage/2020.09.15.png","5774959ea4061c9298ea174f0862cc3a"],["/images/nhkimage/2020.09.16.png","0c5a00f74020740fda589c02e4b3f917"],["/images/nhkimage/2020.09.17.png","b5aef734e3a7db4862ca3fe4e6769dc2"],["/images/nhkimage/2020.09.24.png","5982a7b3843f4ae43b2b4bc4b0c577d6"],["/images/nhkimage/2020.09.26.jpg","c6415af781fbdd36fdb034f74646129b"],["/images/nhkimage/2020.09.27.png","27aa6f6a8d5534ccd99cff261dcd9eb6"],["/images/nhkimage/2020.09.28.png","0f4318d1ff17a33de364432a1c44b5ad"],["/images/nhkimage/2020.10.09.png","6408d9f7e66fdeba8b9207939a08cf8d"],["/images/notop.png","d25c272e5ce312a880e04ce8a0b27683"],["/images/pasted-0.png","552608d8f6e39369aa30c6e332a32826"],["/images/pasted-1.png","baafdacee93c99e99418aaedbf524fda"],["/images/pasted-10.jpg","395cff6f64ab5df19baa3572ac98e541"],["/images/pasted-11.jpg","56e5df07c96634638abf7995b25c81ab"],["/images/pasted-12.jpg","61b3f803b85ce3640d7a9ba7efb9da6b"],["/images/pasted-2.png","2f410e53c811f92a6135f48857776f5e"],["/images/pasted-3.jpg","bb5717e691e87355e7d63a5f3a87ae62"],["/images/pasted-4.jpg","10041d0e3567b24b81222ec5075d6492"],["/images/pasted-5.jpg","ac5047a4b48c6cdaee86fa1863e33904"],["/images/pasted-6.jpg","1556ae8d3ad5713d60237ee4d10e81f0"],["/images/pasted-7.jpg","913fde1686587646ddc663bd810cc81d"],["/images/pasted-8.jpg","fc83268081fb4b6b6ecb1ffa1ec5af7f"],["/images/pasted-9.jpg","25e0fa3496591501f5c29d0b802b77d2"],["/images/pet.png","2b8c121909497e57057478856fe48a94"],["/images/pet2.png","dfb1d6a17b527ccc0c600e6ad31f55e5"],["/images/ps1.png","0917ba91f21b6944dc08d35c41a326d2"],["/images/psb.jpg","6a27c58337875c776af0a7667598b401"],["/images/quse.png","7cd1ec12b804305430cb4cdc09c7a893"],["/images/rain.jpg","9c26acc44c692b6a63e134be07b07c18"],["/images/shezhi.png","281bf545f6a4024e2d0b7120bc398a21"],["/images/soul.jpg","d97b4099c0728ff6123d006fa62db86e"],["/images/study.jpg","a9b1cf95ee6bd9f3913e8ec6a6a6f44f"],["/images/tianqizhizi.jpg","dd48d78b4eeaaa52578352f9ef570b14"],["/images/vue.png","cf23526f451784ff137f161b8fe18d5a"],["/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/images/work.png","e521cf5b834292fde1c50e0a0f5802f9"],["/images/xiaoguoyanshi.png","994a3b710d36df0a4630cd9a768c7f7b"],["/images/xiaoguozhanshi-m.png","1fefca18214fc4889d1bb76b81887c9d"],["/images/zfe.one.png","b41f689341882058ffb28c4cee499bde"],["/images/幻想终结之日.png","0025c4d3973bdfedb80db3f78c59fa47"],["/images/时空战纪——游戏建议及意见①.jpg","1337457f14a8dffee66d94f8915b54ff"],["/images/简历.png","d70507ee4615c9e324578c0d777e6855"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favicon2.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","bf36340e89977444955bd225e2f83040"],["/js/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/APlayer.min.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/airvisual.js","71cf86bfd452ca01d92438d8266416ee"],["/js/airvisualapi.js","6931bebe1696688d109963187fc2eace"],["/js/artitalkkey.js","d56dccb2c0d70cb185f88ca68ba0d2d6"],["/js/background.js","94c8410b174f58594cf81ec99054968b"],["/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/js/calendar.js","a58e02711cc6dec4dc04257e555b8923"],["/js/clock - 副本.js","405186e7a9d73221d2d50c0dea2852d0"],["/js/clock.js","2fdceb94cc57b551cd245b0001927b66"],["/js/color.js","3730bb4f7b185e6f5130ac28bace968b"],["/js/danmu.js","6b6ae6b7f1b42dd4857541f43b2bb733"],["/js/echarts.js","dc1227b1eba1ba47fd185a387d0a7d37"],["/js/gitcalendar.js","fadfa8a42272cd322118653dca512a7a"],["/js/history.js","20459f7db325e597e64903f4c0d19306"],["/js/historyroll.js","a3e9ac376106816c50a61f9f4306d671"],["/js/jam.js","462c07d3b2e0f20394d994bbcfae37cb"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","455fface5a0a3ff90766ca254affe502"],["/js/rain.js","f656dc28e4ab5c3f8414d35f683278c1"],["/js/rainremove.js","ceacf82842b101f7e54a2aaf5f4bb9cb"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/link/index.html","791755608e400e68beef9b52fc960073"],["/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","51b08921123f98af0d595cf1f502432d"],["/page/10/index.html","4504ef5ec5636c6479324da93455a25e"],["/page/11/index.html","8358efd6c5edb99663c92f52ed1125f7"],["/page/12/index.html","c984f35432180a62eaa673b1fc5f0e08"],["/page/2/index.html","c93662a9e2968720df269f4fba85d87f"],["/page/3/index.html","efabc5e025a629ecd215af2f7bc53341"],["/page/4/index.html","e87fd8ea5de0f47ff78c748c29e5ba47"],["/page/5/index.html","8c05be30c8464463bc8af5fa939ba675"],["/page/6/index.html","03a8815aefcb35bcb7b1ae6544d2c598"],["/page/7/index.html","883b27a4e4b940f41caeb598a0af0dbe"],["/page/8/index.html","54b3eaab67ec7a9f1210afa53d4d47ad"],["/page/9/index.html","d10b34cf93bdeff57f93c587391c66cb"],["/research/index.html","76a92f7a31dddb4a5a9c61234f952f9c"],["/sw-register.js","0f852d0787acb1e8801f80d6b9c739a0"],["/tags/Butterfly主题/index.html","c707bd54244c57e7fabe4295428def72"],["/tags/DIY/index.html","04eccd32ea466801e3492da5ecc4cafd"],["/tags/DIY/page/2/index.html","4e7ac7cb72d88968a2641aea86eb4a65"],["/tags/ICT/index.html","55fde5493adadcd8bbca436b579a00fc"],["/tags/NHK听力练习/index.html","da360c09c3d154eb2dd862a109bce81c"],["/tags/NHK听力练习/page/2/index.html","29d2bfd250ef84fdff8bb946fecd0afc"],["/tags/NHK听力练习/page/3/index.html","a05fe03294a01c80c46a4ee490769c74"],["/tags/NHK听力练习/page/4/index.html","6cba39dd4b4d0efa02af561860c3da41"],["/tags/NHK听力练习/page/5/index.html","0cafe1602b1ccdae50d8b17aa24b2df0"],["/tags/NHK听力练习/page/6/index.html","64a42bcb52578ea179f6cd8dfe2df4be"],["/tags/metro-ui/index.html","f6782e8bdda2592cdb893d4787f15ed1"],["/tags/vuejs/index.html","17ad5e7603171a750a9c12c98772cdf3"],["/tags/お盆/index.html","f47c0ca0c08d18c174b414fd6a72e85c"],["/tags/世論調査/index.html","28bccff93e5542cba13964c25a6f5e47"],["/tags/作品集/index.html","fd264206e705299f07e8a7ef3b985654"],["/tags/作品集/page/2/index.html","15723d88ec11f83727394e5133ef417e"],["/tags/农业/index.html","4308c84ad8a3d42862b32513cb9c3f75"],["/tags/历史/index.html","d48a72e70f2517a0cf31e91747808d69"],["/tags/営業時間/index.html","ea3769e8c93f142faecfa3826fdc7dac"],["/tags/国外政事/index.html","691bb38512bedf34645de9fcf99565ec"],["/tags/地震/index.html","a99a4fd3ee05d6aeb46a75cc0a6baad8"],["/tags/外国政事/index.html","e2e5c1799aa84222de881e7c0f000523"],["/tags/天气/index.html","874f2373e596d9d867e70294557e4ebc"],["/tags/天气/page/2/index.html","274a218ded932018bd26f51739cc8c34"],["/tags/奥运会/index.html","eded7329f2f8a4b44e1bc59878858eb8"],["/tags/学习/index.html","a452f11c9e6aae919ff83c20bf3635de"],["/tags/学习/page/2/index.html","e2be623df73159833cec78e326a6dc54"],["/tags/学习/page/3/index.html","fdd3f339aa4293ecb09e9cfee178d2ad"],["/tags/就业/index.html","08638421ba824f4366450a9982245f7f"],["/tags/庐山/index.html","12103a7187744bb8724bb03c1be43e34"],["/tags/座礁/index.html","fc08d44b4af63175ae441b5b0efae21e"],["/tags/政府/index.html","0ea6185005e56607f98d590c170acf69"],["/tags/政治/index.html","2a015ff0bcf99e8fd096a8c233b51268"],["/tags/教程/index.html","ba3dc20b931bedae9fcb821cad8dccbe"],["/tags/教程/page/2/index.html","5b9702b7684d4a83a13515f015127ea1"],["/tags/日本教育/index.html","9b4a35d80c5accd60371230cfecc326e"],["/tags/民生/index.html","ee91613cc0aff2ccf321a5a0b1ac2111"],["/tags/民生/page/2/index.html","2d6477786c7bc0b5635f019b0ea5a607"],["/tags/游戏评测/index.html","12e0dbf84872b105f7fcd794af2e79fd"],["/tags/游记/index.html","f9832c1568aaef70ccf58f2a3c1c917e"],["/tags/生活趣闻/index.html","b82654d96e5a6a7cf2278979f87165b4"],["/tags/科技/index.html","370ba5762996a932bd751a7596e50240"],["/tags/经济/index.html","f90a4eaf940ca1e6761f4f2f0d538a19"],["/tags/经济/page/2/index.html","b9df3987faf0808dda43e518eaf86571"],["/tags/网络教学/index.html","9d132efdee35a1bb4ded2022b8889d83"],["/tags/舆论/index.html","ad465c18bf9b9a49ced784fe220f9a33"],["/tags/虚拟现实/index.html","5064c6931bbea5a397e23ad280e33141"],["/tags/随想/index.html","d212b4b184745592d618ca37efbb0707"],["/tags/障害者/index.html","8e27755951a683debcc6688bdc8478dd"]];
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
