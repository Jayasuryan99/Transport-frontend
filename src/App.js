import { useEffect, useState } from "react";

function CustomModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2 style={styles.title}>Important Notice</h2>
        <p style={styles.text}>Use this website for billing.</p>
        <a 
          href="https://roadwaylogistics.vercel.app" 
          target="_blank" 
          rel="noopener noreferrer"
          style={styles.link}
        >
          Click here to visit →
        </a>
      </div>
    </div>
  );
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(true); // Open modal on page load
  }, []);

  return (
    <div>
      <CustomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backdropFilter: "blur(5px)", // Smooth blur effect
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Semi-transparent black overlay
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    animation: "fadeIn 0.3s ease-in-out"
  },
  modal: {
    backgroundColor: "white",
    padding: "25px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
    width: "90%",
    maxWidth: "400px",
    animation: "fadeInUp 0.3s ease-in-out"
  },
  title: {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px"
  },
  text: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "15px"
  },
  link: {
    display: "inline-block",
    marginBottom: "15px",
    fontSize: "16px",
    color: "#007BFF",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "color 0.2s ease-in-out"
  },
  button: {
    padding: "10px 18px",
    border: "none",
    backgroundColor: "#007BFF",
    color: "white",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    transition: "background 0.2s ease-in-out"
  }
};

export default App;
