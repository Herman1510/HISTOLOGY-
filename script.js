// Track quiz start time
const startTime = Date.now();

// Correct answers
const correctAnswers = {
    q1: "E",
    q2: "B",
    q3: "C",
    q4: "C",
    q5: "A",
    q6: "B",
    q7: "A",
    q8: "B",
    q9: "C",
    q10: "B",
    q11: "C",
    q12: "A",
    q13: "C",
    q14: "B",
    q15: "B",
    q16: "C",
    q17: "C",
    q18: "C",
    q19: "B",
    q20: "A",
    q21: "D",
    q22: "B",
    q23: "A",
    q24: "A",
    q25: "A",
    q26: "B",
    q27: "B",
    q28: "A",
    q29: "C",
    q30: "C",
    q31: "C",
    q32: "B",
    q33: "A",
    q34: "B",
    q35: "C",
    q36: "A",
    q37: "C",
    q38: "D",
    q39: "D",
    q40: "B",
    q41: "A",
    q42: "C",
    q43: "C",
    q44: "C",
    q45: "D",
    q46: "A",
    q47: "C",
    q48: "A",
    q49: "A",
    q50: "B",
    q51: "E",
    q52: "A",
    q53: "E",
    q54: "A",
    q55: "B",
    q56: "E",
    q57: "B",
    q58: "C",
    q59: "C",
    q60: "B",
    q61: "E",
    q62: "B",
    q63: "A",
    q64: "E",
    q65: "C",
    q66: "A",
    q67: "E",
    q68: "D",
    q69: "D",
    q70: "B",
    q71: "A",
    q72: "C",
    q73: "E",
    q74: "B",
    q75: "E",
    q76: "E",
    q77: "A",
    q78: "B",
    q79: "A",
    q80: "D",
    q81: "E",
    q82: "E",
    q83: "A",
    q84: "C",
    q85: "E",
    q86: "B",
    q87: "D",
    q88: "C",
    q89: "D",
    q90: "E",
    q91: "C",
    q92: "C",
    q93: "D",
    q94: "A",
    q95: "A",
    q96: "C",
    q97: "A",
    q98: "A",
    q99: "A",
    q100: "C"
};

// Handle quiz submission
document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent page refresh
    
    // Calculate time spent
    const endTime = Date.now();
    const timeSpent = ((endTime - startTime) / 1000).toFixed(2); // Ensure time is in seconds

    let studentName = document.getElementById("studentName").value;
    let answers = {};
    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;

    // Loop through questions
    Object.keys(correctAnswers).forEach((key) => {
        let selectedOption = document.querySelector(`input[name="${key}"]:checked`);
        if (selectedOption) {
            answers[key] = selectedOption.value;
            if (selectedOption.value.toUpperCase() === correctAnswers[key].toUpperCase()) {
                score++;
            }
        }
    });

    let percentage = (score / totalQuestions) * 100;
    let grade = percentage >= 80 ? "A" : percentage >= 70 ? "B" : percentage >= 60 ? "C" : percentage >= 50 ? "D" : "F";
    
    // Display only score and grade
    let resultHTML = `
        <p><strong>Name:</strong> ${studentName}</p>
        <p><strong>Score:</strong> ${score}/${totalQuestions} (${percentage.toFixed(2)}%)</p>
        <p><strong>Grade:</strong> ${grade}</p>
        <p><strong>Time Spent:</strong> ${timeSpent} seconds</p>
    `;

    // Display the result
    document.getElementById("result").innerHTML = resultHTML;

    // Disable the form after submission to prevent multiple submissions
    document.getElementById("quizForm").querySelectorAll('input').forEach((input) => {
        input.disabled = true;
    });

    // Optional: Reset form after a delay (only after result is displayed)
    // setTimeout(() => {
    //     document.getElementById("quizForm").reset();
    // }, 2000);
});
