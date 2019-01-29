import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// 这里定义初始值
let state = {
  count: 0,
  ContainerName: '中国',
  usersex: '',
  userone: '',
  keepmsg: false,
  TYPEA: '',
  CityList: [],
  UserShowNow: true,
  UserPhtShow: true,
  SecondInfoShow: true,
  UserIdArr: []
}

const mutations = {
  add (context) {
    context.count++
  },
  decrease (context) {
    context.count--
  },
  increment (context, name) {
    context.ContainerName = name
  },
  wrtsex (context, sex) {
    context.usersex = sex
  },
  wrtuserone (context, one) {
    context.userone = one
  },
  wrtkeepmsg (context, msg) {
    context.keepmsg = msg
  },
  TYPEAkeep (context, msg) {
    context.TYPEA = msg
  },
  Citykeep (context, msg) {
    context.CityList = msg
  },
  ChangePersonalShow (context, msg) {
    context.UserShowNow = msg
  },
  ChangePersonalPhtShow (context, msg) {
    context.UserPhtShow = msg
  },
  UserIdArrReplace (context, msg) {
    context.UserIdArr = msg
  },
  UserIdOneInfoShow (context) {
    context.UserShowNow = true
    context.UserPhtShow = true
    context.SecondInfoShow = false
  },
  UserIdSecondInfoShow (context) {
    context.UserShowNow = false
    context.UserPhtShow = false
    context.SecondInfoShow = true
  }
}

// 事件触发后的逻辑操作
// 参数为事件函数
const actions = {
  add (add) {
    add.commit('add')
  },
  decrease (decrease) {
    decrease.commit('decrease')
  },
  oddAdd ({commit, state}) {
    if (state.count % 2 === 0) {
      commit('add')
    }
  }
}

// 返回改变后的数值
const getters = {
  count (context) {
    return context.count
  },
  getOdd (context) {
    return context.count % 2 === 0 ? '偶数' : '奇数'
  }
}

const moduleA = {
  state: {
    HealthList: []
  },
  mutations: {
    HealthAddMsg (context, msg) {
      context.HealthList.push(msg)
    },
    HealthReplaceMsg (context, msg) {
      context.HealthList = msg
    },
    HealthRemoveMsg (context, id) {
      for (let i = 0; i < context.HealthList.length; i++) {
        if (id === context.HealthList[i].id) {
          context.HealthList.splice(i, 1)
        }
      }
      for (let k = 0; k < context.HealthList.length; k++) {
        context.HealthList[k].id = k + 1
      }
    },
    HealthWriteMsg (context, msg) {
      context.HealthList.forEach(function (item, index) {
        if (msg.id === item.id) {
          item.starttime = msg.starttime
          item.endtime = msg.endtime
          item.unit = msg.unit
          item.marker = msg.marker
        }
      })
    }
  }
}

const moduleB = {
  state: {
    FamilyList: []
  },
  mutations: {
    FamilyAddMsg (context, msg) {
      context.FamilyList.push(msg)
    },
    FamilyReplaceMsg (context, msg) {
      context.FamilyList = msg
    },
    FamilyRemoveMsg (context, id) {
      for (let i = 0; i < context.FamilyList.length; i++) {
        if (id === context.FamilyList[i].id) {
          context.FamilyList.splice(i, 1)
        }
      }
      for (let k = 0; k < context.FamilyList.length; k++) {
        context.FamilyList[k].id = k + 1
      }
    },
    FamilyWriteMsg (context, msg) {
      context.FamilyList.forEach(function (item, index) {
        if (msg.id === item.id) {
          item.relation = msg.relation
          item.name = msg.name
          item.sex = msg.sex
          item.BirthdayDate = msg.BirthdayDate
          item.ContactPhone = msg.ContactPhone
          item.unit = msg.unit
          item.Identity = msg.Identity
          item.address = msg.address
          item.inaddress = msg.inaddress
          item.urgent = msg.urgent
          item.yilijob = msg.yilijob
          item.StaffID = msg.StaffID
          item.spousejob = msg.spousejob
          item.Remarks = msg.Remarks
          item.relationcode_set = msg.relationcode_set
          item.sexcode_set = msg.sexcode_set
          item.crashcode_set = msg.crashcode_set
          item.yilijobcode_set = msg.yilijobcode_set
          item.AddressArr = msg.AddressArr
        }
      })
    }
  }
}

const moduleC = {
  state: {
    languagedatalist: []
  },
  mutations: {
    languageAddMsg (context, msg) {
      context.languagedatalist.push(msg)
    },
    languageReplaceMsg (context, msg) {
      context.languagedatalist = msg
    },
    languageRemoveMsg (context, id) {
      for (let i = 0; i < context.languagedatalist.length; i++) {
        if (id === context.languagedatalist[i].id) {
          context.languagedatalist.splice(i, 1)
        }
      }
      for (let k = 0; k < context.languagedatalist.length; k++) {
        context.languagedatalist[k].id = k + 1
      }
    },
    languageWriteMsg (context, msg) {
      context.languagedatalist.forEach(function (item, index) {
        if (msg.id === item.id) {
          item.language = msg.language
          item.level = msg.level
          item.date = msg.date
          item.Grade = msg.Grade
          item.skilled = msg.skilled
          item.languagecode_set = msg.languagecode_set
          item.levelcode_set = msg.levelcode_set
          item.skilledcode_set = msg.skilledcode_set
        }
      })
    }
  }
}

const moduleD = {
  state: {
    TeachbgdataList: []
  },
  mutations: {
    TeachbgAddMsg (context, msg) {
      context.TeachbgdataList.push(msg)
    },
    TeachbgReplaceMsg (context, msg) {
      context.TeachbgdataList = msg
    },
    TeachbgRemoveMsg (context, id) {
      for (let i = 0; i < context.TeachbgdataList.length; i++) {
        if (id === context.TeachbgdataList[i].id) {
          context.TeachbgdataList.splice(i, 1)
        }
      }
      for (let k = 0; k < context.TeachbgdataList.length; k++) {
        context.TeachbgdataList[k].id = k + 1
      }
    },
    TeachbgWriteMsg (context, msg) {
      context.TeachbgdataList.forEach(function (item, index) {
        if (msg.id === item.id) {
          item.StartTime = msg.StartTime
          item.EndTime = msg.EndTime
          item.unit = msg.unit
          item.unitType = msg.unitType
          item.education = msg.education
          item.ProfessionType = msg.ProfessionType
          item.Profession = msg.Profession
          item.TeachModus = msg.TeachModus
          item.CertificateNumber = msg.CertificateNumber
          item.DegreeNumber = msg.DegreeNumber
          item.Remarks = msg.Remarks
          item.SecDegree = msg.SecDegree
          item.educationcode_set = msg.educationcode_set
          item.unitTypecode_set = msg.unitTypecode_set
          item.TeachModuscode_set = msg.TeachModuscode_set
          item.ProfessionTypecode_set = msg.ProfessionTypecode_set
          item.SecDegreecode_set = msg.SecDegreecode_set
        }
      })
    }
  }
}

const moduleE = {
  state: {
    jobdataList: []
  },
  mutations: {
    jobAddMsg (context, msg) {
      context.jobdataList.push(msg)
    },
    jobReplaceMsg (context, msg) {
      context.jobdataList = msg
    },
    jobRemoveMsg (context, id) {
      for (let i = 0; i < context.jobdataList.length; i++) {
        if (id === context.jobdataList[i].id) {
          context.jobdataList.splice(i, 1)
        }
      }
      for (let k = 0; k < context.jobdataList.length; k++) {
        context.jobdataList[k].id = k + 1
      }
    },
    jobWriteMsg (context, msg) {
      context.jobdataList.forEach(function (item, index) {
        if (msg.id === item.id) {
          item.StartTime = msg.StartTime
          item.EndTime = msg.EndTime
          item.unit = msg.unit
          item.office = msg.office
          item.witness = msg.witness
          item.witness_phone = msg.witness_phone
          item.Remarks = msg.Remarks
        }
      })
    }
  }
}

const moduleF = {
  state: {
    yilijobdatalist: []
  },
  mutations: {
    yiliAddMsg (context, msg) {
      context.yilijobdatalist.push(msg)
    },
    yiliReplaceMsg (context, msg) {
      context.yilijobdatalist = msg
    },
    yilihRemoveMsg (context, id) {
      for (let i = 0; i < context.yilijobdatalist.length; i++) {
        if (id === context.yilijobdatalist[i].id) {
          context.yilijobdatalist.splice(i, 1)
        }
      }
      for (let k = 0; k < context.yilijobdatalist.length; k++) {
        context.yilijobdatalist[k].id = k + 1
      }
    },
    yiliWriteMsg (context, msg) {
      context.yilijobdatalist.forEach(function (item, index) {
        if (msg.id === item.id) {
          item.name = msg.name
          item.relation = msg.relation
          item.phone = msg.phone
          item.unit = msg.unit
          item.office = msg.office
        }
      })
    }
  }
}

const moduleG = {
  state: {
    msgdatalist: [{
      Name: '',
      ContainerName: '中国',
      IDType: '身份证',
      ID: '',
      SexValue: '',
      Race: '',
      HomeTownPlace: '请选择地区',
      BornTime: '请选择日期',
      Political: '',
      Height: '',
      Blood: '',
      Religion: '',
      Specialty: '',
      Marriage: '',
      Account: '',
      Only_child: '',
      Birthplace: '请选择地区',
      Accountplace: '请选择地区',
      Accountplaceinput: '',
      FamilyPlace: '请选择地区',
      FamilyPlaceinput: '',
      NowPlace: '请选择地区',
      NowPlaceinput: '',
      HomeTownPlaceArr: [],
      BirthplaceArr: [],
      AccountplaceArr: [],
      FamilyPlaceArr: [],
      NowPlaceArr: [],
      MsgState: false
    }]
  },
  mutations: {
    UserAddMsg (context, UserMsgList) {
      context.msgdatalist[0].Name = UserMsgList.Name
      context.msgdatalist[0].ContainerName = UserMsgList.ContainerName
      context.msgdatalist[0].IDType = UserMsgList.IDType
      context.msgdatalist[0].ID = UserMsgList.ID
      context.msgdatalist[0].SexValue = UserMsgList.SexValue
      context.msgdatalist[0].Race = UserMsgList.Race
      context.msgdatalist[0].HomeTownPlace = UserMsgList.HomeTownPlace
      context.msgdatalist[0].BornTime = UserMsgList.BornTime
      context.msgdatalist[0].Political = UserMsgList.Political
      context.msgdatalist[0].Height = UserMsgList.Height
      context.msgdatalist[0].Blood = UserMsgList.Blood
      context.msgdatalist[0].Religion = UserMsgList.Religion
      context.msgdatalist[0].Specialty = UserMsgList.Specialty
      context.msgdatalist[0].Marriage = UserMsgList.Marriage
      context.msgdatalist[0].Account = UserMsgList.Account
      context.msgdatalist[0].Only_child = UserMsgList.Only_child
      context.msgdatalist[0].Birthplace = UserMsgList.Birthplace
      context.msgdatalist[0].Accountplace = UserMsgList.Accountplace
      context.msgdatalist[0].Accountplaceinput = UserMsgList.Accountplaceinput
      context.msgdatalist[0].FamilyPlace = UserMsgList.FamilyPlace
      context.msgdatalist[0].FamilyPlaceinput = UserMsgList.FamilyPlaceinput
      context.msgdatalist[0].NowPlace = UserMsgList.NowPlace
      context.msgdatalist[0].NowPlaceinput = UserMsgList.NowPlaceinput
      context.msgdatalist[0].MsgState = true
      context.msgdatalist[0].user_IdTypeValuecode_set = UserMsgList.user_IdTypeValuecode_set
      context.msgdatalist[0].User_Racecode_set = UserMsgList.User_Racecode_set
      context.msgdatalist[0].SexValuecode_set = UserMsgList.SexValuecode_set
      context.msgdatalist[0].user_Politicalcode_set = UserMsgList.user_Politicalcode_set
      context.msgdatalist[0].user_Bloodcode_set = UserMsgList.user_Bloodcode_set
      context.msgdatalist[0].user_Religioncode_set = UserMsgList.user_Religioncode_set
      context.msgdatalist[0].user_Marriagecode_set = UserMsgList.user_Marriagecode_set
      context.msgdatalist[0].user_Accountcode_set = UserMsgList.user_Accountcode_set
      context.msgdatalist[0].user_childcode_set = UserMsgList.user_childcode_set
      context.msgdatalist[0].HomeTownPlaceArr = UserMsgList.HomeTownPlaceArr // 籍贯数组
      context.msgdatalist[0].BirthplaceArr = UserMsgList.BirthplaceArr // 出生地点数组
      context.msgdatalist[0].AccountplaceArr = UserMsgList.AccountplaceArr // 户籍地址
      context.msgdatalist[0].FamilyPlaceArr = UserMsgList.FamilyPlaceArr // 家庭住址数组
      context.msgdatalist[0].NowPlaceArr = UserMsgList.NowPlaceArr // 现住址数组
    },
    UserReplaceMsg (context, msg) {
      context.msgdatalist[0] = msg
    },
    Usercontainer (context, name) {
      context.msgdatalist[0].ContainerName = name
    },
    UserMsgState (context, fettle) {
      context.msgdatalist[0].MsgState = fettle
    }
  }
}

const moduleH = {
  state: {
    entrydatalist: [],
    ProgressArr: [],
    FILEDATA: [],
    LocalImgList: []
  },
  mutations: {
    entryReplaceList (context, msg) {
      context.entrydatalist = msg
    },
    EntryProgressReplace (context, msg) {
      context.ProgressArr = msg
    },
    EntryProgressPush (context, msg) {
      context.ProgressArr.push(msg)
    },
    FILEDATAPush (context, msg) {
      context.FILEDATA.push(msg)
    },
    FILEDATAReplace (context, msg, index) {
      context.FILEDATA.splice(index, 1, msg)
    },
    localImgPush (context, msg) {
      context.LocalImgList.push(msg)
    }
  }
}

const moduleK = {
  state: {
    BackId: {
      branch_cd: '',
      branch_descr: ''
    }
  },
  mutations: {
    BankIdReplace (context, msg) {
      context.BackId.branch_cd = msg.branch_cd
      context.BackId.branch_descr = msg.branch_descr
    }
  }
}

const moduleSE = {
  state: {
    UserMsg: [{
      PAY_PRD: '',
      PAY_PRDdes: '',
      YSB_LOCATION: '',
      YJTB_DT: '',
      BRANCH_EC_CD: '',
      ACCOUNT_EC_ID: '',
      STATE: '',
      STATEdes: '',
      CITY: '',
      CITYdes: '',
      address: ''
    }],
    ListMenu: [],
    FILEDATA: [],
    AnnexMust: [],
    ProgressArr: [],
    SecondLocalImgList: []
  },
  mutations: {
    SecondUserMsgReplace (context, msg) {
      context.UserMsg[0] = msg
    },
    SecondListMenuReplace (context, msg) {
      context.ListMenu = msg
    },
    SecondFILEDATAPush (context, msg) {
      context.FILEDATA.push(msg)
    },
    SecondFILEDATAReplace (context, msg, index) {
      context.FILEDATA.splice(index, 1, msg)
    },
    SecondAnnexMustReplace (context, msg) {
      context.AnnexMust = msg
    },
    ProgressArrReplace (context, msg) {
      context.ProgressArr = msg
    },
    ProgressArrPush (context, msg) {
      context.ProgressArr.push(msg)
    },
    SecondlocalImgPush (context, msg) {
      context.SecondLocalImgList.push(msg)
    }
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    health: moduleA,
    family: moduleB,
    language: moduleC,
    Teachbg: moduleD,
    jobskill: moduleE,
    yilijobdatalist: moduleF,
    usermsglist: moduleG,
    entry: moduleH,
    bank: moduleK,
    secondUser: moduleSE
  }
})
