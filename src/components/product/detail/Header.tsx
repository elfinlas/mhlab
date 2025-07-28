import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";


export default function ProductDetailHeader() {
    return (
        <header className="border-b sticky top-0 z-50 bg-white/80 backdrop-blur-sm">
            <nav className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center h-16'>
                    <Link
                    href='/product'
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


/*
      <header className="border-b sticky top-0 z-50 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </header>
*/