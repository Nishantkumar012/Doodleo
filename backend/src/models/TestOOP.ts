// src/models/TestOOP.ts
import { User } from "./User";
import { Board } from "./Board";
import { Rectangle } from "./elements/Rectangle";
import { Circle } from "./elements/Circle";
import { TextElement } from "./elements/TextElement";

async function main() {
  // 🧱 Create a user
  const user = new User("1", "Nishant", "nishant@example.com", "mypassword");
  await user.hashPassword();
  console.log("✅ User created:", user.getPublicProfile());

  // 🧭 Create a board
  const board = new Board("101", "Design Sprint", user);
  console.log("🧾 Board info:", board.getBoardInfo());

  // 🟩 Add elements using polymorphism
  const rect = new Rectangle("201", { x: 10, y: 20, width: 100, height: 50 });
  const circle = new Circle("202", { x: 200, y: 150, radius: 40 });
  const text = new TextElement("203", { x: 50, y: 60, text: "Hello OOP!" });

  rect.draw();
  circle.draw();
  text.draw();

  // Add to board (composition)
  board.addElement(rect);
  board.addElement(circle);
  board.addElement(text);

  console.log("📊 Final board details:", board.getBoardInfo());
}

main();
