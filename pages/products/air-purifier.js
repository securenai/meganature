import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function AirPufier() {
  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            空氣清淨機
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            以下是我們的空氣清淨機，歡迎參考。
          </p>
        </div>
        <div className="flex flex-wrap gap-10">
          <div className="pt-8">
            事心開制上但成：漸落任興企裡沒……日歌事來可少自，阿標家：們會終加、主們沒？來裡院王樣戰速特中系上辦修型他都的政母方期隊及的育了交場史食賽心是小然已精我關大分要：險白盡所……情懷力港水能都起冷黨府開外素得為此河不像是找，說主食兒一人視一備越中去再山現士創質包太是健學過語聲與子了子多上她年個流……示會時日度的命我：相牛傳於前樂市師候下，可了起量所向馬任求理指身標興心車球舉將。那難語年程我毛理企自最經為？
            水們三南無認工已這白洲地南道不人個求？無息開，又大長文示重成親？地斷再下兒的企銀用種：了今心此。歡整子不常方個親工至不，與汽檢不運行，的使委住因不這分打，它老雲海光多力級文麗及樂果分先開字的之公如化源縣沒來。大家聲辦在則那在的境？
            認不離而才百，留西種達案市料問汽法市計、先說念究樣得？過線風地們成知：視候更……那也續在正出要數果無跟，最收列能到比人界畫語我人國？好勢料小是同市，興活的之一題早看。且家水面學我人出險西我意而象酒。
            由樹聽場子我處不。生一我小龍情司孩：告點不一情支色一部兩說年先名容級個度類一我。
          </div>
          <img src="/static/images/products/air-purifier/a1.jpg" alt="air-purifier-1" width={400} />
          <img src="/static/images/products/air-purifier/a2.jpg" alt="air-purifier-2" width={400} />
          <img src="/static/images/products/air-purifier/a3.jpg" alt="air-purifier-3" width={400} />
        </div>
        <Footer />
      </div>
    </>
  )
}
