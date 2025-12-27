import React, { useState } from 'react';
import flowershop from "../assets/flowershop.jpg";

export default function About() {
  const [openAnswer, setOpenAnswer] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenAnswer(openAnswer === index ? null : index);
  };

  return (
    <>
      <section style={styles.about}>
        <img src={flowershop} alt="Flower Shop" style={styles.image} />

        <div style={styles.content}>
          <h1 style={styles.title}>About Us</h1>
          <p style={styles.text}>
            We are a team of passionate individuals dedicated to providing fresh,
            beautiful, and long-lasting flowers for every occasion. Our mission is to
            offer high-quality flowers with exceptional customer service.
          </p>
        </div>
      </section>

      <section style={styles.storySection}>
        <h2 style={styles.subtitle}>Our Story</h2>
        <p style={styles.storyText}>
          Flowerella began with a simple goal: to bring the beauty of nature into
          people's lives through carefully selected flowers. We work closely with
          local growers to ensure the highest quality.
        </p>
      </section>

      <section style={styles.faqSection}>
        <h2 style={styles.subtitle}>Frequently Asked Questions</h2>

        <div style={styles.faqItem} onClick={() => toggleAnswer(0)}>
          <h3>How do I place an order?</h3>
          {openAnswer === 0 && <p>Simply visit our shop page and select your desired flowers to place an order.</p>}
        </div>

        <div style={styles.faqItem} onClick={() => toggleAnswer(1)}>
          <h3>What are your delivery options?</h3>
          {openAnswer === 1 && <p>We offer same-day and next-day delivery options depending on your location.</p>}
        </div>

        <div style={styles.faqItem} onClick={() => toggleAnswer(2)}>
          <h3>How fresh are your flowers?</h3>
          {openAnswer === 2 && <p>Our flowers are sourced directly from local growers and arrive fresh to you, ensuring the highest quality and longevity.</p>}
        </div>
      </section>
    </>
  );
}

const styles: Record<string, React.CSSProperties> = {
  about: {
    position: "relative",
    height: "80vh",
    overflow: "hidden",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "800px",
    color: "#fff",
    padding: "0 20px",
  },
  title: {
    color: "#ff00b3ff",
    fontSize: "3rem",
    fontWeight: 700,
    marginBottom: "20px",
  },
  text: {
    fontSize: "23px",
    lineHeight: 1.6,
    fontWeight: "bold",
  },
  storySection: {
    padding: "80px 20px",
    background: "#fff",
    textAlign: "center",
  },
  subtitle: {
    fontSize: "40px",
    color: "#e84393",
    marginBottom: "20px",
    marginTop: "9px",
  },
  storyText: {
    maxWidth: "800px",
    margin: "0 auto",
    fontSize: "22px",
    lineHeight: 1.7,
    color: "#050505ff",
    fontWeight: "bold",
  },
  faqSection: {
    padding: "40px 20px",
    background: "#f9f9f9",
    textAlign: "center",
  },
  faqItem: {
    background: "#fff",
    padding: "15px",
    marginBottom: "10px",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    cursor: "pointer",
  },
};
