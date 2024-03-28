import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getBooks, getWishList } from "../../Utility/localStorage";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { CiLocationOn } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { MdInsertPageBreak } from "react-icons/md";
import { IoIosArrowDropdown } from "react-icons/io";

const Listed = () => {
  const lists = useLoaderData();
  const [read, setRead] = useState([]);
  const [sortRead,setSortRead] =useState([])
  const [wish, setWish] = useState([]);
  const [sortWish,setSortWish] =useState([]);
  console.log(read)
  console.log(sortRead)
  useEffect(() => {
    const storedBookIds = getBooks();
    //    if(lists.length>0){
    //     const readList= lists.filter(list => storedBookIds.includes(list.id))
    //     console.log(lists,storedBookIds,readList)
    //    }
    const readList = [];
    for (const id of storedBookIds) {
      const read = lists.find((list) => list.id === id);
      if (read) {
        readList.push(read);
      }
      setRead(readList);
      setSortRead(readList);
    }
  }, [lists]);

  useEffect(() => {
    const storedWishIds = getWishList();
    //    if(lists.length>0){
    //     const readList= lists.filter(list => storedBookIds.includes(list.id))
    //     console.log(lists,storedBookIds,readList)
    //    }
    const wishList = [];
    for (const id of storedWishIds) {
      const wish = lists.find((list) => list.id === id);
      if (wish) {
        wishList.push(wish);
      }
      setWish(wishList);
      setSortWish(wishList);
    }
  }, [lists]);

  const handleSort = filter => {
    if(filter === 'all'){
      setSortRead([...read])
      setSortWish([...wish])

    }
    else if( filter === 'rating'){
      const tempRating = [...read].sort(
        (a,b) => b.rating-a.rating
      )
      setSortRead(tempRating);
      setSortWish(tempRating);
    }
    else if( filter === 'pages'){
      const tempRating = [...read].sort(
        (a,b) => b.totalPages-a.totalPages
      )
      setSortRead(tempRating);
      setSortWish(tempRating);
    }
    else if( filter === 'year'){
      const tempRating = [...read].sort(
        (a,b) => b.yearOfPublishing-a.yearOfPublishing
      )
      setSortRead(tempRating);
      setSortWish(tempRating);
    }

  }

  return (
    <div>
      <h1>Listed: {sortRead.length} </h1>
      <div className="w-60 mx-auto">
          <details className="dropdown">
            <summary className="m-1 bg-green-500 text-white btn">Sort By  <IoIosArrowDropdown /> </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li>
                <button onClick={()=>handleSort('all')}>All</button>
              </li>
              <li>
                <button onClick={()=>handleSort('rating')}>Ratings</button>
              </li>
              <li>
                <button onClick={()=>handleSort('pages')}>Number of pages</button>
              </li>
              <li>
                <button onClick={()=>handleSort('year')}>Publish Year</button>
              </li>
            </ul>
          </details>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read</Tab>
          <Tab>Wishlist</Tab>
        </TabList>

        <TabPanel>
          {sortRead.map((read, index) => (
            <div key={index}>
              <div className="hero my-10 place-items-start rounded-lg border border-gray-400  border-opacity-25 ">
                <div className="hero-content justify-start gap-10 flex-col lg:flex-row">
                  <img
                    src={read.image}
                    className="max-w-sm rounded-lg shadow bg-opacity-5 bg-gray-700 "
                  />
                  <div className="lg:w-[620px]">
                    <h1 className="text-5xl font-bold">{read.bookName}</h1>
                    <p className="py-6 font-work">by: {read.author}</p>
                    <div className="flex items-center font-work justify-start gap-5">
                      <p className="font-bold">Tag</p>
                      <p className=" text-green-500  bg-green-100 font-bold  p-1 rounded-lg">
                        {read.tags[0]}
                      </p>
                      <p className=" text-green-500 bg-green-100 font-bold p-1 rounded-lg">
                        {read.tags[1]}
                      </p>
                      <p className="flex items-center gap-2">
                        {" "}
                        <CiLocationOn /> Year of publish:{" "}
                        {read.yearOfPublishing}
                      </p>
                    </div>
                    <div className="flex font-work text-[#13131399] my-5 gap-5">
                      <p className="flex items-center gap-2">
                        <FaUserFriends /> Publisher:{read.publisher}{" "}
                      </p>
                      <p className="flex items-center">
                        <MdInsertPageBreak /> Page {read.totalPages}
                      </p>
                    </div>
                    <hr className="bg-gray-700 bg-opacity-15 h-px" />

                    <div className="flex mt-5 font-work justify-around">
                      <div className="rounded-full bg-blue-400 text-blue-700 bg-opacity-15 p-4">
                        Category: {read.category}
                      </div>
                      <div className="rounded-full bg-yellow-300 text-yellow-600 bg-opacity-15 p-4">
                        Rating: {read.rating}
                      </div>
                      <Link
                        to={`/book/${read.id}`}
                        className="rounded-full bg-green-500 text-white  p-4"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </TabPanel>
        <TabPanel>
          {sortWish.map((wish, index) => (
            <div key={index}>
              <div className="hero my-10 place-items-start rounded-lg border border-gray-400  border-opacity-25 ">
                <div className="hero-content justify-start gap-10 flex-col lg:flex-row">
                  <img
                    src={wish.image}
                    className="max-w-sm rounded-lg shadow bg-opacity-5 bg-gray-700 "
                  />
                  <div className="lg:w-[620px]">
                    <h1 className="text-5xl font-bold">{wish.bookName}</h1>
                    <p className="py-6 font-work">by: {wish.author}</p>
                    <div className="flex items-center font-work justify-start gap-5">
                      <p className="font-bold">Tag</p>
                      <p className=" text-green-500  bg-green-100 font-bold  p-1 rounded-lg">
                        {wish.tags[0]}
                      </p>
                      <p className=" text-green-500 bg-green-100 font-bold p-1 rounded-lg">
                        {wish.tags[1]}
                      </p>
                      <p className="flex items-center gap-2">
                        {" "}
                        <CiLocationOn /> Year of publish:{" "}
                        {wish.yearOfPublishing}
                      </p>
                    </div>
                    <div className="flex font-work text-[#13131399] my-5 gap-5">
                      <p className="flex items-center gap-2">
                        <FaUserFriends /> Publisher:{wish.publisher}{" "}
                      </p>
                      <p className="flex items-center">
                        <MdInsertPageBreak /> Page {wish.totalPages}
                      </p>
                    </div>
                    <hr className="bg-gray-700 bg-opacity-15 h-px" />

                    <div className="flex mt-5 font-work justify-around">
                      <div className="rounded-full bg-blue-400 text-blue-700 bg-opacity-15 p-4">
                        Category: {wish.category}
                      </div>
                      <div className="rounded-full bg-yellow-300 text-yellow-600 bg-opacity-15 p-4">
                        Rating: {wish.rating}
                      </div>
                      <Link
                        to={`/book/${wish.id}`}
                        className="rounded-full bg-green-500 text-white  p-4"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Listed;
