
// Prototype
export class TicketPrototype {
    clone() {
        return Object.assign(Object.create(Object.getPrototypeOf(this.constructor.prototype)), this);
    }
}