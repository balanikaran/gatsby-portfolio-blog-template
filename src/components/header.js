import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = () => {

    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
    )

    return (
        <header className={headerStyles.header}>
            <Link to="/" className={headerStyles.title}>
                {data.site.siteMetadata.title}
            </Link>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link
                            to="/"
                            className={headerStyles.navItem}
                            activeClassName={headerStyles.activeNavItem}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className={headerStyles.navItem}
                            activeClassName={headerStyles.activeNavItem}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className={headerStyles.navItem}
                            activeClassName={headerStyles.activeNavItem}
                        >
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/blog"
                            className={headerStyles.navItem}
                            activeClassName={headerStyles.activeNavItem}
                        >
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contentfulBlog"
                            className={headerStyles.navItem}
                            activeClassName={headerStyles.activeNavItem}
                        >
                            ContentfulBlog
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
