import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Footer from '@/components/Footer'

export default function ThreeDPrinting() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            3D列印
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            以下是我們的3D列印產品，歡迎參考。
          </p>
        </div>
        <Footer />
      </div>
    </>
  )
}
