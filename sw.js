/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/05/20/2015-05-20/index.html","13b6e5e7450b6543bbee2b21e11ce94b"],["/2015/06/16/2015-06-16/index.html","0c6e71c96800c1773ddc6dfd49465e50"],["/2015/12/12/2015-12-12/index.html","3c9f4ad2bf903bdd248411f527884024"],["/2016/06/08/2016-06-08/index.html","0608d281eb06ba5f8c73deb3dc7a9784"],["/2016/12/18/2016-12-18/index.html","9d20edd453c49121031ac70a65ca12a1"],["/2017/02/17/2017-02-17/index.html","c7cddfcd2a40249a6128e2778c7961a1"],["/2017/03/17/2017-03-17/index.html","494fc50608e1121cb0c057fdd7543fd2"],["/2017/04/06/2017-04-06/index.html","fb0988987fb46622b7e912a26674ea71"],["/2017/05/17/2017-05-17/index.html","605e2d115b21cd0c84b28197296e11fe"],["/2017/08/15/2017-08-15/index.html","63b13f50d5c8553b861a416b65b29962"],["/2017/09/16/2017-09-16-1/index.html","76efe7758179c02cea238e2f64c2b383"],["/2017/09/16/2017-09-16/index.html","31df988ddaf54f0249c59b4e3544a7ee"],["/2017/09/21/2017-09-21/index.html","8261a2ac4e6515e8b6a7b75cb1e39463"],["/2017/09/23/2017-09-23/index.html","66bc0ec9ead141ba80262008dc366330"],["/2017/09/26/2017-09-26/index.html","50cd26f4ef24a7d7c63d4c3be77f5f0e"],["/2017/09/27/2017-09-27/index.html","358440a2f64348256dc053ae2455ca31"],["/2017/10/04/2017-10-04/index.html","96668d9ffaee36bc9939b1752d059ee2"],["/2017/10/08/2017-10-08/index.html","db20fd24810b8862e1cc9ff8f5939c56"],["/2017/10/09/2017-10-09/index.html","b018adc90da6f228900200e7bf454197"],["/2017/10/15/2017-10-15/index.html","f19052aa4db62c56ed9e1d862aab28e8"],["/2017/10/19/2017-10-19/index.html","202b0b125eaaaba6a154994b733ec10d"],["/2017/10/23/2017-10-23-2/index.html","0197c38674dfa8cc0a334e3d2501381c"],["/2017/10/23/2017-10-23/index.html","313d5909e5d3b05a7435a88c5789b812"],["/2017/11/08/2017-11-08/index.html","a5fd4134beca9e1b8a99ddb2499ffef8"],["/2017/11/12/2017-11-12/index.html","4aa9a913dd1528363618761071f5df19"],["/2017/11/15/2017-11-15/index.html","a86ae1d695b7752c6770464a813cc154"],["/2017/11/27/2017-11-27/index.html","9d692fb7f5df11192937e14756dc5d84"],["/2017/12/06/2017-12-06/index.html","aad9223c26b2be818d7276aae45e3723"],["/2018/02/12/2018-02-12/index.html","bbc541c5f2d2abfabf13576908059d11"],["/2018/03/26/2018-03-26/index.html","da365240a58448f880455dcb7e351cac"],["/2018/04/02/2018-04-02/index.html","96091d77d92b49c41fda001098a9774f"],["/2018/04/24/2018-04-24/index.html","091fb79f2bf74b1c7a08c7abe66b144f"],["/2018/05/18/2018-05-18/index.html","f74d46dd88cc5114e80fa0d01636f3ff"],["/2018/05/23/2018-05-23/index.html","c293732cbcab7ea0ecde62a255e24bcf"],["/2018/06/08/2018-06-08/index.html","c03433e05d7b6ae96fc509a5905f480e"],["/2018/07/01/2018-07-01/index.html","8074d1408f60d8c71963d03367d86ac0"],["/2018/08/30/2018-08-30/index.html","8d40f0b1752897928493902e07389406"],["/2020/07/20/2020-07-20/index.html","6896a23a5e1b079409157072044f2a81"],["/2020/08/01/2020-08-01/index.html","5331df61acb66815c6b052e64e25d95b"],["/2020/08/02/2020-08-02/index.html","95c25ffd27e2faf0c2c53c7def849b02"],["/2020/08/03/2020-08-03/index.html","f41b62f5d75d60b76637dfefebeaf511"],["/2020/08/04/2020-08-04-1/index.html","4ef3b456c7b868c98ff6abd78a7bafa8"],["/2020/08/04/2020-08-04-2/index.html","7614780417cf8dec5f439c4a08c150dd"],["/2020/08/05/2020-08-05/index.html","a08cfd4498ebba5b88d4f69a28b04dce"],["/2020/08/06/2020-08-06/index.html","5a8505ac921fa718dbd26dcac1f94296"],["/2020/08/07/2020-08-07/index.html","60657cf951416e46c3ae9db30ae5ac01"],["/2020/08/08/2020-08-08/index.html","f45139bc2978f28af15464f791023615"],["/2020/08/09/2020-08-09/index.html","02813ca24851b71d201bfc2a7e7affc7"],["/2020/08/10/2020-08-10/index.html","9126a398ce1018c096ba0697ab633c0a"],["/2020/08/11/2020-08-11/index.html","c857c841cd726ff572c4c1a16e067f86"],["/2020/08/12/2020-08-12/index.html","d6955b9c84b8176d02aa41ee8430295f"],["/2020/08/13/2020-08-13/index.html","4d42b06a734c767bd7a845a5a34a4374"],["/2020/08/14/2020-08-14-1/index.html","9ba1b4db002e3426069a19a1b2ac801e"],["/2020/08/14/2020-08-14-2/index.html","2c8f09c211ba03282b327f1ac0a7db64"],["/2020/08/15/2020-08-15/index.html","06fb265804c3e8384594075af45d8c75"],["/2020/08/16/2020-08-16-1/index.html","072db914f395e66eda278b719264861e"],["/2020/08/16/2020-08-16-2/index.html","6fa2db7f4c53f4c0d1592f323ada0bd7"],["/2020/08/17/2020-08-17/index.html","ffa0036eab37175d921de3535b890397"],["/2020/08/18/2020-08-18/index.html","cbc4f62a7e24056a80065bde49b15e52"],["/2020/08/19/2020-08-19-1/index.html","d19887cc90bb097f3bf4713c5181955d"],["/2020/08/19/2020-08-19-2/index.html","5e033a35e3a228a767c09fb24f24117c"],["/2020/08/20/2020-08-20/index.html","3f2a6799e42c02522737a951ea9d61aa"],["/2020/08/21/2020-08-21/index.html","d9f784a0a8f10d7a0616dc5aa33d8963"],["/2020/08/22/2020-08-22/index.html","e955830c4e3e5e4be1437162179cb19e"],["/2020/08/23/2020-08-23-1/index.html","a0bcebafe32dae51b9cea1a65d5370ca"],["/2020/08/23/2020-08-23-2/index.html","b744e00285348f9bded05857c15adc1e"],["/2020/08/24/2020-08-24-1/index.html","4f3d88b7bf633017ffae1f0c4850a24a"],["/2020/08/24/2020-08-24-2/index.html","5a4d956151e2abcec74e0a73d3f395ad"],["/2020/08/25/2020-08-25-1/index.html","032ca10ca706ca9f6a6ce2b12827770f"],["/2020/08/25/2020-08-25-2/index.html","ac42aeddcab06ee833a57c3b9ea806a8"],["/2020/08/26/2020-08-26/index.html","bdafcb14465ff53de3c7a76dd9eb173a"],["/2020/08/27/2020-08-27/index.html","cd8b1d7fda210ba278223fa4fd51139e"],["/2020/08/28/2020-08-28/index.html","fcaf70d75f77c61662dee9ba70b2c6b9"],["/2020/08/29/2020-08-29/index.html","a1ece6d18284319d29f87449326ec5d6"],["/2020/08/30/2020-08-30/index.html","733d4c3939c99d94c3766c47315362eb"],["/2020/08/31/2020-08-31-1/index.html","7308cd66074b2338cc7d42201943b7b8"],["/2020/08/31/2020-08-31-2/index.html","a1926530e897345e8dc1d7bfbe13e5b5"],["/2020/09/01/2020-09-01-1/index.html","99cb16e3f8e6839c676b5ceed23a8414"],["/2020/09/01/2020-09-01-2/index.html","64ea4ce3e2f70f839228ccd7cb4b0131"],["/2020/09/02/2020-09-02-1/index.html","0c159a522ddde5a6fd35b383112514a5"],["/2020/09/02/2020-09-02-2/index.html","1ce8c4c59783f0550d9ea966d9a5f654"],["/2020/09/03/2020-09-03-1/index.html","eed7ad0431a6c5eef8511fce85780f64"],["/2020/09/03/2020-09-03-2/index.html","ba1ff8c4b51870fde3e6870286cb3a6d"],["/2020/09/04/2020-09-04-1/index.html","6acfbd8edbb39b3c1853a8f6b8c7c30d"],["/2020/09/05/2020-09-05-1/index.html","10cb1ad94743d6649c9a9fc1688d15e1"],["/2020/09/06/2020-09-06-1/index.html","2307cba9e59751d1f5bef11174e10d94"],["/2020/09/07/2020-09-07/index.html","961d7435edf08a70e45e738a5c763e8e"],["/2020/09/08/2020-09-08-1/index.html","6361905b9105bc73acbf73ab4b4eb16b"],["/2020/09/08/2020-09-08-2/index.html","45c3feec0fafdb70264f5da9891d2e37"],["/2020/09/09/2020-09-09/index.html","f695d001cc2c74629fee472faaadc890"],["/2020/09/10/2020-09-10/index.html","deeff4777822e9afdcda66b013d57f96"],["/2020/09/11/2020-09-11/index.html","4ce3eefa4e038f12461472f2e3533716"],["/2020/09/12/2020-09-12/index.html","74f213645ab81b2a13fb50f910717fa7"],["/2020/09/13/2020-09-13/index.html","24723b807f212248a346ffb02b9b7572"],["/2020/09/14/2020-09-14/index.html","f9fc1e174b7123c1d28b2811d77f71d1"],["/2020/09/15/2020-09-15/index.html","f6426a27e1a151333dd928e95e0e0fca"],["/2020/09/16/2020-09-16/index.html","02962e8954c3b382dd620a0963e4cdbb"],["/2020/09/17/2020-09-17/index.html","0016b7e25becaff15423939c0363c968"],["/2020/09/19/2020-09-19/index.html","fe1e64d14731059f9c6b4677a7eb72ad"],["/2020/09/23/2020-09-23/index.html","337bdaa1cf724d60820a4f1c6294d95c"],["/2020/09/24/2020-09-24/index.html","596eef0c1e9f1758e5bcd129cb4849e7"],["/2020/09/26/2020-09-26/index.html","8548763c5beb5c1d24d1037e263c3e51"],["/2020/09/27/2020-09-27/index.html","65a2e80f19f65a103e02c63a8c9c60a0"],["/2020/09/28/2020-09-28-2/index.html","8b3346a2ef530e3a1f53595751fb45e6"],["/2020/09/28/2020-09-28/index.html","6a3996411dee3876b9160007ac7e97ea"],["/2020/09/29/2020-09-29/index.html","38d15dd0557dc587f12839fe37242581"],["/2020/10/03/2020-10-03/index.html","ea66090eace5853b946ff5e6aee3f8b3"],["/2020/10/04/2020-10-04/index.html","1e3267d7ed5a78c3e216a427e9f9fb12"],["/2020/10/09/2020-10-09/index.html","086de323e4d1d35c10086b9e811af2e4"],["/2020/10/10/2020-10-10/index.html","75d7fa25422ee1b3ce93d0b1a94ea012"],["/2020/10/11/2020-10-11/index.html","fe78cd9353222fd11ce97fc4392f61db"],["/2020/10/12/2020-10-12/index.html","a9179d0c012c99635afa539c13add543"],["/2020/10/13/2020-10-13/index.html","681425399f3c291518a94075b215bf43"],["/2020/10/14/2020-10-14/index.html","1d45674f8f4f6240015326419d3256b0"],["/2020/10/15/2020-10-16-2/index.html","6c1366334d10239d839d84e2939f6dc0"],["/2020/10/16/2020-10-16-1/index.html","047ac0123ffb0ed35d8069739c0cf3e1"],["/2020/10/18/2020-10-18/index.html","6d47f0d86c3685b4227bc642b270493f"],["/2020/10/20/2020-10-20/index.html","6d6022e78998dcef6fa0cea5e722d9d0"],["/2020/10/20/2020-10-21/index.html","c072331c02d787dcb021465dd9d79fb5"],["/airplayervisual/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/airplayervisual/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/airplayervisual/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/airplayervisual/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/airplayervisual/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/airplayervisual/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/airplayervisual/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/airplayervisual/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/airplayervisual/index.html","59d30efb04086f2b3faa0a9ba064aeb1"],["/airplayervisual/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/airplayervisual/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/airplayervisual/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/airplayervisual/js/jamsetting.js","7927507e0080ddf55c6d8b5f526bd942"],["/airplayervisual/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/airplayervisual/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/airplayervisual/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/archives/2015/05/index.html","c5dd6f25132b9b0b3955c3ccd0476cc5"],["/archives/2015/06/index.html","8a523fedfb642ac958b83bdba5866dd8"],["/archives/2015/12/index.html","e81bf750fccfb9105f34a6b2d9e993ed"],["/archives/2015/index.html","bea1b4e40f7d595ff189339214f47177"],["/archives/2016/06/index.html","4e9a97f2a31aec42539393b498e45790"],["/archives/2016/12/index.html","eafe4356b42c78ecde0b7d4ac8c3f185"],["/archives/2016/index.html","e243ae4abeed0f1d5af929ee2a8c6c3c"],["/archives/2017/02/index.html","b1054186ed68bed0910016f10fc3f0da"],["/archives/2017/03/index.html","899d8e2fa61b5a6d588682faf2c5bf48"],["/archives/2017/04/index.html","e4e871bf517297788931299d91318637"],["/archives/2017/05/index.html","226ede0c4834638a7da3856e98456452"],["/archives/2017/08/index.html","bb4355477a8a2dcf59af2343583c1c85"],["/archives/2017/09/index.html","a05e4579960961fbb7279ce1d2ef12df"],["/archives/2017/10/index.html","1d06c05298e7d945df0a7f8df49df753"],["/archives/2017/11/index.html","a24bf02c4a7659eccd578b4db505d78c"],["/archives/2017/12/index.html","e8612556946d3bc894c89f052a8c08e8"],["/archives/2017/index.html","314ebefca66b4db1d39cb13d9e80a79a"],["/archives/2017/page/2/index.html","fbcb27edb43b0bc4393c8d954ad4ebbf"],["/archives/2018/02/index.html","c99a6312622a2befbd34c070797b470d"],["/archives/2018/03/index.html","8501aa982372c05aa469fed6ebb0b130"],["/archives/2018/04/index.html","a3173754109566710bbde3794e3fb00b"],["/archives/2018/05/index.html","ccecb2bd5e031160f71dfa7235f0f10a"],["/archives/2018/06/index.html","de2b473f53c6b85073bc5f4515e9cd13"],["/archives/2018/07/index.html","73b190d7eb98a297bd77e48a25751dbc"],["/archives/2018/08/index.html","6e1ed2b94b13d4785323f81cd8d231ba"],["/archives/2018/index.html","d57be3ace43e51a524a351d205d0ce7c"],["/archives/2020/07/index.html","81100ef3bb9d9a5b92bf261e75416d1b"],["/archives/2020/08/index.html","776bc03449fb45f93f2b84e67109405d"],["/archives/2020/08/page/2/index.html","69e1c3e8537629ef57637f205105590e"],["/archives/2020/09/index.html","7f5a9f2e0b8c40d7f542190906a73a0e"],["/archives/2020/09/page/2/index.html","ba77456d37cb3f152e2f94515a30f803"],["/archives/2020/10/index.html","c6bf8edc330574183ca30f0290e86724"],["/archives/2020/index.html","c47030089de5e67f2259f7f28b62d54d"],["/archives/2020/page/2/index.html","bb8b757cd9cfc1cd0ec095a910aadce7"],["/archives/2020/page/3/index.html","b92710222142988a8862286abd9ce8d8"],["/archives/2020/page/4/index.html","734a369ba1919262eb2047b20c26e191"],["/archives/2020/page/5/index.html","8865f862d840e776a42f375880d4d9a9"],["/archives/index.html","24b0acee93a5c7bb015e4db259425cb9"],["/archives/page/2/index.html","7a9cf51b769729187bd826adcef7f796"],["/archives/page/3/index.html","9b853144c1c7fb7b1726181bfe964c10"],["/archives/page/4/index.html","96a41591d4f31800fff1f2f702e70c05"],["/archives/page/5/index.html","1d7bf3313d81573373d0619f9dd3143c"],["/archives/page/6/index.html","b7f984a7a2c30b7164edc2931b306815"],["/catalogtest/index.html","17892eab2e0c5ad7d2d1dc4950017d41"],["/categories/NHK听力练习/index.html","33fdeb85783a4175b208c545b38082e2"],["/categories/NHK听力练习/page/2/index.html","98618097b22d697819eb51e153b97d20"],["/categories/NHK听力练习/page/3/index.html","14a84ef2795fd8bf31a271933cad5846"],["/categories/vue/index.html","f5cab2e07ab5610b8e3e9e6e52f61116"],["/categories/作品集/index.html","a4289643e2ca33735db061b7dd731e31"],["/categories/学习/index.html","541e3514acbfc6703a1f62d281e4629e"],["/categories/教程/index.html","e280f50c01def83df405408fe2d7644c"],["/categories/游戏评测/index.html","36b793b5216e98d47d8bfb316fbfdce2"],["/categories/生活趣闻/index.html","1d99e2af85d2a38ec5dd981579857048"],["/categories/随想/index.html","f276d1efe00c4c45e433677451756180"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/addcss.css","d20fc732e0cc7996bd82c5170b7aaa86"],["/css/background.css","d013642f5988333ece3b04912f099111"],["/css/calendar.css","0090a32d2a61d42c5bfed254bfba078c"],["/css/clock - 副本.css","65602c2385c7eab42ee3804cd6ee0a5a"],["/css/clock.css","9db53e3bffb704c740aa83bddaf8b999"],["/css/cursor.css","f514da9c81fb3fcb4f7e9038dfa30874"],["/css/danmu.css","2a5b914a9592bcd353425c6d5fa7af8e"],["/css/flow.css","72385be279577699db3ac72749a4db21"],["/css/index.css","6e2f553bf999c24bbcb9e2e3c19e0f7e"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/loadingline.css","bc1ee020a6a11fea17b915b97e6978bf"],["/css/shuo.css","8db924024099e925c53d5b3dd22f83c6"],["/css/sortable.min.css","a4c7bddbdc32317dbb63a31244a82556"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/html/calendar.html","bddcec1edba7f4c49fe5cd75f8cdf5b2"],["/html/shiyan.html","af740d9ed65140fff73209d5f53398ae"],["/html/shiyan2.html","77a91a2b16d5e1adddbf751c7bd97424"],["/icon.png","8ec68de45d18642ba9baf2447e62f476"],["/images/201808011428/css/htmleaf-demo.css","a8256346bbe444fe604987f1fffbd31f"],["/images/201808011428/css/main.css","9afb83b1ea44d47f859a57395fe64737"],["/images/201808011428/dist/sortable.css","6b6b3d6f85a3497ee9e71b16b7223f60"],["/images/201808011428/dist/sortable.js","d199f4ab84617e894975f4757dbb3c17"],["/images/201808011428/dist/sortable.min.css","a4c7bddbdc32317dbb63a31244a82556"],["/images/201808011428/dist/sortable.min.js","0351fbccf2faed49062495990e32a14f"],["/images/201808011428/fonts/icomoon.eot","3891455c55b76ce7f7c86bfc33cd6493"],["/images/201808011428/fonts/icomoon.svg","bb97ed129aa43f69280d3085cd269102"],["/images/201808011428/fonts/icomoon.ttf","e46c36b6f94cf81311ffb383f6d32bec"],["/images/201808011428/fonts/icomoon.woff","d1117ddce10d8c7ca18ac089764da08d"],["/images/201808011428/images/item-1.jpg","c4b8c20bee5947eba1541a6a8a60a5ce"],["/images/201808011428/images/item-2.jpg","dfb3e34508b4060140150784cac9658c"],["/images/201808011428/images/item-3.jpg","4f40a1d501cbd4ebcd1f617078fd6a76"],["/images/201808011428/images/item-4.jpg","04a5d629dd413b49e960437cde7dcedd"],["/images/201808011428/images/item-5.jpg","370daf7210529430a4313b29bdad6269"],["/images/201808011428/images/item-6.jpg","93ce2054bde3d9463270d9f481012652"],["/images/201808011428/images/item-7.jpg","6a0345cbc8c6ac5e909f86e6faeeb0fd"],["/images/201808011428/images/item-8.jpg","4dc81e428730ba2b021dd4993385db4b"],["/images/201808011428/images/item-9.jpg","2aa5f8fc43fe5eca9bd8394a36f1b4d7"],["/images/201808011428/index.html","bf72ee3a7f719c31a66e1d7886fe2237"],["/images/201808011428/readme.html","a301fbd866df88b6a01bf1e895e029d3"],["/images/201808011428/related/1.jpg","f4f33eb12a48c6bda46a1c371db24e5b"],["/images/201808011428/related/2.jpg","891bf31b875ab7588f138185019d5166"],["/images/233.jpg","13e6ddf019e5560a32f3ff82efd22344"],["/images/AMJ1.png","d27a6725d1aaaf5324248da4312ab6c2"],["/images/AMJ2.png","00e22eba5901e5bd674e42228cd5bd26"],["/images/AMJ3.png","c8c9ea6348dfcad3a641899d5b587431"],["/images/FOTO1.jpg","4b6f100861908e2c7044cffbdb4a0c1a"],["/images/Isolde-1.1.6/Isolde-1.1.6/LICENSE.html","26e9cd9ebe02f594d6f8c585825e066d"],["/images/Isolde-1.1.6/Isolde-1.1.6/README.html","0f6437f09b8cb63d406a459a1b6f5d63"],["/images/Isolde-1.1.6/Isolde-1.1.6/dist/isolde.min.css","e859dcc0f568c92bdc4b7be3f3b7d7fe"],["/images/Isolde-1.1.6/Isolde-1.1.6/dist/isolde.min.js","c5f5cc1595efdfde4d0b1b1415c6ae25"],["/images/Isolde-1.1.6/Isolde-1.1.6/docs/OPTIONS.html","4692dfcf530eabe3e5400c9a9bb4efe5"],["/images/Isolde-1.1.6/Isolde-1.1.6/gulpfile.js","8d329f641050ed4e2a93a4cc914bba1d"],["/images/Isolde-1.1.6/Isolde-1.1.6/index.js","9fa8aa3efbd2e9eef8acc5f85752ad3e"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/css/main.css","8697f186bbc389515aa6eab3a5c9316e"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/css/sortable.css","04fca21af7d48dc17591894d17aa8358"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-1.jpg","8e757354b2917abe5dde088cbc82dae6"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-2.jpg","8a5fcc4cebc52caf89eb954285edae6d"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-3.jpg","caeae3d2265de3dad6d4b16dfda1fd05"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-4.jpg","1622226c2f5ef489c55f028caf26bafd"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-5.jpg","677d53cc36ccc311e11cd455fe222621"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-6.jpg","bdedef62cfdcdf9d273fc51a0ace2563"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-7.jpg","2faba84c41dc5f0670efd3cc0b139eb4"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-8.jpg","635c6292e642ab737eed6411c3295da6"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-9.jpg","e1c4d431a72b8bbf084451939ca86595"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/isolde.js","1ddba0575c730fe2318c6450dfc4f403"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/index.html","d7818957b795e9c74fc6dfd5106ffed2"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/isolde.css","b8011c458b923321a755da760cbeb5f0"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/isolde.js","1ddba0575c730fe2318c6450dfc4f403"],["/images/MVVM.png","ea5a002ee2f85c71a0db51d5adb5de19"],["/images/UT.jpg","367f4e432f9db55a92b2a290c4b0a476"],["/images/UX.png","a183974e958d41d1b6acec70bb7ea00a"],["/images/WindowsTerminal.png","8ac29cb56b8a1768cf7de071e9f1ae6f"],["/images/air-w.png","c1cc32f9d3e17551ca11a7d18a0b533a"],["/images/anzhuang.jpg","912b2489957f8344406edc5e5cebe5fa"],["/images/api-setting.png","2c0bb074390779721cba009e96c5417c"],["/images/apikey.png","1f31121b190eb1f990bcc3e27524bc03"],["/images/b0_img.png","43fcaa3f8b394ca5be957f4b860800db"],["/images/backpic1.jpg","86a6fa88167feb338fbf1a4e9057114b"],["/images/c0_img.png","34397085b4d3349034f9b167469ac626"],["/images/c10_img.png","7938c5b0dd789db4f262e5a618943a9b"],["/images/c1_img.png","95211a0ebf07befde1b11477c3a8185b"],["/images/c2_img.png","456ba51725d669fc4d005787753a6b08"],["/images/c3_img.png","a0aa7dcdd2ed5bccec52c16942036a3f"],["/images/c4_img.png","0869cebb60d00a78936b7498823a39de"],["/images/c5_img.png","533774e840ccb3ef13b46201a54be05d"],["/images/c6_img.png","db9eb681dea0b7911f0b2ba918d86c26"],["/images/c7_img.png","5b9c9e0331aca2a9d47a2730512f34f5"],["/images/c8_img.png","be9107995f185e3bbf7186c4dff69f42"],["/images/c9_img.png","642a2e762b74a28d2426af14f2b864c1"],["/images/calendar.png","86319b08b93be7c8bc47cdba7a169563"],["/images/cataimage/b1.jpg","e4795ce34b4d070d251c37a2ae5e37eb"],["/images/cataimage/b2.jpg","e1a7402c7d111b33d22c187a794e693d"],["/images/cataimage/b3.jpg","c091fe2a8024b2f010911e9af8091147"],["/images/cataimage/b4.jpg","1a2190b3e7ecb404767f029642adb637"],["/images/cataimage/b5.jpg","2683b29be7ea536b2d2c0b428ab87a80"],["/images/cataimage/b6.jpg","8eba752c28594ff5a253a01c0904a4a4"],["/images/cataimage/b7.jpg","9259255b1e1ec36bf92b4f34ad68db7f"],["/images/cataimage/b8.jpg","beaae9e5c735657f2e5bba9eb3deb754"],["/images/cataimage/b9.jpg","7ea8994ee380e84190422ac1b1d93ed8"],["/images/clock2.0.png","0a0f122c7a25262fc02ee99df0ef21eb"],["/images/clock3.0.png","8e04375c183c637b65fb50ed40f46466"],["/images/example.png","aaac9983e5d59f919bf282dcff2edb3c"],["/images/foto17.png","28db4c6608ad1ee6b34238cafab25e5e"],["/images/foto2.jpg","be95b922512d004a61f83c97af3e2602"],["/images/foto2.png","0dc07d4e1b00526a273a89dc8b81548d"],["/images/foto3.jpg","551c0616c92c4ee7cc17dd458b3c46e9"],["/images/foto4.jpg","9d1d9fea759a41afc0061866e400339a"],["/images/foto5.jpg","984f618b15372f37d54f507e6f379f10"],["/images/foto9.jpg","b683fc0b998e80ff8f5a3e45e889807c"],["/images/girlpic.png","ff1e8427ed555af639e6d849f8f648f1"],["/images/girlpic1.png","698e5570e821c3cae643cc9777c2292e"],["/images/girlpic4.png","551882e4b9b6afb79000fd34c0dbf5e5"],["/images/headimage.png","332502f36a0297b30cb7969fe6de8451"],["/images/hexo.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/hexoWT.png","c027cc9f5665c7d7ba657e7a4bb40017"],["/images/his-json.png","7d8a71e38ab684107446e5c72c31854e"],["/images/history.gif","0459a3dcf2317253de0b34482880c63c"],["/images/homework1.png","e8d2f64d0785519ea7779016208a2900"],["/images/idea.jpg","5eb08bf6c965588f03c8860f201cac45"],["/images/key1.png","f2a370e02ad6c5a101db20b47a9a0008"],["/images/key2.png","21dc40bbe0377cd9fe85a9cb431c18f0"],["/images/life-cycle.png","02f39ea5c041d45938fda4b50f234cb7"],["/images/life.jpg","74d2d9c5f48ec59e3badeec690941812"],["/images/listen.jpg","9d4f73cd5634f43deaed4f9aca03f9a3"],["/images/loading.gif","ffa0804a5d99e2d5b39e05cda6d6b28b"],["/images/magnet.png","4899a924f3de0d19dbe0415128c07d65"],["/images/magnet1.png","8d010eb86ca943e036adaa7de57aee7d"],["/images/magnet2.0.png","54fe576f174d2b6917fef89f40ac5975"],["/images/magnet2.png","293cb414a8ab93b43bde3bebf9cf0cfc"],["/images/magnet3.png","1923148630e2e094ff80bf35aa604c10"],["/images/magnet4.png","9bb4f963ac1c09f02d62525f513f492c"],["/images/meilu/1.jpg","cd67abcc3f543b5c66adc4f9d9c5c628"],["/images/meilu/10.jpg","ac9fb2711e477b5db1c3acb57e899045"],["/images/meilu/11.jpg","364caad6dfc356a3dc630fa067e48e88"],["/images/meilu/12.jpg","274767e5708f79934e5bdbf73eda8f0d"],["/images/meilu/13.jpg","dcab12b84454770b208913db63e825ac"],["/images/meilu/14.jpg","037cdd048284e621f27e17a2c59e8ea7"],["/images/meilu/2.jpg","f6cdb65ae3fad4523b32f5ee38696b60"],["/images/meilu/3.jpg","9e5df3612c2d93bf57313186c954aea5"],["/images/meilu/4.jpg","69ef2d6f4bcd79cf4b4e672b60c6751e"],["/images/meilu/5.jpg","ce81ca16def7613b7ebb368fb554f14f"],["/images/meilu/6.jpg","cafd5b62305f806754a75cc3af8c3b77"],["/images/meilu/7.jpg","b8ae865d386e1e713a6034da6b090c10"],["/images/meilu/8.jpg","afad7a7bf1066c817a8d2e7566bc780d"],["/images/meilu/9.jpg","72f9649f56b564eacf23ce3dacb88029"],["/images/metroui.jpg","5503bfffd450d9ab572b67ea00941571"],["/images/metroui/1.png","79a03b408c19c74eeaa8ff6e17a03f9d"],["/images/metroui/10.png","8309fed71a15c78f2dfa3af1ff75a5f3"],["/images/metroui/11.png","aaf1a007cbae12f93cc2688bace18d28"],["/images/metroui/12.png","0758ea282c3828c47e5c64520ff85783"],["/images/metroui/13.png","12ca7b511927cd4b26e97f3b20908a32"],["/images/metroui/14.png","f44ba7680f7b36df437e2ae2588d0565"],["/images/metroui/15.png","e8927c78b125b805af7aa86fee815ab6"],["/images/metroui/2.png","e604d3c662b996f06f22753ba9ab379f"],["/images/metroui/3.png","664e3b7490f2f95d5547b8ba79a65456"],["/images/metroui/4.png","c0f255344cafc303a1d9c7404da37149"],["/images/metroui/5.png","da2074cdb1298aca826abc1a5c441300"],["/images/metroui/6.png","efef2f087127614b4e03bcbe9a347018"],["/images/metroui/7.png","a4d34b1a2dbe3a58d3a92276880be039"],["/images/metroui/8.png","1d34a626bbaa898a60d4501936bcf962"],["/images/metroui/9.png","0663697c1667b377fe2623bd65e00b31"],["/images/metrouilogo.png","aea81b42d1c2c96440f74cf56ad82e2f"],["/images/nhkimage/2020.08.01.png","af4c55b2ae1d5ab2f56c75a87fcdfdb3"],["/images/nhkimage/2020.08.02.png","c355d41b90f5c65823f96c5f6868ce53"],["/images/nhkimage/2020.08.03.png","fddcedb40d7f28b2ccb90814351ad5c8"],["/images/nhkimage/2020.08.04.png","8b4518ec5a8513f442980ed7167136b1"],["/images/nhkimage/2020.08.05.png","590abfb19334b0c3cee5a005674f2253"],["/images/nhkimage/2020.08.06.png","d469e21100c42435e88f2bdf07f93da1"],["/images/nhkimage/2020.08.07.png","3ca9e2c8b8a09a38423d73cd36e8de9d"],["/images/nhkimage/2020.08.08.png","4420c2d899fe4eb90c48bae0da8418a2"],["/images/nhkimage/2020.08.09.png","df14be338f9c920818dd1daa6aa955ee"],["/images/nhkimage/2020.08.10.png","c4e2ed023cd3dbfd4986add35ca9357c"],["/images/nhkimage/2020.08.11.png","cf562339e57f673d394f3e6cdd1f60cb"],["/images/nhkimage/2020.08.12.png","81dfa179fea3052ddcf73912ea368f67"],["/images/nhkimage/2020.08.13.png","8cf26c2642e7a27cbd86fcbda8bae8d9"],["/images/nhkimage/2020.08.14.png","d88eeb678b3ed3651d597e61957e264a"],["/images/nhkimage/2020.08.15.png","b9879f193867edcffeefce62c9dc7153"],["/images/nhkimage/2020.08.16.png","46cb914aa1d556561897767ec9ff66a0"],["/images/nhkimage/2020.08.17.png","ea1af9645b5cc9cbaafe70a91dd15cca"],["/images/nhkimage/2020.08.18.png","e87e4de39a6f06cf4283a63af92dd8de"],["/images/nhkimage/2020.08.19.png","8001a951513b542a98ce1151be5bd87b"],["/images/nhkimage/2020.08.20.png","4bc8fafa3ecce30d340b1350715d78e3"],["/images/nhkimage/2020.08.21.png","07ad1337e127922abff27da6c672549b"],["/images/nhkimage/2020.08.22.png","b2b5d53ba46015f64048f9d803b12179"],["/images/nhkimage/2020.08.23.png","225af8c0cabe5218ec634d1b8815fd95"],["/images/nhkimage/2020.08.24.png","1d54a484a6e2395aabe9be005cd90361"],["/images/nhkimage/2020.08.25.png","8008ba169cfce0ef2041329cd29b6b77"],["/images/nhkimage/2020.08.26.png","72a2b8094003a54c97a34ea97cf21bc3"],["/images/nhkimage/2020.08.27.png","893407e604804d215c8fef8bcd5f2684"],["/images/nhkimage/2020.08.28.png","b542280b7341759890a99cbd44d822c5"],["/images/nhkimage/2020.08.29.png","620e2e7d4772e39615fd1a88cdf49717"],["/images/nhkimage/2020.08.30.png","f645d7ba2dcb506f9ec6fb9244425ad7"],["/images/nhkimage/2020.09.03.png","c5262f3aa87190e0273383ea1e445681"],["/images/nhkimage/2020.09.04.png","c07149c32aa41c03bc7dac82a713f6b2"],["/images/nhkimage/2020.09.05.png","4e43556e1cb3b7f4d75f0f6127616a54"],["/images/nhkimage/2020.09.06.png","1021d2ae04a7f109404f857a2a7629cf"],["/images/nhkimage/2020.09.07.png","db9827e9f0a4cf1401b559b4644a0204"],["/images/nhkimage/2020.09.08.png","efe1030b73dc1c01f169c3122a194426"],["/images/nhkimage/2020.09.09.png","f6ba3a1c6cdeff88404ebe2a646f2eb5"],["/images/nhkimage/2020.09.10.png","3471b05d02113517359a9e2167befcfa"],["/images/nhkimage/2020.09.11.png","921a541a8bffb1aa436df2eb6db7c99f"],["/images/nhkimage/2020.09.12.png","a51f8ebaddba69bb80f9259a30f17e65"],["/images/nhkimage/2020.09.13.png","0399889200493cd2154ffc407e2bc400"],["/images/nhkimage/2020.09.14.png","eaaf3da69a39ed316b7fc8c4d409bb0f"],["/images/nhkimage/2020.09.15.png","5774959ea4061c9298ea174f0862cc3a"],["/images/nhkimage/2020.09.16.png","0c5a00f74020740fda589c02e4b3f917"],["/images/nhkimage/2020.09.17.png","b5aef734e3a7db4862ca3fe4e6769dc2"],["/images/nhkimage/2020.09.24.png","5982a7b3843f4ae43b2b4bc4b0c577d6"],["/images/nhkimage/2020.09.26.jpg","c6415af781fbdd36fdb034f74646129b"],["/images/nhkimage/2020.09.27.png","27aa6f6a8d5534ccd99cff261dcd9eb6"],["/images/nhkimage/2020.09.28.png","0f4318d1ff17a33de364432a1c44b5ad"],["/images/nhkimage/2020.10.09.png","6408d9f7e66fdeba8b9207939a08cf8d"],["/images/notop.png","d25c272e5ce312a880e04ce8a0b27683"],["/images/pasted-0.png","552608d8f6e39369aa30c6e332a32826"],["/images/pasted-1.png","baafdacee93c99e99418aaedbf524fda"],["/images/pasted-10.jpg","395cff6f64ab5df19baa3572ac98e541"],["/images/pasted-11.jpg","56e5df07c96634638abf7995b25c81ab"],["/images/pasted-12.jpg","61b3f803b85ce3640d7a9ba7efb9da6b"],["/images/pasted-2.png","2f410e53c811f92a6135f48857776f5e"],["/images/pasted-3.jpg","bb5717e691e87355e7d63a5f3a87ae62"],["/images/pasted-4.jpg","10041d0e3567b24b81222ec5075d6492"],["/images/pasted-5.jpg","ac5047a4b48c6cdaee86fa1863e33904"],["/images/pasted-6.jpg","1556ae8d3ad5713d60237ee4d10e81f0"],["/images/pasted-7.jpg","913fde1686587646ddc663bd810cc81d"],["/images/pasted-8.jpg","fc83268081fb4b6b6ecb1ffa1ec5af7f"],["/images/pasted-9.jpg","25e0fa3496591501f5c29d0b802b77d2"],["/images/pet.png","2b8c121909497e57057478856fe48a94"],["/images/pet2.png","dfb1d6a17b527ccc0c600e6ad31f55e5"],["/images/pokemon-js-master/pokemon-js-master/README.html","5819768a466fb91f1a1f3c7e02d6189c"],["/images/pokemon-js-master/pokemon-js-master/fonts/pokemon-italic.woff","78e86827d84b43c015a2f4c2c6a373dc"],["/images/pokemon-js-master/pokemon-js-master/fonts/pokemon-italic.woff2","6eed2c3b876039e9332617cf11051bde"],["/images/pokemon-js-master/pokemon-js-master/fonts/pokemon-normal.woff","09442a9708ccafa61a894d703b10a45b"],["/images/pokemon-js-master/pokemon-js-master/fonts/pokemon-normal.woff2","f82c92d44c94dcdacf907a1be4fac138"],["/images/pokemon-js-master/pokemon-js-master/img/ball_empty.svg","71b5bd4f59def835f94989825d23a737"],["/images/pokemon-js-master/pokemon-js-master/img/ball_full.svg","7e11059b84cef189cbae0694b31e3161"],["/images/pokemon-js-master/pokemon-js-master/img/blue_balls.svg","86a4983e08483856c2b69ba22b3b6605"],["/images/pokemon-js-master/pokemon-js-master/img/blue_front.svg","67d4551115bd9619421c8b279a02da21"],["/images/pokemon-js-master/pokemon-js-master/img/blue_line.svg","99e3256fe421cea565eb6c8e238b4e1b"],["/images/pokemon-js-master/pokemon-js-master/img/eevee_back.svg","be41cc88ba29dffed133934f3fd81092"],["/images/pokemon-js-master/pokemon-js-master/img/eevee_front.svg","67e75860167c118c80b43e9bc77f8dd1"],["/images/pokemon-js-master/pokemon-js-master/img/frame.svg","9ba744fd242d76220503200dc263d225"],["/images/pokemon-js-master/pokemon-js-master/img/hp.svg","1b9572b00909d59dade3c5d9c7484a94"],["/images/pokemon-js-master/pokemon-js-master/img/level.svg","ce8d20ff7ae3e66decac50b78ca3b86b"],["/images/pokemon-js-master/pokemon-js-master/img/marker.svg","3b8296fb02592d99e7a7aa29b1d41742"],["/images/pokemon-js-master/pokemon-js-master/img/pikachu_back.svg","41f62334dab4ff5ad455bf3792243611"],["/images/pokemon-js-master/pokemon-js-master/img/pikachu_front.svg","496206572029bcfaebfaed794ed1d015"],["/images/pokemon-js-master/pokemon-js-master/img/pokemon.svg","f015c9582ea62070300062fe2022dd37"],["/images/pokemon-js-master/pokemon-js-master/img/red_back.svg","1e4dc80c13eac754369017dbd19c9086"],["/images/pokemon-js-master/pokemon-js-master/img/red_balls.svg","35d2d97a11a79232ddeb90e052af95cc"],["/images/pokemon-js-master/pokemon-js-master/img/red_front.svg","b4fc7ab1d0a1254c453ee3ebc28db79f"],["/images/pokemon-js-master/pokemon-js-master/img/red_line.svg","fd9e3b97a6264fc5e5f398ce854d24b7"],["/images/pokemon-js-master/pokemon-js-master/index.html","a1aecc59bec647b5263d4f40a6ea04ef"],["/images/pokemon-js-master/pokemon-js-master/jquery.js","ac5017a6c6a77a3db6f989b281084b6f"],["/images/pokemon-js-master/pokemon-js-master/main.css","3e4465c57f14ab0e02b5b2a805372c0c"],["/images/pokemon-js-master/pokemon-js-master/pokemon-min.js","26e1d8483c8d86ab39054a609106aad0"],["/images/pokemon-js-master/pokemon-js-master/src/pokemon.js","f43de536cebe95ac1b19b905cbc9d889"],["/images/pokemon-js-master/pokemon-js-master/src/promo.png","abf2d1d338c0a9080c1a9eab7b35e6e0"],["/images/pokemon-js-master/pokemon-js-master/src/screenshot_1998.png","046079a29e3df9b95bde3c3c58647d43"],["/images/pokemon-js-master/pokemon-js-master/src/screenshot_2014.png","828e18e5add8f29486ba1945de2bfb7f"],["/images/pokemon-js-master/pokemon-js-master/src/screenshot_2016.png","69dbbe3b5b622cdce0fa82aca162129a"],["/images/ps1.png","0917ba91f21b6944dc08d35c41a326d2"],["/images/psb.jpg","6a27c58337875c776af0a7667598b401"],["/images/quse.png","7cd1ec12b804305430cb4cdc09c7a893"],["/images/rain.jpg","9c26acc44c692b6a63e134be07b07c18"],["/images/rainsmall.jpg","e8c91c40bef224fc5a3942bd0d007b84"],["/images/shezhi.png","281bf545f6a4024e2d0b7120bc398a21"],["/images/shuo.png","9cce9df6e32e00e49471b9a9f089f6aa"],["/images/soul.jpg","d97b4099c0728ff6123d006fa62db86e"],["/images/study.jpg","a9b1cf95ee6bd9f3913e8ec6a6a6f44f"],["/images/tianqizhizi.jpg","dd48d78b4eeaaa52578352f9ef570b14"],["/images/vue.png","0d2b5680bcb76df1333b85fad58634a7"],["/images/vue1.jpg","8cbf18302c6fa72e2a40d0cca0832213"],["/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/03n.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/04n.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/images/weather/09n.png","512894b4a127a42e060e237674b8d145"],["/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/11n.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/13n.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/images/work.png","e521cf5b834292fde1c50e0a0f5802f9"],["/images/xiaoguoyanshi.png","994a3b710d36df0a4630cd9a768c7f7b"],["/images/xiaoguozhanshi-m.png","1fefca18214fc4889d1bb76b81887c9d"],["/images/yao1.jpg","9dfddaf8c121fc8db788a87d133d6376"],["/images/zfe.one.png","b41f689341882058ffb28c4cee499bde"],["/images/下载.jpg","79c7247da282569a05bdd46aa43b93b0"],["/images/幻想终结之日.png","0025c4d3973bdfedb80db3f78c59fa47"],["/images/时空战纪——游戏建议及意见①.jpg","1337457f14a8dffee66d94f8915b54ff"],["/images/简历.png","d70507ee4615c9e324578c0d777e6855"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favicon2.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","c1a78a77fa44b5d6811384e5812499a4"],["/js/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/APlayer.min.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/airvisual.js","71cf86bfd452ca01d92438d8266416ee"],["/js/airvisualapi.js","6931bebe1696688d109963187fc2eace"],["/js/artitalkkey.js","ad2c74320c63125a36319659657d2886"],["/js/background.js","94c8410b174f58594cf81ec99054968b"],["/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/js/calendar.js","a58e02711cc6dec4dc04257e555b8923"],["/js/catalogMagnet.js","0387c6ad152e7a6076cceffc7420be77"],["/js/clock - 副本.js","405186e7a9d73221d2d50c0dea2852d0"],["/js/clock.js","2fdceb94cc57b551cd245b0001927b66"],["/js/color.js","3730bb4f7b185e6f5130ac28bace968b"],["/js/dan.js","6b6ae6b7f1b42dd4857541f43b2bb733"],["/js/echarts.js","dc1227b1eba1ba47fd185a387d0a7d37"],["/js/gitcalendar.js","fadfa8a42272cd322118653dca512a7a"],["/js/history.js","20459f7db325e597e64903f4c0d19306"],["/js/historyroll.js","a3e9ac376106816c50a61f9f4306d671"],["/js/jam.js","462c07d3b2e0f20394d994bbcfae37cb"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","455fface5a0a3ff90766ca254affe502"],["/js/rain.js","f656dc28e4ab5c3f8414d35f683278c1"],["/js/rainremove.js","ceacf82842b101f7e54a2aaf5f4bb9cb"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["/js/shuo.js","1076b1ef51358cc11b6ff3bab25e15d8"],["/js/sortable.min.js","0351fbccf2faed49062495990e32a14f"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/link/index.html","e3d3a20ea1c976fcb890cdeedbcaf3fa"],["/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","885d82b588682496e0454febac990688"],["/page/2/index.html","ac4ac39eb0c9d9c989af5a9848ead446"],["/page/3/index.html","d5dfe96a4020c649762f2a7f84a70bdc"],["/pokemon/README.html","0b45ff94f40ffa5ee9cddba407c76ae7"],["/pokemon/fonts/pokemon-italic.woff","78e86827d84b43c015a2f4c2c6a373dc"],["/pokemon/fonts/pokemon-italic.woff2","6eed2c3b876039e9332617cf11051bde"],["/pokemon/fonts/pokemon-normal.woff","09442a9708ccafa61a894d703b10a45b"],["/pokemon/fonts/pokemon-normal.woff2","f82c92d44c94dcdacf907a1be4fac138"],["/pokemon/img/ball_empty.svg","71b5bd4f59def835f94989825d23a737"],["/pokemon/img/ball_full.svg","7e11059b84cef189cbae0694b31e3161"],["/pokemon/img/blue_balls.svg","86a4983e08483856c2b69ba22b3b6605"],["/pokemon/img/blue_front.svg","67d4551115bd9619421c8b279a02da21"],["/pokemon/img/blue_line.svg","99e3256fe421cea565eb6c8e238b4e1b"],["/pokemon/img/eevee_back.svg","be41cc88ba29dffed133934f3fd81092"],["/pokemon/img/eevee_front.svg","67e75860167c118c80b43e9bc77f8dd1"],["/pokemon/img/frame.svg","9ba744fd242d76220503200dc263d225"],["/pokemon/img/hp.svg","1b9572b00909d59dade3c5d9c7484a94"],["/pokemon/img/level.svg","ce8d20ff7ae3e66decac50b78ca3b86b"],["/pokemon/img/marker.svg","3b8296fb02592d99e7a7aa29b1d41742"],["/pokemon/img/pikachu_back.svg","41f62334dab4ff5ad455bf3792243611"],["/pokemon/img/pikachu_front.svg","496206572029bcfaebfaed794ed1d015"],["/pokemon/img/pokemon.svg","f015c9582ea62070300062fe2022dd37"],["/pokemon/img/red_back.svg","1e4dc80c13eac754369017dbd19c9086"],["/pokemon/img/red_balls.svg","35d2d97a11a79232ddeb90e052af95cc"],["/pokemon/img/red_front.svg","b4fc7ab1d0a1254c453ee3ebc28db79f"],["/pokemon/img/red_line.svg","fd9e3b97a6264fc5e5f398ce854d24b7"],["/pokemon/index.html","3736a6ecdb05f7d1a038acc8ba8e2786"],["/pokemon/jquery.js","ac5017a6c6a77a3db6f989b281084b6f"],["/pokemon/main.css","a1a6f638aecfa9fe21f875d9942c7c51"],["/pokemon/pokemon-min.js","b448e216d77517190fbbc02db86cea9a"],["/pokemon/src/pokemon.js","f43de536cebe95ac1b19b905cbc9d889"],["/pokemon/src/promo.png","abf2d1d338c0a9080c1a9eab7b35e6e0"],["/pokemon/src/screenshot_1998.png","046079a29e3df9b95bde3c3c58647d43"],["/pokemon/src/screenshot_2014.png","828e18e5add8f29486ba1945de2bfb7f"],["/pokemon/src/screenshot_2016.png","69dbbe3b5b622cdce0fa82aca162129a"],["/research/index.html","5f4c528f0eb87ba4ec62ae0a4065e707"],["/sw-register.js","357bc040475cc69bbaddc6d3ea5f6c83"],["/tags/Butterfly主题/index.html","73a9a68db1252710f8e97ce2d43014a2"],["/tags/DIY/index.html","aca5844f066d7ce8841c06dbfd917374"],["/tags/ICT/index.html","40392f9543a114399e30c0532c451271"],["/tags/NHK听力练习/index.html","b1c7da85efaa32398be73c3589dfcad1"],["/tags/NHK听力练习/page/2/index.html","210e64df012f90ce5d6a2831a2b7df68"],["/tags/NHK听力练习/page/3/index.html","693573121602ef714f393683ef43824e"],["/tags/metro-ui/index.html","cd5b8b8732cae5f9a7f57f4427b797f2"],["/tags/vuejs/index.html","9c14eb929aa3ac79d306946f4aabe4af"],["/tags/お盆/index.html","a72a9861deef4488a868666ba84c1ce3"],["/tags/世論調査/index.html","3e9c1ccce7e003eba093e2d5517cfeec"],["/tags/作品集/index.html","13905715d01db1a4ba78fff7b6b2a2a9"],["/tags/农业/index.html","5078b901a040c2620e8fb474f79b0f57"],["/tags/历史/index.html","175f18338f47da8d105ff9aa10069d88"],["/tags/営業時間/index.html","70ad83d417a879fc1478ddff4a63c33b"],["/tags/国外政事/index.html","258d0f7df8cf3ba68c85839da4fb0cc6"],["/tags/地震/index.html","42b97807716ba26e5d34bb3469df20b8"],["/tags/外国政事/index.html","c517d0fe903cded91f36f5e6cf6f57c3"],["/tags/天气/index.html","3b60378c7d09ec7f5372e6782ab1eb5d"],["/tags/奥运会/index.html","c8551ba1fc02f7447d4568d6bf9ef054"],["/tags/学习/index.html","1026ee7258a7ff4d6aeb572b3d33dc59"],["/tags/学习/page/2/index.html","72ae43a738b4f99be352e4c80ecefc21"],["/tags/就业/index.html","0dd4ae54cd38910e5eb3817edfa27e31"],["/tags/庐山/index.html","6b3b626a8b128be6b44cdd5dc01a4590"],["/tags/座礁/index.html","29f70894bb9188848df5ecf380f0e5a9"],["/tags/政府/index.html","1ca669809b91eac5b6170274731332d5"],["/tags/政治/index.html","ad6235ab18a0e2e2796d81839d4a7310"],["/tags/教程/index.html","7e21d12c5e6f7b8da17ae245259905f5"],["/tags/日本教育/index.html","80827a7deacd22e1cabf744b33afd5de"],["/tags/民生/index.html","a46418179943bab6c57a89eab1f37780"],["/tags/游戏评测/index.html","2e1a51990def13285a09a8d16d0d659b"],["/tags/游记/index.html","5861b616408880f1ccb7752cb3a06b94"],["/tags/生活趣闻/index.html","41a675f691b1f491a2eb4693d0c35919"],["/tags/科技/index.html","453230704377b87518d8a923982b93cb"],["/tags/经济/index.html","16a93254f70109d04d82bd5c6830a985"],["/tags/网络教学/index.html","448c6e18967f1cee87fbc7cb794ca7c1"],["/tags/舆论/index.html","3b0e9029977518c33e63db842fc878c2"],["/tags/虚拟现实/index.html","96a466e83ef94750618b997de8733f44"],["/tags/随想/index.html","c0af4249aa50a48cb98d41acf6a3a63f"],["/tags/障害者/index.html","92502da19f97fce3d3babeb0424632e9"]];
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
