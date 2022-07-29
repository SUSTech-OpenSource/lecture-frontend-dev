<template>
  按钮样式
  <el-row>
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <el-button>中文</el-button>
  </el-row>
  学习如何绑定一个按钮
  <el-row>
    <el-button type="primary" @click="showPopUp">点击后弹框</el-button>
  </el-row>
  <h4>学习动态页面*</h4>
  有些组件可以实时设置他的属性，比如说按钮可以实时设置可用与否。
  <el-row>
    <el-button type="primary" @click="disableIt" :disabled="disableButton">点我后我就会不能使用</el-button>
    <el-button type="primary" @click="backUse">点我来让他恢复</el-button>
  </el-row>
  当然你也可以更改更加复杂的内容，比如说表格
  <el-row>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
  <el-button type="primary" @click="addData">点我随机添加一行数据</el-button>
  </el-row>
  并且你可以在代码中编写循环来自动生成一些数据
  <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
</template>

<script>
export default {
  name: "button",
  data(){
    return{
      disableButton : false,
      tableData : [],
    }
  },
  methods:{
    showPopUp(){
      alert('Hi this is a pop up window')
    },
    disableIt(){
      this.disableButton = true;
    },
    backUse(){
      this.disableButton = false;
    },
    addData(){
      const data = [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-05-04',
          name: 'Alice',
          address: 'Hello!',
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        },
      ]
      this.tableData.push(data[Math.round(Math.random()*3)])
    }
  }
}

</script>

<style scoped>

</style>