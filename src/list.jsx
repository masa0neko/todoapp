import React from 'react';

// ファイル名についている.jsxは、JavaScript内でhtmlが記述できる中々優秀な奴だよ。気になったら調べてみよう。

class ToDoList extends React.Component{ // 「reactコンポーネント」の機能を継承した、TodoListという名前の「class」を宣言しているよ
  constructor(props){ // このように記述することで、index.jsで記述したlistを「props」という形で受け取ることができるよ
    super(props);
    this.state = { // この「コンポーネント」で使用する「state」の初期値を宣言しているよ
      toDoList: props.toDoList,
      textTitle: '',
      textContent: '',
      textdeadline:'',
      texthope:'',
      dateTargetValue: new Date(),
    };
    this.addToDo = this.addToDo.bind(this); // ここの2行はとりあえず気にしなくてok。気になるよーって人は「react es6 bind」で調べてみよう！
    this.deleteToDo = this.deleteToDo.bind(this);
  }　

  addToDo(){ // 追加ボタンが押されたときの処理を書いている「関数」だよ
    let list = this.state.toDoList.slice(); // この行の記述がわからなかったら、「代入」で調べてみよう！
    list.push({ title: this.state.textTitle, content: this.state.textContent,deadline: this.state.textdeadline,hope: this.state.texthope ,date:this.state.dateTargetValue}); // 「push」は「配列」を操作するためのものだよ。調べてみよう！
    list.sort((a, b) => {return (a.date-b.date)})
    this.setState({toDoList: list}); // 「setState」は「react」さんに備わった特殊能力だよ。調べてみよう！
  }

  deleteToDo(i){ // 削除ボタンが押されたときの処理を書いている「関数」だよ
    let list = this.state.toDoList;
    list.splice(i, 1); // 「splice」は「配列」を操作するためのものだよ。調べてみよう！
    this.setState({toDoList: list});
  }

  render(){
    const domList = this.state.toDoList.map((m, i) =>{ // 「map」は「配列」を操作するためのものだよ。調べてみよう！(ここの記述が一番難しいかも...)                                                                                               
      return <li key={i}> {/*<li>は「html」さんの特殊能力だよ。何をするものかわからなかったら調べてみよう */ }
        タイトル：{m.title}<br/> {/*<br>も「html」さんの特殊能力だよ。 */}
        内容：{m.content}<br/>
        締切：{m.deadline}<br/>
        目標：{m.hope}<br/>
        }
        <button onClick={() => this.deleteToDo(i)}>削除{i}</button> {/*<button>も「html」さんの特殊能力だよ。onClickという記述で、このボタンが押されたときの処理を追加できるよ*/}
      </li>;
    });

    console.log(this.state)
    return(
    <div> {/*<div>も「html」さんの特殊能力なんじゃ */}
        <div>

          タイトル：<input type="text" value={this.state.textTitle} 
            onChange={e => this.setState({textTitle: e.target.value})}/> {/*<input>も「html」さんの特殊能力だよ。type, value, onChangeは全部<input>さんの特殊能力だから、わからなかったら調べてみよう */}

          内容：<input type="text" value={this.state.textContent} 
            onChange={e => this.setState({textContent: e.target.value})}/>
 
          締切：<input type="date" value={this.state.textdeadline}
            onChange={e => this.setState({textdeadline: e.target.value})}/>

          目標：<input type="date" value={this.state.texthope}
            onChange={e => {
              let s = e.target.value
              s.replace(/-/,"/")
              let d = new Date(s)
              this.setState({
                texthope: e.target.value,
                dateTargetValue: d,
              })
            }}/>
        </div>
        <button onClick={this.addToDo}>追加</button>
        <ul>{domList}</ul> {/*ここでさっき宣言したdomListを表示しているよ。あと<ul>も「html」さんの特殊能力なんじゃ */}
      </div>
    );
  }
}

export default ToDoList;