import Slogans from '../Slogans/Slogans'
import './ShopPage.css'
import dirsymbol from '../../../public/assets/images/dir-symbol.png'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


function ShopPage(){
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
        <div id='shopimagediv'>
        <label id='shop'>Shop</label>
            <div id='shopDirectoryDiv'>
                <Link to={"/HomePage"} id='homeWord'>Home</Link>
                <img src={dirsymbol}></img>
                <label id='shopWord'>shop</label>
            </div>
        </div>
        <div id='allproductscontainer' >
        {
            data.map((product)=>{
                return(
                   
                        <Link to={`/SingleProduct/${product.id}`} className='oneproduct' key={product.id}>
                            <img className='productimage' src={product.image}></img>
                            <div className='productdetails'>
                                <label className="productname">{product.title}</label>
                                <label className="productprice">{product.price}</label>
                            </div>
                        </Link>
               
                )

            })
        }
        </div>
        
        <Slogans></Slogans>
        </>
    )
}
export default ShopPage