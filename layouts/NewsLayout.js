import { PageSEO } from '@/components/SEO'
import Trail from '@/components/Effects/Trail'

export default function NewsLayout({ children, frontMatter }) {
  const { name } = frontMatter

  return (
    <>
      <PageSEO title={`News - ${name}`} description={`News - ${name}`} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            最新消息
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          {/* <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
            <Trail open>{children}</Trail>
          </div> */}
        </div>
      </div>
    </>
  )
}
