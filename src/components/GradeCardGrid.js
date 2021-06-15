import React from 'react';

const GradeCardGrid = ({handleGradeSelect}) => {

    const onGradeClicked = (grade) => {
        console.log("grade clicked", grade)
        handleGradeSelect(grade)
    }



    return(
        <>
        <div className="grade-card-container">
            <div className="grade-card" onClick={() => {onGradeClicked('grade 1')}}>
                <h3>Grade</h3>
                <h1>1</h1>
            </div>
            <div className="grade-card" onClick={() => {onGradeClicked('grade 2')}}>
                <h3>Grade</h3>
                <h1>2</h1>
            </div>
            <div className="grade-card" onClick={() => {onGradeClicked('grade 3')}}>
                <h3>Grade</h3>
                <h1>3</h1>
            </div>
            <div className="grade-card" onClick={() => {onGradeClicked('grade 4')}}>
                <h3>Grade</h3>
                <h1>4</h1>
            </div>
            <div className="grade-card" onClick={() => {onGradeClicked('grade 5')}}>
                <h3>Grade</h3>
                <h1>5</h1>
            </div>
            <div className="grade-card" onClick={() => {onGradeClicked('full list')}}>
                <h1>Full</h1>
                <h1>List</h1>
            </div>
        </div>

        </>
    )
}

export default GradeCardGrid;