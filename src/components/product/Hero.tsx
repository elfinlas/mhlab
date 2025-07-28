export default function ProductHero() {
  return (
    <section className="py-16 px-4 mt-10">
      <div className="container mx-auto text-center max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          MHlab Products
        </h2>
        <p className="text-xl text-slate-600 mb-8 leading-relaxed">
          MHLab에서 만든 다양한 웹 서비스와 앱을 소개합니다.
          
        </p>
        {/* <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
          <span className="px-3 py-1 bg-white rounded-full border">Web Applications</span>
          <span className="px-3 py-1 bg-white rounded-full border">Mobile Apps</span>
          <span className="px-3 py-1 bg-white rounded-full border">Digital Platforms</span>
          <span className="px-3 py-1 bg-white rounded-full border">User Experience</span>
        </div> */}
      </div>
    </section>
  );
}