/* 
    Random Generator Function
    Pass an item 
    param undefined returns random true or false
    param array returns 1 random item from array
    param integer returns a random number (between 1 and upper limit)
*/




function ask () {
    var get = prompt ("Hey are you ready for a new life? Type yes or no");
    if (get === "yes") {
        promptLife(alert);}
    else {alert ("ok, good luck to you!")}
    }
ask ();

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


function buildFamily () {
 var kids = [2, 6, 1, 0, 10]
 var married = ["husband", "wife"]
 var state = ["Colorado", "South Carolina", "California", "Nevada", "New York", "Florida"]
 var car = ["Honda", "Jeep", "Chevy", "Mororcycle", "Ferrari", "Lamborghini", "Audi", "Ford"]
 var hobby = ["Golf", "Woodcarving", "Basketball", "MMA", "Weightlifting", "Building Boats"]
 var job = ["Doctor", "Teacher", "Beach Bum", "Trash Collector", "Cook"]

 return {kids: randomGenerator(kids),
         married: randomGenerator(married),
         state: randomGenerator(state),
         car: randomGenerator(car),
         hobby: randomGenerator(hobby),
         job: randomGenerator(job),


  }
}
function promptLife(alert) {
   var yourLife = buildFamily();
alert("We think you would feel at home in with: \n" + 
    yourLife.kids + " kids\n" +
    "with a new " + yourLife.married + "\n" +
    "living in " + yourLife.state + "\n" +
    "driving a " + yourLife.car + "\n" +
    "thinking about " + yourLife.hobby + "\n" +
    "working as a " + yourLife.job)
}

console.log (buildFamily());