import { useEffect, useState } from 'react';
import { Topic } from '../types/topic';
import { AxiosError } from 'axios';
import { TopicService } from '../services/topicService';

export const useFetchTopics = () => {
  const [isLoading, setLoading] = useState(false);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    let ignore = false;
    setLoading(true);

    TopicService.findAll()
      .then((res) => {
        if (res.status !== 200) {
          setError('something went wrong while loading topics.');
        }
        return res.data;
      })
      .then((topics) => {
        if (!ignore) {
          setTopics(topics);
          setError(undefined);
        }
      })
      .catch((err: unknown) => {
        if (ignore) return;
        if (err instanceof AxiosError) {
          setError(err?.message ?? err.response?.data);
        } else {
          setError('something went wrong while loading topics.');
        }
      })
      .finally(() => {
        if (ignore) return;
        setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, []);

  return {
    topics,
    isLoading,
    error
  };
};
