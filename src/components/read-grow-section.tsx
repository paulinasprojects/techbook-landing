import "../styles/read-grow.scss";
import { readGrow } from "../lib/content";

export const ReadGrowSection = () => {
  return (
    <div className="read-grow-section">
      {/* left */}
      <div>
        <img src="src/assets/image-read-together-desktop.webp" alt="" style={{borderRadius: "12px"}} />
      </div>
      {/* Right */}
      <div className="read-grow-right-container">
        <h2>Read together, grow together</h2>
        <div className="read-grow-right-list">
          <ul>
            {readGrow.map((readgrow) => (
              <li key={readgrow.id}>
                <img src={readgrow.img} alt="" />
                {readgrow.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
