import { expect } from 'chai'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import AccountDropdown from "@/components/AccountDropdown.vue";
import Vuex from "vuex";


describe("AccountDropdown.vue", () => {

  it("should not show anything if not authenticated", () => {
    const wrapper = shallowMount(AccountDropdown, {
      computed: {
        status(){
          return "unauthenticated"
        },
        user(){
          return {
            name: "Mark Williams",
            email: "Mark@example.com",
            avatar: "/img/160x160/img6.jpg"
          }
        }
      }
    });


    expect(wrapper.text()).to.not.include("Mark Williams")
  })

  it("should show user in account dropdown", () => {
    const wrapper = shallowMount(AccountDropdown, {
      computed: {
        status(){
          return "authenticated"
        },
        user(){
          return {
            name: "Mark Williams",
            email: "Mark@example.com",
            avatar: "/img/160x160/img6.jpg"
          }
        }
      }
    });


    expect(wrapper.text()).to.include("Mark Williams")
  });

  it("should not show user details initially", () => {

    const wrapper = shallowMount(AccountDropdown, {
      computed: {
        status(){
          return "authenticated"
        },
        user(){
          return {
            name: "Mark Williams",
            email: "Mark@example.com",
            avatar: "/img/160x160/img6.jpg"
          }
        }
      }
    });

    expect(wrapper.find("#accountNavbarDropdown.hs-unfold-hidden")).to.exist;

  })

  it("should show user details when clicked", async () => {
    const wrapper = shallowMount(AccountDropdown, {
      computed: {
        status(){
          return "authenticated"
        },
        user(){
          return {
            name: "Mark Williams",
            email: "Mark@example.com",
            avatar: "/img/160x160/img6.jpg"
          }
        }
      }
    });

    expect(wrapper.find("#accountNavbarDropdown.hs-unfold-hidden").exists()).to.equal(true);
    expect(wrapper.find("#navbarAvatar").exists()).to.equal(true);
    await wrapper.find("#navbarAvatar").trigger("click");
    expect(wrapper.find("#accountNavbarDropdown.hs-unfold-hidden").exists()).to.equal(false);
  })
})
