import React from 'react'
import '../Components/Scss/Mainpage.scss';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import Pic from './UI/Pic';
import About from './About';
import Projects from './Projects';
import Parallalx from './Parallalx';
import Services from './Services';
import Parallax2 from './Parallax2';
import Skills from './Skills';
import About2 from './About2';
import Contacts from './Contacts';
import Parallax3 from './Parallax3';
import Buttons from './Buttons';
// import Hero2 from './Hero2';
// import Services from './Services';
const Mainpage = () => {
  return (
<>

<section id='Homepage'><Link to={``}>
<Navbar/>
 <Hero/>
 </Link></section>

 <section>
  {/* <Buttons/> */}
 </section>

 <section>
  <Parallalx type="about"/>
</section>


<section>
  <Services/>
</section>

<section>
<Parallax2/>
</section>
 
<section>
<Projects/>
</section>

<section>
<Parallax3/>
</section>

<section>
<About/>
</section>

<section>
<About2/>
</section>

<section>
<Contacts/>
</section>

<section>

</section>



</>
  )
}

export default Mainpage