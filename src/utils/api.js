import axios from 'axios'
import qs from 'qs'

var instance = axios.create({
  baseURL: '/api/',
  timeout: 13000,
  headers: { 'X-Custom-Header': 'foobar' }
})
// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log(config, 'sfdsdf')
    if (
      config.method.toLowerCase() === 'post' &&
      config.data &&
      config.data.formEncode
    ) {
      config.data = qs.stringify(config.data)
    }
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)
const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
}
const errorHandler = error => {
  const { response = {} } = error
  const errortext = codeMessage[response.status] || response.statusText
  const { status, url } = response
  if (status === 401) {
    window.toast({
      txt: '未登录或登录已过期，请重新登录。',
      type: 'txt'
    }).show()
    return
  }
  // if (error.response) {
  //   // 请求已发出，但服务器响应的状态码不在 2xx 范围内
  //   console.log(error.response.data);
  //   console.log(error.response.status);
  //   console.log(error.response.headers);
  // } else {
  //   // Something happened in setting up the request that triggered an Error
  //   console.log('Error', error.message);
  // }
  // console.log(error.config);
  if (!status) {
    return
  }
  window.toast({
    txt: `网络错误`,
    type: 'txt'
  }).show()
  // environment should not be used
  if (status === 403) {
    // router.push('/exception/403');
    return
  }
  if (status <= 504 && status >= 500) {
    // router.push('/exception/500');
    return
  }
  if (status >= 404 && status < 422) {
    // router.push('/exception/404');
  }
}
// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Do something with response data
    console.log('response -> ', response, 11, window.toast)
    const { returnCode, returnMsg } = response.data
    if (returnCode !== '0000') {
      if (returnCode === '1012') {
        window.router.push('/login')
      } else if (returnCode === '1027') {
        window.router.push('/register')
      } else {
        window.toast({
          txt: returnMsg,
          type: 'txt'
        }).show()
      }
      return Promise.reject(response)
    }
    return response
  },
  function (error) {
    // Do something with response error
    if (error.response) {
      // 请求已发出，但服务器响应的状态码不在 2xx 范围内
      errorHandler(error)
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message)
    }
    console.log(error.config)
    // window.router.push('/login');
    return Promise.reject(error)
  }
)

let api = {}
api.order = function (data) {
  return instance.post('plug/appointment', data)
}
// /wechat/user/updateUser
// /wechat/policy/getPolicyListByWechatUserId
api.getPolicyListByWechatUserId = function (data) {
  return instance.post('wechat/policy/getPolicyListByWechatUserId', data)
}
// /wechat/policy/getPolicyById
api.getPolicyById = function (data) {
  return instance.post(`wechat/policy/getPolicyById?${qs.stringify(data)}`, data)
}

// 获取验证码
api.getVerificationCode = function (data) {
  return instance.post('/wechat/user/getVerificationCode', qs.stringify(data))
}

//校验验证码
api.validate = function (data) {
  return instance.post('/wechat/user/checkVerificationCode', qs.stringify(data))
}

// 注册
api.binding = function (data) {
  return instance.post('/wechat/user/updateUser', qs.stringify(data))
}

// 登录
api.login = function (data) {
  return instance.post('/wechat/user/login/authority', qs.stringify(data))
}

api.exitLogin = function (data) {
  return instance.post('wechat/user/exit', data)
}

export default api
