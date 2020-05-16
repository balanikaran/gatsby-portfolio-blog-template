import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import HelmetHead from '../components/helmet'

const NotFound = () => {
    return (
        <Layout>
            <HelmetHead title="404Page"></HelmetHead>
            <h1>No such page found!</h1>
            <p><Link to="/">Go to home</Link></p>
        </Layout>
    )
}

export default NotFound
