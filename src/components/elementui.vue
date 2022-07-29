<template>
  按钮
  <el-row>
    <el-col :span="24"><div class="grid-content ep-bg-purple-dark" /></el-col>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
  </el-row>
  <p>选择框</p>
  <el-row>
    <el-checkbox v-model="checked1" label="Option 1" size="large" />
    <el-checkbox v-model="checked2" label="Option 2" size="large" />
  </el-row>
  布局
  <el-row>
    <div class="common-layout">
      <el-container>
        <el-header style="background: aqua">Header</el-header>
        <el-main style="background: blanchedalmond">Main</el-main>
      </el-container>
    </div>
  </el-row>
  链接
  <el-row>
    <el-link type="primary" href="https://element-plus.org">ElementUI官网</el-link>
  </el-row>
</template>

<script>
export default {
  name: "elementui"
}
</script>

<style scoped>

</style>