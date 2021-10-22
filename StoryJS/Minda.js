var Minda = `<flag:2>

  <item:4>
  [0]骨のおもちゃ#さくま君の家の飼っている犬の骨のおもちゃ。たくさんの噛み跡がある。
  [1]ノート：黒縄町について#黒縄町は、レーナス県の<r>煙石#えんせき</r>半島に位置する港町です。<br>町のはずれには、「黒縄さま」と呼ばれる不思議な像がたっています。<br>昔、この町が領土争いに巻き込まれて襲撃された際、「黒縄さま」という英雄が、不思議な力で敵兵を追い払ったと言われています。しかし、この像を誰がいつたてたのかは不思議なことに分かっていません。
  [2]ノート：黒縄町の地図#<img src='Assist/minda_assist/kuronawa.png' style='width:330px;height:220px'/>
  [3]リードミー#1.重要な注意ーーーーーーーーーー<br>省略。注意事項は後述。<br><br>2.あらすじーーーーーーーーーーー<br>ミンダとさくまが飼っていた犬を探す。<br><br>3.登場人物ーーーーーーーーーーー<br>・ミンダ<br>好奇心旺盛で活発な少女。<br><br>・池家さくま<br>ミンダの友人。<br><br>・池家ひたみ<br>二本老松番の番頭。さくまの父。<br><br>・黒傘花陽（黒傘さん）<br>池家ひたみの友人。二本老松番に来て、運営を手伝っている。<br><br>4.注意事項ーーーーーーーーーーー<br>このページデータ内のストーリーはフィクションであり、登場する人物名、団体名等は実在のものではありません。<br>また、書かれている説明が、実際と異なる場合があります。<br>書かれている内容は作者の意見を代弁するものではなく、特定の意見を主張するものでもありません。<br><br>1版2版<br>2021.4.　竹馬浬
  </item>

  <map:29>
  [0]
  n:ガイダンス
  e:タノ大陸北岸の、小さな町、<r>黒縄#くろなわ</r>町。<br>ここに、ミンダという、好奇心旺盛で活発な少女が住んでいる。<br>ある日、友達のさくま君の飼い犬がいなくなってしまったという。<br>１週間たっても帰ってこない。きっとどこかでお腹をすかしているのではないか。<br>ミンダとさくまは迷い犬を探すことにした。<br><br>番号:20_10.2.L.M1.ミ
  s:次へ#mov(27)

  [27]
  n:ミンダの家の前
  e:ミンダの家は町の端にある港の近くにある。<br>今日は天気が良い。<br>ミンダとさくまは家の前で待ち合わせた。<br>さっそく町の中を探してみよう。
  s:町の中心へ#mov(1)

  [1]
  n:黒縄港
  e:静かな波が寄せる、小さな港。<br>桟橋にはいくつかの小舟がつけられている。<br>ミンダの父と母が釣ってきた魚をさばいている。<br>犬のことを訪ねたが、見ていないという。
  s:町の中心へ#mov(2)

  [2]
  n:<r>魚通#さかなどお</r>り
  e:このあたりの家は、昔から漁業で生計をたてていて、それにちなんで魚通りとよばれている。
  s:知り合いの魚屋さんに行く#mov(3)
  s:町の中心へ#mov(4)

  [3]
  n:バルルの魚屋
  e:魚屋の中にはたくさんの新鮮そうな魚や干物が陳列されていて、壁には大小様々な魚拓も飾られていた。<br><br>バルルさんはいろいろな漁場を回っている漁師で、たまに怪しい剥製とかの珍品を見せてくれる。<br>でも、バルルさんは犬のことを知らないそうだった。残念。
  s:店を出る#mov(2)

  [4]
  n:黒縄町の中央広場
  e:十字路になっている小さな広場。<br>まわりには<r>管轄署#かんかつしょ</r>や学校が建てられていて、魚通り、<r>堂前#どうまえ</r>通りが通じている。<br>町を囲む石壁と門があり、門の向こう側には山につながる県道がある。
  s:管轄署へ#mov(5)
  s:学校へ#mov(6)
  s:堂前通りへ#mov(7)
  s:県道へ#mov(10)

  [5]
  n:管轄署ー黒縄支署
  e:小さな建物のなかに、何人か署員の人が仕事をしている。<br>壁に、この町の歴史について書かれた掲示がある。<br>署員の人に犬の話をしてみたが、見つかったという話はないらしい。<br>残念。
  s:掲示を見る#mov(26);geti(1);geti(2);
  s:町の中心へ#mov(4)

  [6]
  n:学校
  e:小さな学校。今日は休みなのもあって、静かだ。<br>古い木造の校舎には誰もいない。<br>校庭をひとまわりしてみたが、犬はいない。
  s:町の中心へ#mov(4)

  [7]
  n:堂前通り
  e:通りの両側に民家が立ち並ぶ、広い道。<br>さくま君の家もここにある。<br>通りの突き当りには、小さなお堂がある。
  s:さくま君の家へ#mov(8);geti(0)
  s:お堂へ#if(iflg(1)){mov(16);}else if(iflg(0) && hav(0)){mov(14);onflg(1);}else{mov(9);}

  [8]
  n:さくま君の家
  e:木造の小さな家。<br>「<r>池家#いけのや</r>」と表札がかかっている。<br>さくま君はここで父親と一緒に暮らしている。<br><br>犬小屋には帰ってきていないみたいだ。<br>骨のおもちゃが転がっている。<br>さくま君は大事そうにおもちゃを手に取った。
  s:通りへ#mov(7)

  [9]
  n:お堂
  e:くすんだ色の古い小屋だ。<br>小屋の中に、大人より大きい、真っ黒な像が立っている。<br>人間のようだが、体は鱗で覆われているみたいで、長い尻尾がついている。<br>顔や目はよく見えないが、大きな口と鋭い歯が見える。<br>昔から「黒縄さま」と呼ばれているらしいけれども、不気味だ。<br>なんだか得体のしれない怖さがある。
  s:中央広場へ戻る#mov(4)

  [10]
  n:県道ー黒縄線
  e:隣町へと続く、広い山道。<br>木陰の中を進んでいくと分かれ道があった。<br>道の先で大きながけ崩れが起きたらしく、隣町へは行けないみたい。<br><br>分かれ道は、さくま君のお父さんがいる、近辺の山を管理する人たちの野営場に繋がっている。
  s:分かれ道の先へ#mov(11)

  [11]
  n:<r>二本老松番#にほんおいまつばん</r>
  e:進んでいくと、木でできた柵で囲われた場所に<br>「二本老松番」<br>と書かれた門が開いていた。<br>入ると、小さな小屋が建っているのが見える。
  s:小屋に入る#if(iflg(1)){mov(13);}else{mov(12);onflg(0);}

  [12]
  n:小屋
  e:小屋の中には斧や七輪などの道具や、高貴そうな、えんじ色の服が掛けてある。<br>小屋の中では、さくま君のお父さんと、もう一人、見知らぬ人がお茶を飲んでいた。<br><r>黒傘#くろかさ</r>さんという人らしい。<br>どうやら普段は遠くの山で、同じような仕事をしているが、たまにここに来て、仕事の話をしているらしい。<br><br>さくま君のお父さんは、ミンダたちが犬を探しているという話をすると<br>「自分も探しているんだけれど、まだ見つからないんだ。」<br>と答えた。
  s:次へ#mov(23)

  [13]
  n:小屋
  e:さくま君のお父さんにこれまでの出来事を混乱しながらも伝えると<br>何か心当たりがあるのか、掛けてあった高貴そうな衣服をまとい、いろいろな道具をかき集めてカバンに詰めたかと思うと、黒傘さんに「ここを頼んだ」と言い残して走り去っていってしまった。
  s:次へ#mov(25)

  [14]
  n:お堂
  e:くすんだ色の古い小屋だ。<br>小屋の中に、大人より大きい、真っ黒な像が立っている。<br>人間のようだが、体は鱗で覆われているみたいで、長い尻尾がついている。<br>顔や目はよく見えないが、大きな口と鋭い歯が見える。<br>昔から「黒縄さま」と呼ばれているらしいけれども、不気味だ。<br>なんだか得体のしれない怖さがある。
  s:犬のおもちゃを黒縄さまに供える#mov(15)

  [15]
  n:お堂
  e:「黒縄さま」に歩み寄って、おもちゃをそなえたが、とくに何も起こらない。<br>だが、どうも近くにいると威圧感を感じる。<br>ふと上を見ると黒縄さまの頭部がそこにある。<br>怪しくきらめく鋭い歯に、今にも噛みつかれそうだ。<br><br>一瞬、不思議な考えが頭をよぎった。<br>「まさか、本当は生きているのか？」<br>これはずっと昔からたっている像だ。<br>そんなはずはない、だけど、確かめないと気がすまない。<br>そして、ミンダは知らず知らずのうちに、黒縄さまの歯に手を伸ばした。
  s:次へ#mov(24)

  [16]
  n:お堂
  e:くすんだ色の古い小屋だ。小屋の中の「黒縄さま」からはさっきの威圧感を感じない。<br>犬の鳴き声ももうしないし、<br>冷静になって考えると、狭く暗い路地裏に足を踏み入れることはとても怖い。<br><br>さくま君は、これが黒縄さまの導きだということならば、いったん二本老松番に戻って相談したほうがいいと言った。
  s:町の中心へ#mov(4)

  [17]
  n:路地裏
  e:思ったよりも薄暗い。<br>あちこちに植木鉢や空き瓶などのガラクタがおいてあって、歩きづらい。<br><br>また犬の鳴き声が聞こえた。<br>路地裏のもっと奥からだ。<br>なぜさくま君には聞こえないのだろう。<br><br>さくま君は、引き返そうと言っている。
  s:路地裏の奥へ#mov(18)
  s:町へ戻る#mov(16)

  [18]
  n:路地裏
  e:入り組んだ路地裏を、適当な見当をつけながら進んでいく。<br>奥へ奥へと進むにつれて、だんだんと足元が暗くなっていく。<br><br>また犬の鳴き声が聞こえた。しかも前より声が大きい気がした。<br>この先に、犬がいるのだろうか。<br><br>さくま君はここで迷子になるのではないかと心配している。
  s:路地裏の奥へ#mov(19)
  s:町へ戻る#mov(16)

  [19]
  n:路地裏
  e:雑草を踏んで更に奥へ進む。<br>いつのまにか森に入ったみたいだ。<br>しかし、この細い道はさらに続いている。<br><br>さくま君は不安そうな表情だが、ここまで来たらいちばん奥まで行ってみたい。
  s:さらに奥へ#mov(20)

  [20]
  n:森
  e:小道を進んでいくと、<br>石でできた上り階段にたどりついた。<br>相当古くのものに違いない。<br>ごつごつした石段に、ところどころ苔が生えている。<br><br>ここの上に犬がいるはずだ。
  s:階段を登る#mov(21)

  [21]
  n:洞窟
  e:階段を登ると、岩の洞窟にたどり着いた。<br>ひんやりした冷気が暗闇の奥から漂ってくる。<br>ふと足元を見ると<br>毛だらけの何かがある。<br>不安になりながらそのからだを観察すると<br><br>それは犬だった。<br>さらによく見ると、体中に噛まれたような傷跡がある。<br>さくま君はうろたえている。<br>一体何が起こっているのか。<br>ミンダもどうにも不気味になってきた。<br><br>
  s:次へ#mov(28)

  [22]
  n:終わり
  e:さくま君に手を引かれるままに洞窟から逃げ出し、われに帰ったのは、町の中心へついたころだった。<br>その後、色んな人達に心配されたり、誰にも知らせずに森の中に入ったことを叱られたりした。<br><br>犬の死体を埋めて弔い、私達はそれぞれの家に帰ったが、<br>あの洞窟は何だったのか。<br>なぜさくま君のうちの犬はあそこで死んでいたのか。<br><br>何もかも分からないまま、不思議な1日は終わり、普通の日常が戻ってきた。<br><br>終わり

  [23]
  n:小屋
  e:そしてこう続けた。<br>「そういえば、黒縄さまという像があるだろう。あの像に、探したいヒトやモノにつながりがあるものを捧げると、黒縄さまが教えてくれるという話があるそうだ。おもちゃとかをお供えしてみたらどうかな？」<br><br>すると、急に深刻そうな顔をして、<br>「ただ、もしなにか導きがあっても、絶対についていってはいけないよ。必ずここに戻って来て、相談してくれ。」<br>と言われた。なんだか恐ろしい。<br>どうしよう。
  s:町へ戻る#mov(4)

  [24]
  n:お堂
  e:とたんに走った激痛に、ミンダは叫んだ<br>もしかして黒縄さまに手を噛まれたのか？<br>でも黒縄さまは微動だにしていないし、さくま君はミンダの大声にびっくりしている。<br>ミンダは、気のせいかと混乱した。<br><br>不思議に思いながらも立ち上がると<br>どこからか犬の鳴き声が聞こえた。<br>さくま君には聞こえなかったようだ。こんなにはっきりと聞こえたのに。<br>もしや、これが黒縄さまの導きなのか。<br>犬の鳴き声は、どうやら路地裏の奥のほうから聞こえるようだ。
  s:路地裏に入る#mov(17)
  s:町の中心へ戻る#mov(4)

  [25]
  n:終わり
  e:黒傘さんが淹れてくれたお茶を飲みながら、ミンダたちは何も言葉を発さずに待った。<br>しばらく後にさくま君のお父さんが小屋に戻ってきた。<br>そして、その腕の中には、犬の死体が抱えられていた。<br><br>誰も何も言わずに、沈黙の中、みんなで犬を埋めて弔った。<br><br>その後、ミンダたちはそれぞれの家に戻った。何もかも分からないまま、不思議な1日は終わり、普通の日常が戻ってきた。<br><br>終わり

  [26]
  n:掲示板
  e:ミンダは掲示にかかれている文章をノートに書き留めた。
  s:次へ#mov(5)

  [28]
  n:洞窟
  e:しばらくお互い動けずに沈黙していたが<br>さくま君が突然、「あ」と声をもらした。<br>視線の先は洞窟の奥の暗闇。<br><br>目を凝らすと、その奥にいくつもの小さなきらめきがある。<br>「蛇だ」<br>鎌首をもたげた数えきれないほどの蛇ににらみつけられ、ミンダはサーッと血の気が失せていくのを感じた。
  s:次へ#mov(22)
  </map>

  <end>`;
