import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import SchoolsIndex from './pages/SchoolsIndex'
import StateSchools from './pages/StateSchools'
import SchoolPage from './pages/SchoolPage'
import SchoolServicePage from './pages/SchoolServicePage'
import ServicesPage from './pages/ServicesPage'
import BlogList from './components/BlogList'
import BlogPost from './components/BlogPost'
import ContactPage from './pages/ContactPage'
import CaseStudiesPage from './pages/CaseStudiesPage'
import HBCUMarketingPage from './pages/HBCUMarketingPage'
import HSIMarketingPage from './pages/HSIMarketingPage'
import CommunityCollegeMarketingPage from './pages/CommunityCollegeMarketingPage'
import NILMarketingPage from './pages/NILMarketingPage'
import GreekLifeMarketingPage from './pages/GreekLifeMarketingPage'
import CollegeSportsMarketingPage from './pages/CollegeSportsMarketingPage'
import './App.css'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/schools" element={<SchoolsIndex />} />
        <Route path="/schools/:stateSlug" element={<StateSchools />} />
        <Route path="/schools/:stateSlug/:schoolSlug" element={<SchoolPage />} />
        <Route path="/schools/:stateSlug/:schoolSlug/:serviceSlug" element={<SchoolServicePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:serviceSlug" element={<ServicesPage />} />
        <Route path="/hbcu-marketing" element={<HBCUMarketingPage />} />
        <Route path="/hsi-marketing" element={<HSIMarketingPage />} />
        <Route path="/community-college-marketing" element={<CommunityCollegeMarketingPage />} />
        <Route path="/nil-marketing" element={<NILMarketingPage />} />
        <Route path="/greek-life-marketing" element={<GreekLifeMarketingPage />} />
        <Route path="/college-sports-marketing" element={<CollegeSportsMarketingPage />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}

export default App
