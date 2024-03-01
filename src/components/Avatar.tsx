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

  const handleOpenProfile = () => {
    navigate("/profile")
  }

  if (!props.unclickable) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage className={`w-[${props.size}px]`} src="https://ui.shadcn.com/avatars/01.png" />
            <AvatarFallback>{user.name}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent onCloseAutoFocus={() => { }} className="w-[200px]" align="end">
          <DropdownMenuLabel onClick={() => handleOpenProfile()}>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {/* <DropdownMenuItem onSelect={event => event.preventDefault()} onClick={() => {theme == "dark" ? setTheme("light") : setTheme("dark")}}>
            <div className="w-full flex justify-between text-center items-center">
              Theme
              <div className="">
                <ThemeToggle />
              </div>
            </div>
          </DropdownMenuItem> */}
          <DropdownMenuItem>Settings</DropdownMenuItem>
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