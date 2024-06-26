import Link from 'next/link';
import React from 'react'



const menuLinks = [
    {label: 'Home', url: '/'},
    {label: 'About Us', url: '/about'},
    {label: 'Tours', url: '/tours'},
    {label: 'Country', url: '/country'}
];

const Navbar = ({containerStyle} : {containerStyle: string}) => {
  return (
    <nav className={`${containerStyle}`}>
    <menu className="flex items-center justify-center gap-5 ">
      {menuLinks.map(( item, index ) => {
        return (
          <>
            <li key={index}>
              <Link href={item.url} className=''>{item.label}</Link>
            </li>
          </>
        )
      })}
    </menu>
  </nav>
  )
}

export default Navbar
