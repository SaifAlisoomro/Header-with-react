import Link from "next/link";
import React from 'react'

function home() {
  return ( <div>
    <div className="header">
      <div className="logo">
        <h1>WELCOME TO MY PAGE</h1>
        </div>  
        <ul className="nav">
          <li> <Link href="/">Home</Link></li>
          <li> <Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact-us</Link></li>
          </ul>  
          <div className="search-bar">
            <form action="form">
              <label htmlFor="searchbar">
                <input type="text" placeholder="search here" required />
         <button className="btn"> search</button>
              </label>
            </form>
          </div>
    </div>
  <div className="para">
    <ul>
      <h1>PAKISTAN PROVINCEC</h1>
      <li>SINDH</li>
      <li>PUNJAB</li>
      <li>KPK</li>
      <li>BALOCHISTAN</li>
    </ul>
  </div>
    </div>)
}

export default home
