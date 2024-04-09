package dto

import model.SimpleUser
import model.Tournament

class TournamentDTO() {
    lateinit var id: String
    lateinit var name: String
    lateinit var description: String
    lateinit var date: String
    lateinit var status: String
    lateinit var user: SimpleUser

    constructor(tournament: Tournament): this() {
        this.id = tournament.id
        this.name = tournament.name
        this.description = tournament.description
        this.date = tournament.date
        this.status = tournament.status.toString()
        this.user = tournament.user
    }
}