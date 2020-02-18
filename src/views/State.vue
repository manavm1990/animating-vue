<template>
  <div>
    <!-- Width and displayed number only care for 'newValue' now... -->
    <div :style="{ width: `${tweenedNumber}px` }" class="bar">
      <span>{{ tweenedNumber.toFixed(0) }}</span>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  data() {
    return {
      number: 0,
      tweenedNumber: 0
    };
  },
  // Watch a reactive value and do 'special things' whenever that value changes
  watch: {
    number(newValue) {
      // Give 'gsap' access to data instead of element
      gsap.to(this.$data, {
        duration: 1,
        ease: "circ.out",
        // 'gsap' will tween from current value to new value
        tweenedNumber: newValue
      });
    }
  },
  methods: {
    randomNumber() {
      this.number = Math.floor(Math.random() * (800 - 0));
    }
  },
  created() {
    setInterval(this.randomNumber, 1500);
  }
};
</script>

<style scoped>
.bar {
  background-color: #2c3e50;
  border: 1px #16c0b0 solid;
  min-width: 20px;
  padding: 5px;
}

.bar span {
  color: white;
}
</style>
