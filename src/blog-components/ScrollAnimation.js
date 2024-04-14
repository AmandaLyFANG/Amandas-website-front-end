// import React from 'react';
// import { Link, animateScroll as scroll } from 'react-scroll';
// import ScrollAnimation from 'react-animate-on-scroll';

// const ScrollAnimationComponent = () => {
//   return (
//     <div>
//       <Link
//         to="section1"
//         spy={true}
//         smooth={true}
//         duration={500}
//       >
//         Scroll to Section 1
//       </Link>

//       <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
//         <h2 id="section1">Section 1</h2>
//         <p>This content will fade in when you reach this point.</p>
//       </ScrollAnimation>

//       {/* Add more content and ScrollAnimation wrappers as needed */}
//       <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
//         <h2 id="section1">Section 2</h2>
//         <p>This content will fade in when you reach this point.</p>
//       </ScrollAnimation>
//       <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
//         <h2 id="section1">Section 3</h2>
//         <p>This content will fade in when you reach this point.</p>
//       </ScrollAnimation>

//     </div>
//   );
// };

// export default ScrollAnimationComponent;

import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { IoMdInformationCircleOutline, IoMdPause, IoMdCheckmarkCircleOutline } from 'react-icons/io';
import "../assets/css/all.css"
const sections = [
  { id: 'section1', icon: <IoMdInformationCircleOutline />, text: 'Some text' },
  { id: 'section2', icon: <IoMdPause />, text: 'Some notes' },
  { id: 'section3', icon: <IoMdCheckmarkCircleOutline />, text: 'Pause' },
  // Add more sections as needed
];

const ScrollAnimationComponent = () => {
  return (
    <div className="flex">
      <div className="w-full">
        {sections.map((section) => (
          <ScrollAnimation animateIn="fadeIn" animateOnce={true} key={section.id} className="h-screen/2 flex items-center justify-center">
            <div className="text-center h-1/2 w-full">
              <div className="text-3xl mb-4">{section.icon}</div>
              <h2>{section.text}</h2>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default ScrollAnimationComponent;

