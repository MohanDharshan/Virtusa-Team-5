import java.util.Scanner;

public class Power {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a: ");
        int a = sc.nextInt();

        System.out.print("Enter b: ");
        int b = sc.nextInt();

        long result = 1;

        for (int i = 1; i <= b; i++) {
            result *= a;
        }

        System.out.println(a + "^" + b + " = " + result);

        sc.close();
    }
}