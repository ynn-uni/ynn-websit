<template>
  <div class="layout">
    <page-header />
    <page-content />
    <page-footer />
  </div>
</template>

<script>
import PageHeader from './modules/Header'
import PageContent from './modules/Content'
import PageFooter from './modules/Footer'

export default {
  name: 'Layout',
  components: {
    PageHeader,
    PageContent,
    PageFooter
  },
  data() {
    return {}
  }
}
</script>

<style>
</style>
