import Image from 'next/image';
import '../../page.css';

const Description = () => {
  return (
    <div className="container">
        <div className="text-part">
          <h1 className='text-header'>
          شنوة معناها جمعية؟  
          </h1>
          <p className='text-paragraph'>
            الجمعية هي طريقة ادخار تشاركي بين الافراد تعاونهم يلمو و يسلفو بعضهم فلوس.
            يعني مثلا 6 افراد قررو يعملو جمعية ب 100 دينار , كل شخص فيهم باش يدفع شهريا مبلغ 100 دينار
            و كل شهر واحد من المجموعة بالترتيب ياخذ المبلغ الجملي اللي هو 600 دينار في الحالة هذي.
            فكرة الجمعية موجودة
            في المجتمع التونسي منذ زمن طويل      
            و العديد من العائلات و الاصدقاء و زملاء العمل يستعملو فيها
          </p>
        </div>
        <div className="image-part">
          <Image
            src="/section3.jpg"
            width={300}
            height={300}
            alt='picture'
            style={{objectFit:'contain'}}
          />
        </div>
    </div>
  )
}

export default Description;