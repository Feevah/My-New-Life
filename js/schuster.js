/*
Ship
    Name = string
    Flag = string
    Size = object
        Cannons = integer
        Crew = object
            jobs = object
                job: pirate
*/

/* 
    Random Generator Function
    Pass an item 
    param undefined returns random true or false
    param array returns 1 random item from array
    param integer returns a random number (between 1 and upper limit)
*/
function randomGenerator(item) {
    if (!item) {
        var randBool = Math.round(Math.random());

        if (randBool === 1) {
            return true;
        } else {
            return false;
        }
    }

    if (typeof item === "number") {
        return Math.ceil(Math.random() * item);
    }

    return item[Math.floor(Math.random() * item.length)];
}

// Build Sailor Function
// no Parameters neccessary yet
// Returns a sailor object
function buildSailor() {
    var weapons = ["blunderbuss", "sabre", "machete", "pistol", "umbrella"];
    var names = [
        // Males
        "Winfield 'White Hair' Knotley",
        "Boden 'Whale-Eye' Sutherland",
        "Robert 'Haunted' Riley",
        "Northrop 'Evil Grin' Johnson",
        "Jack 'The Wrath' Dante",
        "Read 'Crooked' Stanton",
        "Milburn 'Crippled' Charles",
        "Fallows 'Mad Eyes' Godfrey",
        "Everest 'Blackmane' Hallewell",
        "Kent 'Chipper' Acton",
        // Females
        "Hildred 'The Mad' Ainsworth",
        "Ralphina 'The Snake' Tempest",
        "Camilla 'Three-Teeth' Blakemore",
        "Aida 'Goddess' Carmine",
        "Hattie 'The Calm' Isaac",
        "Cleo 'The Shadow' Grail",
        "Carolina 'Lionheart' Lindsey",
        "Aston 'The Kraken' Reeve",
        "Gusta 'Marooner' Shadow",
        "Florance 'One Leg' Orfeo",
    ];

    /*
    Sailor = object
    Name = string
    Weapon = string
    Hat = boolean
    Parrot = boolean 
    */
    return {
        Name: randomGenerator(names),
        Weapon: randomGenerator(weapons),
        Hat: randomGenerator(),
        Parrot: randomGenerator()
    }
}


// Takes no Params
// Returns a random ship object
function buildShip() {
    /*
    Ship
    Name = string
    Flag = string
    Size = object
        Cannons = integer
        Crew = object
            jobs = object
                job: pirate
    */
    var shipNames = ["Lucitania", "Queen Anne", "Black Pearl", "Madellena", "Mary Celeste", "Edmond Fitzgerald", "The Constiution",
        "The Barbaric Atlantis",
        "The Madness of the Rose",
        "The Hellish North",
        "The Pride of the Eel",
        "The Poisoned Rift",
        "The Vile Scream",
        "The Fearful Demon",
        "The Cruel Pillager",
        "The Night Galley",
        "The Bloody Wolf",
    ];
    var flags = ["French", "British", "Jolly Roger", "US"];
    var cannons = [0, 5, 10, 20, 30];

    return {
        Name: randomGenerator(shipNames),
        Flag: randomGenerator(flags),
        Size: {
            Cannons: randomGenerator(cannons)
        }
    };

    //     var ships = [
    //         {
    //             Name: "Lucitania",
    //             Flag: "French",
    //             Size: {
    //                 Cannons: 10,

    //                 /* Crew: {
    //                 Jobs: {
    //                         Job: // Random Pirate 
    //                     }
    //                 } */
    //             }

    //         }
    //    ];
}


for (var i = 0; i < 20; i++) {
    console.log(buildShip());
}









// Returns a sailor object
	function buildSailor() {
	    var weapons = ["blunderbuss", "sabre", "machete", "pistol", "umbrella"];
	    var names = ["Jack", "Bart", "Lara", "Jill", "Dave", "Bill", "Bob"];
	    var names = [
	        // Males
	        "Winfield 'White Hair' Knotley",
	        "Boden 'Whale-Eye' Sutherland",
	        "Robert 'Haunted' Riley",
	        "Northrop 'Evil Grin' Johnson",
	        "Jack 'The Wrath' Dante",
	        "Read 'Crooked' Stanton",
	        "Milburn 'Crippled' Charles",
	        "Fallows 'Mad Eyes' Godfrey",
	        "Everest 'Blackmane' Hallewell",
	        "Kent 'Chipper' Acton",
	        // Females
	        "Hildred 'The Mad' Ainsworth",
	        "Ralphina 'The Snake' Tempest",
	        "Camilla 'Three-Teeth' Blakemore",
	        "Aida 'Goddess' Carmine",
	        "Hattie 'The Calm' Isaac",
	        "Cleo 'The Shadow' Grail",
	        "Carolina 'Lionheart' Lindsey",
	        "Aston 'The Kraken' Reeve",
	        "Gusta 'Marooner' Shadow",
	        "Florance 'One Leg' Orfeo",
	    ];
	
	    /*
	    Sailor = object
    Name = string
    Weapon = string
    Hat = boolean
    Parrot = boolean 
    */
    return {
        Name: randomGenerator(names),
        Weapon: randomGenerator(weapons),
        Hat: randomGenerator(),
        Parrot: randomGenerator()
    }
}
// Takes no Params
// Returns a random ship object
function buildShip() {
    /*
    Ship
    Name = string
    Flag = string
    Size = object
        Cannons = integer
        Crew = object
	            jobs = object
	                job: pirate
	    */
	    var shipNames = ["Lucitania", "Queen Anne", "Black Pearl", "Madellena", "Mary Celeste", "Edmond Fitzgerald", "The Constiution"];
	    var shipNames = ["Lucitania", "Queen Anne", "Black Pearl", "Madellena", "Mary Celeste", "Edmond Fitzgerald", "The Constiution",
	        "The Barbaric Atlantis",
	        "The Madness of the Rose",
	        "The Hellish North",
	        "The Pride of the Eel",
	        "The Poisoned Rift",
	        "The Vile Scream",
	        "The Fearful Demon",
	        "The Cruel Pillager",
	        "The Night Galley",
	        "The Bloody Wolf",
	    ];
	    var flags = ["French", "British", "Jolly Roger", "US"];
	    var cannons = [0, 5, 10, 20, 30];
	
    return {
        Name: randomGenerator(shipNames),
        Flag: randomGenerator(flags),
        Size: {
            Cannons: randomGenerator(cannons)
        }
    };
    //     var ships = [
    //         {
    //             Name: "Lucitania",
    //             Flag: "French",
    //             Size: {
    //                 Cannons: 10,
    //                 /* Crew: {
    //                 Jobs: {
    //                         Job: // Random Pirate 
    //                     }
    //                 } */
    //             }
    //         }
    //    ];
}
for (var i = 0; i < 20; i++) {
    console.log(buildShip());
}