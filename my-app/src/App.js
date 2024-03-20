import React from 'react';
function App() {
// // 56
//   const [text1, setText1] = useState('');
//     const [text2, setText2] = useState('');

//     function handleChangeInput1(event) {
//       setText1(event.target.value);
//     }

//     function handleChangeInput2(event) {
//       setText2(event.target.value);
//     }

//     return (
//       <div>
//         <label>Input 1: </label>
//         <input value={text1} onChange={handleChangeInput1} />
//         <p>Text from Input 1: {text1}</p>

//         <label>Input 2: </label>
//         <input value={text2} onChange={handleChangeInput2} />
//         <p>Text from Input 2: {text2}</p>
//       </div>
//     );

//   // 57
//   const [inputText, setInputText] = useState('');

//   function handleChange(event) {
//     const inputValue = event.target.value;
//     setInputText(inputValue);
//   }

//   return (
//     <div>
//       <label>Input: </label>
//       <input value={inputText} onChange={handleChange} />
//       <p>Number of characters: {inputText.length}</p>
//     </div>
//   );

//   // 58
//   const [fahrenheit, setFahrenheit] = useState('');

//   function handleChange(event) {
//     setFahrenheit(event.target.value);
//   }

//   function convertToCelsius() {
//     const fahrenheitValue = parseFloat(fahrenheit);
//     const celsiusValue = (fahrenheitValue - 32) * (5 / 9);
//     return isNaN(celsiusValue) ? 'Invalid input' : celsiusValue.toFixed(2);
//   }

//   return (
//     <div>
//       <label>Enter Fahrenheit: </label>
//       <input value={fahrenheit} onChange={handleChange} />
//       <p>Celsius: {convertToCelsius()}</p>
//     </div>
//   );

//   // 59
//   const [value1, setValue1] = useState(0);
//   const [value2, setValue2] = useState(0);
//   const [value3, setValue3] = useState(0);
//   const [value4, setValue4] = useState(0);
//   const [value5, setValue5] = useState(0);

//   function handleChange1(event) {
//     setValue1(+event.target.value);
//   }

//   function handleChange2(event) {
//     setValue2(+event.target.value);
//   }

//   function handleChange3(event) {
//     setValue3(+event.target.value);
//   }

//   function handleChange4(event) {
//     setValue4(+event.target.value);
//   }

//   function handleChange5(event) {
//     setValue5(+event.target.value);
//   }

//   const average = (value1 + value2 + value3 + value4 + value5) / 5;

//   return (
//     <div>
//       <input value={value1} onChange={handleChange1} />
//       <input value={value2} onChange={handleChange2} />
//       <input value={value3} onChange={handleChange3} />
//       <input value={value4} onChange={handleChange4} />
//       <input value={value5} onChange={handleChange5} />
//       <p>Average: {average}</p>
//     </div>
//   );

  // 60
  // const [number, setNumber] = useState('');
  // const [productOfDivisors, setProductOfDivisors] = useState(1);

  // function handleBlur() {
  //   const parsedNumber = parseInt(number, 10);
  //   if (!isNaN(parsedNumber) && parsedNumber !== 0) {
  //     const divisors = getDivisors(parsedNumber);
  //     const product = divisors.reduce((acc, divisor) => acc * divisor, 1);
  //     setProductOfDivisors(product);
  //   } else {
  //     setProductOfDivisors(0);
  //   }
  // }

  // function getDivisors(n) {
  //   const divisors = [];
  //   for (let i = 1; i <= n; i++) {
  //     if (n % i === 0) {
  //       divisors.push(i);
  //     }
  //   }
  //   return divisors;
  // }

  // return (
  //   <div>
  //     <input value={number} onChange={event => setNumber(event.target.value)} onBlur={handleBlur} />
  //     <p>Product of Divisors: {productOfDivisors}</p>
  //   </div>
  // );

  // // 61
  // const [text, setText] = useState('');

  // function handleChange(event) {
  //   setText(event.target.value);
  // }

  // function transliterate(text) {
  //   const transliterationMap = {
  //     а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'e', ж: 'zh', з: 'z', и: 'i',
  //     й: 'y', к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r', с: 's', т: 't',
  //     у: 'u', ф: 'f', х: 'kh', ц: 'ts', ч: 'ch', ш: 'sh', щ: 'sch', ы: 'y', э: 'e',
  //     ю: 'yu', я: 'ya', А: 'A', Б: 'B', В: 'V', Г: 'G', Д: 'D', Е: 'E', Ё: 'E', Ж: 'Zh',
  //     З: 'Z', И: 'I', Й: 'Y', К: 'K', Л: 'L', М: 'M', Н: 'N', О: 'O', П: 'P', Р: 'R',
  //     С: 'S', Т: 'T', У: 'U', Ф: 'F', Х: 'Kh', Ц: 'Ts', Ч: 'Ch', Ш: 'Sh', Щ: 'Sch',
  //     Ы: 'Y', Э: 'E', Ю: 'Yu', Я: 'Ya'
  //   };

  //   return text.split('').map(char => transliterationMap[char] || char).join('');
  // }

  // const transliteratedText = transliterate(text);

  // return (
  //   <div>
  //     <textarea value={text} onChange={handleChange} />
  //     <p>Transliteration: {transliteratedText}</p>
  //   </div>
  // );

  // // 62
  // const [htmlChecked, setHtmlChecked] = useState(false);
  // const [cssChecked, setCssChecked] = useState(false);
  // const [jsChecked, setJsChecked] = useState(false);

  // return (
  //   <div>
  //     <label>
  //       <input type="checkbox" checked={htmlChecked} onChange={() => setHtmlChecked(!htmlChecked)} />
  //       HTML
  //     </label>
  //     <p>HTML: {htmlChecked ? 'знает' : 'не знает'}</p>

  //     <label>
  //       <input type="checkbox" checked={cssChecked} onChange={() => setCssChecked(!cssChecked)} />
  //       CSS
  //     </label>
  //     <p>CSS: {cssChecked ? 'знает' : 'не знает'}</p>

  //     <label>
  //       <input type="checkbox" checked={jsChecked} onChange={() => setJsChecked(!jsChecked)} />
  //       JavaScript
  //     </label>
  //     <p>JavaScript: {jsChecked ? 'знает' : 'не знает'}</p>
  //   </div>
  // );

  // 63
  const [isOver18, setIsOver18] = useState(false);

  let content;
  if (isOver18) {
    content = (
      <div>
        <h2>вам уже есть 18</h2>
        <p>здесь расположен контент только для взрослых</p>
      </div>
    );
  } else {
    content = (
      <div>
        <p>Увы, вам еще нет 18 лет</p>
      </div>
    );
  }

  return (
    <div>
      <input type="checkbox" checked={isOver18} onChange={() => setIsOver18(!isOver18)} />
      {content}
    </div>
  );
}
export default App;
