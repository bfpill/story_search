import { useContext, useEffect, useState } from "react"
import { HomeBar } from "./components/NavBar"
import { CurrentUserContext } from "./UserProvider"
import { getAllBooks, getAllUserBooks, getUser } from "./api";
import Landing from "./components/Landing/Landing";
const dummyUser = {
  id: 123,
  name: "John Doe",
  books: [
    { title: "Book One", id: 1 },
    { title: "Book Two", id: 2 },
    { title: "Book Three", id: 3 },
    { title: "Book Four", id: 4 },
    { title: "Book Five", id: 5 },
    { title: "Book Six", id: 6 },
    { title: "Book Seven", id: 7 },
    { title: "Book Eight", id: 8 },
  ]
};

const UserLibraryDummy = () => {
  const { user } = useContext(CurrentUserContext)
  const [userBooks, setUserBooks] = useState([])


  useEffect(() => {
    const initializeBooks = async () => {
      const userData = await getAllUserBooks(user.email)
      if (userData) {
        setUserBooks(userData)
        console.log(userData)
      }
    }

    initializeBooks()
  }, [user])

  return (
    <div className="w-full h-full flex justify-center items-center">
      {dummyUser ?
        <div className="grid grid-cols-4 grid-rows-2 gap-10">
          {Object.keys(userBooks.books ?? [])?.map(book_id => {
            return (
              <div className="h-64 w-48 bg-blue-300">
                {userBooks.books[book_id].title}
              </div>
            )

          })
          }
        </div> :
        <div className="">
          Login to see your books!
        </div>
      }

    </div>
  )
}

const Home = (props: {}) => {

  return (
    <div className="h-screen w-screen relative p-4 flex flex-col justify-center items-center">
      <HomeBar onSearchChange={function (event: any): unknown {
        throw new Error("Function not implemented.")
      }} />
      {/* <UserLibraryDummy /> */}
      <Landing/>
    </div>
  )

}


export default Home