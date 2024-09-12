import './SingleProduct.css'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import dirsymbol from '../../../public/assets/images/dir-symbol.png'
import line_symbol from '../../../public/assets/images/Line 5.png'
import { Link } from 'react-router-dom'
import faceboocicon from '../../../public/assets/images/facebook_icon.png'
import linkedinicon from '../../../public/assets/images/linkedin_icon.png'
import twittericon from '../../../public/assets/images/twitter_icon.png'


function SingleProduct(){
    const {id}= useParams();
    const [countity,setcountity]=useState(1)
    const [clicked,setclicked]=useState("false")
    const [cart, setcart]=useState("false")
    const [total,settotal]=useState()

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

    function inc(){
        setcountity(countity+1)
    }

    function dec(){
        if(countity>1){
            setcountity(countity-1)
        }
        
    }

    function handleonclick(){
        setclicked("true")
        setcart("false")
     
        
       
    }

    function go(){
        setcart("true")
        setclicked("false")
       
    }


    return(
        <>
            {data.filter(selectedproduct => selectedproduct.id==id).map(filteredproduct => (
                
            <div className='singleProductdiv'  key={filteredproduct.id}>
                <div id='singleProductPath'>
                    <Link to={"/HomePage"} className='home_shopwords'>Home</Link>
                    <img src={dirsymbol}></img>
                    <Link to={"/ShopPage"} className='home_shopwords'>Shop</Link>
                    <img src={dirsymbol}></img>
                    <img src={line_symbol}></img>
                    <label className='productTittle'>{filteredproduct.title}</label>
                </div>
                <div className='singleProductInfo'>
                    <img className='singleProductImage' src={filteredproduct.image}></img>
                    <div className='productDetails'>
                        <label className='title_det'>{filteredproduct.title}</label>
                        <label className='price_det'>Rs. {filteredproduct.price}</label>
                        <label className='rate_det'>Rate  {filteredproduct.rating.rate}</label>
                        <p className='desc_det'>{filteredproduct.description}</p>
                        <div className='buttonsdiv'>
                            <button id='btn1'>
                                <label className='operation' onClick={inc}>+</label>
                                <label id='countity'>{countity}</label>
                                <label  className='operation' onClick={dec}>-</label>
                            </button>
                            <button id='btn2' onClick={handleonclick}>Add To Cart</button>
                        </div>
                        {clicked=="true"?  <div id="popupcart" style={cart=="true"? {display: 'none'}:null}>
                            <button className='cartbtn' onClick={go} >X</button>
                            <label id='shopping_pop' >Shopping Cart</label>
                            <div className='cartinfo'>
                                <img className='cartimage' src={filteredproduct.image}></img>
                                <div className='nameincart'>
                                    <label className='name'>{filteredproduct.title}</label>
                                    <label className='price'>{countity} x Rs.{filteredproduct.price}</label>
                                </div>
                                
                            </div>
                            <div className='subtotaldiv'>
                                    <label className='name'>Subtotal</label>
                                    <label className='total'>Rs. {filteredproduct.price*countity}</label>
                                </div>
                                <Link to={"/CartPage"}  className='endbtn'>Cart</Link>

                </div> :null}
                        <div className='sharingdiv'>
                            <label className='cat'>Category <label>:</label> {filteredproduct.category}</label>
                            <label className='share'>Share <label>:</label> <img src={faceboocicon}/> <img src={linkedinicon}/>
                            <img src={twittericon}/></label>
                        </div>
                    </div>
                </div>
                <div className='descriptiondiv'>
                    <label className='productDesc'>Description</label>
                    <p className='desc'>{filteredproduct.description}</p>
                </div>
                
            </div>
          
          
            ))}

        </>
    )
}

export default SingleProduct