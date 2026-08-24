const campaignCards = Array.from({ length: 15 }, (_, index) => ({
  src: `/images/campaign/campaign-${String(index + 1).padStart(2, "0")}.webp`,
  alt: `Life-space 益生菌电商视觉海报 ${index + 1}`,
}));

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <img className="heroVisual" src="/images/hero-campaign-v2.png" alt="" aria-hidden="true" />
        <div className="heroShade" />
        <header className="siteHeader">
          <a className="wordmark" href="#top" aria-label="沈路荣作品集首页"><span>●</span> SLR</a>
          <nav className="heroNav" aria-label="主导航"><a href="#about">工作经历</a><a href="#works">精选作品</a><a href="#strengths">个人优势</a></nav>
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
        <div className="aboutLead">
          <h2>设计不止让品牌<br />被看见，更让生意<br /><i>向前发生。</i></h2>
          <p>我是一名拥有 5 年以上经验的视觉设计师，专注于电商视觉、品牌体系与商业内容。擅长把策略、审美和技术串成完整工作流，让每一次视觉输出都更清晰、更高效，也更接近增长。</p>
        </div>

        <div className="profileGrid">
          <div className="portraitWrap">
            <img src="/images/designer-portrait.png" alt="视觉设计师在工作室中查看设计画面" />
            <span>SHEN LURONG / VISUAL DESIGNER</span>
          </div>
          <div className="profileInfo">
            <div className="introBadge">FROM GUANGZHOU · CHINA</div>
            <p className="profileStatement">精通 PS / AI / AE / C4D，可独立完成 3D 渲染与动态物料制作；熟练运用多款 AI 工具搭建设计工作流，熟悉电商营销转化逻辑。</p>
            <dl className="contactList">
              <div><dt>EMAIL</dt><dd><a href="mailto:248612569@qq.com">248612569@qq.com</a></dd></div>
              <div><dt>PHONE</dt><dd><a href="tel:+8618870700463">+86 188 7070 0463</a></dd></div>
              <div><dt>ROLE</dt><dd>VISUAL / E-COMMERCE / BRAND</dd></div>
            </dl>
          </div>
        </div>

        <div className="stats" aria-label="项目数据">
          <div><b>5<sup>+</sup></b><span>年电商视觉设计经验</span></div>
          <div><b>10<sup>+</sup></b><span>完整落地营销全案</span></div>
          <div><b>03</b><span>家亿级 GMV 品牌服务经验</span></div>
          <div><b>05</b><span>视觉与商业能力维度</span></div>
        </div>

        <div className="experience">
          <div className="experienceTitle"><span>CAREER PATH</span><h3>工作经历</h3></div>
          <div className="timeline">
            <article><time>2024.10 — 2026.05</time><div><h4>广州健达贸易有限公司</h4><p>电商设计师</p></div><p>活动页面、引流海报与商品详情页迭代；独立输出直播间全套视觉物料，对接达人需求并落地种草推广素材。</p></article>
            <article><time>2023.12 — 2024.08</time><div><h4>广州优象文化用品有限公司</h4><p>设计师</p></div><p>负责产品 3D 建模渲染、重点款详情页制作，统筹 S 级大促海报的策划与落地。</p></article>
            <article><time>2021.04 — 2023.10</time><div><h4>广州拓客商贸有限公司</h4><p>视觉设计师</p></div><p>多平台店铺装修与大促视觉物料设计；持续优化主图和推广素材，提升图片点击与转化表现。</p></article>
          </div>
        </div>
      </section>

      <section className="works section" id="works">
        <div className="shell">
          <div className="sectionKicker"><span>03</span><p>SELECTED WORK</p></div>
          <div className="worksHeading"><h2>精选项目</h2><p>从电商转化到品牌资产，建立可延展的视觉秩序。首版使用方向性概念图，后续可替换为你的真实案例。</p></div>
        </div>
        <div className="projectList shell">
          <a className="projectCard projectWide" href="#contact" aria-label="美妆电商视觉项目">
            <img src="/images/project-skincare.png" alt="银黑色美妆产品商业视觉概念" />
            <div className="projectOverlay"><div><span>01 / E-COMMERCE</span><h3>美妆全链路视觉</h3></div><p>CREATIVE DIRECTION · 3D · CAMPAIGN</p><b>↗</b></div>
          </a>
          <div className="projectSplit">
            <a className="projectCard" href="#contact" aria-label="文创品牌视觉项目">
              <img src="/images/project-stationery.png" alt="高级文创产品商业视觉概念" />
              <div className="projectOverlay"><div><span>02 / BRANDING</span><h3>文创品牌升级</h3></div><p>IDENTITY · PACKAGING · COMMERCE</p><b>↗</b></div>
            </a>
            <a className="projectCard" href="#contact" aria-label="AI 视觉系统项目">
              <img src="/images/project-ai.png" alt="玻璃与数据流构成的抽象科技视觉" />
              <div className="projectOverlay"><div><span>03 / AI & MOTION</span><h3>智能视觉系统</h3></div><p>AI WORKFLOW · MOTION · 3D</p><b>↗</b></div>
            </a>
          </div>
        </div>
      </section>

      <section className="strengths section shell" id="strengths">
        <div className="sectionKicker"><span>04</span><p>CAPABILITIES</p></div>
        <div className="strengthHeading"><h2>从策略到落地，<br />形成完整视觉闭环。</h2><p>OPERATION × BRAND × VISUAL × E-COMMERCE × AI</p></div>
        <div className="strengthGrid">
          <article><span>01</span><b>电商全链路视觉</b><p>主图、详情页、活动会场与直播间物料，围绕用户决策路径建立统一表达。</p><i>ECOMMERCE</i></article>
          <article><span>02</span><b>品牌与 VI 体系</b><p>从视觉定位、识别系统到应用延展，沉淀可持续复用的品牌资产。</p><i>BRANDING</i></article>
          <article><span>03</span><b>3D 与动态设计</b><p>独立完成 C4D 产品建模渲染、AE 动态包装与多平台动态物料输出。</p><i>3D / MOTION</i></article>
          <article><span>04</span><b>AI 设计工作流</b><p>将多款生成式工具接入创意探索、素材制作与版本扩展，提高产能与质量。</p><i>AI WORKFLOW</i></article>
          <article><span>05</span><b>营销全案落地</b><p>理解大促节奏、内容触点与资源协同，具备从概念到上线的完整执行能力。</p><i>CAMPAIGN</i></article>
          <article><span>06</span><b>商业转化思维</b><p>不止关注“好看”，也关注信息效率、点击表现与品牌长期价值。</p><i>CONVERSION</i></article>
        </div>
      </section>

      <footer className="contactScreen" id="contact">
        <div className="shell contactInner">
          <div className="sectionKicker"><span>05</span><p>START A PROJECT</p></div>
          <div className="contactHeadline"><p>HAVE A PROJECT IN MIND?</p><h2>LET&apos;S MAKE<br /><i>SOMETHING</i><br />IMPACTFUL.</h2></div>
          <div className="contactBottom">
            <a className="mailLink" href="mailto:248612569@qq.com"><span>发送合作邀请</span><b>248612569@qq.com</b><i>↗</i></a>
            <div className="footerMeta"><span>© 2026 SHEN LURONG</span><span>GUANGZHOU · CHINA</span><a href="#top">BACK TO TOP ↑</a></div>
          </div>
        </div>
      </footer>
    </main>
  );
}
