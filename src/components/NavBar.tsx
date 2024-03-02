import { useNavigate } from 'react-router-dom';
import { CurrentUserContext } from "@/UserProvider";
import { useContext } from "react";
import { ReactiveAvatar } from "./Avatar";
import { useTheme } from '@/ThemeProvider';
import { LogoSVG } from './LogoSVG'
import { Input } from './ui/input';
import { Button } from './ui/button';

const handleImageClick = (navigate) => {
  console.log("clicked")
  navigate('/');
};
const handleLoginClick = (navigate) => {
  console.log("clicked")
  navigate('/login');
};

export function HomeBar(props: { onSearchChange: (event) => unknown }) {
  const navigate = useNavigate();
  const { user } = useContext(CurrentUserContext)
  const { theme } = useTheme()

  return (
<div className="h-10 items-center justify-center min-w-[500px]">
  <div className="flex ml-4 mr-2 md:relative py-1"> {/* Added py-1 for padding */}
    <div className="flex w-full flex-row justify-between items-center">
      <div onClick={() => handleImageClick(navigate)} className="cursor-pointer absolute left-1 top-0.55">
        <LogoSVG theme={theme} />
      </div>
      <div className="flex w-full flex-row justify-end items-center gap-3">
        {/* <Input className="h-8 mr-2 w-80 text-s tracking-tight" placeholder="Search..." onChange={props.onSearchChange} /> */}
        <Button className="rounded-full" onClick={() => navigate('/book_test')}>
          New Book
        </Button>
        <Button className="rounded-full" onClick={() => navigate('/library')}>
          Library 
        </Button>
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
    <div className="h-12 p-3 items-center justify-center border border-transparent border">
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