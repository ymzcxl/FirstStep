<template>
  <div class="home-container">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" alt="">
      </van-swipe-item>
    </van-swipe>
    <van-grid :column-num="4">
      <van-grid-item v-for="value in 8" :key="value" icon="fire" :text="'高级货'+ value" />
    </van-grid>
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
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1894245189,624137215&fm=26&gp=0.jpg',
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3956679320,2050443053&fm=26&gp=0.jpg',
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2650529120,1058972923&fm=26&gp=0.jpg'
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
.van-swipe{
  height: 175px;
}
::v-deep .van-swipe-item{
  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }
}
::v-deep .van-grid {
  margin-top: 10px;
  border-bottom: 1px solid #f7f7f7;
}
</style>
