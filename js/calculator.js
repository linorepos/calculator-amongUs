const FAIL = 'SHHHHHHHH!';

function isValidOperation(operation) {
  return operation && operation.length >= 3;
}

function findOperator(operation) {
  for (let i = 1; i < operation.length - 1; i++) {
    if (['+', '-', '*', '/'].includes(operation[i])) {
      const rightPart = operation.slice(i + 1);
      if (!isNaN(parseFloat(rightPart))) {
        return { position: i, symbol: operation[i] };
      }
    }
  }
  return { position: -1, symbol: '' };
}

function validateOperands(left, right) {
  const numberPattern = /^[-+]?\d*\.?\d+$/;
  return numberPattern.test(left) && numberPattern.test(right);
}

function performOperation(num1, num2, operator) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num2 === 0 ? FAIL : num1 / num2;
    default:
      return FAIL;
  }
}

export function calculate(operation) {
  if (!isValidOperation(operation)) {
    return FAIL;
  }

  const { position, symbol } = findOperator(operation);
  if (position === -1) {
    return FAIL;
  }

  const leftPart = operation.slice(0, position);
  const rightPart = operation.slice(position + 1);

  if (!validateOperands(leftPart, rightPart)) {
    return FAIL;
  }

  const num1 = parseFloat(leftPart);
  const num2 = parseFloat(rightPart);
  if (isNaN(num1) || isNaN(num2)) {
    return FAIL;
  }

  const result = performOperation(num1, num2, symbol);

  if (typeof result === 'number' && Number.isFinite(result)) {
    return parseFloat(result.toFixed(3));
  } else {
    return FAIL;
  }
}
