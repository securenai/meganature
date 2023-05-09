import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Logo2 from '@/data/logo2.png'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const LayoutWrapper = ({ children }) => {
  const router = useRouter()
  const path = router.pathname
  const [subNavVisible, setSubNavVisible] = useState({})

  const handleMouseEnter = (index) => {
    const newSubNavVisible = {}
    newSubNavVisible[index] = true
    setSubNavVisible(newSubNavVisible)
  }

  const handleMouseLeave = (index) => {
    setSubNavVisible({ ...subNavVisible, [index]: false })
  }

  const [headerFlexDirection, setHeaderFlexDirection] = useState('row')

  useEffect(() => {
    const updateHeaderFlexDirection = () => {
      if (window.innerWidth <= 640 || window.innerWidth > 1280) {
        setHeaderFlexDirection('row')
      } else {
        setHeaderFlexDirection('column')
      }
    }

    updateHeaderFlexDirection()
    window.addEventListener('resize', updateHeaderFlexDirection)

    return () => {
      window.removeEventListener('resize', updateHeaderFlexDirection)
    }
  }, [])

  return (
    <SectionContainer>
      <div className="flex flex-col justify-between h-screen">
        <header
          className="flex items-center justify-between py-10"
          style={{ flexDirection: headerFlexDirection }}
        >
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="mb-4 mr-3">
                  {/* <Logo /> */}
                  <Image src={Logo2} alt="Logo" />
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5 lg:mt-0">
            <div className="hidden sm:block">
              {headerNavLinks.map((link, index) => (
                <div
                  key={link.title}
                  className="relative inline-block group"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  <Link
                    href={link.href}
                    className="p-1 font-bold text-gray-900 group-hover:bg-emerald-400 dark:text-gray-100 sm:p-4"
                  >
                    {link.title}
                  </Link>
                  {link.subNav && subNavVisible[index] && (
                    <div
                      className="absolute left-0 z-10 mt-2 bg-white border border-gray-200 divide-y divide-gray-100 shadow-sm"
                      style={{ minWidth: 'max-content', width: '100%' }}
                    >
                      {link.subNav.map((subLink) => (
                        <Link
                          key={subLink.title}
                          href={subLink.href}
                          className="block px-4 py-2 mb-1 hover:bg-gray-200"
                        >
                          {subLink.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* <ThemeSwitch /> */}
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <div className="sm:hidden">{/* Footer hidden on mobile viewports */}</div>
        <div className="hidden sm:block">
          {/* Footer shown on non-mobile viewports */}
          {!path.includes('products') && <Footer />}
        </div>
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
