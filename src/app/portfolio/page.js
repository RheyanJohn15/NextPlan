import Link from 'next/link'
import Button from '@/components/button';
export default function Page() {
  return (<>
  <Link href="/"><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>This is my button</button></Link>
  <Button />
  </>);
}