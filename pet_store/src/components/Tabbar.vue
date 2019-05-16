<template>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="首页">
        <img slot="icon" src="@/assets/img/icon/menu1.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="商家">
        <img slot="icon" src="@/assets/img/icon/menu2.png">
        商家
      </mt-tab-item>
      <mt-tab-item id="发布">
        <img slot="icon" src="@/assets/img/icon/menu3.png">
        发布
      </mt-tab-item>
      <mt-tab-item id="消息">
        <img slot="icon" src="@/assets/img/icon/menu4.png">
        消息
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="@/assets/img/icon/menu5.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
</template>

<script>
export default {

  name: 'Tabbar',

  data () {
    return {
      selected:this.selected,
    }
  }
}
</script>

<style lang="css" scoped>
</style>