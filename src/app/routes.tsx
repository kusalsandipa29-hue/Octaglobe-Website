import { createBrowserRouter } from 'react-router';
import { Root } from './Root';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Blog } from './pages/Blog';
import { CaseStudies } from './pages/CaseStudies';
import { DigiQCaseStudy } from './pages/DigiQCaseStudy';
import { TapFareLankaCaseStudy } from './pages/TapFareLankaCaseStudy';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'about', Component: About },
      { path: 'blog', Component: Blog },
      { path: 'case-studies', Component: CaseStudies },
      { path: 'case-studies/digiq', Component: DigiQCaseStudy },
      { path: 'case-studies/tapfare-lanka', Component: TapFareLankaCaseStudy },
      { path: '*', Component: NotFound },
    ],
  },
]);
