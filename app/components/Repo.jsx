import React from "react";
import Link from 'next/link'
import { FaStar, FaCode, FaCodeBranch, FaEye } from 'react-icons/fa'

async function fetchRepo(name) {
    // console.log('=-=-=-=-', name);
    const response = await fetch(`https://api.github.com/repos/chandramohannegi/${name}`)

    // await new Promise(resolve => setTimeout(resolve, 1000))
    const repos = await response.json()
    return repos
}

const Repo = async ({ name }) => {
    const repo = await fetchRepo(name)
    // console.log(repo);
    return <div>
        <h2>{repo.name}</h2>
        <p>{repo.description}</p>

        <div className="card-stats">
            <div className="card-stat">
                <FaStar />
                <span>{repo.stargazers_count}</span>
            </div>

            <div className="card-stat">
                <FaCodeBranch />
                <span>{repo.forks_count}</span>
            </div>

            <div className="card-stat">
                <FaEye />
                <span>{repo.watchers_count}</span>
            </div>

        </div>
        {/* <Link>
        </Link> */}

    </div>;
};

export default Repo;
