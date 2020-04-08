////////// HASH MAP ///////

const hash = (string, max) => {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash % max; // 'bruno' = idx(19)  'dan' = idx(19)
  // 'bruno',
};

let HashTable = function() {
  let storage = [];
  const storageLimit = 3;

  this.print = () => console.log(storage);

  this.add = (key, value) => {
    let index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      storage[index] = [[key, value]];
    } else {
      let inserted = false;
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index][i][1] = value; // [[bruno,dad]]
          inserted = true;
        }
      }
      if (inserted === false) {
        storage[index].push([key, value]); // [[bruno,dad],[bruno, GREAT]]
      }
    }
  };

  this.remove = key => {
    let index = hash(key, storageLimit);
    if (storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index];
    } else {
      for (let i = 0; i < storage[index]; i++) {
        if (storage[index][i][0] === key) {
          delete storage[index[i]];
        }
      }
    }
  };

  this.lookup = key => {
    let index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      return undefined;
    } else {
      for (let i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          return storage[index][i][1];
        }
      }
    }
  };
};

//console.log(hash("a", 10));

let ht = new HashTable();
ht.add("bruno", "dad");
ht.add("shelby", "mom");
ht.add("Little B", "son");
ht.add("cheeks", "dog");
ht.add("stella", "dog");

ht.print();
console.log(ht.lookup("Little B"));

//ht.add(1, true);
//ht.add(2, true);
//ht.add(2, true);
//ht.add(4, true);
//ht.print();
//console.log(ht.lookup(2));
