import { faEye, faEyeSlash,faSearch,faU,faUser, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface inputProps {
    icon: IconDefinition;
    label:string;
    type: 'email'| 'password' | 'text';
    onClick?: ()=> void;
    onIconClick?:() =>void;
    onChange :(data:any) => void; 
     
  };

const IconInput :React.FC<inputProps> = ({
   icon,label,type, onClick , onIconClick, onChange
}) => {
    return (
  <div className='w-72 h-auto  p-2 bg-[rgba(0,0,0,0.1)] rounded-2xl flex justify-between items-center' onClick={() => {
    if(onClick) onClick();
  }}>
    <div className="flex justify-center items-center  gap-3">
        <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
        <input onChange={(e) => onChange (e.target.value)}  type={type === 'text' ? 'text':'number'} className="border-none outline-none text-black w-full" placeholder={label} required></input>
        
    </div>
    
    {(type === 'text')  && (
            <FontAwesomeIcon icon={type == 'text' ? faSearch: faUser} onClick={onIconClick} className="cursor-pointer" ></FontAwesomeIcon>
    )}
    
  </div>

    );
}
export default IconInput;