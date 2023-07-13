// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
  return blocks > 42 ? blocks - 42 : 42 - blocks;
}


function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264;
}


function distanceTravelledInFeet(start, destination){
   return start > destination
   ? (start - destination) * 264
   : (destination - start) * 264;

}

function calculatesFarePrice(start, destination){
    let feet = distanceTravelledInFeet(start, destination);
    if (feet < 400) {
        return 0;
    }
else if (feet > 400 && feet < 2000) {
return (feet - 400) * 0.02;
}else if (feet > 2000 && feet < 2500){
    return 25;
} else {
    return "cannot travel that far";
  }
 }