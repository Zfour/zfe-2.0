/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/05/20/2015-05-20/index.html","1659d92e679484433d6f37bc254ea953"],["/2015/06/16/2015-06-16/index.html","582d07b0ed153748edf5c76355ddfb5f"],["/2015/12/12/2015-12-12/index.html","36cdadb1b629a41c441abadf882cd5e7"],["/2016/06/08/2016-06-08/index.html","afc5b902e3e027a74bf2862c92f1b368"],["/2016/12/18/2016-12-18/index.html","43da800ffdae4a23c73c7f982356554f"],["/2017/02/17/2017-02-17/index.html","23237cabc469d1f2e73cde4bb65f304e"],["/2017/03/17/2017-03-17/index.html","0b95fed30d7cf37ae19c45c80a168974"],["/2017/04/06/2017-04-06/index.html","807ec65b28da046e9db4461c2e214e05"],["/2017/05/17/2017-05-17/index.html","090239bc07287ed566bcbc005036f930"],["/2017/08/15/2017-08-15/index.html","97e4418e424c8c3e94d72bc627d53684"],["/2017/09/16/2017-09-16-1/index.html","faa9907e5fb78c4a326ae799a74e331e"],["/2017/09/16/2017-09-16/index.html","a3ca10322f932bf04b9b5d0e04023fda"],["/2017/09/21/2017-09-21/index.html","4dfd44023485d843b5712a790af3b45b"],["/2017/09/23/2017-09-23/index.html","2acf22e9f17b7276de48e473deb595f1"],["/2017/09/26/2017-09-26/index.html","244b02508df7f49ebaeaf2ca334bd21f"],["/2017/09/27/2017-09-27/index.html","af5b74eb28a1c35244a9f7e3d4304c6e"],["/2017/10/04/2017-10-04/index.html","caffdaed9005a798faf4ebf9892ab8e5"],["/2017/10/08/2017-10-08/index.html","cd4f3703f25fd19dd10e1c2d8fd380d5"],["/2017/10/09/2017-10-09/index.html","dc9ab6d659e0daeb3586399a8fbac55c"],["/2017/10/15/2017-10-15/index.html","d3af50adb46a922dba95c232cbfb6221"],["/2017/10/19/2017-10-19/index.html","3c842d9ff5948ef52d9ca57e8b738d18"],["/2017/10/23/2017-10-23-2/index.html","0b88ef450412c733c25ffbc35bd259f6"],["/2017/10/23/2017-10-23/index.html","0e1c5e5aad724dd2015d70a8340059e1"],["/2017/11/08/2017-11-08/index.html","56ebce3c96d500f613937cf1cf2009ba"],["/2017/11/12/2017-11-12/index.html","81702c0f84d515430524c9ce9a6b5117"],["/2017/11/15/2017-11-15/index.html","6cb32492af3ef412d07338acca8ff24b"],["/2017/11/27/2017-11-27/index.html","03d9d42702ee33f21305574a4f78f8c0"],["/2017/12/06/2017-12-06/index.html","f286928a667afee82f2e2917fee46a71"],["/2018/02/12/2018-02-12/index.html","83b2f87141d2ef8f3e6ecce734a3352e"],["/2018/03/26/2018-03-26/index.html","79e9a7ea30a206e02ba98159de90b93d"],["/2018/04/02/2018-04-02/index.html","f1873e7bb2b9748000b4937e82564cf6"],["/2018/04/24/2018-04-24/index.html","633bb5c0e55c3afe6c7550be77580757"],["/2018/05/18/2018-05-18/index.html","9c06a482b8a743decc3a8ed0178ff58d"],["/2018/05/23/2018-05-23/index.html","a2ca664b484ca98c4e3edaf91dd38763"],["/2018/06/08/2018-06-08/index.html","ef66d1b8103ef5432527ca40ed0a7b6b"],["/2018/07/01/2018-07-01/index.html","aee22eb2c85ed048a8322b99cf82adb9"],["/2018/08/30/2018-08-30/index.html","0ede131b8c317e57ecf8ffd3b8737025"],["/2020/07/20/2020-07-20/index.html","a165d07279ef7c326ef9beb44bf80ff8"],["/2020/08/01/2020-08-01/index.html","908eef8be23656d5ca7d7cfa898488a2"],["/2020/08/02/2020-08-02/index.html","0470bb8d69d7441ea6211c0689470438"],["/2020/08/03/2020-08-03/index.html","f89b79b6b093d08ba761f9a4d62b4f4a"],["/2020/08/04/2020-08-04-1/index.html","ffc85a9c0d394ef1f0e7f3dfe7208424"],["/2020/08/04/2020-08-04-2/index.html","5575745e79c4fa2bb210ebb578342283"],["/2020/08/05/2020-08-05/index.html","df53880635ebfc69f0646ff7725a70aa"],["/2020/08/06/2020-08-06/index.html","74bc1149421723a393726a7f96074760"],["/2020/08/07/2020-08-07/index.html","86a95a1983cef52f431b51bcb08d4cb4"],["/2020/08/08/2020-08-08/index.html","7bd9562b043f1ac6c5764717c12f1714"],["/2020/08/09/2020-08-09/index.html","5225c2ec4e53561cb8403345e263c72f"],["/2020/08/10/2020-08-10/index.html","2d0e892a287ffd56c30233c2b5f08587"],["/2020/08/11/2020-08-11/index.html","ba99b9ca54e259edbd2c77386b105c75"],["/2020/08/12/2020-08-12/index.html","697eb8477b0219d08e8188b18838911a"],["/2020/08/13/2020-08-13/index.html","0e3339dc78a07dcced0895cc3d8eb11e"],["/2020/08/14/2020-08-14-1/index.html","7fa62e5a2cdcf9d621c785f535b11f52"],["/2020/08/14/2020-08-14-2/index.html","78289738b06a5109d2b430aec44b3767"],["/2020/08/15/2020-08-15/index.html","a6a8f504709dd0f64e18b33408108405"],["/2020/08/16/2020-08-16-1/index.html","7aeff4bef2e3795f6efd3c4a66a7d04c"],["/2020/08/16/2020-08-16-2/index.html","6d8ff35a57bb086f013d5aec3e5f7761"],["/2020/08/17/2020-08-17/index.html","8672148fad5b531ad413471b06c156e1"],["/2020/08/18/2020-08-18/index.html","be8bfdbff1314fa61e59c522987ce8aa"],["/2020/08/19/2020-08-19-1/index.html","1c3e6009763c2b3f5ea148a6a2d97347"],["/2020/08/19/2020-08-19-2/index.html","f5d583e4c89db42aa24241c3d4a0e363"],["/2020/08/20/2020-08-20/index.html","f316bc4ea4a11a3b7679b5a4c822ac3f"],["/2020/08/21/2020-08-21/index.html","86d0c00b7e7ed2e6239205c0dc3b18e1"],["/2020/08/22/2020-08-22/index.html","b4c87905ef8cbc867dcba0f7587bb796"],["/2020/08/23/2020-08-23-1/index.html","46863445f4811346b412bf084e650f41"],["/2020/08/23/2020-08-23-2/index.html","5f635861849f8757b2f6fc5ea3d4f32e"],["/2020/08/24/2020-08-24-1/index.html","80fe022ec93c55f3b2c10162a2a59976"],["/2020/08/24/2020-08-24-2/index.html","5bf3c1819a55bc105a40a89b9f790681"],["/2020/08/25/2020-08-25-1/index.html","6b3386bdfb747f7771c7b4af103c483d"],["/2020/08/25/2020-08-25-2/index.html","48a29ab3bba8f2e1acbfb5adb35db810"],["/2020/08/26/2020-08-26/index.html","6eca35862ec6cef617b6ad77320082d8"],["/2020/08/27/2020-08-27/index.html","0af31b61adca1ecd3e1edb614773cbec"],["/2020/08/28/2020-08-28/index.html","95c607dde163c3a8de7dc47f9b5bcff5"],["/2020/08/29/2020-08-29/index.html","ad870da54f8fe286e3bbf2d25fdacf65"],["/2020/08/30/2020-08-30/index.html","372a90c24eb610ca16fd543943fd7b29"],["/2020/08/31/2020-08-31-1/index.html","e80b9f8b993acf0baf7668e8229acac1"],["/2020/08/31/2020-08-31-2/index.html","9d28a4f1de73e4371b2edc1a0c35dc3f"],["/2020/09/01/2020-09-01-1/index.html","addacac78111549524d685082ef751a4"],["/2020/09/01/2020-09-01-2/index.html","5f578d6b9215ae04becb971cddea92b6"],["/2020/09/02/2020-09-02-1/index.html","2547034bedfff33c39edc2681e4b9807"],["/2020/09/02/2020-09-02-2/index.html","908d8daf6b5a73f093031670b1ce3409"],["/2020/09/03/2020-09-03-1/index.html","42e8783ce9a41c433fedb44d546a2bbd"],["/2020/09/03/2020-09-03-2/index.html","b8956dcbe3bfb324cad0d1294e9df0c2"],["/2020/09/04/2020-09-04-1/index.html","5538017c81b2761a46ffc78c0c56bbb9"],["/2020/09/05/2020-09-05-1/index.html","3e6c3b6ff970541d73546cfc0d02f957"],["/2020/09/06/2020-09-06-1/index.html","258976c4ad6267c5d5d5ebcbf17364a5"],["/2020/09/07/2020-09-07/index.html","b6e97db88816152263e1ec9f1c3b9eb7"],["/2020/09/08/2020-09-08-1/index.html","77f48ed50bbbcdcc5f69ca92a3b79098"],["/2020/09/08/2020-09-08-2/index.html","6d1a99f630a1b65db97ee33f70e413bd"],["/2020/09/09/2020-09-09/index.html","8d67d4d664ddcc1bab5de5e5849eba85"],["/2020/09/10/2020-09-10/index.html","662b2f194f51787d72801f7646bab3ab"],["/2020/09/11/2020-09-11/index.html","2e691f4ce3c82d012acd2715a6e8caf4"],["/2020/09/12/2020-09-12/index.html","9504794c1d2fd79ec4ba10c8e4f96717"],["/2020/09/13/2020-09-13/index.html","7ebbff9d6473577704c19249f4544811"],["/2020/09/14/2020-09-14/index.html","5bfb423656110e21d79ea3a9f35da789"],["/2020/09/15/2020-09-15/index.html","a9c2eac50c4f47e67c6263d18d37b2aa"],["/2020/09/16/2020-09-16/index.html","20262dcc2813771d06c1b44877ed193f"],["/2020/09/17/2020-09-17/index.html","8251143581265d4890d8262077c303b3"],["/2020/09/19/2020-09-19/index.html","12e4d2c11d332f6155304801f711b9da"],["/2020/09/23/2020-09-23/index.html","0b752fb276337d5ec61a45ebcf0e4c9b"],["/2020/09/24/2020-09-24/index.html","9c707e50be0ebfb449841bcfa038c087"],["/2020/09/26/2020-09-26/index.html","4a71c0926cb37cf9b6f286f0f37fa928"],["/2020/09/27/2020-09-27/index.html","2406fd02c214b08071920c4d4a9031c4"],["/2020/09/28/2020-09-28-2/index.html","9bf7c812ccbbb31a5a10611ccb12e97e"],["/2020/09/28/2020-09-28/index.html","c4419624e40b1a382d2cf727b027272d"],["/2020/09/29/2020-09-29/index.html","e6c43dd41c81d898c1ffdd1945a50290"],["/2020/10/03/2020-10-03/index.html","83c817bbf61108fbec5400f6ce6e5b7f"],["/2020/10/04/2020-10-04/index.html","482d8402961d16ac18ad12e09dd948b8"],["/2020/10/09/2020-10-09/index.html","eec3ec9da81c75ce1cc70b44efc1d357"],["/2020/10/10/2020-10-10/index.html","54746bebd7415a368e2e9ef636882381"],["/2020/10/11/2020-10-11/index.html","1657a9a574c79cfe1f38f46335299f56"],["/2020/10/12/2020-10-12/index.html","1359f7342ab8104c8b182090e2ff4053"],["/2020/10/13/2020-10-13/index.html","4d185a3919c3bcd5e5f50cf84b09b699"],["/2020/10/14/2020-10-14/index.html","d19ee8e2d7e77d91f8e7e242e1ec93b1"],["/2020/10/15/2020-10-16-2/index.html","a3da35ebfb7851291689a8d0b325fa55"],["/2020/10/16/2020-10-16-1/index.html","15313d9858606d2f19456b98e6a785e2"],["/2020/10/18/2020-10-18/index.html","1a8b22ac26e05327b8cce7b01e402cb1"],["/airplayervisual/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/airplayervisual/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/airplayervisual/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/airplayervisual/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/airplayervisual/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/airplayervisual/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/airplayervisual/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/airplayervisual/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/airplayervisual/index.html","409e97f4989628ef425e42ae1f9fcded"],["/airplayervisual/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/airplayervisual/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/airplayervisual/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/airplayervisual/js/jamsetting.js","7927507e0080ddf55c6d8b5f526bd942"],["/airplayervisual/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/airplayervisual/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/airplayervisual/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/archives/2015/05/index.html","97deba707ffd3874df26b478de3220fc"],["/archives/2015/06/index.html","e732183639da410e889c21a95af7717d"],["/archives/2015/12/index.html","89ad44fc3fd97f300475d1750f580b56"],["/archives/2015/index.html","1be169dc2126c42fbbd0e696074fd54d"],["/archives/2016/06/index.html","488117a9f64e7e71c7b7e1f3e90fb205"],["/archives/2016/12/index.html","1a1dc8854381bcef1a751edad2f5f672"],["/archives/2016/index.html","4af8c7ef739affa0b724e6038428e4f7"],["/archives/2017/02/index.html","ec532b72398d5fbbe571a25917161d0b"],["/archives/2017/03/index.html","a1c10030f5a32b079641c702643881bd"],["/archives/2017/04/index.html","0a4c10db4f6e2c399f2489c6da1c4dd5"],["/archives/2017/05/index.html","c0e6b205149f3235f7ba8ddebf9b134f"],["/archives/2017/08/index.html","92c5c9dc3a361f7818289c1e29b331ab"],["/archives/2017/09/index.html","c87120ca0d1e478d0bbf41f84fefbdb6"],["/archives/2017/10/index.html","86792296a64328f493eaefb7c4b949fc"],["/archives/2017/11/index.html","11d7ee9e89e86572b9be7b8ebb7b0ae5"],["/archives/2017/12/index.html","8c2e4b2ea473484c6f7a84a6df104271"],["/archives/2017/index.html","fa0ae178ec55b3768e7a9a1d641c323a"],["/archives/2017/page/2/index.html","ee610c3f320c1b83f8cbd5f993765d21"],["/archives/2017/page/3/index.html","4e20ab1b71b13615bab212af28affa7b"],["/archives/2018/02/index.html","eb1760b2fbb1b4bc552a87412a2305df"],["/archives/2018/03/index.html","5c232a6bcfe99d264c6ea45f49bcf37f"],["/archives/2018/04/index.html","1d9206eed07356c5b0fb843808b2bd6c"],["/archives/2018/05/index.html","bddbe7c06ddf850f54199de498e82719"],["/archives/2018/06/index.html","1d4ee7613a8e856da80ddd2a9a842a8b"],["/archives/2018/07/index.html","38dc0ffe0bc0ce549431e3f89d47ec70"],["/archives/2018/08/index.html","f02b2fe364829a3c538478ee832c35a0"],["/archives/2018/index.html","12617de4a015e41eaf9647d673d6c4de"],["/archives/2020/07/index.html","d3f1993533bb3fe80bc41c87d838e065"],["/archives/2020/08/index.html","ad23df553ae2833842cacdcb93722636"],["/archives/2020/08/page/2/index.html","9c778fa00a584f80bdf450e66c46d92a"],["/archives/2020/08/page/3/index.html","12708c387f44d1222e7e375255cfabf3"],["/archives/2020/08/page/4/index.html","bb62614780819bdb6093d985e36ab603"],["/archives/2020/09/index.html","51df6c543deaf3dddd7735982e2ea785"],["/archives/2020/09/page/2/index.html","afa4d21ac462d8c10af5a19cea9a9b4b"],["/archives/2020/09/page/3/index.html","7d24c8c7c6c83cf4bd1f14bca683014e"],["/archives/2020/10/index.html","a9b778e9e7005d87e219b0c2a614cd95"],["/archives/2020/10/page/2/index.html","eee38d8bc86679651305e28bc8695fd8"],["/archives/2020/index.html","80d1bf537d1deaf56f68b1998cbe6d1d"],["/archives/2020/page/2/index.html","1dc0354b84711b35b256a8b398a2b372"],["/archives/2020/page/3/index.html","f1f8ed8e55114fa0c599df75ef0bc7d6"],["/archives/2020/page/4/index.html","a86a98adf074b4bc4605db9c058d8a92"],["/archives/2020/page/5/index.html","740a019b8251a6780fa7426170cefdb0"],["/archives/2020/page/6/index.html","4096a5e5b3c39f4c2aa8cc8d02307b0e"],["/archives/2020/page/7/index.html","17cb3a278e9a6cd40a0750759baba305"],["/archives/2020/page/8/index.html","52bc2042688cca6b4fe7fb6405777672"],["/archives/index.html","bbf2311cfd073c204dae2dfc4d47e3db"],["/archives/page/10/index.html","7955f2d833e17d4d49ca0f60cc1d7363"],["/archives/page/11/index.html","f80235c53c66911d3c9a3724818a629c"],["/archives/page/12/index.html","1f9b029a2fd4267879fc2d204b3a37e1"],["/archives/page/2/index.html","f24b9e1be87df785e6c663c30eeb8e35"],["/archives/page/3/index.html","c6bd28f747fa1e4e6d14b5a9fd97af8d"],["/archives/page/4/index.html","eb9f153e7d49de4f40361c3635d28178"],["/archives/page/5/index.html","3972c841d994a569e897d543861a53b1"],["/archives/page/6/index.html","9b92d24eb99e53fbdd269fde272283a2"],["/archives/page/7/index.html","c634fcb406100e1101359b55db220ad7"],["/archives/page/8/index.html","31e878955b2cf7354164cd6fa680b05a"],["/archives/page/9/index.html","a139ff7568945ea8752b39eb1d94263e"],["/catalogtest/index.html","1744259b446f6254a547819542240e60"],["/categories/NHK听力练习/index.html","cb0bec0822968a2ff1542902672011d6"],["/categories/NHK听力练习/page/2/index.html","2ef4820648571fb08f48033a77caeb5a"],["/categories/NHK听力练习/page/3/index.html","3afa29ace1b7fc7cb9cc34c9ea2442ff"],["/categories/NHK听力练习/page/4/index.html","369cf931767078537d1c504b7d8f58ce"],["/categories/NHK听力练习/page/5/index.html","0d51e6a9154c6c5ba60848b9b9595f04"],["/categories/NHK听力练习/page/6/index.html","2911f49b8031530695122a6cf3ba23fe"],["/categories/vue/index.html","73f00c0deb1d11ef4265b50fc1e0b305"],["/categories/作品集/index.html","12a14f832e2e1c892adda76caa488247"],["/categories/作品集/page/2/index.html","b61fb9aadf2e1f7b860d27f0ffe9463a"],["/categories/学习/index.html","9974155e8cf9303dc4a67cf20d9da3d6"],["/categories/学习/page/2/index.html","ec4e27ed1a49085ba000c66d3501079e"],["/categories/教程/index.html","47112d6f69cf4a35835dc48f0340e214"],["/categories/教程/page/2/index.html","e47f459b64eced07ee33045a87f5da53"],["/categories/游戏评测/index.html","57a554576f68e2802e013dfb5357209e"],["/categories/生活趣闻/index.html","3d0de310058a0a0f22b96cc993388d64"],["/categories/随想/index.html","0a8c08862ccf2ae1bf69d53bc204482d"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/addcss.css","d20fc732e0cc7996bd82c5170b7aaa86"],["/css/background.css","d013642f5988333ece3b04912f099111"],["/css/calendar.css","0090a32d2a61d42c5bfed254bfba078c"],["/css/clock - 副本.css","65602c2385c7eab42ee3804cd6ee0a5a"],["/css/clock.css","9db53e3bffb704c740aa83bddaf8b999"],["/css/cursor.css","f514da9c81fb3fcb4f7e9038dfa30874"],["/css/danmu.css","2a5b914a9592bcd353425c6d5fa7af8e"],["/css/index.css","a830cf7dafed0e1e03142b35ae00f2a6"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/loadingline.css","bc1ee020a6a11fea17b915b97e6978bf"],["/css/shuo.css","8db924024099e925c53d5b3dd22f83c6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/html/calendar.html","bddcec1edba7f4c49fe5cd75f8cdf5b2"],["/html/shiyan.html","397fbc91f73a861790783890428c1c17"],["/html/shiyan2.html","8761190c408646ca3ef4d1662c45535d"],["/icon.png","8ec68de45d18642ba9baf2447e62f476"],["/images/AMJ1.png","d27a6725d1aaaf5324248da4312ab6c2"],["/images/AMJ2.png","00e22eba5901e5bd674e42228cd5bd26"],["/images/AMJ3.png","c8c9ea6348dfcad3a641899d5b587431"],["/images/FOTO1.jpg","4b6f100861908e2c7044cffbdb4a0c1a"],["/images/MVVM.png","ea5a002ee2f85c71a0db51d5adb5de19"],["/images/UT.jpg","367f4e432f9db55a92b2a290c4b0a476"],["/images/UX.png","a183974e958d41d1b6acec70bb7ea00a"],["/images/WindowsTerminal.png","8ac29cb56b8a1768cf7de071e9f1ae6f"],["/images/air-w.png","c1cc32f9d3e17551ca11a7d18a0b533a"],["/images/anzhuang.jpg","912b2489957f8344406edc5e5cebe5fa"],["/images/api-setting.png","2c0bb074390779721cba009e96c5417c"],["/images/apikey.png","1f31121b190eb1f990bcc3e27524bc03"],["/images/b0_img.png","43fcaa3f8b394ca5be957f4b860800db"],["/images/backpic1.jpg","86a6fa88167feb338fbf1a4e9057114b"],["/images/c0_img.png","34397085b4d3349034f9b167469ac626"],["/images/c10_img.png","7938c5b0dd789db4f262e5a618943a9b"],["/images/c1_img.png","95211a0ebf07befde1b11477c3a8185b"],["/images/c2_img.png","456ba51725d669fc4d005787753a6b08"],["/images/c3_img.png","a0aa7dcdd2ed5bccec52c16942036a3f"],["/images/c4_img.png","0869cebb60d00a78936b7498823a39de"],["/images/c5_img.png","533774e840ccb3ef13b46201a54be05d"],["/images/c6_img.png","db9eb681dea0b7911f0b2ba918d86c26"],["/images/c7_img.png","5b9c9e0331aca2a9d47a2730512f34f5"],["/images/c8_img.png","be9107995f185e3bbf7186c4dff69f42"],["/images/c9_img.png","642a2e762b74a28d2426af14f2b864c1"],["/images/calendar.png","86319b08b93be7c8bc47cdba7a169563"],["/images/cataimage/b1.jpg","e4795ce34b4d070d251c37a2ae5e37eb"],["/images/cataimage/b2.jpg","e1a7402c7d111b33d22c187a794e693d"],["/images/cataimage/b3.jpg","c091fe2a8024b2f010911e9af8091147"],["/images/cataimage/b4.jpg","1a2190b3e7ecb404767f029642adb637"],["/images/cataimage/b5.jpg","2683b29be7ea536b2d2c0b428ab87a80"],["/images/cataimage/b6.jpg","8eba752c28594ff5a253a01c0904a4a4"],["/images/cataimage/b7.jpg","9259255b1e1ec36bf92b4f34ad68db7f"],["/images/cataimage/b8.jpg","beaae9e5c735657f2e5bba9eb3deb754"],["/images/cataimage/b9.jpg","7ea8994ee380e84190422ac1b1d93ed8"],["/images/clock2.0.png","0a0f122c7a25262fc02ee99df0ef21eb"],["/images/clock3.0.png","8e04375c183c637b65fb50ed40f46466"],["/images/example.png","aaac9983e5d59f919bf282dcff2edb3c"],["/images/foto17.png","28db4c6608ad1ee6b34238cafab25e5e"],["/images/foto2.jpg","be95b922512d004a61f83c97af3e2602"],["/images/foto2.png","0dc07d4e1b00526a273a89dc8b81548d"],["/images/foto3.jpg","551c0616c92c4ee7cc17dd458b3c46e9"],["/images/foto4.jpg","9d1d9fea759a41afc0061866e400339a"],["/images/foto5.jpg","984f618b15372f37d54f507e6f379f10"],["/images/foto9.jpg","b683fc0b998e80ff8f5a3e45e889807c"],["/images/girlpic.png","ff1e8427ed555af639e6d849f8f648f1"],["/images/girlpic1.png","698e5570e821c3cae643cc9777c2292e"],["/images/girlpic4.png","551882e4b9b6afb79000fd34c0dbf5e5"],["/images/headimage.png","332502f36a0297b30cb7969fe6de8451"],["/images/hexo.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/hexoWT.png","c027cc9f5665c7d7ba657e7a4bb40017"],["/images/his-json.png","7d8a71e38ab684107446e5c72c31854e"],["/images/history.gif","0459a3dcf2317253de0b34482880c63c"],["/images/homework1.png","e8d2f64d0785519ea7779016208a2900"],["/images/idea.jpg","5eb08bf6c965588f03c8860f201cac45"],["/images/key1.png","f2a370e02ad6c5a101db20b47a9a0008"],["/images/key2.png","21dc40bbe0377cd9fe85a9cb431c18f0"],["/images/life-cycle.png","02f39ea5c041d45938fda4b50f234cb7"],["/images/life.jpg","74d2d9c5f48ec59e3badeec690941812"],["/images/listen.jpg","9d4f73cd5634f43deaed4f9aca03f9a3"],["/images/loading.gif","ffa0804a5d99e2d5b39e05cda6d6b28b"],["/images/magnet.png","4899a924f3de0d19dbe0415128c07d65"],["/images/magnet1.png","8d010eb86ca943e036adaa7de57aee7d"],["/images/magnet2.0.png","54fe576f174d2b6917fef89f40ac5975"],["/images/magnet2.png","293cb414a8ab93b43bde3bebf9cf0cfc"],["/images/magnet3.png","1923148630e2e094ff80bf35aa604c10"],["/images/magnet4.png","9bb4f963ac1c09f02d62525f513f492c"],["/images/meilu/1.jpg","cd67abcc3f543b5c66adc4f9d9c5c628"],["/images/meilu/10.jpg","ac9fb2711e477b5db1c3acb57e899045"],["/images/meilu/11.jpg","364caad6dfc356a3dc630fa067e48e88"],["/images/meilu/12.jpg","274767e5708f79934e5bdbf73eda8f0d"],["/images/meilu/13.jpg","dcab12b84454770b208913db63e825ac"],["/images/meilu/14.jpg","037cdd048284e621f27e17a2c59e8ea7"],["/images/meilu/2.jpg","f6cdb65ae3fad4523b32f5ee38696b60"],["/images/meilu/3.jpg","9e5df3612c2d93bf57313186c954aea5"],["/images/meilu/4.jpg","69ef2d6f4bcd79cf4b4e672b60c6751e"],["/images/meilu/5.jpg","ce81ca16def7613b7ebb368fb554f14f"],["/images/meilu/6.jpg","cafd5b62305f806754a75cc3af8c3b77"],["/images/meilu/7.jpg","b8ae865d386e1e713a6034da6b090c10"],["/images/meilu/8.jpg","afad7a7bf1066c817a8d2e7566bc780d"],["/images/meilu/9.jpg","72f9649f56b564eacf23ce3dacb88029"],["/images/metroui.jpg","5503bfffd450d9ab572b67ea00941571"],["/images/metroui/1.png","79a03b408c19c74eeaa8ff6e17a03f9d"],["/images/metroui/10.png","8309fed71a15c78f2dfa3af1ff75a5f3"],["/images/metroui/11.png","aaf1a007cbae12f93cc2688bace18d28"],["/images/metroui/12.png","0758ea282c3828c47e5c64520ff85783"],["/images/metroui/13.png","12ca7b511927cd4b26e97f3b20908a32"],["/images/metroui/14.png","f44ba7680f7b36df437e2ae2588d0565"],["/images/metroui/15.png","e8927c78b125b805af7aa86fee815ab6"],["/images/metroui/2.png","e604d3c662b996f06f22753ba9ab379f"],["/images/metroui/3.png","664e3b7490f2f95d5547b8ba79a65456"],["/images/metroui/4.png","c0f255344cafc303a1d9c7404da37149"],["/images/metroui/5.png","da2074cdb1298aca826abc1a5c441300"],["/images/metroui/6.png","efef2f087127614b4e03bcbe9a347018"],["/images/metroui/7.png","a4d34b1a2dbe3a58d3a92276880be039"],["/images/metroui/8.png","1d34a626bbaa898a60d4501936bcf962"],["/images/metroui/9.png","0663697c1667b377fe2623bd65e00b31"],["/images/metrouilogo.png","aea81b42d1c2c96440f74cf56ad82e2f"],["/images/nhkimage/2020.08.01.png","af4c55b2ae1d5ab2f56c75a87fcdfdb3"],["/images/nhkimage/2020.08.02.png","c355d41b90f5c65823f96c5f6868ce53"],["/images/nhkimage/2020.08.03.png","fddcedb40d7f28b2ccb90814351ad5c8"],["/images/nhkimage/2020.08.04.png","8b4518ec5a8513f442980ed7167136b1"],["/images/nhkimage/2020.08.05.png","590abfb19334b0c3cee5a005674f2253"],["/images/nhkimage/2020.08.06.png","d469e21100c42435e88f2bdf07f93da1"],["/images/nhkimage/2020.08.07.png","3ca9e2c8b8a09a38423d73cd36e8de9d"],["/images/nhkimage/2020.08.08.png","4420c2d899fe4eb90c48bae0da8418a2"],["/images/nhkimage/2020.08.09.png","df14be338f9c920818dd1daa6aa955ee"],["/images/nhkimage/2020.08.10.png","c4e2ed023cd3dbfd4986add35ca9357c"],["/images/nhkimage/2020.08.11.png","cf562339e57f673d394f3e6cdd1f60cb"],["/images/nhkimage/2020.08.12.png","81dfa179fea3052ddcf73912ea368f67"],["/images/nhkimage/2020.08.13.png","8cf26c2642e7a27cbd86fcbda8bae8d9"],["/images/nhkimage/2020.08.14.png","d88eeb678b3ed3651d597e61957e264a"],["/images/nhkimage/2020.08.15.png","b9879f193867edcffeefce62c9dc7153"],["/images/nhkimage/2020.08.16.png","46cb914aa1d556561897767ec9ff66a0"],["/images/nhkimage/2020.08.17.png","ea1af9645b5cc9cbaafe70a91dd15cca"],["/images/nhkimage/2020.08.18.png","e87e4de39a6f06cf4283a63af92dd8de"],["/images/nhkimage/2020.08.19.png","8001a951513b542a98ce1151be5bd87b"],["/images/nhkimage/2020.08.20.png","4bc8fafa3ecce30d340b1350715d78e3"],["/images/nhkimage/2020.08.21.png","07ad1337e127922abff27da6c672549b"],["/images/nhkimage/2020.08.22.png","b2b5d53ba46015f64048f9d803b12179"],["/images/nhkimage/2020.08.23.png","225af8c0cabe5218ec634d1b8815fd95"],["/images/nhkimage/2020.08.24.png","1d54a484a6e2395aabe9be005cd90361"],["/images/nhkimage/2020.08.25.png","8008ba169cfce0ef2041329cd29b6b77"],["/images/nhkimage/2020.08.26.png","72a2b8094003a54c97a34ea97cf21bc3"],["/images/nhkimage/2020.08.27.png","893407e604804d215c8fef8bcd5f2684"],["/images/nhkimage/2020.08.28.png","b542280b7341759890a99cbd44d822c5"],["/images/nhkimage/2020.08.29.png","620e2e7d4772e39615fd1a88cdf49717"],["/images/nhkimage/2020.08.30.png","f645d7ba2dcb506f9ec6fb9244425ad7"],["/images/nhkimage/2020.09.03.png","c5262f3aa87190e0273383ea1e445681"],["/images/nhkimage/2020.09.04.png","c07149c32aa41c03bc7dac82a713f6b2"],["/images/nhkimage/2020.09.05.png","4e43556e1cb3b7f4d75f0f6127616a54"],["/images/nhkimage/2020.09.06.png","1021d2ae04a7f109404f857a2a7629cf"],["/images/nhkimage/2020.09.07.png","db9827e9f0a4cf1401b559b4644a0204"],["/images/nhkimage/2020.09.08.png","efe1030b73dc1c01f169c3122a194426"],["/images/nhkimage/2020.09.09.png","f6ba3a1c6cdeff88404ebe2a646f2eb5"],["/images/nhkimage/2020.09.10.png","3471b05d02113517359a9e2167befcfa"],["/images/nhkimage/2020.09.11.png","921a541a8bffb1aa436df2eb6db7c99f"],["/images/nhkimage/2020.09.12.png","a51f8ebaddba69bb80f9259a30f17e65"],["/images/nhkimage/2020.09.13.png","0399889200493cd2154ffc407e2bc400"],["/images/nhkimage/2020.09.14.png","eaaf3da69a39ed316b7fc8c4d409bb0f"],["/images/nhkimage/2020.09.15.png","5774959ea4061c9298ea174f0862cc3a"],["/images/nhkimage/2020.09.16.png","0c5a00f74020740fda589c02e4b3f917"],["/images/nhkimage/2020.09.17.png","b5aef734e3a7db4862ca3fe4e6769dc2"],["/images/nhkimage/2020.09.24.png","5982a7b3843f4ae43b2b4bc4b0c577d6"],["/images/nhkimage/2020.09.26.jpg","c6415af781fbdd36fdb034f74646129b"],["/images/nhkimage/2020.09.27.png","27aa6f6a8d5534ccd99cff261dcd9eb6"],["/images/nhkimage/2020.09.28.png","0f4318d1ff17a33de364432a1c44b5ad"],["/images/nhkimage/2020.10.09.png","6408d9f7e66fdeba8b9207939a08cf8d"],["/images/notop.png","d25c272e5ce312a880e04ce8a0b27683"],["/images/pasted-0.png","552608d8f6e39369aa30c6e332a32826"],["/images/pasted-1.png","baafdacee93c99e99418aaedbf524fda"],["/images/pasted-10.jpg","395cff6f64ab5df19baa3572ac98e541"],["/images/pasted-11.jpg","56e5df07c96634638abf7995b25c81ab"],["/images/pasted-12.jpg","61b3f803b85ce3640d7a9ba7efb9da6b"],["/images/pasted-2.png","2f410e53c811f92a6135f48857776f5e"],["/images/pasted-3.jpg","bb5717e691e87355e7d63a5f3a87ae62"],["/images/pasted-4.jpg","10041d0e3567b24b81222ec5075d6492"],["/images/pasted-5.jpg","ac5047a4b48c6cdaee86fa1863e33904"],["/images/pasted-6.jpg","1556ae8d3ad5713d60237ee4d10e81f0"],["/images/pasted-7.jpg","913fde1686587646ddc663bd810cc81d"],["/images/pasted-8.jpg","fc83268081fb4b6b6ecb1ffa1ec5af7f"],["/images/pasted-9.jpg","25e0fa3496591501f5c29d0b802b77d2"],["/images/pet.png","2b8c121909497e57057478856fe48a94"],["/images/pet2.png","dfb1d6a17b527ccc0c600e6ad31f55e5"],["/images/ps1.png","0917ba91f21b6944dc08d35c41a326d2"],["/images/psb.jpg","6a27c58337875c776af0a7667598b401"],["/images/quse.png","7cd1ec12b804305430cb4cdc09c7a893"],["/images/rain.jpg","9c26acc44c692b6a63e134be07b07c18"],["/images/rainsmall.jpg","e8c91c40bef224fc5a3942bd0d007b84"],["/images/shezhi.png","281bf545f6a4024e2d0b7120bc398a21"],["/images/soul.jpg","d97b4099c0728ff6123d006fa62db86e"],["/images/study.jpg","a9b1cf95ee6bd9f3913e8ec6a6a6f44f"],["/images/tianqizhizi.jpg","dd48d78b4eeaaa52578352f9ef570b14"],["/images/vue.png","cf23526f451784ff137f161b8fe18d5a"],["/images/vue1.jpg","8cbf18302c6fa72e2a40d0cca0832213"],["/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/images/work.png","e521cf5b834292fde1c50e0a0f5802f9"],["/images/xiaoguoyanshi.png","994a3b710d36df0a4630cd9a768c7f7b"],["/images/xiaoguozhanshi-m.png","1fefca18214fc4889d1bb76b81887c9d"],["/images/yao1.jpg","9dfddaf8c121fc8db788a87d133d6376"],["/images/zfe.one.png","b41f689341882058ffb28c4cee499bde"],["/images/幻想终结之日.png","0025c4d3973bdfedb80db3f78c59fa47"],["/images/时空战纪——游戏建议及意见①.jpg","1337457f14a8dffee66d94f8915b54ff"],["/images/简历.png","d70507ee4615c9e324578c0d777e6855"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favicon2.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","31996ea6602c9e874ab7e43cd9b6e666"],["/js/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/APlayer.min.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/airvisual.js","71cf86bfd452ca01d92438d8266416ee"],["/js/airvisualapi.js","6931bebe1696688d109963187fc2eace"],["/js/artitalkkey.js","ad2c74320c63125a36319659657d2886"],["/js/background.js","94c8410b174f58594cf81ec99054968b"],["/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/js/calendar.js","a58e02711cc6dec4dc04257e555b8923"],["/js/catalogMagnet.js","0387c6ad152e7a6076cceffc7420be77"],["/js/clock - 副本.js","405186e7a9d73221d2d50c0dea2852d0"],["/js/clock.js","2fdceb94cc57b551cd245b0001927b66"],["/js/color.js","3730bb4f7b185e6f5130ac28bace968b"],["/js/dan.js","6b6ae6b7f1b42dd4857541f43b2bb733"],["/js/echarts.js","dc1227b1eba1ba47fd185a387d0a7d37"],["/js/gitcalendar.js","fadfa8a42272cd322118653dca512a7a"],["/js/history.js","20459f7db325e597e64903f4c0d19306"],["/js/historyroll.js","a3e9ac376106816c50a61f9f4306d671"],["/js/jam.js","462c07d3b2e0f20394d994bbcfae37cb"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","455fface5a0a3ff90766ca254affe502"],["/js/rain.js","f656dc28e4ab5c3f8414d35f683278c1"],["/js/rainremove.js","ceacf82842b101f7e54a2aaf5f4bb9cb"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["/js/shuo.js","1076b1ef51358cc11b6ff3bab25e15d8"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/link/index.html","318fc8006d5ebe3728db624e7a9f36e7"],["/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","d59265f63b73560f668b8fb3eb4eed99"],["/page/10/index.html","fa7e9dce6a4aedc8b9980f1b61e666a9"],["/page/11/index.html","b42d6af6be41c91b91ae69bc5d1d9bba"],["/page/12/index.html","7a6fb121a7af1f01eb00d7553c035f40"],["/page/2/index.html","d98d8171046cb81d6b76c0b91f41e6c2"],["/page/3/index.html","25d0bb354cec6ff78a93b9a312e26383"],["/page/4/index.html","e90af8c67a6b346615f6e580ead687a7"],["/page/5/index.html","23d6d7abe1e3f09d18a9c0d5c0597118"],["/page/6/index.html","5dfbbdf1369613d6ef22573a54eb1361"],["/page/7/index.html","8748b9049350c292d43bc817e65c18de"],["/page/8/index.html","d28eb21c08f44f09342ce051201b8642"],["/page/9/index.html","8351d37b72c671f99a2ff663f914b8a1"],["/research/index.html","35725477cbd550201487a197f02a4136"],["/sw-register.js","d09b3c956aa2ea16b443e4af4aa70ad8"],["/tags/Butterfly主题/index.html","54825de31b4b670b2e5cc65a3ecb7166"],["/tags/DIY/index.html","025f524cdc5b62aa366174edd8e84362"],["/tags/DIY/page/2/index.html","b0f5a59e3f3f22f0338be9bfd18aca32"],["/tags/ICT/index.html","72ceb0a585f3ba2f1e4b55039f143c27"],["/tags/NHK听力练习/index.html","bca7709785fd6ab7e783cd2b322bff5c"],["/tags/NHK听力练习/page/2/index.html","36ce73714bd95636331dcb4dc5b3fec1"],["/tags/NHK听力练习/page/3/index.html","d274328df8f7d2c5edde7750acdd7090"],["/tags/NHK听力练习/page/4/index.html","0bb126d94470ef7fac0c89d454298b17"],["/tags/NHK听力练习/page/5/index.html","4697cd1d1d1edffbda34af4353a31fe1"],["/tags/NHK听力练习/page/6/index.html","df716a94215310e39ee20cfadbf41258"],["/tags/metro-ui/index.html","8da014b5c2754cbd04689ea7cafac1df"],["/tags/vuejs/index.html","8d2c267f81959f5b5b001394cedf3a8f"],["/tags/お盆/index.html","849e82d7900b3a15323a073ef0328c59"],["/tags/世論調査/index.html","f1c37a7592087af35c5fa454a39c4319"],["/tags/作品集/index.html","50ca95ba706fc193177bcc08dbf4e772"],["/tags/作品集/page/2/index.html","f8201f77a9623d018c5c6df66e6260c4"],["/tags/农业/index.html","d909c3aa913fcbaddc36682ae72004d9"],["/tags/历史/index.html","442827f06a69a1d516ae7512e6620ef4"],["/tags/営業時間/index.html","1fe8892917d3bb42f7927d3f38026db0"],["/tags/国外政事/index.html","bff0314b366854b2b5dedee5af41f3bc"],["/tags/地震/index.html","1ce5f9b51e3b30519fb9bf6ff6ffdc25"],["/tags/外国政事/index.html","a7bf50f52eb81922bd8e5c95cba15501"],["/tags/天气/index.html","719124dbd3fbc71b4bd17e89bf9bc8f4"],["/tags/天气/page/2/index.html","5dfd8ced60c7fea0caab65789d18b5b4"],["/tags/奥运会/index.html","06c972e119c5762a226a4ad05fbcab25"],["/tags/学习/index.html","f4dcd228e21a6f8d1a0d4bf257ee5a61"],["/tags/学习/page/2/index.html","c76c577e17fab49a619f934a7cb62555"],["/tags/学习/page/3/index.html","c7a01d6224e1e0e47d74644d27d43666"],["/tags/就业/index.html","641812750c756da3bee93110cc18f3be"],["/tags/庐山/index.html","952b1b98cb31cfe84df8c7c1e265c8b7"],["/tags/座礁/index.html","41dd7597d1ea65866945deef0fcf8402"],["/tags/政府/index.html","89d43c66a22f48653adb06f695ab8d1e"],["/tags/政治/index.html","4962198f3522e962676e6e40b96d2bb6"],["/tags/教程/index.html","5ee56a493349c16bf12504669d18bc34"],["/tags/教程/page/2/index.html","1d0aa1677e2d0f9057d305563fa2ca23"],["/tags/日本教育/index.html","94b422cfd5e8080f7b16cdcefbcea9fb"],["/tags/民生/index.html","7cbd80cfb94fdc0af3165981421b4a02"],["/tags/民生/page/2/index.html","c3dbb87d58ee4bea45937e6334092aa6"],["/tags/游戏评测/index.html","02b2f841d2284adc4a3653cd50b56942"],["/tags/游记/index.html","8bcf55e0586c45442bc9133105deed8a"],["/tags/生活趣闻/index.html","4770350e39ab0c28751e48bf00deeabb"],["/tags/科技/index.html","5455688d0bfb009726f973861e602d7c"],["/tags/经济/index.html","dbe79841f068576439f533ec5d8c8510"],["/tags/经济/page/2/index.html","9bc98904c7bedfdd1064dfd73fe6755e"],["/tags/网络教学/index.html","536023ba6f3558fdc46e172b8164126c"],["/tags/舆论/index.html","793acf3995e7227e219d0811823fa6f3"],["/tags/虚拟现实/index.html","2c17ae495fb801b6dc3f63d222d6f030"],["/tags/随想/index.html","b842db998d60690e0bcbe77e0c622498"],["/tags/障害者/index.html","c6ff011c0a3e53c1eca0d447d069da8c"]];
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
