import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function ProductHeader() {
    return (
        <header className='fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm z-50 border-b border-slate-200 dark:border-slate-700 '>
          <nav className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between items-center h-16'>
              <Link
                href='/'
                className='text-xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
              >
                ← MHLab
              </Link>
              <div className='flex items-center gap-2'>
                <span className='text-slate-500 dark:text-slate-400 text-sm mr-4'>
                🍭 Products
                </span>
                <ThemeToggle />
              </div>
            </div>
          </nav>
      </header>       
    )
}