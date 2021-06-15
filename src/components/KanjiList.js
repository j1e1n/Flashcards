import React from 'react';


const KanjiList = ({allKanji}) =>  {

    if(!allKanji){
        return(
            <p>loading...</p>
        )
    }

    
    const gradeOneList = allKanji.filter(kanji => kanji.references.grade === 1)
        .map((filteredKanji, index) => {
            return <li key={index}>{filteredKanji.kanji.character}</li>
        })
        
    console.log("gradeOne", gradeOneList)
    
    // const kanjiListItems = allKanji.map((character, index) => {
        //     return <li key={index}>{character.kanji.character}</li>
        // })



    // 1. select grade (1-5?)

    // 2. save selection as variable

    // use switch statement to execute filtering of chosen grade
    // switch(selectedGrade) {
    //     case 'grade 1':
    //         listItems = gradeOneList;
    //         break;
    //     case 'grade 2':
    //         listItems = gradeTwoList;
    //         break;
    //     case 'grade 3':
    //         listItems = gradeThreeList;
    //         break;
    //     case 'grade 4':
    //         listItems = gradeFourList;
    //         break;
    //     case 'grade 5':
    //         listItems = gradeFiveList;
    //         break;
        
    // }


    // 4. display filtered list














    return(
        <>
        <ol>
            {gradeOneList}
        </ol>
        </>
    )
}

export default KanjiList;