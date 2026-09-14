import java.util.Scanner;
class Fibanacci{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        if (n<=0) {
            System.out.println("Enter a positive number");
            return;
        }
        int first=0;
        int second=1;
        for (int i=0; i<n;i++) {
            System.out.print(first+" ");

            int next=first+second;
            first=second;
            second=next;
        }
    }
}