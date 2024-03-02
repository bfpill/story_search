import { useContext, useEffect, useState } from "react"
import { HomeBar } from "./components/NavBar"
import { CurrentUserContext } from "./UserProvider"
import { getUser } from "./api";

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
  const [books, setBooks] = useState([])

  useEffect(() => {
    const initializeBooks = async () => {
      console.log(user)
      const userData = await getUser(user.userId)

      if (userData.books) {
        setBooks(userData.books)
      }
    }
    
    initializeBooks()
  }, [user])

  return (
    <div className="w-full h-full flex justify-center items-center">
      {dummyUser ?
        <div className="grid grid-cols-4 grid-rows-2 gap-10">
          {dummyUser.books.map(book => {
            return (
              <div className="h-64 w-48 bg-blue-300">
                {book.title}
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
      <div className="border p-2 rounded-full flex items-center justify-center">
        <HomeBar onSearchChange={function (event: any): unknown {
          throw new Error("Function not implemented.")
        }} />
      </div>
      <UserLibraryDummy />
    </div>
  )

}


export default Home