<template>

  <el-row :gutter="20">
    我们将通过以下实例化的页面来带领大家学习vue和使用elementUI的组件，不要害怕，随便点一个你喜欢的康康吧！
  </el-row>
  <el-row :gutter="20">
    <el-col :span="8">
      <div class="grid-content ep-bg-purple">
        <router-link to="/elementui">
          <el-link type="default">elementUI基础组件</el-link>
        </router-link>
      </div>
    </el-col>
    <el-col :span="8">
      <div class="grid-content ep-bg-purple">
        <router-link to="/button">
          <el-link type="default">按钮，绑定，动态页面</el-link>
        </router-link>
      </div>
    </el-col>
    <el-col :span="8">
    <div class="grid-content ep-bg-purple">
      <router-link to="/life">
        <el-link type="default">生命周期</el-link>
      </router-link>
    </div>
  </el-col>
  </el-row>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
.el-row {

  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  background: aliceblue;
  border-radius: 4px;
  min-height: 36px;
}
a {
  text-decoration: none;
}
.el-link {
  font-size: 20px;
  margin-right: 20px;
}
.router-link-active {
  text-decoration: none;
}
</style>