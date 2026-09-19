import { photos } from '../data'
import { Kicker, Button } from '../components/Layout'

const items = [
  ['hero', 'The Casa Luna table', 'Warm light, shared plates and room to linger a little longer.'],
  ['pizza', 'Wood-fired evenings', 'Freshly baked pizza that turns ordinary nights into slow rituals.'],
  ['coffee', 'Slow mornings', 'Espresso, bakery favourites and the first calm moment of the day.'],
  ['pasta', 'Fresh from the kitchen', 'Comforting bowls, rich sauces and kitchen-made flavour.'],
  ['detail', 'A little Casa Luna detail', 'A quiet corner of the space, captured in soft, warm light.'],
  ['salad', 'Colour on every plate', 'Bright seasonal produce, fresh herbs and a happy balance of flavour.']
]

export default function Gallery(){return <main><section className="page-hero section-pad"><Kicker>Around Casa Luna</Kicker><h1>Eat with your<br/><em>eyes first.</em></h1><p>A little look at the food, light and laid-back energy waiting on Sunset Street.</p></section><section className="gallery section-pad">{items.map(([key,label,description])=><figure key={key} className="gallery-item"><img src={photos[key]} alt={label}/><figcaption><strong>{label}</strong><span>{description}</span></figcaption></figure>)}</section><section className="section-pad gallery-cta"><div><Kicker>Visit us</Kicker><h2>See it in person,<br/><em>then stay for dinner.</em></h2></div><Button to="/visit">Find a table</Button></section></main>}
