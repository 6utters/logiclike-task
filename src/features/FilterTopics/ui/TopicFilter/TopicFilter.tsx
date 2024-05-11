import { memo } from 'react';
import { topicFilters } from '../../model/consts/topics';
import cls from './TopicFilter.module.scss';
import { Tag } from '@/entities/Topic';

interface TopicFilterProps {
  selectedFilter: Tag;
  onSelect: (tag: Tag) => void;
}

export const TopicFilter = memo((props: TopicFilterProps) => {
  const { selectedFilter, onSelect } = props;

  return (
    <div className={cls.wrapper}>
      {topicFilters.map((filter) => (
        <li className={`${cls.listItem} ${filter.value === selectedFilter ? cls.selected : ''}`} key={filter.id}>
          <button className={cls.button} onClick={() => onSelect(filter.value)}>
            <div className={cls.label}>{filter.label}</div>
          </button>
        </li>
      ))}
    </div>
  );
});
