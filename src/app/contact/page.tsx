import Link from "next/link";
import React from 'react'

function home() {
  return ( <div>
    <div className="header">
      <div className="logo">
        <h1>INFORMATION ABOVE</h1>
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
      <h1>INFORMATION</h1>
      <li>SOOMROSAHB44@GMAIL.COM</li>
      <li>0333*****77</li>
      <li>WHATSAPP CONTACT</li>
      <li>SOOMROSAHB.COM</li>
    </ul>
  </div>
    </div>)
}

export default home
