const container = document.getElementById("cross__container");
const gameBox = document.getElementsByClassName("cross__block");




let count = 0;

let crossOut = 0;

let zerosWin = [0, 0, 0];
let crossesWin = [0, 0, 0];

function checkWin() {




    for (let i = 0; i < 3; i++) {


        switch (gameBox[i].firstChild.className) {


            case "zeros": {

                zerosWin[0]++;
                if (zerosWin[0] === 3) {
                    return { win: "zeros", index: [i - 2, i - 1, i] }
                } break;
            }



            case "crosses": {
                crossesWin[0]++; console.log(crossesWin[0]);
                if (crossesWin[0] === 3) {

                    return { win: "crosses", index: [i - 2, i - 1, i] }

                } break;
            }
        }





        switch (gameBox[i + 3].firstChild.className) {

            case "crosses": {
                crossesWin[1]++;
                if (crossesWin[1] === 3) {
                    return { win: "crosses", index: [i + 3 - 2, i + 3 - 1, i + 3] }
                } break;
            }

            case "zeros": {
                zerosWin[1]++;
                if (zerosWin[1] === 3) {
                    return { win: "zeros", index: [i + 3 - 2, i + 3 - 1, i + 3] }
                } break;
            }

        }

        switch (gameBox[i + 6].firstChild.className) {

            case "crosses": {
                crossesWin[2]++;
                if (crossesWin[2] === 3) {
                    return { win: "crosses", index: [i + 6 - 2, i + 6 - 1, i + 6] }
                } break;
            }

            case "zeros": {
                zerosWin[2]++;
                if (zerosWin[2] === 3) {
                    return { win: "zeros", index: [i + 6 - 2, i + 6 - 1, i + 6] }
                } break;
            }

        }






        //  console.log(crossesWin, zerosWin)



        // const compare = (gameBox[i].firstChild.className === "crosses") ?
        //     crossOutCrosses++ : crossOutZeros++;
    }
    zerosWin = [0, 0, 0]; crossesWin = [0, 0, 0];
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