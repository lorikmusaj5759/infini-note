/*
 * Filename: complex_code.js
 * Description: This code demonstrates a complex implementation of a sports league management system.
 */

// Class representing a Team
class Team {
  constructor(name, coach) {
    this.name = name;
    this.coach = coach;
    this.players = [];
  }

  addPlayer(player) {
    this.players.push(player);
  }
}

// Class representing a Player
class Player {
  constructor(name, age, position) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  displayStats() {
    console.log(`Player: ${this.name}\nAge: ${this.age}\nPosition: ${this.position}`);
  }
}

// Class representing a Match
class Match {
  constructor(homeTeam, awayTeam) {
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
    this.homeScore = 0;
    this.awayScore = 0;
    this.events = [];
  }

  recordGoal(team, player, minute) {
    this.events.push(`${team.name}: ${player.name} (${minute}')`);
    if (team === this.homeTeam) {
      this.homeScore++;
    } else {
      this.awayScore++;
    }
  }

  displayEvents() {
    console.log("Match Events:");
    for (let event of this.events) {
      console.log(event);
    }
  }

  displayResult() {
    console.log(`Final Score: ${this.homeTeam.name} ${this.homeScore} - ${this.awayScore} ${this.awayTeam.name}`);
  }
}

// Main program
const team1 = new Team("Team A", "Coach A");
const team2 = new Team("Team B", "Coach B");

const player1 = new Player("Player 1", 22, "Forward");
const player2 = new Player("Player 2", 25, "Midfield");
const player3 = new Player("Player 3", 27, "Defender");
const player4 = new Player("Player 4", 30, "Goalkeeper");

team1.addPlayer(player1);
team1.addPlayer(player2);
team2.addPlayer(player3);
team2.addPlayer(player4);

const match = new Match(team1, team2);

match.recordGoal(team1, player1, 10);
match.recordGoal(team2, player3, 20);
match.recordGoal(team1, player2, 35);
match.recordGoal(team1, player1, 40);
match.recordGoal(team2, player4, 70);

console.log("--- Match Summary ---");
match.displayResult();
match.displayEvents();
player1.displayStats();
player3.displayStats();