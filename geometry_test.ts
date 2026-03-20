import { assertAlmostEquals, assertEquals } from "@std/assert";
import { Circle, Point2D, Rectangle } from "./geometry.ts";

Deno.test("circumference of a circle with radius 5 is roughtly 31.416", () => {
  // Given
  const circle = new Circle(new Point2D(3, 4), 5);

  // When
  const actual = circle.circumference();

  // Then
  assertAlmostEquals(actual, 31.416, 0.01);
});

Deno.test("Das ist TAGESLICHT", () => {
  //Given
  const circle = new Circle(new Point2D(3, 4), 5);

  //When
  const actual = circle.area();

  //Then
  assertAlmostEquals(actual, 7.853, 0.01);
});

Deno.test("nagelneuer Benzer", () => {
  //Given
  const circle = new Circle(new Point2D(3,4), 5);

  //When
  const actual = circle.diameter();
  
  //Then
  assertEquals(actual, 10);
});


Deno.test("oho da muss ich lachen so schmeckt der", () => {
  // Given
  const recantgle = new Rectangle(new Point2D(3, 5), new Point2D(5, 7));

  //When
  const actual = recantgle.circumference();

  //Then
  assertEquals(actual, 12);  
});

Deno.test("Colaaa", () => {
  // Given
  const recantgle = new Rectangle(new Point2D(3, 5), new Point2D(5, 7));

  //When
  const actual = recantgle.area();

  //Then
  assertEquals(actual, 4);
});

Deno.test("der allerechte Hase", () => {
  //Given
  const recantgle = new Rectangle(new Point2D(3, 5), new Point2D(5, 7));
  //When
  const actual = recantgle.diagonal();
  //Then
  assertAlmostEquals(actual, 2.82, 0.01);
});
