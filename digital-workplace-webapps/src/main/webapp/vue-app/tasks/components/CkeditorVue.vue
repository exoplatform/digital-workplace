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
    data: function () {
      return {
        editorData: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>',
        editorConfig: {
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