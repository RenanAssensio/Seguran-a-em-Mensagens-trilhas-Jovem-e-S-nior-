import { createBrowserRouter } from 'react-router';
import Root from './layouts/Root';
import Home from './pages/Home';
import TrailDefesa from './pages/TrailDefesa';
import TrailJovem from './pages/TrailJovem';
import QuizIntro from './pages/QuizIntro';
import QuizQuestion from './pages/QuizQuestion';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'trilhas/mecanismos-defesa', Component: TrailDefesa },
      { path: 'trilhas/jovem', Component: TrailJovem },
      { path: 'quiz', Component: QuizIntro },
      { path: 'quiz/desafio', Component: QuizQuestion },
    ],
  },
]);
