import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'SupportLayout'

export async function getStaticProps() {
  const supportDetails = await getFileBySlug('support', ['default'])
  return { props: { supportDetails } }
}

export default function About({ supportDetails }) {
  const { mdxSource, frontMatter } = supportDetails

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
