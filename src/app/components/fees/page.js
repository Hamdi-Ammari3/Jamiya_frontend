import Image from 'next/image';
import '../../page.css';

const Fees = () => {
  return (
    <div className="container">
        <div className="text-part">
          <h1 className='text-header'>
            قداش التكلفة؟
          </h1>
          <p className='text-paragraph'>
            معلوم الخدمة هو 9,99 دت على كل جمعية تشارك فيها 
          </p>
        </div>
        <div className="image-part">
          <Image
            src="/section8.jpg"
            width={300}
            height={300}
            alt='picture'
          />
        </div>
    </div>
  )
}

export default Fees;