import java.util.Scanner;

public class TemperatureConverter {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter temperature: ");
        double temp = sc.nextDouble();

        System.out.print("Enter C to convert Celsius to Fahrenheit, or F for Fahrenheit to Celsius: ");
        char choice = sc.next().toUpperCase().charAt(0);

        if (choice == 'C') {
            double fahrenheit = (temp * 9 / 5) + 32;
            System.out.println("Fahrenheit: " + fahrenheit);
        } else if (choice == 'F') {
            double celsius = (temp - 32) * 5 / 9;
            System.out.println("Celsius: " + celsius);
        } else {
            System.out.println("Invalid choice");
        }

        sc.close();
    }
}
