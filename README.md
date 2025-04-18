# ROBOTJS 스크립트

이 스크립트는 `@jitsi/robotjs` 라이브러리를 사용하여 마우스 동작(움직임, 클릭, 방향 이동)을 자동화합니다.

## 기능

1. **마우스 움직임**:
   - 마우스를 화면에서 사인파 패턴으로 이동시킵니다.
   - 움직임 횟수를 로그로 출력합니다.

2. **마우스 클릭**:
   - 마우스 클릭을 시뮬레이션합니다.
   - 클릭 횟수를 로그로 출력합니다.

3. **우측 이동**:
   - 마우스 포인터를 현재 위치에서 우측으로 10 단위 이동시킵니다.
   - 이동 횟수를 로그로 출력합니다.

## 사용법

1. 의존성 설치:
   ```bash
   npm install @jitsi/robotjs
   ```

2. 스크립트 실행:
   ```bash
   node index.js
   ```

3. 스크립트에서 원하는 동작의 주석을 해제하세요:
   - `mouseMove`: 마우스를 사인파 패턴으로 이동.
   - `mouseClick`: 마우스 클릭 시뮬레이션.
   - `moveRight`: 마우스 포인터를 우측으로 이동.

4. 스크립트는 동작 횟수를 콘솔에 출력합니다.

## 참고 사항

- 스크립트를 실행하기 전에 `@jitsi/robotjs` 라이브러리를 설치하세요.
- 필요에 따라 간격 시간을 수정하세요.

---

# ROBOTJS Script

This script uses the `@jitsi/robotjs` library to automate mouse actions such as movement, clicking, and directional movement.

## Features

1. **Mouse Movement**:
   - Moves the mouse in a sine wave pattern across the screen.
   - Logs the number of movements.

2. **Mouse Click**:
   - Simulates a mouse click.
   - Logs the number of clicks.

3. **Move Right**:
   - Moves the mouse pointer 10 units to the right from its current position.
   - Logs the number of right movements.

## Usage

1. Install dependencies:
   ```bash
   npm install @jitsi/robotjs
   ```

2. Run the script:
   ```bash
   node index.js
   ```

3. Uncomment the desired interval function in the script:
   - `mouseMove`: Moves the mouse in a sine wave pattern.
   - `mouseClick`: Simulates mouse clicks.
   - `moveRight`: Moves the mouse pointer to the right.

4. The script logs the action counts to the console.

## Notes

- Ensure the `@jitsi/robotjs` library is installed before running the script.
- Modify the interval timings as needed for your use case.