<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
html {
  font-size: 10vw;
}
html, body {
  min-height: 100%;
  height: 100%;
  background: #fff;
}

.bgf_ {
  background: #fff;
}

#app {
  font-family:'PingFang SC', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.home_{
  .cube-slide-item{
    a{
      img{
        width: 90%;
          margin: 0 auto;
      }
    }
  }
}
.verify{
  .cube-select{
    span{
      padding-left: 20px;
    }
  }
}
</style>
