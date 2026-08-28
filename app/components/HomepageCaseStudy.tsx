const firstProjectImages = [
  { src: '/images/projects/38-homepage/kv-products.webp', alt: '38 焕新周产品组合主视觉' },
  { src: '/images/projects/38-homepage/kv-wang-yibo.webp', alt: '王一博焕新周主视觉' },
  { src: '/images/projects/38-homepage/member-benefits.webp', alt: '会员充值、消费券与会员礼权益模块' },
  { src: '/images/projects/38-homepage/livestream-entry.webp', alt: '直播间专属礼与产品选购入口' },
  { src: '/images/projects/38-homepage/product-320.webp', alt: '320 亿广谱益生菌首页产品模块' },
  { src: '/images/projects/38-homepage/product-pyl.webp', alt: 'PYL100 超舒益生菌首页产品模块' },
  { src: '/images/projects/38-homepage/product-b420-3.webp', alt: 'B420 3.0 益生菌首页产品模块' },
  { src: '/images/projects/38-homepage/product-b420-s600.webp', alt: 'B420 与 S600 组合首页产品模块' },
];

export default function HomepageCaseStudy() {
  return (
    <section className="homepageCaseStudy" aria-label="店铺首页设计案例">
      <div className="homepageCaseHeader">
        <div className="homepageCaseIdentity">
          <p>01 / STORE HOMEPAGE DESIGN</p>
          <h2>38 焕新周<br />店铺首页视觉</h2>
          <span>天猫店铺首页 / 节点营销 / 内容转化</span>
        </div>
        <div className="homepageCaseOverview">
          <article>
            <span>PROJECT GOAL / 项目目标</span>
            <h3>以春日焕新主题，建立从品牌氛围到货品转化的完整首页路径</h3>
            <p>围绕 3·8 节点，将品牌形象、代言人内容、会员权益、直播入口与核心产品统一到同一套视觉体系中。页面先建立活动认知，再逐步承接权益说明与产品选购，兼顾品牌表达和电商浏览效率。</p>
          </article>
          <article>
            <span>DESIGN CONCEPT / 设计思路</span>
            <h3>品牌蓝 × 春日花境 × 轻盈焕活</h3>
            <p>以高明度品牌蓝作为主色，结合清透玻璃展台、柔焦花卉和充足留白，塑造轻盈、明亮的春日焕新氛围。玫粉色承担价格与权益信息，香槟金用于按钮和品质点缀，让促销信息醒目但不破坏整体的专业感。</p>
          </article>
          <div className="homepagePalette" aria-label="38 焕新周项目配色">
            <div><i style={{ background: '#149CE8' }} /><span>品牌蓝<b>#149CE8</b></span></div>
            <div><i style={{ background: '#A8DFFF' }} /><span>清透蓝<b>#A8DFFF</b></span></div>
            <div><i style={{ background: '#F7FBFF' }} /><span>云雾白<b>#F7FBFF</b></span></div>
            <div><i style={{ background: '#FF5B85' }} /><span>权益粉<b>#FF5B85</b></span></div>
            <div><i style={{ background: '#D8B678' }} /><span>香槟金<b>#D8B678</b></span></div>
          </div>
        </div>
      </div>

      <div className="storeProjects" aria-label="店铺首页作品展示">
        <section className="storeProject storeProject--grid" aria-label="38 焕新周店铺首页">
          {firstProjectImages.map((image, index) => (
            <figure className="storeProjectImage" key={image.src}>
              <img src={image.src} alt={image.alt} loading={index < 2 ? 'eager' : 'lazy'} decoding="async" />
            </figure>
          ))}
        </section>

        <section className="storeProject storeProject--single" aria-label="万火官旗新年首页">
          <div className="storeProjectIntro">
            <div><span>02 / FESTIVAL HOMEPAGE</span><h3>万火官旗新年首页</h3></div>
            <p>围绕“回家有道，喜迎新年”的主题，以月夜、门楼、灯笼与团圆宴席构建春节场景。金红色作为视觉核心，结合品牌角色的互动叙事，将节日祝福、产品氛围与品牌温度融入同一幅主视觉。</p>
          </div>
          <figure className="storeProjectImage storeProjectImage--wide">
            <img src="/images/projects/store-home/wanhuo-new-year.webp" alt="万火官旗过年主题首页视觉" loading="lazy" decoding="async" />
          </figure>
        </section>

        <section className="storeProject storeProject--pair" aria-label="万火双12与1688首页">
          <article className="storeProjectCard">
            <div className="storeProjectIntro storeProjectIntro--card">
              <div><span>03 / CAMPAIGN HOMEPAGE</span><h3>万火双12首页</h3></div>
              <p>以蓝紫霓虹和机械猫舞台打造年终盛典氛围，将主推产品、折扣权益与直播入口连续组织，强化双12大促的速度感、科技感与购买节奏。</p>
            </div>
            <figure className="storeProjectImage">
              <img src="/images/projects/store-home/wanhuo-double12.webp" alt="万火双12店铺首页视觉" loading="lazy" decoding="async" />
            </figure>
          </article>

          <article className="storeProjectCard">
            <div className="storeProjectIntro storeProjectIntro--card">
              <div><span>04 / BRAND HOMEPAGE</span><h3>万火1688首页</h3></div>
              <p>以暖金色建立品牌与制造实力的专业印象，通过工厂规模、定制流程、合作品牌、资质认证与产品案例，形成从企业背书到产品展示的完整浏览路径。</p>
            </div>
            <figure className="storeProjectImage">
              <img src="/images/projects/store-home/wanhuo-1688.webp" alt="万火1688店铺首页视觉" loading="lazy" decoding="async" />
            </figure>
          </article>
        </section>
      </div>

      <a className="pylBackLink" href="/#works">← 返回浏览其他分类</a>
    </section>
  );
}
