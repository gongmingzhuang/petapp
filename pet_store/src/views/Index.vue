<template>
	<main>
		<!-- 1.头部-Header -->
		<ev-header></ev-header>
		<ev-tabbar></ev-tabbar>
	</main>
</template>

<script>
import evTabbar from '@/components/Tabbar'
import evHeader from '@/components/Header'
export default {

  name: 'Index',

  data () {
    return {

    }
  },
  components:{
  	evTabbar,
  	evHeader
  }
}
</script>

<style lang="css" scoped>
</style>