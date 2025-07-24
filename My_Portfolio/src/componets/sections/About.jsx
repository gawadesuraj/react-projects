export const About = () => {
    const frontendSkills = [
        "react","vue","typeScript"
    ]
    
    const backendSkills = [
        "nodejs","mongodb","typeScript"
    ]
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About me
        </h2>
        <div className="rounded-xl p-8 border-white/10 border hover:translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem impedit tempora pariatur libero deleniti quos dolor incidunt fuga. Sapiente fuga unde laudantium qui totam deserunt. Corporis ut possimus deserunt a
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">
                        Frontend
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {
                            frontendSkills.map((tech, key)=>(
                                <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
                                    {tech}
                                </span>
                            )
                            )
                        }
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 hover:translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">
                        Backend
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {
                            frontendSkills.map((tech, key)=>(
                                <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                    {tech}
                                </span>
                            )
                            )
                        }
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="rounded-xl p-6 border-white/10 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">
                        Education
                    </h3>   
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong>B.S. in Compter Science </strong> - XYZ university(2016-2020)
                        </li>
                        <li>
                            <strong>B.S. in Compter Science </strong> - XYZ university(2016-2020)
                        </li>
                        <li>
                            <strong>B.S. in Compter Science </strong> - XYZ university(2016-2020)
                        </li>
                    </ul>
                </div>

                <div className="rounded-xl p-6 border-white/10 hover:-translate-y-1 transition-all">
                    <h3 className="text-xl font-bold mb-4">
                        Work Experience
                    </h3>   
                    <div className="space-y-4 text-gray-300">
                        <div>
                            <h4 className="font-semibold">
                                Software Engineer
                            </h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam error cum quaerat quo corrupti mollitia dolor cupiditate quod aspernatur nostrum.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold">
                                Hardware Engineer
                            </h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam error cum quaerat quo corrupti mollitia dolor cupiditate quod aspernatur nostrum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
