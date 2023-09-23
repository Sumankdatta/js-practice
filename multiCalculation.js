function multiCalculation(ticket) {
    const first100Price = 100;
    const second100Price = 80;
    const third100Price = 70;

    if (ticket <= 100) {
        const totalFirstTicketPrice = ticket * first100Price;
        return totalFirstTicketPrice
    }
    else if (ticket <= 200) {
        const first100Ticket = 100;
        const second100Ticket = ticket - 100;
        const totalFirst100TicketPrice = first100Ticket * first100Price;
        const totalSecond100TicketPrice = second100Ticket * second100Price;
        const total = totalFirst100TicketPrice + totalSecond100TicketPrice;

        return total


    }
    else {
        const first100Ticket = 100;
        const second100Ticket = 100;
        const third100Ticket = ticket - 200;


        const totalFirst100TicketPrice = first100Ticket * first100Price;
        const totalSecond100TicketPrice = second100Ticket * second100Price;
        const totalThird100TicketPrice = third100Ticket * third100Price;
        console.log(totalFirst100TicketPrice, totalSecond100TicketPrice, totalThird100TicketPrice);
        const total = totalFirst100TicketPrice + totalSecond100TicketPrice + totalThird100TicketPrice;
        console.log(totalFirst100TicketPrice.totalSecond100TicketPrice, totalThird100TicketPrice);

        return total

    }




}

const ticket = 203;
const total = multiCalculation(ticket);
console.log(total);