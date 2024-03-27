
import PropTypes from 'prop-types'
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Book = ({book}) => {
   const {id,image,tags,bookName,author,category,rating} =book ;
   const [tag1,tag2] =tags;
  return (
    <Link to={`/book/${id}`} className="card p-10 shadow-xl">
  <figure className="p-10 rounded-lg bg-base-200 pt-10">
    <img className='' src={image} />
  </figure>
  <div className="card-body p-10 ">
    <div className="flex w-5/6 items-center font-work text-xl text-center space-x-5 ">
        <p className='rounded-full bg-green-300 bg-opacity-5 text-green-500'>{tag1}</p>
        <p className='rounded-full bg-green-300 bg-opacity-5 text-green-500'>{tag2}</p>
    </div>
    <h2 className="card-title  text-2xl">{bookName}</h2>
    <p className='font-work text-black opacity-80'>By: {author} </p>
    <hr className="border border-dashed border-gray-300" />
    <div className="flex font-work">
      <p>{category}</p>
      <p className='text-end flex justify-end items-center gap-2'>{rating} <FaRegStar /> </p>
    </div>
  </div>
</Link>
  )
}

Book.propTypes = {
 book: PropTypes.object.isRequired
}

export default Book
