import { Container } from 'src/layouts/Container/Container';
import { Header } from 'src/layouts/Header/Header';
import { Sider } from 'src/layouts/Sider/Sider';

export default function Home() {
  return (
    <div className="bg-gray-200 text-white h-screen">
      <Container>
        <Header />
        <div className="flex flex-row justify-between">
          <Sider />
          <div className="w-10/12 bg-red-500">Content</div>
        </div>
      </Container>
    </div>
  );
}
