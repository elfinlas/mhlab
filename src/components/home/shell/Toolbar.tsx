import ThemeToggle from '@/components/ThemeToggle';
import HomeLanguageFlags from '@/components/home/shared/HomeLanguageFlags';

export default function Toolbar() {
  return (
    <div className='fixed right-4 top-4 z-50 flex items-center gap-2 sm:right-6 sm:top-6'>
      <HomeLanguageFlags />
      <ThemeToggle />
    </div>
  );
}
