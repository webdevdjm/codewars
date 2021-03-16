// Your task is to make two functions, max and min (maximum and minimum in PHP and Python) that take a(n) array/vector of integers list as input and outputs, respectively, the largest and lowest number in that array/vector.

var min = function(list){
    
  let min = list.reduce(function(a, b) {
    return Math.min(a, b)
  })
  return min
}

var max = function(list){
  
  let max = list.reduce(function(a, b) {
    return Math.max(a, b)
  })
  return max
}