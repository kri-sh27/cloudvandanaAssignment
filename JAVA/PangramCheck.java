import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class PangramCheck {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter a sentence: ");
        String input = scanner.nextLine();
        
        if (isPangram(input)) {
            System.out.println("It's a pangram!");
        } else {
            System.out.println("It's not a pangram.");
        }
    }

    public static boolean isPangram(String input) {
       
        input = input.replaceAll(" ", "").toLowerCase();
        
        
        Set<Character> characters = new HashSet<>();
        
       
        for (char c : input.toCharArray()) {
            if (Character.isLetter(c)) {
                characters.add(c);
            }
        }
        
        
        return characters.size() == 26;
    }
}
