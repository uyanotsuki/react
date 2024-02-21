import React from 'react';
function App() {
  // 12
  return (
    <div>
      <input />
      <input />
      <input />
    </div>
  );

  // 13
  const str1 = 'text1';
	const str2 = 'text1';
	
	return <div>
		<p>{str1}</p>
		<p>{str2}</p>
	</div>;

  // 14
  const name = 'user';
	const agee  = '30';
	
	return <div>
		name: {name}
		age:  {agee}
	</div>;


  // 15
  const arr = [1, 2, 3, 4, 5];
  return <div>
    <ul>
      <li>{arr[0]}</li>
      <li>{arr[1]}</li>
      <li>{arr[2]}</li>
      <li>{arr[3]}</li>
      <li>{arr[4]}</li>
    </ul>
  </div>

  // 16
  const obj = {name: 'john', surname: 'smit'};
  <p>	name:    <span>obj.name</span>, <br/>
	surname: <span>obj.surname</span>, </p>

  // 17
  const attr = 'block';
	return <div id={attr}>
		text
	</div>;

  // 19
  const li = <ul><li>text1</li><li>text2</li><li>text3</li></ul>;
  return <main>
    {li}
  </main>

  // 20
  const items = <><li>text1</li><li>text2</li><li>text3</li></>;
	return <ul>
		{items}
	</ul>

  // 21
  return <div> 
    <input/> <br /> <input/> <br /> <input/> 
  </div>

  // 22
  return <div>
    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  </div>

  return <table>
		<tbody>
			<tr>
				<td>1</td>
				<td>2</td>
        <td>2</td>
			</tr>
			<tr>
				<td>3</td>
				<td>4</td>
        <td>2</td>
			</tr>
      <tr>
				<td>3</td>
				<td>4</td>
        <td>2</td>
			</tr>
		</tbody>
	</table>;

  // 26
  let ageee;
  const isAdult = true;
  if (isAdult) {
    ageee = <p> Есть 18 </p>
  }
  else {
    text = <p>Нет 18</p>
  }
  return <div>
    {text}
  </div>;

  // 27
  let text;
  const isAdmin = true;
  
  if (isAdmin) {
    text = <div><p>text1</p><p>text2</p></div>;
  }
  return text;

  // 28
  const age2 = 19;
  return <div>
    {age2 > 18 ? '>18' : '<18'}
  </div>;

  // 29
  const ss = true;
	return <div>
		{ss && <p>вы авторизованы</p>}
	</div>;

  // 30
  const dd = false;
  return <div>
    {!dd && <p>пожалуйста, авторизуйтесь</p>}
  </div>;

  // 31
  function getDigitsSum(num) {
    let sum = 0;
    while (num) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
    }
    const digitsSum = getDigitsSum(123);
    return <div>
      <div>Digits Sum of 123: {digitsSum}</div>
    </div>

 // 32
  function getDigitsSum(num) {
    let sum = 0;
    while (num) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
  }
  return <div>
    <div>Digits Sum: {getDigitsSum(12345)}</div>
  </div>

  // 33
  function show1() {
    alert(1);
  }
  function show2() {
    alert(2);
  }
  return <div>
    <button onClick={show1}>nina</button>
    <button onClick={show2}>nina</button>
  </div>;
}
export default App;
