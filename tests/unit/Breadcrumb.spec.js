import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Breadcrumbs from "@/components/Breadcrumbs.vue";

describe("Breadcrumbs.vue", () => {
  it('renders props.crumbs when passed', () => {

    const crumbs = [
      { name: "Home", destination: "/" },
      { name: "About", destination: "/About" },
      { name: "Me", destination: "/Me" }
    ];

    const wrapper = shallowMount(Breadcrumbs, {
      propsData: { crumbs }
    })

    expect(wrapper.text()).to.include("Home")
    expect(wrapper.text()).to.include("About")
  });

  it('doesn\'t render the last crumb as a link', () => {
    const crumbs = [
      { name: "Home", destination: "/" },
      { name: "About", destination: "/About" },
      { name: "Me", destination: "/Me" }
    ];

    const wrapper = shallowMount(Breadcrumbs, {
      propsData: { crumbs }
    });

    expect(wrapper.html()).to.include("<li class=\"breadcrumb-item active\"> Me </li>")
  })
})
