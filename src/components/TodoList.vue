<template>
    <div class="row">
        <app-todo v-for="(todo,index) in todos" @click.native="deleteTodo(index)">{{todo}}</app-todo>
    </div>
</template>

<script>
import Todo from './Todo.vue'
export default {
    props: ['todos'],
    components: {
        appTodo: Todo
    },
    methods:{
        deleteTodo(index){
            this.$emit('todoDeleted',index)
        }
    }
}
</script>

<style scoped>
    
</style>