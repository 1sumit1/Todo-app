import React, { useState } from 'react'
import { MenuCart } from './MenuCart'
import "./Style.css"
import Menu from './MenuApi'
import { Navbar } from './Navbar'

const uniqueList=[...new Set(Menu.map((curEle) => {
    return curEle.category;
})
),
"All",
];

console.log(uniqueList);

export const Restorent = () => {
    const[menuData,setMenuData]=useState(Menu);
    const[menuList,setMenuList]=useState(uniqueList);
    // console.log(menuData);

    const filterItem = (category) => {
        if(category==='All'){
            setMenuData(Menu);
            return;
        }
        const updatedList=Menu.filter(curEle =>  curEle.category===category)
        setMenuData(updatedList);
    }
    return (
        <div>
            <Navbar filterItem={filterItem} menuList={menuList}/>

           <MenuCart menuData={menuData}/>
           
                       
        </div>
    )
}
