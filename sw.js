/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/05/20/2015-05-20/index.html","97ef9237bb8678104c9b7a1c21f83181"],["/2015/06/16/2015-06-16/index.html","aa2888e1f9e070e4af28cc020e3036d3"],["/2015/12/12/2015-12-12/index.html","5135d3ba9f27705df4183c8796f3237e"],["/2016/06/08/2016-06-08/index.html","ab0ebf0d07d3fab66b9a56834bddad0d"],["/2016/12/18/2016-12-18/index.html","61d10b274e8bf3fe512ef380734d6086"],["/2017/02/17/2017-02-17/index.html","f9554ddbc0e021675f1e1baa96a513e4"],["/2017/03/17/2017-03-17/index.html","c5025d9f87e6e5825fb08606e1305510"],["/2017/04/06/2017-04-06/index.html","accc8a9ab1ae120ce72ae889fe277305"],["/2017/05/17/2017-05-17/index.html","93b64be7c9262fb3813a65f2b0915ee7"],["/2017/08/15/2017-08-15/index.html","fb86f9b66f25844045647f085bd21c9b"],["/2017/09/16/2017-09-16-1/index.html","36dec8b20f74ff988d34367bc1372cc8"],["/2017/09/16/2017-09-16/index.html","8877a5bdf6739865bea021612e6b8b96"],["/2017/09/21/2017-09-21/index.html","cb2633e8fa5dc243804de3a17dca05e1"],["/2017/09/23/2017-09-23/index.html","691febbf0ebcdf9aa8ddd2170094263f"],["/2017/09/26/2017-09-26/index.html","bfcd0e6f1ad8f941f9fada8dacc19421"],["/2017/09/27/2017-09-27/index.html","68f88bb833ebf36f0b38e9e28e336edd"],["/2017/10/04/2017-10-04/index.html","ec59e76d965cf99455ad6af326b72fc4"],["/2017/10/08/2017-10-08/index.html","e7b28e851a1d7b5cd3ab5361dad6e9d4"],["/2017/10/09/2017-10-09/index.html","60abcd3a9df571bf01f519ae56f84cb2"],["/2017/10/15/2017-10-15/index.html","9be53de2988cc1282547911147f7037d"],["/2017/10/19/2017-10-19/index.html","b96d8863fa772db15850dd81f06ca973"],["/2017/10/23/2017-10-23-2/index.html","549a35a964d13eaa9521fbc10800012c"],["/2017/10/23/2017-10-23/index.html","81c730ae72f76653cabaf84af5b48e3c"],["/2017/11/08/2017-11-08/index.html","81da95c6007e58e0dd35e886c58a2df0"],["/2017/11/12/2017-11-12/index.html","baf7da47f207d42b0ce0c9e16e95891f"],["/2017/11/15/2017-11-15/index.html","955eb98d2b58dee0feaee3145c0cd768"],["/2017/11/27/2017-11-27/index.html","da4416befd130097e0dcb89935772eeb"],["/2017/12/06/2017-12-06/index.html","5912f1540177a6e8822128443575ee36"],["/2018/02/12/2018-02-12/index.html","6dfc062388f641ba5cded82bd7aa5bca"],["/2018/03/26/2018-03-26/index.html","65892b961d71608a4fbd27d789593e5b"],["/2018/04/02/2018-04-02/index.html","c7db6e4e11f7a2f744a3a97549a724f8"],["/2018/04/24/2018-04-24/index.html","1a72ca5c5a753db1e5e48883dc229ce7"],["/2018/05/18/2018-05-18/index.html","a717fe066c5780d484cbcbe642365c57"],["/2018/05/23/2018-05-23/index.html","a326cbb0616e8d856677d200b7e2e806"],["/2018/06/08/2018-06-08/index.html","43d22e1cea24305a19c17a0546b943a0"],["/2018/07/01/2018-07-01/index.html","1553ca2e3f774f208acc928430659e39"],["/2018/08/30/2018-08-30/index.html","2061ff36021f0004843f8a491c0df92f"],["/2020/07/20/2020-07-20/index.html","d23f7a67f23454823d93d3a59e6c8992"],["/2020/08/01/2020-08-01/index.html","6a96a004443ccde3a88f601c6ac8fcf2"],["/2020/08/02/2020-08-02/index.html","b674cbb750fd0ca3d561ecee1e85f68e"],["/2020/08/03/2020-08-03/index.html","747a81e6614fbe1128a131fb15fe93f4"],["/2020/08/04/2020-08-04-1/index.html","27555cfdc649371a108b89c0854928da"],["/2020/08/04/2020-08-04-2/index.html","ad6bb4cbfc8d4b5b1e8cd1f2914a456a"],["/2020/08/05/2020-08-05/index.html","0632c902207f733f274e9ee716053265"],["/2020/08/06/2020-08-06/index.html","d374c94623397042dae598a01b164063"],["/2020/08/07/2020-08-07/index.html","af1d99613ae4f2be373f96d4d10c452d"],["/2020/08/08/2020-08-08/index.html","8fb066a90ee14616455ddacbc6be3bd3"],["/2020/08/09/2020-08-09/index.html","66c2c9c2912b177d68c95ac43c10feac"],["/2020/08/10/2020-08-10/index.html","d0f5515afbf48e0bcef0810b9c3eae29"],["/2020/08/11/2020-08-11/index.html","12349da8e3ebbd8e08cff5aee7919145"],["/2020/08/12/2020-08-12/index.html","d50b60239eff7f2643f33aa5da4ac97f"],["/2020/08/13/2020-08-13/index.html","e1b10335cc379efabbd6161980b4b764"],["/2020/08/14/2020-08-14-1/index.html","82d9011cb3cc599067c55aa40d5820f2"],["/2020/08/14/2020-08-14-2/index.html","66862a4e8a1b91a121e4d281deba2a2a"],["/2020/08/15/2020-08-15/index.html","117e2b7239882494a3999fff832b3ae4"],["/2020/08/16/2020-08-16-1/index.html","dcf8d5580ae9836f38db3058fd01032f"],["/2020/08/16/2020-08-16-2/index.html","402ecfe07e2af1aef11c903578fb8c0b"],["/2020/08/17/2020-08-17/index.html","e5cf8bac0b9924aa2950f141f82cc814"],["/2020/08/18/2020-08-18/index.html","b5ddfa0b6bb5b3d0c4889e9eb850b68f"],["/2020/08/19/2020-08-19-1/index.html","9f0d47c19b8a5e01cc91c92d3adff835"],["/2020/08/19/2020-08-19-2/index.html","7bd3ff101380026588a36ddde3a22dac"],["/2020/08/20/2020-08-20/index.html","f1d85a20fed6af408a201448adf0da49"],["/2020/08/21/2020-08-21/index.html","935fae5112a8f99f7076e9335898fb5a"],["/2020/08/22/2020-08-22/index.html","27650603a46fd23dfe4766b9dcf952a6"],["/2020/08/23/2020-08-23-1/index.html","add2dbcdc165eac5576490213547089b"],["/2020/08/23/2020-08-23-2/index.html","66499ac378ef8ac40615b5fb6573cc8a"],["/2020/08/24/2020-08-24-1/index.html","0afadec7a58f32b8455ee2963c18a3f4"],["/2020/08/24/2020-08-24-2/index.html","da944fd12f91ca0e517ffb969b932138"],["/2020/08/25/2020-08-25-1/index.html","a874ae1741413c8482c0dbcf4ed295dd"],["/2020/08/25/2020-08-25-2/index.html","7176dc3d10c3f5735ae7a8d3c0907338"],["/2020/08/26/2020-08-26/index.html","2f90d63fb50bec7b7ea8a5a0ca792a09"],["/2020/08/27/2020-08-27/index.html","959f1a9e6d9dba1b51649781f4a7cde7"],["/2020/08/28/2020-08-28/index.html","c4f1987a0dff47a216633c7fe4d36729"],["/2020/08/29/2020-08-29/index.html","2ed13988fdd29c475589a51ee8890d9c"],["/2020/08/30/2020-08-30/index.html","42d3b9304c1b784931d6009196c1c138"],["/2020/08/31/2020-08-31-1/index.html","6733477f0916d91a59d4de3037f296d1"],["/2020/08/31/2020-08-31-2/index.html","7dd22af6b9d0712828c594a1c81ea73e"],["/2020/09/01/2020-09-01-1/index.html","d048b2f7fda83ac5b7cb576493cf33c8"],["/2020/09/01/2020-09-01-2/index.html","03a5c3ec15852885f9e0f709b230f4b2"],["/2020/09/02/2020-09-02-1/index.html","c1b2877cff3e93d12473982793f7dd27"],["/2020/09/02/2020-09-02-2/index.html","97566891885fbe9cdc176e4615c495af"],["/2020/09/03/2020-09-03-1/index.html","b38fdd927ac7b440c6f668afc1ee8aab"],["/2020/09/03/2020-09-03-2/index.html","e9c616c7130b16a86ac77efd43864e30"],["/2020/09/04/2020-09-04-1/index.html","a88e0ea006f279de2486984cc241582a"],["/2020/09/05/2020-09-05-1/index.html","9d23b703b306c092943eb711081e1d90"],["/2020/09/06/2020-09-06-1/index.html","ff948f23bb48bfd29877487efb3672c8"],["/2020/09/07/2020-09-07/index.html","4a84266158192ecda7a926494d51618a"],["/2020/09/08/2020-09-08-1/index.html","6da4954e76515b3cbd9df732346aad39"],["/2020/09/08/2020-09-08-2/index.html","f8f2e9e812ab997d880df7ebe3ca5599"],["/2020/09/09/2020-09-09/index.html","ab3d8f70752562c88604b14f8c795f3c"],["/2020/09/10/2020-09-10/index.html","bb48056c577b6aa5c20191c42f6d1588"],["/2020/09/11/2020-09-11/index.html","92b348687ef0e04a6be8ae31e2d83fd7"],["/2020/09/12/2020-09-12/index.html","f5d6f2f6e2c54a3ffe39ebcd7b1b038b"],["/2020/09/13/2020-09-13/index.html","e51264e369c130f1c7647b94081da450"],["/2020/09/14/2020-09-14/index.html","4fe3a45a7362f15ee9e01c9311518977"],["/2020/09/15/2020-09-15/index.html","dffa7fbc22b95f5690affa8ea352d61a"],["/2020/09/16/2020-09-16/index.html","6b6cdf810ec41fca9288f1dc0d63fc80"],["/2020/09/17/2020-09-17/index.html","85f11ff6e5a9a11ff5dbe88e61fd1fa6"],["/2020/09/19/2020-09-19/index.html","f749f74df62dff00bd9f3de16799d23a"],["/2020/09/23/2020-09-23/index.html","078b781838eface488efd008f6f07d32"],["/2020/09/24/2020-09-24/index.html","cf058007a47aaf8ab80df60085cc352e"],["/2020/09/26/2020-09-26/index.html","b1848ddebf32c71dba858583c8c7a15f"],["/2020/09/27/2020-09-27/index.html","60dd4e9a0f65a3fb35e797c6ac823783"],["/2020/09/28/2020-09-28-2/index.html","674f1aa66b1dc327e7c46b2a6b275d4b"],["/2020/09/28/2020-09-28/index.html","25de35dd1b2cea7760deb66c5c42143b"],["/2020/09/29/2020-09-29/index.html","9f58788baa86587fc8de083fc5161bc1"],["/2020/10/03/2020-10-03/index.html","74c778aca761ff9696bc98e04849ab9b"],["/2020/10/04/2020-10-04/index.html","59f572e205ef55ca001f368583362de3"],["/2020/10/09/2020-10-09/index.html","40774521bc3ef30d8b695a0cd505dd2e"],["/2020/10/10/2020-10-10/index.html","62c428a7914fa553ced1682fc8cbd873"],["/2020/10/11/2020-10-11/index.html","cda76df8903dfc774ee472e1ffde9153"],["/2020/10/12/2020-10-12/index.html","9b8b13197a21b9bbb7b23bc0ea1001e7"],["/2020/10/13/2020-10-13/index.html","fa4c5309d1b79aba527ecb782c183858"],["/2020/10/14/2020-10-14/index.html","e0d47e1c744b8cfeab026de452b8a9eb"],["/2020/10/15/2020-10-16-2/index.html","94ee7f0402ccd3089988616d193b59c1"],["/2020/10/16/2020-10-16-1/index.html","7d2d2986bf8784f975802d388751b17b"],["/2020/10/18/2020-10-18/index.html","7ce6e7fc626ed4251c7ebb9398d751ed"],["/2020/10/20/2020-10-20/index.html","2cbf568007d7316fef460af40ed00e2f"],["/airplayervisual/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/airplayervisual/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/airplayervisual/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/airplayervisual/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/airplayervisual/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/airplayervisual/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/airplayervisual/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/airplayervisual/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/airplayervisual/index.html","2b6700ac50ebccfd087ba3355c02ba98"],["/airplayervisual/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/airplayervisual/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/airplayervisual/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/airplayervisual/js/jamsetting.js","7927507e0080ddf55c6d8b5f526bd942"],["/airplayervisual/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/airplayervisual/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/airplayervisual/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/archives/2015/05/index.html","46b2123a1d82c646f5040c4b95803d11"],["/archives/2015/06/index.html","95286f8eadfcd8dc849e874898a24994"],["/archives/2015/12/index.html","248830f50427bb31f891a13d65ba891f"],["/archives/2015/index.html","b6920e110e4d6d37f59e94cdbb2ee4fd"],["/archives/2016/06/index.html","b1cb0b37d975db97abd7bd1b0b514276"],["/archives/2016/12/index.html","a54fd17c2b5a99ccc9e1446a4d1bc812"],["/archives/2016/index.html","8dc41a30732bb131f6ab17a0bc4af623"],["/archives/2017/02/index.html","a7bbae07b2463949684d14fbc5170747"],["/archives/2017/03/index.html","bc8ec02c7b075a7c90c71ed7311d1ee4"],["/archives/2017/04/index.html","25e623c54432dd4393f4753d8d472433"],["/archives/2017/05/index.html","26dbd3f24c3d9155c23c9e648a6e0099"],["/archives/2017/08/index.html","d72d860bfb2384f576b3171467389f4b"],["/archives/2017/09/index.html","855c1b7b7dd566794811dcec1b06f4a4"],["/archives/2017/10/index.html","ebe0cafcc8fb8e3b53dfaa8e2447bab3"],["/archives/2017/11/index.html","79f55b449cd49adeec9b6b8e3c13b0d1"],["/archives/2017/12/index.html","eaa069d3adecf245aaacd2f3f08d5793"],["/archives/2017/index.html","42fe495ba7a1af87e76684f9e353b897"],["/archives/2017/page/2/index.html","81b5046f32f26fe095fafa19e7afd74d"],["/archives/2017/page/3/index.html","1c4a84de9ad6f1ca02e9c03582758581"],["/archives/2018/02/index.html","49f2d7d0d8a9dd040296221a93290d16"],["/archives/2018/03/index.html","ea556ae54ef3765fd19dd0620eaff1ad"],["/archives/2018/04/index.html","32412f9e997519b42faafd67e57182ca"],["/archives/2018/05/index.html","dbab70ed2f1fc92e035873dc1cedbb50"],["/archives/2018/06/index.html","4df920165712d887fbe868a1ff831167"],["/archives/2018/07/index.html","1a6784fd43e9a0f970292241c3492bb7"],["/archives/2018/08/index.html","981fee2e1c81f4ee91f1007af1e980f7"],["/archives/2018/index.html","ba576c9d6a25f58ee89fd7d60ec358b9"],["/archives/2020/07/index.html","a5af6893a6316fbba1cafa4da933e47e"],["/archives/2020/08/index.html","2be7dfefac127340bacaf12c5c8abf0c"],["/archives/2020/08/page/2/index.html","b608bfeb6b49eda8f0f2ae3f69f23d3c"],["/archives/2020/08/page/3/index.html","78c3e0f1dc37c73216dd8d4054118cfb"],["/archives/2020/08/page/4/index.html","a1d069c905dd2a5400245cb4393f5a81"],["/archives/2020/09/index.html","05840e0e823acc4f671320e810a51b3f"],["/archives/2020/09/page/2/index.html","72cc2812294c9fdfd02d639f0373815e"],["/archives/2020/09/page/3/index.html","598329ed874e40d3ec3f7a4d85c6090a"],["/archives/2020/10/index.html","87aef3ff945c3773bfab4d4b0fa895d3"],["/archives/2020/10/page/2/index.html","886ecd4f0adce20fb331bef663f28cc9"],["/archives/2020/index.html","221440f88c815244998faccc75db79f3"],["/archives/2020/page/2/index.html","02be6ac5080c1b088d868b031b96c67c"],["/archives/2020/page/3/index.html","7a8c4e0b80bf2423f5fe29772b43b6c4"],["/archives/2020/page/4/index.html","df152f084366c8c034a87f13dd0c021b"],["/archives/2020/page/5/index.html","5913d15aae794770673b88cd2aa489ba"],["/archives/2020/page/6/index.html","32d3113c0344ae75c225aac0d25c5d29"],["/archives/2020/page/7/index.html","847b683e88fb53ba740fe630ff63b4dd"],["/archives/2020/page/8/index.html","10951d44e13774a0ee170acaffe80630"],["/archives/2020/page/9/index.html","2b9b3af8819ec24f54c7317906443856"],["/archives/index.html","166b7c0591bb0064b7cd9382d3a9e751"],["/archives/page/10/index.html","acbaa605d175562c7db77683e67a687a"],["/archives/page/11/index.html","ad57ff372074ca08748efd8b8a5c277a"],["/archives/page/12/index.html","4fe9dd66af573d1347585f083ef2d676"],["/archives/page/2/index.html","6e01c7380a5950818c85968883ea1836"],["/archives/page/3/index.html","8b431bd2f43f6de0e2f101663cb2b814"],["/archives/page/4/index.html","6a7f73ec1cdb68e750eb1d302cbd2093"],["/archives/page/5/index.html","dd7a9729fe5c6d354a0f280eeb0fd15e"],["/archives/page/6/index.html","258838b674b260815c508535ccd2a353"],["/archives/page/7/index.html","dbfc35917bea15cf439e4f2a97022eee"],["/archives/page/8/index.html","ee3bca30e301b0de53f224921e6a626d"],["/archives/page/9/index.html","d7b9fb125c7eeef1de0dbd13a65e357c"],["/catalogtest/index.html","da6c7188096c90d4b4a4908e30ac4a25"],["/categories/NHK听力练习/index.html","12fc0a13bc1f0ff655b98dd26f66a9c8"],["/categories/NHK听力练习/page/2/index.html","ebd557f1bdced6c1542b1385a997b698"],["/categories/NHK听力练习/page/3/index.html","dd6fedf5f421c5f82e5aef9e3a2b57a4"],["/categories/NHK听力练习/page/4/index.html","deb0eb92c471857f3c563a6fc9f56a7b"],["/categories/NHK听力练习/page/5/index.html","899850462e4fc7dde81f2202b30f6cbf"],["/categories/NHK听力练习/page/6/index.html","cf62f6a73bd8ea8b69b44a3da0f8acc7"],["/categories/vue/index.html","47044a8f4dc55fba8d0208e4ac17f70f"],["/categories/作品集/index.html","09b34bd2af37e778bb6512c1cbbb7e65"],["/categories/作品集/page/2/index.html","e8cc67e1b3116790b504e01223174501"],["/categories/学习/index.html","ae75f34b602a84f2685665ac20d80665"],["/categories/学习/page/2/index.html","78607dc4f83f2883ed6d0f7b81c08115"],["/categories/教程/index.html","baaf0a8335e7fba5960bcab0cba66b10"],["/categories/教程/page/2/index.html","126550804caff94963164c06bb6af7a0"],["/categories/游戏评测/index.html","a9b1436eb311812a85baf7069508afb3"],["/categories/生活趣闻/index.html","7e2b8508828db90d5c77d0227351bda1"],["/categories/随想/index.html","c3595496e6a3a12085fcb4818f442dbd"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/addcss.css","d20fc732e0cc7996bd82c5170b7aaa86"],["/css/background.css","d013642f5988333ece3b04912f099111"],["/css/calendar.css","0090a32d2a61d42c5bfed254bfba078c"],["/css/clock - 副本.css","65602c2385c7eab42ee3804cd6ee0a5a"],["/css/clock.css","9db53e3bffb704c740aa83bddaf8b999"],["/css/cursor.css","f514da9c81fb3fcb4f7e9038dfa30874"],["/css/danmu.css","2a5b914a9592bcd353425c6d5fa7af8e"],["/css/index.css","a830cf7dafed0e1e03142b35ae00f2a6"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/loadingline.css","bc1ee020a6a11fea17b915b97e6978bf"],["/css/shuo.css","8db924024099e925c53d5b3dd22f83c6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/html/calendar.html","bddcec1edba7f4c49fe5cd75f8cdf5b2"],["/html/shiyan.html","00bb98616b08da59842dfa90cf0e969f"],["/html/shiyan2.html","28a2cdce01c444373029972a1c845e7d"],["/icon.png","8ec68de45d18642ba9baf2447e62f476"],["/images/AMJ1.png","d27a6725d1aaaf5324248da4312ab6c2"],["/images/AMJ2.png","00e22eba5901e5bd674e42228cd5bd26"],["/images/AMJ3.png","c8c9ea6348dfcad3a641899d5b587431"],["/images/FOTO1.jpg","4b6f100861908e2c7044cffbdb4a0c1a"],["/images/MVVM.png","ea5a002ee2f85c71a0db51d5adb5de19"],["/images/UT.jpg","367f4e432f9db55a92b2a290c4b0a476"],["/images/UX.png","a183974e958d41d1b6acec70bb7ea00a"],["/images/WindowsTerminal.png","8ac29cb56b8a1768cf7de071e9f1ae6f"],["/images/air-w.png","c1cc32f9d3e17551ca11a7d18a0b533a"],["/images/anzhuang.jpg","912b2489957f8344406edc5e5cebe5fa"],["/images/api-setting.png","2c0bb074390779721cba009e96c5417c"],["/images/apikey.png","1f31121b190eb1f990bcc3e27524bc03"],["/images/b0_img.png","43fcaa3f8b394ca5be957f4b860800db"],["/images/backpic1.jpg","86a6fa88167feb338fbf1a4e9057114b"],["/images/c0_img.png","34397085b4d3349034f9b167469ac626"],["/images/c10_img.png","7938c5b0dd789db4f262e5a618943a9b"],["/images/c1_img.png","95211a0ebf07befde1b11477c3a8185b"],["/images/c2_img.png","456ba51725d669fc4d005787753a6b08"],["/images/c3_img.png","a0aa7dcdd2ed5bccec52c16942036a3f"],["/images/c4_img.png","0869cebb60d00a78936b7498823a39de"],["/images/c5_img.png","533774e840ccb3ef13b46201a54be05d"],["/images/c6_img.png","db9eb681dea0b7911f0b2ba918d86c26"],["/images/c7_img.png","5b9c9e0331aca2a9d47a2730512f34f5"],["/images/c8_img.png","be9107995f185e3bbf7186c4dff69f42"],["/images/c9_img.png","642a2e762b74a28d2426af14f2b864c1"],["/images/calendar.png","86319b08b93be7c8bc47cdba7a169563"],["/images/cataimage/b1.jpg","e4795ce34b4d070d251c37a2ae5e37eb"],["/images/cataimage/b2.jpg","e1a7402c7d111b33d22c187a794e693d"],["/images/cataimage/b3.jpg","c091fe2a8024b2f010911e9af8091147"],["/images/cataimage/b4.jpg","1a2190b3e7ecb404767f029642adb637"],["/images/cataimage/b5.jpg","2683b29be7ea536b2d2c0b428ab87a80"],["/images/cataimage/b6.jpg","8eba752c28594ff5a253a01c0904a4a4"],["/images/cataimage/b7.jpg","9259255b1e1ec36bf92b4f34ad68db7f"],["/images/cataimage/b8.jpg","beaae9e5c735657f2e5bba9eb3deb754"],["/images/cataimage/b9.jpg","7ea8994ee380e84190422ac1b1d93ed8"],["/images/clock2.0.png","0a0f122c7a25262fc02ee99df0ef21eb"],["/images/clock3.0.png","8e04375c183c637b65fb50ed40f46466"],["/images/example.png","aaac9983e5d59f919bf282dcff2edb3c"],["/images/foto17.png","28db4c6608ad1ee6b34238cafab25e5e"],["/images/foto2.jpg","be95b922512d004a61f83c97af3e2602"],["/images/foto2.png","0dc07d4e1b00526a273a89dc8b81548d"],["/images/foto3.jpg","551c0616c92c4ee7cc17dd458b3c46e9"],["/images/foto4.jpg","9d1d9fea759a41afc0061866e400339a"],["/images/foto5.jpg","984f618b15372f37d54f507e6f379f10"],["/images/foto9.jpg","b683fc0b998e80ff8f5a3e45e889807c"],["/images/girlpic.png","ff1e8427ed555af639e6d849f8f648f1"],["/images/girlpic1.png","698e5570e821c3cae643cc9777c2292e"],["/images/girlpic4.png","551882e4b9b6afb79000fd34c0dbf5e5"],["/images/headimage.png","332502f36a0297b30cb7969fe6de8451"],["/images/hexo.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/hexoWT.png","c027cc9f5665c7d7ba657e7a4bb40017"],["/images/his-json.png","7d8a71e38ab684107446e5c72c31854e"],["/images/history.gif","0459a3dcf2317253de0b34482880c63c"],["/images/homework1.png","e8d2f64d0785519ea7779016208a2900"],["/images/idea.jpg","5eb08bf6c965588f03c8860f201cac45"],["/images/key1.png","f2a370e02ad6c5a101db20b47a9a0008"],["/images/key2.png","21dc40bbe0377cd9fe85a9cb431c18f0"],["/images/life-cycle.png","02f39ea5c041d45938fda4b50f234cb7"],["/images/life.jpg","74d2d9c5f48ec59e3badeec690941812"],["/images/listen.jpg","9d4f73cd5634f43deaed4f9aca03f9a3"],["/images/loading.gif","ffa0804a5d99e2d5b39e05cda6d6b28b"],["/images/magnet.png","4899a924f3de0d19dbe0415128c07d65"],["/images/magnet1.png","8d010eb86ca943e036adaa7de57aee7d"],["/images/magnet2.0.png","54fe576f174d2b6917fef89f40ac5975"],["/images/magnet2.png","293cb414a8ab93b43bde3bebf9cf0cfc"],["/images/magnet3.png","1923148630e2e094ff80bf35aa604c10"],["/images/magnet4.png","9bb4f963ac1c09f02d62525f513f492c"],["/images/meilu/1.jpg","cd67abcc3f543b5c66adc4f9d9c5c628"],["/images/meilu/10.jpg","ac9fb2711e477b5db1c3acb57e899045"],["/images/meilu/11.jpg","364caad6dfc356a3dc630fa067e48e88"],["/images/meilu/12.jpg","274767e5708f79934e5bdbf73eda8f0d"],["/images/meilu/13.jpg","dcab12b84454770b208913db63e825ac"],["/images/meilu/14.jpg","037cdd048284e621f27e17a2c59e8ea7"],["/images/meilu/2.jpg","f6cdb65ae3fad4523b32f5ee38696b60"],["/images/meilu/3.jpg","9e5df3612c2d93bf57313186c954aea5"],["/images/meilu/4.jpg","69ef2d6f4bcd79cf4b4e672b60c6751e"],["/images/meilu/5.jpg","ce81ca16def7613b7ebb368fb554f14f"],["/images/meilu/6.jpg","cafd5b62305f806754a75cc3af8c3b77"],["/images/meilu/7.jpg","b8ae865d386e1e713a6034da6b090c10"],["/images/meilu/8.jpg","afad7a7bf1066c817a8d2e7566bc780d"],["/images/meilu/9.jpg","72f9649f56b564eacf23ce3dacb88029"],["/images/metroui.jpg","5503bfffd450d9ab572b67ea00941571"],["/images/metroui/1.png","79a03b408c19c74eeaa8ff6e17a03f9d"],["/images/metroui/10.png","8309fed71a15c78f2dfa3af1ff75a5f3"],["/images/metroui/11.png","aaf1a007cbae12f93cc2688bace18d28"],["/images/metroui/12.png","0758ea282c3828c47e5c64520ff85783"],["/images/metroui/13.png","12ca7b511927cd4b26e97f3b20908a32"],["/images/metroui/14.png","f44ba7680f7b36df437e2ae2588d0565"],["/images/metroui/15.png","e8927c78b125b805af7aa86fee815ab6"],["/images/metroui/2.png","e604d3c662b996f06f22753ba9ab379f"],["/images/metroui/3.png","664e3b7490f2f95d5547b8ba79a65456"],["/images/metroui/4.png","c0f255344cafc303a1d9c7404da37149"],["/images/metroui/5.png","da2074cdb1298aca826abc1a5c441300"],["/images/metroui/6.png","efef2f087127614b4e03bcbe9a347018"],["/images/metroui/7.png","a4d34b1a2dbe3a58d3a92276880be039"],["/images/metroui/8.png","1d34a626bbaa898a60d4501936bcf962"],["/images/metroui/9.png","0663697c1667b377fe2623bd65e00b31"],["/images/metrouilogo.png","aea81b42d1c2c96440f74cf56ad82e2f"],["/images/nhkimage/2020.08.01.png","af4c55b2ae1d5ab2f56c75a87fcdfdb3"],["/images/nhkimage/2020.08.02.png","c355d41b90f5c65823f96c5f6868ce53"],["/images/nhkimage/2020.08.03.png","fddcedb40d7f28b2ccb90814351ad5c8"],["/images/nhkimage/2020.08.04.png","8b4518ec5a8513f442980ed7167136b1"],["/images/nhkimage/2020.08.05.png","590abfb19334b0c3cee5a005674f2253"],["/images/nhkimage/2020.08.06.png","d469e21100c42435e88f2bdf07f93da1"],["/images/nhkimage/2020.08.07.png","3ca9e2c8b8a09a38423d73cd36e8de9d"],["/images/nhkimage/2020.08.08.png","4420c2d899fe4eb90c48bae0da8418a2"],["/images/nhkimage/2020.08.09.png","df14be338f9c920818dd1daa6aa955ee"],["/images/nhkimage/2020.08.10.png","c4e2ed023cd3dbfd4986add35ca9357c"],["/images/nhkimage/2020.08.11.png","cf562339e57f673d394f3e6cdd1f60cb"],["/images/nhkimage/2020.08.12.png","81dfa179fea3052ddcf73912ea368f67"],["/images/nhkimage/2020.08.13.png","8cf26c2642e7a27cbd86fcbda8bae8d9"],["/images/nhkimage/2020.08.14.png","d88eeb678b3ed3651d597e61957e264a"],["/images/nhkimage/2020.08.15.png","b9879f193867edcffeefce62c9dc7153"],["/images/nhkimage/2020.08.16.png","46cb914aa1d556561897767ec9ff66a0"],["/images/nhkimage/2020.08.17.png","ea1af9645b5cc9cbaafe70a91dd15cca"],["/images/nhkimage/2020.08.18.png","e87e4de39a6f06cf4283a63af92dd8de"],["/images/nhkimage/2020.08.19.png","8001a951513b542a98ce1151be5bd87b"],["/images/nhkimage/2020.08.20.png","4bc8fafa3ecce30d340b1350715d78e3"],["/images/nhkimage/2020.08.21.png","07ad1337e127922abff27da6c672549b"],["/images/nhkimage/2020.08.22.png","b2b5d53ba46015f64048f9d803b12179"],["/images/nhkimage/2020.08.23.png","225af8c0cabe5218ec634d1b8815fd95"],["/images/nhkimage/2020.08.24.png","1d54a484a6e2395aabe9be005cd90361"],["/images/nhkimage/2020.08.25.png","8008ba169cfce0ef2041329cd29b6b77"],["/images/nhkimage/2020.08.26.png","72a2b8094003a54c97a34ea97cf21bc3"],["/images/nhkimage/2020.08.27.png","893407e604804d215c8fef8bcd5f2684"],["/images/nhkimage/2020.08.28.png","b542280b7341759890a99cbd44d822c5"],["/images/nhkimage/2020.08.29.png","620e2e7d4772e39615fd1a88cdf49717"],["/images/nhkimage/2020.08.30.png","f645d7ba2dcb506f9ec6fb9244425ad7"],["/images/nhkimage/2020.09.03.png","c5262f3aa87190e0273383ea1e445681"],["/images/nhkimage/2020.09.04.png","c07149c32aa41c03bc7dac82a713f6b2"],["/images/nhkimage/2020.09.05.png","4e43556e1cb3b7f4d75f0f6127616a54"],["/images/nhkimage/2020.09.06.png","1021d2ae04a7f109404f857a2a7629cf"],["/images/nhkimage/2020.09.07.png","db9827e9f0a4cf1401b559b4644a0204"],["/images/nhkimage/2020.09.08.png","efe1030b73dc1c01f169c3122a194426"],["/images/nhkimage/2020.09.09.png","f6ba3a1c6cdeff88404ebe2a646f2eb5"],["/images/nhkimage/2020.09.10.png","3471b05d02113517359a9e2167befcfa"],["/images/nhkimage/2020.09.11.png","921a541a8bffb1aa436df2eb6db7c99f"],["/images/nhkimage/2020.09.12.png","a51f8ebaddba69bb80f9259a30f17e65"],["/images/nhkimage/2020.09.13.png","0399889200493cd2154ffc407e2bc400"],["/images/nhkimage/2020.09.14.png","eaaf3da69a39ed316b7fc8c4d409bb0f"],["/images/nhkimage/2020.09.15.png","5774959ea4061c9298ea174f0862cc3a"],["/images/nhkimage/2020.09.16.png","0c5a00f74020740fda589c02e4b3f917"],["/images/nhkimage/2020.09.17.png","b5aef734e3a7db4862ca3fe4e6769dc2"],["/images/nhkimage/2020.09.24.png","5982a7b3843f4ae43b2b4bc4b0c577d6"],["/images/nhkimage/2020.09.26.jpg","c6415af781fbdd36fdb034f74646129b"],["/images/nhkimage/2020.09.27.png","27aa6f6a8d5534ccd99cff261dcd9eb6"],["/images/nhkimage/2020.09.28.png","0f4318d1ff17a33de364432a1c44b5ad"],["/images/nhkimage/2020.10.09.png","6408d9f7e66fdeba8b9207939a08cf8d"],["/images/notop.png","d25c272e5ce312a880e04ce8a0b27683"],["/images/pasted-0.png","552608d8f6e39369aa30c6e332a32826"],["/images/pasted-1.png","baafdacee93c99e99418aaedbf524fda"],["/images/pasted-10.jpg","395cff6f64ab5df19baa3572ac98e541"],["/images/pasted-11.jpg","56e5df07c96634638abf7995b25c81ab"],["/images/pasted-12.jpg","61b3f803b85ce3640d7a9ba7efb9da6b"],["/images/pasted-2.png","2f410e53c811f92a6135f48857776f5e"],["/images/pasted-3.jpg","bb5717e691e87355e7d63a5f3a87ae62"],["/images/pasted-4.jpg","10041d0e3567b24b81222ec5075d6492"],["/images/pasted-5.jpg","ac5047a4b48c6cdaee86fa1863e33904"],["/images/pasted-6.jpg","1556ae8d3ad5713d60237ee4d10e81f0"],["/images/pasted-7.jpg","913fde1686587646ddc663bd810cc81d"],["/images/pasted-8.jpg","fc83268081fb4b6b6ecb1ffa1ec5af7f"],["/images/pasted-9.jpg","25e0fa3496591501f5c29d0b802b77d2"],["/images/pet.png","2b8c121909497e57057478856fe48a94"],["/images/pet2.png","dfb1d6a17b527ccc0c600e6ad31f55e5"],["/images/ps1.png","0917ba91f21b6944dc08d35c41a326d2"],["/images/psb.jpg","6a27c58337875c776af0a7667598b401"],["/images/quse.png","7cd1ec12b804305430cb4cdc09c7a893"],["/images/rain.jpg","9c26acc44c692b6a63e134be07b07c18"],["/images/rainsmall.jpg","e8c91c40bef224fc5a3942bd0d007b84"],["/images/shezhi.png","281bf545f6a4024e2d0b7120bc398a21"],["/images/shuo.png","9cce9df6e32e00e49471b9a9f089f6aa"],["/images/soul.jpg","d97b4099c0728ff6123d006fa62db86e"],["/images/study.jpg","a9b1cf95ee6bd9f3913e8ec6a6a6f44f"],["/images/tianqizhizi.jpg","dd48d78b4eeaaa52578352f9ef570b14"],["/images/vue.png","cf23526f451784ff137f161b8fe18d5a"],["/images/vue1.jpg","8cbf18302c6fa72e2a40d0cca0832213"],["/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/images/work.png","e521cf5b834292fde1c50e0a0f5802f9"],["/images/xiaoguoyanshi.png","994a3b710d36df0a4630cd9a768c7f7b"],["/images/xiaoguozhanshi-m.png","1fefca18214fc4889d1bb76b81887c9d"],["/images/yao1.jpg","9dfddaf8c121fc8db788a87d133d6376"],["/images/zfe.one.png","b41f689341882058ffb28c4cee499bde"],["/images/幻想终结之日.png","0025c4d3973bdfedb80db3f78c59fa47"],["/images/时空战纪——游戏建议及意见①.jpg","1337457f14a8dffee66d94f8915b54ff"],["/images/简历.png","d70507ee4615c9e324578c0d777e6855"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favicon2.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","a0ca3ecd36d014a89aad861799540c04"],["/js/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/APlayer.min.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/airvisual.js","71cf86bfd452ca01d92438d8266416ee"],["/js/airvisualapi.js","6931bebe1696688d109963187fc2eace"],["/js/artitalkkey.js","ad2c74320c63125a36319659657d2886"],["/js/background.js","94c8410b174f58594cf81ec99054968b"],["/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/js/calendar.js","a58e02711cc6dec4dc04257e555b8923"],["/js/catalogMagnet.js","0387c6ad152e7a6076cceffc7420be77"],["/js/clock - 副本.js","405186e7a9d73221d2d50c0dea2852d0"],["/js/clock.js","2fdceb94cc57b551cd245b0001927b66"],["/js/color.js","3730bb4f7b185e6f5130ac28bace968b"],["/js/dan.js","6b6ae6b7f1b42dd4857541f43b2bb733"],["/js/echarts.js","dc1227b1eba1ba47fd185a387d0a7d37"],["/js/gitcalendar.js","fadfa8a42272cd322118653dca512a7a"],["/js/history.js","20459f7db325e597e64903f4c0d19306"],["/js/historyroll.js","a3e9ac376106816c50a61f9f4306d671"],["/js/jam.js","462c07d3b2e0f20394d994bbcfae37cb"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","455fface5a0a3ff90766ca254affe502"],["/js/rain.js","f656dc28e4ab5c3f8414d35f683278c1"],["/js/rainremove.js","ceacf82842b101f7e54a2aaf5f4bb9cb"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["/js/shuo.js","1076b1ef51358cc11b6ff3bab25e15d8"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/link/index.html","bc3cdd1633279cf5ff7e5d5b88592e69"],["/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","f9a44cf5fda1b9b98b920e9d91b4bece"],["/page/10/index.html","f41412860a319f959f6e632d2aaa7a05"],["/page/11/index.html","b2be847bbbb7ed31307fad12398e306f"],["/page/12/index.html","8b56952e931fb045973b606a92b16a2e"],["/page/2/index.html","ff5d854803e4fe77d1f10b0d959e1bea"],["/page/3/index.html","cb2fa7aab5f30ef99fb0f68e355fa080"],["/page/4/index.html","f263ec4b83c32bb85a3a7400f70989c1"],["/page/5/index.html","ed1df80d9fc733fd2f2226987715dc13"],["/page/6/index.html","9606a6915eff69951bd089c0a5bffce1"],["/page/7/index.html","d8e742f9edd8ebd746ccf92fa533394b"],["/page/8/index.html","6dd4ad5ac19781475667eedde1594a5d"],["/page/9/index.html","3fb1739ab687bfb597636a11b6e6b3bd"],["/research/index.html","768ed2ed3d5cc6dade4bc44d7247aa18"],["/sw-register.js","921c2353764d063919c279d5f2ed1014"],["/tags/Butterfly主题/index.html","11f1ae6fb067f7b4b447ed7019f3fec3"],["/tags/DIY/index.html","47895d9827eac98219fef0c2f08f0c5e"],["/tags/DIY/page/2/index.html","5e0c32c2a8e82d3f8e4973c4f9f389e6"],["/tags/ICT/index.html","3c4c968716debef376ecfbba9bcaad67"],["/tags/NHK听力练习/index.html","ac19c527c0471387383ed82074966a9e"],["/tags/NHK听力练习/page/2/index.html","8516bd93c7cba55931cd4cf85d4566a3"],["/tags/NHK听力练习/page/3/index.html","9748beb25ef9ba649200888eb034782a"],["/tags/NHK听力练习/page/4/index.html","45a01c5482ac3101999150891c29f7c8"],["/tags/NHK听力练习/page/5/index.html","810a374309c0b8a9ee26b3f3c9a5cc1b"],["/tags/NHK听力练习/page/6/index.html","9c8c239a63a5f3737941294b94855fe5"],["/tags/metro-ui/index.html","3b02b1a460decfbc630634bb35aff8e1"],["/tags/vuejs/index.html","ae05a5d187f00a3bc307cdd5714b0294"],["/tags/お盆/index.html","d2202b2f0ddba838aeb59b4dfc5a7eb3"],["/tags/世論調査/index.html","4ca126fa50de5ffb8ba09eaffdedf340"],["/tags/作品集/index.html","cc8f37024d5b3e79beafa9fea9e15a20"],["/tags/作品集/page/2/index.html","1f985f205119b6053f6826f1bb4c1465"],["/tags/农业/index.html","48371725ba73f372e14e286cd647db07"],["/tags/历史/index.html","585371644bda6da4ec9f7d00d418ca99"],["/tags/営業時間/index.html","3279dff4ec9ab06199b53c5822f712a9"],["/tags/国外政事/index.html","a355a8cdda30cc1148c60f821bbbfdec"],["/tags/地震/index.html","8af8ba559bad8d768dc468acaa84cfa4"],["/tags/外国政事/index.html","935ad5cee05852a2c617e45ccf2fd122"],["/tags/天气/index.html","f61013bdc4b77705a587bb6ac076a941"],["/tags/天气/page/2/index.html","a48645021e5d38280accd4e899af5664"],["/tags/奥运会/index.html","01a195cde61056d3dcf615d09d135676"],["/tags/学习/index.html","73b5e0646c37a17400aed18b33d4a9e3"],["/tags/学习/page/2/index.html","15e4158f05f904ccf88b2425ce5ce348"],["/tags/学习/page/3/index.html","fb493f2d3b4e7717ac38161b76ea0cc4"],["/tags/就业/index.html","7768a55d770b5bd3292eb1ea4265e199"],["/tags/庐山/index.html","7dbc5ead7fefaca48987c5a67bf1bb66"],["/tags/座礁/index.html","0610734dc48c7b9e1fc8358d16b151e9"],["/tags/政府/index.html","104e8b7a1b650988576fe10f33aac9e9"],["/tags/政治/index.html","5a671e5173500caec55c999541efd5e1"],["/tags/教程/index.html","c19bcbb1aea1a4728bffb4005bb4ed94"],["/tags/教程/page/2/index.html","adade703ed000c11a20a1a7225d6e0bc"],["/tags/日本教育/index.html","5a8d0807914c8875c4c63aff478a6189"],["/tags/民生/index.html","d21e2f5cce94eab6adfc41ec3367b3e6"],["/tags/民生/page/2/index.html","b61ee992c86ad7cfdffb596d9ab4272e"],["/tags/游戏评测/index.html","a3697691d840f78656869953f9a5900d"],["/tags/游记/index.html","f89610666659087ed5eec158ca3d5fee"],["/tags/生活趣闻/index.html","7410434e936c6a4792ac214209d73be8"],["/tags/科技/index.html","6f65feb9e9ae56ca652ae42a08a2bba7"],["/tags/经济/index.html","4d6bb684427881b76806d4bb596736f9"],["/tags/经济/page/2/index.html","27c08e30b2a0a84da9277f661f01cb21"],["/tags/网络教学/index.html","2701bac968e767ffe2d5dbe2610a66f8"],["/tags/舆论/index.html","afe8381f142900fe7f345d5f6b54443a"],["/tags/虚拟现实/index.html","8e04334b820f061f840d1f262deffe80"],["/tags/随想/index.html","cede170635763c64598c010e9a3d4caf"],["/tags/障害者/index.html","5512d02fdc232090446d9a11800b2120"]];
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
