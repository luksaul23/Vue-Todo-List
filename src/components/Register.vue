<template>
    <div>
        <div class="row">
        <div class="col-sm-4 offset-sm-4 justify-content-center">
            <div class="card">
                <div class="card-body">
                    <h2 class="card-title">Register</h2>
                    <form>
                        <div class="form-group">
                            <p class="card-text text-muted">Email Address</p>
                            <input type="email" class="form-control" id="UserEmail" v-model="email" aria-describedby="emailUser" placeholder="Enter email">
                        </div>
                        <div class="form-group">
                            <p class="card-text text-muted">Password</p>
                            <input type="password" class="form-control" id="UserPassword" v-model="password" placeholder="Password">
                        </div>
                        <div class="form-group">
                            <p class="card-text text-muted">Confirm Password</p>
                            <input type="password" class="form-control" id="UserConfirmPassword" v-model="confirmPass" placeholder="Confirm Password">
                        </div>
                        <button type="submit" class="btn btn-primary" @click.prevent="submitted">Register</button>
                    </form>
                </div>
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
            password: '',
            confirmPass: ''
        }
    },
    methods: {
        submitted(){
            alert('submitted');
            if(this.password === this.confirmPass){
                const user = firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
                this.$router.push('/')
            }
            else{
                alert('Passwords did not match');
            }
        }
    }
    
}
</script>

<style scoped>

</style>