import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'ContactLayout'

export async function getStaticProps() {
  const contactDetails = await getFileBySlug('contact', ['default'])
  return { props: { contactDetails } }
}

export default function Contact({ contactDetails }) {
  const { mdxSource, frontMatter } = contactDetails

  return (
    <MDXLayoutRenderer
      layout={frontMatter.layout || DEFAULT_LAYOUT}
      mdxSource={mdxSource}
      frontMatter={frontMatter}
    />
  )
}
