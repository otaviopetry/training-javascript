// all function inputs must be strings
const othersSellings = [30, 12, 30, 18, 17];
const userSellings = [20, 10, 35];

function simulateUserRank (generalSellings, userSimulatedSells) {

    const userRankings = [];

    userSimulatedSells.forEach( sell => {       

        const simulationArray = [...generalSellings, sell]       ;

        const sortedRanking = simulationArray
            .sort((a, b) => a - b)
            .filter( (value, index, self) => self.indexOf(value) === index)
            .reverse();

        const userRanking = sortedRanking.indexOf(sell);

        userRankings.push(userRanking + 1);
    })

    return userRankings;

}

const app = () => {
    return simulateUserRank(othersSellings, userSellings);
}

document.getElementById("root").innerHTML = app();