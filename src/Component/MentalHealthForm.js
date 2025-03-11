import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";

const MentalHealthForm = () => {
  const questions = [
    "Do you feel down, depressed, or hopeless?",
    "Do you experience little interest or pleasure in doing things?",
    "Do you feel nervous, anxious, or on edge?",
    "Do you experience trouble falling or staying asleep?",
    "Do you feel tired or lacking energy most of the time?",
    "Do you worry too much about different things?",
    "Do you feel restless or find it hard to relax?",
    "Do you find it difficult to concentrate on daily tasks?",
    "Do you feel bad about yourself or think you are a failure?",
    "Do you feel irritated or easily frustrated?"
  ];

  const [responses, setResponses] = useState(Array(questions.length).fill(3));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleResponseChange = (index, value) => {
    const newResponses = [...responses];
    newResponses[index] = value;
    setResponses(newResponses);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalScore = responses.reduce((acc, val) => acc + val, 0);
    setScore(totalScore);
    setSubmitted(true);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">📝 Mental Health Assessment</h2>
      <p className="text-center">Answer the following questions on a scale from 1 (Never) to 5 (Always).</p>
      
      {!submitted ? (
        <form onSubmit={handleSubmit} className="card p-4 shadow-lg">
          {questions.map((question, index) => (
            <div key={index} className="mb-3">
              <label className="form-label">{index + 1}. {question}</label>
              <div className="d-flex gap-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <label key={num} className="form-check-label">
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={num}
                      checked={responses[index] === num}
                      onChange={() => handleResponseChange(index, num)}
                      className="form-check-input mx-1"
                    />
                    {num}
                  </label>
                ))}
              </div>
            </div>
          ))}
          <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </form>
      ) : (
        <div className="text-center mt-4">
          <h3>Your Total Score: {score}</h3>
          <p>{
            score < 20 ? "✅ Low Risk: Your mental health seems stable." :
            score < 35 ? "⚠️ Moderate Risk: Consider self-care and mindfulness exercises." :
            "🚨 High Risk: Seeking professional help is recommended."
          }</p>
          <button className="btn btn-secondary mt-3" onClick={() => setSubmitted(false)}>Retake Assessment</button>
        </div>
      )}
    </div>
  );
};

export default MentalHealthForm;
