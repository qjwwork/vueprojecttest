<template>
  <div id="main-tab-bar">
   <TabBar>
      <TabBarItem path='/home' activeColor="deeppink">
        <template v-slot:item-icon >
          <img src="../../../assets/img/tabbar/home.svg" v-bind:style="{width:'24px',height:'24px'}">
        </template>
        <template v-slot:item-icon-active>
          <img src="../../../assets/img/tabbar/home_active.svg" v-bind:style="{width:'24px',height:'24px'}">
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </TabBarItem>
      <TabBarItem path='/category' activeColor="deeppink">
        <template v-slot:item-icon>
          <img src="../../../assets/img/tabbar/category.svg" v-bind:style="{width:'24px',height:'24px'}">
        </template>
         <template v-slot:item-icon-active>
          <img src="../../../assets/img/tabbar/category_active.svg" v-bind:style="{width:'24px',height:'24px'}">
        </template>
        <template v-slot:item-text>
          <div>分类</div>
        </template>
      </TabBarItem>
      <TabBarItem path='/shopcart' activeColor="deeppink">
        <template v-slot:item-icon>
          <img src="../../../assets/img/tabbar/shopcart.svg" v-bind:style="{width:'24px',height:'24px'}">
        </template>
         <template v-slot:item-icon-active>
          <img src="../../../assets/img/tabbar/shopcart_active.svg" v-bind:style="{width:'24px',height:'24px'}">
        </template>
        <template v-slot:item-text>
          <div>购物车</div>
        </template>
      </TabBarItem>
      <TabBarItem path='/profile' activeColor="deeppink">
        <template v-slot:item-icon>
          <img src="../../../assets/img/tabbar/profile.svg" v-bind:style="{width:'24px',height:'24px'}">
        </template>
         <template v-slot:item-icon-active>
          <img src="../../../assets/img/tabbar/profile_active.svg" v-bind:style="{width:'24px',height:'24px'}">
        </template>
        <template v-slot:item-text>
          <div>我的</div>
        </template>
      </TabBarItem>
    </TabBar>
  </div>
</template>

<script>
import TabBar from "../../common/tabbar/TabBar";
import TabBarItem from "../../common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components:{
      TabBar,
      TabBarItem
  }
};
</script>

<style scoped>


</style>