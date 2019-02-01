<template>
    <div>
    <!--  <div class="Member-nav">
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
      </div> -->
       <ul class="job_ul" v-for="item in UserMsgVuex" :key="item.index">
         <li class="job_li border-bottom" >
           <div class="job_left" :class="{ color_error: SecondMsg.InsuredActive}">
             <i class="Requiredcolor">*</i>原参保地
           </div>
           <div class="job_right">
              <!-- <input type="text" v-model.trim="SecondMsg.Insured"/> -->
              <input type="text" v-model.trim="item.YSB_LOCATION"/>
           </div>
         </li>
         <li class="job_li border-bottom">
           <div class="job_left" :class="{ color_error: SecondMsg.WageActive}">
             <i class="Requiredcolor">*</i>原发薪周期
           </div>
           <div class="job_right" @click="User_Selectsk">
              <!-- {{SecondMsg.Wage}} -->
              {{item.PAY_PRDdes}}
           </div>
         </li>
         <li class="job_li border-bottom">
           <div class="job_left">
             预计停保时间
           </div>
           <div class="job_right"  @click="setDate">
              {{SecondMsg.Time}}
              <!-- {{item.YJTB_DT}} -->
              <span class="iconfont job_time">&#xe644;</span>
           </div>
         </li>
         <li class="job_li border-bottom">
           <div class="job_left" :class="{ color_error: SecondMsg.BankIDActive}">
             <i class="Requiredcolor">*</i>银行分行ID
           </div>
           <div class="job_right" @click="ToSearch">
               <!-- {{SecondMsg.BankID}} -->
               {{bankdescr}}
              <!-- <input type="text" v-model="SecondMsg.BankID" /> -->
           </div>
         </li>
         <li class="job_li border-bottom">
           <div class="job_left" :class="{ color_error: SecondMsg.AccountActive}">
             <i class="Requiredcolor">*</i>账号
           </div>
           <div class="job_right">
             <!--  <input type="number"
               v-model.trim="SecondMsg.Account"
               onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))'
               onkeyup="this.value = this.value.replace(/[^\d]/g, '')"/> -->
                <input type="number"
               v-model.trim="item.ACCOUNT_EC_ID"
               onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))'
               onkeyup="this.value = this.value.replace(/[^\d]/g, '')"/>
           </div>
         </li>
         <li class="job_li border-bottom">
           <div class="job_left" :class="{ color_error: SecondMsg.AddressActive}">
            <i class="Requiredcolor">*</i>开户地址
           </div>
           <div class="job_right" @click="showAddressPicker">
              {{item.address}}
           </div>
         </li>
       </ul>
       <div class="secondmenubtn">
         <mt-button type="primary" class="subbtn" size="large" @click="DataSubmit">保存</mt-button>
       </div>
      <!--发薪周期-->
      <mt-popup
          v-model="PayrollVisible"
          position="bottom"
          popup-transition="popup-fade">
            <mt-picker :slots="slots" @change="onValuesChange" value-key="name"  class="levelselect" showToolbar>
                 <div class="picker-toolbar-title">
                     <div class="usi-btn-cancel" @click="User_Selectsk">
                        取消
                     </div>
                     <div>
                     </div>
                     <div class="usi-btn-sure" @click="User_SelectSure">
                       确定
                     </div>
                  </div>
           </mt-picker>
        </mt-popup>
      <!--地区选择-->
      <mt-popup
          v-model="AddressplaceShow"
          position="bottom"
          popup-transition="popup-fade">
          <mt-picker
            class="levelselect"
            :slots="AddressSlots"
            valueKey="value"
            :visibleItemCount ="5"
            @change="AddressChange"
            :itemHeight="40"
            showToolbar>
            <div class="picker-toolbar-title">
               <div class="usi-btn-cancel" @click="showAddressPicker">
                  取消
               </div>
               <div>
               </div>
               <div class="usi-btn-sure" @click="AddressPickerSure">
                 确定
               </div>
            </div>
          </mt-picker>
      </mt-popup>
    </div>
</template>

<script type="text/javascript">
import { mapState } from 'vuex'
import Vue from 'vue'
import {MessageBox} from 'mint-ui'
import ValueList from '@/assets/js/valuelist'
import AwesomePicker from 'vue-awesome-picker'
Vue.use(AwesomePicker)

export default {
  name: 'SecondMenu',
  data () {
    return {
      MemberTitle: {
        back: '返回',
        title: '二次信息采集',
        refer: '提交'
      },
      SecondMsg: {
        Insured: '',
        InsuredActive: false,
        Wage: '',
        Wage_set: '',
        WageActive: false,
        WageCode: '',
        WageCode_set: '',
        BankID: this.$store.state.bank.BackId.branch_descr,
        BankIDActive: false,
        Account: '',
        AccountActive: false,
        Time: '请选择时间',
        Address: '请选择地区',
        Address_set: '',
        AddressActive: false,
        AddressArr: '',
        AddressArr_set: ['110000', '110000']
      },
      AreaList: this.$store.state.CityList,
      PayrollVisible: false,
      slots: [
        {
          flex: 1,
          values: ValueList.PayList,
          textAlign: 'center'
        }
      ],
      AddressplaceShow: false,
      AddressSlots: [
        {
          flex: 1,
          values: this.getProvinceArr(this.$store.state.CityList), // 省份数组
          textAlign: 'center'
        },
        {
          divider: true,
          content: ''
        },
        {
          flex: 1,
          values: this.getCityArr(this.$store.state.CityList, '北京'),
          textAlign: 'center'
        }
      ]
    }
  },
  methods: {
    setDate () {
      this.$picker.show({
        type: 'datePicker',
        endTime: '2280-02-11',
        startTime: '1900-01-01',
        onOk: (date) => {
          this.SecondMsg.Time = date
        }
      })
    },
    User_Selectsk () {
      this.PayrollVisible = !this.PayrollVisible
    },
    User_SelectSure () {
      console.log(this.SecondMsg.Wage_set)
      if (this.SecondMsg.Wage_set === '' || this.SecondMsg.Wage_set === '当月发当月') {
        this.SecondMsg.Wage_set = this.slots[0].values[0].name
        this.SecondMsg.WageCode_set = this.slots[0].values[0].code
      }
      this.SecondMsg.Wage = this.SecondMsg.Wage_set
      this.SecondMsg.WageCode = this.SecondMsg.WageCode_set
      this.PayrollVisible = !this.PayrollVisible
      console.log('原单位发薪周期' + this.SecondMsg.WageCode_set)
      this.UserMsgVuex[0].PAY_PRDdes = this.SecondMsg.Wage_set
    },
    onValuesChange (picker, values) {
      this.SecondMsg.Wage_set = values[0].name
      this.SecondMsg.WageCode_set = values[0].code
    },
    // 遍历json，返回省级对象数组
    getProvinceArr (city) {
      let provinceArr = []
      // console.log(city)
      city.forEach(function (item) {
        let obj = {}
        obj.value = item.value
        obj.id = item.id
        provinceArr.push(obj)
      })
      return provinceArr
    },
    // 遍历json，返回市级对象数组
    getCityArr (list, province) {
      // console.log('省:' + province)
      let cityArr = []
      list.forEach(function (item) {
        if (item.value === province) {
          item.cityList.forEach(function (args) {
            let obj = {}
            obj.value = args.value
            obj.id = args.id
            cityArr.push(obj)
          })
        }
      })
      // console.log(cityArr)
      return cityArr
    },
    getCountyArr (list, province, city) {
      let countyArr = []
      // console.log(province)
      // console.log(city)
      list.forEach(function (item) {
        if (item.value === province) {
          item.cityList.forEach(function (args) {
            if (args.value === city) {
              // console.log('三级数据' + city)
              args.areaList.forEach(function (param) {
                let obj = {}
                obj.value = param.value
                obj.id = param.id
                countyArr.push(obj)
              })
            }
          })
        }
      })
      // console.log(countyArr)
      return countyArr
    },
    showAddressPicker () {
      this.AddressplaceShow = !this.AddressplaceShow
    },
    // 点击 确定
    AddressPickerSure () {
      this.AddressplaceShow = !this.AddressplaceShow
      if (this.SecondMsg.Address_set === '') {
        this.SecondMsg.Address_set = '北京北京'
        this.SecondMsg.AddressArr_set = ['110000', '110000']
      }
      this.SecondMsg.Address = this.SecondMsg.Address_set
      this.SecondMsg.AddressArr = this.SecondMsg.AddressArr_set
      console.log('城市数组' + this.SecondMsg.AddressArr)
      this.UserMsgVuex[0].address = this.SecondMsg.Address
    },
    // 改变地区
    AddressChange (picker, values) {
      // console.table(values)
      this.SecondMsg.Address_set = values[0]['value'] + values[1]['value']
      console.log(this.SecondMsg.Address_set)
      this.SecondMsg.AddressArr_set[0] = values[0]['id']
      this.SecondMsg.AddressArr_set[1] = values[1]['id']
      picker.setSlotValues(1, this.getCityArr(this.AreaList, values[0]['value']))
    },
    ToSearch () {
      console.log('进入搜索')
      this.$router.push({
        path: `/banksearch`
      })
    },
    // 提交数据
    DataSubmit () {
      // alert('提交数据')
      let BankMsg = this.$store.state.bank.BackId.branch_descr
      let BankID = this.$store.state.bank.BackId.branch_cd
      let secondBolean = true
      let SecondMsg = this.SecondMsg
      // 参保地
      if (this.UserMsgVuex[0].YSB_LOCATION === '') {
        SecondMsg.InsuredActive = true
        secondBolean = false
      } else {
        SecondMsg.InsuredActive = false
      }
      // 原发薪周期
      if (SecondMsg.Wage === '') {
        SecondMsg.WageActive = true
        secondBolean = false
      } else {
        SecondMsg.WageActive = false
      }
      // 银行分行ID
      if (BankMsg === '') {
        SecondMsg.BankIDActive = true
        secondBolean = false
      } else {
        SecondMsg.BankIDActive = false
      }
      // 账号
      if (this.UserMsgVuex[0].ACCOUNT_EC_ID === '') {
        SecondMsg.AccountActive = true
        secondBolean = false
      } else {
        SecondMsg.AccountActive = false
      }
      // 开户地址
      if (SecondMsg.Address === '请选择地区') {
        SecondMsg.AddressActive = true
        secondBolean = false
      } else {
        SecondMsg.AddressActive = false
      }
      if (!secondBolean) {
        // alert('报错')
        MessageBox('保存信息有误', '有误信息已经标红,请修改')
      } else {
        // 预计停保时间
        if (SecondMsg.Time === '请选择时间') {
          let SecondJson = {
            PAY_PRD: SecondMsg.WageCode_set,
            PAY_PRDdes: SecondMsg.Wage,
            YSB_LOCATION: this.UserMsgVuex[0].YSB_LOCATION,
            YJTB_DT: '',
            BRANCH_EC_CD: BankID,
            ACCOUNT_EC_ID: this.UserMsgVuex[0].ACCOUNT_EC_ID,
            STATE: SecondMsg.AddressArr[0],
            CITY: SecondMsg.AddressArr[1],
            address: this.SecondMsg.Address,
            Success: true
          }
          console.log(SecondJson)
          this.$store.commit('SecondUserMsgReplace', SecondJson)
          MessageBox('信息正确', '保存成功')
        } else {
          this.UserMsgVuex[0].YJTB_DT = this.SecondMsg.Time
          let SecondJson = {
            PAY_PRD: SecondMsg.WageCode_set,
            PAY_PRDdes: SecondMsg.Wage,
            YSB_LOCATION: this.UserMsgVuex[0].YSB_LOCATION,
            YJTB_DT: this.UserMsgVuex[0].YJTB_DT,
            BRANCH_EC_CD: BankID,
            ACCOUNT_EC_ID: this.UserMsgVuex[0].ACCOUNT_EC_ID,
            STATE: SecondMsg.AddressArr[0],
            CITY: SecondMsg.AddressArr[1],
            address: this.SecondMsg.Address,
            Success: true
          }
          console.log(SecondJson)
          this.$store.commit('SecondUserMsgReplace', SecondJson)
          MessageBox('信息正确', '保存成功')
        }
      }
    }
  },
  computed: {
    ...mapState({
      bankdescr: state => state.bank.BackId.branch_descr,
      UserMsgVuex: state => state.secondUser.UserMsg
    })
  },
  activated () {
    console.log('缓存内容')
    this.SecondMsg.Time = this.UserMsgVuex[0].YJTB_DT
    // this.SecondMsg.Wage = this.UserMsgVuex[0].PAY_PRDdes
    // this.SecondMsg.Wage_set = this.UserMsgVuex[0].PAY_PRDdes
    this.SecondMsg.WageCode = this.UserMsgVuex[0].PAY_PRD
    this.SecondMsg.WageCode_set = this.UserMsgVuex[0].PAY_PRD
    this.SecondMsg.Address = this.UserMsgVuex[0].address
    this.SecondMsg.AddressArr = [this.UserMsgVuex[0].STATE, this.UserMsgVuex[0].CITY]
  }
}
</script>

<style type="text/css" scoped lang="stylus">
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
     overflow: hidden
     white-space: nowrap
     text-overflow: ellipsis
    .job_right>input
      width:100%
     .job_time
      margin-left:.1rem
      font-size:.4rem
.levelselect
  width:$selectWidth
  .picker-toolbar-title
    display:flex
    flex-direction: row
    justify-content: space-around
    height: 40px
    line-height: 40px
    font-size: 16px
.secondmenubtn
  padding-top: .3rem
  padding-bottom: .3rem
  height: 1rem
  display:flex
  align-items: center
  background: #fff
  .subbtn
    box-sizing: border-box
    margin: 0 auto
    width: 90%
    text-align: center
    padding: 0 0.8rem
    text-align: center
</style>
