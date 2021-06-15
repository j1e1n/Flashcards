import React, { useEffect, useState } from 'react';
import KanjiList from '../components/KanjiList';


const KanjiContainer = () =>  {

    const [allKanji, setAllKanji] = useState([]);
    const [currentKanji, setCurrentKanji] = useState(null);


    const getKanji = () => {
        console.log("fetching kanji");
        fetch("https://kanjialive-api.p.rapidapi.com/api/public/kanji/all", 
        {
	        "method": "GET",
	        "headers": {
		    "x-rapidapi-key": process.env.REACT_APP_SECRET_KEY,
		    "x-rapidapi-host": "kanjialive-api.p.rapidapi.com"
	    }
        })
        .then(res => res.json())
        .then(data => setAllKanji(data))
    }



        useEffect(() => {
            getKanji();
        }, [])





    return(
        <>
        <KanjiList allKanji={allKanji}/>
        </>
    )
}

export default KanjiContainer;