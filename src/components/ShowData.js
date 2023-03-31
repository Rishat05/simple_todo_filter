import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from './../App';

const ShowData = () => {
    const [userData, setUserData] = useContext(UserContext);
    const [category, setcategory] = useState([]);
    const [filteredArray, setFilteredArray] = useState(userData);
    const navigate = useNavigate();



    const handleCheckboxChange = (value) => {
        setcategory((prevState) => {
            if (prevState.includes(value)) {

                return prevState.filter((item) => item !== value);
            } else {

                return [...prevState, value];
            }
        });

    };


    const filterArray = (originalArray, filterValues) => {
        const filteredData = originalArray.filter(item =>
            filterValues.includes(item.category)
        );
        setFilteredArray(filteredData);
    };

    useEffect(() => {
        filterArray(userData, category);
    }, [category]);

    const handleCourse = () => {
        navigate('/');
    }

    const categories = Array.from(new Set(userData.map((item) => item.category)));

    return (
        <div className='flex my-10'>
            <div className='mx-auto p-3'>
                <div className="flex flex-col p-2 bg-gray-100 w-56">
                    <button className="btn" onClick={handleCourse}>Add Courses</button>
                    {categories.map((item, index) =>
                        <label key={index} className="p-4 m-2 bg-slate-300 text-xl">
                            <input
                                type="checkbox"
                                value={item}
                                checked={category.includes(item)}
                                onChange={() => handleCheckboxChange(item)}
                            />
                            {item}
                        </label>
                    )
                    }
                </div>
            </div>

            <table className=" grow table w-full">
                <thead>
                    <tr>
                        <th>Sl No.</th>
                        <th>Course</th>
                        <th>Instructor</th>
                        <th>Category</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {category.length == 0 ?
                        userData.map((data, index) => <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{data.course}</td>
                            <td>{data.instructor}</td>
                            <td>{data.category}</td>
                            <td>{data.price}</td>
                        </tr>) :
                        filteredArray.map((data, index) => <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{data.course}</td>
                            <td>{data.instructor}</td>
                            <td>{data.category}</td>
                            <td>{data.price}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ShowData;