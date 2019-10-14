import axios from "axios";
import qs from "qs";

var instance = axios.create({
  baseURL: "/api/",
  timeout: 13000,
  headers: { "X-Custom-Header": "foobar" }
});
// Add a request interceptor
instance.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    console.log(config, "sfdsdf");
    if (
      config.method.toLowerCase() === "post" &&
      config.data &&
      config.data.formEncode
    ) {
      config.data = qs.stringify(config.data);
    }
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
const codeMessage = {
  200: "服务器成功返回请求的数据。",
  201: "新建或修改数据成功。",
  202: "一个请求已经进入后台排队（异步任务）。",
  204: "删除数据成功。",
  400: "发出的请求有错误，服务器没有进行新建或修改数据的操作。",
  401: "用户没有权限（令牌、用户名、密码错误）。",
  403: "用户得到授权，但是访问是被禁止的。",
  404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
  406: "请求的格式不可得。",
  410: "请求的资源被永久删除，且不会再得到的。",
  422: "当创建一个对象时，发生一个验证错误。",
  500: "服务器发生错误，请检查服务器。",
  502: "网关错误。",
  503: "服务不可用，服务器暂时过载或维护。",
  504: "网关超时。"
};
const errorHandler = error => {
  const { response = {} } = error;
  const errortext = codeMessage[response.status] || response.statusText;
  const { status, url } = response;
  if (status === 401) {
    window.notification.error({
      message: "未登录或登录已过期，请重新登录。"
    });
    return;
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
    return;
  }
  window.notification.error({
    message: `请求错误 ${status}: ${error.config.url}`,
    description: errortext
  });
  // environment should not be used
  if (status === 403) {
    // router.push('/exception/403');
    return;
  }
  if (status <= 504 && status >= 500) {
    // router.push('/exception/500');
    return;
  }
  if (status >= 404 && status < 422) {
    // router.push('/exception/404');
  }
};
// Add a response interceptor
instance.interceptors.response.use(
  function(response) {
    // Do something with response data
    console.log("response -> ", response);
    const { returnCode, returnMsg } = response.data;
    if (returnCode !== "0000") {
      if (returnCode === '1012') {
        this.$router.push("/login");
      }else {
        window.message.error(returnMsg);
      }
      return Promise.reject(response);
    }
    return response;
  },
  function(error) {
    // Do something with response error
    if (error.response) {
      // 请求已发出，但服务器响应的状态码不在 2xx 范围内
      errorHandler(error);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
    // window.router.push('/login');
    return Promise.reject(error);
  }
);

let api = {};
api.order = function(data) {
  return instance.post("plug/appointment", data);
};

export default api;
