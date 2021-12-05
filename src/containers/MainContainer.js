import React, { useEffect, useState } from 'react';
import GradeCardGrid from '../components/GradeCardGrid';
import KanjiListContainer from './KanjiListContainer';
import KanjiDetail from '../components/KanjiDetail';


const MainContainer = () =>  {

    const [allKanji, setAllKanji] = useState([]);
    const [selectedKanji, setSelectedKanji] = useState(null);
    const [selectedGrade, setSelectedGrade] = useState('');


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

    
    const handleGradeSelect = (grade) => {
        setSelectedGrade(grade);
    }

    return(
        <>
        <GradeCardGrid handleGradeSelect={handleGradeSelect}/>
        <KanjiListContainer allKanji={allKanji} selectedGrade={selectedGrade}/>
        <KanjiDetail selectedKanji={selectedKanji}/>
        </>
    )
}

export default MainContainer;