import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router';
import LeftNav from "@/components/LeftNav.vue";

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe("LeftNav.vue", () => {
  it("should have each menu item", () => {
    const wrapper = shallowMount(LeftNav, { localVue, router })

    wrapper.vm.menu.items = [
      {
        name: "Home",
        icon: "tio-home-vs-1-outlined",
        destination: "/"
      },
      {
        name: "Estimates",
        icon: "tio-pages-outlined",
        destination: "estimates"
      },
      {
        name: "Authentication",
        icon: "tio-lock-outlined",
        destination: "authentication"
      }
    ]

    expect(wrapper.text()).to.include("Home");
    expect(wrapper.text()).to.include("Estimates")
    expect(wrapper.text()).to.include("Authentication")

  })
})
