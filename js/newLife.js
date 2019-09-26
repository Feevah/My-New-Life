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


function buildFamily () {
 var kids = [2, 6, 1, 0, 10]
 var married = ["many hot dates", "a steady relationship"]
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
function promptLife() {
   var yourLife = buildFamily();
alert("We think you would feel at home in with: \n" + 
    yourLife.kids + " kids\n" +
    "" + yourLife.married + "\n" +
    "living in " + yourLife.state + "\n" +
    "driving a " + yourLife.car + "\n" +
    "thinking about " + yourLife.hobby + "\n" +
    "working as a " + yourLife.job)
};

function nono(){
    alert ("Ok, we wish you the best!")
}



document.querySelector('.yes').addEventListener('click', promptLife);
document.querySelector('.no').addEventListener('click', nono);