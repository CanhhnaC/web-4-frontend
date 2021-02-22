import { Navbar, Sider } from '@/src/components/common';
import { Container } from '@/src/components/ui';

export default function Home() {
  return (
    <div className="bg-gray-200 text-white h-full">
      <Container>
        <Navbar />
        <div className="flex flex-row justify-between">
          <Sider />
          <div className="w-10/12 bg-red-500">Content</div>
        </div>
      </Container>
    </div>
  );
}
