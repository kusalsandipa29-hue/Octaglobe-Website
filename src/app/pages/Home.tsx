import { Landing } from '../components/chapters/Landing';
import { WhyWeExist } from '../components/chapters/WhyWeExist';
import { Opportunity } from '../components/chapters/Opportunity';
import { OperatingModel } from '../components/chapters/OperatingModel';
import { ResearchEngine } from '../components/chapters/ResearchEngine';
import { Philosophy } from '../components/chapters/Philosophy';
import { ProductSystem } from '../components/chapters/ProductSystem';
import { Evidence } from '../components/chapters/Evidence';
import { Builders } from '../components/chapters/Builders';
import { Future } from '../components/chapters/Future';
import { Connect } from '../components/chapters/Connect';

export function Home() {
  return (
    <main>
      <Landing />
      <WhyWeExist />
      <Opportunity />
      <OperatingModel />
      <ResearchEngine />
      <Philosophy />
      <ProductSystem />
      <Evidence />
      <Builders />
      <Future />
      <Connect />
    </main>
  );
}
