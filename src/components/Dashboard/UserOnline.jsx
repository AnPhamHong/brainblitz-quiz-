
import clsx from "clsx";
import User1 from "../../assets/images/user-1.png";
import User2 from "../../assets/images/user-2.png";
import User3 from "../../assets/images/user-3.png";
import User4 from "../../assets/images/user-4.png";
import User5 from "../../assets/images/user-5.png";
import User6 from "../../assets/images/user-6.png";
import User7 from "../../assets/images/user-7.png";
import User8 from "../../assets/images/user-8.png";
import User9 from "../../assets/images/user-9.png";

function UserOnline() {
     return (
    <div className="flex gap-4 flex-col">
      <h2 className="text-blue-700 font-bold text-base">Other Users Online</h2>

      <div className="flex gap-2 flex-wrap justify-center lg:justify-between">
        {[
          User1,
          User2,
          User3,
          User4,
          User5,
          User6,
          User7,
          User8,
          User9,
          User3,
          User4,
          User5,
          User6,
          User7,
          User8,
          User9,
        ].map((item, index) => {
          return (
            <div className="relative" key={`avatar-${index}`}>
              <img
                className={clsx(
                  "w-12 h-12 rounded-full object-cover",
                  index === 15 ? "" : ""
                )}
                src={item}
                alt={`User avatar ${index + 1}`}
              />
              {index === 15 && (
                <div className=" rounded-full  absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">50+</span>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserOnline;