<template>
    <div class="row justify-content-center" id="newTodo">
        <div class="input-group mb-3">
            <input type="text" class="form-control" v-model="todo" placeholder="Walk the dog" v-on:keyup.enter="newTodo">
            <div class="input-group-prepend">
                <button class="btn btn-outline-secondary" type="button" @click="newTodo">Add</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data: function(){
        return {
            todo: ''
        }
    },
    methods: {
        newTodo() {
            if(this.todo){
                this.$emit('todoAdded',this.todo);
                this.todo = '';
            }
        }
    }
}
</script>

<style scoped>

    #newTodo {
        margin-top: 15px;
    }


</style>