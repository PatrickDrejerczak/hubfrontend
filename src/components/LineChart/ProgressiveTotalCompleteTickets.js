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

    // const loading = state.ticketReducer.loading

    function getTotalTicketOf(name, weeksAgo) {
        let totalTickets = 0
        tickets.map((ticket) => {
            if (ticket.status === name && ticket.weeksAgo === weeksAgo) {
                totalTickets += 1

            }
        })
        return totalTickets
    }
    function getCompleteTicketOf(name, weeksAgo) {
        let totalTickets = 0;
        tickets.map((ticket) => {
            if (ticket.ticketType === name && ticket.status === "complete" && ticket.weeksAgo === weeksAgo) {
                totalTickets += 1;
            }
        });
        return totalTickets;
    }

    const totalCompleteThreeWeek = getTotalTicketOf("complete", 3)
    const totalCompleteTwoWeek = getTotalTicketOf("complete", 2) + totalCompleteThreeWeek
    const totalCompleteOneWeek = getTotalTicketOf("complete", 1) + totalCompleteTwoWeek
    const totalCompleteLatest = getTotalTicketOf("complete", 0) + totalCompleteOneWeek

    const totalDonateThreeWeek = getCompleteTicketOf("donate", 3)
    const totalDonateTwoWeek = getCompleteTicketOf("donate", 2) + totalDonateThreeWeek
    const totalDonateOneWeek = getCompleteTicketOf("donate", 1) + totalDonateTwoWeek
    const totalDonateLatest = getCompleteTicketOf("donate", 0) + totalDonateOneWeek

    const totalReceiveThreeWeek = getCompleteTicketOf("receive", 3)
    const totalReceiveTwoWeek = getCompleteTicketOf("receive", 2) + totalReceiveThreeWeek
    const totalReceiveOneWeek = getCompleteTicketOf("receive", 1) + totalReceiveTwoWeek
    const totalReceiveLatest = getCompleteTicketOf("receive", 0) + totalReceiveOneWeek

    const data = {
        labels: ["Three week ago", "Two week ago", "One week ago", "Latest"],

        datasets: [
            {
                backgroundColor: `rgba(2, 206, 86, 1)`,
                borderColor: 'rgba(2, 206, 86, 0.2)',
                data: [totalCompleteThreeWeek, totalCompleteTwoWeek, totalCompleteOneWeek, totalCompleteLatest],
                label: "Total Completed Tickets",
            },
            {
                backgroundColor: `rgba(54, 162, 235, 1)`,
                borderColor: 'rgba(54, 162, 235, 0.2)',
                data: [totalDonateThreeWeek, totalDonateTwoWeek, totalDonateOneWeek, totalDonateLatest],
                label: "Total Donating Tickets",
            },
            {
                backgroundColor: `rgba(255, 99, 132, 1)`,
                borderColor: 'rgba(255, 99, 132, 0.2)',
                data: [totalReceiveThreeWeek, totalReceiveTwoWeek, totalReceiveOneWeek, totalReceiveLatest],
                label: "Total Receiving Tickets",
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
                <h1 className='title'>Total completed tickets progressively</h1>
            </div>
            <Line data={data} options={options} />
        </div>
    )
}

export default ProgressiveTotalCompleteAndPending
