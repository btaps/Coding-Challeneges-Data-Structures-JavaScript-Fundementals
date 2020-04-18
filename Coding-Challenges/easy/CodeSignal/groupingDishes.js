/*
You are given a list dishes, where each element consists of a list of strings beginning with 
the name of the dish, followed by all the ingredients used in preparing it.
You want to group the dishes by ingredients,so that for each ingredient you'll be able to 
find all the dishes that contain it (if there are at least 2 such dishes).

Return an array where each element is a list beginning with the ingredient name,
followed by the names of all the dishes that contain this ingredient.
The dishes inside each list should be sorted lexicographically, and the 
result array should be sorted lexicographically by the names of the ingredients.


EXAMPLE: 

  input:
  dishes = [["Salad", "Tomato", "Cucumber", "Salad", "Sauce"],
            ["Pizza", "Tomato", "Sausage", "Sauce", "Dough"],
            ["Quesadilla", "Chicken", "Cheese", "Sauce"],
            ["Sandwich", "Salad", "Bread", "Tomato", "Cheese"]]
            
  output:
  groupingDishes(dishes) = [["Cheese", "Quesadilla", "Sandwich"],
                            ["Salad", "Salad", "Sandwich"],
                            ["Sauce", "Pizza", "Quesadilla", "Salad"],
                            ["Tomato", "Pizza", "Salad", "Sandwich"]]

  */

function groupingDishes(dishes) {
  // {}
  // {
  //     'Tomato': ['Tomato','Salad','Pizza']
  //     'Cucumber':['Cucumber', 'Salad']
  //     'Salad': ['Salad', 'Salad']
  //     'Sauce': ['Sauce', 'Salad', 'Pizza']
  //     'Sausage': ['Sausage', 'Pizza']
  //     'Dough': ['Dough', 'Pizza']
  // }

  // loop through values and pull out the one that is length > 2

  // Here we are going through the 2D array and inserting into our HashMap
  // The key is the ingredient (Ex: 'Tomato') and the value is the product (Ex: 'Pizza', 'Salad')
  const map = {};
  dishes.forEach((arr) => {
    let idx = 1;
    while (idx < arr.length) {
      let ingridient = arr[idx];
      let product = arr[0];
      if (map[ingridient]) {
        map[ingridient].push(product);
      } else {
        map[ingridient] = [product];
      }
      idx++;
    }
  });

  // The intent here is to insets all keys in an array and soert them, here we accomplish the first part of the problem
  // Then we loop through the Array of keys (aka ingredients) and if we have multiple products with this ingredient,
  // then we would sort the items in our map[key] array first, then concatinate our ingredient to the beginning of the array
  const answer = [];

  Object.keys(map)
    .sort()
    .forEach((key) => {
      if (map[key].length > 1) answer.push([key].concat(map[key].sort()));
    });
  return answer;
}

const list = [
  ["Salad", "Tomato", "Cucumber", "Salad", "Sauce"],
  ["Pizza", "Tomato", "Sausage", "Sauce", "Dough"],
  ["Quesadilla", "Chicken", "Cheese", "Sauce"],
  ["Sandwich", "Salad", "Bread", "Tomato", "Cheese"],
];

const list2 = [
  ["First", "a", "b", "c", "d", "e", "f", "g", "h", "i"],
  ["Second", "i", "h", "g", "f", "e", "x", "c", "b", "a"],
];

const list3 = [
  ["Pasta", "Tomato Sauce", "Onions", "Garlic"],
  ["Chicken Curry", "Chicken", "Curry Sauce"],
  ["Fried Rice", "Rice", "Onion", "Nuts"],
  ["Salad", "Spinach", "Nut"],
  ["Sandwich", "Cheese", "Bread"],
  ["Quesadilla", "Chickens", "Cheeseeee"],
];

console.log(groupingDishes(list3));
