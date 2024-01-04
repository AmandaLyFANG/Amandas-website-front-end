import React from 'react'
import CurriculumVitae from '../CurriculumVitae/cv'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
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
            <Topics />
          </Route>
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

function Topics() {
  let match = useRouteMatch()

  return (
    <div style={{ width: '80%', float: 'left' }}>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  )
}

function Topic() {
  let { topicId } = useParams()
  return <h3>Requested topic ID: {topicId}</h3>
}