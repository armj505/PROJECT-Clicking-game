const scoreArray = {
  1: (set, amount) => {
    set(amount + 1);
  },
  2: (set, amount) => {
    set(amount + 3);
  },
  3: (set, amount) => {
    set(amount + 5);
  },
  4: (set, amount) => {
    set(amount + 8);
  },
  5: (set, amount) => {
    set(amount + 10);
  },
  6: (set, amount) => {
    set(amount + 12);
  },
  7: (set, amount) => {
    set(amount + 15);
  },
  8: (set, amount) => {
    set(amount + 20);
  },
};

export default scoreArray;
