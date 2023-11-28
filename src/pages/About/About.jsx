
import React, { useState } from 'react';
import { useEffect } from 'react';
import useAxios from '../../hooks/useAxios';


const About = () => {
    const axiosData = useAxios()
    const [data, setyData] = useState('')
    useEffect(() => {
        axiosData.get('/data')
            .then(res => {
                // setyData(res.data)
                console.log(res.data)
            })
    }, [])
    return (
        <div>
            <h1>i am home{data}</h1>
        </div>
    );
};

export default About;