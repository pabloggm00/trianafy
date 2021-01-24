db.users.insert
	(
		{
			"id" : 1,
            "fullname" : "Martin",
            "username" : "mgutierrez",
            "email": "mguti@email.com",
            "pass" : "12345678"
		}
    )
    
db.songs.insert({
            "id" : 1,
            "title" : "All Star",
            "artist" : "Smash Mouth",
            "album" : "All Star",
            "year": "1999"
})

db.playlist.insert({
    "name" : "Favoritos",
    "description" : "Mis canciones favoritas"
})