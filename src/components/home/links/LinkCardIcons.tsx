export function GithubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill='currentColor'
      viewBox='0 0 24 24'
      aria-hidden
    >
      <path d='M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z' />
    </svg>
  );
}

export function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      viewBox='0 0 24 24'
      aria-hidden
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M12 20h9' />
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M12 4v16m0 0H3m9 0a9 9 0 100-18 9 9 0 000 18z'
      />
    </svg>
  );
}

export function ThreadsIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden
    >
      <path
        d='M20 4C11.163 4 4 11.163 4 20c0 8.837 7.163 16 16 16s16-7.163 16-16c0-8.837-7.163-16-16-16zm0 29c-7.18 0-13-5.82-13-13S12.82 7 20 7s13 5.82 13 13-5.82 13-13 13zm2.7-8.1c1.2-.6 2-1.8 2-3.1 0-2.1-1.7-3.8-3.8-3.8-2.1 0-3.8 1.7-3.8 3.8 0 1.3.8 2.5 2 3.1-.2.3-.3.7-.3 1.1 0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8c0-.4-.1-.8-.3-1.1zm-2.7-4.1c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z'
        fill='currentColor'
      />
      <path
        d='M20 11c-5 0-9 4-9 9h2c0-3.9 3.1-7 7-7s7 3.1 7 7c0 2.2-1.1 4.2-2.9 5.5l1.2 1.6C28.1 24.1 29 22.1 29 20c0-5-4-9-9-9z'
        fill='currentColor'
      />
    </svg>
  );
}
