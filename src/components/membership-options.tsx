import { membershipPrices } from "../lib/content";
import "../styles/membership-options.scss";

export const MembershipOptions = () => {
  return (
    <section className="memebrship-options-main-container">
     <div className="membership-options-content-container">
       <h2>Membership options</h2>
       <div className="membership-options-prices-container">
        <div className="membership-option-prices">
          {membershipPrices.map((price) => (
            <div key={price.id} className="membership-main-container">
              <p className="membership-name">{price.name}</p>
              <span className="membership-price">{price.price}</span>
               {price.price !== "Custom" && <span className="membership-price-period">/month</span>}
              <hr />
              <div>
                {price.perks.map((perk, idx) => (
                  <div key={idx}>
                    <div className="membership-perk-one-container">
                      <img src="src/assets/icon-check.svg" alt="" />
                      <p className="membership-perk">{perk.perk1}</p>
                    </div>
                    <div className="membership-perk-second-container">
                      <img src="src/assets/icon-check.svg" alt="" />
                      <p className="membership-perk">{perk.perk2}</p>
                    </div>
                  </div>
                ))}
              </div>
                <button>{price.buttonText}</button>
            </div>
          ))}
        </div>
       </div>
     </div>
    </section>
  )
}
