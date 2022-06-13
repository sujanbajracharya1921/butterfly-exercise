import { useState } from 'react';
import Icon from '../common/icon';
import { useRouter } from 'next/router';

function Moods(props: any) {
  const [moods] = useState(['very-unhappy', 'un-happy', 'neutral', 'happy', 'very-happy']);
  const Router = useRouter();

  function handleMoodReaction(name: string) {
    if (Router.query.id) props.moodUpdateCallback(true);
    Router.push(`/questions/${name}`);
  }

  return (
    <>
      {moods.map((name, i) => (
        <div key={i} onClick={() => handleMoodReaction(name)}>
          <Icon
            name={name}
            viewBox='0 0 12 12'
            className={`${props.selectedMood == name ? 'bg-white rounded-[50%] border-4 border-white' : props.className ? props.className : ''} 
            ${props.selectedMood ? 'hover:border-white hover:bg-white rounded-[50%] hover:border-4' : ''} cursor-pointer`}
          />
        </div>
      ))}
    </>
  );
}

export default Moods;
