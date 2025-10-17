import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../lib/mongodb';
import Contact from '../../../models/Contact';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body || {};

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await connectToDatabase();
    const doc = await Contact.create({ name, email, subject, message });
    return NextResponse.json({ success: true, id: doc._id }, { status: 201 });
  } catch (err) {
    console.error('Contact POST error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}


