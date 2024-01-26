import React, {FC} from 'react';
import './Footer.scss'

const FooterComponent:FC = () => {
  return (
    <div className='footer-container'>
        <div>
        "Wyrażam zgodę na przetwarzanie moich danych osobowych w celu rekrutacji, jak również na potrzeby przyszłych rekrutacji,
        zgodnie z art. 6 ust. 1 lit. a Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku
        z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych)".
        </div>
    </div>
  );
}

export default FooterComponent;
