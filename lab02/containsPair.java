import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

class pair {
    public static void main(String[] args) {
        List<Integer> l = new ArrayList<Integer>();
        for (int i = 0; i < 20; i++) {
            l.add(i + 1);
        }

        System.out.println(containsPair(l));
    }

    public static boolean containsPair(List<Integer> l) {
        Set<Integer> s = new HashSet<Integer>(l);
        return s.size() != l.size();
    }
}