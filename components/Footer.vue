<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrap">
        <Logotype />
        <div class="footer__soc">
          <a class="button fb" href="#" target="_blank" />
          <a class="button inst" href="#" target="_blank" />
        </div>
        <a class="rights" href="#" target="_blank">All rights Reserved.</a>
        <a class="privacy" href="#" target="_blank">Privacy Policy</a>
      </div>
    </div>
  </footer>
</template>

<script>
import Logotype from '../components/Logotype'
export default {
  name: 'Footer',
  components: {
    Logotype
  }
}
</script>

<style scoped>

</style>
