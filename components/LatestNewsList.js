// components/LatestNewsList.js

import Link from 'next/link'

export default function LatestNewsList({ newsList }) {
  return (
    <div className="space-y-4 pt-6">
      <div className="hidden sm:flex sm:items-center">
        <p className="w-2/6 text-lg font-bold">日期</p>
        <p className="w-4/6 text-lg font-bold">標題</p>
      </div>
      <ul className="list-inside list-disc">
        {newsList.map((news, index) => {
          let formattedDate = null
          try {
            const dateObj = new Date(news.date)
            if (!isNaN(dateObj.getTime())) {
              formattedDate = dateObj.toLocaleString('zh-TW', {
                timeZone: 'Asia/Taipei',
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
              })
              formattedDate = formattedDate.replace(/\//g, '-')
            }
          } catch (error) {
            console.error(`Error parsing date: ${news.date}`, error)
          }

          const hasBorder = index < newsList.length - 1

          return (
            <li
              key={news.slug}
              className={`flex flex-col space-y-1 sm:flex-row sm:items-center sm:space-x-4 ${
                hasBorder ? 'border-b border-gray-300 pb-2' : ''
              }`}
            >
              {formattedDate && (
                <span className="w-2/6 text-sm font-medium text-gray-500 sm:text-lg">
                  {formattedDate}
                </span>
              )}
              <Link href={`/news/${news.slug}`}>
                <a className="w-4/6 font-medium text-blue-500 hover:text-blue-700 sm:text-lg">
                  {news.title}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
