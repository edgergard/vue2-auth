<template>
  <div id="app">
    <ViewContainer>
      <router-view />
    </ViewContainer>
  </div>
</template>

<script>
import { ViewContainer } from './components';

export default {
  name: 'App',
  components: {
    ViewContainer,
  }
}
</script>
