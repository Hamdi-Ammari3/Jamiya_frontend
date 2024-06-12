import Image from 'next/image';
import '../../page.css';

const Cover = () => {
  return (
    <div className="container">
        <div className="text-part">
          <div className='cover_text_part'>
            <h1 className='text-header'>%</h1>
            <h1 className='text-header'>قروض بسعر فائدة 0</h1>
          </div>
        </div>
        <div className="image-part">
          <Image
            src="/section1.jpg"
            width={300}
            height={300}
            alt='picture'
            style={{objectFit:'contain'}}
          />
        </div>
    </div>
  )
}

export default Cover;