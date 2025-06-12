import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [array, setArray] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/groupmembers"
        );
        setArray(response.data.groupMembers);
      } catch (error) {
        console.error("API error:", error);
      }
    };

    fetchAPI();
  }, []);

  const handleSearch = () => {
    const found = array.some(
      (name) => name.toLowerCase() === searchTerm.toLowerCase()
    );
    setSearchResult(
      found ? "Member is in Group 6" : "Member is not in Group 6"
    );
  };

  return (
    <div>
      <h2> GROUP 6 TECH CRUSH CAPSTONE PROJECT</h2>
      <input
        type="text"
        placeholder="Enter a name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch} style={{ marginLeft: "0.5rem" }}>
        Search
      </button>

      {searchResult && <p>{searchResult}</p>}
      <footer>Class of 2025</footer>
    </div>
  );
}

export default App;
