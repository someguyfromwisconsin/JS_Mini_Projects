/*
We want to create, retrieve, and add information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. It’s your job to create data using the JavaScript data structures at your disposal: arrays and objects.

After we create these data structures in this project, feel free to challenge yourself to gain insights from them. For example, you might want to get the total number of games your team has played, or the average score of all of their games.
*/

const team = {
    _players: [
        {firstName: "Jordan", lastName: "Bravo", age: 25},
        {firstName: "AJ", lastName: "Dillon", age: 25},
        {firstName: "Jon", lastName: "Runyan", age: 26}
  ],
    _games: [
        {opponent: "Lions", teamPoints: 29, opponentPoints: 22},
        {opponent: "Bears", teamPoints: 38, opponentPoints: 20},
        {opponent: "Vikings", teamPoints: 24, opponentPoints: 10}
    ],
    get players() {
        return team._players
      },
    
    get games() {
        return team._games
    },
    addPlayer(newFirstName, newLastName, newAge) {
        const newPlayer = {
          firstName: newFirstName,
          lastName: newLastName,
          age: newAge
          };
        this._players.push(newPlayer);
        },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        const newGame = {
            opponent: newOpponent,
            teamPoints: newTeamPoints,
            opponentPoints: newOpponentPoints
        };
        this._games.push(newGame);
        }
};

team.addPlayer("Bugs", "Bunny", 76);
team.addGame("Titans", 100, 98);