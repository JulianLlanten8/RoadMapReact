import { describe, expect, test } from "vitest";
import { getHeroesByPageAction } from "./get-heroes-by-page-action";
import AxiosMockAdapter from "axios-mock-adapter";

import { heroApi } from "../api/hero.api";


const BASE_URL = import.meta.env.VITE_API_URL;

describe("GetHeroesByPageAction", () => {

  const heroApiMock = new AxiosMockAdapter(heroApi);

  heroApiMock.onGet("/").reply(200, {
    total: 10,
    page: 2,
    heroes: [
      {
        image: "1.jpg",
      },
      {
        image: "2.jpg",
      },
    ],
  });


  test("should return default heroes", async () => {
    // Se esperaría que retorne los héroes del mock
    const response = await getHeroesByPageAction(1);

    expect(response).toStrictEqual({
      total: 10,
      page: 2,
      heroes: [
        { image: `${BASE_URL}/images/1.jpg` },
        { image: `${BASE_URL}/images/2.jpg` }
      ]
    });
  })

  test("should return the correct heroes when page is not a number", async () => {
    // Se esperaría que tome el valor por defecto
    const responseObject = {
      total: 10,
      page: 1,
      heroes: []
    }

    heroApiMock.onGet("/").reply(200, responseObject);
    heroApiMock.resetHistory();

    await getHeroesByPageAction('abc' as unknown as number);

    const params = heroApiMock.history.get[0].params;
    expect(params).toStrictEqual({ limit: 6, offset: 0, category: "all" });

  })

  test("should call the api whit correct params", async () => {
    //Se espera que llame a la api con los parámetros correctos
    const responseObject = {
      total: 10,
      page: 1,
      heroes: []
    }

    heroApiMock.onGet("/").reply(200, responseObject);
    heroApiMock.resetHistory();

    await getHeroesByPageAction(2, 10, "heroes");

    const params = heroApiMock.history.get[0].params;
    expect(params).toStrictEqual({ limit: 10, offset: 10, category: "heroes" });

  })
});