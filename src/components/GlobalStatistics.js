import React, { useState, useRef, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);



export default function GlobalStatistics() {

    //states
    const [qtyTotal, setQtyTotal] = useState(0);
    const [qtyLabel_AD, setQtyLabel_AD] = useState(0);
    const [qtyLabel_MC, setQtyLabel_MC] = useState(0);
    const [pct_AD, setPct_AD] = useState(0);
    const [pct_MC, setPct_MC] = useState(0);


    //chart data
    const data = {
        labels: ['Agree or Disagree', 'Multiple Choice'],
        datasets: [
            {
                label: '# of Votes',
                //data: [qtyLabel_AD, qtyLabel_MC],
                data: [pct_AD, pct_MC],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1,
            },
        ],
    }

    const sample = [{
        _id: "12345",
        type: "Multiple Choice",
        numberOfResponses: 3
    }, {
        _id: "123456",
        type: "Multiple Choice",
        numberOfResponses: 4
    },
    {
        _id: "6789",
        type: "Agree or Disagree",
        numberOfResponses: 2
    }, {
        _id: "12345",
        type: "Multiple Choice",
        numberOfResponses: 3
    }, {
        _id: "12345",
        type: "Multiple Choice",
        numberOfResponses: 3
    }, {
        _id: "12345",
        type: "Multiple Choice",
        numberOfResponses: 3
    }, {
        _id: "12345",
        type: "Multiple Choice",
        numberOfResponses: 3
    }, {
        _id: "12345",
        type: "Multiple Choice",
        numberOfResponses: 3
    }, {
        _id: "12345",
        type: "Multiple Choice",
        numberOfResponses: 3
    }]

    //site: https://www.w3schools.com/react/react_useeffect.asp
    useEffect(() => {
        //Runs only on the first render
        helper(sample)
    }, []);

    function helper(s) {

        //count total
        if (s) {
            setQtyTotal(s.length)

            //count ad
            const arr_ad = s.filter(e => { return e.type === "Agree or Disagree" })
            setQtyLabel_AD(arr_ad.length)

            //count mc
            const arr_mc = s.filter(e => { return e.type === "Multiple Choice" })
            setQtyLabel_MC(arr_mc.length)

            //set pertentages
            const TOTAL_100 = 100
            const P_AD = Math.round(qtyLabel_AD / qtyTotal * 100)
            const P_MC = TOTAL_100 - P_AD
            setPct_AD(P_AD)
            setPct_MC(P_MC)
        }
    }

    // const axiosGet = async () => {

    //     const url = 'https://surveymeanbackend.herokuapp.com/'
    //     try {
    //         const resp = await axios.get(url)

    //     } catch (err) {
    //         console.error(err)
    //     }
    // }
    //axiosGet()

    return (
        <div>
            <div className='chart'>
                <p>total surveys: {qtyTotal} surveys </p>
                <p >Agree/ Disagree: {qtyLabel_AD} surveys ({pct_AD}%)</p>
                <p>Multiple Choice: {qtyLabel_MC} surveys ({pct_MC}%)</p>
                <Pie data={data} />
            </div>

        </div>
    )
}