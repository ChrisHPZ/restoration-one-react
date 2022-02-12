import './App.css';
import Header from './components/Header';
import AboveTheFold from './components/AboveTheFold';
import SectionFirst from './components/SectionFirst';
import SectionSecond from './components/SectionSecond';
import SectionThree from './components/SectionThree';
import SectionFour from './components/SectionFour';

function App() {
  return (
    <div className="resto-one">
		<Header />
		<AboveTheFold />
		<SectionFirst />
		<SectionSecond />
		<SectionThree />
		<SectionFour />
    </div>
  );
}

export default App;
