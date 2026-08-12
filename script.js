// let rockCt = 0;
// let paperCt = 0;
// let scissorCt = 0;
// for (let i = 0; i < 10000; ++i) {
//     let ans = getComputerChoice();
//     if (ans === "rock") {
//         rockCt++;
//     }
//     else if (ans === "paper") {
//         paperCt++;
//     }
//     else {
//         scissorCt++;
//     }
// }
// console.log(`rock Ct: ${rockCt}, paper Ct: ${paperCt}, scissorCt: ${scissorCt}`);


function getComputerChoice() {
    // Get random output from 0 to 1
    // Multiply output * 3 and use Math.floor (0, 1, or 2)
        // val < 1/3 -> rock (0)
        // 1/3 <= val < 2/3 -> paper (1)
        // 2/3 <= val -> scissors (2)
    // return string associated with value

    let val = Math.floor(Math.random() * 3);
    if (val === 0) {
        return "rock";
    }
    else if (val === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}