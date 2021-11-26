import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faLightbulb } from '@fortawesome/free-regular-svg-icons'
import { faLightbulb as faSolidLightbulb } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { SocialLink } from 'components'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

function Header() {
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const currentClass = "bg-gray-900 text-white"
  const defaultClass = "text-gray-300 hover:bg-gray-700 hover:text-white"

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === 'light' ? 'dark' : 'light')
    }
  }

  return (
    <nav className="bg-gray-800 dark:bg-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href='/'>
                <a className="text-white	text-2xl font-bold">Manuel Robles</a>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 text-white">
                <Link href='/education'>
                  <a className={`px-3 py-2 rounded-md text-base font-medium ${router.pathname === '/education' ? currentClass : defaultClass}`}>
                    Education
                  </a>
                </Link>

                <Link href='/experience'>
                  <a className={`px-3 py-2 rounded-md text-base font-medium ${router.pathname === '/experience' ? currentClass : defaultClass}`}>
                    Experience
                  </a>
                </Link>

                <Link href='/projects'>
                  <a className={`px-3 py-2 rounded-md text-base font-medium ${router.pathname === '/projects' ? currentClass : defaultClass}`}>
                    Projects
                  </a>
                </Link>

              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <SocialLink icon={faFacebookF} href='https://www.facebook.com/mannyrobh' first />
              <SocialLink icon={faTwitter} href='https://twitter.com/mannyrobh' />
              {/* <SocialLink icon={faInstagram} href='https://www.instagram.com/mannyoaks/' /> */}
              <SocialLink icon={faGithub} href='https://github.com/mannyOaks' />
              <SocialLink icon={faLinkedin} href='https://www.linkedin.com/in/manuel-robles-368035204' />

              <div className="ml-6 items-center h-9 w-9 rounded-full flex border-2 border-transparent hover:border-white">
                <FontAwesomeIcon
                  icon={theme === 'light' ? faLightbulb : faSolidLightbulb}
                  onClick={switchTheme}
                  className="m-auto text-white text-xl no-select"
                />
              </div>
            </div>
          </div>


          <div className="-mr-2 flex md:hidden">
            {/* <!-- Mobile menu button --> */}
            <button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {
                  isMenuOpen
                    ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* <!--
        Mobile menu, toggle classNamees based on menu state.
        Open: "block", closed: "hidden"
      --> */}
      <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href='/'>
            <a className={`block px-3 py-2 rounded-md text-base font-medium ${router.pathname === '/' ? currentClass : defaultClass}`}>
              Home
            </a>
          </Link>
          <Link href='/education'>
            <a className={`block px-3 py-2 rounded-md text-base font-medium ${router.pathname === '/education' ? currentClass : defaultClass}`}>
              Education
            </a>
          </Link>
          <Link href='/projects'>
            <a className={`block px-3 py-2 rounded-md text-base font-medium ${router.pathname === '/projects' ? currentClass : defaultClass}`}>
              Projects
            </a>
          </Link>
          {/* <Link href='/blog'><a className={`block px-3 py-2 rounded-md text-base font-medium ${router.pathname === '/blog' ? currentClass : defaultClass}`}>Blog</a></Link> */}

        </div>
        <div className="pt-4 pb-3 border-t border-gray-700 dark:border-gray-200">
          <div className="flex items-center px-5">
            <div className="flex items-center mx-auto">
              <SocialLink icon={faFacebookF} href='https://www.facebook.com/manito0198' first />
              <SocialLink icon={faTwitter} href='https://twitter.com/mannyrobh' />
              <SocialLink icon={faGithub} href='https://github.com/mannyOaks' />
              <SocialLink icon={faLinkedin} href='https://www.linkedin.com/in/manuel-robles-368035204' />

              <div className="ml-6 items-center h-9 w-9 rounded-full flex border-2 border-transparent hover:border-white">
                <FontAwesomeIcon
                  icon={theme === 'light' ? faLightbulb : faSolidLightbulb}
                  onClick={switchTheme}
                  className="m-auto text-white text-xl"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Header