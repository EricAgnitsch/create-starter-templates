import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@nextui-org/react';
import '@icons';

export default function Home() {
  return (
    <main
      className={'flex min-h-screen flex-col items-center justify-between p-24'}
    >
      <Button className={'bg-blue-300'}>
        <FontAwesomeIcon icon={'home'} />
      </Button>
    </main>
  );
}
