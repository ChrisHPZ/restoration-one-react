import Logo from '../images/logo.svg';
import {RiFacebookFill, RiTwitterFill, RiLinkedinFill} from 'react-icons/ri';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return ( 
		<>		
        <div className="container-full dark-blue-bg pt-30">
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
			<div className="container">
				<div className="default-flex bt-grey ptb-30">
					<span className="white fs-14">About Us</span>
					<span className="white fs-14">Residential Services</span>
					<span className="white fs-14">Commercial Services</span>
					<span className="white fs-14">Industrial Services</span>
					<span className="white fs-14">Other Services</span>
					<span className="white fs-14">Contact Us</span>
				</div>
			</div>			
        </div>
		<div className="container-full ptb-30 white-bg">
				<div className="container">
					<div className="default-flex">
						<div className="default-flex-child">
							<p className="dark-blue">
								Privacy Policy | Sitemap | Franchise Opportunities
							</p>
						</div>
						<div className="default-flex-child">
							<p className="dark-blue">
								&copy; 2022 Restoration 1. All rights reserved. Digital Marketing by Thrive
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
     );
}
 
export default Footer;