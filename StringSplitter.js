function solution(str) {
    const pairs = [];
    for (let i = 0; i < str.length; i += 2) {
      const pair = str[i] + (str[i + 1] || '_');
      pairs.push(pair);
    }
    return pairs;
  }

  console.log(solution("hugue"))