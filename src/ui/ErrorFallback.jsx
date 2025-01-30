export default function ErrorFallback({ error, resetErrorBoundary }) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "#f8d7da",
          color: "#721c24",
          textAlign: "center",
          padding: "1rem",
          borderRadius: "8px",
        }}
      >
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
          Oops! Something went wrong.
        </h1>
        <p style={{ marginBottom: "1rem", fontSize: "1.2rem" }}>
          {error?.message || "An unexpected error occurred."}
        </p>
        <button
          onClick={resetErrorBoundary}
          style={{
            padding: "0.8rem 1.5rem",
            fontSize: "1rem",
            color: "#fff",
            backgroundColor: "#d9534f",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#c9302c")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#d9534f")}
        >
          Try Again
        </button>
      </div>
    );
  }
  