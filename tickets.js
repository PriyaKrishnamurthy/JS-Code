class Tickets{
    constructor(data){
        this.name = data.name;
        this.department = data.department;
        this.priority = data.priority;
        this.status = data.status;
    }
    submit(){
        Tickets.staticTicketArray.push(this);
        return `Saving the ticket `;
    }
    reset(){
        this.name = '';
        this.department = '';
        this.priority = '';
        this.status = '';
    }
    static showAll(){
        Tickets.currentCount = Tickets.staticTicketArray.length;
        return Tickets.staticTicketArray;
    }
    static filterByPriority(priority){
        let resultP = Tickets.staticTicketArray.filter(t=> t.priority === priority);
        Tickets.currentCount = resultP.length;
        return resultP;
    }
    static listTicketNumber(){
        return Tickets.currentCount;
    }
    static percentComplete(){
        let resultC = Tickets.staticTicketArray.filter(t=> t.status === 'completed');
        return ((100 * resultC.length) / Tickets.staticTicketArray.length );
    }
}
Tickets.staticTicketArray = [];
Tickets.currentCount = 0;

let t1 = new Tickets({
    name:'Mahesh',
    department:'Technical',
    priority:'High',
    status:'open'
});
console.log(t1.submit());

let t2 = new Tickets({
    name:'Suresh',
    department:'Sales',
    priority:'Low',
    status:'completed'
})
console.log(t2.submit());

// Show all the tickets
console.log(Tickets.showAll());
console.log(`Listing Tickets: ${Tickets.listTicketNumber()}`);

//Show all the tickets with priority set to High
console.log('Filtering by High priority: ');
console.log(Tickets.filterByPriority('High'));
console.log(`Listing Tickets: ${Tickets.listTicketNumber()}`);

//Show the percent of tickets which are completed
console.log(`Percent of tickets complete: ${Tickets.percentComplete()}% `);



