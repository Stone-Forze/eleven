export default function Menu() {
  const menuItems = [
    {
      category: 'Appetizers',
      items: [
        { name: 'Bruschetta', description: 'Toasted bread with tomato and basil', price: '$12' },
        { name: 'Shrimp Cocktail', description: 'Chilled shrimp with cocktail sauce', price: '$15' }
      ]
    },
    {
      category: 'Main Courses',
      items: [
        { name: 'Grilled Salmon', description: 'Fresh Atlantic salmon with herbs', price: '$28' },
        { name: 'Filet Mignon', description: 'Prime cut with seasonal vegetables', price: '$32' }
      ]
    },
    {
      category: 'Desserts',
      items: [
        { name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with molten center', price: '$10' },
        { name: 'Crème Brûlée', description: 'Classic French dessert', price: '$9' }
      ]
    }
  ]

  return (
    <section className="menu" id="menu">
      <h2>Our Menu</h2>
      <div className="menu-container">
        {menuItems.map((section) => (
          <div key={section.category} className="menu-section">
            <h3>{section.category}</h3>
            {section.items.map((item) => (
              <div key={item.name} className="menu-item">
                <div className="item-header">
                  <h4>{item.name}</h4>
                  <span className="price">{item.price}</span>
                </div>
                <p className="description">{item.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}