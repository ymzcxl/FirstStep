<template>
  <div class="home-container">
    <!-- <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" alt="">
      </van-swipe-item>
    </van-swipe> -->
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
    <van-cell title="选择单个日期" :value="date" @click="show = true" />
    <van-calendar v-model="show" :title="titles" :color="color" @confirm="onConfirm" />
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  // 第一步：新建文件。第二步：配路由。第三步：写样式
  data () {
    return {
      color: '#008c8c',
      titles: '我是莫老板',
      images: [
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3540197368,1248056734&fm=26&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3540197368,1248056734&fm=26&gp=0.jpg'
      ],
      date: '',
      show: false,
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
          isDefault: true
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ],
      disabledList: [
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号'
        }
      ]
    }
  },
  created () {
    this.color = 'green'
    // this
  },
  methods: {
    getData () {
    },
    onAdd () {
      Toast('新增地址')
    },
    onEdit (item, index) {
      Toast('编辑地址:' + index)
    },
    formatDate (date) {
      return `${date.getMonth() + 1}/${date.getDate()}`
    },
    onConfirm (date) {
      this.show = false
      this.date = this.formatDate(date)
    }
  }
  // created () {
  //   this.getData()
  // }
}
</script>

<style scoped lang="scss">
::v-deep .van-calendar__selected-day{
  color: red;
  background: yellow!important;
}
</style>
