<script src="vue-ckeditor5.js"></script>
<template>
  <ckeditor
    v-model="editorData"
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
  }
  export default {
    props: {
      editorData: {
        type: String,
        default: ''
      }
    },
    data: function () {
      return {
        editorData: '',
        editorConfig: {
          placeholder:this.$t('homepage.task.drawer.addYourComment'),
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
      };
    }
  }
  Vue.use(VueCkeditor.plugin, options);

</script>