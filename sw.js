/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/05/20/2015-05-20/index.html","da3396c9a21703efa40f7081cae5df6a"],["/2015/06/16/2015-06-16/index.html","e9bb7c751364afcf86f5c0f77eea3626"],["/2015/12/12/2015-12-12/index.html","b4984298d2b807869a9676ddb98037b3"],["/2016/06/08/2016-06-08/index.html","ed905ed56ab5ba0b1ee0b0ae16ac7e7e"],["/2016/12/18/2016-12-18/index.html","5bf109a3a7ca2586930ff8a6251088ea"],["/2017/02/17/2017-02-17/index.html","54c23a560e2befbf799dc3be9172e51c"],["/2017/03/17/2017-03-17/index.html","2293afe339d819b463e7439d943b20a2"],["/2017/04/06/2017-04-06/index.html","c7ca1ae570afd9816d1361c3cf558e72"],["/2017/05/17/2017-05-17/index.html","8aaa435cad5ed9d43ad24a991cf2834c"],["/2017/08/15/2017-08-15/index.html","89b50bc0bb07b7549dbd6ca396fe6e2b"],["/2017/09/16/2017-09-16-1/index.html","027deb508caf69cd9ccd96bdbedac297"],["/2017/09/16/2017-09-16/index.html","64c32f8b3c8f8fc6f80945ddee4a13b1"],["/2017/09/21/2017-09-21/index.html","ce1fa2b6141c1f1fce36d9f9b3215f19"],["/2017/09/23/2017-09-23/index.html","19a66fe7cefde335121c7e15cd7e7f10"],["/2017/09/26/2017-09-26/index.html","d1cb41945eeb73fd6f7e7cafe0cc8b31"],["/2017/09/27/2017-09-27/index.html","bdeb860ac302e73443f77f81349af375"],["/2017/10/04/2017-10-04/index.html","937a1dfb657eed1517a29df303e7c6bd"],["/2017/10/08/2017-10-08/index.html","0c8f83eb8c5c1c5e431457427324cf7f"],["/2017/10/09/2017-10-09/index.html","1dd15b68868aeb2abf4f679ec6115069"],["/2017/10/15/2017-10-15/index.html","36e3dc0d106ccb9f20d3a35d09b5dad0"],["/2017/10/19/2017-10-19/index.html","ab70040dbf4d3028730eb4cb2ed31673"],["/2017/10/23/2017-10-23-2/index.html","bc79e5afadd9d9a2d432fb67fd912826"],["/2017/10/23/2017-10-23/index.html","0c06809036f9c01abca4873879f20854"],["/2017/11/08/2017-11-08/index.html","3b3d9320c14f48079186de4699ec511a"],["/2017/11/12/2017-11-12/index.html","48ff420bd248d77a1ab3a7a5b7d57d48"],["/2017/11/15/2017-11-15/index.html","580f755afad361f9b487a99ac10d473f"],["/2017/11/27/2017-11-27/index.html","2163bc0e9f8a152d1e1aee0b0a06a85a"],["/2017/12/06/2017-12-06/index.html","08d1629ab2b0e62b67da8776b6f15626"],["/2018/02/12/2018-02-12/index.html","d4e56bf427453841160d2efa968ba112"],["/2018/03/26/2018-03-26/index.html","fa79fc0f49f7e0cf7fb60f52cd645f0f"],["/2018/04/02/2018-04-02/index.html","74f6585644488303dc0747591f4afedb"],["/2018/04/24/2018-04-24/index.html","30d3bb31597ce630937753583e8e358e"],["/2018/05/18/2018-05-18/index.html","2132a8e956c161da1c7f9dbeee36617b"],["/2018/05/23/2018-05-23/index.html","abaed68cf54c2367060c97b859c3a012"],["/2018/06/08/2018-06-08/index.html","acb94c4e9bcc74c64a60a2fa2b0788da"],["/2018/07/01/2018-07-01/index.html","d25ca5929b10682a6602e7eab9c72ed8"],["/2018/08/30/2018-08-30/index.html","ba44a44b8735da55e3a109f8d5a87d58"],["/2020/07/20/2020-07-20/index.html","2035fef3e2fd4b8633b9d0035167c04e"],["/2020/08/01/2020-08-01/index.html","092f461d74e69c4923f99773fb3a4439"],["/2020/08/02/2020-08-02/index.html","cc614133c16300f97772a52d3a50a81b"],["/2020/08/03/2020-08-03/index.html","cfa5a36f9247e7899b9ad4e6cd13d1e9"],["/2020/08/04/2020-08-04-1/index.html","fce859d9fe5c4d57b06461b6cc4136ef"],["/2020/08/04/2020-08-04-2/index.html","9540920649f0ef0dea36c05d17ea82a8"],["/2020/08/05/2020-08-05/index.html","f06eb2a0d2b3e81b902d40291de96774"],["/2020/08/06/2020-08-06/index.html","f56c79943ee1db942f6c32efdae0c690"],["/2020/08/07/2020-08-07/index.html","c631c6d9a762562f3432b0de8e4f706f"],["/2020/08/08/2020-08-08/index.html","1f5250d108572fabbc5ff96224c7067b"],["/2020/08/09/2020-08-09/index.html","e0f1003281c0813dcc72cb70cd80e189"],["/2020/08/10/2020-08-10/index.html","109964b012c9293b6103ec878f12403b"],["/2020/08/11/2020-08-11/index.html","e2df428a6472681f1c52cf97b0688dc8"],["/2020/08/12/2020-08-12/index.html","26960ef6fe47173fd7079db83b21f87d"],["/2020/08/13/2020-08-13/index.html","4bfd19cd41b421bcf877d34895c2666f"],["/2020/08/14/2020-08-14-1/index.html","633baf0f3d816fb5be85d31024b9bad3"],["/2020/08/14/2020-08-14-2/index.html","daf3172b6e6f4d3993d6ad8f99cf0b71"],["/2020/08/15/2020-08-15/index.html","8f3a4ec9c7d0c222c21058d8ecdf2153"],["/2020/08/16/2020-08-16-1/index.html","06d2432a8fb563a1feadf1efcc88ffd4"],["/2020/08/16/2020-08-16-2/index.html","d7ebcb5861343b4b3cde4af77245eda4"],["/2020/08/17/2020-08-17/index.html","3d8be313306fdac588ede27badd05e74"],["/2020/08/18/2020-08-18/index.html","c434b01ac867b04352b1b856337dbb1b"],["/2020/08/19/2020-08-19-1/index.html","dbf8737a754bd76b4156745a34513bfe"],["/2020/08/19/2020-08-19-2/index.html","f9224412d8db6663ca69d701544ee8e6"],["/2020/08/20/2020-08-20/index.html","8e9d6f76f4cb3557a233eac5020a6b84"],["/2020/08/21/2020-08-21/index.html","27aa8404b47633907114442ba35dd7b2"],["/2020/08/22/2020-08-22/index.html","b0e0f8f562403d193db89b369cb7bf24"],["/2020/08/23/2020-08-23-1/index.html","f65a1f936f26d44bb123710c03c0dd74"],["/2020/08/23/2020-08-23-2/index.html","434599e5e02f9ce5ffa3edb22a2b3fa6"],["/2020/08/24/2020-08-24-1/index.html","7cbf740b91dd830034aad5ce917e09de"],["/2020/08/24/2020-08-24-2/index.html","ef7122727fc18486522e28136611a0a4"],["/2020/08/25/2020-08-25-1/index.html","50a90120165087ea824a51d80bb376ad"],["/2020/08/25/2020-08-25-2/index.html","5465c2d17bd7fd8f62a64e91f3e9b3f9"],["/2020/08/26/2020-08-26/index.html","897d9771a522eb63cf4b72bdcd35c958"],["/2020/08/27/2020-08-27/index.html","5f2428902bbc9820775e9fa32f6635e1"],["/2020/08/28/2020-08-28/index.html","bb21e0cc107da02623ef7ed66d2478c2"],["/2020/08/29/2020-08-29/index.html","1dc15bcc4bd26c1312e85e41894b85e8"],["/2020/08/30/2020-08-30/index.html","79dc53b72d55c9a9aa4a4dd15b67a7fc"],["/2020/08/31/2020-08-31-1/index.html","1c7afa134bea1d0bc8b72c1aaf25df8e"],["/2020/08/31/2020-08-31-2/index.html","dfee9f4c5cb19fd774edefdff5c50bb1"],["/2020/09/01/2020-09-01-1/index.html","8f3210ee89fd6bad96bb4c37b79597da"],["/2020/09/01/2020-09-01-2/index.html","a59f3117bf610fc47a05f2895f701a71"],["/2020/09/02/2020-09-02-1/index.html","0237dec0bee2c62e70ebd74cebf71e86"],["/2020/09/02/2020-09-02-2/index.html","fd49ef1625e4860a14c374aa62f06d25"],["/2020/09/03/2020-09-03-1/index.html","2f775e7b8fef257c6bcc7eceb338a129"],["/2020/09/03/2020-09-03-2/index.html","abbdf21c6ae250522508187ab054e7ca"],["/2020/09/04/2020-09-04-1/index.html","c49e8dd93c81457dcf168eade69d4ab5"],["/2020/09/05/2020-09-05-1/index.html","b99f22d465b6c931e62da565b49195e3"],["/2020/09/06/2020-09-06-1/index.html","1821c1645bdba71f5d2b3d4a942c312c"],["/2020/09/07/2020-09-07/index.html","f4c9eefc4bde8c18b04a75ea26ae678c"],["/2020/09/08/2020-09-08-1/index.html","6fb2a5ede040ad4cb78ca4acea4554bc"],["/2020/09/08/2020-09-08-2/index.html","d707bf951b48c69df3e14bfb4d3972fa"],["/2020/09/09/2020-09-09/index.html","43b60d47b96f0d6b66c4a8549622a4a8"],["/2020/09/10/2020-09-10/index.html","0492339e39e7f3e32425787f60669a5f"],["/2020/09/11/2020-09-11/index.html","38df5f16efc378be36b5bbb57a95c76b"],["/2020/09/12/2020-09-12/index.html","dec82dd32f39c8e9939603cbe472a3bf"],["/2020/09/13/2020-09-13/index.html","5ba3abfe2e785c1c54039c74491c19ec"],["/2020/09/14/2020-09-14/index.html","48eb8e6d72aa370f7216d3f7dfa54932"],["/2020/09/15/2020-09-15/index.html","0038efc3427a29970e14e1864adbd088"],["/2020/09/16/2020-09-16/index.html","74cdcb9c738e8feed410bf7c15c7a005"],["/2020/09/17/2020-09-17/index.html","efaa3e47db27f839c6e70eee2ecb88ce"],["/2020/09/19/2020-09-19/index.html","31d2c3dfa63a7268da69d762aabac1d1"],["/2020/09/23/2020-09-23/index.html","9a08eac8c38d84fa9d113ce847e04d53"],["/2020/09/24/2020-09-24/index.html","87d5d5798ceb249c76802a684632bfbe"],["/2020/09/26/2020-09-26/index.html","4694015eab330b07fe6bb6adfb6da20f"],["/2020/09/27/2020-09-27/index.html","5a4125e630511e18f7d4a0b1e6c9e6cf"],["/2020/09/28/2020-09-28-2/index.html","ce4eee23a13ca77430eba306f2087749"],["/2020/09/28/2020-09-28/index.html","8136b271b8c8abbeffe180d56700d204"],["/2020/09/29/2020-09-29/index.html","6ba4b295553c8c1a2bb1994616e87130"],["/2020/10/03/2020-10-03/index.html","39b1e89801016f5728a05b01531e0266"],["/2020/10/04/2020-10-04/index.html","20616e9c6c5ff00df7026919f00d4c25"],["/2020/10/09/2020-10-09/index.html","6853117711cf46d6ddd819ecff6e945f"],["/2020/10/10/2020-10-10/index.html","718f0e5ad63f75e20f28e558419ed5e1"],["/2020/10/11/2020-10-11/index.html","913f90c2772b5faf1be68cd2edc7cd6d"],["/2020/10/12/2020-10-12/index.html","fe001490ce823f033408d76501ef1358"],["/2020/10/13/2020-10-13/index.html","6b46ccb543fd367f527d0e1ac9cbdd9b"],["/2020/10/14/2020-10-14/index.html","4744abe2598fd4510a2ddfb5f3ceb151"],["/2020/10/15/2020-10-16-2/index.html","b0dfbe7fb8d528847ceca21dd2f91a22"],["/2020/10/16/2020-10-16-1/index.html","c00dbb05506f91aab5a9016dac9829f3"],["/2020/10/18/2020-10-18/index.html","de59e116fe9655726d7d04dd750f2dc1"],["/2020/10/20/2020-10-20/index.html","26647bb43b6853f3522456705947c298"],["/airplayervisual/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/airplayervisual/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/airplayervisual/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/airplayervisual/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/airplayervisual/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/airplayervisual/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/airplayervisual/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/airplayervisual/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/airplayervisual/index.html","3d88cb9a6ab75577a4c20c5f4079f251"],["/airplayervisual/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/airplayervisual/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/airplayervisual/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/airplayervisual/js/jamsetting.js","7927507e0080ddf55c6d8b5f526bd942"],["/airplayervisual/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/airplayervisual/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/airplayervisual/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/archives/2015/05/index.html","d7c6818e97fa7170930e927e428c3572"],["/archives/2015/06/index.html","72f7237327ba6ef1a611fc1998c2b841"],["/archives/2015/12/index.html","c129c19246364a5351ba80d3c2c7332b"],["/archives/2015/index.html","192cf6214bc78ed732d576d54b11357e"],["/archives/2016/06/index.html","21be5aef5b8314296f17ba60e6f50e43"],["/archives/2016/12/index.html","e5e623db40c50ad5f49a62dbf7705886"],["/archives/2016/index.html","5575fccd9376d1f936c99cb623f5c11b"],["/archives/2017/02/index.html","f0943e6eeee62f2ee734f36c3369454c"],["/archives/2017/03/index.html","97f109b419acbf6d5e12915382e9e398"],["/archives/2017/04/index.html","ad7e274eb1dbae5fe391cf27933ac92f"],["/archives/2017/05/index.html","977750528f369edb407e0e3a47e0628c"],["/archives/2017/08/index.html","a7c7d0f148d3cb5ed9676d371b3e1e91"],["/archives/2017/09/index.html","a0e17d534ee7c3fcc239df55a7f0567b"],["/archives/2017/10/index.html","3b11579957c66208a47733fcd5e46ab3"],["/archives/2017/11/index.html","5756e93c1f22260b9af9c7ba5b5bb5dd"],["/archives/2017/12/index.html","58ce71efa562461b524d20853a10d5a1"],["/archives/2017/index.html","b24531b9431c42669e069c41055721a8"],["/archives/2017/page/2/index.html","788686230d384acbde39f36f9163bd30"],["/archives/2017/page/3/index.html","cefd113faced854bf11dca8a35bc401e"],["/archives/2018/02/index.html","a834ca11e5fa9587826f82fae306c3c9"],["/archives/2018/03/index.html","53a7404f1e10cf331583b4cdd539ac33"],["/archives/2018/04/index.html","f9de1ffe26c253c93b008c0fe8048c16"],["/archives/2018/05/index.html","c1bfa5e5b683e694b862fb7f37f20456"],["/archives/2018/06/index.html","9a35bbae6f0a4059944c2f7ccdcb3746"],["/archives/2018/07/index.html","6df59954938dc9837575b69a83908298"],["/archives/2018/08/index.html","21ebf1d00de0abf44ac4fa8fd12a530a"],["/archives/2018/index.html","97e1e5a39ac200e82320611f96da43a4"],["/archives/2020/07/index.html","d6d4bfb635b7e1c120c15eb1b0bb33bb"],["/archives/2020/08/index.html","1271c6b9298e53f1461d13fdf935daa8"],["/archives/2020/08/page/2/index.html","767425bfe6a12f159dc9a1a7d779503b"],["/archives/2020/08/page/3/index.html","4ae752639749709f8862c04bea70064c"],["/archives/2020/08/page/4/index.html","c34bfe0acf847add5a009ab2ab4351c9"],["/archives/2020/09/index.html","8bf63c527d31e531f927244781ce9985"],["/archives/2020/09/page/2/index.html","c6da33304ac56f527490a185ce35efab"],["/archives/2020/09/page/3/index.html","ef9568826e574f48fd3c77d85e827b8b"],["/archives/2020/10/index.html","c40ed57a29eebd21a3e344ea6d6a068e"],["/archives/2020/10/page/2/index.html","fb7acabdbec9df8f5f83ba338d32aab8"],["/archives/2020/index.html","e6b69ca7ba209b7d266b2fab0a93e9cb"],["/archives/2020/page/2/index.html","8e4c9f0e56506c8ddbd2e33963841535"],["/archives/2020/page/3/index.html","77b50bbd5236d5c818bd7c8e0d08af78"],["/archives/2020/page/4/index.html","ee214dcb5b74ab128db4ccfc47c49d0f"],["/archives/2020/page/5/index.html","acf9c46096573ea2621a1403cda4814b"],["/archives/2020/page/6/index.html","2cf33807cdb2d95f1667898c341f12d3"],["/archives/2020/page/7/index.html","be697d6b05eddd1d153e0c1de0615f29"],["/archives/2020/page/8/index.html","86b4de8ae5eeace8dbcc9e95ffa25f00"],["/archives/2020/page/9/index.html","d8b4c300975f29408f6e9a46fb39288e"],["/archives/index.html","46979c2a8135e6bb810e52507f5de73f"],["/archives/page/10/index.html","4de8fc0f2f989d20ea11233f3dd21dd4"],["/archives/page/11/index.html","8c8adad2ed4f39fe33b5d9556b9c4f29"],["/archives/page/12/index.html","59ce3529f3b08bbea7916a58930de1ea"],["/archives/page/2/index.html","ef6d4c2b0d0e52098e697bcfbca7656b"],["/archives/page/3/index.html","597ead04e1b84b37fe735666e11c42df"],["/archives/page/4/index.html","164fef95d77ffe41690ff4f2132eb05a"],["/archives/page/5/index.html","a736c92e68a02ce21d38ac17fe411d48"],["/archives/page/6/index.html","d757af5425b377a4e9496276a9670c60"],["/archives/page/7/index.html","36fc084f2abe92e33679ea705aaf0943"],["/archives/page/8/index.html","c9ca68099228cc74f37d5911f436d250"],["/archives/page/9/index.html","f0e42a1710809a11fb646bd56e12fd04"],["/catalogtest/index.html","cc38de8d962c4769b5addaf68489a384"],["/categories/NHK听力练习/index.html","ba758e27677c719ddd568e043d342946"],["/categories/NHK听力练习/page/2/index.html","0d76da2669f6da93eea970eb487850c9"],["/categories/NHK听力练习/page/3/index.html","18b43348dc03467bad5927b3a68521a6"],["/categories/NHK听力练习/page/4/index.html","c986f824d2f37e46d1a9dc05de893c6d"],["/categories/NHK听力练习/page/5/index.html","0d606c8ac9bae31d6ef86a57e7a91564"],["/categories/NHK听力练习/page/6/index.html","9fec15aabb4516a2a1f9405ec211e04b"],["/categories/vue/index.html","3e183d47e10372c02083d080b7009a96"],["/categories/作品集/index.html","69f8b3239a4119b90b9d42247054d9ce"],["/categories/作品集/page/2/index.html","15c6194c59b35cd6158086a35d55e9a9"],["/categories/学习/index.html","52a1b5b481545c497c43bd563349b6be"],["/categories/学习/page/2/index.html","6205f28ecfeed67b404a3110b4ef0f78"],["/categories/教程/index.html","aebc48669aaba9169610e4f219b371d5"],["/categories/教程/page/2/index.html","045e0d54c74863504d1d8efe6b76a033"],["/categories/游戏评测/index.html","f4b949b226aa7616aa7372c9d47ad27e"],["/categories/生活趣闻/index.html","3d837e236b2c10930430936c734517d8"],["/categories/随想/index.html","c0f94f2138bb5ef7072b69d5f7da7659"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/addcss.css","d20fc732e0cc7996bd82c5170b7aaa86"],["/css/background.css","d013642f5988333ece3b04912f099111"],["/css/calendar.css","0090a32d2a61d42c5bfed254bfba078c"],["/css/clock - 副本.css","65602c2385c7eab42ee3804cd6ee0a5a"],["/css/clock.css","9db53e3bffb704c740aa83bddaf8b999"],["/css/cursor.css","f514da9c81fb3fcb4f7e9038dfa30874"],["/css/danmu.css","2a5b914a9592bcd353425c6d5fa7af8e"],["/css/index.css","a830cf7dafed0e1e03142b35ae00f2a6"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/loadingline.css","bc1ee020a6a11fea17b915b97e6978bf"],["/css/shuo.css","8db924024099e925c53d5b3dd22f83c6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/html/calendar.html","bddcec1edba7f4c49fe5cd75f8cdf5b2"],["/html/shiyan.html","8acb7ab08693ae308db603d1244eeb22"],["/html/shiyan2.html","c808e0466013fb9020760e9f5f6cbce8"],["/icon.png","8ec68de45d18642ba9baf2447e62f476"],["/images/AMJ1.png","d27a6725d1aaaf5324248da4312ab6c2"],["/images/AMJ2.png","00e22eba5901e5bd674e42228cd5bd26"],["/images/AMJ3.png","c8c9ea6348dfcad3a641899d5b587431"],["/images/FOTO1.jpg","4b6f100861908e2c7044cffbdb4a0c1a"],["/images/MVVM.png","ea5a002ee2f85c71a0db51d5adb5de19"],["/images/UT.jpg","367f4e432f9db55a92b2a290c4b0a476"],["/images/UX.png","a183974e958d41d1b6acec70bb7ea00a"],["/images/WindowsTerminal.png","8ac29cb56b8a1768cf7de071e9f1ae6f"],["/images/air-w.png","c1cc32f9d3e17551ca11a7d18a0b533a"],["/images/anzhuang.jpg","912b2489957f8344406edc5e5cebe5fa"],["/images/api-setting.png","2c0bb074390779721cba009e96c5417c"],["/images/apikey.png","1f31121b190eb1f990bcc3e27524bc03"],["/images/b0_img.png","43fcaa3f8b394ca5be957f4b860800db"],["/images/backpic1.jpg","86a6fa88167feb338fbf1a4e9057114b"],["/images/c0_img.png","34397085b4d3349034f9b167469ac626"],["/images/c10_img.png","7938c5b0dd789db4f262e5a618943a9b"],["/images/c1_img.png","95211a0ebf07befde1b11477c3a8185b"],["/images/c2_img.png","456ba51725d669fc4d005787753a6b08"],["/images/c3_img.png","a0aa7dcdd2ed5bccec52c16942036a3f"],["/images/c4_img.png","0869cebb60d00a78936b7498823a39de"],["/images/c5_img.png","533774e840ccb3ef13b46201a54be05d"],["/images/c6_img.png","db9eb681dea0b7911f0b2ba918d86c26"],["/images/c7_img.png","5b9c9e0331aca2a9d47a2730512f34f5"],["/images/c8_img.png","be9107995f185e3bbf7186c4dff69f42"],["/images/c9_img.png","642a2e762b74a28d2426af14f2b864c1"],["/images/calendar.png","86319b08b93be7c8bc47cdba7a169563"],["/images/cataimage/b1.jpg","e4795ce34b4d070d251c37a2ae5e37eb"],["/images/cataimage/b2.jpg","e1a7402c7d111b33d22c187a794e693d"],["/images/cataimage/b3.jpg","c091fe2a8024b2f010911e9af8091147"],["/images/cataimage/b4.jpg","1a2190b3e7ecb404767f029642adb637"],["/images/cataimage/b5.jpg","2683b29be7ea536b2d2c0b428ab87a80"],["/images/cataimage/b6.jpg","8eba752c28594ff5a253a01c0904a4a4"],["/images/cataimage/b7.jpg","9259255b1e1ec36bf92b4f34ad68db7f"],["/images/cataimage/b8.jpg","beaae9e5c735657f2e5bba9eb3deb754"],["/images/cataimage/b9.jpg","7ea8994ee380e84190422ac1b1d93ed8"],["/images/clock2.0.png","0a0f122c7a25262fc02ee99df0ef21eb"],["/images/clock3.0.png","8e04375c183c637b65fb50ed40f46466"],["/images/example.png","aaac9983e5d59f919bf282dcff2edb3c"],["/images/foto17.png","28db4c6608ad1ee6b34238cafab25e5e"],["/images/foto2.jpg","be95b922512d004a61f83c97af3e2602"],["/images/foto2.png","0dc07d4e1b00526a273a89dc8b81548d"],["/images/foto3.jpg","551c0616c92c4ee7cc17dd458b3c46e9"],["/images/foto4.jpg","9d1d9fea759a41afc0061866e400339a"],["/images/foto5.jpg","984f618b15372f37d54f507e6f379f10"],["/images/foto9.jpg","b683fc0b998e80ff8f5a3e45e889807c"],["/images/girlpic.png","ff1e8427ed555af639e6d849f8f648f1"],["/images/girlpic1.png","698e5570e821c3cae643cc9777c2292e"],["/images/girlpic4.png","551882e4b9b6afb79000fd34c0dbf5e5"],["/images/headimage.png","332502f36a0297b30cb7969fe6de8451"],["/images/hexo.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/hexoWT.png","c027cc9f5665c7d7ba657e7a4bb40017"],["/images/his-json.png","7d8a71e38ab684107446e5c72c31854e"],["/images/history.gif","0459a3dcf2317253de0b34482880c63c"],["/images/homework1.png","e8d2f64d0785519ea7779016208a2900"],["/images/idea.jpg","5eb08bf6c965588f03c8860f201cac45"],["/images/key1.png","f2a370e02ad6c5a101db20b47a9a0008"],["/images/key2.png","21dc40bbe0377cd9fe85a9cb431c18f0"],["/images/life-cycle.png","02f39ea5c041d45938fda4b50f234cb7"],["/images/life.jpg","74d2d9c5f48ec59e3badeec690941812"],["/images/listen.jpg","9d4f73cd5634f43deaed4f9aca03f9a3"],["/images/loading.gif","ffa0804a5d99e2d5b39e05cda6d6b28b"],["/images/magnet.png","4899a924f3de0d19dbe0415128c07d65"],["/images/magnet1.png","8d010eb86ca943e036adaa7de57aee7d"],["/images/magnet2.0.png","54fe576f174d2b6917fef89f40ac5975"],["/images/magnet2.png","293cb414a8ab93b43bde3bebf9cf0cfc"],["/images/magnet3.png","1923148630e2e094ff80bf35aa604c10"],["/images/magnet4.png","9bb4f963ac1c09f02d62525f513f492c"],["/images/meilu/1.jpg","cd67abcc3f543b5c66adc4f9d9c5c628"],["/images/meilu/10.jpg","ac9fb2711e477b5db1c3acb57e899045"],["/images/meilu/11.jpg","364caad6dfc356a3dc630fa067e48e88"],["/images/meilu/12.jpg","274767e5708f79934e5bdbf73eda8f0d"],["/images/meilu/13.jpg","dcab12b84454770b208913db63e825ac"],["/images/meilu/14.jpg","037cdd048284e621f27e17a2c59e8ea7"],["/images/meilu/2.jpg","f6cdb65ae3fad4523b32f5ee38696b60"],["/images/meilu/3.jpg","9e5df3612c2d93bf57313186c954aea5"],["/images/meilu/4.jpg","69ef2d6f4bcd79cf4b4e672b60c6751e"],["/images/meilu/5.jpg","ce81ca16def7613b7ebb368fb554f14f"],["/images/meilu/6.jpg","cafd5b62305f806754a75cc3af8c3b77"],["/images/meilu/7.jpg","b8ae865d386e1e713a6034da6b090c10"],["/images/meilu/8.jpg","afad7a7bf1066c817a8d2e7566bc780d"],["/images/meilu/9.jpg","72f9649f56b564eacf23ce3dacb88029"],["/images/metroui.jpg","5503bfffd450d9ab572b67ea00941571"],["/images/metroui/1.png","79a03b408c19c74eeaa8ff6e17a03f9d"],["/images/metroui/10.png","8309fed71a15c78f2dfa3af1ff75a5f3"],["/images/metroui/11.png","aaf1a007cbae12f93cc2688bace18d28"],["/images/metroui/12.png","0758ea282c3828c47e5c64520ff85783"],["/images/metroui/13.png","12ca7b511927cd4b26e97f3b20908a32"],["/images/metroui/14.png","f44ba7680f7b36df437e2ae2588d0565"],["/images/metroui/15.png","e8927c78b125b805af7aa86fee815ab6"],["/images/metroui/2.png","e604d3c662b996f06f22753ba9ab379f"],["/images/metroui/3.png","664e3b7490f2f95d5547b8ba79a65456"],["/images/metroui/4.png","c0f255344cafc303a1d9c7404da37149"],["/images/metroui/5.png","da2074cdb1298aca826abc1a5c441300"],["/images/metroui/6.png","efef2f087127614b4e03bcbe9a347018"],["/images/metroui/7.png","a4d34b1a2dbe3a58d3a92276880be039"],["/images/metroui/8.png","1d34a626bbaa898a60d4501936bcf962"],["/images/metroui/9.png","0663697c1667b377fe2623bd65e00b31"],["/images/metrouilogo.png","aea81b42d1c2c96440f74cf56ad82e2f"],["/images/nhkimage/2020.08.01.png","af4c55b2ae1d5ab2f56c75a87fcdfdb3"],["/images/nhkimage/2020.08.02.png","c355d41b90f5c65823f96c5f6868ce53"],["/images/nhkimage/2020.08.03.png","fddcedb40d7f28b2ccb90814351ad5c8"],["/images/nhkimage/2020.08.04.png","8b4518ec5a8513f442980ed7167136b1"],["/images/nhkimage/2020.08.05.png","590abfb19334b0c3cee5a005674f2253"],["/images/nhkimage/2020.08.06.png","d469e21100c42435e88f2bdf07f93da1"],["/images/nhkimage/2020.08.07.png","3ca9e2c8b8a09a38423d73cd36e8de9d"],["/images/nhkimage/2020.08.08.png","4420c2d899fe4eb90c48bae0da8418a2"],["/images/nhkimage/2020.08.09.png","df14be338f9c920818dd1daa6aa955ee"],["/images/nhkimage/2020.08.10.png","c4e2ed023cd3dbfd4986add35ca9357c"],["/images/nhkimage/2020.08.11.png","cf562339e57f673d394f3e6cdd1f60cb"],["/images/nhkimage/2020.08.12.png","81dfa179fea3052ddcf73912ea368f67"],["/images/nhkimage/2020.08.13.png","8cf26c2642e7a27cbd86fcbda8bae8d9"],["/images/nhkimage/2020.08.14.png","d88eeb678b3ed3651d597e61957e264a"],["/images/nhkimage/2020.08.15.png","b9879f193867edcffeefce62c9dc7153"],["/images/nhkimage/2020.08.16.png","46cb914aa1d556561897767ec9ff66a0"],["/images/nhkimage/2020.08.17.png","ea1af9645b5cc9cbaafe70a91dd15cca"],["/images/nhkimage/2020.08.18.png","e87e4de39a6f06cf4283a63af92dd8de"],["/images/nhkimage/2020.08.19.png","8001a951513b542a98ce1151be5bd87b"],["/images/nhkimage/2020.08.20.png","4bc8fafa3ecce30d340b1350715d78e3"],["/images/nhkimage/2020.08.21.png","07ad1337e127922abff27da6c672549b"],["/images/nhkimage/2020.08.22.png","b2b5d53ba46015f64048f9d803b12179"],["/images/nhkimage/2020.08.23.png","225af8c0cabe5218ec634d1b8815fd95"],["/images/nhkimage/2020.08.24.png","1d54a484a6e2395aabe9be005cd90361"],["/images/nhkimage/2020.08.25.png","8008ba169cfce0ef2041329cd29b6b77"],["/images/nhkimage/2020.08.26.png","72a2b8094003a54c97a34ea97cf21bc3"],["/images/nhkimage/2020.08.27.png","893407e604804d215c8fef8bcd5f2684"],["/images/nhkimage/2020.08.28.png","b542280b7341759890a99cbd44d822c5"],["/images/nhkimage/2020.08.29.png","620e2e7d4772e39615fd1a88cdf49717"],["/images/nhkimage/2020.08.30.png","f645d7ba2dcb506f9ec6fb9244425ad7"],["/images/nhkimage/2020.09.03.png","c5262f3aa87190e0273383ea1e445681"],["/images/nhkimage/2020.09.04.png","c07149c32aa41c03bc7dac82a713f6b2"],["/images/nhkimage/2020.09.05.png","4e43556e1cb3b7f4d75f0f6127616a54"],["/images/nhkimage/2020.09.06.png","1021d2ae04a7f109404f857a2a7629cf"],["/images/nhkimage/2020.09.07.png","db9827e9f0a4cf1401b559b4644a0204"],["/images/nhkimage/2020.09.08.png","efe1030b73dc1c01f169c3122a194426"],["/images/nhkimage/2020.09.09.png","f6ba3a1c6cdeff88404ebe2a646f2eb5"],["/images/nhkimage/2020.09.10.png","3471b05d02113517359a9e2167befcfa"],["/images/nhkimage/2020.09.11.png","921a541a8bffb1aa436df2eb6db7c99f"],["/images/nhkimage/2020.09.12.png","a51f8ebaddba69bb80f9259a30f17e65"],["/images/nhkimage/2020.09.13.png","0399889200493cd2154ffc407e2bc400"],["/images/nhkimage/2020.09.14.png","eaaf3da69a39ed316b7fc8c4d409bb0f"],["/images/nhkimage/2020.09.15.png","5774959ea4061c9298ea174f0862cc3a"],["/images/nhkimage/2020.09.16.png","0c5a00f74020740fda589c02e4b3f917"],["/images/nhkimage/2020.09.17.png","b5aef734e3a7db4862ca3fe4e6769dc2"],["/images/nhkimage/2020.09.24.png","5982a7b3843f4ae43b2b4bc4b0c577d6"],["/images/nhkimage/2020.09.26.jpg","c6415af781fbdd36fdb034f74646129b"],["/images/nhkimage/2020.09.27.png","27aa6f6a8d5534ccd99cff261dcd9eb6"],["/images/nhkimage/2020.09.28.png","0f4318d1ff17a33de364432a1c44b5ad"],["/images/nhkimage/2020.10.09.png","6408d9f7e66fdeba8b9207939a08cf8d"],["/images/notop.png","d25c272e5ce312a880e04ce8a0b27683"],["/images/pasted-0.png","552608d8f6e39369aa30c6e332a32826"],["/images/pasted-1.png","baafdacee93c99e99418aaedbf524fda"],["/images/pasted-10.jpg","395cff6f64ab5df19baa3572ac98e541"],["/images/pasted-11.jpg","56e5df07c96634638abf7995b25c81ab"],["/images/pasted-12.jpg","61b3f803b85ce3640d7a9ba7efb9da6b"],["/images/pasted-2.png","2f410e53c811f92a6135f48857776f5e"],["/images/pasted-3.jpg","bb5717e691e87355e7d63a5f3a87ae62"],["/images/pasted-4.jpg","10041d0e3567b24b81222ec5075d6492"],["/images/pasted-5.jpg","ac5047a4b48c6cdaee86fa1863e33904"],["/images/pasted-6.jpg","1556ae8d3ad5713d60237ee4d10e81f0"],["/images/pasted-7.jpg","913fde1686587646ddc663bd810cc81d"],["/images/pasted-8.jpg","fc83268081fb4b6b6ecb1ffa1ec5af7f"],["/images/pasted-9.jpg","25e0fa3496591501f5c29d0b802b77d2"],["/images/pet.png","2b8c121909497e57057478856fe48a94"],["/images/pet2.png","dfb1d6a17b527ccc0c600e6ad31f55e5"],["/images/ps1.png","0917ba91f21b6944dc08d35c41a326d2"],["/images/psb.jpg","6a27c58337875c776af0a7667598b401"],["/images/quse.png","7cd1ec12b804305430cb4cdc09c7a893"],["/images/rain.jpg","9c26acc44c692b6a63e134be07b07c18"],["/images/rainsmall.jpg","e8c91c40bef224fc5a3942bd0d007b84"],["/images/shezhi.png","281bf545f6a4024e2d0b7120bc398a21"],["/images/shuo.png","9cce9df6e32e00e49471b9a9f089f6aa"],["/images/soul.jpg","d97b4099c0728ff6123d006fa62db86e"],["/images/study.jpg","a9b1cf95ee6bd9f3913e8ec6a6a6f44f"],["/images/tianqizhizi.jpg","dd48d78b4eeaaa52578352f9ef570b14"],["/images/vue.png","cf23526f451784ff137f161b8fe18d5a"],["/images/vue1.jpg","8cbf18302c6fa72e2a40d0cca0832213"],["/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/images/work.png","e521cf5b834292fde1c50e0a0f5802f9"],["/images/xiaoguoyanshi.png","994a3b710d36df0a4630cd9a768c7f7b"],["/images/xiaoguozhanshi-m.png","1fefca18214fc4889d1bb76b81887c9d"],["/images/yao1.jpg","9dfddaf8c121fc8db788a87d133d6376"],["/images/zfe.one.png","b41f689341882058ffb28c4cee499bde"],["/images/幻想终结之日.png","0025c4d3973bdfedb80db3f78c59fa47"],["/images/时空战纪——游戏建议及意见①.jpg","1337457f14a8dffee66d94f8915b54ff"],["/images/简历.png","d70507ee4615c9e324578c0d777e6855"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favicon2.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","96781aa40e6fdcc04d06ef182a0ed926"],["/js/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/APlayer.min.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/airvisual.js","71cf86bfd452ca01d92438d8266416ee"],["/js/airvisualapi.js","6931bebe1696688d109963187fc2eace"],["/js/artitalkkey.js","ad2c74320c63125a36319659657d2886"],["/js/background.js","94c8410b174f58594cf81ec99054968b"],["/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/js/calendar.js","a58e02711cc6dec4dc04257e555b8923"],["/js/catalogMagnet.js","0387c6ad152e7a6076cceffc7420be77"],["/js/clock - 副本.js","405186e7a9d73221d2d50c0dea2852d0"],["/js/clock.js","2fdceb94cc57b551cd245b0001927b66"],["/js/color.js","3730bb4f7b185e6f5130ac28bace968b"],["/js/dan.js","6b6ae6b7f1b42dd4857541f43b2bb733"],["/js/echarts.js","dc1227b1eba1ba47fd185a387d0a7d37"],["/js/gitcalendar.js","fadfa8a42272cd322118653dca512a7a"],["/js/history.js","20459f7db325e597e64903f4c0d19306"],["/js/historyroll.js","a3e9ac376106816c50a61f9f4306d671"],["/js/jam.js","462c07d3b2e0f20394d994bbcfae37cb"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","455fface5a0a3ff90766ca254affe502"],["/js/rain.js","f656dc28e4ab5c3f8414d35f683278c1"],["/js/rainremove.js","ceacf82842b101f7e54a2aaf5f4bb9cb"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["/js/shuo.js","1076b1ef51358cc11b6ff3bab25e15d8"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/link/index.html","e6c6f6fceca4e916abd057ffd4f080eb"],["/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","f19bac93249db2c63aa711909d234329"],["/page/10/index.html","a2a7c185ffc36adcde1eaa5da0e1c8c2"],["/page/11/index.html","a812ed7618375af6bb79c65eaa6239aa"],["/page/12/index.html","f558d4b56313202c5b32dececf6612a9"],["/page/2/index.html","975322593f6aadf1eddec36a2dc23ec1"],["/page/3/index.html","f5c78eef424236c0f56d22b173fe4847"],["/page/4/index.html","d9d4b23abb6a0ce02b275ff68ab45ebc"],["/page/5/index.html","b2e849b7df9e844d7d50b33ab17d93b3"],["/page/6/index.html","f0e72f1ccc2b5dcc54479834a95a9a6b"],["/page/7/index.html","3a3fb49a642e4dcfe994c87a5e971bde"],["/page/8/index.html","d7786bcd9e63f8eaa55899b62c90a587"],["/page/9/index.html","6c37194298e8369184906dd52357fd02"],["/research/index.html","3a0c0560209714de4d9b48a992aa938d"],["/sw-register.js","47bb687dc1cf49bd95648abfd9ce6a29"],["/tags/Butterfly主题/index.html","5fdd66daae479184fb924bd613c829db"],["/tags/DIY/index.html","19fb2fa14022b717c2509bbc7f6808fd"],["/tags/DIY/page/2/index.html","998460ad435cc5038e41202c93ad0da4"],["/tags/ICT/index.html","fe73f5bf5a75f4aa2dd8c0781d42e115"],["/tags/NHK听力练习/index.html","0d54c0e709dbde62608ae27536e58532"],["/tags/NHK听力练习/page/2/index.html","3ed7433ff4f149a158bc68f715f4495c"],["/tags/NHK听力练习/page/3/index.html","3f67c35430c2d61471819eef4a9a9648"],["/tags/NHK听力练习/page/4/index.html","dca67e10998c7ad5232d8705dfcfa00d"],["/tags/NHK听力练习/page/5/index.html","fb097d67224500c2bc840470dacd7bba"],["/tags/NHK听力练习/page/6/index.html","09018d5e54be637e96438de0e24d9aa6"],["/tags/metro-ui/index.html","98b176afb97c2fe5b02084dcdae8f6a4"],["/tags/vuejs/index.html","fd97df21db6ad389db8e3ac53ebf538d"],["/tags/お盆/index.html","d5dab419cc1535e67504bf7b8d9c686b"],["/tags/世論調査/index.html","82cb2e2ae0da29d6935aaf20d196a8f3"],["/tags/作品集/index.html","27830cb695c0ff0d6f5712d1f34cd4f1"],["/tags/作品集/page/2/index.html","e977795277eef9119bb76f973aeffbed"],["/tags/农业/index.html","b416849524e6425647fa6fd27529d3d2"],["/tags/历史/index.html","8d7acf2783ce12e9bad8ec7d37597351"],["/tags/営業時間/index.html","99bd4f5e0a6ce16bc2b6d18892f5ae87"],["/tags/国外政事/index.html","79d893aa35703c27de04e9c090fa10a7"],["/tags/地震/index.html","49c9271b869adae034fd9cf8c8fcf92c"],["/tags/外国政事/index.html","6573ef6b96425630f34cf92dcf5f4f03"],["/tags/天气/index.html","ee946650ea5c21026d57baba1f8ca9a2"],["/tags/天气/page/2/index.html","b7c4e9ad5505b06b0c5fe667e3158e03"],["/tags/奥运会/index.html","7711bcd00286532066c2d6bcc5dffd36"],["/tags/学习/index.html","f7dffed0fc8bd8e2179a47361b67975f"],["/tags/学习/page/2/index.html","17f45578fdde6dfb7b97ecc67e6c749a"],["/tags/学习/page/3/index.html","7b21ca42dc6750701d87ef29f3060580"],["/tags/就业/index.html","d83e7ca07f9c212227f8be99d439f2f3"],["/tags/庐山/index.html","718c2c0420e58dd8a5ca93a1c4788ba4"],["/tags/座礁/index.html","2af25aca1a588b16398eebbc2653180a"],["/tags/政府/index.html","8f4a2401204e269d659585b0e432ae15"],["/tags/政治/index.html","1aa32cff8dffcd8ee1eeed36a1e1f95b"],["/tags/教程/index.html","3ef58c70b0c7c08dac1b29c82f2d95e4"],["/tags/教程/page/2/index.html","f3c6e9b7c57769c62e9b9e5a8cc1affc"],["/tags/日本教育/index.html","336faf37a5d2ba63dfd35cfee3117766"],["/tags/民生/index.html","083a0cb3373d1780bfa08ce039da9de6"],["/tags/民生/page/2/index.html","767d0dd67fb5132f88c8981508fe81d5"],["/tags/游戏评测/index.html","5a17e271c45264d5b9c2399b3bf27da7"],["/tags/游记/index.html","57d72ca8071fd50f776d2d336cebffb4"],["/tags/生活趣闻/index.html","0de20fa186d291a81efabd1ae50478ac"],["/tags/科技/index.html","e6569dbd663dc98ba26e585f790223c2"],["/tags/经济/index.html","ed096867a58bee231ac5f80dc85cbb2a"],["/tags/经济/page/2/index.html","cfadab89aa04f9509cfc822048b09819"],["/tags/网络教学/index.html","3330d6d374200a11223ae7214a0637ac"],["/tags/舆论/index.html","59e42570d8e2a47116bf10449e4b991d"],["/tags/虚拟现实/index.html","d6cad29eed92bac5556d94addf5ce363"],["/tags/随想/index.html","c15b2208c9e642027f5a14a890dc9ca5"],["/tags/障害者/index.html","e2156a8172b71705e8c456fda204d629"]];
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
