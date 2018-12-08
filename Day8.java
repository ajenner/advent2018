import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Day8 {

    public static void main(String[] args) throws IOException {
        Node root = new Node();
        File file = new File("C:\\Users\\Dorf\\Desktop\\advent2018\\day8.txt");
        List<Integer> allData = Files.lines(Paths.get(file.toURI()))
                .map(line -> line.split("\\s+"))
                .flatMap(Arrays::stream)
                .map(Integer::parseInt)
                .collect(Collectors.toList());
        Tree tree = new Tree(allData);
        tree.buildTree(0, root);
        System.out.println("Result: " + tree.result);
        System.out.println("Result2: " + root.metaTotal());
    }
}

class Tree {
    List<Integer> allData;
    int result;
    Tree (List<Integer> data) {
        this.allData = data;
    }
    
    int buildTree(int index, Node currentNode) {
        int children = allData.get(index++);
        int metaData = allData.get(index++);
        for (int i = 0; i < children; i++) {
            Node child = new Node();
            currentNode.children.add(child);
            index = buildTree(index, child);
        }
        for (int i = 0; i < metaData; i++) {
            currentNode.metadataEntries.add(allData.get(index + i));
            result += allData.get(index + i);
        }
        return index + metaData;
    }

}

class Node {
    List<Node> children = new ArrayList<>();
    List<Integer> metadataEntries = new ArrayList<>();
    
    int metaTotal() {
        if (children.size() == 0) {
            return metadataEntries.stream().mapToInt(x -> x).sum();
        } else {
            int sum = 0;
            for (Integer meta : metadataEntries) {
                if (meta <= children.size()) {
                    Node child = children.get(meta - 1);
                    if (child != null) {
                        sum += child.metaTotal();
                    }
                }
            }
            return sum;
        }
    }
}
