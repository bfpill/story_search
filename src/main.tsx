import ReactDOM from 'react-dom/client'

import './index.css'

import Library from './components/Library.tsx'
import Login from './components/Login/login.tsx'
import Prompt from './components/Prompt/prompt.tsx'
import SignUp from './components/SignUp/signup.tsx'
import Landing from './components/Landing/Landing.tsx'
import { useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.tsx';
import { ThemeProvider } from './ThemeProvider.tsx';
import { UserProvider } from './UserProvider.tsx';
import BookTestPage from './BookTestPage.tsx';
import Profile from './components/Profile/profile.tsx';
import DummyPage from './components/dummyPage.tsx'

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

function isMobile() {
  return /Android|iPhone/i.test(navigator.userAgent)
}

function MobileWrapper({ component: Component }) {
  const isMobileDevice = isMobile();
  return isMobileDevice ? <DummyPage /> : <Component />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MobileWrapper component={Landing} />} />
          <Route path="/library" element={<MobileWrapper component={Home} />} />
          <Route path="/book_test" element={<BookTestPage />} />
          <Route path="/books/:bookId" element={<BookTestPage />} />
          <Route path="/sign_up" element={<SignUp />} />
          <Route path='/login' element={<MobileWrapper component={Login} />} />
          <Route path='/create_book' element={<Prompt />} />
          <Route path='/signup' element={<MobileWrapper component={SignUp} />} />
          <Route path='/profile' element={<Profile />} />

          <Route path='/all_books' element={<Library />} />
        </Routes>
      </Router>
    </UserProvider>
  </ThemeProvider>
);