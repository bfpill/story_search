import ReactDOM from 'react-dom/client'

import './index.css'
import Library from './components/Library/library.js'
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.tsx';
import { ThemeProvider } from './ThemeProvider.tsx';
import { UserProvider } from './UserProvider.tsx';
import BookTestPage from './BookTestPage.tsx';
import TestBookGeneration from './TestBookGeneration.tsx';

export function getNavBarType(): string {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const location = useLocation();

  // building modes have the navbar rendered inside them
  if (location.pathname.startsWith('/build/') || location.pathname.startsWith('/lockerroom')) {
    return "none"
  } else if (location.pathname.startsWith('/preview/')) {
    return "preview"
  } else {
    return "home"
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
  <UserProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book_test" element={<BookTestPage />} />
        <Route path="/test_book_gen" element={<TestBookGeneration/>} />
      </Routes>
    </Router>
  </UserProvider>
  </ThemeProvider>
  // </React.StrictMode>
)