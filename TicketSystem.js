import { Ticket } from "./Ticket.js";
import { TicketBuilder } from "./TicketBuilder.js";
// Facade
export class TicketFacade {
    constructor() {
        this.ticketSystem = new Ticket();
        this.ticketBuilder = new TicketBuilder();
    }

    sellTicket(type, seat, isVIP, studentDiscount) {
        const ticket = this.ticketBuilder
            .setType(type)
            .setSeat(seat)
            .setIsVIP(isVIP)
            .setStudentDiscount(studentDiscount)
            .build();

        this.ticketSystem.sellTicket(ticket);
        return ticket;
    }
}