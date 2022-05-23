/*
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.


*/

function isValidWalk(walk) {
    let nCount = 0
    let sCount = 0
    let wCount = 0 
    let eCount = 0
    
    for(let i = 0; i < walk.length; i++){
      if(walk[i]==="n"){
        nCount+=1
      }else if(walk[i]==="s"){
        sCount+=1
      }else if (walk[i]==="e"){
        eCount+=1
      }else{
         wCount+=1
      }
    }
    if(eCount === wCount && sCount === nCount && walk.length === 10)
    return true
  }
  
  // array of the directions you have to walk
  // return boolean - true if you can get back in 10 minutes; false if you cant 
  // [ 'n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's' ] = > true
  // [ 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e' ] = > false
  
  /*
  create a count for n , s ,e, w 
  create a loop
  create a conditional (if n count === s count && e count === w count ) && length == 10(represents mins)
  return true 
  
  
  
  */