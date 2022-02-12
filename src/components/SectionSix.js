import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import Peerless from '../images/peerless.png';
import Nationwide from '../images/nationwide.png';
import Farmers from '../images/farmers.png';
import Allstate from '../images/allstate.png';
import Statefarm from '../images/statefarm.png';
import USAA from '../images/usaa.png';
import SliderImage from '../images/slider-image.jpg';

const SectionSix = () => {
	return ( 
		<div className="container-full gradient">
			<div className="container">
				<h2 className="dark-blue bold center">We Work With All Insurances</h2>
				<p className="center">We have experience working with all insurance companies and can help you file a claim correctly, no matter where you are located.</p>
				<div className="grid-six-column">
					<div className="grid-six-column-child">
						<img src={Peerless} alt="peerless" width="166" height="79" />
					</div>
					<div className="grid-six-column-child">
						<img src={Nationwide} alt="nationwide" width="166" height="79" />
					</div>
					<div className="grid-six-column-child">
						<img src={Farmers} alt="farmers" width="194" height="106" />
					</div>
					<div className="grid-six-column-child">
						<img src={Allstate} alt="allstate" width="194" height="129" />
					</div>
					<div className="grid-six-column-child">
						<img src={Statefarm} alt="statefarm" width="194" height="54" />
					</div>
					<div className="grid-six-column-child">
						<img src={USAA} alt="usaa" width="166" height="54" />
					</div>
				</div>
				<div className="slider-container">
					<Splide options={{
						type: 'loop',
						lazyLoad: 'nearby',
						autoplay: true,
						rewind: true,
						perPage: 4,
						perMove:1,
						gap: '1rem',
						pagination:false,
						pauseOnHover: true
					}}>
						<SplideSlide>
							<div className="slider-container-child">
								<img src={SliderImage} data-splide-lazy={SliderImage} alt="slider 1" width="283" height="188" />
								<p>Slide 1</p>
							</div>
						</SplideSlide>
						<SplideSlide>
							<div className="slider-container-child">
								<img src={SliderImage} data-splide-lazy={SliderImage} alt="slider 2" width="283" height="188" />
								<p>Slide 2</p>
							</div>
						</SplideSlide>
						<SplideSlide>
							<div className="slider-container-child">
								<img src={SliderImage} data-splide-lazy={SliderImage} alt="slider 3" width="283" height="188" />
								<p>Slide 3</p>
							</div>
						</SplideSlide>
						<SplideSlide>
							<div className="slider-container-child">
								<img src={SliderImage} data-splide-lazy={SliderImage} alt="slider 4" width="283" height="188" />
								<p>Slide 4</p>
							</div>
						</SplideSlide>	
						<SplideSlide>
							<div className="slider-container-child">
								<img src={SliderImage} alt="slider 5" data-splide-lazy={SliderImage} width="283" height="188" />
								<p>Slide 5</p>
							</div>
						</SplideSlide>
						<SplideSlide>
							<div className="slider-container-child">
								<img src={SliderImage} alt="slider 6" data-splide-lazy={SliderImage} width="283" height="188" />
								<p>Slide 6</p>
							</div>
						</SplideSlide>
					</Splide>
				</div>
			</div>
		</div>
	 );
}
 
export default SectionSix;