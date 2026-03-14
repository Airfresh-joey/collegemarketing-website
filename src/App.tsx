import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import SchoolsIndex from './pages/SchoolsIndex'
import StateSchools from './pages/StateSchools'
import SchoolPage from './pages/SchoolPage'
import ServicesPage from './pages/ServicesPage'
import BlogList from './components/BlogList'
import BlogPost from './components/BlogPost'
import ContactPage from './pages/ContactPage'
import './App.css'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/schools" element={<SchoolsIndex />} />
        <Route path="/schools/:stateSlug" element={<StateSchools />} />
        <Route path="/schools/:stateSlug/:schoolSlug" element={<SchoolPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:serviceSlug" element={<ServicesPage />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}

export default App
