import { Check } from 'lucide-react';

type FeatureCheckBulletProps = {
  dotClass: string;
};

export function FeatureCheckBullet({ dotClass }: FeatureCheckBulletProps) {
  return (
    <span
      className={`mr-3 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${dotClass}`}
      aria-hidden
    >
      <Check className='h-2.5 w-2.5 text-white' strokeWidth={3} />
    </span>
  );
}
