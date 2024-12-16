import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import { Main } from '@widgets/main'
import { Results } from '@widgets/results'
import { Detail } from '@widgets/detail'
import { Report } from '@widgets/report'

const queryClient = new QueryClient()

export function App() {
  return (
    <div>
      <main>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/:text" element={<Results />} />
              <Route path="/place/:id" element={<Detail />} />
              <Route path="/report/:placeId" element={<Report />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </main>
    </div>
  )
}