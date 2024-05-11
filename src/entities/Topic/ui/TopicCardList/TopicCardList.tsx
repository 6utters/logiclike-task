import { memo, useMemo } from 'react';
import { Tag, Topic } from '../../model/types/topic';
import { TopicCard } from '../TopicCard/TopicCard';
import cls from './TopicCardList.module.scss';

interface TopicCardListProps {
  topics: Topic[];
  selectedFilter: Tag;
  isLoading: boolean;
  error?: string;
}

export const TopicCardList = memo((props: TopicCardListProps) => {
  const { topics, isLoading, selectedFilter, error } = props;

  const filteredTopics = useMemo(() => {
    if (!!error || !topics) return;

    if (selectedFilter === 'Все темы') return topics;

    return topics.filter((topic) => topic.tags.includes(selectedFilter));
  }, [selectedFilter, topics, error]);

  if (isLoading) {
    return (
      <div>
        <span>Идет загрузка тем...</span>
      </div>
    );
  }

  if (error || !filteredTopics) {
    return (
      <div>
        <span>{error}</span>
      </div>
    );
  }

  return (
    <div className={cls.list}>
      {filteredTopics.map((topic) => (
        <a href={'#'} key={topic.id}>
          <TopicCard topic={topic} />
        </a>
      ))}
    </div>
  );
});
