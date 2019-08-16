<template>
   <el-button @click="clickFn">{{msg}}</el-button>
</template>

<script>
// 组件的描述
export default {
 name:'myHello12',
 props:{
     // props的描述
     msg:{
         default:"button",
         type:String
     }
 },
 methods:{
    // @vuese
    // 方法的描述
    clear () {
      // event的描述
      // @arg event参数的描述
      this.$emit('onclear', true)
    }
 }
}
</script>