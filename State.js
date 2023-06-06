// State

class SoldTicketState {
    sellTicket(ticket) {
        console.log("Ticket state: Sold");
    }
}


export class TicketState {
    constructor() {
        this.state = "available";
    }

    sellTicket() {
        this.state = "sold";
        console.log("Ticket sold.");
    }

    getState() {
        return this.state;
    }
}