import { it, expect, describe } from 'vitest'

const destructuringSnippets = require("../snippets/destructuring.json")
const elementsSnippets = require("../snippets/elements.json")
const reactSnippets = require("../snippets/react.json")
const varJsSnippets = require("../snippets/var-js.json")
const varTsSnippets = require("../snippets/var-ts.json")

const snippets = {
  ...destructuringSnippets,
  ...elementsSnippets,
  ...reactSnippets,
  ...varJsSnippets,
  ...varTsSnippets,
}

const unique = (xs) => [...new Set(xs)]

describe("snippets.json", () => {
  it("has entries", () => {
    expect(Object.keys(snippets).length).toBeGreaterThan(0)
  })

  it("has unique prefixes", () => {
    const prefixes = Object.values(snippets).map((x) => x.prefix)
    expect(prefixes).toEqual(unique(prefixes))
  })

  describe.each(Object.keys(snippets))("%s", (k) => {
    it("has prefix", () => {
      const { prefix } = snippets[k]
      expect(prefix).toBeDefined()
      expect(prefix).not.toEqual("")
    })

    it("has body", () => {
      const { body } = snippets[k]
      expect(body).toBeDefined()
      expect(body).not.toEqual("")
    })

    it("has description", () => {
      const { description } = snippets[k]
      expect(description).toBeDefined()
      expect(description).not.toEqual("")
    })
  })
})