<template>
    <div class="row text-center">
      <div class="col-md-8 offset-md-2 justify-content-center align-items-center">
          <page-header></page-header>
          <new @todoAdded="newTodo"/>
          <h5>Completed: {{current}}/{{total}}</h5>
          <list :todos="todos" @todoDeleted="deleteTodo" :class="{'Todos': todos.length > 0}" ></list>
          <div>
            <button class="btn btn-primary" @click="signOut">Sign Out</button>
          </div>
        </div>
    </div>
</template>

<script>
import Header from './Header.vue'
import TodoList from './TodoList.vue'
import Newtodo from './NewTodo.vue'
import * as firebase from 'firebase/app';
import "firebase/auth";

export default {
  data () {
    return {
      todos: [],
      current: 0,
      total: 0,
      loggedin: false
    }
  },
  components: {
    pageHeader: Header,
    list: TodoList,
    new: Newtodo
  },
  methods: {
    newTodo(todo){
      this.todos.push(todo);
      this.total = this.total + 1;
    },
    deleteTodo(index){
      this.todos.splice(index,1)
      this.current = this.current + 1;
    },
    signOut(){
      firebase.auth().signOut();
      this.$router.push('/')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.row{
  display: block;
  margin-left: 0px;
  margin-right: 0px;
}

.Todos{
  border-style: solid;
  border-width: 2px;
  border-radius: 5px;
  border-color: #6e6e6e;
}

</style>