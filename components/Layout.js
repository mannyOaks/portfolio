import { Header } from 'components'
import Head from 'next/head'

export default function Layout({ children, pageTitle = 'Manuel Robles', description, previewImage, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>

        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="@mannyOakss" key="twhandle" />

        {/* Open Graph */}
        {/* <meta property="og:url" content={currentURL} key="ogurl" /> */}
        <meta property="og:image" content={previewImage} key="ogimage" />
        <meta property="og:site_name" content="Manuel Robles Porfolio" key="ogsitename" />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />


      </Head>
      <div>
        <Header />

        {/* {pageTitle && <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              {pageTitle}
            </h1>
          </div>
        </header>} */}


        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* <!-- Replace with your content -->
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
          </div>
          <!-- /End replace --> */}

            <div className="px-4 py-6 sm:px-0">
              <div className="h-96">
                {children}
              </div>
            </div>

          </div>
        </main>
      </div>
    </>
  )
}