import { getGifs } from "../../helpers/getGifs";

describe("Pruebas en getGifs()", () => {
  test("debe de retornar un array de gifs", async () => {
    const gifts = await getGifs("Dragon Ball");
    expect(gifts.length).toBeGreaterThan(0);
    expect(gifts[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
