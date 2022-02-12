import HighTouchPoints from '../images/High-Touch-min.png';
import OfficeWorkspace from '../images/Office-and-workspace-min.png';
import ElectronicsAppliances from '../images/Electronics-min.png';
import FoodHandling from '../images/Food-Handling-min.png';
const SectionFive = () => {
	return ( 
		<div className="container-full center" id="section-five">
			<div className="container ptb-30">
				<h2 className="white center">Our <span className="light-blue">KEEP IT</span> <span className="orange">CLEAN</span> Program</h2>
				<p className="white">Whether you're in need of a one-time home cleaning or a regular cleaning program for your business, our Keep It Clean service is developed as a comprehensive treatment for the better health and safety of your family, customers, patients, and employees alike. We provide a full, hygienic, and environmentally-friendly cleaning service by using EPA-registered disinfectants and industry best-practices. At Restoration 1, we will guarantee a safer, healthier place for you and your unique needs.</p>
				<p className="white bold">Thorough Cleaning and Disinfection of Areas Such As:</p>
				<div className="grid-four-column">
					<div className="grid-four-column-child">
						<img src={HighTouchPoints} alt="high touch" width="63" height="63" />
						<p className="center white bold">High Touch Points</p>
					</div>
					<div className="grid-four-column-child">
						<img src={OfficeWorkspace} alt="office" width="63" height="63" />
						<p className="center white bold">Office and Workspace</p>
					</div>
					<div className="grid-four-column-child">
						<img src={ElectronicsAppliances} alt="electronics" width="63" height="63" />
						<p className="center white bold">Electronics and Appliances</p>
					</div>
					<div className="grid-four-column-child">
						<img src={FoodHandling} alt="food handling" width="63" height="63" />
						<p className="center white bold">Food Handling Areas</p>
					</div>
				</div>
				<a href="https://www.reactjs.org" className="button center bold">Learn More</a>
			</div>			
		</div>
	 );
}
 
export default SectionFive;