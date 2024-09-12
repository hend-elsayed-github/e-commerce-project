import './Layout.css'
import { Outlet, Link, Form } from "react-router-dom";
import websitelogo from '../../../public/assets/images/website-logo.png'
import carticon from '../../../public/assets/images/cart-icon.png'
function Layout(){
    return(
        <div id='maincontainer'>
            <div id='navbarcontainer'>
                <img id='websitelogo' src={websitelogo}></img>
                <nav id='navbar'>
                    <Link className='linkname' to="/HomePage">Home</Link>
                    <Link className='linkname' to="/ShopPage">Shop</Link>
                    <Link className='linkname' to="/ContactPage">Contact</Link>
                </nav>
                <Link  className='linkname' to="/CartPage"><img src={carticon}></img></Link>
            </div>
      <Outlet />

      <footer id='footer'>
        <div id='footerinfo'>
            <div className='commonfooterinfodiv'>
                <label id='logonameInFooter'>Funiro.</label>
                <div id='logoinfodiv'> 
                    <label className='logonameInFooterValue'>400 University Drive Suite 200 Coral 
                    </label>
                    <label className='logonameInFooterValue'>Gables,</label>
                    <label className='logonameInFooterValue'>FL 33134 USA</label>
                </div>
            </div>
            <div className='commonfooterinfodiv'>
                <label className='footerInfoName'>Links</label>
                <Link className='linknameInFooter' to="/HomePage">Home</Link>
                <Link className='linknameInFooter' to="/ShopPage">Shop</Link>
                <label className='linknameInFooter'>About</label>
                <Link className='linknameInFooter' to="/ContactPage">Contact</Link>
            </div>
            <div className='commonfooterinfodiv'>
                <label className='footerInfoName'>Help</label>
                <label className='linknameInFooter'>Payment Options</label>
                <label className='linknameInFooter'>Returns</label>
                <label className='linknameInFooter'>Privacy Policies</label>

            </div>
            <div className='commonfooterinfodiv'>
                <label className='footerInfoName'>Newsletter</label>
                <div id='Newsletterdiv'>
                    <label id='enterEmail'><u>Enter Your Email Address</u></label>
                    <label id='subscribe'><u>SUBSCRIBE</u></label>
                </div>
            </div>
        </div>
        <div>
            <hr></hr>
            <p id='websiteRights'>2023 furino. All rights reverved</p>
        </div>
      </footer>
        </div>

    )
}

export default Layout