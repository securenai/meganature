import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getAllNews, getFileBySlug } from '@/lib/mdx'
import LatestNewsList from '@/components/LatestNewsList'

const DEFAULT_LAYOUT = 'NewsLayout'

export async function getStaticProps() {
  const newsDetails = await getFileBySlug('newsMenu', ['default'])
  const newsList = getAllNews()

  return { props: { newsDetails, newsList } }
}

export default function News({ newsDetails, newsList }) {
  const { mdxSource, frontMatter } = newsDetails

  return (
    <>
      <MDXLayoutRenderer
        layout={frontMatter.layout || DEFAULT_LAYOUT}
        mdxSource={mdxSource}
        frontMatter={frontMatter}
      />
      <LatestNewsList newsList={newsList} />
    </>
  )
}
