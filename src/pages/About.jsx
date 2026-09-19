import { photos } from '../data'
import { Kicker, Button } from '../components/Layout'

export default function About() {
  return (
    <main>
      <section className="page-hero section-pad">
        <Kicker>Our story</Kicker>
        <h1>
          A little bit of Italy,<br />
          <em>a lot of Pushkar.</em>
        </h1>
        <p>
          Casa Luna is a cozy, soulful dining space created for people who love good food,
          great coffee, and a relaxed atmosphere.
        </p>
      </section>

      <section className="split-section section-pad">
        <img src={photos.table} alt="Casa Luna interior" />
        <div>
          <Kicker>Made for lingering</Kicker>
          <h2>
            Good food is<br />
            <em>a shared feeling.</em>
          </h2>
          <p>
            Located on Sunset Street, Casa Luna brings together the warmth of a bohemian café
            with Italian cuisine and vegetarian food from around the world.
          </p>
          <p>
            We believe dining is more than just a meal. It is good conversation, beautiful
            surroundings, and taking a little time to slow down.
          </p>
          <p>
            From slow mornings with coffee to candlelit evenings with pizza and laughter, we
            have built Casa Luna as a place where time feels easy and every table feels like
            home.
          </p>
        </div>
      </section>

      <section className="section-pad story-steps">
        <div className="story-step">
          <Kicker>01 / Where it began</Kicker>
          <h3>Rooted in comfort.</h3>
          <p>
            We started with a simple idea: create a space that feels generous, warm and
            unhurried, where people can eat well and enjoy the moment.
          </p>
        </div>

        <div className="story-step">
          <Kicker>02 / What we serve</Kicker>
          <h3>Food made to gather around.</h3>
          <p>
            Our menu celebrates wood-fired pizza, fresh pasta, world vegetarian dishes, rich
            coffee, and desserts that invite one more conversation.
          </p>
        </div>

        <div className="story-step">
          <Kicker>03 / What we believe</Kicker>
          <h3>Hospitality is the main ingredient.</h3>
          <p>
            Every dish is prepared with care, every corner is designed to feel welcoming, and
            every guest is treated like part of the Casa Luna family.
          </p>
        </div>
      </section>

      <section className="section-pad values-panel">
        <div>
          <Kicker>Our values</Kicker>
          <h2>
            Simple pleasures,<br />
            <em>beautifully shared.</em>
          </h2>
        </div>

        <div className="values-grid">
          <div>
            <strong>Warmth</strong>
            <p>We create a space that feels easy from the moment you walk in.</p>
          </div>
          <div>
            <strong>Freshness</strong>
            <p>Our food is vibrant, honest and made with care, every single day.</p>
          </div>
          <div>
            <strong>Connection</strong>
            <p>Whether it is a quiet coffee or a lively dinner, we make room for good company.</p>
          </div>
        </div>
      </section>

      <section className="section-pad callout-section">
        <div>
          <Kicker>Come by</Kicker>
          <h2>
            Bring your appetite,<br />
            <em>and stay a while.</em>
          </h2>
        </div>
        <Button to="/visit">Find a table</Button>
      </section>
    </main>
  )
}
