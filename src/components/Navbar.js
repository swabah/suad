
import { menuItems } from './menuItems';
import MenuItem from './MenuItem';
const Navbar = () => {
  return (
    <nav>
      <ul className="text-base lg:text-lg relative text-[#1c415d] font-medium hidden  md:flex items-start space-x-4 lg:space-x-9">
        {menuItems.map((menu, index) => {
          return <MenuItem items={menu} key={index} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;