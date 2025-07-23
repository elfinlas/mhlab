import Header from '@/components/Header';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Header />
      <Hero />

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
            소개
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                저는 누구인가요?
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                안녕하세요! 저는 웹 개발에 열정을 가진 개발자입니다. 
                사용자 중심의 디자인과 최신 기술을 결합하여 
                의미 있는 웹 애플리케이션을 개발하는 것을 좋아합니다.
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                React, Next.js, TypeScript 등의 현대적인 기술 스택을 활용하여 
                성능이 뛰어나고 사용자 친화적인 웹사이트를 구축합니다.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-2xl">
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                주요 경험
              </h4>
              <ul className="space-y-3 text-slate-600 dark:text-slate-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  웹 개발 3년+ 경험
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  React/Next.js 전문가
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  반응형 웹 디자인
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  UI/UX 디자인 경험
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
            기술 스택
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "React", icon: "⚛️", color: "from-blue-500 to-cyan-500" },
              { name: "Next.js", icon: "▲", color: "from-black to-gray-800" },
              { name: "TypeScript", icon: "📘", color: "from-blue-600 to-blue-800" },
              { name: "Tailwind CSS", icon: "🎨", color: "from-cyan-500 to-blue-500" },
              { name: "Node.js", icon: "🟢", color: "from-green-500 to-green-700" },
              { name: "PostgreSQL", icon: "🐘", color: "from-blue-400 to-blue-600" },
              { name: "Git", icon: "📝", color: "from-orange-500 to-red-500" },
              { name: "Docker", icon: "🐳", color: "from-blue-500 to-blue-700" },
            ].map((skill, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center text-white text-xl font-bold`}>
                  {skill.icon}
                </div>
                <h3 className="text-center font-semibold text-slate-900 dark:text-white">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">
            프로젝트
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "포트폴리오 웹사이트",
                description: "Next.js와 Tailwind CSS를 활용한 반응형 포트폴리오 웹사이트",
                tech: ["Next.js", "TypeScript", "Tailwind CSS"],
                image: "🎨"
              },
              {
                title: "E-커머스 플랫폼",
                description: "React와 Node.js를 활용한 온라인 쇼핑몰 플랫폼",
                tech: ["React", "Node.js", "PostgreSQL"],
                image: "🛒"
              },
              {
                title: "할일 관리 앱",
                description: "사용자 친화적인 인터페이스의 할일 관리 애플리케이션",
                tech: ["React", "TypeScript", "LocalStorage"],
                image: "✅"
              }
            ].map((project, index) => (
              <div key={index} className="bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center">
                  <span className="text-6xl">{project.image}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
            연락처
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
            프로젝트나 협업에 관심이 있으시다면 언제든 연락주세요!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:contact@example.com" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
              이메일 보내기
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="px-8 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200">
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2024 포트폴리오. Next.js로 제작되었습니다.
          </p>
        </div>
      </footer>
    </div>
  );
}
