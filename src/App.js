import './App.css';
import Header from './components/Header';
import AboveTheFold from './components/AboveTheFold';
import SectionFirst from './components/SectionFirst';
import SectionSecond from './components/SectionSecond';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';
import SectionFive from './components/SectionFive';
import SectionSix from './components/SectionSix';
import SectionSeven from './components/SectionSeven';
import Footer from './components/Footer';

function App() {
  return (
    <div className="resto-one">
		<Header />
		<AboveTheFold />
		<SectionFirst />
		<SectionSecond />
		<SectionThree />
		<SectionFour />
		<SectionFive />
		<SectionSix />
		<SectionSeven />
		<Footer />
    </div>
  );
}

export default App;
