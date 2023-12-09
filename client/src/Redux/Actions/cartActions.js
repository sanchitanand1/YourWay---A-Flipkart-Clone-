import axios from "axios"
import * as actionType from "../Constants/cartConstants" 

export const addToCart = (id,quantity)=> async (dispatch)=>{
    try{
        const config = {
            headers: {
                "content-type":"application/json"
            }
        }
        const {data} = await axios.post("http://localhost:8080/productDetails",{id:id},config);
        const {productDetails} = data;
        console.log(productDetails);
        return dispatch({type:actionType.ADD_TO_CART_SUCCESS, payload:{...productDetails, quantity}})
    }catch(error){
        console.log(error);
        dispatch({type:actionType.ADD_TO_CART_ERROR, payload:error.message})
    }

}


export const deleteFromCart = (id)=>async (dispatch)=>{
 dispatch({type:actionType.REMOVE_FROM_CART,payload:id});
}

export const deleteCart = ()=>async (dispatch)=>{
    dispatch({type:"remove",payload:""});
   }




