//TO PRINT FIRST 10 NUMBERS USING FOR LOOP
for (var num = 0; num <= 10; num++) {
  console.log(num);
}

//TO Print first 100 Even Numbers

for (var n1 = 0; n1 <= 100; n1++) {
  if (n1 % 2 == 0) {
    console.log("Even numers= " + n1);
  }
}

//Print each character for text

var s = "Rajesh";
for (var i = 0; i <= s.length - 1; i++) {
  console.log("Each Character of String:", s[i]);
}

//Print sum of 10 numbers
var sum = 0;
for (var i = 0; i <= 10; i++) {
  sum += i;
  console.log(`sum of ${i} numbers is`, sum);
}


//Print squares for first 10 numbers
var sqr = 1;
for (var j = 0; j <= 10; j++) {
  sqr = j ** 2;
  console.log(`squares of ${j} numbers is`, sqr);
}
