uses java.net.URI
uses java.nio.charset.StandardCharsets
uses java.nio.file.Paths
uses java.nio.file.Files

var filepath = "file:/C:/Users/ajenner/Desktop/advent/day1part1"
var result = 0
var fileContents = Files.lines(Paths.get(new URI(filepath)), StandardCharsets.UTF_8).toArray()
var frequenciesReached = new HashSet<int>()
var duplicateFrequency : Integer = null
while(duplicateFrequency == null) {
  fileContents.each(\s -> {
    result += Integer.parseInt(s as String)
    if (not frequenciesReached.add(result) and duplicateFrequency == null) {
      duplicateFrequency = result
    }
  })
}
print(duplicateFrequency)
