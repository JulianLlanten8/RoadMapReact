import { describe, expect, test } from "vitest";
import { getHeroAction } from "./get-hero.action";

const heroId = "clark-kent";

describe("getHeroAction", () => {
  test("should fetch data and return with complete image url", async () => {
    const result = await getHeroAction(heroId);

    expect(result.img).toContain('http')

    expect(result).toStrictEqual({
      id: expect.any(String),
      name: expect.any(String),
      slug: expect.any(String),
      alias: expect.any(String),
      powers: [
        'Súper fuerza',
        'Vuelo',
        'Visión de calor',
        'Visión de rayos X',
        'Invulnerabilidad',
        'Súper velocidad'
      ],
      description: 'El Último Hijo de Krypton, protector de la Tierra y símbolo de esperanza para toda la humanidad.',
      strength: 10,
      intelligence: 8,
      speed: 9,
      durability: 10,
      team: 'Liga de la Justicia',
      image: '1.jpeg',
      firstAppearance: '1938',
      status: 'Active',
      category: 'Hero',
      universe: 'DC',
      img: 'http://localhost:3001/images/1.jpeg'
    });
  });

  test("should throw an error if hero not found", async () => {
    const idSlug = "Dead-pool";

    const result = await getHeroAction(idSlug).catch((error) => {
      expect(error).toBeDefined();
      expect(error.message).toBe('Request failed with status code 404');
    });

    expect(result).toBeUndefined();

  });
})