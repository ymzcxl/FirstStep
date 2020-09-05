<template>
  <div class="tab-bar-item" @click="itemClick">
    <div  v-if="!isActive" >
       <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-select"></slot>
    </div>
    <div :style="activeStyle" >
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle () {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  methods: {
    itemClick () {
      console.log('itemClick')
      console.log(this.path)
      this.$router.push(this.path)
    }
  }
}
</script>

<style>
.tab-bar-item {
  flex: 1;
  font-size: 14px;
}
.tab-bar-item img {
  text-align: center;
  width: 24px;
  margin-top: 3px;
  height: 24px;
}

</style>
