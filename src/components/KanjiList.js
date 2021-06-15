import React from 'react';


const KanjiList = ({allKanji, selectedGrade}) =>  {

    if(!allKanji){
        return(
            <p>loading...</p>
        )
    }





    // filter full list into grades
        const fullList = allKanji.map((kanji, index) => {
            return <li key={index}>{kanji.kanji.character}</li>
        })

        const gradeOneList = allKanji.filter(kanji => kanji.references.grade === 1)
        .map((filteredKanji, index) => {
            return <li key={index}>{filteredKanji.kanji.character}</li>
        })

        const gradeTwoList = allKanji.filter(kanji => kanji.references.grade === 2)
        .map((filteredKanji, index) => {
            return <li key={index}>{filteredKanji.kanji.character}</li>
        })

        const gradeThreeList = allKanji.filter(kanji => kanji.references.grade === 3)
        .map((filteredKanji, index) => {
            return <li key={index}>{filteredKanji.kanji.character}</li>
        })

        const gradeFourList = allKanji.filter(kanji => kanji.references.grade === 4)
        .map((filteredKanji, index) => {
            return <li key={index}>{filteredKanji.kanji.character}</li>
        })

        const gradeFiveList = allKanji.filter(kanji => kanji.references.grade === 5)
        .map((filteredKanji, index) => {
            return <li key={index}>{filteredKanji.kanji.character}</li>
        })
        
    

    let listItems = [];
    console.log("list items before swich", listItems)
   
    // use switch statement to execute filtering of chosen grade
    switch(selectedGrade) {
        case 'grade 1':
            listItems = gradeOneList;
            break;
        case 'grade 2':
            listItems = gradeTwoList;
            break;
        case 'grade 3':
            listItems = gradeThreeList;
            break;
        case 'grade 4':
            listItems = gradeFourList;
            break;
        case 'grade 5':
            listItems = gradeFiveList;
            break;
        case 'full list':
            listItems = fullList;
            break;
    }

    console.log("list items after swich", listItems)

    return(
        <>
        <ol>
            {listItems}
        </ol>
        </>
    )
}

export default KanjiList;