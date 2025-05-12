import React, { useState } from "react";
import axios from "axios";

function MateForm() {
  const [formData, setFormData] = useState({
    user_id: "",        
    pg_id: "",
    preference: "",
    location: "",
  });

  const [status, setStatus] = useState("");
  const [mate, setMate] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));

    try {
      const res = await axios.post("http://localhost/roommate_finder/matefinder.php", data);

      if (res.data.status === "matched") {
        setMate(res.data.mate);
        setStatus("Match found!");
      } else {
        setStatus("No match yet. You're added to the waiting list. Retrying in 5s...");

        // Recheck after 5 seconds
        setTimeout(() => handleSubmit(e), 5000);
      }
    } catch (err) {
      console.error(err);
      setStatus("An error occurred.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Find a Roommate</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="user_id"
          placeholder="Your User ID"
          value={formData.user_id}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="pg_id"
          placeholder="PG/Hostel ID"
          value={formData.pg_id}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="preference"
          placeholder="Your Lifestyle Preference (e.g. Quiet, Party)"
          value={formData.preference}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="location"
          placeholder="Your Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Find Match
        </button>
      </form>

      <p className="mt-4 text-green-600">{status}</p>

      {mate && (
        <div className="mt-4 border p-4 rounded bg-gray-100">
          <h3 className="text-lg font-semibold">Matched Roommate</h3>
          <p><strong>Name:</strong> {mate.name}</p>
          <p><strong>Nature:</strong> {mate.nature}</p>
          <p><strong>Occupation:</strong> {mate.occupation}</p>
        </div>
      )}
    </div>
  );
}

export default MateForm;
