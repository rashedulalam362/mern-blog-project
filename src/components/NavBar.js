import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav className="border-b-4 w-full text-lg fixed top-0 text-center bg-green-700 text-white font-bold">
           <ul>
          <li className="inline-block pt-6 pb-8">
            <Link to="/" className="pl-4 pr-4">Home</Link>
          </li>
          <li className="inline-block pt-6 pb-8">
            <Link to="/about" className="pl-4 pr-4">About</Link>
          </li>
{/*           
          <li className="inline-block pt-6 pb-8">
            <Link to="/article" className="pl-4 pr-4">Article</Link>
          </li> */}
          <li className="inline-block pt-6 pb-8">
            <Link to="/articles-list" className="pl-4 pr-4">ArticleList</Link>
          </li>
          </ul> 
        </nav>
    )
}

export default NavBar
