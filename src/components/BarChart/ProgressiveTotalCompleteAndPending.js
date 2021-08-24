import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
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

    // const loading = state.ticketReducer.loading
    
    function getTotalTicketOf(name,weeksAgo) {
        let totalTickets = 0
        tickets.map((ticket) => {
            if (ticket.status === name&& ticket.weeksAgo === weeksAgo) {
                totalTickets+=1
               
            }
        })
        return totalTickets
    }

    function getTotalTicketAssigned(name,weeksAgo) {
        let totalTickets = 0
        tickets.map((ticket) => {
            if (ticket.status !== name&& ticket.weeksAgo === weeksAgo) {
                totalTickets+=1
               
            }
        })
        return totalTickets
    }
    const totalCompleteThreeWeek = getTotalTicketOf("complete",3)
    const totalCompleteTwoWeek = getTotalTicketOf("complete",2) +totalCompleteThreeWeek
    const totalCompleteOneWeek = getTotalTicketOf("complete",1) +totalCompleteTwoWeek
    const totalCompleteLatest = getTotalTicketOf("complete",0) +totalCompleteOneWeek
    
    // const totalTicketsThreeWeek = getTotalTicketAssigned("notStarted",3) 
    // const totalTicketsTwoWeek = getTotalTicketAssigned("notStarted",2) + totalTicketsThreeWeek 
    // const totalTicketsOneWeek = getTotalTicketAssigned("notStarted",1) + totalTicketsTwoWeek 
    // const totalTicketsLatest = getTotalTicketAssigned("notStarted",0) + totalTicketsOneWeek 
    // console.log(totalTicketsThreeWeek)

    // const totalTicketsThreeWeek = getTotalTicketOf("pending",3) 
    // const totalTicketsTwoWeek = getTotalTicketOf("pending",2) + totalTicketsThreeWeek 
    // const totalTicketsOneWeek = getTotalTicketOf("pending",1)+ totalTicketsTwoWeek 
    // const totalTicketsLatest = getTotalTicketOf("pending",0) + totalTicketsOneWeek 
    
    const data = {
        labels: ["Three week ago", "Two week ago","One week ago", "Latest"],

        datasets: [
            {
                backgroundColor: `rgba(255, 99, 132, 1)`,
                data: [totalCompleteThreeWeek, totalCompleteTwoWeek, totalCompleteOneWeek, totalCompleteLatest],
                label: "Total Completed Tickets",
            },
            // {
            //     backgroundColor: `rgba(220, 99, 135, 0.2)`,
            //     data: [totalTicketsThreeWeek,totalTicketsTwoWeek,totalTicketsOneWeek,totalTicketsLatest],
            //     label: "Total Assigned Tickets",
            // },
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
                <h1 className='title'>Total completed tickets progressively</h1>
            </div>
            <Bar data={data} options={options} />
        </div>
    )
}

export default ProgressiveTotalCompleteAndPending
