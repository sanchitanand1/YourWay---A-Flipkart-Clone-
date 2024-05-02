
import { AppBar, Badge, Box, Button, Toolbar, styled } from "@mui/material"
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Search from "./Search";
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import React from "react";


const Header = () => {
    const [cartItems,setCartItems] = useState(0);
    const navigate = useNavigate();
    const url = "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"


    const firstName = localStorage.getItem("firstName");
    const products = useSelector(state=> state.cart);

    useEffect(()=>{
        
        setCartItems(products.length);
    },[products])



    return (<AppBar style={{ width: "100%", boxShadow: "none", height: "55px" }}>

        <Box style={{ width: "100%" }}>

            <Toolbar style={{ backgroundColor: "white", height: "70px", flex: "1" }}>
                <div className="main-right-container" >
                    <img onClick={()=>{
                        navigate("/")
                    }}  style={{
                        cursor: "pointer",
                    }}  src={url} alt="logo" />
                    <Search />
                </div>

                <div className="icons-container">

                    {firstName ? <Button onClick={() => {
                        localStorage.removeItem("userName");
                        localStorage.removeItem("firstName");
                        navigate("/");
                    }} variant="text" disableElevation startIcon={<ExitToAppIcon />}>
                        <p>  {firstName} </p>
                    </Button> : 
                    
                    
                    <Button onClick={() => {
                        navigate("/login")
                    }} variant="text" disableElevation startIcon={<AccountCircleOutlinedIcon />}>
                        <p>  Login </p>
                    </Button>}

                    <Button onClick={()=>{
                        navigate("/orders");
                    }}  variant="text" disableElevation startIcon={<LocalShippingOutlinedIcon /> }>
                        <p>  Your Orders</p>
                    </Button>

                    <Button onClick={()=>{
                        navigate("/cart");
                    }}  variant="text" disableElevation startIcon={ <Badge badgeContent={cartItems}  color="primary"><ShoppingCartOutlinedIcon /></Badge> }>
                        <p>  Cart</p>
                    </Button>
                    <Button variant="text" disableElevation startIcon={<StorefrontOutlinedIcon />}>
                        <p>  Become a Seller</p>
                    </Button>
                </div>




            </Toolbar>
        </Box>



    </AppBar>)
}

export default Header;