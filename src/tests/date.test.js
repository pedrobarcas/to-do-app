import { DateFormat } from "../utils/date.js";

test("Deve formatar a data no padrão brasileiro", () => {
  const data = DateFormat.DateFormatBrazilian();
  expect(typeof data).toBe("string");
  expect(data.length).toBeGreaterThan(0);
});
