// src/components/PopupContent.jsx
import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaGift } from "react-icons/fa";
import QuestionPopup from "./QuestionPopup";
import DefiPopup from "./DefiPopup";
import DetailModal from "./DetailModal";
import { playSound } from "../utils/soundManager";
import GeoValidation from "./GeoValidation";

const PopupContent = React.memo(
  ({ place, onClose, userLocation }) => {
    const [showModal, setShowModal] = useState(false);
    const [questionDone, setQuestionDone] = useState(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    // À chaque nouvelle sélection de lieu, on repart à la 1ʳᵉ question
    useEffect(() => {
      setCurrentQuestionIndex(0);
      setQuestionDone(false);
    }, [place.id]);

    const questions = place.questions || [];
    const currentQuestion = questions[currentQuestionIndex];

    const handleOpenModal = () => {
      playSound("buttonClick");
      setShowModal(true);
    };

    const handleCloseModal = () => {
      playSound("buttonClick");
      setShowModal(false);
    };

    return (
      <div className="popup-content">
        <h4>
          <FaMapMarkerAlt style={{ color: "#e74c3c", marginRight: "8px" }} />
          {place.lieu}
        </h4>

        {place.infoShort && (
          <p style={{ fontStyle: "italic", color: "#555", marginBottom: "8px" }}>
            {place.infoShort}
          </p>
        )}

        {/* Affiche la question tant qu'il y en a et qu'on n'a pas fini */}
        {!questionDone && currentQuestion && (
          <QuestionPopup
            place={place}
            question={currentQuestion}
            onQuestionDone={() => {
              if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
              } else {
                setQuestionDone(true);
              }
            }}
          />
        )}

        <div className="challenge-buttons">
          {place.defi && <DefiPopup place={place} />}
          <GeoValidation
            targetLatitude={place.latitude}
            targetLongitude={place.longitude}
            userLocation={userLocation}
            pointReward={1}
          />
        </div>

        {questionDone && (place.infoLong || place.infoPlus || place.photo) && (
          <button onClick={handleOpenModal} className="button-en-savoir-plus">
            <FaGift /> En savoir plus
          </button>
        )}

        <DetailModal place={place} onClose={handleCloseModal} show={showModal} />

        <button
          onClick={() => {
            playSound("buttonClick");
            onClose && onClose();
          }}
          className="popup-close-button"
        >
          🔙 Retour à la carte
        </button>
      </div>
    );
  },
  (prevProps, nextProps) => prevProps.place === nextProps.place
);

export default PopupContent;