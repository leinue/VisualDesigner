<template>
  <div class="grid"> 
    <div class="grid-cell u-1of4" style="border-right: 1px solid #f7f7f7;text-align: center;height:100vh">
      <ul class="control-list" v-for="control in controls">
        <li v-on:mousedown="mousedown(control)" class="control-elem">{{control.name}}</li>
      </ul>
    </div>
    <div class="grid-cell">
      <iframe class="ifr" src="static/designer.html"></iframe>
    </div>
  </div>

</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      controls: [{
         name: '按钮', //显示给用户看的控件名称
         tag: 'button', //真实的标签名称
         attrs: [{
          name: 'value', //属性的英文名称
          title: '按钮名称', //属性的中文名称
          isHTML: true, //是否为HTML属性
          value: '新的按钮' //值
         }], //控件的DOM属性
         _id: '', //控件在整个系统中的唯一标识符，区别于html中的id
      }, {
         name: '段落',
         tag: 'p',
         attrs: [{
          name: 'value', //属性的英文名称
          title: '文本', //属性的中文名称
          isHTML: true, //是否为HTML属性
          value: '新的标签' //值
         }],
         _id: ''
      }]
    }
  },

  methods: {

    mousedown: function(control) {
      window.dndData = control;
    }

  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.grid {
  display: flex;
}

.grid-cell {
  flex: 1;
}

.grid-cell.u-full {
  flex: 0 0 100%;
}

.grid-cell.u-1of2 {
  flex: 0 0 50%;
}

.grid-cell.u-1of3 {
  flex: 0 0 33.3333%;
}

.grid-cell.u-1of4 {
  flex: 0 0 25%;
}

.ifr {
  width: 100%;
  height: 100%;
  border: none;
}

.control-list li {
  cursor: pointer;
}

</style>
