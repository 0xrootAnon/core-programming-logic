//triangle is valid if sum of any 2 sides > third side

function isTriangleValid(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}
