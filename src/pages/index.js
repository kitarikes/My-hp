import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/styles.css";
import SNSBtn from "../components/sns/sns-btn"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>自己紹介</h1>
    <li>名前: <p>きた ___kiita_#7915</p></li>
    <li>所属: <p>九州大学応化分子コース３年(2021年度)</p></li>
    <StaticImage
      src="../images/top.jpg"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="home-img"
      style={{ marginBottom: `1.45rem` }}
    />
    <li>技術スタック: <br />
      $ python<br />
      >> スクレイピング、自動ブラウザ操作<br />
      >> 画像認識(物体検出)AIの実装<br />
      >> Django, Flaskでのバックエンド開発<br />
      >> Python3 エンジニア認定基礎試験 取得<br />
      $ web<br />
      >> html, css, jsの軽い実装<br />
      >> HPの公開<br />
      >> ノーコード開発<br />
    </li>
    <br></br>
    <h3>Some Links</h3>
    <SNSBtn/>
    <h3 class="mrgn">Lern more...</h3>
    <p>
      <Link to="/page-2/">Go to "My timeline"</Link> <br />
      <Link to="/page-2/">Go to "My hobby"</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
    <p>
      このサイトはGatsby.jsを用いて作りました。
    </p>

    <p>
      <h3>Contact</h3>
      ryosuke092413@gmail.com
    </p>
  </Layout>
)

export default IndexPage
