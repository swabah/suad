import './Show.css'
const Dropdown = ({ submenus, dropdown }) => {

  return (
    <ul className={`dropdown ${dropdown ? "unShow" : "show"}`}>
    <ul  className=' w-auto bg-white font-medium border-t-4 py-2 lg:py-4 border-[#00ab4e] rounded-b-md  shadow-lg absolute top-14 text-base lg:text-lg capitalize text-[#666666] tracking-wide z-50'>
      {submenus.map((submenu, index) => (
        <li key={index} className="w-full h-auto hover:bg-gray-200 hover:text-[#72bf44] p-0.5 lg:p-1.5 px-4  lg:px-6">
          <a className='' href={submenu.url}>{submenu.title}</a>
        </li>
      ))}
    </ul>
   </ul>
  );
};

export default Dropdown;