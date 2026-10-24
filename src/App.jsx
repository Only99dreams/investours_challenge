import Nav from './components/Nav';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Tracks from './components/Tracks';
import Gains from './components/Gains';
import HowItWorks from './components/HowItWorks';
import Prizes from './components/Prizes';
import Gallery from './components/Gallery';
import FinalCta from './components/FinalCta';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Marquee />
        <Tracks />
        <Gains />
        <HowItWorks />
        <Prizes />
        <Gallery />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
