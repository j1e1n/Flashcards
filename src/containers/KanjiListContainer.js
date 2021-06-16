import React from 'react';
import KanjiList from '../components/KanjiList';

const KanjiListContainer = ({allKanji, selectedGrade}) => {
    return(
        <>
        <div className="kanji-list-container">
            <KanjiList allKanji={allKanji} selectedGrade={selectedGrade}/>
        </div>
        
        </>
    )
}

export default KanjiListContainer;