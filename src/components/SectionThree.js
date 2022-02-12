import Badges from '../images/About-Us-Logos-min.png';

const SectionThree = () => {
	return ( 
		<div className="container-full" id="section-three">
			<div className="container">
				<div className="grid-two-column">
					<div className="grid-two-column-child">
						<h2 className="white">About Us</h2>
						<p className="dark-blue bold">We have a nationwide team of certified technicians ready to offer professional property restoration services</p>
						<p className="white">Restoration 1 is a team of property restoration experts and immediate responders who help homeowners after disaster strikes. Our professionals are amongst the most trained and experienced repairmen and technicians in the industry. We use the field’s most advanced and innovative practices to ensure your property is returned to its pre-damaged state.</p>
						<p className="white">We become your partner and guide you effortlessly through the entire process without confusion, and our primary goal is getting your property back to normal. You’ve made the call. We do the work. We are local, independent, certified, and available 24/7 for all your restoration needs. We serve our customers and their needs as a first priority in our business. And, we're not finished until your life is back to normal.</p>
						<img src={Badges} alt="badges" width="591" height="35" />
						<a href="https://reactjs.org" className="button">More About Us</a>
					</div>
				</div>				
			</div>
		</div>
	 );
}
 
export default SectionThree;