uses java.net.URI
uses java.nio.charset.StandardCharsets
uses java.nio.file.Paths
uses java.nio.file.Files
uses java.io.File

var filepath = "file:/C:/Users/ajenner/Desktop/advent/day1part1"
var result = 0
var fileContents = Files.lines(Paths.get(new URI(filepath)), StandardCharsets.UTF_8)
fileContents.forEach(\s -> {
  result += Integer.parseInt(s)
})
print(result)
