import { useCallback, useState } from 'react';
import { Tag, TopicCardList, useFetchTopics } from '@/entities/Topic';
import cls from './FilteredTopics.module.scss';
import { TopicFilter } from '../TopicFilter/TopicFilter';

export const FilteredTopics = () => {
  const { topics, isLoading, error } = useFetchTopics();

  const [selectedFilter, setSelectedFilter] = useState<Tag>('Все темы');

  const handleSelect = useCallback(
    (tag: Tag) => {
      setSelectedFilter(tag);
    },
    [setSelectedFilter]
  );

  return (
    <>
      <aside className={cls.filter}>
        <TopicFilter selectedFilter={selectedFilter} onSelect={handleSelect} />
      </aside>
      <section className={cls.content}>
        <TopicCardList topics={topics} selectedFilter={selectedFilter} isLoading={isLoading} error={error} />
      </section>
    </>
  );
};
