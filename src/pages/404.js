import React from "react";
import Header from "../components/Pages-header";
import Footer from "../components/Footer/footer";

const ErrorPage = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80vh",
          textAlign: "center",
          backgroundColor: "#f4f4f9",
          padding: "20px",
        }}
      >
        <img
          src="https://via.placeholder.com/400x300?text=Oops!+404+Error"
          alt="404 Not Found"
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "10px",
            marginBottom: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        />
        <h1 style={{ fontSize: "2.5rem", color: "#0073e6", marginBottom: "10px" }}>
          Oops! Page Not Found
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#555", marginBottom: "20px" }}>
          Sorry, we couldn't find the page you were looking for. Please contact us at{" "}
          <a
            href="mailto:info@oceantechnolab.com"
            style={{ color: "#0073e6", textDecoration: "none" }}
          >
            info@oceantechnolab.com
          </a>{" "}
          or call us directly.
        </p>
        <a
          href="/"
          style={{
            textDecoration: "none",
            color: "#fff",
            backgroundColor: "#0073e6",
            padding: "10px 20px",
            borderRadius: "5px",
          }}
        >
          Go Back to Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
