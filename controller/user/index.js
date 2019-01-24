import userModel from '../../models/user/index'

class User {
    constructor() {

    }

    login(res, req, next) {

    }

    async register(res, req, next) {
        console.log(res.body);
        const body = {
            user_name: 12,
            password: 12,
            id: 1,
        };
        try {
            await userModel.create(body);
        } catch (e) {
            console.log(e)
        }
        req.send("success")
    }
}

export default new User();