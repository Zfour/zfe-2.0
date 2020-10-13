/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/05/20/2015-05-20/index.html","eb2f071a7db213cf352446ec4a7ffb4c"],["/2015/06/16/2015-06-16/index.html","1d70d7581191b2ec3f0d53b188e2e180"],["/2015/12/12/2015-12-12/index.html","d4e56b43791d220187b74d6fd9c93e6a"],["/2016/06/08/2016-06-08/index.html","648c6ac204fc7734f49a86ccfae5285e"],["/2016/12/18/2016-12-18/index.html","e5be0dbd66c604228b66c1fdad9fa372"],["/2017/02/17/2017-02-17/index.html","56f76ca63346774f9f5719fa6c47704e"],["/2017/03/17/2017-03-17/index.html","5be4e9968efbc7e12350b67519ba5a02"],["/2017/04/06/2017-04-06/index.html","e4bdb45e6af4493586eda5db6d46e121"],["/2017/05/17/2017-05-17/index.html","adf335fda12524fc0f491d620396a4cb"],["/2017/08/15/2017-08-15/index.html","520d3d8403cb90dec4df44359e2f3cf1"],["/2017/09/16/2017-09-16-1/index.html","5c5b9d0d86bea37234e9263705308464"],["/2017/09/16/2017-09-16/index.html","d350b9b81a476b6fc94bb8ef2b2e3d10"],["/2017/09/21/2017-09-21/index.html","9c5f7676c67811035da76a2fcd3b0008"],["/2017/09/23/2017-09-23/index.html","d3751cfdaba324325d8be8f80ba2d4b8"],["/2017/09/26/2017-09-26/index.html","a0a61589f455858ee2dd7f3fa9c06881"],["/2017/09/27/2017-09-27/index.html","62a32a70a582fe6f569c780ef06d7591"],["/2017/10/04/2017-10-04/index.html","215747fdedf1ae52357c26d5c83833ac"],["/2017/10/08/2017-10-08/index.html","8d703ea3f4e654336efb7f0642c90e19"],["/2017/10/09/2017-10-09/index.html","ea33eaaae521940ef4645d1268a60491"],["/2017/10/15/2017-10-15/index.html","add4ffecd8f1d117b5f6006986f4d880"],["/2017/10/19/2017-10-19/index.html","9da1f18065d1d25ecbf5c922177c8df7"],["/2017/10/23/2017-10-23-2/index.html","04ea06d7164e65a7622f53dafd434ffe"],["/2017/10/23/2017-10-23/index.html","a6e96a12b67f9cec84a1ab8b289e23c4"],["/2017/11/08/2017-11-08/index.html","1b8569905bef1ce0722f4e995d7cd301"],["/2017/11/12/2017-11-12/index.html","be7079b607b492ac043761f36815679b"],["/2017/11/15/2017-11-15/index.html","6733e4171679ec024b9c78759ee55b36"],["/2017/11/27/2017-11-27/index.html","80eba01bb290cba8c44e3823acb4c2ff"],["/2017/12/06/2017-12-06/index.html","45cc6dae2deeb9511a716dbbe4683c71"],["/2018/02/12/2018-02-12/index.html","48f3470c48a2a7f59d54f81aa3985e19"],["/2018/03/26/2018-03-26/index.html","00fb427d3f2436d1e153ba3f968310df"],["/2018/04/02/2018-04-02/index.html","41db782243289b980cc1af13ddd62682"],["/2018/04/24/2018-04-24/index.html","6e64ffc0bf0146dd3d33a9a73f73fc57"],["/2018/05/18/2018-05-18/index.html","971cde03d6e2c2b547aacf50f0c13477"],["/2018/05/23/2018-05-23/index.html","2696b8f4da69e8aff8af94ef43ee7e92"],["/2018/06/08/2018-06-08/index.html","56f6cabdba9836602d0ef8dcc0d3433a"],["/2018/07/01/2018-07-01/index.html","8043c026a95f9562516c1a3b3314cb92"],["/2018/08/30/2018-08-30/index.html","9425b0621c9f031bfe7301d45354918e"],["/2020/07/20/2020-07-20/index.html","4addc68d8467cbbbb53aab5a6e3feb65"],["/2020/08/01/2020-08-01/index.html","6d12e7af19d6abe7424908ee4e8bc3ff"],["/2020/08/02/2020-08-02/index.html","56a30aab1ee1eed8cced50810f11da7e"],["/2020/08/03/2020-08-03/index.html","4ca576f33dec1a6bd9f167d9fa156cbd"],["/2020/08/04/2020-08-04-1/index.html","7e8179f902abbaf186f456d40fb2ced8"],["/2020/08/04/2020-08-04-2/index.html","5bda57cc9adf15f14236eb8f3aea4f59"],["/2020/08/05/2020-08-05/index.html","4d141b365ae49e7bce188f7ed317e82e"],["/2020/08/06/2020-08-06/index.html","552dee2a02c0bdff6871a10a60578be9"],["/2020/08/07/2020-08-07/index.html","56367a004a635773c430b470b1685850"],["/2020/08/08/2020-08-08/index.html","9f9ee05c1f0a3d1e384ace47a928fa16"],["/2020/08/09/2020-08-09/index.html","e05b4ca08882a8607bc7e67405abd236"],["/2020/08/10/2020-08-10/index.html","fed1ef00fb8c7725e8b1e5f5399c1209"],["/2020/08/11/2020-08-11/index.html","fdf022aa02ad7be7fb76ebda8df36d19"],["/2020/08/12/2020-08-12/index.html","bb87087058095fd2a7ed100853881b0f"],["/2020/08/13/2020-08-13/index.html","e70ec49e415306cdfed985d2c8e645a7"],["/2020/08/14/2020-08-14-1/index.html","71037c3208d9eda196bbe88c62a4cc4b"],["/2020/08/14/2020-08-14-2/index.html","ee4954035245897cc06150d5f1ea888b"],["/2020/08/15/2020-08-15/index.html","d29c4e75119e53757e315208021ce774"],["/2020/08/16/2020-08-16-1/index.html","cbb122c0f0dd0b938f63331e1fc8d9e3"],["/2020/08/16/2020-08-16-2/index.html","bf859bd4aacfb7189c0174b1739d6a90"],["/2020/08/17/2020-08-17/index.html","9b9161a8a4be863d34ca67e4b0f571e7"],["/2020/08/18/2020-08-18/index.html","49499b655224eaa92c2f533f1a9a0848"],["/2020/08/19/2020-08-19-1/index.html","dbb910cc18415127f8563996509175be"],["/2020/08/19/2020-08-19-2/index.html","28c25050be71239b4a9fee7496d138a2"],["/2020/08/20/2020-08-20/index.html","e59ee4e6642f387107b51f59d9d514dc"],["/2020/08/21/2020-08-21/index.html","d2f81c406b7f5d7f9ce3d8961f1ed92d"],["/2020/08/22/2020-08-22/index.html","bd4b486fe9f7246177e25ff2d62d3a40"],["/2020/08/23/2020-08-23-1/index.html","c72e06040339082122c1406d7dcf4aa1"],["/2020/08/23/2020-08-23-2/index.html","65b808d997fe10b5a7e6f6f41a96f7a9"],["/2020/08/24/2020-08-24-1/index.html","16acbaa5105169aff88b03611b97b6c1"],["/2020/08/24/2020-08-24-2/index.html","cc8b865c2bf300937704b2646b0638cb"],["/2020/08/25/2020-08-25-1/index.html","c39b35f455cc7badb63d4dfa2f90155e"],["/2020/08/25/2020-08-25-2/index.html","1bdbd950765728dd07223d04f2583580"],["/2020/08/26/2020-08-26/index.html","9e8023586f671d8066e0b85ae6c4a622"],["/2020/08/27/2020-08-27/index.html","f16bd1d41713848b1fe71701d3ff18da"],["/2020/08/28/2020-08-28/index.html","dfdcab7302ab2e8b8adfa68889b85323"],["/2020/08/29/2020-08-29/index.html","77ed90a36de8645313c054c93611ef48"],["/2020/08/30/2020-08-30/index.html","640fa22472ecbfbd5e29bd366f21bdff"],["/2020/08/31/2020-08-31-1/index.html","9db54b1ef751d08a297d73fc93291bca"],["/2020/08/31/2020-08-31-2/index.html","8ba43e20b02b5348ef895576aebeb9c0"],["/2020/09/01/2020-09-01-1/index.html","ec1955c768a7204cad45642f4e0233ac"],["/2020/09/01/2020-09-01-2/index.html","6cd5ddd10d3a2df829158eae2f6068d8"],["/2020/09/02/2020-09-02-1/index.html","b13289dd1562810703b48f36ad6fb91f"],["/2020/09/02/2020-09-02-2/index.html","52231209ba0b5c34ecd50aa9d175cc79"],["/2020/09/03/2020-09-03-1/index.html","981ab93f702d81eceb1cf6fa6ddc90cc"],["/2020/09/03/2020-09-03-2/index.html","ebe85866f7a1556f6d55af1ad34d6e83"],["/2020/09/04/2020-09-04-1/index.html","73038dfd129cee3ddbf41935c5d453c4"],["/2020/09/05/2020-09-05-1/index.html","1fbf0d72c285a897777dccbaeff6c774"],["/2020/09/06/2020-09-06-1/index.html","95c97695bf026dd820fe4069db70cdab"],["/2020/09/07/2020-09-07/index.html","2c45995dc42313d6044b94708f8c1a7a"],["/2020/09/08/2020-09-08-1/index.html","6fece3aec031ec161b82d1a2f31a4c84"],["/2020/09/08/2020-09-08-2/index.html","de9d32efe9cd0d4420ebc0ad63ed5dbd"],["/2020/09/09/2020-09-09/index.html","05c2d41ed8e1bdf78b2c30394c4aa9ff"],["/2020/09/10/2020-09-10/index.html","cb1000db5ff5627f08b68946cbdbbf91"],["/2020/09/11/2020-09-11/index.html","cd4ca6b4dde51b0d236d5d7dd7e41922"],["/2020/09/12/2020-09-12/index.html","2c2d63b3bf5296785929fca14c13ca72"],["/2020/09/13/2020-09-13/index.html","f1eab3aa75924b4cf6aa93558f8e7c69"],["/2020/09/14/2020-09-14/index.html","cee9e9380cc33474cd3de3582cd9503a"],["/2020/09/15/2020-09-15/index.html","b80f87cdec689df98e088e5a6dcb9336"],["/2020/09/16/2020-09-16/index.html","e3680c39f2c6a73df53579005e7fddde"],["/2020/09/17/2020-09-17/index.html","80c22d9dd3bc36d7e9ae4f0008f6c0c1"],["/2020/09/19/2020-09-19/index.html","433bfa5256fa54b0a0bd14513104e771"],["/2020/09/23/2020-09-23/index.html","552b50036f631858d4549e0d1c98c2bf"],["/2020/09/24/2020-09-24/index.html","51cfa450ceb905f4f3482c59571dc4a5"],["/2020/09/26/2020-09-26/index.html","826d18e31284074c9028d4492e0f102d"],["/2020/09/27/2020-09-27/index.html","b7880fa75337e63953c171ff95142978"],["/2020/09/28/2020-09-28-2/index.html","b49b736f411f46300d1e9fa8ca2b362d"],["/2020/09/28/2020-09-28/index.html","9ceed33e2ccfa637590be71279e7cf32"],["/2020/09/29/2020-09-29/index.html","4c0df1cc18268bc805076d29eed9075b"],["/2020/10/03/2020-10-03/index.html","ba00d08f46df49e56c833b2e8d3ada25"],["/2020/10/04/2020-10-04/index.html","10ed6ce7c65518fd9b405e02bd9d2603"],["/2020/10/09/2020-10-09/index.html","3660abea636130acee9425468ea179c5"],["/2020/10/10/2020-10-10/index.html","c4263f7c13817822a32b26b21eec8202"],["/2020/10/11/2020-10-11/index.html","2dbbed1bf63bd8b81259b25873f5333e"],["/2020/10/12/2020-10-12/index.html","658233ce795d64784c2b3d1da7a8d536"],["/2020/10/12/2020-10-13/index.html","51afaba961726bf3b5ff705e694d268d"],["/airplayervisual/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/airplayervisual/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/airplayervisual/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/airplayervisual/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/airplayervisual/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/airplayervisual/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/airplayervisual/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/airplayervisual/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/airplayervisual/index.html","fa9be30ddf97f119a70d7398d4cf249c"],["/airplayervisual/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/airplayervisual/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/airplayervisual/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/airplayervisual/js/jamsetting.js","7927507e0080ddf55c6d8b5f526bd942"],["/airplayervisual/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/airplayervisual/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/airplayervisual/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/archives/2015/05/index.html","c6604c58fa92260ac8a4a26602d884cd"],["/archives/2015/06/index.html","085f353166cdd9818ba439a3e23044eb"],["/archives/2015/12/index.html","58f34b5e6fd59c2edc01b63fab971915"],["/archives/2015/index.html","32249fbb41e6b3b1a64c795386bbb62e"],["/archives/2016/06/index.html","b9242299071f341c918defa60fc24ed1"],["/archives/2016/12/index.html","f694a509c8861218d6a40a4a82126592"],["/archives/2016/index.html","7bf44b27d34b17c71634739ce337a420"],["/archives/2017/02/index.html","44f553d28335b800d88a13a67017106e"],["/archives/2017/03/index.html","4956ff95952f43b5f2ec340e36935295"],["/archives/2017/04/index.html","8e653f693b2446557c2f939bd147eb2f"],["/archives/2017/05/index.html","105aa3670684718592c56b9bac58f338"],["/archives/2017/08/index.html","14ca802d30fcfc8234f5ca2d33622f9d"],["/archives/2017/09/index.html","d24b6aed695cc7b332ad67ac38de7db9"],["/archives/2017/10/index.html","34172cbc46bf304d69ad0c1019521caf"],["/archives/2017/11/index.html","36798ee8deb953077ad30140500d3d86"],["/archives/2017/12/index.html","4e3cfd94f39e5bc4274dfebd5825c94b"],["/archives/2017/index.html","67abd09697857f7bfba914f753d17d28"],["/archives/2017/page/2/index.html","86e0428f4243d3cc9c5261d353ed7485"],["/archives/2017/page/3/index.html","c1f52c680ff3486ad672975323f1c61a"],["/archives/2018/02/index.html","9b827f4705b9ca47a86d37bb3fb7a08c"],["/archives/2018/03/index.html","fc92ae1c8e72bd8783f5f48c569ca9c3"],["/archives/2018/04/index.html","c0723b91b634777202ab3f53ca1a9a4f"],["/archives/2018/05/index.html","0af6dbecbe8923aa2009a75bee18cb8b"],["/archives/2018/06/index.html","e21da418abdc9749680a1309cbeef9ce"],["/archives/2018/07/index.html","4451928f84fbd4b7547ed4b5282284e4"],["/archives/2018/08/index.html","c67d5a962494bb69bc42913a74cb1b90"],["/archives/2018/index.html","0a0f4124b934844a266f46925e08305f"],["/archives/2020/07/index.html","94046fde2dc07d48b399814cbfd436c2"],["/archives/2020/08/index.html","fb1f3c842c702f584fdc7bc3b198d8e6"],["/archives/2020/08/page/2/index.html","70c16dda7b3981413710d91cfb9d132e"],["/archives/2020/08/page/3/index.html","c52907ef48dc2a5f36b94eea51375a7f"],["/archives/2020/08/page/4/index.html","9379d168b8802cee7cbe73822e3a35cd"],["/archives/2020/09/index.html","c3408dd0135f097001bda606e0a6c02e"],["/archives/2020/09/page/2/index.html","8abceefdced1f66521492e5df2d23b2b"],["/archives/2020/09/page/3/index.html","9aebf81c9a0217e896624cbcd2f41e25"],["/archives/2020/10/index.html","a32015699fd3aaf0267e2273560263a3"],["/archives/2020/index.html","5c4f18d1a0029f121a737a0df2df944e"],["/archives/2020/page/2/index.html","aa0c0c7ca43c95f4f4dbd163b0737865"],["/archives/2020/page/3/index.html","d1b23619c46d9491fd85ffb2239967a2"],["/archives/2020/page/4/index.html","b6f0730c83690e603679d7cb1624e66e"],["/archives/2020/page/5/index.html","71ce62e334c422e7d0a9e8e2e681ca7e"],["/archives/2020/page/6/index.html","4f12488408f57019e8906ff3fd8373b8"],["/archives/2020/page/7/index.html","75793a4d3d67501734e60687e6429f70"],["/archives/2020/page/8/index.html","27aa1a3a0d78b57248cada4a319f9e4c"],["/archives/index.html","b2aa6d2a40fc477ec40eb7e27defd388"],["/archives/page/10/index.html","943a6b59d4d705cf2911dbf476c0ba58"],["/archives/page/11/index.html","eecbac3d3bb9e3e6a5b1318cfc56989c"],["/archives/page/12/index.html","2b5e37ac25b2f92eebf740b10cf50e36"],["/archives/page/2/index.html","9f9638c5a5e6183dd726b464c58d285b"],["/archives/page/3/index.html","75c859072fab4eaa698721c3f0c70f2a"],["/archives/page/4/index.html","df5d9d34d487e9f33d0850361d8f0e58"],["/archives/page/5/index.html","8c9a64217b1685e95a024ff302f2c6e4"],["/archives/page/6/index.html","be15ae13d188f0e25b1963109c19983f"],["/archives/page/7/index.html","daa1955dfc863f823838549cc356c9a8"],["/archives/page/8/index.html","1269a48217f06c6c128819ef5a283cbb"],["/archives/page/9/index.html","7abae1dfc148ccbb0b58175efc9f7660"],["/categories/NHK听力练习/index.html","a009509a9c863b8c95c27eb829a14557"],["/categories/NHK听力练习/page/2/index.html","7157b7904ba9a8e1efa09f7d402a9d1a"],["/categories/NHK听力练习/page/3/index.html","6a4c7c8ced028bea48392592260335a7"],["/categories/NHK听力练习/page/4/index.html","fe0d3b32e52fabfd9ebafd50bd507f33"],["/categories/NHK听力练习/page/5/index.html","286cc137f78dc03e9ef0ed1f93e085e7"],["/categories/NHK听力练习/page/6/index.html","0ff96511fadcd753a29e2f7ca02205b1"],["/categories/作品集/index.html","7bf77a9cefb73a153681d0411fb0d594"],["/categories/作品集/page/2/index.html","6f3f7e40bd8b804d8cd59575752f56be"],["/categories/学习/index.html","80425f87c528aae3c0307c38ec524a58"],["/categories/学习/page/2/index.html","2e0b57a69bab6d8cb727e3da66791482"],["/categories/学习/page/3/index.html","92d24b37730c11b722539ae71828982d"],["/categories/游戏评测/index.html","0454d513ba86dfb1e4db518366f648c8"],["/categories/生活趣闻/index.html","f77cf0bb010741e6e6f0a53fae7eba84"],["/categories/随想/index.html","f1613cf2ab2fbe27feeebb373cab415c"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/addcss.css","59cae1ddbe6925c34f846ffe12d19921"],["/css/background.css","32d5acccbb94f987faf37cfdc3fd06df"],["/css/calendar.css","0090a32d2a61d42c5bfed254bfba078c"],["/css/clock.css","65602c2385c7eab42ee3804cd6ee0a5a"],["/css/cursor.css","c1a23e168c5b794ff367eb0ae77eb26b"],["/css/danmu.css","2a5b914a9592bcd353425c6d5fa7af8e"],["/css/index.css","36eb36d0f5531dd7a8f4c8f925188615"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/loadingline.css","bc1ee020a6a11fea17b915b97e6978bf"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/html/calendar.html","bddcec1edba7f4c49fe5cd75f8cdf5b2"],["/html/shiyan.html","f5b37035c5d8287de6d0e2dddd9c8065"],["/html/shiyan2.html","0210dabbf6197323c189f2a4de8ba608"],["/icon.png","8ec68de45d18642ba9baf2447e62f476"],["/images/AMJ1.png","d27a6725d1aaaf5324248da4312ab6c2"],["/images/AMJ2.png","00e22eba5901e5bd674e42228cd5bd26"],["/images/AMJ3.png","c8c9ea6348dfcad3a641899d5b587431"],["/images/FOTO1.jpg","4b6f100861908e2c7044cffbdb4a0c1a"],["/images/MVVM.png","ea5a002ee2f85c71a0db51d5adb5de19"],["/images/UT.jpg","367f4e432f9db55a92b2a290c4b0a476"],["/images/UX.png","a183974e958d41d1b6acec70bb7ea00a"],["/images/WindowsTerminal.png","8ac29cb56b8a1768cf7de071e9f1ae6f"],["/images/air-w.png","c1cc32f9d3e17551ca11a7d18a0b533a"],["/images/anzhuang.jpg","912b2489957f8344406edc5e5cebe5fa"],["/images/api-setting.png","2c0bb074390779721cba009e96c5417c"],["/images/apikey.png","1f31121b190eb1f990bcc3e27524bc03"],["/images/backpic1.jpg","86a6fa88167feb338fbf1a4e9057114b"],["/images/calendar.png","86319b08b93be7c8bc47cdba7a169563"],["/images/clock2.0.png","0a0f122c7a25262fc02ee99df0ef21eb"],["/images/example.png","aaac9983e5d59f919bf282dcff2edb3c"],["/images/foto17.png","28db4c6608ad1ee6b34238cafab25e5e"],["/images/foto2.jpg","be95b922512d004a61f83c97af3e2602"],["/images/foto2.png","0dc07d4e1b00526a273a89dc8b81548d"],["/images/foto3.jpg","551c0616c92c4ee7cc17dd458b3c46e9"],["/images/foto4.jpg","9d1d9fea759a41afc0061866e400339a"],["/images/foto5.jpg","984f618b15372f37d54f507e6f379f10"],["/images/foto9.jpg","b683fc0b998e80ff8f5a3e45e889807c"],["/images/girlpic.png","ff1e8427ed555af639e6d849f8f648f1"],["/images/girlpic1.png","698e5570e821c3cae643cc9777c2292e"],["/images/girlpic4.png","551882e4b9b6afb79000fd34c0dbf5e5"],["/images/headimage.png","332502f36a0297b30cb7969fe6de8451"],["/images/hexo.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/hexoWT.png","c027cc9f5665c7d7ba657e7a4bb40017"],["/images/his-json.png","7d8a71e38ab684107446e5c72c31854e"],["/images/history.gif","0459a3dcf2317253de0b34482880c63c"],["/images/homework1.png","e8d2f64d0785519ea7779016208a2900"],["/images/idea.jpg","5eb08bf6c965588f03c8860f201cac45"],["/images/key1.png","f2a370e02ad6c5a101db20b47a9a0008"],["/images/key2.png","21dc40bbe0377cd9fe85a9cb431c18f0"],["/images/life-cycle.png","02f39ea5c041d45938fda4b50f234cb7"],["/images/life.jpg","74d2d9c5f48ec59e3badeec690941812"],["/images/listen.jpg","9d4f73cd5634f43deaed4f9aca03f9a3"],["/images/magnet.png","4899a924f3de0d19dbe0415128c07d65"],["/images/magnet1.png","8d010eb86ca943e036adaa7de57aee7d"],["/images/magnet2.png","293cb414a8ab93b43bde3bebf9cf0cfc"],["/images/magnet3.png","1923148630e2e094ff80bf35aa604c10"],["/images/magnet4.png","9bb4f963ac1c09f02d62525f513f492c"],["/images/meilu/1.jpg","cd67abcc3f543b5c66adc4f9d9c5c628"],["/images/meilu/10.jpg","ac9fb2711e477b5db1c3acb57e899045"],["/images/meilu/11.jpg","364caad6dfc356a3dc630fa067e48e88"],["/images/meilu/12.jpg","274767e5708f79934e5bdbf73eda8f0d"],["/images/meilu/13.jpg","dcab12b84454770b208913db63e825ac"],["/images/meilu/14.jpg","037cdd048284e621f27e17a2c59e8ea7"],["/images/meilu/2.jpg","f6cdb65ae3fad4523b32f5ee38696b60"],["/images/meilu/3.jpg","9e5df3612c2d93bf57313186c954aea5"],["/images/meilu/4.jpg","69ef2d6f4bcd79cf4b4e672b60c6751e"],["/images/meilu/5.jpg","ce81ca16def7613b7ebb368fb554f14f"],["/images/meilu/6.jpg","cafd5b62305f806754a75cc3af8c3b77"],["/images/meilu/7.jpg","b8ae865d386e1e713a6034da6b090c10"],["/images/meilu/8.jpg","afad7a7bf1066c817a8d2e7566bc780d"],["/images/meilu/9.jpg","72f9649f56b564eacf23ce3dacb88029"],["/images/metroui.jpg","5503bfffd450d9ab572b67ea00941571"],["/images/metroui/1.png","79a03b408c19c74eeaa8ff6e17a03f9d"],["/images/metroui/10.png","8309fed71a15c78f2dfa3af1ff75a5f3"],["/images/metroui/11.png","aaf1a007cbae12f93cc2688bace18d28"],["/images/metroui/12.png","0758ea282c3828c47e5c64520ff85783"],["/images/metroui/13.png","12ca7b511927cd4b26e97f3b20908a32"],["/images/metroui/14.png","f44ba7680f7b36df437e2ae2588d0565"],["/images/metroui/15.png","e8927c78b125b805af7aa86fee815ab6"],["/images/metroui/2.png","e604d3c662b996f06f22753ba9ab379f"],["/images/metroui/3.png","664e3b7490f2f95d5547b8ba79a65456"],["/images/metroui/4.png","c0f255344cafc303a1d9c7404da37149"],["/images/metroui/5.png","da2074cdb1298aca826abc1a5c441300"],["/images/metroui/6.png","efef2f087127614b4e03bcbe9a347018"],["/images/metroui/7.png","a4d34b1a2dbe3a58d3a92276880be039"],["/images/metroui/8.png","1d34a626bbaa898a60d4501936bcf962"],["/images/metroui/9.png","0663697c1667b377fe2623bd65e00b31"],["/images/metrouilogo.png","aea81b42d1c2c96440f74cf56ad82e2f"],["/images/nhkimage/2020.08.01.png","af4c55b2ae1d5ab2f56c75a87fcdfdb3"],["/images/nhkimage/2020.08.02.png","c355d41b90f5c65823f96c5f6868ce53"],["/images/nhkimage/2020.08.03.png","fddcedb40d7f28b2ccb90814351ad5c8"],["/images/nhkimage/2020.08.04.png","8b4518ec5a8513f442980ed7167136b1"],["/images/nhkimage/2020.08.05.png","590abfb19334b0c3cee5a005674f2253"],["/images/nhkimage/2020.08.06.png","d469e21100c42435e88f2bdf07f93da1"],["/images/nhkimage/2020.08.07.png","3ca9e2c8b8a09a38423d73cd36e8de9d"],["/images/nhkimage/2020.08.08.png","4420c2d899fe4eb90c48bae0da8418a2"],["/images/nhkimage/2020.08.09.png","df14be338f9c920818dd1daa6aa955ee"],["/images/nhkimage/2020.08.10.png","c4e2ed023cd3dbfd4986add35ca9357c"],["/images/nhkimage/2020.08.11.png","cf562339e57f673d394f3e6cdd1f60cb"],["/images/nhkimage/2020.08.12.png","81dfa179fea3052ddcf73912ea368f67"],["/images/nhkimage/2020.08.13.png","8cf26c2642e7a27cbd86fcbda8bae8d9"],["/images/nhkimage/2020.08.14.png","d88eeb678b3ed3651d597e61957e264a"],["/images/nhkimage/2020.08.15.png","b9879f193867edcffeefce62c9dc7153"],["/images/nhkimage/2020.08.16.png","46cb914aa1d556561897767ec9ff66a0"],["/images/nhkimage/2020.08.17.png","ea1af9645b5cc9cbaafe70a91dd15cca"],["/images/nhkimage/2020.08.18.png","e87e4de39a6f06cf4283a63af92dd8de"],["/images/nhkimage/2020.08.19.png","8001a951513b542a98ce1151be5bd87b"],["/images/nhkimage/2020.08.20.png","4bc8fafa3ecce30d340b1350715d78e3"],["/images/nhkimage/2020.08.21.png","07ad1337e127922abff27da6c672549b"],["/images/nhkimage/2020.08.22.png","b2b5d53ba46015f64048f9d803b12179"],["/images/nhkimage/2020.08.23.png","225af8c0cabe5218ec634d1b8815fd95"],["/images/nhkimage/2020.08.24.png","1d54a484a6e2395aabe9be005cd90361"],["/images/nhkimage/2020.08.25.png","8008ba169cfce0ef2041329cd29b6b77"],["/images/nhkimage/2020.08.26.png","72a2b8094003a54c97a34ea97cf21bc3"],["/images/nhkimage/2020.08.27.png","893407e604804d215c8fef8bcd5f2684"],["/images/nhkimage/2020.08.28.png","b542280b7341759890a99cbd44d822c5"],["/images/nhkimage/2020.08.29.png","620e2e7d4772e39615fd1a88cdf49717"],["/images/nhkimage/2020.08.30.png","f645d7ba2dcb506f9ec6fb9244425ad7"],["/images/nhkimage/2020.09.03.png","c5262f3aa87190e0273383ea1e445681"],["/images/nhkimage/2020.09.04.png","c07149c32aa41c03bc7dac82a713f6b2"],["/images/nhkimage/2020.09.05.png","4e43556e1cb3b7f4d75f0f6127616a54"],["/images/nhkimage/2020.09.06.png","1021d2ae04a7f109404f857a2a7629cf"],["/images/nhkimage/2020.09.07.png","db9827e9f0a4cf1401b559b4644a0204"],["/images/nhkimage/2020.09.08.png","efe1030b73dc1c01f169c3122a194426"],["/images/nhkimage/2020.09.09.png","f6ba3a1c6cdeff88404ebe2a646f2eb5"],["/images/nhkimage/2020.09.10.png","3471b05d02113517359a9e2167befcfa"],["/images/nhkimage/2020.09.11.png","921a541a8bffb1aa436df2eb6db7c99f"],["/images/nhkimage/2020.09.12.png","a51f8ebaddba69bb80f9259a30f17e65"],["/images/nhkimage/2020.09.13.png","0399889200493cd2154ffc407e2bc400"],["/images/nhkimage/2020.09.14.png","eaaf3da69a39ed316b7fc8c4d409bb0f"],["/images/nhkimage/2020.09.15.png","5774959ea4061c9298ea174f0862cc3a"],["/images/nhkimage/2020.09.16.png","0c5a00f74020740fda589c02e4b3f917"],["/images/nhkimage/2020.09.17.png","b5aef734e3a7db4862ca3fe4e6769dc2"],["/images/nhkimage/2020.09.24.png","5982a7b3843f4ae43b2b4bc4b0c577d6"],["/images/nhkimage/2020.09.26.jpg","c6415af781fbdd36fdb034f74646129b"],["/images/nhkimage/2020.09.27.png","27aa6f6a8d5534ccd99cff261dcd9eb6"],["/images/nhkimage/2020.09.28.png","0f4318d1ff17a33de364432a1c44b5ad"],["/images/nhkimage/2020.10.09.png","6408d9f7e66fdeba8b9207939a08cf8d"],["/images/notop.png","d25c272e5ce312a880e04ce8a0b27683"],["/images/pasted-0.png","552608d8f6e39369aa30c6e332a32826"],["/images/pasted-1.png","baafdacee93c99e99418aaedbf524fda"],["/images/pasted-10.jpg","395cff6f64ab5df19baa3572ac98e541"],["/images/pasted-11.jpg","56e5df07c96634638abf7995b25c81ab"],["/images/pasted-12.jpg","61b3f803b85ce3640d7a9ba7efb9da6b"],["/images/pasted-2.png","2f410e53c811f92a6135f48857776f5e"],["/images/pasted-3.jpg","bb5717e691e87355e7d63a5f3a87ae62"],["/images/pasted-4.jpg","10041d0e3567b24b81222ec5075d6492"],["/images/pasted-5.jpg","ac5047a4b48c6cdaee86fa1863e33904"],["/images/pasted-6.jpg","1556ae8d3ad5713d60237ee4d10e81f0"],["/images/pasted-7.jpg","913fde1686587646ddc663bd810cc81d"],["/images/pasted-8.jpg","fc83268081fb4b6b6ecb1ffa1ec5af7f"],["/images/pasted-9.jpg","25e0fa3496591501f5c29d0b802b77d2"],["/images/pet.png","2b8c121909497e57057478856fe48a94"],["/images/pet2.png","dfb1d6a17b527ccc0c600e6ad31f55e5"],["/images/ps1.png","0917ba91f21b6944dc08d35c41a326d2"],["/images/psb.jpg","6a27c58337875c776af0a7667598b401"],["/images/quse.png","7cd1ec12b804305430cb4cdc09c7a893"],["/images/rain.jpg","9c26acc44c692b6a63e134be07b07c18"],["/images/shezhi.png","281bf545f6a4024e2d0b7120bc398a21"],["/images/soul.jpg","d97b4099c0728ff6123d006fa62db86e"],["/images/study.jpg","a9b1cf95ee6bd9f3913e8ec6a6a6f44f"],["/images/tianqizhizi.jpg","dd48d78b4eeaaa52578352f9ef570b14"],["/images/vue.png","cf23526f451784ff137f161b8fe18d5a"],["/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/images/work.png","e521cf5b834292fde1c50e0a0f5802f9"],["/images/xiaoguoyanshi.png","994a3b710d36df0a4630cd9a768c7f7b"],["/images/xiaoguozhanshi-m.png","1fefca18214fc4889d1bb76b81887c9d"],["/images/zfe.one.png","b41f689341882058ffb28c4cee499bde"],["/images/幻想终结之日.png","0025c4d3973bdfedb80db3f78c59fa47"],["/images/时空战纪——游戏建议及意见①.jpg","1337457f14a8dffee66d94f8915b54ff"],["/images/简历.png","d70507ee4615c9e324578c0d777e6855"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","b2816f18531e7470afc88d9f63c2b52c"],["/img/favicon2.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","d19c02482709a707cfc01d25ffce5bdc"],["/js/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/APlayer.min.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/airvisual.js","71cf86bfd452ca01d92438d8266416ee"],["/js/airvisualapi.js","6931bebe1696688d109963187fc2eace"],["/js/background.js","94c8410b174f58594cf81ec99054968b"],["/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/js/calendar.js","a58e02711cc6dec4dc04257e555b8923"],["/js/clock.js","ead1a80f7219c166e1180674b7d8c70b"],["/js/color.js","3730bb4f7b185e6f5130ac28bace968b"],["/js/danmu.js","6b6ae6b7f1b42dd4857541f43b2bb733"],["/js/echarts.js","dc1227b1eba1ba47fd185a387d0a7d37"],["/js/gitcalendar.js","fadfa8a42272cd322118653dca512a7a"],["/js/history.js","20459f7db325e597e64903f4c0d19306"],["/js/historyroll.js","a3e9ac376106816c50a61f9f4306d671"],["/js/jam.js","462c07d3b2e0f20394d994bbcfae37cb"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","790cd2f28594f8affbd4a450037c48ff"],["/js/rain.js","f656dc28e4ab5c3f8414d35f683278c1"],["/js/rainremove.js","ceacf82842b101f7e54a2aaf5f4bb9cb"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/link/index.html","bd49005205130a334e5e6727d4347bd2"],["/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","f1b72a5d35f9969bbd4d725441aff72f"],["/page/10/index.html","ab14e4fa92418693f9b8a5422d8ea83c"],["/page/11/index.html","b492d35d5538614c512428d2f8d8901f"],["/page/12/index.html","a78dd4e4f7bb0dd948c40ed82ed8c071"],["/page/2/index.html","f8904548fec0103b0065dbfe7f6253bd"],["/page/3/index.html","2f2e3e11a164840f52a4ad368ce47334"],["/page/4/index.html","d8e917df2dcabdf6382e1cb18bc67c89"],["/page/5/index.html","77f11a6561d4cdb64b05fb8c0413f6db"],["/page/6/index.html","0b8bdbacc894cd312213c6fd0d81784c"],["/page/7/index.html","273f7f6580164b65e3c29239c729fdd2"],["/page/8/index.html","f76b697e70824269c2a3f3a8dd76eb91"],["/page/9/index.html","32a8e3a012f5ad8147458485f95e1b52"],["/research/index.html","ffe69330bf773a46bd9fd0cc1a39e012"],["/sw-register.js","9435cd5f4969baaf3a3aba2372976d96"],["/tags/Butterfly主题/index.html","5049663ede8e471a0f78f633e5986581"],["/tags/DIY/index.html","bcf81f0bd9d98fa9fa0e215e3bc4adc8"],["/tags/DIY/page/2/index.html","e78bfcbf14957e5633022352d36fd6eb"],["/tags/ICT/index.html","1c6f788025b2b3e2b8629d2e1d39ce55"],["/tags/NHK听力练习/index.html","8c0de0b38df641419d9387fc2ad43442"],["/tags/NHK听力练习/page/2/index.html","265d7c33e183191be13f93bdcd3a1c54"],["/tags/NHK听力练习/page/3/index.html","7664a5c90f6021445c423219b7535031"],["/tags/NHK听力练习/page/4/index.html","9e7912f22e15c02b7ecc22df21542919"],["/tags/NHK听力练习/page/5/index.html","5c11664757e58571043c3c2b175484f9"],["/tags/NHK听力练习/page/6/index.html","c70c21a457bb5c1f8e5092fbba522101"],["/tags/metro-ui/index.html","c0f9829b6df8987eca1ec2a0e144a1ef"],["/tags/vuejs/index.html","2526a637ad51a62e16bdc066d3461be1"],["/tags/お盆/index.html","d91698c570cc6a461847d8124d57d573"],["/tags/世論調査/index.html","3a750afecc09df4f48777d4af5b4af93"],["/tags/作品集/index.html","8d020b02d0b6896791cfd663db971730"],["/tags/作品集/page/2/index.html","5393120114d4cc221472bd3504387a56"],["/tags/农业/index.html","33cb5b81e2c27d726c86f10aa1ce4b10"],["/tags/历史/index.html","da68bf9880b89faab5f61ce5265c8619"],["/tags/営業時間/index.html","15fbcfe5238fe685b90fa6b3d6017f24"],["/tags/国外政事/index.html","32fcd71054e8a5d01575b1f9a914bb02"],["/tags/地震/index.html","c37c78adbddee75ccc7133f71ad8752c"],["/tags/外国政事/index.html","78fbe7322f2448a63951bc3b5e41fc3a"],["/tags/天气/index.html","116544e31860137698d9fc741d1ca353"],["/tags/天气/page/2/index.html","219dc14e71e28701f91de454c65fa52e"],["/tags/奥运会/index.html","c3c45da6f5fa07be3af124427816aff9"],["/tags/学习/index.html","bd1f325b75e52a31bdfb6a846d977ce7"],["/tags/学习/page/2/index.html","276fd6c59030853cd07dd41e5305b3f2"],["/tags/学习/page/3/index.html","5ebc903b84ef95e796ced3b830e337d3"],["/tags/就业/index.html","72500657274240bd582aef2d58623653"],["/tags/庐山/index.html","362c84726d399f84a3c55d2705597f38"],["/tags/座礁/index.html","b9a847b7c4912f387cd01aebbed25ed8"],["/tags/政府/index.html","1f6a15fc46bfe02d2df4553c7ead867f"],["/tags/政治/index.html","b402dedda684afca931dd9fc836c4f27"],["/tags/教程/index.html","3f4664bfeaf518f64748eeb34ad5f9f9"],["/tags/日本教育/index.html","5748ebc454eac2e0df809da6e1a85226"],["/tags/民生/index.html","029e88a4e8637c973b7861e99a8a10a4"],["/tags/民生/page/2/index.html","8d3f4db9d6b2099963de66d2818e10de"],["/tags/游戏评测/index.html","031e7ccfeaf7066540cba660c1931565"],["/tags/游记/index.html","6543a1dbd099beb8f4c03e907a520de7"],["/tags/生活趣闻/index.html","0812435499df1cc3f5b0f58103da03b6"],["/tags/科技/index.html","6453c3bc2287102eb03d81ef5d1a7968"],["/tags/经济/index.html","fba0e486bd7cd14dc6471e682556a434"],["/tags/经济/page/2/index.html","6f6bdefdae01b20e0cf58075649577c1"],["/tags/网络教学/index.html","a17d73aeb5ae4e4d024528e1e2d75a78"],["/tags/舆论/index.html","e696eb51cd5c0d9d346584dd342efbc6"],["/tags/虚拟现实/index.html","b8fd624c0e350507471c8ed8f4a2896b"],["/tags/随想/index.html","34ab3c725891480de74867f3472f0471"],["/tags/障害者/index.html","c1d8488aaedb5f4294045d4520e435c6"]];
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
