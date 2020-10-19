/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/05/20/2015-05-20/index.html","ea29c062ef4c2b3f49e8f9075752e33e"],["/2015/06/16/2015-06-16/index.html","12f2a54b537223bcac4faa18ff0de8db"],["/2015/12/12/2015-12-12/index.html","b4659674a9382c274984c8699975f0b5"],["/2016/06/08/2016-06-08/index.html","63875d87e48848d313261f8b05c5f1a8"],["/2016/12/18/2016-12-18/index.html","1698b9b2b58a0f163fb20a036a6d3a99"],["/2017/02/17/2017-02-17/index.html","8360683b6c8cb2f3a1dbd9ec9a1fc739"],["/2017/03/17/2017-03-17/index.html","cedc5a8e2436bbb8af9caff8ee15ee4b"],["/2017/04/06/2017-04-06/index.html","bd109106d0eff2d0b3e44d7eb31c8228"],["/2017/05/17/2017-05-17/index.html","4821a0dcccda2b06b956c5eaf75da094"],["/2017/08/15/2017-08-15/index.html","a4751f5c0ed4fc3d2510abae91a17e1d"],["/2017/09/16/2017-09-16-1/index.html","2be10f0b03bdbb223148f04bcd99226f"],["/2017/09/16/2017-09-16/index.html","e1ddce0ddf26a6646c78ce706310036e"],["/2017/09/21/2017-09-21/index.html","f3a880836b069cd10ebc93bcc7b7993c"],["/2017/09/23/2017-09-23/index.html","067a78b480c8db752f40cd92b1310c47"],["/2017/09/26/2017-09-26/index.html","65a74c79ffe22afdb306f9b458a0921f"],["/2017/09/27/2017-09-27/index.html","2b4caf8a87e1a97c6441109e60637f94"],["/2017/10/04/2017-10-04/index.html","7db8b399e62abaa47920d488a2a611f7"],["/2017/10/08/2017-10-08/index.html","ab766560b5efe4eb84a2ff5a4d8b40f8"],["/2017/10/09/2017-10-09/index.html","e77613e0063d9e7eaacdf920e9cb0370"],["/2017/10/15/2017-10-15/index.html","bfe96f03bbb6a0f43a88119e64f972f5"],["/2017/10/19/2017-10-19/index.html","4169ce86f79c177abda5ff7d024c1a53"],["/2017/10/23/2017-10-23-2/index.html","2d2eadf390c4e7ae4d06a0377f9b084e"],["/2017/10/23/2017-10-23/index.html","c7b8dc9f7b0c291006eec79727e1d422"],["/2017/11/08/2017-11-08/index.html","fdbbfc894f95425213949b0eaf4f5593"],["/2017/11/12/2017-11-12/index.html","5e37ad12a99911daa596541745a24082"],["/2017/11/15/2017-11-15/index.html","2c97774627204a5d23baf10bd83e87fc"],["/2017/11/27/2017-11-27/index.html","98311bac143a74b06bd13ce6cb76ebfb"],["/2017/12/06/2017-12-06/index.html","355f46324df0f22836270de714d44f9b"],["/2018/02/12/2018-02-12/index.html","285c59c25b918771e04a75d148d4d742"],["/2018/03/26/2018-03-26/index.html","7483e385a3e52ddd6729cc133d5ebbc4"],["/2018/04/02/2018-04-02/index.html","8404fec70f55b2866f289d8240e52130"],["/2018/04/24/2018-04-24/index.html","9ceb6974469e279ad5a964a996024b87"],["/2018/05/18/2018-05-18/index.html","6fe3dffa6eae5694cc598b831a38e5b7"],["/2018/05/23/2018-05-23/index.html","01e53a8a349c07fb8eac8df32ff69fa1"],["/2018/06/08/2018-06-08/index.html","417cebbf20ebc2a4cb137e6f3e124d0f"],["/2018/07/01/2018-07-01/index.html","622dff6fd8da08832678958d2f8c0cc8"],["/2018/08/30/2018-08-30/index.html","324963cdef8ce8b2de70f3a38ba4e930"],["/2020/07/20/2020-07-20/index.html","0209e55d92f6d6938852c2b44f51df48"],["/2020/08/01/2020-08-01/index.html","bce532b3212919514d3dbd83a12c3c39"],["/2020/08/02/2020-08-02/index.html","895045ad90bcfc5e67e8fc04128ebefb"],["/2020/08/03/2020-08-03/index.html","7902a4d39288ce951154bd73808b7ec0"],["/2020/08/04/2020-08-04-1/index.html","8c5316f8b812363a9c1cf0df6520fdc7"],["/2020/08/04/2020-08-04-2/index.html","771fb58f739d1aefb46ceaaa8539f131"],["/2020/08/05/2020-08-05/index.html","cfe84e7f042e5d6c2b4fc22a7c0106d6"],["/2020/08/06/2020-08-06/index.html","61d3d738b9cbb825562a25ea9bf2d50f"],["/2020/08/07/2020-08-07/index.html","2d0000944d91bd4bfd55250178d840da"],["/2020/08/08/2020-08-08/index.html","c6ec6371c27dcfc62d2ba166753023fe"],["/2020/08/09/2020-08-09/index.html","afa294097782ec2cc3ca6148a7fa0f59"],["/2020/08/10/2020-08-10/index.html","5dd97e1f7dbe828b5f85bf602fc67a76"],["/2020/08/11/2020-08-11/index.html","b036997467e233822ed9d927f89a4980"],["/2020/08/12/2020-08-12/index.html","60116414ab65ce0a59e8527f20f015e6"],["/2020/08/13/2020-08-13/index.html","d42ac2516dcda84dcb6d3f21db599ea9"],["/2020/08/14/2020-08-14-1/index.html","53b7d42e8ba14bc4804779becd5ba2bd"],["/2020/08/14/2020-08-14-2/index.html","52a780dd1b5e37fbc34de4b044e69929"],["/2020/08/15/2020-08-15/index.html","b195ad79436deba32ef043edd3ad8c68"],["/2020/08/16/2020-08-16-1/index.html","6d483eaad1d89ffe447abd3515afa1d5"],["/2020/08/16/2020-08-16-2/index.html","82cee280a263772395f84a2dd3d18479"],["/2020/08/17/2020-08-17/index.html","18b636c9d2a5af1f5e2556e72f3fca61"],["/2020/08/18/2020-08-18/index.html","76390c3504ac81c774c5c3d547db2ded"],["/2020/08/19/2020-08-19-1/index.html","903d295aa8b64385c7c3101abb59549f"],["/2020/08/19/2020-08-19-2/index.html","391ba450ad3c18f3afb92ab24f7f6653"],["/2020/08/20/2020-08-20/index.html","5de1bec370784cbea1b702dca527da75"],["/2020/08/21/2020-08-21/index.html","dece1c5abe6f80e687b5fa588483c07e"],["/2020/08/22/2020-08-22/index.html","26bc8b20eeac6ed4ca1ed438f4194953"],["/2020/08/23/2020-08-23-1/index.html","b6d055e20c61ad6687ae181b18ff0492"],["/2020/08/23/2020-08-23-2/index.html","102dad92ff74aea31db13006814b9a3a"],["/2020/08/24/2020-08-24-1/index.html","b732f6b29265c73d01d03a0ebfaf86de"],["/2020/08/24/2020-08-24-2/index.html","726ab99c18541c6cfb752f258dece8ef"],["/2020/08/25/2020-08-25-1/index.html","94d3961e3999bce703df82ca82749d72"],["/2020/08/25/2020-08-25-2/index.html","03dee0a58e447ed3c682dcc4be296d6a"],["/2020/08/26/2020-08-26/index.html","8898de894f32917599c9a062ae1a1059"],["/2020/08/27/2020-08-27/index.html","ecb40bcfb9f47a71a62795b56e4e07fa"],["/2020/08/28/2020-08-28/index.html","70f4786dbc5a8122e5c6c29c451515c7"],["/2020/08/29/2020-08-29/index.html","a99c58644e5d9b4308567431cfcb852d"],["/2020/08/30/2020-08-30/index.html","8242c5be5aa00d847a2aa0a223248355"],["/2020/08/31/2020-08-31-1/index.html","2a09ba3eca444f6ca394d870a93ca974"],["/2020/08/31/2020-08-31-2/index.html","36865d61ab3c5a97854c98d4b0f057fa"],["/2020/09/01/2020-09-01-1/index.html","6af733e7963741db887124df34a028bd"],["/2020/09/01/2020-09-01-2/index.html","5af7c036d2b730b0608c79c45f00cf74"],["/2020/09/02/2020-09-02-1/index.html","40f10a2b5de215bd2f6a4c992a335f43"],["/2020/09/02/2020-09-02-2/index.html","6118a62adc33b52cc93d0dc8531890bf"],["/2020/09/03/2020-09-03-1/index.html","f58bf7c500e5add51e70037771f6c976"],["/2020/09/03/2020-09-03-2/index.html","22b15dc4f9896b014075a18f477027d6"],["/2020/09/04/2020-09-04-1/index.html","499def004cb659233e1544eb982d3961"],["/2020/09/05/2020-09-05-1/index.html","f4865bbc3508930b7d823ed335666cec"],["/2020/09/06/2020-09-06-1/index.html","804be9fea6386ac1ad936477ac6e0b71"],["/2020/09/07/2020-09-07/index.html","987563f837ad0b584ef835fa6927d949"],["/2020/09/08/2020-09-08-1/index.html","4ce48210c903764ff4badc7807f3f767"],["/2020/09/08/2020-09-08-2/index.html","34fea0ba431f0d85ae7cc756fd5936f4"],["/2020/09/09/2020-09-09/index.html","03abdfc048efaa9e166c9a5d93200019"],["/2020/09/10/2020-09-10/index.html","d5e84bec1d81030870207e913ecea3c7"],["/2020/09/11/2020-09-11/index.html","d93afc39f1e5a79657c8a748f044070d"],["/2020/09/12/2020-09-12/index.html","0c907f6f95794d1c22bb94873c49bda1"],["/2020/09/13/2020-09-13/index.html","9bde60338d28dd3e7f8527efffcb585d"],["/2020/09/14/2020-09-14/index.html","7509507ecdaefef9f63fbf5dd366975c"],["/2020/09/15/2020-09-15/index.html","b288210d253f66c59336164c8d6d8ed7"],["/2020/09/16/2020-09-16/index.html","02f16ec2c5aa5676d69e02995381e4ed"],["/2020/09/17/2020-09-17/index.html","da0f32c9672e4dd883111a85dc1f651c"],["/2020/09/19/2020-09-19/index.html","e92e0d88107e2c0e144a8cc152b51599"],["/2020/09/23/2020-09-23/index.html","a5fb3da8d5c8f520b56d6497ece8a8ab"],["/2020/09/24/2020-09-24/index.html","9f3ccf140286f2e6da0fd541f15ab4d8"],["/2020/09/26/2020-09-26/index.html","7d5c93770562ed21d178c1cfecfae6e6"],["/2020/09/27/2020-09-27/index.html","f130b63f61b2b69c5c7174948ee4307a"],["/2020/09/28/2020-09-28-2/index.html","6c806ffb67c3324a0cdc91c416cbdc17"],["/2020/09/28/2020-09-28/index.html","a01d727b9e7903229bac987c7ff8c757"],["/2020/09/29/2020-09-29/index.html","3f93fcf9d083f394ad3c4a6d0813ce38"],["/2020/10/03/2020-10-03/index.html","64b4095dfd19e08781b38e5b4b1de704"],["/2020/10/04/2020-10-04/index.html","359ce0f8d78f8a2ecf82bc0289a2eb38"],["/2020/10/09/2020-10-09/index.html","1111f616113a6aae63f45956f6587ba2"],["/2020/10/10/2020-10-10/index.html","b166f18ce197526947478c75ec49a05e"],["/2020/10/11/2020-10-11/index.html","fe304c5c3bcad36f9ab3dc856e32f75f"],["/2020/10/12/2020-10-12/index.html","3cf936f76616719165feacc97a15eb30"],["/2020/10/13/2020-10-13/index.html","77632c112fed0670a727df8b38f93380"],["/2020/10/14/2020-10-14/index.html","c31cdfe890e3e94247110a9f20689f27"],["/2020/10/15/2020-10-16-2/index.html","88400d2365ce9541f0865e47d8643d7e"],["/2020/10/16/2020-10-16-1/index.html","7ab82ef0130cb48f34fa937b39fba361"],["/2020/10/18/2020-10-18/index.html","c442c6b191643d93e21370bc1bd4c877"],["/airplayervisual/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/airplayervisual/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/airplayervisual/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/airplayervisual/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/airplayervisual/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/airplayervisual/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/airplayervisual/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/airplayervisual/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/airplayervisual/index.html","27f06a2e1db30580f30c9bc0bb392084"],["/airplayervisual/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/airplayervisual/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/airplayervisual/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/airplayervisual/js/jamsetting.js","7927507e0080ddf55c6d8b5f526bd942"],["/airplayervisual/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/airplayervisual/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/airplayervisual/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/archives/2015/05/index.html","432f61a61d95ce15253cc3bca72b6764"],["/archives/2015/06/index.html","328e2b2ac8a6a821db25abe2e4fd4256"],["/archives/2015/12/index.html","ddf257a0fe01973eb667cffb512b6bb5"],["/archives/2015/index.html","3b9f338fbe25f9c35f725a43596cec32"],["/archives/2016/06/index.html","8e77bba63981e7c511602435f7351a75"],["/archives/2016/12/index.html","c73d62f7f0791ea55df0062041647105"],["/archives/2016/index.html","09e25d4f30363e86520aa3d12464ad48"],["/archives/2017/02/index.html","9591fff1490f92693c735541bdaf3a00"],["/archives/2017/03/index.html","08a8a5584022065805ac7d9f47d584f3"],["/archives/2017/04/index.html","196da6e1a8bdda268f5f9617f405493c"],["/archives/2017/05/index.html","4b5a5979c25c20f26d5c597e046e2714"],["/archives/2017/08/index.html","679df8dfc9a58b8389e143d6e3284b4c"],["/archives/2017/09/index.html","a7a38ae67a4f1f703ee4a5db8b90e0a1"],["/archives/2017/10/index.html","95a417ae1d9f4408d8f064fd68d2fea9"],["/archives/2017/11/index.html","1d06b4012a999fbec8168d10b968a27c"],["/archives/2017/12/index.html","9cdf34d693b201ff1d372f342097f345"],["/archives/2017/index.html","608a0c53dcd50d5da304af081fc405f9"],["/archives/2017/page/2/index.html","06caea18cf73fe181b7b6e21e448eb36"],["/archives/2017/page/3/index.html","ecfb14dd12dd9f8a93de7212c028aee7"],["/archives/2018/02/index.html","2ec6f86a7792457f1f70d1f9467a5de1"],["/archives/2018/03/index.html","d8a62763a17e1c3425deb953291efdf5"],["/archives/2018/04/index.html","0192da4bb4d7aa2311ee80d5077c308d"],["/archives/2018/05/index.html","5f6e81eb40ea095d2dca553e14bbfbe3"],["/archives/2018/06/index.html","16f25f5715e3096a364f581237c11201"],["/archives/2018/07/index.html","371370cdc1b45875991bb1d3f02970bd"],["/archives/2018/08/index.html","9380d6f5006d61a75d15cf7c63009617"],["/archives/2018/index.html","41840ada8ea4a48568ddb074360d4bcf"],["/archives/2020/07/index.html","a8697cce11b33e2c85cd9bca27fa7797"],["/archives/2020/08/index.html","450ca948354ecde37f09a0bfaa2d6041"],["/archives/2020/08/page/2/index.html","ba9d380b1933232583a3774bc11c69c3"],["/archives/2020/08/page/3/index.html","838f80b1683928b86fd353d2d4e7eea6"],["/archives/2020/08/page/4/index.html","3f5fbda4714e246e4cecca04402feb77"],["/archives/2020/09/index.html","989f101550f53ec91af1bd2ecb638c7a"],["/archives/2020/09/page/2/index.html","4bb170fa0d1338fbf9ba487c1b909564"],["/archives/2020/09/page/3/index.html","3d18e366fa3ebfb6bfc3bdd214d5b385"],["/archives/2020/10/index.html","853298f1c937a0c3c2c690fa0fa88fbc"],["/archives/2020/10/page/2/index.html","641d6d90fd8b0bf86cee55423b3afcef"],["/archives/2020/index.html","b8368575f60d800a669dc650c5362a7f"],["/archives/2020/page/2/index.html","d4f4ca0637849387547a74443df41a4f"],["/archives/2020/page/3/index.html","85649cb9d8691016a8a84c9b6ba422c4"],["/archives/2020/page/4/index.html","c3b1ce8fcec5a2cd62f14381db8a2b63"],["/archives/2020/page/5/index.html","820b7dd60d25e3e176c3d187d9dc2de5"],["/archives/2020/page/6/index.html","eb2a1dd547cf92070b55cb811701924b"],["/archives/2020/page/7/index.html","c2ef7d89106d9357509781934a7f9f4e"],["/archives/2020/page/8/index.html","f510ad719bae5489cb38c587bd978561"],["/archives/index.html","d376e63fb274c9cfb7e7f7edfc4f68dd"],["/archives/page/10/index.html","a22e10bbf2c3081cd6ef21f69ee0826a"],["/archives/page/11/index.html","950a8cb02afc562e2ac8492203a1de29"],["/archives/page/12/index.html","330a3cbf7d1333cfddb0aa1b279deba2"],["/archives/page/2/index.html","7253a58a8710428978e4e1c6b60b1bae"],["/archives/page/3/index.html","53b6fab8930abd82b9eb0e80fadcb1f3"],["/archives/page/4/index.html","9782b038347ae40df3223c2fdcb3b86a"],["/archives/page/5/index.html","d9fb8ec27d608fc7ccd06e2e70f761b7"],["/archives/page/6/index.html","543d8024027f23cdd494ca995b2c7365"],["/archives/page/7/index.html","1019d1d3a14a7f12b08f3e03907d6390"],["/archives/page/8/index.html","9287ccbd963830538ea5608fe95d737d"],["/archives/page/9/index.html","7756d5ca14174fc455999961d6a404cc"],["/catalogtest/index.html","edc58d8db276014ada3800353fdf86a3"],["/categories/NHK听力练习/index.html","fe71f633ae655d2f28a1cdb5f0b7e8af"],["/categories/NHK听力练习/page/2/index.html","3c696d02bcce4285363897f2b3fb0061"],["/categories/NHK听力练习/page/3/index.html","e72bcbf069f96b6d60318b1228813d1e"],["/categories/NHK听力练习/page/4/index.html","9e36c844c4922e470276b9c5c3e4335a"],["/categories/NHK听力练习/page/5/index.html","7f6918c9bad2c7159594ddc6cb0557c7"],["/categories/NHK听力练习/page/6/index.html","609ab6de1ffc581cf94fa0c547213f95"],["/categories/vue/index.html","0bd7db2b60e3d5e267d6b6ce8de586d5"],["/categories/作品集/index.html","76a046afa582fe306f94c6aded8491c5"],["/categories/作品集/page/2/index.html","4bd0706ab1b265e340d8b8c203db2a4c"],["/categories/学习/index.html","8bc0b7bfd7156ed33bbdc941d98bf673"],["/categories/学习/page/2/index.html","45306f8ee1d2a0ebfb8a928c0fceb305"],["/categories/教程/index.html","19584637f9eeab3403a4a9d4695503ff"],["/categories/教程/page/2/index.html","fe7fc365eb1dab168546ec7f1faf6940"],["/categories/游戏评测/index.html","73ed97ac7cf2343baf9efdf810418acd"],["/categories/生活趣闻/index.html","3387b2702f0eececa203c2ccc35cb895"],["/categories/随想/index.html","1a1872d992cbf4578d05ee0333755794"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/addcss.css","d20fc732e0cc7996bd82c5170b7aaa86"],["/css/background.css","9ae3e08462ad0a5c0ed33136b0dbbfc6"],["/css/calendar.css","0090a32d2a61d42c5bfed254bfba078c"],["/css/clock - 副本.css","65602c2385c7eab42ee3804cd6ee0a5a"],["/css/clock.css","9db53e3bffb704c740aa83bddaf8b999"],["/css/cursor.css","f514da9c81fb3fcb4f7e9038dfa30874"],["/css/danmu.css","2a5b914a9592bcd353425c6d5fa7af8e"],["/css/index.css","a830cf7dafed0e1e03142b35ae00f2a6"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/loadingline.css","bc1ee020a6a11fea17b915b97e6978bf"],["/css/shuo.css","8db924024099e925c53d5b3dd22f83c6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/html/calendar.html","bddcec1edba7f4c49fe5cd75f8cdf5b2"],["/html/shiyan.html","dc4c9bfc8c1cd55959439458e775ff93"],["/html/shiyan2.html","7b1311df17b91123d08decd46e5aa974"],["/icon.png","8ec68de45d18642ba9baf2447e62f476"],["/images/AMJ1.png","d27a6725d1aaaf5324248da4312ab6c2"],["/images/AMJ2.png","00e22eba5901e5bd674e42228cd5bd26"],["/images/AMJ3.png","c8c9ea6348dfcad3a641899d5b587431"],["/images/FOTO1.jpg","4b6f100861908e2c7044cffbdb4a0c1a"],["/images/MVVM.png","ea5a002ee2f85c71a0db51d5adb5de19"],["/images/UT.jpg","367f4e432f9db55a92b2a290c4b0a476"],["/images/UX.png","a183974e958d41d1b6acec70bb7ea00a"],["/images/WindowsTerminal.png","8ac29cb56b8a1768cf7de071e9f1ae6f"],["/images/air-w.png","c1cc32f9d3e17551ca11a7d18a0b533a"],["/images/anzhuang.jpg","912b2489957f8344406edc5e5cebe5fa"],["/images/api-setting.png","2c0bb074390779721cba009e96c5417c"],["/images/apikey.png","1f31121b190eb1f990bcc3e27524bc03"],["/images/b0_img.png","43fcaa3f8b394ca5be957f4b860800db"],["/images/backpic1.jpg","86a6fa88167feb338fbf1a4e9057114b"],["/images/c0_img.png","34397085b4d3349034f9b167469ac626"],["/images/c10_img.png","7938c5b0dd789db4f262e5a618943a9b"],["/images/c1_img.png","95211a0ebf07befde1b11477c3a8185b"],["/images/c2_img.png","456ba51725d669fc4d005787753a6b08"],["/images/c3_img.png","a0aa7dcdd2ed5bccec52c16942036a3f"],["/images/c4_img.png","0869cebb60d00a78936b7498823a39de"],["/images/c5_img.png","533774e840ccb3ef13b46201a54be05d"],["/images/c6_img.png","db9eb681dea0b7911f0b2ba918d86c26"],["/images/c7_img.png","5b9c9e0331aca2a9d47a2730512f34f5"],["/images/c8_img.png","be9107995f185e3bbf7186c4dff69f42"],["/images/c9_img.png","642a2e762b74a28d2426af14f2b864c1"],["/images/calendar.png","86319b08b93be7c8bc47cdba7a169563"],["/images/clock2.0.png","0a0f122c7a25262fc02ee99df0ef21eb"],["/images/clock3.0.png","8e04375c183c637b65fb50ed40f46466"],["/images/example.png","aaac9983e5d59f919bf282dcff2edb3c"],["/images/foto17.png","28db4c6608ad1ee6b34238cafab25e5e"],["/images/foto2.jpg","be95b922512d004a61f83c97af3e2602"],["/images/foto2.png","0dc07d4e1b00526a273a89dc8b81548d"],["/images/foto3.jpg","551c0616c92c4ee7cc17dd458b3c46e9"],["/images/foto4.jpg","9d1d9fea759a41afc0061866e400339a"],["/images/foto5.jpg","984f618b15372f37d54f507e6f379f10"],["/images/foto9.jpg","b683fc0b998e80ff8f5a3e45e889807c"],["/images/girlpic.png","ff1e8427ed555af639e6d849f8f648f1"],["/images/girlpic1.png","698e5570e821c3cae643cc9777c2292e"],["/images/girlpic4.png","551882e4b9b6afb79000fd34c0dbf5e5"],["/images/headimage.png","332502f36a0297b30cb7969fe6de8451"],["/images/hexo.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/hexoWT.png","c027cc9f5665c7d7ba657e7a4bb40017"],["/images/his-json.png","7d8a71e38ab684107446e5c72c31854e"],["/images/history.gif","0459a3dcf2317253de0b34482880c63c"],["/images/homework1.png","e8d2f64d0785519ea7779016208a2900"],["/images/idea.jpg","5eb08bf6c965588f03c8860f201cac45"],["/images/key1.png","f2a370e02ad6c5a101db20b47a9a0008"],["/images/key2.png","21dc40bbe0377cd9fe85a9cb431c18f0"],["/images/life-cycle.png","02f39ea5c041d45938fda4b50f234cb7"],["/images/life.jpg","74d2d9c5f48ec59e3badeec690941812"],["/images/listen.jpg","9d4f73cd5634f43deaed4f9aca03f9a3"],["/images/loading.gif","ffa0804a5d99e2d5b39e05cda6d6b28b"],["/images/magnet.png","4899a924f3de0d19dbe0415128c07d65"],["/images/magnet1.png","8d010eb86ca943e036adaa7de57aee7d"],["/images/magnet2.0.png","54fe576f174d2b6917fef89f40ac5975"],["/images/magnet2.png","293cb414a8ab93b43bde3bebf9cf0cfc"],["/images/magnet3.png","1923148630e2e094ff80bf35aa604c10"],["/images/magnet4.png","9bb4f963ac1c09f02d62525f513f492c"],["/images/meilu/1.jpg","cd67abcc3f543b5c66adc4f9d9c5c628"],["/images/meilu/10.jpg","ac9fb2711e477b5db1c3acb57e899045"],["/images/meilu/11.jpg","364caad6dfc356a3dc630fa067e48e88"],["/images/meilu/12.jpg","274767e5708f79934e5bdbf73eda8f0d"],["/images/meilu/13.jpg","dcab12b84454770b208913db63e825ac"],["/images/meilu/14.jpg","037cdd048284e621f27e17a2c59e8ea7"],["/images/meilu/2.jpg","f6cdb65ae3fad4523b32f5ee38696b60"],["/images/meilu/3.jpg","9e5df3612c2d93bf57313186c954aea5"],["/images/meilu/4.jpg","69ef2d6f4bcd79cf4b4e672b60c6751e"],["/images/meilu/5.jpg","ce81ca16def7613b7ebb368fb554f14f"],["/images/meilu/6.jpg","cafd5b62305f806754a75cc3af8c3b77"],["/images/meilu/7.jpg","b8ae865d386e1e713a6034da6b090c10"],["/images/meilu/8.jpg","afad7a7bf1066c817a8d2e7566bc780d"],["/images/meilu/9.jpg","72f9649f56b564eacf23ce3dacb88029"],["/images/metroui.jpg","5503bfffd450d9ab572b67ea00941571"],["/images/metroui/1.png","79a03b408c19c74eeaa8ff6e17a03f9d"],["/images/metroui/10.png","8309fed71a15c78f2dfa3af1ff75a5f3"],["/images/metroui/11.png","aaf1a007cbae12f93cc2688bace18d28"],["/images/metroui/12.png","0758ea282c3828c47e5c64520ff85783"],["/images/metroui/13.png","12ca7b511927cd4b26e97f3b20908a32"],["/images/metroui/14.png","f44ba7680f7b36df437e2ae2588d0565"],["/images/metroui/15.png","e8927c78b125b805af7aa86fee815ab6"],["/images/metroui/2.png","e604d3c662b996f06f22753ba9ab379f"],["/images/metroui/3.png","664e3b7490f2f95d5547b8ba79a65456"],["/images/metroui/4.png","c0f255344cafc303a1d9c7404da37149"],["/images/metroui/5.png","da2074cdb1298aca826abc1a5c441300"],["/images/metroui/6.png","efef2f087127614b4e03bcbe9a347018"],["/images/metroui/7.png","a4d34b1a2dbe3a58d3a92276880be039"],["/images/metroui/8.png","1d34a626bbaa898a60d4501936bcf962"],["/images/metroui/9.png","0663697c1667b377fe2623bd65e00b31"],["/images/metrouilogo.png","aea81b42d1c2c96440f74cf56ad82e2f"],["/images/nhkimage/2020.08.01.png","af4c55b2ae1d5ab2f56c75a87fcdfdb3"],["/images/nhkimage/2020.08.02.png","c355d41b90f5c65823f96c5f6868ce53"],["/images/nhkimage/2020.08.03.png","fddcedb40d7f28b2ccb90814351ad5c8"],["/images/nhkimage/2020.08.04.png","8b4518ec5a8513f442980ed7167136b1"],["/images/nhkimage/2020.08.05.png","590abfb19334b0c3cee5a005674f2253"],["/images/nhkimage/2020.08.06.png","d469e21100c42435e88f2bdf07f93da1"],["/images/nhkimage/2020.08.07.png","3ca9e2c8b8a09a38423d73cd36e8de9d"],["/images/nhkimage/2020.08.08.png","4420c2d899fe4eb90c48bae0da8418a2"],["/images/nhkimage/2020.08.09.png","df14be338f9c920818dd1daa6aa955ee"],["/images/nhkimage/2020.08.10.png","c4e2ed023cd3dbfd4986add35ca9357c"],["/images/nhkimage/2020.08.11.png","cf562339e57f673d394f3e6cdd1f60cb"],["/images/nhkimage/2020.08.12.png","81dfa179fea3052ddcf73912ea368f67"],["/images/nhkimage/2020.08.13.png","8cf26c2642e7a27cbd86fcbda8bae8d9"],["/images/nhkimage/2020.08.14.png","d88eeb678b3ed3651d597e61957e264a"],["/images/nhkimage/2020.08.15.png","b9879f193867edcffeefce62c9dc7153"],["/images/nhkimage/2020.08.16.png","46cb914aa1d556561897767ec9ff66a0"],["/images/nhkimage/2020.08.17.png","ea1af9645b5cc9cbaafe70a91dd15cca"],["/images/nhkimage/2020.08.18.png","e87e4de39a6f06cf4283a63af92dd8de"],["/images/nhkimage/2020.08.19.png","8001a951513b542a98ce1151be5bd87b"],["/images/nhkimage/2020.08.20.png","4bc8fafa3ecce30d340b1350715d78e3"],["/images/nhkimage/2020.08.21.png","07ad1337e127922abff27da6c672549b"],["/images/nhkimage/2020.08.22.png","b2b5d53ba46015f64048f9d803b12179"],["/images/nhkimage/2020.08.23.png","225af8c0cabe5218ec634d1b8815fd95"],["/images/nhkimage/2020.08.24.png","1d54a484a6e2395aabe9be005cd90361"],["/images/nhkimage/2020.08.25.png","8008ba169cfce0ef2041329cd29b6b77"],["/images/nhkimage/2020.08.26.png","72a2b8094003a54c97a34ea97cf21bc3"],["/images/nhkimage/2020.08.27.png","893407e604804d215c8fef8bcd5f2684"],["/images/nhkimage/2020.08.28.png","b542280b7341759890a99cbd44d822c5"],["/images/nhkimage/2020.08.29.png","620e2e7d4772e39615fd1a88cdf49717"],["/images/nhkimage/2020.08.30.png","f645d7ba2dcb506f9ec6fb9244425ad7"],["/images/nhkimage/2020.09.03.png","c5262f3aa87190e0273383ea1e445681"],["/images/nhkimage/2020.09.04.png","c07149c32aa41c03bc7dac82a713f6b2"],["/images/nhkimage/2020.09.05.png","4e43556e1cb3b7f4d75f0f6127616a54"],["/images/nhkimage/2020.09.06.png","1021d2ae04a7f109404f857a2a7629cf"],["/images/nhkimage/2020.09.07.png","db9827e9f0a4cf1401b559b4644a0204"],["/images/nhkimage/2020.09.08.png","efe1030b73dc1c01f169c3122a194426"],["/images/nhkimage/2020.09.09.png","f6ba3a1c6cdeff88404ebe2a646f2eb5"],["/images/nhkimage/2020.09.10.png","3471b05d02113517359a9e2167befcfa"],["/images/nhkimage/2020.09.11.png","921a541a8bffb1aa436df2eb6db7c99f"],["/images/nhkimage/2020.09.12.png","a51f8ebaddba69bb80f9259a30f17e65"],["/images/nhkimage/2020.09.13.png","0399889200493cd2154ffc407e2bc400"],["/images/nhkimage/2020.09.14.png","eaaf3da69a39ed316b7fc8c4d409bb0f"],["/images/nhkimage/2020.09.15.png","5774959ea4061c9298ea174f0862cc3a"],["/images/nhkimage/2020.09.16.png","0c5a00f74020740fda589c02e4b3f917"],["/images/nhkimage/2020.09.17.png","b5aef734e3a7db4862ca3fe4e6769dc2"],["/images/nhkimage/2020.09.24.png","5982a7b3843f4ae43b2b4bc4b0c577d6"],["/images/nhkimage/2020.09.26.jpg","c6415af781fbdd36fdb034f74646129b"],["/images/nhkimage/2020.09.27.png","27aa6f6a8d5534ccd99cff261dcd9eb6"],["/images/nhkimage/2020.09.28.png","0f4318d1ff17a33de364432a1c44b5ad"],["/images/nhkimage/2020.10.09.png","6408d9f7e66fdeba8b9207939a08cf8d"],["/images/notop.png","d25c272e5ce312a880e04ce8a0b27683"],["/images/pasted-0.png","552608d8f6e39369aa30c6e332a32826"],["/images/pasted-1.png","baafdacee93c99e99418aaedbf524fda"],["/images/pasted-10.jpg","395cff6f64ab5df19baa3572ac98e541"],["/images/pasted-11.jpg","56e5df07c96634638abf7995b25c81ab"],["/images/pasted-12.jpg","61b3f803b85ce3640d7a9ba7efb9da6b"],["/images/pasted-2.png","2f410e53c811f92a6135f48857776f5e"],["/images/pasted-3.jpg","bb5717e691e87355e7d63a5f3a87ae62"],["/images/pasted-4.jpg","10041d0e3567b24b81222ec5075d6492"],["/images/pasted-5.jpg","ac5047a4b48c6cdaee86fa1863e33904"],["/images/pasted-6.jpg","1556ae8d3ad5713d60237ee4d10e81f0"],["/images/pasted-7.jpg","913fde1686587646ddc663bd810cc81d"],["/images/pasted-8.jpg","fc83268081fb4b6b6ecb1ffa1ec5af7f"],["/images/pasted-9.jpg","25e0fa3496591501f5c29d0b802b77d2"],["/images/pet.png","2b8c121909497e57057478856fe48a94"],["/images/pet2.png","dfb1d6a17b527ccc0c600e6ad31f55e5"],["/images/ps1.png","0917ba91f21b6944dc08d35c41a326d2"],["/images/psb.jpg","6a27c58337875c776af0a7667598b401"],["/images/quse.png","7cd1ec12b804305430cb4cdc09c7a893"],["/images/rain.jpg","9c26acc44c692b6a63e134be07b07c18"],["/images/shezhi.png","281bf545f6a4024e2d0b7120bc398a21"],["/images/soul.jpg","d97b4099c0728ff6123d006fa62db86e"],["/images/study.jpg","a9b1cf95ee6bd9f3913e8ec6a6a6f44f"],["/images/tianqizhizi.jpg","dd48d78b4eeaaa52578352f9ef570b14"],["/images/vue.png","cf23526f451784ff137f161b8fe18d5a"],["/images/vue1.jpg","8cbf18302c6fa72e2a40d0cca0832213"],["/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/images/work.png","e521cf5b834292fde1c50e0a0f5802f9"],["/images/xiaoguoyanshi.png","994a3b710d36df0a4630cd9a768c7f7b"],["/images/xiaoguozhanshi-m.png","1fefca18214fc4889d1bb76b81887c9d"],["/images/yao1.jpg","9dfddaf8c121fc8db788a87d133d6376"],["/images/zfe.one.png","b41f689341882058ffb28c4cee499bde"],["/images/幻想终结之日.png","0025c4d3973bdfedb80db3f78c59fa47"],["/images/时空战纪——游戏建议及意见①.jpg","1337457f14a8dffee66d94f8915b54ff"],["/images/简历.png","d70507ee4615c9e324578c0d777e6855"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favicon2.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","53b406dc0f2b3225285e351957088fc6"],["/js/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/APlayer.min.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/airvisual.js","71cf86bfd452ca01d92438d8266416ee"],["/js/airvisualapi.js","6931bebe1696688d109963187fc2eace"],["/js/artitalkkey.js","e735b361754e1b51300ddca9fd56b4ca"],["/js/background.js","94c8410b174f58594cf81ec99054968b"],["/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/js/calendar.js","a58e02711cc6dec4dc04257e555b8923"],["/js/catalogMagnet.js","2a4c65f71f95e19bd7e0deb9daa69a8c"],["/js/clock - 副本.js","405186e7a9d73221d2d50c0dea2852d0"],["/js/clock.js","2fdceb94cc57b551cd245b0001927b66"],["/js/color.js","3730bb4f7b185e6f5130ac28bace968b"],["/js/dan.js","6b6ae6b7f1b42dd4857541f43b2bb733"],["/js/echarts.js","dc1227b1eba1ba47fd185a387d0a7d37"],["/js/gitcalendar.js","fadfa8a42272cd322118653dca512a7a"],["/js/history.js","20459f7db325e597e64903f4c0d19306"],["/js/historyroll.js","a3e9ac376106816c50a61f9f4306d671"],["/js/jam.js","462c07d3b2e0f20394d994bbcfae37cb"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","455fface5a0a3ff90766ca254affe502"],["/js/rain.js","f656dc28e4ab5c3f8414d35f683278c1"],["/js/rainremove.js","ceacf82842b101f7e54a2aaf5f4bb9cb"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["/js/shuo.js","1076b1ef51358cc11b6ff3bab25e15d8"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/link/index.html","f0baf0f3b1667adcef119592aae030ac"],["/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","b430913ba6daff634d050f9405e82845"],["/page/10/index.html","9a18d9191a228e13a31ee581128e8d94"],["/page/11/index.html","20b15cf9337b04bf6f3fe8967bc998ac"],["/page/12/index.html","fc98b9b62b3c997dc74d715c48ef7661"],["/page/2/index.html","587b1b8b093b4188c25a6b42c11c5888"],["/page/3/index.html","f40511a2c99f36d197a359d2f146c596"],["/page/4/index.html","a109ff4c84bda459993351d616fd149c"],["/page/5/index.html","414c791ddde8855fc631909ae27aeb80"],["/page/6/index.html","3c791488c09e3667fc91ad0a80eb4aab"],["/page/7/index.html","709660456c10b71960acd72df702dc9b"],["/page/8/index.html","dd547b020752b9944193238f91e3a16b"],["/page/9/index.html","ce34bea203f4d79d96cba71bc1984b9a"],["/research/index.html","99e9f91b40297298a7943edbdf876dae"],["/sw-register.js","5b8e0aa911d080b653377087a306bb3e"],["/tags/Butterfly主题/index.html","a9daa26ca36693dfa1c4c1d7288fc079"],["/tags/DIY/index.html","ec7fdf87859d2909c609056ab48b165e"],["/tags/DIY/page/2/index.html","350d3b51715f68daec63a22e4ac2ea27"],["/tags/ICT/index.html","ebd78c425b9645ee8aec9c87d40c5ae2"],["/tags/NHK听力练习/index.html","4d65a84cfcfb9a6e7f7852358fdcb665"],["/tags/NHK听力练习/page/2/index.html","43d77e1b769d79fcd82a64ec8277b3c5"],["/tags/NHK听力练习/page/3/index.html","86e505ae847d9deb5dfa47ee5389d37d"],["/tags/NHK听力练习/page/4/index.html","52961acb2e69d42df7410719ea928d1d"],["/tags/NHK听力练习/page/5/index.html","889276edb240b65e97f894bc1ef2be29"],["/tags/NHK听力练习/page/6/index.html","3f25dd0aa41abce41bf792f68044cb82"],["/tags/metro-ui/index.html","0b5da9291aedfd1ddf99ba6e2523b3c6"],["/tags/vuejs/index.html","5baf5de9e5b18c8e678e8d67347f4010"],["/tags/お盆/index.html","67a5a88c125e3915996797ef55e8dd0f"],["/tags/世論調査/index.html","cf5352c7f6e02b96589c7d6d6b3f7fa3"],["/tags/作品集/index.html","94e270d1e9124b5fb18ce4ea9ff1b59a"],["/tags/作品集/page/2/index.html","b06302c1cf8f81e56ba64cf6bbeffc3f"],["/tags/农业/index.html","0ec161c3f71e5b8f121ee3bd04f759dd"],["/tags/历史/index.html","198bd0fd94f5ee44f1ed7f42f1ae12fa"],["/tags/営業時間/index.html","58aa99364bbcf96ebd3163e73e575b49"],["/tags/国外政事/index.html","ed835910603513f792a53fabe1a8ab2a"],["/tags/地震/index.html","19a1a3205e1e3e3cc0dbea404b7b9e65"],["/tags/外国政事/index.html","9fd0d39d6d8c4a31abff508b2d1dd136"],["/tags/天气/index.html","085288800726b736f0fd1bd8f70dd372"],["/tags/天气/page/2/index.html","5cdbaf577f496f6aafb19b60537534e1"],["/tags/奥运会/index.html","fd87f18da328582cc317da2344a7c64f"],["/tags/学习/index.html","aa7fbf606bb9646a279fcafcd1992e12"],["/tags/学习/page/2/index.html","ff55b825646da5ecd5653c48005fd524"],["/tags/学习/page/3/index.html","93b2f7f4f57d2bb3206b83fd1ff405d3"],["/tags/就业/index.html","09c843d2acbdec0b27f811e0b826d6b7"],["/tags/庐山/index.html","a2fe11de36bc01d67b2b5e411129e10e"],["/tags/座礁/index.html","08e118bf9cf458d8e0e2ef8797bdec44"],["/tags/政府/index.html","098d24bab58f347f4a9913f7add7ccfb"],["/tags/政治/index.html","4f4a2def707f18699597ce4a915de925"],["/tags/教程/index.html","533b1fb1d4dce950a2b7048d56a9c930"],["/tags/教程/page/2/index.html","a94cbe36c351de663d1a4e0c0eeb197a"],["/tags/日本教育/index.html","db27020d187a73c0c625afa687f715e2"],["/tags/民生/index.html","cd7dcc9830b311d5567afdb610b9deb9"],["/tags/民生/page/2/index.html","061b30bee970fa2da66ea9d9c1291249"],["/tags/游戏评测/index.html","52aef6466cb9e3b9b7eadcb356401d0e"],["/tags/游记/index.html","f29225c9af90d27e502df4a8bfc55903"],["/tags/生活趣闻/index.html","6aca9bbd00776ab9487952bc405279af"],["/tags/科技/index.html","a89ba5438fcbffb4edee14564246d99b"],["/tags/经济/index.html","4d7274371d3d74f2281ab4bee1166f5a"],["/tags/经济/page/2/index.html","309e2921af422ee4055b1c4e824edbf3"],["/tags/网络教学/index.html","390cf19fc5b557c1f7b331df48820647"],["/tags/舆论/index.html","933bb5b81aafeffaf0d35c7c0f4c9e0c"],["/tags/虚拟现实/index.html","4525753b2fc3d1789401111331f369e3"],["/tags/随想/index.html","8140b836abf71d0589d957f3dfe0cea3"],["/tags/障害者/index.html","b8d026bc017d3d5d2500cb03c355d4b4"]];
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
