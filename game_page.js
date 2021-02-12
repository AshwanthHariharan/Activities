
player_1name = localStorage.getItem("Player_1_Name");

player_2name = localStorage.getItem("Player_2_Name");

player1_score = 0;

player2_score = 0;

document.getElementById("player1_name").innerHTML = player_1name + " : ";

document.getElementById("player2_name").innerHTML = player_2name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;

document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_1name;

document.getElementById("player_question").innerHTML = "Question Turn -" + player_2name;

function send() {

get_word = document.getElementById("Word").value;

word = get_word.toLowerCase();

char1 = word.charAt(1);

length_divide = Math.floor(word.length/2);

char2 = word.charAt(length_divide);

length_minus = word.length - 1;

char3 = word.charAt(length_minus);

remove_char1 = word.replace(char1, "_");

remove_char2 = remove_char1.replace(char2, "_");

remove_char3 = remove_char2.replace(char3, "_");

console.log(remove_char3);

question_word = "<h4 id='word_display'>Q. " + remove_char3 + "</h4>";

input = "<br>Answer: <input id='input_check_box' type='text' placeholder='Word'>";

check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";

row = question_word + input + check_button ;

document.getElementById("output").innerHTML = row;

document.getElementById("Word").value = "";

}

answer_turn = "player1";

question_turn = "player2";

function check() {

get_answer = document.getElementById("input_check_box").value;

answer = get_answer.toLowerCase();

console.log(answer);

if(answer == word) {

if (answer_turn == "player1") {

player1_score = player1_score + 1;

document.getElementById("player1_score").innerHTML = player1_score;

}

else {

    player2_score = player2_score + 1;

    document.getElementById("player2_score").innerHTML = player2_score;

}

}

if(question_turn == "player1") {

question_turn = "player2"

document.getElementById("player_question").innerHTML = "Question Turn - " + player_1name;

}

else {

    question_turn = "player1"

    document.getElementById("player_question").innerHTML = "Question Turn - " + player_2name;

}

if(answer_turn == "player1") {

    answer_turn = "player2"
    
    document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_1name;
    
    }
    
    else {
    
        question_turn = "player2"
    
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_2name;
    
    }

    document.getElementById("output").innerHTML = "";

}