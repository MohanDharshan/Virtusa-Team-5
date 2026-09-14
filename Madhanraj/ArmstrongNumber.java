import java.util.Scanner;

public class ArmstrongNumber {
    public static void main(String[] args) {
        Scanner r = new Scanner(System.in);

        System.out.print("Enter a number: ");
        int num = r.nextInt();

        int original = num;
        int digits = String.valueOf(num).length();
        int sum = 0;

        while (num > 0) {
            int digit = num % 10;
            sum += Math.pow(digit, digits);
            num = num / 10;
        }

        if (sum == original)
            System.out.println(original + " is an Armstrong number.");
        else
            System.out.println(original + " is not an Armstrong number.");
    }
}