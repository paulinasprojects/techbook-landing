import "../styles/average-book-club.scss";

export const AverageBookClub = () => {
  return (
    <section className="average-book-club-section">
      {/* left */}
      <div className="average-book-club-left">
        <h2>Not your average book club</h2>
        <p>Connect with a community that speaks your language - from <span>Python</span> to <span>TypeScript</span> and everything in between. Our discussions blend technical depth with practical applications.</p>
      </div>
      {/* right */}
      <div className="average-book-club-right">
        <img src="src/assets/image-not-average-desktop.webp" alt="" style={{borderRadius: "8px"}} />
        <div className="average-book-club-technologies">
          <img src="src/assets/technologies-logos.svg" alt="" />
        </div>
      </div>
    </section>
  )
}
