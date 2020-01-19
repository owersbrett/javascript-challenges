
                
let timeInterval = [[30, 75], [0,50], [60, 150]];

class Room {
    constructor(takenAt, opensAt) {
        this.periods = [[takenAt, opensAt]];
        this.opensAt = opensAt;
        this.takenAt = takenAt;
    }
    addPeriod(takenAt, opensAt){
        this.periods.push([takenAt, opensAt]);
    }   
}

function findMinRooms(arr){
    arr = arr.sort();
    let rooms = [];

    arr.forEach((interval, index)=>{
        if (rooms.length === 0){
            rooms.push(new Room(interval[0], interval[1]));
        }
        arr.forEach((interv, i)=>{
            if (interval[1] < interv[0]){
                rooms[0].addPeriod(interv[0], interv[1]);

            } 
            console.log(rooms);
        });

        // console.log(rooms[0].opensAt);
    });
    return rooms;
}

console.log(findMinRooms(timeInterval));


