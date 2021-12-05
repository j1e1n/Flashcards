import React from 'react';

const KanjiDetail = ({selectedKanji}) => {
    
    return (
        <>
        <div>
            <p>{selectedKanji.meaning}</p>
        </div>

        </>
    )
}

export default KanjiDetail;