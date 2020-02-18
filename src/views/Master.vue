<template>
  <div>
    <div id="container">
      <img class="paws first" src="../assets/paws.png" alt="fox-paws" />
      <img class="paws second" src="../assets/paws.png" alt="fox-paws" />
      <img class="paws third" src="../assets/paws.png" alt="fox-paws" />
      <img class="paws fourth" src="../assets/paws.png" alt="fox-paws" />

      <img id="fox" src="../assets/fox.png" alt="fox-logo" />
    </div>
    <button @click="play">Play</button>
  </div>
</template>

<script>
import gsap from "gsap";

const masterTL = gsap.timeline();

export default {
  methods: {
    foxTL() {
      const tl = gsap.timeline();
      tl.to("#fox", {
        opacity: 1,
        filter: "blur(0)",
        scale: 1,
        duration: 0.4,
        ease: "slow"
      });
      return tl;
    },
    pawsTL() {
      const tl = gsap.timeline();
      tl.to(".first", {
        opacity: 4,
        scale: 1,
        duration: 0.5,
        ease: "bounce.out"
      });
      tl.to(
        ".second",
        { opacity: 1, scale: 1, duration: 0.5, ease: "bounce.out" },
        "<.3"
      );
      tl.to(
        ".third",
        { opacity: 1, scale: 1, duration: 0.5, ease: "bounce.out" },
        "<.3"
      );
      tl.to(
        ".fourth",
        { opacity: 1, scale: 1, duration: 0.5, ease: "bounce.out" },
        "<.3"
      );

      return tl;
    },
    play() {
      masterTL
        .add(this.pawsTL())
        .add(this.foxTL())
        .play();
    }
  }
};
</script>

<style scoped>
#container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 5em;
}

#fox {
  filter: blur(2px);
  height: 8em;
  opacity: 0;
  width: 8em;
}

.paws {
  height: 2.5em;
  margin-right: 0.8em;
  margin-top: 50px;
  opacity: 0;
  transform: scale(0);
  width: 2.5em;
}

button {
  margin-top: 5em;
}
</style>
