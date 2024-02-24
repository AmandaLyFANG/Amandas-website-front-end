import React from 'react'
import CurriculumVitae from './cv/cv'
import Blog from './blog/Blog'
import BlogDetails from './blog/BlogDetails'
import "./App.css";
import Sidebar from "./sidebar/Sidebar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import {
	AboutUs,
	OurAim,
	OurVision,
} from "./pages/AboutUs";
import {
	Services,
	ServicesOne,
	ServicesTwo,
	ServicesThree,
} from "./pages/Services";
import {
	Events,
	EventsOne,
	EventsTwo,
} from "./pages/Events";
import Contact from "./pages/ContactUs";
import Support from "./pages/Support";
function App() {
	return (
		<Router>
			<Sidebar />
			<Routes>
				<Route 
					path="/cv"
					element={<CurriculumVitae />}
				/>	
				 <Route 
					path="/blog"
					element={<Blog />}
				/>	
				<Route path="/blog-details/:articleId" element={<BlogDetails />} />
				<Route
					path="/about-us"
					element={<AboutUs />}
				/>
				<Route
					path="/about-us/aim"
					element={<OurAim />}
				/>
				<Route
					path="/about-us/vision"
					element={<OurVision />}
				/>
				<Route
					path="/services"
					element={<Services />}
				/>
				<Route
					path="/services/services1"
					element={<ServicesOne />}
				/>
				<Route
					path="/services/services2"
					element={<ServicesTwo />}
				/>
				<Route
					path="/services/services3"
					element={<ServicesThree />}
				/>
				<Route
					path="/contact"
					element={<Contact />}
				/>
				<Route
					path="/events"
					element={<Events />}
				/>
				<Route
					path="/events/events1"
					element={<EventsOne />}
				/>
				<Route
					path="/events/events2"
					element={<EventsTwo />}
				/>
				<Route
					path="/support"
					element={<Support />}
				/>
				<Route 
					path="/"
					element = {<Home />}
				/>
				
			</Routes>
		</Router>
	);
}

export default App;
const Home = () => {
  return (
  <div style={{ width: '80%', float: 'left' }}>
    <h2>Home</h2>
    </div>)

}