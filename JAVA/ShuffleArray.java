import java.util.ArrayList;
import java.util.Collections;
import java.util.Arrays; // Import the Arrays class


public class ShuffleArray {
    public static void main(String[] args) {
        Integer[] array = {1, 2, 3, 4, 5, 6, 7};
        ArrayList<Integer> list = new ArrayList<>(Arrays.asList(array));
        
        Collections.shuffle(list);
        
        System.out.println("Shuffled Array: " + list);
    }
}
