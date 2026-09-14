import java.util.*;
class WordFrequency{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        String s=sc.nextLine();
        String[] words=s.toLowerCase().split("\\s+");
        HashMap<String,Integer> map=new HashMap<>();
        for (int i=0; i<words.length; i++) {
            String word=words[i];
            if (map.containsKey(word)) {
                map.put(word,map.get(word)+1);
            }
            else {
                map.put(word,1);
            }
        }
        for (String word:map.keySet()) {
            System.out.println(word+" = "+map.get(word));
        }
    }
}