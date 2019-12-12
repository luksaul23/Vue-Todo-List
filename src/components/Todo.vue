<template>
    <div class="row">
        <div class="todo">
            <p id="todoItem"><slot></slot></p>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>
    .todo {
        font-size: 18px;
        cursor: pointer;
        border-top: 1px;
        border-top-color: lightgray;
        border-top-style: solid;
        border-top-left-radius: 1px;
        border-top-right-radius: 1px;
    }

    .todo:hover {
        background-color: lightcoral;
        text-decoration: line-through;
        border-top-color: lightcoral;
    }
    
    #todoItem{
        margin-bottom: 0px;
    }

</style>