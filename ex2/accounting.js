let Account = class {
    constructor(name) {
        this.name = name;
        this.credit = "";
    }

    credit (num) {
        this.credit = num;
    }

    describe () {
        console.log("owner: " + this.name + ", balance: " + this.credit)
    }
    
}