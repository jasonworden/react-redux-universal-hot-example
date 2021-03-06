import mongoose, {Schema} from 'mongoose';

const schema = new Schema({
  number: {
    type: Number,
    min: 1,
    max: 17
  },
  arePicksAllowed: Boolean,
  isLocked: {
    type: Boolean,
    default: false
  },
  firstDay: Date,
  lastDay: Date,
  beginTime: Date,
  season: {
    type: Schema.Types.ObjectId,
    ref: 'NFLSeason'
  },
});

const Week = mongoose.model('Week', schema);

export default Week;
