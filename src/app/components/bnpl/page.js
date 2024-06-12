import Image from 'next/image';
import '../../page.css';

const Bnpl = () => {
  return (
    <div className="container">
        <div className="text-part">
          <h1 className='text-header'>
             استنفع بفلوسك من اول شهر  
          </h1>
          <p className='text-paragraph'>
               في جمعية عندنا شراكة مع العديد من المحلات التجارية باش تستنفع بفلوسك وقت لي تحب من غير ماتستنى دورك         يوصل.
              اشري قضيتك , حط الثمن وخلي البائع يمسح الرمز لي  
              يظهرلك في التطبيق
              احنا نخلصوه و نقصوهم عليك بعد
          </p>
        </div>
        <div className="image-part">
          <Image
            src="/section5.jpg"
            width={300}
            height={300}
            alt='picture'
          />
        </div>
    </div>
  )
}

export default Bnpl;