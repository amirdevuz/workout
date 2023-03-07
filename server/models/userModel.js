const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
}, { timestamps: true });

userSchema.statics.signup = async function (req) {
    const { email, password } = req.body;

    // email formatini tekshirish
    if (!validator.isEmail(email)) throw new Error("Email formati noto'g'ri")

    // email mavjudligini tekshirish
    const isExist = await this.findOne({ email });
    if (isExist) throw new Error("Bunday email mavjud");

    // parol mustahkamligini tekshirish
    const minLength = 8;
    const maxLength = 16;
    const symbolsRegex = new RegExp(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/);

    if (password.length < minLength) throw new Error("Parol juda qisqa");
    else if (password.length > maxLength) throw new Error("Parol juda uzun");
    else if (!/[A-Z]/.test(password)) throw new Error("Parolda katta harf mavjud emas");
    else if (!/[a-z]/.test(password)) throw new Error("Parolda kichik harf mavjud emas");
    else if (!/[0-9]/.test(password)) throw new Error("Parolda raqam mavjud emas");
    else if (/\s/.test(password)) throw new Error("Parolda bo'sh joy bo'lishi kerak emas");
    else if (!symbolsRegex.test(password)) throw new Error("Parolda maxsus belgi mavjud emas");

    // parolni shifrlash
    const salt = await bcrypt.genSalt(10);
    const encrypted = await bcrypt.hash(password, salt);

    // yangi user yaratish
    const newUser = await this.create({ ...req.body, password: encrypted });
    return newUser;
}

userSchema.statics.login = async function (req) {
    const { email, password } = req.body;
    
    const user = await this.findOne({ email });
    if(!user) throw new Error("Email yoki parol noto'g'ri");

    const match = await bcrypt.compare(password, user.password);
    if(!match) throw new Error("Email yoki parol noto'g'ri");

    console.log(req.body, email, user);
    return user;
}

module.exports = mongoose.model('user', userSchema);