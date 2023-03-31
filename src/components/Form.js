import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './../App';



const Form = () => {

    const [userData, setUserData] = useContext(UserContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const course = e.target.course.value;
        const instructor = e.target.instructor.value;
        const category = e.target.category.value;
        const price = e.target.price.value;

        const newdata = { course, instructor, category, price };

        if (newdata) {
            setUserData([...userData, newdata]);
            navigate('/showdata');
        }

        console.log(course, instructor, category, price);
        e.target.course.value = "";
        e.target.instructor.value = "";
        e.target.category.value = "";
        e.target.price.value = "";
    }
    return (
        <div className='w-96 mx-auto my-10'>
            <h1 className="text-3xl font-bold">
                Course Added
            </h1>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col'>
                    <input type="text" placeholder='Course-name' name='course' required className="input input-bordered w-full max-w-xs my-2" />

                    <input type="text" placeholder='instructor' name='instructor' className="input input-bordered w-full max-w-xs my-2" required />

                    <input type="text" placeholder='category' name='category' className="input input-bordered w-full max-w-xs my-2" required />

                    <input type="text" placeholder='price' name='price' className="input input-bordered w-full max-w-xs my-2" required />
                </div>
                <button type="submit" className="btn">Submit</button>
            </form>


        </div>
    );
};

export default Form;