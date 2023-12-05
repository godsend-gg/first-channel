import { Button } from '../../../shared/ui/button';
import { IVideoCard } from '../model/types/types';
import './video-card.scss';

export const VideoCard = ({ card }: { card: IVideoCard }) => {
   return (
      <div className="card-container">
         {/* 403 ошибка на получение картинки (доступ запрещен) поэтому через цсс сделал заглушку*/}
         <div className="image-container">
            <div className="background"></div>
            <div className="base"></div>
            <div className="detail">
               <div className="detail-content">
                  <p className="text">{card.text}</p>
                  <Button type="button" name="Смотреть" />
               </div>
            </div>
         </div>
         <div className="info">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
         </div>
      </div>
   );
};
