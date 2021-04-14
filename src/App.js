import { useState, useEffect } from 'react';
import { Features, Hero, Navbar, Pricing, Testimony } from './components';

function App() {
  const [scrollNav, setScrollNav] = useState(false)
  const changeNav = () => {
    if (window.scrollY >= 250) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  return (
    <div>
      <Navbar scrollNav={scrollNav} />
      <Hero />
      <Features />
      <Pricing />
      <Testimony />
    </div>
  );
}

export default App;
