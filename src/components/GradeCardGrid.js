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
                <h2>Grade 1</h2>
            </div>
            <div className="grade-card" onClick={() => {onGradeClicked('grade 2')}}>
                <h2>Grade 2</h2>
            </div>
            <div className="grade-card" onClick={() => {onGradeClicked('grade 3')}}>
                <h2>Grade 3</h2>
            </div>
            <div className="grade-card" onClick={() => {onGradeClicked('grade 4')}}>
                <h2>Grade 4</h2>
            </div>
            <div className="grade-card" onClick={() => {onGradeClicked('grade 5')}}>
                <h2>Grade 5</h2>
            </div>
            <div className="grade-card" onClick={() => {onGradeClicked('full list')}}>
                <h2>Full List</h2>
            </div>
        </div>

        </>
    )
}

export default GradeCardGrid;