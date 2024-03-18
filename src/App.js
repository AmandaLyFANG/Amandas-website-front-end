import React from 'react'
import CurriculumVitae from './cv/cv'
import Blog from './blog/Blog'
import BlogDetails from './blog/BlogDetails'
import "./App.css";
import Sidebar from "./sidebar/Sidebar";
import Home from './pages/Home';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import {
	About,
	Aim,
	Vision,
} from "./pages/About";
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
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import BlogPage from './blog-components/BlogPage';
import Navbar from './blog-components/Navbar';
import Project from './pages/project/Project';

function App() {
	return (
		<Router>
			{/* <Sidebar /> */}
			<Navbar />
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
					path="/blogpage"
					element={<BlogPage />}
				/>
				<Route
					path="/about"
					element={<About />}
				/>
				<Route
					path="/project"
					element={<Project />}
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
		// <div className="main-container" style={{backgroundColor: "rgb(203, 195, 227)"}}>
		// 	<BlogPage />
        // </div>
	);
}

export default App;
