import Link from "next/link"
import React from "react"

const Home = () => {
  return (
    <>
      {/* ===============================================================p1s1*/}
      <section className="section">
        <div className="container">
          <div className="col-lg-8 mx-auto text-center">
            <h1 className="fs-72 fw-600 color-black mb-5">A brand and product designer working with clients globally</h1>
          </div>
          <ul className="ul-section-banner">
            <li>Expertise</li>
            <li>Branding</li>
            <li>Product</li>
            <li>Design Systems</li>
          </ul>
        </div>
      </section>
      {/* ===============================================================p1s2*/}
      <section className="section">
        <div className="container">
          <div className="row gy-4 p1s2-item-d1 position-relative">
            <div className="col-lg-6">
              <Link href="" className="image-wrap">
                <img src="images/home/project_img.jpg" alt="" />
              </Link>
            </div>
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
            <div className="col-lg-6">
              <Link href="" className="image-wrap">
                <img src="images/home/project_img3.jpg" alt="" />

              </Link>
            </div>
            <div className="col-lg-6">
              <Link href="" className="image-wrap">
                <video className="video-wrap" controls>
                  <source src="video.mp4" type="video/mp4" />
                </video>
              </Link>
            </div>
            <div className="col-lg-6">
              <Link href="" className="image-wrap">
                <img src="images/home/project_img4.jpg" alt="" />

              </Link>
            </div>
            <div className="col-lg-6">
              <Link href="" className="image-wrap">
                <img src="images/home/project_img5.jpg" alt="" />

              </Link>
            </div>
            <div className="col-lg-6">
              <Link href="" className="image-wrap">
                <video className="video-wrap" controls>
                  <source src="video1.mp4" type="video/mp4" />
                </video>
              </Link>
            </div>
            <div className="col-lg-6">
              <Link href="" className="image-wrap">
                <img src="images/home/project_img6.jpg" alt="" />

              </Link>
            </div>
            <div className="col-lg-6">
              <Link href="" className="image-wrap">
                <img src="images/home/project_img7.jpg" alt="" />

              </Link>
            </div>
            <div className="col-lg-6">
              <Link href="" className="image-wrap">
                <img src="images/home/project_img8.jpg" alt="" />

              </Link>
            </div>
            <div className="col-lg-6">
              <Link href="" className="image-wrap">
                <video className="video-wrap" controls>
                  {/* <source src="video2.mp4" type="video/mp4" /> */}
                  <iframe src="https://framerusercontent.com/modules/assets/NieGBlxBdgpz9QCHV5Aj89rWjVg~DPEeC0jYyBwx9c865cOkUi-KzBM-3ukyhpgtPhvYo_U.mp4" title="description"></iframe>
                </video>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home