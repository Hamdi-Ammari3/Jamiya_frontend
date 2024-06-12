import Image from 'next/image';
import '../../page.css';

const Collateral = () => {
  return (
    <div className="container">
        <div className="text-part">
          <h1 className='text-header'>
            شنية الضمانات
          </h1>
          <p className='text-paragraph'>
             شركة جمعية تخدم بتصريح و اشراف من البنك المركزي التونسي و كل مستخدم يصحح عقد بينه و بين شركة جمعية باش الزوز أطراف يضمنو حقهم
          </p>
        </div>
        <div className="image-part">
          <Image
            src="/section7.jpg"
            width={300}
            height={300}
            alt='picture'
          />
        </div>
    </div>
  )
}

export default Collateral;