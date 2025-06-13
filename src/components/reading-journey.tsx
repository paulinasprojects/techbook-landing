import { readingJourneyData } from "../lib/content";
import "../styles/reading-journey.scss";


export const ReadingJourney = () => {
  return (
    <section>
      <div className="reading-journey-main-container">
        <h2>Your tech <br /> reading journey</h2>
        <div className="reading-journey-content-container">
          <ul className="reading-journey-data-container">
            {readingJourneyData.map((data) => (
              <li key={data.id}>
                <div>
                 <span>{data.id}</span>
                 <img src={data.image} alt="" /> 
                </div>
                 <p>{data.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
