import { memo } from 'react';
import { Card } from '@/shared/ui/Card';
import { Topic } from '../../model/types/topic';

interface TopicCardProps {
  topic: Topic;
}

export const TopicCard = memo((props: TopicCardProps) => {
  const { topic } = props;

  return <Card label={topic.name} image={topic.image} backgroundColor={topic.bgColor} />;
});
