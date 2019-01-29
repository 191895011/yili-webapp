<template>
 <div>
    <div class="headertop">
     <div class="search_left">
       <input type="text" placeholder="请输入关键字" v-model="SearchVaule"/>
     </div>
     <div class="search_right">
       <mt-button size="small" @click="searchbtn">搜索</mt-button>
     </div>
    </div>
    <ul class="job_ul">
       <li class="job_li border-bottom" v-for="item in Banklist" :key="item.branch_cd" @click="GetItem(item)">
         <p class="nomenumsg">{{item.branch_descr}}</p>
       </li>
    </ul>
    <div class="nomenu" v-show="nomenushow">
      {{nomenuMsg}}
    </div>
 </div>
</template>
<script>
import ValueList from '@/assets/js/valuelist'
import {Indicator} from 'mint-ui'

export default {
  name: 'Bank',
  data () {
    return {
      SearchVaule: '',
      Banklist: [],
      nomenushow: false,
      nomenuMsg: '无匹配数据',
      list: [
        {
          id: '1',
          name: '中国工商银行'
        },
        {
          id: '2',
          name: '中国农业银行'
        },
        {
          id: '3',
          name: '中国招商银行'
        },
        {
          id: '4',
          name: '中国邮政银行'
        },
        {
          id: '5',
          name: '中国建设银行'
        }
      ]
    }
  },
  methods: {
    searchbtn () {
      this.nomenushow = false
      this.Banklist = []
      let uservalue = this.SearchVaule
      let userId = this.$store.state.UserIdArr.hireId
      let that = this
      Indicator.open('加载中...')
      // console.log(uservalue)
      // this.Banklist = []
      // let that = this
      // this.list.forEach(function (item) {
      //   console.log(item.name)
      //   if (item.name.indexOf(uservalue) >= 0) {
      //     console.log('成功')
      //     that.Banklist.push(item)
      //   }
      // })
      // 开始
      this.axios.post(ValueList.HttpArr + '/PSIGW/RESTListeningConnector/PSFT_HR/Magnifier.v1/', {
        TOKEN: 'hrssc.yili.com',
        OPRID: userId,
        SECURITY: 'N',
        DATA_TYPE: 'BANK_CD',
        KEYWORDS: uservalue
      })
        .then(res => {
          console.log(res)
          that.TakeBankData(res)
        })
        .catch(error => {
          console.log(error)
          Indicator.close()
        })
      // 结束
    },
    TakeBankData (res) {
      let state = Number(res.data.status)
      if (state === 0) {
        console.log('返回数据成功')
        let takeData = res.data.jsonData
        if (takeData.length === 0) {
          this.nomenushow = true
          this.nomenuMsg = '无匹配数据'
        } else {
          this.Banklist = takeData
        }
      } else {
        this.nomenushow = true
        this.nomenuMsg = '匹配数据失败'
        console.log('返回数据失败')
      }
      Indicator.close()
    },
    GetItem (item) {
      let obj = {}
      obj.branch_cd = item.branch_cd
      obj.branch_descr = item.branch_descr
      this.$store.commit('BankIdReplace', obj)
      this.$router.push({
        path: `/second`
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.border-bottom
  &:before
    border-color: $bottomcolor
.headertop
  box-sizing: border-box
  background: #26a2ff
  width:100%
  padding: .1rem
  display:flex
  .search_left
   padding: .1rem
   flex:9
  .search_left input
   padding-left:.1rem
   height: .5rem
   width:100%
   border-radius: 5px
  .search_right
   flex:3
   padding-right:.25rem
   text-align:right
.job_ul
  margin-top:.1rem
  box-sizing: border-box
  width: 100%
  .job_li
    padding-left: .2rem
    font-size: .2rem
    .nomenumsg
      line-height: .8rem
.nomenu
 margin-top:.5rem
 width:100%
 text-align:center
 height: 0.9rem
 line-height: 0.9rem
</style>
