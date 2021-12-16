<template>
    <div>
        <el-button type="success" @click="tiaozhuan">成功</el-button>
    </div>
</template>
<script>
import * as  req from "../../api/index"
export default {
  name:"login",
  methods:{
       tiaozhuan(){
          this.$router.push({path:"/"})
        req.getdata().then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
        
      }
  }
}
</script>
