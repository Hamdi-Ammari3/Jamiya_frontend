import Image from 'next/image';
import '../../page.css';


const How = () => {
  return (
    <div className="container">
        <div className="text-part">
          <h1 className='text-header'>
            كيفاش؟
          </h1>
          <p className='text-paragraph'>
            شركتنا تقدملك فكرة الجمعية التقليدية ب طريقة ديجيتال بحيث تقدر اليوم تشارك في جمعيات و تقبض فلوس من خلال تطبيق في الهاتف متاعك
          </p>
        </div>
        <div className="image-part">
          <Image
            src="/section2.jpg"
            width={300}
            height={300}
            alt='picture'
          />
        </div>
    </div>
  )
}

export default How;