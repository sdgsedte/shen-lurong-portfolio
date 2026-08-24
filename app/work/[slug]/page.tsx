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

  return (
    <main className="workDetailPage">
      <header className="workDetailNav">
        <a href="/#works" className="backButton"><span>←</span> 返回作品分类</a>
        <span>SHEN LURONG / PORTFOLIO</span>
        <a href="mailto:248612569@qq.com">联系合作 ↗</a>
      </header>

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
    </main>
  );
}
