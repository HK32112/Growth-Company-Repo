/*const person = {
    personName: "Hakeem Khaliq",
    Age: 22
}

console.log("Your name is: " + person.personName);
*/

/*let offer = "none";
let time = 1200;

const cafe = {
    cafeName: "Whitesheep",
    seatingCapacity: 100,
    hasSpecialOffers: true,
    drinks: ["Cappucino", "Latte", "Mocha", "Tea", "Hot Chocolate"],
    breakfastOffer: "Free croissant with coffee",
    lunchOffer: "Free drink with suprisingly priced sandwich",
    noOffer: "Sorry no offer"
    }
    if (time >= 900 && time <=1100) {
        offer = cafe.breakfastOffer;
    } else if (time<1500) {
        offer = cafe.lunchOffer;
    }
    else{
        offer = cafe.noOffer;
    }

    console.log(offer);
    */

    const day = "Saturday";
    const alarm = "none";

    const person = {
        personName: "Hakeem Khaliq",
        Age: 22,
        weekendAlarm: "No alarm needed",
        weekdayAlarm: "7am",
        faveSongs: ["Running up the Hill - Kate Bush", "Fortress around your Heart - Sting", "Head Over heels - Tears for Fears", "Bring me to Life - Evanescence", "Solisbury Hill - Pete Gabriel", "Rhiannon - Fleetwood Mac",]
    }
    if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday")
    {
        console.log(person.weekdayAlarm)
    } else {
        console.log(person.weekendAlarm)
    }
    console.log("One of my favourite songs is : " + person.faveSongs[3]);