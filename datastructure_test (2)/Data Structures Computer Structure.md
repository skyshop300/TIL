# Data Structures & Computer Structure

# Array VS ArrayList vs LinkedList

---

### 기본 개념

- array vs List

    **array: 데이터를 줄줄이저장한다.**

    list: 

### Array

- **특징 // 사용 목적**
    - **index**로 해당 원소에 빠르게 접근할 수 있다.
    - 데이터를 줄줄이 저장한다
    - 
- **장점 // 조회, 삭제, 삽입**

    찾고자 하는 원소의 index 값을 알고 있으면 O(1)에 해당 원소로 직접 접근할 수 있다.

    즉, random access가 가능하다는 장점이 있다.

- **단점 // 조회, 삭제, 삽입**

    사이즈가 초기에 고정된다.

    삭제과정: 해당 원소에 접근하여 작업을 완료한 뒤(O(1)), 추가적인 작업을 하기 때문에 시간이 더욱 오래 걸린다. 특정 원소를 삭제 할 경우 배열의 연속적인 특징이 깨진다. 즉, 빈 공간이 생긴다. 따라서, 삭제한 원소보다 큰 인덱스를 갖는 원소들을 `shift`해줘야 하는 비용이 발생하고, 이 경우 시간 복잡도는 O(n)가 된다.

    삽입과정: n 번째 자리에 새로운 원소를 추가한다면 그 이후의 원소들의 인덱스를 1씩 `shift`해줘야 하기 때문에 **O(n)**의 결과를 갖는다.

    → **Array 자료구조**에서 수정, 삭제 기능에 대한 time complexity의 worst case는 **O(n)**이다.

    **⇒ LinkedList!!!**

### LinkedList

- **특징**

    **데이터 삭제, 삽입하는데에 빠름:** 

    연결형태로 연결이 되어있다.

    ArrayList처럼 뒤로 밀거나 채우는 작업 없이 주소만 서로 연결시켜 주면 되기 때문에 추가 삭제가 ArrayList보다 빠르고 용이.

    순차접근만 가능하다.

    단순 LinkedList는 단방향성을 가지고 있어 인덱스를 이용해 자료를 검색하는 어플리케이션에 부적합

    **데이터 탐색에 불리:** n개의 자료를 저장할 때, LinkedList는 자료들을 저장공간에 불연속적인 단위로 저장하여, 메모리 이곳저곳에 산재하고 있다.

    참조자를 위해 추가적인 메모리를 할당해야만한다.

- **장점**

    사이즈가 유동적이다.

    dsds

- **단점**

    ㅇㅇ

### ArrayList

- **특징**

    데이터를 탐색하는데에 빠르다.

- **장점**

    속도: 데이터탐색이 빠르다.

    사이즈:  유동적이다.

    Random Access 가능

- **단점**

    속도: 삽입 삭제가 느리다.

    데이터의 삽입과 삭제가 느리다.

    사이즈가 고정되어있다.

    삽입시 사이즈를 늘려주는 연산이 추가되어야한다.

/table

[Untitled](Data%20Structures%20Computer%20Structure/Untitled%20Database.csv)

# Stack vs Queue vs Heap

---

[자료구조 알고리즘 정리 - Stack / Queue / Deque / Heap](https://www.leafcats.com/125)

# Tree

---

- **Binary Tree**

- **Binary Search Tree**

# Binary Heap

---

# Red Black Tree

---

- **Red Black Tree?**

# Hash Table

---

# Graph

---

# Java Collections Framework

---

# Memory

---

### Code Area

**코드 자체, HEX, BIN**

프로그래머가 작성한 코드가 실행되는 영역

### Data Area

**전역변수, 정적변수, 배열, 구조체**

전역변수와 Static 변수가 저장되는 영역. 프로그램이 시작되면 할당되며 종료되면 소멸.

### Heap Area

**동적할당(malloc), new(객체)**

사용자가 직접 관리하는 메모리영역. 동적메모리영역이라고 부름. 낮은 주소에서 높은 주소로 할당. // 위에서 아래로 할당

사용자가 직접 메모리를 할당하고 해제해야하기 때문에 불편. 메모리를 사용하지 않아도 메모리영역을 계속 차지하고 있다. 하지만 JAVA에서는 GC가 자동으로 메모리를 관리해준다.

Java에서 선언하는 배열, 클래스, 인터페이스 등이 동적메모리에 할당된다. 즉, new 키워드를 통해 생성되는 객체가 이곳에 할당 된다.

### Stack Area

**지역변수, 매개변수, 리턴 값**

함수와 지역변수가 저장되는 공간. 

높은 주소에서 낮은 주소로 메모리 주소가 할당된다.

함수 호출이 완료되면 소멸된다.

Java에서 선언하는 자료형(int, char..)의 타입을 갖는 것들이 저장된다.

크기가 정해져 있는 타입, 컴파일 시에 계산이 이루어진다.

메모리 작업이 종료되면 할당된 메모리 공간은 반환되어 없어짐.

운영체제가 메모리를 관리해주나 크기에 제약이 있음.

![Data%20Structures%20Computer%20Structure/Untitled.png](Data%20Structures%20Computer%20Structure/Untitled.png)