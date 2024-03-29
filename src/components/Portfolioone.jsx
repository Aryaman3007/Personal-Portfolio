import polyBG1 from '../assests/polyBG1.svg'
import polyBG1_b from '../assests/polyBG1_b.svg'
import captureBlog from '../assests/captureBlog.png'

export default function PortfolioOneTile(props){
    return(
        <div className="flex px-[36px] py-[36px] tab:px-[25px] tab:py-[25px] mob:px-[20px] mob:py-[20px] h-full w-full items-start" style={{background: props.darkmode? `url(${polyBG1_b})` : `url(${polyBG1})`}}>
            <div className={` text-white rounded-full mob:rounded-xl px-[10px] tracking-wider py-[2px] font-semibold text-center text-xs ${props.darkmode?' bg-[#d10a0a7c]':'bg-[#63b7b7]'}`}>CAPTURE //BLOG</div>
            <img src={captureBlog} alt='captureBlog' className={`absolute -rotate-[10deg] scale-100 tab:scale-[0.9] mob:scale-[0.9] rounded-2xl left-[70px] tab:left-[40px] mob:left-[40px] top-[50px] tab:top-[40px] mob:top-[30px] border ${props.darkmode?' border-[#d10a0a7c]':'border-[#63b7b7]'}`}></img>
        </div>
    );
}