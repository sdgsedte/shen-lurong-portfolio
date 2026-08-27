import { getWorkCategory, workCategories } from '../workData';

const brandKvCases = [
  {
    index: '01',
    title: '超级88 KV 视觉',
    meta: '会员活动 / 节点营销 / 产品组合传播',
    image: '/images/projects/brand-kv-super88.jpg',
    heading: '将“88”转化为活动记忆符号',
    description: '围绕“超级88节”会员活动，将数字 88 放大为通透立体的核心视觉符号，并以礼盒、丝带与多产品组合强化节日感和抽奖利益点。品牌蓝建立清爽可信的主基调，橙红色活动信息形成视觉跳点，让活动名称、会员权益和产品阵容在单张画面中快速完成传达。',
    keywords: ['活动符号', '会员权益', '产品矩阵'],
    colors: ['#0AA7E8', '#A9E8FF', '#FF6840']
  },
  {
    index: '02',
    title: '双12 刘畊宏 KV 视觉',
    meta: '品牌大使 / 双12大促 / 身材管理主题',
    image: '/images/projects/brand-kv-liu-genghong.jpg',
    heading: '以人物势能连接身材管理主题',
    description: '以刘畊宏健康、自律的公众形象承接“身材管理”传播主题，人物手持产品形成直观使用背书，前景产品阵列进一步强化购买对象。开阔的蓝天与悉尼海港背景呼应品牌澳洲基因，白色运动造型和高明度蓝色共同塑造轻盈、积极且具有行动感的大促视觉。',
    keywords: ['人物背书', '身材管理', '澳洲基因'],
    colors: ['#079BE7', '#DDF4FF', '#F3D8A5']
  },
  {
    index: '03',
    title: '双11 KV 视觉',
    meta: '双11大促 / 澳洲品牌识别 / 产品组合传播',
    image: '/images/projects/brand-kv-double11.jpg',
    heading: '以悉尼地标强化澳洲品牌原点',
    description: '画面将悉尼歌剧院与海港大桥置于同一海港视野中，用两个具有全球辨识度的标志性建筑建立清晰的澳洲地域锚点，强化品牌来源与可信度。日出暖光、海面倒影和产品陈列形成由远及近的空间层次，既保留澳洲生活方式的轻松氛围，也让双11利益信息与核心产品成为画面焦点。',
    keywords: ['悉尼歌剧院', '海港大桥', '地域识别'],
    colors: ['#087DDA', '#A8DEFF', '#FF1744']
  },
  {
    index: '04',
    title: '王一博官宣 KV',
    meta: '全球代言人 / 官宣传播 / 品牌升级',
    image: '/images/projects/brand-kv-wang-yibo.jpg',
    heading: '以品牌资产承接全球代言官宣',
    description: '画面延续 life·space 标志性的品牌蓝，并以同色系人物造型建立代言人与品牌之间的视觉关联。金色大标题突出“全球代言人”的身份信息，形成具有发布感的官宣第一印象；流动光轨环绕人物并延伸至底部产品矩阵，将明星影响力、品牌态度与产品背书连接在同一条视觉路径中，完成从身份官宣到品牌认知的清晰传达。',
    keywords: ['品牌资产', '身份官宣', '产品背书'],
    colors: ['#006DDA', '#80C7FF', '#F2D49A']
  }
];

const creativeRenderImages = [
  '/images/projects/render-creative-01.jpg',
  '/images/projects/render-creative-02.jpg',
  '/images/projects/render-creative-03.jpg',
  '/images/projects/render-creative-04.jpg',
  '/images/projects/render-creative-05.jpg',
  '/images/projects/render-creative-06.jpg'
];

const productRenderImages = [
  '/images/projects/product-render-01.jpg',
  '/images/projects/product-render-02.jpg',
  '/images/projects/product-render-03.jpg',
  '/images/projects/product-render-04.jpg'
];

const livestreamCases = [
  { title: '天猫日常直播视觉', image: '/images/projects/livestream-daily.jpg' },
  { title: '小红书室内直播视觉', image: '/images/projects/livestream-xhs-interior.jpg' },
  { title: '双11直播间视觉', image: '/images/projects/livestream-double11.jpg' },
  { title: '过年前直播间视觉', image: '/images/projects/livestream-pre-spring.jpg' },
  { title: '春节直播间视觉', image: '/images/projects/livestream-spring-festival.jpg' },
  { title: '代言人续约直播视觉', image: '/images/projects/livestream-ambassador-renewal.jpg' }
];

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
  const isBrandKv = slug === 'brand-kv';
  const is3dRendering = slug === '3d-rendering';
  const isLivestream = slug === 'livestream';

  return (
    <main className="workDetailPage">
      <header className="workDetailNav">
        <a href="/#works" className="backButton"><span>←</span> 返回作品分类</a>
        <span>SHEN LURONG / PORTFOLIO</span>
        <a href="mailto:248612569@qq.com">联系合作 ↗</a>
      </header>

      {!isProductDetail && !isBrandKv && !is3dRendering && !isLivestream && (
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
        <section className="pylCaseStudy" aria-label="益生菌详情页设计案例">
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
              <h2>PYL100<br />益生菌</h2>
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
            <div className="pylArtworkGrid" role="img" aria-label="PYL100 益生菌电商详情页，按顺序分为三列展示">
              <i className="pylArtworkSegment pylArtworkSegment1"><img src="/images/projects/pyl100-detail.jpg" alt="" /></i>
              <i className="pylArtworkSegment pylArtworkSegment2"><img src="/images/projects/pyl100-detail.jpg" alt="" /></i>
              <i className="pylArtworkSegment pylArtworkSegment3"><img src="/images/projects/pyl100-detail.jpg" alt="" /></i>
            </div>
          </div>

          <div className="pylCaseHeader pylCaseHeader--second">
            <div className="pylCaseIdentity">
              <p>02 / E-COMMERCE DESIGN</p>
              <h2>600亿<br />益生菌</h2>
              <div className="lpbSymbol" aria-label="LPB27 自研菌株视觉符号">
                <i>LPB</i><b>27</b><span>PROPRIETARY STRAIN</span>
              </div>
              <span>详情页视觉设计 / 日常肠道养护品类</span>
            </div>

            <div className="pylCaseContent">
              <article>
                <span>PRODUCT BENEFIT / 产品功效</span>
                <h3>600 亿高含量配方，快速开启肠道养护</h3>
                <p>围绕日常肠道菌群平衡与消化状态管理，以 600 亿高含量益生菌为核心信息，并重点突出自主研发的 LPB27 菌株，传达高活性补充、快速响应与持续肠道防护的产品价值。</p>
              </article>
              <article>
                <span>DESIGN CONCEPT / 设计思路</span>
                <h3>品牌蓝 × 速度感 × 科技感</h3>
                <p>视觉以高明度品牌蓝建立专业科技基调，通过斜切箭头、加速光轨与向前冲刺的构图节奏，强化“快速护肠”的速度感。将自研菌株名称 LPB27 提炼为胶囊形菌株符号，并结合环形能量轨迹反复出现，使核心技术成为贯穿页面的视觉记忆点；信息层级围绕 600 亿含量、LPB27 菌株与日常养护利益展开，兼顾科学可信度与电商阅读效率。</p>
              </article>
              <div className="pylPalette" aria-label="项目色彩系统">
                <div><i style={{ background: '#028FE5' }} /><span>主色<br /><b>#028FE5</b></span></div>
                <div><i style={{ background: '#0055C7' }} /><span>辅助色<br /><b>#0055C7</b></span></div>
                <div><i style={{ background: '#FFFFFF' }} /><span>信息色<br /><b>#FFFFFF</b></span></div>
                <div><i style={{ background: '#F2C65C' }} /><span>点缀色<br /><b>#F2C65C</b></span></div>
              </div>
            </div>
          </div>

          <div className="pylArtwork pylArtwork--lpb">
            <div className="pylArtworkLabel"><span>FULL DETAIL PAGE</span><b>完整详情页展示</b></div>
            <div className="pylArtworkGrid" role="img" aria-label="600 亿益生菌电商详情页，按顺序分为三列展示">
              <i className="pylArtworkSegment lpbArtworkSegment pylArtworkSegment1"><img src="/images/projects/lpb27-600-detail.jpg" alt="" /></i>
              <i className="pylArtworkSegment lpbArtworkSegment pylArtworkSegment2"><img src="/images/projects/lpb27-600-detail.jpg" alt="" /></i>
              <i className="pylArtworkSegment lpbArtworkSegment pylArtworkSegment3"><img src="/images/projects/lpb27-600-detail.jpg" alt="" /></i>
            </div>
          </div>

          <div className="pylCaseHeader pylCaseHeader--second">
            <div className="pylCaseIdentity">
              <p>03 / E-COMMERCE DESIGN</p>
              <h2>车载<br />香薰仪</h2>
              <span>详情页视觉设计 / 智能车载香氛品类</span>
            </div>

            <div className="pylCaseContent">
              <article>
                <span>PRODUCT BENEFIT / 产品功效</span>
                <h3>智能感应调节，提升车内空气体验</h3>
                <p>围绕驾驶场景中的异味与香氛管理需求，将智能感应、便捷操控和持续扩香整合为核心卖点。产品可减少频繁手动操作，以稳定细腻的香气释放改善车内环境，为日常通勤与长途驾驶营造更舒适的空间体验。</p>
              </article>
              <article>
                <span>DESIGN CONCEPT / 设计思路</span>
                <h3>深海蓝 × AI 科技 × 金属质感</h3>
                <p>页面以深海蓝和金属黑构建智能车载设备的科技氛围，将香薰仪置于真实出风口与座舱场景中，通过芯片纹理、数据面板、气流光线和环形能量轨迹解释智能感应与扩香路径。香槟金作为点缀强化产品材质与高级感，纵向信息节奏从功能识别、技术原理到使用场景逐步展开，让科技卖点更直观易懂。</p>
              </article>
              <div className="pylPalette" aria-label="项目色彩系统">
                <div><i style={{ background: '#071B38' }} /><span>主色<br /><b>#071B38</b></span></div>
                <div><i style={{ background: '#0D4F8F' }} /><span>辅助色<br /><b>#0D4F8F</b></span></div>
                <div><i style={{ background: '#F3F7FA' }} /><span>信息色<br /><b>#F3F7FA</b></span></div>
                <div><i style={{ background: '#C5A064' }} /><span>点缀色<br /><b>#C5A064</b></span></div>
              </div>
            </div>
          </div>

          <div className="pylArtwork pylArtwork--car">
            <div className="pylArtworkLabel"><span>FULL DETAIL PAGE</span><b>完整详情页展示</b></div>
            <div className="pylArtworkGrid" role="img" aria-label="车载香薰仪电商详情页，按顺序分为三列展示">
              <i className="pylArtworkSegment carArtworkSegment pylArtworkSegment1"><img src="/images/projects/car-aroma-detail.jpg" alt="" /></i>
              <i className="pylArtworkSegment carArtworkSegment pylArtworkSegment2"><img src="/images/projects/car-aroma-detail.jpg" alt="" /></i>
              <i className="pylArtworkSegment carArtworkSegment pylArtworkSegment3"><img src="/images/projects/car-aroma-detail.jpg" alt="" /></i>
            </div>
          </div>

          <div className="pylCaseHeader pylCaseHeader--second">
            <div className="pylCaseIdentity">
              <p>04 / E-COMMERCE DESIGN</p>
              <h2>中老年<br />益生菌</h2>
              <span>详情页视觉设计 / 中老年肠道养护品类</span>
            </div>

            <div className="pylCaseContent">
              <article>
                <span>PRODUCT BENEFIT / 产品功效</span>
                <h3>面向中老年人群的日常肠道守护</h3>
                <p>围绕年龄增长带来的肠道菌群变化与日常排便管理需求，以适龄益生菌组合为核心信息，传达补充有益菌、维持菌群平衡和支持消化状态的产品价值，为长辈提供温和、持续且易理解的日常肠道养护方案。</p>
              </article>
              <article>
                <span>DESIGN CONCEPT / 设计思路</span>
                <h3>清透蓝 × 温和守护 × 科学可信</h3>
                <p>视觉以清透蓝建立洁净、安心的健康氛围，通过柔和光环、透明气泡、胶囊与流动水感表现益生菌活力和温和养护。人物生活场景增强长辈人群的代入感，金色点缀传达关怀与品质；页面采用更清晰的字号、对比和分段结构，将人群需求、配方依据与食用信息逐层呈现，兼顾科学感与适老阅读体验。</p>
              </article>
              <div className="pylPalette" aria-label="项目色彩系统">
                <div><i style={{ background: '#14B7E7' }} /><span>主色<br /><b>#14B7E7</b></span></div>
                <div><i style={{ background: '#86E2F5' }} /><span>辅助色<br /><b>#86E2F5</b></span></div>
                <div><i style={{ background: '#FFFFFF' }} /><span>信息色<br /><b>#FFFFFF</b></span></div>
                <div><i style={{ background: '#F5C862' }} /><span>点缀色<br /><b>#F5C862</b></span></div>
              </div>
            </div>
          </div>

          <div className="pylArtwork pylArtwork--senior">
            <div className="pylArtworkLabel"><span>FULL DETAIL PAGE</span><b>完整详情页展示</b></div>
            <div className="pylArtworkGrid" role="img" aria-label="中老年益生菌电商详情页，按顺序分为三列展示">
              <i className="pylArtworkSegment seniorArtworkSegment pylArtworkSegment1"><img src="/images/projects/senior-probiotic-detail.jpg" alt="" /></i>
              <i className="pylArtworkSegment seniorArtworkSegment pylArtworkSegment2"><img src="/images/projects/senior-probiotic-detail.jpg" alt="" /></i>
              <i className="pylArtworkSegment seniorArtworkSegment pylArtworkSegment3"><img src="/images/projects/senior-probiotic-detail.jpg" alt="" /></i>
            </div>
          </div>
          <a className="pylBackLink" href="/#works">← 返回浏览其他分类</a>
        </section>
      ) : isBrandKv ? (
        <section className="brandKvStudy" aria-label="品牌 KV 视觉案例">
          <div className="caseCategoryLead">
            <div className="caseCategoryHeading">
              <div>
                <p>01 / {item.english}</p>
                <h1>{item.title} <i>↘</i></h1>
                <span>{item.description}</span>
              </div>
              <p>{item.intro}</p>
            </div>
          </div>

          <div className="brandKvList">
            {brandKvCases.map(project => (
              <article className="brandKvCase" key={project.index}>
                <div className="brandKvImage">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="brandKvCopy">
                  <p className="brandKvIndex">{project.index} / BRAND KEY VISUAL</p>
                  <h2>{project.title}</h2>
                  <span className="brandKvMeta">{project.meta}</span>
                  <div className="brandKvStrategy">
                    <span>VISUAL STRATEGY / 视觉策略</span>
                    <h3>{project.heading}</h3>
                    <p>{project.description}</p>
                  </div>
                  <div className="brandKvFooter">
                    <div className="brandKvKeywords">
                      {project.keywords.map(keyword => <span key={keyword}>{keyword}</span>)}
                    </div>
                    <div className="brandKvColors" aria-label={`${project.title}配色`}>
                      {project.colors.map(color => <i key={color} style={{ background: color }} title={color} />)}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <a className="pylBackLink" href="/#works">← 返回浏览其他分类</a>
        </section>
      ) : isLivestream ? (
        <section className="renderStudy livestreamStudy" aria-label="直播间视觉作品集">
          <div className="caseCategoryLead">
            <div className="caseCategoryHeading">
              <div>
                <p>04 / {item.english}</p>
                <h1>{item.title} <i>↘</i></h1>
                <span>{item.description}</span>
              </div>
              <p>{item.intro}</p>
            </div>
          </div>

          <section className="renderSection" aria-labelledby="livestream-visual-title">
            <div className="renderSectionHeading">
              <p>01 / LIVE COMMERCE VISUAL SYSTEM</p>
              <h2 id="livestream-visual-title">直播间视觉</h2>
              <span>06 WORKS</span>
            </div>
            <div className="livestreamGrid">
              {livestreamCases.slice(0, 3).map((project, index) => (
                <figure className="livestreamCard" key={project.image}>
                  <img src={project.image} alt={project.title} loading={index === 0 ? 'eager' : 'lazy'} decoding="async" />
                  <figcaption><span>{String(index + 1).padStart(2, '0')}</span><b>{project.title}</b></figcaption>
                </figure>
              ))}
              <div className="renderGridDivider" aria-hidden="true">
                <span>LIVE COMMERCE · CAMPAIGN VISUAL SYSTEM</span>
              </div>
              {livestreamCases.slice(3).map((project, index) => (
                <figure className="livestreamCard" key={project.image}>
                  <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
                  <figcaption><span>{String(index + 4).padStart(2, '0')}</span><b>{project.title}</b></figcaption>
                </figure>
              ))}
            </div>
          </section>
          <a className="pylBackLink" href="/#works">← 返回浏览其他分类</a>
        </section>
      ) : is3dRendering ? (
        <section className="renderStudy" aria-label="三维渲染作品集">
          <div className="caseCategoryLead">
            <div className="caseCategoryHeading">
              <div>
                <p>05 / {item.english}</p>
                <h1>{item.title} <i>↘</i></h1>
                <span>{item.description}</span>
              </div>
              <p>{item.intro}</p>
            </div>
          </div>

          <section className="renderSection" aria-labelledby="creative-render-title">
            <div className="renderSectionHeading">
              <p>01 / CREATIVE POSTERS</p>
              <h2 id="creative-render-title">三维创意海报</h2>
              <span>06 WORKS</span>
            </div>
            <div className="creativeRenderGrid">
              {creativeRenderImages.slice(0, 3).map((image, index) => (
                <figure className="renderImageCard" key={image}>
                  <img src={image} alt={`三维创意海报 ${String(index + 1).padStart(2, '0')}`} />
                </figure>
              ))}
              <div className="renderGridDivider" aria-hidden="true">
                <span>3D CREATIVE VISUAL EXPLORATION</span>
              </div>
              {creativeRenderImages.slice(3).map((image, index) => (
                <figure className="renderImageCard" key={image}>
                  <img src={image} alt={`三维创意海报 ${String(index + 4).padStart(2, '0')}`} />
                </figure>
              ))}
            </div>
          </section>

          <section className="renderSection renderSection--products" aria-labelledby="product-render-title">
            <div className="renderSectionHeading">
              <p>02 / PRODUCT RENDERING</p>
              <h2 id="product-render-title">产品渲染</h2>
              <span>04 WORKS</span>
            </div>
            <div className="productRenderGrid">
              {productRenderImages.slice(0, 2).map((image, index) => (
                <figure className="renderImageCard" key={image}>
                  <img src={image} alt={`产品渲染 ${String(index + 1).padStart(2, '0')}`} />
                </figure>
              ))}
              <div className="renderGridDivider" aria-hidden="true">
                <span>PRODUCT FORM · MATERIAL · LIGHTING</span>
              </div>
              {productRenderImages.slice(2).map((image, index) => (
                <figure className="renderImageCard" key={image}>
                  <img src={image} alt={`产品渲染 ${String(index + 3).padStart(2, '0')}`} />
                </figure>
              ))}
            </div>
          </section>
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
