uses java.net.URI
uses java.nio.charset.StandardCharsets
uses java.nio.file.Paths
uses java.nio.file.Files

var filepath = "file:/C:/Users/ajenner/Desktop/advent/day2"
var fileContents = Files.lines(Paths.get(new URI(filepath)), StandardCharsets.UTF_8)
var twos = 0
var hadTwo = false
var hadThree = false
var threes = 0
var count = 0l
fileContents.forEach(\s -> {
  s.chars().forEach(\c -> {
    count = s.chars().filter(\num -> num == c).count()
    if (count == 2) hadTwo = true
    if (count == 3) hadThree = true
  })
  if(hadTwo){
    twos++
    hadTwo = false
  }
  if(hadThree){
    threes++
    hadThree = false
  }
})
print(twos * threes)
