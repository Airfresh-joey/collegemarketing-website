import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'

function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find((p) => p.slug === slug)

  useEffect(() => {
    if (post) {
      document.title = `${post.metaTitle} | College Marketing Co`
      const metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription) {
        metaDescription.setAttribute('content', post.metaDescription)
      }
    }
    window.scrollTo(0, 0)
  }, [post])

  if (!post) {
    return (
      <div className="blog-page">
        <section className="blog-hero">
          <div className="container">
            <h1>Post Not Found</h1>
            <p className="blog-hero-subtitle">
              The article you're looking for doesn't exist.
            </p>
            <Link to="/blog" className="btn btn-primary">Back to Blog</Link>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="blog-page">
      <article className="blog-article">
        <header className="blog-article-header">
          <div className="container-narrow">
            <Link to="/blog" className="blog-back-link">&larr; Back to Blog</Link>
            <div className="blog-article-meta">
              <span className="blog-card-category">{post.category}</span>
              <span className="blog-card-date">{post.date}</span>
              <span className="blog-read-time">{post.readTime}</span>
            </div>
            <h1>{post.title}</h1>
            <p className="blog-article-excerpt">{post.excerpt}</p>
          </div>
        </header>

        <div className="container-narrow">
          <div className="blog-article-body">
            {post.content}
          </div>

          <div className="blog-article-cta">
            <h3>Ready to Launch Your Campus Marketing Program?</h3>
            <p>College Marketing Co builds and manages student ambassador programs, campus events, and peer-to-peer marketing campaigns at 100+ universities nationwide.</p>
            <a href="mailto:hello@collegemarketing.co" className="btn btn-primary btn-lg">
              Get Started Today
            </a>
          </div>

          <div className="blog-article-related">
            <h3>More from the Blog</h3>
            <div className="blog-related-grid">
              {blogPosts
                .filter((p) => p.slug !== post.slug)
                .slice(0, 2)
                .map((related) => (
                  <Link to={`/blog/${related.slug}`} className="blog-related-card" key={related.slug}>
                    <span className="blog-card-category">{related.category}</span>
                    <h4>{related.title}</h4>
                    <span className="blog-card-link">Read More &rarr;</span>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default BlogPost
