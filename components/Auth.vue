<template>
  <div class="auth">
    <button class="auth__login">
      Log in
    </button>
    <button class="auth__signup button">
      Sign in
    </button>
  </div>
</template>

<script>
export default {
  name: 'Auth'
}
</script>

<style
       lang="scss">
.auth {
  display: flex;

  padding-left: 1rem;

  &__login {
    margin-right: 2rem;

    transition: all .2s;

    &:hover {
      color: $color__primary;
    }
    @include breakpoint ($phone__all) {
      display: none;
    }
  }

  &__signup {
    align-items: center;

    display: flex;
    height: 48px;

    padding: 0 56px;

    @include breakpoint($phone__all) {
      height: auto;

      padding: unset;

      background-color: transparent;

      color: $color__font--primary;
    }
  }
}
</style>
