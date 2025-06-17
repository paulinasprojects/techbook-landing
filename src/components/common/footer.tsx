import "../../styles/footer.scss";
import { heroReviews } from "../../lib/content";

export const Footer = () => {
  return (
    <footer className="footer-main-container">
      <div className="footer-main-content-container">
        <p className="footer-cta-text">Ready to debug your <br /> reading list?</p>
        <button className="footer-button">Review membership options
          <img src="src/assets/icon-arrow-up.svg"/>
        </button>
      </div>
     <div className="footer-main-review-container">
        <ul className="footer-main-review-ul-container">
          {heroReviews.map((review) => (
            <li key={review.id} className="footer-main-review-li">
              <img src={review.src} alt={review.alt} className="footer-main-review-image" />
            </li>
          ))}
        </ul>
        <div>
          <div>
             <div className="footer-stars">
              {Array.from({length: 5}).map((_, i) => (
                <img
                  src="src/assets/star.svg"
                  alt="star"
                  key={i}
                />
              ))}
            </div>
             <p className="footer-review-developers">200+ developers joined already</p>
          </div>
        </div>
      </div>
      <div className="footer-main-links-container">
        <hr />
        <div className="footer-links">
          <p>© 2024 – Tech Book Club</p>
          <div className="footer-icons-container">
            <img src="src/assets/Bird_Icon.svg" alt="" />
            <img src="src/assets/Linkdin_Icon.svg" alt="" />
          </div>
        </div>
      </div>
    </footer>
  )
}
