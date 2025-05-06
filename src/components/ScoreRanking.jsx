import React, { useEffect, useState } from "react";

const ScoreRanking = ({ onRestart, onReturnToGame }) => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const storedScores = JSON.parse(localStorage.getItem("gameScores")) || [];
    storedScores.sort((a, b) => b.score - a.score); // Tri décroissant
    setScores(storedScores);
  }, []);

  return (
    <div
      style={{
        padding: "16px",
        backgroundColor: "#FAE3D9",
        color: "#333",
        minHeight: "100vh",
      }}
    >
      <h2>🏆 Classement des Scores</h2>

      {scores.length === 0 ? (
        <p>Aucun score enregistré pour le moment.</p>
      ) : (
        <ol>
          {scores.map((item, index) => (
            <li key={index} style={{ marginBottom: "8px" }}>
              <strong>{item.score}</strong> points – {item.time} secondes –{" "}
              {new Date(item.date).toLocaleString()}
            </li>
          ))}
        </ol>
      )}

      <div
        style={{
          marginTop: "24px",
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={onReturnToGame}
          style={{
            padding: "10px 20px",
            backgroundColor: "#95a5a6",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          🗺️ Retour à la carte
        </button>

        <button
          onClick={onRestart}
          style={{
            padding: "10px 20px",
            backgroundColor: "#f39c12",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          🔄 Rejouer une partie
        </button>
      </div>

      {/* ----- NOUVEAUTÉ : Buy Me a Coffee ----- */}
      <div style={{ marginTop: "32px", textAlign: "center" }}>
        <a
          href="https://buymeacoffee.com/lescarnetsduo"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            backgroundColor: "#FFDD00",
            color: "#333",
            fontWeight: "bold",
            padding: "10px 16px",
            borderRadius: "6px",
            textDecoration: "none",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
            transition: "background-color 0.2s ease",
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#FCCC00")}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#FFDD00")}
        >
          ☕ Soutenez ce projet : buymeacoffee.com/lescarnetsduo
        </a>
      </div>
    </div>
  );
};

export default ScoreRanking;
