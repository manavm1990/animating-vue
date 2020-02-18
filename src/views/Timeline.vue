<template>
  <div>
    <img class="runner first" src="@/assets/runner.png" alt="runner" />
    <img class="runner second" src="@/assets/runner.png" alt="runner" />
    <img class="runner third" src="@/assets/runner.png" alt="runner" />
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  mounted() {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    // gsap default will run 🏃🏽‍♂️ these consecutively.
    tl.to(".first", {
      x: 700,
      duration: 2,
      ease: "expo.out"
    });
    tl.to(
      ".second",
      {
        x: 700,
        duration: 2,
        ease: "expo.out"
      },
      "<.5"
    );
    tl.to(
      ".third",
      {
        x: 700,
        duration: 2,
        ease: "expo.out"
      },
      "<"
    );
  }
};
</script>

<style scoped>
.runner {
  display: block;
  height: 5em;
  margin-top: 1.5em;
  width: 5em;
}
</style>
