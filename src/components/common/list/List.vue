<template>
  <div class="com-list-module">
    <van-list
      v-model="loading"
      :finished="finished"
      :error.sync="error"
      error-text="请求失败，点击重新加载"
      @load="onLoad"
    >
      <template #default>
        <div class="row-module">
          <div class="left-module">
            <template v-for="(item, index) in 8">
              <div
                v-if="index % 2 === 0"
                :key="index"
                :style="{
                  width: '48.5%',
                }"
              >
                <slot name="left" v-bind:data="item"></slot>
              </div>
            </template>
          </div>
          <div class="right-module">
            <template v-for="(item, index) in 8">
              <div
                v-if="index % 2 === 1"
                :key="index"
                :style="{
                  width: '48.5%',
                }"
              >
                <slot name="right" v-bind:data="item"></slot>
              </div>
            </template>
          </div>
        </div>
      </template>
      <template #error>
        <span @click="onErrorRefresh">请求失败，点击重新加载</span>
      </template>
    </van-list>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true,
    },
    params: {
      type: Object,
      default: () => {},
    },
  },
  watch: {
    params(params) {
      this.onLoad(params);
    },
  },
  data() {
    return {
      dataSource: [],
      pagination: {
        current: 1,
        pageSize: 10,
        total: 0,
      },
      error: false,
      loading: false,
      finished: false,
      isLoading: false, //加载完成 上拉是否加载完成
    };
  },
  methods: {
    onLoad(p = null) {
      this.dataSource = [8, 8, 8, 8, 8, 8, 8, 8];
      let that = this;
      if (!that.url) {
        that.$toast("请求地址为空");
        return;
      }
      let params = {};
      if (!that.url && !p) {
        params.current = that.pagination.current;
        params.size = that.pagination.pageSize;
      } else if (p) {
        params = Object.assign({ current: 1, size: 10 }, p);
        // 重置列表数据
        this.dataSource = [];
        // 重置分页器状态
        this.pagination.current;
      } else {
        params.current = that.pagination.current;
        params.size = that.pagination.pageSize;
        params = Object.assign(params, that.params);
      }
      this.$axios
        .get(that.url, { params: params })
        .then(res => {
          if (res.code === 200) {
            let resData = res.data.records || res.data || [];
            that.dataSource = that.dataSource.concat(resData);
            that.pagination.total = Number(res.data.total) || resData.length;
            if (resData.length < params.size) {
              that.finished = true;
            } else {
              that.pagination.current++;
              that.finished = false;
            }
          } else {
            that.$toast.fail("查询接口失败！");
            that.finished = true;
          }
        })
        .catch(error => {
          that.finished = true;
          that.error = true;
        })
        .finally(() => {
          that.loading = false;
        });
    },
    onErrorRefresh() {
      this.error = false;
      this.finished = false;
      this.loading = true;
      this.onLoad();
    },
  },
};
</script>

<style scoped lang="scss">
.com-list-module {
  width: 100%;
}
.row-module {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  .left-module {
    background: #fff;
    overflow: hidden;
    box-sizing: border-box;
  }
  .right-module {
    background: #fff;
    overflow: hidden;
    box-sizing: border-box;
  }
}
::v-deep .van-list__error-text {
  width: 100%;
  text-align: center;
}
</style>
