<template>
  <div class="template">
    <div class="template-header">
      <p>全部项目</p>
      <a-button type="primary" icon="plus" @click="showModal = true">新建项目</a-button>
    </div>
    <a-divider />
    <a-modal
      v-model="showModal"
      title="选择模版"
      @ok="handleSelectedTemp"
    >
      <a-radio-group button-style="solid" v-model="selectedTemp">
        <a-radio-button v-for="(item, index) in templates" :key="index" :value="item.type">
          {{ item.name }}
        </a-radio-button>
      </a-radio-group>
    </a-modal>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showModal: false,
      templates: [
        { type: 'web', name: '电脑' },
        { type: 'h5', name: '手机' },
        { type: 'minipro', name: '小程序' }
      ],
      selectedTemp: ''
    }
  },

  beforeCreate () {},

  created () {},

  beforeMount () {},

  mounted () {},

  beforeUpdate () {},

  updated () {},

  beforeDestroy () {},

  destroyed () {},

  computed: {},

  methods: {
    handleSelectedTemp () {
      if (!this.selectedTemp) {
        this.$message.warning({
          content: '请选择模版'
        })
        return
      }
      this.showModal = false
      this.$router.push({
        path: '/editor',
        query: {
          temp: this.selectedTemp
        }
      })
    }
  },

  watch: {},

  components: {}
}
</script>

<style scoped lang="stylus">
.template
  padding 20px
.template-header
  display flex
  align-items center
  p
    margin 0 20px 0 0
</style>
