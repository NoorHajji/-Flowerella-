import React from "react";
import "../storiesflower.css"; 
import Rosee from "../assets/img/m.jpeg";
import Rose1 from "../assets/img/v.jpeg";
import Rose2 from "../assets/img/vv.jpeg";
import Rose3 from "../assets/img/cc.jpeg";
import Rose4 from "../assets/img/n.jpeg";
import Rose5 from "../assets/img/vvv.jpeg";

const stories = [
  {
    image: Rose3,
    alt: "Yellow Lilie",
    tag: "Joy",
    title: "Yellow Lilie",
    description:
      "Yellow lilies symbolize happiness, gratitude, and positivity. They bring warmth and brightness to any space.",
    info: ["☀ Loves Sun", "💧 Medium Water"],
  },
  {
    image: Rose2,
    alt: "Lavender",
    tag: "Calm",
    title: "Lavender",
    description:
      "Lavender is known for its calming fragrance and relaxing properties. It is widely used in aromatherapy.",
    info: ["🌤 Full Sun", "💧 Low Water"],
  },
  {
    image: Rose1,
    alt: "Phalaenopsis Orchid",
    tag: "Elegance",
    title: "Phalaenopsis Orchid",
    description:
      "A symbol of elegance and luxury, this orchid blooms for long periods and prefers gentle indoor light.",
    info: ["🌥 Indirect Light", "💧 Weekly Water"],
  },
  {
    image: Rosee,
    alt: "Pink Tulips",
    tag: "Affection",
    title: "Pink Tulips",
    description:
      "Pink tulips express care, affection, and happiness. They are classic spring flowers loved worldwide.",
    info: ["☀ Loves Sun", "💧 Medium Water"],
  },
  {
    image: Rose5,
    alt: "Daisies",
    tag: "Innocence",
    title: "Daisies",
    description:
      "Daisies symbolize innocence and purity. Their simple beauty brings joy and cheerfulness.",
    info: ["☀ Loves Sun", "💧 Medium Water"],
  },
  {
    image: Rose4,
    alt: "Madagascar Jasmine",
    tag: "Romance",
    title: "Madagascar Jasmine",
    description:
      "Known for its strong, sweet fragrance, this flower represents love and romance and is often used in decorations.",
    info: ["🌤 Bright Light", "💧 Weekly Water"],
  },
];

const App: React.FC = () => {
  return (
    <section className="flower-showcase">
      <h1 className="hero-title">
        Flower <span>Stories</span>
      </h1>
      <p className="hero-subtitle">Every flower has a story to tell 🌸</p>

      <div className="story-grid">
        {stories.map((story, idx) => (
          <div className="story-card" key={idx}>
            <div className="image-box">
              <img src={story.image} alt={story.alt} />
              <span className="tag">{story.tag}</span>
            </div>
            <div className="story-content">
              <h2>{story.title}</h2>
              <p>{story.description}</p>
              <div className="info">
                {story.info.map((i, index) => (
                  <span key={index}>{i}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default App;