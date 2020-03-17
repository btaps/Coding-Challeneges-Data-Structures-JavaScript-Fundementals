function checkMagazine(magazine, note) {
  let canUseMagazine = "Yes";

  function hashStringToInt(s, tableSize) {
    let hash = 17;
    for (let i = 0; i < s.length; i++) {
      hash = (13 * hash * s.charCodeAt(i)) % tableSize;
    }
    return hash;
  }

  class HashTable {
    table = new Array(101);

    numItems = 0;

    resize = () => {
      const newTable = new Array(this.table.length * 2);

      this.table.forEach(item => {
        if (item) {
          item.forEach(([key, value]) => {
            const idx = hashStringToInt(key, newTable.length);
            if (newTable[idx]) {
              newTable[idx].push([key, value]);
            } else {
              newTable[idx] = [[key, value]];
            }
          });
        }
      });
      this.table = newTable;
    };

    set = (key, value) => {
      const loadFactor = this.numItems / this.table.length;

      if (loadFactor > 0.8) {
        this.resize();
      }
      this.numItems++;
      const idx = hashStringToInt(key, this.table.length);
      if (this.table[idx]) {
        this.table[idx].push([key, value]);
      } else {
        this.table[idx] = [[key, value]];
      }
    };

    get = key => {
      const idx = hashStringToInt(key, this.table.length);
      if (!this.table[idx]) return null;
      return this.table[idx].find(x => x[0] === key);
    };
  }

  const myTable = new HashTable();

  magazine.forEach(ele => {
    myTable.set(ele, true);
  });

  note.forEach(ele => {
    if (myTable.get(ele) && canUseMagazine === "Yes") {
      const idx = hashStringToInt(ele, myTable.table.length);
      myTable.table[idx].find(x => x[0] === ele)[1] = false;
    } else canUseMagazine = "No";
  });

  console.log(canUseMagazine);
  //myTable.set("firstName", "joe");
  //myTable.set("lastName", "schmo");
  //myTable.set("age", 5);
  //myTable.set("dob", "1/2/3");
  //myTable.set("place", "SF");
  //myTable.set("color", "red");
  //myTable.set("team", "SF");
  //console.log(myTable.table);
  //console.log(myTable.get("firstName"));
  //console.log(myTable.get("lastName"));
  //console.log(myTable.get("age"));
  //console.log(myTable.get("dob"));
  //console.log(myTable.get("place"));
  //console.log(myTable.get("color"));
  //console.log(myTable.get("team"));
}

let mag1 = ["ive", "got", "a", "lovely", "bunch", "of", "coconuts"];
let note1 = ["ive", "got", "some", "coconuts"];

let mag2 = ["give", "me", "one", "grand", "today", "night"];
let note2 = ["give", "one", "grand", "today"];

// need to fix the case of repetition
let mag3 = ["two", "times", "three", "is", "not", "four"];
let note3 = ["two", "times", "two", "is", "four"];

checkMagazine(mag3, note3);
