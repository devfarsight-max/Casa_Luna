import { photos } from '../data'
import { Kicker, Button } from '../components/Layout'
import MenuCard from '../components/MenuCard'

const menuCategories = [
  {
    title: 'Wood-fired pizzas',
    description: 'Hand-stretched dough, slow fermentation, and plenty of toppings to share.',
    items: [
      ['Margherita', 'Tomato, basil, mozzarella and olive oil.'],
      ['Veggie Supreme', 'Bell peppers, olives, onions, mushrooms and herbs.'],
      ['Paneer Tikka', 'Smoky paneer, capsicum, red onion and house sauce.']
    ]
  },
  {
    title: 'Pastas & comfort plates',
    description: 'Rich, comforting bowls that lean warm, familiar and deeply satisfying.',
    items: [
      ['Creamy Alfredo', 'Pasta ribbons in a silky garlic parmesan sauce.'],
      ['Pesto Penne', 'Fresh basil pesto, roasted vegetables and lemon.'],
      ['Italian Herb Pasta', 'Rustic tomato base with garlic, olives and herbs.']
    ]
  },
  {
    title: 'World vegetarian',
    description: 'A vibrant mix of global plates, fresh colours and balanced flavour.',
    items: [
      ['Mexican Bowl', 'Rice, beans, salsa, corn, avocado and greens.'],
      ['Chinese Stir-Fry', 'Crisp vegetables with wok-tossed noodles and sauces.'],
      ['Indian Fusion Platter', 'Seasonal curries, breads and fresh garnishes.']
    ]
  },
  {
    title: 'Coffee & coolers',
    description: 'Slow mornings, bright afternoons and easy evenings in a glass.',
    items: [
      ['Café Latte', 'Smooth espresso with steamed milk and a soft finish.'],
      ['Cold Coffee', 'Iced, creamy and just the right amount of sweet.'],
      ['Fresh Lime Soda', 'Citrus sparkle with a cool, refreshing finish.']
    ]
  },
  {
    title: 'Sweet endings',
    description: 'Little treats for the last part of the meal and the best kind of pause.',
    items: [
      ['Brownie Sundae', 'Warm brownie with vanilla cream and chocolate drizzle.'],
      ['Cheese Cake', 'Creamy, soft and finished with berry notes.'],
      ['Mocktail Float', 'House-made cooler with a sweet, citrus twist.']
    ]
  }
]

export default function Menu(){return <main><section className="page-hero section-pad"><Kicker>From the kitchen</Kicker><h1>Something for<br/><em>every mood.</em></h1><p>Freshly prepared vegetarian dishes, wood-fired pizzas, fresh coffee, juices, shakes and mocktails.</p></section><section className="menu menu-page section-pad"><div className="menu-cards"><MenuCard image={photos.salad} title="All Meals" text="A welcoming table filled with fresh food and good company."/><MenuCard image={photos.pasta} title="Sweet" text="Rich, chocolatey treats for a delicious finish."/><MenuCard image={photos.pizza} title="Salad" text="Fresh greens, seasonal vegetables and vibrant toppings."/><MenuCard image={photos.coffee} title="Pastry" text="Freshly baked pastry with a crisp, golden finish."/><MenuCard image={photos.dessert} title="Pizza" text="Wood-fired favourites with generous toppings and bold flavour."/></div></section><section className="section-pad menu-detail"><div className="menu-detail-header"><div><Kicker>Chef’s selection</Kicker><h2>Made fresh,<br/><em>served generously.</em></h2></div><Button to="/visit">Book a table</Button></div>{menuCategories.map(category => <div key={category.title} className="menu-category"><div className="category-copy"><h3>{category.title}</h3><p>{category.description}</p></div><ul>{category.items.map(([name,detail]) => <li key={name}><span>{name}</span><small>{detail}</small></li>)}</ul></div>)}</section></main>}
