import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getBooks, getWishList } from "../../Utility/localStorage";


const Listed = () => {
    const lists = useLoaderData();
    const [read,setRead] = useState([])
    const [wish,setWish] =useState([])
    useEffect(()=>{
        const storedBookIds = getBooks();
    //    if(lists.length>0){
    //     const readList= lists.filter(list => storedBookIds.includes(list.id))
    //     console.log(lists,storedBookIds,readList)
    //    }
    const readList=[];
    for(const id of storedBookIds){
        const read=lists.find(list => list.id ===id);
        if(read){
            readList.push(read)
        }
        setRead(readList)
        
    }
    },[lists])

    useEffect(()=>{
        const storedWishIds = getWishList();
    //    if(lists.length>0){
    //     const readList= lists.filter(list => storedBookIds.includes(list.id))
    //     console.log(lists,storedBookIds,readList)
    //    }
    const wishList=[];
    for(const id of storedWishIds){
        const wish=lists.find(list => list.id ===id);
        if(wish){
            wishList.push(wish)
        }
        setWish(wishList)
        
    }
    },[lists])
    

    return (
        <div>
           <h1>Listed: {read.length} </h1> 
          {
            read.map((read,index)=>(
                <div key={index}>
                <h2 className="text-font-bold">read: {read.bookName}</h2>
           </div>
            ))
          }

          {
            wish.map((wish,index)=>(
                <div key={index}>
                <h2 className="text-font-bold">wish: {wish.bookName}</h2>
           </div>  
            ))
          }
        </div>
    );
};

export default Listed;