import React from 'react'
import { createRoot } from 'react-dom/client'
import { storeLinks } from './config.js'
import './styles.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-mark" aria-hidden="true">
        <span className="footer-rule" />
        <svg className="globe" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="18" r="16" />
          <ellipse cx="18" cy="18" rx="7" ry="16" />
          <path d="M3 13h30M3 23h30M18 2v32" />
        </svg>
        <span className="footer-rule" />
      </div>
      <p>THANKS FOR STOPPING BY <b>•</b> QUSAY STORE</p>
    </footer>
  )
}

function SignLink({ className, href, label, image, children }) {
  return (
    <a
      className={`sign-link ${className}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      <img src={image} alt="" aria-hidden="true" />
      <span className="sign-copy" aria-hidden="true">{children}</span>
    </a>
  )
}

function App() {
  return (
    <main className="page" aria-label="QUSAY Store">
      <img className="page-background" src="/images/bg.PNG" alt="" aria-hidden="true" />
      <div className="composition">
        <img
          className="layer layer--logo"
          src="/images/logo.PNG"
          alt="QUSAY Store — Retro, thrift, accessories"
          fetchpriority="high"
        />
        <img className="layer layer--tagline" src="/images/tagline.PNG" alt="Find your kind of vintage." />
        <nav className="links" aria-label="QUSAY Store links">
          <SignLink
            className="sign-link--reviews"
            href={storeLinks.googleReviews.url}
            label="Leave QUSAY Store a Google review"
            image="/images/b1.png"
          >
            <span className="sign-copy__eyebrow">LEAVE US A</span>
            <strong>GOOGLE REVIEW</strong>
          </SignLink>
          <SignLink
            className="sign-link--instagram-one"
            href={storeLinks.instagramOne.url}
            label={`Open Instagram ${storeLinks.instagramOne.username}`}
            image="/images/b2.png"
          >
            <span className="sign-copy__username sign-copy__username--red">{storeLinks.instagramOne.username}</span>
            <strong className="sign-copy__secondary">INSTAGRAM</strong>
          </SignLink>
          <SignLink
            className="sign-link--instagram-two"
            href={storeLinks.instagramTwo.url}
            label={`Open Instagram ${storeLinks.instagramTwo.username}`}
            image="/images/b3.png"
          >
            <span className="sign-copy__username sign-copy__username--cyan">{storeLinks.instagramTwo.username}</span>
            <strong className="sign-copy__secondary">INSTAGRAM</strong>
          </SignLink>
        </nav>

        <Footer />
      </div>
    </main>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
