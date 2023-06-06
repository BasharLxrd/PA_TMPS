

// Builder
export class TicketBuilder {
    constructor() {
        this.ticket = {};
    }

    setType(type) {
        this.ticket.type = type;
        return this;
    }

    setSeat(seat) {
        this.ticket.seat = seat;
        return this;
    }

    setIsVIP(isVIP) {
        this.ticket.isVIP = isVIP;
        return this;
    }

    setStudentDiscount(studentDiscount) {
        this.ticket.studentDiscount = studentDiscount;
        return this;
    }

    build() {
        return this.ticket;
    }
}
