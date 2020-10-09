/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/05/20/2015-05-20/index.html","21df1871387b300aed79347b91603077"],["/2015/06/16/2015-06-16/index.html","262e6dd5bd45966fc67c920254d75dcc"],["/2015/12/12/2015-12-12/index.html","5e2dacb28f58091ee3fa11182ce7f82a"],["/2016/06/08/2016-06-08/index.html","a6e16cd3c55555309ab67a4612132963"],["/2016/12/18/2016-12-18/index.html","cb28769cb601964c546ad2db39bbd9fc"],["/2017/02/17/2017-02-17/index.html","1a24dec4d90fbb727fd14e1ba12f8a54"],["/2017/03/17/2017-03-17/index.html","5d9f4b0efe2733d67141b9a42b1f55a2"],["/2017/04/06/2017-04-06/index.html","75965ea808e73272dff391ae2199c320"],["/2017/05/17/2017-05-17/index.html","d321eafa1524fdabb4dab6dcec58873e"],["/2017/08/15/2017-08-15/index.html","c2eefc305603c39efc9f5414fc294c76"],["/2017/09/16/2017-09-16-1/index.html","7af7e8e9bd94d0e39691407712b12945"],["/2017/09/16/2017-09-16/index.html","6e8b8260d42e5aefe30627b503d15f8e"],["/2017/09/21/2017-09-21/index.html","48827582510e0d27c2e8358668ec9a00"],["/2017/09/23/2017-09-23/index.html","1d2def983fabdf59a5b4ad4f84f32b32"],["/2017/09/26/2017-09-26/index.html","74efa72636a2ff6aaa185fe1ab3aaf8e"],["/2017/09/27/2017-09-27/index.html","7c5e845951595ebb5c1110a03e05f708"],["/2017/10/04/2017-10-04/index.html","2c187e06a50e60d5dc5d6bad83328bc1"],["/2017/10/08/2017-10-08/index.html","75d2d8d20feb156721876ec30829d1cb"],["/2017/10/09/2017-10-09/index.html","6e72e87115897020581d1a3a79daffc2"],["/2017/10/15/2017-10-15/index.html","55cdd194441101d439f1abccbfcd7074"],["/2017/10/19/2017-10-19/index.html","a42c175e28993a92e5e24e329368f8a6"],["/2017/10/23/2017-10-23-2/index.html","9a1fa7fdd9d796efa266549d4d76e20f"],["/2017/10/23/2017-10-23/index.html","a1f94d45bef78ed5fa17cda55c78adfc"],["/2017/11/08/2017-11-08/index.html","97cecbb3cfbc4254cd134cd9f279fcd4"],["/2017/11/12/2017-11-12/index.html","6d23d9b55e83f7c6f2b85e1c898b1b28"],["/2017/11/15/2017-11-15/index.html","c8e5d5a06d10f54b9e4cbe1777ee54da"],["/2017/11/27/2017-11-27/index.html","ada58575df0f92c4c996b6d1a8ad17f3"],["/2017/12/06/2017-12-06/index.html","afd8999bc0515e6b8a6ca5f0f128ad9f"],["/2018/02/12/2018-02-12/index.html","770851efdc0ce3b89d45124dcf9a6f1b"],["/2018/03/26/2018-03-26/index.html","c074ae329de9400741ac22a8feadd863"],["/2018/04/02/2018-04-02/index.html","dcbbc54c17c0622b649a098582c76309"],["/2018/04/24/2018-04-24/index.html","4d53af027a29ca3aadfaed58789d1b5e"],["/2018/05/18/2018-05-18/index.html","b3eed9b22cf3fbf3fec600c4c162a5e8"],["/2018/05/23/2018-05-23/index.html","375dd5c105f6296eda966433bd6733a7"],["/2018/06/08/2018-06-08/index.html","7159571c1897078facfff3aee318540b"],["/2018/07/01/2018-07-01/index.html","12ad3905ebcc70f6cb36b6e93f72235c"],["/2018/08/30/2018-08-30/index.html","959cc5b5044c7cd4be2a44345e01a1f1"],["/2020/07/20/2020-07-20/index.html","e95a040888889f415ecb06d54baf31b2"],["/2020/08/01/2020-08-01/index.html","2f22d1688d67ec9bad8103727a5c95d1"],["/2020/08/02/2020-08-02/index.html","ae821fa76c7b6b1c66dddf0171c69631"],["/2020/08/03/2020-08-03/index.html","b33d3ff651f857797a3ea1f5e0739f5a"],["/2020/08/04/2020-08-04-1/index.html","d7ac3acf66c6fa5fb7b6dc2311c439b9"],["/2020/08/04/2020-08-04-2/index.html","2f4e1b5cd3dde27a62b08788e13a077b"],["/2020/08/05/2020-08-05/index.html","b79a225a51a224ae08fd836cd7309ce3"],["/2020/08/06/2020-08-06/index.html","120c684e6d431e849b4adad0fa66e8a1"],["/2020/08/07/2020-08-07/index.html","5a3ff54801e19d697d10609f1d284c08"],["/2020/08/08/2020-08-08/index.html","f1efbb1d7beb766b251ad629615f7ad6"],["/2020/08/09/2020-08-09/index.html","9d166577f20fbb56f8e38dca9392693b"],["/2020/08/10/2020-08-10/index.html","84203a8004abe2836a3ab461cfee6f37"],["/2020/08/11/2020-08-11/index.html","6bf141587ca558e291aaabc99e2b63a1"],["/2020/08/12/2020-08-12/index.html","fad5ce2b4600b9db4c0f53ceab134cf6"],["/2020/08/13/2020-08-13/index.html","1cc3b73d947670b0d6be75e6fd21958a"],["/2020/08/14/2020-08-14-1/index.html","9a89390e0a87161a535c8291546afc68"],["/2020/08/14/2020-08-14-2/index.html","a5b75a921db58ac1bd09cfa0af489d71"],["/2020/08/15/2020-08-15/index.html","0fd521e520bf49e47ca504f8f23e4c90"],["/2020/08/16/2020-08-16-1/index.html","e67b7f9f6539ed1582e1fbf9d5bdbc2b"],["/2020/08/16/2020-08-16-2/index.html","b9c24feeedcef481cd02e13094ec0ce6"],["/2020/08/17/2020-08-17/index.html","875df3b0198c3fce92dc8a0de36a3c08"],["/2020/08/18/2020-08-18/index.html","c7c7328ac97e50fca64502a698e9dcb6"],["/2020/08/19/2020-08-19-1/index.html","a5be28256c5d0f9e3279bf963cd6aafc"],["/2020/08/19/2020-08-19-2/index.html","a3a12c4a8a469620064ad5124e46878e"],["/2020/08/20/2020-08-20/index.html","28c0bc85f2cef3596c5863e35e5f1d83"],["/2020/08/21/2020-08-21/index.html","cd7ea77d6f09d42a509e4ee5beb88385"],["/2020/08/22/2020-08-22/index.html","13077f12b0274011c61d329e1d6c2405"],["/2020/08/23/2020-08-23-1/index.html","9244a686606c7ef774076a2524cf1725"],["/2020/08/23/2020-08-23-2/index.html","6e25f63f5b3394a7832ee59690a03c2f"],["/2020/08/24/2020-08-24-1/index.html","c67d2abd2fd438f34d6b3f753a9b13ef"],["/2020/08/24/2020-08-24-2/index.html","45be969788581d5c1c0cb949b29cdf60"],["/2020/08/25/2020-08-25-1/index.html","069291efe09d5368faf98954dc92af3b"],["/2020/08/25/2020-08-25-2/index.html","07e9c932e72685e595b27aeba95afc99"],["/2020/08/26/2020-08-26/index.html","aa59b07f15a62492369c04fbb52e8892"],["/2020/08/27/2020-08-27/index.html","3d56806805e20e085462f77ac27f8d7d"],["/2020/08/28/2020-08-28/index.html","8695deb8cbcaca7c04bc9279564b1afa"],["/2020/08/29/2020-08-29/index.html","a178ef1ffd7882b0b4f29d66d7435fc0"],["/2020/08/30/2020-08-30/index.html","e07948163aad0ea5e329bd8dd9aae7da"],["/2020/08/31/2020-08-31-1/index.html","3821aa8cd07f315db469ea6c6ddb2342"],["/2020/08/31/2020-08-31-2/index.html","981798d3750fb50dcae8f7821e84b6cf"],["/2020/09/01/2020-09-01-1/index.html","da0b9679a7a5549a8fdde0a740f5c5b6"],["/2020/09/01/2020-09-01-2/index.html","9d0765980980c4428da6219279cd613c"],["/2020/09/02/2020-09-02-1/index.html","6ab71f98bee9b13c4c7c16bc1e4682b6"],["/2020/09/02/2020-09-02-2/index.html","d61258aded8a22c7c825efa6d33cf9b9"],["/2020/09/03/2020-09-03-1/index.html","857a7103f0304ebd5a5cc2411a0153dc"],["/2020/09/03/2020-09-03-2/index.html","6d99610484a5d1c4b5f7688196b3dfe0"],["/2020/09/04/2020-09-04-1/index.html","674751914453a35842efa4a98adb4b5c"],["/2020/09/05/2020-09-05-1/index.html","b396b4215958cf3f96b16fb3db613356"],["/2020/09/06/2020-09-06-1/index.html","619bc8e85b86cd6ba5ca09b28651da55"],["/2020/09/07/2020-09-07/index.html","0039fd7c856ee1d88b3e84062a8a2abc"],["/2020/09/08/2020-09-08-1/index.html","7bb5692f73b7da769ea86e4d088a645d"],["/2020/09/08/2020-09-08-2/index.html","bd3368190c99bd83a02f6a4d445922ce"],["/2020/09/09/2020-09-09/index.html","d8da487e453c4e22f470715226deac31"],["/2020/09/10/2020-09-10/index.html","b5826bc9ec3d3d50026504da4685f1e0"],["/2020/09/11/2020-09-11/index.html","27eee3c2969e9c0b54161d417d9aaaeb"],["/2020/09/12/2020-09-12/index.html","89eac2a04e752fedb432c8e530660301"],["/2020/09/13/2020-09-13/index.html","f4b706780b1fcc6ca765a5d38078dacd"],["/2020/09/14/2020-09-14/index.html","0af09abccce2c9c59164d4533214727f"],["/2020/09/15/2020-09-15/index.html","e5da32c2afc6e069afb48e48ed2bd4fc"],["/2020/09/16/2020-09-16/index.html","e97e0ddba3d083fbd0c7c5e49907fc60"],["/2020/09/17/2020-09-17/index.html","4ea0d4fd9e6cdfebb6ea2b8da12f4115"],["/2020/09/19/2020-09-19/index.html","3a4165c8f13e80e65d8aa177883476fc"],["/2020/09/23/2020-09-23/index.html","7ce0f21a53107d4138d4a3a413964e3a"],["/2020/09/24/2020-09-24/index.html","118216725dc9bfe689fd0f32068467b4"],["/2020/09/26/2020-09-26/index.html","d89028442dbbfbc509a8dacdef657a77"],["/2020/09/27/2020-09-27/index.html","031a833ab0615653b1460199b39c1619"],["/2020/09/28/2020-09-28-2/index.html","84c50af265b07b405535ce796fb5d4f0"],["/2020/09/28/2020-09-28/index.html","ccc8c84e424e6e3cf9846b58497a58d1"],["/2020/09/29/2020-09-29/index.html","ee169d16c759c75adbb6108964c4dc88"],["/2020/10/03/2020-10-03/index.html","595df525453f9b44dda0f597bf5b994c"],["/2020/10/04/2020-10-04/index.html","4072633712598fcdc4d5b98feb531113"],["/2020/10/09/2020-10-09/index.html","c984029ebac956dfc20243606d8b16d8"],["/airplayervisual/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/airplayervisual/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/airplayervisual/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/airplayervisual/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/airplayervisual/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/airplayervisual/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/airplayervisual/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/airplayervisual/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/airplayervisual/index.html","01d49eb8862edc70dc434f1894dc66d8"],["/airplayervisual/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/airplayervisual/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/airplayervisual/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/airplayervisual/js/jamsetting.js","7927507e0080ddf55c6d8b5f526bd942"],["/airplayervisual/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/airplayervisual/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/airplayervisual/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/archives/2015/05/index.html","c44aa0303b5a80bded355428f3c03e2d"],["/archives/2015/06/index.html","a3685995bd3f8fa1c6756b65ad483f95"],["/archives/2015/12/index.html","17f7e995bad41c836ffe5be153e08a8b"],["/archives/2015/index.html","bb60ffc080b8f039fb9f963252c073fb"],["/archives/2016/06/index.html","8461434676c417451eced9b8b97c0967"],["/archives/2016/12/index.html","f3bf4fd48c83de2284f9924159708125"],["/archives/2016/index.html","f74e686b73feee6d0fd35444dbf5ca82"],["/archives/2017/02/index.html","f717fbc84423db454b5eafa3e93e2cc4"],["/archives/2017/03/index.html","4171329d8e04203a9135577bc90925d4"],["/archives/2017/04/index.html","c32b262e200043f57f2ae3d6e9c72692"],["/archives/2017/05/index.html","d1c3be57507450d895bef4bc58bd3f62"],["/archives/2017/08/index.html","bf126eb49b16984af94899845f1f4e76"],["/archives/2017/09/index.html","6acc00c822f72a5924e502906005afa7"],["/archives/2017/10/index.html","832590d37fd87f7ce25ce5330317a8db"],["/archives/2017/11/index.html","09fb8ef6b833c2db3e6f5b1eea20899a"],["/archives/2017/12/index.html","2c46453104dbf27fa268cfe25af0f95b"],["/archives/2017/index.html","758705037cbcf7fba5747db69bc55f36"],["/archives/2017/page/2/index.html","62819b40b59ed08fa0f359efa6d93940"],["/archives/2017/page/3/index.html","fe8c721c24d0653ea18a9b46e63d978d"],["/archives/2018/02/index.html","32e7fd08abb97848ac7677778ce10760"],["/archives/2018/03/index.html","2b1b0705d0d5e1d2f0d58e65e676d216"],["/archives/2018/04/index.html","65bdd7f4c2e70e0a3dd194aa107f69ef"],["/archives/2018/05/index.html","a40734c5f5e11270613d88b16c252490"],["/archives/2018/06/index.html","1ef206e3e53ca67192a2451217decb8c"],["/archives/2018/07/index.html","c3a1c50562bcda7a308c38312012e6e3"],["/archives/2018/08/index.html","fda8a02623a6580c5fb139c6b8c87f68"],["/archives/2018/index.html","c602a09cd431ab3d20bdc7066bf0f3a5"],["/archives/2020/07/index.html","cb0e3f7b1ef342191bc9a09c1ead2038"],["/archives/2020/08/index.html","940ad80ec19c9dc496cd7b67a7779702"],["/archives/2020/08/page/2/index.html","f80832bc15fc4ae0d0c020a1ff275fb8"],["/archives/2020/08/page/3/index.html","7cd2a7bbc40c5ae01dcfa1fbe0acd9dd"],["/archives/2020/08/page/4/index.html","1e4cbf14cc8c5d622ff04a1a85a35c73"],["/archives/2020/09/index.html","42e5d3c0188f6a5c5e3b89246ca3a8c0"],["/archives/2020/09/page/2/index.html","3a9852e267574d9a34bb90b25b93dcc3"],["/archives/2020/09/page/3/index.html","d1add8db59328a84f6fdc674cdb91da8"],["/archives/2020/10/index.html","42316e4d8cf140823a97e7841dc4315d"],["/archives/2020/index.html","f10aa15ab7cb67e1177feb23a9a6756c"],["/archives/2020/page/2/index.html","d0dd50430905a64dac60a0f2f45cc934"],["/archives/2020/page/3/index.html","3af74384fe16af3ce43586aa93019592"],["/archives/2020/page/4/index.html","426a66c5e5bf081fe9bb40b99a9e57f8"],["/archives/2020/page/5/index.html","e42b293dec70611d1a7851392796c0a2"],["/archives/2020/page/6/index.html","ef292ef043303c093d8232b544e07801"],["/archives/2020/page/7/index.html","ac4882a0cc1d54ca67b13ca892ad8c45"],["/archives/2020/page/8/index.html","bf871d251de5e2b7248b8c258c35f847"],["/archives/index.html","174f68e150f15c87dcddbf4ae97bb83d"],["/archives/page/10/index.html","b7896eb3971e55e88a75802aab56e14b"],["/archives/page/11/index.html","b11c802d758b9a503bedc6ce63729c14"],["/archives/page/2/index.html","d7eb3dce603e43ba86da571de4776834"],["/archives/page/3/index.html","ceedb9b85630c26bb37c6ef00f9382b3"],["/archives/page/4/index.html","d10a7bd7075b8f8f672d0639c773a7e3"],["/archives/page/5/index.html","0a1c4f050612710393a9bef6366d2252"],["/archives/page/6/index.html","1d8a26cbae9033195b4224b4511cb45a"],["/archives/page/7/index.html","2bf6429d9782a2f88f417ab0d7edeb31"],["/archives/page/8/index.html","77b8c4156e5c086dcdc98b5cf1407a4f"],["/archives/page/9/index.html","56b15f479d5c2097b6c82613dae07830"],["/categories/NHK听力练习/index.html","75b3d6c1114a9d76bc8a4ef3ba678965"],["/categories/NHK听力练习/page/2/index.html","19af169d6d066b2ec1469b17dd56fc12"],["/categories/NHK听力练习/page/3/index.html","e6d59a353322c1690ea614473dcb7648"],["/categories/NHK听力练习/page/4/index.html","66b4f47368fc5850a6098d722bbadb7a"],["/categories/NHK听力练习/page/5/index.html","35a3ea5c67254b4101758b9a2f33298d"],["/categories/NHK听力练习/page/6/index.html","3558a795f1fa22fa6a1366e9d193e1be"],["/categories/作品集/index.html","a34aa9a1c6016053dd499d3e7041f456"],["/categories/作品集/page/2/index.html","0b56bd3c22c3b57dc8144092892bba6e"],["/categories/学习/index.html","ea9d4c0d63e3b2e43a7f04f25c942baa"],["/categories/学习/page/2/index.html","09d8763606e30c6ad785abfdf5214f6b"],["/categories/学习/page/3/index.html","de4693eb3835e582f89553e31a73ee0f"],["/categories/游戏评测/index.html","8eb4d67cccb689e865567b3e766d6020"],["/categories/生活趣闻/index.html","4e1cc3bb10537562639331b0f7c66d90"],["/categories/随想/index.html","671ac265e7de93b34e484e1ae09e957b"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/addcss.css","59cae1ddbe6925c34f846ffe12d19921"],["/css/background.css","32d5acccbb94f987faf37cfdc3fd06df"],["/css/calendar.css","0090a32d2a61d42c5bfed254bfba078c"],["/css/clock.css","65602c2385c7eab42ee3804cd6ee0a5a"],["/css/cursor.css","c1a23e168c5b794ff367eb0ae77eb26b"],["/css/danmu.css","2a5b914a9592bcd353425c6d5fa7af8e"],["/css/index.css","36eb36d0f5531dd7a8f4c8f925188615"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/loadingline.css","bc1ee020a6a11fea17b915b97e6978bf"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/html/calendar.html","bddcec1edba7f4c49fe5cd75f8cdf5b2"],["/html/shiyan.html","564e2ac056ed8f589a031fe98738e53d"],["/html/shiyan2.html","4429b907a74ae8086d8324b6b79a8e50"],["/icon.png","8ec68de45d18642ba9baf2447e62f476"],["/images/AMJ1.png","d27a6725d1aaaf5324248da4312ab6c2"],["/images/AMJ2.png","00e22eba5901e5bd674e42228cd5bd26"],["/images/AMJ3.png","c8c9ea6348dfcad3a641899d5b587431"],["/images/FOTO1.jpg","4b6f100861908e2c7044cffbdb4a0c1a"],["/images/MVVM.png","ea5a002ee2f85c71a0db51d5adb5de19"],["/images/UT.jpg","367f4e432f9db55a92b2a290c4b0a476"],["/images/UX.png","a183974e958d41d1b6acec70bb7ea00a"],["/images/WindowsTerminal.png","8ac29cb56b8a1768cf7de071e9f1ae6f"],["/images/air-w.png","c1cc32f9d3e17551ca11a7d18a0b533a"],["/images/anzhuang.jpg","912b2489957f8344406edc5e5cebe5fa"],["/images/api-setting.png","2c0bb074390779721cba009e96c5417c"],["/images/apikey.png","1f31121b190eb1f990bcc3e27524bc03"],["/images/backpic1.jpg","86a6fa88167feb338fbf1a4e9057114b"],["/images/calendar.png","86319b08b93be7c8bc47cdba7a169563"],["/images/clock2.0.png","0a0f122c7a25262fc02ee99df0ef21eb"],["/images/example.png","aaac9983e5d59f919bf282dcff2edb3c"],["/images/foto17.png","28db4c6608ad1ee6b34238cafab25e5e"],["/images/foto2.jpg","be95b922512d004a61f83c97af3e2602"],["/images/foto2.png","0dc07d4e1b00526a273a89dc8b81548d"],["/images/foto3.jpg","551c0616c92c4ee7cc17dd458b3c46e9"],["/images/foto4.jpg","9d1d9fea759a41afc0061866e400339a"],["/images/foto5.jpg","984f618b15372f37d54f507e6f379f10"],["/images/foto9.jpg","b683fc0b998e80ff8f5a3e45e889807c"],["/images/girlpic.png","ff1e8427ed555af639e6d849f8f648f1"],["/images/girlpic1.png","698e5570e821c3cae643cc9777c2292e"],["/images/girlpic4.png","551882e4b9b6afb79000fd34c0dbf5e5"],["/images/headimage.png","332502f36a0297b30cb7969fe6de8451"],["/images/hexo.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/hexoWT.png","c027cc9f5665c7d7ba657e7a4bb40017"],["/images/his-json.png","7d8a71e38ab684107446e5c72c31854e"],["/images/history.gif","0459a3dcf2317253de0b34482880c63c"],["/images/idea.jpg","5eb08bf6c965588f03c8860f201cac45"],["/images/life-cycle.png","02f39ea5c041d45938fda4b50f234cb7"],["/images/life.jpg","74d2d9c5f48ec59e3badeec690941812"],["/images/listen.jpg","9d4f73cd5634f43deaed4f9aca03f9a3"],["/images/magnet.png","4899a924f3de0d19dbe0415128c07d65"],["/images/magnet1.png","8d010eb86ca943e036adaa7de57aee7d"],["/images/magnet2.png","293cb414a8ab93b43bde3bebf9cf0cfc"],["/images/magnet3.png","1923148630e2e094ff80bf35aa604c10"],["/images/magnet4.png","9bb4f963ac1c09f02d62525f513f492c"],["/images/meilu/1.jpg","cd67abcc3f543b5c66adc4f9d9c5c628"],["/images/meilu/10.jpg","ac9fb2711e477b5db1c3acb57e899045"],["/images/meilu/11.jpg","364caad6dfc356a3dc630fa067e48e88"],["/images/meilu/12.jpg","274767e5708f79934e5bdbf73eda8f0d"],["/images/meilu/13.jpg","dcab12b84454770b208913db63e825ac"],["/images/meilu/14.jpg","037cdd048284e621f27e17a2c59e8ea7"],["/images/meilu/2.jpg","f6cdb65ae3fad4523b32f5ee38696b60"],["/images/meilu/3.jpg","9e5df3612c2d93bf57313186c954aea5"],["/images/meilu/4.jpg","69ef2d6f4bcd79cf4b4e672b60c6751e"],["/images/meilu/5.jpg","ce81ca16def7613b7ebb368fb554f14f"],["/images/meilu/6.jpg","cafd5b62305f806754a75cc3af8c3b77"],["/images/meilu/7.jpg","b8ae865d386e1e713a6034da6b090c10"],["/images/meilu/8.jpg","afad7a7bf1066c817a8d2e7566bc780d"],["/images/meilu/9.jpg","72f9649f56b564eacf23ce3dacb88029"],["/images/metroui.jpg","5503bfffd450d9ab572b67ea00941571"],["/images/metroui/1.png","79a03b408c19c74eeaa8ff6e17a03f9d"],["/images/metroui/10.png","8309fed71a15c78f2dfa3af1ff75a5f3"],["/images/metroui/11.png","aaf1a007cbae12f93cc2688bace18d28"],["/images/metroui/12.png","0758ea282c3828c47e5c64520ff85783"],["/images/metroui/13.png","12ca7b511927cd4b26e97f3b20908a32"],["/images/metroui/14.png","f44ba7680f7b36df437e2ae2588d0565"],["/images/metroui/15.png","e8927c78b125b805af7aa86fee815ab6"],["/images/metroui/2.png","e604d3c662b996f06f22753ba9ab379f"],["/images/metroui/3.png","664e3b7490f2f95d5547b8ba79a65456"],["/images/metroui/4.png","c0f255344cafc303a1d9c7404da37149"],["/images/metroui/5.png","da2074cdb1298aca826abc1a5c441300"],["/images/metroui/6.png","efef2f087127614b4e03bcbe9a347018"],["/images/metroui/7.png","a4d34b1a2dbe3a58d3a92276880be039"],["/images/metroui/8.png","1d34a626bbaa898a60d4501936bcf962"],["/images/metroui/9.png","0663697c1667b377fe2623bd65e00b31"],["/images/metrouilogo.png","aea81b42d1c2c96440f74cf56ad82e2f"],["/images/nhkimage/2020.08.01.png","af4c55b2ae1d5ab2f56c75a87fcdfdb3"],["/images/nhkimage/2020.08.02.png","c355d41b90f5c65823f96c5f6868ce53"],["/images/nhkimage/2020.08.03.png","fddcedb40d7f28b2ccb90814351ad5c8"],["/images/nhkimage/2020.08.04.png","8b4518ec5a8513f442980ed7167136b1"],["/images/nhkimage/2020.08.05.png","590abfb19334b0c3cee5a005674f2253"],["/images/nhkimage/2020.08.06.png","d469e21100c42435e88f2bdf07f93da1"],["/images/nhkimage/2020.08.07.png","3ca9e2c8b8a09a38423d73cd36e8de9d"],["/images/nhkimage/2020.08.08.png","4420c2d899fe4eb90c48bae0da8418a2"],["/images/nhkimage/2020.08.09.png","df14be338f9c920818dd1daa6aa955ee"],["/images/nhkimage/2020.08.10.png","c4e2ed023cd3dbfd4986add35ca9357c"],["/images/nhkimage/2020.08.11.png","cf562339e57f673d394f3e6cdd1f60cb"],["/images/nhkimage/2020.08.12.png","81dfa179fea3052ddcf73912ea368f67"],["/images/nhkimage/2020.08.13.png","8cf26c2642e7a27cbd86fcbda8bae8d9"],["/images/nhkimage/2020.08.14.png","d88eeb678b3ed3651d597e61957e264a"],["/images/nhkimage/2020.08.15.png","b9879f193867edcffeefce62c9dc7153"],["/images/nhkimage/2020.08.16.png","46cb914aa1d556561897767ec9ff66a0"],["/images/nhkimage/2020.08.17.png","ea1af9645b5cc9cbaafe70a91dd15cca"],["/images/nhkimage/2020.08.18.png","e87e4de39a6f06cf4283a63af92dd8de"],["/images/nhkimage/2020.08.19.png","8001a951513b542a98ce1151be5bd87b"],["/images/nhkimage/2020.08.20.png","4bc8fafa3ecce30d340b1350715d78e3"],["/images/nhkimage/2020.08.21.png","07ad1337e127922abff27da6c672549b"],["/images/nhkimage/2020.08.22.png","b2b5d53ba46015f64048f9d803b12179"],["/images/nhkimage/2020.08.23.png","225af8c0cabe5218ec634d1b8815fd95"],["/images/nhkimage/2020.08.24.png","1d54a484a6e2395aabe9be005cd90361"],["/images/nhkimage/2020.08.25.png","8008ba169cfce0ef2041329cd29b6b77"],["/images/nhkimage/2020.08.26.png","72a2b8094003a54c97a34ea97cf21bc3"],["/images/nhkimage/2020.08.27.png","893407e604804d215c8fef8bcd5f2684"],["/images/nhkimage/2020.08.28.png","b542280b7341759890a99cbd44d822c5"],["/images/nhkimage/2020.08.29.png","620e2e7d4772e39615fd1a88cdf49717"],["/images/nhkimage/2020.08.30.png","f645d7ba2dcb506f9ec6fb9244425ad7"],["/images/nhkimage/2020.09.03.png","c5262f3aa87190e0273383ea1e445681"],["/images/nhkimage/2020.09.04.png","c07149c32aa41c03bc7dac82a713f6b2"],["/images/nhkimage/2020.09.05.png","4e43556e1cb3b7f4d75f0f6127616a54"],["/images/nhkimage/2020.09.06.png","1021d2ae04a7f109404f857a2a7629cf"],["/images/nhkimage/2020.09.07.png","db9827e9f0a4cf1401b559b4644a0204"],["/images/nhkimage/2020.09.08.png","efe1030b73dc1c01f169c3122a194426"],["/images/nhkimage/2020.09.09.png","f6ba3a1c6cdeff88404ebe2a646f2eb5"],["/images/nhkimage/2020.09.10.png","3471b05d02113517359a9e2167befcfa"],["/images/nhkimage/2020.09.11.png","921a541a8bffb1aa436df2eb6db7c99f"],["/images/nhkimage/2020.09.12.png","a51f8ebaddba69bb80f9259a30f17e65"],["/images/nhkimage/2020.09.13.png","0399889200493cd2154ffc407e2bc400"],["/images/nhkimage/2020.09.14.png","eaaf3da69a39ed316b7fc8c4d409bb0f"],["/images/nhkimage/2020.09.15.png","5774959ea4061c9298ea174f0862cc3a"],["/images/nhkimage/2020.09.16.png","0c5a00f74020740fda589c02e4b3f917"],["/images/nhkimage/2020.09.17.png","b5aef734e3a7db4862ca3fe4e6769dc2"],["/images/nhkimage/2020.09.24.png","5982a7b3843f4ae43b2b4bc4b0c577d6"],["/images/nhkimage/2020.09.26.jpg","c6415af781fbdd36fdb034f74646129b"],["/images/nhkimage/2020.09.27.png","27aa6f6a8d5534ccd99cff261dcd9eb6"],["/images/nhkimage/2020.09.28.png","0f4318d1ff17a33de364432a1c44b5ad"],["/images/nhkimage/2020.10.09.png","6408d9f7e66fdeba8b9207939a08cf8d"],["/images/notop.png","d25c272e5ce312a880e04ce8a0b27683"],["/images/pasted-0.png","552608d8f6e39369aa30c6e332a32826"],["/images/pasted-1.png","baafdacee93c99e99418aaedbf524fda"],["/images/pasted-10.jpg","395cff6f64ab5df19baa3572ac98e541"],["/images/pasted-11.jpg","56e5df07c96634638abf7995b25c81ab"],["/images/pasted-12.jpg","61b3f803b85ce3640d7a9ba7efb9da6b"],["/images/pasted-2.png","2f410e53c811f92a6135f48857776f5e"],["/images/pasted-3.jpg","bb5717e691e87355e7d63a5f3a87ae62"],["/images/pasted-4.jpg","10041d0e3567b24b81222ec5075d6492"],["/images/pasted-5.jpg","ac5047a4b48c6cdaee86fa1863e33904"],["/images/pasted-6.jpg","1556ae8d3ad5713d60237ee4d10e81f0"],["/images/pasted-7.jpg","913fde1686587646ddc663bd810cc81d"],["/images/pasted-8.jpg","fc83268081fb4b6b6ecb1ffa1ec5af7f"],["/images/pasted-9.jpg","25e0fa3496591501f5c29d0b802b77d2"],["/images/pet.png","2b8c121909497e57057478856fe48a94"],["/images/pet2.png","dfb1d6a17b527ccc0c600e6ad31f55e5"],["/images/ps1.png","0917ba91f21b6944dc08d35c41a326d2"],["/images/psb.jpg","6a27c58337875c776af0a7667598b401"],["/images/quse.png","7cd1ec12b804305430cb4cdc09c7a893"],["/images/rain.jpg","9c26acc44c692b6a63e134be07b07c18"],["/images/shezhi.png","281bf545f6a4024e2d0b7120bc398a21"],["/images/soul.jpg","d97b4099c0728ff6123d006fa62db86e"],["/images/study.jpg","a9b1cf95ee6bd9f3913e8ec6a6a6f44f"],["/images/tianqizhizi.jpg","dd48d78b4eeaaa52578352f9ef570b14"],["/images/vue.png","cf23526f451784ff137f161b8fe18d5a"],["/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/images/work.png","e521cf5b834292fde1c50e0a0f5802f9"],["/images/xiaoguoyanshi.png","994a3b710d36df0a4630cd9a768c7f7b"],["/images/xiaoguozhanshi-m.png","1fefca18214fc4889d1bb76b81887c9d"],["/images/zfe.one.png","b41f689341882058ffb28c4cee499bde"],["/images/幻想终结之日.png","0025c4d3973bdfedb80db3f78c59fa47"],["/images/时空战纪——游戏建议及意见①.jpg","1337457f14a8dffee66d94f8915b54ff"],["/images/简历.png","d70507ee4615c9e324578c0d777e6855"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","b2816f18531e7470afc88d9f63c2b52c"],["/img/favicon2.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","f642b3b0f57fe449c3cddb0d166df3a5"],["/js/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/APlayer.min.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/airvisual.js","71cf86bfd452ca01d92438d8266416ee"],["/js/airvisualapi.js","6931bebe1696688d109963187fc2eace"],["/js/background.js","94c8410b174f58594cf81ec99054968b"],["/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/js/calendar.js","a58e02711cc6dec4dc04257e555b8923"],["/js/clock.js","ead1a80f7219c166e1180674b7d8c70b"],["/js/color.js","3730bb4f7b185e6f5130ac28bace968b"],["/js/danmu.js","6b6ae6b7f1b42dd4857541f43b2bb733"],["/js/echarts.js","dc1227b1eba1ba47fd185a387d0a7d37"],["/js/gitcalendar.js","fadfa8a42272cd322118653dca512a7a"],["/js/history.js","20459f7db325e597e64903f4c0d19306"],["/js/historyroll.js","a3e9ac376106816c50a61f9f4306d671"],["/js/jam.js","462c07d3b2e0f20394d994bbcfae37cb"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","790cd2f28594f8affbd4a450037c48ff"],["/js/rain.js","f656dc28e4ab5c3f8414d35f683278c1"],["/js/rainremove.js","ceacf82842b101f7e54a2aaf5f4bb9cb"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/link/index.html","a804cf4d3baeaffe1e6e13e0f852c9ae"],["/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","d9c494276b300497f1e9168703fb9a48"],["/page/10/index.html","ae0963319b5a5322a556c6bbfdc61d53"],["/page/11/index.html","20b0eea8afbf538b162ca35e6612aab6"],["/page/2/index.html","cc416ae67729a3cbe12b619f6dfc0fd4"],["/page/3/index.html","66e711455f466f9ca44c6ec59da79ab6"],["/page/4/index.html","f6b3d141d87c19102935fba1865d6441"],["/page/5/index.html","d2ec1ec4cb63e0df955b074651640526"],["/page/6/index.html","8a80a3eb97b5b97d15dfa43c70d1b868"],["/page/7/index.html","7523bd6769fd6acf35c2e958ef5a1d56"],["/page/8/index.html","702bd0caa5d7b9e48e38bc3aa1574b5b"],["/page/9/index.html","d2bf061d139d9c5f8bad164924a1ba04"],["/research/index.html","a1021a8aa1861dcf6435c11589d3f2d3"],["/sw-register.js","81414904678d91ae708104b4cd1959ff"],["/tags/Butterfly主题/index.html","109c3a5f4844992b68088c4dc4ac9491"],["/tags/DIY/index.html","68f37ab51e784b4e0964f991afc2bee9"],["/tags/DIY/page/2/index.html","57c4b7df77c75b680910f9fa6969fbd4"],["/tags/ICT/index.html","c18461be88a597799b8451ba2e15dd69"],["/tags/NHK听力练习/index.html","3e05274c48b49d20de2d05542e530683"],["/tags/NHK听力练习/page/2/index.html","032583e21dd14f6c86964861b6d96803"],["/tags/NHK听力练习/page/3/index.html","42e17fcabe1da052cb97a039b97acef3"],["/tags/NHK听力练习/page/4/index.html","dc4531783de401138d226c8728285702"],["/tags/NHK听力练习/page/5/index.html","da13ab73f12cf6d55f245ac0fb42796c"],["/tags/NHK听力练习/page/6/index.html","02811092687439e6806bbf514ba8350f"],["/tags/metro-ui/index.html","2b26eb3c0dee92da365e1c4d8a7d22d9"],["/tags/vuejs/index.html","d45d27914ec49e9f727ef092604b9a24"],["/tags/お盆/index.html","d5f56e5fe148dce8926c188bce63c596"],["/tags/世論調査/index.html","af9fbaa2e088fbc3f87979e21930b416"],["/tags/作品集/index.html","a460e2839f58e6f5e599f3e0625f3d49"],["/tags/作品集/page/2/index.html","f45ea15d06f7427d088a7c8dd8b787d7"],["/tags/农业/index.html","848bfd51632f997a70d7bcd954e928df"],["/tags/历史/index.html","c53be5b1fa55ba4d3ef15f70cccba087"],["/tags/営業時間/index.html","fbcd9182ffe4c1c8b33944cbff3165f0"],["/tags/国外政事/index.html","ad6efc7d3b7ce6265236c779f903cd1e"],["/tags/地震/index.html","223f2a0f29590fb39daf783fb315f4d9"],["/tags/外国政事/index.html","e49f6f269fdc7246f1d6fac8e47c3220"],["/tags/天气/index.html","23bd3eac5eb4d4fccabd917755e4b707"],["/tags/天气/page/2/index.html","db6f5aa077a2b995194d354908467460"],["/tags/奥运会/index.html","8e12f986afc4917f41f1efb0f2f772c8"],["/tags/学习/index.html","d51a0141a6917ee669b3941e4f146143"],["/tags/学习/page/2/index.html","d10961f10af40e10a7174e0165d1d583"],["/tags/学习/page/3/index.html","87c3f4e9fc684ebad5238bd169282264"],["/tags/就业/index.html","f0b8fdbf5f465165632830c1dfa3b323"],["/tags/庐山/index.html","e216db4033bfac9ba04f0ce208144474"],["/tags/座礁/index.html","493724dca4a1587c80c6fac3d4ad11c5"],["/tags/政府/index.html","57e1983a4d3d957a98728bd310fbdcc7"],["/tags/政治/index.html","8973dbda74f0f26a048a5a4a5b9847a3"],["/tags/教程/index.html","279ddae50d93c135882244c6b8a7eefa"],["/tags/日本教育/index.html","9b9a39930eb318387944eccdda22364d"],["/tags/民生/index.html","795fca712b23ea9ad29e9cfc8b228d14"],["/tags/民生/page/2/index.html","006caa0dc37296007bf23d82dc752caa"],["/tags/游戏评测/index.html","27752c4395c0c17a5e1ca5a78240b0b9"],["/tags/游记/index.html","1a3e323e610636781154c93c6aa54a38"],["/tags/生活趣闻/index.html","b223b2f852fe41b233af1437c757a2ae"],["/tags/科技/index.html","0f352f4d21c44735fd05fe3e684f1e63"],["/tags/经济/index.html","bfea809180959ab379c7fdc76a006eda"],["/tags/经济/page/2/index.html","5f1ed5043f843dce7c51c971cb8a5612"],["/tags/网络教学/index.html","182cfbeda9bf1e879673a82853e0b22b"],["/tags/舆论/index.html","ae8a9a781d82bd7edcb1b5da70c23d4e"],["/tags/虚拟现实/index.html","9a4d5196a81403be542301ac5223cce9"],["/tags/随想/index.html","a8312e3f4312e27ff3bacaf77f12757c"],["/tags/障害者/index.html","82444d8525f427902469c40a83f254ea"]];
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
