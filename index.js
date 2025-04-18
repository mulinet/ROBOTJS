var robot = require("@jitsi/robotjs");

robot.setMouseDelay(2);

let counters = {
    move: 0, // 마우스 움직임 횟수
    click: 0, // 마우스 클릭 횟수
    moveRight: 0 // 마우스 우측 이동 횟수
};

const logAction = (action, count) => {
    console.log(`${action} at count: ${count}`); // 동작과 횟수를 콘솔에 출력
};

const mouseMove = () => {
    const { width, height } = robot.getScreenSize(); // 화면 크기 가져오기
    const adjustedHeight = (height / 32) - 10; // 높이 조정
    const adjustedWidth = width / 32; // 너비 조정

    counters.move++;
    logAction("Mouse movement", counters.move); // 마우스 움직임 로그 출력

    for (let x = 0; x < adjustedWidth; x++) {
        const y = adjustedHeight * Math.sin((Math.PI * 2 * x) / adjustedWidth) + adjustedHeight;
        robot.moveMouse(x, y); // 마우스 이동
    }
};

const mouseClick = () => {
    counters.click++;
    logAction("Mouse click", counters.click); // 마우스 클릭 로그 출력
    robot.mouseClick(); // 마우스 클릭
};

const moveRight = () => {
    const { x, y } = robot.getMousePos(); // 현재 마우스 위치 가져오기
    counters.moveRight++;
    logAction("Mouse moved right", counters.moveRight); // 마우스 우측 이동 로그 출력
    robot.moveMouse(x + 10, y); // 마우스 우측으로 10 이동
};

// 주석을 해제하여 원하는 동작을 실행하세요
// Uncomment the desired interval function
// setInterval(mouseMove, 5000);
// setInterval(mouseClick, 5000);
setInterval(moveRight, 5000);