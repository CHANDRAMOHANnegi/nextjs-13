import React from "react";
import Link from "next/link";

// async function fetchCourses() {
//     const response = await fetch('http://localhost:3000/api/courses')

//     // await new Promise(resolve => setTimeout(resolve, 1000))
//     const courses = await response.json()
//     return courses
// }

export const Courses = ({courses}) => {
    // const courses = await fetchCourses()

    return <div className="courses">
        {courses.map(course => {
            return (
                <div className="card" key={course.id}>
                    <h2>{course.title}</h2>
                    <span>Level: {course.level}</span>
                    <p>{course.description}</p>
                    <Link href={course.link} target="_blank" className="btn">
                        Go To Course
                    </Link>
                </div>
            )
        })}
    </div>;
};

export default Courses;
