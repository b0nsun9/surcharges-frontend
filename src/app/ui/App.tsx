/* styles */
import styles from './App.module.css'

/* frameworks */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { APIProvider } from '@vis.gl/react-google-maps'
import { QueryClient, QueryClientProvider } from 'react-query'

/* features */
import Search from '@widgets/search/ui/Search'
import Results from '@widgets/results/ui/Results'

/* components */

/* usecases */

const queryClient = new QueryClient()

export default function App() {
  return (
    <div>
      <main>
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY} onLoad={() => console.log('Google Maps API loaded')}>
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Search />} />
                <Route path="/results" element={<Results />} />
              </Routes>
            </BrowserRouter>
          </QueryClientProvider>
        </APIProvider>
      </main>
    </div>
  )
}