import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	return NextResponse.json({ message: 'api from the new-page route' });
}
