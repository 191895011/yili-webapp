<template>
  <div>
      <secondinfo-header></secondinfo-header>
      <!-- <second-menu></second-menu> -->
      <second-list></second-list>
      <!-- <second-upload></second-upload> -->
  </div>
</template>

<script type="text/javascript">
import SecondinfoHeader from './components/Header'
import SecondMenu from './components/secondmenu'
import SecondList from './components/secondlist'

export default {
  name: 'secondInfo',
  components: {
    SecondinfoHeader,
    SecondMenu,
    SecondList
  },
  data () {
    return {
    }
  }
}
</script>

<style type="text/css" scoped>
</style>
