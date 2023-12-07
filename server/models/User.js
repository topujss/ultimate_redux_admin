const {Schema, model} = require('mongoose');

// schema
const userSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
      default: null,
    },
    password: {
      type: String,
      trim: true,
    },
    photo: {
      type: String,
      trim: true,
      default: null,
    },
    role: {
      type: String,
      enum: ['Admin', 'Editor', 'User'],
      default: 'User',
    },
    active: {
      type: Boolean,
      default: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
    trash: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// export model
module.exports = model('User', userSchema);
