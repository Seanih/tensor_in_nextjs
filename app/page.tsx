'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
	const [dLink, setDLink] = useState('');

	return (
		<main className='flex flex-col justify-center items-center'>
			<h1 className='text-4xl'>This is the home page</h1>

			<div className='mt-4'>
				<label htmlFor='link' className='mr-2'>
					enter route:
				</label>
				<input
					type='text'
					className='px-2 text-black'
					value={dLink}
					onChange={e => setDLink(e.target.value)}
				/>
			</div>
			<Link href={`/${dLink}`} className='mt-4'>
				<button type='button' className='py-2 px-4 bg-sky-900 rounded-xl'>
					Link to dynamic route
				</button>
			</Link>
			<Link href={`/smart-cam`} className='mt-4'>
				<button type='button' className='py-2 px-4 bg-sky-600 rounded-xl'>
					SmartCam
				</button>
			</Link>
		</main>
	);
}
