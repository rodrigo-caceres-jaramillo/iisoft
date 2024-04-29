package model

import java.util.Date

class DraftUser(
    var email: String,
    var password: String,
    var username: String
)

class DraftLogin(
    var email: String,
    var password: String
)

class DraftTournament(
    val name: String,
    val description: String,
    val date: String,
    val teams: List<String>,
    val sport: String
)

class DraftGame(
    val team1: String,
    val score1: Int,
    val team2: String,
    val score2: Int,
    )
