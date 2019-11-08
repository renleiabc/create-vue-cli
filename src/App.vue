<!--
 * @Author: renlei
 * @Date: 2019-11-07 14:43:42
 * @LastEditors: renlei
 * @LastEditTime: 2019-11-07 14:44:38
 * @Description: 主文件
 -->
<template>
  <div>
     <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  created(){},
  mounted(){},
  methods: {},
  components: {},
  computed: {},
}

</script>