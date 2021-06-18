import {useState} from 'react';
import Sidebar from './Sidebar';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';

const Home = () => {

    const [questions, setQuestions] = useState([
        { title : 'Why do we sleep?', body : "Sleep keeps us healthy and functioning well. It lets your body and brain repair, restore, and reenergize. If you don't get enough sleep, you might experience side effects like poor memory and focus, weakened immunity, and mood changes.", id : '1'},
        { title : "Benefits of regular exercise ?", body : "The four main types of physical activity are aerobic, muscle-strengthening, bone-strengthening, and stretching.", id : '2'},
    ]);
    const [answer, setAnswer] = useState(true);

    // const showAnswer = (e) => {
    //     setAnswer(!answer);
    //     console.log(answer);
    // }

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Navbar/>
                </div>
            </div>
            <div className="row">
                <div className="col-9">
                    <div className="home">
                        {questions.map((question) => (
                            <div className="preview" key={question.id}>
                                <h2 onClick={() => {setAnswer(!answer)}}>{question.title}</h2>
                                {/* <p>{question.body}</p> */}
                                {answer}
                                {answer ? ' ' : <p>{question.body}</p>}
                            </div>
                        ))}
                        </div>
                    </div>
                <div className="col-3">
                    <Sidebar/>
                </div>
            </div>
        </div>
        
    );
}

export default Home

// <div className="home">
        //     {questions.map((question) => (
        //         <div className="preview" key={question.id}>
        //             <h2 >{question.title}</h2>
        //             <p>{question.body}</p>
        //             {/* {setAnswer ? ' ' : <p>{question.body}</p>} */}
        //         </div>
        //     ))}
        // </div>