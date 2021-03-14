<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <Logotype />
        <div
          class="header__control"
        >
          <button class="header__langswitcher">
            En <span />
          </button>

          <Auth />
          <div class="header__toggler">
            <div class="burger-shape">
              <div />
              <div />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Logotype from './Logotype'

export default {
  name: 'Header',
  components: { Logotype }
}
</script>

<style scoped>

</style>
