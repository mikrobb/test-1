// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';

// const clubsArray = [
// {
//   id: 1,
//   ClubInfo:{
//     nameCommand: 'Динамо',
//     city: 'Киев',
//     year: '13.05.1927',
//     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/FC_Dynamo_Kyiv_logo.svg/1200px-FC_Dynamo_Kyiv_logo.svg.png',
//   },
//   ClubAchivments:{
//     rating: '31-е место УЕФА',
//     goals: 28
//   },
//   ClubPlayers:{
//     player1:'Валентин Моргун',
//     player2:'Георгий Бущан',
//     player3:'Денис Бойко',
//     player4:'Денис Игнатенко',
//     player5:'Руслан Нещерет',
//     player6:'Александр Караваев',
//     player7:'Александр Сирота',
//     player8:'Александр Тымчик',
//     player9:'Антон Боль',
//     player10:'Артем Шабанов',
//     player11:'Виталий Миколенко',
//     player12:'Денис Попов',
//     player13:'Илья Забарный',
//   }
// },

// {
//   id: 2,
//   ClubInfo:{
//     nameCommand: 'Шахтер',
//     city: 'Донецк',
//     year: '24.05.1936',
//     img:'https://upload.wikimedia.org/wikipedia/ru/thumb/a/a2/FC_Shakhtar_Donetsk_Logo.svg/1200px-FC_Shakhtar_Donetsk_Logo.svg.png',
//   },
//   ClubAchivments:{
//     rating: '18-е место УЕФА',
//     goals: 22
//   },
//   ClubPlayers:{
//     player1:'Маркос Антонио',
//     player2:'Манор Соломон',
//     player3:'Тарас Степаненко',
//     player4:'Тете',
//     player5:'Алан Патрик',
//     player6:'Виктор Корниенко',
//     player7:'Майкон',
//     player8:'Марлос',
//     player9:'Витао',
//     player10:'Лассина Траоре',
//     player11:'Николай Матвиенко',
//     player12:'Георгий Судаков',
//     player13:'Даниил Сикан',
//   }
// },

// {
//   id: 3,
//   ClubInfo:{
//     nameCommand: 'Барселона',
//     city: 'Испания',
//     year: '29.11.1899',
//     img:'https://upload.wikimedia.org/wikipedia/ru/thumb/2/24/FC_Barcelona.svg/1200px-FC_Barcelona.svg.png',
//   },
//   ClubAchivments:{
//     rating: '4-е место УЕФА',
//     goals: 33
//   },
//   ClubPlayers:{
//     player1:'Мемфис Депай',
//     player2:'Рональд Араухо',
//     player3:'Серджи Бускетс',
//     player4:'Серджиньо Дест',
//     player5:'Жерар Пике',
//     player6:'Серджи Роберто',
//     player7:'Френки де Йонг',
//     player8:'Гави',
//     player9:'Нико Гонсалес',
//     player10:'Оскар Мингеса',
//     player11:'Клеман Лангле',
//     player12:'Люк де Йонг',
//     player13:'Рикард Пуч',
//   }
// }]


// function RenderClubs({nameCommand , city , year ,id , onClick}){
//   return(
//     <div className="clubBlock">
//       <div>
//         Название комманды: {nameCommand}
//       </div>
//       <div className="info">
//         Город: {city}
//       </div>
//       <div className="info">
//         Год основания: {year}
//       </div>
//       <div className="info">
//         <a onClick={onClick} className="waves-effect waves-light btn modal-trigger">Больше информации</a>
//       </div>
//     </div>
//   )
// }

// function ClickedClub({img, nameCommand , city , year , rating , goals , player1,player2,player3,player4,player5,player6,player7,player8,player9,player10,player11,player12,player13}){
//   return(
//     <>
//     <div>
//       <div>
//         {/* <img src={img} alt="" /> */}
//       </div>
//       <div>
//           Название комманды: {nameCommand}
//         </div>
//         <div className="info">
//           Город: {city}
//         </div>
//         <div className="info">
//           Год основания: {year}
//         </div>
//         <div>
//           Рейтинг: {rating}
//         </div>
//         <div>
//           Голов забито: {goals}
//         </div>
//         <div>
//           <ol>
//             <li>{player1}</li>
//             <li>{player2}</li>
//             <li>{player3}</li>
//             <li>{player4}</li>
//             <li>{player5}</li>
//             <li>{player6}</li>
//             <li>{player7}</li>
//             <li>{player8}</li>
//             <li>{player9}</li>
//             <li>{player10}</li>
//             <li>{player11}</li>
//             <li>{player12}</li>
//             <li>{player13}</li>
//           </ol>
//         </div>
//     </div>
//     </>
//   )
  
// }

// function App() {
//   const [clickedId , setClickedId] = useState(1)
//   const clubFind = clubsArray.find((club)=> club.id === clickedId)
//   // console.log(clubsArray)
//   // let infoClubArray= clubsArray.map((club)=> )
//   // console.log(infoClubArray)

//   return (
//     <>
//       <div  className="mainBlock">{clubsArray.map((club)=><RenderClubs key={club.id} {...club.ClubInfo} onClick={() => setClickedId(club.id)}/>)}</div>
//       <div className="clickedClub"><ClickedClub {...clubFind.ClubInfo} {...clubFind.ClubAchivments} {...clubFind.ClubPlayers} /></div>
//     </>
//   );
// }

// export default App;





//exe 2--------------------------------------------------+

// import './App.css';
// import { useState } from 'react';

// const answers = [
//     'It is certain' ,
//     'It is decidedly so' ,
//     'Without a doubt' ,
//     'Yes — definitely' ,
//     'You may rely on it' ,
//     'As I see it, yes' ,
//     'Most likely' ,
//     'Outlook good' ,
//     'Signs point to yes' ,
//     'Yes' ,
//     'Reply hazy, try again' ,
//     'Ask again later' ,
//     'Better not tell you now' ,
//     'Cannot predict now' ,
//     'Concentrate and ask again' ,
//     'Don’t count on it' ,
//     'My reply is no' ,
//     'My sources say no' ,
//     'Outlook not so good' ,
//     'Very doubtful'
// ]



// function App(){
//   const [answer, setAnswer] = useState('')
//   let random = answers[Math.floor(Math.random()*answers.length)]

//   return(
//     <>
//     <h2 style={{'textAlign':'center'}}>Magic ball</h2>
//     <div className="magicBall">
//       <input className="inp" type="text" placeholder='Write your question'/>
//       <button className="btn red" onClick={()=>setAnswer(random)}>Find out the answer</button>
//       <p>{answer}</p>
//     </div>
//     </>
//   )
// }


// export default App;