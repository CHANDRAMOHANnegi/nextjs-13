import React from "react";

const CourseSearch = ({ getSearchResults }) => {
    const [query, setQuery] = React.useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(query);
        const res = await fetch(`/api/courses/search?query=${query}`)

        const courses = await res.json()
        getSearchResults(courses)
    }

    return <form onSubmit={handleSubmit}
        className="search-from">
        <input type="text"
            className="search-input"
            placeholder="Search Courses..."
            value={query}
            onChange={(e) => { setQuery(e.target.value) }}
        />
        <button className="search-button" type="submit">
            Search
        </button>
    </form>;
};

export default CourseSearch;
