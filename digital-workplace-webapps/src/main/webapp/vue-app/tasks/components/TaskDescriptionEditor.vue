<template>
  <div>
    <div
      v-if="!editorReady" 
      :placeholder="placeholder"
      contenteditable="true"
      class="hoverStatus editableField editable editable-click"
      title="click to edit"
      @click="showDescriptionEditor()" 
      v-html="inputVal">{{ placeholder }}</div>
    <textarea
      v-show="editorReady"
      id="descriptionContent"
      ref="editor"
      v-model="inputVal"
      cols="30"
      rows="10"></textarea>
  </div>
</template>

<script>
    export default {
        props: {
            value: {
                type: String,
                default: ''
            },
            reset: {
                type: Boolean,
                default: false
            },
            placeholder: {
                type: String,
                default: ''
            },
        },
        data() {
            return {
                inputVal: this.value,
                editorReady: false
            };
        },
        watch: {
            inputVal(val) {
                this.$emit('input', val);
            },
          editorReady(val) {
           if (val === true)  {
             this.initCKEditor();
             const doc = document.getElementById('cke_descriptionContent');
             doc.classList.remove('hiddenEditor');
           } else {
             const doc1 = document.getElementById('descriptionContent');
             const doc = document.getElementById('cke_descriptionContent');
               doc.classList.add('hiddenEditor');
               doc1.classList.add('hiddenEditor');
           }
          },
            reset() {
                CKEDITOR.instances['descriptionContent'].destroy(true);
                this.initCKEditor();
            },
        },
     
        methods: {
            initCKEditor: function () {
                CKEDITOR.basePath = '/commons-extension/ckeditor/';
                const self = this;
                $(this.$refs.editor).ckeditor({
                    customConfig: '/commons-extension/ckeditorCustom/config.js',
                    removePlugins: 'suggester,simpleLink,confighelper',
                    toolbarLocation: 'top',
                    toolbar: [
                        ['Styles'],
                        ['Bold','Italic','Underline'],
                        ['TextColor'],
                        ['NumberedList','BulletedList']
                    ],
                    autoGrow_onStartup: false,
                    autoGrow_maxHeight: 300,
                    on: {
                        blur: function () {
                            $(document.body).trigger('click');
                            const newData = CKEDITOR.instances['descriptionContent'].getData();
                            this.inputVal = newData;
                            self.editorReady = !self.editorReady;
                        },
                        change: function(evt) {
                            const newData = evt.editor.getData();
                            self.inputVal = newData;
                        },
                        destroy: function () {
                            self.inputVal = '';
                        }
                    },
                });
            },
          showDescriptionEditor:function () {
            this.editorReady = !this.editorReady;
          }
        }
    };
</script>