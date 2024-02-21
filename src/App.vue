<template>
  <div id="app">
    <ViewContainer>
      <AuthView />
    </ViewContainer>
  </div>
</template>

<script>
import { ViewContainer } from './components';
import { AuthView } from './views';

export default {
  name: 'App',
  components: {
    ViewContainer,
    AuthView
  }
}
</script>

<style>

</style>
