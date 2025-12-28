import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <header style={styles.header}>
            <div style={styles.inner}>

                <div style={styles.logo}>
                    Flowerella<span style={styles.dot}>.</span>
                </div>

                <nav style={styles.nav}>
                    <NavLink to="/" style={({ isActive }) => linkStyle(isActive)}>
                        Home
                    </NavLink>

                    <NavLink to="/about" style={({ isActive }) => linkStyle(isActive)}>
                        About
                    </NavLink>

                    <NavLink
                        to="/products"
                        style={({ isActive }) => linkStyle(isActive)}
                    >
                        Products
                    </NavLink>

                    <NavLink to="/stories"
                    style={({ isActive }) => linkStyle(isActive)}
                    
                    >FlowerGuide</NavLink>

                </nav>


                <NavLink to="/login" style={styles.icon}>
                    👤
                </NavLink>

            </div>
        </header>
    );
}

function linkStyle(isActive: boolean): React.CSSProperties {
    return {
        ...styles.link,
        color: isActive ? "#e84393" : "#555",
    };
}

const styles: Record<string, React.CSSProperties> = {
    header: {
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "#fff",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
    },
    inner: {
        maxWidth: 1200,
        margin: "0 auto",
        padding: "14px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    logo: {
        fontSize: 28,
        fontWeight: 800,
        color: "#333",
    },
    dot: {
        color: "#e84393",
    },
    nav: {
        fontSize: "22px",
        display: "flex",
        gap: 26,
    },
    link: {
        textDecoration: "none",
        fontSize: 20,
        fontWeight: "bold",
        transition: "0.2s",
    },
    disabled: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#aaa",
    },
    icons: {
        display: "flex",
        gap: 16,
        fontSize: 25,
    },
    icon: {
        cursor: "pointer",
        fontSize: 22,
    },
};

