import { AverageBookClub } from "../average-book-club"
import { Header } from "../common/header"
import { Hero } from "../hero"
import { MembershipOptions } from "../membership-options"
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
      <MembershipOptions/>
    </div>
  )
}
