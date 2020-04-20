<template>
  <div class="about">
    <ul class="aboutNav">
      <li
        v-for="item in nav"
        @click="showNav(item.code)"
        :style="cur === item.code ? 'background:#409EFF;color:#fff;' : ''"
        class="aboutNavItem">
        {{item.title}}
      </li>
    </ul>
    <div class="aboutContent">
      <div v-show="cur === 'tech'">
        <ul>
          <li><span>html</span></li>
          <li><span>css</span></li>
          <li><span>javascript</span></li>
          <li><span>vue.js</span></li>
        </ul>
      </div>
      <div v-show="cur === 'work'">
        <ul>
          <li><span>2017.6 ~ 2018.8：苏州新电信息</span></li>
          <li><span>2018.8 ~ 至今：苏州朗拓软件</span></li>
        </ul>
      </div>
      <div v-show="cur === 'book'">
        
        书单
        <ul>
          <li>图解http</li>
        </ul>
        正在看的
        <ul>
          <li><span>图解http</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        nav: [
          { title: '技术栈', code: 'tech' },
          { title: '工作经历', code: 'work' },
          { title: '书籍', code: 'book' }
        ],
        cur: 'tech'
      }
    },
    methods: {
      showNav(code) {
        this.cur = code
      } 
    }
  }
</script>
