import { useEffect, useReducer} from 'react';
import './App.css';
import Header from './mycomponents/Header';
import Main from './mycomponents/Main';
import Loader from './mycomponents/loader';
import Error from './mycomponents/error';
import StartView from './mycomponents/startView';
import Question from './mycomponents/question';
import NextButton from './mycomponents/nextButton';
import Progressbar from './mycomponents/progressbar';
import FinishView from './mycomponents/finishView';
import Timer from './mycomponents/timer';

//!---------------------Zamani------------------------|
//*----------------Commonds---------------------------|
//todo----------------☺️👇-----------------------------|
//?  1: run -> npm run dev for starting react server  |
//?  2: run -> npm run json-server for starting       |
//?          json-server for reading questions from   |
//?          questions.json in data folder            |
//!---------------------------------------------------|

function App() {
  const initialState = {
    questions: [],
    // loading,error, ready,active,finished  
    status: 'loading',
    index: 0,
    Answer: null,
    points: 0,
    secondsRemained:null,
  };
  function reducer(state, action) {
    switch (action.type) {
      case "dataReceived":
        return { ...state, questions: action.payload, status: 'ready' }
      case 'dataFailed':
        return { ...state, status: 'error' };
      case 'start':
        return { ...state, status: 'active',secondsRemained:state.questions.length * 30 }
      case 'newAnswer':
        const question = state.questions.at(state.index);
        return {
          ...state, Answer: action.payload,
          points: action.payload === question.correctOption
            ? state.points + question.points
            : state.points
        }
      case 'nextQuestion':
        return { ...state, index: state.index + 1, Answer: null }
      case 'finish':
        return { ...state, status: 'finished' };
      case 'restart':
        return { ...initialState, status: 'ready', questions: state.questions }
      case 'timer':
        return {
          ...state,
          secondsRemained:state.secondsRemained-1,
          status:state.secondsRemained===0 ? "finished":state.status}
      default:
        throw new Error('Unknown Type');
    }

  };


  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(state);
  const { status, questions, index, Answer, points,secondsRemained } = state;
  const QNo = questions.length;
  const PNo = questions.reduce((prev, cur) => {
    return prev + cur.points;
  }, 0)



  useEffect(() => {
    fetch('http://localhost:9000/questions')
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'dataReceived', payload: data }))
      .catch((error) => { dispatch({ type: 'dataFailed' }) })
  }, [])
  return (
    <>
      <Header />
      <div className=' min-h-screen w-[80%] ml-[10%]'>
        <Main>
          {status == 'loading' && <Loader />}
          {status == 'error' && <Error />}
          {status == 'ready' && <StartView QNo={QNo} dispatch={dispatch} />}
          {status == 'active' &&
            (<>
              <Progressbar answer={Answer} index={index} QNo={QNo} points={points} PNo={PNo} />
              <Question question={questions[index]} dispatch={dispatch} Answer={Answer}
              />
              <span className=' flex justify-between'>

                <Timer dispatch={dispatch} secondsRemained={secondsRemained} />
                <NextButton dispatch={dispatch} answer={Answer} index={index} QNo={QNo} />
              </span>

            </>)
          }
          {status == 'finished' && <FinishView points={points} PNo={PNo} dispatch={dispatch} />}
        </Main>

      </div>
    </>
  )
}

export default App
