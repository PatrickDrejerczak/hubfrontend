import React, { useEffect } from 'react';
import { Bar  } from 'react-chartjs-2';
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
    
    const totalVeggiesThreeWeek = getTotalQuantityOf("veggies",3)
    const totalVeggiesTwoWeek = getTotalQuantityOf("veggies",2) +totalVeggiesThreeWeek
    const totalVeggiesOneWeek = getTotalQuantityOf("veggies",1) +totalVeggiesTwoWeek
    const totalVeggiesLatest = getTotalQuantityOf("veggies",0) +totalVeggiesOneWeek

    const totalCClothesThreeWeek = getTotalQuantityOf("children clothes",3)
    const totalCClothesTwoWeek = getTotalQuantityOf("children clothes",2) +totalCClothesThreeWeek
    const totalCClothesOneWeek = getTotalQuantityOf("children clothes",1) +totalCClothesTwoWeek
    const totalCClothesLatest = getTotalQuantityOf("children clothes",0) +totalCClothesOneWeek

    const totalMaskThreeWeek = getTotalQuantityOf("mask",3)
    const totalMaskTwoWeek = getTotalQuantityOf("mask",2) +totalMaskThreeWeek
    const totalMaskOneWeek = getTotalQuantityOf("mask",1) +totalMaskTwoWeek
    const totalMaskLatest = getTotalQuantityOf("mask",0) +totalMaskOneWeek

    const totalFishThreeWeek = getTotalQuantityOf("fish",3)
    const totalFishTwoWeek = getTotalQuantityOf("fish",2) +totalFishThreeWeek
    const totalFishOneWeek = getTotalQuantityOf("fish",1) +totalFishTwoWeek
    const totalFishLatest = getTotalQuantityOf("fish",0) +totalFishOneWeek

    const totalPGearThreeWeek = getTotalQuantityOf("protective gear",3)
    const totalPGearTwoWeek = getTotalQuantityOf("protective gear",2) +totalPGearThreeWeek
    const totalPGearOneWeek = getTotalQuantityOf("protective gear",1) +totalPGearTwoWeek
    const totalPGearLatest = getTotalQuantityOf("protective gear",0) +totalPGearOneWeek

    const totalAClothesThreeWeek = getTotalQuantityOf("adult clothes",3)
    const totalAClothesTwoWeek = getTotalQuantityOf("adult clothes",2) +totalAClothesThreeWeek
    const totalAClothesOneWeek = getTotalQuantityOf("adult clothes",1) +totalAClothesTwoWeek
    const totalAClothesLatest = getTotalQuantityOf("adult clothes",0) +totalAClothesOneWeek

    const totalMeatThreeWeek = getTotalQuantityOf("meat",3)
    const totalMeatTwoWeek = getTotalQuantityOf("meat",2) +totalMeatThreeWeek
    const totalMeatOneWeek = getTotalQuantityOf("meat",1) +totalMeatTwoWeek
    const totalMeatLatest = getTotalQuantityOf("meat",0) +totalMeatOneWeek

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
            },
            {
                backgroundColor: `rgba(255, 206, 86, 1)`,
                borderColor: 'rgba(255, 206, 86, 0.2)',
                data: [totalVeggiesThreeWeek,totalVeggiesTwoWeek,totalVeggiesOneWeek,totalVeggiesLatest],
                label: "Total Veggies Provided",
            },
            {
                backgroundColor: `rgba(75, 192, 192, 1)`,
                borderColor: 'rgba(75, 192, 192, 0.2)',
                data: [totalCClothesThreeWeek,totalCClothesTwoWeek,totalCClothesOneWeek,totalCClothesLatest],
                label: "Total Children Clothes Provided"            },
            {
                backgroundColor: `rgba(153, 102, 255, 1)`,
                borderColor: 'rgba(153, 102, 255, 0.2)',
                data: [totalMaskThreeWeek,totalMaskTwoWeek,totalMaskOneWeek,totalMaskLatest],
                label: "Total Mask Provided",
            },
            {
                backgroundColor: `rgba(255, 159, 64, 1)`,
                borderColor: 'rgba(255, 159, 64, 0.2)',
                data: [totalFishThreeWeek,totalFishTwoWeek,totalFishOneWeek,totalFishLatest],
                label: "Total Fish Provided",
            },
            {
                backgroundColor: `rgba(100, 192, 192, 1)`,
                borderColor: 'rgba(100, 192, 192, 0.2)',
                data: [totalPGearThreeWeek,totalPGearTwoWeek,totalPGearOneWeek,totalPGearLatest],
                label: "Total Protective Gear Provided",
            },
            {
                backgroundColor: `rgba(1, 102, 255, 1)`,
                borderColor: 'rgba(1, 102, 255, 0.2)',
                data: [totalAClothesThreeWeek,totalAClothesTwoWeek,totalAClothesOneWeek,totalAClothesLatest],
                label: "Total Adult Clothes Provided",
            },
            {
                backgroundColor: `rgba(321, 159, 64, 1)`,
                borderColor: 'rgba(321, 159, 64, 0.2)',
                data: [totalMeatThreeWeek,totalMeatTwoWeek,totalMeatOneWeek,totalMeatLatest],
                label: "Total Meat Provided",
            }
        ],
    };

    const options = {
        indexAxis: 'y',
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
          bar: {
            borderWidth: 2,
          },
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
          },
          title: {
            display: true,
            text: 'Total delivered items progressively',
          },
        },
      };

    return (
        <div>
            <div className='header'>
                <h1 className='title'>Total delivered items progressively</h1>
            </div>
            <Bar  data={data} options={options} />
        </div>
    )
}

export default ProgressiveTotalCompleteAndPending
