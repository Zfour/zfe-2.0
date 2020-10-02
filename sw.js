/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/05/20/2015-05-20/index.html","ca7d0c665f5c365c0be14aa2f40dc0d5"],["/2015/06/16/2015-06-16/index.html","edf39d815287406ae804c54004d7fc3e"],["/2015/12/12/2015-12-12/index.html","5825e0612c193e9e73724cb28adfc9c8"],["/2016/06/08/2016-06-08/index.html","07034c66949d6736e30d1cd6ddfa94ec"],["/2016/12/18/2016-12-18/index.html","8582c4f512aa7d8fa24d2b011133040a"],["/2017/02/17/2017-02-17/index.html","f891499d448f2acb78dca9129b77483c"],["/2017/03/17/2017-03-17/index.html","bf4f90a6fe9deb49f1aff13b06b1585d"],["/2017/04/06/2017-04-06/index.html","998676ec13668e17bb8613950385039c"],["/2017/05/17/2017-05-17/index.html","3c3a633605687c90649a66a84917d95b"],["/2017/08/15/2017-08-15/index.html","d05d03724da61581e45687a86f0f8c0d"],["/2017/09/16/2017-09-16-1/index.html","69454d2edf32bf9153d22efd0496422c"],["/2017/09/16/2017-09-16/index.html","607fa10a6f98ed9d100b12deb2d2de59"],["/2017/09/21/2017-09-21/index.html","16a4e0739d8124455b73b2cd659b4309"],["/2017/09/23/2017-09-23/index.html","4a75ed662852ca3a5da25be486a3bd2f"],["/2017/09/26/2017-09-26/index.html","2ec3d9de14b2487fd04cd6c2b4f15c29"],["/2017/09/27/2017-09-27/index.html","ae3e18d817f3f25326b3426444f151da"],["/2017/10/04/2017-10-04/index.html","c13608ae1e28a4c232e5cdc0cee7388d"],["/2017/10/08/2017-10-08/index.html","81e7243cf1712a33b246889d7924afba"],["/2017/10/09/2017-10-09/index.html","7ddf12ebe2e7605df96305a84931e615"],["/2017/10/15/2017-10-15/index.html","94271e4604d46bff09a4bfcc4696c1eb"],["/2017/10/19/2017-10-19/index.html","165dd7b5e91b26410ab6959fbc6c66ee"],["/2017/10/23/2017-10-23-2/index.html","e162374af364a23ba20c40ad55b764c7"],["/2017/10/23/2017-10-23/index.html","42a930d1927a902704982b84c06e0c59"],["/2017/11/08/2017-11-08/index.html","661dd6f6fe2af6a3b1c08bb13e54ed41"],["/2017/11/12/2017-11-12/index.html","f814ccc25a4a21ab0f6214347b950e2d"],["/2017/11/15/2017-11-15/index.html","5c15fbcdc406f0c594165f78be9f9151"],["/2017/11/27/2017-11-27/index.html","776ef641246336d7e8b8747c1b4587c5"],["/2017/12/06/2017-12-06/index.html","3fb8f06789e81b729d8ab026f9af44c9"],["/2018/02/12/2018-02-12/index.html","c45ff6b28c9652cf409f40fd6f6d9cdb"],["/2018/03/26/2018-03-26/index.html","a030d63a49db820846894aa95b40df50"],["/2018/04/02/2018-04-02/index.html","b7e8acb6231791b4478604685b39f8ce"],["/2018/04/24/2018-04-24/index.html","633e772b220887de57dafaee89164f91"],["/2018/05/18/2018-05-18/index.html","0d2ad65332f0ddf6ea41c765689b0017"],["/2018/05/23/2018-05-23/index.html","44936d8d3ec02af402eb52da61419a44"],["/2018/06/08/2018-06-08/index.html","fdeae3fdc47c55a1a20f79ea2daaecd6"],["/2018/07/01/2018-07-01/index.html","13ceb7eb89ec1529bf4fb3b260e8b0ad"],["/2018/08/30/2018-08-30/index.html","377b0f98cb499ae975beb3a37a50b635"],["/2020/07/20/2020-07-20/index.html","1280ff7509d5ec85a0c4a47ab22630f3"],["/2020/08/01/2020-08-01/index.html","26c937c2f557a9500592a1d1ef2e73ec"],["/2020/08/02/2020-08-02/index.html","d2a67badc74ee79550303ebd42c92594"],["/2020/08/03/2020-08-03/index.html","676f9c2abd844dcfc9d858f971bf4574"],["/2020/08/04/2020-08-04-1/index.html","d23ca5274c51a6f1eb012290e4b18a86"],["/2020/08/04/2020-08-04-2/index.html","d2dd860850ee31815ce1b614b13d4444"],["/2020/08/05/2020-08-05/index.html","5efde3a553da608508c8a0afaee12dc9"],["/2020/08/06/2020-08-06/index.html","b771612bce4c89291b27d65c6c4fc336"],["/2020/08/07/2020-08-07/index.html","40eb7c7c0b946e4f12d713f5bb97c451"],["/2020/08/08/2020-08-08/index.html","8f86e32f13e4d06742094bf023749402"],["/2020/08/09/2020-08-09/index.html","87d45a8d50c692d08b76bb93fb586e3d"],["/2020/08/10/2020-08-10/index.html","8995968cb5c69ae8e66732ab301982f7"],["/2020/08/11/2020-08-11/index.html","7534faf243970c82d647ebc76ca576e7"],["/2020/08/12/2020-08-12/index.html","fe94d4ee760fd83e3782f1add92ef9d6"],["/2020/08/13/2020-08-13/index.html","6b4cbe0b1e57c726be2e74d30d266ae6"],["/2020/08/14/2020-08-14-1/index.html","cb3907838a1227244bb3a220b909e55d"],["/2020/08/14/2020-08-14-2/index.html","f604bc2e60ff397d10c7b70a712c2955"],["/2020/08/15/2020-08-15/index.html","7a0d2c641dfb656fd8a76de4ecbbae2f"],["/2020/08/16/2020-08-16-1/index.html","4f8f5befd15281b294c57d7d34b237f1"],["/2020/08/16/2020-08-16-2/index.html","28a21a083287122a39401f970b55c7ae"],["/2020/08/17/2020-08-17/index.html","6efeb9f5356841b40a8fc340a68c7a01"],["/2020/08/18/2020-08-18/index.html","5b088bd7f3eb0ac630f828fc4cef2e81"],["/2020/08/19/2020-08-19-1/index.html","f1ffc4075bb36b720b65be3a3081fb99"],["/2020/08/19/2020-08-19-2/index.html","77dec7ef09105fc74363859e3c6055f8"],["/2020/08/20/2020-08-20/index.html","b51fe990ecac5110666660bf48f3c976"],["/2020/08/21/2020-08-21/index.html","f15f3aff02b5349897487b1381d92652"],["/2020/08/22/2020-08-22/index.html","df07be6a6c9d3813e0d5f797004a7623"],["/2020/08/23/2020-08-23-1/index.html","4ac7e818fd86b581fafedf9bbb9e4fe7"],["/2020/08/23/2020-08-23-2/index.html","44fecf74c1074bbe2c8f576ed656bb59"],["/2020/08/24/2020-08-24-1/index.html","a875448280aaa0208ba810ecfd238633"],["/2020/08/24/2020-08-24-2/index.html","82348e76032f01b07f532abc5e806006"],["/2020/08/25/2020-08-25-1/index.html","fc1827ff82cb3eb1c00c8d981a32818e"],["/2020/08/25/2020-08-25-2/index.html","4616ade9e4e42945f98eb4ee51244916"],["/2020/08/26/2020-08-26/index.html","38aeebb00bb7876df94cd1bd64bab10c"],["/2020/08/27/2020-08-27/index.html","26b349f734cf29ae8d7d498f325babcb"],["/2020/08/28/2020-08-28/index.html","43332e5f325971d92db9f2ec3080cf54"],["/2020/08/29/2020-08-29/index.html","acff0311432051a0e7bc25e6be089e44"],["/2020/08/30/2020-08-30/index.html","ed05a8e5864816bfefb4dd4722d0a5bd"],["/2020/08/31/2020-08-31-1/index.html","71e90906310689b1d2d7cdd052f18520"],["/2020/08/31/2020-08-31-2/index.html","b39e0e5998cad6af3c1923b6be820108"],["/2020/09/01/2020-09-01-1/index.html","3d6320cb2411d5e7a67f3d306bdbd404"],["/2020/09/01/2020-09-01-2/index.html","958483ac26ef5acfb503d538aa767377"],["/2020/09/02/2020-09-02-1/index.html","ad8eec63adbce7e3c5bc963c668bb7f1"],["/2020/09/02/2020-09-02-2/index.html","5ddd8ed035a422690cdb806e9b0bccf8"],["/2020/09/03/2020-09-03-1/index.html","51ceba572ff4d84551c8479c0fc3a706"],["/2020/09/03/2020-09-03-2/index.html","399d156f922363f05eff3a6d2db0d06a"],["/2020/09/04/2020-09-04-1/index.html","b6347646edbdc2769a78ede683965a67"],["/2020/09/05/2020-09-05-1/index.html","94e660ca10f7b67154226881a7ce8b45"],["/2020/09/06/2020-09-06-1/index.html","a2f62bf6155127e2b39eb8c8579c492e"],["/2020/09/07/2020-09-07/index.html","b01a206f4c0dce87f58093573173c09e"],["/2020/09/08/2020-09-08-1/index.html","3fffa91075130036736807bc860c8f74"],["/2020/09/08/2020-09-08-2/index.html","7be171997d666e0ea751a66c3ca15829"],["/2020/09/09/2020-09-09/index.html","d81a4ae604596d20064b4e0cb4a33960"],["/2020/09/10/2020-09-10/index.html","d6f48a8cbad074036f02c16c2ba72a32"],["/2020/09/11/2020-09-11/index.html","b87c749423a6f2dce0c864f403da4908"],["/2020/09/12/2020-09-12/index.html","a187b2132b49059bdc99b916c2403b8b"],["/2020/09/13/2020-09-13/index.html","aec33f0163f30d37a1adcc1bbee8df46"],["/2020/09/14/2020-09-14/index.html","3c23ea8360ff15fa97c2a9ac906cb6fe"],["/2020/09/15/2020-09-15/index.html","f3f58648cd74d7b1c9f777f25c76147b"],["/2020/09/16/2020-09-16/index.html","9e0bbf601c613c38e915787dced19c0e"],["/2020/09/17/2020-09-17/index.html","61bb89cbee642dd5abe367b1e3c94143"],["/2020/09/19/2020-09-19/index.html","c1b22a37dd8a2b65fbf0bd492722c57b"],["/2020/09/23/2020-09-23/index.html","1f4b0bd975dc663ac0864501feafa532"],["/2020/09/24/2020-09-24/index.html","8bdb2138f99c4865016c77f1bd6ef358"],["/2020/09/26/2020-09-26/index.html","4dd7b22971590a690639e5cd123e9601"],["/2020/09/27/2020-09-27/index.html","1e5df736604957788df46fbcc5913f5d"],["/2020/09/28/2020-09-28-2/index.html","fa4dad92255247d939a6e038c8ee195e"],["/2020/09/28/2020-09-28/index.html","0467d99672d0189ab69852f8ce1c200a"],["/2020/09/29/2020-09-29/index.html","96eb2896177130706cfe8262c5706c8c"],["/2020/10/03/2020-10-03/index.html","579e72f106e6938945b899fcded6a15f"],["/airplayervisual/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/airplayervisual/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/airplayervisual/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/airplayervisual/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/airplayervisual/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/airplayervisual/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/airplayervisual/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/airplayervisual/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/airplayervisual/index.html","784fd559bc110f06cc2cff453749f871"],["/airplayervisual/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/airplayervisual/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/airplayervisual/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/airplayervisual/js/jamsetting.js","7927507e0080ddf55c6d8b5f526bd942"],["/airplayervisual/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/airplayervisual/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/airplayervisual/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/archives/2015/05/index.html","1d0ad751dbfa2961a2baafe69f10d1b4"],["/archives/2015/06/index.html","dc74b24b9b794cb317b638f02d70deb4"],["/archives/2015/12/index.html","02ae1675f74c8420ad9de3f200dc944e"],["/archives/2015/index.html","0ed10550c57d04c4480a6935d44bf73d"],["/archives/2016/06/index.html","cbd85766ceb257486fbe9789954b85c7"],["/archives/2016/12/index.html","2f743d5f70f3e983dbab4db337971d4c"],["/archives/2016/index.html","2a24380fff4c0e0383976964c41b3f7d"],["/archives/2017/02/index.html","1ad415d0b419fd63d4c824afad3da16b"],["/archives/2017/03/index.html","775d0482c418db23e815ea849a1ad135"],["/archives/2017/04/index.html","5c499303723b17ef32190b56658e54c8"],["/archives/2017/05/index.html","2e3f82426fc1162b3703794234332327"],["/archives/2017/08/index.html","bf57f4f8df56375835e77bfb9b4d397a"],["/archives/2017/09/index.html","c8d78dc655f7d9445382f29cc634a248"],["/archives/2017/10/index.html","3f58e04fd256e17e43026ffade76b0b6"],["/archives/2017/11/index.html","0ecb9fc35877a0961711a20fbc944f7e"],["/archives/2017/12/index.html","f19516ef466cf06db82289dbe9b0b05f"],["/archives/2017/index.html","68975be0c5e342da2249b1c7742cb9af"],["/archives/2017/page/2/index.html","aea543f6c2dbf11b2400cc5b04b168fb"],["/archives/2017/page/3/index.html","8afea80399f06c34d1fd817d7529f455"],["/archives/2018/02/index.html","7dd6be4fd61e3f74e3c48742e6a838d6"],["/archives/2018/03/index.html","a250b4ccaec022815de31ef3c3d554a8"],["/archives/2018/04/index.html","c342a7de1ae56c3a3ea8012661b54aa9"],["/archives/2018/05/index.html","112ca093be0699da1e0ddd5838463520"],["/archives/2018/06/index.html","ca93a698673d13e386694da6c2dccd6f"],["/archives/2018/07/index.html","f559c1ecc87577fbab1a91aaa3d43936"],["/archives/2018/08/index.html","09c9bca61d801cd6ffbd44c039eeea40"],["/archives/2018/index.html","cbb8b1d8e2bb2af75671b0bc872aa22b"],["/archives/2020/07/index.html","d5038299a7064d934cbe91148d6756ce"],["/archives/2020/08/index.html","bbabcf789a2db8fa035de948bb0a9a5b"],["/archives/2020/08/page/2/index.html","dbe24934affc468a33d82ff82e7bfb21"],["/archives/2020/08/page/3/index.html","634885660cad9e5c98d21d06f28d2ca4"],["/archives/2020/08/page/4/index.html","445fdf8be191b28e108a6c42a28635cb"],["/archives/2020/09/index.html","4c6cc2daf6601114c761edf9f4789f28"],["/archives/2020/09/page/2/index.html","2aada7203fc065593039163a48f44bd5"],["/archives/2020/09/page/3/index.html","8b58b66a3c26fb4ec2d938314777913a"],["/archives/2020/10/index.html","db332bae318592c0aa90235ee7150ca7"],["/archives/2020/index.html","ec2c8048e73dd51cb468eca21b42aed4"],["/archives/2020/page/2/index.html","07c95b36fa1bc5d379745ebc1f9ade7c"],["/archives/2020/page/3/index.html","06681a2bce09630870b0f442a4545025"],["/archives/2020/page/4/index.html","33b7e6b2004293b28377d372ce187e1d"],["/archives/2020/page/5/index.html","94340656d7022bac690e6b7976bcf744"],["/archives/2020/page/6/index.html","951d609c75224e03b070311871820a07"],["/archives/2020/page/7/index.html","219a505b0a6925deb6bff577ebb9d62c"],["/archives/index.html","f85e1bae3711f5476bb7099522bc0709"],["/archives/page/10/index.html","1eebf5c64fd1b6d8872cff100bdb7db2"],["/archives/page/11/index.html","5fbbb6a3666c8d47b9100bb79102c058"],["/archives/page/2/index.html","4bc56078b9fe0e2fc0bb014a27f1e203"],["/archives/page/3/index.html","cd4cab904396e9238480ea4d8c69a8f0"],["/archives/page/4/index.html","5da1a87e0012a7be3f50e4a266ce5072"],["/archives/page/5/index.html","b570659909200d9fc9016a88f3cea276"],["/archives/page/6/index.html","00f59664e4e78797e301a01c8e3e5952"],["/archives/page/7/index.html","10a17a9de753ddd71e6df3512db8b251"],["/archives/page/8/index.html","5cb56ea203cedd2ade6f616b9b804799"],["/archives/page/9/index.html","87f4d7e5bad3f135397657900eb86bdf"],["/categories/NHK听力练习/index.html","d78632c549e6e8e018156121e7103995"],["/categories/NHK听力练习/page/2/index.html","687986c1df50b0ad553115e537ad7cc0"],["/categories/NHK听力练习/page/3/index.html","bddcdeaf02cc4f4763c9bcac5e5cd918"],["/categories/NHK听力练习/page/4/index.html","0e9fa9cca45ff735f7371ba75a54e051"],["/categories/NHK听力练习/page/5/index.html","ed3fbccf0327038a4bb65863d000d3e2"],["/categories/NHK听力练习/page/6/index.html","19265eaa2c1fffef81ae3cf978ba5cf4"],["/categories/作品集/index.html","ff9ac880c7d43ef797c2ea29dec7c8c2"],["/categories/作品集/page/2/index.html","2fd55432e19a5a5c34107ba077e013d5"],["/categories/学习/index.html","a08406eeb7d47fb4f36c938ea1b16d2a"],["/categories/学习/page/2/index.html","b998e13d5de03f2d8fecc9cbc6050103"],["/categories/学习/page/3/index.html","3731f35bad04ba418e8b066bf49e42f6"],["/categories/游戏评测/index.html","4a2061bfdf72d6703dc6778968f960d5"],["/categories/生活趣闻/index.html","5477f296b108bddfca95e1f3bf16210d"],["/categories/随想/index.html","32c31bf3562260d71cb2adb7abd3ed10"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/addcss.css","59cae1ddbe6925c34f846ffe12d19921"],["/css/background.css","32d5acccbb94f987faf37cfdc3fd06df"],["/css/calendar.css","0090a32d2a61d42c5bfed254bfba078c"],["/css/clock.css","65602c2385c7eab42ee3804cd6ee0a5a"],["/css/danmu.css","2a5b914a9592bcd353425c6d5fa7af8e"],["/css/index.css","36eb36d0f5531dd7a8f4c8f925188615"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/loadingline.css","bc1ee020a6a11fea17b915b97e6978bf"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/html/calendar.html","bddcec1edba7f4c49fe5cd75f8cdf5b2"],["/html/shiyan.html","e1472ad1c607e4cae87391c9565774de"],["/html/shiyan2.html","add79ce16bbad8715e8fd802b30f4442"],["/icon.png","8ec68de45d18642ba9baf2447e62f476"],["/images/AMJ1.png","d27a6725d1aaaf5324248da4312ab6c2"],["/images/AMJ2.png","00e22eba5901e5bd674e42228cd5bd26"],["/images/AMJ3.png","c8c9ea6348dfcad3a641899d5b587431"],["/images/FOTO1.jpg","4b6f100861908e2c7044cffbdb4a0c1a"],["/images/MVVM.png","ea5a002ee2f85c71a0db51d5adb5de19"],["/images/UT.jpg","367f4e432f9db55a92b2a290c4b0a476"],["/images/UX.png","a183974e958d41d1b6acec70bb7ea00a"],["/images/WindowsTerminal.png","8ac29cb56b8a1768cf7de071e9f1ae6f"],["/images/air-w.png","c1cc32f9d3e17551ca11a7d18a0b533a"],["/images/anzhuang.jpg","912b2489957f8344406edc5e5cebe5fa"],["/images/api-setting.png","2c0bb074390779721cba009e96c5417c"],["/images/apikey.png","1f31121b190eb1f990bcc3e27524bc03"],["/images/backpic1.jpg","86a6fa88167feb338fbf1a4e9057114b"],["/images/calendar.png","86319b08b93be7c8bc47cdba7a169563"],["/images/clock2.0.png","0a0f122c7a25262fc02ee99df0ef21eb"],["/images/example.png","aaac9983e5d59f919bf282dcff2edb3c"],["/images/foto17.png","28db4c6608ad1ee6b34238cafab25e5e"],["/images/foto2.jpg","be95b922512d004a61f83c97af3e2602"],["/images/foto2.png","0dc07d4e1b00526a273a89dc8b81548d"],["/images/foto3.jpg","551c0616c92c4ee7cc17dd458b3c46e9"],["/images/foto4.jpg","9d1d9fea759a41afc0061866e400339a"],["/images/foto5.jpg","984f618b15372f37d54f507e6f379f10"],["/images/foto9.jpg","b683fc0b998e80ff8f5a3e45e889807c"],["/images/girlpic.png","ff1e8427ed555af639e6d849f8f648f1"],["/images/girlpic1.png","698e5570e821c3cae643cc9777c2292e"],["/images/girlpic4.png","551882e4b9b6afb79000fd34c0dbf5e5"],["/images/headimage.png","332502f36a0297b30cb7969fe6de8451"],["/images/hexo.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/hexoWT.png","c027cc9f5665c7d7ba657e7a4bb40017"],["/images/his-json.png","7d8a71e38ab684107446e5c72c31854e"],["/images/history.gif","0459a3dcf2317253de0b34482880c63c"],["/images/idea.jpg","5eb08bf6c965588f03c8860f201cac45"],["/images/life.jpg","74d2d9c5f48ec59e3badeec690941812"],["/images/listen.jpg","9d4f73cd5634f43deaed4f9aca03f9a3"],["/images/magnet.png","4899a924f3de0d19dbe0415128c07d65"],["/images/magnet1.png","8d010eb86ca943e036adaa7de57aee7d"],["/images/magnet2.png","293cb414a8ab93b43bde3bebf9cf0cfc"],["/images/magnet3.png","1923148630e2e094ff80bf35aa604c10"],["/images/magnet4.png","9bb4f963ac1c09f02d62525f513f492c"],["/images/meilu/1.jpg","cd67abcc3f543b5c66adc4f9d9c5c628"],["/images/meilu/10.jpg","ac9fb2711e477b5db1c3acb57e899045"],["/images/meilu/11.jpg","364caad6dfc356a3dc630fa067e48e88"],["/images/meilu/12.jpg","274767e5708f79934e5bdbf73eda8f0d"],["/images/meilu/13.jpg","dcab12b84454770b208913db63e825ac"],["/images/meilu/14.jpg","037cdd048284e621f27e17a2c59e8ea7"],["/images/meilu/2.jpg","f6cdb65ae3fad4523b32f5ee38696b60"],["/images/meilu/3.jpg","9e5df3612c2d93bf57313186c954aea5"],["/images/meilu/4.jpg","69ef2d6f4bcd79cf4b4e672b60c6751e"],["/images/meilu/5.jpg","ce81ca16def7613b7ebb368fb554f14f"],["/images/meilu/6.jpg","cafd5b62305f806754a75cc3af8c3b77"],["/images/meilu/7.jpg","b8ae865d386e1e713a6034da6b090c10"],["/images/meilu/8.jpg","afad7a7bf1066c817a8d2e7566bc780d"],["/images/meilu/9.jpg","72f9649f56b564eacf23ce3dacb88029"],["/images/metroui.jpg","5503bfffd450d9ab572b67ea00941571"],["/images/metroui/1.png","79a03b408c19c74eeaa8ff6e17a03f9d"],["/images/metroui/10.png","8309fed71a15c78f2dfa3af1ff75a5f3"],["/images/metroui/11.png","aaf1a007cbae12f93cc2688bace18d28"],["/images/metroui/12.png","0758ea282c3828c47e5c64520ff85783"],["/images/metroui/13.png","12ca7b511927cd4b26e97f3b20908a32"],["/images/metroui/14.png","f44ba7680f7b36df437e2ae2588d0565"],["/images/metroui/15.png","e8927c78b125b805af7aa86fee815ab6"],["/images/metroui/2.png","e604d3c662b996f06f22753ba9ab379f"],["/images/metroui/3.png","664e3b7490f2f95d5547b8ba79a65456"],["/images/metroui/4.png","c0f255344cafc303a1d9c7404da37149"],["/images/metroui/5.png","da2074cdb1298aca826abc1a5c441300"],["/images/metroui/6.png","efef2f087127614b4e03bcbe9a347018"],["/images/metroui/7.png","a4d34b1a2dbe3a58d3a92276880be039"],["/images/metroui/8.png","1d34a626bbaa898a60d4501936bcf962"],["/images/metroui/9.png","0663697c1667b377fe2623bd65e00b31"],["/images/metrouilogo.png","aea81b42d1c2c96440f74cf56ad82e2f"],["/images/nhkimage/2020.08.01.png","af4c55b2ae1d5ab2f56c75a87fcdfdb3"],["/images/nhkimage/2020.08.02.png","c355d41b90f5c65823f96c5f6868ce53"],["/images/nhkimage/2020.08.03.png","fddcedb40d7f28b2ccb90814351ad5c8"],["/images/nhkimage/2020.08.04.png","8b4518ec5a8513f442980ed7167136b1"],["/images/nhkimage/2020.08.05.png","590abfb19334b0c3cee5a005674f2253"],["/images/nhkimage/2020.08.06.png","d469e21100c42435e88f2bdf07f93da1"],["/images/nhkimage/2020.08.07.png","3ca9e2c8b8a09a38423d73cd36e8de9d"],["/images/nhkimage/2020.08.08.png","4420c2d899fe4eb90c48bae0da8418a2"],["/images/nhkimage/2020.08.09.png","df14be338f9c920818dd1daa6aa955ee"],["/images/nhkimage/2020.08.10.png","c4e2ed023cd3dbfd4986add35ca9357c"],["/images/nhkimage/2020.08.11.png","cf562339e57f673d394f3e6cdd1f60cb"],["/images/nhkimage/2020.08.12.png","81dfa179fea3052ddcf73912ea368f67"],["/images/nhkimage/2020.08.13.png","8cf26c2642e7a27cbd86fcbda8bae8d9"],["/images/nhkimage/2020.08.14.png","d88eeb678b3ed3651d597e61957e264a"],["/images/nhkimage/2020.08.15.png","b9879f193867edcffeefce62c9dc7153"],["/images/nhkimage/2020.08.16.png","46cb914aa1d556561897767ec9ff66a0"],["/images/nhkimage/2020.08.17.png","ea1af9645b5cc9cbaafe70a91dd15cca"],["/images/nhkimage/2020.08.18.png","e87e4de39a6f06cf4283a63af92dd8de"],["/images/nhkimage/2020.08.19.png","8001a951513b542a98ce1151be5bd87b"],["/images/nhkimage/2020.08.20.png","4bc8fafa3ecce30d340b1350715d78e3"],["/images/nhkimage/2020.08.21.png","07ad1337e127922abff27da6c672549b"],["/images/nhkimage/2020.08.22.png","b2b5d53ba46015f64048f9d803b12179"],["/images/nhkimage/2020.08.23.png","225af8c0cabe5218ec634d1b8815fd95"],["/images/nhkimage/2020.08.24.png","1d54a484a6e2395aabe9be005cd90361"],["/images/nhkimage/2020.08.25.png","8008ba169cfce0ef2041329cd29b6b77"],["/images/nhkimage/2020.08.26.png","72a2b8094003a54c97a34ea97cf21bc3"],["/images/nhkimage/2020.08.27.png","893407e604804d215c8fef8bcd5f2684"],["/images/nhkimage/2020.08.28.png","b542280b7341759890a99cbd44d822c5"],["/images/nhkimage/2020.08.29.png","620e2e7d4772e39615fd1a88cdf49717"],["/images/nhkimage/2020.08.30.png","f645d7ba2dcb506f9ec6fb9244425ad7"],["/images/nhkimage/2020.09.03.png","c5262f3aa87190e0273383ea1e445681"],["/images/nhkimage/2020.09.04.png","c07149c32aa41c03bc7dac82a713f6b2"],["/images/nhkimage/2020.09.05.png","4e43556e1cb3b7f4d75f0f6127616a54"],["/images/nhkimage/2020.09.06.png","1021d2ae04a7f109404f857a2a7629cf"],["/images/nhkimage/2020.09.07.png","db9827e9f0a4cf1401b559b4644a0204"],["/images/nhkimage/2020.09.08.png","efe1030b73dc1c01f169c3122a194426"],["/images/nhkimage/2020.09.09.png","f6ba3a1c6cdeff88404ebe2a646f2eb5"],["/images/nhkimage/2020.09.10.png","3471b05d02113517359a9e2167befcfa"],["/images/nhkimage/2020.09.11.png","921a541a8bffb1aa436df2eb6db7c99f"],["/images/nhkimage/2020.09.12.png","a51f8ebaddba69bb80f9259a30f17e65"],["/images/nhkimage/2020.09.13.png","0399889200493cd2154ffc407e2bc400"],["/images/nhkimage/2020.09.14.png","eaaf3da69a39ed316b7fc8c4d409bb0f"],["/images/nhkimage/2020.09.15.png","5774959ea4061c9298ea174f0862cc3a"],["/images/nhkimage/2020.09.16.png","0c5a00f74020740fda589c02e4b3f917"],["/images/nhkimage/2020.09.17.png","b5aef734e3a7db4862ca3fe4e6769dc2"],["/images/nhkimage/2020.09.24.png","5982a7b3843f4ae43b2b4bc4b0c577d6"],["/images/nhkimage/2020.09.26.jpg","c6415af781fbdd36fdb034f74646129b"],["/images/nhkimage/2020.09.27.png","27aa6f6a8d5534ccd99cff261dcd9eb6"],["/images/nhkimage/2020.09.28.png","0f4318d1ff17a33de364432a1c44b5ad"],["/images/notop.png","d25c272e5ce312a880e04ce8a0b27683"],["/images/pasted-0.png","552608d8f6e39369aa30c6e332a32826"],["/images/pasted-1.png","baafdacee93c99e99418aaedbf524fda"],["/images/pasted-10.jpg","395cff6f64ab5df19baa3572ac98e541"],["/images/pasted-11.jpg","56e5df07c96634638abf7995b25c81ab"],["/images/pasted-12.jpg","61b3f803b85ce3640d7a9ba7efb9da6b"],["/images/pasted-2.png","2f410e53c811f92a6135f48857776f5e"],["/images/pasted-3.jpg","bb5717e691e87355e7d63a5f3a87ae62"],["/images/pasted-4.jpg","10041d0e3567b24b81222ec5075d6492"],["/images/pasted-5.jpg","ac5047a4b48c6cdaee86fa1863e33904"],["/images/pasted-6.jpg","1556ae8d3ad5713d60237ee4d10e81f0"],["/images/pasted-7.jpg","913fde1686587646ddc663bd810cc81d"],["/images/pasted-8.jpg","fc83268081fb4b6b6ecb1ffa1ec5af7f"],["/images/pasted-9.jpg","25e0fa3496591501f5c29d0b802b77d2"],["/images/pet.png","2b8c121909497e57057478856fe48a94"],["/images/pet2.png","dfb1d6a17b527ccc0c600e6ad31f55e5"],["/images/ps1.png","0917ba91f21b6944dc08d35c41a326d2"],["/images/psb.jpg","6a27c58337875c776af0a7667598b401"],["/images/quse.png","7cd1ec12b804305430cb4cdc09c7a893"],["/images/rain.jpg","9c26acc44c692b6a63e134be07b07c18"],["/images/shezhi.png","281bf545f6a4024e2d0b7120bc398a21"],["/images/soul.jpg","d97b4099c0728ff6123d006fa62db86e"],["/images/study.jpg","a9b1cf95ee6bd9f3913e8ec6a6a6f44f"],["/images/tianqizhizi.jpg","dd48d78b4eeaaa52578352f9ef570b14"],["/images/vue.png","cf23526f451784ff137f161b8fe18d5a"],["/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/images/work.png","e521cf5b834292fde1c50e0a0f5802f9"],["/images/xiaoguoyanshi.png","994a3b710d36df0a4630cd9a768c7f7b"],["/images/xiaoguozhanshi-m.png","1fefca18214fc4889d1bb76b81887c9d"],["/images/zfe.one.png","b41f689341882058ffb28c4cee499bde"],["/images/幻想终结之日.png","0025c4d3973bdfedb80db3f78c59fa47"],["/images/时空战纪——游戏建议及意见①.jpg","1337457f14a8dffee66d94f8915b54ff"],["/images/简历.png","d70507ee4615c9e324578c0d777e6855"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","b2816f18531e7470afc88d9f63c2b52c"],["/img/favicon2.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","bb10759abb121668f9901e5c150fb6cd"],["/js/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/APlayer.min.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/airvisual.js","71cf86bfd452ca01d92438d8266416ee"],["/js/airvisualapi.js","6931bebe1696688d109963187fc2eace"],["/js/background.js","94c8410b174f58594cf81ec99054968b"],["/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/js/calendar.js","a58e02711cc6dec4dc04257e555b8923"],["/js/clock.js","ead1a80f7219c166e1180674b7d8c70b"],["/js/color.js","3730bb4f7b185e6f5130ac28bace968b"],["/js/danmu.js","6b6ae6b7f1b42dd4857541f43b2bb733"],["/js/echarts.js","dc1227b1eba1ba47fd185a387d0a7d37"],["/js/gitcalendar.js","fadfa8a42272cd322118653dca512a7a"],["/js/history.js","20459f7db325e597e64903f4c0d19306"],["/js/historyroll.js","a3e9ac376106816c50a61f9f4306d671"],["/js/jam.js","462c07d3b2e0f20394d994bbcfae37cb"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","790cd2f28594f8affbd4a450037c48ff"],["/js/rain.js","f656dc28e4ab5c3f8414d35f683278c1"],["/js/rainremove.js","ceacf82842b101f7e54a2aaf5f4bb9cb"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/link/index.html","d2261203f4937baacd28cba3becc6aff"],["/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","3a039e490e8fccc3febb064e1d5bd1c7"],["/page/10/index.html","b6e1edd806132ec8c4ab0d27cdc05bb3"],["/page/11/index.html","3865885a7d915c366a6364dd196986f9"],["/page/2/index.html","0ea16ee88759093eab784f0e3e366943"],["/page/3/index.html","f11374910e2fcbab41d45ec686466729"],["/page/4/index.html","bbdbd47068fed970c1e0e1315e464e49"],["/page/5/index.html","a30becc48ab007bf5a69a903be2594e4"],["/page/6/index.html","76d6c23fc2d71081ce3687f410a237fe"],["/page/7/index.html","0cea0a898a16fcb4c6fda0cb5f1a4741"],["/page/8/index.html","422dd07cfd4293255dc14565bec27180"],["/page/9/index.html","5ed8e3d89b7a387363042483cc972bc8"],["/research/index.html","250a8cb0c70f84ccaa2e0670f895b2fb"],["/sw-register.js","c06f3ad8a9062870ef533332b17266a2"],["/tags/Butterfly主题/index.html","9b58c7cda7aa0f2f9f7ec5dddf3d2989"],["/tags/DIY/index.html","f7a185e411b8a21bbd16aacafbd3c57b"],["/tags/DIY/page/2/index.html","c126fa9bc60f879ed33ae9e46b2cfc7e"],["/tags/ICT/index.html","56cab6592aee6d9a6deda67b43175f38"],["/tags/NHK听力练习/index.html","701e97856622aa9b211fa86dba27d2eb"],["/tags/NHK听力练习/page/2/index.html","21c67e7d96b19782ac809f47b8817f32"],["/tags/NHK听力练习/page/3/index.html","54979a80e096e29d4685fcb9195e6aec"],["/tags/NHK听力练习/page/4/index.html","c1f22a3508cac7ff59fff756e833b14f"],["/tags/NHK听力练习/page/5/index.html","e8f01417f4e785ffebd11f4708f21575"],["/tags/NHK听力练习/page/6/index.html","17f0eeeb107a8fce6a2cdb341a1f402e"],["/tags/metro-ui/index.html","7765ee0ec4be93b148ac81d056c1d625"],["/tags/vuejs/index.html","16588bf9c77cb763adaf2255dab3904b"],["/tags/お盆/index.html","65c99682d40eb7d962254a78c22c1b01"],["/tags/世論調査/index.html","f2fc0284dda0feff6ea0dccf4e7552b5"],["/tags/作品集/index.html","afbe704eb31f3738e5004fc039cef60f"],["/tags/作品集/page/2/index.html","60266d8672e736edaf8cd1b4b9ffab71"],["/tags/农业/index.html","f691e286967969cce5d74192b9e23f81"],["/tags/历史/index.html","6f536a460d6c6434168de00532e8a3ac"],["/tags/営業時間/index.html","bf7d39067c69696b905ee58867ae513a"],["/tags/国外政事/index.html","5179b728e4691f2b565897c23c16c247"],["/tags/地震/index.html","5fe0602b3e903b8e76131bf0fff9801b"],["/tags/外国政事/index.html","c460344d90523fa57dfffc6644755d59"],["/tags/天气/index.html","1f66ff15c4cdc821093b63780deae1dc"],["/tags/天气/page/2/index.html","d77b8c02399a0a3361db540eebcb799e"],["/tags/奥运会/index.html","a38aa3dc917213e7f72f82436fd4e30c"],["/tags/学习/index.html","2bb54f0a86aadd2fe13d3c8f035bd1e5"],["/tags/学习/page/2/index.html","5c7d2c7d625e462bbf8e4f1ac4542c77"],["/tags/就业/index.html","cb6fa105b9c5419442be99428cbc103b"],["/tags/庐山/index.html","7471fa7861f3bc064e816428a3fe408d"],["/tags/座礁/index.html","cf61e4c6367144ccf6b16612da9e5688"],["/tags/政府/index.html","a8a2ff1f71d1f08e797d74e06f5b2b7e"],["/tags/政治/index.html","0df07874c0754cbfc26ff459fcfc3bef"],["/tags/教程/index.html","0f8eae9efc15e0a100380bd97cd447b1"],["/tags/日本教育/index.html","2fe08b3cf61879e9f7bc0bc4c68f70d5"],["/tags/民生/index.html","0942628c067d9dcaa1f04a4257c220dd"],["/tags/民生/page/2/index.html","c05241b72d19f9ced8cfa2d3e7ce361d"],["/tags/游戏评测/index.html","ea9d75aaac821e2a871c0d62d4444220"],["/tags/游记/index.html","4f9b8374bfa7d98359aff8b4af573a48"],["/tags/生活趣闻/index.html","3e3e295ded6c4deb63db4713add60aac"],["/tags/科技/index.html","d60046f9bf45a7761b7c4a37e16046b7"],["/tags/经济/index.html","dbd1b53943ef208e32b6d9fb0772ecc7"],["/tags/经济/page/2/index.html","08914428b2bb1b14dfe5ca851ed9887d"],["/tags/网络教学/index.html","e56169d92ed51c2d6fa1bbc4cb6c8387"],["/tags/舆论/index.html","827ec698225e3359f695756d8a3654fc"],["/tags/虚拟现实/index.html","d756e16bc78305f8dae96c71870856c9"],["/tags/随想/index.html","a8422ca6b53cc763df02e3f1c4232459"],["/tags/障害者/index.html","780a156967f96a59546183f673d97d16"]];
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
