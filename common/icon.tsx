import Butterfly from './Icons/Butterfly';
import EditIcon from './Icons/EditIcon';
import Happy from './Icons/Happy';
import InfoIcon from './Icons/InfoIcon';
import Neutral from './Icons/Neutral';
import StarIcon from './Icons/StarIcon';
import Unhappy from './Icons/Unhappy';
import VeryHappy from './Icons/VeryHappy';
import VeryUnhappy from './Icons/VeryUnhappy';

interface IIconProps {
  id?: string;
  name: string;
  height?: number;
  width?: number;
  viewBox?: string;
  style?: any;
  fill?: string;
  className?: string;
  iconColor?: string;
}

function getIcon(name: string, iconColor: string = '#000', className: string = '', height: number = 0, width: number = 0) {
  switch (name) {
    case 'butterfly':
      return <Butterfly fill={iconColor} className={className} height={height} width={width} />;

    case 'edit':
      return <EditIcon fill={iconColor} className={className} height={height} width={width} />;

    case 'happy':
      return <Happy fill={iconColor} className={className} height={height} width={width} />;

    case 'info':
      return <InfoIcon fill={iconColor} className={className} height={height} width={width} />;

    case 'neutral':
      return <Neutral fill={iconColor} className={className} height={height} width={width} />;

    case 'star':
      return <StarIcon fill={iconColor} className={className} height={height} width={width} />;

    case 'un-happy':
      return <Unhappy fill={iconColor} className={className} height={height} width={width} />;

    case 'very-happy':
      return <VeryHappy fill={iconColor} className={className} height={height} width={width} />;

    case 'very-unhappy':
      return <VeryUnhappy fill={iconColor} className={className} height={height} width={width} />;

    default:
      break;
  }
}

const Icon = (props: IIconProps) => <>{getIcon(props.name, props.iconColor, props.className, props.height, props.width)}</>;

export default Icon;
