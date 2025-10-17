import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/mongodb';
import Appointment from '../../../models/Appointment';

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      specialty,
      doctor,
      date,
      time,
      full_name,
      phone,
      email,
      status,
      message,
    } = body || {};

    if (!specialty || !date || !time || !full_name || !phone || !email || !status) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await connectToDatabase();
    const doc = await Appointment.create({
      specialty,
      doctor: doctor || '',
      date,
      time,
      full_name,
      phone,
      email,
      status,
      message: message || '',
    });
    return NextResponse.json({ success: true, id: doc._id }, { status: 201 });
  } catch (err) {
    console.error('Appointment POST error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}


