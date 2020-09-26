<template>
    <div id="tab-bar">
      <slot></slot>
    </div>
</template>

<script>
export default {

}
</script>

<style>
#tab-bar{
  display: flex;
  text-align: center;
  height: 49px;
  position: fixed;
  padding-bottom: 9px;
  left: 0;
  right: 0;
  bottom: -1px;
  background: #f6f6f6;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, .1)
}

</style>
