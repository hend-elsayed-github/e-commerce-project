import './SingleCategory.css'
import Slogans from '../Slogans/Slogans'
import { useFetcher, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'



function SingleCategory(){
    const {id}= useParams();
    const [data, setData]=useState([])
    var cat;
    if (id==1){
        cat="electronics"
    }
       
    

    if (id==2) {
        cat="jewelery"
   
    }
    
    if (id==3) {
         cat="men's clothing"
 
    } 
    
   if(id==4) {
         cat="women's clothing"
   
    } 


    useEffect(()=>{
        function Callapi(){
         fetch("https://fakestoreapi.com/products").then((response)=>{
               return response.json();
         }).then((finalresult)=>{
             setData(finalresult);
                 
         });
         }
       
        Callapi()
    },[])
    

    

    return(
        <>
        <div id='allproductscontainer_s'>
            {data.filter(categoryproduct => categoryproduct.category==cat).map(filteredcategory => (
            <Link  to={`/SingleProduct/${filteredcategory.id}`} className='oneproduct_s' key={filteredcategory.id}>
                <img className='productimage_s' src={filteredcategory.image}></img>
                <div className='productdetails_s'>
                    <label className="productname_s">{filteredcategory.title}</label>
                    <label className="productprice_s">{filteredcategory.price}</label>
                </div>
            </Link>
            ))}
        </div>
        <Slogans></Slogans>
        </>
    )
}
export default SingleCategory