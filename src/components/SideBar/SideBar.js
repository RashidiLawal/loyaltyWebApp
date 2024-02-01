import React from 'react'
import { Link } from 'react-router-dom'

export const SideBar = () => {
  return (
    <aside>
        <h2>
            company Logo
        </h2>
        <nav>
            <ul>
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
