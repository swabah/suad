import Dropdown from './Dropdown';
import { useState } from "react";
// import './before.css'


const MenuItem = ({ items }) => {  
 const [dropdown, setDropdown] = useState(false);
  return (
    <li className="hover:text-[#72bf44] ">
      {items.submenu ? (
        <>
          <a 
          className=' cursor-pointer'
          type="button" 
          aria-haspopup="menu"
          aria-expanded={dropdown ? "true" : "false"}
          onMouseEnter={() => setDropdown((prev) => !prev)}
          onClick={() => setDropdown((prev) => !prev)}
          // onSelect={() => setDropdown('')}
          >
            {items.title}{' '}
          </a>
          <Dropdown 
            submenus={items.submenu}
            dropdown={dropdown} 
           />
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  );
};

export default MenuItem;

