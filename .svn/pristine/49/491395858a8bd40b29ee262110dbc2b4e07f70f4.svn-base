<template>
 <div class="Member-nav">
   <router-link to="/">
     <div class="Member-back">
        <span class="iconfont ">&#xe602;</span>
        {{MemberTitle.back}}
     </div>
   </router-link>
   <div class="Member-collection">
       <h4 class="Member-msgtitle">{{MemberTitle.title}}</h4>
   </div>
   <div class="Member-refer" @click="DataSubmit">
      <h4 class="Member-submit" >{{MemberTitle.refer}}</h4>
   </div>
 </div>
</template>
<script>
import {MessageBox, Indicator} from 'mint-ui'
import ValueList from '@/assets/js/valuelist'

export default {
  name: 'MemberHeader',
  data () {
    return {
      MemberTitle: {
        back: '返回',
        title: '二次信息采集',
        refer: '提交'
      }
    }
  },
  methods: {
    DataSubmit () {
      let userarr = this.$store.state.secondUser.UserMsg[0] // 二次信息采集
      let userlist = this.$store.state.secondUser.FILEDATA // 二次附件上传
      let userMust = this.$store.state.secondUser.AnnexMust // 二次附件必须上传
      let Progress = this.$store.state.secondUser.ProgressArr
      let UploadBoolean = this.$options.methods.isContained(Progress, userMust)
      let userId = this.$store.state.UserIdArr.hireId
      console.log(userarr)
      if (!userarr.Success) {
        MessageBox('提交失败', '请保存基本信息')
        return
      }
      console.log(userMust)
      console.log(userlist)
      if (!UploadBoolean) {
        MessageBox('提交失败', '请完善上传资料')
        return
      }
      console.log('验证成功')
      let that = this
      Indicator.open('提交中...')
      this.axios.all([that.axios.post(ValueList.HttpArr + '/PSIGW/RESTListeningConnector/PSFT_HR/SaveData.v1/', {
        data: {
          'TOKEN': 'hrssc.yili.com',
          'hireId': userId,
          'type': '2',
          'PAY_PRD': userarr.PAY_PRD,
          'YSB_LOCATION': userarr.YSB_LOCATION,
          'YJTB_DT': userarr.YJTB_DT,
          'BRANCH_EC_CD': userarr.BRANCH_EC_CD,
          'BRANCH_EC_DESCR': userarr.BRANCH_EC_DESCR,
          'ACCOUNT_EC_ID': userarr.ACCOUNT_EC_ID,
          'STATE': userarr.STATE,
          'CITY': userarr.CITY
        }
      }), that.axios.post(ValueList.HttpArr + '/PSIGW/RESTListeningConnector/PSFT_HR/FILEUPLOAD.v1/', {
        data: {
          EOAWPRCS_ID: 'YL_SSC_ENTRY',
          TOKEN: 'hrssc.yili.com',
          TRANSACTION_NBR: userId,
          FILEDATA: userlist
        }})])
        .then(that.axios.spread(function (acct, perms) {
          console.log('返回成功')
          console.log(acct)
          console.log(perms)
          that.SecondKeepSuccess(acct, perms)
          Indicator.close()
        }))
    },
    isContained (aa, bb) {
      if (!(aa instanceof Array) || !(bb instanceof Array) || (aa.length < bb.length)) {
        return false
      }
      var aaStr = aa.toString()
      console.log(aaStr)
      for (var i = 0; i < bb.length; i++) {
        if (aaStr.indexOf(bb[i]) < 0) return false
      }
      return true
    },
    SecondKeepSuccess (msgdata, phtdata) {
      let msgstate = Number(msgdata.data.status)
      console.log(msgstate)
      let phtstate = Number(msgdata.data.status)
      if (msgstate === 0 && phtstate === 0) {
        MessageBox('操作成功', '提交数据成功')
        this.$router.push({
          path: `/`,
          query: {
            Idname: 'secondSuccess'
          }
        })
      } else {
        MessageBox('操作失败', '提交数据失败')
        console.log('提交数据失败')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
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
  .Member-refer
      box-sizing: border-box
      float:left
      width:20%
      height:$darkHeight
      line-height:$darkHeight
    .Member-submit
      font-weight:400
      font-size:.4rem
      color:#CC3300
      text-align:center
.Stuff-Id
  box-sizing:box-sizing
  padding-left:.4rem
  padding-right:.4rem
  .stuff-idht
    height:.4rem
    line-height:.4rem
</style>
