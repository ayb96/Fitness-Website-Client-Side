import React from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MessageIcon from "@mui/icons-material/Message";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import AOS from "aos";
import "aos/dist/aos.css";
import { useMyContext } from "../Context/MyContext";
import NavBar from "./NavBar";
export default function Blog() {
  const { id } = useMyContext();
  
  AOS.init();

  const categoryData = [
   
    {
      id:2,
      name:"The Package Holiday",
      category_id:2
    },
    {
      id:3,
      name:"The Group Package",
      category_id:3
    },
    {
      id:4,
      name:"Annual Package",
      category_id:4
    },
  ]
  const categorySingleData = [
    {
      id:1,
      data:[
        {
          id:1,
          name:"Test 1",
          
        },
        {
          id:2,
          name:"Test 2",
          
        },
        {
          id:3,
          name:"Test 3",
          
        },
      ]
    },
    {
      id:2,
      data:[
        {
          id:1,
          name:"Test 1",
          
        },
        {
          id:2,
          name:"Test 2",
          
        },
        {
          id:3,
          name:"Test 3",
          
        },
        {
          id:4,
          name:"Test 4",
          
        },
      ]
    },
    {
      id:3,
      data:[
        {
          id:1,
          name:"Test 1",
          
        },
        {
          id:2,
          name:"Test 2",
          
        },
        {
          id:3,
          name:"Test 3",
          
        },
        {
          id:4,
          name:"Test 4",
          
        },
        {
          id:5,
          name:"Test 5",
          
        },
      ]
    },
    {
      id:4,
      data:[
        {
          id:1,
          name:"Test 1",
          
        },
        {
          id:2,
          name:"Test 2",
          
        },
        {
          id:3,
          name:"Test 3",
          
        },
        {
          id:4,
          name:"Test 4",
          
        },
        {
          id:5,
          name:"Test 5",
          
        },
        {
          id:6,
          name:"Test 6",
          
        },
      ]
    },
   
    
  ]

  return (
    <div className="blog">
      <div className="blog-box">
        <div className="blog1">
          <div className="blog11">OUR LATEST BLOG</div>
          <div className="blog12"></div>
          <div className="blog13">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
          </div>
        </div>
        {/* <div className="blog2">
          <div id="hovering" className="blog2-box">
            <div className="btnz activate">
              <div className="blog21" onClick={()=>{handelChange(1)}}>The Weekend Break</div>
            </div>
            {categoryData.map((obj, index)=>(
              <div className="btnz" key={index}>
                <div className="blog21" onClick={()=>handelChange(obj.category_id)}>{obj.name}</div>
              </div>
            ))}
 
          </div>
        </div> */}
        <NavBar/>
      </div>

      <div className="blog3">
        {
           categorySingleData
          .filter(task => task.id === id)
          
          .map(task => (
            // console.log("category data:",task);
            task.data.map((objj)=>{
              console.log(objj.name);
              return (
                 <div className="blog3-box" data-aos="zoom-in">
                  <div className="blog3-img1">
                    <div className="blog3-img1-date">
                      <div className="blog3-date1">23 </div>
                      <div className="blog3-date2">JAN </div>
                    </div>
                  </div>
                  <div className="blog3-info">
                    <div className="blog3-info1">
                      <div className="blog-icon-flex">
                        <div>
                          <PersonOutlineIcon className="blog-icon" />
                        </div>
                        <div className="blog-icon-text">ADMIN</div>
                      </div>
                      <div className="blog-icon-flex">
                        <div>
                          <CalendarTodayIcon className="blog-icon" />
                        </div>
                        <div className="blog-icon-text">23 JAN</div>
                      </div>
                      <div className="blog-icon-flex">
                        <div>
                          <MessageIcon className="blog-icon" />
                        </div>
                        <div className="blog-icon-text">COMMENT</div>
                      </div>
                    </div>
                    <div className="blog3-info2">{objj.name}</div>
                    <div className="blog3-info3">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                      diam nonumy eirmod tempor invidunt ut labore et dolore magna
                      aliquyam erat.
                    </div>
                    <div className="blog3-info4">
                      <div>READ MORE</div>
                    </div>
                  </div>
                </div>
              )
            })
  ))
        }
        
      </div>
    </div>
  );
}
