import Image from 'next/image';
import '../../page.css';

const HowItWorks = () => {
  return (
    <div className="container">
        <div className="text-part">
          <h1 className='text-header'>
            كيفاش نستعمل جمعية؟
          </h1>
          <ul className='text-List'>
            <li>اول خطوة التسجيل : 
            دخل بياناتك الشخصية اسم، لقب و رقم الهاتف</li>
            <li> يتصل بيك فريقنا لاتمام عملية التسجيل</li>
            <li> بعد التسجيل يتم فتح حساب للمستخدم  و من خلاله يبدأ يستعمل الخدمة</li>
          </ul>
        </div>
        <div className="image-part">
          <Image
            src="/section6.jpg"
            width={300}
            height={300}
            alt='picture'
          />
        </div>
    </div>
  )
}

export default HowItWorks;