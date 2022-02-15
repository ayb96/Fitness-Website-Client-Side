import React, { useEffect } from 'react'
import { useMyContext } from "../Context/MyContext";

export default function NavBar() {
  const { id, setId } = useMyContext();
  console.log("idddddddddd:",id);
  const handelChange = (idd)=>{
    setId(idd)
  }
    useEffect(() => {
        const items = document.querySelectorAll("ul li");
        items.forEach((item) => {
          item.addEventListener("click", () => {
            document.querySelector("li.active").classList.remove("active");
            item.classList.add("active");
          });
        });
    }, [])
    
  return (
    <div className="new-blog-nav">

  <ul>
    <li className="active" onClick={()=>{handelChange(1)}}>The Weekend Break</li>
    <li onClick={()=>{handelChange(2)}}>The Package Holiday</li>
    <li onClick={()=>{handelChange(3)}}>The Group Package</li>
    <li onClick={()=>{handelChange(4)}}>Annual Package</li>
    
  </ul>
</div>
  )
}
