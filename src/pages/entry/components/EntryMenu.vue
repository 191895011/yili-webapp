<template>
 <div class="Entrymenu-box">
   <ul class="Entrymenu-ul">
     <!--   <li class="Entrymenu-li" v-for="item of EntryList" :key="item.id">
        <router-link :to="{path:'/upload/components/'+item.page,query:{isSuc:isuploadarr}}">
           <div class="Entry-left">
               <div class="Entry-leftbg">
                   <span class="iconfont entry-book">&#xe62b;</span>
               </div>
           </div>
         </router-link>
         <router-link :to="{path:'/upload/components/'+item.page,query:{isSuc:isuploadarr}}">
           <div class="Entry-container">
              <ul>
                <li class="Entry-first">{{item.title}}</li>
                <li v-if="isuploadarr.indexOf(item.id)<0"  class="Entry-Upload">{{item.desc}}</li>
                <li v-if="isuploadarr.indexOf(item.id)>-1" class="Entry-Uploadsuc">{{item.suc}}</li>
             	  <li v-if="isuploadarr.indexOf(item.id)<0"  class="Entry-Upload">{{item.descsec}}</li>
                <li v-if="isuploadarr.indexOf(item.id)>-1" class="Entry-Uploadsuc">{{item.descecsuc}}</li>
              </ul>
            </div>
          </router-link>
           <router-link :to="{path:'/upload/components/'+item.page,query:{isSuc:isuploadarr}}">
             <div class="Entry-right">
                <span class="iconfont entry-go">&#xe601;</span>
              </div>
           </router-link>
       </li> -->
        <li class="Entrymenu-li" v-for="item of Menudatalist" :key="item.FILE_ID">
           <div class="Entry-left" @click="EntryToDetail(item.FILE_ID)">
               <div class="Entry-leftbg">
                   <span class="iconfont entry-book">&#xe62b;</span>
               </div>
           </div>
           <div class="Entry-container" @click="EntryToDetail(item.FILE_ID)">
              <ul>
                <li class="Entry-first">{{item.FILE_DESCR}}</li>
                <li class="Entry-Upload">{{item.FeleSuc}}</li>
                <li class="Entry-Upload">{{item.REQUIREDText}}</li>
              </ul>
            </div>
            <div class="Entry-right" @click="EntryToDetail(item.FILE_ID)">
              <span class="iconfont entry-go">&#xe601;</span>
            </div>
       </li>
   </ul>
 </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  name: 'EntryMenu',
  data () {
    return {
      EntryList: [
        {
          id: '001',
          title: '离职证明',
          desc: '尚未上传',
          suc: '上传成功',
          descsec: '请务必完善',
          descecsuc: '请勿重复上传',
          page: 'quitProve'
        }, {
          id: '002',
          title: '体检报告',
          desc: '尚未上传',
          suc: '上传成功',
          descsec: '若有，请上传',
          descecsuc: '请勿重复上传',
          page: 'medicalReport'
        }, {
          id: '003',
          title: '学历证书',
          desc: '尚未上传',
          suc: '上传成功',
          descsec: '请务必完善',
          descecsuc: '请勿重复上传',
          page: 'diploma'
        }, {
          id: '004',
          title: '身份证复印件',
          desc: '尚未上传',
          suc: '上传成功',
          descsec: '请务必完善',
          descecsuc: '请勿重复上传',
          page: 'IDCard'
        }, {
          id: '005',
          title: '特殊工种证书',
          desc: '尚未上传',
          suc: '上传成功',
          descsec: '若有，请上传',
          descecsuc: '请勿重复上传',
          page: 'specialWork'
        }, {
          id: '006',
          title: '个人照片',
          desc: '尚未上传',
          suc: '上传成功',
          descsec: '请务必完善',
          descecsuc: '请勿重复上传',
          page: 'personPhone'
        }, {
          id: '007',
          title: '银行卡复印件',
          desc: '尚未上传',
          suc: '上传成功',
          descsec: '请务必完善',
          descecsuc: '请勿重复上传',
          page: 'bankCard'
        }
      ],
      isuploadarr: []
    }
  },
  activated () {
    this.changeStatus()
    let msgarr = this.$store.state.entry.entrydatalist
    console.log('附件信息')
    console.log(msgarr)
  },
  methods: {
    changeStatus () {
      if (this.$route.params.isSuc) {
        this.isuploadarr = this.$route.params.isSuc
      }
    },
    EntryToDetail (FileId) {
      this.$router.push({
        path: `/upload/components/IDCard`,
        query: {
          name: FileId
        }
      })
  }
},
computed: {
    ...mapState({
      Menudatalist: state => state.entry.entrydatalist
    })
  }

}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles.styl'
.Entrymenu-ul
 width:100%
 .Entrymenu-li
  width:99%
  float:right
  margin-top:.1rem
  height:$darkHeight
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.349019607843137)
  padding-top:.1rem
  padding-bottom:.1rem
  .Entry-left
    float:left
    width:20%
    height:$darkHeight
    line-height:$darkHeight
    position:relative
    left:1%
    .Entry-leftbg
      width:.9rem
      height:.9rem
      margin: auto
      position:absolute
      top:0
      left:0
      right:0
      bottom:0
      background:#1caafe
      border-radius:50%
      display: flex;
      justify-content: center;
      align-items: center;
      .entry-book
        font-size:0.6rem
        color:#fff
        margin-left:.1rem
  .Entry-container
    width:60%
    height:$darkHeight
    overflow:hidden
    float:left
    .Entry-first
      font-size:18px
      color:#666666
      height:.45rem
      line-height:.5rem
    .Entry-Upload
      font-size:14px
      color:#CC3300
      height:.35rem
      line-height:.4rem
    .Entry-Uploadsuc
      font-size:.26rem
      height:.35rem
      line-height:.35rem
      color:#67c23a
   .Entry-right
     width:15%
     float:left
     height:$darkHeight
     line-height:$darkHeight
     text-align:right
     .entry-go
       color: #999;
       font-size: 0.4rem;
</style>
<style>
.el-progress.is-success .el-progress-bar__inner {
		background: -webkit-linear-gradient(270deg, rgba(255, 153, 0, 1) 0%, rgba(255, 153, 0, 1) 0%, rgba(228, 228, 228, 1) 100%, rgba(228, 228, 228, 1) 100%);
        background: -moz-linear-gradient(180deg, rgba(255, 153, 0, 1) 0%, rgba(255, 153, 0, 1) 0%, rgba(228, 228, 228, 1) 100%, rgba(228, 228, 228, 1) 100%);
        background: -o-linear-gradient(180deg, rgba(255, 153, 0, 1) 0%, rgba(255, 153, 0, 1) 0%, rgba(228, 228, 228, 1) 100%, rgba(228, 228, 228, 1) 100%);
        background: linear-gradient(180deg, rgba(255, 153, 0, 1) 0%, rgba(255, 153, 0, 1) 0%, rgba(228, 228, 228, 1) 100%, rgba(228, 228, 228, 1) 100%);
}
 @media screen and (max-width:321px) {
   .Entrymenu-box .Entrymenu-ul .Entrymenu-li .Entry-container .Entry-first{font-size: 16px;}
   .Entrymenu-box .Entrymenu-ul .Entrymenu-li .Entry-container .Entry-Upload{font-size: 12px;}
   .Entrymenu-box .Entrymenu-ul .Entrymenu-li{height: 1.1rem;margin-top: 0;}
}
</style>
