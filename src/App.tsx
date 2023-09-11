import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/scss/style.scss';

import Header from './components/Header';
import Hero from './components/Hero';
import Feature from './components/Feature';
import CTA from './components/CTA';
import IPTracker from './components/IPTracker';
import Footer from './components/Footer';

const App = () => (
	<div className='App'>
		<Header />
		<Hero />
		<Feature />
		<CTA />
		<IPTracker />
		<Footer />
	</div>
);

export default App;
