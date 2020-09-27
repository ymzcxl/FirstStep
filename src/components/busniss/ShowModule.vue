<template>
  <div class="show-module">
    <div class="main-module">
      <img
        src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1738657804,3125367699&fm=26&gp=0.jpg"
        alt=""
      />
    </div>
    <div class="item-module">
      <div v-for="item in 20" :key="item" class="items" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.main-module {
  height: 180px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  img {
    width: 100%;
    height: 100%;
  }
}
.item-module {
  padding: 0 10px 10px 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .items {
    width: calc((100% - 20px) / 3);
    height: 79px;
    background: #008c8c;
    margin-bottom: 10px;
    margin-right: 10px;
  }
  .items:nth-child(3n) {
    margin-right: 0;
  }
}
.item-module:after {
  content: "";
  flex: auto;
}
</style>
