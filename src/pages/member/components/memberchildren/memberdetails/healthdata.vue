<template>
    <div>
        <div class="Member-nav">
         <router-link to="/member">
           <div class="Member-back">
              <span class="iconfont ">&#xe602;</span>
              {{MemberTitle.back}}
           </div>
         </router-link>
         <div class="Member-collection">
             <h4 class="Member-msgtitle">{{MemberTitle.title}}</h4>
         </div>
         <div class="member-rightdel">
            <el-button type="primary" icon="el-icon-delete" circle  @click="health_remove"></el-button>
         </div>
       </div>
       <ul class="job_ul">
         <li class="job_li border-bottom">
           <div class="job_left" :class="{ color_error: proof.starttimeActive}">
             发证日期
           </div>
           <div class="job_right"  @click="setDate">
              {{proof.starttime}}
              <span class="iconfont job_time">&#xe644;</span>
           </div>
         </li>
         <li class="job_li border-bottom">
           <div class="job_left" :class="{ color_error: proof.endtimeActive}">
             过期日期
           </div>
           <div class="job_right" @click="setDate2">
               {{proof.endtime}}
               <span class="iconfont job_time">&#xe644;</span>
           </div>
         </li>
         <li class="job_li border-bottom">
           <div class="job_left" :class="{ color_error: proof.unitActive}">
             发证单位
           </div>
           <div class="job_right">
               <input type="text" v-model.trim="proof.unit" @blur="RiseTop" placeholder="请在此输入" />
           </div>
         </li>
       </ul>
       <p class="job_title">备注</p>
       <textarea class="job_memark" placeholder="请在此处输入" @blur="RiseTop" v-model.trim="proof.mark"></textarea>
       <div class="keepdiv">
       </div>
       <div class="job_keep"  >
          <mt-button type="primary" size="normal" class="job_btn" @click="health_keep">保存</mt-button>
       <!--    <mt-button type="danger" size="normal"  class="job_btn job_delete" @click="health_remove">删除</mt-button> -->
       </div>
</div>
</template>

<script type="text/javascript">
import { MessageBox } from 'mint-ui'

export default {
  name: 'healthdata',
  data () {
    return {
      MemberTitle: {
        back: '返回',
        title: '健康信息'
      },
      proof: {
        starttime: '请选择时间',
        starttimeActive: false,
        endtime: '请选择时间',
        endtimeActive: false,
        unit: '',
        unitActive: false,
        mark: ''
      },
      isOriginHei: true,
      screenHeight: document.documentElement.clientHeight,
      originHeight: document.documentElement.clientHeight
    }
  },
  methods: {
    RiseTop () {
      console.log('失去焦点')
      window.scrollTo(0, 0)
    },
    setDate () {
      this.$picker.show({
        type: 'datePicker',
        endTime: '2280-02-11',
        startTime: '1900-01-01',
        onOk: (date) => {
          this.proof.starttime = date
        }
      })
    },
    setDate2 () {
      this.$picker.show({
        type: 'datePicker',
        endTime: '2280-02-11',
        startTime: '1900-01-01',
        onOk: (e) => {
          this.proof.endtime = e
        }
      })
    },
    health_keep () {
      // const ID = this.$route.query.name
      // const proof = this.proof
      // if (ID === undefined) {
      //   let listlength = this.$store.state.health.HealthList.length + 1
      //   let addmsg = {
      //     id: listlength,
      //     starttime: proof.starttime,
      //     endtime: proof.endtime,
      //     unit: proof.unit,
      //     marker: proof.mark
      //   }
      //   this.$store.commit('HealthAddMsg', addmsg)
      //   this.$router.push({
      //     path: `/member`
      //   })
      // } else {
      //   let writemsg = {
      //     id: ID,
      //     starttime: proof.starttime,
      //     endtime: proof.endtime,
      //     unit: proof.unit,
      //     marker: proof.mark
      //   }
      //   this.$store.commit('HealthWriteMsg', writemsg)
      //   this.$router.push({
      //     path: `/member`
      //   })
      // }
      // MessageBox('信息正确', '信息保存成功')
      let healthSelect = true
      const proof = this.proof
      const ID = this.$route.query.name
      if (proof.starttime === '请选择时间') {
        proof.starttimeActive = true
        healthSelect = false
      } else if (proof.starttime !== '') {
        proof.starttimeActive = false
      }
      if (proof.endtime === '请选择时间') {
        proof.endtimeActive = true
        healthSelect = false
      } else if (proof.endtime !== '') {
        proof.endtimeActive = false
      }
      if (proof.starttime > proof.endtime) {
        proof.starttimeActive = true
        proof.endtimeActive = true
        healthSelect = false
      } else if (proof.starttime !== '请选择时间' && proof.endtime !== '请选择时间') {
        proof.starttimeActive = false
        proof.endtimeActive = false
      }
      if (proof.unit === '') {
        proof.unitActive = true
        healthSelect = false
      } else {
        proof.unitActive = false
      }
      if (healthSelect) {
        if (ID === undefined) {
          let listlength = this.$store.state.health.HealthList.length + 1
          let addmsg = {
            id: listlength,
            starttime: proof.starttime,
            endtime: proof.endtime,
            unit: proof.unit,
            marker: proof.mark
          }
          this.$store.commit('HealthAddMsg', addmsg)
          this.$router.push({
            path: `/member`
          })
        } else {
          let writemsg = {
            id: ID,
            starttime: proof.starttime,
            endtime: proof.endtime,
            unit: proof.unit,
            marker: proof.mark
          }
          console.log(writemsg)
          this.$store.commit('HealthWriteMsg', writemsg)
          this.$router.push({
            path: `/member`
          })
        }
        MessageBox('信息正确', '信息保存成功')
      } else {
        MessageBox('提交信息有误', '有误信息已经标红,请修改')
      }
    },
    health_remove () {
      const ID = this.$route.query.name
      if (ID === undefined) {
        this.$router.push({
          path: `/member`
        })
        MessageBox('信息删除', '信息删除成功')
      } else {
        this.$store.commit('HealthRemoveMsg', ID)
        this.$router.push({
          path: `/member`
        })
        MessageBox('信息删除', '信息删除成功')
      }
    }
  },
  mounted () {
    let self = this
    console.log(this.$store.state.CityList)
    window.onresize = function () {
      return (function () {
        self.screenHeight = document.documentElement.clientHeight
      })()
    }
  },
  watch: {
    screenHeight (val) {
      if (this.originHeight > val) {
        this.isOriginHei = false
      } else {
        this.isOriginHei = true
      }
    }
  },
  activated () {
    // let msgarr = this.$store.state.usermsglist.msgdatalist[0].HomeTownPlaceArr
    // console.log('籍贯' + msgarr)
    // let msgs = this.$store.state.usermsglist.msgdatalist[0].BirthplaceArr
    // console.log('出生' + msgs)
    // let accmsgs = this.$store.state.usermsglist.msgdatalist[0].AccountplaceArr
    // console.log('户籍' + accmsgs)
    // let familymsgs = this.$store.state.usermsglist.msgdatalist[0].FamilyPlaceArr
    // console.log('家庭' + familymsgs)
    // let mowmsgs = this.$store.state.usermsglist.msgdatalist[0].NowPlaceArr
    // console.log('现在' + mowmsgs)
    // let msg = this.$store.state.usermsglist.msgdatalist[0].Name
    // console.log('独生' + msg)
    // let education = this.$store.state.Teachbg.TeachbgdataList[0].educationcode_set
    // console.log('学历类型' + education)
    // let lang = this.$store.state.language.languagedatalist[0].languagecode_set
    // console.log('语言' + lang)
    // console.log(this.$store.state.CityList)
    const ID = this.$route.query.name
    if (ID === undefined) {
      this.proof.starttime = '请选择时间'
      this.proof.starttimeActive = false
      this.proof.endtime = '请选择时间'
      this.proof.endtimeActive = false
      this.proof.unit = ''
      this.proof.unitActive = false
      this.proof.mark = ''
    } else {
      let data = this
      let list = this.$store.state.health.HealthList
      console.log('不是新的健康信息')
      list.forEach(function (item) {
        console.log(item)
        if (item.id === ID) {
          data.proof.starttime = item.starttime
          data.proof.starttimeActive = false
          data.proof.endtime = item.endtime
          data.proof.endtimeActive = false
          data.proof.unit = item.unit
          data.proof.unitActive = false
          data.proof.mark = item.marker
        }
      })
    }
  }
}
</script>

<style type="text/css" lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.border-bottom
  &:before
    border-color: $bottomcolor
.Member-nav
  width:100%
  height:$darkHeight
  tex-align:center
  .Member-back
    box-sizing: border-box
    float:left
    width:20%
    height:$darkHeight
    line-height:$darkHeight
    padding-left:.4rem
    font-size:.3rem
    color:#333
    overflow:hidden
  .Member-collection
    box-sizing: border-box
    float:left
    width:60%
    height:$darkHeight
    line-height:$darkHeight
    .Member-msgtitle
      font-weight:bold
      font-size:.4rem
      color:#666
      text-align:center
  .member-rightdel
    box-sizing:border-box
    float:right
    width:20%
    height:1.2rem
    line-height:1.2rem
    text-align:right
    padding-right:.2rem
.job_ul
  margin-top:.1rem
  box-sizing: border-box
  width: 100%
  padding-left: 0.2rem
  .job_li
    height: 0.9rem
    line-height: 0.9rem
    font-size: 0.27rem
    display: flex
    .job_left
     flex:5
     font-size:.3rem
    .job_right
     flex:7
     font-size:.3rem
    .job_right>input
      width:100%
     .job_time
      margin-left:.1rem
      font-size:.4rem
.keepdiv
 height:5.5rem
.job_keep
 height:1rem
 display:flex
 justify-content:space-around
 align-items:center
 background:#fff
 .job_btn
   box-sizing:border-box
   width:80%
   text-align:center
   padding: 0 0.8rem
   text-align:center
.levelselect
  width:$selectWidth
  .picker-toolbar-title
    display:flex
    flex-direction: row
    justify-content: space-around
    height: 40px
    line-height: 40px
    font-size: 16px
.job_title
 box-sizing: border-box
 margin-top:.2rem
 padding-left: 0.2rem
.job_memark
  box-sizing: border-box
  margin-top:.2rem
  padding-left: 0.2rem
  width: 100%
  height:1.5rem
  color: #999
  background:#fff
</style>
