// @ts-nocheck
import { useState } from 'react';
import Icon from '../common/icon';

const QuestionReview = (props: any) => {
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [totalRatings] = useState([1, 2, 3, 4, 5]);
  const [hoverRating, setHoverRating] = useState(0);
  const [userRating, setUserRating] = useState(0);

  enum ratingBackground {
    'color1' = '#e95666',
    'color2' = '#f98371',
    'color3' = '#f7a062',
    'color4' = '#ffdc00',
    'color5' = '#ffdc00'
  }

  function getHoverBackgroudColor(i: number) {
    const selectedRating = hoverRating || userRating;
    const colorCode = ratingBackground[`color${selectedRating}`];
    if (!selectedRating) {
      return 'transparent';
    } else {
      if (i == selectedRating && i != 1) return `linear-gradient(90deg,${colorCode} 50%,transparent 0)`;
      else if (i < selectedRating) return colorCode;
    }
  }

  function checkUserRatingStatus(index: number) {
    if (userRating && userRating == index) {
      const baseClass = 'bg-[#1b828e] rounded-[50%]';
      if (userRating == 5) return baseClass + ' ' + 'text-[#ffdc00]';
      return baseClass + ' ' + 'text-white';
    }
  }
  function handleUserRatingAction(index: number) {
    setShowCommentBox(true);
    setUserRating(index + 1);
    let answeredQuestion = props.question;
    answeredQuestion.isAnswered = true;
    props.parentCallback(answeredQuestion);
  }

  function getStarcolorOnUserRated(index: number) {
    const selectedRating = hoverRating || userRating;
    return selectedRating > index ? 'white' : 'gray';
  }

  return (
    <div key={props.type} className='bg-[#fff] h-auto w-full md:max-w-xl mb-4 rounded-md pl-3 pr-3 ml-auto mr-auto md:ml-0 md:mr-0'>
      <div className='flex justify-end'>
        <div className='absolute h-24 -mt-1 previousRating flex justify-center items-center mr-2'>
          <div className='text-xs text-white -ml-14 flex justify-center items-center text-center'>
            Last time
            <br />
            you said:
            <div className='flex justify-center absolute text-white pt-14'>
              {totalRatings.map((rating, i) => (
                <div key={i}>
                  <Icon name='star' height={10} width={10} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='absolute w-0 h-0 mt-8 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-white -ml-5'></div>
      <p className='text-gray-400 text-sm pl-6 pt-2'>{props.index + 1} of 5 </p>
      <div className='pl-6 pb-6 w-[80%] pr-6'>
        <p className='text-[#2ce6ce] mb-4 font-bold'>{props.question.type}</p>
        <p className='font-bold text-xl text-gray-500'>{props.question.question}</p>
      </div>

      <div className='flex justify-center'>
        <div className='bg-[#f7f7f7] w-[90%] grid grid-cols-5 rounded-3xl border-[3px] border-gray-200'>
          {totalRatings.map((rating, i) => (
            <div
              key={i}
              style={{ background: getHoverBackgroudColor(i + 1), color: getStarcolorOnUserRated(i) }}
              className={` ${i == 4 ? 'lastStar' : ''} flex justify-center star-wrapper items-center text-center hover:text-white first:rounded-l-full`}
              onMouseOver={() => setHoverRating(i + 1)}
              onMouseLeave={() => setHoverRating(0)}
              onClick={() => {
                handleUserRatingAction(i);
              }}
            >
              <div
                className={`${checkUserRatingStatus(
                  i + 1
                )} justify-center hover:bg-[#1b828e] hover: flex  items-center text-center  hover:rounded-[50%] h-10 w-10 hover:h-11 hover:w-11 hover:absolute
                ${i == 0 ? 'firstStar' : 'star-div '}`}
              >
                <Icon name='star' />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-between p-4 pl-8 pr-8 font-bold text-[#4a4a4a]'>
        <p>Disagree</p>
        <p>Agree</p>
      </div>
      <div className='text-center mt-1'>
        {!showCommentBox && (
          <button className='text-[#2ce6ce] underline font-bold text-lg mb-5' onClick={() => setShowCommentBox(true)}>
            Add comment
          </button>
        )}

        {showCommentBox && (
          <textarea
            className='resize-none w-[90%] p-3 mb-5 border-2 border-slate-400 rounded-md'
            name='comment'
            placeholder={`Anything to add for ${props.question.type}`}
          ></textarea>
        )}
      </div>
    </div>
  );
};

export default QuestionReview;
