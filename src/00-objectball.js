function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": { number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1 },
          "Reggie Evans": { number: 30, shoe: 14, points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12, slamDunks: 7 },
          "Brook Lopez": { number: 11, shoe: 17, points: 17, rebounds: 19, assists: 10, steals: 3, blocks: 1, slamDunks: 15 },
          "Mason Plumlee": { number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamDunks: 5 },
          "Jason Terry": { number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2, steals: 4, blocks: 11, slamDunks: 1 }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": { number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2 },
          "Bismak Biyombo": { number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 7, blocks: 15, slamDunks: 10 },
          "DeSagna Diop": { number: 2, shoe: 14, points: 24, rebounds: 12, assists: 12, steals: 4, blocks: 5, slamDunks: 5 },
          "Ben Gordon": { number: 8, shoe: 15, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0 },
          "Brendan Haywood": { number: 33, shoe: 15, points: 6, rebounds: 12, assists: 12, steals: 22, blocks: 5, slamDunks: 12 }
        }
      }
    };
  }



  // Function to return a player's points
  function numPointsScored(playerName) {
    let game = gameObject();
    for (let team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName].points;
      }
    }
    return "Player not found";
  }
  
  // Function to return a player's shoe size
  function shoeSize(playerName) {
    let game = gameObject();
    for (let team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName].shoe;
      }
    }
    return "Player not found";
  }
  
  // Function to return a team's colors
  function teamColors(teamName) {
    let game = gameObject();
    for (let team in game) {
      if (game[team].teamName === teamName) {
        return game[team].colors;
      }
    }
    return "Team not found";
  }
  
  // Function to return all team names
  function teamNames() {
    let game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }
  
  // Function to return a team's player numbers
  function playerNumbers(teamName) {
    let game = gameObject();
    for (let team in game) {
      if (game[team].teamName === teamName) {
        return Object.values(game[team].players).map(player => player.number);
      }
    }
    return "Team not found";
  }
  
  // Function to return a player's stats
  function playerStats(playerName) {
    let game = gameObject();
    for (let team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName];
      }
    }
    return "Player not found";
  }
  
  // Function to return rebounds of the player with the biggest shoe size
  function bigShoeRebounds() {
    let game = gameObject();
    let maxShoeSize = 0;
    let rebounds = 0;
  
    for (let team in game) {
      for (let player in game[team].players) {
        if (game[team].players[player].shoe > maxShoeSize) {
          maxShoeSize = game[team].players[player].shoe;
          rebounds = game[team].players[player].rebounds;
        }
      }
    }
    return rebounds;
  }
  
  // Function to find the player with the most points
  function mostPointsScored() {
    let game = gameObject();
    let maxPoints = 0;
    let bestPlayer = "";
  
    for (let team in game) {
      for (let player in game[team].players) {
        if (game[team].players[player].points > maxPoints) {
          maxPoints = game[team].players[player].points;
          bestPlayer = player;
        }
      }
    }
    return bestPlayer;
  }
  
  // Function to determine which team scored the most points
  function winningTeam() {
    let game = gameObject();
    let scores = { home: 0, away: 0 };
  
    for (let team in game) {
      for (let player in game[team].players) {
        scores[team] += game[team].players[player].points;
      }
    }
    return scores.home > scores.away ? game.home.teamName : game.away.teamName;
  }
  
  // Function to find the player with the longest name
  function playerWithLongestName() {
    let game = gameObject();
    let longestName = "";
  
    for (let team in game) {
      for (let player in game[team].players) {
        if (player.length > longestName.length) {
          longestName = player;
        }
      }
    }
    return longestName;
  }
  
  // Super Bonus: Check if the player with the longest name had the most steals
  function doesLongNameStealATon() {
    let game = gameObject();
    let longestName = playerWithLongestName();
    let maxSteals = 0;
    let longestNameSteals = gameObject().home.players[longestName]?.steals || gameObject().away.players[longestName]?.steals || 0;
  
    for (let team in game) {
      for (let player in game[team].players) {
        if (game[team].players[player].steals > maxSteals) {
          maxSteals = game[team].players[player].steals;
        }
      }
    }
    return longestNameSteals === maxSteals;
  }
  
  // Testing the functions
  console.log(gameObject());
  console.log(numPointsScored("Alan Anderson")); // 22
  console.log(shoeSize("Brook Lopez")); // 17
  console.log(teamColors("Brooklyn Nets")); // ["Black", "White"]
  console.log(teamNames()); // ["Brooklyn Nets", "Charlotte Hornets"]
  console.log(playerNumbers("Charlotte Hornets")); // [4, 0, 2, 8, 33]
  console.log(playerStats("Jason Terry"));
  console.log(bigShoeRebounds()); // 12
  console.log(mostPointsScored()); // "Ben Gordon"
  console.log(winningTeam()); // "Charlotte Hornets"
  console.log(playerWithLongestName()); // "Brendan Haywood"
  console.log(doesLongNameStealATon()); // true
  