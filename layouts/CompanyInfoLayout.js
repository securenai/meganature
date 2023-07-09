import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import Trail from '@/components/Effects/Trail'
import Footer from '@/components/Footer'

export default function CompanyInfoLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = frontMatter

  return (
    <>
      <PageSEO title={`CompanyInfo`} description={`CompanyInfo`} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            公司簡介
          </h1>
        </div>
        <div className="h-screen items-start space-y-2 xl:space-y-0">
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark">
            <Trail open>
              <>
                <div className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
                  <span className="bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text text-transparent">
                    恆自然 恆久流傳
                  </span>{' '}
                  自然永續
                </div>
                <div>
                  恆自然開發公司長期以經營消毒空氣濾清器、3D列印、植物工廠、橡膠製品、機械製造服務為主，一直都是秉持著「責任、創新、品質」的經營理念，目前全球環境問題越來越嚴重，我們更應該負起節能省碳環保的社會責任。因此，我們應該更加重視以綠色、低碳的方式來經營公司，創造對社會環境更為友好的氛圍及貢獻為目標。
                </div>
                <br />
                <div>
                  我們公司的未來發展應該以實現可持續發展為目標，盡可能地減少對環境的影響。因此在公司經營中應該積極推進節能降耗的技術，大幅度降低能源、物資消耗和廢棄物排放。同時以循環經濟及再利用率的投入，減少對環境的損害及對下世代的著想的永續經營發展為基礎的恆自然的產業理念。
                </div>
                <br />
                <div>
                  我們未來的發展應該結合節能省碳環保，追求結合經濟效益和社會效益，作為一個時代的企業，這是我們不可迴避的社會責任。只有有意識地保護和改善環境才能帶來長期、穩定和健康的發展。讓我們共同努力，一起為未來創造一個更美好的世界。
                </div>
                <br />
                <h4>設立日期</h4>
                <div>2019年4月</div>
                <h4>員工人數</h4>
                <div>台灣/中國 150名</div>
                <h4>公司</h4>
                <div>新北市林口區四維路110號1樓之2</div>
                <h4>工廠</h4>
                <div>廣東省惠州市惠陽區新圩鎮長佈村(佑昌智造園)</div>
                <h4>產品</h4>
                <ul>
                  <li>消毒空氣清化機</li>
                  <li>3D列印</li>
                  <li>植物工廠</li>
                  <li>精密橡塑膠製品</li>
                  <li>CNC加工</li>
                </ul>
              </>
            </Trail>
          </div>
        </div>
      </div>
    </>
  )
}
