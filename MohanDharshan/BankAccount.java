import java.util.Scanner;
class BankAccount{
    private String accountNo;
    private String accountHolder;
    private double balance;
    BankAccount(String accountNo,String accountHolder,double balance) {
        this.accountNo=accountNo;
        this.accountHolder=accountHolder;
        this.balance=balance;
    }
    public void deposit(double amount) {
        if (amount>0) {
            balance=balance+amount;
            System.out.println("Deposit successful");
        }
        else {
            System.out.println("Invalid amount");
        }
    }

    public void withdraw(double amount) {
        if (amount>0 && amount<=balance) {
            balance=balance-amount;
            System.out.println("Withdrawal successful");
        }
        else {
            System.out.println("Insufficient balance or invalid amount");
        }
    }

    public double getBalance() {
        return balance;
    }
}
class Main{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        String accountNo=sc.nextLine();
        String accountHolder=sc.nextLine();

        double balance=sc.nextDouble();
        BankAccount account=new BankAccount(accountNo,accountHolder,balance);
        
        double depositAmount=sc.nextDouble();
        account.deposit(depositAmount);
        
        double withdrawAmount=sc.nextDouble();
        account.withdraw(withdrawAmount);
        System.out.println("Final balance: "+account.getBalance());
    }
}