import React from 'react'
import Services from './Services'

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these HAPPY tails!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <Services
              src="images/Wash.jpg"
              text="We prioritize the well-being of your furry friends by using the finest products available."
              label="Premium products"
              path="/services"
            />
            <Services
              src="images/corte .jpg"
              text="Our skilled team provides stylish cuts that enhance their appearance while maintaining their comfort."
              label="Professional stylists"
              path="/services"
            />
            <Services
              src="images/personalizacion.jpg"
              text="We create custom looks for every celebration, ensuring your dogs shine with unique styles."
              label="Unique styles"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <Services
              src="images/smalldog.jpg"
              text={
                <>
                  <p>✔️Bath and coat conditioning</p>
                  <p>✔️Blow-dry</p>
                  <p>✔️Face trimming</p>
                  <p>✔️Ears cleaning and plucking</p>
                  <p>✔️Private area cleaning</p>
                  <p>✔️Paws</p>
                  <p>✔️Nails trimming</p>
                  <p>✔️Teeth brushing</p>
                  <p>✔️Hypoallergenic fragrance</p>
                  <p>✔️DeShedding</p>
                  <p>✔️Free Bow or bandana</p>
                  <p>❌Plus Professional Hair Cut</p>
                  <p>🐶Pricing varies based on pet's condition and breed.</p>
                </>
              }
              label="Mini Dog"
              path="/service"
              style={{ display: "flex", flexDirection: "row-reverse" }}
            />

            <Services
              src="images/smalldog.jpg"
              text={
                <>
                  <p>✔️Bath and coat conditioning</p>
                  <p>✔️Blow-dry</p>
                  <p>✔️Face trimming</p>
                  <p>✔️Ears cleaning and plucking</p>
                  <p>✔️Private area cleaning</p>
                  <p>✔️Paws</p>
                  <p>✔️Nails trimming</p>
                  <p>✔️Teeth brushing</p>
                  <p>✔️Hypoallergenic fragrance</p>
                  <p>✔️DeShedding</p>
                  <p>✔️Free Bow or bandana</p>
                  <p>❌Plus Professional Hair Cut</p>
                  <p>🐶Pricing varies based on pet's condition and breed.</p>
                </>
              }
              label="Small Dog"
              path="/service"
            />
            <Services
              src="images/medium.jpg"
              text={
                <>
                  <p>✔️Bath and coat conditioning</p>
                  <p>✔️Blow-dry</p>
                  <p>✔️Face trimming</p>
                  <p>✔️Ears cleaning and plucking</p>
                  <p>✔️Private area cleaning</p>
                  <p>✔️Paws</p>
                  <p>✔️Nails trimming</p>
                  <p>✔️Teeth brushing</p>
                  <p>✔️Hypoallergenic fragrance</p>
                  <p>✔️DeShedding</p>
                  <p>✔️Free Bow or bandana</p>
                  <p>❌Plus Professional Hair Cut</p>
                  <p>🐶Pricing varies based on pet's condition and breed.</p>
                </>
              }
              label="Medium Dog"
              path="/service"
            />
            <Services
              src="images/elegancia.jpg"
              text={
                <>
                  <p>✔️Bath and coat conditioning</p>
                  <p>✔️Blow-dry</p>
                  <p>✔️Face trimming</p>
                  <p>✔️Ears cleaning and plucking</p>
                  <p>✔️Private area cleaning</p>
                  <p>✔️Paws</p>
                  <p>✔️Nails trimming</p>
                  <p>✔️Teeth brushing</p>
                  <p>✔️Hypoallergenic fragrance</p>
                  <p>✔️DeShedding</p>
                  <p>✔️Free Bow or bandana</p>
                  <p>❌Plus Professional Hair Cut</p>
                  <p>🐶Pricing varies based on pet's condition and breed.</p>
                </>
              }
              label="Large Dog "
              path="/service"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards
