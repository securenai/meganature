import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug, getAllNewsSlugs } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'NewsPageLayout'

export async function getStaticProps({ params }) {
  const newsContent = await getFileBySlug('news', params.slug, ['title', 'date'])
  return { props: newsContent }
}

export async function getStaticPaths() {
  const slugs = getAllNewsSlugs()
  const paths = slugs.map((slug) => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}

export default function NewsContent({ mdxSource, frontMatter }) {
  return (
    <>
      <MDXLayoutRenderer
        layout={frontMatter.layout || DEFAULT_LAYOUT}
        mdxSource={mdxSource}
        frontMatter={frontMatter}
      />
    </>
  )
}
