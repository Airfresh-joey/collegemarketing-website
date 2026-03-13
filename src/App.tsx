import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import SchoolsIndex from './pages/SchoolsIndex'
import StateSchools from './pages/StateSchools'
import SchoolPage from './pages/SchoolPage'
import ServicesPage from './pages/ServicesPage'
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
      </Route>
    </Routes>
  )
}

export default App
