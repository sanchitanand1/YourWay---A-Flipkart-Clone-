import NavCard from "./NavCard"
import "../styles.css"
import React from "react";

 const ProductBar = ()=>{

    const categories = [  {
        img: "https://rukminim1.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100",
        type: "Grocery",
    },  {
        img: "https://rukminim1.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100",
        type: "Mobiles",
    },   {
        img: "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100",
        type: "Fashion",
    },    {
        img: "https://rukminim1.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100",
        type: "Home & Furniture",
    },   {
        img: "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=100",
        type: "Appliances",
    },    ]
    return (

        <div className="nav-items-container" >
            {categories.map((category)=><NavCard key={Math.random()}  props={category} />)}
        </div>
    )
}
export default ProductBar;