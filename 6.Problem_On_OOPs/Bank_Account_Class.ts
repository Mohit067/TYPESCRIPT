class Account {
    accountNumber: string;
    private balance: number;

    constructor(accountNumber: string, balance: number){
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount: number): void{
        this.balance += amount;
    }

    withdrawl(amount: number): void{
        if(this.balance > amount){
            this.balance -= amount;
        } else {
            throw new Error("Insufficient balance"); 
        }
    }

    getBalance(): number{
        return this.balance;
    }
}

const myAccount = new Account('394720ABC98067', 1000);
myAccount.deposit(2000);
console.log(myAccount.getBalance());//3000
myAccount.withdrawl(500);
console.log(myAccount.getBalance());//2500
;