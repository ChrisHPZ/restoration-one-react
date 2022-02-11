import HomeHero from '../images/HomeHero.png';
const AboveTheFold = () => {
	return ( 
		<div className="gradient-alt">
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
				<div className="content-default">
					<h2>Or Do You Have Commercial Property Damage?</h2>
					<p>Restoration 1 is a top-rated commercial property restoration company. We have years of experience and a full range of restoration services for commercial clients. Whether you are a one-man shop, a large warehouse, store, or hospital, or if your business has experienced water, fire, or mold damage as a result of a disaster, count on our team to help you get back to "business as usual" quickly.</p>
					<a href="https://www.reactjs.org" className="button">See Our Commercial Solutions</a>
				</div>
			</div>
		</div>
	 );
}
 
export default AboveTheFold;