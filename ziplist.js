const l1 = ['a', 'b', 'c'];
const l2 = [1, 2, 3];

function zipList(list1, list2){
  const list =[];
  for (let i=0; i<list1.length; i++){
    list.push(list1[i], list2[i]);
  }
  return list;
}

console.log(zipList(l1,l2));

function zipListTheSimpleWay(list1, list2){
  return _.flatten(_.zip(list1, list2));
}
console.log(zipListTheSimpleWay(l1, l2));
