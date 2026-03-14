import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')
    
    const form = e.currentTarget
    const formData = new FormData(form)
    
    try {
      const response = await fetch('https://formspree.io/f/meerzldd', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      
      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        const data = await response.json()
        setErrorMessage(data.error || 'Something went wrong')
        setStatus('error')
      }
    } catch {
      setErrorMessage('Network error. Please try again.')
      setStatus('error')
    }
  }

  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="container">
          <h1>Get In Touch</h1>
          <p>Ready to reach college students? Let's build a campus marketing program that delivers results.</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Let's Talk Campus Marketing</h2>
              <p>Whether you're looking to launch a brand ambassador program, plan campus events, or run a sampling campaign - we're here to help.</p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <span className="icon">📧</span>
                  <div>
                    <h3>Email Us</h3>
                    <a href="mailto:hello@collegemarketing.co">hello@collegemarketing.co</a>
                  </div>
                </div>
                <div className="contact-method">
                  <span className="icon">📍</span>
                  <div>
                    <h3>Based In</h3>
                    <p>Denver, Colorado<br />Serving campuses nationwide</p>
                  </div>
                </div>
              </div>

              <div className="quick-links">
                <h3>Quick Links</h3>
                <ul>
                  <li><Link to="/services">Our Services</Link></li>
                  <li><Link to="/schools">Campus Directory</Link></li>
                  <li><Link to="/blog">Marketing Insights</Link></li>
                </ul>
              </div>
            </div>

            <div className="contact-form-wrapper">
              {status === 'success' ? (
                <div className="success-message">
                  <span className="success-icon">✓</span>
                  <h3>Message Sent!</h3>
                  <p>Thanks for reaching out. We'll get back to you within 24 hours.</p>
                  <button onClick={() => setStatus('idle')} className="btn btn-outline">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <h2>Send Us a Message</h2>
                  
                  {status === 'error' && (
                    <div className="error-message">
                      {errorMessage}
                    </div>
                  )}

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Your Name *</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        placeholder="John Smith"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="company">Company</label>
                      <input 
                        type="text" 
                        id="company" 
                        name="company" 
                        placeholder="Acme Inc."
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required 
                        placeholder="john@company.com"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">What are you interested in?</label>
                    <select id="service" name="service">
                      <option value="">Select a service...</option>
                      <option value="brand-ambassadors">Student Brand Ambassadors</option>
                      <option value="campus-events">Campus Events & Activations</option>
                      <option value="sampling">Sampling Programs</option>
                      <option value="social-media">Social Media Campaigns</option>
                      <option value="street-teams">Street Teams</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Tell us about your project *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5} 
                      required
                      placeholder="What campuses are you targeting? What's your timeline? Any specific goals?"
                    ></textarea>
                  </div>

                  <input type="text" name="_gotcha" style={{ display: 'none' }} />

                  <button 
                    type="submit" 
                    className="btn btn-primary btn-lg"
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
