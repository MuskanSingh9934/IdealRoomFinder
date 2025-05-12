// Inside your React component
import { useEffect, useState } from 'react';
import axios from 'axios';

function MateFinder({ user_id, pg_id, preference, location }) {
  const [status, setStatus] = useState("searching...");
  const [mate, setMate] = useState(null);

  const findMate = () => {
    const formData = new FormData();
    formData.append("user_id", user_id);
    formData.append("pg_id", pg_id);
    formData.append("preference", preference);
    formData.append("location", location);

    axios.post("http://localhost/roommate_finder/matefinder.php", formData)
      .then(res => {
        if (res.data.status === "matched") {
          setMate(res.data.mate);
          setStatus("Match found!");
          alert("🎉 Roommate matched successfully!");
        } else {
          setStatus("Still pending... Checking again in 5 seconds.");
          
          setTimeout(findMate, 5000);
        }
      })
      .catch(err => {
        console.error(err);
        setStatus("Error occurred while finding mate.");
      });
  };

  useEffect(() => {
    findMate();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Roommate Matching Status</h2>
      <p>{status}</p>
      
      {mate && (
        <div className="mt-4 bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Matched Roommate</h3>
          <img src={mate.photo} alt="Roommate" className="w-32 h-32 object-cover rounded-full mt-2" />
          <p><strong>Name:</strong> {mate.name}</p>
          <p><strong>Contact:</strong> {mate.contact}</p>
          <p><strong>Nature:</strong> {mate.nature}</p>
          <p><strong>Occupation:</strong> {mate.occupation}</p>
          <p><strong>Age:</strong> {mate.age}</p>
          <p><strong>Hobbies:</strong> {mate.hobbies}</p>
        </div>
      )}
    </div>
  );
}

export default MateFinder;
