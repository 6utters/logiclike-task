import cls from './App.module.scss';
import { FilteredTopics } from '@/features/FilterTopics';

export const App = () => {
  return (
    <main className={cls.wrapper}>
      <FilteredTopics />
    </main>
  );
};
