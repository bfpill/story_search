import { useContext, useEffect } from "react"
import { HomeBar } from "./components/NavBar"
import { CurrentUserContext } from "./UserProvider"

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

  useEffect(() => {
    console.log(user)
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
    <div className="h-screen w-screen bg-neutral-100 relative p-10 flex justify-center items-center">
      <div className="absolute top-0 right-0 w-full">
        <HomeBar onSearchChange={function (event: any): unknown {
          throw new Error("Function not implemented.")
        }} />
      </div>
      <UserLibraryDummy />
    </div>
  )

}


export default Home