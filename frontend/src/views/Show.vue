<template>
    <div>
      <h1>Show Word</h1>    

      <div class="ui labeled input fluid">
        <div class="ui label">
          <i class="germany flag"></i> German
        </div>
        <input type="text" readonly  :value="word.german"/>
      </div>
      <div class="ui labeled input fluid">
        <div class="ui label">
          <i class="united kingdom flag"></i> English
        </div>
        <input type="text" readonly  :value="word.english"/>
      </div>
      <div class="actions">
        <router-link :to="{ name: 'edit', params: { id: this.$route.params.id }}">
          Edit word
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  import {api} from '../helpers/helpers';
  export default{
    name: 'show',
    data(){
        return {
            word:  {}
        };
    },
    async mounted(){
        console.log('Route params' , this.$route.params.id);
        this.word = await api.getWord(this.$route.params.id);
        console.log(this.word);
    }
  };
  </script>
  
  <style scoped>
  .actions a {
    display: block;
    text-decoration: underline;
    margin: 20px 10px;
  }
  </style>