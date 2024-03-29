import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../Tags/Icon'

export const SideBar = () => {
  return (
    <aside>
        <fieldset>
        <Icon url={'/images/birdies.svg'}/>
        </fieldset>
        
        <nav className='side-nav'>
            <ul className='unordered-lists'>
            <li>
            <Link to="overview">Overview</Link>
            </li>
            <li>
            <Link to="products">Products</Link>
            </li>
            <li>
            <Link to="order">Order</Link>
            </li>
            <li>
            <Link to="customers">Customers</Link>
            </li>
            <li>
            <Link to="promotion">Promotion</Link>
            </li>
            <li>
            <Link to="settings">Settings</Link>
            </li>
            <li>
            <Link to="logout">Logout</Link>
            </li>
            </ul>
        </nav>
    </aside>
  )
}
