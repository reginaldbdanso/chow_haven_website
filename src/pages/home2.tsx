import React from 'react'

const home2 = () => {
  return (
    <div className="bg-background p-6">
  <header className="flex justify-between items-center mb-6">
    <h1 className="text-3xl font-bold">MegaMart</h1>
    <nav>
      <ul className="flex space-x-4">
        <li><a href="#" className="text-muted-foreground">Premium Picks</a></li>
        <li><a href="#" className="text-muted-foreground">Home & Kitchen</a></li>
        <li><a href="#" className="text-muted-foreground">Fashion</a></li>
        <li><a href="#" className="text-muted-foreground">Electronics</a></li>
        <li><a href="#" className="text-muted-foreground">Beauty</a></li>
        <li><a href="#" className="text-muted-foreground">Sports, Toys & Luggage</a></li>
      </ul>
    </nav>
  </header>
  <section className="mb-8">
    <div className="bg-primary text-primary-foreground p-4 rounded-lg">
      <h2 className="text-xl font-semibold">Best Deal Online on smart watches</h2>
      <p className="text-lg">SMART WEARABLE. UP TO 80% OFF</p>
    </div>
  </section>
  <section className="mb-8">
    <h2 className="text-2xl font-bold mb-4">Grab the best deal on Smartphones</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="border rounded-lg p-4">
        <img src="https://placehold.co/150x200" alt="Galaxy S22 Ultra" className="mb-2" />
        <h3 className="font-semibold">Galaxy S22 Ultra</h3>
        <p>₹22999</p>
        <p className="text-muted-foreground">Save: ₹2000</p>
      </div>
      <div className="border rounded-lg p-4">
        <img src="https://placehold.co/150x200" alt="Galaxy M13" className="mb-2" />
        <h3 className="font-semibold">Galaxy M13 4GB</h3>
        <p>₹17999</p>
        <p className="text-muted-foreground">Save: ₹4000</p>
      </div>
      <div className="border rounded-lg p-4">
        <img src="https://placehold.co/150x200" alt="Galaxy A04" className="mb-2" />
        <h3 className="font-semibold">Galaxy A04 4GB</h3>
        <p>₹13999</p>
        <p className="text-muted-foreground">Save: ₹3000</p>
      </div>
      <div className="border rounded-lg p-4">
        <img src="https://placehold.co/150x200" alt="Galaxy M33" className="mb-2" />
        <h3 className="font-semibold">Galaxy M33 6GB</h3>
        <p>₹19999</p>
        <p className="text-muted-foreground">Save: ₹5000</p>
      </div>
    </div>
    <a href="#" className="text-primary">View All </a>
  </section>
  <section className="mb-8">
    <h2 className="text-2xl font-bold mb-4">Shop From Top Categories</h2>
    <div className="flex space-x-4">
      <div className="border rounded-lg p-4 text-center">
        <img src="https://placehold.co/100x100" alt="Mobile" />
        <p>Mobile</p>
      </div>
      <div className="border rounded-lg p-4 text-center">
        <img src="https://placehold.co/100x100" alt="Cosmetics" />
        <p>Cosmetics</p>
      </div>
      <div className="border rounded-lg p-4 text-center">
        <img src="https://placehold.co/100x100" alt="Electronics" />
        <p>Electronics</p>
      </div>
      <div className="border rounded-lg p-4 text-center">
        <img src="https://placehold.co/100x100" alt="Furniture" />
        <p>Furniture</p>
      </div>
    </div>
    <a href="#" className="text-primary">View All </a>
  </section>
  <section className="mb-8">
    <h2 className="text-2xl font-bold mb-4">Top Electronics Brands</h2>
    <div className="flex space-x-4">
      <div className="border rounded-lg p-4 text-center">
        <img src="https://placehold.co/100x100" alt="Apple" />
        <p>iPhone</p>
        <p>UP TO 80% OFF</p>
      </div>
      <div className="border rounded-lg p-4 text-center">
        <img src="https://placehold.co/100x100" alt="Realme" />
        <p>Realme</p>
        <p>UP TO 80% OFF</p>
      </div>
      <div className="border rounded-lg p-4 text-center">
        <img src="https://placehold.co/100x100" alt="Xiaomi" />
        <p>Xiaomi</p>
        <p>UP TO 80% OFF</p>
      </div>
    </div>
    <a href="#" className="text-primary">View All </a>
  </section>
  <section className="mb-8">
    <h2 className="text-2xl font-bold mb-4">Daily Essentials</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="border rounded-lg p-4 text-center">
        <img src="https://placehold.co/100x100" alt="Daily Essentials" />
        <p>Daily Essentials</p>
        <p>UP TO 50% OFF</p>
      </div>
      <div className="border rounded-lg p-4 text-center">
        <img src="https://placehold.co/100x100" alt="Vegetables" />
        <p>Vegetables</p>
        <p>UP TO 50% OFF</p>
      </div>
      <div className="border rounded-lg p-4 text-center">
        <img src="https://placehold.co/100x100" alt="Fruits" />
        <p>Fruits</p>
        <p>UP TO 50% OFF</p>
      </div>
      <div className="border rounded-lg p-4 text-center">
        <img src="https://placehold.co/100x100" alt="Strawberry" />
        <p>Strawberry</p>
        <p>UP TO 50% OFF</p>
      </div>
    </div>
    <a href="#" className="text-primary">View All </a>
  </section>
  <footer className="mt-8">
    <h2 className="text-2xl font-bold">MegaMart</h2>
    <div className="flex justify-between mt-4">
      <div>
        <h3 className="font-semibold">Contact Us</h3>
        <p>WhatsApp: 1122-22-2152</p>
        <p>Call: 1800-92-22-132</p>
      </div>
      <div>
        <h3 className="font-semibold">Download App</h3>
        <a href="#" className="text-primary">App Store</a>
        <a href="#" className="text-primary">Google Play</a>
      </div>
    </div>
    <p className="text-muted-foreground text-sm mt-4">© 2022 All rights reserved. Reliance Retail Ltd.</p>
  </footer>
</div>
  )
}

export default home2

