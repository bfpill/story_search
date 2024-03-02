import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { useContext } from "react";
import { CurrentUserContext } from "@/UserProvider";
import { useNavigate } from "react-router-dom";
import profilelogo from "../assets/dog_profile.png"
// import { ThemeToggle } from "./ThemeToggle";
import { useTheme } from "@/ThemeProvider";

export const ReactiveAvatar = (props: { size?: number, unclickable?: boolean }) => {
  const { user, setUser } = useContext(CurrentUserContext);
  const { theme, setTheme } = useTheme()

  const navigate = useNavigate()

  const handleLogUserOut = () => {
    setUser(null)
    navigate("/")
    localStorage.removeItem("user")
  }


  if (!props.unclickable) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className="rounded-full">
          <Avatar>
            <AvatarImage className={`w-full h-full cursor-pointer`} src={user.avatar} />
            <AvatarFallback>{user.name}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent onCloseAutoFocus={() => { }} className="w-[200px] cursor-pointer" align="end">
          <DropdownMenuLabel onClick={() => navigate('/profile')} >My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {/* <DropdownMenuItem onSelect={event => event.preventDefault()} onClick={() => {theme == "dark" ? setTheme("light") : setTheme("dark")}}>
            <div className="w-full flex justify-between text-center items-center">
              Theme
              <div className="">
                <ThemeToggle />
              </div>
            </div>
          </DropdownMenuItem> */}
          <DropdownMenuItem className="text-red-500" onClick={() => handleLogUserOut()}>Log Out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  } else {
    return (
      <Avatar>
        <AvatarImage src="https://ui.shadcn.com/avatars/01.png" />
        <AvatarFallback>{user.name}</AvatarFallback>
      </Avatar>
    )
  }
}