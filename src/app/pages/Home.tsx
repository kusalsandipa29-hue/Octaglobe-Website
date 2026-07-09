import { Landing } from '../components/chapters/Landing';
import { WhyWeExist } from '../components/chapters/WhyWeExist';
import { Opportunity } from '../components/chapters/Opportunity';
import { OperatingModel } from '../components/chapters/OperatingModel';
import { ResearchEngine } from '../components/chapters/ResearchEngine';
import { Philosophy } from '../components/chapters/Philosophy';
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
      <Connect />
    </main>
  );
}
