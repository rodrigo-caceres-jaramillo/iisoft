package dto

import model.*
import java.text.SimpleDateFormat
import java.util.*

class TournamentDTO() {
    lateinit var id: String
    lateinit var name: String
    lateinit var description: String
    lateinit var sport: String
    lateinit var date: String
    lateinit var status: String
    lateinit var teams: List<Team>
    lateinit var games: List<Game>
    lateinit var user: SimpleUser

    constructor(tournament: Tournament): this() {
        this.id = tournament.id
        this.name = tournament.name
        this.description = tournament.description
        this.sport = tournament.sport
        this.date = tournament.date
        this.status = tournament.status.toString()
        this.teams = tournament.teams
        this.games = tournament.games
        this.user = tournament.user
    }
}