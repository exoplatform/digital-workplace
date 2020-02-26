<template>
  <ckeditor
    v-model="inputVal"
    :config="editorConfig"
    type="classic"/>
</template>

<script>
  import InlineEditor from '@ckeditor/ckeditor5-build-inline'
  import VueCkeditor from 'vue-ckeditor5'

  const options = {
    editors: {
      classic: InlineEditor,
    },
    name: 'ckeditor',
  };
  export default {
    props: {
      value: {
        type: String,
        default: ''
      },
      placeholder:{
        type: String,
        default: ''
      },
    },
    data: function () {
      return {
        editorConfig: {
          placeholder:this.placeholder,
          toolbar: {
            items: [
              'bold',
              'italic',
              '|',
              'bulletedList',
              '|',
              'redo',
              'undo'
            ]
          }
        },
        inputVal: this.value,
      };
    },
    watch: {
      inputVal(val) {
        this.$emit('input', val);
      }
    },
  }
  Vue.use(VueCkeditor.plugin, options);

</script>