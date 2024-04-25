import { GridBackgroundDemo } from "../../ui/background/GridBg";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaArrowTurnUp } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import { useTheme } from "next-themes";
function HeroSection() {
  const showModal = () => {
    const modal = document.getElementById(
      "my_modal_1"
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <>
      <GridBackgroundDemo />
      <section className="z-50 min-h-screen h-screen flex dark:text-slate-50 justify-center items-center relative border-b-[.1px] dark:border-slate-700 border-slate-300">
        <div className="sm:w-1/2 sm:p-0 w-full p-10">
          <h2
            className="sm:text-6xl text-gradient text-4xl sm:font-bold
           font-semibold"
          >
            Hi, I am Mukti
          </h2>
          <h1 className="gradient-text font-[700] sm:mt-2 mt-1 sm:text-6xl  text-4xl">
            Front End Developer
          </h1>
          <p className="mt-5 sm:font-[500] dark:text-slate-200 font-[400] sm:text-lg text-xs sm:w-full w-full">
            I'm interested with the modern web development. I build app using on
            demand technologies such as React.js, Next.js and Tailwind.css. Feel
            free to contact me :)
          </p>

          <div className="flex mt-7 justify-center gap-5">
            <button className="bg-white shadow-md sm:px-6 px-6  sm:text-sm text-xs  rounded-full sm:py-2 py-1 text-black">
              My Projects
            </button>
            <button
              onClick={showModal}
              className="flex shadow-md border-[1px] border-slate-700 hover:border-slate-100 gap-2 items-center sm:px-6 px-6 sm:text-sm text-xs  rounded-full py-2 text-slate-50 bg-[#111]"
            >
              <span className="text-lg">
                <MdOutlinePhoneInTalk />
              </span>
              Contac Me
            </button>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_1" className="modal backdrop-blur-sm">
              <div className="modal-box w-1/3 p-5 rounded-md border-[1.2px] border-gray-700 dark:bg-black dark:text-slate-100">
                <h3 className="font-bold text-lg">Contact me</h3>
                <div className="my-2">
                  <div className="w-full flex justify-between items-center rounded-md border-[1.2px] border-gray-700 px-3 py-2">
                    <div className="gap-2 flex">
                      <div className="w-5 h-5 overflow-hidden">
                        <img
                          src="https://www.svgrepo.com/show/349378/gmail.svg"
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-slate-300 text-sm">Gmail</span>
                    </div>
                    <span className=" text-sm text-slate-400">
                      <FaArrowTurnUp />
                    </span>
                  </div>
                  <div className="w-full my-3 flex justify-between items-center rounded-md border-[1.2px] border-gray-700 px-3 py-2">
                    <div className="gap-2 flex">
                      <div className="w-6 h-6 overflow-hidden">
                        <img
                          src="https://www.svgrepo.com/show/452229/instagram-1.svg"
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-slate-300 text-sm">Instagram</span>
                    </div>
                    <span className=" text-sm text-slate-400">
                      <FaArrowTurnUp />
                    </span>
                  </div>
                </div>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="text-[30px] text-gray-400 absolute top-1 right-1">
                      <IoIosClose />
                    </button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
