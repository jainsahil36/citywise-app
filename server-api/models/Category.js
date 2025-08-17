const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
    index: true
  },
  name: {
    type: String,
    required: true,
    trim: true,
    index: true
  },
  icon: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    default: ''
  },
  isActive: {
    type: Boolean,
    default: true,
    index: true
  }
}, {
  timestamps: true,
  suppressReservedKeysWarning: true,
  toJSON: {
    transform: function(doc, ret) {
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  }
});

// Text index for search functionality
categorySchema.index({
  name: 'text',
  description: 'text'
});

module.exports = mongoose.model('Category', categorySchema);
