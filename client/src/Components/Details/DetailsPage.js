
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Button, Grid, Table, TableBody, TableCell, TableRow } from "@mui/material"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Actions/cartActions";

export const DetailsPage = () => {
    const userName = localStorage.getItem("userName");
    const navigator = useNavigate();
    const date = new Date();
    const dispatch  = useDispatch()
    const [quantity,setQuantity]  = useState(1);

    const { id } = useParams();
    const [product, setPoduct] = useState();

    //    fetching data from backend-----
    useEffect(() => {

        window.scrollTo(0, 0);

        const data = async () => {

            const config = {
                headers: {
                    "content-type": "application/json",
                }
            }

            const data = {
                id: id,
            }

            // making post request to server for data;
            try {
                const response =   await axios.post("http://localhost:8080/productDetails", data, config);
                console.log(response);
                setPoduct(response.data.productDetails);


            }
            catch (e) {

                console.log(`${e} : while making post request`);
            }
        }

        data();
    }, [])


    const addItemToCart = ()=>{
         
        dispatch(addToCart(id,quantity));
        navigator("/cart")


    }

    const buyProduct = async ()=>{

        if(!localStorage.getItem("userName")){
            navigator("/login")
        }

        try{
            const config = {
                headers:{
                    "content-type":"application/json",
                }
            }

            const data = {
                username: userName,
                product: product,

            }

            console.log(data);
            const response = axios.post("http://localhost:8080/buyProduct",data,config)
            let information = {
                action : "https://securegw-stage.paytm.in/order/process",
            }

        }
    

    catch(e){
        console.log(e);
    }
}
    return (

        <div className="details-container">

            {product && <Grid container spacing={2} >

                <Grid item lg={4} md={4} xs={12} sm={8}>


                    <div className="left-container" style={{

                    }}>
                        <img src={product.detailUrl} alt="" />
                        <br /> <br />
                        <Button onClick={()=>{
                            addItemToCart();
                        }}
                            startIcon={<ShoppingCartOutlinedIcon />}
                            style={{
                                backgroundColor: "#FF9F00"
                            }}
                            variant="contained">
                            Add to Cart

                        </Button>

                        <Button
                            variant="contained"
                            style={{
                                backgroundColor: "#FB641B"
                            }}
                            startIcon={<FlashOnIcon />}
                            onClick={buyProduct}

                        >Buy Now

                        </Button>
                    </div>

                </Grid>

                <Grid item lg={8} md={8} xs={12} sm={8}>
                    <div className="right-container">
                        <p style={{
                            fontSize: "18px",
                            fontWeight: "405",
                            color: "#212121"
                        }} > {product.title.longTitle}  </p>

                        <div style={{
                            color: "#878787",
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: 'center',
                            gap: "10px"
                        }}>

                            <p>59,167 Ratings & 6,869 Reviews</p>
                            <img style={{

                                height: "25px"
                            }} src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" alt="" />

                        </div>

                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "start",
                            gap: "10px"
                        }}>
                            <p style={{
                                fontSize: "32px",
                                fontFamily: 'Roboto , Arial , sans-serif',
                                fontWeight: 550,
                                margin: "0px"

                            }} >&#8377; {product.price.cost}</p>

                            <s style={{
                                color: "#878787",
                            }}> <p style={{
                                color: "#878787",

                            }}> &#8377; {product.price.mrp}</p> </s>

                            <p style={{
                                color: "#388E3C",
                                fontFamily: 'Inter',
                                fontWeight: "600"
                            }}>{product.price.discount} off</p>



                        </div>


                        <p>  <LocalOfferIcon style={{ color: "#14BE47" }} /> Available Offers</p>
                        <p>  <LocalOfferIcon style={{ color: "#14BE47" }} /> Get extra 20% off upto ₹50 on 1 item(s) T&C
                        </p>
                        <p>  <LocalOfferIcon style={{ color: "#14BE47" }} /> Get extra 13% off (price inclusive of discount) T&C
                        </p>

                        <p>  <LocalOfferIcon style={{ color: "#14BE47" }} /> Sign up for Flipkart Pay Later and get Flipkart Gift Card worth *100* Know More
                        </p>
                        <p>  <LocalOfferIcon style={{ color: "#14BE47" }} /> Buy 2 items save 5%;Buy 3 or more save 10% T&C
                        </p>
                        <p>  <LocalOfferIcon style={{ color: "#14BE47" }} /> 5% Cashback on Flipkart Axis Bank Card
                        </p>
                        <p>  <LocalOfferIcon style={{ color: "#14BE47" }} /> No Cost EMI on Bajaj Finserv EMI Card on cart value above 2999 T&C</p>




                        <Table>


                            <TableBody>
                                <TableRow>

                                    <TableCell style={{ color: "#878787" }}>
                                        Delivery
                                    </TableCell>

                                    <TableCell style={{ fontWeight: "600" }}>
                                        Delivery by {date.toDateString()} |   &#8377;    40
                                    </TableCell>

                                </TableRow>

                                <TableRow>

                                    <TableCell style={{ color: "#878787" }}>
                                        Warranty
                                    </TableCell>

                                    <TableCell>
                                        No Warranty
                                    </TableCell>

                                </TableRow>



                                <TableRow>

                                    <TableCell style={{ color: "#878787" }}>
                                        Seller
                                    </TableCell>

                                    <TableCell >
                                        <span style={{ color: "#2876f0" }}>SuperComNet</span> <br />
                                        <span>GST Invoice available</span> <br />
                                        <span>View More Sellers Starting from &#8377;</span>
                                    </TableCell>



                                </TableRow>

                                <TableRow>
                                    <TableCell colSpan={2}>
                                        <img style={{
                                            width: "390px"
                                        }} src={"https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50"} alt="" />
                                    </TableCell>
                                </TableRow>

                                <TableRow>

                                    <TableCell style={{ color: "#878787" }}>
                                        Description
                                    </TableCell>

                                    <TableCell  >
                                        {product.description}
                                    </TableCell>

                                </TableRow>
                            </TableBody>


                        </Table>

                    </div>


                </Grid>

            </Grid>}


        </div>
    )
}