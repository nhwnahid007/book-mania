import { useLoaderData } from "react-router-dom";
import { getBooks } from "../../Utility/localStorage";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types'

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Pages = () => {
    const lists = useLoaderData();
    const [read, setRead] = useState([]);
    
    useEffect(() => {
      const storedBookIds = getBooks();
      const readList = [];
      for (const id of storedBookIds) {
        const read = lists.find((list) => list.id === id);
        if (read) {
          readList.push(read);
        }
        setRead(readList);
      }
    }, [lists]);
    
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };
      
    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
    
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    return (
        <div className="container mt-10 mx-auto">
           
           
           <div className="overflow-x-auto">
               <ResponsiveContainer width="100%" height={500}>
                   <BarChart
                        data={read}
                        margin={{top: 20, right: 30, left: 20, bottom: 5}}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="bookName" />
                        <Tooltip />
                        <YAxis />
                        <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {read.map((read, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <p className="text text-center text-2xl font-black">Bar Chart</p>
        </div>
    );
};
Pages.propTypes ={
    props: PropTypes.string ,
    fill: PropTypes.string ,
    x: PropTypes.string,
    y: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
}
export default Pages;
