class Stack {
  constructor() {
    this.storage = {}; //저장소
    this.top = 0; //가장 위에 있는 element의 위치
  }

  //stack의 크기 top위치로 파악
  size() {
    return this.top;
  }

  //top의 위치를 push 할 때 마다 추가
  //storge에 push로 element 삽입
  push(element) {
    this.top++;
    this.storage[this.top] = element;
  }

  //빈 stack 일 때 pop 실행하지 않고 그대로 리턴
  //top 위치에 있는 element를 delete하고 top의 위치도 -1씩 감소
  //top 의 위치를 리턴
  pop() {
    if (this.top === 0) {
      return;
    }
    let a = this.storage[this.top];
    delete this.storage[this.top];
    this.top--;
    return a;
  }

  //최상단에 위치한 element 반환
  peak() {
    return this.storage[this.top];
  }
}
