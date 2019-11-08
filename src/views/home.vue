<!--
 * @Author: renlei
 * @Date: 2019-11-06 11:48:32
 * @LastEditors: renlei
 * @LastEditTime: 2019-11-07 12:44:39
 * @Description: 首页组件
 -->
<template>
  <div class="div1">{{name}}</div>
</template>
<script>
import "../assets/sass/style.scss";
export default {
  name: "home",
  data() {
    return {
      name: "任雷雷"
    };
  },
  created() { },
  mounted() {
    console.log(`我的名字${this.name}`)
  },
  methods: {},
  components: {},
  computed: {},
}

</script>
<style  scoped lang="scss">

.div1 {
  width: 200px;
  height: 200px;
  border: 10px solid red;
  font-size: 20px;
  font-weight: bold;
}
</style>