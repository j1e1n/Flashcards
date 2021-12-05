import React from 'react';

const KanjiDetail = ({selectedKanji}) => {

    if(!selectedKanji){
        console.log(selectedKanji)
        return null;
    }
    
    return (
        <>
        <div>
            <p>{selectedKanji.kanji.character}</p>
        </div>

        </>
    )
}

export default KanjiDetail;