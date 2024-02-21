<template>
  <div class="page">
    <main class="view-container">
      <slot></slot>
    </main>
  </div>
</template>

<script>
export default {
  name: 'ViewContainer',
}
</script>

<style lang="scss" scoped>
.page {
  background: #FFB27E;
}

.view-container {
  min-height: 100vh;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding: 32;
}
</style>