const mongoose = require('mongoose');

const serviceItemSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
    index: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    min: 0,
    index: true
  },
  duration: {
    type: String,
    trim: true
  },
  category: {
    type: String,
    required: true,
    trim: true,
    index: true
  },
  description: {
    type: String,
    trim: true
  },
  providerId: {
    type: Number,
    required: true,
    ref: 'Provider',
    index: true
  },
  isActive: {
    type: Boolean,
    default: true,
    index: true
  },
  tags: [{
    type: String,
    trim: true
  }]
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
serviceItemSchema.index({
  name: 'text',
  description: 'text'
});

module.exports = mongoose.model('ServiceItem', serviceItemSchema);
