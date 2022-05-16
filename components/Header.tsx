import {
  faFacebookF,
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faLightbulb as faSolidLightbulb } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SocialLink } from 'components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import RouterLink from './RouterLink';
import ThemeIconButton from './ThemeIconButton';

function Header() {
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 dark:bg-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <a className="text-white	text-2xl font-bold">Manuel Robles</a>
              </Link>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 text-white">
                <RouterLink href="/education" pathname={router.pathname}>
                  Education
                </RouterLink>

                <RouterLink href="/experience" pathname={router.pathname}>
                  Experience
                </RouterLink>

                <RouterLink href="/projects" pathname={router.pathname}>
                  Projects
                </RouterLink>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <SocialLink
                icon={faFacebookF}
                href="https://www.facebook.com/mannyrobh"
              />

              <SocialLink
                icon={faTwitter}
                href="https://twitter.com/mannyrobh"
              />

              {/* <SocialLink icon={faInstagram} href='https://www.instagram.com/mannyoaks/' /> */}
              <SocialLink icon={faGithub} href="https://github.com/mannyOaks" />

              <SocialLink
                icon={faLinkedin}
                href="https://www.linkedin.com/in/mannyrobh/"
              />

              <ThemeIconButton />
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            {/* <!-- Mobile menu button --> */}
            <button
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* <!--
        Mobile menu, toggle classNamees based on menu state.
        Open: "block", closed: "hidden"
      --> */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <RouterLink href="/" pathname={router.pathname} block>
            Home
          </RouterLink>

          <RouterLink href="/education" pathname={router.pathname}>
            Education
          </RouterLink>

          <RouterLink href="/experience" pathname={router.pathname}>
            Experience
          </RouterLink>

          <RouterLink href="/projects" pathname={router.pathname}>
            Projects
          </RouterLink>

          {/* <Link href='/blog'><a className={`block px-3 py-2 rounded-md text-base font-medium ${router.pathname === '/blog' ? currentClass : defaultClass}`}>Blog</a></Link> */}
        </div>
        <div className="pt-4 pb-3 border-t border-gray-700 dark:border-gray-200">
          <div className="flex items-center px-5">
            <div className="flex items-center mx-auto">
              <SocialLink
                icon={faFacebookF}
                href="https://www.facebook.com/manito0198"
              />
              <SocialLink
                icon={faTwitter}
                href="https://twitter.com/mannyrobh"
              />
              <SocialLink icon={faGithub} href="https://github.com/mannyOaks" />
              <SocialLink
                icon={faLinkedin}
                href="https://www.linkedin.com/in/manuel-robles-368035204"
              />

              <ThemeIconButton />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
