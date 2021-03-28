import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../components/styles.css";
import SNSBtn from "../components/sns/sns-btn"

const MyHobby = () => (
  <Layout>
    <SEO title="My Hobby" />
    <h1>My Hobby</h1>
    <p>趣味のゲームについて紹介します。<br/></p>
    <h2>Apex Legends【PC】</h2>
    <StaticImage
      src="../images/apex-logo.jpg"
      width={450}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="home-img"
      style={{ marginBottom: `1.45rem` }}
    />
    <h3>基本情報</h3>
    <p>
        ・プレイ時間: 約1000h<br/>
        ・使用キャラ: ジブラルタル, コースティック, レブナント, ホライゾン
    </p>
    <h3>ひとこと</h3>
    <p>
        s8にてやっとダイヤまで上がることが出来ました！<br/>
        ストレス耐性と状況判断能力が鍛わりました。
    </p>
    <h2>Escape From Tarkov</h2>
    <StaticImage
      src="../images/tarkov.jpg"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="home-img"
      style={{ marginBottom: `1.45rem` }}
    />
    <h3>基本情報</h3>
    <p>
        ・プレイ時間: 約200h<br/>
        ・好きな武器: MPX
    </p>
    <h3>ひとこと</h3>
    <p>
        最近ハマっているゲーム。死ぬとアイテムを全ロスするので毎回頭を抱えることになります。<br/>
        銃器と弾薬に対する知識が得られます。
    </p>
    <h2>MONSTER HUNTERシリーズ【PC, 3DS】</h2>
    <StaticImage
      src="../images/logo_mhs.png"
      width={450}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="home-img"
      style={{ marginBottom: `1.45rem` }}
    />
    <h3>基本情報</h3>
    <p>
        ・シリーズ累計プレイ時間: 約2000h<br/>
        ・プレイタイトル: MH4、MH4G、MHX、MHW、MHWI<br/>
        ・使用武器: 大剣、双剣、操虫棍
    </p>
    <h3>ひとこと</h3>
    <p>
        中学生の頃に一番やったゲーム。<br/>
        最もプレイ時間が長いMH4GはもちろんHR999までやりこみました。<br/>
        最高倍率の発掘武器を狙って、ラージャンやテオテスカトルを無限に倒していました。<br/>
        現在はPC版MHWIをFPSで疲れた後に友人と嗜む程度に楽しくやっています。
    </p>
    <h2>大乱闘スマッシュブラザーズ【3DS】</h2>
    <StaticImage
      src="../images/sumabura.jpg"
      width={450}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="home-img"
      style={{ marginBottom: `1.45rem` }}
    />
    <h3>基本情報</h3>
    <p>
        ・プレイ時間: 約1000h<br/>
        ・使用キャラ: ロボット、ネス
    </p>
    <h3>ひとこと</h3>
    <p>
        これも中学生の頃にやりこんだゲーム。<br/>
        switch版を現役でやっている人達には到底太刀打ちできませんが、平均並みには戦えます。
    </p>
    <h2>Rising Storm/Red Orchestra2</h2>
    <StaticImage
      src="../images/ro2-header.jpg"
      width={450}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="home-img"
      style={{ marginBottom: `1.45rem` }}
    />
    <h3>基本情報</h3>
    <p>
        ・プレイ時間: 約800h<br/>
        ・好きな武器: kar98k、ppsh、38式歩兵銃
    </p>
    <h3>ひとこと</h3>
    <p>
        初めてプレイしたFPS。<br/>
        WW2を題材にしたリアル志向のゲームで、硫黄島やサイパンなどで戦えます。<br/>
        ww2の歴史に少し詳しくなりました。
    </p>
    <h2>Hell Let Loose</h2>
    <StaticImage
      src="../images/hll.jpg"
      width={450}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="home-img"
      style={{ marginBottom: `1.45rem` }}
    />
    <h3>基本情報</h3>
    <p>
        ・プレイ時間: 約200h<br/>
        ・好きなmap: <a href="https://en.wikipedia.org/wiki/Sainte-M%C3%A8re-%C3%89glise" target="_blank" rel="noopener noreferrer">Sainte-Mère-Église</a>、<a href="https://ja.wikipedia.org/wiki/%E3%82%AA%E3%83%9E%E3%83%8F%E3%83%BB%E3%83%93%E3%83%BC%E3%83%81" target="_blank" rel="noopener noreferrer">オマハ・ビーチ</a>
    </p>
    <h3>ひとこと</h3>
    <p>
        こちらもww2を題材にしたリアル志向FPS。<br/>
        オマハ・ビーチの上陸から中央へ進行するまでのマップが存在し、映画プライベートライアンの役者になった気分でプレイできます。<br/>
        戦車も三人(観測手、砲手、運転)で操作し、VCしながらやるとなお楽しいです。
    </p>
    <h2>さいごに</h2>
    <p>趣味が合いそうな方、遊んでくれる方、いつでも募集中です！！</p>
    <h3>Some Links</h3>
    <SNSBtn/>
    <h3 class="mrgn">Lern more...</h3>
    <p>
      <Link to="/about-me/">"Inspect me ..."</Link> <br />
      <Link to="/">Go back to the homepage</Link><br />
      <Link to="#">↑ Go back to the top pf page</Link>
    </p>
  </Layout>
)

export default MyHobby
