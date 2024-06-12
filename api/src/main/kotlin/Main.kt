import controller.HEADER_NAME
import controller.TokenController
import controller.TournamentController
import controller.UserController
import io.javalin.Javalin
import io.javalin.apibuilder.ApiBuilder
import io.javalin.security.RouteRole
import model.DataManager
import model.System

internal enum class Roles: RouteRole {
    ANYONE, USER
}

class Api {
    private val dataManager = DataManager()
    private val service = System(dataManager)
    private val tokenController = TokenController(service)
    private val userController = UserController(service, tokenController)
    private val tournamentController = TournamentController(service, tokenController)

    fun start() {
        //service.createData()
        val app = Javalin.create { config ->
            config.http.defaultContentType = "application/json"
            config.accessManager(tokenController::validate)
            config.plugins.enableCors { cors -> cors.add {
                it.anyHost()
                it.exposeHeader(HEADER_NAME)
            } }
        }.start(8001)
        app.routes {
            ApiBuilder.path("login") {
                ApiBuilder.post(userController::postLogin, Roles.ANYONE)
            }
            ApiBuilder.path("register") {
                ApiBuilder.post(userController::postRegister, Roles.ANYONE)
            }
            ApiBuilder.path("user") {
                ApiBuilder.get(userController::getUsers, Roles.ANYONE)
                ApiBuilder.path("current") {
                    ApiBuilder.get(userController::getCurrentUser, Roles.USER)
                }
                ApiBuilder.path("{id}") {
                    ApiBuilder.get(userController::getUser, Roles.ANYONE)
                    ApiBuilder.path("tournaments") {
                        ApiBuilder.path("search") {
                            ApiBuilder.get(userController::getUserTournamentsSearch, Roles.ANYONE)
                        }
                    }
                }

            }
            ApiBuilder.path("tournament") {
                ApiBuilder.get(tournamentController::getAllTournaments, Roles.ANYONE)
                ApiBuilder.path("featured") {
                    ApiBuilder.get(tournamentController::getFeaturedTournaments, Roles.ANYONE)
                    ApiBuilder.path("{sport}") {
                        ApiBuilder.get(tournamentController::getFeaturedSportTournaments, Roles.ANYONE)
                    }
                }
                ApiBuilder.post(tournamentController::postTournament, Roles.USER)
                ApiBuilder.path("search") {
                    ApiBuilder.get(tournamentController::getTournamentsSearch, Roles.ANYONE)
                }
                ApiBuilder.path("{id}") {
                    ApiBuilder.get(tournamentController::getTournament, Roles.ANYONE)
                    ApiBuilder.delete(tournamentController::deleteTournament, Roles.USER)
                    ApiBuilder.put(tournamentController::putTournament, Roles.USER)
                    ApiBuilder.path("status") {
                        ApiBuilder.post(tournamentController::closeGame, Roles.USER)
                    }
                    ApiBuilder.path("games") {
                         ApiBuilder.post(tournamentController::postGame, Roles.USER)
                         ApiBuilder.path("{gameId}") {
                                ApiBuilder.put(tournamentController::putGame, Roles.USER)
                            }
                        }
                }
            }
        }
    }
}

fun main() = Api().start()