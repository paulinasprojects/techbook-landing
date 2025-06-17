import "../styles/testimonials.scss"

export const Testimonials = () => {
  return (
    <section className="testimonials-main-section">
      <div className="testimonials-stars">
        {Array.from({length: 5}).map((_, i) => (
          <img
            src="src/assets/star.svg"
            alt="star"
            key={i}
          />
        ))}
      </div>
        <p className="testimonial-text">"This book club transformed my technical <br /> reading from a solitary activity into an <br /> enriching community experience. The <br /> discussions are gold!"</p>
        <span className="testimonial-author">Sarah Chen, Software Architect</span>
    </section>
  )
}
