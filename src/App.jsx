import React from 'react';
import './App.css'; // Import your CSS file for styling

const App = () => {
  return (
    <div className="container">
      {/* Navbar */}
      <nav>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Products</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Carousel */}
      <div className="carousel">
        {/* Add your carousel content here */}
      </div>

      {/* Welcome message */}
      <section className="welcome">
        <h1>Welcome to TABLETS Medical Store</h1>
        <p>Your one-stop destination for all your medical needs.</p>
      </section>

      {/* Doctor appointment */}
      <section className="appointment">
        <h2>Book an Appointment</h2>
        {/* Add appointment booking form here */}
      </section>

      {/* Store open timings and address */}
      <section className="timings-address">
        <h2>Store Open Timings</h2>
        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
        <p>Saturday: 10:00 AM - 4:00 PM</p>
        <p>Sunday: Closed</p>
        <h2>Address</h2>
        <p>123, Medical Street,</p>
        <p>City, State, Zip Code</p>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 TABLETS Medical Store. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
