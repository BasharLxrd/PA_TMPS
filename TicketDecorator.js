
// Decorator
export class StudentDiscount {
    constructor(ticketSystem) {
        this.ticketSystem = ticketSystem;
    }

    sellTicket(ticket) {
        this.ticketSystem.sellTicket(ticket);
        console.log("Applying student discount...");
    }
}
