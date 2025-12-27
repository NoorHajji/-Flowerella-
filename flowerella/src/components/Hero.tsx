import bg from "../assets/pink-flowers.jpg";
import { Link } from "react-router-dom";


export default function Hero() {
    return (
        <section style={styles.hero}>
            <h1 style={styles.title}>Fresh Flowers</h1>
            <h2 style={styles.subtitle}>Natural & Beautiful Flowers</h2>
            <p style={styles.text}>
                Discover fresh and elegant flower collections for every occasion.
            </p>
            <Link to="/products">
                <button className="shop-btn">Shop Now</button>
            </Link>

        </section>
    );
}

const styles: Record<string, React.CSSProperties> = {
    hero: {
        height: "90vh",
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "0 20px",
    },
    title: {
        fontSize: "4rem",
        fontWeight: 700,
        color: "#333",
        marginBottom: "15px",
    },
    subtitle: {
        fontSize: "2rem",
        fontWeight: 400,
        color: "#e84393",
        marginBottom: "25px",
    },
    text: {
        fontSize: "1rem",
        color: "#000000ff",
        lineHeight: 1.7,
        marginBottom: "35px",
    },
    button: {
        padding: "12px 30px",
        background: "#333",
        color: "#fff",
        border: "none",
        borderRadius: "25px",
        fontSize: "1.2rem",
        cursor: "pointer",
        transition: "background 0.3s ease",
    },
};

