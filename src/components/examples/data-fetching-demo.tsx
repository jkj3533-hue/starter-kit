"use client";

import { CircleAlert } from "lucide-react";
import { useState, type ReactNode } from "react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  fetchPosts,
  fetchUsers,
  fetchUsersWithError,
  type Post,
  type User,
} from "@/lib/mock-api";

// 요청 한 건의 상태: 아직 안 함 / 불러오는 중 / 성공 / 실패
type RequestState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; message: string };

// 요청을 실행하면서 상태를 알맞게 바꿔 주는 공통 함수
async function runRequest<T>(
  fetcher: () => Promise<T>,
  setState: (state: RequestState<T>) => void,
) {
  setState({ status: "loading" });
  try {
    const data = await fetcher();
    setState({ status: "success", data });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "알 수 없는 오류가 발생했습니다.";
    setState({ status: "error", message });
  }
}

// 상태 이름에 맞는 배지 문구
const statusLabel: Record<RequestState<unknown>["status"], string> = {
  idle: "대기",
  loading: "불러오는 중",
  success: "성공",
  error: "실패",
};

export function DataFetchingDemo() {
  const [usersState, setUsersState] = useState<RequestState<User[]>>({
    status: "idle",
  });
  const [postsState, setPostsState] = useState<RequestState<Post[]>>({
    status: "idle",
  });

  const isBusy =
    usersState.status === "loading" || postsState.status === "loading";

  // 사용자와 게시글을 동시에 요청합니다. (둘 중 오래 걸리는 시간만큼만 기다립니다)
  const handleLoadAll = async () => {
    await Promise.all([
      runRequest(fetchUsers, setUsersState),
      runRequest(fetchPosts, setPostsState),
    ]);
  };

  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle>데이터 컨트롤</CardTitle>
          <CardDescription>
            버튼을 눌러 다양한 데이터 페칭 상황을 확인해 보세요.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            <Button
              disabled={isBusy}
              onClick={() => runRequest(fetchUsers, setUsersState)}
            >
              사용자 로드
            </Button>
            <Button
              disabled={isBusy}
              onClick={() => runRequest(fetchPosts, setPostsState)}
            >
              게시글 로드
            </Button>
            <Button variant="outline" disabled={isBusy} onClick={handleLoadAll}>
              모두 병렬 로드
            </Button>
            <Button
              variant="destructive"
              disabled={isBusy}
              onClick={() => runRequest(fetchUsersWithError, setUsersState)}
            >
              오류 시뮬레이션
            </Button>
          </div>
          <div className="flex flex-wrap gap-2 text-sm">
            <Badge variant="outline">
              사용자: {statusLabel[usersState.status]}
            </Badge>
            <Badge variant="outline">
              게시글: {statusLabel[postsState.status]}
            </Badge>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>사용자 목록</CardTitle>
            <CardDescription>사용자 정보를 불러오는 예제</CardDescription>
          </CardHeader>
          <CardContent>
            <RequestView
              state={usersState}
              emptyText="사용자 로드 버튼을 눌러 보세요."
              renderData={(users) => (
                <ul className="flex flex-col gap-3">
                  {users.map((user) => (
                    <li key={user.id} className="rounded-lg border p-3">
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {user.email}
                      </p>
                      <div className="mt-2 flex gap-2">
                        <Badge variant="secondary">{user.company}</Badge>
                        <Badge variant="secondary">{user.city}</Badge>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>게시글 목록</CardTitle>
            <CardDescription>게시글 데이터를 불러오는 예제</CardDescription>
          </CardHeader>
          <CardContent>
            <RequestView
              state={postsState}
              emptyText="게시글 로드 버튼을 눌러 보세요."
              renderData={(posts) => (
                <ul className="flex flex-col gap-3">
                  {posts.map((post) => (
                    <li key={post.id} className="rounded-lg border p-3">
                      <p className="font-medium">{post.title}</p>
                      <p className="text-sm text-muted-foreground">
                        작성자 번호: {post.userId}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

type RequestViewProps<T> = {
  state: RequestState<T>;
  emptyText: string;
  renderData: (data: T) => ReactNode;
};

// 요청 상태에 따라 알맞은 화면(안내 문구 / 로딩 / 오류 / 데이터)을 골라 보여줍니다.
function RequestView<T>({ state, emptyText, renderData }: RequestViewProps<T>) {
  if (state.status === "idle") {
    return <p className="text-sm text-muted-foreground">{emptyText}</p>;
  }

  if (state.status === "loading") {
    return (
      <div className="flex flex-col gap-3">
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-20 w-full" />
      </div>
    );
  }

  if (state.status === "error") {
    return (
      <Alert variant="destructive">
        <CircleAlert />
        <AlertTitle>불러오지 못했습니다</AlertTitle>
        <AlertDescription>{state.message}</AlertDescription>
      </Alert>
    );
  }

  return <>{renderData(state.data)}</>;
}
