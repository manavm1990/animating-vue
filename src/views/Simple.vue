<template>
  <transition appear @before-enter="beforeEnter" @enter="enter" :css="false">
    <div class="card"></div>
  </transition>
</template>

<script>
import gsap from "gsap";

export default {
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0;
      el.style.transform = "scale(0,0)";
    },
    // 'done' just represents next step in lifecycle
    enter(el, done) {
      // Tell cards where to go 'to'
      gsap.to(el, {
        duration: 1,
        opacity: 1,
        scale: 1,
        ease: "bounce.out",
        onComplete: done
      });
    }
  }
};
</script>

<style scoped>
.card {
  background-color: #16c0b0;
  border-radius: 1%;
  box-shadow: 0.08em 0.03em 0.4em #ababab;
  display: block;
  height: 6.5em;
  margin: 0 auto 0 auto;
  width: 6.5em;
}
</style>
