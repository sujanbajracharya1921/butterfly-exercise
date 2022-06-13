import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Icon from '../common/icon';
import Moods from './Moods';
import QuestionReview from './Question-review';

const Questions = (props: any) => {
  const [questions, setQuestions] = useState([
    { question: 'I feel comfortable working and interacting with the colleagues on my team.', type: 'Teamwork', isAnswered: false },
    { question: 'I feel like I have a healthy work/life balance.', type: 'Work/Life Balance', isAnswered: false },
    { question: 'I like my work environment, and I believe it helps me perform at my best.', type: 'Workplace', isAnswered: false },
    { question: 'My direct manager gives me necessary support and clear objectives.', type: 'Management', isAnswered: false },
    { question: 'I am satisfied with my roles and responsibilities.', type: 'Roles and Responsibilities', isAnswered: false }
  ]);

  const router = useRouter();
  const [showUpdateMood, setShowUpdateMood] = useState(false);
  const [selectedMood, setSelectedMood] = useState<any>('');
  const [userRatedQuestionCount, setUserRatedQuestionCount] = useState(0);

  useEffect(() => {
    setSelectedMood(router.query.id);
  }, [router]);

  useEffect(() => {
    setQuestions(questions.sort(() => Math.random() - 0.5));
  }, [questions]);

  function handleCallback(answeredQuestion: any) {
    let index = questions.findIndex((question) => question.type == answeredQuestion.type);
    if (index > -1) questions[index].isAnswered = true;
    setQuestions(questions);
    const userRatedQuestionsCount = questions.filter((question) => question.isAnswered == true).length;
    setUserRatedQuestionCount(userRatedQuestionsCount);
  }

  function handleSendAnswerAction() {
    router.replace('/thankyou');
  }

  function getMoodSelectionMessage() {
    const feedback = ' Thank you for your Feedback.';
    switch (selectedMood) {
      case 'very-unhappy':
        return 'Oops, something needs to change.' + feedback;
      case 'un-happy':
        return 'Mmmmh, things should improve.' + feedback;
      case 'neutral':
        return 'OK… things could be better.' + feedback;
      case 'happy':
        return 'Great!' + feedback;
      case 'very-happy':
        return 'Awesome!' + feedback;
      default:
        break;
    }
  }

  function handleMoodUpdateCallBack() {
    setShowUpdateMood(false);
  }

  return (
    <div className='bg-[#166e78] pl-4 md:pl-12 pr-4'>
      <>
        {!showUpdateMood && (
          <div className='flex pt-2 md:pt-4 w-full mb-8'>
            <div className='flex text-center items-center justify-center'>
              <span onClick={() => setShowUpdateMood(true)} className='cursor-pointer hidden md:flex bg-[#0d4d54] h-6 w-6 items-center justify-center rounded-l-sm'>
                <Icon name='edit' />
              </span>
              {selectedMood && (
                <div onClick={() => setShowUpdateMood(true)} className='cursor-pointer'>
                  <Icon name={selectedMood as string} className='bg-white rounded-[50%] border-4 border-white' height={100} width={100} />
                </div>
              )}
            </div>
            <div className='text-white pt-3 w-[100%] md:w-[70%] pl-6'>
              <h4 className='font-bold text-lg'>{getMoodSelectionMessage()}</h4>
              <div className='text-sm text-[#7babb1] font-semibold'>
                Your answers will
                <strong className='text-[#2ce6ce]'> always remain anonymous</strong>
                <p>and will be viewed by the following managers:</p>
              </div>
              <div className='pt-2 flex text-[#7babb1] text-sm font-semibold'>
                <Image className='rounded-[50%]' src='/images/user_icon.png' alt='user' width='25' height='25' />
                <div className='pl-3'> Butterfly Inc</div>
              </div>
            </div>
            <div className='text-white hidden md:flex justify-end font-bold text-xl w-0 md:w-[15%]'>
              <div>Butterfly Inc.</div>
            </div>
          </div>
        )}
        {showUpdateMood && (
          <div className='pt-4 md:pt-8'>
            <div className='bg-[#0d4d54] w-full md:max-w-md h-36 rounded-sm'>
              <p className='text-white font-bold text-base p-4 md:pl-10'>Oops, you'd would like to change my mood:</p>
              <div className='flex gap-1 md:gap-4 justify-center items-center text-center pl-6 pr-6 md:pl-0 md:pr-0'>
                <Moods selectedMood={selectedMood} moodUpdateCallback={handleMoodUpdateCallBack} />
              </div>
            </div>
          </div>
        )}

        <div className='justify-center'>
          <p className='text-white font-bold mt-5 mb-5 text-lg'>Do you agree with the following statements:</p>
          {questions.map((question, i) => (
            <QuestionReview key={i} question={question} index={i} parentCallback={handleCallback} />
          ))}
        </div>

        <div className='h-auto w-full md:max-w-xl bg-[#1b828e] text-white rounded-md pr-4 pl-4 pb-7'>
          <div className='absolute w-0 h-0 mt-8 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-[#1b828e] -ml-6'></div>
          <div className='flex mb-3 justify-between pr-4 pt-6'>
            <div className='font-bold text-xl p-4 pl-6'>Anything to add? (Optional)</div>
            <div className='text-sm h-24 w-24 mb-3 bg-[#0d4d54] rounded-[50%] hidden md:flex items-center text-center justify-center font-bold'>
              Extra <br />
              feedback <br />
              helps
            </div>
          </div>
          <textarea
            className='text-gray-500 resize-none w-[95%] p-3 rounded-sm border-[#166e78] border-2 ml-3 md:ml-4'
            name='optionalComment'
            placeholder='Express yourself freely and safely. This will always remain anonymous.'
          ></textarea>
        </div>

        <div
          onClick={() => userRatedQuestionCount == 5 && handleSendAnswerAction()}
          className={`bg-[#2ce6ce] mt-8 h-10 w-40 rounded-sm justify-center items-center flex ${userRatedQuestionCount == 5 ? 'cursor-pointer' : ''} ${
            userRatedQuestionCount < 5 ? 'bg-[#ededed] text-gray-300' : 'text-white'
          }`}
        >
          <button className='font-bold' disabled={userRatedQuestionCount == 5 ? false : true}>
            Send answers
          </button>
        </div>
      </>
    </div>
  );
};

export default Questions;
