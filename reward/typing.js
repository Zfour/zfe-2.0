var str="<h2>小冰想说：</h2><p>你的每一个举动都会改变这个世界</p>\n<p>对于我而言，我从没想过我能改变世界</p>\n<p>我只不过是在追逐梦想的道路上前行</p>\n<p>将旅途的喜悦通过文字与你分享...</p><br>\n<p>我从来没有想过，这份喜悦也能拥有价值</p>\n<p>自己微不足道的光热，也能带来感动</p><br>\n<p>往往文字难以承载的感情</p>\n<p>是通过打赏这种形式展现的</p>\n<p>对所有人来说</p>\n<p>值得，也能获得快乐</p><br>\n<p>因此</p>\n<p>如果大家想以打赏的形式来感谢我</p>\n<p>可以在这里实现</p>\n<p>我会非常感谢</p>\n<p>我会在你的鼓励下努力前行</p>",i=0;function typing(){var p=document.getElementById("typing");i<=str.length?(p.innerHTML=str.slice(0,i++)+"_",setTimeout("typing()",100)):p.innerHTML=str}typing();