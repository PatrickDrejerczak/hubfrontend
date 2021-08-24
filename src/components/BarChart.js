import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import ticketActions from '../redux/actions/ticket.action';
import { useDispatch, useSelector } from 'react-redux';
const BACKEND_API = process.env.REACT_APP_BACKEND_API;



const VerticalBar = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(ticketActions.getTickets());
    }, [dispatch]);

    const state = useSelector(state => state)
    const tickets = state.ticketReducer.tickets
    const loading = state.ticketReducer.loading

    const data = {
        labels: ['18/6', '19/6', '20/6', '21/6', '22/6', '23/6'],

        datasets: [
            {
                backgroundColor: `rgba(220, 99, 135, 0.2)`,
                data: [18, 22, 19, 27, 15, 30, 20],
                label: "Total Request",
            },
            {
                backgroundColor: `rgba(255, 99, 132, 1)`,
                data: [11, 15, 12, 29, 20, 25, 13],
                label: "Total Donation",
            },
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
                <h1 className='title'>Vertical Bar Chart</h1>
            </div>
            <Bar data={data} options={options} />
        </div>
    )
}

export default VerticalBar
