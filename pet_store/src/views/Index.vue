<template>
  <main>
    <!-- 1.头部 -->
    <evHeader></evHeader>
    <!-- 2.轮播图 -->
    <mt-swipe :auto="4000" class="banner">
      <mt-swipe-item v-for="(item, idx) in banList" :key="idx">
        <img :src="item.imgUrl" :alt="item.title">
      </mt-swipe-item>
    </mt-swipe>
    <!-- 3.导航 -->
    <mt-navbar v-model="selected" class="navbar">
      <mt-tab-item id="1" v-for="(item, idx) in navList" :key="idx">
        <img :src="item.imgUrl" :alt="item.navItem">
        <p>{{ item.navItem }}</p>
      </mt-tab-item>
    </mt-navbar>
    <!-- 4.特惠抢购 -->
    <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
      <div class="mui-scroll">
        <a class="mui-control-item mui-active">
          推荐
        </a>
        <a class="mui-control-item">
          热点
        </a>
        <a class="mui-control-item">
          北京
        </a>
        <a class="mui-control-item">
          社会
        </a>
        <a class="mui-control-item">
          娱乐
        </a>
        <a class="mui-control-item">
          科技
        </a>
         <a class="mui-control-item">
          娱乐
        </a>
        <a class="mui-control-item">
          科技
        </a>
         <a class="mui-control-item">
          娱乐
        </a>
        <a class="mui-control-item">
          科技
        </a>
      </div>
    </div>
    <evTabbar></evTabbar>
  </main>
</template>
<script>
export default {

  name: 'Index',

  data() {
    // 编写静态页面时，数据库返回的文件数据可先存放到public目录中
    // 对于页面组成的文件，可放到src/assets目录下
    return {
      banList: [
        { id: 1, title: "banner1", imgUrl: "/img/banner/banner1.jpg" },
        { id: 2, title: "banner2", imgUrl: "/img/banner/banner2.jpg" },
        { id: 3, title: "banner3", imgUrl: "/img/banner/banner3.jpg" }
      ],
      navList: [
        { id: 1, navItem: "附近", imgUrl: "/img/icon/menu1.png", navPath: "/" },
        { id: 2, navItem: "狗狗", imgUrl: "/img/icon/menu2.png", navPath: "/" },
        { id: 3, navItem: "猫猫", imgUrl: "/img/icon/menu3.png", navPath: "/" },
        { id: 4, navItem: "小宠", imgUrl: "/img/icon/menu4.png", navPath: "/" },
        { id: 5, navItem: "商城", imgUrl: "/img/icon/menu5.png", navPath: "/" }
      ]

    }
  }
}

</script>
<style lang="less" scoped>
// 轮播
.banner {
  height: 200px;

  img {
  	width:100%;
    height: 100%;
  }
}

// 导航
.navbar {
  img {
    height: 35px;
  }
}

</style>
