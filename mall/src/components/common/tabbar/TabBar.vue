<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
// import MainTabBar from 'components/content/mainTabbar/MainTabBar'

export default {
  name: "TabBar",
};
</script>

<style scoped>
/* @import "./assets/css/base.css"; */
#tab-bar {
  display: flex;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px -1px 1px rbga(100, 100, 100, 0.1);
}

</style>