import React from 'react';
//import {BucketList} from "./BucketList"; // export로만 impor 할 때.
import BucketList from './BucketList'; 
//import "./style.css";
import styled from "styled-components";



//클래스형 컴포넌트 사용법
class App extends React.Component{
  constructor(props){
    super(props); //  super는 부모클래스에 있는 props를 받아옴.
    this.state = {
      list: ["영화관 가기","매일 책읽기","수영 배우기"],
    };
    //Ref 생성 연결
    this.text = React.createRef();
  }
  componentDidMount(){
  }

  addBucket = () => {
    console.log(this.text.current.value);
    const new_item = this.text.current.value;
    // ... 스프레드 문법 
    // [...this.state.list, 넣고 싶었던 어떤 값] ->새로운 배열이 된다.
    // 추가하기 버튼을 눌렀을 때 새로운 창 뜨게 하는 함수
    this.setState({list: [...this.state.list, new_item]});
  }

  render(){
    //console.log(this.text.current);
    return (
      <BucketListStyle>
      <div className="App">
        <div className="container">
          <h1>내 버킷리스트</h1>
          <hr className='line'/>
          <BucketList list={this.state.list}/>
        </div> 
        
        <div className='textAdd'>
          <input type="text" ref={this.text}/>
          <button onClick={this.addBucket}>추가하기</button>
        </div>
          {/* <div>
            <input type="text" ref={this.text}
            onChange={() => {
              console.log(this.text.current.value);
            }}/>
          </div> */}
      </div>
      </BucketListStyle> 
    );
  }
}

/* 
함수형 컴포넌트 사용법
function App() {
  return (
    <div className="App">
      <BucketList/>
    </div>
  );
}
*/


// styled-components 사용해서 style 주기

const BucketListStyle = styled.div `
  background-color: #eee;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  //background-color: ${(props) => (props.bg_color? "red" : "purple")};
  //&:hover{background-color: yellow;}
  .container{
    background-color: #fff;
    width: 50vw;
    max-width: 350px;
    height: 70vh;
    margin: auto;
    padding: 16px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  h1{
    color: rgb(176, 84, 176);
    text-align: center;
  }
  hr{
    margin: 16px 0px;
  }
  .list-item{
    padding: 16px;
    margin: 8px;
    background-color: rgba(227, 227, 249, 0.652);
  }
  .textAdd{
    width: 50vw;
    max-width: 350px;
    height: 7vh;
    background-color: #fff;
    margin: 20px auto;
    padding: 16px;
    border: 1px solid #ddd;
    border-radius: 5px;
    line-height: 7vh;

  }
  .textAdd > input{
    width: 70%;
    height: 3vh;
    margin-right: 10px;
    border: 1px solid #ddd;
  }
  .textAdd button{
    width: 25%;
    height: 4vh;
    background-color: lavender;
    border: none;
    border-radius: 5px;
    color: #000;


  }
  .textAdd button:hover{
    cursor: pointer;
    background-color: transparent;
    border: 2px solid lavender;
    font-weight: 900;
  }
`;

export default App;
