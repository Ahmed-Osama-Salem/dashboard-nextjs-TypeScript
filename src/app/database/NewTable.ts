// eslint-disable-next-line import/no-import-module-exports
import mongoose from 'mongoose';

const tableOneSchema = new mongoose.Schema({
  allText: {
    type: Object,
    required: true,
  },
  tech: {
    type: Array,
    required: true,
  },
  textMosad: {
    type: Array,
    required: true,
  },
});

const NewTable = mongoose.model('NewTable', tableOneSchema);

module.exports = NewTable;
