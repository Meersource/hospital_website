import mongoose, { Schema } from 'mongoose';

const AppointmentSchema = new Schema(
  {
    specialty: { type: String, required: true, trim: true },
    doctor: { type: String, trim: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    full_name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    status: { type: String, required: true, enum: ['new', 'existing'] },
    message: { type: String, trim: true },
  },
  { timestamps: true }
);

export default mongoose.models.Appointment || mongoose.model('Appointment', AppointmentSchema);


