
function calculate(expression) {
    if (typeof expression !== "string" || expression.trim() === "") {
        return "계산식을 입력해주세요.";
    }

    const input = expression.replace(/\s+/g, "");
    let position = 0;

    function peek() {
        return input[position];
    }

    // 숫자 읽기
    function parseNumber() {
        const start = position;
        let dots = 0;

        while (position < input.length) {
            const char = peek();

            if (char >= "0" && char <= "9") {
                position++;
            } else if (char === ".") {
                dots++;
                if (dots > 1) throw new Error("잘못된 숫자");
                position++;
            } else {
                break;
            }
        }

        const value = input.slice(start, position);

        if (!value || value === ".") {
            throw new Error("숫자 오류");
        }

        return Number(value);
    }

    // 숫자, 괄호, 양수와 음수 처리
    function parseFactor() {
        if (peek() === "+") {
            position++;
            return parseFactor();
        }

        if (peek() === "-") {
            position++;
            return -parseFactor();
        }

        if (peek() === "(") {
            position++;
            const value = parseExpression();

            if (peek() !== ")") {
                throw new Error("괄호 오류");
            }

            position++;
            return value;
        }

        return parseNumber();
    }

    // 곱셈과 나눗셈
    function parseTerm() {
        let value = parseFactor();

        while (peek() === "*" || peek() === "/") {
            const operator = input[position++];
            const next = parseFactor();

            if (operator === "*") {
                value *= next;
            } else {
                if (next === 0) {
                    throw new Error("0으로 나눌 수 없습니다.");
                }
                value /= next;
            }
        }

        return value;
    }

    // 덧셈과 뺄셈
    function parseExpression() {
        let value = parseTerm();

        while (peek() === "+" || peek() === "-") {
            const operator = input[position++];
            const next = parseTerm();

            if (operator === "+") {
                value += next;
            } else {
                value -= next;
            }
        }

        return value;
    }

    try {
        const result = parseExpression();

        if (position !== input.length) {
            throw new Error("잘못된 계산식입니다.");
        }

        if (!Number.isFinite(result)) {
            throw new Error("계산 결과가 유효하지 않습니다.");
        }

        return result;

    } catch (error) {
        return "오류: " + error.message;
    }
}

// 계산 테스트
console.log("사칙연산 계산기 테스트");

console.log(calculate("10 + 5")); 
console.log(calculate("10 + 5 * 2"));
console.log(calculate("100 / 5 + 3 * 2"));
console.log(calculate("10 + 20 * 3 - 40 / 2"));
console.log(calculate("10 + 2 * 3 - 8 / 4 + 5 * 6"));
console.log(calculate("(10 + 5) * 2"));
console.log(calculate("-10 + 3 * 4"));
