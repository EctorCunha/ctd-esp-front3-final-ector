import { rest } from "msw";
import comics from "./mocks/comics";
import character from "./mocks/character";
import comic from "./mocks/comic";
import comicsWithOffsetAndLimit from "./mocks/comicsWithOffsetAndLimit";
import comicWithoutStock from "./mocks/comicWithoutStock";

const handlers = [
  rest.get("/marvel/api/comics", async (req, res, ctx) => {
    const query = req.url.searchParams;
    if (query.get("offset") === "10" && query.get("limit") === "5") {
      return res(ctx.json(comicsWithOffsetAndLimit));
    }
    return res(ctx.json(comics));
  }),
  rest.get("/marvel/api/comics/:id", async (req, res, ctx) => {
    const id = req.params.id;
    if (id === "1") return res(ctx.json({ data: { results: [comic] } }));
    if (id === "10")
      return res(ctx.json({ data: { results: [comicWithoutStock] } }));
    return res(ctx.json({ data: { results: [] } }));
  }),
  rest.get("/marvel/api/characters/:id", async (req, res, ctx) => {
    const id = req.params.id;
    if (id === "1") return res(ctx.json({ data: { results: [character] } }));
    return res(ctx.json({ data: { results: [] } }));
  }),
];

export { handlers };
