export const workCategories = [
  {
    slug: 'brand-kv',
    index: '01',
    title: '品牌 KV 海报',
    english: 'BRAND KEY VISUAL',
    description: '品牌主视觉 / 营销海报 / 大促传播',
    image: '/images/project-ai.png',
    intro: '围绕品牌定位与传播主题，建立兼顾辨识度、信息效率与多渠道延展的核心视觉。'
  },
  {
    slug: 'product-detail',
    index: '02',
    title: '产品详情页设计',
    english: 'PRODUCT DETAIL PAGE',
    description: '信息架构 / 卖点表达 / 转化设计',
    image: '/images/project-skincare.png',
    intro: '从用户决策路径出发，组织产品卖点、视觉节奏与信任信息，完成高效的电商详情表达。'
  },
  {
    slug: 'store-home',
    index: '03',
    title: '店铺首页设计',
    english: 'STORE HOMEPAGE',
    description: '店铺装修 / 活动会场 / 视觉体系',
    image: '/images/project-stationery.png',
    intro: '以品牌调性统筹店铺首页、活动入口与货品层级，在统一视觉中兼顾浏览效率和营销节奏。'
  },
  {
    slug: 'livestream',
    index: '04',
    title: '直播间物料设计',
    english: 'LIVE COMMERCE',
    description: '直播背景 / 贴片 / 引流物料',
    image: '/images/campaign/campaign-04.webp',
    intro: '围绕直播场景建立从主背景、机制贴片到引流海报的整套视觉，确保信息清晰且快速适配。'
  },
  {
    slug: '3d-rendering',
    index: '05',
    title: '三维渲染',
    english: '3D RENDERING',
    description: '产品建模 / 材质灯光 / 商业氛围',
    image: '/images/hero-campaign-v2.png',
    intro: '通过产品建模、材质、灯光与场景搭建，输出具有商业质感的静帧与动态视觉素材。'
  }
];

export function getWorkCategory(slug) {
  return workCategories.find(item => item.slug === slug);
}
