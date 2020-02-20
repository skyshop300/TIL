# 1. Git 저장소 생성 및 최초 commit

### 1) git init

git 초기화 및 .git 폴더 생성

    git init 

### 2) git status

    git status

- git init 후

![1%20Git%20commit/Untitled.png](1%20Git%20commit/Untitled.png)

- 코드 수정 후

    **빨간색 파일은 commit되지 않는다.**

![1%20Git%20commit/Untitled%201.png](1%20Git%20commit/Untitled%201.png)

- git add . 이후

    **초록색 파일은 커밋 된다.**

![1%20Git%20commit/Untitled%202.png](1%20Git%20commit/Untitled%202.png)

### 3) touch initial

    touch initial
    git add initial

### 4) git commit -m "[message]"

    git commit -m "[message]"

![1%20Git%20commit/Untitled%203.png](1%20Git%20commit/Untitled%203.png)

- git commit 이후

![1%20Git%20commit/Untitled%204.png](1%20Git%20commit/Untitled%204.png)

### 4) git push -u origin master

    git push -u origin master

![1%20Git%20commit/Untitled%205.png](1%20Git%20commit/Untitled%205.png)

- git push 이후

![1%20Git%20commit/Untitled%206.png](1%20Git%20commit/Untitled%206.png)

### 5) git remote

`git remote`는 바로 원격 저장소를 관리할 수 있는 명령어

    git remote add [name] https://github.com/~~

- [https://github.com/~~](https://github.com/~~) 원격 repository를 origin이라는 이름으로 저장한다.
- 원격 repository의 `[name]`은 통상적으로 `origin`을 사용한다.
- 원격 저장소 주소의 별칭 다른 이름을 부여해도 된다.
- 로컬 컴퓨터의 gitRepository가 저장되어있는 폴더로 들어간다.
- cd ~/doucments/github(예시)