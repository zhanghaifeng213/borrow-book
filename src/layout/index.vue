<template>
  <div class="app-wrapper">
    <Sidebar class="sidebar-wrap"/>
    <app-main class="app-main-wrap"/>
  </div>
</template>

<script>
import Sidebar from "./components/sidebar";
import AppMain from "./components/app-main";

export default {
  name: "Layout",
  components: {
    Sidebar,
    AppMain
  }
};
</script>

<style scoped>
.app-wrapper {
  display: flex;
  height: 100vh;
  width: 100%;
}
.app-wrapper .sidebar-wrap {
  width: 280px;
  height: 100%;
  flex: 0 0 280px;
}
.app-wrapper .app-main-wrap {
  flex: 1;
  height: 100%;
}
</style>
