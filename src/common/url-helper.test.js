import { buildUrl } from './url-helper'

describe("buildUrl()", () => {
  it("interpolates the parameters provided", () => {
    expect(buildUrl("Hello :object, my name is :name.", { object: "world", name: "Earth" }))
      .toEqual("Hello world, my name is Earth.")
  })
})
