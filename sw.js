/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/05/20/2015-05-20/index.html","c62326b440d142a721c9f1db65009144"],["/2015/06/16/2015-06-16/index.html","471d214afdd210503d920aba672f5a41"],["/2015/12/12/2015-12-12/index.html","a8171c701e2bc261900e940f6b9907bc"],["/2016/06/08/2016-06-08/index.html","436cb80d128494c314177c86702aa95b"],["/2016/12/18/2016-12-18/index.html","1948d17a5d12d1022a5972703cf70841"],["/2017/02/17/2017-02-17/index.html","987c59b58a1c382d6e3a5bf37e36a13c"],["/2017/03/17/2017-03-17/index.html","f3bb338719c8780be690aa8c1628cb6b"],["/2017/04/06/2017-04-06/index.html","3303d842a61344af052221c5dce6a081"],["/2017/05/17/2017-05-17/index.html","71f3497ce6428dddfaa277e441a67ddb"],["/2017/08/15/2017-08-15/index.html","fbe7154280f1d0c433b232a528642a7c"],["/2017/09/16/2017-09-16-1/index.html","47c0cda1e330d6b8076343c3c60381ba"],["/2017/09/16/2017-09-16/index.html","9befd4642f955312f39b6b94e9a1c6ed"],["/2017/09/21/2017-09-21/index.html","64b4528fba463a037c43dc2bfcbaa3e6"],["/2017/09/23/2017-09-23/index.html","b93edf95de4d7800efcb3c19b3613ca5"],["/2017/09/26/2017-09-26/index.html","32f07e9b4a3a2b824a2f6ac20d8e70ae"],["/2017/09/27/2017-09-27/index.html","d7c48d80def00fb85ce50741d2d73ed1"],["/2017/10/04/2017-10-04/index.html","f6601b45aa8ab6660ec0bff7a8a3699d"],["/2017/10/08/2017-10-08/index.html","cb1b81d2a54042e62d39d1d8b81595d6"],["/2017/10/09/2017-10-09/index.html","e82eb847f6ec5198cafea310cc4aa8ab"],["/2017/10/15/2017-10-15/index.html","3478396da17052d1094c89b6eb290d63"],["/2017/10/19/2017-10-19/index.html","73635a527fbe0bb00b45d6afcfd8a1ca"],["/2017/10/23/2017-10-23-2/index.html","55a5247d3fbec807f37d4c6909b2ef6a"],["/2017/10/23/2017-10-23/index.html","09b34bb54790868f0ab3a53878bf395f"],["/2017/11/08/2017-11-08/index.html","4136e01314de67478258bfe894d23557"],["/2017/11/12/2017-11-12/index.html","91bada7215909341b9990be1388655f4"],["/2017/11/15/2017-11-15/index.html","c84df92e02273ecf7160d021ba05a003"],["/2017/11/27/2017-11-27/index.html","b70f1574e7b7c38ecb00a1a5f650a9d6"],["/2017/12/06/2017-12-06/index.html","7e35b136a9fdc4755d2c031b3cc23ebe"],["/2018/02/12/2018-02-12/index.html","0ba8ccf54ff87e6648a73ae15cd0ba22"],["/2018/03/26/2018-03-26/index.html","e9dd4f1fd4c284e54365b451c48e9bc0"],["/2018/04/02/2018-04-02/index.html","ecb841afb9465f026ab32c908d236ca2"],["/2018/04/24/2018-04-24/index.html","a595ae6419b8265c82b70391191d5457"],["/2018/05/18/2018-05-18/index.html","389a2ab8c15e1fac12b62e61bb4d3bee"],["/2018/05/23/2018-05-23/index.html","8a06e39ac01abe5cf24abb98f8cefe8c"],["/2018/06/08/2018-06-08/index.html","c02c3f9c5d910d0519b112ca67a8978e"],["/2018/07/01/2018-07-01/index.html","47a06afc84c4cc4584e5b03d8bdc0b4e"],["/2018/08/30/2018-08-30/index.html","2740f1bfa905296e45e3131322975778"],["/2020/07/20/2020-07-20/index.html","e03030591ab14d4879fd5fbb8dbb02bf"],["/2020/08/01/2020-08-01/index.html","2dc77b676ebf9a8e0c26c8fe7abb8d8b"],["/2020/08/02/2020-08-02/index.html","206a3c839d0ffcb90c7e340e2ef43f63"],["/2020/08/03/2020-08-03/index.html","344b0a8ed66afb886375a03fd64de6ad"],["/2020/08/04/2020-08-04-1/index.html","740d2c6931867158b703034eb7e6546d"],["/2020/08/04/2020-08-04-2/index.html","5ae90cb9ace86814d2483d52e9df26ce"],["/2020/08/05/2020-08-05/index.html","acfd7b33ddbaa9bfc3d7e947d476de3c"],["/2020/08/06/2020-08-06/index.html","daaf722b90aa5daec9b7b0c283a7aedf"],["/2020/08/07/2020-08-07/index.html","22157c5a10e867506fe8dc06a1929675"],["/2020/08/08/2020-08-08/index.html","0610d3ede1f456976c1912db4b3ee789"],["/2020/08/09/2020-08-09/index.html","2ce6793d6b14034986f568eaadacc7a1"],["/2020/08/10/2020-08-10/index.html","c9bbbd991536140a2735ce1961b35b97"],["/2020/08/11/2020-08-11/index.html","f16720ff127e3df15a4074558546e48b"],["/2020/08/12/2020-08-12/index.html","f4a376323061a2e6beedce75c14c9800"],["/2020/08/13/2020-08-13/index.html","1ae56e953fe2489b52d8bfc046351567"],["/2020/08/14/2020-08-14-1/index.html","0d132f36eadf879b4370d21a071bf52c"],["/2020/08/14/2020-08-14-2/index.html","0097ab7e01b7cd604ebb5ecdbde38ef6"],["/2020/08/15/2020-08-15/index.html","9a5fd9a0d242f0d359662b88b87b5058"],["/2020/08/16/2020-08-16-1/index.html","573d210763d484bd2aa29ffa1b0d2383"],["/2020/08/16/2020-08-16-2/index.html","dba8abd19702b7221a711d95d9ca0a6f"],["/2020/08/17/2020-08-17/index.html","e0afbe48cb69661595828aed62b4a80e"],["/2020/08/18/2020-08-18/index.html","934cf88957c79d2fc5ee0991d37a73ca"],["/2020/08/19/2020-08-19-1/index.html","0ad25e7e3682fe73fb7afa1e0b4f880e"],["/2020/08/19/2020-08-19-2/index.html","c4ed4e55909b3a78dcaf521b84d57048"],["/2020/08/20/2020-08-20/index.html","74a5cdb9eeffc8a9467c36165edc2556"],["/2020/08/21/2020-08-21/index.html","b55e054a57e9ca26b6ad7157f2939dd2"],["/2020/08/22/2020-08-22/index.html","a2f18ce9892d4eeab54137c5bb2a6a3e"],["/2020/08/23/2020-08-23-1/index.html","c4acf96d8f3edcd9d32cf9f9a210fa8b"],["/2020/08/23/2020-08-23-2/index.html","9d469bf1e015f3a9484551b6d3be6b9d"],["/2020/08/24/2020-08-24-1/index.html","8c2396e1961ac9d8938c7a162a173cee"],["/2020/08/24/2020-08-24-2/index.html","6f60dd3186a58d8f1f000cba7bd65507"],["/2020/08/25/2020-08-25-1/index.html","206c5055917e00f734ef42328e642010"],["/2020/08/25/2020-08-25-2/index.html","e2331f675908029f41e462845318debc"],["/2020/08/26/2020-08-26/index.html","b675d5204a49934901483c691c60b16b"],["/2020/08/27/2020-08-27/index.html","5697f15cf91b069842b0f8ab241dd9c9"],["/2020/08/28/2020-08-28/index.html","c96cf3f238386cf3c4842d4f7b757f4d"],["/2020/08/29/2020-08-29/index.html","9203066074048bb7b32de0c173aca720"],["/2020/08/30/2020-08-30/index.html","a08536a1db50363cba0bf44142cf6a9f"],["/2020/08/31/2020-08-31-1/index.html","7315f65443e92310bd2e1083f634cced"],["/2020/08/31/2020-08-31-2/index.html","1727efd7535e5c1e9847abb5245d084c"],["/2020/09/01/2020-09-01-1/index.html","b3bbd04d9eef7c2c3eb3828a54d19432"],["/2020/09/01/2020-09-01-2/index.html","d1acc08bff36fdc1e681573c012475b7"],["/2020/09/02/2020-09-02-1/index.html","66939f3e4acc354bb970084d7b150b78"],["/2020/09/02/2020-09-02-2/index.html","8f828ea3367fda46c5f05ae070cef15d"],["/2020/09/03/2020-09-03-1/index.html","dd6c8cfb251971ee36fe07cc265ae47f"],["/2020/09/03/2020-09-03-2/index.html","9d3076cf9077a98ceefb47bf8991f394"],["/2020/09/04/2020-09-04-1/index.html","ddd739adb4eecf2ad562dd91705b86d1"],["/2020/09/05/2020-09-05-1/index.html","4fa9e14c3434b349eab671213e3235d9"],["/2020/09/06/2020-09-06-1/index.html","56f9ebf966715ae7c876bb5ba4982c15"],["/2020/09/07/2020-09-07/index.html","7989e10dbae96ee3eccf01b01fd1f6ed"],["/2020/09/08/2020-09-08-1/index.html","4c9ce0781ebc0390669fe7fc43f20459"],["/2020/09/08/2020-09-08-2/index.html","73a589871e0f8495e8e9b1cf138013fa"],["/2020/09/09/2020-09-09/index.html","a6a4f944f02bf6eb62deed7b6ac0e364"],["/2020/09/10/2020-09-10/index.html","21f84cd3fd0bcfe70056a16556a28256"],["/2020/09/11/2020-09-11/index.html","0d50dbeea5128b696b69d54846c9e27f"],["/2020/09/12/2020-09-12/index.html","3bc68a7834e707d61b8631d3fc56f02e"],["/2020/09/13/2020-09-13/index.html","98a9f779b4c318b06134622d169bd4d4"],["/2020/09/14/2020-09-14/index.html","6d7943ae6505ec69310d1ca8406f9852"],["/2020/09/15/2020-09-15/index.html","e127299eeb7d3b9bd825ffffd8f78d7b"],["/2020/09/16/2020-09-16/index.html","3c3b265d98478ccbebb7b6bd63868395"],["/2020/09/17/2020-09-17/index.html","b110aea5b45002c29e8e6fc24e9287cb"],["/2020/09/19/2020-09-19/index.html","a7f32823e30292f3f43744c7beee3369"],["/2020/09/23/2020-09-23/index.html","d2c625fa99ede1a9ea70020a07f43ee8"],["/2020/09/24/2020-09-24/index.html","f8ec2fa2857451e3cb54ae078f772150"],["/2020/09/26/2020-09-26/index.html","1a8dcbdb8b1b030a2bb75d199c2f599e"],["/2020/09/27/2020-09-27/index.html","f6855d07a19acc3aaabb63ad88706576"],["/2020/09/28/2020-09-28-2/index.html","6e016446a3fa91e103166c690272a235"],["/2020/09/28/2020-09-28/index.html","f6d2e744f697103c782f2522c8f940b4"],["/2020/09/29/2020-09-29/index.html","7a405c8dc08ab8141c5ad04d01a59900"],["/2020/10/03/2020-10-03/index.html","e2cdafc8342cea0654016c12b01ab11a"],["/2020/10/04/2020-10-04/index.html","a9640290debbe29f0af08071af6be626"],["/2020/10/09/2020-10-09/index.html","d666ccfed81e175a1a6043d86c7353b6"],["/2020/10/10/2020-10-10/index.html","6f32a8298994e2b6fae30e1bae6f9223"],["/2020/10/11/2020-10-11/index.html","4fa34bd0b2ed4408d682f7f82d162af1"],["/2020/10/12/2020-10-12/index.html","ebc8b370759bcca124f7d5ce4b250b4a"],["/2020/10/13/2020-10-13/index.html","a8ed9749e9ffe339dc7057b0cb060e6f"],["/2020/10/14/2020-10-14/index.html","ee4928ce8b08709e26c55607319c2639"],["/2020/10/15/2020-10-16-2/index.html","0e89300a87213092ce9e58e62c06f302"],["/2020/10/16/2020-10-16-1/index.html","5074b9049aab355148d0b08a3287b78b"],["/2020/10/18/2020-10-18/index.html","d93c46df18e81a725dd03d9e66b28e84"],["/2020/10/20/2020-10-20/index.html","cf5086eefd6fc303c34d17b85d759997"],["/2020/10/20/2020-10-21/index.html","f35b8db5ce901fd6bedd7d547ffe6129"],["/airplayervisual/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/airplayervisual/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/airplayervisual/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/airplayervisual/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/airplayervisual/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/airplayervisual/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/airplayervisual/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/airplayervisual/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/airplayervisual/index.html","855d121fcadc377cb76c65a9caefb2bb"],["/airplayervisual/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/airplayervisual/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/airplayervisual/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/airplayervisual/js/jamsetting.js","7927507e0080ddf55c6d8b5f526bd942"],["/airplayervisual/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/airplayervisual/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/airplayervisual/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/archives/2015/05/index.html","56e6436a19b35494ceb6dcf08a6bd32a"],["/archives/2015/06/index.html","128b1a5f4dcc70fb0ab30c7149b8abfb"],["/archives/2015/12/index.html","4951e2bf94e7144c5ab288ca62a5c069"],["/archives/2015/index.html","91bcd6eba461b49a6e26179c96034a87"],["/archives/2016/06/index.html","019f0d66ba62227fb8fe523a5538f036"],["/archives/2016/12/index.html","d86248345b89b65e3e69ed0f2a71ff1d"],["/archives/2016/index.html","63bd225aa5a3bb01d38be2aa75cffa70"],["/archives/2017/02/index.html","ca13322265605bd4ebb5269bed76de77"],["/archives/2017/03/index.html","2b323680cbdc9493b872e0d9518b8169"],["/archives/2017/04/index.html","3ce2b6768f85bff090911d95ec9687fe"],["/archives/2017/05/index.html","531a22d19d7d98af0dfe6316999d0a17"],["/archives/2017/08/index.html","7a7d17a14c1982886af48f62f3a58637"],["/archives/2017/09/index.html","aacceb27e5ebdbc712b0a3dc2112d061"],["/archives/2017/10/index.html","936d951436d63f0c55ae12ce859bbd97"],["/archives/2017/11/index.html","227ebc9552b8b40e19894a420b29d108"],["/archives/2017/12/index.html","c767e1ae8531f4ad41e71f5c29b060d4"],["/archives/2017/index.html","b527ee21d7bf52756bf4ee341c63eb83"],["/archives/2017/page/2/index.html","98efb2c1678016df3587e087abeb41c8"],["/archives/2018/02/index.html","b1740458c50e3a6c2adc0d9c92eadf6d"],["/archives/2018/03/index.html","5c90a2f4f9069ee63f6f71551669fafa"],["/archives/2018/04/index.html","512c489bc3a4cb0e09e1e5bd7dd8ea11"],["/archives/2018/05/index.html","005d09a77ec7a03fb340efd37ef5b483"],["/archives/2018/06/index.html","982fe34f0fb865648f1c42584663714d"],["/archives/2018/07/index.html","ce78ef83a94405d3fa70e15f83911437"],["/archives/2018/08/index.html","a06d9c5eb826167437ae76ad2897837c"],["/archives/2018/index.html","38e9aa6444b7797bfd08958377510264"],["/archives/2020/07/index.html","a49151daac6cfe206692e871b07f7437"],["/archives/2020/08/index.html","d522505cb7471e4438e3f4c965e54c8b"],["/archives/2020/08/page/2/index.html","6121b428e954092ba833ea6f725e48e0"],["/archives/2020/09/index.html","09c46fbb4bf68706dc5c2eade4abc678"],["/archives/2020/09/page/2/index.html","5fb4157c0e728d3c86df5de2785d960d"],["/archives/2020/10/index.html","7ae6859f92a3172738356f7df71ab292"],["/archives/2020/index.html","ab28894eabbf376f40206cc6080845b4"],["/archives/2020/page/2/index.html","31182e827e3faded33865afacc2fc9fa"],["/archives/2020/page/3/index.html","71c688170ab52717ecde670153dcc5ed"],["/archives/2020/page/4/index.html","f99f61620584b00034495cafbec749a8"],["/archives/2020/page/5/index.html","257dd78f464de96e18743279c250c017"],["/archives/index.html","c1dda739d6bfa149b2080034125c1611"],["/archives/page/2/index.html","ebd46de0a59215620b5bb38ae5578220"],["/archives/page/3/index.html","30bed050aca076a7c51711968ad9dddd"],["/archives/page/4/index.html","f8c61070100f418e968830f8f17bfc2b"],["/archives/page/5/index.html","6f4b28d0717481a05b75cdacda8a56d0"],["/archives/page/6/index.html","6351ec1b49f6adf0f00c1d5eac0844f4"],["/catalogtest/index.html","efecf6e0d24f67299bca72811661ea09"],["/categories/NHK听力练习/index.html","9bfaf82bfb14bf5f22fa82e201d066f1"],["/categories/NHK听力练习/page/2/index.html","8a795a77d66c0a03ac1a2f8296363669"],["/categories/NHK听力练习/page/3/index.html","1d09ec9ec5806cda29bd2d687a138af1"],["/categories/vue/index.html","97bf5f55fe92aeb05f86d6eb4c1f61d6"],["/categories/作品集/index.html","3f9f068341e9a5d8f1125d3c67bfdeb4"],["/categories/学习/index.html","72da6adad46162161989fcbc3c31e687"],["/categories/教程/index.html","89eb6870dca51019ab6c0badbec66934"],["/categories/游戏评测/index.html","d22659567b19c9c6f4077722a958c3a5"],["/categories/生活趣闻/index.html","09e2533f2dabaa43223d362de2537df9"],["/categories/随想/index.html","6203dfd2c1957aca2c1ffd93e5c3621b"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/addcss.css","d20fc732e0cc7996bd82c5170b7aaa86"],["/css/background.css","d013642f5988333ece3b04912f099111"],["/css/calendar.css","0090a32d2a61d42c5bfed254bfba078c"],["/css/clock - 副本.css","65602c2385c7eab42ee3804cd6ee0a5a"],["/css/clock.css","9db53e3bffb704c740aa83bddaf8b999"],["/css/cursor.css","f514da9c81fb3fcb4f7e9038dfa30874"],["/css/danmu.css","2a5b914a9592bcd353425c6d5fa7af8e"],["/css/flow.css","9fa2b56eb12ed1fc1ad50fac590f2391"],["/css/index.css","6e2f553bf999c24bbcb9e2e3c19e0f7e"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/loadingline.css","bc1ee020a6a11fea17b915b97e6978bf"],["/css/shuo.css","8db924024099e925c53d5b3dd22f83c6"],["/css/sortable.min.css","a4c7bddbdc32317dbb63a31244a82556"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/html/calendar.html","bddcec1edba7f4c49fe5cd75f8cdf5b2"],["/html/shiyan.html","d84f97ae3a9bf1865cd43c93a61495ac"],["/html/shiyan2.html","8b0231c4a1f396332ba66d6439c51559"],["/icon.png","8ec68de45d18642ba9baf2447e62f476"],["/images/201808011428/css/htmleaf-demo.css","a8256346bbe444fe604987f1fffbd31f"],["/images/201808011428/css/main.css","9afb83b1ea44d47f859a57395fe64737"],["/images/201808011428/dist/sortable.css","6b6b3d6f85a3497ee9e71b16b7223f60"],["/images/201808011428/dist/sortable.js","d199f4ab84617e894975f4757dbb3c17"],["/images/201808011428/dist/sortable.min.css","a4c7bddbdc32317dbb63a31244a82556"],["/images/201808011428/dist/sortable.min.js","0351fbccf2faed49062495990e32a14f"],["/images/201808011428/fonts/icomoon.eot","3891455c55b76ce7f7c86bfc33cd6493"],["/images/201808011428/fonts/icomoon.svg","bb97ed129aa43f69280d3085cd269102"],["/images/201808011428/fonts/icomoon.ttf","e46c36b6f94cf81311ffb383f6d32bec"],["/images/201808011428/fonts/icomoon.woff","d1117ddce10d8c7ca18ac089764da08d"],["/images/201808011428/images/item-1.jpg","c4b8c20bee5947eba1541a6a8a60a5ce"],["/images/201808011428/images/item-2.jpg","dfb3e34508b4060140150784cac9658c"],["/images/201808011428/images/item-3.jpg","4f40a1d501cbd4ebcd1f617078fd6a76"],["/images/201808011428/images/item-4.jpg","04a5d629dd413b49e960437cde7dcedd"],["/images/201808011428/images/item-5.jpg","370daf7210529430a4313b29bdad6269"],["/images/201808011428/images/item-6.jpg","93ce2054bde3d9463270d9f481012652"],["/images/201808011428/images/item-7.jpg","6a0345cbc8c6ac5e909f86e6faeeb0fd"],["/images/201808011428/images/item-8.jpg","4dc81e428730ba2b021dd4993385db4b"],["/images/201808011428/images/item-9.jpg","2aa5f8fc43fe5eca9bd8394a36f1b4d7"],["/images/201808011428/index.html","13f0ef1a65055a72375d62789c5b5ceb"],["/images/201808011428/readme.html","3404f457515712aea012be485349ceac"],["/images/201808011428/related/1.jpg","f4f33eb12a48c6bda46a1c371db24e5b"],["/images/201808011428/related/2.jpg","891bf31b875ab7588f138185019d5166"],["/images/233.jpg","13e6ddf019e5560a32f3ff82efd22344"],["/images/AMJ1.png","d27a6725d1aaaf5324248da4312ab6c2"],["/images/AMJ2.png","00e22eba5901e5bd674e42228cd5bd26"],["/images/AMJ3.png","c8c9ea6348dfcad3a641899d5b587431"],["/images/FOTO1.jpg","4b6f100861908e2c7044cffbdb4a0c1a"],["/images/Isolde-1.1.6/Isolde-1.1.6/LICENSE.html","39bffcc2667137c1eccd7628fbf02464"],["/images/Isolde-1.1.6/Isolde-1.1.6/README.html","e1f7b328f4ba925c0254f348a6ecb992"],["/images/Isolde-1.1.6/Isolde-1.1.6/dist/isolde.min.css","e859dcc0f568c92bdc4b7be3f3b7d7fe"],["/images/Isolde-1.1.6/Isolde-1.1.6/dist/isolde.min.js","c5f5cc1595efdfde4d0b1b1415c6ae25"],["/images/Isolde-1.1.6/Isolde-1.1.6/docs/OPTIONS.html","cad125d8de6f282dbf657a131b4cda1d"],["/images/Isolde-1.1.6/Isolde-1.1.6/gulpfile.js","8d329f641050ed4e2a93a4cc914bba1d"],["/images/Isolde-1.1.6/Isolde-1.1.6/index.js","9fa8aa3efbd2e9eef8acc5f85752ad3e"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/css/main.css","8697f186bbc389515aa6eab3a5c9316e"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/css/sortable.css","04fca21af7d48dc17591894d17aa8358"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-1.jpg","8e757354b2917abe5dde088cbc82dae6"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-2.jpg","8a5fcc4cebc52caf89eb954285edae6d"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-3.jpg","caeae3d2265de3dad6d4b16dfda1fd05"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-4.jpg","1622226c2f5ef489c55f028caf26bafd"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-5.jpg","677d53cc36ccc311e11cd455fe222621"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-6.jpg","bdedef62cfdcdf9d273fc51a0ace2563"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-7.jpg","2faba84c41dc5f0670efd3cc0b139eb4"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-8.jpg","635c6292e642ab737eed6411c3295da6"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-9.jpg","e1c4d431a72b8bbf084451939ca86595"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/isolde.js","1ddba0575c730fe2318c6450dfc4f403"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/index.html","7b675cd94387b53137570e34268adcb2"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/isolde.css","b8011c458b923321a755da760cbeb5f0"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/isolde.js","1ddba0575c730fe2318c6450dfc4f403"],["/images/MVVM.png","ea5a002ee2f85c71a0db51d5adb5de19"],["/images/UT.jpg","367f4e432f9db55a92b2a290c4b0a476"],["/images/UX.png","a183974e958d41d1b6acec70bb7ea00a"],["/images/WindowsTerminal.png","8ac29cb56b8a1768cf7de071e9f1ae6f"],["/images/air-w.png","c1cc32f9d3e17551ca11a7d18a0b533a"],["/images/anzhuang.jpg","912b2489957f8344406edc5e5cebe5fa"],["/images/api-setting.png","2c0bb074390779721cba009e96c5417c"],["/images/apikey.png","1f31121b190eb1f990bcc3e27524bc03"],["/images/b0_img.png","43fcaa3f8b394ca5be957f4b860800db"],["/images/backpic1.jpg","86a6fa88167feb338fbf1a4e9057114b"],["/images/c0_img.png","34397085b4d3349034f9b167469ac626"],["/images/c10_img.png","7938c5b0dd789db4f262e5a618943a9b"],["/images/c1_img.png","95211a0ebf07befde1b11477c3a8185b"],["/images/c2_img.png","456ba51725d669fc4d005787753a6b08"],["/images/c3_img.png","a0aa7dcdd2ed5bccec52c16942036a3f"],["/images/c4_img.png","0869cebb60d00a78936b7498823a39de"],["/images/c5_img.png","533774e840ccb3ef13b46201a54be05d"],["/images/c6_img.png","db9eb681dea0b7911f0b2ba918d86c26"],["/images/c7_img.png","5b9c9e0331aca2a9d47a2730512f34f5"],["/images/c8_img.png","be9107995f185e3bbf7186c4dff69f42"],["/images/c9_img.png","642a2e762b74a28d2426af14f2b864c1"],["/images/calendar.png","86319b08b93be7c8bc47cdba7a169563"],["/images/cataimage/b1.jpg","e4795ce34b4d070d251c37a2ae5e37eb"],["/images/cataimage/b2.jpg","e1a7402c7d111b33d22c187a794e693d"],["/images/cataimage/b3.jpg","c091fe2a8024b2f010911e9af8091147"],["/images/cataimage/b4.jpg","1a2190b3e7ecb404767f029642adb637"],["/images/cataimage/b5.jpg","2683b29be7ea536b2d2c0b428ab87a80"],["/images/cataimage/b6.jpg","8eba752c28594ff5a253a01c0904a4a4"],["/images/cataimage/b7.jpg","9259255b1e1ec36bf92b4f34ad68db7f"],["/images/cataimage/b8.jpg","beaae9e5c735657f2e5bba9eb3deb754"],["/images/cataimage/b9.jpg","7ea8994ee380e84190422ac1b1d93ed8"],["/images/clock2.0.png","0a0f122c7a25262fc02ee99df0ef21eb"],["/images/clock3.0.png","8e04375c183c637b65fb50ed40f46466"],["/images/example.png","aaac9983e5d59f919bf282dcff2edb3c"],["/images/foto17.png","28db4c6608ad1ee6b34238cafab25e5e"],["/images/foto2.jpg","be95b922512d004a61f83c97af3e2602"],["/images/foto2.png","0dc07d4e1b00526a273a89dc8b81548d"],["/images/foto3.jpg","551c0616c92c4ee7cc17dd458b3c46e9"],["/images/foto4.jpg","9d1d9fea759a41afc0061866e400339a"],["/images/foto5.jpg","984f618b15372f37d54f507e6f379f10"],["/images/foto9.jpg","b683fc0b998e80ff8f5a3e45e889807c"],["/images/girlpic.png","ff1e8427ed555af639e6d849f8f648f1"],["/images/girlpic1.png","698e5570e821c3cae643cc9777c2292e"],["/images/girlpic4.png","551882e4b9b6afb79000fd34c0dbf5e5"],["/images/headimage.png","332502f36a0297b30cb7969fe6de8451"],["/images/hexo.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/hexoWT.png","c027cc9f5665c7d7ba657e7a4bb40017"],["/images/his-json.png","7d8a71e38ab684107446e5c72c31854e"],["/images/history.gif","0459a3dcf2317253de0b34482880c63c"],["/images/homework1.png","e8d2f64d0785519ea7779016208a2900"],["/images/idea.jpg","5eb08bf6c965588f03c8860f201cac45"],["/images/key1.png","f2a370e02ad6c5a101db20b47a9a0008"],["/images/key2.png","21dc40bbe0377cd9fe85a9cb431c18f0"],["/images/life-cycle.png","02f39ea5c041d45938fda4b50f234cb7"],["/images/life.jpg","74d2d9c5f48ec59e3badeec690941812"],["/images/listen.jpg","9d4f73cd5634f43deaed4f9aca03f9a3"],["/images/loading.gif","ffa0804a5d99e2d5b39e05cda6d6b28b"],["/images/magnet.png","4899a924f3de0d19dbe0415128c07d65"],["/images/magnet1.png","8d010eb86ca943e036adaa7de57aee7d"],["/images/magnet2.0.png","54fe576f174d2b6917fef89f40ac5975"],["/images/magnet2.png","293cb414a8ab93b43bde3bebf9cf0cfc"],["/images/magnet3.png","1923148630e2e094ff80bf35aa604c10"],["/images/magnet4.png","9bb4f963ac1c09f02d62525f513f492c"],["/images/meilu/1.jpg","cd67abcc3f543b5c66adc4f9d9c5c628"],["/images/meilu/10.jpg","ac9fb2711e477b5db1c3acb57e899045"],["/images/meilu/11.jpg","364caad6dfc356a3dc630fa067e48e88"],["/images/meilu/12.jpg","274767e5708f79934e5bdbf73eda8f0d"],["/images/meilu/13.jpg","dcab12b84454770b208913db63e825ac"],["/images/meilu/14.jpg","037cdd048284e621f27e17a2c59e8ea7"],["/images/meilu/2.jpg","f6cdb65ae3fad4523b32f5ee38696b60"],["/images/meilu/3.jpg","9e5df3612c2d93bf57313186c954aea5"],["/images/meilu/4.jpg","69ef2d6f4bcd79cf4b4e672b60c6751e"],["/images/meilu/5.jpg","ce81ca16def7613b7ebb368fb554f14f"],["/images/meilu/6.jpg","cafd5b62305f806754a75cc3af8c3b77"],["/images/meilu/7.jpg","b8ae865d386e1e713a6034da6b090c10"],["/images/meilu/8.jpg","afad7a7bf1066c817a8d2e7566bc780d"],["/images/meilu/9.jpg","72f9649f56b564eacf23ce3dacb88029"],["/images/metroui.jpg","5503bfffd450d9ab572b67ea00941571"],["/images/metroui/1.png","79a03b408c19c74eeaa8ff6e17a03f9d"],["/images/metroui/10.png","8309fed71a15c78f2dfa3af1ff75a5f3"],["/images/metroui/11.png","aaf1a007cbae12f93cc2688bace18d28"],["/images/metroui/12.png","0758ea282c3828c47e5c64520ff85783"],["/images/metroui/13.png","12ca7b511927cd4b26e97f3b20908a32"],["/images/metroui/14.png","f44ba7680f7b36df437e2ae2588d0565"],["/images/metroui/15.png","e8927c78b125b805af7aa86fee815ab6"],["/images/metroui/2.png","e604d3c662b996f06f22753ba9ab379f"],["/images/metroui/3.png","664e3b7490f2f95d5547b8ba79a65456"],["/images/metroui/4.png","c0f255344cafc303a1d9c7404da37149"],["/images/metroui/5.png","da2074cdb1298aca826abc1a5c441300"],["/images/metroui/6.png","efef2f087127614b4e03bcbe9a347018"],["/images/metroui/7.png","a4d34b1a2dbe3a58d3a92276880be039"],["/images/metroui/8.png","1d34a626bbaa898a60d4501936bcf962"],["/images/metroui/9.png","0663697c1667b377fe2623bd65e00b31"],["/images/metrouilogo.png","aea81b42d1c2c96440f74cf56ad82e2f"],["/images/nhkimage/2020.08.01.png","af4c55b2ae1d5ab2f56c75a87fcdfdb3"],["/images/nhkimage/2020.08.02.png","c355d41b90f5c65823f96c5f6868ce53"],["/images/nhkimage/2020.08.03.png","fddcedb40d7f28b2ccb90814351ad5c8"],["/images/nhkimage/2020.08.04.png","8b4518ec5a8513f442980ed7167136b1"],["/images/nhkimage/2020.08.05.png","590abfb19334b0c3cee5a005674f2253"],["/images/nhkimage/2020.08.06.png","d469e21100c42435e88f2bdf07f93da1"],["/images/nhkimage/2020.08.07.png","3ca9e2c8b8a09a38423d73cd36e8de9d"],["/images/nhkimage/2020.08.08.png","4420c2d899fe4eb90c48bae0da8418a2"],["/images/nhkimage/2020.08.09.png","df14be338f9c920818dd1daa6aa955ee"],["/images/nhkimage/2020.08.10.png","c4e2ed023cd3dbfd4986add35ca9357c"],["/images/nhkimage/2020.08.11.png","cf562339e57f673d394f3e6cdd1f60cb"],["/images/nhkimage/2020.08.12.png","81dfa179fea3052ddcf73912ea368f67"],["/images/nhkimage/2020.08.13.png","8cf26c2642e7a27cbd86fcbda8bae8d9"],["/images/nhkimage/2020.08.14.png","d88eeb678b3ed3651d597e61957e264a"],["/images/nhkimage/2020.08.15.png","b9879f193867edcffeefce62c9dc7153"],["/images/nhkimage/2020.08.16.png","46cb914aa1d556561897767ec9ff66a0"],["/images/nhkimage/2020.08.17.png","ea1af9645b5cc9cbaafe70a91dd15cca"],["/images/nhkimage/2020.08.18.png","e87e4de39a6f06cf4283a63af92dd8de"],["/images/nhkimage/2020.08.19.png","8001a951513b542a98ce1151be5bd87b"],["/images/nhkimage/2020.08.20.png","4bc8fafa3ecce30d340b1350715d78e3"],["/images/nhkimage/2020.08.21.png","07ad1337e127922abff27da6c672549b"],["/images/nhkimage/2020.08.22.png","b2b5d53ba46015f64048f9d803b12179"],["/images/nhkimage/2020.08.23.png","225af8c0cabe5218ec634d1b8815fd95"],["/images/nhkimage/2020.08.24.png","1d54a484a6e2395aabe9be005cd90361"],["/images/nhkimage/2020.08.25.png","8008ba169cfce0ef2041329cd29b6b77"],["/images/nhkimage/2020.08.26.png","72a2b8094003a54c97a34ea97cf21bc3"],["/images/nhkimage/2020.08.27.png","893407e604804d215c8fef8bcd5f2684"],["/images/nhkimage/2020.08.28.png","b542280b7341759890a99cbd44d822c5"],["/images/nhkimage/2020.08.29.png","620e2e7d4772e39615fd1a88cdf49717"],["/images/nhkimage/2020.08.30.png","f645d7ba2dcb506f9ec6fb9244425ad7"],["/images/nhkimage/2020.09.03.png","c5262f3aa87190e0273383ea1e445681"],["/images/nhkimage/2020.09.04.png","c07149c32aa41c03bc7dac82a713f6b2"],["/images/nhkimage/2020.09.05.png","4e43556e1cb3b7f4d75f0f6127616a54"],["/images/nhkimage/2020.09.06.png","1021d2ae04a7f109404f857a2a7629cf"],["/images/nhkimage/2020.09.07.png","db9827e9f0a4cf1401b559b4644a0204"],["/images/nhkimage/2020.09.08.png","efe1030b73dc1c01f169c3122a194426"],["/images/nhkimage/2020.09.09.png","f6ba3a1c6cdeff88404ebe2a646f2eb5"],["/images/nhkimage/2020.09.10.png","3471b05d02113517359a9e2167befcfa"],["/images/nhkimage/2020.09.11.png","921a541a8bffb1aa436df2eb6db7c99f"],["/images/nhkimage/2020.09.12.png","a51f8ebaddba69bb80f9259a30f17e65"],["/images/nhkimage/2020.09.13.png","0399889200493cd2154ffc407e2bc400"],["/images/nhkimage/2020.09.14.png","eaaf3da69a39ed316b7fc8c4d409bb0f"],["/images/nhkimage/2020.09.15.png","5774959ea4061c9298ea174f0862cc3a"],["/images/nhkimage/2020.09.16.png","0c5a00f74020740fda589c02e4b3f917"],["/images/nhkimage/2020.09.17.png","b5aef734e3a7db4862ca3fe4e6769dc2"],["/images/nhkimage/2020.09.24.png","5982a7b3843f4ae43b2b4bc4b0c577d6"],["/images/nhkimage/2020.09.26.jpg","c6415af781fbdd36fdb034f74646129b"],["/images/nhkimage/2020.09.27.png","27aa6f6a8d5534ccd99cff261dcd9eb6"],["/images/nhkimage/2020.09.28.png","0f4318d1ff17a33de364432a1c44b5ad"],["/images/nhkimage/2020.10.09.png","6408d9f7e66fdeba8b9207939a08cf8d"],["/images/notop.png","d25c272e5ce312a880e04ce8a0b27683"],["/images/pasted-0.png","552608d8f6e39369aa30c6e332a32826"],["/images/pasted-1.png","baafdacee93c99e99418aaedbf524fda"],["/images/pasted-10.jpg","395cff6f64ab5df19baa3572ac98e541"],["/images/pasted-11.jpg","56e5df07c96634638abf7995b25c81ab"],["/images/pasted-12.jpg","61b3f803b85ce3640d7a9ba7efb9da6b"],["/images/pasted-2.png","2f410e53c811f92a6135f48857776f5e"],["/images/pasted-3.jpg","bb5717e691e87355e7d63a5f3a87ae62"],["/images/pasted-4.jpg","10041d0e3567b24b81222ec5075d6492"],["/images/pasted-5.jpg","ac5047a4b48c6cdaee86fa1863e33904"],["/images/pasted-6.jpg","1556ae8d3ad5713d60237ee4d10e81f0"],["/images/pasted-7.jpg","913fde1686587646ddc663bd810cc81d"],["/images/pasted-8.jpg","fc83268081fb4b6b6ecb1ffa1ec5af7f"],["/images/pasted-9.jpg","25e0fa3496591501f5c29d0b802b77d2"],["/images/pet.png","2b8c121909497e57057478856fe48a94"],["/images/pet2.png","dfb1d6a17b527ccc0c600e6ad31f55e5"],["/images/ps1.png","0917ba91f21b6944dc08d35c41a326d2"],["/images/psb.jpg","6a27c58337875c776af0a7667598b401"],["/images/quse.png","7cd1ec12b804305430cb4cdc09c7a893"],["/images/rain.jpg","9c26acc44c692b6a63e134be07b07c18"],["/images/rainsmall.jpg","e8c91c40bef224fc5a3942bd0d007b84"],["/images/shezhi.png","281bf545f6a4024e2d0b7120bc398a21"],["/images/shuo.png","9cce9df6e32e00e49471b9a9f089f6aa"],["/images/soul.jpg","d97b4099c0728ff6123d006fa62db86e"],["/images/study.jpg","a9b1cf95ee6bd9f3913e8ec6a6a6f44f"],["/images/tianqizhizi.jpg","dd48d78b4eeaaa52578352f9ef570b14"],["/images/vue.png","0d2b5680bcb76df1333b85fad58634a7"],["/images/vue1.jpg","8cbf18302c6fa72e2a40d0cca0832213"],["/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/03n.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/04n.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/images/weather/09n.png","512894b4a127a42e060e237674b8d145"],["/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/11n.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/13n.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/images/work.png","e521cf5b834292fde1c50e0a0f5802f9"],["/images/xiaoguoyanshi.png","994a3b710d36df0a4630cd9a768c7f7b"],["/images/xiaoguozhanshi-m.png","1fefca18214fc4889d1bb76b81887c9d"],["/images/yao1.jpg","9dfddaf8c121fc8db788a87d133d6376"],["/images/zfe.one.png","b41f689341882058ffb28c4cee499bde"],["/images/下载.jpg","79c7247da282569a05bdd46aa43b93b0"],["/images/幻想终结之日.png","0025c4d3973bdfedb80db3f78c59fa47"],["/images/时空战纪——游戏建议及意见①.jpg","1337457f14a8dffee66d94f8915b54ff"],["/images/简历.png","d70507ee4615c9e324578c0d777e6855"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favicon2.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","8002b33a1f84bdbc0aff99a164e358cc"],["/js/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/APlayer.min.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/airvisual.js","71cf86bfd452ca01d92438d8266416ee"],["/js/airvisualapi.js","6931bebe1696688d109963187fc2eace"],["/js/artitalkkey.js","ad2c74320c63125a36319659657d2886"],["/js/background.js","94c8410b174f58594cf81ec99054968b"],["/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/js/calendar.js","a58e02711cc6dec4dc04257e555b8923"],["/js/catalogMagnet.js","0387c6ad152e7a6076cceffc7420be77"],["/js/clock - 副本.js","405186e7a9d73221d2d50c0dea2852d0"],["/js/clock.js","2fdceb94cc57b551cd245b0001927b66"],["/js/color.js","3730bb4f7b185e6f5130ac28bace968b"],["/js/dan.js","6b6ae6b7f1b42dd4857541f43b2bb733"],["/js/echarts.js","dc1227b1eba1ba47fd185a387d0a7d37"],["/js/gitcalendar.js","fadfa8a42272cd322118653dca512a7a"],["/js/history.js","20459f7db325e597e64903f4c0d19306"],["/js/historyroll.js","a3e9ac376106816c50a61f9f4306d671"],["/js/jam.js","462c07d3b2e0f20394d994bbcfae37cb"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","455fface5a0a3ff90766ca254affe502"],["/js/rain.js","f656dc28e4ab5c3f8414d35f683278c1"],["/js/rainremove.js","ceacf82842b101f7e54a2aaf5f4bb9cb"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["/js/shuo.js","1076b1ef51358cc11b6ff3bab25e15d8"],["/js/sortable.min.js","0351fbccf2faed49062495990e32a14f"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/link/index.html","ccf9406ba103828deb8ccbc93a373075"],["/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","03a0163a5035e94c6c55745b93cf7973"],["/page/2/index.html","dbaf26057e593f8c854a755d6645c791"],["/page/3/index.html","43f266d07eb3b67221346053f0d2870a"],["/research/index.html","c655239c35679e22da5d79a6a50e8cab"],["/sw-register.js","bcabad4abc278ca5a169a7f29dafbc03"],["/tags/Butterfly主题/index.html","a447eab368e564f96b1e5921cebc1014"],["/tags/DIY/index.html","a501cc55659e8f0dd4701bd8bae49117"],["/tags/ICT/index.html","c6373d0589bf46fb5ed7e3bda1c12fa4"],["/tags/NHK听力练习/index.html","9e462760c9bc25ece2ae0b5028b3ce32"],["/tags/NHK听力练习/page/2/index.html","ab7fb17d367f20f52e938e58f3967760"],["/tags/NHK听力练习/page/3/index.html","7430617276421810dea9c9ff99f971c1"],["/tags/metro-ui/index.html","c19850cb12f789c16c41def72c3945bf"],["/tags/vuejs/index.html","4cc6d466b3db756a41f4efeff27b544a"],["/tags/お盆/index.html","3659b78b2f516f21a2b1c97e39136455"],["/tags/世論調査/index.html","a75890db794fa4453aa2fa8ac45d7da7"],["/tags/作品集/index.html","a8ebd9bbcfb08d25aaec665da37ff501"],["/tags/农业/index.html","63303aaaefc277023e472310e475d2be"],["/tags/历史/index.html","be0e7f0ef364183aa6f500570af59e4c"],["/tags/営業時間/index.html","20fd652e6c65c1e8f8d628e1f6ebb670"],["/tags/国外政事/index.html","8cc8aa4f9d9fbc30a506e5bcf392e2df"],["/tags/地震/index.html","c91b25c8631ffeadbdc8c5e96a197df3"],["/tags/外国政事/index.html","6fbe1d01676df38a2844a040e52774a1"],["/tags/天气/index.html","bf43827479878322fe3db5e033ab2658"],["/tags/奥运会/index.html","24ce85516eae547d3917e1b1ed540594"],["/tags/学习/index.html","0de1be73ecee2d77c218ee438865a7b5"],["/tags/学习/page/2/index.html","0bfe2f77fc5b59c18d62a46db862ad6a"],["/tags/就业/index.html","fb4218a6160efcd721eb0a9e1f5294a3"],["/tags/庐山/index.html","50b3365b6cacfb41b4bd535104a8be77"],["/tags/座礁/index.html","53d3f89f739ea90dc03b69462dc61100"],["/tags/政府/index.html","ec5e6d050ad9c03fee39e2acbbd5ce71"],["/tags/政治/index.html","16b0a56f8740212bac6a6445044aedb3"],["/tags/教程/index.html","a989ad00c9a1163c7ae11574f6b481f4"],["/tags/日本教育/index.html","39a9fa0346d2590e63e752c275454a8b"],["/tags/民生/index.html","9407dab3f664c0b12a97671e1545dc06"],["/tags/游戏评测/index.html","961116c065c2843efb533e6e04a09505"],["/tags/游记/index.html","4516da88da0ddd697b99d000171056d9"],["/tags/生活趣闻/index.html","8e8e56d021c1a0d1b300bb76c2ae1f65"],["/tags/科技/index.html","c1eb26c9578b7bf8f922664a1dd0689f"],["/tags/经济/index.html","8fe9fc77545b7e41c89aa442045dcf18"],["/tags/网络教学/index.html","23b4354ebfbc42c295f79dbce57cfb9f"],["/tags/舆论/index.html","bcffcdc899bffcd267a03b1ba2397043"],["/tags/虚拟现实/index.html","b7b263d38d1b0a823d162d826dcbd0b8"],["/tags/随想/index.html","7f74fea4a9cc938f178d84e764f1b53a"],["/tags/障害者/index.html","2524819008b545c56965fc0b2c360b19"]];
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
