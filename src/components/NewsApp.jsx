import polyBG2 from '../assests/polyBG2.svg'
import newsApp from '../assests/newsApp.png'
import polyBG2_b from '../assests/polyBG2_b.svg'

export default function NewsApp(props){
    return(
        <div className="flex px-[36px] py-[36px] tab:px-[25px] tab:py-[25px] mob:px-[20px] mob:py-[20px] h-full w-full items-start" style={{background: props.darkmode? `url(${polyBG2_b})` : `url(${polyBG2})`}}>
            <div className={`text-white rounded-full px-[10px] tracking-wider py-[2px] font-semibold text-xs ${props.darkmode?' bg-[#d10a0a7c]':'bg-[#63b7b7]'}`}>NEWSAPP //</div>
            <img src={newsApp} alt='ValoTag1' className={`absolute -rotate-[10deg] rounded-xl scale-150 mob:scale-100 left-[130px] tab:left-[90px] mob:left-[40px] bottom-[200px] tab:bottom-[100px] mob:bottom-[40px] border ${props.darkmode?' border-[#d10a0a7c]':'border-[#63b7b7]'}`}></img>
        </div>
    );
}