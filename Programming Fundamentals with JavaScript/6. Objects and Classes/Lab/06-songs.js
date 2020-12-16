function solve(arr) {
    let numOfSongs = arr.shift();
    let typeListPick = arr.pop();
    let arrOfSongs = [];

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;

        }
    }

    for (let i = 0; i < numOfSongs; i++) {
        let songData = arr[i].split('_');
        let [typeList, name, time] = [songData[0], songData[1], songData[2]];
        arrOfSongs.push(new Song(typeList, name, time));
    }

    for (let i = 0; i < arrOfSongs.length; i++) {
        if (typeListPick === 'all') {
            console.log(arrOfSongs[i].name);
        }

        if (arrOfSongs[i].typeList === typeListPick) {
            console.log(arrOfSongs[i].name);
        }
    }
}

solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
);

solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
);

solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
);