import Link from "next/link"
import React from "react"

const Footer = () => {
  return (
    <>



      <section>
        <div className="wrap-foo">
          <h2>Let's work together.</h2>
          <h2>Get in touch.</h2>
        </div>
      </section>

      {/* ========================================================Footer */}
      <section className="footer-section">
        <div className="container">
          <div className="footer-nav d-flex justify-content-between">
            <div className="footer-icon color-black">
              <h4 className="fs-14">© Oli Harris 2023</h4>
            </div>
            <ul className="footer-menu d-flex gap-3 fs-14">
              <li><Link href="">Twiter</Link></li>
              <li><Link href="">Linkedin</Link></li>
              <li><Link href="">Mail</Link></li>
            </ul>
          </div>
        </div>
      </section>

    </>
  )
}

export default Footer