import React from 'react'
import { SiteNav } from '../components/persistent/SiteNav'

export const NavContainer = () => {
    let navprops = {
        loggedOut: [
            {path:'', pathname: 'Welcome'},
            {path:'about', pathname: 'About'},
        ],
        loggedIn: [
            {path: '', pathname: 'Home'},
            {path: 'profile', pathname: 'Profile'},
            {path: 'addmovie', pathname: 'New'}
        ]
    }

    let handleNavMap = (navItems) => {
        return navItems.map((navItem, i) => {return <SiteNav key={i} path={navItem.path} pathname={navItem.pathname}/>})
    }

    let navArray = localStorage.token ? handleNavMap(navprops.loggedIn) : handleNavMap(navprops.loggedOut) 
    return (
        <>{navArray}</>
    )
}
