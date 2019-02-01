<template>
    <div class="Basic_Menutop">
      <ul class="Basic_ul">
          <li  v-for="item of BasicList" :key="item.id">
              <div class="Basic-top" @click="BasicSetShow" :cid="item.id">
                  <div class="Basic-topbg">
                  </div>
                  <div class="Basic-title border-bottom">
                  <span class="Basicmsg" >{{item.title}}</span>
                </div>
              </div>
              <div :is="item.children" v-show="item.comshow"></div>
          </li>
          <li  v-for="item of SecondList" :key="item.FILE_ID">
                <div class="Basic-top" @click="BasicToPht(item.FILE_ID)">
                    <div class="Basic-topbg">
                    </div>
                    <div class="Basic-title border-bottom">
                    <span class="Basicmsg"   :cid="item.FILE_ID">{{item.FILE_DESCR}}</span>
                    <small class="BasicTitle"> ({{item.FeleSuc}}，{{item.REQUIREDText}})</small>
                  </div>
                </div>
          </li>
      </ul>
    </div>
</template>

<script type="text/javascript">
import { mapState } from 'vuex'
import secondmenu from './secondmenu'
import upload from './upload'

export default {
  name: 'BascicMenu',
  data () {
    return {
      BasicList: [
        {
          id: '001',
          title: '基本信息',
          children: 'secondmenu',
          comshow: true
        }
      ]
    }
  },
  components: {
    secondmenu,
    upload
  },
  methods: {
    BasicSetShow (event) {
      let el = event.currentTarget
      let cids = el.getAttribute('cid')
      if (cids === '001') {
        this.BasicList[0].comshow = !this.BasicList[0].comshow
      } else {
        this.$router.push({
          path: `/secondupload`
        })
      }
    },
    BasicToPht (FileId) {
      this.$router.push({
        path: `/secondupload`,
        query: {
          name: FileId
        }
      })
    }
  },
  computed: {
    ...mapState({
      SecondList: state => state.secondUser.ListMenu
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.border-bottom
  &:before
    border-color: $bottomcolor
.Basic-top
  box-sizing: border-box
  display:flex
  width:100%
  padding-left:.15rem
  .Basic-topbg
   width:.2rem
   height:.5rem
   margin-top:.2rem
   background:rgba(28, 170, 254, 1)
  .Basic-title
    display:flex
    flex:1
    padding-left:.2rem
    height:1rem
    line-height:1rem
    text-align:left
    font-size:.35rem
    .BasicTitle
     font-size:.25rem
    .Basic-Up
      margin-top:-0.2rem
      .Basicfont
       font-size:.5rem
       color:rgba(28, 170, 254, 1)
      .Basicfontdown
       font-size:.5rem
       color:rgba(28, 170, 254, 1)
</style>
