/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/05/20/2015-05-20/index.html","683588f405414ebccde253817f622710"],["/2015/06/16/2015-06-16/index.html","4a84a72341e5e8a10f2ef551997b9dc5"],["/2015/12/12/2015-12-12/index.html","2b3a764de6a46f03a7109c4c83edd8b9"],["/2016/06/08/2016-06-08/index.html","6acca203e5604f98ad560525bbe4cf9a"],["/2016/12/18/2016-12-18/index.html","30cb63a0eb4f9a89ddd54ad0d918dde4"],["/2017/02/17/2017-02-17/index.html","8a37c41d9a14544ad0e1e518551f78b0"],["/2017/03/17/2017-03-17/index.html","c6d4e86d34538115f4a3e202f8458888"],["/2017/04/06/2017-04-06/index.html","2cb531950b8b473286f2ff8dc8f00252"],["/2017/05/17/2017-05-17/index.html","6e4a2ca1f60f22d42b7f0bd229998850"],["/2017/08/15/2017-08-15/index.html","7832ee5b8f2604f135381b1d3d1d731e"],["/2017/09/16/2017-09-16-1/index.html","700b84f06ace82f72a8b251c05de0cf2"],["/2017/09/16/2017-09-16/index.html","dd4938937ac14ea981eb133ef0c3b359"],["/2017/09/21/2017-09-21/index.html","098d085e0d25a402fbb51de48dfaad6c"],["/2017/09/23/2017-09-23/index.html","2843e788a68c47619b2aa6d6b0d0926c"],["/2017/09/26/2017-09-26/index.html","c92da46cd7f66c1034e5b41d3b130bf0"],["/2017/09/27/2017-09-27/index.html","93a44f6251548f6e0e1ba298d7ac982b"],["/2017/10/04/2017-10-04/index.html","04a40234adddfc4f91e95f9f435bb22a"],["/2017/10/08/2017-10-08/index.html","f3a80f022827d24f271956e9efcd6205"],["/2017/10/09/2017-10-09/index.html","b91a6c7259edf8e2a6cbd2abf32e2cc9"],["/2017/10/15/2017-10-15/index.html","6a6f3df5a4c63adb94d4300324ec5c13"],["/2017/10/19/2017-10-19/index.html","0eb7136f2bd5a3d60039ebc59bac5b20"],["/2017/10/23/2017-10-23-2/index.html","4232dca41e7757c72879fbb72a0d2411"],["/2017/10/23/2017-10-23/index.html","06b8258aa1d3c48bd98af1358589be87"],["/2017/11/08/2017-11-08/index.html","a5549e5db84743bb9414f176651c0148"],["/2017/11/12/2017-11-12/index.html","7a968a7f15f9f1e4d6a10719104f8d4c"],["/2017/11/15/2017-11-15/index.html","e8452de9a04c3b7d663a3598585932a8"],["/2017/11/27/2017-11-27/index.html","dc4d09c43876fb4543fe3daec15a9083"],["/2017/12/06/2017-12-06/index.html","6b0d55937cd0b61c562914b10ad3a6a7"],["/2018/02/12/2018-02-12/index.html","7ad4c68f0a70a6df12a99dafee87bdc2"],["/2018/03/26/2018-03-26/index.html","da272e56fc77544e1bf4c4266e986d81"],["/2018/04/02/2018-04-02/index.html","db46a9bb3faf74f447716a4bb18674ee"],["/2018/04/24/2018-04-24/index.html","c721d8e96d8c3226c3296f5b70aa89b5"],["/2018/05/18/2018-05-18/index.html","4fa111ca919fbfb4646002837a93bdf3"],["/2018/05/23/2018-05-23/index.html","a261815306b6351516dcebd3ba3cd401"],["/2018/06/08/2018-06-08/index.html","55ba05bf8f4655f071df268ec009fc72"],["/2018/07/01/2018-07-01/index.html","b21a5c852da673ebd883a1271267ba9a"],["/2018/08/30/2018-08-30/index.html","43951990498ec15d7a340d88646f2614"],["/2020/07/20/2020-07-20/index.html","e3e7806dc7bf4f7c7c419af8c7b21c73"],["/2020/08/01/2020-08-01/index.html","b21128803c48cae957436b56b6f54b9d"],["/2020/08/02/2020-08-02/index.html","f0cc762843270f2c8858a6b8f8372109"],["/2020/08/03/2020-08-03/index.html","7039facdee8e7b041af98c8e50d1d80f"],["/2020/08/04/2020-08-04-1/index.html","e9ab5f694dc0dac42ac0bc8af28d3a8f"],["/2020/08/04/2020-08-04-2/index.html","de0d6404c172aa1ce91f7475e07a1aab"],["/2020/08/05/2020-08-05/index.html","81b69c0c00a9c2fb9432c5b05e977b15"],["/2020/08/06/2020-08-06/index.html","10fd6eee5cd1458c66281ae776967aa4"],["/2020/08/07/2020-08-07/index.html","8dd2c09490cfad5e7bf4e836c9c238a8"],["/2020/08/08/2020-08-08/index.html","9db7b22250d63f42811728efabc51848"],["/2020/08/09/2020-08-09/index.html","24c5f574caa70553ebbc9a73eff70d2a"],["/2020/08/10/2020-08-10/index.html","9089357f5ce8d81954c2d91b6558d676"],["/2020/08/11/2020-08-11/index.html","16a80775815d8b409aa7fc2b084676dc"],["/2020/08/12/2020-08-12/index.html","767db7675808a72fa66e4fe3cfe85a92"],["/2020/08/13/2020-08-13/index.html","560e2c1f155e471e3d9fcc68bca5c79b"],["/2020/08/14/2020-08-14-1/index.html","f1e873814386ba243ec5b4c8098a95de"],["/2020/08/14/2020-08-14-2/index.html","c6d034b47bfb778c2a198646c280dd97"],["/2020/08/15/2020-08-15/index.html","bf069379af67799165bccda1d02538fa"],["/2020/08/16/2020-08-16-1/index.html","93a05141a2b3a9b5fb08e7bee57c157f"],["/2020/08/16/2020-08-16-2/index.html","d2d6b8302a02a84d42c01207d482d420"],["/2020/08/17/2020-08-17/index.html","5cc0bc2b2a665b61ad38aed0abb7d3db"],["/2020/08/18/2020-08-18/index.html","f9f8172e139d52faeaa32226dc4980ef"],["/2020/08/19/2020-08-19-1/index.html","2d21e50400b73a26f4f8352fe7c30358"],["/2020/08/19/2020-08-19-2/index.html","5426f6226de34c61d31232e2ab57a257"],["/2020/08/20/2020-08-20/index.html","49dd166879f81366ddbb01dc53308d27"],["/2020/08/21/2020-08-21/index.html","a1c3afe8e60e543b2df28d191aab017d"],["/2020/08/22/2020-08-22/index.html","f00030ca6d7179e2c2f18dde93120a63"],["/2020/08/23/2020-08-23-1/index.html","1896ae4e73f0a97064d61a2132f6f95e"],["/2020/08/23/2020-08-23-2/index.html","ab0efe7541e5cc3085ff9061ec385b00"],["/2020/08/24/2020-08-24-1/index.html","7beca22f6b703c5e814327c9a9a7ea70"],["/2020/08/24/2020-08-24-2/index.html","021e7b5d69d56a3c574f4fab43cdb577"],["/2020/08/25/2020-08-25-1/index.html","c555285f056eb87328abdc27427d004e"],["/2020/08/25/2020-08-25-2/index.html","2d9c85af3180ee3457a9e97afadae828"],["/2020/08/26/2020-08-26/index.html","9012f2a89a9f1cede1b13aa812680443"],["/2020/08/27/2020-08-27/index.html","d428d2a943e67f960e206c32468bec1e"],["/2020/08/28/2020-08-28/index.html","59f789877599738b4cf162e47abec3a6"],["/2020/08/29/2020-08-29/index.html","6ebfcaee7fe5a740fb5e3a0b9a655c04"],["/2020/08/30/2020-08-30/index.html","e6badaa7b9049d92d7d34339d4df0cb6"],["/2020/08/31/2020-08-31-1/index.html","6e8ff7726b9eac135b57d47e806419ad"],["/2020/08/31/2020-08-31-2/index.html","f5d97c19575e73b12ef9d51b2c53d066"],["/2020/09/01/2020-09-01-1/index.html","4b0cd782e38e6ebcc2df0e87c974e17d"],["/2020/09/01/2020-09-01-2/index.html","92c6206a5801f94104b9112e95debcfe"],["/2020/09/02/2020-09-02-1/index.html","06c6cd872bd998d0a2b17fd70ee89682"],["/2020/09/02/2020-09-02-2/index.html","81924696d7a797d292fa9d0ad1b0d5fb"],["/2020/09/03/2020-09-03-1/index.html","77d62b21fc068cc86b8f1feabd2a51aa"],["/2020/09/03/2020-09-03-2/index.html","d387aa82c4d3f82127457b38629a75f4"],["/2020/09/04/2020-09-04-1/index.html","3e292f4e6f1f202c262870374c1c3124"],["/2020/09/05/2020-09-05-1/index.html","408a6dc730ec5f89c57bf32bd164796b"],["/2020/09/06/2020-09-06-1/index.html","ebda501f862ce1e89fe6abd74c9262db"],["/2020/09/07/2020-09-07/index.html","c80df6488f266d6913f14c698186d0da"],["/2020/09/08/2020-09-08-1/index.html","c8a9d03b935d7e6a436d3a82278c726c"],["/2020/09/08/2020-09-08-2/index.html","5157fbdb4601dbae73332b2d831e5d39"],["/2020/09/09/2020-09-09/index.html","92d09aa5a2246137e0d2ed8c5259f789"],["/2020/09/10/2020-09-10/index.html","b6f001d3e97b71e5b4fdde6e1ea03712"],["/2020/09/11/2020-09-11/index.html","b0e4c1c2426c37f5ad469108380f2901"],["/2020/09/12/2020-09-12/index.html","81b3af44a52491d522dbee4583dc7e29"],["/2020/09/13/2020-09-13/index.html","d820e0e0ac7b81f0e58774458ac14b4b"],["/2020/09/14/2020-09-14/index.html","0d1d84b5f9d17805f4b38b27b4d1f3f8"],["/2020/09/15/2020-09-15/index.html","2a05a3cf26f3ce08074abedc6ae10301"],["/2020/09/16/2020-09-16/index.html","12c5eede6a80a4904c35e58e79674be8"],["/2020/09/17/2020-09-17/index.html","686b82fb87c8fef70399f04ff3133acb"],["/2020/09/19/2020-09-19/index.html","b8be003f49a75fcffefb79dd237f4377"],["/2020/09/23/2020-09-23/index.html","97dfdccb47d87bf8e93d78b77c16a92a"],["/2020/09/24/2020-09-24/index.html","aa337589c7563c45a29bd7f48b2081f9"],["/2020/09/26/2020-09-26/index.html","459e87fb39399ef4cd7fa982525415fb"],["/2020/09/27/2020-09-27/index.html","4718610e6cd650f7185a8ac0796e44b6"],["/2020/09/28/2020-09-28-2/index.html","f8ed5399aaf4e093dc8fd7ae66f17f49"],["/2020/09/28/2020-09-28/index.html","f4b1032fcd7bb270aa55d8f3ac833be7"],["/2020/09/29/2020-09-29/index.html","e854b46f965ad60239c3d57df891d02e"],["/2020/10/03/2020-10-03/index.html","596d7f2bba6c8dd596cce41571fa7968"],["/2020/10/04/2020-10-04/index.html","4d21ea356587dbea91733dfa6cba7b0e"],["/2020/10/09/2020-10-09/index.html","2da6c58634c5d37bcd1c277c986066ce"],["/2020/10/10/2020-10-10/index.html","61f0aa89ecbc15d0aa115fc7e79a6401"],["/2020/10/11/2020-10-11/index.html","117b8b29e62fcf961dc94348d2daa3df"],["/2020/10/12/2020-10-12/index.html","7de4974ceddaa7c675e5627c08bcddb6"],["/2020/10/13/2020-10-13/index.html","8838d2f9663501c209fc7ca110e3f1a6"],["/2020/10/14/2020-10-14/index.html","ba661e16d3998bba37ca13100d534a43"],["/2020/10/15/2020-10-16-2/index.html","4b14ef3c7a6be196e0b64f9058eba695"],["/2020/10/16/2020-10-16-1/index.html","614e64354c39cac7468c51ac11b504d2"],["/2020/10/18/2020-10-18/index.html","7505270cbbd834f35382ddf5af127792"],["/airplayervisual/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/airplayervisual/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/airplayervisual/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/airplayervisual/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/airplayervisual/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/airplayervisual/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/airplayervisual/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/airplayervisual/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/airplayervisual/index.html","d3de79a1ec4da3c7a66e57bc5903e913"],["/airplayervisual/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/airplayervisual/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/airplayervisual/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/airplayervisual/js/jamsetting.js","7927507e0080ddf55c6d8b5f526bd942"],["/airplayervisual/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/airplayervisual/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/airplayervisual/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/archives/2015/05/index.html","bca291d7ab4cff5e4e95d87e4169e5e9"],["/archives/2015/06/index.html","598afb6b1a524221ef52adbbb2515bb3"],["/archives/2015/12/index.html","bacc8528e45bec5b44b26551d06857f0"],["/archives/2015/index.html","d36f089e90b5026d17997fb1bb95400c"],["/archives/2016/06/index.html","4da91106f00d15fb1ce2842c74e7de0e"],["/archives/2016/12/index.html","a20a003468bb748d8a37b2685523da14"],["/archives/2016/index.html","1eeacf81b4b05e8f646381929f4ed832"],["/archives/2017/02/index.html","f0c2ec2f2c8b848bb3c0d53a9e98d5b4"],["/archives/2017/03/index.html","ce11c35b3af688bba58ee13f4fa993b0"],["/archives/2017/04/index.html","ce089d1f4b90b0eb250bacc9c0741673"],["/archives/2017/05/index.html","ec1eed9952de0b967ba98bfbadb93571"],["/archives/2017/08/index.html","efe343cf96f72173e8d022389728e271"],["/archives/2017/09/index.html","fef60f09afd667aa70beb6f36c5be1db"],["/archives/2017/10/index.html","c2525c5fc32479f46ac1db22ac5947bb"],["/archives/2017/11/index.html","689bc78471e19c36baf4c14273e602ba"],["/archives/2017/12/index.html","e6be37f3d9165a7608e3b0f7abed8603"],["/archives/2017/index.html","4e01d5206394fe7c8a1932b4c46af29a"],["/archives/2017/page/2/index.html","3e482881ff91cfb39bada297b140b5ab"],["/archives/2017/page/3/index.html","978e8d6f28a7f8cb872b3df637f5af10"],["/archives/2018/02/index.html","9cdd9554994ea6d654becf267891a617"],["/archives/2018/03/index.html","76d4d34c1f122d377d11d34577b6c437"],["/archives/2018/04/index.html","d1380f8347d04212f1a563dc12bdab83"],["/archives/2018/05/index.html","0108a28ad49287bfef06a8cddd2c3be4"],["/archives/2018/06/index.html","a9a82098560a0006e6c5860a4043218d"],["/archives/2018/07/index.html","9341fc17acbedbd80ec4642e5b7181df"],["/archives/2018/08/index.html","6dc29e96aecea36e279d28812bbae1a8"],["/archives/2018/index.html","e98809925e5d8452048bc2c0b5170fc9"],["/archives/2020/07/index.html","4857d253f5a280d3f805d7fcd7d754bc"],["/archives/2020/08/index.html","c737e5358b255f5816d597a2a3d178b5"],["/archives/2020/08/page/2/index.html","b0d8d78a7a0f80e2468dc26b4c01a8b5"],["/archives/2020/08/page/3/index.html","953b6b657396a8627c97ba27ee0effa8"],["/archives/2020/08/page/4/index.html","1916caa41db7a35233128284acd04eee"],["/archives/2020/09/index.html","52c21d4b107f308eafb919c6c1804308"],["/archives/2020/09/page/2/index.html","fe743e18c1112e5190e77c6011987b70"],["/archives/2020/09/page/3/index.html","6d4406d08d5459a54a7bc37571056839"],["/archives/2020/10/index.html","92b6174bc2b95af0ee4f102571a15b53"],["/archives/2020/10/page/2/index.html","18e8344bcdf2680a3f7ef2dcfcb0223b"],["/archives/2020/index.html","d778a294a79cf4579c9da5befc229845"],["/archives/2020/page/2/index.html","04b943f558c55ae5926f9701b9297518"],["/archives/2020/page/3/index.html","de50ce678b6356a1dcf42cb67b199d1b"],["/archives/2020/page/4/index.html","903ad0f49937595edc5f669640a22b4e"],["/archives/2020/page/5/index.html","50e165fe45878efe6e7e1500d0d24870"],["/archives/2020/page/6/index.html","185d8cc63aebeff4d8f96fec69d05ab0"],["/archives/2020/page/7/index.html","fdf2206b2e7c13e980f8d12c5cb16abe"],["/archives/2020/page/8/index.html","f0bf5b5e81ba7f011a3f3810a0d4176e"],["/archives/index.html","b7dc624b11ba71612476ecde391ee98c"],["/archives/page/10/index.html","e54edc19f5010921254d49fcad868dc9"],["/archives/page/11/index.html","66e33d6a908355224b82651926caf58b"],["/archives/page/12/index.html","c99da2e52f588ca17a28beb479670852"],["/archives/page/2/index.html","66b324068a07cf29030833181f065c90"],["/archives/page/3/index.html","5b2d21522dd3a5a48741b5d2817b9eff"],["/archives/page/4/index.html","2ffc15ae53fd326bf1af996f1d9f10ff"],["/archives/page/5/index.html","b2c2f7ab29e856dfc1192e4718d35031"],["/archives/page/6/index.html","df71661166c6b7d5a7309c502780dee8"],["/archives/page/7/index.html","063b3bcbc61d61fe6c7314d3d3797273"],["/archives/page/8/index.html","e360f9c56e09e095c5c092667c587277"],["/archives/page/9/index.html","590ffc5fe459c73b97c044a3e390e98c"],["/catalogtest/index.html","be73e712c9bb521893e483ce0ec4a4df"],["/categories/NHK听力练习/index.html","51b837ee8592821027a8658bd07ad6e2"],["/categories/NHK听力练习/page/2/index.html","7f507761e710f768457fe69a7c0f68dd"],["/categories/NHK听力练习/page/3/index.html","37108dca3a1d710308a341acfda7b95a"],["/categories/NHK听力练习/page/4/index.html","edbc7c05fe1d33b9ab885030269abb19"],["/categories/NHK听力练习/page/5/index.html","5e84e17bbf39564c4ae520d926ef0c5b"],["/categories/NHK听力练习/page/6/index.html","41dc45bc4c63fda8aa68b9d23d2e35ea"],["/categories/vue/index.html","c4fcd09c903a09e4a96bd0de9d3b540c"],["/categories/作品集/index.html","83c6284f7873ec08ade92fac4da0cab8"],["/categories/作品集/page/2/index.html","1be939cca5f832f096025fdcb85a5e35"],["/categories/学习/index.html","9dd55395e7762dc5796e8b283899e0d4"],["/categories/学习/page/2/index.html","f1158a753097186604b29d700691b4bb"],["/categories/教程/index.html","016e186db6d687b7278e889bca7529a1"],["/categories/教程/page/2/index.html","b23f9aa368ff5ce966a514bd211b2665"],["/categories/游戏评测/index.html","88988a3c3652c24baf2ef2a77ad894b3"],["/categories/生活趣闻/index.html","cbb79ca8be07f2b8460e3748122dea01"],["/categories/随想/index.html","dc4f1c7249c1ecbd9769349343144304"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/addcss.css","d20fc732e0cc7996bd82c5170b7aaa86"],["/css/background.css","32d5acccbb94f987faf37cfdc3fd06df"],["/css/calendar.css","0090a32d2a61d42c5bfed254bfba078c"],["/css/clock - 副本.css","65602c2385c7eab42ee3804cd6ee0a5a"],["/css/clock.css","9db53e3bffb704c740aa83bddaf8b999"],["/css/cursor.css","c1a23e168c5b794ff367eb0ae77eb26b"],["/css/danmu.css","2a5b914a9592bcd353425c6d5fa7af8e"],["/css/index.css","a830cf7dafed0e1e03142b35ae00f2a6"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/loadingline.css","bc1ee020a6a11fea17b915b97e6978bf"],["/css/shuo.css","e34cec2d23b9764928df02c60388358f"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/html/calendar.html","bddcec1edba7f4c49fe5cd75f8cdf5b2"],["/html/shiyan.html","e0473d1f691122e8e946bc688d608674"],["/html/shiyan2.html","81ea6385d032404f247e313ec605ca15"],["/icon.png","8ec68de45d18642ba9baf2447e62f476"],["/images/AMJ1.png","d27a6725d1aaaf5324248da4312ab6c2"],["/images/AMJ2.png","00e22eba5901e5bd674e42228cd5bd26"],["/images/AMJ3.png","c8c9ea6348dfcad3a641899d5b587431"],["/images/FOTO1.jpg","4b6f100861908e2c7044cffbdb4a0c1a"],["/images/MVVM.png","ea5a002ee2f85c71a0db51d5adb5de19"],["/images/UT.jpg","367f4e432f9db55a92b2a290c4b0a476"],["/images/UX.png","a183974e958d41d1b6acec70bb7ea00a"],["/images/WindowsTerminal.png","8ac29cb56b8a1768cf7de071e9f1ae6f"],["/images/air-w.png","c1cc32f9d3e17551ca11a7d18a0b533a"],["/images/anzhuang.jpg","912b2489957f8344406edc5e5cebe5fa"],["/images/api-setting.png","2c0bb074390779721cba009e96c5417c"],["/images/apikey.png","1f31121b190eb1f990bcc3e27524bc03"],["/images/b0_img.png","43fcaa3f8b394ca5be957f4b860800db"],["/images/backpic1.jpg","86a6fa88167feb338fbf1a4e9057114b"],["/images/c0_img.png","34397085b4d3349034f9b167469ac626"],["/images/c10_img.png","7938c5b0dd789db4f262e5a618943a9b"],["/images/c1_img.png","95211a0ebf07befde1b11477c3a8185b"],["/images/c2_img.png","456ba51725d669fc4d005787753a6b08"],["/images/c3_img.png","a0aa7dcdd2ed5bccec52c16942036a3f"],["/images/c4_img.png","0869cebb60d00a78936b7498823a39de"],["/images/c5_img.png","533774e840ccb3ef13b46201a54be05d"],["/images/c6_img.png","db9eb681dea0b7911f0b2ba918d86c26"],["/images/c7_img.png","5b9c9e0331aca2a9d47a2730512f34f5"],["/images/c8_img.png","be9107995f185e3bbf7186c4dff69f42"],["/images/c9_img.png","642a2e762b74a28d2426af14f2b864c1"],["/images/calendar.png","86319b08b93be7c8bc47cdba7a169563"],["/images/clock2.0.png","0a0f122c7a25262fc02ee99df0ef21eb"],["/images/clock3.0.png","8e04375c183c637b65fb50ed40f46466"],["/images/example.png","aaac9983e5d59f919bf282dcff2edb3c"],["/images/foto17.png","28db4c6608ad1ee6b34238cafab25e5e"],["/images/foto2.jpg","be95b922512d004a61f83c97af3e2602"],["/images/foto2.png","0dc07d4e1b00526a273a89dc8b81548d"],["/images/foto3.jpg","551c0616c92c4ee7cc17dd458b3c46e9"],["/images/foto4.jpg","9d1d9fea759a41afc0061866e400339a"],["/images/foto5.jpg","984f618b15372f37d54f507e6f379f10"],["/images/foto9.jpg","b683fc0b998e80ff8f5a3e45e889807c"],["/images/girlpic.png","ff1e8427ed555af639e6d849f8f648f1"],["/images/girlpic1.png","698e5570e821c3cae643cc9777c2292e"],["/images/girlpic4.png","551882e4b9b6afb79000fd34c0dbf5e5"],["/images/headimage.png","332502f36a0297b30cb7969fe6de8451"],["/images/hexo.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/hexoWT.png","c027cc9f5665c7d7ba657e7a4bb40017"],["/images/his-json.png","7d8a71e38ab684107446e5c72c31854e"],["/images/history.gif","0459a3dcf2317253de0b34482880c63c"],["/images/homework1.png","e8d2f64d0785519ea7779016208a2900"],["/images/idea.jpg","5eb08bf6c965588f03c8860f201cac45"],["/images/key1.png","f2a370e02ad6c5a101db20b47a9a0008"],["/images/key2.png","21dc40bbe0377cd9fe85a9cb431c18f0"],["/images/life-cycle.png","02f39ea5c041d45938fda4b50f234cb7"],["/images/life.jpg","74d2d9c5f48ec59e3badeec690941812"],["/images/listen.jpg","9d4f73cd5634f43deaed4f9aca03f9a3"],["/images/loading.gif","ffa0804a5d99e2d5b39e05cda6d6b28b"],["/images/magnet.png","4899a924f3de0d19dbe0415128c07d65"],["/images/magnet1.png","8d010eb86ca943e036adaa7de57aee7d"],["/images/magnet2.0.png","54fe576f174d2b6917fef89f40ac5975"],["/images/magnet2.png","293cb414a8ab93b43bde3bebf9cf0cfc"],["/images/magnet3.png","1923148630e2e094ff80bf35aa604c10"],["/images/magnet4.png","9bb4f963ac1c09f02d62525f513f492c"],["/images/meilu/1.jpg","cd67abcc3f543b5c66adc4f9d9c5c628"],["/images/meilu/10.jpg","ac9fb2711e477b5db1c3acb57e899045"],["/images/meilu/11.jpg","364caad6dfc356a3dc630fa067e48e88"],["/images/meilu/12.jpg","274767e5708f79934e5bdbf73eda8f0d"],["/images/meilu/13.jpg","dcab12b84454770b208913db63e825ac"],["/images/meilu/14.jpg","037cdd048284e621f27e17a2c59e8ea7"],["/images/meilu/2.jpg","f6cdb65ae3fad4523b32f5ee38696b60"],["/images/meilu/3.jpg","9e5df3612c2d93bf57313186c954aea5"],["/images/meilu/4.jpg","69ef2d6f4bcd79cf4b4e672b60c6751e"],["/images/meilu/5.jpg","ce81ca16def7613b7ebb368fb554f14f"],["/images/meilu/6.jpg","cafd5b62305f806754a75cc3af8c3b77"],["/images/meilu/7.jpg","b8ae865d386e1e713a6034da6b090c10"],["/images/meilu/8.jpg","afad7a7bf1066c817a8d2e7566bc780d"],["/images/meilu/9.jpg","72f9649f56b564eacf23ce3dacb88029"],["/images/metroui.jpg","5503bfffd450d9ab572b67ea00941571"],["/images/metroui/1.png","79a03b408c19c74eeaa8ff6e17a03f9d"],["/images/metroui/10.png","8309fed71a15c78f2dfa3af1ff75a5f3"],["/images/metroui/11.png","aaf1a007cbae12f93cc2688bace18d28"],["/images/metroui/12.png","0758ea282c3828c47e5c64520ff85783"],["/images/metroui/13.png","12ca7b511927cd4b26e97f3b20908a32"],["/images/metroui/14.png","f44ba7680f7b36df437e2ae2588d0565"],["/images/metroui/15.png","e8927c78b125b805af7aa86fee815ab6"],["/images/metroui/2.png","e604d3c662b996f06f22753ba9ab379f"],["/images/metroui/3.png","664e3b7490f2f95d5547b8ba79a65456"],["/images/metroui/4.png","c0f255344cafc303a1d9c7404da37149"],["/images/metroui/5.png","da2074cdb1298aca826abc1a5c441300"],["/images/metroui/6.png","efef2f087127614b4e03bcbe9a347018"],["/images/metroui/7.png","a4d34b1a2dbe3a58d3a92276880be039"],["/images/metroui/8.png","1d34a626bbaa898a60d4501936bcf962"],["/images/metroui/9.png","0663697c1667b377fe2623bd65e00b31"],["/images/metrouilogo.png","aea81b42d1c2c96440f74cf56ad82e2f"],["/images/nhkimage/2020.08.01.png","af4c55b2ae1d5ab2f56c75a87fcdfdb3"],["/images/nhkimage/2020.08.02.png","c355d41b90f5c65823f96c5f6868ce53"],["/images/nhkimage/2020.08.03.png","fddcedb40d7f28b2ccb90814351ad5c8"],["/images/nhkimage/2020.08.04.png","8b4518ec5a8513f442980ed7167136b1"],["/images/nhkimage/2020.08.05.png","590abfb19334b0c3cee5a005674f2253"],["/images/nhkimage/2020.08.06.png","d469e21100c42435e88f2bdf07f93da1"],["/images/nhkimage/2020.08.07.png","3ca9e2c8b8a09a38423d73cd36e8de9d"],["/images/nhkimage/2020.08.08.png","4420c2d899fe4eb90c48bae0da8418a2"],["/images/nhkimage/2020.08.09.png","df14be338f9c920818dd1daa6aa955ee"],["/images/nhkimage/2020.08.10.png","c4e2ed023cd3dbfd4986add35ca9357c"],["/images/nhkimage/2020.08.11.png","cf562339e57f673d394f3e6cdd1f60cb"],["/images/nhkimage/2020.08.12.png","81dfa179fea3052ddcf73912ea368f67"],["/images/nhkimage/2020.08.13.png","8cf26c2642e7a27cbd86fcbda8bae8d9"],["/images/nhkimage/2020.08.14.png","d88eeb678b3ed3651d597e61957e264a"],["/images/nhkimage/2020.08.15.png","b9879f193867edcffeefce62c9dc7153"],["/images/nhkimage/2020.08.16.png","46cb914aa1d556561897767ec9ff66a0"],["/images/nhkimage/2020.08.17.png","ea1af9645b5cc9cbaafe70a91dd15cca"],["/images/nhkimage/2020.08.18.png","e87e4de39a6f06cf4283a63af92dd8de"],["/images/nhkimage/2020.08.19.png","8001a951513b542a98ce1151be5bd87b"],["/images/nhkimage/2020.08.20.png","4bc8fafa3ecce30d340b1350715d78e3"],["/images/nhkimage/2020.08.21.png","07ad1337e127922abff27da6c672549b"],["/images/nhkimage/2020.08.22.png","b2b5d53ba46015f64048f9d803b12179"],["/images/nhkimage/2020.08.23.png","225af8c0cabe5218ec634d1b8815fd95"],["/images/nhkimage/2020.08.24.png","1d54a484a6e2395aabe9be005cd90361"],["/images/nhkimage/2020.08.25.png","8008ba169cfce0ef2041329cd29b6b77"],["/images/nhkimage/2020.08.26.png","72a2b8094003a54c97a34ea97cf21bc3"],["/images/nhkimage/2020.08.27.png","893407e604804d215c8fef8bcd5f2684"],["/images/nhkimage/2020.08.28.png","b542280b7341759890a99cbd44d822c5"],["/images/nhkimage/2020.08.29.png","620e2e7d4772e39615fd1a88cdf49717"],["/images/nhkimage/2020.08.30.png","f645d7ba2dcb506f9ec6fb9244425ad7"],["/images/nhkimage/2020.09.03.png","c5262f3aa87190e0273383ea1e445681"],["/images/nhkimage/2020.09.04.png","c07149c32aa41c03bc7dac82a713f6b2"],["/images/nhkimage/2020.09.05.png","4e43556e1cb3b7f4d75f0f6127616a54"],["/images/nhkimage/2020.09.06.png","1021d2ae04a7f109404f857a2a7629cf"],["/images/nhkimage/2020.09.07.png","db9827e9f0a4cf1401b559b4644a0204"],["/images/nhkimage/2020.09.08.png","efe1030b73dc1c01f169c3122a194426"],["/images/nhkimage/2020.09.09.png","f6ba3a1c6cdeff88404ebe2a646f2eb5"],["/images/nhkimage/2020.09.10.png","3471b05d02113517359a9e2167befcfa"],["/images/nhkimage/2020.09.11.png","921a541a8bffb1aa436df2eb6db7c99f"],["/images/nhkimage/2020.09.12.png","a51f8ebaddba69bb80f9259a30f17e65"],["/images/nhkimage/2020.09.13.png","0399889200493cd2154ffc407e2bc400"],["/images/nhkimage/2020.09.14.png","eaaf3da69a39ed316b7fc8c4d409bb0f"],["/images/nhkimage/2020.09.15.png","5774959ea4061c9298ea174f0862cc3a"],["/images/nhkimage/2020.09.16.png","0c5a00f74020740fda589c02e4b3f917"],["/images/nhkimage/2020.09.17.png","b5aef734e3a7db4862ca3fe4e6769dc2"],["/images/nhkimage/2020.09.24.png","5982a7b3843f4ae43b2b4bc4b0c577d6"],["/images/nhkimage/2020.09.26.jpg","c6415af781fbdd36fdb034f74646129b"],["/images/nhkimage/2020.09.27.png","27aa6f6a8d5534ccd99cff261dcd9eb6"],["/images/nhkimage/2020.09.28.png","0f4318d1ff17a33de364432a1c44b5ad"],["/images/nhkimage/2020.10.09.png","6408d9f7e66fdeba8b9207939a08cf8d"],["/images/notop.png","d25c272e5ce312a880e04ce8a0b27683"],["/images/pasted-0.png","552608d8f6e39369aa30c6e332a32826"],["/images/pasted-1.png","baafdacee93c99e99418aaedbf524fda"],["/images/pasted-10.jpg","395cff6f64ab5df19baa3572ac98e541"],["/images/pasted-11.jpg","56e5df07c96634638abf7995b25c81ab"],["/images/pasted-12.jpg","61b3f803b85ce3640d7a9ba7efb9da6b"],["/images/pasted-2.png","2f410e53c811f92a6135f48857776f5e"],["/images/pasted-3.jpg","bb5717e691e87355e7d63a5f3a87ae62"],["/images/pasted-4.jpg","10041d0e3567b24b81222ec5075d6492"],["/images/pasted-5.jpg","ac5047a4b48c6cdaee86fa1863e33904"],["/images/pasted-6.jpg","1556ae8d3ad5713d60237ee4d10e81f0"],["/images/pasted-7.jpg","913fde1686587646ddc663bd810cc81d"],["/images/pasted-8.jpg","fc83268081fb4b6b6ecb1ffa1ec5af7f"],["/images/pasted-9.jpg","25e0fa3496591501f5c29d0b802b77d2"],["/images/pet.png","2b8c121909497e57057478856fe48a94"],["/images/pet2.png","dfb1d6a17b527ccc0c600e6ad31f55e5"],["/images/ps1.png","0917ba91f21b6944dc08d35c41a326d2"],["/images/psb.jpg","6a27c58337875c776af0a7667598b401"],["/images/quse.png","7cd1ec12b804305430cb4cdc09c7a893"],["/images/rain.jpg","9c26acc44c692b6a63e134be07b07c18"],["/images/shezhi.png","281bf545f6a4024e2d0b7120bc398a21"],["/images/soul.jpg","d97b4099c0728ff6123d006fa62db86e"],["/images/study.jpg","a9b1cf95ee6bd9f3913e8ec6a6a6f44f"],["/images/tianqizhizi.jpg","dd48d78b4eeaaa52578352f9ef570b14"],["/images/vue.png","cf23526f451784ff137f161b8fe18d5a"],["/images/vue1.jpg","8cbf18302c6fa72e2a40d0cca0832213"],["/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/images/work.png","e521cf5b834292fde1c50e0a0f5802f9"],["/images/xiaoguoyanshi.png","994a3b710d36df0a4630cd9a768c7f7b"],["/images/xiaoguozhanshi-m.png","1fefca18214fc4889d1bb76b81887c9d"],["/images/yao1.jpg","9dfddaf8c121fc8db788a87d133d6376"],["/images/zfe.one.png","b41f689341882058ffb28c4cee499bde"],["/images/幻想终结之日.png","0025c4d3973bdfedb80db3f78c59fa47"],["/images/时空战纪——游戏建议及意见①.jpg","1337457f14a8dffee66d94f8915b54ff"],["/images/简历.png","d70507ee4615c9e324578c0d777e6855"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/favicon2.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","be0c1eef35c1a01d23d3f5766396a105"],["/js/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/APlayer.min.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/airvisual.js","71cf86bfd452ca01d92438d8266416ee"],["/js/airvisualapi.js","6931bebe1696688d109963187fc2eace"],["/js/artitalkkey.js","e735b361754e1b51300ddca9fd56b4ca"],["/js/background.js","94c8410b174f58594cf81ec99054968b"],["/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/js/calendar.js","a58e02711cc6dec4dc04257e555b8923"],["/js/catalogMagnet.js","2a4c65f71f95e19bd7e0deb9daa69a8c"],["/js/clock - 副本.js","405186e7a9d73221d2d50c0dea2852d0"],["/js/clock.js","2fdceb94cc57b551cd245b0001927b66"],["/js/color.js","3730bb4f7b185e6f5130ac28bace968b"],["/js/dan.js","6b6ae6b7f1b42dd4857541f43b2bb733"],["/js/echarts.js","dc1227b1eba1ba47fd185a387d0a7d37"],["/js/gitcalendar.js","fadfa8a42272cd322118653dca512a7a"],["/js/history.js","20459f7db325e597e64903f4c0d19306"],["/js/historyroll.js","a3e9ac376106816c50a61f9f4306d671"],["/js/jam.js","462c07d3b2e0f20394d994bbcfae37cb"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","455fface5a0a3ff90766ca254affe502"],["/js/rain.js","f656dc28e4ab5c3f8414d35f683278c1"],["/js/rainremove.js","ceacf82842b101f7e54a2aaf5f4bb9cb"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","52d5277e9dddb5d80484d07595df8dbd"],["/js/shuo.js","4af57c9530c88b87612d9de51510be6d"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/link/index.html","ff78589abc8a3f88ffa18a9b080e48fa"],["/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","b0d8be677d9974132e52bab394958dbc"],["/page/10/index.html","980dddb4cc9e86436e2f1afeafaf293d"],["/page/11/index.html","638ddf6fcf933902254777970b6283b4"],["/page/12/index.html","9d472b9a65578c1b2df20a2bef95b74e"],["/page/2/index.html","6f8904acc1ecca9925658e55b39d9237"],["/page/3/index.html","39fc730a5fe423f64912cc42bce2344e"],["/page/4/index.html","725282d5225b08799074c8c424b5a5e4"],["/page/5/index.html","2839e53a8df237e6a954f284f645899c"],["/page/6/index.html","cd6bcb1fdd961cf4c0861e166792d23e"],["/page/7/index.html","5eb1472a7c3fe5589499d02cedb2ec23"],["/page/8/index.html","3420593db34480d7c75c351213c600d7"],["/page/9/index.html","346e492b5b490f0285b6a637908b3acd"],["/research/index.html","8bcc2043266f30ad9396a4119b52da51"],["/sw-register.js","84ab831d1b804e08fe683f0c33d7206a"],["/tags/Butterfly主题/index.html","dfb29cd8eb7b492751edbe6dd98e06c6"],["/tags/DIY/index.html","dde3bee52e5c8ba26ad75ce8cc4c2a30"],["/tags/DIY/page/2/index.html","2e2333b841d1366d64af3dac2d39553d"],["/tags/ICT/index.html","b3c76dc22c500229f1224a1731d06af0"],["/tags/NHK听力练习/index.html","f8eb406eea22554c267031dbe18cae4d"],["/tags/NHK听力练习/page/2/index.html","c97231832b7e27a824b44523cc6aaf8f"],["/tags/NHK听力练习/page/3/index.html","d8f359e65cb1609954d0a3e2038b118a"],["/tags/NHK听力练习/page/4/index.html","b524198eaa319dd4c44fb9fbb017f08b"],["/tags/NHK听力练习/page/5/index.html","c4a028a559d0156977e4ef302211c38d"],["/tags/NHK听力练习/page/6/index.html","3713821b01e236dc0330e523d337ed58"],["/tags/metro-ui/index.html","8c6cbec0d826fbd66bff92b34a520441"],["/tags/vuejs/index.html","a512f19a9a82ffa2c04b49188924b9fe"],["/tags/お盆/index.html","8577b0165a13c0b47249b0928d4ecdec"],["/tags/世論調査/index.html","893f50df68177bafef234e811f799590"],["/tags/作品集/index.html","026fb56bf155a7d97a3d249d45cd0590"],["/tags/作品集/page/2/index.html","a77d2909b63befd21f1d5ea770c23594"],["/tags/农业/index.html","dafe11cc201dc804ebddd7d61ca89fec"],["/tags/历史/index.html","a021d16c2fc6705f23f568744d0ce073"],["/tags/営業時間/index.html","1646400168c31684dc48f72ca25f5e68"],["/tags/国外政事/index.html","4dfd28aae10121f0f0ea20c56a912cd1"],["/tags/地震/index.html","76082515e57866e8c43a41a2e3387f17"],["/tags/外国政事/index.html","d02ae1c4863692f8b8d5f87b87564fb3"],["/tags/天气/index.html","6682fc41162bfa68a87185fc43fa95ef"],["/tags/天气/page/2/index.html","7633df4b441af42afe4cbd5cc3cd4cf3"],["/tags/奥运会/index.html","fd9ee02c8184cf352b768a155e92ccf1"],["/tags/学习/index.html","0b40cdaa0891260b834ae0083c2cd51a"],["/tags/学习/page/2/index.html","22dba09913112a0f4c7488aedc497e8d"],["/tags/学习/page/3/index.html","61a4ed501acfd0687cdcd2e12ca4eb5e"],["/tags/就业/index.html","f9745b1926e5e7fab8b42075b1a811f9"],["/tags/庐山/index.html","3351e4e1427fbc7afc5042b370b182a5"],["/tags/座礁/index.html","38541ee1ecae1c7d702b07b174d09e7d"],["/tags/政府/index.html","5c86507f07726ae0b4c2e6fab47885fc"],["/tags/政治/index.html","8e862f9f394d4b079ce20f5f26cf4144"],["/tags/教程/index.html","21b788cec211407f32d2c62a9dfe3878"],["/tags/教程/page/2/index.html","4a7ce7e9e44093f6f2fbe227771331ff"],["/tags/日本教育/index.html","42455011d2d315924dcb3b5c3cd6c4a1"],["/tags/民生/index.html","5aa1b43a002647097e9d428f214bcedc"],["/tags/民生/page/2/index.html","a48ae35fa4619a11011e603875729ad3"],["/tags/游戏评测/index.html","501fbea26215c11c7061ef1ab190602d"],["/tags/游记/index.html","d5f6eb7c5ef5613d1e5c2667578e20d9"],["/tags/生活趣闻/index.html","c92641931e224ab1c99294d58a06a540"],["/tags/科技/index.html","5b9b75531b0ae47b53256e9faf8f7802"],["/tags/经济/index.html","ed2638c7c186527440be6acb686f7c71"],["/tags/经济/page/2/index.html","3926afdb196fa25479b51296963f1c76"],["/tags/网络教学/index.html","a6e5b6c3bc281611d06a9fc7a4457401"],["/tags/舆论/index.html","a0c592be8fb38550350a062a7a771031"],["/tags/虚拟现实/index.html","f7259cd3d020ac73629aaa21c0d0631a"],["/tags/随想/index.html","688a837b85ecc2fc7bc0ac5d39f11e95"],["/tags/障害者/index.html","6d1bff3c3d205e29a31225ce28b60025"]];
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
