/* styles */
import styles from './App.module.css'

/* frameworks */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

/* features */
import { Search } from '@widgets/search'
import { Results } from '@widgets/results'
import { Detail } from '@widgets/detail'

/* components */

/* usecases */

const queryClient = new QueryClient()

export function App() {
  return (
    <div>
      <main>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Search />} />
              <Route path="/results" element={<Results />} />
              <Route path="/place/:id" element={<Detail />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </main>
    </div>
  )
}