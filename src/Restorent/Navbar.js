import React from 'react'

export const Navbar = ({filterItem,menuList}) => {
    return (
        <div>
             <nav className="navbor">
                 <div className="btn-group">
                     {
                         menuList.map((curEle)=>{
                             return (
                                <button className="btn-group-item" onClick={() => filterItem(curEle)}>
                                    {curEle}</button>
                             )
                         })
                     }
                     

                 </div>

             </nav>
        </div>
    )
}
