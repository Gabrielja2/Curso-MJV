import mongoose from 'mongoose'
import * as dotenv from 'dotenv'

dotenv.config()

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/mjv-school';

export default mongoose.connect(mongoUrl)