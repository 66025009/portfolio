const Project = () => {
    return (
      <div id="project" className="bg-black p-8 pt-14">
        <h2 className="text-4xl font-bold text-white mb-8">Projects</h2>
  
        <div className="flex justify-center items-start grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card bg-base-100 image-full w-[520px] shadow-xl">
            <figure className="h-64">
                <img
                    src="/E-Service.png"
                    alt="Project 1"
                    className="w-full h-full object-cover rounded-t-lg"
                />
            </figure>
            <div className="card-body p-6">
                <h2 className="card-title text-3xl">E-Service!</h2>
                <p className="text-lg">
                    แพลตฟอร์มที่ใช้งานง่ายเพื่อทำให้ประสบการณ์
                <br>
                </br>
                    ออนไลน์ของคุณราบรื่นยิ่งขึ้น
                </p>
                <div className="card-actions justify-end">
                    <a href="https://www.figma.com/proto/QCxXTpypCNuXWh7YbLs2Es/Figma-Prototype-(%E0%B8%81%E0%B8%A5%E0%B8%B8%E0%B9%88%E0%B8%A1-7)?node-id=0-1&t=69VFiWdng8qOe9a3-1" target="_blank" rel="noopener noreferrer">
                        <button className="btn text-lg py-3 px-6">Learn More</button>
                    </a>
                </div>
            </div>
          </div>

          <div className="card bg-base-100 image-full w-[520px] shadow-xl">
            <figure className="h-64">
                <img
                    src="/Hamtarot.png"
                    alt="Project 2"
                    className="w-full h-full object-cover rounded-t-lg"
                />
            </figure>
            <div className="card-body p-6">
                <h2 className="card-title text-3xl">Hamtarot!</h2>
                <p className="text-lg">
                 สามารถดูดวงออนไลน์ได้ทุกที่ ทุกเวลา 
                <br>
                </br>
                เพียงแค่คุณมีอินเทอร์เน็ต
                </p>
                <div className="card-actions justify-end">
                    <a href="https://hamtarott.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <button className="btn text-lg py-3 px-6">Learn More</button>
                    </a>
                </div>
            </div>
          </div>
  
          <div className="card bg-base-100 image-full w-[520px] shadow-xl">
            <figure className="h-64">
                <img
                    src="/FindWork.png"
                    alt="Project 3"
                    className="w-full h-full object-cover rounded-t-lg"
                />
            </figure>
            <div className="card-body p-6">
                <h2 className="card-title text-3xl">FindWork!</h2>
                <p className="text-lg">
                เป็นคอมมูนิตี้ที่เปิดให้ผู้ที่กำลังมองหางาน 
                <br>
                </br>
                หรือผู้ที่ต้องการคำแนะนำในการพัฒนาตัวเอง
                </p>
                <div className="card-actions justify-end">
                    <a href="https://findwork-f79e5.web.app/" target="_blank" rel="noopener noreferrer">
                        <button className="btn text-lg py-3 px-6">Learn More</button>
                    </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Project;
  