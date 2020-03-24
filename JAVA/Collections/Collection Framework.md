# Collection Framework

배열의 단점을 보완하기 위하여 자바가 java.util 패키지에서 제공하는 자료구조입니다.

추가, 삭제, 정렬 등의 기능처리가 간단하게 해결 되어 자료구조적인 알고리즘을 구현할 필요가 없습니다.

## Collection Framework 특징

어떤 자료형이라도 저장할 수 있습니다.

크기를 동적으로 늘이고 줄일 수 있습니다.

Set 

List

Queue

Map

|인터페이스 분류|특징                                             |구현클래스                        |
|--------|-----------------------------------------------|-----------------------------|
|List    |- Index로 접근 <br>- 순서 유지 O <br>- 중복 저장 O                |Arraylist, LinkedList, Vector|
|Set     |- Index로 접근 - 순서 유지 X - 중복 저장 X                |HashSet, TreeSet             |
|Map     |- Key와 Value가 한쌍으로 저장 - Key의 중복은 저장 X - 순서 유지 X|HashMap, HashTable, TreeMap  |



##