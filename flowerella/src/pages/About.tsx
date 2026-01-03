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
    height: "85vh",
    overflow: "hidden",
    textAlign: "center",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    filter: "brightness(75%)",
  },

  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "850px",
    color: "#fff",
    padding: "30px",
    background: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(6px)",
    borderRadius: "20px",
  },

  title: {
    color: "#ff4da6",
    fontSize: "3.5rem",
    fontWeight: 800,
    marginBottom: "20px",
    letterSpacing: "1px",
  },

  text: {
    fontSize: "22px",
    lineHeight: 1.8,
    fontWeight: 500,
  },

  storySection: {
    padding: "90px 20px",
    background: "linear-gradient(180deg, #fff, #ffe6f0)",
    textAlign: "center",
  },

  subtitle: {
    fontSize: "42px",
    color: "#e84393",
    marginBottom: "25px",
    fontWeight: 700,
  },

  storyText: {
    maxWidth: "850px",
    margin: "0 auto",
    fontSize: "21px",
    lineHeight: 1.9,
    color: "#444",
  },

  faqSection: {
    padding: "70px 20px",
    background: "#fff5fa",
    textAlign: "center",
  },

  faqItem: {
    background: "#ffffff",
    padding: "20px 25px",
    margin: "15px auto",
    maxWidth: "800px",
    borderRadius: "15px",
    boxShadow: "0 10px 25px rgba(232, 67, 147, 0.15)",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};

