const headerNavLinks = [
  { href: '/about', title: '關於恒自然' },
  {
    href: '/products',
    title: '產品選項',
    subNav: [
      { title: '空氣清淨機', href: '/nav1/subnav1' },
      { title: '3D 列印', href: '/nav1/subnav2' },
      { title: '植物工廠', href: '/nav1/subnav3' },
      { title: '工程塑橡膠', href: '/nav1/subnav4' },
      { title: '機械製造', href: '/nav1/subnav5' },
    ],
  },
  {
    href: '/tags',
    title: '技術支援/電子型錄',
    subNav: [
      { title: 'Sub Nav 2.1', href: '/nav2/subnav1' },
      { title: 'Sub Nav 2.2', href: '/nav2/subnav2' },
    ],
  },
  { href: '/blog', title: '最新消息' },
  { href: '/contact', title: '聯絡我們' },
]

export default headerNavLinks
