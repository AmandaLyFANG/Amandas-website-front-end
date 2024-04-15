import { Suspense, lazy } from "react"
import { BrowserRouter as Router, useRoutes } from "react-router-dom"
import Home from "./pages/home"
import loading from "../src/assets/img/loading.gif"
import "./App.less"
const About = lazy(() => import("./pages/about"))
const Contact = lazy(() => import("./pages/contact"))
const Blog = lazy(() => import("./pages/blog"))
const Support = lazy(() => import("./pages/support"))
const BlogPage = lazy(() => import("./pages/navbar/BlogPage"))
const Navbar = lazy(() => import("./pages/navbar"))
const Project = lazy(() => import("./pages/project"))
const CurriculumVitae = lazy(() => import("./pages/curriculumVitae"))
const BlogDetails = lazy(() => import("./pages/blog/BlogDetails"))

const Routes = () => {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    { path: "cv", element: <CurriculumVitae /> },
    { path: "blogs", element: <Blog /> },
    { path: "blog-details", element: <BlogDetails /> },
    { path: "blogpage", element: <BlogPage /> },
    { path: "about", element: <About /> },
    { path: "project", element: <Project /> },
    { path: "contact", element: <Contact /> },
    { path: "support", element: <Support /> }
  ])

  return element
}

const App = () => (
  <Suspense
    fallback={
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={loading} alt="loading" />
      </div>
    }
  >
    <Router>
      <Navbar />
      <Routes />
    </Router>
  </Suspense>
)

export default App
