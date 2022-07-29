<template>
  <el-row :gutter="20">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Vue语言中的生命周期</span>
        </div>
      </template>
      <img src="../assets/lifecycle.16e4c08e.png" style="width: 60%">
    </el-card>
  </el-row>
  <h1>接下来我们看看例子</h1>
  我们在beforeCreate挂载了一个数据，检查一下他现在是不是还是一开始的值了？
  <el-row :gutter="20">
    <el-table :data="beforeCreate" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
  </el-row>
  接下来这个采用了在beforeMount上的
  <el-row :gutter="20">
    <el-table :data="beforeMount" style="width: 100%">
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
  </el-row>
  接下来我们试试beforeUpdate上的情况
  <el-row :gutter="20">
    <p  ref="pRef">{{  beforeUpdate  }}</p>
  </el-row>
  <el-row :gutter="20">
    <button @click="beforeUpdate++;this.$forceUpdate();">点击+1</button>
  </el-row>
  接下来，当你离开网页的时候，会给你弹窗
  <el-row :gutter="20">
    <h3>哦，这里没有什么数据可以显示捏！我建议你可以试着学习官方文档来进一步理解这个内容。</h3>
  </el-row>
  <el-link type="warning" style="font-size: 30px" href="https://v3.cn.vuejs.org/api/options-lifecycle-hooks.html">官方文档</el-link>
</template>

<script>

export default {
  name: "life",
  data(){
    return{
      beforeCreate : [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        }
      ],
      beforeMount : [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        }
      ],
      beforeUpdate:0
    }
  },
  beforeCreate() {
    this.beforeCreate = [
      { date: '2016-05-03',
        name: 'Create',
        address: 'No. 189, Grove St, Los Angeles',
      }
    ]
  },
  beforeMount() {
    this.beforeMount = [
      { date: '2016-05-03',
        name: 'Mount',
        address: 'No. 189, Grove St, Los Angeles',
      }
    ]
  },
  beforeUpdate() {
    this.beforeMount.push({
      date: '2016-05-03',
      name: 'update',
      address: '哦，新增的数据？',
    })
    alert('看看数据')
  },
  beforeUnmount() {
    alert("你要走了吗？QAQ")
  },

}
</script>

<style scoped>

</style>