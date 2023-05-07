import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import Trail from '@/components/Effects/Trail'

export default function ContactLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = frontMatter

  async function handleSubmit(event) {
    event.preventDefault()

    const data = {
      name: event.target.name.value,
      phone: event.target.phone.value,
      email: event.target.email.value,
      message: event.target.message.value,
    }

    try {
      const response = await fetch('../api/sendEmail.js', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      })

      if (!response.ok) {
        throw new Error('Error sending email')
      }

      alert('信件已成功寄出!')
    } catch (error) {
      alert('抱歉! 發生錯誤，信件未能送出: ' + error.message)
    }
  }

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About - ${name}`} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            聯絡我們
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          {/* <div className="mt-8 flex flex-col items-center bg-green-200 py-8">
            <Image
              src={avatar}
              alt="company"
              width="192px"
              height="192px"
              // className="h-48 w-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="twitter" href={twitter} />
            </div>
          </div> */}
          {/* <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">{children}</div> */}
          <Trail open>
            <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
              {children}
              <div>
                <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                  <div className="mb-6 flex flex-wrap">
                    <div className="mb-6 w-full px-3 md:mb-0 md:w-1/2">
                      <label className="mb-1 block w-full" htmlFor="name">
                        姓名
                      </label>
                      <input
                        className="w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 leading-tight text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none"
                        id="name"
                        type="text"
                        required
                      />
                    </div>
                    <div className="w-full px-3 md:w-1/2">
                      <label className="mb-1 block w-full" htmlFor="phone">
                        Phone
                      </label>
                      <input
                        className="w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 leading-tight text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none"
                        id="phone"
                        type="tel"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-6 flex flex-wrap">
                    <div className="w-full px-3">
                      <label className="mb-1 block w-full" htmlFor="email">
                        Email
                      </label>
                      <input
                        className="w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 leading-tight text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none"
                        id="email"
                        type="email"
                        placeholder="email"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-6 flex flex-wrap">
                    <div className="w-full px-3">
                      <label className="mb-1 block w-full" htmlFor="message">
                        Message
                      </label>
                      <textarea
                        className="w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 leading-tight text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none"
                        id="message"
                        rows="5"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex flex-wrap">
                    <div className="w-full px-3">
                      <button
                        className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Trail>
        </div>
      </div>
    </>
  )
}
