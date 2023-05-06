const headerNavLinks = [
  { href: '/about', title: '關於恒自然' },
  {
    href: '/products',
    title: '產品選項',
    subNav: [
      { title: '空氣清淨機', href: '/products/air-purifier' },
      { title: '3D 列印', href: '/products/3d-printing' },
      { title: '植物工廠', href: '/products/plant-factory' },
      { title: '工程塑橡膠', href: '/products/engineering-plastics' },
      { title: '機械製造', href: '/products/mechanical-manufacturing' },
    ],
  },
  {
    href: '/support',
    title: '技術支援/電子型錄',
    subNav: [
      { title: '子目錄一', href: '/support/subnav1' },
      { title: '子目錄二', href: '/support/subnav2' },
    ],
  },
  { href: '/blog', title: '最新消息' },
  { href: '/contact', title: '聯絡我們' },
]

export default headerNavLinks
