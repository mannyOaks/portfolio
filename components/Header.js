import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { SocialLink } from 'components'

export default function Header() {
  const router = useRouter()

  // "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
  // text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium
  const currentRoute = "bg-gray-900 text-white  px-3 py-2 rounded-md text-sm font-medium"
  const defaultRoute = "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"


  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {/* <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" /> */}
              <h1 className="text-white	text-2xl font-bold">Manuel Robles</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4 text-white">
                {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                <Link href='/' className={router.pathname === '/' ? currentRoute : defaultRoute}>Home</Link>

                {/* <a href="#" className={router.pathname === '/team' ? currentRoute : defaultRoute}>Team</a> */}
                <Link href='/education' className={router.pathname === '/' ? currentRoute : defaultRoute}>Education</Link>

                {/* <a href="#" className={router.pathname === '/projects' ? currentRoute : defaultRoute}>Projects</a> */}
                <Link href='/projects' className={router.pathname === '/' ? currentRoute : defaultRoute}>Projects</Link>

                {/* <a href="#" className={router.pathname === '/calendar' ? currentRoute : defaultRoute}>Calendar</a> */}
                {/* <Link href='/blog' className={router.pathname === '/' ? currentRoute : defaultRoute}>Blog</Link> */}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {/* <div className="ml-3 relative h-6 w-6"> */}
              <SocialLink icon={faFacebookF} href='https://www.facebook.com/manito0198/' />
              <SocialLink icon={faTwitter} href='https://twitter.com/mannyOakss' />
              {/* <SocialLink icon={faInstagram} href='https://www.instagram.com/mannyoaks/' /> */}
              <SocialLink icon={faGithub} href='https://github.com/mannyOaks' />
              <SocialLink icon={faLinkedin} href='https://www.linkedin.com/in/manuel-robles-368035204' />


              {/* <!-- Profile dropdown --> */}
              <div className="ml-3 relative">

                {/* <!--
                Profile dropdown panel, show/hide based on dropdown state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              --> 
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>

                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>

                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
                {/* </div> */}
              </div>
            </div>
          </div>


          <div className="-mr-2 flex md:hidden">
            {/* <!-- Mobile menu button --> */}
            <button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">Open main menu</span>
              {/* <!--
                Heroicon name: menu
                Menu open: "hidden", Menu closed: "block"
                --> */}
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* <!--
                Heroicon name: x
                Menu open: "block", Menu closed: "hidden"
                --> */}
              <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* <!--
        Mobile menu, toggle classNamees based on menu state.
        Open: "block", closed: "hidden"
      --> */}
      <div className="block md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
          <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>


          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Education</a>

          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

          {/* <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Blog</a> */}
        </div>
        <div className="pt-4 pb-3 border-t border-gray-700">
          <div className="flex items-center px-5">
            {/* <div className="flex-shrink-0">
              <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            </div> */}
            <div className="ml-3">
              <div className="text-base font-medium leading-none text-white">Tom Cook</div>
              <div className="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
            </div>

          </div>
        </div>
      </div>
    </nav>
  )
}


/* <div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`} onClick={() => setMenuOpen(!isMenuOpen)}>
       <div className="block md:hidden" onClick={() => setMenuOpen(!isMenuOpen)}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-white"> */