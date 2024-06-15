// import React from 'react';
// import { Link as ScrollLink, Events, scrollSpy } from 'react-scroll';
// import Home from './component/Home'; 
// import About from './component/About'; 
// import Contact from './component/Contact'; // Corrected import path
// import './index.css'; // Ensure this is correctly pointing to your Tailwind CSS file

// const App = () => {
//   React.useEffect(() => {
//     Events.scrollEvent.register('begin', function() {
//       console.log("begin", arguments);
//     });

//     Events.scrollEvent.register('end', function() {
//       console.log("end", arguments);
//     });

//     scrollSpy.update();

//     return () => {
//       Events.scrollEvent.remove('begin');
//       Events.scrollEvent.remove('end');
//     };
//   }, []);

//   return (
//     <div>
//       <nav className="fixed top-0 w-full bg-gray-800 text-white">
//         <ul className="flex justify-center space-x-4 p-4">
//           <li>
//             <ScrollLink
//               to="home"
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={500}
//               className="cursor-pointer"
//               activeClass="active"
//             >
//               Home
//             </ScrollLink>
//           </li>
//           <li>
//             <ScrollLink
//               to="about"
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={500}
//               className="cursor-pointer"
//               activeClass="active"
//             >
//               About
//             </ScrollLink>
//           </li>
//           <li>
//             <ScrollLink
//               to="contact"
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={500}
//               className="cursor-pointer"
//               activeClass="active"
//             >
//               Contact Us
//             </ScrollLink>
//           </li>
//         </ul>
//       </nav>

//       <div className="pt-20">
//         <Home />
//         <About />
//         <Contact />
//       </div>
//     </div>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter, Route, Routes, Link, useLocation,NavLink } from 'react-router-dom';
import { Link as ScrollLink, Element, Events, scrollSpy, scroller } from 'react-scroll';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import './index.css'; // Ensure this is correctly pointing to your Tailwind CSS file

const ScrollToElement = () => {
  const location = useLocation();
  
  React.useEffect(() => {
    if (location.hash) {
      scroller.scrollTo(location.hash.substring(1), {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        offset: -70,
      });
    }
  }, [location]);

  return null;
};

const App = () => {
  React.useEffect(() => {
    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);
//className="fixed top-0 w-full bg-gray-800 text-white"
//className="flex justify-center space-x-4 p-4"
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/#home" className={(isActive) => `${isActive} ? 'text-orange-500' : 'text-yellow-400'`}
              >Home</NavLink>
            </li>
            <li>
              <NavLink to="/#about" className={({ isActive }) => (isActive ? 'text-orange-500' : 'text-yellow-400')}
              >About</NavLink>
            </li>
            <li>
              <NavLink to="/#contact" className={({ isActive }) => (isActive ? 'text-orange-500' : 'text-yellow-400')}
              >Contact Us</NavLink>
            </li>
          </ul>
        </nav>

        <div className="pt-20">
          <Routes>
            <Route path="/" element={<><ScrollToElement /><Home /><About /><Contact /></>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
