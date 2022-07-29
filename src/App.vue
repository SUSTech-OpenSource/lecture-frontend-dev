<template>
  <div id="app">
    <el-row :gutter="20">
      <el-col :span="10"></el-col>
      <h2>欢迎来到Vue学习的世界</h2>
    </el-row>

  </div>
  <router-view></router-view>
  <div id="backlink">
    <router-link to="/">
      <el-link type="default">返回首页</el-link>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style scoped>
#backlink {
  text-align: center;
}

a {
  text-decoration: none;
}

.router-link-active {
  text-decoration: none;
}
</style>
