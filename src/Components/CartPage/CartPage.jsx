import Slogans from '../Slogans/Slogans'
import './CartPage.css'
import logo from '../../../public/assets/images/logo.png'
import dirsymbol from '../../../public/assets/images/dir-symbol.png'
import deleteicon from '../../../public/assets/images/deleteicon.png'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'


function CartPage(){
    const {id}= useParams();
    const [data,setdata]=useState([])
    useEffect(()=>{
        function Callapi(){
         fetch("https://fakestoreapi.com/products").then((response)=>{
               return response.json();
         }).then((finalresult)=>{
             setdata(finalresult);
                 
         });
         }
       
        Callapi()
    },[])
    return(
        <>
        <div id='imageandlogodiv'>
            <img src={logo}></img>
            <label id='cart'>Cart</label>
            <div id='cartDirectoryDiv'>
                <Link to={"/HomePage"} id='homeWord'>Home</Link>
                <img src={dirsymbol}></img>
                <label id='cartWord'>cart</label>
            </div>
        </div>
        <div className='cartdiv'>
            <div className='leftcartdiv'>
                <div className='infonamesdiv'>
                    <label className='infoname'>Product</label>
                    <label className='infoname'>Price</label>
                    <label className='infoname'>Quantity</label>
                    <label className='infoname'>Subtotal</label>

                </div>
                {data.filter(selectedproduct => selectedproduct.id==3).map(filteredproduct => (
                <div className='infovalues' key={filteredproduct.id}>
                    <img className='infoimage' src={filteredproduct.image}></img>
                    <label className='nameincartdiv'>{filteredproduct.title}</label>
                    <label className='nameincartdiv'>Rs. {filteredproduct.price}</label>
                    <label className='quantityincart'>1</label>
                    <label className='subtotalincart'>Rs. {filteredproduct.price}</label>
                    <img src={deleteicon}></img>
                </div>
       ))}
            </div>
            
            <div className='rightcartdiv'>
                <label className='carttotals'>Cart Totals</label>
                <div className='commonCartTotalsInfo'>
                    <label className='totalvalue'>Subtotal</label>
                    <label className='number1'>Rs. 55.99</label>
                </div>
                <div className='commonCartTotalsInfo'>
                    <label  className='totalvalue'>Total</label>
                    <label className='number2'>Rs. 55.99</label>
                </div>
                <button className='lastbtn'>Check Out</button>

            </div>
        </div>
        
        <Slogans></Slogans>
        </>
    )
}
export default CartPage