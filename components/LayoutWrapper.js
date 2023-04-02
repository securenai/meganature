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

const LayoutWrapper = ({ children }) => {
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
      <div className="flex h-screen flex-col justify-between">
        <header
          className="flex items-center justify-between py-10"
          style={{ flexDirection: headerFlexDirection }}
        >
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="mr-3 mb-4">
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
                  className="group relative inline-block"
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
                      className="absolute left-0 z-10 mt-2 divide-y divide-gray-100 border border-gray-200 bg-white shadow-sm"
                      style={{ minWidth: 'max-content', width: '100%' }}
                    >
                      {link.subNav.map((subLink) => (
                        <Link
                          key={subLink.title}
                          href={subLink.href}
                          className="mb-1 block px-4 py-2 hover:bg-gray-200"
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
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
