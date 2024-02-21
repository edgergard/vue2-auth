<template>
  <div class="container">
    <div class="card">
      <p class="title">Login</p>

      <form action="" class="form">
        <div class="input-container">
          <label for="" class="label">Email</label>
          <input type="email" class="input">
        </div>


        <div class="input-container">
          <label for="" class="label">Password</label>
          <input type="password" class="input">
          <label class="label password-link">Forgot Password?</label>
        </div>

        <button class="button">Sign in</button>
        <div class="register-container">
          <p>Don’t have an account yet?</p>
          <p class="register-link">Register for free</p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AuthForm',
  }
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 120px;
  border-radius: 40px;
}

.title {
  font-size: 44px;
  font-weight: 800;
  padding-bottom: 28px;
}

.form {
  display: flex;
  flex-direction: column;
  row-gap: 32px;
}

.input {
  width: 400px;
  height: 50px;
  border-radius: 5px;
  padding: 0 22px;
  font-size: 22px;
  border: none;

  &-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
}

.label {
  font-size: 18px;
  font-weight: 600;
}

.button {
  height: 50px;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 600;
  background-color: #F25019;
  color: #FFF;
  border: none;
  cursor: pointer;
  transition-duration: 0.3s;

  &:hover {
    background-color: #000;
  }
}

.password-link {
  width: 170px;
  margin-top: 10px;
  cursor: pointer;
  transition-duration: 0.3s;

  &:hover {
    color: #F25019;
  }
}

.register-container {
  display: flex;
  justify-content: center;
  gap: 8px;
  font-size: 18px;
}

.register-link {
  font-weight: 700;
  cursor: pointer;
  transition-duration: 0.3s;

  &:hover {
    color: #F25019;
  }
}
</style>