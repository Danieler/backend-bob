const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const BagSchema = new mongoose.Schema ({ name: String });
const UserSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
    unique: true,
  },
  bags: {
    type: [BagSchema]
  },
});

UserSchema.plugin(uniqueValidator);


module.exports = mongoose.model('User', UserSchema);
