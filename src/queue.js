class Queue {
  constructor() {
    this.storage = {}; // queue 저장공간
    this.front = 0; //맨 앞, 삭제가 일어나는 쪽
    this.rear = 0; //맨 마지막(=stack의 top) 삽입이 일어나는 쪽
  }

  // queue의 크기
  // return this.rear로 하지 않는 이유 :
  // dequeue 할 때 rear 위치는 고정이지만 front 위치가 변화하기 때문에
  size() {
    return Object.keys(this.storage).length;
  }

  //storage에서 rear 위치에 데이터 삽입
  //rear 위치 1씩 증가
  enqueue(element) {
    this.storage[this.rear] = element;
    this.rear++;
  }

  //빈 queue 일 때
  //storage에서 front 위치의 데이터 delete, front 위치 1씩 증가
  dequeue() {
    if (this.rear === 0) {
      return 0;
    } else {
      let removed = this.storage[this.front];
      delete this.storage[this.front];
      this.front++;
      return removed;
    }
  }
}
