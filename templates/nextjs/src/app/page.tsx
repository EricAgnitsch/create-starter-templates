'use client';

import { useAuth } from '@/contexts/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@icons';
import { Button, Spinner } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const { user, authLoading } = useAuth();

  useEffect(() => {
    if (!authLoading && !user) {
      router.replace('/login');
    }
  }, [user, authLoading]);

  return (
    <>
      {user ? (
        <main
          className={
            'flex min-h-screen flex-col items-center justify-between p-24'
          }
        >
          <Button className={'bg-blue-300'}>
            <FontAwesomeIcon icon={'home'} />
          </Button>
        </main>
      ) : (
        <Spinner className={'w-full min-h-screen'} size={'lg'} />
      )}
    </>
  );
}
