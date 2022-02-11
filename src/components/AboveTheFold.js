import HomeHero from '../images/HomeHero.png';
const AboveTheFold = () => {
	return ( 
		<div className="gradient">
			<div className="container">
				<div className="grid-two-column">
					<div className="grid-two-column-child">
						<h1>A Restoration Company That Gets Things Back To Normal</h1>
						<h2>Avoid the stress of water, fire, and mold damage with our property restoration services</h2>
						<h3>Find A Local Expert Ready To Help 24/7!</h3>
						<form action="#" className="get-help-now">
							<input type="text" placeholder="Enter ZIP or State Code" />
							<button className="button">Get Help Now</button>
						</form>
					</div>
					<div className="grid-two-column-child">
						<img src={HomeHero} alt="home hero" width="756" height="737"/>
					</div>
				</div>
				<div className="grid-three-column">
					<div className="child">
						<div className="heading">
							<p className="title">Water</p>
						</div>
						<div className="content">
							<p>Need Help With</p>
							<p>Water Damage?</p>
						</div>
					</div>
					<div className="child">
						<div className="heading">
							<p className="title">Fire</p>
						</div>
						<div className="content">
							<p>Need Help With</p>
							<p>Fire Damage?</p>
						</div>
					</div>
					<div className="child">
						<div className="heading">
							<p className="title">Mold</p>
						</div>
						<div className="content">
							<p>Need Help With</p>
							<p>Mold Damage?</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	 );
}
 
export default AboveTheFold;