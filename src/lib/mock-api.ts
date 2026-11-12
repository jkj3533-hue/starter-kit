// 데이터 페칭 예제용 가짜 API: 실제 서버 대신 일정 시간 뒤에 데이터를 돌려줍니다.
export type User = {
  id: number;
  name: string;
  email: string;
  company: string;
  city: string;
};

export type Post = {
  id: number;
  userId: number;
  title: string;
};

const users: User[] = [
  { id: 1, name: "김철수", email: "kim@example.com", company: "테크 코퍼레이션", city: "서울" },
  { id: 2, name: "이영희", email: "lee@example.com", company: "디자인 스튜디오", city: "부산" },
  { id: 3, name: "박민수", email: "park@example.com", company: "마케팅 에이전시", city: "대구" },
];

const posts: Post[] = [
  { id: 1, userId: 1, title: "Next.js App Router 시작하기" },
  { id: 2, userId: 2, title: "Tailwind CSS로 빠르게 디자인하기" },
  { id: 3, userId: 3, title: "shadcn/ui 컴포넌트 활용 팁" },
];

// ms 밀리초 동안 기다리는 함수: 네트워크 지연을 흉내 냅니다.
function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchUsers(): Promise<User[]> {
  await wait(800);
  return users;
}

export async function fetchPosts(): Promise<Post[]> {
  await wait(1200);
  return posts;
}

// 일부러 실패하는 요청: 에러 처리 화면을 확인하기 위한 용도입니다.
export async function fetchUsersWithError(): Promise<User[]> {
  await wait(600);
  throw new Error("서버에서 오류가 발생했습니다. (시뮬레이션)");
}
