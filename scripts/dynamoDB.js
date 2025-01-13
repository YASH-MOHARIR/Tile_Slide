const apiBaseUrl = "https://9leied9nmk.execute-api.us-east-2.amazonaws.com/";

export async function addScore(playerName, score, levelReached) {
  try {
    console.log("Adding score:", playerName, score, levelReached);

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
      console.error("Error adding score:", error);
      return { error: error.message };
    }

    const data = await response.json();
    console.log("Score added successfully:", data);
    return data;
  } catch (error) {
    console.error("Network error adding score:", error);
    return { error: "Network error" };
  }
}

// Fetch leaderboard

export async function getLeaderboard() {
  const response = await fetch(`${apiBaseUrl}/leaderboard`);
  return await response.json();
}

//////////////////////////////

export async function testAddScore() {
  const response = await fetch(`${apiBaseUrl}/add-score`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      playerName: "Test Player",
      score: 1000,
      levelReached: 10,
    }),
  });

  const data = await response.json();
  console.log("Add Score Response:", data);
}

export async function testGetLeaderboard() {
  const response = await fetch(`${apiBaseUrl}/leaderboard`);
  const leaderboard = await response.json();
  console.log("Leaderboard:", leaderboard);
}
