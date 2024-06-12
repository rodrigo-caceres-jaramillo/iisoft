package controller

import dto.TournamentDTO
import dto.UserDTO
import io.javalin.http.*
import model.*

class UserController(private var system: System, private var tokenController: TokenController) {
    fun postLogin(context: Context) {
        tokenController.validateAndProcessBody<DraftLogin>(context) { loginREQ ->
            try {
                val user = system.login(loginREQ.email, loginREQ.password)
                val token = tokenController.userToToken(user)
                context.header("Authorization", token)
                context.json(UserDTO(user))
            } catch (e: UserNotFoundException) {
                tokenController.errorResponse(context, HttpStatus.NOT_FOUND, "User not found")
            }
        }
    }

    fun postRegister(context: Context) {
        tokenController.validateAndProcessBody<DraftUser>(context) { registerREQ ->
            try {
                val user = system.addUser(registerREQ)
                var token = tokenController.userToToken(user)
                context.header("Authorization", token)
                context.json(UserDTO(user))
            }catch (e : UsernameException) {
                tokenController.errorResponse(context, HttpStatus.BAD_REQUEST, "Username in use")
            }catch (e : EmailException) {
                tokenController.errorResponse(context, HttpStatus.BAD_REQUEST, "Email in use")
            }
        }
    }

    fun getUsers(context: Context) {
        var users = system.getAllUsers()
        var usersDTO = mutableListOf<UserDTO>()
        for(user in users){
            var userDTO = UserDTO(user)
            usersDTO.add(userDTO)
        }
        context.json(usersDTO)
    }

    fun getCurrentUser(context: Context) {
        val user = system.getUser(tokenController.tokenToUserId(context))
        context.json(UserDTO(user))
    }

    fun getUser(context: Context) {
        try {
            val id = context.pathParam("id")
            val user = system.getUser(id)
            context.json(UserDTO(user))
        }catch (e: UserNotFoundException){
            tokenController.errorResponse(context, HttpStatus.NOT_FOUND, "User not found")
        }
    }

    fun getUserTournamentsSearch(context: Context) {
        try {
            val userId = context.pathParam("id")
            var location = context.queryParam("location") ?: throw InvalidSportException()
            var sport = context.queryParam("sport") ?: throw InvalidSportException()
            var name = context.queryParam("name")
            var results = system.searchTournamentsOfUser(userId, sport, location, name)
            var tournamentsDTO = mutableListOf<TournamentDTO>()
            for (tournament in results) {
                var tournamentDTO = TournamentDTO(tournament)
                tournamentsDTO.add(tournamentDTO)
            }
            context.json(tournamentsDTO)
        }catch (e: UserNotFoundException){
            tokenController.errorResponse(context, HttpStatus.NOT_FOUND, "User not found")
        }catch (e: InvalidSportException){
            tokenController.errorResponse(context, HttpStatus.BAD_REQUEST, "Invalid sport")
        }
    }
}