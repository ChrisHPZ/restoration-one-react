import Logo from '../images/logo.svg';
import {RiFacebookFill, RiTwitterFill, RiLinkedinFill} from 'react-icons/ri';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return ( 
        <div className="container-full dark-blue-bg ptb-30">
            <div className="container">
                <div className="grid-three-column">
                    <div className="grid-three-column-child">
                        <p className="white bold">Follow Us On <RiFacebookFill color="#f15b22" /> <RiTwitterFill color="#f15b22" /> <RiLinkedinFill color="#f15b22" /></p>
                    </div>
                    <div className="grid-three-column-child center">
                        <img src={Logo} alt="resto1" width="257" height="62" />
                    </div>
                    <div className="grid-three-column-child">
                    <p className="white bold tar"><FaMapMarkerAlt color="#f15b22" /> Find A Location</p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;