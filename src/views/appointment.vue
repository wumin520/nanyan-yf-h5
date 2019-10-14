<template>
  <div class="form">
      <div class="title">预约</div>

      <cube-form
        :model="model"
        :schema="schema"
        :immediate-validate="false"
        :options="options"
        @validate="validateHandler"
        @submit="submitHandler"
        @reset="resetHandler"></cube-form>

  </div>
</template>

<script>
import api from "@/utils/api";

export default {
  data() {
    return {
      validity: {},
      valid: undefined,
      model: {
        type: '',
        companyName: '',
        location: '',
        business: '',
        insurance: '',
        averageAge: '',
        ageRange: '',
        ageMoreThanFiftyYears: '',
        menThan: '',
        haveSocialSecurityThan: '',
        noSocialSecurityThan: '',
        pursueOccupation: '',
        highRiskProfession: '',
        pregnancyNumber: '',
        diseasesNumber: '',
        explain: '',
        lossRation: '',
        preUnderwritingCompany: '',
        likeMan: '',
        phone: '',
        email: '',
        cooperation: '',
        sex: ''
      },
      schema: {
        groups: [
          {   //第一部分
            legend: '公司基本信息',
            fields: [
                {
                type: 'radio-group',
                modelKey: 'type',
                label: '预约类型',
                props: {
                  options: ['外挂预约', '线下预约']  //1,外挂预约，2,线下预约
                },
                rules: {
                  required: true
                }
              },
              {
                type: 'input',
                modelKey: 'companyName',
                label: '公司名称',
                props: {
                  placeholder: '请输入公司名称'
                },
                rules: {
                  required: true
                },
                // validating when blur
                trigger: 'blur'
              },
              {
                type: 'input',
                modelKey: 'location',
                label: '企业所在地',
                props: {
                  placeholder: '请输入企业所在地'
                },
                rules: {
                  required: true
                },
                // validating when blur
                trigger: 'blur'
              },
              {
                type: 'input',
                modelKey: 'business',
                label: '行业',
                props: {
                  placeholder: '请输入所属行业或主要业务类型'
                }
              }
            ]
          },
           {   //第二部分
            legend: '人员基本信息',
            fields: [
              {
                type: 'input',
                modelKey: 'insurance',
                label: '投保人数',
                props: {
                  placeholder: '请输入投保人数'
                },
                rules: {
                  required: true
                },
                // validating when blur
                trigger: 'blur'
              },
              {
                type: 'input',
                modelKey: 'averageAge',
                label: '平均年龄',
                props: {
                  placeholder: '请输入平均年龄'
                },
                rules: {
                  required: true
                },
                // validating when blur
                trigger: 'blur'
              },
              {
                type: 'input',
                modelKey: 'ageRange',
                label: '年龄范围',
                props: {
                  placeholder: '请输入年龄范围'
                },
                rules: {
                  required: true
                },
                // validating when blur
                trigger: 'blur'
              },
              {
                type: 'input',
                modelKey: 'ageMoreThanFiftyYears',
                label: '50岁以上人数',
                props: {
                  placeholder: '请输入50岁以上人数'
                },
                rules: {
                  required: true
                },
                // validating when blur
                trigger: 'blur'
              },
              {
                type: 'input',
                modelKey: 'menThan',
                label: '男性占比',
                props: {
                  placeholder: '请输入百分比'
                },
                rules: {
                  required: true
                },
                // validating when blur
                trigger: 'blur'
              },
              {
                type: 'input',
                modelKey: 'haveSocialSecurityThan',
                label: '有社保比例',
                props: {
                  placeholder: '请输入有社保比例'
                }
              },
              {
                type: 'input',
                modelKey: 'noSocialSecurityThan',
                label: '无社保比例',
                props: {
                  placeholder: '请输入无社保比例'
                }
              },
              {
                type: 'input',
                modelKey: 'pursueOccupation',
                label: '从事职业',
                props: {
                  placeholder: '从事职业(非办公书人员请说明工作内容)'
                },
                rules: {
                  required: true
                },
                // validating when blur
                trigger: 'blur'
              },
              {
                type: 'input',
                modelKey: 'highRiskProfession',
                label: '是否有高危职业人员(若有请详述具体情况)',
                props: {
                  placeholder: '是否有高危职业人员(若有请详述具体情况)'
                }
              },
              {
                type: 'input',
                modelKey: 'pregnancyNumber',
                label: '是否有怀孕人员(若有请告知人数)',
                props: {
                  placeholder: '是否有怀孕人员(若有请告知人数)'
                }
              },
              {
                type: 'textarea',
                modelKey: 'diseasesNumber',
                label: '既往症人数或已患重病疾人数(若有，请告知人数及病种)',
                props: {
                    placeholder: '既往症人数或已患重病疾人数(若有，请告知人数及病种)'
                }
              }
            ]
          },
          {   //第三部分
                legend: '过往合作',
                fields: [
                {
                    type: 'input',
                    modelKey: 'lossRation',
                    label: '历史赔付率',
                    props: {
                    placeholder: '请输入历史赔付率'
                    }
                },
                {
                    type: 'input',
                    modelKey: 'preUnderwritingCompany',
                    label: '前期承保公司',
                    props: {
                    placeholder: '请输入前期承保公司'
                    }
                },
                {
                    type: 'textarea',
                    modelKey: 'explain',
                    label: '特殊补充说明',
                    props: {
                    placeholder: '请输入特殊补充说明'
                    }
                }
                ]
          },
           {   //第四部分
            legend: '联系信息',
            fields: [
              {
                type: 'input',
                modelKey: 'likeMan',
                label: '联系人',
                props: {
                  placeholder: '请输入联系人'
                }
              },
              {
                type: 'radio-group',
                modelKey: 'sex',
                label: '性别',
                props: {
                  options: ['男', '女']
                } 
              },
              {
                type: 'input',
                modelKey: 'phone',
                label: '联系电话',
                props: {
                  placeholder: '请输入联系电话'
                }
              },
              {
                type: 'input',
                modelKey: 'email',
                label: '公司邮箱',
                props: {
                  placeholder: '请输入公司邮箱'
                }
              },
              {
                type: 'input',
                modelKey: 'cooperation',
                label: '合作/投保需求',
                props: {
                  placeholder: '请输入合作/投保需求'
                }
              }
            ]
          },
          {
            fields: [
              {
                type: 'submit',
                label: '提交'
              },
              {
                type: 'reset',
                label: '重置'
              }
            ]
          }
        ]
      },
      options: {
        scrollToInvalidField: true,
        layout: 'fresh' // classic fresh
      }
    }
  },
  methods: {
    submitHandler(e) {
      e.preventDefault()
      console.log('submit--》', e)
      console.log("====>", this.model)
      if(this.model.type === "外挂预约"){
        this.model.type = 1
      } else{
        this.model.type = 2
      }
      api.order(this.model).then((res) => {
          console.log(res)
      })
    },
    // validateHandler(result) {
    //   this.validity = result.validity
    //   this.valid = result.valid
    //   console.log('validity', result.validity, result.valid, result.dirty, result.firstInvalidFieldIndex)
    // },
    resetHandler(e) {
      console.log('reset', e)
    }
  }
}
</script>

<style>
.title{
    font-size: 0.453333rem;
    font-family: Source Han Sans CN;
    font-weight: 600;
    color: #252525;
    margin:30px 100px 17px 100px;
 }

 .cube-form-group-legend{
    
 }

 .cube-btn{
    margin: 0 auto;
    border-radius: 25px;
    padding: 0.453333rem 0.426667rem;
    width: 91%;
    background: #297FFF;
 }
</style>