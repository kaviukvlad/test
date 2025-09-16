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

			<section id='home'>
				<Hero />
			</section>

			<section id='about'>
				<AboutUs />
			</section>

			<section id='portfolio'>
				<Portfolio />
			</section>

			<section id='stages'>
				<CardStages />
			</section>

			<section id='services'>
				<ServicesSection />
			</section>

			<section id='contact'>
				<HeroSection />
			</section>
		</>
	)
}

export default App
