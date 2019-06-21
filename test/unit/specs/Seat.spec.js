import Vue from "vue";
import Seat from "../../../src/components/Seat/Seat";
import { shallowMount } from "@vue/test-utils";

describe("Seat.vue", () => {
  it("should test the Seat component", () => {
    const wrapper = shallowMount(Seat, {
      props: {
        seat: { backgroundColor: "green", seat: "4" },
        rank: "rank1",
        sectionName: "main hall",
        row: "row1"
      } 
    })
    expect(wrapper.contains("div")).toBe(true);
    expect(wrapper.classes("seat")).toBe(true);
    expect(wrapper.find(".seat").attributes().style).toBe("background-color: green;"
    )
  })
});