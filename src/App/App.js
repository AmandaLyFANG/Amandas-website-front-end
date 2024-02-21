import React from 'react'
import CurriculumVitae from '../CurriculumVitae/cv'
import Blog from '../BlogPage/Blog'
import BlogDetails from '../BlogPage/BlogDetails'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <div style={{ width: '15%', float: 'left' }}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cv">Curriculum Vitae</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        </div>
      <div style={{ width: '85%', float: 'left' }}>
        <Switch>
          <Route path="/cv">
            <CurriculumVitae />
          </Route>
          <Route path="/topics">
            {/* <Topics /> */}
            <Blog />
          </Route>
          <Route path="/blog-details/:articleId" component={BlogDetails} /> 
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </div>
    </Router>
  )
}

function Home() {
  return (
  <div style={{ width: '80%', float: 'left' }}>
    <h2>Home</h2>
    </div>)

}