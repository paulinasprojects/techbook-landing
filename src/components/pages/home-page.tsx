import { Header } from "../common/header"
import { Hero } from "../hero"
import { ReadGrowSection } from "../read-grow-section"

export const Homepage = () => {
  return (
    <div>
      <Header>
        <Hero/>
      </Header>
      <ReadGrowSection/>
    </div>
  )
}
