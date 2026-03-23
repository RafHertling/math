import { assertAlmostEquals, assertEquals, assertThrows } from "@std/assert";
import { Fraction } from "./fraction.ts";

Deno.test("fraction of 1/1 is 1.0", () => {
  // Arrange
  const fraction = new Fraction(1, 1);

  // Act
  const float = fraction.toFloat(0.1);

  // Assert
  assertEquals(float, 1.0);
});

Deno.test("fraction of 2/3 is roughly 0.67", () => {
  // Arrange
  const fraction = new Fraction(2, 3);

  // Act
  const float = fraction.toFloat(0.01);

  // Assert
  assertAlmostEquals(float, 0.67);
});

Deno.test("1/3 + 2/6 = 2/3 is roughly 0.67", () => {
  // Arrange
  const left = new Fraction(1, 3);
  const right = new Fraction(2, 6);

  // Act
  left.add(right);

  // Assert
  assertAlmostEquals(left.toFloat(0.01), 0.67);
});

Deno.test("3/4 - 1/4 = 1/2 (subtrafct)", () => {
  // Arrange
  const left = new Fraction(3, 4);
  const right = new Fraction(1, 4);

  // Act
  left.subtract(right);

  // Assert
  assertAlmostEquals(left.toFloat(0.01), 0.5);
});

Deno.test("2/3 * 3/4 = 1/2 (multiply)", () => {
  // Arrange
  const left = new Fraction(2, 3);
  const right = new Fraction(3, 4);

  // Act
  left.multiply(right);

  // Assert
  assertAlmostEquals(left.toFloat(0.01), 0.5);
});

Deno.test("2/3 ÷ 3/4 ≈ 0.8889 (divide)", () => {
  // Arrange
  const left = new Fraction(2, 3);
  const right = new Fraction(3, 4);

  // Act
  left.divide(right);

  // Assert
  assertAlmostEquals(left.toFloat(0.0001), 0.8889);
});

Deno.test("toString returns numerator/denominator", () => {
  // Arrange
  const f = new Fraction(2, 3);

  // Act
  const s = f.toString();

  // Assert
  assertEquals(s, "2/3");
});

Deno.test("parse valid expression returns Fraction", () => {
  // Arrange
  const expr = " 4 / 5 ";

  // Act
  const f = Fraction.parse(expr);

  // Assert
  assertEquals(f.toString(), "4/5");
});

Deno.test("parse invalid syntax throws", () => {
  // Arrange
  const expr = "1-2";

  // Act / Assert
  assertThrows(() => {
    Fraction.parse(expr);
  });
});

Deno.test("parse non-numeric throws", () => {
  // Arrange
  const expr = "a/b";

  // Act / Assert
  assertThrows(() => {
    Fraction.parse(expr);
  });
});
