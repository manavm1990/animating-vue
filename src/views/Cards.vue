<template>
  <transition-group
    appear
    @before-enter="beforeEnter"
    @enter="enter"
    :css="false"
  >
    <div class="card" v-for="card in cards" :key="card.id">
      <p>{{ card.title }}</p>
    </div>
  </transition-group>
</template>

<script>
import Velocity from "velocity-animate";

export default {
  data() {
    return {
      cards: [
        { title: "Could contain anything", id: 123 },
        { title: "Endless possibilities", id: 456 }
      ]
    };
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.width = 0;
    },
    enter(el, done) {
      Velocity(
        el,
        { opacity: 1, width: "12rem", rotateZ: "3deg" },
        { duration: 1000, easing: [70, 8], complete: done }
      );
    }
  }
};
</script>

<style scoped>
.card {
  background-color: #e0e0e0;
  border-radius: 1%;
  box-shadow: 0.08em 0.03em 0.4em #ababab;
  height: 4em;
  padding-top: 1em;
  width: 12em;
}
</style>
