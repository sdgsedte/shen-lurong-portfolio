'use client';

import { useState } from 'react';

type Slide = {
  src: string;
  alt: string;
  label: string;
};

function CaseCarousel({ slides, label, variant }: { slides: Slide[]; label: string; variant: 'kv' | 'product' }) {
  const [active, setActive] = useState(0);

  const show = (index: number) => {
    setActive((index + slides.length) % slides.length);
  };

  return (
    <div className={`homepageCarousel homepageCarousel--${variant}`} aria-label={label}>
      <div className="homepageCarouselViewport">
        <div className="homepageCarouselTrack" style={{ transform: `translateX(-${active * 100}%)` }}>
          {slides.map((slide, index) => (
            <figure className="homepageCarouselSlide" key={slide.src} aria-hidden={index !== active}>
              <img src={slide.src} alt={slide.alt} loading={index === 0 ? 'eager' : 'lazy'} decoding="async" />
              <figcaption><span>{String(index + 1).padStart(2, '0')}</span>{slide.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
      <div className="homepageCarouselControls">
        <button type="button" onClick={() => show(active - 1)} aria-label="上一张">←</button>
        <div className="homepageCarouselDots" aria-label="轮播页码">
          {slides.map((slide, index) => (
            <button
              type="button"
              className={index === active ? 'isActive' : ''}
              onClick={() => show(index)}
              aria-label={`查看${slide.label}`}
              aria-current={index === active ? 'true' : undefined}
              key={slide.src}
            />
          ))}
        </div>
        <span>{String(active + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}</span>
        <button type="button" onClick={() => show(active + 1)} aria-label="下一张">→</button>
      </div>
    </div>
  );
}

const kvSlides: Slide[] = [
  { src: '/images/projects/38-homepage/kv-products.webp', alt: '38 焕新周产品组合主视觉', label: '焕新周产品组合 KV' },
  { src: '/images/projects/38-homepage/kv-wang-yibo.webp', alt: '王一博焕新周主视觉', label: '王一博超感焕活 KV' },
];

const productSlides: Slide[] = [
  { src: '/images/projects/38-homepage/product-320.webp', alt: '320 亿广谱益生菌首页产品模块', label: '320 亿广谱益生菌' },
  { src: '/images/projects/38-homepage/product-pyl.webp', alt: 'PYL100 超舒益生菌首页产品模块', label: 'PYL100 超舒益生菌' },
  { src: '/images/projects/38-homepage/product-b420-3.webp', alt: 'B420 3.0 益生菌首页产品模块', label: 'B420 3.0 超燃益生菌' },
  { src: '/images/projects/38-homepage/product-b420-s600.webp', alt: 'B420 与 S600 组合首页产品模块', label: 'B420 + S600 组合' },
];

export default function HomepageCaseStudy() {
  return (
    <section className="homepageCaseStudy" aria-label="38 焕新周店铺首页设计案例">
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

      <section className="homepageModule" aria-labelledby="homepage-kv-title">
        <div className="homepageModuleHeading">
          <div><span>01 / KEY VISUAL SYSTEM</span><h3 id="homepage-kv-title">核心视觉轮播</h3></div>
          <p>产品组合与代言人双 KV 共同承接活动主题，建立统一的首页第一视觉。</p>
        </div>
        <CaseCarousel slides={kvSlides} label="38 焕新周核心视觉轮播" variant="kv" />
      </section>

      <section className="homepageModule" aria-labelledby="homepage-operation-title">
        <div className="homepageModuleHeading">
          <div><span>02 / MEMBER & LIVE CONTENT</span><h3 id="homepage-operation-title">会员与直播承接</h3></div>
          <p>用权益模块降低决策成本，并通过直播入口继续承接人群与商品内容。</p>
        </div>
        <div className="homepageOperationGrid">
          <figure className="homepageOperationCard homepageOperationCard--wide">
            <img src="/images/projects/38-homepage/member-benefits.webp" alt="会员充值、消费券与会员礼权益模块" loading="lazy" decoding="async" />
            <figcaption><span>MEMBER BENEFITS</span><b>会员尊享 · 券礼宠粉</b></figcaption>
          </figure>
          <figure className="homepageOperationCard">
            <img src="/images/projects/38-homepage/livestream-entry.webp" alt="直播间专属礼与产品选购入口" loading="lazy" decoding="async" />
            <figcaption><span>LIVE COMMERCE</span><b>直播间专属礼</b></figcaption>
          </figure>
        </div>
      </section>

      <section className="homepageModule" aria-labelledby="homepage-product-title">
        <div className="homepageModuleHeading">
          <div><span>03 / PRODUCT MATRIX</span><h3 id="homepage-product-title">核心产品轮播</h3></div>
          <p>以统一的花境、展台和权益结构组织四组产品，让用户快速完成品类识别与选购。</p>
        </div>
        <CaseCarousel slides={productSlides} label="38 焕新周核心产品轮播" variant="product" />
      </section>

      <a className="pylBackLink" href="/#works">← 返回浏览其他分类</a>
    </section>
  );
}
