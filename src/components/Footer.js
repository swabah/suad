import React from 'react'

function Footer() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
       <button onClick={handleOpen}>Footer</button>
      {open ? <div>Is Open</div> : ''}
    </div>
  )
}

export default Footer
