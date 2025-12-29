/** @format */
import CircularGallery from "../CircularGallery";
function Services() {
  return (
    <div id="services">
      <section className="grid gap-4 grid-cols-1 grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 sm:gap-8 px-[15%] py-16">
        <div className="border-b border-slate-500 p-3 flex flex-col justify-between gap-5 cursor-pointer hover:bg-white/5 transition-colors group rounded-md">
          <div className="flex items-center justify-between">
            <h1 className="text-6xl font-poppins font-bold group-hover:text-blue-500 transition-colors">
              01
            </h1>
            <h1 className="text-5xl group-hover:text-blue-500 transition-colors">
              ᯓ➤
            </h1>
          </div>
          <h1 className="text-3xl font-semibold  group-hover:text-blue-500 transition-colors">
            Web Development
          </h1>
          <p className="text-[12px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
            quasi cupiditate incidunt. Iusto hic eaque cumque quos atque
            voluptate repellendus.
          </p>
        </div>
        <div className="border-b border-slate-500 p-3 flex flex-col justify-between gap-5 cursor-pointer hover:bg-white/5 transition-colors group rounded-md">
          <div className="flex items-center justify-between">
            <h1 className="text-6xl font-poppins font-bold group-hover:text-blue-500 transition-colors">
              02
            </h1>
            <h1 className="text-5xl group-hover:text-blue-500 transition-colors">
              ᯓ➤
            </h1>
          </div>
          <h1 className="text-3xl font-semibold  group-hover:text-blue-500 transition-colors">
            Web Design (UI/UX)
          </h1>
          <p className="text-[12px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
            quasi cupiditate incidunt. Iusto hic eaque cumque quos atque
            voluptate repellendus.
          </p>
        </div>
        <div className="border-b border-slate-500 p-3 flex flex-col justify-between gap-5 cursor-pointer hover:bg-white/5 transition-colors group rounded-md">
          <div className="flex items-center justify-between">
            <h1 className="text-6xl font-poppins font-bold group-hover:text-blue-500 transition-colors">
              03
            </h1>
            <h1 className="text-5xl group-hover:text-blue-500 transition-colors">
              ᯓ➤
            </h1>
          </div>
          <h1 className="text-3xl font-semibold  group-hover:text-blue-500 transition-colors">
            Logo Design
          </h1>
          <p className="text-[12px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
            quasi cupiditate incidunt. Iusto hic eaque cumque quos atque
            voluptate repellendus.
          </p>
        </div>
        <div className="border-b border-slate-500 p-3 flex flex-col justify-between gap-5 cursor-pointer hover:bg-white/5 transition-colors group rounded-md">
          <div className="flex items-center justify-between">
            <h1 className="text-6xl font-poppins font-bold group-hover:text-blue-500 transition-colors">
              04
            </h1>
            <h1 className="text-5xl group-hover:text-blue-500 transition-colors">
              ᯓ➤
            </h1>
          </div>
          <h1 className="text-3xl font-semibold  group-hover:text-blue-500 transition-colors">
            Poster Design
          </h1>
          <p className="text-[12px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
            quasi cupiditate incidunt. Iusto hic eaque cumque quos atque
            voluptate repellendus.
          </p>
        </div>
      </section>
      <div className="relative w-full">
        <div style={{ height: "600px", position: "relative" }}>
          <CircularGallery
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
