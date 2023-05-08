import Link from 'next/link';

function NewPage() {
	return (
		<div className='text-4xl text-center'>
			A New Page
			<Link href={'/'} className='block text-center'>
				<button className='mt-8 px-8 py-4 text-base bg-sky-900 rounded-xl'>
					Main Page
				</button>
			</Link>
		</div>
	);
}
export default NewPage;
