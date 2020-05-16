import React from "react"
import {Link} from 'gatsby'

const IndexPage = () => {
    return (
        <div>
            <h1>Index Page</h1>
            <p><Link to="/about">About</Link></p>
            <p><Link to="/blog">Blog</Link></p>
            <p><Link to="/contact">Contact</Link></p>
        </div>
    )
}

export default IndexPage
