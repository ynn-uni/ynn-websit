<template>
  <div class="nodata">
    {{ text }}
  </div>
</template>

<script>

export default {
  name: 'Newsinfo',
  components: {},
  props: {
    text: {
      type: String,
      default: '没有更多数据了！'
    }

  },
  data() {
    return {

    }
  },
  computed: {

  },
  mounted() {

  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
  .nodata{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
  }
</style>

