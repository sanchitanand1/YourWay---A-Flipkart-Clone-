import { Button, ButtonGroup } from "@mui/material"
import { addEllipsis } from "../../utils/commonUtils"
import { useDispatch } from "react-redux";
import { addToCart, deleteFromCart } from "../../Redux/Actions/cartActions";
import { useEffect, useState } from "react";

export const CartItem = ({ item }) => {
    

    const dispatch  = useDispatch() ;

    function removeItem(id){
        dispatch(deleteFromCart(id))    }


    return <div className="cart-item-container">
        <div className="img-button-container" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }} >
            <img className="cart-image-container" src={item.url} alt="" />
            <br />

            <ButtonGroup>
                <Button>-</Button>
                <Button>1</Button>
                <Button>+</Button>
            </ButtonGroup>

        </div>

        <div className="cart-text-container">
            <p> {addEllipsis(item.title.longTitle)}</p>



            <p style={{
                color: "#878787",
                fontSize: "14px"
            }}>Seller:RetailNet <img style={{ width: "55px" }} src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="" /> </p>


            <div style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                justifyContent: "start"
            }}>

                <s style={{
                    color: "#878787",
                }}> <p style={{
                    color: "#878787",

                }}> &#8377; {item.price.mrp}</p> </s>


                <p style={{
                    fontSize: "18px",
                    fontFamily: 'inter',
                    fontWeight: 550,
                    margin: "0px"

                }} >&#8377; {item.price.cost}</p>


                <p style={{
                    color: "#388E3C",
                    fontFamily: 'Inter',
                    fontWeight: "600"
                }}>{item.price.discount} off</p>
            </div>

            <Button onClick={()=>{
                removeItem(item.id)
            }} style={{ fontSize: "14px", color: "#000" }} variant="text">Remove</Button>

        </div>
    </div>




}