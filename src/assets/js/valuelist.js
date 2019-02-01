const Familylist = [
  {
    'code': '10',
    'name': '配偶'
  },
  {
    'code': '12',
    'name': '子'
  },
  {
    'code': '16',
    'name': '女'
  },
  {
    'code': '22',
    'name': '父/母'
  },
  {
    'code': '28',
    'name': '兄/嫂'
  },
  {
    'code': '30',
    'name': '弟/弟媳'
  },
  {
    'code': '32',
    'name': '姐/姐夫'
  },
  {
    'code': '34',
    'name': '妹/妹夫'
  },
  {
    'code': '64',
    'name': '其他'
  }
]
const SexList = [
  {
    'code': '1',
    'name': '男'
  },
  {
    'code': '2',
    'name': '女'
  }
]
const IDTypeList = [
  {
    'code': '1',
    'name': '身份证'
  },
  {
    'code': '4',
    'name': '港澳通行证'
  },
  {
    'code': '7',
    'name': '台胞证'
  }
]
const RaceList = [
  {
    'code': '01',
    'name': '汉族'
  },
  {
    'code': '02',
    'name': '蒙古族'
  },
  {
    'code': '03',
    'name': '回族'
  },
  {
    'code': '04',
    'name': '藏族'
  },
  {
    'code': '05',
    'name': '维吾尔族'
  },
  {
    'code': '06',
    'name': '苗族'
  },
  {
    'code': '07',
    'name': '彝族'
  },
  {
    'code': '08',
    'name': '壮族'
  },
  {
    'code': '09',
    'name': '壮族'
  },
  {
    'code': '10',
    'name': '朝鲜族'
  },
  {
    'code': '11',
    'name': '满族'
  },
  {
    'code': '12',
    'name': '侗族'
  },
  {
    'code': '13',
    'name': '瑶族'
  },
  {
    'code': '14',
    'name': '白族'
  },
  {
    'code': '15',
    'name': '土家族'
  },
  {
    'code': '16',
    'name': '哈尼族'
  },
  {
    'code': '17',
    'name': '哈萨克族'
  },
  {
    'code': '18',
    'name': '傣族'
  },
  {
    'code': '19',
    'name': '黎族'
  },
  {
    'code': '20',
    'name': '傈僳族'
  },
  {
    'code': '21',
    'name': '佤族'
  },
  {
    'code': '22',
    'name': '畲族'
  },
  {
    'code': '23',
    'name': '高山族'
  },
  {
    'code': '24',
    'name': '拉祜族'
  },
  {
    'code': '25',
    'name': '水族'
  },
  {
    'code': '26',
    'name': '东乡族'
  },
  {
    'code': '27',
    'name': '纳西族'
  },
  {
    'code': '28',
    'name': '景颇族'
  },
  {
    'code': '29',
    'name': '柯尔克孜族'
  },
  {
    'code': '30',
    'name': '土族'
  },
  {
    'code': '31',
    'name': '达斡尔族'
  },
  {
    'code': '32',
    'name': '仫佬族'
  },
  {
    'code': '33',
    'name': '羌族'
  },
  {
    'code': '34',
    'name': '布朗族'
  },
  {
    'code': '35',
    'name': '撒拉族'
  },
  {
    'code': '36',
    'name': '毛南族'
  },
  {
    'code': '37',
    'name': '仡佬族'
  },
  {
    'code': '38',
    'name': '锡伯族'
  },
  {
    'code': '39',
    'name': '阿昌族'
  },
  {
    'code': '40',
    'name': '普米族'
  },
  {
    'code': '41',
    'name': '塔吉克族'
  },
  {
    'code': '42',
    'name': '怒族'
  },
  {
    'code': '43',
    'name': '乌孜别克族'
  },
  {
    'code': '44',
    'name': '俄罗斯族'
  },
  {
    'code': '45',
    'name': '鄂温克族'
  },
  {
    'code': '46',
    'name': '德昂族'
  },
  {
    'code': '47',
    'name': '保安族'
  },
  {
    'code': '48',
    'name': '裕固族'
  },
  {
    'code': '49',
    'name': '京族'
  },
  {
    'code': '50',
    'name': '塔塔尔族'
  },
  {
    'code': '51',
    'name': '独龙族'
  },
  {
    'code': '52',
    'name': '鄂伦春族'
  },
  {
    'code': '53',
    'name': '赫哲族'
  },
  {
    'code': '54',
    'name': '门巴族'
  },
  {
    'code': '55',
    'name': '珞巴族'
  },
  {
    'code': '56',
    'name': '基诺族'
  },
  {
    'code': '57',
    'name': '高丽族'
  },
  {
    'code': '90',
    'name': '穿青人'
  },
  {
    'code': '91',
    'name': '其他族'
  },
  {
    'code': '92',
    'name': '外国血统'
  },
  {
    'code': '98',
    'name': '外国民族'
  }
]
const PoliticalList = [
  {
    'code': '01',
    'name': '中共党员'
  },
  {
    'code': '02',
    'name': '中共预备党员'
  },
  {
    'code': '03',
    'name': '共青团员'
  },
  {
    'code': '04',
    'name': '民革会员'
  },
  {
    'code': '05',
    'name': '民盟盟员'
  },
  {
    'code': '06',
    'name': '民建会员'
  },
  {
    'code': '07',
    'name': '民进会员'
  },
  {
    'code': '08',
    'name': '农工党党员'
  },
  {
    'code': '09',
    'name': '致公党党员'
  },
  {
    'code': '10',
    'name': '九三学社社员'
  },
  {
    'code': '11',
    'name': '台盟盟员'
  },
  {
    'code': '12',
    'name': '无党派民主人士'
  },
  {
    'code': '13',
    'name': '群众'
  }
]
const BloodList = [
  {
    'code': '1',
    'name': 'A型'
  },
  {
    'code': '2',
    'name': 'B型'
  },
  {
    'code': '3',
    'name': 'O型'
  },
  {
    'code': '4',
    'name': 'AB型'
  },
  {
    'code': '5',
    'name': '其他'
  },
  {
    'code': '6',
    'name': '不详'
  }
]
const ReligionList = [
  {
    'code': '1',
    'name': '伊斯兰教'
  },
  {
    'code': '2',
    'name': '佛教'
  },
  {
    'code': '3',
    'name': '天主教'
  },
  {
    'code': '4',
    'name': '基督教'
  },
  {
    'code': '5',
    'name': '道教'
  },
  {
    'code': 'NOR',
    'name': '无宗教信仰'
  }
]
const MarriageList = [
  {
    'code': '1',
    'name': '未婚'
  },
  {
    'code': '2',
    'name': '已婚'
  },
  {
    'code': '3',
    'name': '丧偶'
  },
  {
    'code': '4',
    'name': '离婚'
  }
]
const AccountList = [
  {
    'code': '1',
    'name': '农业'
  },
  {
    'code': '2',
    'name': '非农'
  },
  {
    'code': '3',
    'name': '台湾籍'
  }
]
const NoList = [
  {
    'code': 'Y',
    'name': '是'
  },
  {
    'code': 'N',
    'name': '否'
  }
]
const EducationList = [
  {
    'code': '81',
    'name': '初中及以下'
  },
  {
    'code': '71',
    'name': '高中'
  },
  {
    'code': '61',
    'name': '中技'
  },
  {
    'code': '51',
    'name': '中专'
  },
  {
    'code': '41',
    'name': '大专'
  },
  {
    'code': '30',
    'name': '大学'
  },
  {
    'code': '20',
    'name': '硕士研究生'
  },
  {
    'code': '10',
    'name': '博士研究生'
  },
  {
    'code': '0',
    'name': '博士后'
  }
]
const SchoolType = [
  {
    'code': '00',
    'name': '211高等学校'
  },
  {
    'code': '10',
    'name': '普通高等学校'
  },
  {
    'code': '20',
    'name': '成人高等学校'
  },
  {
    'code': '30',
    'name': '党校'
  },
  {
    'code': '40',
    'name': '专业类院校'
  },
  {
    'code': '50',
    'name': '科研机构'
  },
  {
    'code': '60',
    'name': '985高等学校'
  },
  {
    'code': '70',
    'name': '网络教育'
  },
  {
    'code': '90',
    'name': '民办学校'
  },
  {
    'code': '99',
    'name': '其他'
  }
]
const TeachTypeList = [
  {
    'code': '1',
    'name': '普通全日制'
  },
  {
    'code': '10',
    'name': '全日制'
  },
  {
    'code': '11',
    'name': '业余'
  },
  {
    'code': '12',
    'name': '脱产'
  },
  {
    'code': '2',
    'name': '在职全脱产'
  },
  {
    'code': '3',
    'name': '在职半脱产'
  },
  {
    'code': '4',
    'name': '在职不脱产'
  },
  {
    'code': '5',
    'name': '远程教育'
  },
  {
    'code': '6',
    'name': '函授'
  },
  {
    'code': '7',
    'name': '成人教育'
  },
  {
    'code': '8',
    'name': '网络教育'
  },
  {
    'code': '9',
    'name': '自学考试'
  }
]
const ProfessionTypeList = [
  {
    'code': '01',
    'name': '哲学'
  },
  {
    'code': '02',
    'name': '经济学'
  },
  {
    'code': '03',
    'name': '法学'
  },
  {
    'code': '04',
    'name': '教育学'
  },
  {
    'code': '05',
    'name': '文学'
  },
  {
    'code': '06',
    'name': '历史学'
  },
  {
    'code': '07',
    'name': '理学'
  },
  {
    'code': '08',
    'name': '工学'
  },
  {
    'code': '09',
    'name': '农学'
  },
  {
    'code': '10',
    'name': '医学'
  },
  {
    'code': '11',
    'name': '管理学'
  },
  {
    'code': '12',
    'name': '军事学'
  },
  {
    'code': '13',
    'name': '艺术学'
  }
]
const LanguageList = [
  {
    'code': '1',
    'name': '英语'
  },
  {
    'code': '2',
    'name': '德语'
  },
  {
    'code': '3',
    'name': '日语'
  },
  {
    'code': '4',
    'name': '法语'
  },
  {
    'code': '5',
    'name': '俄语'
  },
  {
    'code': '6',
    'name': '韩语'
  },
  {
    'code': '7',
    'name': '汉语'
  },
  {
    'code': '8',
    'name': '西班牙语'
  },
  {
    'code': '9',
    'name': '阿拉伯语'
  },
  {
    'code': '10',
    'name': '葡萄牙语'
  },
  {
    'code': '11',
    'name': '越南语'
  },
  {
    'code': '12',
    'name': '拉丁语'
  },
  {
    'code': '13',
    'name': '蒙语'
  }
]
// 英语
const languageENList = [
  {
    'code': '1',
    'name': '英语4级'
  },
  {
    'code': '2',
    'name': '英语6级'
  },
  {
    'code': '3',
    'name': '英语专业4级'
  },
  {
    'code': '4',
    'name': '英语托业'
  },
  {
    'code': '5',
    'name': '英语专业8级'
  },
  {
    'code': '22',
    'name': '英语雅思'
  },
  {
    'code': '23',
    'name': '英语托福'
  },
  {
    'code': '40',
    'name': '其他'
  }
]
// 德语
const LanguageGermanList = [
  {
    'code': '18',
    'name': '德语4级'
  },
  {
    'code': '19',
    'name': '德语6级'
  },
  {
    'code': '40',
    'name': '其他'
  }
]
// 日语
const LanguageJapaneseList = [
  {
    'code': '6',
    'name': '日语1级'
  },
  {
    'code': '7',
    'name': '日语2级'
  },
  {
    'code': '8',
    'name': '日语3级'
  },
  {
    'code': '9',
    'name': '日语4级'
  },
  {
    'code': '40',
    'name': '其他'
  }
]
// 法语
const LanguageFrenchList = [
  {
    'code': '25',
    'name': '法语专业4级'
  },
  {
    'code': '26',
    'name': '法语专业8级'
  },
  {
    'code': '27',
    'name': '法语公共4级'
  },
  {
    'code': '40',
    'name': '其他'
  }
]
// 俄语
const LanguageRussianList = [
  {
    'code': '21',
    'name': '俄语3级'
  },
  {
    'code': '16',
    'name': '俄语4级'
  },
  {
    'code': '24',
    'name': '俄语6级'
  },
  {
    'code': '17',
    'name': '俄语8级'
  },
  {
    'code': '40',
    'name': '其他'
  }
]
// 韩语
const LanguageKoreanList = [
  {
    'code': '10',
    'name': '韩语1级'
  },
  {
    'code': '11',
    'name': '韩语2级'
  },
  {
    'code': '12',
    'name': '韩语3级'
  },
  {
    'code': '13',
    'name': '韩语4级'
  },
  {
    'code': '14',
    'name': '韩语5级'
  },
  {
    'code': '15',
    'name': '韩语6级'
  },
  {
    'code': '40',
    'name': '其他'
  }
]
// 其他语言
const LanguageOtherList = [
  {
    'code': '40',
    'name': '其他'
  }
]
// 熟练程度
const SkilledList = [
  {
    'code': '4',
    'name': '一般'
  },
  {
    'code': '3',
    'name': '良好'
  },
  {
    'code': '2',
    'name': '熟练'
  },
  {
    'code': '1',
    'name': '精通'
  }
]
const PayList = [
  {
    'code': 'A',
    'name': '当月发当月'
  },
  {
    'code': 'B',
    'name': '次月发上月'
  },
  {
    'code': 'N',
    'name': '无'
  }
]
function GetLanguage (code) {
  let language = {}
  if (code === '') {
    language.name = ''
    language.code = ''
  } else {
    LanguageList.forEach(function (item) {
      if (code === item.code) {
        language.name = item.name
        language.code = item.code
        console.log('语言' + language.name)
        console.log('语言类型' + language.code)
      }
    })
  }
  return language
}
function GetLangLevel (langcodestr, levelcode) {
  let level = {}
  let langcode = Number(langcodestr)
  if (langcode === 1) {
    // 英语
    languageENList.forEach(function (item) {
      if (levelcode === item.code) {
        level.name = item.name
        level.code = item.code
        console.log('证书' + level.name)
        console.log('证书类型' + level.code)
      }
    })
  } else if (langcode === 2) {
    // 德语
    LanguageGermanList.forEach(function (item) {
      if (levelcode === item.code) {
        level.name = item.name
        level.code = item.code
        console.log('证书' + level.name)
        console.log('证书类型' + level.code)
      }
    })
  } else if (langcode === 3) {
    // 日语
    LanguageJapaneseList.forEach(function (item) {
      if (levelcode === item.code) {
        level.name = item.name
        level.code = item.code
        console.log('证书' + level.name)
        console.log('证书类型' + level.code)
      }
    })
  } else if (langcode === 4) {
    // 法语
    LanguageFrenchList.forEach(function (item) {
      if (levelcode === item.code) {
        level.name = item.name
        level.code = item.code
        console.log('证书' + level.name)
        console.log('证书类型' + level.code)
      }
    })
  } else if (langcode === 5) {
    // 俄语
    LanguageRussianList.forEach(function (item) {
      if (levelcode === item.code) {
        level.name = item.name
        level.code = item.code
        console.log('证书' + level.name)
        console.log('证书类型' + level.code)
      }
    })
  } else if (langcode === 6) {
    // 韩语
    LanguageKoreanList.forEach(function (item) {
      if (levelcode === item.code) {
        level.name = item.name
        level.code = item.code
        console.log('证书' + level.name)
        console.log('证书类型' + level.code)
      }
    })
  } else {
    // 其他
    LanguageOtherList.forEach(function (item) {
      if (levelcode === item.code) {
        level.name = item.name
        level.code = item.code
        console.log('证书' + level.name)
        console.log('证书类型' + level.code)
      }
    })
  }
  return level
}
function GetSkill (code) {
  let skill = {}
  if (code === '') {
    skill.name = ''
    skill.code = ''
  } else {
    SkilledList.forEach(function (item) {
      if (code === item.code) {
        skill.name = item.name
        skill.code = item.code
        console.log('熟练程度' + skill.name)
        console.log('熟练程度' + skill.code)
      }
    })
  }
  return skill
}
function GetEducation (code) {
  let Education = {}
  if (code === '') {
    Education.name = ''
    Education.code = ''
  } else {
    EducationList.forEach(function (item) {
      if (code === item.code) {
        Education.name = item.name
        Education.code = item.code
        console.log('学历' + Education.name)
        console.log('学历' + Education.code)
      }
    })
  }
  return Education
}
function GetSchoolType (code) {
  let School = {}
  if (code === '') {
    School.name = ''
    School.code = ''
  } else {
    SchoolType.forEach(function (item) {
      if (code === item.code) {
        School.name = item.name
        School.code = item.code
        console.log('学校类型' + School.name)
        console.log('学校类型' + School.code)
      }
    })
  }
  return School
}
function GetTeachType (code) {
  let TeachType = {}
  if (code === '') {
    TeachType.name = ''
    TeachType.code = ''
  } else {
    TeachTypeList.forEach(function (item) {
      if (code === item.code) {
        TeachType.name = item.name
        TeachType.code = item.code
        console.log('教育形式' + TeachType.name)
        console.log('教育形式' + TeachType.code)
      }
    })
  }
  return TeachType
}
function GetProfessionType (code) {
  let ProfessionType = {}
  if (code === '') {
    ProfessionType.name = ''
    ProfessionType.code = ''
  } else {
    ProfessionTypeList.forEach(function (item) {
      if (code === item.code) {
        ProfessionType.name = item.name
        ProfessionType.code = item.code
        console.log('专业类别' + ProfessionType.name)
        console.log('专业类别' + ProfessionType.code)
      }
    })
  }
  return ProfessionType
}
function GetNoList (code) {
  let obj = {}
  if (code === '') {
    obj.name = ''
    obj.code = ''
  } else {
    NoList.forEach(function (item) {
      if (code === item.code) {
        obj.name = item.name
        obj.code = item.code
        console.log('是否？' + obj.name)
        console.log('是否？' + obj.code)
      }
    })
  }
  return obj
}
function GetFamilylist (code) {
  let obj = {}
  if (code === '') {
    obj.name = ''
    obj.code = ''
  } else {
    Familylist.forEach(function (item) {
      if (code === item.code) {
        obj.name = item.name
        obj.code = item.code
        console.log('与本人关系' + obj.name)
        console.log('与本人关系' + obj.code)
      }
    })
  }
  return obj
}
function GetSexList (code) {
  let obj = {}
  if (code === '') {
    obj.name = ''
    obj.code = ''
  } else {
    SexList.forEach(function (item) {
      if (code === item.code) {
        obj.name = item.name
        obj.code = item.code
        console.log('性别' + obj.name)
        console.log('性别' + obj.code)
      }
    })
  }
  return obj
}
function GetIDTypeList (code) {
  let obj = {}
  if (code === '') {
    obj.name = ''
    obj.code = ''
  } else {
    IDTypeList.forEach(function (item) {
      if (code === item.code) {
        obj.name = item.name
        obj.code = item.code
        console.log('身份证' + obj.name)
        console.log('身份证' + obj.code)
      }
    })
  }
  return obj
}
function GetPoliticalList (code) {
  let obj = {}
  if (code === '') {
    obj.name = ''
    obj.code = ''
  } else {
    PoliticalList.forEach(function (item) {
      if (code === item.code) {
        obj.name = item.name
        obj.code = item.code
        console.log('政治面貌' + obj.name)
        console.log('政治面貌' + obj.code)
      }
    })
  }
  return obj
}
function GetBloodList (code) {
  let obj = {}
  if (code === '') {
    obj.name = ''
    obj.code = ''
  } else {
    BloodList.forEach(function (item) {
      if (code === item.code) {
        obj.name = item.name
        obj.code = item.code
        console.log('血型' + obj.name)
        console.log('血型' + obj.code)
      }
    })
  }
  return obj
}
function GetReligionList (code) {
  let obj = {}
  if (code === '') {
    obj.name = ''
    obj.code = ''
  } else {
    ReligionList.forEach(function (item) {
      if (code === item.code) {
        obj.name = item.name
        obj.code = item.code
        console.log('宗教信仰' + obj.name)
        console.log('宗教信仰' + obj.code)
      }
    })
  }
  return obj
}
function GetMarriageList (code) {
  let obj = {}
  if (code === '') {
    obj.name = ''
    obj.code = ''
  } else {
    MarriageList.forEach(function (item) {
      if (code === item.code) {
        obj.name = item.name
        obj.code = item.code
        console.log('婚姻状况' + obj.name)
        console.log('婚姻状况' + obj.code)
      }
    })
  }
  return obj
}
function GetAccountList (code) {
  let obj = {}
  if (code === '') {
    obj.name = ''
    obj.code = ''
  } else {
    AccountList.forEach(function (item) {
      if (code === item.code) {
        obj.name = item.name
        obj.code = item.code
        console.log('户口性质' + obj.name)
        console.log('户口性质' + obj.code)
      }
    })
  }
  return obj
}
function GetRaceList (code) {
  let obj = {}
  if (code === '') {
    obj.name = ''
    obj.code = ''
  } else {
    RaceList.forEach(function (item) {
      if (code === item.code) {
        obj.name = item.name
        obj.code = item.code
        console.log('民族' + obj.name)
        console.log('民族' + obj.code)
      }
    })
  }
  return obj
}
function getAreaId (list, province, city, area) {
  let countyId = ''
  list.forEach(function (item) {
    if (item.value === province) {
      item.cityList.forEach(function (args) {
        if (args.value === city) {
          args.areaList.forEach(function (param) {
            if (param.value === area) {
              countyId = param.id
            }
          })
        }
      })
    }
  })
  return countyId
}
function getCityId (list, province, cityvalue) {
  let cityId = ''
  list.forEach(function (item) {
    if (item.value === province) {
      item.cityList.forEach(function (args) {
        if (args.value === cityvalue) {
          cityId = args.id
        }
      })
    }
  })
  return cityId
}
function getProvinceId (list, province) {
  let provinceId = ''
  list.forEach(function (item) {
    if (item.value === province) {
      provinceId = item.id
    }
  })
  return provinceId
}
function GetEntryText (REQUIRED, FILEPATH) {
  let obj = {}
  if (FILEPATH !== '') {
    obj.FeleSuc = '上传成功'
    obj.REQUIREDText = '请勿重复上传'
  } else {
    if (REQUIRED === 'Y') {
      obj.FeleSuc = '尚未上传'
      obj.REQUIREDText = '请务必完善'
    } else {
      obj.FeleSuc = '尚未上传'
      obj.REQUIREDText = '若有，请上传'
    }
  }
  return obj
}
function GetPayList (name) {
  let obj = {
    name: '',
    code: ''
  }
  PayList.forEach(function (item) {
    if (name === item.code) {
      obj.name = item.name
      obj.code = item.code
      console.log('发薪' + obj.name)
      console.log('发薪' + obj.code)
    }
  })
  return obj
}
function getProvinceName (list, province) {
  let provinceId = ''
  list.forEach(function (item) {
    if (item.id === province) {
      provinceId = item.value
    }
  })
  console.log(provinceId)
  return provinceId
}
function getCityName (list, province, cityvalue) {
  let cityId = ''
  list.forEach(function (item) {
    if (item.id === province) {
      item.cityList.forEach(function (args) {
        if (args.id === cityvalue) {
          cityId = args.value
        }
      })
    }
  })
  console.log(cityId)
  return cityId
}
export default {
  Familylist,
  SexList,
  IDTypeList,
  RaceList,
  PoliticalList,
  BloodList,
  ReligionList,
  MarriageList,
  AccountList,
  NoList,
  EducationList,
  SchoolType,
  TeachTypeList,
  ProfessionTypeList,
  LanguageList,
  languageENList,
  LanguageGermanList,
  LanguageJapaneseList,
  LanguageRussianList,
  LanguageFrenchList,
  LanguageKoreanList,
  LanguageOtherList,
  SkilledList,
  PayList,
  GetLanguage,
  GetLangLevel,
  GetSkill,
  GetEducation,
  GetSchoolType,
  GetTeachType,
  GetProfessionType,
  GetNoList,
  GetFamilylist,
  GetSexList,
  GetIDTypeList,
  GetPoliticalList,
  GetBloodList,
  GetReligionList,
  GetMarriageList,
  GetAccountList,
  GetRaceList,
  getProvinceId,
  getCityId,
  getAreaId,
  getProvinceName,
  getCityName,
  GetEntryText,
  GetPayList
}

