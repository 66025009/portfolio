const About = () => {
    return (
      <div id="about" className="bg-black flex justify-center items-start">
        <div className="bg-gradient-to-r from-[#0a1f3d] to-[#4c1d95] text-white p-16 rounded-lg shadow-xl mt-14 relative overflow-hidden">
          <h2 className="text-5xl font-bold text-center text-white mb-6 relative z-10">
            About Me
          </h2>
          <p className="text-xl text-gray-200 relative z-10">
            Hi, my name is John Doe. I am a web developer with a passion for creating modern and responsive websites. I have experience in front-end technologies such as React, HTML, CSS, and JavaScript, and I love working on creative and challenging projects. When I am not coding, you can find me exploring new technologies or enjoying outdoor activities.
          </p>
          <p className="text-xl text-gray-200 mt-4 relative z-10">
            I also enjoy working on personal projects, experimenting with new frameworks, and continually learning to improve my skills. My goal is to develop software that makes a meaningful impact on users and helps solve real-world problems.
          </p>
  
          <div className="absolute bottom-0 left-0 w-14 h-14 animate-run z-10">
            <img src="/main.png" alt="Running Character" className="w-full h-full object-contain" />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-r from-[#ffffff55] via-[#ffffff22] to-transparent z-0 blur-3xl"></div>
        </div>
      </div>
    );
  };
  
  export default About;
  