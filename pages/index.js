import { Layout } from 'components'

export default function HomePage() {
  return (
    <Layout title='Manuel Robles' previewImage="https://mannyrobh.dev/images/me.jpg">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            About Me
          </h1>
        </div>
      </header>

      <p>Manuel Ernesto Robles Hernandez</p>

    </Layout>
  )
}