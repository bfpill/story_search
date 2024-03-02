import { useContext, useEffect, useState } from "react"
import { HomeBar } from "./components/NavBar"
import { CurrentUserContext } from "./UserProvider"
import { getAllBooks, getAllUserBooks, getUser } from "./api";
import BookTitlePage from "./components/BookTitlePage";

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
      const allBooks = await getAllUserBooks(user.email)
      if (allBooks) {
        setUserBooks(allBooks)
        console.log(allBooks)
      }
    }

    initializeBooks()
  }, [user])

  return (
    <div className="w-full h-full flex justify-center items-center">
      {dummyUser ?
        <div className="grid grid-cols-4 grid-rows-2 gap-10">
          {userBooks?.map(book => {
            return (
              <div className="h-64 w-48 bg-blue-300 text-xs leading-1">
                <BookTitlePage complementaryColor={undefined} page={book.pages[0]} />
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
      <UserLibraryDummy />
    </div>
  )

}


export default Home