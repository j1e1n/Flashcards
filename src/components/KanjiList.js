import React from 'react';


const KanjiList = ({allKanji}) =>  {

    if(!allKanji){
        return(
            <p>loading...</p>
        )
    }

    const kanjiListItems = allKanji.map((character, index) => {
        return <li key={index}>{character.kanji.character}</li>
    })



    return(
        <>
        <ol>
            {kanjiListItems}
        </ol>
        </>
    )
}

export default KanjiList;