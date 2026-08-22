"use client";
import HomeTitle from "@/components/Home/HomeTitle";
import "@fontsource/quicksand";
import umrahServicesImage from "@/assets/images/shared/Umrah Services.jpeg";

const UmrahServicesPage = () => {
  return (
    <main style={{ padding: "24px 16px", maxWidth: "1000px", margin: "0 auto" }}>
      <HomeTitle text={"Umrah Services"} />

      <div style={{ marginBottom: "24px" }}>
        <img
          src={umrahServicesImage.src}
          alt="Umrah Services"
          style={{ width: "100%", maxWidth: "900px", height: "auto", borderRadius: "8px" }}
        />
      </div>

      <h2>Umrah Packages 2026 from Canada</h2>
      <h3>Barrie Mosque x Saba Travels & Tours</h3>
      <p>
        Embark on a life-changing spiritual journey with Barrie Mosque - Noor Ul Islam in
        partnership with Saba Travels & Tours. Experience the beauty of Makkah, Madinah, and
        Istanbul in a carefully curated 5-star Umrah package designed for comfort, spirituality,
        and convenience.
      </p>

      <h3>November 2026 Umrah Package (Limited Seats)</h3>
      <p>
        <b>Travel Dates:</b> November 2 - November 12, 2026
      </p>
      <p>
        <b>Departing from Canada</b>
      </p>
      <p>
        <b>Group led by Shaykh Imam Mateen (Barrie Mosque)</b>
      </p>

      <h3>A Journey of Faith</h3>
      <ul>
        <li>5-Star Premium Accommodation</li>
        <li>3 Nights in Makkah</li>
        <li>3 Nights in Madinah</li>
        <li>2 Nights in Istanbul (bonus stop)</li>
        <li>Guided religious support throughout the journey</li>
        <li>Exclusive visit to the historic grounds of Badr</li>
      </ul>

      <h3>Pricing (Per Person)</h3>
      <ul>
        <li>Quad: $3,050 CAD</li>
        <li>Triple: $3,150 CAD</li>
        <li>Double: $3,395 CAD</li>
      </ul>
      <p>Lowest price in the market. Limited availability.</p>

      <h3>What&apos;s Included</h3>
      <ul>
        <li>International Flights</li>
        <li>Luxury Hotel Stays (5-Star)</li>
        <li>Ground Transportation</li>
        <li>Visa Assistance</li>
        <li>Guided Ziyarat Tours</li>
        <li>Group Support from Imam</li>
      </ul>

      <h3>Booking Requirements</h3>
      <ul>
        <li>$500 CAD deposit (non-refundable)</li>
        <li>Valid passport copy required</li>
      </ul>
      <p>Secure your spot early as seats are limited.</p>

      <h3>Contact &amp; Booking</h3>
      <p>For questions or to book:</p>
      <p>
        <b>Phone:</b>
      </p>
      <p>416-926-8250</p>
      <p>416-919-5725</p>
      <p>
        <b>Email:</b> Sabatravel@rogers.com
      </p>

      <h3>Why Choose This Umrah Package?</h3>
      <ul>
        <li>Trusted partnership between Barrie Mosque and Saba Travels</li>
        <li>Spiritually guided group experience</li>
        <li>Premium comfort at competitive pricing</li>
        <li>Includes Istanbul experience</li>
        <li>Community-focused journey with fellow Canadian Muslims</li>
      </ul>

      <h3>Book Now - Limited Seats Available</h3>
      <p>Visit the blessed lands of</p>
      <p>Masjid al-Haram and</p>
      <p>Al-Masjid an-Nabawi</p>
      <p>Reserve your seat today and begin your journey of faith.</p>
    </main>
  );
};

export default UmrahServicesPage;
