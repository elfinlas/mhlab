export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
            <span className="text-4xl font-bold text-white">👨‍💻</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-4">
            안녕하세요! <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              개발자
            </span>입니다
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            창의적인 웹 개발과 사용자 경험에 열정을 가진 개발자입니다.
            최신 기술을 활용하여 의미 있는 디지털 솔루션을 만들어갑니다.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
            프로젝트 보기
          </button>
          <button className="px-8 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200">
            이력서 다운로드
          </button>
        </div>
      </div>
    </section>
  );
} 