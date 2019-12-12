<template>
    <div class="row">
        <div class="col-sm-4 offset-sm-4 justify-content-center">
            <div class="card">
                <div class="card-body">
                    <h2 class="card-title">Login</h2>
                    <form>
                        <div class="form-group">
                            <p class="card-text text-muted">Email Address</p>
                            <input type="email" class="form-control" id="UserEmail" v-model="email" aria-describedby="emailUser" placeholder="Enter email">
                        </div>
                        <div class="form-group">
                            <p class="card-text text-muted">Password</p>
                            <input type="password" class="form-control" id="UserPassword" v-model="password" placeholder="Password">
                        </div>
                        <button type="submit" class="btn btn-primary" @click.prevent="Login">Login</button>
                    </form>
                    <p>Don't have an account? Register here!</p>
                    <router-link to="register">Register</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as firebase from 'firebase/app';
import "firebase/auth";
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        Login(){
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            this.$router.push('todo-list');
        }
    }
    
}
</script>

<style scoped>

</style>