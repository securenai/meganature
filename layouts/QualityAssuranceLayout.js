import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import Trail from '@/components/Effects/Trail'
import Footer from '@/components/Footer'
import ImageView from '@/components/ImageView'

export default function QualityAssuranceLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = frontMatter
  const images = [
    { src: '/static/images/about/certificates/BSCI.jpg', desc: '企業社會責任準則 BSCI' },
    { src: '/static/images/about/certificates/GRS.jpg', desc: '全球回收標準GRS' },
    {
      src: '/static/images/about/certificates/IATF16949.jpg',
      desc: '全球汽車產業品質管理系統驗證 IATF 16949',
    },
    { src: '/static/images/about/certificates/ISO45001-2018.jpg', desc: 'ISO45001-2018' },
    { src: '/static/images/about/certificates/ISO9001-2015.jpg', desc: 'ISO9001-2015' },
    { src: '/static/images/about/certificates/ISO14001-2015.jpg', desc: 'ISO14001-2015' },
  ]

  return (
    <>
      <PageSEO title={`QualityAssurance`} description={`QualityAssurance`} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            品質認證
          </h1>
        </div>
        <div className="h-screen items-start space-y-2 xl:space-y-0">
          <div className="prose flex max-w-none flex-wrap justify-center gap-8 pt-8 pb-8 dark:prose-dark">
            {images.map((image, index) => (
              <ImageView imgSrc={image.src} desc={image.desc} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
