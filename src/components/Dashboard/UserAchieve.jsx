import Achieve1 from "../../assets/svgs/achieve-1.svg";
import Achieve2 from "../../assets/svgs/achieve-2.svg";
import Achieve3 from "../../assets/svgs/achieve-3.svg";


function UserAchieve() {
    const achieveMap = { 0: "Comeback", 1: "Winner", 2: "Lucky" };
     return (
       <div className="flex gap-4 flex-col">
         <div className="flex flex-nowrap lg:flex-wrap justify-between items-center mb-4">
           <h2 className="text-base font-bold text-blue-800">Achievements</h2>
           <a href="#" className="text-sm text-blue-600 hover:underline">
             View All
           </a>
         </div>
   
         <div className="flex gap-2 flex-nowrap lg:flex-wrap justify-center">
           {[Achieve1, Achieve2, Achieve3].map((item, index) => {
             return (
               <div
                 key={`achieve-${index}`}
                 className="flex flex-col gap-2 justify-center items-center"
               >
                 <img
                   className="w-20 h-full object-cover"
                   src={item}
                   alt={`Achievements ${index + 1}`}
                 />
                 <p className="text-gray-500 text-base">{achieveMap[index]}</p>
               </div>
             );
           })}
         </div>
       </div>
     );
}

export default UserAchieve;