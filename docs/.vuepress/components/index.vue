<template>
   <el-button>{{msg}}</el-button>
</template>

<script>
export default {
 name:'myHello',
 props:{
     msg:{
         default:"button",
         type:String
     }
 },
 data () {
  return {
  }
 }
}
</script>