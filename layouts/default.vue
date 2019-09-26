<template>
  <div class="layout">
    <Layout>
      <Sider class="sider">
        <h1 class="sider-head">Bitcoin Playground</h1>
        <Menu width="auto" @on-select="menuSelect">
          <MenuItem name="m0" to="/wallet">
            <Icon type="ios-navigate"></Icon>
            <span>Option 1</span>
          </MenuItem>
        </Menu>
      </Sider>
      <Layout class="right">
        <Header class="header"></Header>
        <Content class="content">
          <nuxt />
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapsed: false
    }
  },
  methods: {
    menuSelect(name){
      console.log(name)
    }
  }
}
</script>

<style scoped>
.right {
  margin-left: 200px;
  transition: margin-left 0.2s ease-in-out;
}

.sider {
  position: fixed;
  height: 100%;
  background-color: #fff;
}

.sider-head {
  height: 64px;
  line-height: 64px;
  font-size: 16px;
  text-align: center;
  background-color: #f5f7f9;
}

.header {
  background-color: #fff;
}
</style>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  background-color: #f5f7f9;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>

