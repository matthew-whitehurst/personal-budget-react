import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Doughnut from 'react-chartjs-2';
import Title from 'chart.js';

function Chart() {
    
    const [data, set_state] = useState({})
       
    const chart = () => {
        
        // declare variables used to build chart
        let pb_data = [];
        let pb_labels = [];
        
        // use axios to fetch data
        axios.get('http://localhost:4200/budget').then(res =>{console.log(res);
            
        // fill data and labels with info gathered from axios
        for(const object of res.data.myBudget){
            pb_data.push(parseInt(object.budget))
            pb_labels.push(object.title)
        } 
        
        // build the chart
        set_state({
            
            labels: pb_labels,
            datasets: [
                {
                    data: pb_data,
                    backgroundColor: [
                        '#CB4335',
                        '#7D3C98',
                        '#2E86C1',
                        '#17A589',
                        '#28B463',
                        '#D4AC0D',
                        '#CA6F1E',
                        '#D0D3D4',
                        '#839192',
                        '#2E4053',
                        '#A93226',
                    ]
                }
            ]
        })
        })    
    }
    useEffect(()=>{chart()}, [])
    return (<Doughnut data = {data}/>); // return a doughnut chart using chart.js
}

export default Chart; // export the function Chart() as a default