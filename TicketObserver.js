
// Observer
export class TicketObserver {
    constructor(ticketSystem) {
        this.ticketSystem = ticketSystem;
        this.ticketSystem.addObserver(this);
    }

    update(ticket) {
        console.log(`New ticket sold: ${JSON.stringify(ticket)}`);
    }
}