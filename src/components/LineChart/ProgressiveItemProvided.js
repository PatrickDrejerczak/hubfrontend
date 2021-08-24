import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import ticketActions from '../../redux/actions/ticket.action';
import { useDispatch, useSelector } from 'react-redux';
// const BACKEND_API = process.env.REACT_APP_BACKEND_API;



const ProgressiveTotalCompleteAndPending = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(ticketActions.getTickets());
    }, [dispatch]);

    const state = useSelector(state => state)
    const tickets = state.ticketReducer.tickets

    
    function getTotalQuantityOf(itemName,weeksAgo) {
        let totalItems = 0
        tickets.map((ticket) => {
            if (ticket.ticketType === "receive" && ticket.status === "complete" && ticket.weeksAgo === weeksAgo) {
                ticket.items.map((item)=>{
                    if (item.itemName === itemName) {
                     totalItems += item.quantity
                    }    
                })
               
            }
        })
        return totalItems
    }


    const totalRiceThreeWeek = getTotalQuantityOf("rice",3)
    const totalRiceTwoWeek = getTotalQuantityOf("rice",2) +totalRiceThreeWeek
    const totalRiceOneWeek = getTotalQuantityOf("rice",1) +totalRiceTwoWeek
    const totalRiceLatest = getTotalQuantityOf("rice",0) +totalRiceOneWeek
    
    const totalEggsThreeWeek = getTotalQuantityOf("eggs",3)
    const totalEggsTwoWeek = getTotalQuantityOf("eggs",2) +totalEggsThreeWeek
    const totalEggsOneWeek = getTotalQuantityOf("eggs",1) +totalEggsTwoWeek
    const totalEggsLatest = getTotalQuantityOf("eggs",0) + totalEggsOneWeek
   

    const totalNoodlesThreeWeek = getTotalQuantityOf("noodles",3)
    const totalNoodlesTwoWeek = getTotalQuantityOf("noodles",2) +totalNoodlesThreeWeek
    const totalNoodlesOneWeek = getTotalQuantityOf("noodles",1) +totalNoodlesTwoWeek
    const totalNoodlesLatest = getTotalQuantityOf("noodles",0) +totalNoodlesOneWeek
    
    const data = {
        labels: ["Three week ago", "Two week ago","One week ago", "Latest"],

        datasets: [
            {
                backgroundColor: `rgba(2, 206, 86, 1)`,
                borderColor: 'rgba(2, 206, 86, 0.2)',
                data: [totalRiceThreeWeek, totalRiceTwoWeek, totalRiceOneWeek, totalRiceLatest],
                label: "Total Rice Provided",
            },
            {
                backgroundColor: `rgba(54, 162, 235, 1)`,
                borderColor: 'rgba(54, 162, 235, 0.2)',
                data: [totalEggsThreeWeek,totalEggsTwoWeek,totalEggsOneWeek,totalEggsLatest],
                label: "Total Eggs Provided",
            },
            {
                backgroundColor: `rgba(255, 99, 132, 1)`,
                borderColor: 'rgba(255, 99, 132, 0.2)',
                data: [totalNoodlesThreeWeek,totalNoodlesTwoWeek,totalNoodlesOneWeek,totalNoodlesLatest],
                label: "Total Noodles Provided",
            }
        ],
    };

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    return (
        <div>
            <div className='header'>
                <h1 className='title'>Total delivered items progressively</h1>
            </div>
            <Line data={data} options={options} />
        </div>
    )
}

export default ProgressiveTotalCompleteAndPending
