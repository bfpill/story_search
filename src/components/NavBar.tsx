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

export function HomeBar(props: { onSearchChange: (event) => unknown, expand: boolean }) {
  const navigate = useNavigate();
  const { user } = useContext(CurrentUserContext)
  const { theme } = useTheme()

  return (
    <div className="p-1 flex items-center" style={{ justifyContent: "space-between" }}>
      
      <div className={`h-full w-full flex items-center justify-center transition-all duration-500 ease-in-out`}>
        <div className={`h-full flex items-center rounded-full bg-white justify-center transition-all duration-500 ease-in-out shadow-border
           ${props.expand ? 'w-[90%] border-none' : 'w-[400px] border'}`}
        >
          <div onClick={() => navigate('/')} className="cursor-pointer mt-1.5 ml-2">
            <LogoSVG theme={theme} />
          </div>
          <div className="flex w-full flex-row justify-end items-center gap-3 mr-2 p-2">
            <Button className="rounded-full h-full" variant='ghost' onClick={() => navigate('/create_book')}>
              New Book
            </Button>
            <Button className="rounded-full h-full" variant='ghost' onClick={() => navigate('/library')}>
              Library
            </Button>
            {props.onSearchChange &&
              <Input className="h-8 mr-2 w-80 text-s tracking-tight rounded-full" placeholder="Search..." onChange={props.onSearchChange} />
            }
            {
              user ?
                <ReactiveAvatar />
                :
                <Button variant="ghost" className="rounded-full h-full" onClick={() => navigate('/login')}>
                  Login
                </Button>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export function DefaultBar() {
  const navigate = useNavigate();
  const { user } = useContext(CurrentUserContext)
  const { theme } = useTheme()

  return (
    <div className="flex w-full h-min flex-row justify-between items-center px-8 py-3 justify-center">
      <div onClick={() => handleImageClick(navigate)} className="cursor-pointer mt-2">
        <LogoSVG theme={theme} />
      </div>
      <div className="flex w-full flex-row justify-end items-center gap-3 mr-2 p-2">
        <Button className="rounded-full h-full" variant='ghost' onClick={() => navigate('/create_book')}>
          New Book
        </Button>
        <Button className="rounded-full h-full" variant='ghost' onClick={() => navigate('/library')}>
          Library
        </Button>
        {
          user ?
            <ReactiveAvatar />
            :
            <Button variant="ghost" className="rounded-full h-full" onClick={() => handleLoginClick(navigate)}>Login</Button>
        }
      </div>
    </div >
  )
}