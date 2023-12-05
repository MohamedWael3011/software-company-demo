import { LucideProps } from 'lucide-react';
import { FC } from 'react';


interface ServiceContainerProps{
    icon?:FC<LucideProps>;
    className?:string;
    imgURL?:string;
    cardTitle?:string,
    cardDesc?:string,
    clickable?:boolean
}
export default function CardComp({className,imgURL = "/Card/CardImage.jpg",cardTitle,cardDesc,icon: Icon,clickable=true}:ServiceContainerProps) {
  return (
    <div className={`w-[90%] h-[90%] card-container ${clickable? 'clickable-container':''} rounded-tr-3xl rounded-bl-3xl ${className} flex flex-col items-center text-white justify-evenly`} style={{backgroundImage: `linear-gradient(rgba(81, 65, 153, 0.7), rgba(254, 122, 190, 0.7)), url(${imgURL})`, backgroundSize:'cover'}}>
        {Icon && <Icon className=''/>}
            { cardTitle && <h3 className={` ${Icon? 'md:text-2xl text-xl':'md:text-4xl text-xl'} font-semibold py-4`}>{cardTitle}</h3>}
            {cardDesc && <p className={`text-center  ${Icon? 'md:text-sm text-xs':'md:text-xl text-md'} py-4`}>{cardDesc}</p>}

    </div>
  )
}
