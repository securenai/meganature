import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import Trail from '@/components/Effects/Trail'
import Footer from '@/components/Footer'

export default function AboutLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = frontMatter

  return (
    <>
      <PageSEO title={`About`} description={`About`} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            關於恆自然
          </h1>
        </div>
        <div className="h-screen items-start space-y-2 xl:space-y-0">
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark">
            <Trail open>{children}</Trail>
          </div>
        </div>
      </div>
    </>
  )
}
