import Image from 'next/image';
import '../../page.css';

const Differentiator = () => {
  return (
    <div className="container">
        <div className="text-part">
          <h1 className='text-header'>
            شنوة لي يميزنا على الجمعيات التقليدية؟  
          </h1>
          <p className='text-paragraph'>
              اسرع، اسهل، اضمن و مفصلة على قياسك
              منغير ماتضيع ايام تنسق و تلوج على شكون يدخل معاك في جمعية 
              أدخل للتطبيق اختار الجمعية لي تناسبك من حيث المبلغ و عدد الافراد و فلوسك تتصب مباشرة في حسابك البنكي او تتبعثلك على البريد و نضمنولك زادة حصولك على اموالك حتى في حالة تخلف واحد من الاعضاء على سداد القسط متاعو
          </p>
        </div>
        <div className="image-part">
          <Image
            src="/section4.jpg"
            width={300}
            height={300}
            alt='picture'
          />
        </div>
    </div>
  )
}

export default Differentiator;