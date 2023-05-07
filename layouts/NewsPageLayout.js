import React from 'react'
import Link from 'next/link'

const NewsPageLayout = ({ children, frontMatter }) => {
  const formattedDate = new Date(frontMatter.date)
    .toLocaleDateString('zh-TW', {
      timeZone: 'Asia/Taipei',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    })
    .replace(/\//g, '-')

  return (
    <div className="p-4">
      <Link href="/news">
        <a className="mb-4 inline-block font-bold text-blue-500 hover:text-blue-700">
          {'< 回到最新消息'}
        </a>
      </Link>
      <h1 className="mb-4 text-3xl font-bold">{frontMatter.title}</h1>
      <p className="mb-4 text-lg text-gray-500">{formattedDate}</p>
      <main>{children}</main>
    </div>
  )
}

export default NewsPageLayout
