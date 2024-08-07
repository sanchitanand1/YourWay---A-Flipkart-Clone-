import { Button, Grid, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useDispatch, useSelector } from "react-redux"
import "../styles.css"
import { CartItem } from "./CartItem";
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EmptyCart from "./EmptyCart";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

export const Cart = () => {
    const navigator = useNavigate();
    const cartItems = useSelector(state => state.cart);

    const calculateTotals = (items) => {
        let sum = 0;
        let discount = 0;
        let amount = 0;

        for (let i = 0; i < items.length; i++) {
            sum += items[i].price.mrp;
            discount += (items[i].price.mrp - items[i].price.cost);
        }
        amount = sum - discount;

        return { sum, discount, amount };
    };

    const totals = calculateTotals(cartItems);
    let { sum, discount, amount } = totals;

    const [bargainPrice, setBargainPrice] = useState('');
    const [openDialog, setOpenDialog] = useState(false);
    const [approvedBargain, setApprovedBargain] = useState(false);

    const handleBargain = () => {
        const minBargainPrice = 0.85 * amount; // 85% of the total amount
        if (Number(bargainPrice) >= minBargainPrice && Number(bargainPrice) > 0) {
            setApprovedBargain(true);
            setOpenDialog(true);
            amount = Number(bargainPrice);
        } else {
            setApprovedBargain(false);
            setOpenDialog(true);
        }
    };

    const handleClose = () => {
        setOpenDialog(false);
    };

    async function placeOrder() {
        // Existing placeOrder logic
    }

    return (
        <>
            {
                cartItems.length ?
                    <Grid container className="cart-container">
                        <Grid item lg={9} md={9} sm={12} xs={12}>
                            <div className="cart-header">
                                <h3>My Cart ({cartItems.length})</h3>
                            </div>
                            <div className="carts-item-container">
                                {cartItems.map(item => <CartItem item={item} key={item.id} />)}
                            </div>
                            <div className="bargain-container">
                                <TextField
                                    label="Enter your bargain price"
                                    variant="outlined"
                                    type="number"
                                    value={bargainPrice}
                                    onChange={e => setBargainPrice(e.target.value)}
                                    style={{ marginRight: 8 }}
                                />
                                <Button onClick={handleBargain} variant="contained">Submit Bargain</Button>
                            </div>
                            <div className="place-order-container">
                                <Button onClick={placeOrder} style={{ textTransform: "capitalize" }} disableElevation variant="contained">Place Order</Button>
                            </div>
                        </Grid>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <div className="bill-container" style={{ textAlign: "left" }}>
                                <Table>
                                    <TableHead>
                                        <p>PRICE DETAILS</p>
                                    </TableHead>
                                    <TableRow>
                                        <TableCell>Price ({cartItems.length} item)</TableCell>
                                        <TableCell>&#8377;{sum}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Discount</TableCell>
                                        <TableCell style={{ color: "green", fontWeight: "500" }}>- &#8377;{discount}</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Delivery Charges</TableCell>
                                        <TableCell style={{ color: "green", fontWeight: "500" }}>FREE</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell style={{ color: "black", fontWeight: "bolder", fontSize: "16px" }}>Total Amount</TableCell>
                                        <TableCell style={{ color: "black", fontWeight: "bolder", fontSize: "16px" }}>&#8377;{amount}</TableCell>
                                    </TableRow>
                                </Table>
                                <p style={{ color: "green", fontFamily: "inter", fontWeight: "500" }}>You will save {discount} on this order</p>
                                <Button style={{ margin: "15px 0px" }} disableElevation variant="contained">Place Order</Button>
                            </div>
                        </Grid>
                    </Grid>
                    :
                    <EmptyCart />
            }
            <Dialog
                open={openDialog}
                onClose={handleClose}
            >
                <DialogTitle>{"Bargain Result"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {approvedBargain ? `Your Bargain price of ₹${bargainPrice} has been approved!` : "Bargain price not approved. Try a higher price."}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
