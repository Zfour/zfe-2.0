/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/05/20/2015-05-20/index.html","56daafd7ad7cb32d63adb07bc0907793"],["/2015/06/16/2015-06-16/index.html","14bf276df46d14f11988d2c7839e5117"],["/2015/12/12/2015-12-12/index.html","53e55cfc268590a1b458cdea39b3cc8c"],["/2016/06/08/2016-06-08/index.html","4d119174348c56f53fdc269c74ed0287"],["/2016/12/18/2016-12-18/index.html","39b7519066573e48d62b44ad12ad5f7f"],["/2017/02/17/2017-02-17/index.html","3c21dabb4bc47d32d7b6b002cdf0f6c4"],["/2017/03/17/2017-03-17/index.html","e9dc80a52a98080e3ccc0cc2e7d978d1"],["/2017/04/06/2017-04-06/index.html","07a5f4843631ca81de9825962b1a1b4a"],["/2017/05/17/2017-05-17/index.html","4e1eecd82bc4ffaed34aa1d5560c3aa7"],["/2017/08/15/2017-08-15/index.html","d51461228ae11eecafe201c1a76e6aad"],["/2017/09/16/2017-09-16-1/index.html","f4fc2f390c41ecb9e7eb2f50cd4fed0d"],["/2017/09/16/2017-09-16/index.html","672baa0d0b4946e1977a501e5a5b65f6"],["/2017/09/21/2017-09-21/index.html","ee003cb1b73bc08b034953e499a27dcd"],["/2017/09/23/2017-09-23/index.html","26c1c03138fbb75ac8591cb105b2a89e"],["/2017/09/26/2017-09-26/index.html","1b5483cf9aa000bfe9a544c70bddc0c7"],["/2017/09/27/2017-09-27/index.html","30d5c3e4694e0c9789909b419e185d87"],["/2017/10/04/2017-10-04/index.html","4140863fa0f2c218946ed688d73fe035"],["/2017/10/08/2017-10-08/index.html","11aec0580225edf7861a3444060300c5"],["/2017/10/09/2017-10-09/index.html","ff0bdb47c4ed170114815a9c48198745"],["/2017/10/15/2017-10-15/index.html","59ff77771a2df553a32b45164f9c5dd5"],["/2017/10/19/2017-10-19/index.html","061795f79b34b43b0a6df060baf33146"],["/2017/10/23/2017-10-23-2/index.html","62c0db9827da87f5aad9ba3802a19a65"],["/2017/10/23/2017-10-23/index.html","124dbb820901cdef0d73d31747e1e8b1"],["/2017/11/08/2017-11-08/index.html","ea925978d324357794b249699c8612aa"],["/2017/11/12/2017-11-12/index.html","53aa9898b945938bfcc4d5033088b4aa"],["/2017/11/15/2017-11-15/index.html","ab9131c117a01b9e5e92bd84c9ece6f3"],["/2017/11/27/2017-11-27/index.html","0bc14483b9a0613359bc41589d5e94d5"],["/2017/12/06/2017-12-06/index.html","34e356f5cbde4cec464f71026ce9ced1"],["/2018/02/12/2018-02-12/index.html","59e3f8a37340de9870ecc3440eb1b652"],["/2018/03/26/2018-03-26/index.html","e5508b106e442e41a7c3024211c24507"],["/2018/04/02/2018-04-02/index.html","3a437e1622eadfb4d1f58467981c7c6b"],["/2018/04/24/2018-04-24/index.html","c4f63eccc698a8a4bef4d3c205a33994"],["/2018/05/18/2018-05-18/index.html","1c71886bbb9fc71935efeba9f83dfe70"],["/2018/05/23/2018-05-23/index.html","c32e17463ef43535836745bf27db683d"],["/2018/06/08/2018-06-08/index.html","9d16bf9ccfb16a17b846003b6dffa490"],["/2018/07/01/2018-07-01/index.html","ddd1247d828a5ce81e26d80516d235bd"],["/2018/08/30/2018-08-30/index.html","2ec5c6b4861ae54f903267edd02f1a04"],["/2020/07/20/2020-07-20/index.html","1f7db6123ea9df06852bbc10d9a83ac7"],["/2020/08/01/2020-08-01/index.html","a834eec36c0e512fa5ef9157134e6ce0"],["/2020/08/02/2020-08-02/index.html","801750d2a368806443c82ee56afc27f0"],["/2020/08/03/2020-08-03/index.html","3b136cb4f0ed13e825b49fc963c139fc"],["/2020/08/04/2020-08-04-1/index.html","6b3fffacd1c4ee66d9675f869489889b"],["/2020/08/04/2020-08-04-2/index.html","42ac28e580d0726e105e803477c5a22f"],["/2020/08/05/2020-08-05/index.html","1272e1df87228375c2636ff7b4279493"],["/2020/08/06/2020-08-06/index.html","f05044746d9b1f69a6bb96d22eac442a"],["/2020/08/07/2020-08-07/index.html","b8bccc3a7b1216bd7ffac8c5049e6495"],["/2020/08/08/2020-08-08/index.html","6c0d15c5bff041ac611b0aa3b2531db2"],["/2020/08/09/2020-08-09/index.html","68bfe858cdc3608b2396d7031f2243c4"],["/2020/08/10/2020-08-10/index.html","1dc866b50f740f8f514d2a2557c55d84"],["/2020/08/11/2020-08-11/index.html","ad295a8cca82ad271fbbd88b52aac7f7"],["/2020/08/12/2020-08-12/index.html","50525ab43e20ece889ae0d943ada456d"],["/2020/08/13/2020-08-13/index.html","ec1ce6e1d91e24facff85973c2439cd3"],["/2020/08/14/2020-08-14-1/index.html","fb102d1c8883572d1c94b1146261cb26"],["/2020/08/14/2020-08-14-2/index.html","254a8bedfb660808d8a9c61c5ad048a2"],["/2020/08/15/2020-08-15/index.html","ed187f865c3d0d699fbb6d7f54dfb275"],["/2020/08/16/2020-08-16-1/index.html","b45f97006150c9e5b57d986cccb8a450"],["/2020/08/16/2020-08-16-2/index.html","20010a88d2546503820aba7e0cfcc56b"],["/2020/08/17/2020-08-17/index.html","86b4b95ec4ab45c1c1c20e4593c43016"],["/2020/08/18/2020-08-18/index.html","3789cd424278d0840919757e624ad649"],["/2020/08/19/2020-08-19-1/index.html","dd44fbd9714002dd20eb262a81702d6f"],["/2020/08/19/2020-08-19-2/index.html","cfc2a4db6fed0efe79bd248d377c5990"],["/2020/08/20/2020-08-20/index.html","961226711b3cc75fa5404e9ee6c7d7c9"],["/2020/08/21/2020-08-21/index.html","c0b29d8c52e026411198c4ae206cb68c"],["/2020/08/22/2020-08-22/index.html","0058f591d0aceaba85b3591c1b66f193"],["/2020/08/23/2020-08-23-1/index.html","016dbc47f427a7aeed8e7529ebc17663"],["/2020/08/23/2020-08-23-2/index.html","fe38c31764f3d408d86c719f02caecc8"],["/2020/08/24/2020-08-24-1/index.html","932e85d49f1c968053e5a63cab28f2fd"],["/2020/08/24/2020-08-24-2/index.html","97274fae24cae497693d6fc1aaa5b3ad"],["/2020/08/25/2020-08-25-1/index.html","a45ab3b367e648a4d9f10e3c107e9d57"],["/2020/08/25/2020-08-25-2/index.html","8f6778c674d370c9ed73c39dc2d5af7b"],["/2020/08/26/2020-08-26/index.html","1e996e5aba40c4187ab19323dee36aec"],["/2020/08/27/2020-08-27/index.html","b42422a40c281db7c72ef0db31390371"],["/2020/08/28/2020-08-28/index.html","3744788b0bad2563d5e213426492012d"],["/2020/08/29/2020-08-29/index.html","a68a28a0e535639418a95d0eabdf4a5a"],["/2020/08/30/2020-08-30/index.html","8e65cec8d7d1b9a8a7f78c04e30abdcd"],["/2020/08/31/2020-08-31-1/index.html","7c6885a3d2d827c2d2d82ac0b95f0fac"],["/2020/08/31/2020-08-31-2/index.html","54f99e5218e6a77ed356ff102a2531e6"],["/2020/09/01/2020-09-01-1/index.html","2c75ea967c7be1ecec619c3bbaaf38fd"],["/2020/09/01/2020-09-01-2/index.html","a07d9bccd79fcbcefd48b6e91365dea3"],["/2020/09/02/2020-09-02-1/index.html","ef1b9047d79a588c43eb707a21f09ea7"],["/2020/09/02/2020-09-02-2/index.html","a7ffd588f61e77d056e310908c8eeecd"],["/2020/09/03/2020-09-03-1/index.html","48401d3b6fb295a75d0e9f330d59a7b1"],["/2020/09/03/2020-09-03-2/index.html","92dd71ec9387686b5a564dfd5ce9ee77"],["/2020/09/04/2020-09-04-1/index.html","47591254c651631ac6406f65a78b54f0"],["/2020/09/05/2020-09-05-1/index.html","c4299c7f503b0ab90563874aa9fc4a99"],["/2020/09/06/2020-09-06-1/index.html","6c1112fc00aa04fc3d95ac874d11f949"],["/2020/09/07/2020-09-07/index.html","c87235a763b9b63c56190294c588a6f7"],["/2020/09/08/2020-09-08-1/index.html","f813d9a5a256f3c00b0614ca3a37914c"],["/2020/09/08/2020-09-08-2/index.html","fc0d261c0b94b5fe336c7adb1f5843a6"],["/2020/09/09/2020-09-09/index.html","e7c8a6dcc6d075158a014a4e11b6a896"],["/2020/09/10/2020-09-10/index.html","2069456d457af9b63cec6d3dc1c5967b"],["/2020/09/11/2020-09-11/index.html","5da47694b09688986c2e11983ab6b33c"],["/2020/09/12/2020-09-12/index.html","bad9b237a8d430916109069da286c3da"],["/2020/09/13/2020-09-13/index.html","3783f95fed5a7f879ad199a94a143f2a"],["/2020/09/14/2020-09-14/index.html","0254816e9fb12fef72fb5f5f4adce9d1"],["/2020/09/15/2020-09-15/index.html","14a3c514f6fe53eb61115bdf6de55286"],["/2020/09/16/2020-09-16/index.html","e0ca691b9c821bfd9aa8629f772dd6a5"],["/2020/09/17/2020-09-17/index.html","013b3e6d91f00c37ebc2318f7660fae0"],["/2020/09/19/2020-09-19/index.html","1f824c66d9c3603d041c2776296a734f"],["/2020/09/23/2020-09-23/index.html","7c955ad687f5e2f7db8513a4a900a738"],["/2020/09/24/2020-09-24/index.html","0e0bd4e93da6f12e1883a20140ed333c"],["/2020/09/26/2020-09-26/index.html","c77424b5e63d1376c267198c655b1192"],["/2020/09/27/2020-09-27/index.html","463b898df8c2ac5b4cd624a6327e2b72"],["/2020/09/28/2020-09-28-2/index.html","908c49725d1fc723c15a18455ce0b2f1"],["/2020/09/28/2020-09-28/index.html","d585f76e06cebce9cdba513e8a2c7014"],["/2020/09/29/2020-09-29/index.html","569a28056be342688a81b0bdc86d4f8a"],["/2020/10/03/2020-10-03/index.html","bfa28e9a5c1a43dede2723da808b48e8"],["/2020/10/04/2020-10-04/index.html","ccb6ae1773df04811215127c849119be"],["/2020/10/09/2020-10-09/index.html","9606b421c9211ba886ac5c236c7279ca"],["/2020/10/10/2020-10-10/index.html","93557c7fd72ca0b401b07900f27a99b0"],["/2020/10/11/2020-10-11/index.html","a6247b605772d88b2fa7e28c67dc1905"],["/2020/10/12/2020-10-12/index.html","ef5506753f08da8cd622c104eb45549e"],["/2020/10/13/2020-10-13/index.html","1f32d5d3cfc68d69e966f10edc778cff"],["/2020/10/14/2020-10-14/index.html","f8c08d3731aadb216e8d105dd3d266b9"],["/airplayervisual/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/airplayervisual/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/airplayervisual/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/airplayervisual/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/airplayervisual/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/airplayervisual/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/airplayervisual/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/airplayervisual/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/airplayervisual/index.html","e4087540851989ef06523178015949fb"],["/airplayervisual/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/airplayervisual/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/airplayervisual/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/airplayervisual/js/jamsetting.js","7927507e0080ddf55c6d8b5f526bd942"],["/airplayervisual/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/airplayervisual/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/airplayervisual/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/archives/2015/05/index.html","d8f4549dd93fdd7ddf450773bef2eba4"],["/archives/2015/06/index.html","c4d71d403c5436df9dc7f64d972884f6"],["/archives/2015/12/index.html","f3a24528a7b40a40357afac24385d562"],["/archives/2015/index.html","d1a50f797ca5ae30893ec4c63113cc45"],["/archives/2016/06/index.html","e3153b070969d0dc7f441799e847c1fc"],["/archives/2016/12/index.html","5fb750dd152f3786f3408981b43a5370"],["/archives/2016/index.html","c0ad860ddaa3424c7404623d004363f5"],["/archives/2017/02/index.html","c74fe1c571ead254590c9d346a308319"],["/archives/2017/03/index.html","6a18cfc368076b2c8361d9df40a8f764"],["/archives/2017/04/index.html","4a832851634d526e47ec83f2e47d90dd"],["/archives/2017/05/index.html","0a7cec1f2e57d2bbb3cdb04327474b55"],["/archives/2017/08/index.html","93d14ef96accce74d5e92d52def465ee"],["/archives/2017/09/index.html","edc298d56ef998b896abdb5633a4da68"],["/archives/2017/10/index.html","849b159e1f4fa3da55dc860d8cc5b511"],["/archives/2017/11/index.html","1ed6ae786bf4be717676a1f0d77ab449"],["/archives/2017/12/index.html","9414ba5a32a9a9b71e9fca037828ea95"],["/archives/2017/index.html","2b7ac7ea15733c4ff9c86bf83d056e44"],["/archives/2017/page/2/index.html","ad5dde8157c55e574b93584a5b0416fc"],["/archives/2017/page/3/index.html","6e28f261d786634654e557c7b30d536f"],["/archives/2018/02/index.html","9164002384acf7b84d3ceed813f7e493"],["/archives/2018/03/index.html","96f1d61aa3fe581aded614c2e184bd3e"],["/archives/2018/04/index.html","e19ac83b0a27fe4c6779d015f86482f3"],["/archives/2018/05/index.html","5dce6b5d4d3ffc24b46748384be93a2b"],["/archives/2018/06/index.html","a5be7782fd0baff23f35b079350f67f7"],["/archives/2018/07/index.html","e47a5213a6c2836b29b6a13b6638fec6"],["/archives/2018/08/index.html","ba1bf669c3235fb01e6790711b58945e"],["/archives/2018/index.html","f0f428f61ab2836456d8241699d38094"],["/archives/2020/07/index.html","870a26f92dbae4fa01c9e3bc6de6133e"],["/archives/2020/08/index.html","004f26b1cdf31ce77aba707f5778746f"],["/archives/2020/08/page/2/index.html","68482f581b28d12a09a4d21a32b4c0c6"],["/archives/2020/08/page/3/index.html","70020859eb974d0c63087b2cd6e6a74d"],["/archives/2020/08/page/4/index.html","f2423ff5dc0a45c1a81d074f9aa11643"],["/archives/2020/09/index.html","7270c0be8265c2e7256c1d81f3a1a735"],["/archives/2020/09/page/2/index.html","3d65159b1e9b3a0d3801f536d66015f6"],["/archives/2020/09/page/3/index.html","8d7d00a9a6e4f060580cec09d15f294f"],["/archives/2020/10/index.html","d34f1bdb39f58400b935923807d30a37"],["/archives/2020/index.html","11721e346998eaf81ca218cc5c7e7b68"],["/archives/2020/page/2/index.html","1cedf1bf53e5a8e8a41af7c7ca140f69"],["/archives/2020/page/3/index.html","70c01a23266330b666b376156fd37ec2"],["/archives/2020/page/4/index.html","7907a2fb7e102a1d0e007d3f0747be78"],["/archives/2020/page/5/index.html","3f54fa8140b56886777284b5f70cb9f8"],["/archives/2020/page/6/index.html","5a4cadfa58861bf45732e2f93ad97f36"],["/archives/2020/page/7/index.html","046222269e88cd7231ba60ed1690939d"],["/archives/2020/page/8/index.html","db83a839e0f40ca6567af93d9de6db3c"],["/archives/index.html","ab0cc38737c5ed389c17ac68e76fc91c"],["/archives/page/10/index.html","82d77e7b1ec3049f114830e252587eff"],["/archives/page/11/index.html","b9000c04e7b8dc282a8d24b3c26b6b4c"],["/archives/page/12/index.html","77a6cccd72cb6cb0630847deb5449ddc"],["/archives/page/2/index.html","22100003ab5f7b4097c6e9766ac5cba0"],["/archives/page/3/index.html","f9c2dd5e7f6af498171a21a89e310f29"],["/archives/page/4/index.html","829c5bc4d9f62c68aeb2392c206d0cc8"],["/archives/page/5/index.html","c3c9b18a123ce505f5db2dc20773f597"],["/archives/page/6/index.html","79681b2a44b27ec94ec499e2a9d9457e"],["/archives/page/7/index.html","0a64e3eac14b305815730ff9fb58ea50"],["/archives/page/8/index.html","ede2b9c77f7a7a69224048cac6c5b1a2"],["/archives/page/9/index.html","eed4ab4bb8edb4d1d27017b183dfb1c8"],["/categories/NHK听力练习/index.html","a9cbd2580d56d97f8d03f31ea2067c49"],["/categories/NHK听力练习/page/2/index.html","61e109e7fecbd0c9c7f1c1851b67ad20"],["/categories/NHK听力练习/page/3/index.html","28b0c243769bab407abc9adf0d929a3a"],["/categories/NHK听力练习/page/4/index.html","4e7c66aec2351146bff46c049ef77c8b"],["/categories/NHK听力练习/page/5/index.html","6d21dd5499220f22181fd871c84c07cb"],["/categories/NHK听力练习/page/6/index.html","d9cc6b55e5ef75629645befcc15fb364"],["/categories/作品集/index.html","80376f0c2d5af7b4c3e589e20a31e3f1"],["/categories/作品集/page/2/index.html","04ecf10dab96d5432e0b34659812852e"],["/categories/学习/index.html","225fe9a2e900ffbdb18173120ec8dfac"],["/categories/学习/page/2/index.html","8880fc7e2e758a2ee3634cdd6364a8be"],["/categories/学习/page/3/index.html","464a5ee02ec34a5bc14fec2974ad2452"],["/categories/游戏评测/index.html","fcb252da3ca54fd70b50962bab391277"],["/categories/生活趣闻/index.html","6aea9bb1948972b258820bfaf5189360"],["/categories/随想/index.html","a5005641e3d449c59f57b28b87de5700"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/addcss.css","59cae1ddbe6925c34f846ffe12d19921"],["/css/background.css","32d5acccbb94f987faf37cfdc3fd06df"],["/css/calendar.css","0090a32d2a61d42c5bfed254bfba078c"],["/css/clock.css","65602c2385c7eab42ee3804cd6ee0a5a"],["/css/cursor.css","c1a23e168c5b794ff367eb0ae77eb26b"],["/css/danmu.css","2a5b914a9592bcd353425c6d5fa7af8e"],["/css/index.css","e0ecbfc6d569c15e3c74302c0114ce1f"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/loadingline.css","bc1ee020a6a11fea17b915b97e6978bf"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/html/calendar.html","bddcec1edba7f4c49fe5cd75f8cdf5b2"],["/html/shiyan.html","8f4c0e684bda690d94efa93825b1d488"],["/html/shiyan2.html","d7b7702c9f2056e67259982a785bc96f"],["/icon.png","8ec68de45d18642ba9baf2447e62f476"],["/images/AMJ1.png","d27a6725d1aaaf5324248da4312ab6c2"],["/images/AMJ2.png","00e22eba5901e5bd674e42228cd5bd26"],["/images/AMJ3.png","c8c9ea6348dfcad3a641899d5b587431"],["/images/FOTO1.jpg","4b6f100861908e2c7044cffbdb4a0c1a"],["/images/MVVM.png","ea5a002ee2f85c71a0db51d5adb5de19"],["/images/UT.jpg","367f4e432f9db55a92b2a290c4b0a476"],["/images/UX.png","a183974e958d41d1b6acec70bb7ea00a"],["/images/WindowsTerminal.png","8ac29cb56b8a1768cf7de071e9f1ae6f"],["/images/air-w.png","c1cc32f9d3e17551ca11a7d18a0b533a"],["/images/anzhuang.jpg","912b2489957f8344406edc5e5cebe5fa"],["/images/api-setting.png","2c0bb074390779721cba009e96c5417c"],["/images/apikey.png","1f31121b190eb1f990bcc3e27524bc03"],["/images/backpic1.jpg","86a6fa88167feb338fbf1a4e9057114b"],["/images/calendar.png","86319b08b93be7c8bc47cdba7a169563"],["/images/clock2.0.png","0a0f122c7a25262fc02ee99df0ef21eb"],["/images/example.png","aaac9983e5d59f919bf282dcff2edb3c"],["/images/foto17.png","28db4c6608ad1ee6b34238cafab25e5e"],["/images/foto2.jpg","be95b922512d004a61f83c97af3e2602"],["/images/foto2.png","0dc07d4e1b00526a273a89dc8b81548d"],["/images/foto3.jpg","551c0616c92c4ee7cc17dd458b3c46e9"],["/images/foto4.jpg","9d1d9fea759a41afc0061866e400339a"],["/images/foto5.jpg","984f618b15372f37d54f507e6f379f10"],["/images/foto9.jpg","b683fc0b998e80ff8f5a3e45e889807c"],["/images/girlpic.png","ff1e8427ed555af639e6d849f8f648f1"],["/images/girlpic1.png","698e5570e821c3cae643cc9777c2292e"],["/images/girlpic4.png","551882e4b9b6afb79000fd34c0dbf5e5"],["/images/headimage.png","332502f36a0297b30cb7969fe6de8451"],["/images/hexo.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/hexoWT.png","c027cc9f5665c7d7ba657e7a4bb40017"],["/images/his-json.png","7d8a71e38ab684107446e5c72c31854e"],["/images/history.gif","0459a3dcf2317253de0b34482880c63c"],["/images/homework1.png","e8d2f64d0785519ea7779016208a2900"],["/images/idea.jpg","5eb08bf6c965588f03c8860f201cac45"],["/images/key1.png","f2a370e02ad6c5a101db20b47a9a0008"],["/images/key2.png","21dc40bbe0377cd9fe85a9cb431c18f0"],["/images/life-cycle.png","02f39ea5c041d45938fda4b50f234cb7"],["/images/life.jpg","74d2d9c5f48ec59e3badeec690941812"],["/images/listen.jpg","9d4f73cd5634f43deaed4f9aca03f9a3"],["/images/magnet.png","4899a924f3de0d19dbe0415128c07d65"],["/images/magnet1.png","8d010eb86ca943e036adaa7de57aee7d"],["/images/magnet2.png","293cb414a8ab93b43bde3bebf9cf0cfc"],["/images/magnet3.png","1923148630e2e094ff80bf35aa604c10"],["/images/magnet4.png","9bb4f963ac1c09f02d62525f513f492c"],["/images/meilu/1.jpg","cd67abcc3f543b5c66adc4f9d9c5c628"],["/images/meilu/10.jpg","ac9fb2711e477b5db1c3acb57e899045"],["/images/meilu/11.jpg","364caad6dfc356a3dc630fa067e48e88"],["/images/meilu/12.jpg","274767e5708f79934e5bdbf73eda8f0d"],["/images/meilu/13.jpg","dcab12b84454770b208913db63e825ac"],["/images/meilu/14.jpg","037cdd048284e621f27e17a2c59e8ea7"],["/images/meilu/2.jpg","f6cdb65ae3fad4523b32f5ee38696b60"],["/images/meilu/3.jpg","9e5df3612c2d93bf57313186c954aea5"],["/images/meilu/4.jpg","69ef2d6f4bcd79cf4b4e672b60c6751e"],["/images/meilu/5.jpg","ce81ca16def7613b7ebb368fb554f14f"],["/images/meilu/6.jpg","cafd5b62305f806754a75cc3af8c3b77"],["/images/meilu/7.jpg","b8ae865d386e1e713a6034da6b090c10"],["/images/meilu/8.jpg","afad7a7bf1066c817a8d2e7566bc780d"],["/images/meilu/9.jpg","72f9649f56b564eacf23ce3dacb88029"],["/images/metroui.jpg","5503bfffd450d9ab572b67ea00941571"],["/images/metroui/1.png","79a03b408c19c74eeaa8ff6e17a03f9d"],["/images/metroui/10.png","8309fed71a15c78f2dfa3af1ff75a5f3"],["/images/metroui/11.png","aaf1a007cbae12f93cc2688bace18d28"],["/images/metroui/12.png","0758ea282c3828c47e5c64520ff85783"],["/images/metroui/13.png","12ca7b511927cd4b26e97f3b20908a32"],["/images/metroui/14.png","f44ba7680f7b36df437e2ae2588d0565"],["/images/metroui/15.png","e8927c78b125b805af7aa86fee815ab6"],["/images/metroui/2.png","e604d3c662b996f06f22753ba9ab379f"],["/images/metroui/3.png","664e3b7490f2f95d5547b8ba79a65456"],["/images/metroui/4.png","c0f255344cafc303a1d9c7404da37149"],["/images/metroui/5.png","da2074cdb1298aca826abc1a5c441300"],["/images/metroui/6.png","efef2f087127614b4e03bcbe9a347018"],["/images/metroui/7.png","a4d34b1a2dbe3a58d3a92276880be039"],["/images/metroui/8.png","1d34a626bbaa898a60d4501936bcf962"],["/images/metroui/9.png","0663697c1667b377fe2623bd65e00b31"],["/images/metrouilogo.png","aea81b42d1c2c96440f74cf56ad82e2f"],["/images/nhkimage/2020.08.01.png","af4c55b2ae1d5ab2f56c75a87fcdfdb3"],["/images/nhkimage/2020.08.02.png","c355d41b90f5c65823f96c5f6868ce53"],["/images/nhkimage/2020.08.03.png","fddcedb40d7f28b2ccb90814351ad5c8"],["/images/nhkimage/2020.08.04.png","8b4518ec5a8513f442980ed7167136b1"],["/images/nhkimage/2020.08.05.png","590abfb19334b0c3cee5a005674f2253"],["/images/nhkimage/2020.08.06.png","d469e21100c42435e88f2bdf07f93da1"],["/images/nhkimage/2020.08.07.png","3ca9e2c8b8a09a38423d73cd36e8de9d"],["/images/nhkimage/2020.08.08.png","4420c2d899fe4eb90c48bae0da8418a2"],["/images/nhkimage/2020.08.09.png","df14be338f9c920818dd1daa6aa955ee"],["/images/nhkimage/2020.08.10.png","c4e2ed023cd3dbfd4986add35ca9357c"],["/images/nhkimage/2020.08.11.png","cf562339e57f673d394f3e6cdd1f60cb"],["/images/nhkimage/2020.08.12.png","81dfa179fea3052ddcf73912ea368f67"],["/images/nhkimage/2020.08.13.png","8cf26c2642e7a27cbd86fcbda8bae8d9"],["/images/nhkimage/2020.08.14.png","d88eeb678b3ed3651d597e61957e264a"],["/images/nhkimage/2020.08.15.png","b9879f193867edcffeefce62c9dc7153"],["/images/nhkimage/2020.08.16.png","46cb914aa1d556561897767ec9ff66a0"],["/images/nhkimage/2020.08.17.png","ea1af9645b5cc9cbaafe70a91dd15cca"],["/images/nhkimage/2020.08.18.png","e87e4de39a6f06cf4283a63af92dd8de"],["/images/nhkimage/2020.08.19.png","8001a951513b542a98ce1151be5bd87b"],["/images/nhkimage/2020.08.20.png","4bc8fafa3ecce30d340b1350715d78e3"],["/images/nhkimage/2020.08.21.png","07ad1337e127922abff27da6c672549b"],["/images/nhkimage/2020.08.22.png","b2b5d53ba46015f64048f9d803b12179"],["/images/nhkimage/2020.08.23.png","225af8c0cabe5218ec634d1b8815fd95"],["/images/nhkimage/2020.08.24.png","1d54a484a6e2395aabe9be005cd90361"],["/images/nhkimage/2020.08.25.png","8008ba169cfce0ef2041329cd29b6b77"],["/images/nhkimage/2020.08.26.png","72a2b8094003a54c97a34ea97cf21bc3"],["/images/nhkimage/2020.08.27.png","893407e604804d215c8fef8bcd5f2684"],["/images/nhkimage/2020.08.28.png","b542280b7341759890a99cbd44d822c5"],["/images/nhkimage/2020.08.29.png","620e2e7d4772e39615fd1a88cdf49717"],["/images/nhkimage/2020.08.30.png","f645d7ba2dcb506f9ec6fb9244425ad7"],["/images/nhkimage/2020.09.03.png","c5262f3aa87190e0273383ea1e445681"],["/images/nhkimage/2020.09.04.png","c07149c32aa41c03bc7dac82a713f6b2"],["/images/nhkimage/2020.09.05.png","4e43556e1cb3b7f4d75f0f6127616a54"],["/images/nhkimage/2020.09.06.png","1021d2ae04a7f109404f857a2a7629cf"],["/images/nhkimage/2020.09.07.png","db9827e9f0a4cf1401b559b4644a0204"],["/images/nhkimage/2020.09.08.png","efe1030b73dc1c01f169c3122a194426"],["/images/nhkimage/2020.09.09.png","f6ba3a1c6cdeff88404ebe2a646f2eb5"],["/images/nhkimage/2020.09.10.png","3471b05d02113517359a9e2167befcfa"],["/images/nhkimage/2020.09.11.png","921a541a8bffb1aa436df2eb6db7c99f"],["/images/nhkimage/2020.09.12.png","a51f8ebaddba69bb80f9259a30f17e65"],["/images/nhkimage/2020.09.13.png","0399889200493cd2154ffc407e2bc400"],["/images/nhkimage/2020.09.14.png","eaaf3da69a39ed316b7fc8c4d409bb0f"],["/images/nhkimage/2020.09.15.png","5774959ea4061c9298ea174f0862cc3a"],["/images/nhkimage/2020.09.16.png","0c5a00f74020740fda589c02e4b3f917"],["/images/nhkimage/2020.09.17.png","b5aef734e3a7db4862ca3fe4e6769dc2"],["/images/nhkimage/2020.09.24.png","5982a7b3843f4ae43b2b4bc4b0c577d6"],["/images/nhkimage/2020.09.26.jpg","c6415af781fbdd36fdb034f74646129b"],["/images/nhkimage/2020.09.27.png","27aa6f6a8d5534ccd99cff261dcd9eb6"],["/images/nhkimage/2020.09.28.png","0f4318d1ff17a33de364432a1c44b5ad"],["/images/nhkimage/2020.10.09.png","6408d9f7e66fdeba8b9207939a08cf8d"],["/images/notop.png","d25c272e5ce312a880e04ce8a0b27683"],["/images/pasted-0.png","552608d8f6e39369aa30c6e332a32826"],["/images/pasted-1.png","baafdacee93c99e99418aaedbf524fda"],["/images/pasted-10.jpg","395cff6f64ab5df19baa3572ac98e541"],["/images/pasted-11.jpg","56e5df07c96634638abf7995b25c81ab"],["/images/pasted-12.jpg","61b3f803b85ce3640d7a9ba7efb9da6b"],["/images/pasted-2.png","2f410e53c811f92a6135f48857776f5e"],["/images/pasted-3.jpg","bb5717e691e87355e7d63a5f3a87ae62"],["/images/pasted-4.jpg","10041d0e3567b24b81222ec5075d6492"],["/images/pasted-5.jpg","ac5047a4b48c6cdaee86fa1863e33904"],["/images/pasted-6.jpg","1556ae8d3ad5713d60237ee4d10e81f0"],["/images/pasted-7.jpg","913fde1686587646ddc663bd810cc81d"],["/images/pasted-8.jpg","fc83268081fb4b6b6ecb1ffa1ec5af7f"],["/images/pasted-9.jpg","25e0fa3496591501f5c29d0b802b77d2"],["/images/pet.png","2b8c121909497e57057478856fe48a94"],["/images/pet2.png","dfb1d6a17b527ccc0c600e6ad31f55e5"],["/images/ps1.png","0917ba91f21b6944dc08d35c41a326d2"],["/images/psb.jpg","6a27c58337875c776af0a7667598b401"],["/images/quse.png","7cd1ec12b804305430cb4cdc09c7a893"],["/images/rain.jpg","9c26acc44c692b6a63e134be07b07c18"],["/images/shezhi.png","281bf545f6a4024e2d0b7120bc398a21"],["/images/soul.jpg","d97b4099c0728ff6123d006fa62db86e"],["/images/study.jpg","a9b1cf95ee6bd9f3913e8ec6a6a6f44f"],["/images/tianqizhizi.jpg","dd48d78b4eeaaa52578352f9ef570b14"],["/images/vue.png","cf23526f451784ff137f161b8fe18d5a"],["/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/images/work.png","e521cf5b834292fde1c50e0a0f5802f9"],["/images/xiaoguoyanshi.png","994a3b710d36df0a4630cd9a768c7f7b"],["/images/xiaoguozhanshi-m.png","1fefca18214fc4889d1bb76b81887c9d"],["/images/zfe.one.png","b41f689341882058ffb28c4cee499bde"],["/images/幻想终结之日.png","0025c4d3973bdfedb80db3f78c59fa47"],["/images/时空战纪——游戏建议及意见①.jpg","1337457f14a8dffee66d94f8915b54ff"],["/images/简历.png","d70507ee4615c9e324578c0d777e6855"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favicon2.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","a2266e4862cd4f5cee7a0ade99372610"],["/js/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/APlayer.min.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/airvisual.js","71cf86bfd452ca01d92438d8266416ee"],["/js/airvisualapi.js","6931bebe1696688d109963187fc2eace"],["/js/background.js","94c8410b174f58594cf81ec99054968b"],["/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/js/calendar.js","a58e02711cc6dec4dc04257e555b8923"],["/js/clock.js","ead1a80f7219c166e1180674b7d8c70b"],["/js/color.js","3730bb4f7b185e6f5130ac28bace968b"],["/js/danmu.js","6b6ae6b7f1b42dd4857541f43b2bb733"],["/js/echarts.js","dc1227b1eba1ba47fd185a387d0a7d37"],["/js/gitcalendar.js","fadfa8a42272cd322118653dca512a7a"],["/js/history.js","20459f7db325e597e64903f4c0d19306"],["/js/historyroll.js","a3e9ac376106816c50a61f9f4306d671"],["/js/jam.js","462c07d3b2e0f20394d994bbcfae37cb"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","455fface5a0a3ff90766ca254affe502"],["/js/rain.js","f656dc28e4ab5c3f8414d35f683278c1"],["/js/rainremove.js","ceacf82842b101f7e54a2aaf5f4bb9cb"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/link/index.html","3039e74bb59d772cfc5a726a50a819d9"],["/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","99a035f8fd236373c15c6c68f2fc15a9"],["/page/10/index.html","396b0823d8a1f2a7fa9ed45196404c2c"],["/page/11/index.html","ed4d2267592ed7e94377b505aa960a9d"],["/page/12/index.html","9b7c0e407abcb908115612aee03df2cd"],["/page/2/index.html","12b527d5fc7318c572fc1495560d036a"],["/page/3/index.html","61b5a2a6434bb5f176f42dd17312696b"],["/page/4/index.html","74385515a4003a5a7bf28c5f07b9aaa2"],["/page/5/index.html","ede92ceff155d7d5daadd834fee36463"],["/page/6/index.html","eff4f011f8ef8c82317ad043251838a6"],["/page/7/index.html","8b7c5a217f6c134005f3691e5ba2bc4d"],["/page/8/index.html","bb1fd7c5be089dad95b4407a44d1030e"],["/page/9/index.html","290f7c5bd199c9e9b18a388383e34747"],["/research/index.html","b41b4f3dcc8a86f002a59b32608c33f0"],["/sw-register.js","6ab7f2115cef3899037746f93370f1aa"],["/tags/Butterfly主题/index.html","d8d90584f8f2a0ff68828ae58bce6b3e"],["/tags/DIY/index.html","f61ef9e452ea6047c6dd60c9589bb81a"],["/tags/DIY/page/2/index.html","75a2866381c187bd2d3234f1496930e4"],["/tags/ICT/index.html","c86be55f15d1eadebf5dc5255aad117f"],["/tags/NHK听力练习/index.html","aba6f8729229db2961d8a8c18588f5d2"],["/tags/NHK听力练习/page/2/index.html","3b3e56f3ea1ee63a321f4fa1a1c25e38"],["/tags/NHK听力练习/page/3/index.html","a85f2aba77a0156e79bb049e5567766d"],["/tags/NHK听力练习/page/4/index.html","e8ee73561c287ab4c78610371d6739ae"],["/tags/NHK听力练习/page/5/index.html","8916f38491c07e4aea51a5d66cd2c1ac"],["/tags/NHK听力练习/page/6/index.html","5f24d353cd9dd4487f5ddebfa61ab342"],["/tags/metro-ui/index.html","a5fde6f630abcc7bc4be47466132518c"],["/tags/vuejs/index.html","07f02856464fe5318aa0bfb5b9b803bb"],["/tags/お盆/index.html","a329a7a9ad9c79244ad107cf8effc9d7"],["/tags/世論調査/index.html","957002953776e2e82c2df6d335a10710"],["/tags/作品集/index.html","a2f6b7bf8e34bc7d2dd38db581ac22c2"],["/tags/作品集/page/2/index.html","a61e8b82fc4bcb2bfff74b5de81b6ccb"],["/tags/农业/index.html","50c716282f7ab85fcbf099e2bb16d0b8"],["/tags/历史/index.html","6e708abdf2edfa45175d5365c4d76ea5"],["/tags/営業時間/index.html","cfa56a0e654f5652f049b645c045c8bb"],["/tags/国外政事/index.html","83d2dd0fe0e1415af2bef33dc7e2ebb8"],["/tags/地震/index.html","207f0730f380fe2cca153be570a92e15"],["/tags/外国政事/index.html","a285f2df2dc4ccaa2006fe467eadcd7c"],["/tags/天气/index.html","b395a1e76ac45ecf0f564662a5787006"],["/tags/天气/page/2/index.html","7f3c798a48a68fd329a24bcbac1404a1"],["/tags/奥运会/index.html","bbc97b4639e44d62783747a65f8c22c9"],["/tags/学习/index.html","9ca3ca1001fd36e30cbb9d0ebeed9b95"],["/tags/学习/page/2/index.html","47e74d4263a04c8cdd7e593f57b27fb7"],["/tags/学习/page/3/index.html","027ac1c06b570151ef79210e4fa4f57a"],["/tags/就业/index.html","6e6661b0f9bf3fb371d07d40165a2588"],["/tags/庐山/index.html","71e6596829d584d8754964dcbe5845a5"],["/tags/座礁/index.html","f41f104c73bf5a526867b7e4791a22b4"],["/tags/政府/index.html","a9a8a5d96d29d48f501ad647a6e2562b"],["/tags/政治/index.html","fca7bd981f3b86978c7539c1602da0e9"],["/tags/教程/index.html","c60d0b5638931d65ceaae9dac9f71bc8"],["/tags/日本教育/index.html","6dd5783e44e0194dbe63b09a99cb3589"],["/tags/民生/index.html","b8fa9c3024b972cb1da1b10820a50254"],["/tags/民生/page/2/index.html","d5be447fada24c9bb4dda964fedadb47"],["/tags/游戏评测/index.html","58f24812c6b10058a52f122b9efad0e1"],["/tags/游记/index.html","0e2dd5a96cd9f6782d4e18816cff7210"],["/tags/生活趣闻/index.html","a8919bbb4b418af60aa7e71738dc385e"],["/tags/科技/index.html","df0b0b6e1729bbae7a00128a30ac4e3c"],["/tags/经济/index.html","64dd233ceb5efab1c37565badcc419c5"],["/tags/经济/page/2/index.html","43cb87c070e870c5bac8368b27c8a7e8"],["/tags/网络教学/index.html","5a29523d1c91f90f79e2822a9fcbb9e9"],["/tags/舆论/index.html","707ecd9e696ef9e4038b6cfb15381890"],["/tags/虚拟现实/index.html","d013c24d2e06b44833a992df02fddc0e"],["/tags/随想/index.html","609a1c6da09a7e97b196b211359c6047"],["/tags/障害者/index.html","d211fb3f9f01f2b99c0ccaac1d3998df"]];
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
