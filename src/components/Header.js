import Logo from '../images/logo.svg';
const Header = () => {
	return ( 
		<div className="header">
			<div className="alert-bar">
				<p>Watch Restoration 1 on Undercover Boss — March 11 on CBS! Learn More</p>
			</div>
			<div className="gradient">
				<div className="container">
					<div className="navbar">
						<div className="navbar-child">
							<img src={Logo} width="258" height="60" alt="restoration one" />
						</div>
						<div className="navbar-child">
							<a href="https://reactjs.org/" className="button" title="Built on React JS with much love">Get Help Now - 24/7</a>
						</div>
					</div>
					<div className="main-nav">
						<ul>
							<li><a href="https://reactjs.org/">About Us</a></li>
							<li><a href="https://reactjs.org/">Residential Services</a></li>
							<li><a href="https://reactjs.org/">Commercial Services</a></li>
							<li><a href="https://reactjs.org/">Industrial Services</a></li>
							<li><a href="https://reactjs.org/">Other Services</a></li>
							<li><a href="https://reactjs.org/">Contact Us</a></li>
							<li><a href="https://reactjs.org/">Locations</a></li>
						</ul>
					</div>
				</div>
			</div>			
		</div>
	 );
}
 
export default Header;	