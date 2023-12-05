import { useEffect, useState } from 'react';
import { IVideoCard } from '../../../entities/video-card/model/types/types';
import { VideoCard } from '../../../entities/video-card';
import './first-page.scss';
import { Button } from '../../../shared/ui/button';

export const FirstPage = () => {
   const [data, setData] = useState<IVideoCard[]>();

   const fetchData = async () => {
      const response = await fetch('https://fedevofferapi-info3.b4a.run/list');
      return response.json();
   };

   useEffect(() => {
      fetchData().then((res) => setData(res));
   }, []);

   return (
      <div className="container">
         <h1 className="title">НАШИ ВИДЕО</h1>
         <section className="section-container">
            <div className="video-container">
               <ul className="video-list">
                  {data?.map((card) => (
                     <VideoCard key={card.id} card={card} />
                  ))}
               </ul>
               <div className="switcher"></div>
            </div>
            <div className="sidecard-container">
               <div className="preview">
                  <div className="action">
                     <h3>
                        ВСЕ ВЫСТУПЛЕНИЯ <br /> И ЛУЧШИЕ МОМЕНТЫ
                     </h3>
                     <Button name="посмотреть" />
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};
