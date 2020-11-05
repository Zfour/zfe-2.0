/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/05/20/2015-05-20/index.html","2b0426ae929e287d307f4f66349db005"],["/2015/06/16/2015-06-16/index.html","4c2a64fa94947cc45e8d96d936b23d62"],["/2015/12/12/2015-12-12/index.html","d863dd5f39ff4495474e51ad2400d91f"],["/2016/06/08/2016-06-08/index.html","39ee40b8dfedd81a3b6ccfc7e4aad20c"],["/2016/12/18/2016-12-18/index.html","5bc50720d4610cac4e8a392e53125b7b"],["/2017/02/17/2017-02-17/index.html","4ff9fbb2807ccc39d598f74e14d5e71c"],["/2017/03/17/2017-03-17/index.html","7440eac3357b60a3d94a53f5bf00c3bb"],["/2017/04/06/2017-04-06/index.html","993b6ed3dc5f8da0a3923a387785b38a"],["/2017/05/17/2017-05-17/index.html","0aae17e3df91679dc61d419d5bb656c8"],["/2017/08/15/2017-08-15/index.html","29479df342659c5d15be74660443bb81"],["/2017/09/16/2017-09-16-1/index.html","80669f64104e5424721f2dd517212f72"],["/2017/09/16/2017-09-16/index.html","df5867361e4b8e38b5ded073fd6a903d"],["/2017/09/21/2017-09-21/index.html","7a4f7e5a33cedacd035d7d483484cd8b"],["/2017/09/23/2017-09-23/index.html","7fa9eebeace01a141a92d38b878ce1f6"],["/2017/09/26/2017-09-26/index.html","5e8d740c28538680ec12439ef98503c3"],["/2017/09/27/2017-09-27/index.html","4bb74478ba6d0799b7633b09f63ec173"],["/2017/10/04/2017-10-04/index.html","24bc09b63cd4ad1a3f1598543f3a77d9"],["/2017/10/08/2017-10-08/index.html","01b496351b512e94a420711db6d79410"],["/2017/10/09/2017-10-09/index.html","1535db82702fa9c95d5059b76ff91208"],["/2017/10/15/2017-10-15/index.html","5de9672724f825be1ec74ff06f1c7e02"],["/2017/10/19/2017-10-19/index.html","65e401f3556e4ff099f2790153bbfcdd"],["/2017/10/23/2017-10-23-2/index.html","89d91c1d55ff8406c2c23993bb82cd11"],["/2017/10/23/2017-10-23/index.html","c63690546dc9a7166a2a73e1743276af"],["/2017/11/08/2017-11-08/index.html","541e55e8a8375a01bd261ee40f7d340d"],["/2017/11/12/2017-11-12/index.html","e17ce8eef1a2f10d3b34762ebdf6b838"],["/2017/11/15/2017-11-15/index.html","2961bda2af56ed70b0a152086607b8ff"],["/2017/11/27/2017-11-27/index.html","e30f576051ce780a3dbddfd5a10d702f"],["/2017/12/06/2017-12-06/index.html","4b05cf31e061492fb46795768d0fb847"],["/2018/02/12/2018-02-12/index.html","dabf128f9c3fade1303d167538fa1ba5"],["/2018/03/26/2018-03-26/index.html","75ba08af7373460e779ac2c6e05c1fc0"],["/2018/04/02/2018-04-02/index.html","db5a39e4cb6594c2e586f7d1ec4edb7d"],["/2018/04/24/2018-04-24/index.html","4bccbf88b8f0073a3f81d5b84703c3af"],["/2018/05/18/2018-05-18/index.html","79191f18fc996c4b99ad1d2bf40e4a55"],["/2018/05/23/2018-05-23/index.html","c44e258972f3743cda5cab4fafeda992"],["/2018/06/08/2018-06-08/index.html","a8830e25c3d8f6042259eec44de66b4e"],["/2018/07/01/2018-07-01/index.html","3f758f9ce08f844047fd2df54dadcf14"],["/2018/08/30/2018-08-30/index.html","712f34eb8b3e8d144962141cc5fde351"],["/2020/07/20/2020-07-20/index.html","59c26e4aa403f514e593247cfe02ee70"],["/2020/08/01/2020-08-01/index.html","7c5acf66784308e7fab7ff37b2b15d6e"],["/2020/08/02/2020-08-02/index.html","56c6f576f9f80335d14bab2b15c797a4"],["/2020/08/03/2020-08-03/index.html","8aecf942825ae7289099aed008754e72"],["/2020/08/04/2020-08-04-1/index.html","a1db7753904a04c31a1af1fc7c5c1ae5"],["/2020/08/04/2020-08-04-2/index.html","76ffe236099c29c079a7938df76d158a"],["/2020/08/05/2020-08-05/index.html","ec74504f4f2669a4dd837a5e43be5084"],["/2020/08/06/2020-08-06/index.html","e5a15767dc66afdb1364c18a84305e7d"],["/2020/08/07/2020-08-07/index.html","4df4012215299c24eddf91ed401f9996"],["/2020/08/08/2020-08-08/index.html","f8422f8700c937ddbe156e4d569dc025"],["/2020/08/09/2020-08-09/index.html","d051fe4b2483ee995407e8898fdf59b5"],["/2020/08/10/2020-08-10/index.html","b22a8a9b43c0700ffb1d48fa29dbeb55"],["/2020/08/11/2020-08-11/index.html","d9fe479f3c36581ac31b79db7e41f42a"],["/2020/08/12/2020-08-12/index.html","c294136c63925b425b9ae57529cd8467"],["/2020/08/13/2020-08-13/index.html","355d52c0d018919c3083413237f7e054"],["/2020/08/14/2020-08-14-1/index.html","0a4ef5ba4ade60fd5d765e8ac58ae66d"],["/2020/08/14/2020-08-14-2/index.html","215789c32c9ee27976758967f1b23c48"],["/2020/08/15/2020-08-15/index.html","7c6a4abb57c87b70e72b6a17dbd98648"],["/2020/08/16/2020-08-16-1/index.html","aeba09c7142fcc5bae3f503b7e143f56"],["/2020/08/16/2020-08-16-2/index.html","c489420f5d0cc47f10fb24c388bac32d"],["/2020/08/17/2020-08-17/index.html","debe266ded676ba9a267376870b5525c"],["/2020/08/18/2020-08-18/index.html","3eaeb1b768453cf76945a5faf5e5eea3"],["/2020/08/19/2020-08-19-1/index.html","4eb82c6b4bfd188eb4b362b2dddf56a7"],["/2020/08/19/2020-08-19-2/index.html","82658c253e125e0d4788ca15806afb84"],["/2020/08/20/2020-08-20/index.html","ba60dfd8a274ea481eb7da37fe190147"],["/2020/08/21/2020-08-21/index.html","018ba4c0975d43914111cc7eb08d0635"],["/2020/08/22/2020-08-22/index.html","8a26180f3e84a9efd1277d5ac8f9ff16"],["/2020/08/23/2020-08-23-1/index.html","37879d3214619e561a3911e253eb0262"],["/2020/08/23/2020-08-23-2/index.html","d6fb3a35c753cd754b5145d9081cae92"],["/2020/08/24/2020-08-24-1/index.html","d365b4b518b017a2b7938f155cbcf8aa"],["/2020/08/24/2020-08-24-2/index.html","0b26448de9a6c62b44ace98dd28cebc9"],["/2020/08/25/2020-08-25-1/index.html","144b1c46d56ec07c929df96860659e9f"],["/2020/08/25/2020-08-25-2/index.html","d5d519e519a968e405f99dd34c860225"],["/2020/08/26/2020-08-26/index.html","d0f96eb21986724a1a14016c34dcbf43"],["/2020/08/27/2020-08-27/index.html","b5602cfc49ae99ed216563e9dace1cf8"],["/2020/08/28/2020-08-28/index.html","3562d3510f97958e81c7f5b264a9388c"],["/2020/08/29/2020-08-29/index.html","f09badda9178a4602b3ea45e830b5ee9"],["/2020/08/30/2020-08-30/index.html","24b3f511e85df629f081d8105d823ec8"],["/2020/08/31/2020-08-31-1/index.html","6b3098398ab5c43ccc58c868403696aa"],["/2020/08/31/2020-08-31-2/index.html","c0d907097d60971365b027da924ca9ca"],["/2020/09/01/2020-09-01-1/index.html","0fe81c99755dc91005c1295b21b266c1"],["/2020/09/01/2020-09-01-2/index.html","c4721ad5b808c8af2f67f32c602f9093"],["/2020/09/02/2020-09-02-1/index.html","9c7fcca01f03f33e849ccb7ca8c5649e"],["/2020/09/02/2020-09-02-2/index.html","4f7bbeab81782f33973299941231d789"],["/2020/09/03/2020-09-03-1/index.html","41249bed285fa3c2802fb0c3448ffd7c"],["/2020/09/03/2020-09-03-2/index.html","2af5d6eeec1d8921d7874d265c3bae60"],["/2020/09/04/2020-09-04-1/index.html","baa129fef1bd77919208b0c6afd4d585"],["/2020/09/05/2020-09-05-1/index.html","1320fe64b1123e3b7c4841c5c25af8c4"],["/2020/09/06/2020-09-06-1/index.html","0bb361e03cd804f428724b1b54bd51eb"],["/2020/09/07/2020-09-07/index.html","630693d857db20b28d8475eb7dd2023f"],["/2020/09/08/2020-09-08-1/index.html","04abc3f6b64878b20c91dff77a02ea5f"],["/2020/09/08/2020-09-08-2/index.html","d68d121b40cf61990197d9166247070e"],["/2020/09/09/2020-09-09/index.html","fb50467f053efcc53316a0168cf4b1f6"],["/2020/09/10/2020-09-10/index.html","203330ee6de1b47ffb5c9d6db6f579b3"],["/2020/09/11/2020-09-11/index.html","061562bdea872e4f0e8e4b21dbe9636e"],["/2020/09/12/2020-09-12/index.html","2a66f6456e108db95c95ea3ac1a787e2"],["/2020/09/13/2020-09-13/index.html","9cb389189f2cd0b401330609ced9b6e3"],["/2020/09/14/2020-09-14/index.html","9eb2378fb7d57f113bb6b9d8ab6b3bda"],["/2020/09/15/2020-09-15/index.html","d41c086313a9441c7d14f2f5b9f69d0c"],["/2020/09/16/2020-09-16/index.html","23c4cbc474bbdc6ed2fcbb08cb379718"],["/2020/09/17/2020-09-17/index.html","522e6adff6a44e5421937698aaa2fc06"],["/2020/09/19/2020-09-19/index.html","f9d0d807d3b851981a9d53d4f5697ea3"],["/2020/09/23/2020-09-23/index.html","c0815bd05e2fd5ee81a6be63cf22d75d"],["/2020/09/24/2020-09-24/index.html","e1f4b2f0c9b00b96b17d4422fe0d141a"],["/2020/09/26/2020-09-26/index.html","d0760720a493ddd796956dceb7c49130"],["/2020/09/27/2020-09-27/index.html","e2e531fcafd7387f102b0f44c4cad495"],["/2020/09/28/2020-09-28-2/index.html","e06af695794f00ed0455c1ec206d73c0"],["/2020/09/28/2020-09-28/index.html","2ee32291be975310b2abd81aea7970dc"],["/2020/09/29/2020-09-29/index.html","44d51ee807eba3262b0014df38343b9c"],["/2020/10/03/2020-10-03/index.html","f9cf31b14dbea12d31b6bd431e709f12"],["/2020/10/04/2020-10-04/index.html","c6fdc69f094a1b7430c4948484be4f11"],["/2020/10/09/2020-10-09/index.html","0ecec5c80b8724ba039325985d69ac5b"],["/2020/10/10/2020-10-10/index.html","2bf594092c051c566058f1174c2f4165"],["/2020/10/11/2020-10-11/index.html","2d398beafdd318d30defa489aeb64fd5"],["/2020/10/12/2020-10-12/index.html","03418f0150789371fc970371d345c619"],["/2020/10/13/2020-10-13/index.html","0289e18a013d3dd5ef02fbd4482e5078"],["/2020/10/14/2020-10-14/index.html","4ed99e3668718948c7da9dcf046ddc1f"],["/2020/10/15/2020-10-16-2/index.html","822648a087d37a9d20834c23400bc6fd"],["/2020/10/16/2020-10-16-1/index.html","711159ff8485ed77245263b6e3b4fdb7"],["/2020/10/18/2020-10-18/index.html","a5668798d5e1a1dc378ff2eb9d3e903a"],["/2020/10/20/2020-10-20/index.html","4f8658e26bebe326c987642bc48f7d71"],["/2020/10/20/2020-10-21/index.html","e39986a0dac7fd46b5d50f687c19d916"],["/2020/10/28/2020-10-31/index.html","f2666606a86469c84af0d5f99f6c5753"],["/2020/10/30/2020-10-26/index.html","b697e585ba94bf64f08a04734a9f9c85"],["/2020/11/05/2020-11-05/index.html","f6b85c287d0b98727a5963a3de7455ea"],["/airplayervisual/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/airplayervisual/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/airplayervisual/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/airplayervisual/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/airplayervisual/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/airplayervisual/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/airplayervisual/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/airplayervisual/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/airplayervisual/index.html","2befbf0edf6bc7f6778987e6227ab0a3"],["/airplayervisual/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/airplayervisual/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/airplayervisual/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/airplayervisual/js/jamsetting.js","7927507e0080ddf55c6d8b5f526bd942"],["/airplayervisual/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/airplayervisual/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/airplayervisual/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/archives/2015/05/index.html","24e02a7cb294989db259403a3a2eeb73"],["/archives/2015/06/index.html","cb5f505296a919d9140f2372bc40a225"],["/archives/2015/12/index.html","678bfa4cc51e16dbabba17ab72bf455e"],["/archives/2015/index.html","0c0199d1696b6f773f255466cc3a53cd"],["/archives/2016/06/index.html","298a9ce56f4b58709d1e23f99ad1ccaf"],["/archives/2016/12/index.html","14d93731b00e9be2e16adaaab9e20e7b"],["/archives/2016/index.html","6d5ad558420169edaaec0c34c48470d4"],["/archives/2017/02/index.html","bac2d9c2ea9bd6aec43df44d49cb8d17"],["/archives/2017/03/index.html","1954dbb28ab5c1a183f32ea112ff6ee6"],["/archives/2017/04/index.html","67651533d01e84428df4ea011315a51f"],["/archives/2017/05/index.html","a53d89a889832c455a9db07cf5aa33f3"],["/archives/2017/08/index.html","417467fa9c0fd0ee25b0f6d16ddfa597"],["/archives/2017/09/index.html","4763b7dfba9933bc26cad33cd25ec296"],["/archives/2017/10/index.html","7930e94bc031be815d2e659d370801d4"],["/archives/2017/11/index.html","ba8445aebbc14e71785b4948a15bbffa"],["/archives/2017/12/index.html","dcffa3c0788f6de31180fe4bdb5155b5"],["/archives/2017/index.html","5c5050e2c9c04dccac7b62e3b222a1a2"],["/archives/2017/page/2/index.html","0b65726837a3c92e13886a0bab4174b6"],["/archives/2018/02/index.html","c7c09b5ddf3352061da6064938ed1de9"],["/archives/2018/03/index.html","8da3d871ff65a881266d109567039b66"],["/archives/2018/04/index.html","89bad3e483f1330f97526405e2b03d85"],["/archives/2018/05/index.html","257e6105a72f6e6bf57620a317bacab2"],["/archives/2018/06/index.html","2a94e1e84e227b570d727f5c2dd97614"],["/archives/2018/07/index.html","2a39304947264be18f214a759d8f2253"],["/archives/2018/08/index.html","91ef0f22cc4d0676fc312095dcff1401"],["/archives/2018/index.html","630cc8f21432df937f9a61a370908d94"],["/archives/2020/07/index.html","841e2554eefded769ace381c98b919f5"],["/archives/2020/08/index.html","a949a8fe052df342ea04b00bda4e2294"],["/archives/2020/08/page/2/index.html","24b3d8687e25aadc8b1e451fc91a4703"],["/archives/2020/09/index.html","a827482baec31ddad99e799691b3a455"],["/archives/2020/09/page/2/index.html","0b87f4641b47e0f73acd2a5e1a1ef10d"],["/archives/2020/10/index.html","0e35839f52c3966995a96498894d765f"],["/archives/2020/11/index.html","7e96a762dc2066d340363c16fbd39806"],["/archives/2020/index.html","503fafaa856cf6885ebd4d155a939e36"],["/archives/2020/page/2/index.html","7b7231f6b284fdf0ce1bd29870302a0d"],["/archives/2020/page/3/index.html","84cbd7c44619c16cd4c44a530d0d8e15"],["/archives/2020/page/4/index.html","bed0bbb9599885be01ef43ee2f64015e"],["/archives/2020/page/5/index.html","a0f2cd371ed78284447a37ef073c081f"],["/archives/index.html","8be56f139f80e23767f97ae9c6f3b073"],["/archives/page/2/index.html","28d8aa6e1f25a4ab1c612b90bb0a392d"],["/archives/page/3/index.html","3a2bf129dac69ee4c5cadf8bc51700eb"],["/archives/page/4/index.html","f17c8d93dfd1f54a212fa219c79b5cdd"],["/archives/page/5/index.html","bc448c6afff35089c04cd70222865f1b"],["/archives/page/6/index.html","0b23ca02096b65cfca95580e85c66e20"],["/archives/page/7/index.html","06519fd7c80ac00a80204e8289d0d851"],["/catalogtest/index.html","d3f3ad489af09d2ad1a9e2eef6770dbf"],["/categories/NHK听力练习/index.html","14284ede394e79cc8b7c79d212a318c4"],["/categories/NHK听力练习/page/2/index.html","b620be82eba243645a865da285e31072"],["/categories/NHK听力练习/page/3/index.html","d24e6cbc47b79af32329041c6d34f532"],["/categories/vue/index.html","523cf8192ce2c4ee49cf0ff45e9caeb4"],["/categories/作品集/index.html","7cbdc6ed6a489869eb0791e5686c71b2"],["/categories/学习/index.html","dc398cbd5d432fcb19c4c764b0eed4dd"],["/categories/教程/index.html","9f7c6b76764b3037c9d582e5618b5223"],["/categories/游戏评测/index.html","f5f3506a2123a957b74ae076afa4ac27"],["/categories/生活趣闻/index.html","0b5566b9a663ff1cd34bef21d224730a"],["/categories/随想/index.html","e718abacf3d3c0529f727bd77fab02b5"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/addcss.css","d20fc732e0cc7996bd82c5170b7aaa86"],["/css/background.css","b4e0ca22f9f4e4fb063347fe34402145"],["/css/calendar.css","a1db9e78a03ba862d74ea1f3e675386f"],["/css/cardlistpost.css","d110d491f5a8f21c553e8c0992430b03"],["/css/clock - 副本.css","65602c2385c7eab42ee3804cd6ee0a5a"],["/css/clock.css","22a8f8319e0d5147c2b358bbd1e3000c"],["/css/cursor.css","f514da9c81fb3fcb4f7e9038dfa30874"],["/css/danmu.css","2a5b914a9592bcd353425c6d5fa7af8e"],["/css/flow.css","c771dbc6f0b865b39a9806713dc1e284"],["/css/flow.min.css","7ce838f3563e00e15ca8bd55b6e00630"],["/css/font.css","ddff1519820acf887b0c19cd91624981"],["/css/index.css","54ac8e8b0bac3b10a2ab4e099603eca1"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/loadingline.css","bc1ee020a6a11fea17b915b97e6978bf"],["/css/news.css","9a25f0f9ca04c57147d6966e4170b8a6"],["/css/shuo.css","8db924024099e925c53d5b3dd22f83c6"],["/css/sortable.min.css","a4c7bddbdc32317dbb63a31244a82556"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/gitcalendar/index.html","d7663334739ee576b9010be9f65d1a85"],["/icon.png","8ec68de45d18642ba9baf2447e62f476"],["/images/201808011428/css/htmleaf-demo.css","a8256346bbe444fe604987f1fffbd31f"],["/images/201808011428/css/main.css","9afb83b1ea44d47f859a57395fe64737"],["/images/201808011428/dist/sortable.css","6b6b3d6f85a3497ee9e71b16b7223f60"],["/images/201808011428/dist/sortable.js","d199f4ab84617e894975f4757dbb3c17"],["/images/201808011428/dist/sortable.min.css","a4c7bddbdc32317dbb63a31244a82556"],["/images/201808011428/dist/sortable.min.js","0351fbccf2faed49062495990e32a14f"],["/images/201808011428/fonts/icomoon.eot","3891455c55b76ce7f7c86bfc33cd6493"],["/images/201808011428/fonts/icomoon.svg","bb97ed129aa43f69280d3085cd269102"],["/images/201808011428/fonts/icomoon.ttf","e46c36b6f94cf81311ffb383f6d32bec"],["/images/201808011428/fonts/icomoon.woff","d1117ddce10d8c7ca18ac089764da08d"],["/images/201808011428/images/item-1.jpg","c4b8c20bee5947eba1541a6a8a60a5ce"],["/images/201808011428/images/item-2.jpg","dfb3e34508b4060140150784cac9658c"],["/images/201808011428/images/item-3.jpg","4f40a1d501cbd4ebcd1f617078fd6a76"],["/images/201808011428/images/item-4.jpg","04a5d629dd413b49e960437cde7dcedd"],["/images/201808011428/images/item-5.jpg","370daf7210529430a4313b29bdad6269"],["/images/201808011428/images/item-6.jpg","93ce2054bde3d9463270d9f481012652"],["/images/201808011428/images/item-7.jpg","6a0345cbc8c6ac5e909f86e6faeeb0fd"],["/images/201808011428/images/item-8.jpg","4dc81e428730ba2b021dd4993385db4b"],["/images/201808011428/images/item-9.jpg","2aa5f8fc43fe5eca9bd8394a36f1b4d7"],["/images/201808011428/index.html","d7670cade9a00df4323b33f92989f4f1"],["/images/201808011428/readme.html","43d3d025a899f53809c098893d9508d8"],["/images/201808011428/related/1.jpg","f4f33eb12a48c6bda46a1c371db24e5b"],["/images/201808011428/related/2.jpg","891bf31b875ab7588f138185019d5166"],["/images/233.jpg","13e6ddf019e5560a32f3ff82efd22344"],["/images/AMJ1.png","d27a6725d1aaaf5324248da4312ab6c2"],["/images/AMJ2.png","00e22eba5901e5bd674e42228cd5bd26"],["/images/AMJ3.png","c8c9ea6348dfcad3a641899d5b587431"],["/images/FOTO1.jpg","4b6f100861908e2c7044cffbdb4a0c1a"],["/images/Isolde-1.1.6/Isolde-1.1.6/LICENSE.html","8ba5d8c924a82bb4f2c0e443a124e16c"],["/images/Isolde-1.1.6/Isolde-1.1.6/README.html","82f4536bf84066e640ea97fd69780ede"],["/images/Isolde-1.1.6/Isolde-1.1.6/dist/isolde.min.css","e859dcc0f568c92bdc4b7be3f3b7d7fe"],["/images/Isolde-1.1.6/Isolde-1.1.6/dist/isolde.min.js","c5f5cc1595efdfde4d0b1b1415c6ae25"],["/images/Isolde-1.1.6/Isolde-1.1.6/docs/OPTIONS.html","1eb4daee457432c808910430e1c774d1"],["/images/Isolde-1.1.6/Isolde-1.1.6/gulpfile.js","8d329f641050ed4e2a93a4cc914bba1d"],["/images/Isolde-1.1.6/Isolde-1.1.6/index.js","9fa8aa3efbd2e9eef8acc5f85752ad3e"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/css/main.css","8697f186bbc389515aa6eab3a5c9316e"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/css/sortable.css","04fca21af7d48dc17591894d17aa8358"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-1.jpg","8e757354b2917abe5dde088cbc82dae6"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-2.jpg","8a5fcc4cebc52caf89eb954285edae6d"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-3.jpg","caeae3d2265de3dad6d4b16dfda1fd05"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-4.jpg","1622226c2f5ef489c55f028caf26bafd"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-5.jpg","677d53cc36ccc311e11cd455fe222621"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-6.jpg","bdedef62cfdcdf9d273fc51a0ace2563"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-7.jpg","2faba84c41dc5f0670efd3cc0b139eb4"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-8.jpg","635c6292e642ab737eed6411c3295da6"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-9.jpg","e1c4d431a72b8bbf084451939ca86595"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/isolde.js","1ddba0575c730fe2318c6450dfc4f403"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/index.html","2c8c5ea57d9a611b722f0767b6f065bd"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/isolde.css","b8011c458b923321a755da760cbeb5f0"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/isolde.js","1ddba0575c730fe2318c6450dfc4f403"],["/images/MVVM.png","ea5a002ee2f85c71a0db51d5adb5de19"],["/images/UT.jpg","367f4e432f9db55a92b2a290c4b0a476"],["/images/UX.png","a183974e958d41d1b6acec70bb7ea00a"],["/images/WindowsTerminal.png","8ac29cb56b8a1768cf7de071e9f1ae6f"],["/images/air-w.png","c1cc32f9d3e17551ca11a7d18a0b533a"],["/images/anzhuang.jpg","912b2489957f8344406edc5e5cebe5fa"],["/images/api-setting.png","2c0bb074390779721cba009e96c5417c"],["/images/apikey.png","1f31121b190eb1f990bcc3e27524bc03"],["/images/b0_img.png","43fcaa3f8b394ca5be957f4b860800db"],["/images/backpic1.jpg","86a6fa88167feb338fbf1a4e9057114b"],["/images/c0_img.png","34397085b4d3349034f9b167469ac626"],["/images/c10_img.png","7938c5b0dd789db4f262e5a618943a9b"],["/images/c1_img.png","95211a0ebf07befde1b11477c3a8185b"],["/images/c2_img.png","456ba51725d669fc4d005787753a6b08"],["/images/c3_img.png","a0aa7dcdd2ed5bccec52c16942036a3f"],["/images/c4_img.png","0869cebb60d00a78936b7498823a39de"],["/images/c5_img.png","533774e840ccb3ef13b46201a54be05d"],["/images/c6_img.png","db9eb681dea0b7911f0b2ba918d86c26"],["/images/c7_img.png","5b9c9e0331aca2a9d47a2730512f34f5"],["/images/c8_img.png","be9107995f185e3bbf7186c4dff69f42"],["/images/c9_img.png","642a2e762b74a28d2426af14f2b864c1"],["/images/calendar.png","86319b08b93be7c8bc47cdba7a169563"],["/images/cataimage/b1.jpg","e4795ce34b4d070d251c37a2ae5e37eb"],["/images/cataimage/b2.jpg","e1a7402c7d111b33d22c187a794e693d"],["/images/cataimage/b3.jpg","c091fe2a8024b2f010911e9af8091147"],["/images/cataimage/b4.jpg","1a2190b3e7ecb404767f029642adb637"],["/images/cataimage/b5.jpg","2683b29be7ea536b2d2c0b428ab87a80"],["/images/cataimage/b6.jpg","8eba752c28594ff5a253a01c0904a4a4"],["/images/cataimage/b7.jpg","9259255b1e1ec36bf92b4f34ad68db7f"],["/images/cataimage/b8.jpg","beaae9e5c735657f2e5bba9eb3deb754"],["/images/cataimage/b9.jpg","7ea8994ee380e84190422ac1b1d93ed8"],["/images/citie.jpg","adea8c4a6fca73e27f5e2aae864dd21f"],["/images/clock2.0.png","0a0f122c7a25262fc02ee99df0ef21eb"],["/images/clock3.0.png","8e04375c183c637b65fb50ed40f46466"],["/images/example.png","aaac9983e5d59f919bf282dcff2edb3c"],["/images/flow.png","adb9dac479e664c3e1b103a2c7fb9517"],["/images/foto17.png","28db4c6608ad1ee6b34238cafab25e5e"],["/images/foto2.jpg","be95b922512d004a61f83c97af3e2602"],["/images/foto2.png","0dc07d4e1b00526a273a89dc8b81548d"],["/images/foto3.jpg","551c0616c92c4ee7cc17dd458b3c46e9"],["/images/foto4.jpg","9d1d9fea759a41afc0061866e400339a"],["/images/foto5.jpg","984f618b15372f37d54f507e6f379f10"],["/images/foto9.jpg","b683fc0b998e80ff8f5a3e45e889807c"],["/images/girlpic.png","ff1e8427ed555af639e6d849f8f648f1"],["/images/girlpic1.png","698e5570e821c3cae643cc9777c2292e"],["/images/girlpic4.png","551882e4b9b6afb79000fd34c0dbf5e5"],["/images/gitcalendar2.0.png","3211a589d3a1d28c8711d095edc760e9"],["/images/headimage.png","332502f36a0297b30cb7969fe6de8451"],["/images/hexo.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/hexoWT.png","c027cc9f5665c7d7ba657e7a4bb40017"],["/images/his-json.png","7d8a71e38ab684107446e5c72c31854e"],["/images/history.gif","0459a3dcf2317253de0b34482880c63c"],["/images/homework1.png","e8d2f64d0785519ea7779016208a2900"],["/images/idea.jpg","5eb08bf6c965588f03c8860f201cac45"],["/images/jiaocheng.jpg","ad0b07db72a1eae964ab067511b756f3"],["/images/juanzhu.png","1296293f4a9d92b65575c2f6a846d79e"],["/images/key1.png","f2a370e02ad6c5a101db20b47a9a0008"],["/images/key2.png","21dc40bbe0377cd9fe85a9cb431c18f0"],["/images/letter/a.jpg","0d4de9f533da8b2de81ccc509657f853"],["/images/letter/a.png","213b394b0800f642d758368779d79942"],["/images/letter/b.jpg","66fee2626ad0a71d42dc6f0d4b2c04a1"],["/images/letter/b.png","581ea16ed4c1d7bbc1c0dca3929051a9"],["/images/letter/c.jpg","121a016fcce1ed141082dc6254f5abbc"],["/images/letter/c.png","3d8cf0fa352d68dde80b3310bd702ac4"],["/images/letter/d.jpg","6e1db729489ebbd94496f2134b18d4ce"],["/images/letter/d.png","c48ca73078c850ff606cad10f11c1c56"],["/images/letter/e.jpg","ff503c208a88b211e598b92e6969d0e7"],["/images/letter/e.png","37fc8cdc838e64efe77305fa30581060"],["/images/letter/f.jpg","429cc37ac2269be8797c969b66a81339"],["/images/letter/f.png","12adae8b53d9e6048dbbeeb3f91cebee"],["/images/letter/g.jpg","0b8098e60deaf670dc1d9fba77714341"],["/images/letter/g.png","575f1073e0f689ae0d84803b8c979f21"],["/images/letter/h.jpg","9002009c053237f1ef6724e8be5f2b37"],["/images/letter/h.png","2e7173749a66cc1d8630e69261e56464"],["/images/letter/i.jpg","431837c21dc08954ee4acb2b0bd1d9e9"],["/images/letter/i.png","37a8a26bace6560ddb9c85a8605da81c"],["/images/letter/j.jpg","a83cac86235866d82053ea127940ccc2"],["/images/letter/j.png","8aad49c7f55d6d365cbbf080e7ecbc30"],["/images/letter/k.jpg","a7bd4a5ab89ecb4ad1d391c73a2c3034"],["/images/letter/k.png","2488883f77a6b77fafaaf02cbca9c319"],["/images/letter/l.jpg","b87d0637d8edd85bbc5a144d8d49faaf"],["/images/letter/l.png","41d97d26f91501634e73da0dbd2d9ad2"],["/images/letter/m.jpg","7a29bfd3c2da75f6a219daa19b4bf01a"],["/images/letter/m.png","bbce5ca54ef802aa23e5a406fb419e9c"],["/images/letter/o.jpg","9f29dbd5dd07fb04e610cd0a8fc83074"],["/images/letter/o.png","8242f141981f606ca698ed32df2a17c7"],["/images/letter/p.jpg","325a87a9fa352c7ed5eaa01f24018b63"],["/images/letter/p.png","8d457fc405de63b537e01226a73d3287"],["/images/letter/q.jpg","57921474cb1e9f4352df281856a10f5e"],["/images/letter/q.png","93255d49876fc4cd9260383bbe30910c"],["/images/letter/r.jpg","0b634e85fe24fea66c9fb3d1eaaf1296"],["/images/letter/r.png","ac4be3c684d8aaf7f875993dd12c4fc0"],["/images/letter/s.jpg","e803c253e88e6577721a63d6929a53fa"],["/images/letter/s.png","7d8e6a7981edc0045d41647b6547e755"],["/images/letter/t.jpg","ef4b9b12431116d53994185248d0e504"],["/images/letter/t.png","da9331bb93c0285bb9ae9b98350d4db7"],["/images/letter/u.jpg","4b5fbe5c3b7414ef99e46dab2b9da71a"],["/images/letter/u.png","693fb63a9f05fee9abf4f8d65380fb2f"],["/images/letter/v.jpg","85f1071ab973e79017eeaf5eb726d0f2"],["/images/letter/v.png","fdcd25e6d19bfa3fe7cf09a9047235f2"],["/images/letter/w.jpg","d39f91c9e1be9ab39ca46218fcc7faaa"],["/images/letter/w.png","2d79b92721fd2dfe4e19d8a57ccf9473"],["/images/letter/x.jpg","e2ce4f0631d5002a79a5930ccbdb8449"],["/images/letter/x.png","c0acbad3e4ddaf59a95ecb6d6509bcbe"],["/images/letter/y.jpg","b2e7b48748a70f0dc8c4445bf9069196"],["/images/letter/y.png","fc61ea05666257f2c50f08918970a753"],["/images/life-cycle.png","02f39ea5c041d45938fda4b50f234cb7"],["/images/life.jpg","74d2d9c5f48ec59e3badeec690941812"],["/images/listen.jpg","9d4f73cd5634f43deaed4f9aca03f9a3"],["/images/loading.gif","ffa0804a5d99e2d5b39e05cda6d6b28b"],["/images/lock.png","301e4d262728417b6f2e008948208e1e"],["/images/magnet.png","4899a924f3de0d19dbe0415128c07d65"],["/images/magnet1.png","8d010eb86ca943e036adaa7de57aee7d"],["/images/magnet2.0.png","54fe576f174d2b6917fef89f40ac5975"],["/images/magnet2.png","293cb414a8ab93b43bde3bebf9cf0cfc"],["/images/magnet3.png","1923148630e2e094ff80bf35aa604c10"],["/images/magnet4.png","9bb4f963ac1c09f02d62525f513f492c"],["/images/meilu/1.jpg","cd67abcc3f543b5c66adc4f9d9c5c628"],["/images/meilu/10.jpg","ac9fb2711e477b5db1c3acb57e899045"],["/images/meilu/11.jpg","364caad6dfc356a3dc630fa067e48e88"],["/images/meilu/12.jpg","274767e5708f79934e5bdbf73eda8f0d"],["/images/meilu/13.jpg","dcab12b84454770b208913db63e825ac"],["/images/meilu/14.jpg","037cdd048284e621f27e17a2c59e8ea7"],["/images/meilu/2.jpg","f6cdb65ae3fad4523b32f5ee38696b60"],["/images/meilu/3.jpg","9e5df3612c2d93bf57313186c954aea5"],["/images/meilu/4.jpg","69ef2d6f4bcd79cf4b4e672b60c6751e"],["/images/meilu/5.jpg","ce81ca16def7613b7ebb368fb554f14f"],["/images/meilu/6.jpg","cafd5b62305f806754a75cc3af8c3b77"],["/images/meilu/7.jpg","b8ae865d386e1e713a6034da6b090c10"],["/images/meilu/8.jpg","afad7a7bf1066c817a8d2e7566bc780d"],["/images/meilu/9.jpg","72f9649f56b564eacf23ce3dacb88029"],["/images/metroui.jpg","5503bfffd450d9ab572b67ea00941571"],["/images/metroui/1.png","79a03b408c19c74eeaa8ff6e17a03f9d"],["/images/metroui/10.png","8309fed71a15c78f2dfa3af1ff75a5f3"],["/images/metroui/11.png","aaf1a007cbae12f93cc2688bace18d28"],["/images/metroui/12.png","0758ea282c3828c47e5c64520ff85783"],["/images/metroui/13.png","12ca7b511927cd4b26e97f3b20908a32"],["/images/metroui/14.png","f44ba7680f7b36df437e2ae2588d0565"],["/images/metroui/15.png","e8927c78b125b805af7aa86fee815ab6"],["/images/metroui/2.png","e604d3c662b996f06f22753ba9ab379f"],["/images/metroui/3.png","664e3b7490f2f95d5547b8ba79a65456"],["/images/metroui/4.png","c0f255344cafc303a1d9c7404da37149"],["/images/metroui/5.png","da2074cdb1298aca826abc1a5c441300"],["/images/metroui/6.png","efef2f087127614b4e03bcbe9a347018"],["/images/metroui/7.png","a4d34b1a2dbe3a58d3a92276880be039"],["/images/metroui/8.png","1d34a626bbaa898a60d4501936bcf962"],["/images/metroui/9.png","0663697c1667b377fe2623bd65e00b31"],["/images/metrouilogo.png","aea81b42d1c2c96440f74cf56ad82e2f"],["/images/news.png","0c14e4a9f87e15a146ba05ae50ce8ee3"],["/images/news2.png","dfdd0e6186d67511bfbd377bcde2013c"],["/images/newsqr.jpg","6431da8c702b7e7c2f3e6d82125d408f"],["/images/nhkimage/2020.08.01.png","af4c55b2ae1d5ab2f56c75a87fcdfdb3"],["/images/nhkimage/2020.08.02.png","c355d41b90f5c65823f96c5f6868ce53"],["/images/nhkimage/2020.08.03.png","fddcedb40d7f28b2ccb90814351ad5c8"],["/images/nhkimage/2020.08.04.png","8b4518ec5a8513f442980ed7167136b1"],["/images/nhkimage/2020.08.05.png","590abfb19334b0c3cee5a005674f2253"],["/images/nhkimage/2020.08.06.png","d469e21100c42435e88f2bdf07f93da1"],["/images/nhkimage/2020.08.07.png","3ca9e2c8b8a09a38423d73cd36e8de9d"],["/images/nhkimage/2020.08.08.png","4420c2d899fe4eb90c48bae0da8418a2"],["/images/nhkimage/2020.08.09.png","df14be338f9c920818dd1daa6aa955ee"],["/images/nhkimage/2020.08.10.png","c4e2ed023cd3dbfd4986add35ca9357c"],["/images/nhkimage/2020.08.11.png","cf562339e57f673d394f3e6cdd1f60cb"],["/images/nhkimage/2020.08.12.png","81dfa179fea3052ddcf73912ea368f67"],["/images/nhkimage/2020.08.13.png","8cf26c2642e7a27cbd86fcbda8bae8d9"],["/images/nhkimage/2020.08.14.png","d88eeb678b3ed3651d597e61957e264a"],["/images/nhkimage/2020.08.15.png","b9879f193867edcffeefce62c9dc7153"],["/images/nhkimage/2020.08.16.png","46cb914aa1d556561897767ec9ff66a0"],["/images/nhkimage/2020.08.17.png","ea1af9645b5cc9cbaafe70a91dd15cca"],["/images/nhkimage/2020.08.18.png","e87e4de39a6f06cf4283a63af92dd8de"],["/images/nhkimage/2020.08.19.png","8001a951513b542a98ce1151be5bd87b"],["/images/nhkimage/2020.08.20.png","4bc8fafa3ecce30d340b1350715d78e3"],["/images/nhkimage/2020.08.21.png","07ad1337e127922abff27da6c672549b"],["/images/nhkimage/2020.08.22.png","b2b5d53ba46015f64048f9d803b12179"],["/images/nhkimage/2020.08.23.png","225af8c0cabe5218ec634d1b8815fd95"],["/images/nhkimage/2020.08.24.png","1d54a484a6e2395aabe9be005cd90361"],["/images/nhkimage/2020.08.25.png","8008ba169cfce0ef2041329cd29b6b77"],["/images/nhkimage/2020.08.26.png","72a2b8094003a54c97a34ea97cf21bc3"],["/images/nhkimage/2020.08.27.png","893407e604804d215c8fef8bcd5f2684"],["/images/nhkimage/2020.08.28.png","b542280b7341759890a99cbd44d822c5"],["/images/nhkimage/2020.08.29.png","620e2e7d4772e39615fd1a88cdf49717"],["/images/nhkimage/2020.08.30.png","f645d7ba2dcb506f9ec6fb9244425ad7"],["/images/nhkimage/2020.09.03.png","c5262f3aa87190e0273383ea1e445681"],["/images/nhkimage/2020.09.04.png","c07149c32aa41c03bc7dac82a713f6b2"],["/images/nhkimage/2020.09.05.png","4e43556e1cb3b7f4d75f0f6127616a54"],["/images/nhkimage/2020.09.06.png","1021d2ae04a7f109404f857a2a7629cf"],["/images/nhkimage/2020.09.07.png","db9827e9f0a4cf1401b559b4644a0204"],["/images/nhkimage/2020.09.08.png","efe1030b73dc1c01f169c3122a194426"],["/images/nhkimage/2020.09.09.png","f6ba3a1c6cdeff88404ebe2a646f2eb5"],["/images/nhkimage/2020.09.10.png","3471b05d02113517359a9e2167befcfa"],["/images/nhkimage/2020.09.11.png","921a541a8bffb1aa436df2eb6db7c99f"],["/images/nhkimage/2020.09.12.png","a51f8ebaddba69bb80f9259a30f17e65"],["/images/nhkimage/2020.09.13.png","0399889200493cd2154ffc407e2bc400"],["/images/nhkimage/2020.09.14.png","eaaf3da69a39ed316b7fc8c4d409bb0f"],["/images/nhkimage/2020.09.15.png","5774959ea4061c9298ea174f0862cc3a"],["/images/nhkimage/2020.09.16.png","0c5a00f74020740fda589c02e4b3f917"],["/images/nhkimage/2020.09.17.png","b5aef734e3a7db4862ca3fe4e6769dc2"],["/images/nhkimage/2020.09.24.png","5982a7b3843f4ae43b2b4bc4b0c577d6"],["/images/nhkimage/2020.09.26.jpg","c6415af781fbdd36fdb034f74646129b"],["/images/nhkimage/2020.09.27.png","27aa6f6a8d5534ccd99cff261dcd9eb6"],["/images/nhkimage/2020.09.28.png","0f4318d1ff17a33de364432a1c44b5ad"],["/images/nhkimage/2020.10.09.png","6408d9f7e66fdeba8b9207939a08cf8d"],["/images/night.jpg","7c57432e644d24d5738a56459bea0e7e"],["/images/notop.png","d25c272e5ce312a880e04ce8a0b27683"],["/images/pasted-0.png","552608d8f6e39369aa30c6e332a32826"],["/images/pasted-1.png","baafdacee93c99e99418aaedbf524fda"],["/images/pasted-10.jpg","395cff6f64ab5df19baa3572ac98e541"],["/images/pasted-11.jpg","56e5df07c96634638abf7995b25c81ab"],["/images/pasted-12.jpg","61b3f803b85ce3640d7a9ba7efb9da6b"],["/images/pasted-2.png","2f410e53c811f92a6135f48857776f5e"],["/images/pasted-3.jpg","bb5717e691e87355e7d63a5f3a87ae62"],["/images/pasted-4.jpg","10041d0e3567b24b81222ec5075d6492"],["/images/pasted-5.jpg","ac5047a4b48c6cdaee86fa1863e33904"],["/images/pasted-6.jpg","1556ae8d3ad5713d60237ee4d10e81f0"],["/images/pasted-7.jpg","913fde1686587646ddc663bd810cc81d"],["/images/pasted-8.jpg","fc83268081fb4b6b6ecb1ffa1ec5af7f"],["/images/pasted-9.jpg","25e0fa3496591501f5c29d0b802b77d2"],["/images/pet.png","2b8c121909497e57057478856fe48a94"],["/images/pet2.png","dfb1d6a17b527ccc0c600e6ad31f55e5"],["/images/pokemon-js-master/pokemon-js-master/README.html","087fc94cb750eefb752e33c7815fad4a"],["/images/pokemon-js-master/pokemon-js-master/fonts/pokemon-italic.woff","78e86827d84b43c015a2f4c2c6a373dc"],["/images/pokemon-js-master/pokemon-js-master/fonts/pokemon-italic.woff2","6eed2c3b876039e9332617cf11051bde"],["/images/pokemon-js-master/pokemon-js-master/fonts/pokemon-normal.woff","09442a9708ccafa61a894d703b10a45b"],["/images/pokemon-js-master/pokemon-js-master/fonts/pokemon-normal.woff2","f82c92d44c94dcdacf907a1be4fac138"],["/images/pokemon-js-master/pokemon-js-master/img/ball_empty.svg","71b5bd4f59def835f94989825d23a737"],["/images/pokemon-js-master/pokemon-js-master/img/ball_full.svg","7e11059b84cef189cbae0694b31e3161"],["/images/pokemon-js-master/pokemon-js-master/img/blue_balls.svg","86a4983e08483856c2b69ba22b3b6605"],["/images/pokemon-js-master/pokemon-js-master/img/blue_front.svg","67d4551115bd9619421c8b279a02da21"],["/images/pokemon-js-master/pokemon-js-master/img/blue_line.svg","99e3256fe421cea565eb6c8e238b4e1b"],["/images/pokemon-js-master/pokemon-js-master/img/eevee_back.svg","be41cc88ba29dffed133934f3fd81092"],["/images/pokemon-js-master/pokemon-js-master/img/eevee_front.svg","67e75860167c118c80b43e9bc77f8dd1"],["/images/pokemon-js-master/pokemon-js-master/img/frame.svg","9ba744fd242d76220503200dc263d225"],["/images/pokemon-js-master/pokemon-js-master/img/hp.svg","1b9572b00909d59dade3c5d9c7484a94"],["/images/pokemon-js-master/pokemon-js-master/img/level.svg","ce8d20ff7ae3e66decac50b78ca3b86b"],["/images/pokemon-js-master/pokemon-js-master/img/marker.svg","3b8296fb02592d99e7a7aa29b1d41742"],["/images/pokemon-js-master/pokemon-js-master/img/pikachu_back.svg","41f62334dab4ff5ad455bf3792243611"],["/images/pokemon-js-master/pokemon-js-master/img/pikachu_front.svg","496206572029bcfaebfaed794ed1d015"],["/images/pokemon-js-master/pokemon-js-master/img/pokemon.svg","f015c9582ea62070300062fe2022dd37"],["/images/pokemon-js-master/pokemon-js-master/img/red_back.svg","1e4dc80c13eac754369017dbd19c9086"],["/images/pokemon-js-master/pokemon-js-master/img/red_balls.svg","35d2d97a11a79232ddeb90e052af95cc"],["/images/pokemon-js-master/pokemon-js-master/img/red_front.svg","b4fc7ab1d0a1254c453ee3ebc28db79f"],["/images/pokemon-js-master/pokemon-js-master/img/red_line.svg","fd9e3b97a6264fc5e5f398ce854d24b7"],["/images/pokemon-js-master/pokemon-js-master/index.html","10b5163f8f9e115bb0e53f212e95588d"],["/images/pokemon-js-master/pokemon-js-master/jquery.js","ac5017a6c6a77a3db6f989b281084b6f"],["/images/pokemon-js-master/pokemon-js-master/main.css","3e4465c57f14ab0e02b5b2a805372c0c"],["/images/pokemon-js-master/pokemon-js-master/pokemon-min.js","26e1d8483c8d86ab39054a609106aad0"],["/images/pokemon-js-master/pokemon-js-master/src/pokemon.js","f43de536cebe95ac1b19b905cbc9d889"],["/images/pokemon-js-master/pokemon-js-master/src/promo.png","abf2d1d338c0a9080c1a9eab7b35e6e0"],["/images/pokemon-js-master/pokemon-js-master/src/screenshot_1998.png","046079a29e3df9b95bde3c3c58647d43"],["/images/pokemon-js-master/pokemon-js-master/src/screenshot_2014.png","828e18e5add8f29486ba1945de2bfb7f"],["/images/pokemon-js-master/pokemon-js-master/src/screenshot_2016.png","69dbbe3b5b622cdce0fa82aca162129a"],["/images/ps1.png","0917ba91f21b6944dc08d35c41a326d2"],["/images/psb.jpg","6a27c58337875c776af0a7667598b401"],["/images/pubu.jpg","c5f6319fe03fb1fa52bb67097b1f22f7"],["/images/quse.png","7cd1ec12b804305430cb4cdc09c7a893"],["/images/rain.jpg","9c26acc44c692b6a63e134be07b07c18"],["/images/rainsmall.jpg","e8c91c40bef224fc5a3942bd0d007b84"],["/images/shezhi.png","281bf545f6a4024e2d0b7120bc398a21"],["/images/shuanglan.png","22daaf2fe9ea7d8673a3dd69d23f0294"],["/images/shuo.png","9cce9df6e32e00e49471b9a9f089f6aa"],["/images/shuoshuo.jpg","c5752c104cddc0884d3f50b4dca01322"],["/images/soul.jpg","d97b4099c0728ff6123d006fa62db86e"],["/images/study.jpg","a9b1cf95ee6bd9f3913e8ec6a6a6f44f"],["/images/tianqizhizi.jpg","dd48d78b4eeaaa52578352f9ef570b14"],["/images/time.jpg","b8513da2d044befd353231d3e51db22e"],["/images/vue.png","0d2b5680bcb76df1333b85fad58634a7"],["/images/vue1.jpg","8cbf18302c6fa72e2a40d0cca0832213"],["/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/03n.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/04n.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/images/weather/09n.png","512894b4a127a42e060e237674b8d145"],["/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/11n.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/13n.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/images/work.png","e521cf5b834292fde1c50e0a0f5802f9"],["/images/xiaoguoyanshi.png","994a3b710d36df0a4630cd9a768c7f7b"],["/images/xiaoguozhanshi-m.png","1fefca18214fc4889d1bb76b81887c9d"],["/images/yao1.jpg","9dfddaf8c121fc8db788a87d133d6376"],["/images/zfe.one.png","b41f689341882058ffb28c4cee499bde"],["/images/下载.jpg","79c7247da282569a05bdd46aa43b93b0"],["/images/幻想终结之日.png","0025c4d3973bdfedb80db3f78c59fa47"],["/images/时空战纪——游戏建议及意见①.jpg","1337457f14a8dffee66d94f8915b54ff"],["/images/简历.png","d70507ee4615c9e324578c0d777e6855"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","85df6d33364633a4a29dfadd7e829d15"],["/js/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/APlayer.min.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/airvisual.js","71cf86bfd452ca01d92438d8266416ee"],["/js/airvisualapi.js","6931bebe1696688d109963187fc2eace"],["/js/artitalkkey.js","ad2c74320c63125a36319659657d2886"],["/js/background.js","94c8410b174f58594cf81ec99054968b"],["/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/js/calendar.js","a58e02711cc6dec4dc04257e555b8923"],["/js/catalogMagnet.js","0387c6ad152e7a6076cceffc7420be77"],["/js/clock - 副本.js","405186e7a9d73221d2d50c0dea2852d0"],["/js/clock.js","2d97ea3ca1d25f0b082d73ae28eb474e"],["/js/color.js","3730bb4f7b185e6f5130ac28bace968b"],["/js/dan.js","6b6ae6b7f1b42dd4857541f43b2bb733"],["/js/echarts.js","dc1227b1eba1ba47fd185a387d0a7d37"],["/js/gitcalendar.js","640f4547d3207ea6d83fa913426d3b46"],["/js/gitcalendar1.js","fadfa8a42272cd322118653dca512a7a"],["/js/history.js","20459f7db325e597e64903f4c0d19306"],["/js/historyroll.js","a3e9ac376106816c50a61f9f4306d671"],["/js/jam.js","462c07d3b2e0f20394d994bbcfae37cb"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","f5b2bd10be1e09516c539afa2197a8d7"],["/js/mywork.js","6b3a7aa9476894280703396b161b3b52"],["/js/news.js","b040bd95378e036bea949044963499c0"],["/js/rain.js","f656dc28e4ab5c3f8414d35f683278c1"],["/js/rainremove.js","ceacf82842b101f7e54a2aaf5f4bb9cb"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/shuo.js","1076b1ef51358cc11b6ff3bab25e15d8"],["/js/sortable.min.js","0351fbccf2faed49062495990e32a14f"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/js/vuegitcalendar.js","664c0f121af9131af267c1434225b5e4"],["/link/index.html","bb1af12154ba0e8b3706b3f31d7840dc"],["/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","224dad4b8111447e74cbaef08e3a85fc"],["/page/2/index.html","a230b9f382e65bc40905da04cebbf81a"],["/page/3/index.html","8de382c7a6229d61a927dc6f7e609e58"],["/page/4/index.html","4085241bc94354b606b6c7312fbcb76b"],["/page/5/index.html","7c389d605e5895944356996da4e47777"],["/page/6/index.html","92d3038601f4b4f14d3180e7ed54ed1f"],["/page/7/index.html","980efdf18cad73cb3475f956e5cec254"],["/research/index.html","f66babe973524fd862e63ed99cf49942"],["/sw-register.js","a5f78004e435af00cec352c4a8d1c732"],["/tags/Butterfly主题/index.html","3950c3e92fda0ba82746d6aebb79e96b"],["/tags/DIY/index.html","87f483ae71f383f711803010567704b4"],["/tags/ICT/index.html","c821e08d72e792280f3ccd0071351a9c"],["/tags/NHK听力练习/index.html","92e740592f0383ddcd5c8cd50f8a07da"],["/tags/NHK听力练习/page/2/index.html","d970609cbf6d13e69066f18bf87e7d1e"],["/tags/NHK听力练习/page/3/index.html","dc46b43439a23df34e3e6e06fab85e77"],["/tags/metro-ui/index.html","13ae9abd3b7666bcbed7fa66e46eec71"],["/tags/vuejs/index.html","529c7127937cfd9885e559964da0751f"],["/tags/お盆/index.html","78bca968395359310dc7e398a5cfd1c1"],["/tags/世論調査/index.html","818e91b92a1970a531577f92d5787810"],["/tags/作品集/index.html","055e02b064f0083aa2ddbfeebeaf1ff1"],["/tags/农业/index.html","8bcd327407a04bc0f5572565b53404de"],["/tags/历史/index.html","d5ee2b9b280c0a17d504c4afe61b7d0d"],["/tags/営業時間/index.html","0b17b28ee15a2f52cb62e16305e41089"],["/tags/国外政事/index.html","59415bd91cab5d784d5d5eaaed819434"],["/tags/地震/index.html","1d3a9735e0224afda017c5e573751906"],["/tags/外国政事/index.html","67e7e4da0ca91e760d09a9f9648e3a74"],["/tags/天气/index.html","d9d0231132ea50c50488bf54d769b7ea"],["/tags/奥运会/index.html","901c2e81c84912cbc30587a07a82d11b"],["/tags/学习/index.html","d3df433a6eeb10a68775466b37f6eaed"],["/tags/学习/page/2/index.html","7264f8537dfdd4f32a948f5e587aba5e"],["/tags/就业/index.html","d7be0c09916d75097fa6a4625ce17593"],["/tags/庐山/index.html","301b78b77c2bae12d3504befdc864f9c"],["/tags/座礁/index.html","651291acc94ce595388e66e25dba69ee"],["/tags/政府/index.html","3a63f9f8317a73fcd219f89db8751878"],["/tags/政治/index.html","d6f077979d4037475366ea1db9a19820"],["/tags/教程/index.html","2c76ad499b78bbb3a3a9ab4fa60a6fff"],["/tags/日本教育/index.html","7fa3789952c6fe7371975ea5e04632dd"],["/tags/民生/index.html","d154857be93a7ed41830c07fbbc8ecca"],["/tags/游戏评测/index.html","67dd114ee77df26e7ba64ad08519832f"],["/tags/游记/index.html","5e8283143d08de8341ec36f79c0c3bde"],["/tags/生活趣闻/index.html","c50dffb246e22c54f7d1781e483cb1c6"],["/tags/科技/index.html","2443b4e87d6c0b9e0c26cdf6f187b51a"],["/tags/经济/index.html","1fa663f86e65292bf07aac228c003372"],["/tags/网络教学/index.html","f8bd66f71b4c56fb2ec7124d07df116f"],["/tags/舆论/index.html","09137b477dbf4b55ab3cd70ba5204f41"],["/tags/虚拟现实/index.html","52e3fe04c55c34a776172a1b6527facf"],["/tags/随想/index.html","d018000dc46cca09a1c3f3efddc9f0e5"],["/tags/障害者/index.html","3a39d36fc2dd97719e6d5f267a59d37f"]];
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
