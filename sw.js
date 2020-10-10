/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/05/20/2015-05-20/index.html","da71c2542d0ec8894beeb1c969390b37"],["/2015/06/16/2015-06-16/index.html","52431fc57755f6f847e79f5c6e237e2c"],["/2015/12/12/2015-12-12/index.html","4c3e5a032dc2e00822cf7d77f3b7c980"],["/2016/06/08/2016-06-08/index.html","5260b65bcaa9fbffe647496f3efab38f"],["/2016/12/18/2016-12-18/index.html","9cdb94d24564748ed60282908a14c180"],["/2017/02/17/2017-02-17/index.html","44f88ce8539187ed714b351736a4f141"],["/2017/03/17/2017-03-17/index.html","879e607abfd04458bcb1c7d868030cab"],["/2017/04/06/2017-04-06/index.html","64d9b75097202d8852b0491b48e1d873"],["/2017/05/17/2017-05-17/index.html","d65a3c1e2d5a0ed68368c96e4a10adb7"],["/2017/08/15/2017-08-15/index.html","eebe2e98371dce8996139acf089cb4c1"],["/2017/09/16/2017-09-16-1/index.html","27d5c443296edd25786b200e9e006034"],["/2017/09/16/2017-09-16/index.html","03b509ef490a5ab4b2e8077eaef4246e"],["/2017/09/21/2017-09-21/index.html","f71ec8852d9cff56f213319b742d0362"],["/2017/09/23/2017-09-23/index.html","eba18e322615194fcf1b05a079450c4d"],["/2017/09/26/2017-09-26/index.html","6f1469f8250cd96935b23271ca9c789a"],["/2017/09/27/2017-09-27/index.html","3796790c26398acced199e27913df96a"],["/2017/10/04/2017-10-04/index.html","2380ee700e062adf23ba85c5cc3b780b"],["/2017/10/08/2017-10-08/index.html","4fb66ae59ab84b102a09afb2de7e4f9f"],["/2017/10/09/2017-10-09/index.html","ac568062bea9652c6690916222d37873"],["/2017/10/15/2017-10-15/index.html","ec472bd217fc92ad6ac3580d820aa1e2"],["/2017/10/19/2017-10-19/index.html","0c02509ca5b2bbd3499e58a0847766ef"],["/2017/10/23/2017-10-23-2/index.html","e9f4a75d4e289aa9c761db9aa7d801da"],["/2017/10/23/2017-10-23/index.html","e3703af67bfe79d00a3a6f39dcc7e1dd"],["/2017/11/08/2017-11-08/index.html","9022450932fccc82c1d90950e4a7d2d9"],["/2017/11/12/2017-11-12/index.html","954e6a85feac118e34cf9bfb7382ce3d"],["/2017/11/15/2017-11-15/index.html","77f13676c5f0fac622111f371e36c9b2"],["/2017/11/27/2017-11-27/index.html","4512676ec224e79f8b19b4a1394ab66b"],["/2017/12/06/2017-12-06/index.html","6e5f9bad034e0ccd49c8177b86eac01a"],["/2018/02/12/2018-02-12/index.html","21f4daccce386ccad948f5f87dc593e1"],["/2018/03/26/2018-03-26/index.html","cc5c08f1eac42f54fb93fe1db6a80091"],["/2018/04/02/2018-04-02/index.html","62f8de9c1ac505e6443abebe7c779f5c"],["/2018/04/24/2018-04-24/index.html","358ae14e4d647735a6864482faee7d0c"],["/2018/05/18/2018-05-18/index.html","6c7a875e2ad2861712c12ee78d73ce90"],["/2018/05/23/2018-05-23/index.html","d73e325622f57244b56d45359306ce02"],["/2018/06/08/2018-06-08/index.html","900f2005fc6e5b09680c4a9e68b953f9"],["/2018/07/01/2018-07-01/index.html","f5295384042c1054e3525a8da776e4fe"],["/2018/08/30/2018-08-30/index.html","a4ff498bb7618fdf5bf30d05027f635f"],["/2020/07/20/2020-07-20/index.html","e461079b0f9c77f3f0b812a7e958795d"],["/2020/08/01/2020-08-01/index.html","6b8bbb22a11c168fbd9dca894472557c"],["/2020/08/02/2020-08-02/index.html","e74a6c59a5bfc1a52a4c0671dcc21ebf"],["/2020/08/03/2020-08-03/index.html","d48011bd8dbae28ba7c57c2294f7c106"],["/2020/08/04/2020-08-04-1/index.html","43d7d0a3fb269a65826ae5efec9805ac"],["/2020/08/04/2020-08-04-2/index.html","cf9f50ecf2997277c063e84032c49455"],["/2020/08/05/2020-08-05/index.html","cc5b9356750a08fd7610a3ade7ec1894"],["/2020/08/06/2020-08-06/index.html","3d1852508db7cd1ca581ce8e7c25b81b"],["/2020/08/07/2020-08-07/index.html","3e94a07abef7fd2c80304316788fda24"],["/2020/08/08/2020-08-08/index.html","4922231b5901e09e4088e151e6ca0a1d"],["/2020/08/09/2020-08-09/index.html","7712f5e2fc7f9fd8c3a1dca407269c00"],["/2020/08/10/2020-08-10/index.html","0f9cc83638b33edee02e1d8cbacc79f8"],["/2020/08/11/2020-08-11/index.html","8199f64f15c68257e088c9f4aafa73f6"],["/2020/08/12/2020-08-12/index.html","7b6f3173a7dc714589e6443d79b285f1"],["/2020/08/13/2020-08-13/index.html","284d51afe91f119aa1be792303cca0f4"],["/2020/08/14/2020-08-14-1/index.html","625b01575fc86759ca490370eb269c8c"],["/2020/08/14/2020-08-14-2/index.html","90739e6182d3d154d281423b99eb12aa"],["/2020/08/15/2020-08-15/index.html","5429fd94414e18875091b211dda116eb"],["/2020/08/16/2020-08-16-1/index.html","46942e3dd2ff2c72b14403ed0ed83677"],["/2020/08/16/2020-08-16-2/index.html","f971fefb380920c9843de5aaa219c172"],["/2020/08/17/2020-08-17/index.html","c9951fa01f2754a6e3ad29d4498010af"],["/2020/08/18/2020-08-18/index.html","6d508a98882d28f24bb20eb1f62dafda"],["/2020/08/19/2020-08-19-1/index.html","f23ebc5f243506e8743b8050f721a6a6"],["/2020/08/19/2020-08-19-2/index.html","5d49bb087b2632709ae88a24c8552265"],["/2020/08/20/2020-08-20/index.html","ae24d0e0866fdac4eccde775b433c6c9"],["/2020/08/21/2020-08-21/index.html","edf9e5834db521c574e73f9c7cc37f37"],["/2020/08/22/2020-08-22/index.html","ee9a42ad564ee5172b742a1663d5ff2a"],["/2020/08/23/2020-08-23-1/index.html","d4bfd513bb3a06a6650ddf628981b4f2"],["/2020/08/23/2020-08-23-2/index.html","e071920329b4b039c20e3f9f0a4a5c6e"],["/2020/08/24/2020-08-24-1/index.html","1bf8a0236a6b266acea64ad2226158de"],["/2020/08/24/2020-08-24-2/index.html","3286464e8c4f4319d3542f468c53833a"],["/2020/08/25/2020-08-25-1/index.html","d72695067341e4da7d07992a1157dbe8"],["/2020/08/25/2020-08-25-2/index.html","1c6d350225354ed77aa0c4c903c77e6e"],["/2020/08/26/2020-08-26/index.html","6418342cdccb4c4180ebc2edac34f91b"],["/2020/08/27/2020-08-27/index.html","861c88a79f7b7270b726d7bc62ef1821"],["/2020/08/28/2020-08-28/index.html","12bef3298ff0b3e19d4f783554ec4cfc"],["/2020/08/29/2020-08-29/index.html","47108c8d6cf2989248992985b46fc4c3"],["/2020/08/30/2020-08-30/index.html","959cefdbb11fbfdfc6b6469af6f875b2"],["/2020/08/31/2020-08-31-1/index.html","bccbbb899db0f1cfbca601eca9a9b0e5"],["/2020/08/31/2020-08-31-2/index.html","70cce3ae6e35e0faab97e8a2aa5bcd7f"],["/2020/09/01/2020-09-01-1/index.html","f7d48fec9373da8bff3412777ec7d2fe"],["/2020/09/01/2020-09-01-2/index.html","31a4b7d82edc21a1af156a7aca6b8a93"],["/2020/09/02/2020-09-02-1/index.html","0d0f8fa6a478c3e24dd39beec09db6d5"],["/2020/09/02/2020-09-02-2/index.html","ec14ed8f5fc1d49c4cbd3548bdc083d4"],["/2020/09/03/2020-09-03-1/index.html","c51fe698f40f490532c668aa004c51eb"],["/2020/09/03/2020-09-03-2/index.html","e91dbdbe2c1906a107a030fe050a8a7e"],["/2020/09/04/2020-09-04-1/index.html","b7fea099e948a421027f449977cd68c9"],["/2020/09/05/2020-09-05-1/index.html","d5fff1c3f6ac65fb7a58273a496375a4"],["/2020/09/06/2020-09-06-1/index.html","974941fb33c286da0da498e8a1ff7180"],["/2020/09/07/2020-09-07/index.html","c6d086bb126809bd31693a7cbf273cef"],["/2020/09/08/2020-09-08-1/index.html","71cc58ab11f7b84dfdedcbb0d4efee46"],["/2020/09/08/2020-09-08-2/index.html","29200da049917a1bf3f8a1d849d04a8c"],["/2020/09/09/2020-09-09/index.html","a898cc10e59dd5f40c24e37bb90f90b3"],["/2020/09/10/2020-09-10/index.html","f16f3b872410a35854d0e18c9a960b5a"],["/2020/09/11/2020-09-11/index.html","f4b2a621595c8577f481058fbc74945f"],["/2020/09/12/2020-09-12/index.html","d34445111b359ad60f2329c8bf76f277"],["/2020/09/13/2020-09-13/index.html","c47b304d08929636f53a2204eb455c39"],["/2020/09/14/2020-09-14/index.html","d5e3111f5b496e0dd06a22595daece5e"],["/2020/09/15/2020-09-15/index.html","f94f74af9c487141cf87818dfd1cca31"],["/2020/09/16/2020-09-16/index.html","84096a5229942b6a9432b0ea6dee5fa5"],["/2020/09/17/2020-09-17/index.html","3d7b651f6b6ab6fa4ae67297c31e07a9"],["/2020/09/19/2020-09-19/index.html","63894224bef90cefb54e612278f02192"],["/2020/09/23/2020-09-23/index.html","f501f765a2de8da392d447c8105a3c60"],["/2020/09/24/2020-09-24/index.html","67cf80999821638442261fef75b63389"],["/2020/09/26/2020-09-26/index.html","c8bdfda49a36e00f92cfc8042c0f228b"],["/2020/09/27/2020-09-27/index.html","6014ca04fceb3ff8890776266563f369"],["/2020/09/28/2020-09-28-2/index.html","9cb86b4e95a04b72b56eeae99806fc24"],["/2020/09/28/2020-09-28/index.html","ad434ac4fe7c90cad36f48c6874e0a8d"],["/2020/09/29/2020-09-29/index.html","6b2779f926ea34c82cab6f2664b670e0"],["/2020/10/03/2020-10-03/index.html","9d4047e7a191f30f2c53b06dcf76daab"],["/2020/10/04/2020-10-04/index.html","805bf9c8d95bb13288e4c91cca8d11e4"],["/2020/10/09/2020-10-09/index.html","097ba78165fed5716d0d1f1e04019f85"],["/2020/10/10/2020-10-10/index.html","22fbebead8f0dd9685434bfe31eff9c5"],["/airplayervisual/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/airplayervisual/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/airplayervisual/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/airplayervisual/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/airplayervisual/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/airplayervisual/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/airplayervisual/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/airplayervisual/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/airplayervisual/index.html","4ba27d0f7737953a0ec5ae64f27bb8a3"],["/airplayervisual/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/airplayervisual/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/airplayervisual/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/airplayervisual/js/jamsetting.js","7927507e0080ddf55c6d8b5f526bd942"],["/airplayervisual/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/airplayervisual/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/airplayervisual/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/archives/2015/05/index.html","6f33268109d63d2802fd4e75ff24aeec"],["/archives/2015/06/index.html","33b82895fb4b839e0b2bbab8d26dec79"],["/archives/2015/12/index.html","4fea400d64cf665f66ef35f03c473c82"],["/archives/2015/index.html","b70c06b9783e72f6d317b9a132d53617"],["/archives/2016/06/index.html","a7b1bb07002bfa959b9f039ae01414ac"],["/archives/2016/12/index.html","b2d33ef1cc5ccc52ee03517e7be1306f"],["/archives/2016/index.html","50e9c72b965bb19e5cdb48c6ca940d5c"],["/archives/2017/02/index.html","099d61e600e0179ca130a535b92c5283"],["/archives/2017/03/index.html","da506fb62196cc727bf7d4692f898c1a"],["/archives/2017/04/index.html","345a7569a01f6013bf670a09d7527fc7"],["/archives/2017/05/index.html","9806b9040022bf337d6dec21d1c9f10b"],["/archives/2017/08/index.html","1ce28207b2da9c7cbcb60ceab3070f2b"],["/archives/2017/09/index.html","bf6a29b4ca91a3f87daa718c377e16cd"],["/archives/2017/10/index.html","f5ed4755174a10eb72dd8b2949539fe3"],["/archives/2017/11/index.html","83d78dc08d54fbdcf5ad731b8d90fcf0"],["/archives/2017/12/index.html","e4d2b1fac0938956d534a0bde82dd4b1"],["/archives/2017/index.html","93dfa947014539e5dd0934bb8c35223c"],["/archives/2017/page/2/index.html","5b98ed770caf04da2d2ae8d7e181a072"],["/archives/2017/page/3/index.html","8fa30f8e4223564b93735071ba1b4483"],["/archives/2018/02/index.html","543663d79c282a0ad79e82eb8f218e35"],["/archives/2018/03/index.html","16802eb8bc1d1e82e244c7aab90344a2"],["/archives/2018/04/index.html","06ce11dbfdce20c9250d9d80f86557cc"],["/archives/2018/05/index.html","52512270ceeb916988ad7226150ef7dc"],["/archives/2018/06/index.html","c18eb278eaf452031cace306639d350e"],["/archives/2018/07/index.html","cf5b709878594b5a5720bd345dd81ecf"],["/archives/2018/08/index.html","3942a60c79950c80bb4b012a866e3775"],["/archives/2018/index.html","d983052068c1e83d166283bd56d6cc0d"],["/archives/2020/07/index.html","3f0089b714da21e1ac41703d495b669a"],["/archives/2020/08/index.html","c5c9e78e19f3b363c598fd1bbd0fd03b"],["/archives/2020/08/page/2/index.html","65d6e9e6766102f9513de4cdc5d716d7"],["/archives/2020/08/page/3/index.html","fa620fda36d682e75b3ea8761df7682a"],["/archives/2020/08/page/4/index.html","7e6414e07289a1fcce99574484d0f3b9"],["/archives/2020/09/index.html","5374f7929691ffa4c8bc1feb2f8e14a8"],["/archives/2020/09/page/2/index.html","5292afc2d5f43fcc2094594c344485e9"],["/archives/2020/09/page/3/index.html","ac3b0041cfe066a16fd182bacfffb7c7"],["/archives/2020/10/index.html","ae2b8aab0118cd2a84729ebd08669a3e"],["/archives/2020/index.html","c0d24e0da18b93ed8df46b1fd7d6c818"],["/archives/2020/page/2/index.html","9195e1afec317dd63150180b0612d94e"],["/archives/2020/page/3/index.html","806c22cdf5465f2f339f16b78f3d7dc1"],["/archives/2020/page/4/index.html","786ddbf41d15150479496cfe0a68feeb"],["/archives/2020/page/5/index.html","a61a31c02f4f9da6872934b0a754a38a"],["/archives/2020/page/6/index.html","6fe29b3ec5645d6140cf2f43b8619927"],["/archives/2020/page/7/index.html","8a4abd617461ae30d56e0f0b9f2a97c9"],["/archives/2020/page/8/index.html","a70089546eb3732dc96447dbf08627c2"],["/archives/index.html","9523756b9133b31f6fce516ba6e2cae5"],["/archives/page/10/index.html","f6a9d958dbc6ab565c074a4c3cb70106"],["/archives/page/11/index.html","d1476cd10a8956920fc43489def93c18"],["/archives/page/2/index.html","6089e946baca0757c1aff10816652fab"],["/archives/page/3/index.html","5316130a3a2b1241edc422e9d31242a0"],["/archives/page/4/index.html","0349a958851edf19bd18caedb554d903"],["/archives/page/5/index.html","c89a57478bcba3b8a3c47405aec7fa48"],["/archives/page/6/index.html","f9c7681d4b8f9b6299e07637101a69bf"],["/archives/page/7/index.html","89787fa9ec30d70ff7fe3ef0d00566c9"],["/archives/page/8/index.html","0274c3a8357cfde569bdbdf99b4f9834"],["/archives/page/9/index.html","e0c05210fadf4a460d6ff0e70cbcfb17"],["/categories/NHK听力练习/index.html","5b18ea8dba66b0a96fa6ecf8badacb9b"],["/categories/NHK听力练习/page/2/index.html","2e196f0e8b8dd18ff6a334c1aa057a69"],["/categories/NHK听力练习/page/3/index.html","c2ae6db62f6d8e064b0b8813075b5c7b"],["/categories/NHK听力练习/page/4/index.html","a89100d41454aef02c615193ccc1df7e"],["/categories/NHK听力练习/page/5/index.html","306790b29b0fc4e8183b4749c1ff9da9"],["/categories/NHK听力练习/page/6/index.html","5f3c0204b60efbdad2543054fcd8e23a"],["/categories/作品集/index.html","de4b1d93f728ca11cf6f120760ae752e"],["/categories/作品集/page/2/index.html","dd84b33209cd91d453b7ade5635856fb"],["/categories/学习/index.html","94f4b097a491376cf0e60609c25347bd"],["/categories/学习/page/2/index.html","f3ba0ca409e338324ab4394b6c7d7548"],["/categories/学习/page/3/index.html","1b4c8f8fae08b613f5699b6f53433f0d"],["/categories/游戏评测/index.html","d71090072ede42421a9454b48d377e7b"],["/categories/生活趣闻/index.html","ca20e3cfc4ce130e87deb38529f31b80"],["/categories/随想/index.html","1d18747607918f7a8d79bc38c319c019"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/addcss.css","59cae1ddbe6925c34f846ffe12d19921"],["/css/background.css","32d5acccbb94f987faf37cfdc3fd06df"],["/css/calendar.css","0090a32d2a61d42c5bfed254bfba078c"],["/css/clock.css","65602c2385c7eab42ee3804cd6ee0a5a"],["/css/cursor.css","c1a23e168c5b794ff367eb0ae77eb26b"],["/css/danmu.css","2a5b914a9592bcd353425c6d5fa7af8e"],["/css/index.css","36eb36d0f5531dd7a8f4c8f925188615"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/loadingline.css","bc1ee020a6a11fea17b915b97e6978bf"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/html/calendar.html","bddcec1edba7f4c49fe5cd75f8cdf5b2"],["/html/shiyan.html","02ec927f8527696342f8af5601ce60ad"],["/html/shiyan2.html","5b5ca65b329cf7516e10a95176c9d996"],["/icon.png","8ec68de45d18642ba9baf2447e62f476"],["/images/AMJ1.png","d27a6725d1aaaf5324248da4312ab6c2"],["/images/AMJ2.png","00e22eba5901e5bd674e42228cd5bd26"],["/images/AMJ3.png","c8c9ea6348dfcad3a641899d5b587431"],["/images/FOTO1.jpg","4b6f100861908e2c7044cffbdb4a0c1a"],["/images/MVVM.png","ea5a002ee2f85c71a0db51d5adb5de19"],["/images/UT.jpg","367f4e432f9db55a92b2a290c4b0a476"],["/images/UX.png","a183974e958d41d1b6acec70bb7ea00a"],["/images/WindowsTerminal.png","8ac29cb56b8a1768cf7de071e9f1ae6f"],["/images/air-w.png","c1cc32f9d3e17551ca11a7d18a0b533a"],["/images/anzhuang.jpg","912b2489957f8344406edc5e5cebe5fa"],["/images/api-setting.png","2c0bb074390779721cba009e96c5417c"],["/images/apikey.png","1f31121b190eb1f990bcc3e27524bc03"],["/images/backpic1.jpg","86a6fa88167feb338fbf1a4e9057114b"],["/images/calendar.png","86319b08b93be7c8bc47cdba7a169563"],["/images/clock2.0.png","0a0f122c7a25262fc02ee99df0ef21eb"],["/images/example.png","aaac9983e5d59f919bf282dcff2edb3c"],["/images/foto17.png","28db4c6608ad1ee6b34238cafab25e5e"],["/images/foto2.jpg","be95b922512d004a61f83c97af3e2602"],["/images/foto2.png","0dc07d4e1b00526a273a89dc8b81548d"],["/images/foto3.jpg","551c0616c92c4ee7cc17dd458b3c46e9"],["/images/foto4.jpg","9d1d9fea759a41afc0061866e400339a"],["/images/foto5.jpg","984f618b15372f37d54f507e6f379f10"],["/images/foto9.jpg","b683fc0b998e80ff8f5a3e45e889807c"],["/images/girlpic.png","ff1e8427ed555af639e6d849f8f648f1"],["/images/girlpic1.png","698e5570e821c3cae643cc9777c2292e"],["/images/girlpic4.png","551882e4b9b6afb79000fd34c0dbf5e5"],["/images/headimage.png","332502f36a0297b30cb7969fe6de8451"],["/images/hexo.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/hexoWT.png","c027cc9f5665c7d7ba657e7a4bb40017"],["/images/his-json.png","7d8a71e38ab684107446e5c72c31854e"],["/images/history.gif","0459a3dcf2317253de0b34482880c63c"],["/images/idea.jpg","5eb08bf6c965588f03c8860f201cac45"],["/images/life-cycle.png","02f39ea5c041d45938fda4b50f234cb7"],["/images/life.jpg","74d2d9c5f48ec59e3badeec690941812"],["/images/listen.jpg","9d4f73cd5634f43deaed4f9aca03f9a3"],["/images/magnet.png","4899a924f3de0d19dbe0415128c07d65"],["/images/magnet1.png","8d010eb86ca943e036adaa7de57aee7d"],["/images/magnet2.png","293cb414a8ab93b43bde3bebf9cf0cfc"],["/images/magnet3.png","1923148630e2e094ff80bf35aa604c10"],["/images/magnet4.png","9bb4f963ac1c09f02d62525f513f492c"],["/images/meilu/1.jpg","cd67abcc3f543b5c66adc4f9d9c5c628"],["/images/meilu/10.jpg","ac9fb2711e477b5db1c3acb57e899045"],["/images/meilu/11.jpg","364caad6dfc356a3dc630fa067e48e88"],["/images/meilu/12.jpg","274767e5708f79934e5bdbf73eda8f0d"],["/images/meilu/13.jpg","dcab12b84454770b208913db63e825ac"],["/images/meilu/14.jpg","037cdd048284e621f27e17a2c59e8ea7"],["/images/meilu/2.jpg","f6cdb65ae3fad4523b32f5ee38696b60"],["/images/meilu/3.jpg","9e5df3612c2d93bf57313186c954aea5"],["/images/meilu/4.jpg","69ef2d6f4bcd79cf4b4e672b60c6751e"],["/images/meilu/5.jpg","ce81ca16def7613b7ebb368fb554f14f"],["/images/meilu/6.jpg","cafd5b62305f806754a75cc3af8c3b77"],["/images/meilu/7.jpg","b8ae865d386e1e713a6034da6b090c10"],["/images/meilu/8.jpg","afad7a7bf1066c817a8d2e7566bc780d"],["/images/meilu/9.jpg","72f9649f56b564eacf23ce3dacb88029"],["/images/metroui.jpg","5503bfffd450d9ab572b67ea00941571"],["/images/metroui/1.png","79a03b408c19c74eeaa8ff6e17a03f9d"],["/images/metroui/10.png","8309fed71a15c78f2dfa3af1ff75a5f3"],["/images/metroui/11.png","aaf1a007cbae12f93cc2688bace18d28"],["/images/metroui/12.png","0758ea282c3828c47e5c64520ff85783"],["/images/metroui/13.png","12ca7b511927cd4b26e97f3b20908a32"],["/images/metroui/14.png","f44ba7680f7b36df437e2ae2588d0565"],["/images/metroui/15.png","e8927c78b125b805af7aa86fee815ab6"],["/images/metroui/2.png","e604d3c662b996f06f22753ba9ab379f"],["/images/metroui/3.png","664e3b7490f2f95d5547b8ba79a65456"],["/images/metroui/4.png","c0f255344cafc303a1d9c7404da37149"],["/images/metroui/5.png","da2074cdb1298aca826abc1a5c441300"],["/images/metroui/6.png","efef2f087127614b4e03bcbe9a347018"],["/images/metroui/7.png","a4d34b1a2dbe3a58d3a92276880be039"],["/images/metroui/8.png","1d34a626bbaa898a60d4501936bcf962"],["/images/metroui/9.png","0663697c1667b377fe2623bd65e00b31"],["/images/metrouilogo.png","aea81b42d1c2c96440f74cf56ad82e2f"],["/images/nhkimage/2020.08.01.png","af4c55b2ae1d5ab2f56c75a87fcdfdb3"],["/images/nhkimage/2020.08.02.png","c355d41b90f5c65823f96c5f6868ce53"],["/images/nhkimage/2020.08.03.png","fddcedb40d7f28b2ccb90814351ad5c8"],["/images/nhkimage/2020.08.04.png","8b4518ec5a8513f442980ed7167136b1"],["/images/nhkimage/2020.08.05.png","590abfb19334b0c3cee5a005674f2253"],["/images/nhkimage/2020.08.06.png","d469e21100c42435e88f2bdf07f93da1"],["/images/nhkimage/2020.08.07.png","3ca9e2c8b8a09a38423d73cd36e8de9d"],["/images/nhkimage/2020.08.08.png","4420c2d899fe4eb90c48bae0da8418a2"],["/images/nhkimage/2020.08.09.png","df14be338f9c920818dd1daa6aa955ee"],["/images/nhkimage/2020.08.10.png","c4e2ed023cd3dbfd4986add35ca9357c"],["/images/nhkimage/2020.08.11.png","cf562339e57f673d394f3e6cdd1f60cb"],["/images/nhkimage/2020.08.12.png","81dfa179fea3052ddcf73912ea368f67"],["/images/nhkimage/2020.08.13.png","8cf26c2642e7a27cbd86fcbda8bae8d9"],["/images/nhkimage/2020.08.14.png","d88eeb678b3ed3651d597e61957e264a"],["/images/nhkimage/2020.08.15.png","b9879f193867edcffeefce62c9dc7153"],["/images/nhkimage/2020.08.16.png","46cb914aa1d556561897767ec9ff66a0"],["/images/nhkimage/2020.08.17.png","ea1af9645b5cc9cbaafe70a91dd15cca"],["/images/nhkimage/2020.08.18.png","e87e4de39a6f06cf4283a63af92dd8de"],["/images/nhkimage/2020.08.19.png","8001a951513b542a98ce1151be5bd87b"],["/images/nhkimage/2020.08.20.png","4bc8fafa3ecce30d340b1350715d78e3"],["/images/nhkimage/2020.08.21.png","07ad1337e127922abff27da6c672549b"],["/images/nhkimage/2020.08.22.png","b2b5d53ba46015f64048f9d803b12179"],["/images/nhkimage/2020.08.23.png","225af8c0cabe5218ec634d1b8815fd95"],["/images/nhkimage/2020.08.24.png","1d54a484a6e2395aabe9be005cd90361"],["/images/nhkimage/2020.08.25.png","8008ba169cfce0ef2041329cd29b6b77"],["/images/nhkimage/2020.08.26.png","72a2b8094003a54c97a34ea97cf21bc3"],["/images/nhkimage/2020.08.27.png","893407e604804d215c8fef8bcd5f2684"],["/images/nhkimage/2020.08.28.png","b542280b7341759890a99cbd44d822c5"],["/images/nhkimage/2020.08.29.png","620e2e7d4772e39615fd1a88cdf49717"],["/images/nhkimage/2020.08.30.png","f645d7ba2dcb506f9ec6fb9244425ad7"],["/images/nhkimage/2020.09.03.png","c5262f3aa87190e0273383ea1e445681"],["/images/nhkimage/2020.09.04.png","c07149c32aa41c03bc7dac82a713f6b2"],["/images/nhkimage/2020.09.05.png","4e43556e1cb3b7f4d75f0f6127616a54"],["/images/nhkimage/2020.09.06.png","1021d2ae04a7f109404f857a2a7629cf"],["/images/nhkimage/2020.09.07.png","db9827e9f0a4cf1401b559b4644a0204"],["/images/nhkimage/2020.09.08.png","efe1030b73dc1c01f169c3122a194426"],["/images/nhkimage/2020.09.09.png","f6ba3a1c6cdeff88404ebe2a646f2eb5"],["/images/nhkimage/2020.09.10.png","3471b05d02113517359a9e2167befcfa"],["/images/nhkimage/2020.09.11.png","921a541a8bffb1aa436df2eb6db7c99f"],["/images/nhkimage/2020.09.12.png","a51f8ebaddba69bb80f9259a30f17e65"],["/images/nhkimage/2020.09.13.png","0399889200493cd2154ffc407e2bc400"],["/images/nhkimage/2020.09.14.png","eaaf3da69a39ed316b7fc8c4d409bb0f"],["/images/nhkimage/2020.09.15.png","5774959ea4061c9298ea174f0862cc3a"],["/images/nhkimage/2020.09.16.png","0c5a00f74020740fda589c02e4b3f917"],["/images/nhkimage/2020.09.17.png","b5aef734e3a7db4862ca3fe4e6769dc2"],["/images/nhkimage/2020.09.24.png","5982a7b3843f4ae43b2b4bc4b0c577d6"],["/images/nhkimage/2020.09.26.jpg","c6415af781fbdd36fdb034f74646129b"],["/images/nhkimage/2020.09.27.png","27aa6f6a8d5534ccd99cff261dcd9eb6"],["/images/nhkimage/2020.09.28.png","0f4318d1ff17a33de364432a1c44b5ad"],["/images/nhkimage/2020.10.09.png","6408d9f7e66fdeba8b9207939a08cf8d"],["/images/notop.png","d25c272e5ce312a880e04ce8a0b27683"],["/images/pasted-0.png","552608d8f6e39369aa30c6e332a32826"],["/images/pasted-1.png","baafdacee93c99e99418aaedbf524fda"],["/images/pasted-10.jpg","395cff6f64ab5df19baa3572ac98e541"],["/images/pasted-11.jpg","56e5df07c96634638abf7995b25c81ab"],["/images/pasted-12.jpg","61b3f803b85ce3640d7a9ba7efb9da6b"],["/images/pasted-2.png","2f410e53c811f92a6135f48857776f5e"],["/images/pasted-3.jpg","bb5717e691e87355e7d63a5f3a87ae62"],["/images/pasted-4.jpg","10041d0e3567b24b81222ec5075d6492"],["/images/pasted-5.jpg","ac5047a4b48c6cdaee86fa1863e33904"],["/images/pasted-6.jpg","1556ae8d3ad5713d60237ee4d10e81f0"],["/images/pasted-7.jpg","913fde1686587646ddc663bd810cc81d"],["/images/pasted-8.jpg","fc83268081fb4b6b6ecb1ffa1ec5af7f"],["/images/pasted-9.jpg","25e0fa3496591501f5c29d0b802b77d2"],["/images/pet.png","2b8c121909497e57057478856fe48a94"],["/images/pet2.png","dfb1d6a17b527ccc0c600e6ad31f55e5"],["/images/ps1.png","0917ba91f21b6944dc08d35c41a326d2"],["/images/psb.jpg","6a27c58337875c776af0a7667598b401"],["/images/quse.png","7cd1ec12b804305430cb4cdc09c7a893"],["/images/rain.jpg","9c26acc44c692b6a63e134be07b07c18"],["/images/shezhi.png","281bf545f6a4024e2d0b7120bc398a21"],["/images/soul.jpg","d97b4099c0728ff6123d006fa62db86e"],["/images/study.jpg","a9b1cf95ee6bd9f3913e8ec6a6a6f44f"],["/images/tianqizhizi.jpg","dd48d78b4eeaaa52578352f9ef570b14"],["/images/vue.png","cf23526f451784ff137f161b8fe18d5a"],["/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/images/work.png","e521cf5b834292fde1c50e0a0f5802f9"],["/images/xiaoguoyanshi.png","994a3b710d36df0a4630cd9a768c7f7b"],["/images/xiaoguozhanshi-m.png","1fefca18214fc4889d1bb76b81887c9d"],["/images/zfe.one.png","b41f689341882058ffb28c4cee499bde"],["/images/幻想终结之日.png","0025c4d3973bdfedb80db3f78c59fa47"],["/images/时空战纪——游戏建议及意见①.jpg","1337457f14a8dffee66d94f8915b54ff"],["/images/简历.png","d70507ee4615c9e324578c0d777e6855"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","b2816f18531e7470afc88d9f63c2b52c"],["/img/favicon2.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","7ad0f7defc153b1dbf642e8f457bdc8b"],["/js/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/APlayer.min.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/airvisual.js","71cf86bfd452ca01d92438d8266416ee"],["/js/airvisualapi.js","6931bebe1696688d109963187fc2eace"],["/js/background.js","94c8410b174f58594cf81ec99054968b"],["/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/js/calendar.js","a58e02711cc6dec4dc04257e555b8923"],["/js/clock.js","ead1a80f7219c166e1180674b7d8c70b"],["/js/color.js","3730bb4f7b185e6f5130ac28bace968b"],["/js/danmu.js","6b6ae6b7f1b42dd4857541f43b2bb733"],["/js/echarts.js","dc1227b1eba1ba47fd185a387d0a7d37"],["/js/gitcalendar.js","fadfa8a42272cd322118653dca512a7a"],["/js/history.js","20459f7db325e597e64903f4c0d19306"],["/js/historyroll.js","a3e9ac376106816c50a61f9f4306d671"],["/js/jam.js","462c07d3b2e0f20394d994bbcfae37cb"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","790cd2f28594f8affbd4a450037c48ff"],["/js/rain.js","f656dc28e4ab5c3f8414d35f683278c1"],["/js/rainremove.js","ceacf82842b101f7e54a2aaf5f4bb9cb"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","6bebed368a1bbcb630dd146cefb103b7"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","64d1e1837ad1a585888f5d1e16c71f77"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","f91ea1a86a5c45e344a24fb437642f36"],["/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/link/index.html","f247cec2f6edf214d2809807888d078b"],["/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","23d306748a1ab857e29972d915ef2878"],["/page/10/index.html","62b330431b6246dd4469e39c75bde55d"],["/page/11/index.html","9b74ce12adeb5c6376f1ddf01cac9406"],["/page/2/index.html","0abf81bd8fce21488a12e3455b9632bf"],["/page/3/index.html","dfc64f1980ae0370615c6fa37b9710fa"],["/page/4/index.html","521313b8d52f5f8e2f6d2eaa0ffdfaa0"],["/page/5/index.html","4299e5b67eb808391d7f374ab7920a06"],["/page/6/index.html","c41e929b1b6d1d994d410798dc7cf1e0"],["/page/7/index.html","0969b2d95f4d12fb77ed9430d6d80589"],["/page/8/index.html","874d46bf15fe0bb89a5ebeb81a919bd8"],["/page/9/index.html","791ab81abea2869be82a84000c0e95bc"],["/research/index.html","39eb447a2e9adc900b53930dff85d17f"],["/sw-register.js","a7698481a18607b4c3b1e5359b885042"],["/tags/Butterfly主题/index.html","c25ecce4c246b9af6e9c9a813241f5b3"],["/tags/DIY/index.html","234993e51e5065d0090556ae9ba19bb5"],["/tags/DIY/page/2/index.html","b10e8d2349ca64df818dd800dabdbe43"],["/tags/ICT/index.html","095f2905c538bfaa66a0bed4f3f9c288"],["/tags/NHK听力练习/index.html","b21246331d779b36b0c5ed497bd86994"],["/tags/NHK听力练习/page/2/index.html","53432bcde97b9097ff94430268ce0a98"],["/tags/NHK听力练习/page/3/index.html","a17239e261830d9da3fb31b88d1822bd"],["/tags/NHK听力练习/page/4/index.html","0872cd3e9a708cba014a38dd0ec7cc48"],["/tags/NHK听力练习/page/5/index.html","64ca38baf0d9967061e07d48bca595a9"],["/tags/NHK听力练习/page/6/index.html","59f7f73f52fa9fd306591da4e97be847"],["/tags/metro-ui/index.html","aed726e913a7f257750af969535be093"],["/tags/vuejs/index.html","812e62935abe7411981aa2a3abb16375"],["/tags/お盆/index.html","0ed2ac56190c139a8efa7d678eb5adb6"],["/tags/世論調査/index.html","0878bf539df66ca8e736847a01bdeedb"],["/tags/作品集/index.html","a5740f111712d704af9e29227881e3a5"],["/tags/作品集/page/2/index.html","00b0de8ba0af362d590e1ad7cec2c3ab"],["/tags/农业/index.html","a38edbd24da73118872d8046a41e553d"],["/tags/历史/index.html","a5b7e481a74c78b8a7a1a9b3e64496f2"],["/tags/営業時間/index.html","d4f3b257fb2f7fc684fd230d5ef941ab"],["/tags/国外政事/index.html","ac1494bc984b1afc8cfb300f5585ccee"],["/tags/地震/index.html","74acb133ef45186a737858a7070a4daf"],["/tags/外国政事/index.html","86669eac79cd521e5d4a5a269376dc8b"],["/tags/天气/index.html","8213bcc67c22485e99f5a1c036a8ee77"],["/tags/天气/page/2/index.html","5310876c1d1ff232d2c97844e707a45d"],["/tags/奥运会/index.html","50440fb7de3dd534343bf20f44c8fb7f"],["/tags/学习/index.html","92f63ae42e4606b4befbe5653d4e6377"],["/tags/学习/page/2/index.html","c92b0b7be2baa136b3800c519f854395"],["/tags/学习/page/3/index.html","04e8cd737e0929d0dcc532754634f0ff"],["/tags/就业/index.html","f0457f782bbdae919b1d16f469b932c7"],["/tags/庐山/index.html","fecc42f61e2c79e7bb6ffae8d31c395d"],["/tags/座礁/index.html","ea22d462ef4af111a80059e5c82b14a5"],["/tags/政府/index.html","9bbdc454e349536bcfb7c6c6a15e8746"],["/tags/政治/index.html","078fe6e12bc02e3a17a49be76be3c1ab"],["/tags/教程/index.html","c94e7e82d664d94a18c14fa779df3e0c"],["/tags/日本教育/index.html","3d7f444919175dee0194c1ff51f3ed78"],["/tags/民生/index.html","3ddee984f9f007d514c87dc2d44fdda7"],["/tags/民生/page/2/index.html","0c756bec8f5ff6916fdd25f44be8b56f"],["/tags/游戏评测/index.html","0be5cc953b0517a96e732b684baa3bc3"],["/tags/游记/index.html","68d2a0742947b1d8f531e224c0f51642"],["/tags/生活趣闻/index.html","a7a3d4fba227ca28898070c596206e01"],["/tags/科技/index.html","38434e7804ae4b8d37780fd2033e4eec"],["/tags/经济/index.html","cb2d3486979d2b52f616e23d106b58d9"],["/tags/经济/page/2/index.html","ab8a05af25edf59ca14cf7fe139663a1"],["/tags/网络教学/index.html","f51ff4b7b819059601d8c83fe49dcc23"],["/tags/舆论/index.html","8f42aada9a1ddd4c70b1f8decde9ce4d"],["/tags/虚拟现实/index.html","2e12ddfc6ccee3ee6c1c7a864c6cc803"],["/tags/随想/index.html","04d8fa454ee5f73ae01c5978529d2735"],["/tags/障害者/index.html","2640048251d84c024e0b541ebe09c28a"]];
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
