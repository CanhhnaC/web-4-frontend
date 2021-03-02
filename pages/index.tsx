import { Layout, MainContent } from '@/src/components/common';

export default function Home() {
  return (
    <MainContent heading="New and trending" subtitle="Based on player counts and release date">
      <div className="bg-red-500">Hello World</div>
    </MainContent>
  );
}

Home.Layout = Layout;
