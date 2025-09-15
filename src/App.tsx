import './App.css'
import { HeroSection } from './components/Form/HeroSection'
import { Portfolio } from './components/Portfolio/portfolio'
import { ServicesSection } from './components/ServicesSection/ServicesSection'
import { CardStages } from './components/Stages/CardStages'
import { AboutUs } from './components/aboutUs/about'
import { Header } from './components/haeder/haeder'
import { Hero } from './components/hero/Hero'

function App() {
	return (
		<>
			<Header />
			<Hero />
			<AboutUs />
			<Portfolio />
			<CardStages />
			<ServicesSection />
			<HeroSection />
		</>
	)
}

export default App
