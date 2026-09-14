import java.util.Scanner;

public class Calculator {
    public static void main(String[] args) {
        Scanner r = new Scanner(System.in);

        System.out.print("Enter first number: ");
        double a = r.nextDouble();

        System.out.print("Enter operator: ");
        char op = r.next().charAt(0);

        System.out.print("Enter second number: ");
        double b = r.nextDouble();

        switch (op) {
            case '+':
                System.out.println("Result: " + (a + b));
                break;

            case '-':
                System.out.println("Result: " + (a - b));
                break;

            case '*':
                System.out.println("Result: " + (a * b));
                break;

            case '/':
                if (b != 0)
                    System.out.println("Result: " + (a / b));
                else
                    System.out.println("Cannot divide by zero.");
                break;

            default:
                System.out.println("Invalid operator.");
        }
    }
}