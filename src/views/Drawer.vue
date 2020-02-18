<template>
  <div>
    <button @click="isOpen = !isOpen">
      My Profile
    </button>

    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
      :css="false"
    >
      <div v-if="isOpen" class="drawer">
        <img src="@/assets/avatar.png" alt="avatar" />
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </transition>
  </div>
</template>

<script>
import Velocity from "velocity-animate";

export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    beforeEnter(el) {
      el.opacity = 0;
      el.style.width = 0;
    },
    enter(el, done) {
      Velocity(
        el,
        {
          opacity: 1,
          width: "12rem"
        },
        {
          duration: 1000,
          easing: [60, 10],
          complete: done
        }
      );
    },
    leave(el, done) {
      Velocity(
        el,
        {
          opacity: 0,
          width: 0
        },
        {
          duration: 500,
          easing: "easeInCubic",
          complete: done
        }
      );
    }
  }
};
</script>

<style scoped>
img {
  border-radius: 50%;
  height: 2.5em;
  width: 2.5em;
}

.drawer {
  align-items: center;
  background-color: #e0e0e0;
  border-radius: 1%;
  box-shadow: 0.08em 0.03em 0.4em #ababab;
  display: flex;
  flex-direction: column;
  height: 20em;
  padding-top: 0.7em;
  width: 12em;
}

.drawer div {
  background-color: #f0f0f0;
  border-radius: 1%;
  border: 0.02em solid #ababab;
  height: 3.5em;
  margin-top: 0.6em;
  width: 95%;
}
</style>
