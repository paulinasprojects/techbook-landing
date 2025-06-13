import { AverageBookClub } from "../average-book-club"
import { Header } from "../common/header"
import { Hero } from "../hero"
import { ReadGrowSection } from "../read-grow-section"
import { ReadingJourney } from "../reading-journey"

export const Homepage = () => {
  return (
    <div>
      <Header>
        <Hero/>
      </Header>
      <ReadGrowSection/>
      <AverageBookClub/>
      <ReadingJourney/>
    </div>
  )
}
