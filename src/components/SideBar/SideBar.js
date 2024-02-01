import React from 'react'

export const SideBar = () => {
  return (
    <aside>
        <h2>
            company Logo
        </h2>
        <nav>
            <ul>
            <li>
            <a href="overview">Overview</a>
            </li>
            <li>
            <a href="products">Products</a>
            </li>
            <li>
            <a href="order">Order</a>
            </li>
            <li>
            <a href="customers">Customers</a>
            </li>
            <li>
            <a href="promotion">Promotion</a>
            </li>
            <li>
            <a href="settings">Settings</a>
            </li>
            <li>
            <a href="logout">Logout</a>
            </li>
            </ul>
        </nav>
    </aside>
  )
}
