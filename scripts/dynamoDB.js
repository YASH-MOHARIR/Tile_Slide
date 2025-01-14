const apiBaseUrl = "https://9leied9nmk.execute-api.us-east-2.amazonaws.com/";
const loader = document.getElementById("loading");

export async function addScore(playerName, score, levelReached) {
  try {
    loader.style.display = "block";

    const response = await fetch(`${apiBaseUrl}/add-score`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        playerName: playerName,
        score: score,
        levelReached: levelReached,
        Timestamp: new Date().toISOString(), // Add Timestamp
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      // console.error("Error adding score:", error);
      return { error: error.message };
    }

    const data = await response.json();
    loader.style.display = "none";
    // console.log("Score added successfully:", data);
    return data;
  } catch (error) {
    loader.innerText = "Network error";
    // console.error("Network error adding score:", error);
    return { error: "Network error" };
  }
}

// Fetch leaderboard

export async function getLeaderboard() {
  const response = await fetch(`${apiBaseUrl}/leaderboard`);
  return await response.json();
}
