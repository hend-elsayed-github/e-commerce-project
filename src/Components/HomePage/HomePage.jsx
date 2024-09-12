import './HomePage.css'
import homeimage from '../../../public/assets/images/home-image.png'
import Slogans from '../Slogans/Slogans'
import jewelery from '../../../public/assets/images/jewelery.jpg'
import men from '../../../public/assets/images/men.png'
import women from '../../../public/assets/images/women.png'
import electronics from '../../../public/assets/images/electronics.png'
import { Link } from 'react-router-dom'


function HomePage(){

    const categories = [
        {
            id:1,
            name:"Electronics",
            image: electronics,
            cat:"electronics"
        },

        {
            id:2,
            name:"Jewelery",
            image:jewelery,
            cat:"jewelery"
        }, 
        {
            id:3,
            name:"Men's clothing",
            image:men,
            cat:"men's clothing"
        },
        {
            id:4,
            name:"Women's clothing",
            image:women,
            cat:"women's clothing"
        }

    ]

    return(
        <>
        <img id='homeimage' src={homeimage}/>
        <p id='categories'>categories</p>
        <div id='homepageinfo'>
            {
                categories.map((category)=>{
                    return(
                        <Link className='singleCatLink' to={`/SingleCategory/${category.id}`}  key={category.id}>
                            <div className='categorydiv' >
                                <img className='categoryimage'  src={category.image}></img>
                                <label className="categoryname" >{category.name}</label>
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

export default HomePage