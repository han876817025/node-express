'use strict';

import mongoose from 'mongoose'

const Schema = mongoose.Schema;
mongoose.Promise = global.Promise; // so that you dont have to do this on every require

const adminSchema = new Schema({
    user_name: String,
    password: String,
    id: Number,
})

adminSchema.index({id: 1});

const Admin = mongoose.model('Admin', adminSchema);


export default Admin
