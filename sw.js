/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/05/20/2015-05-20/index.html","683588f405414ebccde253817f622710"],["/2015/06/16/2015-06-16/index.html","4a84a72341e5e8a10f2ef551997b9dc5"],["/2015/12/12/2015-12-12/index.html","2b3a764de6a46f03a7109c4c83edd8b9"],["/2016/06/08/2016-06-08/index.html","6acca203e5604f98ad560525bbe4cf9a"],["/2016/12/18/2016-12-18/index.html","30cb63a0eb4f9a89ddd54ad0d918dde4"],["/2017/02/17/2017-02-17/index.html","8a37c41d9a14544ad0e1e518551f78b0"],["/2017/03/17/2017-03-17/index.html","c6d4e86d34538115f4a3e202f8458888"],["/2017/04/06/2017-04-06/index.html","2cb531950b8b473286f2ff8dc8f00252"],["/2017/05/17/2017-05-17/index.html","6e4a2ca1f60f22d42b7f0bd229998850"],["/2017/08/15/2017-08-15/index.html","7832ee5b8f2604f135381b1d3d1d731e"],["/2017/09/16/2017-09-16-1/index.html","700b84f06ace82f72a8b251c05de0cf2"],["/2017/09/16/2017-09-16/index.html","dd4938937ac14ea981eb133ef0c3b359"],["/2017/09/21/2017-09-21/index.html","098d085e0d25a402fbb51de48dfaad6c"],["/2017/09/23/2017-09-23/index.html","2843e788a68c47619b2aa6d6b0d0926c"],["/2017/09/26/2017-09-26/index.html","c92da46cd7f66c1034e5b41d3b130bf0"],["/2017/09/27/2017-09-27/index.html","93a44f6251548f6e0e1ba298d7ac982b"],["/2017/10/04/2017-10-04/index.html","04a40234adddfc4f91e95f9f435bb22a"],["/2017/10/08/2017-10-08/index.html","f3a80f022827d24f271956e9efcd6205"],["/2017/10/09/2017-10-09/index.html","b91a6c7259edf8e2a6cbd2abf32e2cc9"],["/2017/10/15/2017-10-15/index.html","6a6f3df5a4c63adb94d4300324ec5c13"],["/2017/10/19/2017-10-19/index.html","0eb7136f2bd5a3d60039ebc59bac5b20"],["/2017/10/23/2017-10-23-2/index.html","4232dca41e7757c72879fbb72a0d2411"],["/2017/10/23/2017-10-23/index.html","06b8258aa1d3c48bd98af1358589be87"],["/2017/11/08/2017-11-08/index.html","a5549e5db84743bb9414f176651c0148"],["/2017/11/12/2017-11-12/index.html","7a968a7f15f9f1e4d6a10719104f8d4c"],["/2017/11/15/2017-11-15/index.html","e8452de9a04c3b7d663a3598585932a8"],["/2017/11/27/2017-11-27/index.html","dc4d09c43876fb4543fe3daec15a9083"],["/2017/12/06/2017-12-06/index.html","6b0d55937cd0b61c562914b10ad3a6a7"],["/2018/02/12/2018-02-12/index.html","7ad4c68f0a70a6df12a99dafee87bdc2"],["/2018/03/26/2018-03-26/index.html","da272e56fc77544e1bf4c4266e986d81"],["/2018/04/02/2018-04-02/index.html","db46a9bb3faf74f447716a4bb18674ee"],["/2018/04/24/2018-04-24/index.html","c721d8e96d8c3226c3296f5b70aa89b5"],["/2018/05/18/2018-05-18/index.html","4fa111ca919fbfb4646002837a93bdf3"],["/2018/05/23/2018-05-23/index.html","a261815306b6351516dcebd3ba3cd401"],["/2018/06/08/2018-06-08/index.html","55ba05bf8f4655f071df268ec009fc72"],["/2018/07/01/2018-07-01/index.html","b21a5c852da673ebd883a1271267ba9a"],["/2018/08/30/2018-08-30/index.html","43951990498ec15d7a340d88646f2614"],["/2020/07/20/2020-07-20/index.html","e3e7806dc7bf4f7c7c419af8c7b21c73"],["/2020/08/01/2020-08-01/index.html","b21128803c48cae957436b56b6f54b9d"],["/2020/08/02/2020-08-02/index.html","f0cc762843270f2c8858a6b8f8372109"],["/2020/08/03/2020-08-03/index.html","3df2d120e35f42422442290809e336e3"],["/2020/08/04/2020-08-04-1/index.html","b84aec68e9df6529925341e75aca8351"],["/2020/08/04/2020-08-04-2/index.html","6f064e1b5ab9c3ad552418946adc6494"],["/2020/08/05/2020-08-05/index.html","7cf3adae31a298b1a0a6d7541bb86c27"],["/2020/08/06/2020-08-06/index.html","10fd6eee5cd1458c66281ae776967aa4"],["/2020/08/07/2020-08-07/index.html","8dd2c09490cfad5e7bf4e836c9c238a8"],["/2020/08/08/2020-08-08/index.html","9db7b22250d63f42811728efabc51848"],["/2020/08/09/2020-08-09/index.html","24c5f574caa70553ebbc9a73eff70d2a"],["/2020/08/10/2020-08-10/index.html","9089357f5ce8d81954c2d91b6558d676"],["/2020/08/11/2020-08-11/index.html","16a80775815d8b409aa7fc2b084676dc"],["/2020/08/12/2020-08-12/index.html","767db7675808a72fa66e4fe3cfe85a92"],["/2020/08/13/2020-08-13/index.html","560e2c1f155e471e3d9fcc68bca5c79b"],["/2020/08/14/2020-08-14-1/index.html","f1e873814386ba243ec5b4c8098a95de"],["/2020/08/14/2020-08-14-2/index.html","c6d034b47bfb778c2a198646c280dd97"],["/2020/08/15/2020-08-15/index.html","bf069379af67799165bccda1d02538fa"],["/2020/08/16/2020-08-16-1/index.html","93a05141a2b3a9b5fb08e7bee57c157f"],["/2020/08/16/2020-08-16-2/index.html","d2d6b8302a02a84d42c01207d482d420"],["/2020/08/17/2020-08-17/index.html","5cc0bc2b2a665b61ad38aed0abb7d3db"],["/2020/08/18/2020-08-18/index.html","f9f8172e139d52faeaa32226dc4980ef"],["/2020/08/19/2020-08-19-1/index.html","2d21e50400b73a26f4f8352fe7c30358"],["/2020/08/19/2020-08-19-2/index.html","e4884bdb1699c3ab61bdaee9efb70a82"],["/2020/08/20/2020-08-20/index.html","49dd166879f81366ddbb01dc53308d27"],["/2020/08/21/2020-08-21/index.html","a1c3afe8e60e543b2df28d191aab017d"],["/2020/08/22/2020-08-22/index.html","f00030ca6d7179e2c2f18dde93120a63"],["/2020/08/23/2020-08-23-1/index.html","1896ae4e73f0a97064d61a2132f6f95e"],["/2020/08/23/2020-08-23-2/index.html","ab0efe7541e5cc3085ff9061ec385b00"],["/2020/08/24/2020-08-24-1/index.html","7beca22f6b703c5e814327c9a9a7ea70"],["/2020/08/24/2020-08-24-2/index.html","021e7b5d69d56a3c574f4fab43cdb577"],["/2020/08/25/2020-08-25-1/index.html","c555285f056eb87328abdc27427d004e"],["/2020/08/25/2020-08-25-2/index.html","2d9c85af3180ee3457a9e97afadae828"],["/2020/08/26/2020-08-26/index.html","9012f2a89a9f1cede1b13aa812680443"],["/2020/08/27/2020-08-27/index.html","d428d2a943e67f960e206c32468bec1e"],["/2020/08/28/2020-08-28/index.html","59f789877599738b4cf162e47abec3a6"],["/2020/08/29/2020-08-29/index.html","6ebfcaee7fe5a740fb5e3a0b9a655c04"],["/2020/08/30/2020-08-30/index.html","e6badaa7b9049d92d7d34339d4df0cb6"],["/2020/08/31/2020-08-31-1/index.html","6e8ff7726b9eac135b57d47e806419ad"],["/2020/08/31/2020-08-31-2/index.html","f5d97c19575e73b12ef9d51b2c53d066"],["/2020/09/01/2020-09-01-1/index.html","4b0cd782e38e6ebcc2df0e87c974e17d"],["/2020/09/01/2020-09-01-2/index.html","92c6206a5801f94104b9112e95debcfe"],["/2020/09/02/2020-09-02-1/index.html","06c6cd872bd998d0a2b17fd70ee89682"],["/2020/09/02/2020-09-02-2/index.html","81924696d7a797d292fa9d0ad1b0d5fb"],["/2020/09/03/2020-09-03-1/index.html","77d62b21fc068cc86b8f1feabd2a51aa"],["/2020/09/03/2020-09-03-2/index.html","d387aa82c4d3f82127457b38629a75f4"],["/2020/09/04/2020-09-04-1/index.html","3e292f4e6f1f202c262870374c1c3124"],["/2020/09/05/2020-09-05-1/index.html","408a6dc730ec5f89c57bf32bd164796b"],["/2020/09/06/2020-09-06-1/index.html","ebda501f862ce1e89fe6abd74c9262db"],["/2020/09/07/2020-09-07/index.html","c80df6488f266d6913f14c698186d0da"],["/2020/09/08/2020-09-08-1/index.html","c8a9d03b935d7e6a436d3a82278c726c"],["/2020/09/08/2020-09-08-2/index.html","5157fbdb4601dbae73332b2d831e5d39"],["/2020/09/09/2020-09-09/index.html","92d09aa5a2246137e0d2ed8c5259f789"],["/2020/09/10/2020-09-10/index.html","b6f001d3e97b71e5b4fdde6e1ea03712"],["/2020/09/11/2020-09-11/index.html","b0e4c1c2426c37f5ad469108380f2901"],["/2020/09/12/2020-09-12/index.html","81b3af44a52491d522dbee4583dc7e29"],["/2020/09/13/2020-09-13/index.html","d820e0e0ac7b81f0e58774458ac14b4b"],["/2020/09/14/2020-09-14/index.html","0d1d84b5f9d17805f4b38b27b4d1f3f8"],["/2020/09/15/2020-09-15/index.html","2a05a3cf26f3ce08074abedc6ae10301"],["/2020/09/16/2020-09-16/index.html","12c5eede6a80a4904c35e58e79674be8"],["/2020/09/17/2020-09-17/index.html","686b82fb87c8fef70399f04ff3133acb"],["/2020/09/19/2020-09-19/index.html","b8be003f49a75fcffefb79dd237f4377"],["/2020/09/23/2020-09-23/index.html","97dfdccb47d87bf8e93d78b77c16a92a"],["/2020/09/24/2020-09-24/index.html","aa337589c7563c45a29bd7f48b2081f9"],["/2020/09/26/2020-09-26/index.html","459e87fb39399ef4cd7fa982525415fb"],["/2020/09/27/2020-09-27/index.html","4718610e6cd650f7185a8ac0796e44b6"],["/2020/09/28/2020-09-28-2/index.html","f8ed5399aaf4e093dc8fd7ae66f17f49"],["/2020/09/28/2020-09-28/index.html","f4b1032fcd7bb270aa55d8f3ac833be7"],["/2020/09/29/2020-09-29/index.html","e854b46f965ad60239c3d57df891d02e"],["/2020/10/03/2020-10-03/index.html","596d7f2bba6c8dd596cce41571fa7968"],["/2020/10/04/2020-10-04/index.html","4d21ea356587dbea91733dfa6cba7b0e"],["/2020/10/09/2020-10-09/index.html","2da6c58634c5d37bcd1c277c986066ce"],["/2020/10/10/2020-10-10/index.html","61f0aa89ecbc15d0aa115fc7e79a6401"],["/2020/10/11/2020-10-11/index.html","117b8b29e62fcf961dc94348d2daa3df"],["/2020/10/12/2020-10-12/index.html","7de4974ceddaa7c675e5627c08bcddb6"],["/2020/10/13/2020-10-13/index.html","8838d2f9663501c209fc7ca110e3f1a6"],["/2020/10/14/2020-10-14/index.html","ba661e16d3998bba37ca13100d534a43"],["/2020/10/15/2020-10-16-2/index.html","4b14ef3c7a6be196e0b64f9058eba695"],["/2020/10/16/2020-10-16-1/index.html","614e64354c39cac7468c51ac11b504d2"],["/2020/10/18/2020-10-18/index.html","7505270cbbd834f35382ddf5af127792"],["/airplayervisual/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/airplayervisual/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/airplayervisual/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/airplayervisual/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/airplayervisual/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/airplayervisual/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/airplayervisual/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/airplayervisual/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/airplayervisual/index.html","f01262667e57da817803dac41cac792f"],["/airplayervisual/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/airplayervisual/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/airplayervisual/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/airplayervisual/js/jamsetting.js","7927507e0080ddf55c6d8b5f526bd942"],["/airplayervisual/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/airplayervisual/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/airplayervisual/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/archives/2015/05/index.html","57e1eddf61ea9927750401a96f50d51f"],["/archives/2015/06/index.html","4f96afe21e55a506b6a4ff3ea962ab13"],["/archives/2015/12/index.html","47291e4454581601d71e133442829de9"],["/archives/2015/index.html","1c2d33642c62d9e5d2c2c2c3013e00b0"],["/archives/2016/06/index.html","4d7c7c555cc8c86a38b383367b8e7e94"],["/archives/2016/12/index.html","d0e3494315ca4523eeba2c57bc49f6e6"],["/archives/2016/index.html","36dd553879f10889d38d8e0acdecd519"],["/archives/2017/02/index.html","f534243b15c238bc6111391c2fcf6153"],["/archives/2017/03/index.html","44a7117a24c4b819feee25fc46b04329"],["/archives/2017/04/index.html","039f4a7af00b28a7f2b638cded1dbe8c"],["/archives/2017/05/index.html","1030f5ad6ce8b8b885948ce0d762b095"],["/archives/2017/08/index.html","eef0300258d0743d8c7ca28d8480a2f1"],["/archives/2017/09/index.html","0521f9b457a1009504a9b759fb815c56"],["/archives/2017/10/index.html","0de2fae71dd3468bacbb251a39967cc8"],["/archives/2017/11/index.html","94d0728f162edb463207a5cba8c7ea27"],["/archives/2017/12/index.html","7ce8794af9d52d2cd9f9c8c3c325417b"],["/archives/2017/index.html","edfa5c3677f85f7425798725eab8699e"],["/archives/2017/page/2/index.html","d056f91093f621488de1916cca450cd3"],["/archives/2017/page/3/index.html","dfc474256390bbfd8f5030fedfab6df6"],["/archives/2018/02/index.html","52ad7c605e06ff5a9a9a18790ce682e5"],["/archives/2018/03/index.html","3319582a4e9eace90e356719d1a43c7d"],["/archives/2018/04/index.html","6bf6f5f72f2469a25748e291b39d1300"],["/archives/2018/05/index.html","3dbdfd1d089f3650d8860e8973ad8963"],["/archives/2018/06/index.html","a47e92223bb40aec1102d7d47fa5c23f"],["/archives/2018/07/index.html","f0c2f7e02f9e988564bba0fec69153a2"],["/archives/2018/08/index.html","0de8cabd330024b1acebbeff9eff5a78"],["/archives/2018/index.html","a8ea6525e8f1dc046107e41801f96331"],["/archives/2020/07/index.html","8cc3683da39457bd8c43aec3a42d7934"],["/archives/2020/08/index.html","b7b304d3fb08c701f2daf242b1f05236"],["/archives/2020/08/page/2/index.html","21f767c601d49cf31872b4abb132abe1"],["/archives/2020/08/page/3/index.html","0056bac0a8ced97d48299bd05d6939cc"],["/archives/2020/08/page/4/index.html","0979bdc651fe7b26570fbb19250918a1"],["/archives/2020/09/index.html","0193e00415907c0df6b206c1226a79da"],["/archives/2020/09/page/2/index.html","a253f8ef427d46e5f86442c057183105"],["/archives/2020/09/page/3/index.html","24257f629a067afb11d6cc469106c8c8"],["/archives/2020/10/index.html","81266e9fc8f73b2ac66a902f824720c0"],["/archives/2020/10/page/2/index.html","bd4a9e2d4e3332e8f11809d4c22fc1cf"],["/archives/2020/index.html","05448efa85f93fadc5d7fd0d9e83465a"],["/archives/2020/page/2/index.html","53b89f4e9838868050a46049321e4a38"],["/archives/2020/page/3/index.html","0af2aa8d13d8d275d8772307da8e46e9"],["/archives/2020/page/4/index.html","f109ce0560891d7aab4cbb3e20e3ecc5"],["/archives/2020/page/5/index.html","82c2ec1184a1d3859c49824293f7dde0"],["/archives/2020/page/6/index.html","0459c579d5aa906aa683cccd4bb7a54a"],["/archives/2020/page/7/index.html","eabbc172f244996c134078639e0b508e"],["/archives/2020/page/8/index.html","2119f16196c48d56f67ce197619f110a"],["/archives/index.html","603333265a6a4d18b22863b12ed21f38"],["/archives/page/10/index.html","b04a6a1c43937efffd6591154c2ceed4"],["/archives/page/11/index.html","5c7d9682f256fcaa8aa013fb02e0794a"],["/archives/page/12/index.html","f9af22df18be41c15a1108666c1cf6f7"],["/archives/page/2/index.html","b3c5e72359b4ac3cdbf9724f96058fdf"],["/archives/page/3/index.html","f0c9524df9931f95f66280656c6d4552"],["/archives/page/4/index.html","504d27465e3e7ebd1e3dfaf861ea187f"],["/archives/page/5/index.html","8c633923a9dca5464db7802ea4d405f1"],["/archives/page/6/index.html","2230f1ea48cfdb9badc20186d3d6717f"],["/archives/page/7/index.html","96c565220648e88b839fbd33914b3c82"],["/archives/page/8/index.html","20a75ffd56d12fb1577d217859fbfb7c"],["/archives/page/9/index.html","be823127b3c9d68619f3df2fe8d3b8bd"],["/catalogtest/index.html","012ff73acc04e7d2c654af59f4d1ac3b"],["/categories/NHK听力练习/index.html","9d3d1a8c8374310bd0940086e43106e2"],["/categories/NHK听力练习/page/2/index.html","af8bb1cf1deb1eea794b1452e3c80d6e"],["/categories/NHK听力练习/page/3/index.html","5cd770d999cd01765fa98444f571515f"],["/categories/NHK听力练习/page/4/index.html","70ceeca4bc7ef706503446a0b6d07408"],["/categories/NHK听力练习/page/5/index.html","7832c560fc6a3e454ccbceec2bd2a31d"],["/categories/NHK听力练习/page/6/index.html","517972a986cde69cc93851cedece0889"],["/categories/vue/index.html","2fcf6ff6ec4177deaf141b561860fafb"],["/categories/作品集/index.html","9a0f4a5d661035f8fbf1b6b6a4fbf988"],["/categories/作品集/page/2/index.html","f4edc10ea4396e5cb8710dad3e4b4140"],["/categories/学习/index.html","36e8fb0f0718b8edca3433469536f194"],["/categories/学习/page/2/index.html","4e0ae7dc86643df5fa88770d9591b397"],["/categories/教程/index.html","50bebf78b8495949fb81c68567130ea9"],["/categories/教程/page/2/index.html","1fe252ee03bf161aef24cb1176aceffc"],["/categories/游戏评测/index.html","c8d6efc9384c8346284aa4ff2a90a59f"],["/categories/生活趣闻/index.html","e815135980a5cf9b224dbab09bddc88f"],["/categories/随想/index.html","f6ce25a07773896adb8c40fa80aba183"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/addcss.css","d20fc732e0cc7996bd82c5170b7aaa86"],["/css/background.css","32d5acccbb94f987faf37cfdc3fd06df"],["/css/calendar.css","0090a32d2a61d42c5bfed254bfba078c"],["/css/clock - 副本.css","65602c2385c7eab42ee3804cd6ee0a5a"],["/css/clock.css","9db53e3bffb704c740aa83bddaf8b999"],["/css/cursor.css","c1a23e168c5b794ff367eb0ae77eb26b"],["/css/danmu.css","2a5b914a9592bcd353425c6d5fa7af8e"],["/css/index.css","a830cf7dafed0e1e03142b35ae00f2a6"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/loadingline.css","bc1ee020a6a11fea17b915b97e6978bf"],["/css/shuo.css","8db924024099e925c53d5b3dd22f83c6"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/html/calendar.html","bddcec1edba7f4c49fe5cd75f8cdf5b2"],["/html/shiyan.html","c2a14389f7d324098e2bda7f6912775b"],["/html/shiyan2.html","253f4e6665d54004bfa7523752add5ca"],["/icon.png","8ec68de45d18642ba9baf2447e62f476"],["/images/AMJ1.png","d27a6725d1aaaf5324248da4312ab6c2"],["/images/AMJ2.png","00e22eba5901e5bd674e42228cd5bd26"],["/images/AMJ3.png","c8c9ea6348dfcad3a641899d5b587431"],["/images/FOTO1.jpg","4b6f100861908e2c7044cffbdb4a0c1a"],["/images/MVVM.png","ea5a002ee2f85c71a0db51d5adb5de19"],["/images/UT.jpg","367f4e432f9db55a92b2a290c4b0a476"],["/images/UX.png","a183974e958d41d1b6acec70bb7ea00a"],["/images/WindowsTerminal.png","8ac29cb56b8a1768cf7de071e9f1ae6f"],["/images/air-w.png","c1cc32f9d3e17551ca11a7d18a0b533a"],["/images/anzhuang.jpg","912b2489957f8344406edc5e5cebe5fa"],["/images/api-setting.png","2c0bb074390779721cba009e96c5417c"],["/images/apikey.png","1f31121b190eb1f990bcc3e27524bc03"],["/images/b0_img.png","43fcaa3f8b394ca5be957f4b860800db"],["/images/backpic1.jpg","86a6fa88167feb338fbf1a4e9057114b"],["/images/c0_img.png","34397085b4d3349034f9b167469ac626"],["/images/c10_img.png","7938c5b0dd789db4f262e5a618943a9b"],["/images/c1_img.png","95211a0ebf07befde1b11477c3a8185b"],["/images/c2_img.png","456ba51725d669fc4d005787753a6b08"],["/images/c3_img.png","a0aa7dcdd2ed5bccec52c16942036a3f"],["/images/c4_img.png","0869cebb60d00a78936b7498823a39de"],["/images/c5_img.png","533774e840ccb3ef13b46201a54be05d"],["/images/c6_img.png","db9eb681dea0b7911f0b2ba918d86c26"],["/images/c7_img.png","5b9c9e0331aca2a9d47a2730512f34f5"],["/images/c8_img.png","be9107995f185e3bbf7186c4dff69f42"],["/images/c9_img.png","642a2e762b74a28d2426af14f2b864c1"],["/images/calendar.png","86319b08b93be7c8bc47cdba7a169563"],["/images/clock2.0.png","0a0f122c7a25262fc02ee99df0ef21eb"],["/images/clock3.0.png","8e04375c183c637b65fb50ed40f46466"],["/images/example.png","aaac9983e5d59f919bf282dcff2edb3c"],["/images/foto17.png","28db4c6608ad1ee6b34238cafab25e5e"],["/images/foto2.jpg","be95b922512d004a61f83c97af3e2602"],["/images/foto2.png","0dc07d4e1b00526a273a89dc8b81548d"],["/images/foto3.jpg","551c0616c92c4ee7cc17dd458b3c46e9"],["/images/foto4.jpg","9d1d9fea759a41afc0061866e400339a"],["/images/foto5.jpg","984f618b15372f37d54f507e6f379f10"],["/images/foto9.jpg","b683fc0b998e80ff8f5a3e45e889807c"],["/images/girlpic.png","ff1e8427ed555af639e6d849f8f648f1"],["/images/girlpic1.png","698e5570e821c3cae643cc9777c2292e"],["/images/girlpic4.png","551882e4b9b6afb79000fd34c0dbf5e5"],["/images/headimage.png","332502f36a0297b30cb7969fe6de8451"],["/images/hexo.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/hexoWT.png","c027cc9f5665c7d7ba657e7a4bb40017"],["/images/his-json.png","7d8a71e38ab684107446e5c72c31854e"],["/images/history.gif","0459a3dcf2317253de0b34482880c63c"],["/images/homework1.png","e8d2f64d0785519ea7779016208a2900"],["/images/idea.jpg","5eb08bf6c965588f03c8860f201cac45"],["/images/key1.png","f2a370e02ad6c5a101db20b47a9a0008"],["/images/key2.png","21dc40bbe0377cd9fe85a9cb431c18f0"],["/images/life-cycle.png","02f39ea5c041d45938fda4b50f234cb7"],["/images/life.jpg","74d2d9c5f48ec59e3badeec690941812"],["/images/listen.jpg","9d4f73cd5634f43deaed4f9aca03f9a3"],["/images/loading.gif","ffa0804a5d99e2d5b39e05cda6d6b28b"],["/images/magnet.png","4899a924f3de0d19dbe0415128c07d65"],["/images/magnet1.png","8d010eb86ca943e036adaa7de57aee7d"],["/images/magnet2.0.png","54fe576f174d2b6917fef89f40ac5975"],["/images/magnet2.png","293cb414a8ab93b43bde3bebf9cf0cfc"],["/images/magnet3.png","1923148630e2e094ff80bf35aa604c10"],["/images/magnet4.png","9bb4f963ac1c09f02d62525f513f492c"],["/images/meilu/1.jpg","cd67abcc3f543b5c66adc4f9d9c5c628"],["/images/meilu/10.jpg","ac9fb2711e477b5db1c3acb57e899045"],["/images/meilu/11.jpg","364caad6dfc356a3dc630fa067e48e88"],["/images/meilu/12.jpg","274767e5708f79934e5bdbf73eda8f0d"],["/images/meilu/13.jpg","dcab12b84454770b208913db63e825ac"],["/images/meilu/14.jpg","037cdd048284e621f27e17a2c59e8ea7"],["/images/meilu/2.jpg","f6cdb65ae3fad4523b32f5ee38696b60"],["/images/meilu/3.jpg","9e5df3612c2d93bf57313186c954aea5"],["/images/meilu/4.jpg","69ef2d6f4bcd79cf4b4e672b60c6751e"],["/images/meilu/5.jpg","ce81ca16def7613b7ebb368fb554f14f"],["/images/meilu/6.jpg","cafd5b62305f806754a75cc3af8c3b77"],["/images/meilu/7.jpg","b8ae865d386e1e713a6034da6b090c10"],["/images/meilu/8.jpg","afad7a7bf1066c817a8d2e7566bc780d"],["/images/meilu/9.jpg","72f9649f56b564eacf23ce3dacb88029"],["/images/metroui.jpg","5503bfffd450d9ab572b67ea00941571"],["/images/metroui/1.png","79a03b408c19c74eeaa8ff6e17a03f9d"],["/images/metroui/10.png","8309fed71a15c78f2dfa3af1ff75a5f3"],["/images/metroui/11.png","aaf1a007cbae12f93cc2688bace18d28"],["/images/metroui/12.png","0758ea282c3828c47e5c64520ff85783"],["/images/metroui/13.png","12ca7b511927cd4b26e97f3b20908a32"],["/images/metroui/14.png","f44ba7680f7b36df437e2ae2588d0565"],["/images/metroui/15.png","e8927c78b125b805af7aa86fee815ab6"],["/images/metroui/2.png","e604d3c662b996f06f22753ba9ab379f"],["/images/metroui/3.png","664e3b7490f2f95d5547b8ba79a65456"],["/images/metroui/4.png","c0f255344cafc303a1d9c7404da37149"],["/images/metroui/5.png","da2074cdb1298aca826abc1a5c441300"],["/images/metroui/6.png","efef2f087127614b4e03bcbe9a347018"],["/images/metroui/7.png","a4d34b1a2dbe3a58d3a92276880be039"],["/images/metroui/8.png","1d34a626bbaa898a60d4501936bcf962"],["/images/metroui/9.png","0663697c1667b377fe2623bd65e00b31"],["/images/metrouilogo.png","aea81b42d1c2c96440f74cf56ad82e2f"],["/images/nhkimage/2020.08.01.png","af4c55b2ae1d5ab2f56c75a87fcdfdb3"],["/images/nhkimage/2020.08.02.png","c355d41b90f5c65823f96c5f6868ce53"],["/images/nhkimage/2020.08.03.png","fddcedb40d7f28b2ccb90814351ad5c8"],["/images/nhkimage/2020.08.04.png","8b4518ec5a8513f442980ed7167136b1"],["/images/nhkimage/2020.08.05.png","590abfb19334b0c3cee5a005674f2253"],["/images/nhkimage/2020.08.06.png","d469e21100c42435e88f2bdf07f93da1"],["/images/nhkimage/2020.08.07.png","3ca9e2c8b8a09a38423d73cd36e8de9d"],["/images/nhkimage/2020.08.08.png","4420c2d899fe4eb90c48bae0da8418a2"],["/images/nhkimage/2020.08.09.png","df14be338f9c920818dd1daa6aa955ee"],["/images/nhkimage/2020.08.10.png","c4e2ed023cd3dbfd4986add35ca9357c"],["/images/nhkimage/2020.08.11.png","cf562339e57f673d394f3e6cdd1f60cb"],["/images/nhkimage/2020.08.12.png","81dfa179fea3052ddcf73912ea368f67"],["/images/nhkimage/2020.08.13.png","8cf26c2642e7a27cbd86fcbda8bae8d9"],["/images/nhkimage/2020.08.14.png","d88eeb678b3ed3651d597e61957e264a"],["/images/nhkimage/2020.08.15.png","b9879f193867edcffeefce62c9dc7153"],["/images/nhkimage/2020.08.16.png","46cb914aa1d556561897767ec9ff66a0"],["/images/nhkimage/2020.08.17.png","ea1af9645b5cc9cbaafe70a91dd15cca"],["/images/nhkimage/2020.08.18.png","e87e4de39a6f06cf4283a63af92dd8de"],["/images/nhkimage/2020.08.19.png","8001a951513b542a98ce1151be5bd87b"],["/images/nhkimage/2020.08.20.png","4bc8fafa3ecce30d340b1350715d78e3"],["/images/nhkimage/2020.08.21.png","07ad1337e127922abff27da6c672549b"],["/images/nhkimage/2020.08.22.png","b2b5d53ba46015f64048f9d803b12179"],["/images/nhkimage/2020.08.23.png","225af8c0cabe5218ec634d1b8815fd95"],["/images/nhkimage/2020.08.24.png","1d54a484a6e2395aabe9be005cd90361"],["/images/nhkimage/2020.08.25.png","8008ba169cfce0ef2041329cd29b6b77"],["/images/nhkimage/2020.08.26.png","72a2b8094003a54c97a34ea97cf21bc3"],["/images/nhkimage/2020.08.27.png","893407e604804d215c8fef8bcd5f2684"],["/images/nhkimage/2020.08.28.png","b542280b7341759890a99cbd44d822c5"],["/images/nhkimage/2020.08.29.png","620e2e7d4772e39615fd1a88cdf49717"],["/images/nhkimage/2020.08.30.png","f645d7ba2dcb506f9ec6fb9244425ad7"],["/images/nhkimage/2020.09.03.png","c5262f3aa87190e0273383ea1e445681"],["/images/nhkimage/2020.09.04.png","c07149c32aa41c03bc7dac82a713f6b2"],["/images/nhkimage/2020.09.05.png","4e43556e1cb3b7f4d75f0f6127616a54"],["/images/nhkimage/2020.09.06.png","1021d2ae04a7f109404f857a2a7629cf"],["/images/nhkimage/2020.09.07.png","db9827e9f0a4cf1401b559b4644a0204"],["/images/nhkimage/2020.09.08.png","efe1030b73dc1c01f169c3122a194426"],["/images/nhkimage/2020.09.09.png","f6ba3a1c6cdeff88404ebe2a646f2eb5"],["/images/nhkimage/2020.09.10.png","3471b05d02113517359a9e2167befcfa"],["/images/nhkimage/2020.09.11.png","921a541a8bffb1aa436df2eb6db7c99f"],["/images/nhkimage/2020.09.12.png","a51f8ebaddba69bb80f9259a30f17e65"],["/images/nhkimage/2020.09.13.png","0399889200493cd2154ffc407e2bc400"],["/images/nhkimage/2020.09.14.png","eaaf3da69a39ed316b7fc8c4d409bb0f"],["/images/nhkimage/2020.09.15.png","5774959ea4061c9298ea174f0862cc3a"],["/images/nhkimage/2020.09.16.png","0c5a00f74020740fda589c02e4b3f917"],["/images/nhkimage/2020.09.17.png","b5aef734e3a7db4862ca3fe4e6769dc2"],["/images/nhkimage/2020.09.24.png","5982a7b3843f4ae43b2b4bc4b0c577d6"],["/images/nhkimage/2020.09.26.jpg","c6415af781fbdd36fdb034f74646129b"],["/images/nhkimage/2020.09.27.png","27aa6f6a8d5534ccd99cff261dcd9eb6"],["/images/nhkimage/2020.09.28.png","0f4318d1ff17a33de364432a1c44b5ad"],["/images/nhkimage/2020.10.09.png","6408d9f7e66fdeba8b9207939a08cf8d"],["/images/notop.png","d25c272e5ce312a880e04ce8a0b27683"],["/images/pasted-0.png","552608d8f6e39369aa30c6e332a32826"],["/images/pasted-1.png","baafdacee93c99e99418aaedbf524fda"],["/images/pasted-10.jpg","395cff6f64ab5df19baa3572ac98e541"],["/images/pasted-11.jpg","56e5df07c96634638abf7995b25c81ab"],["/images/pasted-12.jpg","61b3f803b85ce3640d7a9ba7efb9da6b"],["/images/pasted-2.png","2f410e53c811f92a6135f48857776f5e"],["/images/pasted-3.jpg","bb5717e691e87355e7d63a5f3a87ae62"],["/images/pasted-4.jpg","10041d0e3567b24b81222ec5075d6492"],["/images/pasted-5.jpg","ac5047a4b48c6cdaee86fa1863e33904"],["/images/pasted-6.jpg","1556ae8d3ad5713d60237ee4d10e81f0"],["/images/pasted-7.jpg","913fde1686587646ddc663bd810cc81d"],["/images/pasted-8.jpg","fc83268081fb4b6b6ecb1ffa1ec5af7f"],["/images/pasted-9.jpg","25e0fa3496591501f5c29d0b802b77d2"],["/images/pet.png","2b8c121909497e57057478856fe48a94"],["/images/pet2.png","dfb1d6a17b527ccc0c600e6ad31f55e5"],["/images/ps1.png","0917ba91f21b6944dc08d35c41a326d2"],["/images/psb.jpg","6a27c58337875c776af0a7667598b401"],["/images/quse.png","7cd1ec12b804305430cb4cdc09c7a893"],["/images/rain.jpg","9c26acc44c692b6a63e134be07b07c18"],["/images/shezhi.png","281bf545f6a4024e2d0b7120bc398a21"],["/images/soul.jpg","d97b4099c0728ff6123d006fa62db86e"],["/images/study.jpg","a9b1cf95ee6bd9f3913e8ec6a6a6f44f"],["/images/tianqizhizi.jpg","dd48d78b4eeaaa52578352f9ef570b14"],["/images/vue.png","cf23526f451784ff137f161b8fe18d5a"],["/images/vue1.jpg","8cbf18302c6fa72e2a40d0cca0832213"],["/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/images/work.png","e521cf5b834292fde1c50e0a0f5802f9"],["/images/xiaoguoyanshi.png","994a3b710d36df0a4630cd9a768c7f7b"],["/images/xiaoguozhanshi-m.png","1fefca18214fc4889d1bb76b81887c9d"],["/images/yao1.jpg","9dfddaf8c121fc8db788a87d133d6376"],["/images/zfe.one.png","b41f689341882058ffb28c4cee499bde"],["/images/幻想终结之日.png","0025c4d3973bdfedb80db3f78c59fa47"],["/images/时空战纪——游戏建议及意见①.jpg","1337457f14a8dffee66d94f8915b54ff"],["/images/简历.png","d70507ee4615c9e324578c0d777e6855"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favicon2.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","f6ee369377fedb536ddec5a43a7c327a"],["/js/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/APlayer.min.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/airvisual.js","71cf86bfd452ca01d92438d8266416ee"],["/js/airvisualapi.js","6931bebe1696688d109963187fc2eace"],["/js/artitalkkey.js","e735b361754e1b51300ddca9fd56b4ca"],["/js/background.js","94c8410b174f58594cf81ec99054968b"],["/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/js/calendar.js","a58e02711cc6dec4dc04257e555b8923"],["/js/catalogMagnet.js","2a4c65f71f95e19bd7e0deb9daa69a8c"],["/js/clock - 副本.js","405186e7a9d73221d2d50c0dea2852d0"],["/js/clock.js","2fdceb94cc57b551cd245b0001927b66"],["/js/color.js","3730bb4f7b185e6f5130ac28bace968b"],["/js/dan.js","6b6ae6b7f1b42dd4857541f43b2bb733"],["/js/echarts.js","dc1227b1eba1ba47fd185a387d0a7d37"],["/js/gitcalendar.js","fadfa8a42272cd322118653dca512a7a"],["/js/history.js","20459f7db325e597e64903f4c0d19306"],["/js/historyroll.js","a3e9ac376106816c50a61f9f4306d671"],["/js/jam.js","462c07d3b2e0f20394d994bbcfae37cb"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","455fface5a0a3ff90766ca254affe502"],["/js/rain.js","f656dc28e4ab5c3f8414d35f683278c1"],["/js/rainremove.js","ceacf82842b101f7e54a2aaf5f4bb9cb"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["/js/shuo.js","1076b1ef51358cc11b6ff3bab25e15d8"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/link/index.html","555b717354d753b336ff2466071b1de8"],["/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","a020eca90baf71efa869b255084e201b"],["/page/10/index.html","ba34d1d14dac5a394e42464f549120d3"],["/page/11/index.html","37fb3ce36723621c166a9d9108155c29"],["/page/12/index.html","cca630665e56c39d45f2e68a155ecf25"],["/page/2/index.html","84f5c1de7db07970650b70680c3d3c19"],["/page/3/index.html","f328166defeeb307127b383f07f9ad7a"],["/page/4/index.html","62307c11962269db78b006f774f601f1"],["/page/5/index.html","a7b15a39887667b5ef3f99581f837ec9"],["/page/6/index.html","e89d89f2b44c2f0c91a066caeaf78158"],["/page/7/index.html","70c09761788bbf0ec83fea9ff7d6b4fa"],["/page/8/index.html","bd140e499cc8fecd4df40c00084401b9"],["/page/9/index.html","20da54d99c72e4711062327b47df7a7a"],["/research/index.html","08cfcb866b21ea586751789efcf05485"],["/sw-register.js","d23f24feffe4ea8725f2b72e75bbc885"],["/tags/Butterfly主题/index.html","5e75250a32ea4047c16aeae82331dd80"],["/tags/DIY/index.html","74c3b6e6653dff99afe99548fd758d7c"],["/tags/DIY/page/2/index.html","9d30e7d1be2d062f89d8e6176b40db68"],["/tags/ICT/index.html","0196901addb899e5f35b471bfa0c49d5"],["/tags/NHK听力练习/index.html","e87684c56b84f39d046e4615e752d621"],["/tags/NHK听力练习/page/2/index.html","054546731ddd0724ce08dece4a6602b0"],["/tags/NHK听力练习/page/3/index.html","575dec3ce21dcb46b2703123843412f1"],["/tags/NHK听力练习/page/4/index.html","a1f966a1080c7876695045581bf68c5b"],["/tags/NHK听力练习/page/5/index.html","a716cb19f3b6fcfe6cff731892b76a59"],["/tags/NHK听力练习/page/6/index.html","850d1932c0772b50993ee2eb7a9e2c12"],["/tags/metro-ui/index.html","46ff688a090eea63ec5ec157077c5ce7"],["/tags/vuejs/index.html","b4e897dddafe72ce2f4bdb730d185bdc"],["/tags/お盆/index.html","69334330733f41595a860a86fc5e7885"],["/tags/世論調査/index.html","ab365916fcd63203eb9107a9438a02f8"],["/tags/作品集/index.html","3cee0ec639e2da0c5c97c33355209698"],["/tags/作品集/page/2/index.html","babc7217adc1268dcab04a40f7175665"],["/tags/农业/index.html","552bfb135d21a0b6f1d2d2476bfcd4d2"],["/tags/历史/index.html","0ff1744dd601a38f929439e6d04db802"],["/tags/営業時間/index.html","d809a6368c0ca81a024129e2842f0791"],["/tags/国外政事/index.html","33b3edc623f55ce14148a955b48b8f26"],["/tags/地震/index.html","dafb911f6cdf25ee968e2acbfb440637"],["/tags/外国政事/index.html","e6afe6be70997aac5dd62326c32e9c64"],["/tags/天气/index.html","0f59f7b62510f095d3a66b409c832c38"],["/tags/天气/page/2/index.html","60009f6f0d8ce55f096ca1438032550b"],["/tags/奥运会/index.html","6818cf0d5955995c47c4a680293f6aba"],["/tags/学习/index.html","38742760ebba517a8713d324e9453658"],["/tags/学习/page/2/index.html","fbad0bb5ff9d0a61463005640911e6fa"],["/tags/学习/page/3/index.html","9377cd9533a41749381a79e5d4ad866c"],["/tags/就业/index.html","21ec3291b21103c702e4b12033418d55"],["/tags/庐山/index.html","1d4d5a9e3dbc1150457d728445bcd5d0"],["/tags/座礁/index.html","8ef4cc1af0e5380f0526701d149cb1f6"],["/tags/政府/index.html","1a0d692f994cac1ecddca80bf51c4252"],["/tags/政治/index.html","127163c7a9b7492490d52f8817b12d97"],["/tags/教程/index.html","7ca2f9428982b17aef42305cbd035319"],["/tags/教程/page/2/index.html","789702a7530b22b994ecc5aad2fc1dc9"],["/tags/日本教育/index.html","c2a91f7bb4c531f97a7757c091d82b83"],["/tags/民生/index.html","3c0e54e080fb2662ad60bba4fcdae404"],["/tags/民生/page/2/index.html","2612f9013882cec82b1bb56ccb7d98d7"],["/tags/游戏评测/index.html","59b71465e7d964549f216004c6c6910f"],["/tags/游记/index.html","7614cc5ef311530a4eae67e44cc8d770"],["/tags/生活趣闻/index.html","d3185f516034e6575a95a2c8e866feb4"],["/tags/科技/index.html","2ae87ce630415750e1ec4b1a403b4ce0"],["/tags/经济/index.html","9a527ef5a96779d2660c0497b7f53bff"],["/tags/经济/page/2/index.html","a4616edf4a6f532b787fe70a6331c583"],["/tags/网络教学/index.html","636a7515c3f8e220a8524c20f29e086c"],["/tags/舆论/index.html","305819202e708b2bc0c0425079f2d495"],["/tags/虚拟现实/index.html","d1b17e41700d496b27952cf01c414e23"],["/tags/随想/index.html","ad2ffa3d49081f5225d3b784cd38f5fa"],["/tags/障害者/index.html","dd9f1ba9b54ad764197e91e7c7043e0c"]];
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
