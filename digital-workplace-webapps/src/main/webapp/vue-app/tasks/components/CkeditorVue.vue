<script src="vue-ckeditor5.js"></script>
<template>
  <ckeditor
    v-model="editorData"
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
        editorData: '<p>I\'m a description</p>',
      };
    }
  }
  Vue.use(VueCkeditor.plugin, options);

</script>