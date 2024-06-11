import React, { lazy } from 'react'
import { Main } from './routes/main'
import { wrapSuspense } from './utils/suspense'
import { Route, Routes } from 'react-router-dom'
import { wrapError } from './components/ErrorBoundary'

const RootLayout = wrapSuspense(
  lazy(() => import('./layouts/root').then((x) => ({ default: x.RootLayout })))
)

const NotFound = wrapSuspense(
  lazy(() => import('./routes/main/404page').then((x) => ({ default: x.Main })))
)

export const Routing: React.FC = wrapError(() => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
})
