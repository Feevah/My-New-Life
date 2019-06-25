/* 
    Random Generator Function
    Pass an item 
    param undefined returns random true or false
    param array returns 1 random item from array
    param integer returns a random number (between 1 and upper limit)
*/
prompt ("Hey are you ready for a new life? Type yes or no")
console.log ("hey man")
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
 var wife = " ";
 var husband = " ";
 var state = ["Colorado", "South Carolina", "California", "Nevada", "New York", "Florida"]
 var car = ["Honda", "Jeep", "Chevy", "Mororcycle", "Ferrari", "Lambo", "Audi", "Ford"]
 var hobby = ["Golf", "Woodcarving", "Basketball", "MMA", "Weightlifting", "Building Boats"]

 return {kids: randomGenerator(kids),
         wife: randomGenerator(),
         husband: randomGenerator(),
         state: randomGenerator(state),
         car: randomGenerator(car),
         hobby: randomGenerator(hobby),


  }

}
var yourLife = buildFamily();
alert("We think you would feel at home in with " + yourLife);


console.log (buildFamily())