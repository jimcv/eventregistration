<template>
  <div class="login-form">
    <!-- Default form login -->
    <form>
      <p class="h4 text-center mb-4">Sign in</p>
      <label for="defaultFormLoginEmailEx" class="grey-text">Your username</label>
      <input type="email" id="defaultFormLoginEmailEx" class="form-control" />
      <br />
      <label for="defaultFormLoginPasswordEx" class="grey-text">Your password</label>
      <input type="password" id="defaultFormLoginPasswordEx" class="form-control" />
      <div class="text-center mt-4">
        <button class="btn btn-indigo" type="submit">Login</button>
      </div>
    </form>
    <!-- Default form login -->
  </div>
</template>

<style scoped>
.login-form {
  width: 400px;
  margin: auto;
  text-align: left;
}
</style>

