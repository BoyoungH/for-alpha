import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import store from "../../store";
import Swal from 'sweetalert2';
import { TabBarItem } from "../../components/TabBarItem";
import { ButtonPrimary } from "../../components/ButtonPrimary";
import { NavBar } from "../../components/NavBar";
import { Icon7 } from "../../icons/Icon7";
import { Icon8 } from "../../icons/Icon8";
import { Icon9 } from "../../icons/Icon9";
import { Icon10 } from "../../icons/Icon10";
import { LeftButton } from "../../icons/LeftButton";
import { Answer } from '../Answer/Answer'; 
import axios from "axios";
import "./style.css";

export const Quiz = () => {
  const [question, setQuestion] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizId, setQuizId] = useState(null);

  const quizText = useSelector((state) => state.quiz.quizText);
  const quizAnswer = useSelector((state) => state.quiz.quizAnswer);
  const quizExplanation = useSelector((state) => state.quiz.quizExplanation);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchQuestion();

    dispatch({
      type: "SET_QUIZ",
      quizText,
      quizAnswer,
      quizExplanation,
    });
  }, []);

  const fetchQuestion = async () => {
    try {
      // quiz 문제 조회
      const response = await axios.get("http://test2.shinhan.site:8002/foralpha-service/point/quiz");
      const quizText = response.data.payload.quiz_question;
      const quizId = response.data.paypoad.id;
      setQuestion(quizText);
      setQuizId(quizId);
      console.log("Quiz question loaded");
      // quiz 정답 및 해설 조회
      const answerResponse = await axios.get(`http://test2.shinhan.site:8002/foralpha-service/point/quiz/answer?quiz-uuid=${quizId}`);
      const quizAnswer = answerResponse.data.payload.quiz_answer;
      const quizExplain = answerResponse.data.payload.quiz_explanation;
    } catch (error) {
      console.error("Failed to fetch question:", error);
    }
  };

  const handleButtonClick = async (choice) => {
    setSelectedAnswer(choice);

    try {
      const isCorrect = choice === quizAnswer;

      await axios.post("http://test2.shinhan.site:8002/foralpha-service/point/quiz", {
        quizId,
        userId: "user-id",
        selectedAnswer: choice,
      });

      if (isCorrect) {
        Swal.fire({
          text: "정답입니다!",
          icon: "success",
          timer: 2000, // 알림이 자동으로 사라지는 시간 (밀리초 단위)
        });
      } else {
        Swal.fire({
          text: "오답입니다!",
          icon: "error",
          timer: 2000,
        });
      }
    } catch (error) {
      console.error("Failed to send user choice:", error);
    }
  };

  return (
    <div className="quiz">
    <div className="div-2">
      <div className="overlap-group">
        <div className="feed">
          <div className="products">
            <div className="vertical-card-wrapper">
              <div className="vertical-card">
                <div className="frame" />
                <div className="content">
                  <div className="title">
                    <p className="question">
                      {question}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="products-wrapper">
            <div className="products-2">
              <ButtonPrimary
                className="button-primary-instance"
                divClassName="design-component-instance-node"
                text="O"
                onClick={() => handleButtonClick("O")}
              />
              <ButtonPrimary
                className="button-primary-instance-2"
                divClassName="design-component-instance-node"
                text="X"
                onClick={() => handleButtonClick("X")}
              />
            </div>
          </div>
        </div>
        <div className="tab-bar">
                <TabBarItem className="tab-3" icon={<Icon7 className="icon-2" />} selected={false} title="Home" />
                <TabBarItem className="tab-3" icon={<Icon8 className="icon-2" />} selected={false} title="Point" />
                <TabBarItem className="tab-3" icon={<Icon9 className="icon-2" />} selected={false} title="Feed" />
                <TabBarItem className="tab-3" icon={<Icon10 className="icon-2" />} selected={false} title="Profile" />
            </div>
        </div>
      <NavBar
        className="nav-bar-instance"
        hasRightButton={false}
        icon={<LeftButton className="left-button-4" />}
        leftControl="icon"
        pageTitle="OX퀴즈"
        rightButtonClassName="nav-bar-2"
        rightControl="none"
        leftLink="/point-home"
      />
    </div>
  </div>
  );
};