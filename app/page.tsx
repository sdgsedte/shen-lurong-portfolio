import { workCategories } from './work/workData';

const campaignCards = Array.from({ length: 15 }, (_, index) => ({
  src: `/images/campaign/campaign-${String(index + 1).padStart(2, "0")}.webp`,
  alt: `Life-space 益生菌电商视觉海报 ${index + 1}`,
}));

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="heroScene" aria-hidden="true">
          <img className="heroSceneDay" src="/images/hero-cloud-day-v1.png" alt="" />
          <img className="heroSceneNight" src="/images/hero-cloud-night-v1.png" alt="" />
          <div className="heroAtmosphere" />
        </div>
        <div className="heroShade" />
        <header className="siteHeader">
          <a className="wordmark" href="#top" aria-label="沈路荣作品集首页"><span>●</span> SLR</a>
          <nav className="heroNav" aria-label="主导航"><a href="#about">工作经历</a><a href="#works">作品分类</a><a href="#contact">联系我</a></nav>
          <a className="contactPill" href="mailto:248612569@qq.com">联系合作 <span>↗</span></a>
        </header>
        <div className="heroContent">
          <div className="availability"><span /> VISUAL / E-COMMERCE / BRAND DESIGNER</div>
          <h1><strong>SHEN LURONG</strong><br />PORTFOLIO <i>✦</i></h1>
          <div className="heroIntro">
            <p>用视觉系统与 AI 工作流<br />让品牌内容更快、更准、更有辨识度</p>
            <span>Visual Designer</span>
          </div>
        </div>
        <div className="campaignRail" aria-label="Life-space 电商视觉作品轮播">
          <div className="campaignTrack">
            {[...campaignCards, ...campaignCards].map((card, index) => (
              <figure className="campaignCard" key={`${card.src}-${index}`} aria-hidden={index >= campaignCards.length}>
                <img src={card.src} alt={index < campaignCards.length ? card.alt : ""} />
              </figure>
            ))}
          </div>
        </div>
        <a className="scrollCue" href="#about"><span>SCROLL TO EXPLORE</span><b>↓</b></a>
      </section>
      <section className="about section shell" id="about">
        <div className="sectionKicker"><span>02</span><p>ABOUT / EXPERIENCE</p></div>
        <div className="careerProfile">
          <div className="careerPortrait">
            <img src="/images/designer-portrait.png" alt="视觉设计师在工作室中查看设计画面" />
            <span>SHEN LURONG / VISUAL DESIGNER</span>
          </div>
          <div className="careerBio">
            <p className="careerEyebrow">ABOUT ME</p>
            <h2>Hi, I am<br />Shen Lurong!</h2>
            <p className="careerIntro">我是一名拥有 5 年以上经验的视觉设计师，专注于电商视觉、品牌体系与商业内容。精通 PS / AI / AE / C4D，可独立完成 3D 渲染与动态物料，并熟练运用 AI 工具搭建设计工作流。</p>
            <dl className="careerMeta">
              <div><dt>当前身份</dt><dd>视觉 / 电商 / 品牌设计师</dd></div>
              <div><dt>擅长方向</dt><dd>Brand / E-commerce / 3D / AI</dd></div>
              <div><dt>电话</dt><dd><a href="tel:+8618870700463">188 7070 0463</a></dd></div>
              <div><dt>邮箱</dt><dd><a href="mailto:248612569@qq.com">248612569@qq.com</a></dd></div>
            </dl>
            <div className="careerStats" aria-label="项目数据">
              <div><b>5<sup>+</sup></b><span>设计经验</span></div>
              <div><b>10<sup>+</sup></b><span>营销全案</span></div>
              <div><b>3</b><span>亿级品牌</span></div>
            </div>
            <div className="careerTags"><span>品牌视觉系统</span><span>电商转化设计</span><span>三维动态</span><span>AI 设计工作流</span></div>
          </div>
        </div>

        <div className="careerPath">
          <div className="careerPathHeading"><span>CAREER PATH</span><h3>工作经历</h3></div>
          <div className="careerTimeline">
            <article><i /><time>2024.10 — 2026.05</time><h4>广州健达贸易有限公司</h4><b>电商设计师</b><p>活动页面、引流海报与商品详情页迭代；独立输出直播间全套视觉物料。</p></article>
            <article><i /><time>2023.12 — 2024.08</time><h4>广州优象文化用品有限公司</h4><b>设计师</b><p>负责产品 3D 建模渲染、重点款详情页制作，统筹 S 级大促视觉。</p></article>
            <article><i /><time>2021.04 — 2023.10</time><h4>广州拓客商贸有限公司</h4><b>视觉设计师</b><p>多平台店铺装修与大促视觉物料设计，持续优化主图与推广素材。</p></article>
          </div>
        </div>
      </section>

      <section className="works section" id="works">
        <div className="shell">
          <div className="sectionKicker"><span>03</span><p>SELECTED WORK / CAPABILITIES</p></div>
          <div className="worksHeading"><div><h2>SELECTED WORKS <i>↘</i></h2><span>视觉作品分类</span></div><p>将能力与案例整合为五个作品方向。点击任意板块进入独立页面；当前图片为临时占位，后续替换为你的真实作品。</p></div>
          <div className="workCategoryGrid">
            {workCategories.map((item, index) => (
              <a className={`workCategoryCard workCategoryCard${index + 1}`} href={`/work/${item.slug}`} key={item.slug}>
                <img src={item.image} alt={`${item.title}分类封面`} />
                <div className="workCategoryShade" />
                <span className="workCategoryIndex">{item.index}</span>
                <div className="workCategoryCopy"><p>{item.english}</p><h3>{item.title}</h3><span>{item.description}</span></div>
                <b>↗</b>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="contactScreen" id="contact">
        <div className="shell contactInner">
          <div className="contactLayout">
            <div className="contactStatement">
              <p>联系方式 / LET&apos;S CONNECT</p>
              <h2>LET&apos;S BUILD<br />BETTER VISUAL<br /><i>SYSTEMS</i> <span>↘</span></h2>
              <a className="contactBrand" href="#top"><b>●</b> SLR</a>
            </div>
            <aside className="contactCard">
              <p className="contactCardLabel">CONTACT</p>
              <dl>
                <div><dt>手机</dt><dd><a href="tel:+8618870700463">188 7070 0463</a></dd></div>
                <div><dt>微信</dt><dd>二维码扫码联系</dd></div>
                <div><dt>邮箱</dt><dd><a href="mailto:248612569@qq.com">248612569@qq.com</a></dd></div>
              </dl>
              <p className="contactRole">VISUAL / E-COMMERCE / BRAND DESIGN</p>
              <div className="qrPlaceholder" aria-label="二维码预留位置"><span>QR CODE</span><b>二维码待替换</b></div>
            </aside>
          </div>
          <div className="footerMeta">
            <span>© 2026 SHEN LURONG</span><span>GUANGZHOU · CHINA</span><a href="#top">BACK TO TOP ↑</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
