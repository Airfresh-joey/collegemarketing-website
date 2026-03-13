import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'

function BlogList() {
  useEffect(() => {
    document.title = 'College Marketing Blog | Campus Marketing Tips & Strategies | College Marketing Co'
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Expert insights on college campus marketing, student brand ambassadors, university event marketing, and Gen Z marketing strategies. Read our latest articles.')
    }
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="container">
          <h1>College Marketing Blog</h1>
          <p className="blog-hero-subtitle">
            Expert strategies, tips, and insights for marketing to college students
          </p>
        </div>
      </section>

      <section className="blog-list-section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <Link to={`/blog/${post.slug}`} className="blog-card" key={post.slug}>
                <div className="blog-card-content">
                  <div className="blog-card-meta">
                    <span className="blog-card-category">{post.category}</span>
                    <span className="blog-card-date">{post.date}</span>
                  </div>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <span className="blog-card-link">Read Full Article &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="blog-cta">
        <div className="container">
          <h2>Ready to Put These Strategies Into Action?</h2>
          <p>Our team builds and manages campus marketing programs that deliver measurable results</p>
          <a href="mailto:hello@collegemarketing.co" className="btn btn-primary btn-lg">
            Start Your Campaign
          </a>
        </div>
      </section>
    </div>
  )
}

export default BlogList
