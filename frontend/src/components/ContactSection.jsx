import { useState } from 'react'
import { contact, social } from '../data'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    _honey: '',
  })
  const [status, setStatus] = useState('idle') // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('')
  const [copied, setCopied] = useState(false)

  const targetEmail =
    import.meta.env.VITE_CONTACT_EMAIL || contact.email || 'ankit.p6384@gmail.com'
  const endpoint =
    import.meta.env.VITE_CONTACT_ENDPOINT || `https://formsubmit.co/ajax/${targetEmail}`

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(contact.email)
      } else {
        const textarea = document.createElement('textarea')
        textarea.value = contact.email
        document.body.appendChild(textarea)
        textarea.select()
        document.execCommand('copy')
        document.body.removeChild(textarea)
      }
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      // Fallback if clipboard API is restricted
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Anti-spam honeypot verification
    if (formData._honey) {
      setStatus('success')
      return
    }

    // Basic client validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error')
      setErrorMessage('Please fill in your name, email, and message.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email.trim())) {
      setStatus('error')
      setErrorMessage('Please provide a valid email address.')
      return
    }

    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          _replyto: formData.email.trim(),
          _subject: `Portfolio Message from ${formData.name.trim()}: ${formData.subject.trim() || 'New Inquiry'}`,
          subject: formData.subject.trim() || 'Portfolio Contact Message',
          message: formData.message.trim(),
          _captcha: 'false',
          _template: 'table',
        }),
      })

      const data = await response.json().catch(() => ({}))

      if (response.ok && (data.success === 'true' || data.success === true || response.status === 200)) {
        setStatus('success')
      } else {
        throw new Error(data.message || 'Unable to send message right now.')
      }
    } catch (err) {
      setStatus('error')
      setErrorMessage(
        err.message || 'Failed to send message. Please check your internet connection or use direct email.'
      )
    }
  }

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      _honey: '',
    })
    setStatus('idle')
    setErrorMessage('')
  }

  const mailtoFallback = `mailto:${contact.email}?subject=${encodeURIComponent(
    formData.subject || 'Portfolio Inquiry'
  )}&body=${encodeURIComponent(
    `Hi Ankit,\n\n${formData.message}\n\n--\nFrom: ${formData.name} (${formData.email})`
  )}`

  return (
    <section className="section-card py-5" id="contact">
      <div className="container">
        <div className="text-center mb-5">
          <p className="section-label mb-2">Contact</p>
          <h2 className="mb-2">Let’s Connect & Collaborate</h2>
          <p className="text-muted mx-auto" style={{ maxWidth: '680px' }}>
            Have a project in mind, a job opportunity, or just want to say hi? Send me a direct
            message using the form below and it will reach me immediately at{' '}
            <strong className="text-info">{targetEmail}</strong>.
          </p>
        </div>

        <div className="row g-4 align-items-stretch">
          {/* Left Column: Contact Information */}
          <div className="col-lg-5">
            <div className="contact-info-card h-100 d-flex flex-column justify-content-between">
              <div>
                <h4 className="text-white mb-3">Contact Information</h4>
                <p className="text-muted small mb-4">
                  Feel free to reach out through any of the channels below. I typically respond
                  within 24 hours.
                </p>

                <div className="contact-info-list mb-4">
                  {/* Email Box */}
                  <div className="contact-info-item d-flex align-items-start gap-3 mb-3 p-3 rounded">
                    <div className="contact-info-icon">
                      <i className="bi bi-envelope-fill text-info fs-5" />
                    </div>
                    <div className="flex-grow-1 overflow-hidden">
                      <div className="contact-info-label">Direct Email</div>
                      <a
                        href={`mailto:${contact.email}`}
                        className="contact-info-value d-block text-truncate"
                        title={contact.email}
                      >
                        {contact.email}
                      </a>
                    </div>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-info contact-copy-btn"
                      onClick={handleCopyEmail}
                      title="Copy email to clipboard"
                    >
                      {copied ? (
                        <>
                          <i className="bi bi-check2 me-1" /> Copied
                        </>
                      ) : (
                        <>
                          <i className="bi bi-clipboard me-1" /> Copy
                        </>
                      )}
                    </button>
                  </div>

                  {/* Phone Box */}
                  <div className="contact-info-item d-flex align-items-start gap-3 mb-3 p-3 rounded">
                    <div className="contact-info-icon">
                      <i className="bi bi-telephone-fill text-info fs-5" />
                    </div>
                    <div>
                      <div className="contact-info-label">Phone</div>
                      <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="contact-info-value">
                        {contact.phone}
                      </a>
                    </div>
                  </div>

                  {/* Location Box */}
                  <div className="contact-info-item d-flex align-items-start gap-3 mb-3 p-3 rounded">
                    <div className="contact-info-icon">
                      <i className="bi bi-geo-alt-fill text-info fs-5" />
                    </div>
                    <div>
                      <div className="contact-info-label">Location</div>
                      <span className="contact-info-value">{contact.location}</span>
                    </div>
                  </div>

                  {/* Resume / CV Box */}
                  <div className="contact-info-item d-flex align-items-center justify-content-between mb-3 p-3 rounded">
                    <div className="d-flex align-items-center gap-3">
                      <div className="contact-info-icon">
                        <i className="bi bi-file-earmark-pdf-fill text-info fs-5" />
                      </div>
                      <div>
                        <div className="contact-info-label">Resume / CV</div>
                        <span className="contact-info-value">Ankit Pandey Resume</span>
                      </div>
                    </div>
                    <div className="d-flex gap-2">
                      <a
                        href={contact.resume}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-sm btn-outline-info contact-copy-btn"
                        title="View Resume in new tab"
                      >
                        <i className="bi bi-eye me-1" /> View
                      </a>
                      <a
                        href={contact.resume}
                        download="Ankit_Pandey_Resume.pdf"
                        className="btn btn-sm btn-outline-light contact-copy-btn"
                        title="Download PDF"
                      >
                        <i className="bi bi-download" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="contact-status-badge d-flex align-items-center gap-2 mb-4 p-3 rounded">
                  <span className="status-dot-pulse" />
                  <span className="small text-light">
                    Available for full-time developer positions & freelance projects.
                  </span>
                </div>
              </div>

              {/* Social profiles */}
              <div>
                <div className="contact-info-label mb-2">Connect On Social</div>
                <div className="d-flex flex-wrap gap-2">
                  {social.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith('mailto:') ? '_self' : '_blank'}
                      rel="noreferrer"
                      className="btn btn-sm btn-outline-light contact-social-chip"
                    >
                      {item.icon && <i className={`bi ${item.icon} me-2`} />}
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="col-lg-7">
            <div className="contact-form-card h-100 d-flex flex-column justify-content-center">
              {status === 'success' ? (
                <div className="contact-feedback-box contact-success-box text-center p-4">
                  <div className="feedback-icon-wrapper mb-3">
                    <i className="bi bi-check-circle-fill text-success fs-1" />
                  </div>
                  <h3 className="text-white mb-2">Message Sent!</h3>
                  <p className="text-light mb-3">
                    Thank you, <strong className="text-info">{formData.name || 'Friend'}</strong>!
                    Your email was sent to <strong className="text-info">{targetEmail}</strong>.
                  </p>
                  <p className="text-muted small mb-4">
                    I have received your note and will get back to your email{' '}
                    <span className="text-light">({formData.email})</span> as soon as possible.
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary px-4 py-2"
                    onClick={resetForm}
                  >
                    <i className="bi bi-arrow-repeat me-2" /> Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="contact-form">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h4 className="text-white mb-0">Send a Direct Message</h4>
                    <span className="badge bg-primary-subtle text-info border border-info-subtle">
                      <i className="bi bi-shield-check me-1" /> Direct to Gmail
                    </span>
                  </div>

                  {status === 'error' && (
                    <div className="alert alert-danger contact-alert d-flex flex-column gap-2 mb-3">
                      <div className="d-flex align-items-center gap-2">
                        <i className="bi bi-exclamation-triangle-fill text-danger fs-5" />
                        <div>{errorMessage}</div>
                      </div>
                      <div className="d-flex gap-2 mt-1">
                        <a
                          href={mailtoFallback}
                          className="btn btn-sm btn-danger text-white text-decoration-none"
                        >
                          <i className="bi bi-envelope-arrow-up me-1" /> Open in Email App
                        </a>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-light"
                          onClick={() => setStatus('idle')}
                        >
                          Dismiss
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Honeypot field (hidden from bots) */}
                  <input
                    type="text"
                    name="_honey"
                    value={formData._honey}
                    onChange={handleChange}
                    style={{ display: 'none' }}
                    tabIndex="-1"
                    autoComplete="off"
                  />

                  <div className="row g-3">
                    {/* Name */}
                    <div className="col-md-6">
                      <label className="contact-label" htmlFor="contact-name">
                        <i className="bi bi-person me-1 text-info" /> Your Name *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        className="form-control contact-input"
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={status === 'submitting'}
                      />
                    </div>

                    {/* Email */}
                    <div className="col-md-6">
                      <label className="contact-label" htmlFor="contact-email">
                        <i className="bi bi-envelope me-1 text-info" /> Your Email *
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        className="form-control contact-input"
                        placeholder="e.g. rahul@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={status === 'submitting'}
                      />
                    </div>

                    {/* Subject */}
                    <div className="col-12">
                      <label className="contact-label" htmlFor="contact-subject">
                        <i className="bi bi-tag me-1 text-info" /> Subject
                      </label>
                      <input
                        type="text"
                        id="contact-subject"
                        name="subject"
                        className="form-control contact-input"
                        placeholder="e.g. Full-time Role / Freelance Project / Collaboration"
                        value={formData.subject}
                        onChange={handleChange}
                        disabled={status === 'submitting'}
                      />
                    </div>

                    {/* Message */}
                    <div className="col-12">
                      <label className="contact-label" htmlFor="contact-message">
                        <i className="bi bi-chat-text me-1 text-info" /> Message *
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows="5"
                        className="form-control contact-input"
                        placeholder="Hi Ankit, I came across your portfolio and would like to talk about..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        disabled={status === 'submitting'}
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="col-12 pt-2">
                      <button
                        type="submit"
                        className="btn btn-primary contact-submit-btn w-100 d-flex align-items-center justify-content-center py-2"
                        disabled={status === 'submitting'}
                      >
                        {status === 'submitting' ? (
                          <>
                            <span
                              className="spinner-border spinner-border-sm me-2"
                              role="status"
                              aria-hidden="true"
                            />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <i className="bi bi-send-fill me-2" /> Send Message
                          </>
                        )}
                      </button>
                    </div>

                    <div className="col-12 text-center">
                      <span className="small text-muted">
                        Prefer your default email client?{' '}
                        <a
                          href={`mailto:${contact.email}`}
                          className="text-info text-decoration-none"
                        >
                          Send email directly to {contact.email}
                        </a>
                      </span>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
