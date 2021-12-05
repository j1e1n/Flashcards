import React from 'react';
import KanjiList from '../components/KanjiList';

const KanjiListContainer = ({allKanji, selectedGrade, handleKanjiClick}) => {
    return(
        <>
        <div>
            <KanjiList allKanji={allKanji} selectedGrade={selectedGrade} handleKanjiClick={handleKanjiClick}/>
        </div>
        
        </>
    )
}

export default KanjiListContainer;