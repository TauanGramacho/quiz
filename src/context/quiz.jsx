import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const quizContext = createContext();

// eslint-disable-next-line react/prop-types
export const QuizProvider = ({children}) => {
    const value = {name: "Quiz"};
    return <quizContext.Provider value={value}>{children}</quizContext.Provider>
};