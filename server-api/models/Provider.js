const mongoose = require('mongoose');

const providerSchema = new mongoose.Schema({
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
  location: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
    default: 0,
    index: -1
  },
  categoryId: {
    type: Number,
    required: true,
    ref: 'Category',
    index: true
  },
  phone: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  isNewProvider: {  // Changed from 'isNew' to avoid reserved keyword warning
    type: Boolean,
    default: false,
    index: true
  },
  isActive: {
    type: Boolean,
    default: true,
    index: true
  },
  totalServices: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true,
  suppressReservedKeysWarning: true,
  toJSON: {
    transform: function(doc, ret) {
      // Map isNewProvider back to isNew for API compatibility
      if (ret.isNewProvider !== undefined) {
        ret.isNew = ret.isNewProvider;
        delete ret.isNewProvider;
      }
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  }
});

// Text index for search functionality
providerSchema.index({
  name: 'text',
  location: 'text',
  description: 'text'
});

module.exports = mongoose.model('Provider', providerSchema);
