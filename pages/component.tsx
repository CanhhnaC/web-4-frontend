import React from 'react';
import { Button, Container } from '@/src/components/ui';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Component = () => {
  return (
    <Container className="bg-gray-200 text-white">
      <div className="flex flex-col">
        Component
        <div className="space-x-1 flex items-center">
          <Button>Hello World</Button>
          <Button icon={faPlus}>Hello World</Button>
          <Button icon={faPlus}></Button>
        </div>
      </div>
    </Container>
  );
};

export default Component;
