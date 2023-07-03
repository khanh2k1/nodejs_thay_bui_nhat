

class Counter {
  constructor() {
    let _count = 0; // Thuộc tính private

    this.increment = function() {
      _count++;
      console.log(`Count: ${_count}`);
    };

    this.decrement = function() {d
      if (_count > 0) {
        _count--;
        console.log(`Count: ${_count}`);
      }
    };
  }

  // Phương thức public
  reset() {
    _count = 0;
    console.log("Count reset.");
  }
}

// Tạo instance của Counter
const counter = new Counter();

counter.increment(); // Kết quả: Count: 1
counter.increment(); // Kết quả: Count: 2
counter.decrement(); // Kết quả: Count: 1
//counter.reset(); // Kết quả: Count reset.

// Không nên truy cập trực tiếp vào thuộc tính _count
console.log(counter._count); // Kết quả: undefined