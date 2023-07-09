import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'CompanyInfoLayout'

export async function getStaticProps() {
  const aboutDetails = await getFileBySlug('about', ['default'])
  return { props: { aboutDetails } }
}

export default function About({ aboutDetails }) {
  const { mdxSource, frontMatter } = aboutDetails

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
