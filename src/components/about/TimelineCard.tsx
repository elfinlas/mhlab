import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

interface TimelineCardProps {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  badgeVariant?: 'default' | 'secondary' | 'destructive' | 'outline';
  position?: 'left' | 'right';
  paragraphs?: string[];
}

// <b>...</b>로 감싼 부분만 font-bold로 변환하는 함수
function renderBoldParagraph(text: string) {
  const parts = text.split(/(<b>.*?<\/b>)/g);
  return parts.map((part, idx) => {
    if (part.startsWith('<b>') && part.endsWith('</b>')) {
      return (
        <span key={idx} className="font-bold text-primary">
          {part.replace(/<\/?b>/g, '')}
        </span>
      );
    }
    return <span key={idx}>{part}</span>;
  });
}

export default function TimelineCard({
  title,
  description,
  imageSrc,
  imageAlt,
  position = 'left',
  paragraphs = [],
}: TimelineCardProps) {
  return (
    <div className='relative flex items-center'>
      {/* left일 때는 빈 공간이 오른쪽에, right일 때는 빈 공간이 왼쪽에 */}
      {position === 'right' && (
        <div className='hidden md:flex md:flex-1 md:pr-8'></div>
      )}
      <div className={`w-full md:flex-1 ${position === 'left' ? 'md:pr-8' : 'md:pl-8'}`}>
        <Card className={`w-full md:max-w-lg ${position === 'left' ? 'md:ml-auto' : ''}`}>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>

          <CardContent>
            {/* 단락들 렌더링 */}
            {paragraphs.map((paragraph, index) => (
              <div key={index}>
                <p className='text-base text-muted-foreground font-semibold'>
                  {renderBoldParagraph(paragraph)}
                </p>
                {index < paragraphs.length - 1 && <br />}
              </div>
            ))}

            {/* 이미지가 있는 경우 */}
            {imageSrc && (
              <div className='flex justify-center mb-4 mt-4'>
                <Image
                  src={imageSrc}
                  alt={imageAlt || title}
                  width={300}
                  height={150}
                  className='rounded-lg w-full'
                />
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Timeline Dot */}
      <div className='absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 hidden md:block'></div>

      {/* left일 때만 오른쪽에 빈 공간 */}
      {position === 'left' && (
        <div className='hidden md:flex md:flex-1 md:pl-8'></div>
      )}
    </div>
  );
}
