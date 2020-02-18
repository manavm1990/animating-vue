<template>
  <div id="app">
    <nav>
      <router-link to="/">Modal</router-link>&nbsp;|&nbsp;
      <router-link to="/list">List</router-link>&nbsp;|&nbsp;
      <router-link to="/drawer">Drawer</router-link>
    </nav>
    <transition name="slide-fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style>
#app {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: #2c3e50;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
}

button {
  background: linear-gradient(to right, #16c0b0, #84cf6a);
  border-radius: 0.3em;
  color: white;
  height: 2.2em;
  margin: 0.5em;
}

input {
  box-sizing: border-box;
  display: inline-block;
  font: 0.8em "Avenir", Helvetica, sans-serif;
  height: 1.8em;
  margin: 0.2em;
  padding: 0.5em;
  width: 30%;
}

.modal {
  background-color: #e0e0e0;
  border-radius: 2%;
  height: 200px;
  margin-top: 20px;
  margin: 0 auto;
  padding: 10px;
  width: 250px;
}

nav {
  padding: 30px;
}

nav a {
  color: #2c3e50;
  font-weight: bold;
}

nav a.router-link-exact-active {
  color: #42b983;
}

p {
  font-size: 0.8em;
}

::placeholder {
  color: #2c3e50;
}

ul {
  list-style-type: none;
}

/*** TRANSITIONS ***/
.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter {
  opacity: 0;
  transform: translateX(10px);
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.2s ease;
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}

.slide-up-enter {
  opacity: 0;
  transform: translateY(10px);
}

.slide-up-enter-active {
  transition: all 0.2s ease;
}

.slide-up-move {
  transition: transform 0.5s ease-out;
}
</style>
