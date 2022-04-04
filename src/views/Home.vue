<template>
  <div class="home">
      <homeHeader />
      <homeFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import homeHeader from '../components/homeHeader.vue'
import homeFooter from '../components/homeFooter.vue'

export default {
  name: 'Home',
  components: {
    homeHeader,
    homeFooter
  }
}
</script>
