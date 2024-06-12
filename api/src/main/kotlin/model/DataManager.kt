package model

import com.google.gson.Gson
import java.io.File

class DataManager {
    private val gson = Gson()
    private val dataFolder = File("data")
    private val usersFile = File(dataFolder, "users.json")
    private val tournamentsFile = File(dataFolder, "tournaments.json")
    private val metadataFile = File(dataFolder, "metadata.json")

    init {
        if (!dataFolder.exists()) {
            dataFolder.mkdirs()
        }
    }

    fun loadData(system: System) {
        system.users = loadFromJson(usersFile, Array<User>::class.java)?.toMutableList() ?: mutableListOf()
        system.tournaments = loadFromJson(tournamentsFile, Array<Tournament>::class.java)?.toMutableList()
            ?: mutableListOf()
    }

    fun saveData(system: System) {
        saveToJson(usersFile, system.getAllUsers().toTypedArray())
        saveToJson(tournamentsFile, system.tournaments.toTypedArray())
    }

    fun loadMetadata(idGenerator: IdGenerator) {
        val metadata = loadFromJson(metadataFile, Metadata::class.java)
        if (metadata != null) {
            idGenerator.tournamentId = metadata.tournamentId
            idGenerator.userId = metadata.userId
        }
    }

    fun saveMetadata(idGenerator: IdGenerator) {
        val metadata = Metadata(idGenerator.tournamentId, idGenerator.userId)
        saveToJson(metadataFile, metadata)
    }

    private fun <T> loadFromJson(file: File, type: Class<T>): T? {
        return if (file.exists()) {
            val json = file.readText()
            gson.fromJson(json, type)
        } else {
            null
        }
    }

    private fun saveToJson(file: File, data: Any) {
        val json = gson.toJson(data)
        file.writeText(json)
    }
}

data class Metadata(val tournamentId: Int, val userId: Int)