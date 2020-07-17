// TUGAS 3 ============================================================================

const num = "6";

if (typeof(num) === "number") {
    for (let i = 0; i < num; i++) {
        let str = "";
        for (let j = 1; j < (num-i+1); j++) {
          str += j;
        }
        console.log(str)
      }
} else console.log("data harus number");
