// import admin from './admin';
import user from '../controller/user/index'

export default (app) => {
    // app.post('/register',()=>{
    //     console.log(100)
    // })
    app.post('/login', user.register);
}