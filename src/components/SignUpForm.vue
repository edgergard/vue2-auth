<template>
  <div class="container">
    <div class="card">
      <p class="title">Sign up</p>

      <form action="" class="form">
        <div class="input-container">
          <label for="email" class="label">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            class="input"
            placeholder="user123@gmail.com"
          >
        </div>

        <div class="input-container">
          <label for="name" class="label">Name</label>
          <input
            type="email"
            name="name"
            id="name"
            class="input"
            placeholder="Christopher McGill"
          >
        </div>


        <div class="input-container">
          <label for="password" class="label">Password</label>
          <input 
            type="password"
            name="password"
            id="password"
            class="input"
            placeholder="12345"
          >
        </div>

        <button class="button">Sign up</button>
        <div class="link-container">
          <p>Already have an account?</p>
          <router-link to="/" class="link">Sign in</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RegisterForm',
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

.link {
  color: #000;
  text-decoration: none;
  font-weight: 700;
  cursor: pointer;
  transition-duration: 0.3s;

  &:hover {
    color: #F25019;
  }

  &-container {
    display: flex;
    justify-content: center;
    gap: 8px;
    font-size: 18px;
  }
}
</style>