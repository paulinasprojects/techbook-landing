import { AverageBookClub } from "../average-book-club"
import { Footer } from "../common/footer"
import { Header } from "../common/header"
import { Hero } from "../hero"
import { MembershipOptions } from "../membership-options"
import { ReadGrowSection } from "../read-grow-section"
import { ReadingJourney } from "../reading-journey"
import { Testimonials } from "../testimonials"

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
      <Testimonials/>
      <Footer/>
    </div>
  )
}
