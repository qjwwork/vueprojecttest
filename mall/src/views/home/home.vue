<template>
  <div>
    <nav-bar class="home-nav">
      <template v-slot:center>
        <text>购物街</text>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/navBar.vue";
import { getHomeMultidata, home } from "../../network/home";
export default {
  name: "Category",
  components: {
    NavBar,
  },
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  created() {
    getHomeMultidata().then((res) => {
      this.banners = res.data.banner;
      this.recommends = res.data.recommend;
    });
  },
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: white;
}
</style>