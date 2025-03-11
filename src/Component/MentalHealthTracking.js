import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const MentalHealthTracking = () => {
  const [formData, setFormData] = useState({
    mood: 50,
    sleepQuality: "",
    stressLevel: "",
    anxietyLevel: "",
    motivation: "",
  });

  const [healthMessage, setHealthMessage] = useState("");
  const [chartData, setChartData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const analyzeHealth = () => {
    const { mood, sleepQuality, stressLevel, anxietyLevel, motivation } = formData;

    if (mood < 30 || sleepQuality === "poor" || stressLevel === "high" || anxietyLevel === "high") {
      return "😟 Your responses indicate high stress or anxiety. Consider talking to a professional.";
    }
    if (mood < 50 || sleepQuality === "average" || stressLevel === "moderate" || anxietyLevel === "moderate") {
      return "💡 You may be experiencing some mental fatigue. Try relaxation techniques or self-care.";
    }
    if (motivation === "not motivated") {
      return "😔 Lack of motivation could be a sign of burnout. Take breaks and seek support.";
    }
    return "😀 You are in a great mental state! Keep up the good habits!";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = analyzeHealth();
    setHealthMessage(message);

    // Set Chart Data
    setChartData({
      labels: ["Mood", "Stress", "Anxiety", "Motivation"],
      datasets: [
        {
          label: "Mental Health Metrics",
          data: [
            parseInt(formData.mood),
            formData.stressLevel === "low" ? 20 : formData.stressLevel === "moderate" ? 50 : 80,
            formData.anxietyLevel === "low" ? 20 : formData.anxietyLevel === "moderate" ? 50 : 80,
            formData.motivation === "highly motivated" ? 80 : formData.motivation === "somewhat motivated" ? 50 : 20,
          ],
          backgroundColor: ["#42A5F5", "#FFCA28", "#FF7043", "#66BB6A"],
          borderRadius: 10,
        },
      ],
    });
  };

  return (
    <div className="mental-health-card">
      <h2>🧠 Mental Health Tracking</h2>
      <p>📋 Fill out the form to track your mental health progress.</p>

      <form onSubmit={handleSubmit}>
        {/* Mood Level */}
        <div className="mb-3">
          <label className="form-label">Mood Level (1-100): {formData.mood} 😀</label>
          <input
            type="range"
            className="form-range"
            min="1"
            max="100"
            name="mood"
            value={formData.mood}
            onChange={handleChange}
          />
        </div>

        {/* Sleep Quality */}
        <div className="mb-3">
          <label className="form-label">😴 How was your sleep last night?</label>
          <select
            className="form-select"
            name="sleepQuality"
            value={formData.sleepQuality}
            onChange={handleChange}
            required
          >
            <option value="">Select an option</option>
            <option value="good">Good 👍</option>
            <option value="average">Average 😐</option>
            <option value="poor">Poor 😴</option>
          </select>
        </div>

        {/* Stress Level */}
        <div className="mb-3">
          <label className="form-label">⚡ Stress Level</label>
          <select
            className="form-select"
            name="stressLevel"
            value={formData.stressLevel}
            onChange={handleChange}
            required
          >
            <option value="">Select an option</option>
            <option value="low">Low 😊</option>
            <option value="moderate">Moderate 😟</option>
            <option value="high">High 😫</option>
          </select>
        </div>

        {/* Anxiety Level */}
        <div className="mb-3">
          <label className="form-label">😰 Anxiety Level</label>
          <select
            className="form-select"
            name="anxietyLevel"
            value={formData.anxietyLevel}
            onChange={handleChange}
            required
          >
            <option value="">Select an option</option>
            <option value="low">Low 😊</option>
            <option value="moderate">Moderate 😟</option>
            <option value="high">High 😰</option>
          </select>
        </div>

        {/* Motivation Level */}
        <div className="mb-3">
          <label className="form-label">🚀 Motivation Level</label>
          <select
            className="form-select"
            name="motivation"
            value={formData.motivation}
            onChange={handleChange}
            required
          >
            <option value="">Select an option</option>
            <option value="highly motivated">Highly Motivated 🚀</option>
            <option value="somewhat motivated">Somewhat Motivated 🙂</option>
            <option value="not motivated">Not Motivated 😔</option>
          </select>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">
          ✅ Submit
        </button>
      </form>

      {/* Display the Health Message */}
      {healthMessage && (
        <div className="alert alert-info mt-3">
          <strong>📊 Analysis:</strong> {healthMessage}
        </div>
      )}

      {/* Display the Chart if Data Exists */}
      {chartData && (
        <div className="mt-4">
          <h4>📈 Your Mental Health Report</h4>
          <Bar data={chartData} />
        </div>
      )}
    </div>
  );
};

export default MentalHealthTracking;
