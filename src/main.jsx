import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Loader } from './components'
import { LayoutContainer } from './layouts'
import './styles/index.css'

const ConverterPage = lazy(() => import('@pages/ConverterPage'))
const MainPage = lazy(() => import('@pages/MainPage'))
const AboutPage = lazy(() => import('@pages/AboutPage'))
const Top100Page = lazy(() => import('@pages/Top100Page'))
const NotFoundPage = lazy(() => import('@pages/NotFoundPage'))

export const App = () => {
	return (
		<div className='flex flex-col justify-between h-screen'>
			<Suspense fallback={<Loader />}>
				<Routes>
					<Route path='/' element={<LayoutContainer />}>
						<Suspense fallback={<Loader />}>
							<Route index element={<MainPage />} />
						</Suspense>
						<Suspense fallback={<Loader />}>
							<Route path='converter' element={<ConverterPage />} />
						</Suspense>
						<Suspense fallback={<Loader />}>
							<Route path='top100' element={<Top100Page />} />
						</Suspense>
						<Suspense fallback={<Loader />}>
							<Route path='about' element={<AboutPage />} />
						</Suspense>
						<Route path='*' element={<NotFoundPage />} />
					</Route>
				</Routes>
			</Suspense>
		</div>
	)
}

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>
)
