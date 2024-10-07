const deposit = (depositAmount) => {
    return account += depositAmount, checkBalance()
};

const withdrawal = (withdrawalAmount) => {
    if (withdrawalAmount <= account) {
        return account -= withdrawalAmount, checkBalance();
    } else {
        return 'Insufficient funds';
    }
};

function checkBalance() {
    return `$${account}`
};

let account = 3000;
const depositAmount = 500;
const withdrawalAmount = 4000;

console.log(`Account Balance: $${checkBalance()}`)
console.log(`Deposit Amount: $${depositAmount}`)
console.log(`Balance After Deposit: ${deposit(depositAmount)}`)
console.log(`Withdrawal Amount: $${withdrawalAmount}`)
console.log(`Final Account Balance After Transactions: ${withdrawal(withdrawalAmount)}`)

