import { TicketFacade } from "./TicketSystem.js";
import { TicketObserver } from "./TicketObserver.js";
import { StudentDiscount } from "./TicketDecorator.js";
import { TicketState } from "./State.js";



console.log('Welcome to the selling system....');
console.log('Implement the system...');
let system = new TicketFacade();
const ticketObserver = new TicketObserver(system.ticketSystem);
console.log('\nselling first ticket....');
system.sellTicket("Regular", "A1", false, false);

console.log('selling vip ticket....');
let vipTicket = system.sellTicket("VIP", "B2", true, true);

console.log('selling vip ticket with discount....');
let vipTicketWithDiscount = new StudentDiscount(system.ticketSystem);
vipTicketWithDiscount.sellTicket(vipTicket);

console.log('getting state');
const ticketState = new TicketState();
console.log(`Ticket state: ${ticketState.getState()}`);

