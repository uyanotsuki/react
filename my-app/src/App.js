import React from 'react';
function App() {
// 34
// function show1() {
//     alert(1);
//   }
//   function show2() {
//     alert(2);
//   }
//   function show3() {
//     alert(3);
//   }
//   return <div>
//     <p><button onClick={show1}>button 1</button></p>
//     <p><button onClick={show2}>button 2</button></p> 
//     <p><button onClick={show3}>button 3</button></p> 
//   </div>;

// // 35.1
//   class App extends React.Component {
//     handleClick(event) {
//       console.log(event);
//     }

//     render() {
//       return (
//         <button onClick={this.handleClick}>Нажмите на меня</button>
//       );
//     }
//   }

// // 35.2
//   class App extends React.Component {
//     handleClick(event) {
//       console.log(event.target);
//     }
//     render() {
//       return (
//         <button onClick={this.handleClick}>Нажмите на меня</button>
//       );
//     }
//   }

// // 36.2
  // function func(arg, arg2, event) {
  //   console.log(arg, arg2, event);
  // }

  // return (
  //   <div>
  //     <button onClick={event => func('eee', 'aaa', event)}>act</button>
  //   </div>
  // );

// 36.3
// 	function func(event, arg) {
// 		console.log(arg, event);
// 	}	
// 	return <div>
// 		<button onClick={event => func('eee', event)}>act</button>
// 	</div>;

// 36.4
// function func(arg, event, arg2) {
// 	console.log(arg, arg2, event);
// }
// return <div>
// 	<button onClick={event => func('eee', 'aaa', event)}>Нажмите на меня</button>
// </div>;

// 37
// 	const arr = [
// 		<li>1</li>,
// 		<li>2</li>,
// 		<li>3</li>,
// 		<li>4</li>,
// 		<li>5</li>,
// 	];
// return <ul>
// {arr}
// </ul>
// }

// 38
// 	const arr = [];
// 	for (let i = 1; i <= 5; i++) {
// 		arr.push(<li>{i}</li>);
// 	}
// 	return <ul>
// 		{arr}
// 	</ul>;

// 39
// const arr = ['a', 'b', 'c', 'd', 'e'];
// const res = arr.map(function(item) {
// 	return <li>{item}</li>;
// });
// return <ul>
// 	{res}
// </ul>;

// 40
// const arr = ['a', 'b', 'c', 'd', 'e'];
	
// const res = arr.map(function(item, index) {
// 	return <li key={index}>{item}</li>;
// });
	
// return <ul>
// 	{res}
// </ul>;

// 41
// const users = [
//     {name: 'user1', surn: 'surn1', age: 30},
//     {name: 'user2', surn: 'surn2', age: 31},
//     {name: 'user3', surn: 'surn3', age: 32},
// ];
// const res = users.map(function(item, index) {
// 	return <li key={index}>
// 	<span>{item.name}</span>:
// 	<span>{item.surn}</span>:
//      <span>{item.age}</span>
// 	</li>;
// });
	
// return <ul>
// 	{res}
// </ul>;

// 42
  // const users = [
  //   {id:1, name: 'user1', surn: 'surn1', age: 30 },
  //   {id:2, name: 'user2', surn: 'surn2', age: 31 },
  //   {id:3, name: 'user3', surn: 'surn3', age: 32 },
  // ];

  // const res = users.map(function (item) {
  //   return <li key={item.id}>
  //     <span>{item.name}</span>:
  //     <span>{item.surn}</span>:
  //     <span>{item.age}</span>
  //   </li>;
  // });

  // return <ul>
  //   {res}
  // </ul>;


  // 43
  // const users = [
  //   { id: 1, name: 'user1', surn: 'surn1', age: 30 },
  //   { id: 2, name: 'user2', surn: 'surn2', age: 31 },
  //   { id: 3, name: 'user3', surn: 'surn3', age: 32 },
  // ];
  // const rows = users.map(function (item) {
  //   return <tr key={item.id}>
  //     <td>{item.name}</td>
  //     <td>{item.surn}</td>
  //     <td>{item.age}</td>
  //   </tr>;
  // });

  // return <table>
  //   <thead>
  //     <tr>
  //       <td>Имя</td>
  //       <td>Фамилия</td>
  //       <td>Возраст</td>
  //     </tr>
  //   </thead>
  //   <tbody>
  //     {rows}
  //   </tbody>
  // </table>;

  // 44-47
  // const array = ['one', 'two', 'three'];
  // const res = array.map(function (item) {
  //   return <p id={uuid()}>{item}</p>
  // });

  // return <div>
  //   {res}
  // </div>

  // 48
  // function id() {
  //   return uuid()
  // }
  // const array = ['one', 'two', 'three'];
  // const res = array.map(function (item) {
  //   return <p id={id()}>{item}</p>
  // });

  // return <div>
  //   {res}
  // </div>


// 49
// function id() {
//     return uuid()
//   }
//   const prods = [
//     { id: id(), name: 'product1', cost: 100 },
//     { id: id(), name: 'product2', cost: 200 },
//     { id: id(), name: 'product3', cost: 300 },
//   ];
//   const res = prods.map(function(item) {
// 		return <p id={item.id}>
// 			<span>{item.name}</span>:
// 			<span>{item.cost}</span>
// 		</p>;
// 	});

//   return <div>
//     {res}
//   </div>

// 50 - 52
//  const [name, setName] = useState('fullName');
  // const [age, setAge] = useState('Age');

  // return <div>
  //   <p>{name}</p>
  //   <p>{age}</p>
  // </div>


// 53
// const [name, setName] = useState('fullName');

//   return <div>
//     <span>{name}</span><br />
//     <button onClick={() => setName('Pav A')}>Click me</button>
//     <button onClick={() => setName('fullname')}>reset</button>
//   </div>

// 54
// const [isBanned, setBan] = useState('False');
//   return <div>
//       <span>{isBanned ? "Banned" : "Not banned"}</span><br />
//       {isBanned ? (
//         <button onClick={() => setBan(false)}>Unban</button>
//       ) : (
//         <button onClick={() => setBan(true)}>Ban</button>
//       )}
//   </div>

// 55
const [count, setCount] = useState(0);
  return <div>
    <span>{count}</span>
    <button onClick={() => setCount(count + 1)}>+</button>
    <button onClick={() => setCount(count - 1)}>-</button>
    </div>;
}
export default App;
