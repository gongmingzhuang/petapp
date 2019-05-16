<template>
  <mt-header title="首页">
    <router-link to="/" slot="left">
      <mt-button icon="back"></mt-button>
    </router-link>
    <router-link to="/" slot="right">
    	<mt-button icon="more"></mt-button>
    </router-link>
  </mt-header>
</template>
<script>
export default {
  name: 'Header',

  data() {
    return {
    	value:"",
    }
  },
  methods:{
  }
}

</script>
<style lang="css" scoped>
</style>
