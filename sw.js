/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2015/05/20/2015-05-20/index.html","b894b0355defde0a56846dece51c057c"],["/2015/06/16/2015-06-16/index.html","365ac6947035584772aa6134b04f7192"],["/2015/12/12/2015-12-12/index.html","235444527f95dbbe9e9766cdf1a8e608"],["/2016/06/08/2016-06-08/index.html","fac86600fc76b5d0eb42bbbd7888821a"],["/2016/12/18/2016-12-18/index.html","d29cef7cca213f3a1f0ada0b328e6274"],["/2017/02/17/2017-02-17/index.html","0a47a57719afdcae2b4bdac0a17fec01"],["/2017/03/17/2017-03-17/index.html","b8888958b1cc24c08630ac685966e49e"],["/2017/04/06/2017-04-06/index.html","74fd2558bf1cfc887b94d51ef6bcf911"],["/2017/05/17/2017-05-17/index.html","98757f90d89ecc59f0d1562017e73d95"],["/2017/08/15/2017-08-15/index.html","7e4bb2d6c5c912f1f8586509307e2834"],["/2017/09/16/2017-09-16-1/index.html","217ce3f4841ac9887fc155f53b6069e1"],["/2017/09/16/2017-09-16/index.html","6a7735ff2315a93f2dbe7718ca102b32"],["/2017/09/21/2017-09-21/index.html","74dd556e498e79e26816fea9f88f7612"],["/2017/09/23/2017-09-23/index.html","ff5a5532025ef0161e7cb4d70fb365e2"],["/2017/09/26/2017-09-26/index.html","e9c532cd2c4bf666f42bbc16b5bb6450"],["/2017/09/27/2017-09-27/index.html","3bb86edec1abd9fcb07a6beb9d455f66"],["/2017/10/04/2017-10-04/index.html","f13e16e0d548546bcb79567125970688"],["/2017/10/08/2017-10-08/index.html","9ced18dd281794e3a5d72ed7206e37f5"],["/2017/10/09/2017-10-09/index.html","243edd58ac8bb5060726c3aaba0eeec0"],["/2017/10/15/2017-10-15/index.html","567a2c49cbd2c242958e2801b2e6d6b1"],["/2017/10/19/2017-10-19/index.html","fed7f1b8d9d9ea0aee88d5ac0d59e15d"],["/2017/10/23/2017-10-23-2/index.html","830051f1f2f52cc54e785655fba59f96"],["/2017/10/23/2017-10-23/index.html","12aae105956ee71832b113b230046ff7"],["/2017/11/08/2017-11-08/index.html","275da619d66c3a134dac64edba26b878"],["/2017/11/12/2017-11-12/index.html","6974a091c058be13165e4c583f389a82"],["/2017/11/15/2017-11-15/index.html","c1b8370e007d46f0a6852304ac36a3d9"],["/2017/11/27/2017-11-27/index.html","ec596ef1672ddd4e5137bbc045379070"],["/2017/12/06/2017-12-06/index.html","f7c30ce17bcd65e949404cbc076114d9"],["/2018/02/12/2018-02-12/index.html","48b9f4980ddae61fcd40596f6218a433"],["/2018/03/26/2018-03-26/index.html","4bd8a31008e7bd29859f7473a0fb1a26"],["/2018/04/02/2018-04-02/index.html","6796bf0c60254509783fe406cb323c45"],["/2018/04/24/2018-04-24/index.html","f596515296f26b4b859dceeb74845ff1"],["/2018/05/18/2018-05-18/index.html","acf262631d89236233973c8e45977284"],["/2018/05/23/2018-05-23/index.html","1b58c14ca743ceda52dde9f9a4ea96b6"],["/2018/06/08/2018-06-08/index.html","bb64b0ecc43cdc2805a2c72c24c7f60e"],["/2018/07/01/2018-07-01/index.html","e6c462924d97f44e5cb36e872d471ff9"],["/2018/08/30/2018-08-30/index.html","6db080bc2a30b7344a136a56cb36ee00"],["/2020/07/20/2020-07-20/index.html","27319757d18a053ae8becba925e965fd"],["/2020/08/01/2020-08-01/index.html","972d68f08927384b1763b12f7a48700c"],["/2020/08/02/2020-08-02/index.html","fd97ff5f490beef833f97d759a25ed37"],["/2020/08/03/2020-08-03/index.html","1be6b7e0d13112becea6f946dfaa4bac"],["/2020/08/04/2020-08-04-1/index.html","86cc28608f40e597e473db6cab65af3c"],["/2020/08/04/2020-08-04-2/index.html","50f1ba0608fe25b21e7131c011baa93d"],["/2020/08/05/2020-08-05/index.html","3549bfcd023057bf6b6aaf0df5eaa5c1"],["/2020/08/06/2020-08-06/index.html","d898f920986f4af31f2ba8a0421c7bd6"],["/2020/08/07/2020-08-07/index.html","3ae95024137d0319e53c0256dc1bbd03"],["/2020/08/08/2020-08-08/index.html","d99494629b4d56739279c2d01b68a8ee"],["/2020/08/09/2020-08-09/index.html","b90d5cef038586fa4cca607c86efba40"],["/2020/08/10/2020-08-10/index.html","c5bf7575b4b85d9d6742ffee17ad7eb3"],["/2020/08/11/2020-08-11/index.html","19c5ed63a8f3d73ff784ebbae35b3e1c"],["/2020/08/12/2020-08-12/index.html","cd948065de502e7499a32cefcfbbac28"],["/2020/08/13/2020-08-13/index.html","c29d1a9ba9ed0b6e6c2934490de59b31"],["/2020/08/14/2020-08-14-1/index.html","805e5f5dd93464488c4b6b17e2302014"],["/2020/08/14/2020-08-14-2/index.html","c161d9d84a1e92bf715d7e21f8193766"],["/2020/08/15/2020-08-15/index.html","7393f80b451acf2e9e6a175f0dc93ac3"],["/2020/08/16/2020-08-16-1/index.html","02405b9a6db9508cec37bc84cfcb9dad"],["/2020/08/16/2020-08-16-2/index.html","e70e0ce4ea56cbd860489e46f59d7e4d"],["/2020/08/17/2020-08-17/index.html","33dffc901ff41f7ca02da2b07e4b297d"],["/2020/08/18/2020-08-18/index.html","fa635ac64e5bff570eb15b294c9436ff"],["/2020/08/19/2020-08-19-1/index.html","d89b1fa41526632c16d639161575554a"],["/2020/08/19/2020-08-19-2/index.html","db6754bac1d97e4710c824b65301ae2d"],["/2020/08/20/2020-08-20/index.html","7fe2c542d28a4af197fa84a8b9d93f3a"],["/2020/08/21/2020-08-21/index.html","c1ec06f07331891a60ea09dfb2da5145"],["/2020/08/22/2020-08-22/index.html","c620270e07b9792831f5bb8dd3fdd59f"],["/2020/08/23/2020-08-23-1/index.html","99b1d21b57560eec3671dd38123e8b2e"],["/2020/08/23/2020-08-23-2/index.html","eb0b21b2f76ee14652fd51f6db4d8383"],["/2020/08/24/2020-08-24-1/index.html","5f2ed5dc87cdb3345a876d5c8e075fd3"],["/2020/08/24/2020-08-24-2/index.html","f149ffebf0004cb4de960be607dda5fa"],["/2020/08/25/2020-08-25-1/index.html","ded0a4e1de20152f4f9d21ff817afe9f"],["/2020/08/25/2020-08-25-2/index.html","ff27c8db847feefa0638b826f9997f0a"],["/2020/08/26/2020-08-26/index.html","07c683ad3930d7ffed51be60af140733"],["/2020/08/27/2020-08-27/index.html","b1e6f815469c614d781b8f15c6630bd9"],["/2020/08/28/2020-08-28/index.html","37c346e1f3126a28e6de040d4688d787"],["/2020/08/29/2020-08-29/index.html","8d80e60e2d7a308137a4f3e3d5f19df8"],["/2020/08/30/2020-08-30/index.html","31d6ffd105b87dc0dd42447422b18686"],["/2020/08/31/2020-08-31-1/index.html","e489fd526e4f9e8f9cf29fa54179e772"],["/2020/08/31/2020-08-31-2/index.html","be2833ecca03c77d3c78c0cd53afe5fb"],["/2020/09/01/2020-09-01-1/index.html","15170257151d86312bcec5035e4aaf8e"],["/2020/09/01/2020-09-01-2/index.html","59e4e52a435a4d1156fdf80b245ddddc"],["/2020/09/02/2020-09-02-1/index.html","932f2d7e60a1cda5a7b0a87098bc884c"],["/2020/09/02/2020-09-02-2/index.html","73c77e9275587539c2de77e1d8cf2406"],["/2020/09/03/2020-09-03-1/index.html","5ddff24c28119782d3568f749bd126a7"],["/2020/09/03/2020-09-03-2/index.html","4a3fac87c97572ddbcf6914803525990"],["/2020/09/04/2020-09-04-1/index.html","66c7c6143a9fd216ef1e47b607ca7eaf"],["/2020/09/05/2020-09-05-1/index.html","f10816d23e644491b3d2f2b1c3496781"],["/2020/09/06/2020-09-06-1/index.html","cbe359c1f5cf65f6e316f7067fd9bb71"],["/2020/09/07/2020-09-07/index.html","f675ac763fbd2e793001b376d1793c45"],["/2020/09/08/2020-09-08-1/index.html","479553ea53089688a30cf85a3f87d4a3"],["/2020/09/08/2020-09-08-2/index.html","876b3ec59515b147da38de2c91d67f27"],["/2020/09/09/2020-09-09/index.html","07e41b63da07de9b4052532252a50206"],["/2020/09/10/2020-09-10/index.html","4166681312af4f3034fb4f3c78a64e28"],["/2020/09/11/2020-09-11/index.html","3febef44777b619630175def7da426f7"],["/2020/09/12/2020-09-12/index.html","f11d65e08e65321dcf01deaf74709559"],["/2020/09/13/2020-09-13/index.html","42dc877776013bbb273e4ad85c9389f3"],["/2020/09/14/2020-09-14/index.html","d651eb5aa540ab021c0b2e63c25c6037"],["/2020/09/15/2020-09-15/index.html","6b2f11377c766346530d1dd817de4910"],["/2020/09/16/2020-09-16/index.html","a9eaaaf187a176752a3dd14a2a10ba2e"],["/2020/09/17/2020-09-17/index.html","552c4b76a87f585d66620742e602218d"],["/2020/09/19/2020-09-19/index.html","354ad6182240e3ed16e5717be44a5110"],["/2020/09/23/2020-09-23/index.html","2e1aef074a098a0f7e32a1452a6e1171"],["/2020/09/24/2020-09-24/index.html","1c590872088a122a7b9d9d5e1d438133"],["/2020/09/26/2020-09-26/index.html","7a4800f1ba864edcd18482472f51fbd2"],["/2020/09/27/2020-09-27/index.html","f31a2e90586e329c45c61dc180ddc16b"],["/2020/09/28/2020-09-28-2/index.html","4e698e3b609e0cabdddb706ac4e5162d"],["/2020/09/28/2020-09-28/index.html","684597a2bba47fa165e12a8916a28891"],["/2020/09/29/2020-09-29/index.html","a464c012bcb998e61edfc601f9579068"],["/2020/10/03/2020-10-03/index.html","b9ec909277700a58ac911e5bfb595a09"],["/2020/10/04/2020-10-04/index.html","17e85a38ffeaaa213802e120ab5c9965"],["/2020/10/09/2020-10-09/index.html","0e48b789a4b6f5c3da8c038e534473ff"],["/2020/10/10/2020-10-10/index.html","c6529cc6177ecaf26b19776a70da09f4"],["/2020/10/11/2020-10-11/index.html","5e1ba10e5e0e9f7988944fc64970b9b4"],["/2020/10/12/2020-10-12/index.html","cdc122c68e8bc8abd69cb806f5e9009f"],["/2020/10/13/2020-10-13/index.html","6db8000ecd324a02b5a2409546a95d12"],["/2020/10/14/2020-10-14/index.html","25333484fe9c91990c0f4719f5099e6d"],["/2020/10/15/2020-10-16-2/index.html","79d6a133295836a3560f5a6983ba07bd"],["/2020/10/16/2020-10-16-1/index.html","42a61c670d1a8610761233fa304cfb67"],["/2020/10/18/2020-10-18/index.html","8508e20bdfca8c623b23639d44ac3e34"],["/2020/10/20/2020-10-20/index.html","3326e6015931273d389f8095a127968c"],["/2020/10/20/2020-10-21/index.html","24c0e1212abe19572c296c7406a7ad87"],["/2020/10/30/2020-10-26/index.html","858bdc256034f36a2237e8470bbcbdf3"],["/airplayervisual/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/airplayervisual/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/airplayervisual/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/airplayervisual/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/airplayervisual/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/airplayervisual/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/airplayervisual/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/airplayervisual/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/airplayervisual/index.html","680d63de4694da1ac9ffe11e25b3c175"],["/airplayervisual/js/APlayer.min.jam.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/airplayervisual/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/airplayervisual/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/airplayervisual/js/jamsetting.js","7927507e0080ddf55c6d8b5f526bd942"],["/airplayervisual/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/airplayervisual/js/visualchanger.js","008158789098b65c9de642c3a36b69a3"],["/airplayervisual/js/visualupper.js","0860af9159a82bae8cee547ddab46490"],["/archives/2015/05/index.html","87f7320210a2eca57d4485f63a8e421d"],["/archives/2015/06/index.html","0e7ed4a46e75523ba98db513df79d72a"],["/archives/2015/12/index.html","621c459da510ccc09c6c4dca407b6211"],["/archives/2015/index.html","691528714f6438d744e7dbec60397209"],["/archives/2016/06/index.html","61f72f99d058ed59a55b230613c45c23"],["/archives/2016/12/index.html","43824c0ff5843b2345c50d5eaf819acf"],["/archives/2016/index.html","3a64fc8449827cb010d0a0c161af456e"],["/archives/2017/02/index.html","ce85d5a19df41414a022aadc88cfdade"],["/archives/2017/03/index.html","6a153f30f92fe43cbfcd71274fcda1fa"],["/archives/2017/04/index.html","adb91db0691360b581b08675c76ff3a1"],["/archives/2017/05/index.html","006eb2d8e6f697447d0a88f4a628d027"],["/archives/2017/08/index.html","5efe131038bb2bf1f514ced6020c422d"],["/archives/2017/09/index.html","5fbc389d3291b4d61a606fd4e5c39b5d"],["/archives/2017/10/index.html","46310c7a74fd8c0426fe9e48b0aad3eb"],["/archives/2017/11/index.html","76f5f642ba35b1deb741a0905f4347d8"],["/archives/2017/12/index.html","d7fdbd294ce1163b4fd5e732686a232b"],["/archives/2017/index.html","2c57d96637c79df70a01c2dfff72dcde"],["/archives/2017/page/2/index.html","da6d3c33932675fbb99be50f41c44f1d"],["/archives/2018/02/index.html","3b3f1928841efdb50b3dbc05b478d3f3"],["/archives/2018/03/index.html","44a80bef6f62a2eea72353e664897bbe"],["/archives/2018/04/index.html","5d72b2dbff8785cb25feaebdbfd1a158"],["/archives/2018/05/index.html","d575456b9c51ab4595c49c87aa777330"],["/archives/2018/06/index.html","7b135fe2232cd9d3618fd6326748454c"],["/archives/2018/07/index.html","efe16a202e829bb10a83b2be2c17cae5"],["/archives/2018/08/index.html","6153252bbf7268254fb9b80a2888bb5b"],["/archives/2018/index.html","5b6d854fad94a474f5f1442a930ab256"],["/archives/2020/07/index.html","d056c0c5fe424542de3c89a97df379bf"],["/archives/2020/08/index.html","9dc5fbaf5c8e60a34f114f7ca75ac5b4"],["/archives/2020/08/page/2/index.html","ebd626ab4db91dbda1421f1afa633f9e"],["/archives/2020/09/index.html","86ff76204c7d51f378a2a70a7f091d34"],["/archives/2020/09/page/2/index.html","0b81fcfbc2577a8f1a4d7f87e39bfb1c"],["/archives/2020/10/index.html","38f5dee161f093017a866948642b7a66"],["/archives/2020/index.html","7c52844bdcbe8a9e44fd12dcd75ff037"],["/archives/2020/page/2/index.html","321b618e106427fbd3610020454da20c"],["/archives/2020/page/3/index.html","331af6f7fc16d17d3acee2887c67fff0"],["/archives/2020/page/4/index.html","4bd02239bbffad906099feb22ea610d7"],["/archives/2020/page/5/index.html","b1aac04a9bd46d9061efacc6389e4dbb"],["/archives/index.html","1d47c412b9971029ec43a26177691277"],["/archives/page/2/index.html","111aee0df5750250889363ee9f6a452f"],["/archives/page/3/index.html","90054409c0141d44a8ff4af49790b98b"],["/archives/page/4/index.html","5462e1b93e1f83fef4dfec60e48f5be6"],["/archives/page/5/index.html","56b7fd15ba7f26d002afeaaa6554923f"],["/archives/page/6/index.html","7fc9772cd50000a191a247f59002d8bf"],["/catalogtest/index.html","64e9b0daae784c921e5aa025fc94dece"],["/categories/NHK听力练习/index.html","c1c92c75494e6c17932c03ff4d1a9c02"],["/categories/NHK听力练习/page/2/index.html","3c82ceed0c11a3cadc3d94093859caa9"],["/categories/NHK听力练习/page/3/index.html","fd8e9a2bca67d1c77bffd3495c4f4c96"],["/categories/vue/index.html","a826be62f7a4443369d64dfb57ab26c3"],["/categories/作品集/index.html","b97ae3712f6710c2d1b0394ef84e8174"],["/categories/学习/index.html","fdb81adc7e207e69e84ce31feefc6e91"],["/categories/教程/index.html","74f519d7305a192c52b1598cf3d7732d"],["/categories/游戏评测/index.html","6c9cc4bc6eb28bb963305809f77dba7e"],["/categories/生活趣闻/index.html","419cebe32ab0d9526ce00de64e7efeea"],["/categories/随想/index.html","25e4a0061bc2b052b4feb3a0b2f2d79e"],["/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/css/addcss.css","d20fc732e0cc7996bd82c5170b7aaa86"],["/css/background.css","b4e0ca22f9f4e4fb063347fe34402145"],["/css/calendar.css","f1c56c432caf63a6f104d9105edc4cff"],["/css/cardlistpost.css","d110d491f5a8f21c553e8c0992430b03"],["/css/clock - 副本.css","65602c2385c7eab42ee3804cd6ee0a5a"],["/css/clock.css","333804904271eecabbcc519b4ec76178"],["/css/cursor.css","f514da9c81fb3fcb4f7e9038dfa30874"],["/css/danmu.css","2a5b914a9592bcd353425c6d5fa7af8e"],["/css/flow.css","c771dbc6f0b865b39a9806713dc1e284"],["/css/flow.min.css","7ce838f3563e00e15ca8bd55b6e00630"],["/css/font.css","e91880a0e442f996fdcca1e1eb0f9aab"],["/css/index.css","b9e9c9b772bb97010daa5359ddb1a597"],["/css/justaddmusic.css","bbce0b54669f42607b1fbee040f0da01"],["/css/loadingline.css","bc1ee020a6a11fea17b915b97e6978bf"],["/css/news.css","bc54bafe1b3285eb19c63bb5f0226971"],["/css/shuo.css","8db924024099e925c53d5b3dd22f83c6"],["/css/sortable.min.css","a4c7bddbdc32317dbb63a31244a82556"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/UnidreamLED.ttf","12fc160800285847a53d4592b2357737"],["/icon.png","8ec68de45d18642ba9baf2447e62f476"],["/images/201808011428/css/htmleaf-demo.css","a8256346bbe444fe604987f1fffbd31f"],["/images/201808011428/css/main.css","9afb83b1ea44d47f859a57395fe64737"],["/images/201808011428/dist/sortable.css","6b6b3d6f85a3497ee9e71b16b7223f60"],["/images/201808011428/dist/sortable.js","d199f4ab84617e894975f4757dbb3c17"],["/images/201808011428/dist/sortable.min.css","a4c7bddbdc32317dbb63a31244a82556"],["/images/201808011428/dist/sortable.min.js","0351fbccf2faed49062495990e32a14f"],["/images/201808011428/fonts/icomoon.eot","3891455c55b76ce7f7c86bfc33cd6493"],["/images/201808011428/fonts/icomoon.svg","bb97ed129aa43f69280d3085cd269102"],["/images/201808011428/fonts/icomoon.ttf","e46c36b6f94cf81311ffb383f6d32bec"],["/images/201808011428/fonts/icomoon.woff","d1117ddce10d8c7ca18ac089764da08d"],["/images/201808011428/images/item-1.jpg","c4b8c20bee5947eba1541a6a8a60a5ce"],["/images/201808011428/images/item-2.jpg","dfb3e34508b4060140150784cac9658c"],["/images/201808011428/images/item-3.jpg","4f40a1d501cbd4ebcd1f617078fd6a76"],["/images/201808011428/images/item-4.jpg","04a5d629dd413b49e960437cde7dcedd"],["/images/201808011428/images/item-5.jpg","370daf7210529430a4313b29bdad6269"],["/images/201808011428/images/item-6.jpg","93ce2054bde3d9463270d9f481012652"],["/images/201808011428/images/item-7.jpg","6a0345cbc8c6ac5e909f86e6faeeb0fd"],["/images/201808011428/images/item-8.jpg","4dc81e428730ba2b021dd4993385db4b"],["/images/201808011428/images/item-9.jpg","2aa5f8fc43fe5eca9bd8394a36f1b4d7"],["/images/201808011428/index.html","59d80c415ac27c88dce4e936baa6c2b5"],["/images/201808011428/readme.html","d7a6316c9002e35fd035fe4fdf62a02f"],["/images/201808011428/related/1.jpg","f4f33eb12a48c6bda46a1c371db24e5b"],["/images/201808011428/related/2.jpg","891bf31b875ab7588f138185019d5166"],["/images/233.jpg","13e6ddf019e5560a32f3ff82efd22344"],["/images/AMJ1.png","d27a6725d1aaaf5324248da4312ab6c2"],["/images/AMJ2.png","00e22eba5901e5bd674e42228cd5bd26"],["/images/AMJ3.png","c8c9ea6348dfcad3a641899d5b587431"],["/images/FOTO1.jpg","4b6f100861908e2c7044cffbdb4a0c1a"],["/images/Isolde-1.1.6/Isolde-1.1.6/LICENSE.html","3f9b9af2177a4cbd52c504bbb63d0328"],["/images/Isolde-1.1.6/Isolde-1.1.6/README.html","6244541862908a7f9626a0772f5173e0"],["/images/Isolde-1.1.6/Isolde-1.1.6/dist/isolde.min.css","e859dcc0f568c92bdc4b7be3f3b7d7fe"],["/images/Isolde-1.1.6/Isolde-1.1.6/dist/isolde.min.js","c5f5cc1595efdfde4d0b1b1415c6ae25"],["/images/Isolde-1.1.6/Isolde-1.1.6/docs/OPTIONS.html","0ed0d7cdbf2419913f3c7288ce12c027"],["/images/Isolde-1.1.6/Isolde-1.1.6/gulpfile.js","8d329f641050ed4e2a93a4cc914bba1d"],["/images/Isolde-1.1.6/Isolde-1.1.6/index.js","9fa8aa3efbd2e9eef8acc5f85752ad3e"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/css/main.css","8697f186bbc389515aa6eab3a5c9316e"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/css/sortable.css","04fca21af7d48dc17591894d17aa8358"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-1.jpg","8e757354b2917abe5dde088cbc82dae6"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-2.jpg","8a5fcc4cebc52caf89eb954285edae6d"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-3.jpg","caeae3d2265de3dad6d4b16dfda1fd05"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-4.jpg","1622226c2f5ef489c55f028caf26bafd"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-5.jpg","677d53cc36ccc311e11cd455fe222621"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-6.jpg","bdedef62cfdcdf9d273fc51a0ace2563"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-7.jpg","2faba84c41dc5f0670efd3cc0b139eb4"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-8.jpg","635c6292e642ab737eed6411c3295da6"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/images/item-9.jpg","e1c4d431a72b8bbf084451939ca86595"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/assets/isolde.js","1ddba0575c730fe2318c6450dfc4f403"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/index.html","bc1b690add6b7b924c0175be85721291"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/isolde.css","b8011c458b923321a755da760cbeb5f0"],["/images/Isolde-1.1.6/Isolde-1.1.6/src/isolde.js","1ddba0575c730fe2318c6450dfc4f403"],["/images/MVVM.png","ea5a002ee2f85c71a0db51d5adb5de19"],["/images/UT.jpg","367f4e432f9db55a92b2a290c4b0a476"],["/images/UX.png","a183974e958d41d1b6acec70bb7ea00a"],["/images/WindowsTerminal.png","8ac29cb56b8a1768cf7de071e9f1ae6f"],["/images/air-w.png","c1cc32f9d3e17551ca11a7d18a0b533a"],["/images/anzhuang.jpg","912b2489957f8344406edc5e5cebe5fa"],["/images/api-setting.png","2c0bb074390779721cba009e96c5417c"],["/images/apikey.png","1f31121b190eb1f990bcc3e27524bc03"],["/images/b0_img.png","43fcaa3f8b394ca5be957f4b860800db"],["/images/backpic1.jpg","86a6fa88167feb338fbf1a4e9057114b"],["/images/c0_img.png","34397085b4d3349034f9b167469ac626"],["/images/c10_img.png","7938c5b0dd789db4f262e5a618943a9b"],["/images/c1_img.png","95211a0ebf07befde1b11477c3a8185b"],["/images/c2_img.png","456ba51725d669fc4d005787753a6b08"],["/images/c3_img.png","a0aa7dcdd2ed5bccec52c16942036a3f"],["/images/c4_img.png","0869cebb60d00a78936b7498823a39de"],["/images/c5_img.png","533774e840ccb3ef13b46201a54be05d"],["/images/c6_img.png","db9eb681dea0b7911f0b2ba918d86c26"],["/images/c7_img.png","5b9c9e0331aca2a9d47a2730512f34f5"],["/images/c8_img.png","be9107995f185e3bbf7186c4dff69f42"],["/images/c9_img.png","642a2e762b74a28d2426af14f2b864c1"],["/images/calendar.png","86319b08b93be7c8bc47cdba7a169563"],["/images/cataimage/b1.jpg","e4795ce34b4d070d251c37a2ae5e37eb"],["/images/cataimage/b2.jpg","e1a7402c7d111b33d22c187a794e693d"],["/images/cataimage/b3.jpg","c091fe2a8024b2f010911e9af8091147"],["/images/cataimage/b4.jpg","1a2190b3e7ecb404767f029642adb637"],["/images/cataimage/b5.jpg","2683b29be7ea536b2d2c0b428ab87a80"],["/images/cataimage/b6.jpg","8eba752c28594ff5a253a01c0904a4a4"],["/images/cataimage/b7.jpg","9259255b1e1ec36bf92b4f34ad68db7f"],["/images/cataimage/b8.jpg","beaae9e5c735657f2e5bba9eb3deb754"],["/images/cataimage/b9.jpg","7ea8994ee380e84190422ac1b1d93ed8"],["/images/citie.jpg","adea8c4a6fca73e27f5e2aae864dd21f"],["/images/clock2.0.png","0a0f122c7a25262fc02ee99df0ef21eb"],["/images/clock3.0.png","8e04375c183c637b65fb50ed40f46466"],["/images/example.png","aaac9983e5d59f919bf282dcff2edb3c"],["/images/flow.png","adb9dac479e664c3e1b103a2c7fb9517"],["/images/foto17.png","28db4c6608ad1ee6b34238cafab25e5e"],["/images/foto2.jpg","be95b922512d004a61f83c97af3e2602"],["/images/foto2.png","0dc07d4e1b00526a273a89dc8b81548d"],["/images/foto3.jpg","551c0616c92c4ee7cc17dd458b3c46e9"],["/images/foto4.jpg","9d1d9fea759a41afc0061866e400339a"],["/images/foto5.jpg","984f618b15372f37d54f507e6f379f10"],["/images/foto9.jpg","b683fc0b998e80ff8f5a3e45e889807c"],["/images/girlpic.png","ff1e8427ed555af639e6d849f8f648f1"],["/images/girlpic1.png","698e5570e821c3cae643cc9777c2292e"],["/images/girlpic4.png","551882e4b9b6afb79000fd34c0dbf5e5"],["/images/headimage.png","332502f36a0297b30cb7969fe6de8451"],["/images/hexo.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/images/hexoWT.png","c027cc9f5665c7d7ba657e7a4bb40017"],["/images/his-json.png","7d8a71e38ab684107446e5c72c31854e"],["/images/history.gif","0459a3dcf2317253de0b34482880c63c"],["/images/homework1.png","e8d2f64d0785519ea7779016208a2900"],["/images/idea.jpg","5eb08bf6c965588f03c8860f201cac45"],["/images/jiaocheng.jpg","ad0b07db72a1eae964ab067511b756f3"],["/images/key1.png","f2a370e02ad6c5a101db20b47a9a0008"],["/images/key2.png","21dc40bbe0377cd9fe85a9cb431c18f0"],["/images/letter/a.jpg","0d4de9f533da8b2de81ccc509657f853"],["/images/letter/a.png","213b394b0800f642d758368779d79942"],["/images/letter/b.jpg","66fee2626ad0a71d42dc6f0d4b2c04a1"],["/images/letter/b.png","581ea16ed4c1d7bbc1c0dca3929051a9"],["/images/letter/c.jpg","121a016fcce1ed141082dc6254f5abbc"],["/images/letter/c.png","3d8cf0fa352d68dde80b3310bd702ac4"],["/images/letter/d.jpg","6e1db729489ebbd94496f2134b18d4ce"],["/images/letter/d.png","c48ca73078c850ff606cad10f11c1c56"],["/images/letter/e.jpg","ff503c208a88b211e598b92e6969d0e7"],["/images/letter/e.png","37fc8cdc838e64efe77305fa30581060"],["/images/letter/f.jpg","429cc37ac2269be8797c969b66a81339"],["/images/letter/f.png","12adae8b53d9e6048dbbeeb3f91cebee"],["/images/letter/g.jpg","0b8098e60deaf670dc1d9fba77714341"],["/images/letter/g.png","575f1073e0f689ae0d84803b8c979f21"],["/images/letter/h.jpg","9002009c053237f1ef6724e8be5f2b37"],["/images/letter/h.png","2e7173749a66cc1d8630e69261e56464"],["/images/letter/i.jpg","431837c21dc08954ee4acb2b0bd1d9e9"],["/images/letter/i.png","37a8a26bace6560ddb9c85a8605da81c"],["/images/letter/j.jpg","a83cac86235866d82053ea127940ccc2"],["/images/letter/j.png","8aad49c7f55d6d365cbbf080e7ecbc30"],["/images/letter/k.jpg","a7bd4a5ab89ecb4ad1d391c73a2c3034"],["/images/letter/k.png","2488883f77a6b77fafaaf02cbca9c319"],["/images/letter/l.jpg","b87d0637d8edd85bbc5a144d8d49faaf"],["/images/letter/l.png","41d97d26f91501634e73da0dbd2d9ad2"],["/images/letter/m.jpg","7a29bfd3c2da75f6a219daa19b4bf01a"],["/images/letter/m.png","bbce5ca54ef802aa23e5a406fb419e9c"],["/images/letter/o.jpg","9f29dbd5dd07fb04e610cd0a8fc83074"],["/images/letter/o.png","8242f141981f606ca698ed32df2a17c7"],["/images/letter/p.jpg","325a87a9fa352c7ed5eaa01f24018b63"],["/images/letter/p.png","8d457fc405de63b537e01226a73d3287"],["/images/letter/q.jpg","57921474cb1e9f4352df281856a10f5e"],["/images/letter/q.png","93255d49876fc4cd9260383bbe30910c"],["/images/letter/r.jpg","0b634e85fe24fea66c9fb3d1eaaf1296"],["/images/letter/r.png","ac4be3c684d8aaf7f875993dd12c4fc0"],["/images/letter/s.jpg","e803c253e88e6577721a63d6929a53fa"],["/images/letter/s.png","7d8e6a7981edc0045d41647b6547e755"],["/images/letter/t.jpg","ef4b9b12431116d53994185248d0e504"],["/images/letter/t.png","da9331bb93c0285bb9ae9b98350d4db7"],["/images/letter/u.jpg","4b5fbe5c3b7414ef99e46dab2b9da71a"],["/images/letter/u.png","693fb63a9f05fee9abf4f8d65380fb2f"],["/images/letter/v.jpg","85f1071ab973e79017eeaf5eb726d0f2"],["/images/letter/v.png","fdcd25e6d19bfa3fe7cf09a9047235f2"],["/images/letter/w.jpg","d39f91c9e1be9ab39ca46218fcc7faaa"],["/images/letter/w.png","2d79b92721fd2dfe4e19d8a57ccf9473"],["/images/letter/x.jpg","e2ce4f0631d5002a79a5930ccbdb8449"],["/images/letter/x.png","c0acbad3e4ddaf59a95ecb6d6509bcbe"],["/images/letter/y.jpg","b2e7b48748a70f0dc8c4445bf9069196"],["/images/letter/y.png","fc61ea05666257f2c50f08918970a753"],["/images/life-cycle.png","02f39ea5c041d45938fda4b50f234cb7"],["/images/life.jpg","74d2d9c5f48ec59e3badeec690941812"],["/images/listen.jpg","9d4f73cd5634f43deaed4f9aca03f9a3"],["/images/loading.gif","ffa0804a5d99e2d5b39e05cda6d6b28b"],["/images/magnet.png","4899a924f3de0d19dbe0415128c07d65"],["/images/magnet1.png","8d010eb86ca943e036adaa7de57aee7d"],["/images/magnet2.0.png","54fe576f174d2b6917fef89f40ac5975"],["/images/magnet2.png","293cb414a8ab93b43bde3bebf9cf0cfc"],["/images/magnet3.png","1923148630e2e094ff80bf35aa604c10"],["/images/magnet4.png","9bb4f963ac1c09f02d62525f513f492c"],["/images/meilu/1.jpg","cd67abcc3f543b5c66adc4f9d9c5c628"],["/images/meilu/10.jpg","ac9fb2711e477b5db1c3acb57e899045"],["/images/meilu/11.jpg","364caad6dfc356a3dc630fa067e48e88"],["/images/meilu/12.jpg","274767e5708f79934e5bdbf73eda8f0d"],["/images/meilu/13.jpg","dcab12b84454770b208913db63e825ac"],["/images/meilu/14.jpg","037cdd048284e621f27e17a2c59e8ea7"],["/images/meilu/2.jpg","f6cdb65ae3fad4523b32f5ee38696b60"],["/images/meilu/3.jpg","9e5df3612c2d93bf57313186c954aea5"],["/images/meilu/4.jpg","69ef2d6f4bcd79cf4b4e672b60c6751e"],["/images/meilu/5.jpg","ce81ca16def7613b7ebb368fb554f14f"],["/images/meilu/6.jpg","cafd5b62305f806754a75cc3af8c3b77"],["/images/meilu/7.jpg","b8ae865d386e1e713a6034da6b090c10"],["/images/meilu/8.jpg","afad7a7bf1066c817a8d2e7566bc780d"],["/images/meilu/9.jpg","72f9649f56b564eacf23ce3dacb88029"],["/images/metroui.jpg","5503bfffd450d9ab572b67ea00941571"],["/images/metroui/1.png","79a03b408c19c74eeaa8ff6e17a03f9d"],["/images/metroui/10.png","8309fed71a15c78f2dfa3af1ff75a5f3"],["/images/metroui/11.png","aaf1a007cbae12f93cc2688bace18d28"],["/images/metroui/12.png","0758ea282c3828c47e5c64520ff85783"],["/images/metroui/13.png","12ca7b511927cd4b26e97f3b20908a32"],["/images/metroui/14.png","f44ba7680f7b36df437e2ae2588d0565"],["/images/metroui/15.png","e8927c78b125b805af7aa86fee815ab6"],["/images/metroui/2.png","e604d3c662b996f06f22753ba9ab379f"],["/images/metroui/3.png","664e3b7490f2f95d5547b8ba79a65456"],["/images/metroui/4.png","c0f255344cafc303a1d9c7404da37149"],["/images/metroui/5.png","da2074cdb1298aca826abc1a5c441300"],["/images/metroui/6.png","efef2f087127614b4e03bcbe9a347018"],["/images/metroui/7.png","a4d34b1a2dbe3a58d3a92276880be039"],["/images/metroui/8.png","1d34a626bbaa898a60d4501936bcf962"],["/images/metroui/9.png","0663697c1667b377fe2623bd65e00b31"],["/images/metrouilogo.png","aea81b42d1c2c96440f74cf56ad82e2f"],["/images/nhkimage/2020.08.01.png","af4c55b2ae1d5ab2f56c75a87fcdfdb3"],["/images/nhkimage/2020.08.02.png","c355d41b90f5c65823f96c5f6868ce53"],["/images/nhkimage/2020.08.03.png","fddcedb40d7f28b2ccb90814351ad5c8"],["/images/nhkimage/2020.08.04.png","8b4518ec5a8513f442980ed7167136b1"],["/images/nhkimage/2020.08.05.png","590abfb19334b0c3cee5a005674f2253"],["/images/nhkimage/2020.08.06.png","d469e21100c42435e88f2bdf07f93da1"],["/images/nhkimage/2020.08.07.png","3ca9e2c8b8a09a38423d73cd36e8de9d"],["/images/nhkimage/2020.08.08.png","4420c2d899fe4eb90c48bae0da8418a2"],["/images/nhkimage/2020.08.09.png","df14be338f9c920818dd1daa6aa955ee"],["/images/nhkimage/2020.08.10.png","c4e2ed023cd3dbfd4986add35ca9357c"],["/images/nhkimage/2020.08.11.png","cf562339e57f673d394f3e6cdd1f60cb"],["/images/nhkimage/2020.08.12.png","81dfa179fea3052ddcf73912ea368f67"],["/images/nhkimage/2020.08.13.png","8cf26c2642e7a27cbd86fcbda8bae8d9"],["/images/nhkimage/2020.08.14.png","d88eeb678b3ed3651d597e61957e264a"],["/images/nhkimage/2020.08.15.png","b9879f193867edcffeefce62c9dc7153"],["/images/nhkimage/2020.08.16.png","46cb914aa1d556561897767ec9ff66a0"],["/images/nhkimage/2020.08.17.png","ea1af9645b5cc9cbaafe70a91dd15cca"],["/images/nhkimage/2020.08.18.png","e87e4de39a6f06cf4283a63af92dd8de"],["/images/nhkimage/2020.08.19.png","8001a951513b542a98ce1151be5bd87b"],["/images/nhkimage/2020.08.20.png","4bc8fafa3ecce30d340b1350715d78e3"],["/images/nhkimage/2020.08.21.png","07ad1337e127922abff27da6c672549b"],["/images/nhkimage/2020.08.22.png","b2b5d53ba46015f64048f9d803b12179"],["/images/nhkimage/2020.08.23.png","225af8c0cabe5218ec634d1b8815fd95"],["/images/nhkimage/2020.08.24.png","1d54a484a6e2395aabe9be005cd90361"],["/images/nhkimage/2020.08.25.png","8008ba169cfce0ef2041329cd29b6b77"],["/images/nhkimage/2020.08.26.png","72a2b8094003a54c97a34ea97cf21bc3"],["/images/nhkimage/2020.08.27.png","893407e604804d215c8fef8bcd5f2684"],["/images/nhkimage/2020.08.28.png","b542280b7341759890a99cbd44d822c5"],["/images/nhkimage/2020.08.29.png","620e2e7d4772e39615fd1a88cdf49717"],["/images/nhkimage/2020.08.30.png","f645d7ba2dcb506f9ec6fb9244425ad7"],["/images/nhkimage/2020.09.03.png","c5262f3aa87190e0273383ea1e445681"],["/images/nhkimage/2020.09.04.png","c07149c32aa41c03bc7dac82a713f6b2"],["/images/nhkimage/2020.09.05.png","4e43556e1cb3b7f4d75f0f6127616a54"],["/images/nhkimage/2020.09.06.png","1021d2ae04a7f109404f857a2a7629cf"],["/images/nhkimage/2020.09.07.png","db9827e9f0a4cf1401b559b4644a0204"],["/images/nhkimage/2020.09.08.png","efe1030b73dc1c01f169c3122a194426"],["/images/nhkimage/2020.09.09.png","f6ba3a1c6cdeff88404ebe2a646f2eb5"],["/images/nhkimage/2020.09.10.png","3471b05d02113517359a9e2167befcfa"],["/images/nhkimage/2020.09.11.png","921a541a8bffb1aa436df2eb6db7c99f"],["/images/nhkimage/2020.09.12.png","a51f8ebaddba69bb80f9259a30f17e65"],["/images/nhkimage/2020.09.13.png","0399889200493cd2154ffc407e2bc400"],["/images/nhkimage/2020.09.14.png","eaaf3da69a39ed316b7fc8c4d409bb0f"],["/images/nhkimage/2020.09.15.png","5774959ea4061c9298ea174f0862cc3a"],["/images/nhkimage/2020.09.16.png","0c5a00f74020740fda589c02e4b3f917"],["/images/nhkimage/2020.09.17.png","b5aef734e3a7db4862ca3fe4e6769dc2"],["/images/nhkimage/2020.09.24.png","5982a7b3843f4ae43b2b4bc4b0c577d6"],["/images/nhkimage/2020.09.26.jpg","c6415af781fbdd36fdb034f74646129b"],["/images/nhkimage/2020.09.27.png","27aa6f6a8d5534ccd99cff261dcd9eb6"],["/images/nhkimage/2020.09.28.png","0f4318d1ff17a33de364432a1c44b5ad"],["/images/nhkimage/2020.10.09.png","6408d9f7e66fdeba8b9207939a08cf8d"],["/images/night.jpg","7c57432e644d24d5738a56459bea0e7e"],["/images/notop.png","d25c272e5ce312a880e04ce8a0b27683"],["/images/pasted-0.png","552608d8f6e39369aa30c6e332a32826"],["/images/pasted-1.png","baafdacee93c99e99418aaedbf524fda"],["/images/pasted-10.jpg","395cff6f64ab5df19baa3572ac98e541"],["/images/pasted-11.jpg","56e5df07c96634638abf7995b25c81ab"],["/images/pasted-12.jpg","61b3f803b85ce3640d7a9ba7efb9da6b"],["/images/pasted-2.png","2f410e53c811f92a6135f48857776f5e"],["/images/pasted-3.jpg","bb5717e691e87355e7d63a5f3a87ae62"],["/images/pasted-4.jpg","10041d0e3567b24b81222ec5075d6492"],["/images/pasted-5.jpg","ac5047a4b48c6cdaee86fa1863e33904"],["/images/pasted-6.jpg","1556ae8d3ad5713d60237ee4d10e81f0"],["/images/pasted-7.jpg","913fde1686587646ddc663bd810cc81d"],["/images/pasted-8.jpg","fc83268081fb4b6b6ecb1ffa1ec5af7f"],["/images/pasted-9.jpg","25e0fa3496591501f5c29d0b802b77d2"],["/images/pet.png","2b8c121909497e57057478856fe48a94"],["/images/pet2.png","dfb1d6a17b527ccc0c600e6ad31f55e5"],["/images/pokemon-js-master/pokemon-js-master/README.html","b6c71cd0d5b2d047503b7b77f26685aa"],["/images/pokemon-js-master/pokemon-js-master/fonts/pokemon-italic.woff","78e86827d84b43c015a2f4c2c6a373dc"],["/images/pokemon-js-master/pokemon-js-master/fonts/pokemon-italic.woff2","6eed2c3b876039e9332617cf11051bde"],["/images/pokemon-js-master/pokemon-js-master/fonts/pokemon-normal.woff","09442a9708ccafa61a894d703b10a45b"],["/images/pokemon-js-master/pokemon-js-master/fonts/pokemon-normal.woff2","f82c92d44c94dcdacf907a1be4fac138"],["/images/pokemon-js-master/pokemon-js-master/img/ball_empty.svg","71b5bd4f59def835f94989825d23a737"],["/images/pokemon-js-master/pokemon-js-master/img/ball_full.svg","7e11059b84cef189cbae0694b31e3161"],["/images/pokemon-js-master/pokemon-js-master/img/blue_balls.svg","86a4983e08483856c2b69ba22b3b6605"],["/images/pokemon-js-master/pokemon-js-master/img/blue_front.svg","67d4551115bd9619421c8b279a02da21"],["/images/pokemon-js-master/pokemon-js-master/img/blue_line.svg","99e3256fe421cea565eb6c8e238b4e1b"],["/images/pokemon-js-master/pokemon-js-master/img/eevee_back.svg","be41cc88ba29dffed133934f3fd81092"],["/images/pokemon-js-master/pokemon-js-master/img/eevee_front.svg","67e75860167c118c80b43e9bc77f8dd1"],["/images/pokemon-js-master/pokemon-js-master/img/frame.svg","9ba744fd242d76220503200dc263d225"],["/images/pokemon-js-master/pokemon-js-master/img/hp.svg","1b9572b00909d59dade3c5d9c7484a94"],["/images/pokemon-js-master/pokemon-js-master/img/level.svg","ce8d20ff7ae3e66decac50b78ca3b86b"],["/images/pokemon-js-master/pokemon-js-master/img/marker.svg","3b8296fb02592d99e7a7aa29b1d41742"],["/images/pokemon-js-master/pokemon-js-master/img/pikachu_back.svg","41f62334dab4ff5ad455bf3792243611"],["/images/pokemon-js-master/pokemon-js-master/img/pikachu_front.svg","496206572029bcfaebfaed794ed1d015"],["/images/pokemon-js-master/pokemon-js-master/img/pokemon.svg","f015c9582ea62070300062fe2022dd37"],["/images/pokemon-js-master/pokemon-js-master/img/red_back.svg","1e4dc80c13eac754369017dbd19c9086"],["/images/pokemon-js-master/pokemon-js-master/img/red_balls.svg","35d2d97a11a79232ddeb90e052af95cc"],["/images/pokemon-js-master/pokemon-js-master/img/red_front.svg","b4fc7ab1d0a1254c453ee3ebc28db79f"],["/images/pokemon-js-master/pokemon-js-master/img/red_line.svg","fd9e3b97a6264fc5e5f398ce854d24b7"],["/images/pokemon-js-master/pokemon-js-master/index.html","791ac75a9c740918a3071f3db9333e07"],["/images/pokemon-js-master/pokemon-js-master/jquery.js","ac5017a6c6a77a3db6f989b281084b6f"],["/images/pokemon-js-master/pokemon-js-master/main.css","3e4465c57f14ab0e02b5b2a805372c0c"],["/images/pokemon-js-master/pokemon-js-master/pokemon-min.js","26e1d8483c8d86ab39054a609106aad0"],["/images/pokemon-js-master/pokemon-js-master/src/pokemon.js","f43de536cebe95ac1b19b905cbc9d889"],["/images/pokemon-js-master/pokemon-js-master/src/promo.png","abf2d1d338c0a9080c1a9eab7b35e6e0"],["/images/pokemon-js-master/pokemon-js-master/src/screenshot_1998.png","046079a29e3df9b95bde3c3c58647d43"],["/images/pokemon-js-master/pokemon-js-master/src/screenshot_2014.png","828e18e5add8f29486ba1945de2bfb7f"],["/images/pokemon-js-master/pokemon-js-master/src/screenshot_2016.png","69dbbe3b5b622cdce0fa82aca162129a"],["/images/ps1.png","0917ba91f21b6944dc08d35c41a326d2"],["/images/psb.jpg","6a27c58337875c776af0a7667598b401"],["/images/pubu.jpg","c5f6319fe03fb1fa52bb67097b1f22f7"],["/images/quse.png","7cd1ec12b804305430cb4cdc09c7a893"],["/images/rain.jpg","9c26acc44c692b6a63e134be07b07c18"],["/images/rainsmall.jpg","e8c91c40bef224fc5a3942bd0d007b84"],["/images/shezhi.png","281bf545f6a4024e2d0b7120bc398a21"],["/images/shuo.png","9cce9df6e32e00e49471b9a9f089f6aa"],["/images/shuoshuo.jpg","c5752c104cddc0884d3f50b4dca01322"],["/images/soul.jpg","d97b4099c0728ff6123d006fa62db86e"],["/images/study.jpg","a9b1cf95ee6bd9f3913e8ec6a6a6f44f"],["/images/tianqizhizi.jpg","dd48d78b4eeaaa52578352f9ef570b14"],["/images/time.jpg","b8513da2d044befd353231d3e51db22e"],["/images/vue.png","0d2b5680bcb76df1333b85fad58634a7"],["/images/vue1.jpg","8cbf18302c6fa72e2a40d0cca0832213"],["/images/weather/01d.png","e7a0f046514635966b138259b6f773bf"],["/images/weather/01n.png","ea3930e514864b8959ce35bc80386eac"],["/images/weather/02d.png","479379af39be876d38a92ec4c141aa00"],["/images/weather/02n.png","0c02f1f3c939ee6d1692e6afa6fb742a"],["/images/weather/03d.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/03n.png","525bb6dad831d3f5601ecfc4377ff596"],["/images/weather/04d.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/04n.png","1cd26dc9941a0b313fec8e13506a4c0e"],["/images/weather/09d.png","512894b4a127a42e060e237674b8d145"],["/images/weather/09n.png","512894b4a127a42e060e237674b8d145"],["/images/weather/10d.png","9dd05ae932d8cbfbdcbe73322db73dda"],["/images/weather/10n.png","213320297ea69509d8ccbccabb4abf83"],["/images/weather/11d.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/11n.png","56bedfc8db64605e1256d67b7734d68e"],["/images/weather/13d.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/13n.png","e03e5b7b07b3e32a78991ad6761bf4fe"],["/images/weather/50d.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/50n.png","736583b33f6f76b004775c4ab0754ef4"],["/images/weather/hu.png","d7d65e0002e3fef96a1504881c377a25"],["/images/work.png","e521cf5b834292fde1c50e0a0f5802f9"],["/images/xiaoguoyanshi.png","994a3b710d36df0a4630cd9a768c7f7b"],["/images/xiaoguozhanshi-m.png","1fefca18214fc4889d1bb76b81887c9d"],["/images/yao1.jpg","9dfddaf8c121fc8db788a87d133d6376"],["/images/zfe.one.png","b41f689341882058ffb28c4cee499bde"],["/images/下载.jpg","79c7247da282569a05bdd46aa43b93b0"],["/images/幻想终结之日.png","0025c4d3973bdfedb80db3f78c59fa47"],["/images/时空战纪——游戏建议及意见①.jpg","1337457f14a8dffee66d94f8915b54ff"],["/images/简历.png","d70507ee4615c9e324578c0d777e6855"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","85446aebd02996cfbc85135a406fdb57"],["/js/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/js/APlayer.min.js","f318fa1b12f6d5f475a863ee2bb728ee"],["/js/JustAddMusic.js","9b9ebccf0d2ca0c343e8d65684ecfbbb"],["/js/Meting.min.js","f3a86e82ec5d2eb807eab601c30681ac"],["/js/airvisual.js","71cf86bfd452ca01d92438d8266416ee"],["/js/airvisualapi.js","6931bebe1696688d109963187fc2eace"],["/js/artitalkkey.js","ad2c74320c63125a36319659657d2886"],["/js/background.js","94c8410b174f58594cf81ec99054968b"],["/js/bootstrap.js","fb81549ee2896513a1ed5714b1b1a0f0"],["/js/calendar.js","a58e02711cc6dec4dc04257e555b8923"],["/js/catalogMagnet.js","0387c6ad152e7a6076cceffc7420be77"],["/js/clock - 副本.js","405186e7a9d73221d2d50c0dea2852d0"],["/js/clock.js","2fdceb94cc57b551cd245b0001927b66"],["/js/color.js","3730bb4f7b185e6f5130ac28bace968b"],["/js/dan.js","6b6ae6b7f1b42dd4857541f43b2bb733"],["/js/echarts.js","dc1227b1eba1ba47fd185a387d0a7d37"],["/js/gitcalendar.js","fadfa8a42272cd322118653dca512a7a"],["/js/history.js","20459f7db325e597e64903f4c0d19306"],["/js/historyroll.js","a3e9ac376106816c50a61f9f4306d671"],["/js/jam.js","462c07d3b2e0f20394d994bbcfae37cb"],["/js/jquary.js","12b69d0ae6c6f0c42942ae6da2896e84"],["/js/main.js","f5b2bd10be1e09516c539afa2197a8d7"],["/js/news.js","01855302733b13c8ee4e26f9a23e52db"],["/js/rain.js","f656dc28e4ab5c3f8414d35f683278c1"],["/js/rainremove.js","ceacf82842b101f7e54a2aaf5f4bb9cb"],["/js/search/algolia.js","e6a9c3f8fa43a7d3421169ea96eef44e"],["/js/search/local-search.js","86e7fcbc5aa273e6c3d2c94b0054809b"],["/js/shuo.js","1076b1ef51358cc11b6ff3bab25e15d8"],["/js/sortable.min.js","0351fbccf2faed49062495990e32a14f"],["/js/tw_cn.js","bd869d5fd54e2fe1f1eeee7c46fa46bc"],["/js/utils.js","5720a78dca20fab16f21914ae3ac0757"],["/js/vue.min.js","ae2fca1cfa0e31377819b1b0ffef704c"],["/js/vuegitcalendar.js","5e742fb8aa6cfc71f0386e4aee9c93eb"],["/link/index.html","fe5ad04a6e4c9fc5135b6121c40e0042"],["/live2dw/assets/moc/unitychan.2048/texture_00.png","d2016f474e091b863d35dac6f12bd801"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/music/index.html","ee660e453689efa4feb0115f2668ee65"],["/page/2/index.html","219df0381fead1353a084a972d22b7dd"],["/page/3/index.html","ffc125f1fc666cef994918ffd00a7998"],["/page/4/index.html","278118d1887260686d1924db1f242d7c"],["/page/5/index.html","b6975adcb0a08905840d2b938a241c21"],["/page/6/index.html","bd66f38c6a1dd1b774b499c14603a68c"],["/research/index.html","be16e7918e4629114dd6c9db2c56fd89"],["/sw-register.js","3804bb611aae6275c42ccefff5918675"],["/tags/Butterfly主题/index.html","a78665eadac622331dff1fa2a8422907"],["/tags/DIY/index.html","de142d8ce770f9f2527ad0d60c2635d5"],["/tags/ICT/index.html","9a26f341e10b58d62ead99069ab3a0cd"],["/tags/NHK听力练习/index.html","e3a942cf8f6fe03ae133674d4ecd6364"],["/tags/NHK听力练习/page/2/index.html","3bd5a1189178b911c8b49efff5da5425"],["/tags/NHK听力练习/page/3/index.html","4e3f4b73f679ba57c7d6bb5be7572e4b"],["/tags/metro-ui/index.html","5d0a531de822f78117926520dbaa8da7"],["/tags/vuejs/index.html","d1ad5614c44b7b44049577bc6f2dbd78"],["/tags/お盆/index.html","88dd5dc5a421c6ee98e8c6e7dc5dde14"],["/tags/世論調査/index.html","4e8896278cb4ecd4955d5ef7d3026826"],["/tags/作品集/index.html","08e93c62ce04c0a7912fd3ab1c42ab95"],["/tags/农业/index.html","03beed09d32ddf0ce3f024a8d045ab05"],["/tags/历史/index.html","2d9c2d8c3bb0239a8aef115243700025"],["/tags/営業時間/index.html","79362ad32d3d4753c69dc19dbdaabcaa"],["/tags/国外政事/index.html","9aa79867554e7bf15aea569aaa29bf92"],["/tags/地震/index.html","813ff6ab74112c11fc89d6e38c52486d"],["/tags/外国政事/index.html","d043d12095d4be27021afd118a577590"],["/tags/天气/index.html","6f88ec2c96b417ab8c4462414e5a41d2"],["/tags/奥运会/index.html","c0b876a0de728897c02b612dd620907d"],["/tags/学习/index.html","61e6ca790f33696864de72e3354be673"],["/tags/学习/page/2/index.html","e78fcbfeaaaa550ef8c0e90243ca9dc2"],["/tags/就业/index.html","abe08bd69c8d419e71916dabefa8e164"],["/tags/庐山/index.html","1c5d984bd57fc9bd905389ea94d506fa"],["/tags/座礁/index.html","4194a63c3a3706fb19de7a74bb4c03de"],["/tags/政府/index.html","51286c7becbd8b038dffe043f6a4a5a7"],["/tags/政治/index.html","94d11b406c04b77e5e850259fa88e065"],["/tags/教程/index.html","0a4ee3906c989ecfd59d01b6f436ab82"],["/tags/日本教育/index.html","89c8d62d83982c7ec70b46bceb71bfa1"],["/tags/民生/index.html","0afbf3f72a0a6965bad33fa59bd4d68b"],["/tags/游戏评测/index.html","57bd85600e7762fe428c387e74d0ea88"],["/tags/游记/index.html","c5dfcf3b3b66d9ce329ad4af2afa8fbb"],["/tags/生活趣闻/index.html","aa14d5aea965944a86aaa3f2234c07ae"],["/tags/科技/index.html","e00ee86cb593cc2ac35b5e27541d6a0b"],["/tags/经济/index.html","6157e118b6710812596a13b232ecf14d"],["/tags/网络教学/index.html","24ce2977c2293d00b86112c2f8266ebf"],["/tags/舆论/index.html","476bf6b608639950ed83d70eb4c55de3"],["/tags/虚拟现实/index.html","f7875d5da45612c453a9995164b01515"],["/tags/随想/index.html","6a8a09e110003aed3ce41989848ffa73"],["/tags/障害者/index.html","25be08af49a59b3fe57e07807c9b4f1a"]];
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
