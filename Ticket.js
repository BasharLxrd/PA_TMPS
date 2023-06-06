// Singleton
export class Ticket {
    constructor() {
        if (Ticket.instance) {
            return Ticket.instance;
        }
        Ticket.instance = this;
        this.tickets = [];
        this.observers = [];
        return this;
    }

    sellTicket(ticket) {
        this.tickets.push(ticket);
        this.notifyObservers(ticket);
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }

    notifyObservers(ticket) {
        for (const observer of this.observers) {
            observer.update(ticket);
        }
    }
}