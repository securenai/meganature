import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import Trail from '@/components/Effects/Trail'

export default function ContactLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = frontMatter

  function handleSubmit(event) {
    event.preventDefault()
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
                <form
                  className="w-full max-w-lg"
                  onSubmit={handleSubmit}
                  name="contact"
                  data-netlify="true"
                >
                  <input type="hidden" name="form-name" value="contact" />

                  <div className="mb-6 flex flex-wrap">
                    <label className="mb-1 block w-full" htmlFor="name">
                      Name:
                    </label>
                    <input
                      className="w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 leading-tight text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none"
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="mb-6 flex flex-wrap">
                    <label className="mb-1 block w-full" htmlFor="phone">
                      Phone:
                    </label>
                    <input
                      className="w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 leading-tight text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none"
                      id="phone"
                      type="tel"
                      name="phone"
                      placeholder="Your phone number"
                      required
                    />
                  </div>

                  <div className="mb-6 flex flex-wrap">
                    <label className="mb-1 block w-full" htmlFor="email">
                      Email:
                    </label>
                    <input
                      className="w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 leading-tight text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none"
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Your email address"
                      required
                    />
                  </div>

                  <div className="mb-6 flex flex-wrap">
                    <label className="mb-1 block w-full" htmlFor="message">
                      Message:
                    </label>
                    <textarea
                      className="h-48 w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 leading-tight text-gray-700 focus:border-blue-500 focus:bg-white focus:outline-none"
                      id="message"
                      name="message"
                      placeholder="Write your message here"
                      required
                    ></textarea>
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
                      type="submit"
                    >
                      Send Message
                    </button>
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
