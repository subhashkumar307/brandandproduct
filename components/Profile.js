import React from 'react'
import Link from "next/link"


const profile = () => {
  return (
    <>
      {/* ===============================================================p1s2*/}
      <section className="section">
        <div className="container">
          <div className="col-lg-8 mx-auto text-center custom-style-profile">
            <h1 className="fs-72 fw-600 color-black mb-5">Hey 👋🏼 I'm Oli</h1>
          </div>
          
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="row gy-4 p1s2-item-d1 position-relative">
            <div className="col-lg-6">
              <Link href="" className="image-wrap">
                <img src="images/home/project_img1.jpg" alt="" />
              </Link>
            </div>
            <div className="col-lg-6">
              <Link href="" className="image-wrap">
                <img src="images/home/project_img2.jpg" alt="" />
              </Link>
            </div>


          </div>
        </div>
      </section>
    </>
  )
}

export default profile