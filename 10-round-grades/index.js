const grades = [4, 73, 67, 38, 33];

function makeGradesRound (grades) {
    const roundGrades = [];

    grades.forEach( grade => {
        if ( grade < 38 ) {
            roundGrades.push( grade );
        } else {
            if ( (grade % 5) > 2 ) {
                const roundGrade = grade + (5 - grade % 5);
                roundGrades.push(roundGrade);
                console.log(roundGrade);
            } else {
                roundGrades.push(grade);
            }
        }
    })

    // console.log(roundGrades);   
}

makeGradesRound(grades);