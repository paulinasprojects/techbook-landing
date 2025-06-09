import { heroReviews } from "../lib/content";
import "../styles/hero.scss";

export const Hero = () => {
  return (
    <section className="hero-main-container">
      <div>
        <h1 className="hero-main-title">Join the ultimate tech book club</h1>
        <p className="hero-main-description">Turn your reading time into learning time with fellow tech <br /> enthusiasts. Get curated recommendations, join vibrant <br /> discussions, and level up your skills one chapter at a time.</p>
        <button className="hero-main-button">
          Review Membership Options
          <img src="src/assets/icon-arrow-down.svg" alt="" /> 
        </button>
        <div className="hero-main-reviews">
          <div className="hero-main-review-reviews">
            <div>
              <ul className="hero-main-review-container">
                {heroReviews.map((review) => (
                  <li key={review.id} className="hero-main-review-li">
                    <img src={review.src} alt={review.alt} className="hero-main-review-image" />
                  </li>
                ))}
              </ul>
            </div>
            <div className="hero-main-star-container">
              <div className="hero-main-stars">
                {Array.from({length: 5}).map((_, i) => (
                  <img
                    src="src/assets/star.svg"
                    alt="star"
                    key={i}
                  />
                ))}
              </div>
              <p>200+ developers joined already</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src="src/assets/image-hero-desktop.webp" alt="" style={{borderRadius: "8px"}} />
      </div>
    </section>
  )
}
