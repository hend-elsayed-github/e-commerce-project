import './Slogans.css'
import trophy from '../../../public/assets/images/trophy 1.png'
import guarantee from '../../../public/assets/images/guarantee.png'
import shipping from '../../../public/assets/images/shipping.png'
import customersupporet from '../../../public/assets/images/customer-support.png'
function Slogans(){
    return(
    <div id='slogansdiv'>
        <div className='commonslogandiv'>
            <img className='sloganlogo' src={trophy}></img>
            <div className='commonSloganInfoDiv'>
                <label className='sloganname'>High Quality</label>
                <label className='sloganvalue'>crafted from top materials</label>
            </div>
        </div>

        <div className='commonslogandiv'>
            <img className='sloganlogo' src={guarantee}></img>
            <div className='commonSloganInfoDiv'>
                <label className='sloganname'>Warranty Protection</label>
                <label className='sloganvalue'>Over 2 years</label>
            </div>
        </div>

        <div className='commonslogandiv'>
            <img className='sloganlogo' src={shipping}></img>
            <div className='commonSloganInfoDiv'>
                <label className='sloganname'>Free Shipping</label>
                <label className='sloganvalue'>Order over 150 $</label>
            </div>
        </div>

        <div className='commonslogandiv'>
            <img className='sloganlogo' src={customersupporet}></img>
            <div className='commonSloganInfoDiv'>
                <label className='sloganname'>24 / 7 Support</label>
                <label className='sloganvalue'>Dedicated support</label>
            </div>
        </div>
    </div>
    )
}

export default Slogans