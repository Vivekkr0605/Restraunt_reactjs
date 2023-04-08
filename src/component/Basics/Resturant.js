import React, { useState } from 'react'
import "./style.css";
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from './Navbar';

const uniqueList = [
    // spread operator - to convert it into array
    // set - to keeep only unique value
    ...new Set(Menu.map((curElem)=>{
    return curElem.category;
})),
 "All",
];
console.log(uniqueList)

const Resturant = () => {
    // useState is used to get data and hold data 
    // useState() returns an array of two elements
    // first element - state variable -  to store api
    // second element - add set in starting of second element
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);

    // it filter out
    const filterItem = (category) => {
      if(category === "All") {
        setMenuData(Menu);
        return;
      }

        // it will store filter data in updatedList only if 
        const updatedList = Menu.filter((curElem) => {
            return curElem.category == category;
        })
        // we have added updated value in setMenuData - setMenuData will change current state variable value i.e. menuData
        setMenuData(updatedList);
    }
    // console.log(menuData);
  return (
     
    <>
    {/* passing props */}
    <Navbar filterItem={filterItem} menuList = {menuList} />
   

    {/* Called menucard here then passing data to menuCard from menuData */}
    {/* we are passing props here  */}
    <MenuCard menuDataVar={menuData} />
    </>
  )
}

export default Resturant