import { getWorkCategory, workCategories } from '../workData';

export function generateStaticParams() {
  return workCategories.map(item => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getWorkCategory(slug);
  return {
    title: item ? `${item.title}｜沈路荣作品集` : '作品分类｜沈路荣作品集',
    description: item?.intro ?? '沈路荣视觉设计作品分类'
  };
}

export default async function WorkCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getWorkCategory(slug) ?? workCategories[0];
  const isProductDetail = slug === 'product-detail';

  return (
    <main className="workDetailPage">
      <header className="workDetailNav">
        <a href="/#works" className="backButton"><span>←</span> 返回作品分类</a>
        <span>SHEN LURONG / PORTFOLIO</span>
        <a href="mailto:248612569@qq.com">联系合作 ↗</a>
      </header>

      {!isProductDetail && (
        <>
          <section className="workDetailHero">
            <div className="workDetailTitle">
              <p>{item.index} / {item.english}</p>
              <h1>{item.title}</h1>
              <span>{item.description}</span>
            </div>
            <div className="workDetailCover">
              <img src={item.image} alt={`${item.title}作品封面占位图`} />
            </div>
          </section>

          <section className="workDetailIntro">
            <span>ABOUT THIS CATEGORY</span>
            <p>{item.intro}</p>
          </section>
        </>
      )}

      {isProductDetail ? (
        <section className="pylCaseStudy" aria-label="PYL100 抗幽益生菌详情页案例">
          <div className="caseCategoryLead">
            <div className="caseCategoryHeading">
              <div>
                <p>02 / {item.english}</p>
                <h1>{item.title} <i>↘</i></h1>
                <span>{item.description}</span>
              </div>
              <p>{item.intro}</p>
            </div>
          </div>

          <div className="pylCaseHeader">
            <div className="pylCaseIdentity">
              <p>01 / E-COMMERCE DESIGN</p>
              <h2>PYL100<br />抗幽益生菌</h2>
              <span>详情页视觉设计 / 胃部养护品类</span>
            </div>

            <div className="pylCaseContent">
              <article>
                <span>PRODUCT BENEFIT / 产品功效</span>
                <h3>聚焦胃部微生态与日常胃部养护</h3>
                <p>围绕幽门螺杆菌相关的胃部微生态养护需求，以专利益生菌组合为核心卖点，传达菌群平衡、胃黏膜养护与日常胃部防护的产品价值。</p>
              </article>
              <article>
                <span>DESIGN CONCEPT / 设计思路</span>
                <h3>品牌蓝 × 科技感 × 胃部养护</h3>
                <p>KV 以品牌蓝建立专业可信的视觉基调，将产品置于发光能量场中，并结合粒子、微观菌群、环形光轨与胃部轮廓，强化科学研发与胃部微生态养护的联想。圆形能量轨迹呼应菌群平衡与持续防护，画面以产品为中心，通过清晰的信息层级兼顾科技氛围与电商阅读效率。</p>
              </article>
              <div className="pylPalette" aria-label="项目色彩系统">
                <div><i style={{ background: '#079BE7' }} /><span>主色<br /><b>#079BE7</b></span></div>
                <div><i style={{ background: '#66D9FF' }} /><span>辅助色<br /><b>#66D9FF</b></span></div>
                <div><i style={{ background: '#FFFFFF' }} /><span>信息色<br /><b>#FFFFFF</b></span></div>
                <div><i style={{ background: '#71E66D' }} /><span>点缀色<br /><b>#71E66D</b></span></div>
              </div>
            </div>
          </div>

          <div className="pylArtwork">
            <div className="pylArtworkLabel"><span>FULL DETAIL PAGE</span><b>完整详情页展示</b></div>
            <div className="pylArtworkGrid" role="img" aria-label="PYL100 抗幽益生菌电商详情页，按顺序分为三列展示">
              <i className="pylArtworkSegment pylArtworkSegment1"><img src="/images/projects/pyl100-detail.jpg" alt="" /></i>
              <i className="pylArtworkSegment pylArtworkSegment2"><img src="/images/projects/pyl100-detail.jpg" alt="" /></i>
              <i className="pylArtworkSegment pylArtworkSegment3"><img src="/images/projects/pyl100-detail.jpg" alt="" /></i>
            </div>
          </div>
          <a className="pylBackLink" href="/#works">← 返回浏览其他分类</a>
        </section>
      ) : (
        <>
          <section className="placeholderGallery" aria-label="作品素材占位区域">
            <article><span>01</span><div><p>PROJECT COVER</p><b>项目主视觉封面</b></div></article>
            <article><span>02</span><div><p>DESIGN PROCESS</p><b>设计过程与策略</b></div></article>
            <article><span>03</span><div><p>FINAL DELIVERY</p><b>最终作品展示</b></div></article>
          </section>

          <section className="assetNotice">
            <p>CONTENT COMING SOON</p>
            <h2>真实项目素材<br />将在这里完整呈现。</h2>
            <a href="/#works">← 返回浏览其他分类</a>
          </section>
        </>
      )}
    </main>
  );
}
