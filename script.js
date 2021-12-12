const container = document.getElementById("cross__container");
const gameBox = document.getElementsByClassName("cross__block");




let count = 0;




function checkWin() {


    let zerosWin = [[0, 0, 0], [0, 0, 0], [0, 0]];
    let crossesWin = [[0, 0, 0], [0, 0, 0], [0, 0]];


    for (let i = 0; i < 3; i++) {

        let n = 0;
        switch (gameBox[i].firstChild.className) {


            case "zeros": {

                zerosWin[n][0]++;
                if (zerosWin[n][0] === 3) {
                    return { win: "zeros", index: [i - 2, i - 1, i] }
                } break;
            }



            case "crosses": {
                crossesWin[n][0]++;
                if (crossesWin[n][0] === 3) {

                    return { win: "crosses", index: [i - 2, i - 1, i] }

                } break;
            }
        }

        switch (gameBox[i + 3].firstChild.className) {

            case "crosses": {
                crossesWin[n][1]++;
                if (crossesWin[n][1] === 3) {
                    return { win: "crosses", index: [i + 3 - 2, i + 3 - 1, i + 3] }
                } break;
            }

            case "zeros": {
                zerosWin[n][1]++;
                if (zerosWin[n][1] === 3) {
                    return { win: "zeros", index: [i + 3 - 2, i + 3 - 1, i + 3] }
                } break;
            }

        }

        switch (gameBox[i + 6].firstChild.className) {

            case "crosses": {
                crossesWin[n][2]++;
                if (crossesWin[n][2] === 3) {
                    return { win: "crosses", index: [i + 6 - 2, i + 6 - 1, i + 6] }
                } break;
            }

            case "zeros": {
                zerosWin[n][2]++;
                if (zerosWin[n][2] === 3) {
                    return { win: "zeros", index: [i + 6 - 2, i + 6 - 1, i + 6] }
                } break;
            }

        }


        // Перевірка по вертикалі

        n = 1;
        for (let j = 0; j <= 6; j += 3) {


            switch (gameBox[i + j].firstChild.className) {

                case "crosses": {
                    console.log(crossesWin[n][i]++ + "FF");
                    if (crossesWin[n][i] === 3) {
                        return { win: "crosses", index: [i + j - 6, i + j - 3, i + j] }
                    } break;
                }

                case "zeros": {
                    console.log(zerosWin[n][i]++);
                    if (zerosWin[n][i] === 3) {
                        //  console.log(zerosWin[3]);

                        return { win: "zeros", index: [i + j - 6, i + j - 3, i + j] }
                    } break;
                }

            }
        }





        //  console.log(crossesWin, zerosWin)



        // const compare = (gameBox[i].firstChild.className === "crosses") ?
        //     crossOutCrosses++ : crossOutZeros++;
    }

    // console.log(gameBox[0].firstChild.className);


}


container.addEventListener("click", (event) => {

    if ((event.target.innerHTML === " ")) {

        if (count % 2) {
            event.target.innerHTML = ('<img src="icons/zeros.png" class = "zeros">')
        }
        else { event.target.innerHTML = ('<img src="icons/crosses.png" class = "crosses">') }
        count++;
    }

    //console.log(gameBox[0].firstChild.className === 'crosses');

    let crossOut = 0;

    console.log(checkWin());



}
    //console.log(event.target.innerHTML === " ");
);