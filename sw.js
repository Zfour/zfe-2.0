/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/05/20/2015-05-20/index.html","ea29c062ef4c2b3f49e8f9075752e33e"],["/2015/06/16/2015-06-16/index.html","12f2a54b537223bcac4faa18ff0de8db"],["/2015/12/12/2015-12-12/index.html","b4659674a9382c274984c8699975f0b5"],["/2016/06/08/2016-06-08/index.html","63875d87e48848d313261f8b05c5f1a8"],["/2016/12/18/2016-12-18/index.html","1698b9b2b58a0f163fb20a036a6d3a99"],["/2017/02/17/2017-02-17/index.html","8360683b6c8cb2f3a1dbd9ec9a1fc739"],["/2017/03/17/2017-03-17/index.html","cedc5a8e2436bbb8af9caff8ee15ee4b"],["/2017/04/06/2017-04-06/index.html","bd109106d0eff2d0b3e44d7eb31c8228"],["/2017/05/17/2017-05-17/index.html","4821a0dcccda2b06b956c5eaf75da094"],["/2017/08/15/2017-08-15/index.html","a4751f5c0ed4fc3d2510abae91a17e1d"],["/2017/09/16/2017-09-16-1/index.html","2be10f0b03bdbb223148f04bcd99226f"],["/2017/09/16/2017-09-16/index.html","e1ddce0ddf26a6646c78ce706310036e"],["/2017/09/21/2017-09-21/index.html","f3a880836b069cd10ebc93bcc7b7993c"],["/2017/09/23/2017-09-23/index.html","067a78b480c8db752f40cd92b1310c47"],["/2017/09/26/2017-09-26/index.html","65a74c79ffe22afdb306f9b458a0921f"],["/2017/09/27/2017-09-27/index.html","2b4caf8a87e1a97c6441109e60637f94"],["/2017/10/04/2017-10-04/index.html","7db8b399e62abaa47920d488a2a611f7"],["/2017/10/08/2017-10-08/index.html","ab766560b5efe4eb84a2ff5a4d8b40f8"],["/2017/10/09/2017-10-09/index.html","e77613e0063d9e7eaacdf920e9cb0370"],["/2017/10/15/2017-10-15/index.html","bfe96f03bbb6a0f43a88119e64f972f5"],["/2017/10/19/2017-10-19/index.html","4169ce86f79c177abda5ff7d024c1a53"],["/2017/10/23/2017-10-23-2/index.html","2d2eadf390c4e7ae4d06a0377f9b084e"],["/2017/10/23/2017-10-23/index.html","c7b8dc9f7b0c291006eec79727e1d422"],["/2017/11/08/2017-11-08/index.html","fdbbfc894f95425213949b0eaf4f5593"],["/2017/11/12/2017-11-12/index.html","5e37ad12a99911daa596541745a24082"],["/2017/11/15/2017-11-15/index.html","2c97774627204a5d23baf10bd83e87fc"],["/2017/11/27/2017-11-27/index.html","98311bac143a74b06bd13ce6cb76ebfb"],["/2017/12/06/2017-12-06/index.html","355f46324df0f22836270de714d44f9b"],["/2018/02/12/2018-02-12/index.html","285c59c25b918771e04a75d148d4d742"],["/2018/03/26/2018-03-26/index.html","7483e385a3e52ddd6729cc133d5ebbc4"],["/2018/04/02/2018-04-02/index.html","8404fec70f55b2866f289d8240e52130"],["/2018/04/24/2018-04-24/index.html","9ceb6974469e279ad5a964a996024b87"],["/2018/05/18/2018-05-18/index.html","6fe3dffa6eae5694cc598b831a38e5b7"],["/2018/05/23/2018-05-23/index.html","01e53a8a349c07fb8eac8df32ff69fa1"],["/2018/06/08/2018-06-08/index.html","417cebbf20ebc2a4cb137e6f3e124d0f"],["/2018/07/01/2018-07-01/index.html","622dff6fd8da08832678958d2f8c0cc8"],["/2018/08/30/2018-08-30/index.html","324963cdef8ce8b2de70f3a38ba4e930"],["/2020/07/20/2020-07-20/index.html","0209e55d92f6d6938852c2b44f51df48"],["/2020/08/01/2020-08-01/index.html","bce532b3212919514d3dbd83a12c3c39"],["/2020/08/02/2020-08-02/index.html","895045ad90bcfc5e67e8fc04128ebefb"],["/2020/08/03/2020-08-03/index.html","7902a4d39288ce951154bd73808b7ec0"],["/2020/08/04/2020-08-04-1/index.html","8c5316f8b812363a9c1cf0df6520fdc7"],["/2020/08/04/2020-08-04-2/index.html","771fb58f739d1aefb46ceaaa8539f131"],["/2020/08/05/2020-08-05/index.html","cfe84e7f042e5d6c2b4fc22a7c0106d6"],["/2020/08/06/2020-08-06/index.html","61d3d738b9cbb825562a25ea9bf2d50f"],["/2020/08/07/2020-08-07/index.html","2d0000944d91bd4bfd55250178d840da"],["/2020/08/08/2020-08-08/index.html","c6ec6371c27dcfc62d2ba166753023fe"],["/2020/08/09/2020-08-09/index.html","afa294097782ec2cc3ca6148a7fa0f59"],["/2020/08/10/2020-08-10/index.html","5dd97e1f7dbe828b5f85bf602fc67a76"],["/2020/08/11/2020-08-11/index.html","b036997467e233822ed9d927f89a4980"],["/2020/08/12/2020-08-12/index.html","60116414ab65ce0a59e8527f20f015e6"],["/2020/08/13/2020-08-13/index.html","d42ac2516dcda84dcb6d3f21db599ea9"],["/2020/08/14/2020-08-14-1/index.html","53b7d42e8ba14bc4804779becd5ba2bd"],["/2020/08/14/2020-08-14-2/index.html","52a780dd1b5e37fbc34de4b044e69929"],["/2020/08/15/2020-08-15/index.html","b195ad79436deba32ef043edd3ad8c68"],["/2020/08/16/2020-08-16-1/index.html","6d483eaad1d89ffe447abd3515afa1d5"],["/2020/08/16/2020-08-16-2/index.html","82cee280a263772395f84a2dd3d18479"],["/2020/08/17/2020-08-17/index.html","18b636c9d2a5af1f5e2556e72f3fca61"],["/2020/08/18/2020-08-18/index.html","76390c3504ac81c774c5c3d547db2ded"],["/2020/08/19/2020-08-19-1/index.html","903d295aa8b64385c7c3101abb59549f"],["/2020/08/19/2020-08-19-2/index.html","391ba450ad3c18f3afb92ab24f7f6653"],["/2020/08/20/2020-08-20/index.html","5de1bec370784cbea1b702dca527da75"],["/2020/08/21/2020-08-21/index.html","dece1c5abe6f80e687b5fa588483c07e"],["/2020/08/22/2020-08-22/index.html","26bc8b20eeac6ed4ca1ed438f4194953"],["/2020/08/23/2020-08-23-1/index.html","b6d055e20c61ad6687ae181b18ff0492"],["/2020/08/23/2020-08-23-2/index.html","102dad92ff74aea31db13006814b9a3a"],["/2020/08/24/2020-08-24-1/index.html","b732f6b29265c73d01d03a0ebfaf86de"],["/2020/08/24/2020-08-24-2/index.html","726ab99c18541c6cfb752f258dece8ef"],["/2020/08/25/2020-08-25-1/index.html","94d3961e3999bce703df82ca82749d72"],["/2020/08/25/2020-08-25-2/index.html","03dee0a58e447ed3c682dcc4be296d6a"],["/2020/08/26/2020-08-26/index.html","8898de894f32917599c9a062ae1a1059"],["/2020/08/27/2020-08-27/index.html","ecb40bcfb9f47a71a62795b56e4e07fa"],["/2020/08/28/2020-08-28/index.html","70f4786dbc5a8122e5c6c29c451515c7"],["/2020/08/29/2020-08-29/index.html","a99c58644e5d9b4308567431cfcb852d"],["/2020/08/30/2020-08-30/index.html","8242c5be5aa00d847a2aa0a223248355"],["/2020/08/31/2020-08-31-1/index.html","2a09ba3eca444f6ca394d870a93ca974"],["/2020/08/31/2020-08-31-2/index.html","36865d61ab3c5a97854c98d4b0f057fa"],["/2020/09/01/2020-09-01-1/index.html","6af733e7963741db887124df34a028bd"],["/2020/09/01/2020-09-01-2/index.html","5af7c036d2b730b0608c79c45f00cf74"],["/2020/09/02/2020-09-02-1/index.html","40f10a2b5de215bd2f6a4c992a335f43"],["/2020/09/02/2020-09-02-2/index.html","6118a62adc33b52cc93d0dc8531890bf"],["/2020/09/03/2020-09-03-1/index.html","f58bf7c500e5add51e70037771f6c976"],["/2020/09/03/2020-09-03-2/index.html","22b15dc4f9896b014075a18f477027d6"],["/2020/09/04/2020-09-04-1/index.html","499def004cb659233e1544eb982d3961"],["/2020/09/05/2020-09-05-1/index.html","f4865bbc3508930b7d823ed335666cec"],["/2020/09/06/2020-09-06-1/index.html","804be9fea6386ac1ad936477ac6e0b71"],["/2020/09/07/2020-09-07/index.html","987563f837ad0b584ef835fa6927d949"],["/2020/09/08/2020-09-08-1/index.html","4ce48210c903764ff4badc7807f3f767"],["/2020/09/08/2020-09-08-2/index.html","34fea0ba431f0d85ae7cc756fd5936f4"],["/2020/09/09/2020-09-09/index.html","03abdfc048efaa9e166c9a5d93200019"],["/2020/09/10/2020-09-10/index.html","d5e84bec1d81030870207e913ecea3c7"],["/2020/09/11/2020-09-11/index.html","d93afc39f1e5a79657c8a748f044070d"],["/2020/09/12/2020-09-12/index.html","0c907f6f95794d1c22bb94873c49bda1"],["/2020/09/13/2020-09-13/index.html","9bde60338d28dd3e7f8527efffcb585d"],["/2020/09/14/2020-09-14/index.html","7509507ecdaefef9f63fbf5dd366975c"],["/2020/09/15/2020-09-15/index.html","b288210d253f66c59336164c8d6d8ed7"],["/2020/09/16/2020-09-16/index.html","02f16ec2c5aa5676d69e02995381e4ed"],["/2020/09/17/2020-09-17/index.html","da0f32c9672e4dd883111a85dc1f651c"],["/2020/09/19/2020-09-19/index.html","e92e0d88107e2c0e144a8cc152b51599"],["/2020/09/23/2020-09-23/index.html","a5fb3da8d5c8f520b56d6497ece8a8ab"],["/2020/09/24/2020-09-24/index.html","9f3ccf140286f2e6da0fd541f15ab4d8"],["/2020/09/26/2020-09-26/index.html","7d5c93770562ed21d178c1cfecfae6e6"],["/2020/09/27/2020-09-27/index.html","f130b63f61b2b69c5c7174948ee4307a"],["/2020/09/28/2020-09-28-2/index.html","6c806ffb67c3324a0cdc91c416cbdc17"],["/2020/09/28/2020-09-28/index.html","a01d727b9e7903229bac987c7ff8c757"],["/2020/09/29/2020-09-29/index.html","3f93fcf9d083f394ad3c4a6d0813ce38"],["/2020/10/03/2020-10-03/index.html","64b4095dfd19e08781b38e5b4b1de704"],["/2020/10/04/2020-10-04/index.html","359ce0f8d78f8a2ecf82bc0289a2eb38"],["/2020/10/09/2020-10-09/index.html","1111f616113a6aae63f45956f6587ba2"],["/2020/10/10/2020-10-10/index.html","b166f18ce197526947478c75ec49a05e"],["/2020/10/11/2020-10-11/index.html","fe304c5c3bcad36f9ab3dc856e32f75f"],["/2020/10/12/2020-10-12/index.html","3cf936f76616719165feacc97a15eb30"],["/2020/10/13/2020-10-13/index.html","77632c112fed0670a727df8b38f93380"],["/2020/10/14/2020-10-14/index.html","c31cdfe890e3e94247110a9f20689f27"],["/2020/10/15/2020-10-16-2/index.html","88400d2365ce9541f0865e47d8643d7e"],["/2020/10/16/2020-10-16-1/index.html","7ab82ef0130cb48f34fa937b39fba361"],["/2020/10/18/2020-10-18/index.html","6cf4a1a3ea82a378fc031c8b2a35979b"],["/airplayervisual/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/airplayervisual/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/airplayervisual/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/airplayervisual/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/airplayervisual/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/airplayervisual/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/airplayervisual/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/airplayervisual/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/airplayervisual/index.html","55ff408b56b304c83edd18304620ac91"],["/airplayervisual/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/airplayervisual/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/airplayervisual/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/airplayervisual/js/jamsetting.js","7927507e0080ddf55c6d8b5f526bd942"],["/airplayervisual/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/airplayervisual/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/airplayervisual/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/archives/2015/05/index.html","da8aca62614996c97bfe2c82ed8b3c9f"],["/archives/2015/06/index.html","847a4fe7a134dd295293debf23c9ea17"],["/archives/2015/12/index.html","29714203b74e83e8142a704a566155bb"],["/archives/2015/index.html","011684dd889da58ad3a72d41c1272a62"],["/archives/2016/06/index.html","a22b35d4bba45d802afc83fdc7f9ae12"],["/archives/2016/12/index.html","7229289345c7326f7e53ee7b407ccc81"],["/archives/2016/index.html","05752f25106828d93d056aa437462452"],["/archives/2017/02/index.html","35a3b79976fba15612596289dd56979c"],["/archives/2017/03/index.html","e5f215961be025da3aa2540947a7fdf8"],["/archives/2017/04/index.html","e6b249dd457a863a871746319053812b"],["/archives/2017/05/index.html","92936fb3a54c167599c9288d11624512"],["/archives/2017/08/index.html","951e91bc24e0be2aaa33d5b4d3539083"],["/archives/2017/09/index.html","4d79dc796edeef2e951af158270526ae"],["/archives/2017/10/index.html","a158ceceb7c1dd27082ad56425f09d22"],["/archives/2017/11/index.html","aa1281028a7d0c6600eb5be208368e57"],["/archives/2017/12/index.html","7c78246e2a9a922195398816bfe1df91"],["/archives/2017/index.html","ec1e92a62064f1e543c74643fe0657bd"],["/archives/2017/page/2/index.html","56296eef152ae9c8a6d71d38aa807989"],["/archives/2017/page/3/index.html","e4d369ca910652aed19d1ee4dd8cca71"],["/archives/2018/02/index.html","e4a8b765ba022e1603d201d3d84ce5f5"],["/archives/2018/03/index.html","d9c4fc51b95d1fd52799f020b034263f"],["/archives/2018/04/index.html","c22aa9e5f3018ba7a79080bfd8452a28"],["/archives/2018/05/index.html","454c587272d8820f25b1b576826bf170"],["/archives/2018/06/index.html","048165ab44862bef1b0c4de93485181b"],["/archives/2018/07/index.html","ac0bf82a15a5cab2b2fd2ee6d03f4332"],["/archives/2018/08/index.html","780a37d6d5e77ff287c69e36be20711b"],["/archives/2018/index.html","b6f61e33644b127d201b757726d10b21"],["/archives/2020/07/index.html","755dab2c54879624c65902b911272eb7"],["/archives/2020/08/index.html","a120738783eeb17b06529618556d734b"],["/archives/2020/08/page/2/index.html","c17b10796ed48008250eee5d168bf5da"],["/archives/2020/08/page/3/index.html","b1d1818a204b65e23166e130985af851"],["/archives/2020/08/page/4/index.html","01b7f3d3c31563436ce439e546797047"],["/archives/2020/09/index.html","42e460c8725c61f94c3c4a6ee33887bf"],["/archives/2020/09/page/2/index.html","8740f3fc2839708ef106728e5dbfb4e3"],["/archives/2020/09/page/3/index.html","e14bb4a53cc0b8bab72a3bc816b1402d"],["/archives/2020/10/index.html","944d55640dad997e2867831b8c7cb589"],["/archives/2020/10/page/2/index.html","c383f65dd2954d2f2dbbd95226b260db"],["/archives/2020/index.html","9c49f80432241d9ed08bcd7e8e044e59"],["/archives/2020/page/2/index.html","19d5ed16349495675603552d2b73991d"],["/archives/2020/page/3/index.html","f2c17523a43fad33265e67cd23c50205"],["/archives/2020/page/4/index.html","f13f5bd2b31f7c62c6734f676ddb2acc"],["/archives/2020/page/5/index.html","425cc63fedfc0002235a52a47a2ef8a5"],["/archives/2020/page/6/index.html","79546adfd6486ecffb34ac085d3ea595"],["/archives/2020/page/7/index.html","3e55224acb805b6dda1c02cdd167d4b8"],["/archives/2020/page/8/index.html","1de1a1ece6d8a97b45398ab9dcb45f60"],["/archives/index.html","c1daf4b1576dd85d7950b38240461425"],["/archives/page/10/index.html","3512ff0a574f91ca8e30f38573a88715"],["/archives/page/11/index.html","7dee592fc948bcc5c3f897ba33903f51"],["/archives/page/12/index.html","ab6bfc5f111d47504d9af89297367fd2"],["/archives/page/2/index.html","ca584ac9b762db51b54fedebcd29fcf6"],["/archives/page/3/index.html","1b804ad3ec05f4de073371c1f975c0da"],["/archives/page/4/index.html","a9b19af9806622484f6de720a6e430f6"],["/archives/page/5/index.html","a5a186027a57d2309369f6e9571b3d9b"],["/archives/page/6/index.html","84bd5e71bece57100c0ad053350a5fce"],["/archives/page/7/index.html","f02f8084791d09e350e60b4ab263f4aa"],["/archives/page/8/index.html","799fde1efb63423dfa816d700fef7201"],["/archives/page/9/index.html","cdc1c0f2318331387b1c0ec2774630aa"],["/catalogtest/index.html","ff5969baa3701f95dd5138ee90a26ac4"],["/categories/NHK听力练习/index.html","4ce82f6549e525690a90e8cd40a946c9"],["/categories/NHK听力练习/page/2/index.html","97cfe8ae6d2ac7eca8ed57b34604795a"],["/categories/NHK听力练习/page/3/index.html","031e4fb95c60df516c889475f228417b"],["/categories/NHK听力练习/page/4/index.html","5637fc26be34f0da37f7ef698066dbb3"],["/categories/NHK听力练习/page/5/index.html","6f28a22ed1ec015797482b6d6065d352"],["/categories/NHK听力练习/page/6/index.html","3857cbb66437a14c0c753f2c70e7ab3a"],["/categories/vue/index.html","9af16b797f52ea4d2670f58b3b1d1708"],["/categories/作品集/index.html","2849aa65bbde60c5cccac05241cde717"],["/categories/作品集/page/2/index.html","9ce50f206ec1f2d91d960df826406658"],["/categories/学习/index.html","e64627a37cabebce13d8789d7255f3bc"],["/categories/学习/page/2/index.html","393e0fbef91c65c453ab18e4b28cba0f"],["/categories/教程/index.html","03b91ecc10dcfedecdcf634dd22e56c5"],["/categories/教程/page/2/index.html","9b55e21298c4ee219c7d1e6665af65f5"],["/categories/游戏评测/index.html","cbe321364934288b11c454e140cdc142"],["/categories/生活趣闻/index.html","3259f3820fb24c19f890be07be453d5d"],["/categories/随想/index.html","f0219ffdf3bbc1f83cad451a8ce74404"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/addcss.css","d20fc732e0cc7996bd82c5170b7aaa86"],["/css/background.css","9ae3e08462ad0a5c0ed33136b0dbbfc6"],["/css/calendar.css","0090a32d2a61d42c5bfed254bfba078c"],["/css/clock - 副本.css","65602c2385c7eab42ee3804cd6ee0a5a"],["/css/clock.css","9db53e3bffb704c740aa83bddaf8b999"],["/css/cursor.css","c1a23e168c5b794ff367eb0ae77eb26b"],["/css/danmu.css","2a5b914a9592bcd353425c6d5fa7af8e"],["/css/index.css","a830cf7dafed0e1e03142b35ae00f2a6"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/loadingline.css","bc1ee020a6a11fea17b915b97e6978bf"],["/css/shuo.css","8db924024099e925c53d5b3dd22f83c6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/html/calendar.html","bddcec1edba7f4c49fe5cd75f8cdf5b2"],["/html/shiyan.html","db8ef1f1ee3b12332c09c19c3e1ac209"],["/html/shiyan2.html","b4017c7219434264b2ceb913f84fba8c"],["/icon.png","8ec68de45d18642ba9baf2447e62f476"],["/images/AMJ1.png","d27a6725d1aaaf5324248da4312ab6c2"],["/images/AMJ2.png","00e22eba5901e5bd674e42228cd5bd26"],["/images/AMJ3.png","c8c9ea6348dfcad3a641899d5b587431"],["/images/FOTO1.jpg","4b6f100861908e2c7044cffbdb4a0c1a"],["/images/MVVM.png","ea5a002ee2f85c71a0db51d5adb5de19"],["/images/UT.jpg","367f4e432f9db55a92b2a290c4b0a476"],["/images/UX.png","a183974e958d41d1b6acec70bb7ea00a"],["/images/WindowsTerminal.png","8ac29cb56b8a1768cf7de071e9f1ae6f"],["/images/air-w.png","c1cc32f9d3e17551ca11a7d18a0b533a"],["/images/anzhuang.jpg","912b2489957f8344406edc5e5cebe5fa"],["/images/api-setting.png","2c0bb074390779721cba009e96c5417c"],["/images/apikey.png","1f31121b190eb1f990bcc3e27524bc03"],["/images/b0_img.png","43fcaa3f8b394ca5be957f4b860800db"],["/images/backpic1.jpg","86a6fa88167feb338fbf1a4e9057114b"],["/images/c0_img.png","34397085b4d3349034f9b167469ac626"],["/images/c10_img.png","7938c5b0dd789db4f262e5a618943a9b"],["/images/c1_img.png","95211a0ebf07befde1b11477c3a8185b"],["/images/c2_img.png","456ba51725d669fc4d005787753a6b08"],["/images/c3_img.png","a0aa7dcdd2ed5bccec52c16942036a3f"],["/images/c4_img.png","0869cebb60d00a78936b7498823a39de"],["/images/c5_img.png","533774e840ccb3ef13b46201a54be05d"],["/images/c6_img.png","db9eb681dea0b7911f0b2ba918d86c26"],["/images/c7_img.png","5b9c9e0331aca2a9d47a2730512f34f5"],["/images/c8_img.png","be9107995f185e3bbf7186c4dff69f42"],["/images/c9_img.png","642a2e762b74a28d2426af14f2b864c1"],["/images/calendar.png","86319b08b93be7c8bc47cdba7a169563"],["/images/clock2.0.png","0a0f122c7a25262fc02ee99df0ef21eb"],["/images/clock3.0.png","8e04375c183c637b65fb50ed40f46466"],["/images/example.png","aaac9983e5d59f919bf282dcff2edb3c"],["/images/foto17.png","28db4c6608ad1ee6b34238cafab25e5e"],["/images/foto2.jpg","be95b922512d004a61f83c97af3e2602"],["/images/foto2.png","0dc07d4e1b00526a273a89dc8b81548d"],["/images/foto3.jpg","551c0616c92c4ee7cc17dd458b3c46e9"],["/images/foto4.jpg","9d1d9fea759a41afc0061866e400339a"],["/images/foto5.jpg","984f618b15372f37d54f507e6f379f10"],["/images/foto9.jpg","b683fc0b998e80ff8f5a3e45e889807c"],["/images/girlpic.png","ff1e8427ed555af639e6d849f8f648f1"],["/images/girlpic1.png","698e5570e821c3cae643cc9777c2292e"],["/images/girlpic4.png","551882e4b9b6afb79000fd34c0dbf5e5"],["/images/headimage.png","332502f36a0297b30cb7969fe6de8451"],["/images/hexo.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/hexoWT.png","c027cc9f5665c7d7ba657e7a4bb40017"],["/images/his-json.png","7d8a71e38ab684107446e5c72c31854e"],["/images/history.gif","0459a3dcf2317253de0b34482880c63c"],["/images/homework1.png","e8d2f64d0785519ea7779016208a2900"],["/images/idea.jpg","5eb08bf6c965588f03c8860f201cac45"],["/images/key1.png","f2a370e02ad6c5a101db20b47a9a0008"],["/images/key2.png","21dc40bbe0377cd9fe85a9cb431c18f0"],["/images/life-cycle.png","02f39ea5c041d45938fda4b50f234cb7"],["/images/life.jpg","74d2d9c5f48ec59e3badeec690941812"],["/images/listen.jpg","9d4f73cd5634f43deaed4f9aca03f9a3"],["/images/loading.gif","ffa0804a5d99e2d5b39e05cda6d6b28b"],["/images/magnet.png","4899a924f3de0d19dbe0415128c07d65"],["/images/magnet1.png","8d010eb86ca943e036adaa7de57aee7d"],["/images/magnet2.0.png","54fe576f174d2b6917fef89f40ac5975"],["/images/magnet2.png","293cb414a8ab93b43bde3bebf9cf0cfc"],["/images/magnet3.png","1923148630e2e094ff80bf35aa604c10"],["/images/magnet4.png","9bb4f963ac1c09f02d62525f513f492c"],["/images/meilu/1.jpg","cd67abcc3f543b5c66adc4f9d9c5c628"],["/images/meilu/10.jpg","ac9fb2711e477b5db1c3acb57e899045"],["/images/meilu/11.jpg","364caad6dfc356a3dc630fa067e48e88"],["/images/meilu/12.jpg","274767e5708f79934e5bdbf73eda8f0d"],["/images/meilu/13.jpg","dcab12b84454770b208913db63e825ac"],["/images/meilu/14.jpg","037cdd048284e621f27e17a2c59e8ea7"],["/images/meilu/2.jpg","f6cdb65ae3fad4523b32f5ee38696b60"],["/images/meilu/3.jpg","9e5df3612c2d93bf57313186c954aea5"],["/images/meilu/4.jpg","69ef2d6f4bcd79cf4b4e672b60c6751e"],["/images/meilu/5.jpg","ce81ca16def7613b7ebb368fb554f14f"],["/images/meilu/6.jpg","cafd5b62305f806754a75cc3af8c3b77"],["/images/meilu/7.jpg","b8ae865d386e1e713a6034da6b090c10"],["/images/meilu/8.jpg","afad7a7bf1066c817a8d2e7566bc780d"],["/images/meilu/9.jpg","72f9649f56b564eacf23ce3dacb88029"],["/images/metroui.jpg","5503bfffd450d9ab572b67ea00941571"],["/images/metroui/1.png","79a03b408c19c74eeaa8ff6e17a03f9d"],["/images/metroui/10.png","8309fed71a15c78f2dfa3af1ff75a5f3"],["/images/metroui/11.png","aaf1a007cbae12f93cc2688bace18d28"],["/images/metroui/12.png","0758ea282c3828c47e5c64520ff85783"],["/images/metroui/13.png","12ca7b511927cd4b26e97f3b20908a32"],["/images/metroui/14.png","f44ba7680f7b36df437e2ae2588d0565"],["/images/metroui/15.png","e8927c78b125b805af7aa86fee815ab6"],["/images/metroui/2.png","e604d3c662b996f06f22753ba9ab379f"],["/images/metroui/3.png","664e3b7490f2f95d5547b8ba79a65456"],["/images/metroui/4.png","c0f255344cafc303a1d9c7404da37149"],["/images/metroui/5.png","da2074cdb1298aca826abc1a5c441300"],["/images/metroui/6.png","efef2f087127614b4e03bcbe9a347018"],["/images/metroui/7.png","a4d34b1a2dbe3a58d3a92276880be039"],["/images/metroui/8.png","1d34a626bbaa898a60d4501936bcf962"],["/images/metroui/9.png","0663697c1667b377fe2623bd65e00b31"],["/images/metrouilogo.png","aea81b42d1c2c96440f74cf56ad82e2f"],["/images/nhkimage/2020.08.01.png","af4c55b2ae1d5ab2f56c75a87fcdfdb3"],["/images/nhkimage/2020.08.02.png","c355d41b90f5c65823f96c5f6868ce53"],["/images/nhkimage/2020.08.03.png","fddcedb40d7f28b2ccb90814351ad5c8"],["/images/nhkimage/2020.08.04.png","8b4518ec5a8513f442980ed7167136b1"],["/images/nhkimage/2020.08.05.png","590abfb19334b0c3cee5a005674f2253"],["/images/nhkimage/2020.08.06.png","d469e21100c42435e88f2bdf07f93da1"],["/images/nhkimage/2020.08.07.png","3ca9e2c8b8a09a38423d73cd36e8de9d"],["/images/nhkimage/2020.08.08.png","4420c2d899fe4eb90c48bae0da8418a2"],["/images/nhkimage/2020.08.09.png","df14be338f9c920818dd1daa6aa955ee"],["/images/nhkimage/2020.08.10.png","c4e2ed023cd3dbfd4986add35ca9357c"],["/images/nhkimage/2020.08.11.png","cf562339e57f673d394f3e6cdd1f60cb"],["/images/nhkimage/2020.08.12.png","81dfa179fea3052ddcf73912ea368f67"],["/images/nhkimage/2020.08.13.png","8cf26c2642e7a27cbd86fcbda8bae8d9"],["/images/nhkimage/2020.08.14.png","d88eeb678b3ed3651d597e61957e264a"],["/images/nhkimage/2020.08.15.png","b9879f193867edcffeefce62c9dc7153"],["/images/nhkimage/2020.08.16.png","46cb914aa1d556561897767ec9ff66a0"],["/images/nhkimage/2020.08.17.png","ea1af9645b5cc9cbaafe70a91dd15cca"],["/images/nhkimage/2020.08.18.png","e87e4de39a6f06cf4283a63af92dd8de"],["/images/nhkimage/2020.08.19.png","8001a951513b542a98ce1151be5bd87b"],["/images/nhkimage/2020.08.20.png","4bc8fafa3ecce30d340b1350715d78e3"],["/images/nhkimage/2020.08.21.png","07ad1337e127922abff27da6c672549b"],["/images/nhkimage/2020.08.22.png","b2b5d53ba46015f64048f9d803b12179"],["/images/nhkimage/2020.08.23.png","225af8c0cabe5218ec634d1b8815fd95"],["/images/nhkimage/2020.08.24.png","1d54a484a6e2395aabe9be005cd90361"],["/images/nhkimage/2020.08.25.png","8008ba169cfce0ef2041329cd29b6b77"],["/images/nhkimage/2020.08.26.png","72a2b8094003a54c97a34ea97cf21bc3"],["/images/nhkimage/2020.08.27.png","893407e604804d215c8fef8bcd5f2684"],["/images/nhkimage/2020.08.28.png","b542280b7341759890a99cbd44d822c5"],["/images/nhkimage/2020.08.29.png","620e2e7d4772e39615fd1a88cdf49717"],["/images/nhkimage/2020.08.30.png","f645d7ba2dcb506f9ec6fb9244425ad7"],["/images/nhkimage/2020.09.03.png","c5262f3aa87190e0273383ea1e445681"],["/images/nhkimage/2020.09.04.png","c07149c32aa41c03bc7dac82a713f6b2"],["/images/nhkimage/2020.09.05.png","4e43556e1cb3b7f4d75f0f6127616a54"],["/images/nhkimage/2020.09.06.png","1021d2ae04a7f109404f857a2a7629cf"],["/images/nhkimage/2020.09.07.png","db9827e9f0a4cf1401b559b4644a0204"],["/images/nhkimage/2020.09.08.png","efe1030b73dc1c01f169c3122a194426"],["/images/nhkimage/2020.09.09.png","f6ba3a1c6cdeff88404ebe2a646f2eb5"],["/images/nhkimage/2020.09.10.png","3471b05d02113517359a9e2167befcfa"],["/images/nhkimage/2020.09.11.png","921a541a8bffb1aa436df2eb6db7c99f"],["/images/nhkimage/2020.09.12.png","a51f8ebaddba69bb80f9259a30f17e65"],["/images/nhkimage/2020.09.13.png","0399889200493cd2154ffc407e2bc400"],["/images/nhkimage/2020.09.14.png","eaaf3da69a39ed316b7fc8c4d409bb0f"],["/images/nhkimage/2020.09.15.png","5774959ea4061c9298ea174f0862cc3a"],["/images/nhkimage/2020.09.16.png","0c5a00f74020740fda589c02e4b3f917"],["/images/nhkimage/2020.09.17.png","b5aef734e3a7db4862ca3fe4e6769dc2"],["/images/nhkimage/2020.09.24.png","5982a7b3843f4ae43b2b4bc4b0c577d6"],["/images/nhkimage/2020.09.26.jpg","c6415af781fbdd36fdb034f74646129b"],["/images/nhkimage/2020.09.27.png","27aa6f6a8d5534ccd99cff261dcd9eb6"],["/images/nhkimage/2020.09.28.png","0f4318d1ff17a33de364432a1c44b5ad"],["/images/nhkimage/2020.10.09.png","6408d9f7e66fdeba8b9207939a08cf8d"],["/images/notop.png","d25c272e5ce312a880e04ce8a0b27683"],["/images/pasted-0.png","552608d8f6e39369aa30c6e332a32826"],["/images/pasted-1.png","baafdacee93c99e99418aaedbf524fda"],["/images/pasted-10.jpg","395cff6f64ab5df19baa3572ac98e541"],["/images/pasted-11.jpg","56e5df07c96634638abf7995b25c81ab"],["/images/pasted-12.jpg","61b3f803b85ce3640d7a9ba7efb9da6b"],["/images/pasted-2.png","2f410e53c811f92a6135f48857776f5e"],["/images/pasted-3.jpg","bb5717e691e87355e7d63a5f3a87ae62"],["/images/pasted-4.jpg","10041d0e3567b24b81222ec5075d6492"],["/images/pasted-5.jpg","ac5047a4b48c6cdaee86fa1863e33904"],["/images/pasted-6.jpg","1556ae8d3ad5713d60237ee4d10e81f0"],["/images/pasted-7.jpg","913fde1686587646ddc663bd810cc81d"],["/images/pasted-8.jpg","fc83268081fb4b6b6ecb1ffa1ec5af7f"],["/images/pasted-9.jpg","25e0fa3496591501f5c29d0b802b77d2"],["/images/pet.png","2b8c121909497e57057478856fe48a94"],["/images/pet2.png","dfb1d6a17b527ccc0c600e6ad31f55e5"],["/images/ps1.png","0917ba91f21b6944dc08d35c41a326d2"],["/images/psb.jpg","6a27c58337875c776af0a7667598b401"],["/images/quse.png","7cd1ec12b804305430cb4cdc09c7a893"],["/images/rain.jpg","9c26acc44c692b6a63e134be07b07c18"],["/images/shezhi.png","281bf545f6a4024e2d0b7120bc398a21"],["/images/soul.jpg","d97b4099c0728ff6123d006fa62db86e"],["/images/study.jpg","a9b1cf95ee6bd9f3913e8ec6a6a6f44f"],["/images/tianqizhizi.jpg","dd48d78b4eeaaa52578352f9ef570b14"],["/images/vue.png","cf23526f451784ff137f161b8fe18d5a"],["/images/vue1.jpg","8cbf18302c6fa72e2a40d0cca0832213"],["/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/images/work.png","e521cf5b834292fde1c50e0a0f5802f9"],["/images/xiaoguoyanshi.png","994a3b710d36df0a4630cd9a768c7f7b"],["/images/xiaoguozhanshi-m.png","1fefca18214fc4889d1bb76b81887c9d"],["/images/yao1.jpg","9dfddaf8c121fc8db788a87d133d6376"],["/images/zfe.one.png","b41f689341882058ffb28c4cee499bde"],["/images/幻想终结之日.png","0025c4d3973bdfedb80db3f78c59fa47"],["/images/时空战纪——游戏建议及意见①.jpg","1337457f14a8dffee66d94f8915b54ff"],["/images/简历.png","d70507ee4615c9e324578c0d777e6855"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favicon2.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","2ffcf88c6e800bdefca37f4c4922a856"],["/js/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/APlayer.min.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/airvisual.js","71cf86bfd452ca01d92438d8266416ee"],["/js/airvisualapi.js","6931bebe1696688d109963187fc2eace"],["/js/artitalkkey.js","e735b361754e1b51300ddca9fd56b4ca"],["/js/background.js","94c8410b174f58594cf81ec99054968b"],["/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/js/calendar.js","a58e02711cc6dec4dc04257e555b8923"],["/js/catalogMagnet.js","2a4c65f71f95e19bd7e0deb9daa69a8c"],["/js/clock - 副本.js","405186e7a9d73221d2d50c0dea2852d0"],["/js/clock.js","2fdceb94cc57b551cd245b0001927b66"],["/js/color.js","3730bb4f7b185e6f5130ac28bace968b"],["/js/dan.js","6b6ae6b7f1b42dd4857541f43b2bb733"],["/js/echarts.js","dc1227b1eba1ba47fd185a387d0a7d37"],["/js/gitcalendar.js","fadfa8a42272cd322118653dca512a7a"],["/js/history.js","20459f7db325e597e64903f4c0d19306"],["/js/historyroll.js","a3e9ac376106816c50a61f9f4306d671"],["/js/jam.js","462c07d3b2e0f20394d994bbcfae37cb"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","455fface5a0a3ff90766ca254affe502"],["/js/rain.js","f656dc28e4ab5c3f8414d35f683278c1"],["/js/rainremove.js","ceacf82842b101f7e54a2aaf5f4bb9cb"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["/js/shuo.js","1076b1ef51358cc11b6ff3bab25e15d8"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/link/index.html","785ca8ddd1e9ceff9913a6131003e3f2"],["/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","12397004d346147e4b0c1f4222bcf01b"],["/page/10/index.html","3ca1bd9e7a7bd06f25d1d74c384eccab"],["/page/11/index.html","d64e4e2f390b6f9b63a678fd8d721744"],["/page/12/index.html","21844bd447582a7fa5839e0b51d30581"],["/page/2/index.html","6c6e1f8f0c0d226250242e7029b577b3"],["/page/3/index.html","f8522191e0da75ddab4e1ea1917b8204"],["/page/4/index.html","9cfba13d3d4665b1dbbbce0f75768b08"],["/page/5/index.html","88e9eb69c155650ba55e6951f02ffd82"],["/page/6/index.html","ba59cd46c152ad057a82d820728b8ddb"],["/page/7/index.html","f2a626ee15b4bffc53641ebbe91228c1"],["/page/8/index.html","77028eed1abaec50d9520c76a85eddef"],["/page/9/index.html","429b97e6e5f6d8757a6f52c71260cbf1"],["/research/index.html","0a8769a6299fa614b1d94dd5b91a2248"],["/sw-register.js","a35b4fe824738c0b639d934e97240493"],["/tags/Butterfly主题/index.html","984ad4781c9136e4c014d8916c664164"],["/tags/DIY/index.html","3fc718625817b653e1d13cbbed842d1f"],["/tags/DIY/page/2/index.html","faef5c69c368ada111c225b8c0112efe"],["/tags/ICT/index.html","7014de35ed1e09ac58a366c321e138bb"],["/tags/NHK听力练习/index.html","160f8b9317f8eed59c4ef260835f29d9"],["/tags/NHK听力练习/page/2/index.html","68f0313453c7eaa8a4fdba5fcd740beb"],["/tags/NHK听力练习/page/3/index.html","bf60be44c1357753e42a978fc13fbccb"],["/tags/NHK听力练习/page/4/index.html","13c63088a15ed7b14d720f97b7cdb9c0"],["/tags/NHK听力练习/page/5/index.html","6e23c8f345a5e60837a56ccbe67b6439"],["/tags/NHK听力练习/page/6/index.html","167d287cc7d54d42452cff030af3ccc1"],["/tags/metro-ui/index.html","de2d942865234ee27b3764e444254f1e"],["/tags/vuejs/index.html","6bc3aa7050d644963ad42c51d6b195ed"],["/tags/お盆/index.html","24e6f3d0ddd69f78ee2ac5b120a4f852"],["/tags/世論調査/index.html","3224a14352702882dba95ab44d6e9a23"],["/tags/作品集/index.html","e7bd8a077d23d410a7238d49787b5eb6"],["/tags/作品集/page/2/index.html","b50f17df8a5d0a89aa97dc2bffb80f5f"],["/tags/农业/index.html","42957e00387c8a18abe8f718e456f63b"],["/tags/历史/index.html","ec6c649964b71db3e74f7534447a2f23"],["/tags/営業時間/index.html","09763533f97e457f09dc4b5f180068b8"],["/tags/国外政事/index.html","b0329f376dbab6d1b35081905e115ca9"],["/tags/地震/index.html","b76b0fdd1151a3c693e2f29efd8bc75d"],["/tags/外国政事/index.html","6ea14e4aaa31e4468499c1b7163d998c"],["/tags/天气/index.html","404282ad074382e9046e4b9de4b9cb7f"],["/tags/天气/page/2/index.html","87828f81faf52889232a10bd6d5daca6"],["/tags/奥运会/index.html","7de9117b42ca44c7843439e00b26c155"],["/tags/学习/index.html","659981bc4f159e650e772243e0489a51"],["/tags/学习/page/2/index.html","e14be2645435d92c1ea474329fcd4741"],["/tags/学习/page/3/index.html","472833e14703d853b8d08bb47eefaea6"],["/tags/就业/index.html","b570186a552fb88cc74e9fdf4491f54a"],["/tags/庐山/index.html","a7bd0bf0ef03c26aa3fee194d440c003"],["/tags/座礁/index.html","243e8a1b34577d43102bc41d88e72bdf"],["/tags/政府/index.html","791167a50a1733dc4f1a406f8162070c"],["/tags/政治/index.html","88c9a841fbe00d1ee38b8bd88cdfeade"],["/tags/教程/index.html","970687da1bd9871e17e1bdf57486ca84"],["/tags/教程/page/2/index.html","7deabb5a98c385c58efd98ff7f1b5908"],["/tags/日本教育/index.html","ab23d0a7c3ab1118d23caeef215cb940"],["/tags/民生/index.html","1de2884c8f49c6e92aa6e5ad3b5325a8"],["/tags/民生/page/2/index.html","ccb78a7b1a495918b7e9e0b0f3ee7208"],["/tags/游戏评测/index.html","484e39faa058194ae79c08a05ac2469d"],["/tags/游记/index.html","b516486457f30b6ecf81aa3b8d94c93c"],["/tags/生活趣闻/index.html","0ec54205188ce2765e8542133bcc9eb5"],["/tags/科技/index.html","f1a1477beb50197a228738555e15ca2b"],["/tags/经济/index.html","dc34397339754be8b3d3760fba1f2a03"],["/tags/经济/page/2/index.html","4b77f773258931ae7543d91255b318e8"],["/tags/网络教学/index.html","bc4279b26dc77948b9993398ab321f05"],["/tags/舆论/index.html","5e9172a5be9ef901bf3a2e26b5d9280d"],["/tags/虚拟现实/index.html","711ba5518171f4da0b0228f51e4d4ef7"],["/tags/随想/index.html","5e3dbc8a257c222542ad5b44a6362b16"],["/tags/障害者/index.html","586737962ddba257d7d980a32476081b"]];
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
