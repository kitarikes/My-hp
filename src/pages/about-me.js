import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/styles.css";
import SNSBtn from "../components/sns/sns-btn"

const AboutMe = () => (
  <Layout>
    <SEO title="About me" />
    <h1>About me</h1>
    <h2>サークル活動</h2>
    <h3>1.GLEAP (2019年秋～所属)</h3>
    <h4>GLEAPとは？</h4>
    <StaticImage
      src="../images/gleap-logo.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="home-img"
      style={{ marginBottom: `1.45rem` }}
    />
    <p><a href="https://gleap.tech/" target="_blank" rel="noopener noreferrer">GLEAP</a>とは九大のプログラミングサークルで学習会から案件受注まで行っている実用性志向のプログラミングサークルです。</p>
    <h4>共同研究</h4>
    <p><a href="https://www.advantech.co.jp/" target="_blank" rel="noopener noreferrer">advantech</a>様と共同でAI関連の共同研究をしており、そのメンバーとして携わらせてもらっています。<br /><br />
    ・<a href="https://news.mynavi.jp/article/20201221-1603889/" target="_blank" rel="noopener noreferrer">関連記事</a></p>

    <p>2021年度3月時点では、YOLOを用いた物体検知モデルの作成などに従事しました。</p>

    <h4>サークル内ハッカソン</h4>
    <p>2021年度1月末にあったハッカソンではバトルタワー(九大理学部棟)かどうか判定してくれるTwitterBotを３人のメンバーで開発しました。<br />
    詳しくはこちらの<a href="https://docs.google.com/presentation/d/1XPgfREUppGtb1GRUkJtWEM3hoD7trNrWuc2hChzpkMY/edit?usp=sharing" target="_blank" rel="noopener noreferrer">発表用スライド</a>をご覧ください。</p> 

    <StaticImage
      src="../images/batawa.jpg"
      width={450}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="home-img"
      style={{ marginBottom: `1.45rem` }}
    />
    <h3>iGEM(2020年秋～所属)</h3>
    <h4>iGEMとは？</h4>
    <p>iGEMとは、医療、食料、環境などの分野において、世界が直面している問題の解決方法を、合成生物学の助けを借りて見つけていくという世界大会です。しばしば「生物版ロボコン」といわれます。参加資格は原則学部生で，専攻分野は問われていません。<br />
    この世界大会に出場するサークルに所属しています。</p>
    <h4>なぜ所属するのか？</h4>
    <p>元々遺伝子組み換えに興味がありサークルを知るきっかけとなりました。<br/>
    その後、大腸菌に好きなように設計したプラスミドを入れることで遺伝子組み換えが出来るという現代の技術に驚き、合成生物の分野を少しは知っておきたいと思いこの活動に参加することを決めました。</p>
    <h4>活動内容</h4>
    2020年度はコロナの影響でまともに実験が出来ていないにも関わらず、初出場ながら銀賞を頂きました。
    <br/>
    ・<a href="https://www.sci.kyushu-u.ac.jp/koho/topics/topics_201217.html" target="_blank" rel="noopener noreferrer">九大の公式記事</a>
    <p>自分はiGEMの活動内容を大会本部に提出するフォーマットがhtmlベースのwikiであったため、主にこちらを作成しました。<br/>
    ・<a href="https://2020.igem.org/Team:Qdai" target="_blank" rel="noopener noreferrer">https://2020.igem.org/Team:Qdai</a>
    </p>

    <p>2021年度もプロジェクトが決定し内容を詰めている最中です。今年は金賞を目標に頑張っています。<br/>
    ・<a href="https://igem2021qdai.jimdofree.com/" target="_blank" rel="noopener noreferrer">2021年度iGEM九大 公式HP</a></p>
    <h2>その他</h2>
    <h3>プログラミング教室勤務(2019年12月~)</h3>
    <p>福岡市中央区にある小規模な教室で勤務しています。<br/>
    主に週一回中学生に指導しています。pythonで出来ること全般で、基本構文から、スクレイピング、ブラウザ操作、最近ではweb開発やdeeplearning実装まで幅広く指導してきました。<br/>
    自分が指導した人が自らプロダクトを作って成長しているのが一番嬉しいのでこの仕事を続けています。</p>
    <h3>競技プログラミング</h3>
    <p>現在はやっていませんがAtcoderをやっていました。<br/>
    茶色までは頑張りましたので基本的な処理の実装は可能です。<br/>
    ・<a href="https://atcoder.jp/users/Kita" target="_blank" rel="noopener noreferrer">https://atcoder.jp/users/Kita</a>
    </p>
    <h3>保有資格</h3>
    <p>・Python 3 エンジニア認定基礎試験</p>
    <h3>Some Links</h3>
    <SNSBtn/>
    <h3 class="mrgn">Lern more...</h3>
    <p>
      <Link to="/my-hobby/">Go to "My hobby"</Link> <br />
      <Link to="/">Go back to the homepage</Link><br />
      <Link to="#">↑ Go back to the top pf page</Link>
    </p>
  </Layout>
)

export default AboutMe
