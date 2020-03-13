<template>
  <exception-page type="404" />
</template>

<script>
import ExceptionPage from '@/components/Exception/ExceptionPage'

export default {
  components: {
    ExceptionPage
  },
  mounted() {
    console.log(this.$router)
  }
}
</script>

<style scoped>
</style>
