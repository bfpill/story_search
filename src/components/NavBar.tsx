import { useNavigate } from 'react-router-dom';
import { Button } from "./ui/button";
import { CurrentUserContext } from "@/UserProvider";
import { useContext } from "react";
import { ReactiveAvatar } from "./Avatar";
import { useTheme } from '@/ThemeProvider';
import { LogoSVG } from './LogoSVG'
import { Input } from './ui/input';

const handleImageClick = (navigate) => {
  navigate('/');
};
const handleLoginClick = (navigate) => {
  navigate('/login');
};

export function HomeBar(props: { onSearchChange: (event) => unknown }) {
  const navigate = useNavigate();
  const { user } = useContext(CurrentUserContext)
  const { theme } = useTheme()

  return (
    <div className="h-10 items-center justify-center">
      <div className="flex ml-4 mr-2 mt-2 md:relative">
        <div className="flex w-full flex-row justify-between items-center">
          <div onClick={() => handleImageClick(navigate)} className="cursor-pointer">
            <LogoSVG theme={theme} />
          </div>
          <div className="flex w-full flex-row justify-end items-center gap-10">
            <Input className="h-8 mr-2 w-80 text-s tracking-tight" placeholder="Search..." onChange={props.onSearchChange} />
            <Button onClick={() => navigate('/book_test')}>book page (dummy)</Button>
            {
              user ?
                <ReactiveAvatar />
                :
                <Button variant="ghost" className="text-s" onClick={() => handleLoginClick(navigate)}>Login</Button>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export function DefaultBar() {
  const navigate = useNavigate();
  const { user } = useContext(CurrentUserContext)
  const { theme } = useTheme()

  return (
    <div className="h-12 p-3 items-center justify-center border border-transparent">
      <div className="h-10 items-center justify-center">
        <div className="flex ml-4 mr-4 mt-2 md:relative">
          <div className="flex w-full flex-row justify-between items-center">
            <div onClick={() => handleImageClick(navigate)} className="cursor-pointer">
              <LogoSVG theme={theme} />
            </div>
            <div className="flex w-full flex-row justify-end items-center">
              {/* <Button variant="ghost" className="text-s mr-4" onClick={() => handleLockerroomClick(navigate)}>
                Dashboard
              </Button> */}

              {
                user ?
                  <ReactiveAvatar />
                  :
                  <Button variant="ghost" className="text-s" onClick={() => handleLoginClick(navigate)}>Login</Button>
              }
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}