import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Book from "../Book/Book";


const Home = () => {
    const books = useLoaderData()
    
    return (
        <div>
            <Banner></Banner>
            <div className="grid lg:grid-cols-3 mt-20 gap-5">
                {
                    books.map(book => <Book key={book.id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Home;