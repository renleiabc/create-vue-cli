<!--
 * @Author: renlei
 * @Date: 2019-11-07 14:54:15
 * @LastEditors: renlei
 * @LastEditTime: 2019-11-07 15:11:07
 * @Description: 
 -->
<template>
  <div>
    <button @click="btn">点击</button>
    {{isShow}}
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  created() { },
  mounted() { },
  methods: {
    btn() {
      this.$store.commit("increment")
    }
  },
  components: {},
  computed: {
    isShow() {
      return this.$store.getters.isShow;
    }
  },
}

</script>