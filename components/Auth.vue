<template>
  <div class="auth">
    <button class="auth__login">
      Log in
    </button>
    <button class="auth__signup">
      Sign in
    </button>
  </div>
</template>

<script>
export default {
  name: 'Auth'
}
</script>

<style scoped
       lang="scss">
.auth {
  display: flex;

  padding-left: 1rem;

  &__login {
    margin-right: 2rem;

    transition: all .2s;
 @include breakpoint ($phone__all) {
     display: none;
  }
    &:hover {
      color: $color__primary;
    }
  }

  &__signup {
    align-items: center;

    display: flex;
    height: 48px;

    padding: 0 56px;

    border-radius: 6px;

    background-color: $color__primary;

    color: $color__font--secondary;

    transition: all .2s;
    @include breakpoint($phone__all) {
      padding: unset;
      height: auto;
      background-color: transparent;
      color: $color__font--primary;
    }

    &:hover {
      background-color: darken($color__primary, 5%);
    }

    &:active, {
      transform: scale(.98);
    }
  }
}
</style>
