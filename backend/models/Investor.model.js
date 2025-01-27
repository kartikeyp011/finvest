import mongoose from 'mongoose';

const investorSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    accountType: { type: String, required: true }
});

const Investor = mongoose.model('Investor', investorSchema);

export default Investor;
